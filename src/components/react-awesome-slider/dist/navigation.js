!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-awesome-slider"]=t(require("react")):e["react-awesome-slider"]=t(e.React)}(this,(function(e){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=12)}({12:function(e,t,r){e.exports=r(14)},14:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=o.a.createContext([{},function(){}]),a=function Provider(e){var t=e.slug,r=e.children,a=function getCleanPath(e){return e.replace(/^\//,"").replace(/\/$/)}(t),c=_slicedToArray(Object(n.useState)({slug:a,goto:a,navigating:!1}),2),u=c[0],l=c[1];Object(n.useEffect)((function(){l({slug:a,goto:a,navigating:!1})}),[a]);return o.a.createElement(i.Provider,{value:[u,function setNavigation(e){"object"!==_typeof(e)?l(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{goto:e.replace(/^\//,"")})):l(e)}]},r)};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function withNavigationContext_slicedToArray(e,t){return function withNavigationContext_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function withNavigationContext_iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function withNavigationContext_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(e){return function(t){var r=withNavigationContext_slicedToArray(Object(n.useContext)(i),2),a=r[0],c=r[1];return o.a.createElement(e,_extends({},t,{fullpage:{navigation:a,navigate:c}}))}};function link_extends(){return(link_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function link_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function link_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=c((function(e){var t=e.fullpage,r=e.children,n=e.href,i=e.className,a=void 0===i?null:i,c=_objectWithoutProperties(e,["fullpage","children","href","className"]),u=t.navigation,l=t.navigate;return o.a.createElement("a",link_extends({className:a,onClick:function handleClick(e){e.preventDefault(),!1===u.navigating&&l(function link_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?link_ownKeys(Object(r),!0).forEach((function(t){link_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):link_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{goto:n.replace(/^\//,"")}))},href:n},c),r)}));function withNavigationHandlers_extends(){return(withNavigationHandlers_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function withNavigationHandlers_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function withNavigationHandlers_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?withNavigationHandlers_ownKeys(Object(r),!0).forEach((function(t){withNavigationHandlers_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):withNavigationHandlers_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function withNavigationHandlers_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function withNavigationHandlers_objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function withNavigationHandlers_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=function getCleanPath(e){return e.replace(/^\//,"").replace(/\/$/)},f=function(e){return c((function(t){var r=t.fullpage,n=t.onTransitionReject,i=t.onTransitionStart,a=t.onTransitionEnd,c=withNavigationHandlers_objectWithoutProperties(t,["fullpage","onTransitionReject","onTransitionStart","onTransitionEnd"]),u=r.navigation,f=r.navigate;return o.a.createElement(e,withNavigationHandlers_extends({buttons:!0,fillParent:!0,bullets:!1,infinite:!1,onFirstMount:function onFirstMount(){window.addEventListener("popstate",(function(){event.stopPropagation(),event.preventDefault(),event.path&&event.path[0]&&f(withNavigationHandlers_objectSpread({},u,{pop:!0,goto:l(event.path[0].location.pathname)}))}))},selected:u.goto,onTransitionReject:function handleTransitionReject(e){!0!==u.navigating&&(f({slug:e.currentMedia.slug,goto:e.currentMedia.slug,navigating:!1}),n&&n(e))},onTransitionStart:function handleTransitionStart(e){var t=l(window.location.pathname);if("undefined"!=typeof window&&t!==e.nextMedia.slug){if(!1!==u.pop)return void f(withNavigationHandlers_objectSpread({},u,{pop:!1,goto:t}));window.history.pushState({},"","/".concat(e.nextMedia.slug))}f(withNavigationHandlers_objectSpread({},u,{slug:u.goto,navigating:!0})),i&&i(e)},onTransitionEnd:function handleTransitionEnd(e){var t=withNavigationHandlers_objectSpread({},u,{navigating:!1,pop:!1});e.currentMedia.slug!==t.goto&&(t.slug=e.currentMedia.slug,t.goto=e.currentMedia.slug),f(t),a&&a(e);var r=l(window.location.pathname);r!==e.currentMedia.slug&&f(withNavigationHandlers_objectSpread({},t,{goto:r}))}},c))}))};r.d(t,"Provider",(function(){return a})),r.d(t,"Link",(function(){return u})),r.d(t,"withNavigationContext",(function(){return c})),r.d(t,"withNavigationHandlers",(function(){return f}))},3:function(t,r){t.exports=e}})}));