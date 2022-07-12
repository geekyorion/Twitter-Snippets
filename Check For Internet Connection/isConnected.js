/**
 * returns whether user is connected to internet or not
 * @returns {boolean} onLine
 */
const isConnected = () => {
  return window.navigator.onLine;
};
// const isConnected = () => window.navigator.onLine; // one-liner

/*
-    window: a global variable which holds the property of a window in which script is running
- navigator: [read-only] used to retrieve the state of the user agent
-    onLine: boolean value which holds the value of online status of browser

USEFUL LINKS:
  - Window (Interface and window variable): https://developer.mozilla.org/en-US/docs/Web/API/Window
  - Navigator: https://developer.mozilla.org/en-US/docs/Web/API/Navigator
  - onLine [Navigator.onLine]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
*/
