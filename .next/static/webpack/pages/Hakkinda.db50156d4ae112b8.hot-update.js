/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Hakkinda",{

/***/ "./src/components/PageLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/PageLayout.tsx ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/Hakkinda.tsx":
/*!********************************!*\
  !*** ./src/pages/Hakkinda.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageLayout */ \"./src/components/PageLayout.tsx\");\n/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_PageLayout__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Hakkinda = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_PageLayout__WEBPACK_IMPORTED_MODULE_2___default()), {\n        title: \"Hakkında\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Bu uygulama toplumun markalara ve olan durumlara karşı tepkisini g\\xf6stermek \\xfczere kurulmuştur.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\Hakkinda.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Vallaha billaha bir şeyler yapmaya \\xe7alışıyoruz.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\Hakkinda.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\Hakkinda.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Hakkinda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hakkinda);\nvar _c;\n$RefreshReg$(_c, \"Hakkinda\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSGFra2luZGEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1FLFdBQVc7SUFDZixxQkFDRSw4REFBQ0QsK0RBQVVBO1FBQUNFLE9BQU07OzBCQUNoQiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFJSCw4REFBQ0E7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdUO0tBVk1GO0FBWU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hha2tpbmRhLnRzeD81ZWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxheW91dCc7XHJcblxyXG5jb25zdCBIYWtraW5kYSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXQgdGl0bGU9XCJIYWtrxLFuZGFcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQnUgdXlndWxhbWEgdG9wbHVtdW4gbWFya2FsYXJhIHZlIG9sYW4gZHVydW1sYXJhIGthcsWfxLEgdGVwa2lzaW5pIGfDtnN0ZXJtZWsgw7x6ZXJlXHJcbiAgICAgICAga3VydWxtdcWfdHVyLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlZhbGxhaGEgYmlsbGFoYSBiaXIgxZ9leWxlciB5YXBtYXlhIMOnYWzEscWfxLF5b3J1ei48L3A+XHJcbiAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhha2tpbmRhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdlTGF5b3V0IiwiSGFra2luZGEiLCJ0aXRsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Hakkinda.tsx\n"));

/***/ })

});