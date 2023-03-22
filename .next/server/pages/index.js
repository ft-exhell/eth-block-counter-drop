"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.JsonRpcProvider(\"https://eth-mainnet.g.alchemy.com/v2/\" + \"Wnul50-fV9MF6m-P14bV2_qznc3Lprfx\");\nconst target = 16890400;\nfunction App() {\n    const [blockNumber, setBlockNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const getBlocknumber = async function() {\n        const data = await provider.getBlock();\n        setBlockNumber(data.number);\n    };\n    setInterval(getBlocknumber, 10000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"100vh\",\n            fontFamily: \"sans-serif\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Current Ethereum Block:\"\n            }, void 0, false, {\n                fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            blockNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blockNumber.toString()\n            }, void 0, false, {\n                fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 25\n            }, this),\n            !blockNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 26\n            }, this),\n            blockNumber && (blockNumber < target ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"The claim is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: \"NOT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 66\n                    }, this),\n                    \" open.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 49\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    color: \"green\"\n                },\n                children: \"The claim is open.\"\n            }, void 0, false, {\n                fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 119\n            }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/toha-kartoha/Desktop/nextsuka/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDUjtBQUVoQyxNQUFNRyxXQUFXLElBQUlELG9FQUFnQyxDQUFDLDBDQUEwQ0ksa0NBQW1DO0FBQ25JLE1BQU1HLFNBQVU7QUFFRCxTQUFTQyxNQUFNO0lBQzVCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQ1k7SUFFL0MsTUFBTUMsaUJBQWlCLGlCQUFpQjtRQUN0QyxNQUFNQyxPQUFPLE1BQU1aLFNBQVNhLFFBQVE7UUFDcENKLGVBQWVHLEtBQUtFLE1BQU07SUFDNUI7SUFFQUMsWUFBWUosZ0JBQWdCO0lBRTVCLHFCQUNFLDhEQUFDSztRQUFJQyxPQUFPO1lBQ1ZDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsUUFBUTtZQUNSQyxZQUFZO1FBQ2Q7OzBCQUNJLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hoQiw2QkFBZSw4REFBQ2dCOzBCQUFJaEIsWUFBWWlCLFFBQVE7Ozs7OztZQUN4QyxDQUFDakIsNkJBQWUsOERBQUNnQjswQkFBRzs7Ozs7O1lBQ3BCaEIsZUFBZ0JBLENBQUFBLGNBQWNGLHVCQUFTLDhEQUFDb0I7O29CQUFHO2tDQUFhLDhEQUFDQzt3QkFBS1YsT0FBTzs0QkFBQ1csT0FBTzt3QkFBSztrQ0FBRzs7Ozs7O29CQUFVOzs7Ozs7cUNBQWMsOERBQUNGO2dCQUFHVCxPQUFPO29CQUFDVyxPQUFPO2dCQUFPOzBCQUFHOzs7OztvQkFBdUI7Ozs7Ozs7QUFHMUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzdWthLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoJ2h0dHBzOi8vZXRoLW1haW5uZXQuZy5hbGNoZW15LmNvbS92Mi8nICsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9LRVkpXG5jb25zdCB0YXJnZXQgID0gMTY4OTA0MDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2Jsb2NrTnVtYmVyLCBzZXRCbG9ja051bWJlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IGdldEJsb2NrbnVtYmVyID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb3ZpZGVyLmdldEJsb2NrKCk7XG4gICAgc2V0QmxvY2tOdW1iZXIoZGF0YS5udW1iZXIpO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoZ2V0QmxvY2tudW1iZXIsIDEwMDAwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZidcbiAgICB9fT5cbiAgICAgICAgPGgxPkN1cnJlbnQgRXRoZXJldW0gQmxvY2s6PC9oMT5cbiAgICAgICAge2Jsb2NrTnVtYmVyICYmIDxoMT57YmxvY2tOdW1iZXIudG9TdHJpbmcoKX08L2gxPn1cbiAgICAgICAgeyFibG9ja051bWJlciAmJiA8aDE+TG9hZGluZy4uLjwvaDE+fVxuICAgICAgICB7YmxvY2tOdW1iZXIgJiYgKGJsb2NrTnVtYmVyIDwgdGFyZ2V0ID8gPGgyPlRoZSBjbGFpbSBpcyA8c3BhbiBzdHlsZT17e2NvbG9yOiAncmVkJ319Pk5PVDwvc3Bhbj4gb3Blbi48L2gyPiA6IDxoMiBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+VGhlIGNsYWltIGlzIG9wZW4uPC9oMj4pfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BTENIRU1ZX0tFWSIsInRhcmdldCIsIkFwcCIsImJsb2NrTnVtYmVyIiwic2V0QmxvY2tOdW1iZXIiLCJ1bmRlZmluZWQiLCJnZXRCbG9ja251bWJlciIsImRhdGEiLCJnZXRCbG9jayIsIm51bWJlciIsInNldEludGVydmFsIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZvbnRGYW1pbHkiLCJoMSIsInRvU3RyaW5nIiwiaDIiLCJzcGFuIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();