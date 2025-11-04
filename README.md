# Numbr Playground

This repository is a fork of [antonmedv/numbr](https://github.com/antonmedv/numbr) with a focus on providing a standalone playground for the Numbr language. You can run it locally with hot reload during development or export a fully static bundle that works entirely offline in a browser.

##

Demo: https://gustavotrott.github.io/numbr/dist/

## Requirements

- Node.js 18+
- npm

Install dependencies once:

```bash
npm install
```

## Available Commands

| Command | Description |
| --- | --- |
| `npm test` | Run the TypeScript test suite (AVA). |
| `npm run build:runtime` | Bundle the evaluator into `public/numbr.js` for development. |
| `npm run serve` | Build the runtime bundle and start the hot-reload server on `http://localhost:3000`. |
| `npm run build:static` | Produce a self-contained `dist/` folder that you can open directly in a browser. |

## Development Workflow

1. Install dependencies (`npm install`).
2. Start the playground with hot reload:

   ```bash
   npm run serve
   ```

   This command automatically bundles `public/numbr.js` and runs the development server with file watching. Open `http://localhost:3000` to start using the editor. Any edits to the codebase trigger hot reload in the browser.

3. Run tests whenever you modify the evaluator:

   ```bash
   npm test
   ```

## Building a Static Bundle

You can generate an offline-friendly bundle that does not require any server-side code.

```bash
npm run build:static
```

This command creates a `dist/` directory containing:

- `index.html`
- `numbr.js` (the bundled evaluator)
- Additional static assets copied from `public/`

Open `dist/index.html` directly in your browser (double-click or drag-and-drop into a tab). The runtime executes entirely in the browser and persists your number format preference and last edited document using `localStorage`.

## Notes

- The evaluator supports locale-aware input/output. Use the **Format** dropdown in the editor to switch between `1,234.56` and `1.234,56` styles. The choice is stored in `localStorage`.
- When using the hot-reload server the page falls back to `/evaluate` while waiting for the runtime bundle. The static build relies solely on the bundled runtime and does not perform any network requests.

## License

The project inherits the MIT license from the original Numbr repository.
