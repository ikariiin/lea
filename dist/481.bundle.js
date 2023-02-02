"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[481,453,30],{4030:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8784),o=r(8542);const a=(0,r(9161).Z)(),i=(0,n.Z)({defaultTheme:a,defaultClassName:"MuiBox-root",generateClassName:o.Z.generate})},1989:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(1461),o=r(7896),a=r(2784),i=r(6277),l=r(9836),s=r(9075),p=r(8728),u=r(8941),c=r(1326),m=r(9222),f=r(5672);function g(e){return(0,f.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=r(2322);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],d=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTypography"}),a=(e=>b[e]||e)(r.color),p=(0,l.Z)((0,o.Z)({},r,{color:a})),{align:m="inherit",className:f,component:Z,gutterBottom:P=!1,noWrap:w=!1,paragraph:O=!1,variant:j="body1",variantMapping:S=v}=p,x=(0,n.Z)(p,h),E=(0,o.Z)({},p,{align:m,color:a,className:f,component:Z,gutterBottom:P,noWrap:w,paragraph:O,variant:j,variantMapping:S}),B=Z||(O?"p":S[j]||v[j])||"span",W=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,g,i)})(E);return(0,y.jsx)(d,(0,o.Z)({as:B,ref:t,ownerState:E,className:(0,i.Z)(W.root,f)},x))}))},8784:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7896),o=r(1461),a=r(2784),i=r(6277),l=r(4780),s=r(7450),p=r(9836),u=r(7156),c=r(2322);const m=["className","component"];function f(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:f}=e,g=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return a.forwardRef((function(e,a){const l=(0,u.Z)(t),s=(0,p.Z)(e),{className:y,component:h="div"}=s,d=(0,o.Z)(s,m);return(0,c.jsx)(g,(0,n.Z)({as:h,ref:a,className:(0,i.Z)(y,f?f(r):r),theme:l},d))}))}},9836:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7896),o=r(1461),a=r(8970),i=r(9795);const l=["sx"];function s(e){const{sx:t}=e,r=(0,o.Z)(e,l),{systemProps:s,otherProps:p}=(e=>{var t,r;const n={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n})(r);let u;return u=Array.isArray(t)?[s,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,a.P)(r)?(0,n.Z)({},s,r):s}:(0,n.Z)({},s,t),(0,n.Z)({},p,{sx:u})}},1453:(e,t,r)=>{r.r(t),r.d(t,{PaddedPaper:()=>c});var n=r(6641),o=r(2784);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=["children"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i);return o.createElement(n.Z,l({},r,{sx:p({padding:2},null==r?void 0:r.sx)}),t)};$RefreshReg$(c,"PaddedPaper")},8481:(e,t,r)=>{r.r(t),r.d(t,{WhatWeProvide:()=>y});var n=r(8728),o=r(4030),a=r(1989),i=r(2784),l=r(1453);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,n.ZP)(o.Z)((function(e){return{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",padding:e.theme.spacing(6,0)}}));m=u;var c=(0,n.ZP)(o.Z)((function(e){var t,r=e.theme;return p(t={width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(330px, 1fr))",gridGap:r.spacing(4),padding:r.spacing(0,4)},r.breakpoints.down("sm"),{gridTemplateColumns:"1fr",padding:r.spacing(0,2)}),p(t,"marginTop",r.spacing(2)),t}));f=c;var m,f,g,y=function(){return i.createElement(u,null,i.createElement(a.Z,{variant:"h3",gutterBottom:!0},"Why Us?"),i.createElement(a.Z,{variant:"body1",gutterBottom:!0},"We are an organization that provides free services to help people find jobs and improve their skills."),i.createElement(c,null,i.createElement(l.PaddedPaper,{elevation:12},i.createElement(a.Z,{variant:"h6",gutterBottom:!0},"Connect you with employers"),i.createElement(a.Z,{variant:"body1"},"We connect you with employers who are looking for people like you.")),i.createElement(l.PaddedPaper,{elevation:12},i.createElement(a.Z,{variant:"h6",gutterBottom:!0},"Get hands-on training"),i.createElement(a.Z,{variant:"body1"},"We provide hands-on training to help you improve your skills. If folks are lacking basic education, there are free classes available.")),i.createElement(l.PaddedPaper,{elevation:12},i.createElement(a.Z,{variant:"h6",gutterBottom:!0},"Amazing benefits"),i.createElement(a.Z,{variant:"body1"},"We provide amazing benefits to help you get back on your feet. Facilities such as insuarance, hygiene products, and food are available."))))};g=y,$RefreshReg$(m,"Container"),$RefreshReg$(f,"CardContainer"),$RefreshReg$(g,"WhatWeProvide")}}]);
//# sourceMappingURL=481.bundle.js.map