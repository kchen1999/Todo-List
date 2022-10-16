/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n.header {\\n    background-color: #86efac;\\n    height: 7.5vh; \\n}\\n\\n.main {\\n    height: 92.5vh; \\n    display: flex; \\n}\\n\\n.side-menu {\\n    font-family: 'Montserrat', sans-serif;\\n    width: 21vw;\\n    background-color: #f3f4f6;\\n    padding: 30px; \\n    display: flex;\\n    flex-direction: column;\\n    min-width: 250px;\\n}\\n\\n.side-menu-btn {\\n    padding: 12px 9px;\\n    display: flex;\\n    gap: 16px; \\n    font-size: 1.1rem;\\n    cursor: pointer;\\n    min-width: 170px; \\n}\\n\\n\\n.project-input {\\n    height: 36px; \\n    width: 100%; \\n    padding-left: 12px; \\n}\\n\\n.cancel-btn, .add-btn {\\n    padding: 5px 18px; \\n    width: 50%; \\n    font-size: 1.2rem;\\n    color: black;\\n    border-radius: 4px;\\n    border-style: solid;\\n}\\n\\n.cancel-btn {\\n    background-color: #fecaca;\\n    border-color: #fecaca;\\n}\\n\\n.add-btn {\\n    background-color: #bbf7d0;\\n    border-color: #bbf7d0;\\n}\\n\\n.add-cancel {\\n    margin-top: 12px;\\n    display: flex;\\n    gap: 12px; \\n}\\n\\n.projects-header {\\n    padding-top: 9px;\\n    padding-bottom: 9px;\\n    font-size: 1.6rem; \\n    font-weight: bolder;\\n    cursor: pointer;\\n\\n}\\n\\n.side-menu-btn:hover {\\n    background-color: #f9fafb;\\n    border-radius: 2px;\\n}\\n\\n.container {\\n    width: 79vw;\\n    padding: 48px;  \\n    display: flex;\\n    flex-direction: column;\\n    gap: 6px; \\n}\\n\\n.main-header {\\n    font-family: 'Montserrat', sans-serif;\\n    font-size: 27px; \\n    font-weight: bolder;\\n}\\n\\n.new-task {\\n    font-family: 'Montserrat', sans-serif;\\n    width: 100%;\\n    display: flex;\\n    gap: 16px; \\n    padding: 12px 9px;\\n    font-size: 1.1rem;\\n    cursor: pointer;\\n}\\n\\n.new-task:hover {\\n    background-color: #f3f4f6;\\n    border-radius: 2px;\\n}\\n\\n.new-task > img {\\n    width: 24px; \\n    height: 24px; \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadInbox\": () => (/* binding */ loadInbox)\n/* harmony export */ });\nfunction loadInbox() {\n  const container = document.querySelector('.container');\n  const mainHeader = document.createElement('p');\n  mainHeader.textContent = 'Inbox';\n  mainHeader.classList.add('main-header');\n  container.append(mainHeader);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/inbox.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sidemenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidemenu.js */ \"./src/sidemenu.js\");\n\n\nfunction createHeader() {\n  const header = document.createElement('div');\n  header.classList.add('header');\n  return header;\n}\n\nfunction createMain() {\n  const main = document.createElement('div');\n  main.classList.add('main');\n  const container = document.createElement('div');\n  container.classList.add('container');\n  main.append((0,_sidemenu_js__WEBPACK_IMPORTED_MODULE_0__.loadSideMenu)());\n  main.append(container);\n  return main;\n}\n\nfunction loadPage() {\n  const content = document.getElementById('content');\n  content.append(createHeader());\n  content.append(createMain());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://todo-list/./src/page.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectBtn\": () => (/* binding */ addProjectBtn),\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"clearProjectBtn\": () => (/* binding */ clearProjectBtn),\n/* harmony export */   \"clearProjectForm\": () => (/* binding */ clearProjectForm),\n/* harmony export */   \"loadProject\": () => (/* binding */ loadProject),\n/* harmony export */   \"showProjectBtn\": () => (/* binding */ showProjectBtn),\n/* harmony export */   \"showProjectForm\": () => (/* binding */ showProjectForm)\n/* harmony export */ });\n/* harmony import */ var _format_list_bulleted_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-list-bulleted.png */ \"./src/format-list-bulleted.png\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n/* harmony import */ var _sidemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu */ \"./src/sidemenu.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nfunction loadProject(e) {\n  (0,_sidemenu__WEBPACK_IMPORTED_MODULE_2__.clearContainer)();\n  const container = document.querySelector('.container');\n  const mainHeader = document.createElement('p');\n  mainHeader.textContent = e.currentTarget.textContent;\n  mainHeader.classList.add('main-header');\n  container.append(mainHeader);\n  (0,_task__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();\n  (0,_sidemenu__WEBPACK_IMPORTED_MODULE_2__.setActiveBtn)(e.currentTarget);\n}\n\nfunction clearProjectBtn() {\n  const addProjectsBtn = document.querySelector('.new-project');\n  addProjectsBtn.style.display = 'none';\n}\n\nfunction showProjectBtn() {\n  const addProjectsBtn = document.querySelector('.new-project');\n  addProjectsBtn.style.display = 'flex';\n}\n\nfunction addProjectBtn() {\n  const addProjectsBtn = document.createElement('div');\n  addProjectsBtn.classList.add('new-project');\n  const addProjectsTxt = document.createElement('p');\n  const addProjectsImg = document.createElement('img');\n  addProjectsImg.src = _plus_png__WEBPACK_IMPORTED_MODULE_1__;\n  addProjectsTxt.textContent = 'New Project';\n  addProjectsBtn.classList.add('side-menu-btn');\n  addProjectsBtn.append(addProjectsImg);\n  addProjectsBtn.append(addProjectsTxt);\n  return addProjectsBtn;\n}\n\nfunction clearProjectForm() {\n  const projectForm = document.querySelector('.project-form');\n  projectForm.style.display = 'none';\n}\n\nfunction addNewProject() {\n  clearProjectForm();\n  const sideMenu = document.querySelector('.side-menu');\n  const projectNameInput = document.querySelector('.project-input');\n  const addProjectsBtn = document.querySelector('.new-project');\n  const newProject = document.createElement('div');\n  const newProjectTxt = document.createElement('text');\n  const newProjectImg = document.createElement('img');\n  newProjectTxt.textContent = projectNameInput.value; \n  newProjectImg.src = _format_list_bulleted_png__WEBPACK_IMPORTED_MODULE_0__;\n  newProject.classList.add('side-menu-btn');\n  newProject.classList.add('project');\n  newProject.append(newProjectImg);\n  newProject.append(newProjectTxt);\n  newProject.addEventListener('click', loadProject);\n  sideMenu.insertBefore(newProject, addProjectsBtn);\n  projectNameInput.value = ''; \n  showProjectBtn();\n}\n\nfunction cancelProject() {\n  clearProjectForm();\n  const projectNameInput = document.querySelector('.project-input');\n  projectNameInput.value = ''; \n  showProjectBtn();\n}\n\nfunction showProjectForm() {\n  const projectForm = document.querySelector('.project-form');\n  projectForm.style.display = 'block';\n  const addBtn = document.querySelector('.add-btn');\n  const cancelBtn = document.querySelector('.cancel-btn');\n  addBtn.addEventListener('click', addNewProject);\n  cancelBtn.addEventListener('click', cancelProject);\n}\n\nfunction addProjectForm() {\n  const container = document.createElement('div');\n  container.classList.add('project-form');\n  const input = document.createElement('input');\n  const addCancel = document.createElement('div');\n  const addBtn = document.createElement('button');\n  const cancelBtn = document.createElement('button');\n  addBtn.textContent = 'Add';\n  cancelBtn.textContent = 'Cancel';\n  addBtn.classList.add('add-btn');\n  cancelBtn.classList.add('cancel-btn');\n  input.type = 'text';\n  input.id = 'project-name';\n  input.name = 'project-name';\n  input.minlength = 1;\n  input.classList.add('project-input');\n  addCancel.classList.add('add-cancel');\n  addCancel.append(addBtn);\n  addCancel.append(cancelBtn);\n  container.append(input);\n  container.append(addCancel);\n  return container;\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ \"./src/page.js\");\n \n \n\n(0,_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); \n\n\n//# sourceURL=webpack://todo-list/./src/script.js?");

/***/ }),

/***/ "./src/sidemenu.js":
/*!*************************!*\
  !*** ./src/sidemenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearContainer\": () => (/* binding */ clearContainer),\n/* harmony export */   \"loadSideMenu\": () => (/* binding */ loadSideMenu),\n/* harmony export */   \"setActiveBtn\": () => (/* binding */ setActiveBtn)\n/* harmony export */ });\n/* harmony import */ var _inbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.png */ \"./src/inbox.png\");\n/* harmony import */ var _calendar_today_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-today.png */ \"./src/calendar-today.png\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n\n\n\n\n\nfunction setActiveBtn(btn) {\n  const btns = document.querySelectorAll('.side-menu-btn');\n  [...btns].forEach((button) => {\n    if (button.classList.contains('active')) {\n      button.classList.remove('active');\n    }\n  });\n  btn.classList.add('active');\n}\n\nfunction clearContainer() {\n  const container = document.querySelector('.container');\n  container.replaceChildren();\n}\n\nfunction loadSideMenu() {\n  const sideMenu = document.createElement('div');\n  sideMenu.classList.add('side-menu');\n\n  const inboxBtn = document.createElement('div');\n  const inboxTxt = document.createElement('p');\n\n  const todayBtn = document.createElement('div');\n  const todayTxt = document.createElement('p');\n\n  const projectsHeader = document.createElement('div');\n  const projectsTxt = document.createElement('p');\n\n  const inboxImg = document.createElement('img');\n  const todayImg = document.createElement('img');\n\n  inboxImg.src = _inbox_png__WEBPACK_IMPORTED_MODULE_0__;\n  todayImg.src = _calendar_today_png__WEBPACK_IMPORTED_MODULE_1__;\n\n  inboxTxt.textContent = 'Inbox';\n  todayTxt.textContent = 'Today';\n  projectsTxt.textContent = 'Projects';\n\n  inboxBtn.classList.add('side-menu-btn');\n  todayBtn.classList.add('side-menu-btn');\n  projectsHeader.classList.add('projects-header');\n\n  inboxBtn.append(inboxImg);\n  inboxBtn.append(inboxTxt);\n\n  todayBtn.append(todayImg);\n  todayBtn.append(todayTxt);\n\n  projectsHeader.append(projectsTxt);\n\n  sideMenu.append(inboxBtn);\n  sideMenu.append(todayBtn);\n  sideMenu.append(projectsHeader);\n\n  const newProjectBtn = (0,_projects__WEBPACK_IMPORTED_MODULE_5__.addProjectBtn)();\n  sideMenu.append(newProjectBtn);\n\n  const newProjectForm = (0,_projects__WEBPACK_IMPORTED_MODULE_5__.addProjectForm)();\n  newProjectForm.style.display = 'none';\n  sideMenu.append(newProjectForm);\n\n  inboxBtn.addEventListener('click', () => {\n    if (inboxBtn.classList.contains('active')) {\n      return;\n    }\n    clearContainer();\n    (0,_inbox__WEBPACK_IMPORTED_MODULE_3__.loadInbox)();\n    setActiveBtn(inboxBtn);\n  });\n\n  todayBtn.addEventListener('click', () => {\n    if (todayBtn.classList.contains('active')) {\n      return;\n    }\n    clearContainer();\n    (0,_today__WEBPACK_IMPORTED_MODULE_4__.loadToday)();\n    setActiveBtn(todayBtn);\n  });\n\n  newProjectBtn.addEventListener('click', () => {\n    (0,_projects__WEBPACK_IMPORTED_MODULE_5__.clearProjectBtn)();\n    (0,_projects__WEBPACK_IMPORTED_MODULE_5__.showProjectForm)();\n  });\n\n  return sideMenu;\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/sidemenu.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n/* harmony import */ var _plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-circle-outline.png */ \"./src/plus-circle-outline.png\");\n\n\n\n/*const toDo = (title, dueDate) => {\n  const title = title;\n  const dueDate = dueDate;\n\n  const getTitle = () => title;\n  const getDueDate = () => dueDate;\n\n  const setTitle = (title) => title = title;\n  const setDueDate = (dueDate) => dueDate = dueDate;\n\n  return {\n    getTitle, getDueDate, setTitle, setDueDate};\n}; */\n\nfunction addTasksForm() {\n  const container = document.createElement('div');\n  container.classList.add('task-form');\n  const input = document.createElement('input');\n  const addCancel = document.createElement('div');\n  const addBtn = document.createElement('button');\n  const cancelBtn = document.createElement('button');\n  addBtn.textContent = 'Add';\n  cancelBtn.textContent = 'Cancel';\n  addBtn.classList.add('add-btn');\n  cancelBtn.classList.add('cancel-btn');\n  input.type = 'text';\n  input.id = 'task-name';\n  input.name = 'task-name';\n  input.minlength = 1;\n  input.classList.add('project-input');\n  addCancel.classList.add('add-cancel');\n  addCancel.append(addBtn);\n  addCancel.append(cancelBtn);\n  container.append(input);\n  container.append(addCancel);\n  return container;\n}\n\nfunction addTasksBtn() {\n  const addTaskBtn = document.createElement('div');\n  addTaskBtn.classList.add('new-task');\n  const addTaskTxt = document.createElement('p');\n  const addTaskImg = document.createElement('img');\n  addTaskImg.src = _plus_png__WEBPACK_IMPORTED_MODULE_0__;\n  addTaskTxt.textContent = 'New Task';\n  addTaskBtn.classList.add('task-btn');\n  addTaskBtn.append(addTaskImg);\n  addTaskBtn.append(addTaskTxt);\n  return addTaskBtn;\n}\n\nfunction clearTasksBtn() {\n  const taskBtn = document.querySelector('.task-btn');\n  taskBtn.style.display = 'none';\n}\n\nfunction clearTasksForm() {\n  const taskForm = document.querySelector('.task-form');\n  taskForm.style.display = 'none';\n}\n\nfunction showTasksBtn() {\n  const taskBtn = document.querySelector('.task-btn');\n  taskBtn.style.display = 'flex';\n}\n\nfunction addTask() {\n  clearTasksForm(); \n  const container = document.querySelector('.container');\n  const taskNameInput = container.querySelector('.project-input');\n  const addTaskBtn = document.querySelector('.task-btn');\n  const newTask = document.createElement('div');\n  newTask.classList.add('new-task');\n  const newTaskImg = document.createElement('img');\n  const newTaskTxt = document.createElement('p');\n  newTaskImg.src = _plus_circle_outline_png__WEBPACK_IMPORTED_MODULE_1__;\n  newTaskTxt.textContent = taskNameInput.value; \n  newTask.append(newTaskImg);\n  newTask.append(newTaskTxt);\n  container.insertBefore(newTask, addTaskBtn);\n  taskNameInput.value = ''; \n  showTasksBtn(); \n}\n\nfunction cancelTask() {\n  clearTasksForm(); \n  const container = document.querySelector('.container');\n  const taskNameInput = container.querySelector('.project-input');\n  taskNameInput.value = ''; \n  showTasksBtn(); \n}\n\nfunction showTasksForm() {\n  const taskForm = document.querySelector('.task-form');\n  const addBtn = taskForm.querySelector('.add-btn');\n  const cancelBtn = taskForm.querySelector('.cancel-btn');\n  taskForm.style.display = 'block';\n  addBtn.addEventListener('click', addTask);\n  cancelBtn.addEventListener('click', cancelTask);\n}\n\n\nfunction loadTasks() {\n  const container = document.querySelector('.container');\n  const newTaskBtn = addTasksBtn();\n  container.append(newTaskBtn);\n\n  const newTaskForm = addTasksForm();\n  newTaskForm.style.display = 'none';\n  container.append(newTaskForm);\n\n  newTaskBtn.addEventListener('click', () => {\n    clearTasksBtn();\n    showTasksForm();\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadToday\": () => (/* binding */ loadToday)\n/* harmony export */ });\nfunction loadToday() {\n  const container = document.querySelector('.container');\n  const mainHeader = document.createElement('p');\n  mainHeader.textContent = 'Today';\n  mainHeader.classList.add('main-header');\n  container.append(mainHeader);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/calendar-today.png":
/*!********************************!*\
  !*** ./src/calendar-today.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5868e0a8ebff01398b5.png\";\n\n//# sourceURL=webpack://todo-list/./src/calendar-today.png?");

/***/ }),

/***/ "./src/format-list-bulleted.png":
/*!**************************************!*\
  !*** ./src/format-list-bulleted.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74b08051be03d3c2de5c.png\";\n\n//# sourceURL=webpack://todo-list/./src/format-list-bulleted.png?");

/***/ }),

/***/ "./src/inbox.png":
/*!***********************!*\
  !*** ./src/inbox.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fbd9a72456a05b18afa1.png\";\n\n//# sourceURL=webpack://todo-list/./src/inbox.png?");

/***/ }),

/***/ "./src/plus-circle-outline.png":
/*!*************************************!*\
  !*** ./src/plus-circle-outline.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ef7ab3bbe6f8182d71e.png\";\n\n//# sourceURL=webpack://todo-list/./src/plus-circle-outline.png?");

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17cc0a74a5d5bab927c5.png\";\n\n//# sourceURL=webpack://todo-list/./src/plus.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;