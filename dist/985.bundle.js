"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[985,453],{6221:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(1461),n=r(7896),o=r(2784),l=r(6277),a=r(9075),c=r(7591),s=r(8728),d=r(8941),u=r(7621),f=r(2322);const h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:g=!1,light:b=!1,orientation:w="horizontal",role:y=("hr"!==v?"separator":void 0),textAlign:x="center",variant:S="fullWidth"}=r,Z=(0,i.Z)(r,h),O=(0,n.Z)({},r,{absolute:o,component:v,flexItem:g,light:b,orientation:w,role:y,textAlign:x,variant:S}),j=(e=>{const{absolute:t,children:r,classes:i,flexItem:n,light:o,orientation:l,textAlign:c,variant:s}=e,d={root:["root",t&&"absolute",s,o&&"light","vertical"===l&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===c&&"vertical"!==l&&"textAlignRight","left"===c&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,a.Z)(d,u.V,i)})(O);return(0,f.jsx)(m,(0,n.Z)({as:v,className:(0,l.Z)(j.root,s),role:y,ref:t,ownerState:O},Z,{children:c?(0,f.jsx)(p,{className:j.wrapper,ownerState:O,children:c}):null}))}))},7621:(e,t,r)=>{r.d(t,{V:()=>o,Z:()=>l});var i=r(9222),n=r(5672);function o(e){return(0,n.Z)("MuiDivider",e)}const l=(0,i.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},8894:(e,t,r)=>{r.d(t,{Z:()=>w});var i=r(7896),n=r(2784),o=r(1461),l=r(6277),a=r(9075),c=r(1326),s=r(8941),d=r(8728),u=r(9222),f=r(5672);function h(e){return(0,f.Z)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=r(2322);const p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,c.Z)(r.color)}`],t[`fontSize${(0,c.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,i,n,o,l,a,c,s,d,u,f,h,m,p,v,g,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(i=r.create)?void 0:i.call(r,"fill",{duration:null==(n=e.transitions)||null==(o=n.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(l=e.typography)||null==(a=l.pxToRem)?void 0:a.call(l,20))||"1.25rem",medium:(null==(c=e.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875rem"}[t.fontSize],color:null!=(f=null==(h=(e.vars||e).palette)||null==(m=h[t.color])?void 0:m.main)?f:{action:null==(p=(e.vars||e).palette)||null==(v=p.action)?void 0:v.active,disabled:null==(g=(e.vars||e).palette)||null==(b=g.action)?void 0:b.disabled,inherit:void 0}[t.color]}})),g=n.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:n,className:d,color:u="inherit",component:f="svg",fontSize:g="medium",htmlColor:b,inheritViewBox:w=!1,titleAccess:y,viewBox:x="0 0 24 24"}=r,S=(0,o.Z)(r,p),Z=(0,i.Z)({},r,{color:u,component:f,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:x}),O={};w||(O.viewBox=x);const j=(e=>{const{color:t,fontSize:r,classes:i}=e,n={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(r)}`]};return(0,a.Z)(n,h,i)})(Z);return(0,m.jsxs)(v,(0,i.Z)({as:f,className:(0,l.Z)(j.root,d),focusable:"false",color:b,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},O,S,{ownerState:Z,children:[n,y?(0,m.jsx)("title",{children:y}):null]}))}));g.muiName="SvgIcon";const b=g;function w(e,t){function r(r,n){return(0,m.jsx)(b,(0,i.Z)({"data-testid":`${t}Icon`,ref:n},r,{children:e}))}return r.muiName=b.muiName,n.memo(n.forwardRef(r))}},1453:(e,t,r)=>{r.r(t),r.d(t,{PaddedPaper:()=>u});var i=r(6641),n=r(2784);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l=["children"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},a.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,l);return n.createElement(i.Z,a({},r,{sx:s({padding:2},null==r?void 0:r.sx)}),t)};$RefreshReg$(u,"PaddedPaper")},6749:(e,t,r)=>{r.r(t),r.d(t,{Listing:()=>b});var i=r(8728),n=r(1989),o=r(7216),l=r(6221),a=r(2782),c=r(2784),s=r(5394),d=r(1453),u=(0,i.ZP)("header")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",gap:t.spacing(1.5),marginBottom:t.spacing(1)}}));m=u;var f=(0,i.ZP)("div")((function(){return{flexGrow:1}}));p=f;var h=(0,i.ZP)("footer")((function(e){return{display:"flex",justifyContent:"flex-end",gap:e.theme.spacing(2),alignItems:"center"}}));v=h;var m,p,v,g,b=function(e){return c.createElement(d.PaddedPaper,{sx:{marginBottom:2,"&:last-child":{marginBottom:0}}},c.createElement(u,null,c.createElement(n.Z,{variant:"h4"},e.title),c.createElement(o.Z,{icon:c.createElement(s.Tvm,{size:20}),label:e.jobType}),c.createElement(o.Z,{icon:c.createElement(s.DJT,{size:20}),label:e.education}),c.createElement(f,null),c.createElement(n.Z,{variant:"h6"},e.city)),c.createElement(n.Z,{variant:"body1"},e.details),c.createElement(l.Z,{sx:{mt:2,mb:2}}),c.createElement(h,null,c.createElement(n.Z,{variant:"h6"},"₹",e.hourlyRate," / hr"),c.createElement(a.Z,{variant:"contained",color:"primary"},"Apply Now")))};g=b,$RefreshReg$(m,"Header"),$RefreshReg$(p,"Grow"),$RefreshReg$(v,"Actions"),$RefreshReg$(g,"Listing")}}]);
//# sourceMappingURL=985.bundle.js.map