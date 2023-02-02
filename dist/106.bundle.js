"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[106,712],{7621:(e,t,r)=>{r.d(t,{V:()=>o,Z:()=>i});var n=r(9222),a=r(5672);function o(e){return(0,a.Z)("MuiDivider",e)}const i=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},2053:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(1461),a=r(7896),o=r(2784),i=r(6277),l=r(9075),s=r(8728),c=r(8941),d=r(1362),u=r(319),p=r(2322);const m=["className"],f=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,a.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiListItemIcon"}),{className:s}=r,g=(0,n.Z)(r,m),v=o.useContext(u.Z),b=(0,a.Z)({},r,{alignItems:v.alignItems}),h=(e=>{const{alignItems:t,classes:r}=e,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,l.Z)(n,d.f,r)})(b);return(0,p.jsx)(f,(0,a.Z)({className:(0,i.Z)(h.root,s),ownerState:b,ref:t},g))}))},1362:(e,t,r)=>{r.d(t,{Z:()=>i,f:()=>o});var n=r(9222),a=r(5672);function o(e){return(0,a.Z)("MuiListItemIcon",e)}const i=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},6969:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(1461),a=r(7896),o=r(2784),i=r(6277),l=r(9075),s=r(7591),c=r(8728),d=r(8941),u=r(319),p=r(8514),m=r(2445),f=r(2936),g=r(7621),v=r(1362),b=r(9222);const h=(0,b.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var y=r(5672);function Z(e){return(0,y.Z)("MuiMenuItem",e)}const x=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var I=r(2322);const C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],$=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${h.root}`]:{marginTop:0,marginBottom:0},[`& .${h.inset}`]:{paddingLeft:36},[`& .${v.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.Z.root} svg`]:{fontSize:"1.25rem"}})))),w=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:g=!1,disableGutters:v=!1,focusVisibleClassName:b,role:h="menuitem",tabIndex:y,className:x}=r,w=(0,n.Z)(r,C),S=o.useContext(u.Z),k=o.useMemo((()=>({dense:p||S.dense||!1,disableGutters:v})),[S.dense,p,v]),E=o.useRef(null);(0,m.Z)((()=>{s&&E.current&&E.current.focus()}),[s]);const M=(0,a.Z)({},r,{dense:k.dense,divider:g,disableGutters:v}),O=(e=>{const{disabled:t,dense:r,divider:n,disableGutters:o,selected:i,classes:s}=e,c={root:["root",r&&"dense",t&&"disabled",!o&&"gutters",n&&"divider",i&&"selected"]},d=(0,l.Z)(c,Z,s);return(0,a.Z)({},s,d)})(r),R=(0,f.Z)(E,t);let L;return r.disabled||(L=void 0!==y?y:-1),(0,I.jsx)(u.Z.Provider,{value:k,children:(0,I.jsx)($,(0,a.Z)({ref:R,role:h,tabIndex:L,component:c,focusVisibleClassName:(0,i.Z)(O.focusVisible,b),className:(0,i.Z)(O.root,x)},w,{ownerState:M,classes:O}))})}))},3959:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(8784).Z)()},106:(e,t,r)=>{r.r(t),r.d(t,{Header:()=>y});var n=r(8728),a=r(559),o=r(2782),i=r(8886),l=r(6969),s=r(2053),c=r(3959),d=r(2784),u=r(5394),p=r(9857),m=r(6712),f=$RefreshSig$();function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=(0,n.ZP)("header")((function(e){var t=e.theme;return{width:"100%",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,padding:t.spacing(1,6),display:"grid",gridTemplateColumns:"2fr 8fr 2fr",alignItems:"center",position:"sticky",top:0,zIndex:1,boxShadow:t.shadows[2]}}));b=v;var b,h,y=function(){f();var e,t,r=(e=d.useState(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],b=r[1],h=d.useMemo((function(){return Boolean(n)}),[n]),y=function(){b(null)};return d.createElement(v,null,d.createElement(c.Z,null,d.createElement(p.OL,{to:"/"},d.createElement(c.Z,{component:"img",src:m,alt:"Lea Logo",sx:{width:60,height:60}}))),d.createElement(c.Z,null,d.createElement("form",null,d.createElement(a.Z,{variant:"outlined",placeholder:"Search for your dream occupation",sx:{width:"100%"},InputProps:{endAdornment:d.createElement(u.t2h,{size:22})}}))),d.createElement(c.Z,{sx:{display:"flex",justifyContent:"flex-end"}},d.createElement(o.Z,{variant:"outlined",sx:{ml:2},onClick:function(e){b(e.currentTarget)}},"John Doe"),d.createElement(i.Z,{open:h,onClose:y,anchorEl:n},d.createElement(l.Z,{onClick:y},d.createElement(s.Z,null,d.createElement(u.YLs,{size:20})),"Profile"),d.createElement(l.Z,{onClick:y},d.createElement(s.Z,null,d.createElement(u.Xgw,{size:20})),"Sign out"))))};f(y,"q0Z6iXiqsbxFMzdspyvHiluQK3w="),h=y,$RefreshReg$(b,"Container"),$RefreshReg$(h,"Header")},6712:(e,t,r)=>{e.exports=r.p+"3ac653826f5101a83135.png"}}]);
//# sourceMappingURL=106.bundle.js.map