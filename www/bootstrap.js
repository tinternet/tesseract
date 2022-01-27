Promise.all([window.after_setup, import("./index.js")]).then(([_, mod]) => {
  window.drawTesseract = mod.init({ width: 800, height: 600 });
});
