"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7617],{16718:(t,e,r)=>{var n=r(24994);e.A=void 0;var o=n(r(42032)),i=r(74848);e.A=(0,o.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},67034:(t,e,r)=>{var n=r(24994);e.A=void 0;var o=n(r(42032)),i=r(74848);e.A=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},67733:(t,e,r)=>{r.d(e,{A:()=>g});var n=r(58168),o=r(98587),i=r(96540),a=r(34164),c=r(61311),l=r(33571),u=r(39599),f=r(82858),s=r(74848);const d=["className","component"];var v=r(79071),p=r(50467),h=r(58312);const m=(0,r(38413).A)("MuiBox",["root"]),b=(0,p.A)(),y=function(t={}){const{themeId:e,defaultTheme:r,defaultClassName:v="MuiBox-root",generateClassName:p}=t,h=(0,c.default)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(l.A);return i.forwardRef((function(t,i){const c=(0,f.A)(r),l=(0,u.A)(t),{className:m,component:b="div"}=l,y=(0,o.A)(l,d);return(0,s.jsx)(h,(0,n.A)({as:b,ref:i,className:(0,a.A)(m,p?p(v):v),theme:e&&c[e]||c},y))}))}({themeId:h.A,defaultTheme:b,defaultClassName:m.root,generateClassName:v.A.generate}),g=y},71543:(t,e,r)=>{r.d(e,{A:()=>b});var n=r(98587),o=r(58168),i=r(96540),a=r(34164),c=r(75659),l=r(771),u=r(11848),f=r(46126),s=r(61347),d=r(74848);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,u.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,o.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,l.X4)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,o.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,o.A)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}})),(({theme:t,ownerState:e})=>(0,o.A)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}})),(({ownerState:t})=>(0,o.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,u.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,o.A)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),m=i.forwardRef((function(t,e){const r=(0,f.b)({props:t,name:"MuiDivider"}),{absolute:i=!1,children:l,className:u,component:m=(l?"div":"hr"),flexItem:b=!1,light:y=!1,orientation:g="horizontal",role:A=("hr"!==m?"separator":void 0),textAlign:w="center",variant:P="fullWidth"}=r,x=(0,n.A)(r,v),S=(0,o.A)({},r,{absolute:i,component:m,flexItem:b,light:y,orientation:g,role:A,textAlign:w,variant:P}),O=(t=>{const{absolute:e,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:l,variant:u}=t,f={root:["root",e&&"absolute",u,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,c.A)(f,s.K,n)})(S);return(0,d.jsx)(p,(0,o.A)({as:m,className:(0,a.A)(O.root,u),role:A,ref:e,ownerState:S},x,{children:l?(0,d.jsx)(h,{className:O.wrapper,ownerState:S,children:l}):null}))}));m.muiSkipListHighlight=!0;const b=m},19591:(t,e,r)=>{r.d(e,{A:()=>m});var n=r(58168),o=r(98587),i=r(96540),a=r(34164),c=r(75659),l=r(46126),u=r(11848),f=r(38413),s=r(31609);function d(t){return(0,s.Ay)("MuiTableContainer",t)}(0,f.A)("MuiTableContainer",["root"]);var v=r(74848);const p=["className","component"],h=(0,u.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,e)=>e.root})({width:"100%",overflowX:"auto"}),m=i.forwardRef((function(t,e){const r=(0,l.b)({props:t,name:"MuiTableContainer"}),{className:i,component:u="div"}=r,f=(0,o.A)(r,p),s=(0,n.A)({},r,{component:u}),m=(t=>{const{classes:e}=t;return(0,c.A)({root:["root"]},d,e)})(s);return(0,v.jsx)(h,(0,n.A)({ref:e,as:u,className:(0,a.A)(m.root,i),ownerState:s},f))}))},30854:(t,e,r)=>{r.d(e,{A:()=>g});var n=r(58168),o=r(98587),i=r(96540),a=r(34164),c=r(75659),l=r(27256),u=r(46126),f=r(11848),s=r(38413),d=r(31609);function v(t){return(0,d.Ay)("MuiTableFooter",t)}(0,s.A)("MuiTableFooter",["root"]);var p=r(74848);const h=["className","component"],m=(0,f.Ay)("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"table-footer-group"}),b={variant:"footer"},y="tfoot",g=i.forwardRef((function(t,e){const r=(0,u.b)({props:t,name:"MuiTableFooter"}),{className:i,component:f=y}=r,s=(0,o.A)(r,h),d=(0,n.A)({},r,{component:f}),g=(t=>{const{classes:e}=t;return(0,c.A)({root:["root"]},v,e)})(d);return(0,p.jsx)(l.A.Provider,{value:b,children:(0,p.jsx)(m,(0,n.A)({as:f,className:(0,a.A)(g.root,i),ref:e,role:f===y?null:"rowgroup",ownerState:d},s))})}))},82470:(t,e,r)=>{function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[H]}function i(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===U}(t)||Array.isArray(t)||!!t[V]||!!(null===(e=t.constructor)||void 0===e?void 0:e[V])||d(t)||v(t))}function a(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:X)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[H];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:v(t)?3:0}function l(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function u(t,e){return 2===c(t)?t.get(e):t[e]}function f(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function s(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function d(t){return E&&t instanceof Map}function v(t){return L&&t instanceof Set}function p(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=J(t);delete e[H];for(var r=X(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function m(t,e){return void 0===e&&(e=!1),y(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&a(t,(function(t,e){return m(e,!0)}),!0)),t}function b(){n(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function g(t){var e=q[t];return e||n(18,t),e}function A(){return W}function w(t,e){e&&(g("Patches"),t.u=[],t.s=[],t.v=e)}function P(t){x(t),t.p.forEach(O),t.p=null}function x(t){t===W&&(W=t.l)}function S(t){return W={p:[],l:W,h:t,m:!0,_:0}}function O(t){var e=t[H];0===e.i||1===e.i?e.j():e.g=!0}function j(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||g("ES5").S(e,t,o),o?(r[H].P&&(P(e),n(4)),i(t)&&(t=R(e,t),e.l||M(e,t)),e.u&&g("Patches").M(r[H].t,t,e.u,e.s)):t=R(e,r,[]),P(e),e.u&&e.v(e.u,e.s),t!==B?t:void 0}function R(t,e,r){if(y(e))return e;var n=e[H];if(!n)return a(e,(function(o,i){return N(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return M(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o,i=o,c=!1;3===n.i&&(i=new Set(o),o.clear(),c=!0),a(i,(function(e,i){return N(t,n,o,e,i,r,c)})),M(t,o,!1),r&&t.u&&g("Patches").N(n,r,t.u,t.s)}return n.o}function N(t,e,r,n,a,c,u){if(o(a)){var s=R(t,a,c&&e&&3!==e.i&&!l(e.R,n)?c.concat(n):void 0);if(f(r,n,s),!o(s))return;t.m=!1}else u&&r.add(a);if(i(a)&&!y(a)){if(!t.h.D&&t._<1)return;R(t,a),e&&e.A.l||M(t,a)}}function M(t,e,r){void 0===r&&(r=!1),!t.l&&t.h.D&&t.m&&m(e,r)}function C(t,e){var r=t[H];return(r?p(r):t)[e]}function D(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function I(t){t.P||(t.P=!0,t.l&&I(t.l))}function k(t){t.o||(t.o=h(t.t))}function T(t,e,r){var n=d(e)?g("MapSet").F(e,r):v(e)?g("MapSet").T(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:A(),P:!1,I:!1,R:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=G;r&&(o=[n],i=Q);var a=Proxy.revocable(o,i),c=a.revoke,l=a.proxy;return n.k=l,n.j=c,l}(e,r):g("ES5").J(e,r);return(r?r.A:A()).p.push(n),n}function F(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[H],o=c(e);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=z(e,o),n.I=!1}else r=z(e,o);return a(r,(function(e,o){n&&u(n.t,e)===o||f(r,e,t(o))})),3===o?new Set(r):r}(t)}function z(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}r.d(e,{e:()=>rt});var _,W,$="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),E="undefined"!=typeof Map,L="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=$?Symbol.for("immer-nothing"):((_={})["immer-nothing"]=!0,_),V=$?Symbol.for("immer-draftable"):"__$immer_draftable",H=$?Symbol.for("immer-state"):"__$immer_state",U=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),X="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,J=Object.getOwnPropertyDescriptors||function(t){var e={};return X(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},q={},G={get:function(t,e){if(e===H)return t;var r=p(t);if(!l(r,e))return function(t,e,r){var n,o=D(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===C(t.t,e)?(k(t),t.o[e]=T(t.A.h,n,t)):n},has:function(t,e){return e in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,e,r){var n=D(p(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=C(p(t),e),i=null==o?void 0:o[H];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(s(r,o)&&(void 0!==r||l(t.t,e)))return!0;k(t),I(t)}return t.o[e]===r&&(void 0!==r||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==C(t.t,e)||e in t.t?(t.R[e]=!1,k(t),I(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=p(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Q={};a(G,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return Q.set.call(this,t,e,void 0)},Q.set=function(t,e,r){return G.set.call(this,t[0],e,r,t[0])};var Y=function(){function t(t){var e=this;this.O=K,this.D=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var a=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=a);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var l;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var u=S(e),f=T(e,t,void 0),s=!0;try{l=r(f),s=!1}finally{s?P(u):x(u)}return"undefined"!=typeof Promise&&l instanceof Promise?l.then((function(t){return w(u,o),j(t,u)}),(function(t){throw P(u),t})):(w(u,o),j(l,u))}if(!t||"object"!=typeof t){if(void 0===(l=r(t))&&(l=t),l===B&&(l=void 0),e.D&&m(l,!0),o){var d=[],v=[];g("Patches").M(t,l,d,v),o(d,v)}return l}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=e.produce(t,r,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=F(t));var e=S(this),r=T(this,t,void 0);return r[H].C=!0,x(e),r},e.finishDraft=function(t,e){var r=(t&&t[H]).A;return w(r,e),j(void 0,r)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!K&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=g("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),Z=new Y,tt=Z.produce;Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z);var et=r(96540);function rt(t){var e=(0,et.useState)((function(){return m("function"==typeof t?t():t,!0)})),r=e[1];return[e[0],(0,et.useCallback)((function(t){r("function"==typeof t?tt(t):m(t))}),[])]}}}]);