/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    margin: 0; 
    overflow: hidden;
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}

body {
    height: 100%;
    width: 100%;
    display: flex;
    
    justify-content: center;
    gap: clamp(2em, 4em, 6em);
    align-items: center;
    background-color: #f4f4f9;
}

.UI-window {
    width: min(50vh, 40vw);
    flex: none;
    aspect-ratio: 9 / 16;
}

.title-holder {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Inputs styling */

#inputs-container {
    /* background-color: rgb(210, 210, 210); */

    display: grid;
    grid-template-rows: 2fr 2fr 10fr 2fr;
}

#char-count {
    font-size: 3vh;
}

.span-holder {
    grid-row: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.words-holder {
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

form {
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 1%;
    /* display: grid;
    grid-template-rows: repeat(11, 1fr);
    row-gap: 3px; */
}

.words-holder .button-holder {
    height: 10%;
}

form .input-holder {
    /* grid-row: 1 / 2 */
    height: 9%;
}

.button-holder {
    display: flex;
    justify-content: center;
    align-items: center;
}

#inputs-container .button-holder {
    grid-row: -2 / -1;
}

#inputs-container .title-holder {
    grid-row: 1 / 2;
}

.input-holder {
    /* background-color: azure; */
    justify-content: space-evenly;
    align-items: stretch;
    display: flex;
}

.input-holder div {
    align-content: center;
    font-size: xx-large;
    font-weight: 400;
}

.input-holder input {
    max-width: 90%;
    flex: 1;
    font-size: xx-large;
    text-align: center;
}

.run {
    flex: none;
    padding: 2em;
    aspect-ratio: 9 / 2;

    font-size: 1vw;
    font-weight: 500;
}


/* Board styling */

#board-container {
    /* background-color: rgb(255, 0, 170); */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#board-container .title-holder {
    height: calc(100% / 8);
}

.board {
    /* background-color: red; */
    padding: 5px;
    display: grid;
    grid-template: repeat(8, 1fr) / repeat(6, 1fr);
    gap: 5px;
}

.mini {
    /* background-color: white; */
    aspect-ratio: 1;
}

.letter {
    font-size: xx-large;
    font-weight: 600;
}

/* .word-0 {
    background-color: yellow;
} */

.line {
    position: absolute;
    background-color: rgba(112, 186, 255, 0.8);
    z-index: -1;
}

.circle {
    position: absolute;
    background-color: rgb(112, 186, 255);
    z-index: -1;
}
/* body {
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template: 1fr 1fr 800px 1fr / 1fr 600px 1fr;
}
#run {
    grid-area: 2 / 2 / 3 / 3;
}

#container {
    grid-area: 3 / 2 / 4 / 3;
    background-color: red;

    padding: 5px;

    display: grid;
    grid-template: repeat(8, 1fr) / repeat(6, 1fr);
    gap: 5px;
}
*/
.mini {
    /* background-color: white; */
    display: flex;
    justify-content: center;
    align-items: center;
}

/*.letter {
    font-size: xx-large;
    font-weight: 800;
} */


.line {
    position: absolute;
    background-color: rgba(112, 186, 255, 0.8);
    z-index: -1;
}

.circle {
    position: absolute;
    background-color: rgb(112, 186, 255);
    z-index: -1;
}

@media screen and (max-width: 768px) {

    .input-holder div {
        font-size: large;
        font-weight: 400;
    }

    .letter {
        font-size: large;
    }
   
    .UI-window {
        width: 90vw;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,gBAAgB;IAChB,mFAAmF;AACvF;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;;IAEb,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,mBAAmB;;AAEnB;IACI,0CAA0C;;IAE1C,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP;;mBAEe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,OAAO;IACP,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;;IAEnB,cAAc;IACd,gBAAgB;AACpB;;;AAGA,kBAAkB;;AAElB;IACI,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,8CAA8C;IAC9C,QAAQ;AACZ;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;GAEG;;AAEH;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;AACf;AACA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;GAGG;;;AAGH;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;AACf;;AAEA;;IAEI;QACI,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,WAAW;IACf;AACJ","sourcesContent":["html, body {\n    margin: 0; \n    overflow: hidden;\n    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    \n    justify-content: center;\n    gap: clamp(2em, 4em, 6em);\n    align-items: center;\n    background-color: #f4f4f9;\n}\n\n.UI-window {\n    width: min(50vh, 40vw);\n    flex: none;\n    aspect-ratio: 9 / 16;\n}\n\n.title-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Inputs styling */\n\n#inputs-container {\n    /* background-color: rgb(210, 210, 210); */\n\n    display: grid;\n    grid-template-rows: 2fr 2fr 10fr 2fr;\n}\n\n#char-count {\n    font-size: 3vh;\n}\n\n.span-holder {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.words-holder {\n    grid-row: 3 / 4;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\nform {\n    height: 90%;\n    display: flex;\n    flex-direction: column;\n    gap: 1%;\n    /* display: grid;\n    grid-template-rows: repeat(11, 1fr);\n    row-gap: 3px; */\n}\n\n.words-holder .button-holder {\n    height: 10%;\n}\n\nform .input-holder {\n    /* grid-row: 1 / 2 */\n    height: 9%;\n}\n\n.button-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#inputs-container .button-holder {\n    grid-row: -2 / -1;\n}\n\n#inputs-container .title-holder {\n    grid-row: 1 / 2;\n}\n\n.input-holder {\n    /* background-color: azure; */\n    justify-content: space-evenly;\n    align-items: stretch;\n    display: flex;\n}\n\n.input-holder div {\n    align-content: center;\n    font-size: xx-large;\n    font-weight: 400;\n}\n\n.input-holder input {\n    max-width: 90%;\n    flex: 1;\n    font-size: xx-large;\n    text-align: center;\n}\n\n.run {\n    flex: none;\n    padding: 2em;\n    aspect-ratio: 9 / 2;\n\n    font-size: 1vw;\n    font-weight: 500;\n}\n\n\n/* Board styling */\n\n#board-container {\n    /* background-color: rgb(255, 0, 170); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n#board-container .title-holder {\n    height: calc(100% / 8);\n}\n\n.board {\n    /* background-color: red; */\n    padding: 5px;\n    display: grid;\n    grid-template: repeat(8, 1fr) / repeat(6, 1fr);\n    gap: 5px;\n}\n\n.mini {\n    /* background-color: white; */\n    aspect-ratio: 1;\n}\n\n.letter {\n    font-size: xx-large;\n    font-weight: 600;\n}\n\n/* .word-0 {\n    background-color: yellow;\n} */\n\n.line {\n    position: absolute;\n    background-color: rgba(112, 186, 255, 0.8);\n    z-index: -1;\n}\n\n.circle {\n    position: absolute;\n    background-color: rgb(112, 186, 255);\n    z-index: -1;\n}\n/* body {\n    width: 100vw;\n    height: 100vh;\n\n    display: grid;\n    grid-template: 1fr 1fr 800px 1fr / 1fr 600px 1fr;\n}\n#run {\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n#container {\n    grid-area: 3 / 2 / 4 / 3;\n    background-color: red;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template: repeat(8, 1fr) / repeat(6, 1fr);\n    gap: 5px;\n}\n*/\n.mini {\n    /* background-color: white; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/*.letter {\n    font-size: xx-large;\n    font-weight: 800;\n} */\n\n\n.line {\n    position: absolute;\n    background-color: rgba(112, 186, 255, 0.8);\n    z-index: -1;\n}\n\n.circle {\n    position: absolute;\n    background-color: rgb(112, 186, 255);\n    z-index: -1;\n}\n\n@media screen and (max-width: 768px) {\n\n    .input-holder div {\n        font-size: large;\n        font-weight: 400;\n    }\n\n    .letter {\n        font-size: large;\n    }\n   \n    .UI-window {\n        width: 90vw;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board-builder.js":
/*!******************************!*\
  !*** ./src/board-builder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildBoard)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/board.js");




function buildBoard(words){
    if (!checkValid(words))
        return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;

    let current = [[words, emptyBoard()]];
    const wordList = [];
    let isSpan = true; // true for first call, then set to false

    while (current.length > 0) {
        let upNext = [];
        for (const subBoard of current) {

            let theBoard = new _board_js__WEBPACK_IMPORTED_MODULE_1__["default"](subBoard[0], subBoard[1], isSpan);
            isSpan = false;
            let newWord = theBoard.getWord();

            const newSubBoards = theBoard.getSubBoards();
            if (!newWord[0].pos)
                return buildBoard(words);
            for (const newSubBoard of newSubBoards)
                upNext.push(newSubBoard);
            wordList.push(newWord);
        }
        current = upNext.filter((element) => element.length > 0); // filter prevents empty subBoards from being added
    }

    return wordList;
}


function checkValid(words) {
    let result = (words[0].length >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL);
    result = (result && words.slice(1).reduce((value, currentWord) => value && (currentWord.length >= 4), true));
    const charSum = words.reduce((total, currentWord) => total + currentWord.length, 0);
    result = (result && (charSum === (_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL * _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW)));
    
    return result;
}

function emptyBoard() {
    let emptyBoard = [];
    for (let i = 0; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW; i++) {
        for (let j = 0; j < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL; j++) {
            emptyBoard.push([i,j]);
        }
    }
    return emptyBoard;
}

// function printSubBoard(openSpaces) {
//     const arr = Array.from({ length: 8 }, () => Array(6).fill('1'));

//     for (const space of openSpaces)
//         arr[space[0]][space[1]] = '0';

//     let string = '';
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 6; j++) {
//             string += `${arr[i][j]}, `
//         }
//         string += '\n';
//     }
//     console.log(string);
// }

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _spanagram_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spanagram.js */ "./src/spanagram.js");



let letterCounter = 0;
const STARTCOUNTERMAX = 500;
const LETTERCOUNTERMAX = 1000;

class Board {
    constructor(words, openSpaces, isSpan = false) {
        this.spaces = Array.from({ length: _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW }, () => Array(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL).fill(_constants_js__WEBPACK_IMPORTED_MODULE_0__.TAKEN));
        this.size = 0;
        this.isSpan = isSpan;
        this.spanagramManager = null;

        this.#clearSpaces(openSpaces);

        this.word = words[0];
        this.laterWords = words.slice(1);
        this.subBoards = [];

        this.placementManager = this.#placementManager();
        this.wordPos = this.#placeWord();
    }

    getSubBoards() {
        return this.subBoards;
    }

    getWord() {
        let i = 0;
        const result = [];
        while (i < this.word.length) {
            result.push({pos: this.wordPos[i], letter: this.word[i]});
            i++;
        }
        return result;
    }

    printBoard() {
        let string = '';
        for (let i = 0; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW; i++) {
            for (let j = 0; j < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL; j++) {
                string += `${this.spaces[i][j] ? 1 : 0}, `
            }
            string += '\n';
        }
        console.log(string);
    }

    #clearSpaces(openSpaces) {
        for (let coords of openSpaces) {
            this.spaces[coords[0]][coords[1]] = _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN;
            this.size++;
        }
    }

    #fillSpace(position) {
        this.spaces[position[0]][position[1]] = _constants_js__WEBPACK_IMPORTED_MODULE_0__.TAKEN;
    }

    #clearSpace(position) {
        this.spaces[position[0]][position[1]] = _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN;
    }

    #getNeighbors(i, j) {
        let neighbors = [];
        if ((j - 1 >= 0) && (this.spaces[i][j - 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
            neighbors.push([i, j - 1])
        if ((j + 1 < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL) && (this.spaces[i][j + 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
            neighbors.push([i, j + 1])
        if (i - 1 >= 0) {
            if (this.spaces[i - 1][j] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN)
                neighbors.push([i - 1, j])
            if ((j - 1 >= 0) && (this.spaces[i - 1][j - 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
                neighbors.push([i - 1, j - 1])
            if ((j + 1 < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL) && (this.spaces[i - 1][j + 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
                neighbors.push([i - 1, j + 1])
        }
        if (i + 1 < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW) {
            if (this.spaces[i + 1][j] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN)
                neighbors.push([i + 1, j])
            if ((j - 1 >= 0) && (this.spaces[i + 1][j - 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
                neighbors.push([i + 1, j - 1])
            if ((j + 1 < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL) && (this.spaces[i + 1][j + 1] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN))
                neighbors.push([i + 1, j + 1])
        }
        return neighbors;
    }

    #getOpenSpaces() {
        const openSpaces = [];
        for (let i = 0; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW; i++){
            for (let j = 0; j < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL; j++) {
                if (this.spaces[i][j] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN)
                    openSpaces.push([i,j]);
            }
        }
        return openSpaces;
    }

    #getSubBoard(i, j) {
        let available = [[i, j]];
        this.spaces[i][j] = _constants_js__WEBPACK_IMPORTED_MODULE_0__.TAKEN;
        let current = [[i, j]];
        while (current.length > 0) {
            let upNext = [];
            for (let coord of current) {
                const neighbors = this.#getNeighbors(coord[0], coord[1]);
                for (let neighbor of neighbors) {
                    upNext.push(neighbor);
                    this.#fillSpace(neighbor);
                    available.push(neighbor);
                }
            }
            current = upNext;
        }
        return available;
    }

    #buildSubBoards() {
        const subBoards = [];
        const openSpaces = this.#getOpenSpaces();

        for (let i = 0; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW; i++) {
            for (let j = 0; j < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXCOL; j++) {
                if (this.spaces[i][j] === _constants_js__WEBPACK_IMPORTED_MODULE_0__.OPEN)
                    subBoards.push(this.#getSubBoard(i, j));
            }
        }

        for (const space of openSpaces)
            this.#clearSpace(space);

        return subBoards;
    }

    #checkViableSubBoards() {
        const subBoards = this.#buildSubBoards();
        let words = [];
        for (const word of this.laterWords)
            words.push(word);
        const subBoardList = [];

        for (const subBoard of subBoards) {
            const size = subBoard.length; // subBoard is list of open spaces
            const wordList = findMatchingSizes(size, words); // array of lengths of words that fit into subBoard
            if (wordList.length === 0)
                return false;
            subBoardList.push([wordList, subBoard]);
            words = words.filter(element => !wordList.includes(element));
        }

        this.subBoards = subBoardList;
        return true;
    }

    #placementManager() {
        if (this.isSpan) {
            this.spanagramManager = new _spanagram_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.word);
            return {
                trySpace: (position) => {
                    this.spanagramManager.incrementTargets(position);
                    this.#fillSpace(position)
                },
                failSpace: (position) => {
                    this.spanagramManager.decrementTargets(position);
                    this.#clearSpace(position)
                },
                checkViable: (position, subWordLength) => {return this.spanagramManager.checkViable(position, subWordLength)},
                getViableNeighbors: (position) => {return randomize(this.#getNeighbors(position[0], position[1]))},
                getStarts: () => {return randomize(this.#getOpenSpaces())},
                checkViableFinal: () => {return ((this.laterWords.length === 0) || this.#checkViableSubBoards())}
            }
        }
        return {
            trySpace: (position) => {this.#fillSpace(position)},
            failSpace: (position) => {this.#clearSpace(position)},
            checkViable: (position, subWordLength) => {return true},
            getViableNeighbors: (position) => {return randomize(this.#getNeighbors(position[0], position[1]))},
            getStarts: () => {return randomize(this.#getOpenSpaces())},
            checkViableFinal: () => {return ((this.laterWords.length === 0) || this.#checkViableSubBoards())}
        }
    }

    #placeWord() {
        const starts = this.placementManager.getStarts();
        const startsLength = starts.length;

        let startCounter = 0;
        while (startCounter < STARTCOUNTERMAX) {
            letterCounter = 0;
            const start = starts[startCounter % startsLength];
            const result = this.#placeLetter(start, this.word);
            if (result != _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED)
                return result;
            startCounter++;
        }

        return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;
    }

    #placeLetter(position, subWord) {
        if (letterCounter > LETTERCOUNTERMAX)
            return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;
        letterCounter++;

        this.placementManager.trySpace(position);
        if (!this.placementManager.checkViable(position, subWord.length)) {
            this.placementManager.failSpace(position);
            return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;
        }

        if (subWord.length === 1) {
            if (this.placementManager.checkViableFinal())
                return [position];
            else {
                this.placementManager.failSpace(position);
                return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;
            }
        }

        const openNeighbors = this.placementManager.getViableNeighbors(position);
        for (const neighbor of openNeighbors) {
            const result = this.#placeLetter(neighbor, subWord.slice(1));
            if (result != _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED)
                return [position].concat(result);
        }

        this.placementManager.failSpace(position);
        return _constants_js__WEBPACK_IMPORTED_MODULE_0__.FAILED;
    }
}

function randomize(array) {
    for (var i = array.length - 1; i > 0; i--) { 
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
}

function findMatchingSizes(size, words) {
    const wordSet = words.reduce((subsets, value) => 
        subsets.concat(subsets.map(set => [value, ...set])), 
        [[]]);

    for (let subset of wordSet) {
        if (size === sumWordLengths(subset)) {
            return subset;
        }
    }
    return [];
}

function sumWordLengths(words) {
    let sum = 0;
    for (const word of words)
        sum += word.length;
    return sum;
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOTTOM: () => (/* binding */ BOTTOM),
/* harmony export */   FAILED: () => (/* binding */ FAILED),
/* harmony export */   HORIZONTAL: () => (/* binding */ HORIZONTAL),
/* harmony export */   LEFT: () => (/* binding */ LEFT),
/* harmony export */   MAXCOL: () => (/* binding */ MAXCOL),
/* harmony export */   MAXROW: () => (/* binding */ MAXROW),
/* harmony export */   OPEN: () => (/* binding */ OPEN),
/* harmony export */   RIGHT: () => (/* binding */ RIGHT),
/* harmony export */   TAKEN: () => (/* binding */ TAKEN),
/* harmony export */   TOP: () => (/* binding */ TOP),
/* harmony export */   VERTICAL: () => (/* binding */ VERTICAL)
/* harmony export */ });
const HORIZONTAL = 'h';
const VERTICAL = 'v';

const TOP = 't';
const BOTTOM = 'b';
const LEFT = 'l';
const RIGHT = 'r';

const TAKEN = true;
const OPEN = false;

const MAXROW = 8;
const MAXCOL = 6;

const FAILED = -1;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWords)
/* harmony export */ });
function displayWords(wordList, isMobile = false) {
    renderWords(wordList, isMobile);
}

let isSpan = true;
const color = `145, 255, 112`;

function renderWords(wordList, isMobile) {

    let radius = 30;
    let height = 20;

    if (isMobile) {
        console.log('small');
        radius = 20;
        height = 15;
    }

    const container = document.querySelector('.board');
    isSpan = true;

    clearGrid();

    let wordNum = 0;
    for (const word of wordList) {
        let prev = null;

        for (const letter of word) {
            const i = letter.pos[0];
            const j = letter.pos[1];
            const mini = container.querySelector(`#mini-${i * 6 + j}`);
            const letterHolder = document.createElement('div');
            letterHolder.classList.add('letter', `word-${wordNum}`);
            letterHolder.innerText = letter.letter.toUpperCase();
            mini.appendChild(letterHolder);

            drawCircle(mini, radius);

            if (prev)
                drawLineBetweenPoints(prev, mini, height);
            prev = mini;
        }

        isSpan = false;

    }
}

function clearGrid() {
    const minis = document.querySelectorAll('.mini');
    for (const mini of minis)
        mini.innerHTML = '';

    const lines = document.querySelectorAll('.line');
    for (const line of lines)
        line.remove();

    const circles = document.querySelectorAll('.circle');
    for (const circle of circles)
        circle.remove();
}

function drawLineBetweenPoints(gridItem1, gridItem2, height) {
    // console.log(gridItem1);
    // console.log(gridItem1.getBoundingClientRect());
    const start = gridItem1.getBoundingClientRect();
    const end = gridItem2.getBoundingClientRect();

    // Calculate the difference in x and y coordinates
    const deltaX = getCenter(end)[0] - getCenter(start)[0];
    const deltaY = getCenter(end)[1] - getCenter(start)[1];

    // Calculate the length of the line (using the distance formula)
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Calculate the angle of the line
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    // Create a line element
    const line = document.createElement('div');
    line.className = 'line';
    line.style.width = `${length}px`;
    line.style.height = `${height}px`;

    // Position the line at the starting point
    line.style.top = `${(start.top + start.bottom - height) / 2 + window.scrollY}px`;
    line.style.left = `${(start.left + start.right) / 2 + window.scrollX}px`;
    line.style.transformOrigin = 'left';
    line.style.transform = `rotate(${angle}deg)`;

    if (isSpan)
        line.style.backgroundColor = `rgba(${color}, 0.8)`;

    // Append the line to the grid container
    document.querySelector('.board').appendChild(line);
}

function drawCircle(gridItem, radius) {
    console.log('called');
    // console.log(gridItem);
    // console.log(gridItem.getBoundingClientRect());
    const center = getCenter(gridItem.getBoundingClientRect());
    // console.log(center);
    const circle = document.createElement('div');

    circle.classList = 'circle';
    circle.style.width = `${2*radius}px`;
    circle.style.height = `${2*radius}px`;
    circle.style.borderRadius = `100%`;
    circle.style.top = `${center[1] - radius + window.scrollY}px`;
    circle.style.left = `${center[0] - radius + window.scrollX}px`;

    if (isSpan)
        circle.style.backgroundColor = `rgba(${color}, 1)`;

    // console.log(circle.style.top);
    document.querySelector('.board').appendChild(circle);
}

function getCenter(rectangle) {
    const x = (rectangle.left + rectangle.right) / 2;
    const y = (rectangle.top + rectangle.bottom) / 2;

    return [x, y];
}

// function buildGrid(wordList) {
//     const arr = Array.from({ length: 8 }, () => Array(6).fill('0'));
//     let wordNum = 0;
//     for (const word of wordList) {
//         for (const letter of word) {
//             if (!letter.pos)
//                 console.log(`Word: ${word.reduce((toPrint, x) => toPrint + x.letter, '')},  ${word.reduce((toPrint, x) => toPrint + String(x.pos), '')}`);
//             const i = letter.pos[0];
//             const j = letter.pos[1];
//             arr[i][j] = ([wordNum, letter.letter]);
//         }
//         wordNum++;
//     }

//     return arr;
// }

// function printWords(wordList) {

//     let wordGrid = buildGrid(wordList);

//     let string = '';
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 6; j++) {
//             string += `${wordGrid[i][j][1]}, `
//         }
//         string += '\n';
//     }
//     console.log(string);
// }

/***/ }),

/***/ "./src/new.js":
/*!********************!*\
  !*** ./src/new.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadGameGenerator)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _board_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board-builder */ "./src/board-builder.js");



function loadGameGenerator() {

    const body = document.querySelector('body');
    body.innerHTML = '';

    if (checkMobile())
        loadMobile();

    else
        loadDesktop();
}



function loadDesktop() {

    const body = document.querySelector('body');
    const inputsContainer = buildInputsContainer();
    const boardContainer = buildBoardContainer();


    body.appendChild(inputsContainer);
    body.appendChild(boardContainer);

    const generateButton = document.querySelector('.run');
    generateButton.addEventListener('click', () => {
        const result = generateBoard();
        if (result === null)
            return;

        (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_board_builder__WEBPACK_IMPORTED_MODULE_1__["default"])(result));
    });
    
}

function loadMobile() {

    const body = document.querySelector('body');
    const inputsContainer = buildInputsContainer();
    const boardContainer = buildBoardContainer();

    inputsContainer.style.width = `90vw`;


    body.appendChild(inputsContainer);
    const generateButton = document.querySelector('.run');
    generateButton.addEventListener('click', () => {
        const result = generateBoard();
        if (!result)
            return;

        body.innerHTML = '';
        body.appendChild(boardContainer);
        let board = (0,_board_builder__WEBPACK_IMPORTED_MODULE_1__["default"])(result)
        ;(0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])(board, true);

        const regenerateButton = document.querySelector('.run');
        regenerateButton.addEventListener('click', () => {
            board = (0,_board_builder__WEBPACK_IMPORTED_MODULE_1__["default"])(result);
            (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])(board, true);
        });

        window.addEventListener('resize', () => {
            (0,_display__WEBPACK_IMPORTED_MODULE_0__["default"])(board, true);
        });
    });
}



function buildInputsContainer() {
    const container = buildContainer();
    container.id = 'inputs-container';

    const titleHolder = buildTitleHolder('input-side');
    container.appendChild(titleHolder);

    container.appendChild(buildSpanHolder());

    const wordsHolder = document.createElement('div');
    wordsHolder.classList.add('words-holder');

    const form = document.createElement('form');
    form.id = "words-form";
    const addWordHolder = buildButtonHolder();
    const addWordButton = document.createElement('button');
    addWordButton.innerText = 'Add Word';
    addWordButton.id = "add-word";

    addWordButton.addEventListener('click', () => {
        // const addTo = document.querySelector('form');
        const i = form.querySelectorAll('.input-holder').length + 1;
        if(i > 10)
            return;
        form.appendChild(buildInput(i));
    });

    addWordHolder.appendChild(addWordButton);
    wordsHolder.appendChild(addWordHolder);
    wordsHolder.appendChild(form);
    container.appendChild(wordsHolder);

    const buttonHolder = buildButtonHolder();
    buttonHolder.appendChild(buildGenerateButton());
    container.appendChild(buttonHolder);

    return container;
}

function buildSpanHolder() {
    const spanHolder = document.createElement('div');
    spanHolder.classList.add('span-holder');
    const charCount = document.createElement('div');
    charCount.id = 'char-count';
    charCount.innerText = `Total Characters: 0/48`;
    spanHolder.appendChild(charCount);

    spanHolder.appendChild(buildInput('span'));

    return spanHolder;
}

function buildButtonHolder() {
    const buttonHolder = document.createElement('div');
    buttonHolder.classList.add('button-holder');
    
    return buttonHolder;
}

function buildTitleHolder(name) {
    const titleHolder = document.createElement('div');
    titleHolder.classList.add('title-holder');
    titleHolder.appendChild(buildTitleInput(name));
    
    return titleHolder;
}

function buildInput(num) {
    const inputHolder = document.createElement('div');
    inputHolder.classList.add('input-holder');
    const input = document.createElement(`input`);
    input.type = "text";
    input.id = `input-${num}`; 
    input.name = `input-${num}`;
    input.minLength = (num === 'span' ? '6' : '4');
    input.maxLength = '48';
    input.pattern = "[A-Za-z]+";
    if (num === 'span')
        input.setAttribute('required', true);

    const charDisplay = document.createElement(`div`);
    charDisplay.id = `input${num}-count`;
    charDisplay.innerText = '0';

    input.addEventListener('input', () => {
        charDisplay.innerText = input.value.length;

        const allInputs = document.querySelectorAll('input');
        let sum = 0;
        for (const thisInput of allInputs) {
            sum += thisInput.value.length;
        }
        document.querySelector('#char-count').innerText = `Total Characters: ${sum}/48`;
    });

    inputHolder.appendChild(input);
    inputHolder.appendChild(charDisplay);

    return inputHolder;
}

function buildBoardContainer() {
    const container = buildContainer();
    container.id = 'board-container';

    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < 48; i++) {
        const mini = document.createElement('div');
        mini.classList = 'mini';
        mini.id = `mini-${i}`;
        board.appendChild(mini);
    };

    const titleHolder = buildTitleHolder('board-side'); 
    container.appendChild(titleHolder);

    container.appendChild(board);

    const buttonHolder = buildButtonHolder();
    buttonHolder.appendChild(buildGenerateButton());
    container.appendChild(buttonHolder);

    return container;
}

function buildTitleInput(name) {
    const titleInput = document.createElement('textarea');
    titleInput.classList.add('title-input');
    titleInput.style.flex = '1';
    titleInput.style.resize = 'none';
    titleInput.id = name;
    return titleInput;
}

function buildContainer() {
    const container = document.createElement('div');
    container.classList.add('UI-window');
    return container;
}

function checkMobile() {
    return (window.innerWidth < 768); // 768px is Tablet width according to Chrome dev
}

function buildGenerateButton() {
    const button = document.createElement('button');
    button.className = 'run';
    button.innerText = 'Generate';

    return button;
}

function generateBoard() {
    if (!checkInputs())
        return;

    const wordInputs = document.querySelectorAll('input');

    const words = [];
    for (const word of wordInputs) {
        if (word.value != '')
            words.push(word.value);
    }

    window.removeEventListener('resize',() => {});

    return words;

}

function checkInputs() {
    let charSum = 0;
    const span = document.querySelector('#input-span');
    if (span) {
        if (span.value.length < 6 || !/^([a-zA-Z]+)$/.test(span.value))
            return false;
        charSum += span.value.length;
    }

    const words = document.querySelectorAll('form input');
    for (const word of words) {
        if (word.value.length > 0 && (word.value.length < 4 || !/^([a-zA-Z]+)$/.test(word.value)))
            return false;
        charSum += word.value.length;
    }

    return (charSum === 48);
}

/***/ }),

/***/ "./src/spanagram.js":
/*!**************************!*\
  !*** ./src/spanagram.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spanagram)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");


class Spanagram {

    constructor(word) {
        this.option = _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL;
        if (word.length >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAXROW)
            this.option = coinflip(_constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL, _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL);

        this.targets = [];
        if (this.option === _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL) {
            this.targets.push(new Target(coinflip(_constants_js__WEBPACK_IMPORTED_MODULE_0__.LEFT, _constants_js__WEBPACK_IMPORTED_MODULE_0__.RIGHT)));
            this.targets.push(new Target(getOpposite(this.targets[0].type)));
        }
        else {
            this.targets.push(new Target(coinflip(_constants_js__WEBPACK_IMPORTED_MODULE_0__.TOP, _constants_js__WEBPACK_IMPORTED_MODULE_0__.BOTTOM)));
            this.targets.push(new Target(getOpposite(this.targets[0].type)));
        }
    }

    // biasCalculator(pos, remaining) {
    //     const val = (this.option === VERTICAL ? pos[0] : pos[1]);
    //     let distance = 0;
    //     if (this.targets.length === 0)
    //         return 0;
    //     let target = this.targets[0];
    //     if (this.targets.length === 2) {
    //         distance += (this.targets[0] - this.targets[1]);
    //     } 
    //     distance += target - val;

    //     return (distance / remaining);
    // }

    checkViable(pos, lengthRemaining) {
        let distance = 0;
        const relevantDim = (this.option === _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL ? pos[0] : pos[1]);

        if (!this.targets[0].isMet())
            distance = Math.abs(this.targets[0].getVal() - this.targets[1].getVal()) + Math.abs(relevantDim - this.targets[0].getVal());
        
        else if (!this.targets[1].isMet())
            distance = Math.abs(relevantDim - this.targets[1].getVal());

        return (lengthRemaining > distance);
    }

    incrementTargets(pos) {
        const relevantDim = (this.option === _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL ? pos[0] : pos[1]);

        if (relevantDim === this.targets[0].getVal())
            this.targets[0].incrementCount();
        else if (this.targets[0].isMet() && (relevantDim === this.targets[1].getVal()))
            this.targets[1].incrementCount();
    }

    decrementTargets(pos) {
        const relevantDim = (this.option === _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL ? pos[0] : pos[1]);

        if (relevantDim === this.targets[0].getVal())
            this.targets[0].decrementCount();
        else if (this.targets[0].isMet() && (relevantDim === this.targets[1].getVal()))
            this.targets[1].decrementCount();
    }
}

class Target {
    constructor(type) {
        this.type = type;
        this.count = 0;
    }

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        this.count--;
    }

    isMet() {
        return (this.count > 0);
    }

    getVal() {
        switch (this.type) {
            case _constants_js__WEBPACK_IMPORTED_MODULE_0__.TOP: return 0;
    
            case _constants_js__WEBPACK_IMPORTED_MODULE_0__.BOTTOM: return 7;
    
            case _constants_js__WEBPACK_IMPORTED_MODULE_0__.LEFT: return 0;
    
            case _constants_js__WEBPACK_IMPORTED_MODULE_0__.RIGHT: return 5;
        }
    }
}

function coinflip(option1, option2) {
    return (Math.floor(Math.random() * 2) === 0 ? option1 : option2);
}

function getOpposite(constant) {
    switch (constant) {
        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL;

        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.VERTICAL: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.HORIZONTAL;

        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.TOP: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.BOTTOM;

        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.BOTTOM: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.TOP;

        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.LEFT: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.RIGHT;

        case _constants_js__WEBPACK_IMPORTED_MODULE_0__.RIGHT: return _constants_js__WEBPACK_IMPORTED_MODULE_0__.LEFT;
    }
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _board_builder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-builder.js */ "./src/board-builder.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _new_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new.js */ "./src/new.js");






(0,_new_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

window.addEventListener('resize', () => {
    (0,_new_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

// for (let i = 0; i < 48; i++) {
//     const mini = document.createElement('div');
//     mini.classList = 'mini';
//     mini.id = `mini-${i}`;
//     container.appendChild(mini);
// };


let emptyBoard = [];
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
        emptyBoard.push([i,j]);
    }
}


// const runButton = document.querySelector('#run');

// runButton.addEventListener('click', () => {
//     window.removeEventListener('resize',() => {});
//     const wordList = buildBoard(words);
//     displayWords(wordList);
//     window.addEventListener('resize', () => {
//         displayWords(wordList);
//     });
// });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxL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aUJBQWlCLGdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEscURBQVUsU0FBUyxtREFBUTs7QUFFeEMsYUFBYSxtREFBUSxTQUFTLHFEQUFVOztBQUV4QyxhQUFhLDhDQUFHLFNBQVMsaURBQU07O0FBRS9CLGFBQWEsaURBQU0sU0FBUyw4Q0FBRzs7QUFFL0IsYUFBYSwrQ0FBSSxTQUFTLGdEQUFLOztBQUUvQixhQUFhLGdEQUFLLFNBQVMsK0NBQUk7QUFDL0I7QUFDQTs7Ozs7O1VDbkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNVO0FBQ2E7QUFDSjtBQUNDOztBQUV6QyxtREFBaUI7O0FBRWpCO0FBQ0EsSUFBSSxtREFBaUI7QUFDckIsQ0FBQzs7QUFFRCxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTs7O0FBR0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvYm9hcmQtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvbmV3LmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL3NyYy9zcGFuYWdyYW0uanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogY2xhbXAoMmVtLCA0ZW0sIDZlbSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY5O1xufVxuXG4uVUktd2luZG93IHtcbiAgICB3aWR0aDogbWluKDUwdmgsIDQwdncpO1xuICAgIGZsZXg6IG5vbmU7XG4gICAgYXNwZWN0LXJhdGlvOiA5IC8gMTY7XG59XG5cbi50aXRsZS1ob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogSW5wdXRzIHN0eWxpbmcgKi9cblxuI2lucHV0cy1jb250YWluZXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTsgKi9cblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDEwZnIgMmZyO1xufVxuXG4jY2hhci1jb3VudCB7XG4gICAgZm9udC1zaXplOiAzdmg7XG59XG5cbi5zcGFuLWhvbGRlciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud29yZHMtaG9sZGVyIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3B4O1xufVxuXG5mb3JtIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxJTtcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xuICAgIHJvdy1nYXA6IDNweDsgKi9cbn1cblxuLndvcmRzLWhvbGRlciAuYnV0dG9uLWhvbGRlciB7XG4gICAgaGVpZ2h0OiAxMCU7XG59XG5cbmZvcm0gLmlucHV0LWhvbGRlciB7XG4gICAgLyogZ3JpZC1yb3c6IDEgLyAyICovXG4gICAgaGVpZ2h0OiA5JTtcbn1cblxuLmJ1dHRvbi1ob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2lucHV0cy1jb250YWluZXIgLmJ1dHRvbi1ob2xkZXIge1xuICAgIGdyaWQtcm93OiAtMiAvIC0xO1xufVxuXG4jaW5wdXRzLWNvbnRhaW5lciAudGl0bGUtaG9sZGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5pbnB1dC1ob2xkZXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGF6dXJlOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dC1ob2xkZXIgZGl2IHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5wdXQtaG9sZGVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucnVuIHtcbiAgICBmbGV4OiBub25lO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDkgLyAyO1xuXG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4vKiBCb2FyZCBzdHlsaW5nICovXG5cbiNib2FyZC1jb250YWluZXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDE3MCk7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jYm9hcmQtY29udGFpbmVyIC50aXRsZS1ob2xkZXIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC8gOCk7XG59XG5cbi5ib2FyZCB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg4LCAxZnIpIC8gcmVwZWF0KDYsIDFmcik7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5taW5pIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgICBhc3BlY3QtcmF0aW86IDE7XG59XG5cbi5sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogLndvcmQtMCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSAqL1xuXG4ubGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxODYsIDI1NSwgMC44KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDE4NiwgMjU1KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cbi8qIGJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDgwMHB4IDFmciAvIDFmciA2MDBweCAxZnI7XG59XG4jcnVuIHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG59XG5cbiNjb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg4LCAxZnIpIC8gcmVwZWF0KDYsIDFmcik7XG4gICAgZ2FwOiA1cHg7XG59XG4qL1xuLm1pbmkge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyoubGV0dGVyIHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59ICovXG5cblxuLmxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTg2LCAyNTUsIDAuOCk7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxODYsIDI1NSk7XG4gICAgei1pbmRleDogLTE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAuaW5wdXQtaG9sZGVyIGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLmxldHRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxuICAgXG4gICAgLlVJLXdpbmRvdyB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1GQUFtRjtBQUN2Rjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTs7SUFFYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSwwQ0FBMEM7O0lBRTFDLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1A7O21CQUVlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1COztJQUVuQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0ksd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJDO0FBQ0Q7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7OztHQUdHOzs7QUFHSDtJQUNJLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDsgXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IGNsYW1wKDJlbSwgNGVtLCA2ZW0pO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY5O1xcbn1cXG5cXG4uVUktd2luZG93IHtcXG4gICAgd2lkdGg6IG1pbig1MHZoLCA0MHZ3KTtcXG4gICAgZmxleDogbm9uZTtcXG4gICAgYXNwZWN0LXJhdGlvOiA5IC8gMTY7XFxufVxcblxcbi50aXRsZS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogSW5wdXRzIHN0eWxpbmcgKi9cXG5cXG4jaW5wdXRzLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTsgKi9cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDEwZnIgMmZyO1xcbn1cXG5cXG4jY2hhci1jb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG5cXG4uc3Bhbi1ob2xkZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndvcmRzLWhvbGRlciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxJTtcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHJvdy1nYXA6IDNweDsgKi9cXG59XFxuXFxuLndvcmRzLWhvbGRlciAuYnV0dG9uLWhvbGRlciB7XFxuICAgIGhlaWdodDogMTAlO1xcbn1cXG5cXG5mb3JtIC5pbnB1dC1ob2xkZXIge1xcbiAgICAvKiBncmlkLXJvdzogMSAvIDIgKi9cXG4gICAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuLmJ1dHRvbi1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2lucHV0cy1jb250YWluZXIgLmJ1dHRvbi1ob2xkZXIge1xcbiAgICBncmlkLXJvdzogLTIgLyAtMTtcXG59XFxuXFxuI2lucHV0cy1jb250YWluZXIgLnRpdGxlLWhvbGRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmlucHV0LWhvbGRlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGF6dXJlOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbnB1dC1ob2xkZXIgZGl2IHtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5wdXQtaG9sZGVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJ1biB7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgYXNwZWN0LXJhdGlvOiA5IC8gMjtcXG5cXG4gICAgZm9udC1zaXplOiAxdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi8qIEJvYXJkIHN0eWxpbmcgKi9cXG5cXG4jYm9hcmQtY29udGFpbmVyIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTcwKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNib2FyZC1jb250YWluZXIgLnRpdGxlLWhvbGRlciB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC8gOCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgMWZyKSAvIHJlcGVhdCg2LCAxZnIpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm1pbmkge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG4ubGV0dGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogLndvcmQtMCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59ICovXFxuXFxuLmxpbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxODYsIDI1NSwgMC44KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDE4NiwgMjU1KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcbi8qIGJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgODAwcHggMWZyIC8gMWZyIDYwMHB4IDFmcjtcXG59XFxuI3J1biB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg4LCAxZnIpIC8gcmVwZWF0KDYsIDFmcik7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4qL1xcbi5taW5pIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKi5sZXR0ZXIge1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn0gKi9cXG5cXG5cXG4ubGluZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDE4NiwgMjU1LCAwLjgpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTg2LCAyNTUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG4gICAgLmlucHV0LWhvbGRlciBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG5cXG4gICAgLmxldHRlciB7XFxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB9XFxuICAgXFxuICAgIC5VSS13aW5kb3cge1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge01BWFJPVywgTUFYQ09MLCBGQUlMRUR9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQm9hcmQod29yZHMpe1xuICAgIGlmICghY2hlY2tWYWxpZCh3b3JkcykpXG4gICAgICAgIHJldHVybiBGQUlMRUQ7XG5cbiAgICBsZXQgY3VycmVudCA9IFtbd29yZHMsIGVtcHR5Qm9hcmQoKV1dO1xuICAgIGNvbnN0IHdvcmRMaXN0ID0gW107XG4gICAgbGV0IGlzU3BhbiA9IHRydWU7IC8vIHRydWUgZm9yIGZpcnN0IGNhbGwsIHRoZW4gc2V0IHRvIGZhbHNlXG5cbiAgICB3aGlsZSAoY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCB1cE5leHQgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWJCb2FyZCBvZiBjdXJyZW50KSB7XG5cbiAgICAgICAgICAgIGxldCB0aGVCb2FyZCA9IG5ldyBCb2FyZChzdWJCb2FyZFswXSwgc3ViQm9hcmRbMV0sIGlzU3Bhbik7XG4gICAgICAgICAgICBpc1NwYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBuZXdXb3JkID0gdGhlQm9hcmQuZ2V0V29yZCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdTdWJCb2FyZHMgPSB0aGVCb2FyZC5nZXRTdWJCb2FyZHMoKTtcbiAgICAgICAgICAgIGlmICghbmV3V29yZFswXS5wb3MpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkQm9hcmQod29yZHMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuZXdTdWJCb2FyZCBvZiBuZXdTdWJCb2FyZHMpXG4gICAgICAgICAgICAgICAgdXBOZXh0LnB1c2gobmV3U3ViQm9hcmQpO1xuICAgICAgICAgICAgd29yZExpc3QucHVzaChuZXdXb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gdXBOZXh0LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5sZW5ndGggPiAwKTsgLy8gZmlsdGVyIHByZXZlbnRzIGVtcHR5IHN1YkJvYXJkcyBmcm9tIGJlaW5nIGFkZGVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmRMaXN0O1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWQod29yZHMpIHtcbiAgICBsZXQgcmVzdWx0ID0gKHdvcmRzWzBdLmxlbmd0aCA+PSBNQVhDT0wpO1xuICAgIHJlc3VsdCA9IChyZXN1bHQgJiYgd29yZHMuc2xpY2UoMSkucmVkdWNlKCh2YWx1ZSwgY3VycmVudFdvcmQpID0+IHZhbHVlICYmIChjdXJyZW50V29yZC5sZW5ndGggPj0gNCksIHRydWUpKTtcbiAgICBjb25zdCBjaGFyU3VtID0gd29yZHMucmVkdWNlKCh0b3RhbCwgY3VycmVudFdvcmQpID0+IHRvdGFsICsgY3VycmVudFdvcmQubGVuZ3RoLCAwKTtcbiAgICByZXN1bHQgPSAocmVzdWx0ICYmIChjaGFyU3VtID09PSAoTUFYQ09MICogTUFYUk9XKSkpO1xuICAgIFxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVtcHR5Qm9hcmQoKSB7XG4gICAgbGV0IGVtcHR5Qm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWFJPVzsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTUFYQ09MOyBqKyspIHtcbiAgICAgICAgICAgIGVtcHR5Qm9hcmQucHVzaChbaSxqXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5Qm9hcmQ7XG59XG5cbi8vIGZ1bmN0aW9uIHByaW50U3ViQm9hcmQob3BlblNwYWNlcykge1xuLy8gICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKCkgPT4gQXJyYXkoNikuZmlsbCgnMScpKTtcblxuLy8gICAgIGZvciAoY29uc3Qgc3BhY2Ugb2Ygb3BlblNwYWNlcylcbi8vICAgICAgICAgYXJyW3NwYWNlWzBdXVtzcGFjZVsxXV0gPSAnMCc7XG5cbi8vICAgICBsZXQgc3RyaW5nID0gJyc7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbi8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbi8vICAgICAgICAgICAgIHN0cmluZyArPSBgJHthcnJbaV1bal19LCBgXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgc3RyaW5nICs9ICdcXG4nO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhzdHJpbmcpO1xuLy8gfSIsImltcG9ydCB7VEFLRU4sIE9QRU4sIE1BWFJPVywgTUFYQ09MLCBGQUlMRUR9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCBTcGFuYWdyYW0gZnJvbSBcIi4vc3BhbmFncmFtLmpzXCI7XG5cbmxldCBsZXR0ZXJDb3VudGVyID0gMDtcbmNvbnN0IFNUQVJUQ09VTlRFUk1BWCA9IDUwMDtcbmNvbnN0IExFVFRFUkNPVU5URVJNQVggPSAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3Iod29yZHMsIG9wZW5TcGFjZXMsIGlzU3BhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTUFYUk9XIH0sICgpID0+IEFycmF5KE1BWENPTCkuZmlsbChUQUtFTikpO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLmlzU3BhbiA9IGlzU3BhbjtcbiAgICAgICAgdGhpcy5zcGFuYWdyYW1NYW5hZ2VyID0gbnVsbDtcblxuICAgICAgICB0aGlzLiNjbGVhclNwYWNlcyhvcGVuU3BhY2VzKTtcblxuICAgICAgICB0aGlzLndvcmQgPSB3b3Jkc1swXTtcbiAgICAgICAgdGhpcy5sYXRlcldvcmRzID0gd29yZHMuc2xpY2UoMSk7XG4gICAgICAgIHRoaXMuc3ViQm9hcmRzID0gW107XG5cbiAgICAgICAgdGhpcy5wbGFjZW1lbnRNYW5hZ2VyID0gdGhpcy4jcGxhY2VtZW50TWFuYWdlcigpO1xuICAgICAgICB0aGlzLndvcmRQb3MgPSB0aGlzLiNwbGFjZVdvcmQoKTtcbiAgICB9XG5cbiAgICBnZXRTdWJCb2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YkJvYXJkcztcbiAgICB9XG5cbiAgICBnZXRXb3JkKCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICB3aGlsZSAoaSA8IHRoaXMud29yZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtwb3M6IHRoaXMud29yZFBvc1tpXSwgbGV0dGVyOiB0aGlzLndvcmRbaV19KTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaW50Qm9hcmQoKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVhST1c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVhDT0w7IGorKykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBgJHt0aGlzLnNwYWNlc1tpXVtqXSA/IDEgOiAwfSwgYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9ICdcXG4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XG4gICAgfVxuXG4gICAgI2NsZWFyU3BhY2VzKG9wZW5TcGFjZXMpIHtcbiAgICAgICAgZm9yIChsZXQgY29vcmRzIG9mIG9wZW5TcGFjZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IE9QRU47XG4gICAgICAgICAgICB0aGlzLnNpemUrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNmaWxsU3BhY2UocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zcGFjZXNbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSA9IFRBS0VOO1xuICAgIH1cblxuICAgICNjbGVhclNwYWNlKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BhY2VzW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gPSBPUEVOO1xuICAgIH1cblxuICAgICNnZXROZWlnaGJvcnMoaSwgaikge1xuICAgICAgICBsZXQgbmVpZ2hib3JzID0gW107XG4gICAgICAgIGlmICgoaiAtIDEgPj0gMCkgJiYgKHRoaXMuc3BhY2VzW2ldW2ogLSAxXSA9PT0gT1BFTikpXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSwgaiAtIDFdKVxuICAgICAgICBpZiAoKGogKyAxIDwgTUFYQ09MKSAmJiAodGhpcy5zcGFjZXNbaV1baiArIDFdID09PSBPUEVOKSlcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtpLCBqICsgMV0pXG4gICAgICAgIGlmIChpIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZXNbaSAtIDFdW2pdID09PSBPUEVOKVxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtpIC0gMSwgal0pXG4gICAgICAgICAgICBpZiAoKGogLSAxID49IDApICYmICh0aGlzLnNwYWNlc1tpIC0gMV1baiAtIDFdID09PSBPUEVOKSlcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSAtIDEsIGogLSAxXSlcbiAgICAgICAgICAgIGlmICgoaiArIDEgPCBNQVhDT0wpICYmICh0aGlzLnNwYWNlc1tpIC0gMV1baiArIDFdID09PSBPUEVOKSlcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSAtIDEsIGogKyAxXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSArIDEgPCBNQVhST1cpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYWNlc1tpICsgMV1bal0gPT09IE9QRU4pXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW2kgKyAxLCBqXSlcbiAgICAgICAgICAgIGlmICgoaiAtIDEgPj0gMCkgJiYgKHRoaXMuc3BhY2VzW2kgKyAxXVtqIC0gMV0gPT09IE9QRU4pKVxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtpICsgMSwgaiAtIDFdKVxuICAgICAgICAgICAgaWYgKChqICsgMSA8IE1BWENPTCkgJiYgKHRoaXMuc3BhY2VzW2kgKyAxXVtqICsgMV0gPT09IE9QRU4pKVxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtpICsgMSwgaiArIDFdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XG4gICAgfVxuXG4gICAgI2dldE9wZW5TcGFjZXMoKSB7XG4gICAgICAgIGNvbnN0IG9wZW5TcGFjZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVhST1c7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWENPTDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VzW2ldW2pdID09PSBPUEVOKVxuICAgICAgICAgICAgICAgICAgICBvcGVuU3BhY2VzLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcGVuU3BhY2VzO1xuICAgIH1cblxuICAgICNnZXRTdWJCb2FyZChpLCBqKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGUgPSBbW2ksIGpdXTtcbiAgICAgICAgdGhpcy5zcGFjZXNbaV1bal0gPSBUQUtFTjtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBbW2ksIGpdXTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHVwTmV4dCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuI2dldE5laWdoYm9ycyhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG5laWdoYm9yIG9mIG5laWdoYm9ycykge1xuICAgICAgICAgICAgICAgICAgICB1cE5leHQucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2ZpbGxTcGFjZShuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gdXBOZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdmFpbGFibGU7XG4gICAgfVxuXG4gICAgI2J1aWxkU3ViQm9hcmRzKCkge1xuICAgICAgICBjb25zdCBzdWJCb2FyZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3BlblNwYWNlcyA9IHRoaXMuI2dldE9wZW5TcGFjZXMoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWFJPVzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWENPTDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VzW2ldW2pdID09PSBPUEVOKVxuICAgICAgICAgICAgICAgICAgICBzdWJCb2FyZHMucHVzaCh0aGlzLiNnZXRTdWJCb2FyZChpLCBqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNwYWNlIG9mIG9wZW5TcGFjZXMpXG4gICAgICAgICAgICB0aGlzLiNjbGVhclNwYWNlKHNwYWNlKTtcblxuICAgICAgICByZXR1cm4gc3ViQm9hcmRzO1xuICAgIH1cblxuICAgICNjaGVja1ZpYWJsZVN1YkJvYXJkcygpIHtcbiAgICAgICAgY29uc3Qgc3ViQm9hcmRzID0gdGhpcy4jYnVpbGRTdWJCb2FyZHMoKTtcbiAgICAgICAgbGV0IHdvcmRzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB0aGlzLmxhdGVyV29yZHMpXG4gICAgICAgICAgICB3b3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICBjb25zdCBzdWJCb2FyZExpc3QgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHN1YkJvYXJkIG9mIHN1YkJvYXJkcykge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN1YkJvYXJkLmxlbmd0aDsgLy8gc3ViQm9hcmQgaXMgbGlzdCBvZiBvcGVuIHNwYWNlc1xuICAgICAgICAgICAgY29uc3Qgd29yZExpc3QgPSBmaW5kTWF0Y2hpbmdTaXplcyhzaXplLCB3b3Jkcyk7IC8vIGFycmF5IG9mIGxlbmd0aHMgb2Ygd29yZHMgdGhhdCBmaXQgaW50byBzdWJCb2FyZFxuICAgICAgICAgICAgaWYgKHdvcmRMaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBzdWJCb2FyZExpc3QucHVzaChbd29yZExpc3QsIHN1YkJvYXJkXSk7XG4gICAgICAgICAgICB3b3JkcyA9IHdvcmRzLmZpbHRlcihlbGVtZW50ID0+ICF3b3JkTGlzdC5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YkJvYXJkcyA9IHN1YkJvYXJkTGlzdDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI3BsYWNlbWVudE1hbmFnZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3Bhbikge1xuICAgICAgICAgICAgdGhpcy5zcGFuYWdyYW1NYW5hZ2VyID0gbmV3IFNwYW5hZ3JhbSh0aGlzLndvcmQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0cnlTcGFjZTogKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BhbmFncmFtTWFuYWdlci5pbmNyZW1lbnRUYXJnZXRzKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZmlsbFNwYWNlKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbFNwYWNlOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGFuYWdyYW1NYW5hZ2VyLmRlY3JlbWVudFRhcmdldHMocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjbGVhclNwYWNlKHBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hlY2tWaWFibGU6IChwb3NpdGlvbiwgc3ViV29yZExlbmd0aCkgPT4ge3JldHVybiB0aGlzLnNwYW5hZ3JhbU1hbmFnZXIuY2hlY2tWaWFibGUocG9zaXRpb24sIHN1YldvcmRMZW5ndGgpfSxcbiAgICAgICAgICAgICAgICBnZXRWaWFibGVOZWlnaGJvcnM6IChwb3NpdGlvbikgPT4ge3JldHVybiByYW5kb21pemUodGhpcy4jZ2V0TmVpZ2hib3JzKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSkpfSxcbiAgICAgICAgICAgICAgICBnZXRTdGFydHM6ICgpID0+IHtyZXR1cm4gcmFuZG9taXplKHRoaXMuI2dldE9wZW5TcGFjZXMoKSl9LFxuICAgICAgICAgICAgICAgIGNoZWNrVmlhYmxlRmluYWw6ICgpID0+IHtyZXR1cm4gKCh0aGlzLmxhdGVyV29yZHMubGVuZ3RoID09PSAwKSB8fCB0aGlzLiNjaGVja1ZpYWJsZVN1YkJvYXJkcygpKX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJ5U3BhY2U6IChwb3NpdGlvbikgPT4ge3RoaXMuI2ZpbGxTcGFjZShwb3NpdGlvbil9LFxuICAgICAgICAgICAgZmFpbFNwYWNlOiAocG9zaXRpb24pID0+IHt0aGlzLiNjbGVhclNwYWNlKHBvc2l0aW9uKX0sXG4gICAgICAgICAgICBjaGVja1ZpYWJsZTogKHBvc2l0aW9uLCBzdWJXb3JkTGVuZ3RoKSA9PiB7cmV0dXJuIHRydWV9LFxuICAgICAgICAgICAgZ2V0VmlhYmxlTmVpZ2hib3JzOiAocG9zaXRpb24pID0+IHtyZXR1cm4gcmFuZG9taXplKHRoaXMuI2dldE5laWdoYm9ycyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pKX0sXG4gICAgICAgICAgICBnZXRTdGFydHM6ICgpID0+IHtyZXR1cm4gcmFuZG9taXplKHRoaXMuI2dldE9wZW5TcGFjZXMoKSl9LFxuICAgICAgICAgICAgY2hlY2tWaWFibGVGaW5hbDogKCkgPT4ge3JldHVybiAoKHRoaXMubGF0ZXJXb3Jkcy5sZW5ndGggPT09IDApIHx8IHRoaXMuI2NoZWNrVmlhYmxlU3ViQm9hcmRzKCkpfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3BsYWNlV29yZCgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRzID0gdGhpcy5wbGFjZW1lbnRNYW5hZ2VyLmdldFN0YXJ0cygpO1xuICAgICAgICBjb25zdCBzdGFydHNMZW5ndGggPSBzdGFydHMubGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdGFydENvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAoc3RhcnRDb3VudGVyIDwgU1RBUlRDT1VOVEVSTUFYKSB7XG4gICAgICAgICAgICBsZXR0ZXJDb3VudGVyID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRzW3N0YXJ0Q291bnRlciAlIHN0YXJ0c0xlbmd0aF07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNwbGFjZUxldHRlcihzdGFydCwgdGhpcy53b3JkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gRkFJTEVEKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICBzdGFydENvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBGQUlMRUQ7XG4gICAgfVxuXG4gICAgI3BsYWNlTGV0dGVyKHBvc2l0aW9uLCBzdWJXb3JkKSB7XG4gICAgICAgIGlmIChsZXR0ZXJDb3VudGVyID4gTEVUVEVSQ09VTlRFUk1BWClcbiAgICAgICAgICAgIHJldHVybiBGQUlMRUQ7XG4gICAgICAgIGxldHRlckNvdW50ZXIrKztcblxuICAgICAgICB0aGlzLnBsYWNlbWVudE1hbmFnZXIudHJ5U3BhY2UocG9zaXRpb24pO1xuICAgICAgICBpZiAoIXRoaXMucGxhY2VtZW50TWFuYWdlci5jaGVja1ZpYWJsZShwb3NpdGlvbiwgc3ViV29yZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlbWVudE1hbmFnZXIuZmFpbFNwYWNlKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBGQUlMRUQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViV29yZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlbWVudE1hbmFnZXIuY2hlY2tWaWFibGVGaW5hbCgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBbcG9zaXRpb25dO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRNYW5hZ2VyLmZhaWxTcGFjZShwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZBSUxFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wZW5OZWlnaGJvcnMgPSB0aGlzLnBsYWNlbWVudE1hbmFnZXIuZ2V0VmlhYmxlTmVpZ2hib3JzKHBvc2l0aW9uKTtcbiAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBvcGVuTmVpZ2hib3JzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLiNwbGFjZUxldHRlcihuZWlnaGJvciwgc3ViV29yZC5zbGljZSgxKSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IEZBSUxFRClcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Bvc2l0aW9uXS5jb25jYXQocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxhY2VtZW50TWFuYWdlci5mYWlsU3BhY2UocG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gRkFJTEVEO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9taXplKGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHsgXG4gICAgICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBudW1iZXIgXG4gICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICB9XG4gICAgICAgXG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdTaXplcyhzaXplLCB3b3Jkcykge1xuICAgIGNvbnN0IHdvcmRTZXQgPSB3b3Jkcy5yZWR1Y2UoKHN1YnNldHMsIHZhbHVlKSA9PiBcbiAgICAgICAgc3Vic2V0cy5jb25jYXQoc3Vic2V0cy5tYXAoc2V0ID0+IFt2YWx1ZSwgLi4uc2V0XSkpLCBcbiAgICAgICAgW1tdXSk7XG5cbiAgICBmb3IgKGxldCBzdWJzZXQgb2Ygd29yZFNldCkge1xuICAgICAgICBpZiAoc2l6ZSA9PT0gc3VtV29yZExlbmd0aHMoc3Vic2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIHN1bVdvcmRMZW5ndGhzKHdvcmRzKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKVxuICAgICAgICBzdW0gKz0gd29yZC5sZW5ndGg7XG4gICAgcmV0dXJuIHN1bTtcbn0iLCJleHBvcnQgY29uc3QgSE9SSVpPTlRBTCA9ICdoJztcbmV4cG9ydCBjb25zdCBWRVJUSUNBTCA9ICd2JztcblxuZXhwb3J0IGNvbnN0IFRPUCA9ICd0JztcbmV4cG9ydCBjb25zdCBCT1RUT00gPSAnYic7XG5leHBvcnQgY29uc3QgTEVGVCA9ICdsJztcbmV4cG9ydCBjb25zdCBSSUdIVCA9ICdyJztcblxuZXhwb3J0IGNvbnN0IFRBS0VOID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBPUEVOID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBNQVhST1cgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWENPTCA9IDY7XG5cbmV4cG9ydCBjb25zdCBGQUlMRUQgPSAtMTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V29yZHMod29yZExpc3QsIGlzTW9iaWxlID0gZmFsc2UpIHtcbiAgICByZW5kZXJXb3Jkcyh3b3JkTGlzdCwgaXNNb2JpbGUpO1xufVxuXG5sZXQgaXNTcGFuID0gdHJ1ZTtcbmNvbnN0IGNvbG9yID0gYDE0NSwgMjU1LCAxMTJgO1xuXG5mdW5jdGlvbiByZW5kZXJXb3Jkcyh3b3JkTGlzdCwgaXNNb2JpbGUpIHtcblxuICAgIGxldCByYWRpdXMgPSAzMDtcbiAgICBsZXQgaGVpZ2h0ID0gMjA7XG5cbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NtYWxsJyk7XG4gICAgICAgIHJhZGl1cyA9IDIwO1xuICAgICAgICBoZWlnaHQgPSAxNTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBpc1NwYW4gPSB0cnVlO1xuXG4gICAgY2xlYXJHcmlkKCk7XG5cbiAgICBsZXQgd29yZE51bSA9IDA7XG4gICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRMaXN0KSB7XG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGNvbnN0IGxldHRlciBvZiB3b3JkKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gbGV0dGVyLnBvc1swXTtcbiAgICAgICAgICAgIGNvbnN0IGogPSBsZXR0ZXIucG9zWzFdO1xuICAgICAgICAgICAgY29uc3QgbWluaSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjbWluaS0ke2kgKiA2ICsgan1gKTtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlckhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0dGVySG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2xldHRlcicsIGB3b3JkLSR7d29yZE51bX1gKTtcbiAgICAgICAgICAgIGxldHRlckhvbGRlci5pbm5lclRleHQgPSBsZXR0ZXIubGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBtaW5pLmFwcGVuZENoaWxkKGxldHRlckhvbGRlcik7XG5cbiAgICAgICAgICAgIGRyYXdDaXJjbGUobWluaSwgcmFkaXVzKTtcblxuICAgICAgICAgICAgaWYgKHByZXYpXG4gICAgICAgICAgICAgICAgZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKHByZXYsIG1pbmksIGhlaWdodCk7XG4gICAgICAgICAgICBwcmV2ID0gbWluaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzU3BhbiA9IGZhbHNlO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckdyaWQoKSB7XG4gICAgY29uc3QgbWluaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluaScpO1xuICAgIGZvciAoY29uc3QgbWluaSBvZiBtaW5pcylcbiAgICAgICAgbWluaS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpXG4gICAgICAgIGxpbmUucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBjaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZScpO1xuICAgIGZvciAoY29uc3QgY2lyY2xlIG9mIGNpcmNsZXMpXG4gICAgICAgIGNpcmNsZS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGdyaWRJdGVtMSwgZ3JpZEl0ZW0yLCBoZWlnaHQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhncmlkSXRlbTEpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdyaWRJdGVtMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgY29uc3Qgc3RhcnQgPSBncmlkSXRlbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZW5kID0gZ3JpZEl0ZW0yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGluIHggYW5kIHkgY29vcmRpbmF0ZXNcbiAgICBjb25zdCBkZWx0YVggPSBnZXRDZW50ZXIoZW5kKVswXSAtIGdldENlbnRlcihzdGFydClbMF07XG4gICAgY29uc3QgZGVsdGFZID0gZ2V0Q2VudGVyKGVuZClbMV0gLSBnZXRDZW50ZXIoc3RhcnQpWzFdO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIGxpbmUgKHVzaW5nIHRoZSBkaXN0YW5jZSBmb3JtdWxhKVxuICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBhbmdsZSBvZiB0aGUgbGluZVxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWCkgKiAxODAgLyBNYXRoLlBJO1xuXG4gICAgLy8gQ3JlYXRlIGEgbGluZSBlbGVtZW50XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xuICAgIGxpbmUuc3R5bGUud2lkdGggPSBgJHtsZW5ndGh9cHhgO1xuICAgIGxpbmUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSBsaW5lIGF0IHRoZSBzdGFydGluZyBwb2ludFxuICAgIGxpbmUuc3R5bGUudG9wID0gYCR7KHN0YXJ0LnRvcCArIHN0YXJ0LmJvdHRvbSAtIGhlaWdodCkgLyAyICsgd2luZG93LnNjcm9sbFl9cHhgO1xuICAgIGxpbmUuc3R5bGUubGVmdCA9IGAkeyhzdGFydC5sZWZ0ICsgc3RhcnQucmlnaHQpIC8gMiArIHdpbmRvdy5zY3JvbGxYfXB4YDtcbiAgICBsaW5lLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdsZWZ0JztcbiAgICBsaW5lLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHthbmdsZX1kZWcpYDtcblxuICAgIGlmIChpc1NwYW4pXG4gICAgICAgIGxpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoJHtjb2xvcn0sIDAuOClgO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBsaW5lIHRvIHRoZSBncmlkIGNvbnRhaW5lclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmFwcGVuZENoaWxkKGxpbmUpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKGdyaWRJdGVtLCByYWRpdXMpIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkJyk7XG4gICAgLy8gY29uc29sZS5sb2coZ3JpZEl0ZW0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGdyaWRJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoZ3JpZEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNlbnRlcik7XG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjaXJjbGUuY2xhc3NMaXN0ID0gJ2NpcmNsZSc7XG4gICAgY2lyY2xlLnN0eWxlLndpZHRoID0gYCR7MipyYWRpdXN9cHhgO1xuICAgIGNpcmNsZS5zdHlsZS5oZWlnaHQgPSBgJHsyKnJhZGl1c31weGA7XG4gICAgY2lyY2xlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAxMDAlYDtcbiAgICBjaXJjbGUuc3R5bGUudG9wID0gYCR7Y2VudGVyWzFdIC0gcmFkaXVzICsgd2luZG93LnNjcm9sbFl9cHhgO1xuICAgIGNpcmNsZS5zdHlsZS5sZWZ0ID0gYCR7Y2VudGVyWzBdIC0gcmFkaXVzICsgd2luZG93LnNjcm9sbFh9cHhgO1xuXG4gICAgaWYgKGlzU3BhbilcbiAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2JhKCR7Y29sb3J9LCAxKWA7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjaXJjbGUuc3R5bGUudG9wKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5hcHBlbmRDaGlsZChjaXJjbGUpO1xufVxuXG5mdW5jdGlvbiBnZXRDZW50ZXIocmVjdGFuZ2xlKSB7XG4gICAgY29uc3QgeCA9IChyZWN0YW5nbGUubGVmdCArIHJlY3RhbmdsZS5yaWdodCkgLyAyO1xuICAgIGNvbnN0IHkgPSAocmVjdGFuZ2xlLnRvcCArIHJlY3RhbmdsZS5ib3R0b20pIC8gMjtcblxuICAgIHJldHVybiBbeCwgeV07XG59XG5cbi8vIGZ1bmN0aW9uIGJ1aWxkR3JpZCh3b3JkTGlzdCkge1xuLy8gICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKCkgPT4gQXJyYXkoNikuZmlsbCgnMCcpKTtcbi8vICAgICBsZXQgd29yZE51bSA9IDA7XG4vLyAgICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRMaXN0KSB7XG4vLyAgICAgICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIHdvcmQpIHtcbi8vICAgICAgICAgICAgIGlmICghbGV0dGVyLnBvcylcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV29yZDogJHt3b3JkLnJlZHVjZSgodG9QcmludCwgeCkgPT4gdG9QcmludCArIHgubGV0dGVyLCAnJyl9LCAgJHt3b3JkLnJlZHVjZSgodG9QcmludCwgeCkgPT4gdG9QcmludCArIFN0cmluZyh4LnBvcyksICcnKX1gKTtcbi8vICAgICAgICAgICAgIGNvbnN0IGkgPSBsZXR0ZXIucG9zWzBdO1xuLy8gICAgICAgICAgICAgY29uc3QgaiA9IGxldHRlci5wb3NbMV07XG4vLyAgICAgICAgICAgICBhcnJbaV1bal0gPSAoW3dvcmROdW0sIGxldHRlci5sZXR0ZXJdKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICB3b3JkTnVtKys7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGFycjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcHJpbnRXb3Jkcyh3b3JkTGlzdCkge1xuXG4vLyAgICAgbGV0IHdvcmRHcmlkID0gYnVpbGRHcmlkKHdvcmRMaXN0KTtcblxuLy8gICAgIGxldCBzdHJpbmcgPSAnJztcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGorKykge1xuLy8gICAgICAgICAgICAgc3RyaW5nICs9IGAke3dvcmRHcmlkW2ldW2pdWzFdfSwgYFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHN0cmluZyArPSAnXFxuJztcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coc3RyaW5nKTtcbi8vIH0iLCJpbXBvcnQgZGlzcGxheVdvcmRzIGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBidWlsZEJvYXJkIGZyb20gXCIuL2JvYXJkLWJ1aWxkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEdhbWVHZW5lcmF0b3IoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoY2hlY2tNb2JpbGUoKSlcbiAgICAgICAgbG9hZE1vYmlsZSgpO1xuXG4gICAgZWxzZVxuICAgICAgICBsb2FkRGVza3RvcCgpO1xufVxuXG5cblxuZnVuY3Rpb24gbG9hZERlc2t0b3AoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGJ1aWxkSW5wdXRzQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBidWlsZEJvYXJkQ29udGFpbmVyKCk7XG5cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ1bicpO1xuICAgIGdlbmVyYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBnZW5lcmF0ZUJvYXJkKCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgZGlzcGxheVdvcmRzKGJ1aWxkQm9hcmQocmVzdWx0KSk7XG4gICAgfSk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGxvYWRNb2JpbGUoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGlucHV0c0NvbnRhaW5lciA9IGJ1aWxkSW5wdXRzQ29udGFpbmVyKCk7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBidWlsZEJvYXJkQ29udGFpbmVyKCk7XG5cbiAgICBpbnB1dHNDb250YWluZXIuc3R5bGUud2lkdGggPSBgOTB2d2A7XG5cblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRzQ29udGFpbmVyKTtcbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydW4nKTtcbiAgICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2VuZXJhdGVCb2FyZCgpO1xuICAgICAgICBpZiAoIXJlc3VsdClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICAgICAgbGV0IGJvYXJkID0gYnVpbGRCb2FyZChyZXN1bHQpXG4gICAgICAgIGRpc3BsYXlXb3Jkcyhib2FyZCwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgcmVnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydW4nKTtcbiAgICAgICAgcmVnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJvYXJkID0gYnVpbGRCb2FyZChyZXN1bHQpO1xuICAgICAgICAgICAgZGlzcGxheVdvcmRzKGJvYXJkLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlXb3Jkcyhib2FyZCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuZnVuY3Rpb24gYnVpbGRJbnB1dHNDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYnVpbGRDb250YWluZXIoKTtcbiAgICBjb250YWluZXIuaWQgPSAnaW5wdXRzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZUhvbGRlciA9IGJ1aWxkVGl0bGVIb2xkZXIoJ2lucHV0LXNpZGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVIb2xkZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU3BhbkhvbGRlcigpKTtcblxuICAgIGNvbnN0IHdvcmRzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29yZHNIb2xkZXIuY2xhc3NMaXN0LmFkZCgnd29yZHMtaG9sZGVyJyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSBcIndvcmRzLWZvcm1cIjtcbiAgICBjb25zdCBhZGRXb3JkSG9sZGVyID0gYnVpbGRCdXR0b25Ib2xkZXIoKTtcbiAgICBjb25zdCBhZGRXb3JkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkV29yZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIFdvcmQnO1xuICAgIGFkZFdvcmRCdXR0b24uaWQgPSBcImFkZC13b3JkXCI7XG5cbiAgICBhZGRXb3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBhZGRUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgaSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWhvbGRlcicpLmxlbmd0aCArIDE7XG4gICAgICAgIGlmKGkgPiAxMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidWlsZElucHV0KGkpKTtcbiAgICB9KTtcblxuICAgIGFkZFdvcmRIb2xkZXIuYXBwZW5kQ2hpbGQoYWRkV29yZEJ1dHRvbik7XG4gICAgd29yZHNIb2xkZXIuYXBwZW5kQ2hpbGQoYWRkV29yZEhvbGRlcik7XG4gICAgd29yZHNIb2xkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmRzSG9sZGVyKTtcblxuICAgIGNvbnN0IGJ1dHRvbkhvbGRlciA9IGJ1aWxkQnV0dG9uSG9sZGVyKCk7XG4gICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGJ1aWxkR2VuZXJhdGVCdXR0b24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFNwYW5Ib2xkZXIoKSB7XG4gICAgY29uc3Qgc3BhbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwYW5Ib2xkZXIuY2xhc3NMaXN0LmFkZCgnc3Bhbi1ob2xkZXInKTtcbiAgICBjb25zdCBjaGFyQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGFyQ291bnQuaWQgPSAnY2hhci1jb3VudCc7XG4gICAgY2hhckNvdW50LmlubmVyVGV4dCA9IGBUb3RhbCBDaGFyYWN0ZXJzOiAwLzQ4YDtcbiAgICBzcGFuSG9sZGVyLmFwcGVuZENoaWxkKGNoYXJDb3VudCk7XG5cbiAgICBzcGFuSG9sZGVyLmFwcGVuZENoaWxkKGJ1aWxkSW5wdXQoJ3NwYW4nKSk7XG5cbiAgICByZXR1cm4gc3BhbkhvbGRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRCdXR0b25Ib2xkZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1ob2xkZXInKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uSG9sZGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFRpdGxlSG9sZGVyKG5hbWUpIHtcbiAgICBjb25zdCB0aXRsZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWhvbGRlcicpO1xuICAgIHRpdGxlSG9sZGVyLmFwcGVuZENoaWxkKGJ1aWxkVGl0bGVJbnB1dChuYW1lKSk7XG4gICAgXG4gICAgcmV0dXJuIHRpdGxlSG9sZGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZElucHV0KG51bSkge1xuICAgIGNvbnN0IGlucHV0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRIb2xkZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtaG9sZGVyJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5pZCA9IGBpbnB1dC0ke251bX1gOyBcbiAgICBpbnB1dC5uYW1lID0gYGlucHV0LSR7bnVtfWA7XG4gICAgaW5wdXQubWluTGVuZ3RoID0gKG51bSA9PT0gJ3NwYW4nID8gJzYnIDogJzQnKTtcbiAgICBpbnB1dC5tYXhMZW5ndGggPSAnNDgnO1xuICAgIGlucHV0LnBhdHRlcm4gPSBcIltBLVphLXpdK1wiO1xuICAgIGlmIChudW0gPT09ICdzcGFuJylcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgY29uc3QgY2hhckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjaGFyRGlzcGxheS5pZCA9IGBpbnB1dCR7bnVtfS1jb3VudGA7XG4gICAgY2hhckRpc3BsYXkuaW5uZXJUZXh0ID0gJzAnO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGNoYXJEaXNwbGF5LmlubmVyVGV4dCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB0aGlzSW5wdXQgb2YgYWxsSW5wdXRzKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGhpc0lucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhci1jb3VudCcpLmlubmVyVGV4dCA9IGBUb3RhbCBDaGFyYWN0ZXJzOiAke3N1bX0vNDhgO1xuICAgIH0pO1xuXG4gICAgaW5wdXRIb2xkZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0SG9sZGVyLmFwcGVuZENoaWxkKGNoYXJEaXNwbGF5KTtcblxuICAgIHJldHVybiBpbnB1dEhvbGRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRCb2FyZENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBidWlsZENvbnRhaW5lcigpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdib2FyZC1jb250YWluZXInO1xuXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0ODsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1pbmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWluaS5jbGFzc0xpc3QgPSAnbWluaSc7XG4gICAgICAgIG1pbmkuaWQgPSBgbWluaS0ke2l9YDtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQobWluaSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlSG9sZGVyID0gYnVpbGRUaXRsZUhvbGRlcignYm9hcmQtc2lkZScpOyBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVIb2xkZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICAgIGNvbnN0IGJ1dHRvbkhvbGRlciA9IGJ1aWxkQnV0dG9uSG9sZGVyKCk7XG4gICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGJ1aWxkR2VuZXJhdGVCdXR0b24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZFRpdGxlSW5wdXQobmFtZSkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnN0eWxlLmZsZXggPSAnMSc7XG4gICAgdGl0bGVJbnB1dC5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XG4gICAgdGl0bGVJbnB1dC5pZCA9IG5hbWU7XG4gICAgcmV0dXJuIHRpdGxlSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdVSS13aW5kb3cnKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjaGVja01vYmlsZSgpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KTsgLy8gNzY4cHggaXMgVGFibGV0IHdpZHRoIGFjY29yZGluZyB0byBDaHJvbWUgZGV2XG59XG5cbmZ1bmN0aW9uIGJ1aWxkR2VuZXJhdGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdydW4nO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnR2VuZXJhdGUnO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcbiAgICBpZiAoIWNoZWNrSW5wdXRzKCkpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IHdvcmRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgY29uc3Qgd29yZHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZElucHV0cykge1xuICAgICAgICBpZiAod29yZC52YWx1ZSAhPSAnJylcbiAgICAgICAgICAgIHdvcmRzLnB1c2god29yZC52YWx1ZSk7XG4gICAgfVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge30pO1xuXG4gICAgcmV0dXJuIHdvcmRzO1xuXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xuICAgIGxldCBjaGFyU3VtID0gMDtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXNwYW4nKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBpZiAoc3Bhbi52YWx1ZS5sZW5ndGggPCA2IHx8ICEvXihbYS16QS1aXSspJC8udGVzdChzcGFuLnZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2hhclN1bSArPSBzcGFuLnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB3b3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXQnKTtcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgaWYgKHdvcmQudmFsdWUubGVuZ3RoID4gMCAmJiAod29yZC52YWx1ZS5sZW5ndGggPCA0IHx8ICEvXihbYS16QS1aXSspJC8udGVzdCh3b3JkLnZhbHVlKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNoYXJTdW0gKz0gd29yZC52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIChjaGFyU3VtID09PSA0OCk7XG59IiwiaW1wb3J0IHtIT1JJWk9OVEFMLCBWRVJUSUNBTCwgVE9QLCBCT1RUT00sIExFRlQsIFJJR0hULCBUQUtFTiwgT1BFTiwgTUFYUk9XLCBNQVhDT0wsIEZBSUxFRH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFuYWdyYW0ge1xuXG4gICAgY29uc3RydWN0b3Iod29yZCkge1xuICAgICAgICB0aGlzLm9wdGlvbiA9IEhPUklaT05UQUw7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+PSBNQVhST1cpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbiA9IGNvaW5mbGlwKEhPUklaT05UQUwsIFZFUlRJQ0FMKTtcblxuICAgICAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KGNvaW5mbGlwKExFRlQsIFJJR0hUKSkpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobmV3IFRhcmdldChnZXRPcHBvc2l0ZSh0aGlzLnRhcmdldHNbMF0udHlwZSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQoY29pbmZsaXAoVE9QLCBCT1RUT00pKSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KGdldE9wcG9zaXRlKHRoaXMudGFyZ2V0c1swXS50eXBlKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmlhc0NhbGN1bGF0b3IocG9zLCByZW1haW5pbmcpIHtcbiAgICAvLyAgICAgY29uc3QgdmFsID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG4gICAgLy8gICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgLy8gICAgIGlmICh0aGlzLnRhcmdldHMubGVuZ3RoID09PSAwKVxuICAgIC8vICAgICAgICAgcmV0dXJuIDA7XG4gICAgLy8gICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldHNbMF07XG4gICAgLy8gICAgIGlmICh0aGlzLnRhcmdldHMubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gICAgICAgICBkaXN0YW5jZSArPSAodGhpcy50YXJnZXRzWzBdIC0gdGhpcy50YXJnZXRzWzFdKTtcbiAgICAvLyAgICAgfSBcbiAgICAvLyAgICAgZGlzdGFuY2UgKz0gdGFyZ2V0IC0gdmFsO1xuXG4gICAgLy8gICAgIHJldHVybiAoZGlzdGFuY2UgLyByZW1haW5pbmcpO1xuICAgIC8vIH1cblxuICAgIGNoZWNrVmlhYmxlKHBvcywgbGVuZ3RoUmVtYWluaW5nKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgICAgIGNvbnN0IHJlbGV2YW50RGltID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldHNbMF0uaXNNZXQoKSlcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy50YXJnZXRzWzBdLmdldFZhbCgpIC0gdGhpcy50YXJnZXRzWzFdLmdldFZhbCgpKSArIE1hdGguYWJzKHJlbGV2YW50RGltIC0gdGhpcy50YXJnZXRzWzBdLmdldFZhbCgpKTtcbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnRhcmdldHNbMV0uaXNNZXQoKSlcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMocmVsZXZhbnREaW0gLSB0aGlzLnRhcmdldHNbMV0uZ2V0VmFsKCkpO1xuXG4gICAgICAgIHJldHVybiAobGVuZ3RoUmVtYWluaW5nID4gZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIGluY3JlbWVudFRhcmdldHMocG9zKSB7XG4gICAgICAgIGNvbnN0IHJlbGV2YW50RGltID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG5cbiAgICAgICAgaWYgKHJlbGV2YW50RGltID09PSB0aGlzLnRhcmdldHNbMF0uZ2V0VmFsKCkpXG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbMF0uaW5jcmVtZW50Q291bnQoKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRzWzBdLmlzTWV0KCkgJiYgKHJlbGV2YW50RGltID09PSB0aGlzLnRhcmdldHNbMV0uZ2V0VmFsKCkpKVxuICAgICAgICAgICAgdGhpcy50YXJnZXRzWzFdLmluY3JlbWVudENvdW50KCk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50VGFyZ2V0cyhwb3MpIHtcbiAgICAgICAgY29uc3QgcmVsZXZhbnREaW0gPSAodGhpcy5vcHRpb24gPT09IFZFUlRJQ0FMID8gcG9zWzBdIDogcG9zWzFdKTtcblxuICAgICAgICBpZiAocmVsZXZhbnREaW0gPT09IHRoaXMudGFyZ2V0c1swXS5nZXRWYWwoKSlcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0c1swXS5kZWNyZW1lbnRDb3VudCgpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnRhcmdldHNbMF0uaXNNZXQoKSAmJiAocmVsZXZhbnREaW0gPT09IHRoaXMudGFyZ2V0c1sxXS5nZXRWYWwoKSkpXG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbMV0uZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRDb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgIH1cblxuICAgIGRlY3JlbWVudENvdW50KCkge1xuICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgfVxuXG4gICAgaXNNZXQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb3VudCA+IDApO1xuICAgIH1cblxuICAgIGdldFZhbCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVE9QOiByZXR1cm4gMDtcbiAgICBcbiAgICAgICAgICAgIGNhc2UgQk9UVE9NOiByZXR1cm4gNztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgTEVGVDogcmV0dXJuIDA7XG4gICAgXG4gICAgICAgICAgICBjYXNlIFJJR0hUOiByZXR1cm4gNTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29pbmZsaXAob3B0aW9uMSwgb3B0aW9uMikge1xuICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBvcHRpb24xIDogb3B0aW9uMik7XG59XG5cbmZ1bmN0aW9uIGdldE9wcG9zaXRlKGNvbnN0YW50KSB7XG4gICAgc3dpdGNoIChjb25zdGFudCkge1xuICAgICAgICBjYXNlIEhPUklaT05UQUw6IHJldHVybiBWRVJUSUNBTDtcblxuICAgICAgICBjYXNlIFZFUlRJQ0FMOiByZXR1cm4gSE9SSVpPTlRBTDtcblxuICAgICAgICBjYXNlIFRPUDogcmV0dXJuIEJPVFRPTTtcblxuICAgICAgICBjYXNlIEJPVFRPTTogcmV0dXJuIFRPUDtcblxuICAgICAgICBjYXNlIExFRlQ6IHJldHVybiBSSUdIVDtcblxuICAgICAgICBjYXNlIFJJR0hUOiByZXR1cm4gTEVGVDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgYnVpbGRCb2FyZCBmcm9tICcuL2JvYXJkLWJ1aWxkZXIuanMnO1xuaW1wb3J0IGRpc3BsYXlXb3JkcyBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IGxvYWRHYW1lR2VuZXJhdG9yIGZyb20gJy4vbmV3LmpzJztcblxubG9hZEdhbWVHZW5lcmF0b3IoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBsb2FkR2FtZUdlbmVyYXRvcigpO1xufSk7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkrKykge1xuLy8gICAgIGNvbnN0IG1pbmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBtaW5pLmNsYXNzTGlzdCA9ICdtaW5pJztcbi8vICAgICBtaW5pLmlkID0gYG1pbmktJHtpfWA7XG4vLyAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmkpO1xuLy8gfTtcblxuXG5sZXQgZW1wdHlCb2FyZCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGorKykge1xuICAgICAgICBlbXB0eUJvYXJkLnB1c2goW2ksal0pO1xuICAgIH1cbn1cblxuXG4vLyBjb25zdCBydW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcnVuJyk7XG5cbi8vIHJ1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7fSk7XG4vLyAgICAgY29uc3Qgd29yZExpc3QgPSBidWlsZEJvYXJkKHdvcmRzKTtcbi8vICAgICBkaXNwbGF5V29yZHMod29yZExpc3QpO1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4vLyAgICAgICAgIGRpc3BsYXlXb3Jkcyh3b3JkTGlzdCk7XG4vLyAgICAgfSk7XG4vLyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=