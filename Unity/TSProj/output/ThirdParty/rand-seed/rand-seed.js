"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},t(r,n)};function r(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var n,i=function(){function t(){}return t._xfnv1a=function(t){for(var r=2166136261,n=0;n<t.length;n++)r=Math.imul(r^t.charCodeAt(n),16777619);return function(){return r+=r<<13,r^=r>>>7,r+=r<<3,r^=r>>>17,(r+=r<<5)>>>0}},t}(),s=function(t){function n(r){var i=t.call(this)||this;return i.a=n._xfnv1a(r)(),i}return r(n,t),n.prototype.next=function(){var t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},n}(i),e=function(t){function n(r){var i=t.call(this)||this,s=n._xfnv1a(r);return i.a=s(),i.b=s(),i.c=s(),i.d=s(),i}return r(n,t),n.prototype.next=function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296},n}(i),o=function(t){function n(r){var i=t.call(this)||this,s=n._xfnv1a(r);return i.a=s(),i.b=s(),i.c=s(),i.d=s(),i}return r(n,t),n.prototype.next=function(){var t=this.b<<9,r=5*this.a;return r=r<<7|9*(r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296},n}(i);exports.PRNG=void 0,(n=exports.PRNG||(exports.PRNG={})).sfc32="sfc32",n.mulberry32="mulberry32",n.xoshiro128ss="xoshiro128ss";var u=function(){function t(t,r){void 0===r&&(r=exports.PRNG.sfc32),this.str=t,this.prng=r,this.generator=this._initializeGenerator()}return t.prototype.next=function(){return this.generator.next()},t.prototype._initializeGenerator=function(){if(function(t){return null===t}(t=this.str)||function(t){return void 0===t}(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new e(this.str);case"mulberry32":return new s(this.str);case"xoshiro128ss":return new o(this.str);default:return this.wrap()}},t.prototype.wrap=function(){return{next:function(){return Math.random()}}},t}();exports.default=u;
//# sourceMappingURL=rand-seed.js.map
