# Chess Board Generation

This project uses a build-time script to generate SVG chess boards from FEN notation, inspired by the [chess-variants-display](https://github.com/arachtivix/chess-variants-display/releases/tag/v0.0.46) Clojure library.

## How It Works

1. **Generation Script**: `scripts/generate-chessboards.js` reads FEN positions and generates responsive SVG files
2. **Storage**: SVG files are saved to `public/chessboards/`
3. **Component Usage**: The `Chessboard` React component loads these pre-generated SVGs
4. **Build Integration**: The script runs automatically during the build process

## Architecture

The approach follows the chess-variants-display library's design:
- **Responsive SVG**: Uses `viewBox` for scalability
- **CSS Styling**: Square and piece colors are styled via CSS classes
- **Unicode Pieces**: Chess pieces are rendered as Unicode characters in SVG text elements

## Adding a New Chess Position

### Step 1: Add the FEN Position

Edit `scripts/generate-chessboards.js` and add your position to the `fenPositions` object:

```javascript
const fenPositions = {
  'endgame-rook-knight-vs-king': '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1',
  // Add your new position here:
  'my-new-position': 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
};
```

### Step 2: Update the Component Mapping

Edit `src/components/Chessboard.jsx` and add the mapping:

```javascript
const FEN_TO_SVG = {
  '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': '/chessboards/endgame-rook-knight-vs-king.svg',
  // Add your new position here:
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1': '/chessboards/my-new-position.svg'
}
```

### Step 3: Generate the SVG

Run the generation script:

```bash
npm run generate-chessboards
```

This will create `public/chessboards/my-new-position.svg`.

### Step 4: Use in Your Component

Now you can use the chessboard in any React component:

```jsx
import Chessboard from './components/Chessboard'

function MyPage() {
  return (
    <div>
      <h2>My Chess Position</h2>
      <Chessboard fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" />
    </div>
  )
}
```

## Customizing Colors

Square and piece colors are defined in `src/components/Chessboard.css`:

```css
.chessboard .dark-square {
  fill: #b58863;  /* Brown */
}

.chessboard .light-square {
  fill: #f0d9b5;  /* Beige */
}

.chessboard .chess-piece {
  font-size: 40px;
  fill: #000000;  /* Black */
}
```

## FEN Notation Reference

FEN (Forsyth-Edwards Notation) is a standard notation for describing chess positions:

- **Pieces**: K=King, Q=Queen, R=Rook, B=Bishop, N=Knight, P=Pawn
- **Color**: Uppercase=White, Lowercase=Black
- **Empty squares**: Numbers 1-8 indicate consecutive empty squares
- **Ranks**: Separated by `/`, starting from rank 8 (top) to rank 1 (bottom)

Example: `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`
- Full starting position
- `w` = white to move
- `KQkq` = castling rights
- `-` = no en passant
- `0 1` = halfmove and fullmove counters

## Build Process

The chess board generation is integrated into the build process:

```json
"scripts": {
  "build": "npm run generate-chessboards && vite build",
  "generate-chessboards": "node scripts/generate-chessboards.js"
}
```

When you run `npm run build`, the chess boards are generated first, then Vite builds the application.

## Testing

Tests use a mocked SVG to avoid fetch issues in the test environment:

```javascript
beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve(mockSVG),
    })
  )
})
```

This allows tests to verify the component behavior without needing actual SVG files.

## Credits

This implementation is inspired by the [chess-variants-display](https://github.com/arachtivix/chess-variants-display) Clojure library by @arachtivix, which provides a clean approach to generating responsive chess board visualizations.
