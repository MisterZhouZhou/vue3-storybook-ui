"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function r(c,a){const t=n=>{n.length&&n.forEach(e=>{e.checked=c,e.children.length&&t(e.children)})};t(a.children)}function p(c,a){const t=n=>{if(n.parentKey){const e=a.find(d=>d.nodeKey===n.parentKey);if(e){const d=!e.children.some(o=>!o.checked);d!==e.checked&&(e.checked=d,t(e))}}};t(c)}exports.updateDownWards=r;exports.updateUpwards=p;
