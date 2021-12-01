(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/nprogress.css */ "./src/styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
  showSpinner: false,
  trickleRate: 0.02,
  trickleSpeed: 800
});
function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    router.events.on("routeChangeStart", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());
    router.events.on("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
    router.events.on("routeChangeError", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
    return () => {
      router.events.off("routeChangeStart", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());
      router.events.off("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
      router.events.off("routeChangeError", () => nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
    };
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/nprogress.css":
/*!**********************************!*\
  !*** ./src/styles/nprogress.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUUsMERBQUEsQ0FBb0I7QUFDbkJFLEVBQUFBLFdBQVcsRUFBRSxLQURNO0FBRW5CQyxFQUFBQSxXQUFXLEVBQUUsSUFGTTtBQUduQkMsRUFBQUEsWUFBWSxFQUFFO0FBSEssQ0FBcEI7QUFNZSxTQUFTQyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkQsUUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUF4QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZlUsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDLE1BQU1WLHNEQUFBLEVBQTNDO0FBQ0FRLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNVixxREFBQSxFQUE5QztBQUNBUSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTVYscURBQUEsRUFBM0M7QUFFQSxXQUFPLE1BQU07QUFDWlEsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNJLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDLE1BQU1iLHNEQUFBLEVBQTVDO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSSxHQUFkLENBQWtCLHFCQUFsQixFQUF5QyxNQUFNYixxREFBQSxFQUEvQztBQUNBUSxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0ksR0FBZCxDQUFrQixrQkFBbEIsRUFBc0MsTUFBTWIscURBQUEsRUFBNUM7QUFDQSxLQUpEO0FBS0EsR0FWUSxFQVVOLENBQUNRLE1BQUQsQ0FWTSxDQUFUO0FBWUEsc0JBQU8sOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRzVCRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZXZlbHkvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9zdHlsZXMvbnByb2dyZXNzLmNzcyIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiXHJcblxyXG5uUHJvZ3Jlc3MuY29uZmlndXJlKHtcclxuXHRzaG93U3Bpbm5lcjogZmFsc2UsXHJcblx0dHJpY2tsZVJhdGU6IDAuMDIsXHJcblx0dHJpY2tsZVNwZWVkOiA4MDAsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gblByb2dyZXNzLnN0YXJ0KCkpXHJcblx0XHRyb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBuUHJvZ3Jlc3MuZG9uZSgpKVxyXG5cdFx0cm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4gblByb2dyZXNzLmRvbmUoKSlcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRyb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gblByb2dyZXNzLnN0YXJ0KCkpXHJcblx0XHRcdHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBuUHJvZ3Jlc3MuZG9uZSgpKVxyXG5cdFx0XHRyb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4gblByb2dyZXNzLmRvbmUoKSlcclxuXHRcdH1cclxuXHR9LCBbcm91dGVyXSlcclxuXHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG4iLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsInRyaWNrbGVSYXRlIiwidHJpY2tsZVNwZWVkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=