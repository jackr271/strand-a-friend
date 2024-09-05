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
    height: 100vh;
    width: 100vw;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,gBAAgB;IAChB,mFAAmF;AACvF;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;;IAEb,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,mBAAmB;;AAEnB;IACI,0CAA0C;;IAE1C,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP;;mBAEe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,OAAO;IACP,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;;IAEnB,cAAc;IACd,gBAAgB;AACpB;;;AAGA,kBAAkB;;AAElB;IACI,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,8CAA8C;IAC9C,QAAQ;AACZ;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;GAEG;;AAEH;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;AACf;AACA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;GAGG;;;AAGH;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;AACf;;AAEA;;IAEI;QACI,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,WAAW;IACf;AACJ","sourcesContent":["html, body {\n    margin: 0; \n    overflow: hidden;\n    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    \n    justify-content: center;\n    gap: clamp(2em, 4em, 6em);\n    align-items: center;\n    background-color: #f4f4f9;\n}\n\n.UI-window {\n    width: min(50vh, 40vw);\n    flex: none;\n    aspect-ratio: 9 / 16;\n}\n\n.title-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Inputs styling */\n\n#inputs-container {\n    /* background-color: rgb(210, 210, 210); */\n\n    display: grid;\n    grid-template-rows: 2fr 2fr 10fr 2fr;\n}\n\n#char-count {\n    font-size: 3vh;\n}\n\n.span-holder {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.words-holder {\n    grid-row: 3 / 4;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\nform {\n    height: 90%;\n    display: flex;\n    flex-direction: column;\n    gap: 1%;\n    /* display: grid;\n    grid-template-rows: repeat(11, 1fr);\n    row-gap: 3px; */\n}\n\n.words-holder .button-holder {\n    height: 10%;\n}\n\nform .input-holder {\n    /* grid-row: 1 / 2 */\n    height: 9%;\n}\n\n.button-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#inputs-container .button-holder {\n    grid-row: -2 / -1;\n}\n\n#inputs-container .title-holder {\n    grid-row: 1 / 2;\n}\n\n.input-holder {\n    /* background-color: azure; */\n    justify-content: space-evenly;\n    align-items: stretch;\n    display: flex;\n}\n\n.input-holder div {\n    align-content: center;\n    font-size: xx-large;\n    font-weight: 400;\n}\n\n.input-holder input {\n    max-width: 90%;\n    flex: 1;\n    font-size: xx-large;\n    text-align: center;\n}\n\n.run {\n    flex: none;\n    padding: 2em;\n    aspect-ratio: 9 / 2;\n\n    font-size: 1vw;\n    font-weight: 500;\n}\n\n\n/* Board styling */\n\n#board-container {\n    /* background-color: rgb(255, 0, 170); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n#board-container .title-holder {\n    height: calc(100% / 8);\n}\n\n.board {\n    /* background-color: red; */\n    padding: 5px;\n    display: grid;\n    grid-template: repeat(8, 1fr) / repeat(6, 1fr);\n    gap: 5px;\n}\n\n.mini {\n    /* background-color: white; */\n    aspect-ratio: 1;\n}\n\n.letter {\n    font-size: xx-large;\n    font-weight: 600;\n}\n\n/* .word-0 {\n    background-color: yellow;\n} */\n\n.line {\n    position: absolute;\n    background-color: rgba(112, 186, 255, 0.8);\n    z-index: -1;\n}\n\n.circle {\n    position: absolute;\n    background-color: rgb(112, 186, 255);\n    z-index: -1;\n}\n/* body {\n    width: 100vw;\n    height: 100vh;\n\n    display: grid;\n    grid-template: 1fr 1fr 800px 1fr / 1fr 600px 1fr;\n}\n#run {\n    grid-area: 2 / 2 / 3 / 3;\n}\n\n#container {\n    grid-area: 3 / 2 / 4 / 3;\n    background-color: red;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template: repeat(8, 1fr) / repeat(6, 1fr);\n    gap: 5px;\n}\n*/\n.mini {\n    /* background-color: white; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/*.letter {\n    font-size: xx-large;\n    font-weight: 800;\n} */\n\n\n.line {\n    position: absolute;\n    background-color: rgba(112, 186, 255, 0.8);\n    z-index: -1;\n}\n\n.circle {\n    position: absolute;\n    background-color: rgb(112, 186, 255);\n    z-index: -1;\n}\n\n@media screen and (max-width: 768px) {\n\n    .input-holder div {\n        font-size: large;\n        font-weight: 400;\n    }\n\n    .letter {\n        font-size: large;\n    }\n   \n    .UI-window {\n        width: 90vw;\n    }\n}"],"sourceRoot":""}]);
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
        if (result === null)
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
        console.log(i);
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
    if (!checkInputs()) {
        console.log('failed');
        return;
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLHlCQUF5QixNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxxQ0FBcUMsaUJBQWlCLHVCQUF1Qix3RkFBd0YsS0FBSyxVQUFVLG9CQUFvQixtQkFBbUIsb0JBQW9CLG9DQUFvQyxnQ0FBZ0MsMEJBQTBCLGdDQUFnQyxHQUFHLGdCQUFnQiw2QkFBNkIsaUJBQWlCLDJCQUEyQixHQUFHLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLCtDQUErQywrQ0FBK0Msd0JBQXdCLDJDQUEyQyxHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxrQkFBa0Isc0JBQXNCLHNCQUFzQiw2QkFBNkIscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixzQkFBc0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsVUFBVSxrQkFBa0Isb0JBQW9CLDZCQUE2QixjQUFjLHVCQUF1QiwwQ0FBMEMsb0JBQW9CLEtBQUssa0NBQWtDLGtCQUFrQixHQUFHLHdCQUF3Qiw0Q0FBNEMsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxzQ0FBc0Msd0JBQXdCLEdBQUcscUNBQXFDLHNCQUFzQixHQUFHLG1CQUFtQixrQ0FBa0Msc0NBQXNDLDJCQUEyQixvQkFBb0IsR0FBRyx1QkFBdUIsNEJBQTRCLDBCQUEwQix1QkFBdUIsR0FBRyx5QkFBeUIscUJBQXFCLGNBQWMsMEJBQTBCLHlCQUF5QixHQUFHLFVBQVUsaUJBQWlCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLHVCQUF1QixHQUFHLCtDQUErQyw2Q0FBNkMsc0JBQXNCLDZCQUE2QixvQ0FBb0MsR0FBRyxvQ0FBb0MsNkJBQTZCLEdBQUcsWUFBWSxnQ0FBZ0MscUJBQXFCLG9CQUFvQixxREFBcUQsZUFBZSxHQUFHLFdBQVcsa0NBQWtDLHdCQUF3QixHQUFHLGFBQWEsMEJBQTBCLHVCQUF1QixHQUFHLGdCQUFnQiwrQkFBK0IsSUFBSSxhQUFhLHlCQUF5QixpREFBaUQsa0JBQWtCLEdBQUcsYUFBYSx5QkFBeUIsMkNBQTJDLGtCQUFrQixHQUFHLFdBQVcsbUJBQW1CLG9CQUFvQixzQkFBc0IsdURBQXVELEdBQUcsUUFBUSwrQkFBK0IsR0FBRyxnQkFBZ0IsK0JBQStCLDRCQUE0QixxQkFBcUIsc0JBQXNCLHFEQUFxRCxlQUFlLEdBQUcsYUFBYSxrQ0FBa0Msc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxlQUFlLDBCQUEwQix1QkFBdUIsSUFBSSxlQUFlLHlCQUF5QixpREFBaUQsa0JBQWtCLEdBQUcsYUFBYSx5QkFBeUIsMkNBQTJDLGtCQUFrQixHQUFHLDBDQUEwQywyQkFBMkIsMkJBQTJCLDJCQUEyQixPQUFPLGlCQUFpQiwyQkFBMkIsT0FBTyx1QkFBdUIsc0JBQXNCLE9BQU8sR0FBRyxtQkFBbUI7QUFDbjJLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDM08xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzRDtBQUN2Qjs7O0FBR2hCO0FBQ2Y7QUFDQSxlQUFlLGlEQUFNOztBQUVyQjtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLGlEQUFLO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBcUMsaURBQU07QUFDM0M7QUFDQTtBQUNBLHNDQUFzQyxpREFBTSxHQUFHLGlEQUFNO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksaURBQU0sRUFBRTtBQUNoQyx3QkFBd0IsSUFBSSxpREFBTSxFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsV0FBVzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLDJCQUEyQixPQUFPO0FBQ2xDLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRW1FO0FBQzVCOztBQUV2QztBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLG1DQUFtQyxRQUFRLGlEQUFNLEVBQUUsY0FBYyxpREFBTSxPQUFPLGdEQUFLO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixJQUFJLGlEQUFNLEVBQUU7QUFDcEMsNEJBQTRCLElBQUksaURBQU0sRUFBRTtBQUN4Qyw2QkFBNkIsMEJBQTBCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCwrQ0FBSTtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsZ0RBQUs7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0QsK0NBQUk7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCwrQ0FBSTtBQUMzRDtBQUNBLHFCQUFxQixpREFBTSxnQ0FBZ0MsK0NBQUk7QUFDL0Q7QUFDQTtBQUNBLDBDQUEwQywrQ0FBSTtBQUM5QztBQUNBLCtEQUErRCwrQ0FBSTtBQUNuRTtBQUNBLHlCQUF5QixpREFBTSxvQ0FBb0MsK0NBQUk7QUFDdkU7QUFDQTtBQUNBLG9CQUFvQixpREFBTTtBQUMxQiwwQ0FBMEMsK0NBQUk7QUFDOUM7QUFDQSwrREFBK0QsK0NBQUk7QUFDbkU7QUFDQSx5QkFBeUIsaURBQU0sb0NBQW9DLCtDQUFJO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSSxpREFBTSxFQUFFO0FBQ3BDLDRCQUE0QixJQUFJLGlEQUFNLEVBQUU7QUFDeEMsMENBQTBDLCtDQUFJO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixnREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixJQUFJLGlEQUFNLEVBQUU7QUFDcEMsNEJBQTRCLElBQUksaURBQU0sRUFBRTtBQUN4QywwQ0FBMEMsK0NBQUk7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUMsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MscURBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDJEQUEyRCxrRUFBa0U7QUFDN0gsbURBQW1ELCtEQUErRDtBQUNsSCxrQ0FBa0Msd0NBQXdDO0FBQzFFLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMEJBQTBCO0FBQy9ELHNDQUFzQywyQkFBMkI7QUFDakUsdURBQXVELFlBQVk7QUFDbkUsK0NBQStDLCtEQUErRDtBQUM5Ryw4QkFBOEIsd0NBQXdDO0FBQ3RFLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGlEQUFNO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQU07QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU07QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQU07QUFDaEM7QUFDQTs7QUFFQTtBQUNBLGVBQWUsaURBQU07QUFDckI7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2RRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsVUFBVTtBQUNwRTtBQUNBLHlEQUF5RCxRQUFRO0FBQ2pFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDLDJCQUEyQixPQUFPOztBQUVsQztBQUNBLHdCQUF3Qix5REFBeUQ7QUFDakYseUJBQXlCLGdEQUFnRDtBQUN6RTtBQUNBLHFDQUFxQyxNQUFNOztBQUUzQztBQUNBLDZDQUE2QyxNQUFNOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsU0FBUztBQUNyQyw2QkFBNkIsU0FBUztBQUN0QztBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsMkJBQTJCLG9DQUFvQzs7QUFFL0Q7QUFDQSwrQ0FBK0MsTUFBTTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0RBQW9ELEtBQUsseURBQXlEO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0pxQztBQUNJOztBQUUxQjs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxvREFBWSxDQUFDLDBEQUFVO0FBQy9CLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVU7QUFDOUIsUUFBUSxxREFBWTs7QUFFcEI7QUFDQTtBQUNBLG9CQUFvQiwwREFBVTtBQUM5QixZQUFZLG9EQUFZO0FBQ3hCLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLG9EQUFZO0FBQ3hCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsSUFBSTtBQUNuRixLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pRbUg7O0FBRXBHOztBQUVmO0FBQ0Esc0JBQXNCLHFEQUFVO0FBQ2hDLDJCQUEyQixpREFBTTtBQUNqQyxtQ0FBbUMscURBQVUsRUFBRSxtREFBUTs7QUFFdkQ7QUFDQSw0QkFBNEIscURBQVU7QUFDdEMsa0RBQWtELCtDQUFJLEVBQUUsZ0RBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDhDQUFHLEVBQUUsaURBQU07QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxtREFBUTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLG1EQUFROztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLG1EQUFROztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFHO0FBQ3BCO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0EsaUJBQWlCLCtDQUFJO0FBQ3JCO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEscURBQVUsU0FBUyxtREFBUTs7QUFFeEMsYUFBYSxtREFBUSxTQUFTLHFEQUFVOztBQUV4QyxhQUFhLDhDQUFHLFNBQVMsaURBQU07O0FBRS9CLGFBQWEsaURBQU0sU0FBUyw4Q0FBRzs7QUFFL0IsYUFBYSwrQ0FBSSxTQUFTLGdEQUFLOztBQUUvQixhQUFhLGdEQUFLLFNBQVMsK0NBQUk7QUFDL0I7QUFDQTs7Ozs7O1VDbkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNVO0FBQ2E7QUFDSjtBQUNDOztBQUV6QyxtREFBaUI7O0FBRWpCO0FBQ0EsSUFBSSxtREFBaUI7QUFDckIsQ0FBQzs7QUFFRCxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTs7O0FBR0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvYm9hcmQtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvLi9zcmMvbmV3LmpzIiwid2VicGFjazovL2Rldi1zZXR1cC8uL3NyYy9zcGFuYWdyYW0uanMiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXYtc2V0dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rldi1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGV2LXNldHVwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiBjbGFtcCgyZW0sIDRlbSwgNmVtKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0Zjk7XG59XG5cbi5VSS13aW5kb3cge1xuICAgIHdpZHRoOiBtaW4oNTB2aCwgNDB2dyk7XG4gICAgZmxleDogbm9uZTtcbiAgICBhc3BlY3QtcmF0aW86IDkgLyAxNjtcbn1cblxuLnRpdGxlLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBJbnB1dHMgc3R5bGluZyAqL1xuXG4jaW5wdXRzLWNvbnRhaW5lciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApOyAqL1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnIgMTBmciAyZnI7XG59XG5cbiNjaGFyLWNvdW50IHtcbiAgICBmb250LXNpemU6IDN2aDtcbn1cblxuLnNwYW4taG9sZGVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53b3Jkcy1ob2xkZXIge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzcHg7XG59XG5cbmZvcm0ge1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDElO1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XG4gICAgcm93LWdhcDogM3B4OyAqL1xufVxuXG4ud29yZHMtaG9sZGVyIC5idXR0b24taG9sZGVyIHtcbiAgICBoZWlnaHQ6IDEwJTtcbn1cblxuZm9ybSAuaW5wdXQtaG9sZGVyIHtcbiAgICAvKiBncmlkLXJvdzogMSAvIDIgKi9cbiAgICBoZWlnaHQ6IDklO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jaW5wdXRzLWNvbnRhaW5lciAuYnV0dG9uLWhvbGRlciB7XG4gICAgZ3JpZC1yb3c6IC0yIC8gLTE7XG59XG5cbiNpbnB1dHMtY29udGFpbmVyIC50aXRsZS1ob2xkZXIge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLmlucHV0LWhvbGRlciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LWhvbGRlciBkaXYge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbnB1dC1ob2xkZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ydW4ge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGFzcGVjdC1yYXRpbzogOSAvIDI7XG5cbiAgICBmb250LXNpemU6IDF2dztcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi8qIEJvYXJkIHN0eWxpbmcgKi9cblxuI2JvYXJkLWNvbnRhaW5lciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMTcwKTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbiNib2FyZC1jb250YWluZXIgLnRpdGxlLWhvbGRlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyA4KTtcbn1cblxuLmJvYXJkIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoNiwgMWZyKTtcbiAgICBnYXA6IDVweDtcbn1cblxuLm1pbmkge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLmxldHRlciB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiAud29yZC0wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59ICovXG5cbi5saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDE4NiwgMjU1LCAwLjgpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTg2LCAyNTUpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuLyogYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgODAwcHggMWZyIC8gMWZyIDYwMHB4IDFmcjtcbn1cbiNydW4ge1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiAzIC8gMiAvIDQgLyAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcblxuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoNiwgMWZyKTtcbiAgICBnYXA6IDVweDtcbn1cbiovXG4ubWluaSB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKi5sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn0gKi9cblxuXG4ubGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxODYsIDI1NSwgMC44KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDE4NiwgMjU1KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgIC5pbnB1dC1ob2xkZXIgZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAubGV0dGVyIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG4gICBcbiAgICAuVUktd2luZG93IHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhOztJQUViLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLDBDQUEwQzs7SUFFMUMsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87SUFDUDs7bUJBRWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7O0lBRW5CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSx3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsUUFBUTtBQUNaOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQkM7QUFDRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0dBR0c7OztBQUdIO0lBQ0ksa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiBjbGFtcCgyZW0sIDRlbSwgNmVtKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmOTtcXG59XFxuXFxuLlVJLXdpbmRvdyB7XFxuICAgIHdpZHRoOiBtaW4oNTB2aCwgNDB2dyk7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGFzcGVjdC1yYXRpbzogOSAvIDE2O1xcbn1cXG5cXG4udGl0bGUtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIElucHV0cyBzdHlsaW5nICovXFxuXFxuI2lucHV0cy1jb250YWluZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7ICovXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDJmciAxMGZyIDJmcjtcXG59XFxuXFxuI2NoYXItY291bnQge1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuLnNwYW4taG9sZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53b3Jkcy1ob2xkZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMSU7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgICByb3ctZ2FwOiAzcHg7ICovXFxufVxcblxcbi53b3Jkcy1ob2xkZXIgLmJ1dHRvbi1ob2xkZXIge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuZm9ybSAuaW5wdXQtaG9sZGVyIHtcXG4gICAgLyogZ3JpZC1yb3c6IDEgLyAyICovXFxuICAgIGhlaWdodDogOSU7XFxufVxcblxcbi5idXR0b24taG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbnB1dHMtY29udGFpbmVyIC5idXR0b24taG9sZGVyIHtcXG4gICAgZ3JpZC1yb3c6IC0yIC8gLTE7XFxufVxcblxcbiNpbnB1dHMtY29udGFpbmVyIC50aXRsZS1ob2xkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5pbnB1dC1ob2xkZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5wdXQtaG9sZGVyIGRpdiB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmlucHV0LWhvbGRlciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ydW4ge1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogOSAvIDI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5cXG4vKiBCb2FyZCBzdHlsaW5nICovXFxuXFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDE3MCk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jYm9hcmQtY29udGFpbmVyIC50aXRsZS1ob2xkZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDgpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoNiwgMWZyKTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5taW5pIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLmxldHRlciB7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIC53b3JkLTAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufSAqL1xcblxcbi5saW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMTg2LCAyNTUsIDAuOCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxODYsIDI1NSk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG4vKiBib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDgwMHB4IDFmciAvIDFmciA2MDBweCAxZnI7XFxufVxcbiNydW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgMWZyKSAvIHJlcGVhdCg2LCAxZnIpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuKi9cXG4ubWluaSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyoubGV0dGVyIHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59ICovXFxuXFxuXFxuLmxpbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxODYsIDI1NSwgMC44KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDE4NiwgMjU1KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFxuICAgIC5pbnB1dC1ob2xkZXIgZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuICAgIC5sZXR0ZXIge1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgfVxcbiAgIFxcbiAgICAuVUktd2luZG93IHtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtNQVhST1csIE1BWENPTCwgRkFJTEVEfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEJvYXJkKHdvcmRzKXtcbiAgICBpZiAoIWNoZWNrVmFsaWQod29yZHMpKVxuICAgICAgICByZXR1cm4gRkFJTEVEO1xuXG4gICAgbGV0IGN1cnJlbnQgPSBbW3dvcmRzLCBlbXB0eUJvYXJkKCldXTtcbiAgICBjb25zdCB3b3JkTGlzdCA9IFtdO1xuICAgIGxldCBpc1NwYW4gPSB0cnVlOyAvLyB0cnVlIGZvciBmaXJzdCBjYWxsLCB0aGVuIHNldCB0byBmYWxzZVxuXG4gICAgd2hpbGUgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgdXBOZXh0ID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc3ViQm9hcmQgb2YgY3VycmVudCkge1xuXG4gICAgICAgICAgICBsZXQgdGhlQm9hcmQgPSBuZXcgQm9hcmQoc3ViQm9hcmRbMF0sIHN1YkJvYXJkWzFdLCBpc1NwYW4pO1xuICAgICAgICAgICAgaXNTcGFuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbmV3V29yZCA9IHRoZUJvYXJkLmdldFdvcmQoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3U3ViQm9hcmRzID0gdGhlQm9hcmQuZ2V0U3ViQm9hcmRzKCk7XG4gICAgICAgICAgICBpZiAoIW5ld1dvcmRbMF0ucG9zKVxuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZEJvYXJkKHdvcmRzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmV3U3ViQm9hcmQgb2YgbmV3U3ViQm9hcmRzKVxuICAgICAgICAgICAgICAgIHVwTmV4dC5wdXNoKG5ld1N1YkJvYXJkKTtcbiAgICAgICAgICAgIHdvcmRMaXN0LnB1c2gobmV3V29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IHVwTmV4dC5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCk7IC8vIGZpbHRlciBwcmV2ZW50cyBlbXB0eSBzdWJCb2FyZHMgZnJvbSBiZWluZyBhZGRlZFxuICAgIH1cblxuICAgIHJldHVybiB3b3JkTGlzdDtcbn1cblxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkKHdvcmRzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICh3b3Jkc1swXS5sZW5ndGggPj0gTUFYQ09MKTtcbiAgICByZXN1bHQgPSAocmVzdWx0ICYmIHdvcmRzLnNsaWNlKDEpLnJlZHVjZSgodmFsdWUsIGN1cnJlbnRXb3JkKSA9PiB2YWx1ZSAmJiAoY3VycmVudFdvcmQubGVuZ3RoID49IDQpLCB0cnVlKSk7XG4gICAgY29uc3QgY2hhclN1bSA9IHdvcmRzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRXb3JkKSA9PiB0b3RhbCArIGN1cnJlbnRXb3JkLmxlbmd0aCwgMCk7XG4gICAgcmVzdWx0ID0gKHJlc3VsdCAmJiAoY2hhclN1bSA9PT0gKE1BWENPTCAqIE1BWFJPVykpKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlbXB0eUJvYXJkKCkge1xuICAgIGxldCBlbXB0eUJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVhST1c7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWENPTDsgaisrKSB7XG4gICAgICAgICAgICBlbXB0eUJvYXJkLnB1c2goW2ksal0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbXB0eUJvYXJkO1xufVxuXG4vLyBmdW5jdGlvbiBwcmludFN1YkJvYXJkKG9wZW5TcGFjZXMpIHtcbi8vICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0sICgpID0+IEFycmF5KDYpLmZpbGwoJzEnKSk7XG5cbi8vICAgICBmb3IgKGNvbnN0IHNwYWNlIG9mIG9wZW5TcGFjZXMpXG4vLyAgICAgICAgIGFycltzcGFjZVswXV1bc3BhY2VbMV1dID0gJzAnO1xuXG4vLyAgICAgbGV0IHN0cmluZyA9ICcnO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4vLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNjsgaisrKSB7XG4vLyAgICAgICAgICAgICBzdHJpbmcgKz0gYCR7YXJyW2ldW2pdfSwgYFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHN0cmluZyArPSAnXFxuJztcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coc3RyaW5nKTtcbi8vIH0iLCJpbXBvcnQge1RBS0VOLCBPUEVOLCBNQVhST1csIE1BWENPTCwgRkFJTEVEfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgU3BhbmFncmFtIGZyb20gXCIuL3NwYW5hZ3JhbS5qc1wiO1xuXG5sZXQgbGV0dGVyQ291bnRlciA9IDA7XG5jb25zdCBTVEFSVENPVU5URVJNQVggPSA1MDA7XG5jb25zdCBMRVRURVJDT1VOVEVSTUFYID0gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHdvcmRzLCBvcGVuU3BhY2VzLCBpc1NwYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNwYWNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE1BWFJPVyB9LCAoKSA9PiBBcnJheShNQVhDT0wpLmZpbGwoVEFLRU4pKTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5pc1NwYW4gPSBpc1NwYW47XG4gICAgICAgIHRoaXMuc3BhbmFncmFtTWFuYWdlciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy4jY2xlYXJTcGFjZXMob3BlblNwYWNlcyk7XG5cbiAgICAgICAgdGhpcy53b3JkID0gd29yZHNbMF07XG4gICAgICAgIHRoaXMubGF0ZXJXb3JkcyA9IHdvcmRzLnNsaWNlKDEpO1xuICAgICAgICB0aGlzLnN1YkJvYXJkcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucGxhY2VtZW50TWFuYWdlciA9IHRoaXMuI3BsYWNlbWVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy53b3JkUG9zID0gdGhpcy4jcGxhY2VXb3JkKCk7XG4gICAgfVxuXG4gICAgZ2V0U3ViQm9hcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJCb2FyZHM7XG4gICAgfVxuXG4gICAgZ2V0V29yZCgpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLndvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7cG9zOiB0aGlzLndvcmRQb3NbaV0sIGxldHRlcjogdGhpcy53b3JkW2ldfSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcmludEJvYXJkKCkge1xuICAgICAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYUk9XOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTUFYQ09MOyBqKyspIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gYCR7dGhpcy5zcGFjZXNbaV1bal0gPyAxIDogMH0sIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzdHJpbmcpO1xuICAgIH1cblxuICAgICNjbGVhclNwYWNlcyhvcGVuU3BhY2VzKSB7XG4gICAgICAgIGZvciAobGV0IGNvb3JkcyBvZiBvcGVuU3BhY2VzKSB7XG4gICAgICAgICAgICB0aGlzLnNwYWNlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSBPUEVOO1xuICAgICAgICAgICAgdGhpcy5zaXplKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZmlsbFNwYWNlKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BhY2VzW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gPSBUQUtFTjtcbiAgICB9XG5cbiAgICAjY2xlYXJTcGFjZShwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNwYWNlc1twb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gT1BFTjtcbiAgICB9XG5cbiAgICAjZ2V0TmVpZ2hib3JzKGksIGopIHtcbiAgICAgICAgbGV0IG5laWdoYm9ycyA9IFtdO1xuICAgICAgICBpZiAoKGogLSAxID49IDApICYmICh0aGlzLnNwYWNlc1tpXVtqIC0gMV0gPT09IE9QRU4pKVxuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW2ksIGogLSAxXSlcbiAgICAgICAgaWYgKChqICsgMSA8IE1BWENPTCkgJiYgKHRoaXMuc3BhY2VzW2ldW2ogKyAxXSA9PT0gT1BFTikpXG4gICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSwgaiArIDFdKVxuICAgICAgICBpZiAoaSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VzW2kgLSAxXVtqXSA9PT0gT1BFTilcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSAtIDEsIGpdKVxuICAgICAgICAgICAgaWYgKChqIC0gMSA+PSAwKSAmJiAodGhpcy5zcGFjZXNbaSAtIDFdW2ogLSAxXSA9PT0gT1BFTikpXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW2kgLSAxLCBqIC0gMV0pXG4gICAgICAgICAgICBpZiAoKGogKyAxIDwgTUFYQ09MKSAmJiAodGhpcy5zcGFjZXNbaSAtIDFdW2ogKyAxXSA9PT0gT1BFTikpXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2goW2kgLSAxLCBqICsgMV0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgKyAxIDwgTUFYUk9XKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGFjZXNbaSArIDFdW2pdID09PSBPUEVOKVxuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKFtpICsgMSwgal0pXG4gICAgICAgICAgICBpZiAoKGogLSAxID49IDApICYmICh0aGlzLnNwYWNlc1tpICsgMV1baiAtIDFdID09PSBPUEVOKSlcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSArIDEsIGogLSAxXSlcbiAgICAgICAgICAgIGlmICgoaiArIDEgPCBNQVhDT0wpICYmICh0aGlzLnNwYWNlc1tpICsgMV1baiArIDFdID09PSBPUEVOKSlcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChbaSArIDEsIGogKyAxXSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JzO1xuICAgIH1cblxuICAgICNnZXRPcGVuU3BhY2VzKCkge1xuICAgICAgICBjb25zdCBvcGVuU3BhY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYUk9XOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVhDT0w7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwYWNlc1tpXVtqXSA9PT0gT1BFTilcbiAgICAgICAgICAgICAgICAgICAgb3BlblNwYWNlcy5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3BlblNwYWNlcztcbiAgICB9XG5cbiAgICAjZ2V0U3ViQm9hcmQoaSwgaikge1xuICAgICAgICBsZXQgYXZhaWxhYmxlID0gW1tpLCBqXV07XG4gICAgICAgIHRoaXMuc3BhY2VzW2ldW2pdID0gVEFLRU47XG4gICAgICAgIGxldCBjdXJyZW50ID0gW1tpLCBqXV07XG4gICAgICAgIHdoaWxlIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB1cE5leHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLiNnZXROZWlnaGJvcnMoY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuZWlnaGJvciBvZiBuZWlnaGJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBOZXh0LnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNmaWxsU3BhY2UobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IHVwTmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlO1xuICAgIH1cblxuICAgICNidWlsZFN1YkJvYXJkcygpIHtcbiAgICAgICAgY29uc3Qgc3ViQm9hcmRzID0gW107XG4gICAgICAgIGNvbnN0IG9wZW5TcGFjZXMgPSB0aGlzLiNnZXRPcGVuU3BhY2VzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVhST1c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVhDT0w7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwYWNlc1tpXVtqXSA9PT0gT1BFTilcbiAgICAgICAgICAgICAgICAgICAgc3ViQm9hcmRzLnB1c2godGhpcy4jZ2V0U3ViQm9hcmQoaSwgaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzcGFjZSBvZiBvcGVuU3BhY2VzKVxuICAgICAgICAgICAgdGhpcy4jY2xlYXJTcGFjZShzcGFjZSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YkJvYXJkcztcbiAgICB9XG5cbiAgICAjY2hlY2tWaWFibGVTdWJCb2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHN1YkJvYXJkcyA9IHRoaXMuI2J1aWxkU3ViQm9hcmRzKCk7XG4gICAgICAgIGxldCB3b3JkcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2YgdGhpcy5sYXRlcldvcmRzKVxuICAgICAgICAgICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICAgICAgY29uc3Qgc3ViQm9hcmRMaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBzdWJCb2FyZCBvZiBzdWJCb2FyZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzdWJCb2FyZC5sZW5ndGg7IC8vIHN1YkJvYXJkIGlzIGxpc3Qgb2Ygb3BlbiBzcGFjZXNcbiAgICAgICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gZmluZE1hdGNoaW5nU2l6ZXMoc2l6ZSwgd29yZHMpOyAvLyBhcnJheSBvZiBsZW5ndGhzIG9mIHdvcmRzIHRoYXQgZml0IGludG8gc3ViQm9hcmRcbiAgICAgICAgICAgIGlmICh3b3JkTGlzdC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgc3ViQm9hcmRMaXN0LnB1c2goW3dvcmRMaXN0LCBzdWJCb2FyZF0pO1xuICAgICAgICAgICAgd29yZHMgPSB3b3Jkcy5maWx0ZXIoZWxlbWVudCA9PiAhd29yZExpc3QuaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJCb2FyZHMgPSBzdWJCb2FyZExpc3Q7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICNwbGFjZW1lbnRNYW5hZ2VyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NwYW4pIHtcbiAgICAgICAgICAgIHRoaXMuc3BhbmFncmFtTWFuYWdlciA9IG5ldyBTcGFuYWdyYW0odGhpcy53b3JkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHJ5U3BhY2U6IChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYW5hZ3JhbU1hbmFnZXIuaW5jcmVtZW50VGFyZ2V0cyhwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2ZpbGxTcGFjZShwb3NpdGlvbilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWxTcGFjZTogKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BhbmFncmFtTWFuYWdlci5kZWNyZW1lbnRUYXJnZXRzKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xlYXJTcGFjZShwb3NpdGlvbilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoZWNrVmlhYmxlOiAocG9zaXRpb24sIHN1YldvcmRMZW5ndGgpID0+IHtyZXR1cm4gdGhpcy5zcGFuYWdyYW1NYW5hZ2VyLmNoZWNrVmlhYmxlKHBvc2l0aW9uLCBzdWJXb3JkTGVuZ3RoKX0sXG4gICAgICAgICAgICAgICAgZ2V0VmlhYmxlTmVpZ2hib3JzOiAocG9zaXRpb24pID0+IHtyZXR1cm4gcmFuZG9taXplKHRoaXMuI2dldE5laWdoYm9ycyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pKX0sXG4gICAgICAgICAgICAgICAgZ2V0U3RhcnRzOiAoKSA9PiB7cmV0dXJuIHJhbmRvbWl6ZSh0aGlzLiNnZXRPcGVuU3BhY2VzKCkpfSxcbiAgICAgICAgICAgICAgICBjaGVja1ZpYWJsZUZpbmFsOiAoKSA9PiB7cmV0dXJuICgodGhpcy5sYXRlcldvcmRzLmxlbmd0aCA9PT0gMCkgfHwgdGhpcy4jY2hlY2tWaWFibGVTdWJCb2FyZHMoKSl9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyeVNwYWNlOiAocG9zaXRpb24pID0+IHt0aGlzLiNmaWxsU3BhY2UocG9zaXRpb24pfSxcbiAgICAgICAgICAgIGZhaWxTcGFjZTogKHBvc2l0aW9uKSA9PiB7dGhpcy4jY2xlYXJTcGFjZShwb3NpdGlvbil9LFxuICAgICAgICAgICAgY2hlY2tWaWFibGU6IChwb3NpdGlvbiwgc3ViV29yZExlbmd0aCkgPT4ge3JldHVybiB0cnVlfSxcbiAgICAgICAgICAgIGdldFZpYWJsZU5laWdoYm9yczogKHBvc2l0aW9uKSA9PiB7cmV0dXJuIHJhbmRvbWl6ZSh0aGlzLiNnZXROZWlnaGJvcnMocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKSl9LFxuICAgICAgICAgICAgZ2V0U3RhcnRzOiAoKSA9PiB7cmV0dXJuIHJhbmRvbWl6ZSh0aGlzLiNnZXRPcGVuU3BhY2VzKCkpfSxcbiAgICAgICAgICAgIGNoZWNrVmlhYmxlRmluYWw6ICgpID0+IHtyZXR1cm4gKCh0aGlzLmxhdGVyV29yZHMubGVuZ3RoID09PSAwKSB8fCB0aGlzLiNjaGVja1ZpYWJsZVN1YkJvYXJkcygpKX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNwbGFjZVdvcmQoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0cyA9IHRoaXMucGxhY2VtZW50TWFuYWdlci5nZXRTdGFydHMoKTtcbiAgICAgICAgY29uc3Qgc3RhcnRzTGVuZ3RoID0gc3RhcnRzLmxlbmd0aDtcblxuICAgICAgICBsZXQgc3RhcnRDb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKHN0YXJ0Q291bnRlciA8IFNUQVJUQ09VTlRFUk1BWCkge1xuICAgICAgICAgICAgbGV0dGVyQ291bnRlciA9IDA7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0c1tzdGFydENvdW50ZXIgJSBzdGFydHNMZW5ndGhdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcGxhY2VMZXR0ZXIoc3RhcnQsIHRoaXMud29yZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IEZBSUxFRClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgc3RhcnRDb3VudGVyKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRkFJTEVEO1xuICAgIH1cblxuICAgICNwbGFjZUxldHRlcihwb3NpdGlvbiwgc3ViV29yZCkge1xuICAgICAgICBpZiAobGV0dGVyQ291bnRlciA+IExFVFRFUkNPVU5URVJNQVgpXG4gICAgICAgICAgICByZXR1cm4gRkFJTEVEO1xuICAgICAgICBsZXR0ZXJDb3VudGVyKys7XG5cbiAgICAgICAgdGhpcy5wbGFjZW1lbnRNYW5hZ2VyLnRyeVNwYWNlKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKCF0aGlzLnBsYWNlbWVudE1hbmFnZXIuY2hlY2tWaWFibGUocG9zaXRpb24sIHN1YldvcmQubGVuZ3RoKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRNYW5hZ2VyLmZhaWxTcGFjZShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gRkFJTEVEO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1YldvcmQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnRNYW5hZ2VyLmNoZWNrVmlhYmxlRmluYWwoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VtZW50TWFuYWdlci5mYWlsU3BhY2UocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBGQUlMRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcGVuTmVpZ2hib3JzID0gdGhpcy5wbGFjZW1lbnRNYW5hZ2VyLmdldFZpYWJsZU5laWdoYm9ycyhwb3NpdGlvbik7XG4gICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3Igb2Ygb3Blbk5laWdoYm9ycykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy4jcGxhY2VMZXR0ZXIobmVpZ2hib3IsIHN1YldvcmQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBGQUlMRUQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwb3NpdGlvbl0uY29uY2F0KHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYWNlbWVudE1hbmFnZXIuZmFpbFNwYWNlKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIEZBSUxFRDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZShhcnJheSkge1xuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7IFxuICAgICAgICAvLyBHZW5lcmF0ZSByYW5kb20gbnVtYmVyIFxuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICAgICAgIFxuICAgIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZmluZE1hdGNoaW5nU2l6ZXMoc2l6ZSwgd29yZHMpIHtcbiAgICBjb25zdCB3b3JkU2V0ID0gd29yZHMucmVkdWNlKChzdWJzZXRzLCB2YWx1ZSkgPT4gXG4gICAgICAgIHN1YnNldHMuY29uY2F0KHN1YnNldHMubWFwKHNldCA9PiBbdmFsdWUsIC4uLnNldF0pKSwgXG4gICAgICAgIFtbXV0pO1xuXG4gICAgZm9yIChsZXQgc3Vic2V0IG9mIHdvcmRTZXQpIHtcbiAgICAgICAgaWYgKHNpemUgPT09IHN1bVdvcmRMZW5ndGhzKHN1YnNldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzZXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiBzdW1Xb3JkTGVuZ3Rocyh3b3Jkcykge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3JkcylcbiAgICAgICAgc3VtICs9IHdvcmQubGVuZ3RoO1xuICAgIHJldHVybiBzdW07XG59IiwiZXhwb3J0IGNvbnN0IEhPUklaT05UQUwgPSAnaCc7XG5leHBvcnQgY29uc3QgVkVSVElDQUwgPSAndic7XG5cbmV4cG9ydCBjb25zdCBUT1AgPSAndCc7XG5leHBvcnQgY29uc3QgQk9UVE9NID0gJ2InO1xuZXhwb3J0IGNvbnN0IExFRlQgPSAnbCc7XG5leHBvcnQgY29uc3QgUklHSFQgPSAncic7XG5cbmV4cG9ydCBjb25zdCBUQUtFTiA9IHRydWU7XG5leHBvcnQgY29uc3QgT1BFTiA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgTUFYUk9XID0gODtcbmV4cG9ydCBjb25zdCBNQVhDT0wgPSA2O1xuXG5leHBvcnQgY29uc3QgRkFJTEVEID0gLTE7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVdvcmRzKHdvcmRMaXN0LCBpc01vYmlsZSA9IGZhbHNlKSB7XG4gICAgcmVuZGVyV29yZHMod29yZExpc3QsIGlzTW9iaWxlKTtcbn1cblxubGV0IGlzU3BhbiA9IHRydWU7XG5jb25zdCBjb2xvciA9IGAxNDUsIDI1NSwgMTEyYDtcblxuZnVuY3Rpb24gcmVuZGVyV29yZHMod29yZExpc3QsIGlzTW9iaWxlKSB7XG5cbiAgICBsZXQgcmFkaXVzID0gMzA7XG4gICAgbGV0IGhlaWdodCA9IDIwO1xuXG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzbWFsbCcpO1xuICAgICAgICByYWRpdXMgPSAyMDtcbiAgICAgICAgaGVpZ2h0ID0gMTU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgaXNTcGFuID0gdHJ1ZTtcblxuICAgIGNsZWFyR3JpZCgpO1xuXG4gICAgbGV0IHdvcmROdW0gPSAwO1xuICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3JkTGlzdCkge1xuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG5cbiAgICAgICAgZm9yIChjb25zdCBsZXR0ZXIgb2Ygd29yZCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IGxldHRlci5wb3NbMF07XG4gICAgICAgICAgICBjb25zdCBqID0gbGV0dGVyLnBvc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IG1pbmkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgI21pbmktJHtpICogNiArIGp9YCk7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldHRlckhvbGRlci5jbGFzc0xpc3QuYWRkKCdsZXR0ZXInLCBgd29yZC0ke3dvcmROdW19YCk7XG4gICAgICAgICAgICBsZXR0ZXJIb2xkZXIuaW5uZXJUZXh0ID0gbGV0dGVyLmxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbWluaS5hcHBlbmRDaGlsZChsZXR0ZXJIb2xkZXIpO1xuXG4gICAgICAgICAgICBkcmF3Q2lyY2xlKG1pbmksIHJhZGl1cyk7XG5cbiAgICAgICAgICAgIGlmIChwcmV2KVxuICAgICAgICAgICAgICAgIGRyYXdMaW5lQmV0d2VlblBvaW50cyhwcmV2LCBtaW5pLCBoZWlnaHQpO1xuICAgICAgICAgICAgcHJldiA9IG1pbmk7XG4gICAgICAgIH1cblxuICAgICAgICBpc1NwYW4gPSBmYWxzZTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJHcmlkKCkge1xuICAgIGNvbnN0IG1pbmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbmknKTtcbiAgICBmb3IgKGNvbnN0IG1pbmkgb2YgbWluaXMpXG4gICAgICAgIG1pbmkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBsaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJyk7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKVxuICAgICAgICBsaW5lLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgY2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXJjbGUnKTtcbiAgICBmb3IgKGNvbnN0IGNpcmNsZSBvZiBjaXJjbGVzKVxuICAgICAgICBjaXJjbGUucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lQmV0d2VlblBvaW50cyhncmlkSXRlbTEsIGdyaWRJdGVtMiwgaGVpZ2h0KSB7XG4gICAgLy8gY29uc29sZS5sb2coZ3JpZEl0ZW0xKTtcbiAgICAvLyBjb25zb2xlLmxvZyhncmlkSXRlbTEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgIGNvbnN0IHN0YXJ0ID0gZ3JpZEl0ZW0xLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVuZCA9IGdyaWRJdGVtMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBpbiB4IGFuZCB5IGNvb3JkaW5hdGVzXG4gICAgY29uc3QgZGVsdGFYID0gZ2V0Q2VudGVyKGVuZClbMF0gLSBnZXRDZW50ZXIoc3RhcnQpWzBdO1xuICAgIGNvbnN0IGRlbHRhWSA9IGdldENlbnRlcihlbmQpWzFdIC0gZ2V0Q2VudGVyKHN0YXJ0KVsxXTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lICh1c2luZyB0aGUgZGlzdGFuY2UgZm9ybXVsYSlcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgYW5nbGUgb2YgdGhlIGxpbmVcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpICogMTgwIC8gTWF0aC5QSTtcblxuICAgIC8vIENyZWF0ZSBhIGxpbmUgZWxlbWVudFxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcbiAgICBsaW5lLnN0eWxlLndpZHRoID0gYCR7bGVuZ3RofXB4YDtcbiAgICBsaW5lLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgbGluZSBhdCB0aGUgc3RhcnRpbmcgcG9pbnRcbiAgICBsaW5lLnN0eWxlLnRvcCA9IGAkeyhzdGFydC50b3AgKyBzdGFydC5ib3R0b20gLSBoZWlnaHQpIC8gMiArIHdpbmRvdy5zY3JvbGxZfXB4YDtcbiAgICBsaW5lLnN0eWxlLmxlZnQgPSBgJHsoc3RhcnQubGVmdCArIHN0YXJ0LnJpZ2h0KSAvIDIgKyB3aW5kb3cuc2Nyb2xsWH1weGA7XG4gICAgbGluZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnbGVmdCc7XG4gICAgbGluZS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGV9ZGVnKWA7XG5cbiAgICBpZiAoaXNTcGFuKVxuICAgICAgICBsaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2JhKCR7Y29sb3J9LCAwLjgpYDtcblxuICAgIC8vIEFwcGVuZCB0aGUgbGluZSB0byB0aGUgZ3JpZCBjb250YWluZXJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5hcHBlbmRDaGlsZChsaW5lKTtcbn1cblxuZnVuY3Rpb24gZHJhd0NpcmNsZShncmlkSXRlbSwgcmFkaXVzKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdyaWRJdGVtKTtcbiAgICAvLyBjb25zb2xlLmxvZyhncmlkSXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGdyaWRJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjZW50ZXIpO1xuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2lyY2xlLmNsYXNzTGlzdCA9ICdjaXJjbGUnO1xuICAgIGNpcmNsZS5zdHlsZS53aWR0aCA9IGAkezIqcmFkaXVzfXB4YDtcbiAgICBjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gYCR7MipyYWRpdXN9cHhgO1xuICAgIGNpcmNsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMTAwJWA7XG4gICAgY2lyY2xlLnN0eWxlLnRvcCA9IGAke2NlbnRlclsxXSAtIHJhZGl1cyArIHdpbmRvdy5zY3JvbGxZfXB4YDtcbiAgICBjaXJjbGUuc3R5bGUubGVmdCA9IGAke2NlbnRlclswXSAtIHJhZGl1cyArIHdpbmRvdy5zY3JvbGxYfXB4YDtcblxuICAgIGlmIChpc1NwYW4pXG4gICAgICAgIGNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgke2NvbG9yfSwgMSlgO1xuXG4gICAgLy8gY29uc29sZS5sb2coY2lyY2xlLnN0eWxlLnRvcCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJykuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VudGVyKHJlY3RhbmdsZSkge1xuICAgIGNvbnN0IHggPSAocmVjdGFuZ2xlLmxlZnQgKyByZWN0YW5nbGUucmlnaHQpIC8gMjtcbiAgICBjb25zdCB5ID0gKHJlY3RhbmdsZS50b3AgKyByZWN0YW5nbGUuYm90dG9tKSAvIDI7XG5cbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG4vLyBmdW5jdGlvbiBidWlsZEdyaWQod29yZExpc3QpIHtcbi8vICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0sICgpID0+IEFycmF5KDYpLmZpbGwoJzAnKSk7XG4vLyAgICAgbGV0IHdvcmROdW0gPSAwO1xuLy8gICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3JkTGlzdCkge1xuLy8gICAgICAgICBmb3IgKGNvbnN0IGxldHRlciBvZiB3b3JkKSB7XG4vLyAgICAgICAgICAgICBpZiAoIWxldHRlci5wb3MpXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFdvcmQ6ICR7d29yZC5yZWR1Y2UoKHRvUHJpbnQsIHgpID0+IHRvUHJpbnQgKyB4LmxldHRlciwgJycpfSwgICR7d29yZC5yZWR1Y2UoKHRvUHJpbnQsIHgpID0+IHRvUHJpbnQgKyBTdHJpbmcoeC5wb3MpLCAnJyl9YCk7XG4vLyAgICAgICAgICAgICBjb25zdCBpID0gbGV0dGVyLnBvc1swXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGogPSBsZXR0ZXIucG9zWzFdO1xuLy8gICAgICAgICAgICAgYXJyW2ldW2pdID0gKFt3b3JkTnVtLCBsZXR0ZXIubGV0dGVyXSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgd29yZE51bSsrO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBhcnI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHByaW50V29yZHMod29yZExpc3QpIHtcblxuLy8gICAgIGxldCB3b3JkR3JpZCA9IGJ1aWxkR3JpZCh3b3JkTGlzdCk7XG5cbi8vICAgICBsZXQgc3RyaW5nID0gJyc7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbi8vICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbi8vICAgICAgICAgICAgIHN0cmluZyArPSBgJHt3b3JkR3JpZFtpXVtqXVsxXX0sIGBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBzdHJpbmcgKz0gJ1xcbic7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XG4vLyB9IiwiaW1wb3J0IGRpc3BsYXlXb3JkcyBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgYnVpbGRCb2FyZCBmcm9tIFwiLi9ib2FyZC1idWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRHYW1lR2VuZXJhdG9yKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKGNoZWNrTW9iaWxlKCkpXG4gICAgICAgIGxvYWRNb2JpbGUoKTtcblxuICAgIGVsc2VcbiAgICAgICAgbG9hZERlc2t0b3AoKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWREZXNrdG9wKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBidWlsZElucHV0c0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gYnVpbGRCb2FyZENvbnRhaW5lcigpO1xuXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGlucHV0c0NvbnRhaW5lcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydW4nKTtcbiAgICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2VuZXJhdGVCb2FyZCgpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGRpc3BsYXlXb3JkcyhidWlsZEJvYXJkKHJlc3VsdCkpO1xuICAgIH0pO1xuICAgIFxufVxuXG5mdW5jdGlvbiBsb2FkTW9iaWxlKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBpbnB1dHNDb250YWluZXIgPSBidWlsZElucHV0c0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gYnVpbGRCb2FyZENvbnRhaW5lcigpO1xuXG4gICAgaW5wdXRzQ29udGFpbmVyLnN0eWxlLndpZHRoID0gYDkwdndgO1xuXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGlucHV0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucnVuJyk7XG4gICAgZ2VuZXJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICAgICAgbGV0IGJvYXJkID0gYnVpbGRCb2FyZChyZXN1bHQpXG4gICAgICAgIGRpc3BsYXlXb3Jkcyhib2FyZCwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgcmVnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydW4nKTtcbiAgICAgICAgcmVnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJvYXJkID0gYnVpbGRCb2FyZChyZXN1bHQpO1xuICAgICAgICAgICAgZGlzcGxheVdvcmRzKGJvYXJkLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlXb3Jkcyhib2FyZCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuZnVuY3Rpb24gYnVpbGRJbnB1dHNDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYnVpbGRDb250YWluZXIoKTtcbiAgICBjb250YWluZXIuaWQgPSAnaW5wdXRzLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCB0aXRsZUhvbGRlciA9IGJ1aWxkVGl0bGVIb2xkZXIoJ2lucHV0LXNpZGUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVIb2xkZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkU3BhbkhvbGRlcigpKTtcblxuICAgIGNvbnN0IHdvcmRzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29yZHNIb2xkZXIuY2xhc3NMaXN0LmFkZCgnd29yZHMtaG9sZGVyJyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSBcIndvcmRzLWZvcm1cIjtcbiAgICBjb25zdCBhZGRXb3JkSG9sZGVyID0gYnVpbGRCdXR0b25Ib2xkZXIoKTtcbiAgICBjb25zdCBhZGRXb3JkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkV29yZEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIFdvcmQnO1xuICAgIGFkZFdvcmRCdXR0b24uaWQgPSBcImFkZC13b3JkXCI7XG5cbiAgICBhZGRXb3JkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBhZGRUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgaSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWhvbGRlcicpLmxlbmd0aCArIDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICBpZihpID4gMTApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnVpbGRJbnB1dChpKSk7XG4gICAgfSk7XG5cbiAgICBhZGRXb3JkSG9sZGVyLmFwcGVuZENoaWxkKGFkZFdvcmRCdXR0b24pO1xuICAgIHdvcmRzSG9sZGVyLmFwcGVuZENoaWxkKGFkZFdvcmRIb2xkZXIpO1xuICAgIHdvcmRzSG9sZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3Jkc0hvbGRlcik7XG5cbiAgICBjb25zdCBidXR0b25Ib2xkZXIgPSBidWlsZEJ1dHRvbkhvbGRlcigpO1xuICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChidWlsZEdlbmVyYXRlQnV0dG9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRTcGFuSG9sZGVyKCkge1xuICAgIGNvbnN0IHNwYW5Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGFuSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3NwYW4taG9sZGVyJyk7XG4gICAgY29uc3QgY2hhckNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhckNvdW50LmlkID0gJ2NoYXItY291bnQnO1xuICAgIGNoYXJDb3VudC5pbm5lclRleHQgPSBgVG90YWwgQ2hhcmFjdGVyczogMC80OGA7XG4gICAgc3BhbkhvbGRlci5hcHBlbmRDaGlsZChjaGFyQ291bnQpO1xuXG4gICAgc3BhbkhvbGRlci5hcHBlbmRDaGlsZChidWlsZElucHV0KCdzcGFuJykpO1xuXG4gICAgcmV0dXJuIHNwYW5Ib2xkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQnV0dG9uSG9sZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkhvbGRlci5jbGFzc0xpc3QuYWRkKCdidXR0b24taG9sZGVyJyk7XG4gICAgXG4gICAgcmV0dXJuIGJ1dHRvbkhvbGRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUaXRsZUhvbGRlcihuYW1lKSB7XG4gICAgY29uc3QgdGl0bGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUhvbGRlci5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ob2xkZXInKTtcbiAgICB0aXRsZUhvbGRlci5hcHBlbmRDaGlsZChidWlsZFRpdGxlSW5wdXQobmFtZSkpO1xuICAgIFxuICAgIHJldHVybiB0aXRsZUhvbGRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRJbnB1dChudW0pIHtcbiAgICBjb25zdCBpbnB1dEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWhvbGRlcicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQuaWQgPSBgaW5wdXQtJHtudW19YDsgXG4gICAgaW5wdXQubmFtZSA9IGBpbnB1dC0ke251bX1gO1xuICAgIGlucHV0Lm1pbkxlbmd0aCA9IChudW0gPT09ICdzcGFuJyA/ICc2JyA6ICc0Jyk7XG4gICAgaW5wdXQubWF4TGVuZ3RoID0gJzQ4JztcbiAgICBpbnB1dC5wYXR0ZXJuID0gXCJbQS1aYS16XStcIjtcbiAgICBpZiAobnVtID09PSAnc3BhbicpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGNvbnN0IGNoYXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY2hhckRpc3BsYXkuaWQgPSBgaW5wdXQke251bX0tY291bnRgO1xuICAgIGNoYXJEaXNwbGF5LmlubmVyVGV4dCA9ICcwJztcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBjaGFyRGlzcGxheS5pbm5lclRleHQgPSBpbnB1dC52YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGhpc0lucHV0IG9mIGFsbElucHV0cykge1xuICAgICAgICAgICAgc3VtICs9IHRoaXNJbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXItY291bnQnKS5pbm5lclRleHQgPSBgVG90YWwgQ2hhcmFjdGVyczogJHtzdW19LzQ4YDtcbiAgICB9KTtcblxuICAgIGlucHV0SG9sZGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dEhvbGRlci5hcHBlbmRDaGlsZChjaGFyRGlzcGxheSk7XG5cbiAgICByZXR1cm4gaW5wdXRIb2xkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQm9hcmRDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gYnVpbGRDb250YWluZXIoKTtcbiAgICBjb250YWluZXIuaWQgPSAnYm9hcmQtY29udGFpbmVyJztcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkrKykge1xuICAgICAgICBjb25zdCBtaW5pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1pbmkuY2xhc3NMaXN0ID0gJ21pbmknO1xuICAgICAgICBtaW5pLmlkID0gYG1pbmktJHtpfWA7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKG1pbmkpO1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZUhvbGRlciA9IGJ1aWxkVGl0bGVIb2xkZXIoJ2JvYXJkLXNpZGUnKTsgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSG9sZGVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG5cbiAgICBjb25zdCBidXR0b25Ib2xkZXIgPSBidWlsZEJ1dHRvbkhvbGRlcigpO1xuICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChidWlsZEdlbmVyYXRlQnV0dG9uKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRUaXRsZUlucHV0KG5hbWUpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zdHlsZS5mbGV4ID0gJzEnO1xuICAgIHRpdGxlSW5wdXQuc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBuYW1lO1xuICAgIHJldHVybiB0aXRsZUlucHV0O1xufVxuXG5mdW5jdGlvbiBidWlsZENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnVUktd2luZG93Jyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY2hlY2tNb2JpbGUoKSB7XG4gICAgcmV0dXJuICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCk7IC8vIDc2OHB4IGlzIFRhYmxldCB3aWR0aCBhY2NvcmRpbmcgdG8gQ2hyb21lIGRldlxufVxuXG5mdW5jdGlvbiBidWlsZEdlbmVyYXRlQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncnVuJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gJ0dlbmVyYXRlJztcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgaWYgKCFjaGVja0lucHV0cygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdvcmRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgY29uc3Qgd29yZHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZElucHV0cykge1xuICAgICAgICBpZiAod29yZC52YWx1ZSAhPSAnJylcbiAgICAgICAgICAgIHdvcmRzLnB1c2god29yZC52YWx1ZSk7XG4gICAgfVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge30pO1xuXG4gICAgcmV0dXJuIHdvcmRzO1xuXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xuICAgIGxldCBjaGFyU3VtID0gMDtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXNwYW4nKTtcbiAgICBpZiAoc3Bhbikge1xuICAgICAgICBpZiAoc3Bhbi52YWx1ZS5sZW5ndGggPCA2IHx8ICEvXihbYS16QS1aXSspJC8udGVzdChzcGFuLnZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2hhclN1bSArPSBzcGFuLnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB3b3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXQnKTtcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgaWYgKHdvcmQudmFsdWUubGVuZ3RoID4gMCAmJiAod29yZC52YWx1ZS5sZW5ndGggPCA0IHx8ICEvXihbYS16QS1aXSspJC8udGVzdCh3b3JkLnZhbHVlKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNoYXJTdW0gKz0gd29yZC52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIChjaGFyU3VtID09PSA0OCk7XG59IiwiaW1wb3J0IHtIT1JJWk9OVEFMLCBWRVJUSUNBTCwgVE9QLCBCT1RUT00sIExFRlQsIFJJR0hULCBUQUtFTiwgT1BFTiwgTUFYUk9XLCBNQVhDT0wsIEZBSUxFRH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFuYWdyYW0ge1xuXG4gICAgY29uc3RydWN0b3Iod29yZCkge1xuICAgICAgICB0aGlzLm9wdGlvbiA9IEhPUklaT05UQUw7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+PSBNQVhST1cpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbiA9IGNvaW5mbGlwKEhPUklaT05UQUwsIFZFUlRJQ0FMKTtcblxuICAgICAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KGNvaW5mbGlwKExFRlQsIFJJR0hUKSkpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobmV3IFRhcmdldChnZXRPcHBvc2l0ZSh0aGlzLnRhcmdldHNbMF0udHlwZSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQoY29pbmZsaXAoVE9QLCBCT1RUT00pKSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KGdldE9wcG9zaXRlKHRoaXMudGFyZ2V0c1swXS50eXBlKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmlhc0NhbGN1bGF0b3IocG9zLCByZW1haW5pbmcpIHtcbiAgICAvLyAgICAgY29uc3QgdmFsID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG4gICAgLy8gICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgLy8gICAgIGlmICh0aGlzLnRhcmdldHMubGVuZ3RoID09PSAwKVxuICAgIC8vICAgICAgICAgcmV0dXJuIDA7XG4gICAgLy8gICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldHNbMF07XG4gICAgLy8gICAgIGlmICh0aGlzLnRhcmdldHMubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gICAgICAgICBkaXN0YW5jZSArPSAodGhpcy50YXJnZXRzWzBdIC0gdGhpcy50YXJnZXRzWzFdKTtcbiAgICAvLyAgICAgfSBcbiAgICAvLyAgICAgZGlzdGFuY2UgKz0gdGFyZ2V0IC0gdmFsO1xuXG4gICAgLy8gICAgIHJldHVybiAoZGlzdGFuY2UgLyByZW1haW5pbmcpO1xuICAgIC8vIH1cblxuICAgIGNoZWNrVmlhYmxlKHBvcywgbGVuZ3RoUmVtYWluaW5nKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgICAgIGNvbnN0IHJlbGV2YW50RGltID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldHNbMF0uaXNNZXQoKSlcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy50YXJnZXRzWzBdLmdldFZhbCgpIC0gdGhpcy50YXJnZXRzWzFdLmdldFZhbCgpKSArIE1hdGguYWJzKHJlbGV2YW50RGltIC0gdGhpcy50YXJnZXRzWzBdLmdldFZhbCgpKTtcbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnRhcmdldHNbMV0uaXNNZXQoKSlcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMocmVsZXZhbnREaW0gLSB0aGlzLnRhcmdldHNbMV0uZ2V0VmFsKCkpO1xuXG4gICAgICAgIHJldHVybiAobGVuZ3RoUmVtYWluaW5nID4gZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIGluY3JlbWVudFRhcmdldHMocG9zKSB7XG4gICAgICAgIGNvbnN0IHJlbGV2YW50RGltID0gKHRoaXMub3B0aW9uID09PSBWRVJUSUNBTCA/IHBvc1swXSA6IHBvc1sxXSk7XG5cbiAgICAgICAgaWYgKHJlbGV2YW50RGltID09PSB0aGlzLnRhcmdldHNbMF0uZ2V0VmFsKCkpXG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbMF0uaW5jcmVtZW50Q291bnQoKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy50YXJnZXRzWzBdLmlzTWV0KCkgJiYgKHJlbGV2YW50RGltID09PSB0aGlzLnRhcmdldHNbMV0uZ2V0VmFsKCkpKVxuICAgICAgICAgICAgdGhpcy50YXJnZXRzWzFdLmluY3JlbWVudENvdW50KCk7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50VGFyZ2V0cyhwb3MpIHtcbiAgICAgICAgY29uc3QgcmVsZXZhbnREaW0gPSAodGhpcy5vcHRpb24gPT09IFZFUlRJQ0FMID8gcG9zWzBdIDogcG9zWzFdKTtcblxuICAgICAgICBpZiAocmVsZXZhbnREaW0gPT09IHRoaXMudGFyZ2V0c1swXS5nZXRWYWwoKSlcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0c1swXS5kZWNyZW1lbnRDb3VudCgpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnRhcmdldHNbMF0uaXNNZXQoKSAmJiAocmVsZXZhbnREaW0gPT09IHRoaXMudGFyZ2V0c1sxXS5nZXRWYWwoKSkpXG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbMV0uZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRDb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgIH1cblxuICAgIGRlY3JlbWVudENvdW50KCkge1xuICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgfVxuXG4gICAgaXNNZXQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb3VudCA+IDApO1xuICAgIH1cblxuICAgIGdldFZhbCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVE9QOiByZXR1cm4gMDtcbiAgICBcbiAgICAgICAgICAgIGNhc2UgQk9UVE9NOiByZXR1cm4gNztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgTEVGVDogcmV0dXJuIDA7XG4gICAgXG4gICAgICAgICAgICBjYXNlIFJJR0hUOiByZXR1cm4gNTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29pbmZsaXAob3B0aW9uMSwgb3B0aW9uMikge1xuICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBvcHRpb24xIDogb3B0aW9uMik7XG59XG5cbmZ1bmN0aW9uIGdldE9wcG9zaXRlKGNvbnN0YW50KSB7XG4gICAgc3dpdGNoIChjb25zdGFudCkge1xuICAgICAgICBjYXNlIEhPUklaT05UQUw6IHJldHVybiBWRVJUSUNBTDtcblxuICAgICAgICBjYXNlIFZFUlRJQ0FMOiByZXR1cm4gSE9SSVpPTlRBTDtcblxuICAgICAgICBjYXNlIFRPUDogcmV0dXJuIEJPVFRPTTtcblxuICAgICAgICBjYXNlIEJPVFRPTTogcmV0dXJuIFRPUDtcblxuICAgICAgICBjYXNlIExFRlQ6IHJldHVybiBSSUdIVDtcblxuICAgICAgICBjYXNlIFJJR0hUOiByZXR1cm4gTEVGVDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgYnVpbGRCb2FyZCBmcm9tICcuL2JvYXJkLWJ1aWxkZXIuanMnO1xuaW1wb3J0IGRpc3BsYXlXb3JkcyBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0IGxvYWRHYW1lR2VuZXJhdG9yIGZyb20gJy4vbmV3LmpzJztcblxubG9hZEdhbWVHZW5lcmF0b3IoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBsb2FkR2FtZUdlbmVyYXRvcigpO1xufSk7XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkrKykge1xuLy8gICAgIGNvbnN0IG1pbmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBtaW5pLmNsYXNzTGlzdCA9ICdtaW5pJztcbi8vICAgICBtaW5pLmlkID0gYG1pbmktJHtpfWA7XG4vLyAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmkpO1xuLy8gfTtcblxuXG5sZXQgZW1wdHlCb2FyZCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGorKykge1xuICAgICAgICBlbXB0eUJvYXJkLnB1c2goW2ksal0pO1xuICAgIH1cbn1cblxuXG4vLyBjb25zdCBydW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcnVuJyk7XG5cbi8vIHJ1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7fSk7XG4vLyAgICAgY29uc3Qgd29yZExpc3QgPSBidWlsZEJvYXJkKHdvcmRzKTtcbi8vICAgICBkaXNwbGF5V29yZHMod29yZExpc3QpO1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4vLyAgICAgICAgIGRpc3BsYXlXb3Jkcyh3b3JkTGlzdCk7XG4vLyAgICAgfSk7XG4vLyB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=