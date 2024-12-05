export const safeViewTransition = (callback: () => void) => () => {
  if ("startViewTransition" in document) {
    document.startViewTransition(callback);
  } else {
    callback();
  }
};
