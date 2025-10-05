#!/usr/bin/env node

/**
 * Chess Board SVG Generator
 * 
 * This script generates SVG chessboard files from FEN notation.
 * Inspired by the chess-variants-display Clojure library:
 * https://github.com/arachtivix/chess-variants-display/releases/tag/v0.0.46
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chess piece Unicode symbols
const PIECES = {
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
};

/**
 * Parse FEN notation to get board position
 */
function parseFEN(fen) {
  const [boardPart] = fen.split(' ');
  const ranks = boardPart.split('/');
  const board = [];
  
  for (let rank of ranks) {
    const row = [];
    for (let char of rank) {
      if (isNaN(char)) {
        // It's a piece
        row.push(char);
      } else {
        // It's a number indicating empty squares
        const emptySquares = parseInt(char);
        for (let i = 0; i < emptySquares; i++) {
          row.push('');
        }
      }
    }
    board.push(row);
  }
  
  return board;
}

/**
 * Generate SVG checkerboard with pieces
 * Following the approach from chess-variants-display library
 */
function generateChessboardSVG(fen, squareSize = 50) {
  const board = parseFEN(fen);
  const width = 8;
  const height = 8;
  const svgWidth = width * squareSize;
  const svgHeight = height * squareSize;
  
  // Generate squares
  const squares = [];
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const isEvenSum = (row + col) % 2 === 0;
      const isDark = isEvenSum; // dark top-left square
      const x = col * squareSize;
      const y = row * squareSize;
      const cssClass = isDark ? 'dark-square' : 'light-square';
      
      squares.push(
        `<rect x="${x}" y="${y}" width="${squareSize}" height="${squareSize}" class="${cssClass}"/>`
      );
    }
  }
  
  // Generate pieces
  const pieces = [];
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const piece = board[row][col];
      if (piece) {
        const x = col * squareSize;
        const y = row * squareSize;
        const textX = x + squareSize / 2;
        const textY = y + squareSize / 2;
        const unicodeChar = PIECES[piece];
        
        pieces.push(
          `<text x="${textX}" y="${textY}" class="chess-piece" text-anchor="middle" dominant-baseline="central">${unicodeChar}</text>`
        );
      }
    }
  }
  
  return `<svg width="100%" height="100%" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
${squares.join('\n')}
${pieces.join('\n')}
</svg>`;
}

/**
 * FEN positions used in the site
 */
const fenPositions = {
  'endgame-rook-knight-vs-king': '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1'
};

// Create output directory
const outputDir = path.join(__dirname, '../public/chessboards');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate SVG for each position
for (const [name, fen] of Object.entries(fenPositions)) {
  const svg = generateChessboardSVG(fen);
  const outputPath = path.join(outputDir, `${name}.svg`);
  fs.writeFileSync(outputPath, svg, 'utf8');
  console.log(`Generated: ${name}.svg`);
}

console.log(`\nSuccessfully generated ${Object.keys(fenPositions).length} chessboard(s) in ${outputDir}`);
