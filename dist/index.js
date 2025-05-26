"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(g,u){
var o=require('@stdlib/assert-is-integer/dist').isPrimitive;function m(r){return o(r)&&r%2===0}u.exports=m
});var s=i(function(I,v){
var O=require('@stdlib/assert-is-integer/dist').isObject;function b(r){return O(r)&&r%2===0}v.exports=b
});var q=i(function(d,c){
var j=t(),p=s();function x(r){return j(r)||p(r)}c.exports=x
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=q(),P=t(),f=s();a(n,"isPrimitive",P);a(n,"isObject",f);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
