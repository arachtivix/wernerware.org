#!/usr/bin/env node

/**
 * Script to generate chessboard SVGs using chess-variants-display tool
 * Downloads the source and generates SVG files for chess positions
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHESS_VARIANTS_VERSION = '0.0.46';
const CHESS_VARIANTS_SHA = 'dd1912a50247d72180ec2d6ae726dbbb8e1a2a10';
const REPO_DIR = path.join(__dirname, 'chess-variants-display');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'chessboards');

// Chess positions to generate (FEN -> filename)
const POSITIONS = {
  '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': 'knight-rook-vs-king.svg'
};

/**
 * Clone or update the chess-variants-display repository
 */
function setupRepository() {
  if (!fs.existsSync(REPO_DIR)) {
    console.log('Cloning chess-variants-display repository...');
    execSync(`git clone https://github.com/arachtivix/chess-variants-display.git ${REPO_DIR}`, {
      stdio: 'inherit'
    });
  }
  
  console.log(`Checking out version ${CHESS_VARIANTS_VERSION}...`);
  execSync(`cd ${REPO_DIR} && git checkout ${CHESS_VARIANTS_SHA}`, {
    stdio: 'inherit'
  });
}

/**
 * Parse FEN and convert to piece map for Clojure
 */
function fenToPieceMap(fen) {
  const [boardPart] = fen.split(' ');
  const ranks = boardPart.split('/');
  const pieces = [];
  
  for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
    let fileIndex = 0;
    for (let char of ranks[rankIndex]) {
      if (isNaN(char)) {
        // It's a piece - convert to Clojure keyword
        const pieceKeyword = fenCharToKeyword(char);
        pieces.push(`[${rankIndex} ${fileIndex}] :${pieceKeyword}`);
        fileIndex++;
      } else {
        // It's a number indicating empty squares
        fileIndex += parseInt(char);
      }
    }
  }
  
  return `{${pieces.join(' ')}}`;
}

/**
 * Convert FEN piece character to chess-variants-display keyword
 */
function fenCharToKeyword(char) {
  const isWhite = char === char.toUpperCase();
  const color = isWhite ? 'white' : 'black';
  const pieceMap = {
    'K': 'king', 'Q': 'queen', 'R': 'rook',
    'B': 'bishop', 'N': 'knight', 'P': 'pawn'
  };
  const pieceName = pieceMap[char.toUpperCase()];
  return `${color}-${pieceName}`;
}

/**
 * Generate SVG using the chess-variants-display Clojure source
 */
function generateSVG(fen, outputPath) {
  const pieceMap = fenToPieceMap(fen);
  
  // Create a Clojure script to generate the SVG with inline styles
  const clojureScript = `(require '[chess-variants-display.core :as cvd])

(def pieces ${pieceMap})

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
    const svg = execSync(
      `cd ${REPO_DIR} && clojure -M -e "(load-file \\"${scriptPath}\\")"`,
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
    
    // Setup chess-variants-display repository
    setupRepository();
    
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
