!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r=window.webpackJsonp;window.webpackJsonp=function(t,o,i){for(var u,c,a=0,f=[];a<t.length;a++)c=t[a],n[c]&&f.push(n[c][0]),n[c]=0;for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u]);for(r&&r(t,o,i);f.length;)f.shift()()};var o={},n={26:0};t.e=function(e){function r(){c.onerror=c.onload=null,clearTimeout(a);var t=n[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),n[e]=void 0)}var o=n[e];if(0===o)return new Promise(function(e){e()});if(o)return o[2];var i=new Promise(function(t,r){o=n[e]=[t,r]});o[2]=i;var u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,t.nc&&c.setAttribute("nonce",t.nc),c.src=t.p+"chunk."+e+".js";var a=setTimeout(r,12e4);return c.onerror=c.onload=r,u.appendChild(c),i},t.m=e,t.c=o,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t.oe=function(e){throw console.error(e),e},t(t.s=9)}([function(e,t,r){"use strict";function o(e){return"string"==typeof e?e.split(/([_A-Z])/).reduce(function(e,t,r){var o=e&&r%2!=0?"-":"";return t="_"===t?"":t,""+e+o+t.toLowerCase()}):e}function n(e){e=e||{};var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t}function i(e){return e=String(e||++u),"function"==typeof Symbol?Symbol(e):"__skate_"+e}Object.defineProperty(t,"__esModule",{value:!0}),t.dashCase=o,t.keys=n,t.sym=i;var u=(t.empty=function(e){return null==e},0)},function(e,t,r){"use strict";function o(e,t){return(-1===e.indexOf("-")?"x-"+e:e)+(t?"-"+t:"")}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"element";e=(0,i.dashCase)(e);for(var t=0;customElements.get(o(e,t));)++t;return o(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.name=n;var i=r(0)},function(e,t,r){"use strict";function o(e){return e._shadowRoot||(e._shadowRoot=e.shadowRoot||e.attachShadow({mode:"open"}))}Object.defineProperty(t,"__esModule",{value:!0}),t.shadow=o},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(o)};t.withChildren=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"connectedCallback",value:function(){if(a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.childrenUpdated){var e=this.childrenUpdated.bind(this);e();new MutationObserver(e).observe(this,{childList:!0}),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}}}]),t}(e)}},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();t.withContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"context",get:function(){if(this._context)return this._context;for(var e=this;e=e.parentNode||e.host;)if("context"in e)return e.context;return{}},set:function(e){this._context=e}}]),t}(e)}},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(o)};t.withLifecycle=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"connectedCallback",value:function(){this.connecting&&this.connecting(),a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.connected&&this.connected()}},{key:"disconnectedCallback",value:function(){this.disconnecting&&this.disconnecting(),a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.disconnected&&this.disconnected()}}]),t}(e)}},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":f(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":f(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){if(!e.hasOwnProperty("_propsNormalised")){var t=e.props;(0,s.keys)(t).forEach(function(r){var o=t[r];"function"!=typeof o&&(o=a(o)),o({constructor:e},r)})}}function c(e){window.Promise?Promise.resolve().then(e):setTimeout(e)}function a(e){var t=e||{},r=function(e,r){var o=e.constructor,n=(0,l.normalisePropertyDefinition)(r,t),i=(0,s.sym)(r);o.hasOwnProperty("_propsNormalised")||(o._propsNormalised={}),o._propsNormalised[r]=n,n.attribute.source&&o._observedAttributes.push(n.attribute.source),Object.defineProperty(o.prototype,r,{configurable:!0,get:function(){var e=this[i];return null==e?n.default:e},set:function(e){this[i]=n.coerce(e),(0,l.syncPropertyToAttribute)(this,n.attribute.target,n.serialize,e),this.triggerUpdate()}})};return Object.keys(t).forEach(function(e){return r[e]=t[e]}),r}Object.defineProperty(t,"__esModule",{value:!0}),t.props=t.withUpdate=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.prop=a;var s=r(0),l=r(19),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),y=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(o)},d=(t.withUpdate=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return t=e=function(e){function t(){var e,r,i,u;o(this,t);for(var c=arguments.length,a=Array(c),f=0;f<c;f++)a[f]=arguments[f];return r=i=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._prevProps={},i._prevState={},i._state={},u=r,n(i,u)}return i(t,e),p(t,[{key:"attributeChangedCallback",value:function(e,r,o){y(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this)&&y(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this,e,r,o),(0,l.syncAttributeToProperty)(this,e,o)}},{key:"connectedCallback",value:function(){y(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&y(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.triggerUpdate()}},{key:"shouldUpdate",value:function(){return!0}},{key:"triggerUpdate",value:function(){var e=this;this._updating||(this._updating=!0,c(function(){var t=e._prevProps,r=e._prevState;e.updating&&e.updating(t,r),e.updated&&e.shouldUpdate(t,r)&&e.updated(t,r),e._prevProps=e.props,e._prevState=e.state,e._updating=!1}))}},{key:"props",get:function(){var e=this;return(0,s.keys)(this.constructor.props).reduce(function(t,r){return t[r]=e[r],t},{})},set:function(e){var t=this,r=this.constructor.props;(0,s.keys)(e).forEach(function(o){return o in r&&(t[o]=e[o])})}},{key:"state",get:function(){return this._state},set:function(e){this._state=e,this.triggerUpdate()}}],[{key:"observedAttributes",get:function(){return u(this),this._observedAttributes}},{key:"props",get:function(){return this._props},set:function(e){this._props=e}}]),t}(r),e._observedAttributes=[],t},JSON.parse),b=JSON.stringify,h=Object.freeze({source:!0}),v=function(e){return(0,s.empty)(e)?0:Number(e)},_=a({attribute:h}),m=a({attribute:h,coerce:function(e){return Array.isArray(e)?e:(0,s.empty)(e)?null:[e]},default:Object.freeze([]),deserialize:d,serialize:b}),O=a({attribute:h,coerce:Boolean,default:!1,deserialize:function(e){return!(0,s.empty)(e)},serialize:function(e){return e?"":null}}),g=a({attribute:h,default:0,coerce:v,deserialize:v,serialize:function(e){return(0,s.empty)(e)?null:String(Number(e))}}),j=a({attribute:h,default:Object.freeze({}),deserialize:d,serialize:b}),w=a({attribute:h,default:"",coerce:String,serialize:function(e){return(0,s.empty)(e)?null:String(e)}});t.props={any:_,array:m,boolean:O,number:g,object:j,string:w}},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.withRenderer=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=r(2),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(o)};t.withRenderer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"renderer",value:function(e,r){f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"renderer",this)?f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"renderer",this).call(this,e,r):e.innerHTML=r()}},{key:"updated",value:function(){for(var e,r=this,o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updated",this)&&(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updated",this)).call.apply(e,[this].concat(n)),this.rendering&&this.rendering(),this.renderer(this.renderRoot,function(){return r.render&&r.render(r)}),this.rendered&&this.rendered()}},{key:"renderRoot",get:function(){return f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"renderRoot",this)||(0,c.shadow)(this)}}]),t}(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var n=r(16);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var i=r(17);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var u=r(1);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var c=r(2);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var a=r(3);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var f=r(4);Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})});var s=r(18);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var l=r(5);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var p=r(6);Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})});var y=r(7);Object.keys(y).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})})},function(e,t,r){"use strict";function o(){r.e(1).then(r.bind(null,20))}function n(e,t){var r=document.createElement("script");r.async=!1,r.onload=t,r.src=e,document.head.appendChild(r)}r(10),r(11),r(12),r(13),r(14),window.customElements?n("/ce-es5-shim.js",o):n("/ce-sd-fill.js",o)},function(e,t,r){e.exports=r.p+"1f911bc3032defa919f188375f71198a.html"},function(e,t,r){e.exports=r.p+"ce-es5-shim.js"},function(e,t,r){e.exports=r.p+"ce-sd-fill.js"},function(e,t,r){e.exports=r.p+"404.html"},function(e,t,r){"use strict";var o=r(8),n=window.history.pushState,i=window.history.replaceState;window.history.pushState=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.call.apply(n,[this].concat(t)),(0,o.emit)(window,"pushstate")},window.history.replaceState=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];i.call.apply(i,[this].concat(t)),(0,o.emit)(window,"replacestate")}},function(e,t,r){"use strict";function o(e){return customElements.define(e.is||(0,n.name)(),e),e}Object.defineProperty(t,"__esModule",{value:!0}),t.define=o;var n=r(1)},function(e,t,r){"use strict";function o(e,t,r){var o=n({},i,r),u=void 0;return"composed"in CustomEvent.prototype?u=new CustomEvent(t,o):(u=document.createEvent("CustomEvent"),u.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),Object.defineProperty(u,"composed",{value:o.composed})),e.dispatchEvent(u)}Object.defineProperty(t,"__esModule",{value:!0}),t.emit=o;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i={bubbles:!0,cancelable:!0,composed:!1}},function(e,t,r){"use strict";function o(e){var t=e.checked,r=e.type,o=e.value;return"checkbox"===r||"radio"===r?!!t&&(o||!0):o}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state.";return function(r){var n=r.target||r.composedPath&&r.composedPath()[0],i=o(n),u=t||n.name||"value";if(u.indexOf(".")>-1){var c=u.split("."),a=c[0],f=c.pop();c.reduce(function(e,t){return e[t]},e)[f||n.name]=i,e[a]=e[a]}else e[u]=i}}Object.defineProperty(t,"__esModule",{value:!0}),t.link=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withComponent=void 0;var o=r(3),n=r(4),i=r(5),u=r(6),c=r(7);t.withComponent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return(0,i.withLifecycle)((0,o.withChildren)((0,n.withContext)((0,u.withUpdate)((0,c.withRenderer)(e||HTMLElement)))))}},function(e,t,r){"use strict";function o(e,t){var r=t.attribute,o="object"===(void 0===r?"undefined":s(r))?f({},r):{source:r,target:r};return!0===o.source&&(o.source=(0,a.dashCase)(e)),!0===o.target&&(o.target=(0,a.dashCase)(e)),o}function n(e,t){var r=t.coerce,n=t.default,i=t.deserialize,u=t.serialize;return{attribute:o(e,t),coerce:r||function(e){return e},default:n,deserialize:i||function(e){return e},serialize:u||function(e){return e}}}function i(e,t,r){if(!e._syncingPropertyToAttribute){var o=e.constructor._propsNormalised;for(var n in o){var i=o[n],u=i.attribute.source,c=i.deserialize;u===t&&(e._syncingAttributeToProperty=n,e[n]=null==r?r:c(r),e._syncingAttributeToProperty=null)}}}function u(e,t,r,o){if(t&&e._syncingAttributeToProperty!==t){var n=r(o);e._syncingPropertyToAttribute=!0,null==n?e.removeAttribute(t):e.setAttribute(t,n),e._syncingPropertyToAttribute=!1}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.normaliseAttributeDefinition=o,t.normalisePropertyDefinition=n,t.syncAttributeToProperty=i,t.syncPropertyToAttribute=u;var a=r(0),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s="function"==typeof Symbol&&"symbol"===c(Symbol.iterator)?function(e){return void 0===e?"undefined":c(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":c(e)}}]);