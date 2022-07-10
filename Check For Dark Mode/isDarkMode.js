const isDarkMode = () => {
  const mediaQuery = '(prefers-color-scheme:dark)';
  return globalThis.matchMedia?.(mediaQuery).matches ?? false;
};

const result = isDarkMode();

// globalThis: global "this" value [we can also use 'window', 'self', etc.]
// mediaQuery: to get the system preference settings like color-scheme,
//             contrast value, reduction-motion, etc.
// ?? (Nullish coalescing operator): reutn RHS value when LHS value is null or undefined

// NOTE: media queries can be used in CSS directly
@media (prefers-color-scheme:dark) {
  /* handle appropriate CSS */
}

// Links for more information:
// 1. globalThis: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
// 2. matchMedia: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// 3. mediaQueries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
