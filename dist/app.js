/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-2!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-2!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/* Welcome to Compass.\r\n * In this file you should write your main styles. (or centralize your imports)\r\n * Import this file using the following HTML or equivalent:\r\n * <link href=\"/stylesheets/screen.css\" media=\"screen, projection\" rel=\"stylesheet\" type=\"text/css\" /> */\n.article:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.header-image {\n  overflow: hidden;\n  max-width: 0px;\n  -webkit-animation: imgAnimate 1.5s cubic-bezier(0.49, 0.41, 0.01, 0.99) 0.3s forwards; }\n\n@keyframes imgAnimate {\n  0% {\n    max-width: 0px; }\n  100% {\n    max-width: 690px; } }\n\n.article {\n  display: block;\n  margin-top: 400px; }\n  .article > a {\n    display: block;\n    color: #001E47;\n    text-decoration: none;\n    position: relative; }\n  .article:first-child > a .article__img {\n    max-width: calc((100% / 6) * 4); }\n  .article:first-child > a .article__infos {\n    max-width: calc(((100% / 6) * 2) - 10px);\n    width: 100%; }\n\n/*\r\n*\r\n*\r\n* IMAGE\r\n*\r\n*\r\n*/\n.article__img {\n  max-height: 90vh;\n  width: 100%;\n  overflow: hidden;\n  float: left;\n  position: relative; }\n  .article__img img {\n    width: 100%; }\n  .article__img::before {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 20px;\n    background: white;\n    position: absolute;\n    left: 0;\n    top: 0;\n    transition: height .3s ease-out; }\n  .article__img::after {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 20px;\n    background: white;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    transition: height .3s ease-out; }\n\n/*\r\n*\r\n*\r\n* INFOS\r\n*\r\n*\r\n*/\n.article__infos {\n  display: block;\n  float: right;\n  font-family: 'Europa-regular'; }\n  .article__infos--title {\n    text-transform: uppercase;\n    font-size: 21px;\n    font-weight: 900;\n    margin: 0;\n    letter-spacing: 1px;\n    font-family: 'Europa-regular'; }\n  .article__infos--excerpt {\n    font-size: 15px;\n    line-height: 160%; }\n  .article__infos--date {\n    text-transform: uppercase;\n    font-size: 10px;\n    margin: 5px 0;\n    letter-spacing: 1px; }\n  .article__infos--tags .tag {\n    text-transform: uppercase;\n    font-size: 10px;\n    padding: 5px 8px;\n    border-radius: 1px;\n    background: #eee;\n    color: #888;\n    letter-spacing: .8px; }\n\n/*\r\n*\r\n*\r\n* HOVER\r\n*\r\n*\r\n*/\n.article > a:hover .article__img {\n  position: relative; }\n  .article > a:hover .article__img::before {\n    height: 0px;\n    transition: height 0.8s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .article > a:hover .article__img::after {\n    height: 0px;\n    transition: height 0.8s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\nheader {\n  height: 100vh; }\n  header .header-blog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, calc(-50% - 50px));\n    width: 100%; }\n    header .header-blog__title, header .header-blog__subtitle {\n      display: block;\n      font-size: 96px;\n      font-family: 'Europa-regular';\n      text-align: center;\n      color: #6BEAB0;\n      margin-bottom: 10px; }\n      header .header-blog__title > span, header .header-blog__subtitle > span {\n        display: inline-block;\n        min-width: 20px;\n        opacity: 0;\n        transform: translateY(100px); }\n        header .header-blog__title > span:nth-child(1), header .header-blog__subtitle > span:nth-child(1) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 1s) forwards; }\n        header .header-blog__title > span:nth-child(2), header .header-blog__subtitle > span:nth-child(2) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 2s) forwards; }\n        header .header-blog__title > span:nth-child(3), header .header-blog__subtitle > span:nth-child(3) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 3s) forwards; }\n        header .header-blog__title > span:nth-child(4), header .header-blog__subtitle > span:nth-child(4) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 4s) forwards; }\n        header .header-blog__title > span:nth-child(5), header .header-blog__subtitle > span:nth-child(5) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 5s) forwards; }\n        header .header-blog__title > span:nth-child(6), header .header-blog__subtitle > span:nth-child(6) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 6s) forwards; }\n        header .header-blog__title > span:nth-child(7), header .header-blog__subtitle > span:nth-child(7) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 7s) forwards; }\n        header .header-blog__title > span:nth-child(8), header .header-blog__subtitle > span:nth-child(8) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 8s) forwards; }\n        header .header-blog__title > span:nth-child(9), header .header-blog__subtitle > span:nth-child(9) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 9s) forwards; }\n        header .header-blog__title > span:nth-child(10), header .header-blog__subtitle > span:nth-child(10) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 10s) forwards; }\n        header .header-blog__title > span:nth-child(11), header .header-blog__subtitle > span:nth-child(11) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 11s) forwards; }\n        header .header-blog__title > span:nth-child(12), header .header-blog__subtitle > span:nth-child(12) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 12s) forwards; }\n        header .header-blog__title > span:nth-child(13), header .header-blog__subtitle > span:nth-child(13) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 13s) forwards; }\n        header .header-blog__title > span:nth-child(14), header .header-blog__subtitle > span:nth-child(14) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 14s) forwards; }\n        header .header-blog__title > span:nth-child(15), header .header-blog__subtitle > span:nth-child(15) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 15s) forwards; }\n        header .header-blog__title > span:nth-child(16), header .header-blog__subtitle > span:nth-child(16) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 16s) forwards; }\n        header .header-blog__title > span:nth-child(17), header .header-blog__subtitle > span:nth-child(17) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 17s) forwards; }\n        header .header-blog__title > span:nth-child(18), header .header-blog__subtitle > span:nth-child(18) {\n          -webkit-animation: titleAnimate 1s cubic-bezier(0.66, 0.49, 0.27, 1) calc(0.02 * 18s) forwards; }\n\n@keyframes titleAnimate {\n  0% {\n    opacity: 0;\n    transform: translateY(100px); }\n  40% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    transform: translateY(0px); } }\n    header .header-blog__subtitle {\n      --fsz: 16px;\n      font-size: var(--fsz);\n      letter-spacing: calc((var(--fsz) / 100) * 20);\n      text-transform: uppercase;\n      font-weight: 500; }\n  header .header-image {\n    position: absolute;\n    top: 50%;\n    transform: translate(-80px, -40px);\n    z-index: -1; }\n\n.articles {\n  margin-top: 500px;\n  position: relative;\n  z-index: 1; }\n\n.container {\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.banner {\n  text-transform: uppercase;\n  background: #D6FFEC;\n  font-family: 'Europa-regular';\n  padding: 200px 0 150px;\n  margin-top: 500px;\n  position: relative; }\n  .banner p {\n    max-width: 1024px;\n    margin: 0 auto;\n    line-height: 160%;\n    font-weight: 200;\n    color: #6BEAB0;\n    font-size: 24px;\n    letter-spacing: 1px; }\n  .banner svg {\n    height: 60px;\n    position: absolute;\n    left: 50%;\n    -moz-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    top: 70px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {



// FADE ON SCROLL
window.addEventListener('scroll', function (e) {
  var scroll = window.pageYOffset;
  var title = document.querySelector(".header-blog__title");
  var opacity = 1 - scroll / 600;

  title.style.opacity = opacity;

  if (opacity < 0.1) {
    title.style.opacity = 0.1;
    title.style.zIndex = -1;
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map