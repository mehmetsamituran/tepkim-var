/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/HomePage",{

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

/***/ "./src/pages/HomePage.tsx":
/*!********************************!*\
  !*** ./src/pages/HomePage.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageLayout */ \"./src/components/PageLayout.tsx\");\n/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_PageLayout__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [modalProps, setModalProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        borderColor: \"\"\n    });\n    const openModal = (title, borderColor)=>{\n        setModalProps({\n            title,\n            borderColor\n        });\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_PageLayout__WEBPACK_IMPORTED_MODULE_3___default()), {\n        title: \"Tepkim Var!\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    gap: \"20px\",\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>openModal(\"Boykot et!\", \"red\"),\n                        style: {\n                            backgroundColor: \"red\",\n                            color: \"white\",\n                            border: \"none\",\n                            padding: \"10px 20px\",\n                            borderRadius: \"5px\",\n                            cursor: \"pointer\",\n                            fontSize: \"16px\"\n                        },\n                        children: \"Boykot Et\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\HomePage.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>openModal(\"Onurlandır!\", \"green\"),\n                        style: {\n                            backgroundColor: \"green\",\n                            color: \"white\",\n                            border: \"none\",\n                            padding: \"10px 20px\",\n                            borderRadius: \"5px\",\n                            cursor: \"pointer\",\n                            fontSize: \"16px\"\n                        },\n                        children: \"Onurlandır\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\HomePage.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\HomePage.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal,\n                title: modalProps.title,\n                borderColor: modalProps.borderColor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\HomePage.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\tepkim-var\\\\src\\\\pages\\\\HomePage.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"Wk1YvkLr0trtqv/4zIkvgg0w0gM=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZVBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNVO0FBRWxELE1BQU1JLFdBQXFCOztJQUN6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDUSxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUVBLE1BQU1DLFlBQVksQ0FBQ0YsT0FBZUM7UUFDaENGLGNBQWM7WUFBRUM7WUFBT0M7UUFBWTtRQUNuQ0osZUFBZTtJQUNqQjtJQUVBLE1BQU1NLGFBQWE7UUFDakJOLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0gsK0RBQVVBO1FBQUNNLE9BQU07OzBCQUNoQiw4REFBQ0k7Z0JBQ0NDLE9BQU87b0JBQ0xDLFNBQVM7b0JBQ1RDLGdCQUFnQjtvQkFDaEJDLEtBQUs7b0JBQ0xDLFdBQVc7Z0JBQ2I7O2tDQUVBLDhEQUFDQzt3QkFDQ0MsU0FBUyxJQUFNVCxVQUFVLGNBQWM7d0JBQ3ZDRyxPQUFPOzRCQUNMTyxpQkFBaUI7NEJBQ2pCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxTQUFTOzRCQUNUQyxjQUFjOzRCQUNkQyxRQUFROzRCQUNSQyxVQUFVO3dCQUNaO2tDQUNEOzs7Ozs7a0NBR0QsOERBQUNSO3dCQUNDQyxTQUFTLElBQU1ULFVBQVUsZUFBZTt3QkFDeENHLE9BQU87NEJBQ0xPLGlCQUFpQjs0QkFDakJDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLFFBQVE7NEJBQ1JDLFVBQVU7d0JBQ1o7a0NBQ0Q7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ3pCLHlEQUFLQTtnQkFDSjBCLFFBQVF2QjtnQkFDUndCLFNBQVNqQjtnQkFDVEgsT0FBT0YsV0FBV0UsS0FBSztnQkFDdkJDLGFBQWFILFdBQVdHLFdBQVc7Ozs7Ozs7Ozs7OztBQUkzQztHQS9ETU47S0FBQUE7QUFpRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWVQYWdlLnRzeD9mODJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQnO1xyXG5cclxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFByb3BzLCBzZXRNb2RhbFByb3BzXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGJvcmRlckNvbG9yOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKHRpdGxlOiBzdHJpbmcsIGJvcmRlckNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgIHNldE1vZGFsUHJvcHMoeyB0aXRsZSwgYm9yZGVyQ29sb3IgfSk7XHJcbiAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dCB0aXRsZT1cIlRlcGtpbSBWYXIhXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgZ2FwOiAnMjBweCcsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKCdCb3lrb3QgZXQhJywgJ3JlZCcpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAyMHB4JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJveWtvdCBFdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCgnT251cmxhbmTEsXIhJywgJ2dyZWVuJyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMjBweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPbnVybGFuZMSxclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHRpdGxlPXttb2RhbFByb3BzLnRpdGxlfVxyXG4gICAgICAgIGJvcmRlckNvbG9yPXttb2RhbFByb3BzLmJvcmRlckNvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYWdlTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiUGFnZUxheW91dCIsIkhvbWVQYWdlIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsIm1vZGFsUHJvcHMiLCJzZXRNb2RhbFByb3BzIiwidGl0bGUiLCJib3JkZXJDb2xvciIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsIm1hcmdpblRvcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJmb250U2l6ZSIsImlzT3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/HomePage.tsx\n"));

/***/ })

});