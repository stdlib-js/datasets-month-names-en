"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var t=n(function(p,a){
var o=require("path").resolve,i=require('@stdlib/fs-read-json/dist').sync,u=o(__dirname,"..","data","data.json"),v={encoding:"utf8"};function c(){var r=i(u,v);if(r instanceof Error)throw r;return r}a.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
