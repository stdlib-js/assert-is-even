// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";var t=r.isPrimitive;var i=function(e){return t(e)&&e%2==0},n=r.isObject;var s=function(e){return n(e)&&e%2==0},d=i,m=s;var o=e,a=function(e){return d(e)||m(e)},u=i,v=s;o(a,"isPrimitive",u),o(a,"isObject",v);var j=a;export{j as default,v as isObject,u as isPrimitive};
//# sourceMappingURL=index.mjs.map
