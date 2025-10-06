#!/usr/bin/env node

/**
 * Script to generate chessboard SVGs using chess-variants-display tool
 * Uses Babashka with dependency management to run Clojure script
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'chessboards');
const SCRIPT_PATH = path.join(__dirname, 'generate-svg.clj');

// Chess positions to generate (FEN -> filename)
const POSITIONS = {
  '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': 'knight-rook-vs-king.svg'
};


/**
 * Generate SVG using Babashka with chess-variants-display dependency
 */
function generateSVG(fen, outputPath) {
  try {
    console.log(`Generating SVG for position: ${fen}`);
    // Use Babashka with bb.edn for dependency management
    execSync(
      `bb "${SCRIPT_PATH}" "${fen}" "${outputPath}"`,
      { 
        encoding: 'utf8',
        cwd: __dirname,
        stdio: 'inherit'
      }
    );
  } catch (error) {
    console.error(`Error generating SVG: ${error.message}`);
    throw error;
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
