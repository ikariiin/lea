"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[837,780],{7758:(e,r,o)=>{o.d(r,{Z:()=>S});var t=o(1461),n=o(7896),a=o(2784),i=o(6277),l=o(9075),s=o(8728),c=o(8941),u=o(8894),p=o(2322);const d=(0,u.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=o(9222),h=o(5672);function g(e){return(0,h.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})((({theme:e,ownerState:r})=>(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),y=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,s.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),S=a.forwardRef((function(e,r){const o=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:u,className:d,component:m="div",imgProps:h,sizes:S,src:b,srcSet:w,variant:x="circular"}=o,k=(0,t.Z)(o,v);let R=null;const B=function({crossOrigin:e,referrerPolicy:r,src:o,srcSet:t}){const[n,i]=a.useState(!1);return a.useEffect((()=>{if(!o&&!t)return;i(!1);let n=!0;const a=new Image;return a.onload=()=>{n&&i("loaded")},a.onerror=()=>{n&&i("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=o,t&&(a.srcset=t),()=>{n=!1}}),[e,r,o,t]),n}((0,n.Z)({},h,{src:b,srcSet:w})),z=b||w,M=z&&"error"!==B,j=(0,n.Z)({},o,{colorDefault:!M,component:m,variant:x}),N=(e=>{const{classes:r,variant:o,colorDefault:t}=e,n={root:["root",o,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(n,g,r)})(j);return R=M?(0,p.jsx)(y,(0,n.Z)({alt:s,src:b,srcSet:w,sizes:S,ownerState:j,className:N.img},h)):null!=u?u:z&&s?s[0]:(0,p.jsx)(Z,{className:N.fallback}),(0,p.jsx)(f,(0,n.Z)({as:m,ownerState:j,className:(0,i.Z)(N.root,d),ref:r},k,{children:R}))}))},8177:(e,r,o)=>{o.d(r,{Z:()=>v});var t=o(1461),n=o(7896),a=o(2784),i=o(9929),l=o(7649),s=o(9836),c=o(8970),u=o(8728),p=o(8941),d=o(2322);const m=["component","direction","spacing","divider","children"];function h(e,r){const o=a.Children.toArray(e).filter(Boolean);return o.reduce(((e,t,n)=>(e.push(t),n<o.length-1&&e.push(a.cloneElement(r,{key:`separator-${n}`})),e)),[])}const g=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})((({ownerState:e,theme:r})=>{let o=(0,n.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:r},(0,i.P$)({values:e.direction,breakpoints:r.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const t=(0,l.hB)(r),n=Object.keys(r.breakpoints.values).reduce(((r,o)=>(("object"==typeof e.spacing&&null!=e.spacing[o]||"object"==typeof e.direction&&null!=e.direction[o])&&(r[o]=!0),r)),{}),a=(0,i.P$)({values:e.direction,base:n}),s=(0,i.P$)({values:e.spacing,base:n});"object"==typeof a&&Object.keys(a).forEach(((e,r,o)=>{if(!a[e]){const t=r>0?a[o[r-1]]:"column";a[e]=t}}));const u=(r,o)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=o?a[o]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,l.NA)(t,r)}};var n};o=(0,c.Z)(o,(0,i.k9)({theme:r},s,u))}return o=(0,i.dt)(r.breakpoints,o),o})),v=a.forwardRef((function(e,r){const o=(0,p.Z)({props:e,name:"MuiStack"}),a=(0,s.Z)(o),{component:i="div",direction:l="column",spacing:c=0,divider:u,children:v}=a,f=(0,t.Z)(a,m),y={direction:l,spacing:c};return(0,d.jsx)(g,(0,n.Z)({as:i,ownerState:y,ref:r},f,{children:u?h(v,u):v}))}))},1989:(e,r,o)=>{o.d(r,{Z:()=>S});var t=o(1461),n=o(7896),a=o(2784),i=o(6277),l=o(9836),s=o(9075),c=o(8728),u=o(8941),p=o(1326),d=o(9222),m=o(5672);function h(e){return(0,m.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=o(2322);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.variant&&r[o.variant],"inherit"!==o.align&&r[`align${(0,p.Z)(o.align)}`],o.noWrap&&r.noWrap,o.gutterBottom&&r.gutterBottom,o.paragraph&&r.paragraph]}})((({theme:e,ownerState:r})=>(0,n.Z)({margin:0},r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=a.forwardRef((function(e,r){const o=(0,u.Z)({props:e,name:"MuiTypography"}),a=(e=>Z[e]||e)(o.color),c=(0,l.Z)((0,n.Z)({},o,{color:a})),{align:d="inherit",className:m,component:S,gutterBottom:b=!1,noWrap:w=!1,paragraph:x=!1,variant:k="body1",variantMapping:R=y}=c,B=(0,t.Z)(c,v),z=(0,n.Z)({},c,{align:d,color:a,className:m,component:S,gutterBottom:b,noWrap:w,paragraph:x,variant:k,variantMapping:R}),M=S||(x?"p":R[k]||y[k])||"span",j=(e=>{const{align:r,gutterBottom:o,noWrap:t,paragraph:n,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,p.Z)(r)}`,o&&"gutterBottom",t&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,h,i)})(z);return(0,g.jsx)(f,(0,n.Z)({as:M,ref:r,ownerState:z,className:(0,i.Z)(j.root,m)},B))}))},8894:(e,r,o)=>{o.d(r,{Z:()=>Z});var t=o(7896),n=o(2784),a=o(1461),i=o(6277),l=o(9075),s=o(1326),c=o(8941),u=o(8728),p=o(9222),d=o(5672);function m(e){return(0,d.Z)("MuiSvgIcon",e)}(0,p.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=o(2322);const g=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,"inherit"!==o.color&&r[`color${(0,s.Z)(o.color)}`],r[`fontSize${(0,s.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:r})=>{var o,t,n,a,i,l,s,c,u,p,d,m,h,g,v,f,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(t=o.create)?void 0:t.call(o,"fill",{duration:null==(n=e.transitions)||null==(a=n.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(u=e.typography)||null==(p=u.pxToRem)?void 0:p.call(u,35))||"2.1875rem"}[r.fontSize],color:null!=(d=null==(m=(e.vars||e).palette)||null==(h=m[r.color])?void 0:h.main)?d:{action:null==(g=(e.vars||e).palette)||null==(v=g.action)?void 0:v.active,disabled:null==(f=(e.vars||e).palette)||null==(y=f.action)?void 0:y.disabled,inherit:void 0}[r.color]}})),f=n.forwardRef((function(e,r){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:p="inherit",component:d="svg",fontSize:f="medium",htmlColor:y,inheritViewBox:Z=!1,titleAccess:S,viewBox:b="0 0 24 24"}=o,w=(0,a.Z)(o,g),x=(0,t.Z)({},o,{color:p,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:Z,viewBox:b}),k={};Z||(k.viewBox=b);const R=(e=>{const{color:r,fontSize:o,classes:t}=e,n={root:["root","inherit"!==r&&`color${(0,s.Z)(r)}`,`fontSize${(0,s.Z)(o)}`]};return(0,l.Z)(n,m,t)})(x);return(0,h.jsxs)(v,(0,t.Z)({as:d,className:(0,i.Z)(R.root,u),focusable:"false",color:y,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:r},k,w,{ownerState:x,children:[n,S?(0,h.jsx)("title",{children:S}):null]}))}));f.muiName="SvgIcon";const y=f;function Z(e,r){function o(o,n){return(0,h.jsx)(y,(0,t.Z)({"data-testid":`${r}Icon`,ref:n},o,{children:e}))}return o.muiName=y.muiName,n.memo(n.forwardRef(o))}}}]);
//# sourceMappingURL=837.bundle.js.map