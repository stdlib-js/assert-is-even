"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(o){throw (e=0, o)}};};var t=i(function(I,u){
var m=require('@stdlib/assert-is-integer/dist').isPrimitive;function O(r){return m(r)&&r%2===0}u.exports=O
});var s=i(function(d,v){
var b=require('@stdlib/assert-is-integer/dist').isObject;function j(r){return b(r)&&r%2===0}v.exports=j
});var q=i(function(y,c){
var p=t(),x=s();function P(r){return p(r)||x(r)}c.exports=P
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=q(),f=t(),E=s();a(n,"isPrimitive",f);a(n,"isObject",E);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
