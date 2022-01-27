(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/tesseract.js":
/*!***************************!*\
  !*** ../pkg/tesseract.js ***!
  \***************************/
/*! exports provided: Tesseract, __wbg_stroke_5f6b7487500bef3a, __wbg_strokeWeight_780cc051fc1aa619, __wbg_point_0a94628b129ab10b, __wbg_line_dc15b42171c6b164, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tesseract_bg.wasm */ \"../pkg/tesseract_bg.wasm\");\n/* harmony import */ var _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tesseract_bg.js */ \"../pkg/tesseract_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tesseract\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Tesseract\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_5f6b7487500bef3a\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stroke_5f6b7487500bef3a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_strokeWeight_780cc051fc1aa619\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_strokeWeight_780cc051fc1aa619\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_point_0a94628b129ab10b\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_point_0a94628b129ab10b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_line_dc15b42171c6b164\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_line_dc15b42171c6b164\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _tesseract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/tesseract.js?");

/***/ }),

/***/ "../pkg/tesseract_bg.js":
/*!******************************!*\
  !*** ../pkg/tesseract_bg.js ***!
  \******************************/
/*! exports provided: Tesseract, __wbg_stroke_5f6b7487500bef3a, __wbg_strokeWeight_780cc051fc1aa619, __wbg_point_0a94628b129ab10b, __wbg_line_dc15b42171c6b164, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tesseract\", function() { return Tesseract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_5f6b7487500bef3a\", function() { return __wbg_stroke_5f6b7487500bef3a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_strokeWeight_780cc051fc1aa619\", function() { return __wbg_strokeWeight_780cc051fc1aa619; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_point_0a94628b129ab10b\", function() { return __wbg_point_0a94628b129ab10b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_line_dc15b42171c6b164\", function() { return __wbg_line_dc15b42171c6b164; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tesseract_bg.wasm */ \"../pkg/tesseract_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Tesseract {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Tesseract.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_tesseract_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Tesseract}\n    */\n    static new(width, height) {\n        var ret = _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tesseract_new\"](width, height);\n        return Tesseract.__wrap(ret);\n    }\n    /**\n    * @param {number} zoom\n    */\n    zoom(zoom) {\n        _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tesseract_zoom\"](this.ptr, zoom);\n    }\n    /**\n    * @param {number} angle\n    */\n    rotate(angle) {\n        _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tesseract_rotate\"](this.ptr, angle);\n    }\n    /**\n    */\n    draw() {\n        _tesseract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tesseract_draw\"](this.ptr);\n    }\n}\n\nfunction __wbg_stroke_5f6b7487500bef3a(arg0, arg1) {\n    stroke(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbg_strokeWeight_780cc051fc1aa619 = typeof strokeWeight == 'function' ? strokeWeight : notDefined('strokeWeight');\n\nconst __wbg_point_0a94628b129ab10b = typeof point == 'function' ? point : notDefined('point');\n\nconst __wbg_line_dc15b42171c6b164 = typeof line == 'function' ? line : notDefined('line');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/tesseract_bg.js?");

/***/ }),

/***/ "../pkg/tesseract_bg.wasm":
/*!********************************!*\
  !*** ../pkg/tesseract_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __wbg_tesseract_free, tesseract_new, tesseract_zoom, tesseract_rotate, tesseract_draw */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./tesseract_bg.js */ \"../pkg/tesseract_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/tesseract_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var tesseract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract */ \"../pkg/tesseract.js\");\n\n\nfunction init({ width, height }) {\n    const tesseract = tesseract__WEBPACK_IMPORTED_MODULE_0__[\"Tesseract\"].new(width, height);\n    return (distance, speed) => {\n        tesseract.rotate(speed);\n        tesseract.zoom(distance);\n        tesseract.draw();\n    };\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);