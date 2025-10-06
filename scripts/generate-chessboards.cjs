#!/usr/bin/env node

/**
 * Script to generate chessboard SVGs using chess-variants-display tool
 * Downloads the JAR from GitHub releases and generates SVG files for chess positions
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHESS_VARIANTS_VERSION = '0.0.50';
const JAR_URL = `https://github.com/arachtivix/chess-variants-display/releases/download/v${CHESS_VARIANTS_VERSION}/chess-variants-display-${CHESS_VARIANTS_VERSION}.jar`;
const JAR_PATH = path.join(__dirname, `chess-variants-display-${CHESS_VARIANTS_VERSION}.jar`);
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'chessboards');

// Chess positions to generate (FEN -> filename)
const POSITIONS = {
  '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': 'knight-rook-vs-king.svg'
};

/**
 * Download the chess-variants-display JAR file from GitHub releases
 */
function downloadJar() {
  if (fs.existsSync(JAR_PATH)) {
    console.log(`JAR file already exists: ${JAR_PATH}`);
    return;
  }
  
  console.log(`Downloading chess-variants-display v${CHESS_VARIANTS_VERSION} JAR...`);
  console.log(`From: ${JAR_URL}`);
  
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(JAR_PATH);
    https.get(JAR_URL, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          if (redirectResponse.statusCode !== 200) {
            reject(new Error(`Failed to download JAR: ${redirectResponse.statusCode}`));
            return;
          }
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`JAR downloaded successfully to ${JAR_PATH}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlinkSync(JAR_PATH);
          reject(err);
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`JAR downloaded successfully to ${JAR_PATH}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download JAR: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlinkSync(JAR_PATH);
      reject(err);
    });
  });
}



/**
 * Generate SVG using the chess-variants-display JAR file
 */
function generateSVG(fen, outputPath) {
  // Create a Clojure script to generate the SVG with inline styles
  // Use the library's fen->pieces function to parse FEN notation
  const clojureScript = `(require '[chess-variants-display.core :as cvd])

(def pieces (cvd/fen->pieces "${fen}"))

(def svg-content (cvd/checkerboard-with-pieces 8 8 :dark pieces))

;; Add CSS styling directly to the SVG by inserting after the opening tag
(def styled-svg
  (clojure.string/replace-first svg-content
    #"<svg[^>]*>"
    (fn [match]
      (str (clojure.string/replace match #">" "")
           "><defs><style type=\\"text/css\\"><![CDATA[.dark-square { fill: #b58863; } .light-square { fill: #f0d9b5; } .chess-piece { font-size: 40px; fill: #000000; user-select: none; }]]></style></defs>"))))

(print styled-svg)
`;

  const scriptPath = path.join(__dirname, 'temp-gen.clj');
  fs.writeFileSync(scriptPath, clojureScript);
  
  try {
    console.log(`Generating SVG for position: ${fen}`);
    // Use -Sdeps to add the JAR to the classpath
    const depsEdn = `{:paths ["${JAR_PATH}"]}`;
    const svg = execSync(
      `clojure -Sdeps '${depsEdn}' -M -e "(load-file \\"${scriptPath}\\")"`,
      { encoding: 'utf8' }
    );
    
    fs.writeFileSync(outputPath, svg);
    console.log(`Generated: ${outputPath}`);
  } catch (error) {
    console.error(`Error generating SVG: ${error.message}`);
    throw error;
  } finally {
    // Clean up temp script
    if (fs.existsSync(scriptPath)) {
      fs.unlinkSync(scriptPath);
    }
  }
}

/**
 * Main function
 */
async function main() {
  try {
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Download chess-variants-display JAR
    await downloadJar();
    
    // Generate SVGs for each position
    for (const [fen, filename] of Object.entries(POSITIONS)) {
      const outputPath = path.join(OUTPUT_DIR, filename);
      generateSVG(fen, outputPath);
    }
    
    console.log('\nAll chessboard SVGs generated successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
