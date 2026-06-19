// Allow TypeScript to resolve CSS module imports in the ui library.
// Vite handles actual style injection at runtime; this just satisfies tsc.
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
