!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(j,t),d?y(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function j(){var e=g();if(T(e))return E(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function E(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=g(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:E(g())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O,T=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),E=document.querySelector(".feedback-form"),w={};E.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem("STORADGE_KEY",JSON.stringify(w))}),500)),E.addEventListener("submit",(function(e){if(e.preventDefault(),""===T.value||""===j.value)return void alert("You must write all fields!!!!");console.log(w),e.currentTarget.reset(),localStorage.removeItem("STORADGE_KEY"),w={}})),(O=JSON.parse(localStorage.getItem("STORADGE_KEY")))&&(T.value=O.email||"",j.value=O.message||"")}();
//# sourceMappingURL=03-feedback.262a0856.js.map