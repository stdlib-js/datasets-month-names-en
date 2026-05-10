"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=s(function(f,a){
var n=require("path").resolve,o=require('@stdlib/fs-read-json/dist').sync,i=n(__dirname,"..","data","data.json"),u={encoding:"utf8"};function v(){var r=o(i,u);if(r instanceof Error)throw r;return r}a.exports=v
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
