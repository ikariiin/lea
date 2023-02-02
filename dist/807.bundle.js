"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[807,712,195,914],{5447:(e,t,r)=>{r.r(t),r.d(t,{Filter:()=>g});var n=r(8728),a=r(4030),o=r(1989),l=r(5894),i=r(559),c=r(4802),u=r(4118),f=r(2903),s=r(2784),m=r(5394);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,n.ZP)(a.Z)((function(e){var t=e.theme;return{width:"100%",padding:t.spacing(0,1),margin:t.spacing(1.5,0)}})),h=(0,n.ZP)("header")((function(){return{display:"flex",justifyContent:"space-between",cursor:"pointer",alignItems:"center"}})),g=function(e){var t=e.name,r=e.preExpanded,n=e.params,y=e.activeFilters,g=e.onFilterChange,b=p(s.useState(null!=r&&r),2),v=b[0],E=b[1],w=p(s.useState(n),2),S=w[0],Z=w[1];return s.createElement(d,null,s.createElement(h,{onClick:function(){return E((function(e){return!e}))}},s.createElement(o.Z,{variant:"subtitle1"},t),s.createElement(l.Z,{size:"small"},v?s.createElement(m.$N3,null):s.createElement(m.uGf,null))),n.length>5&&s.createElement(i.Z,{label:"Search for ".concat(t),variant:"outlined",fullWidth:!0,sx:{mb:1},size:"small",onChange:function(e){var t,r,a=e.target.value;t=a,r=n.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())})),Z(r)}}),s.createElement(c.Z,{in:v},S.map((function(e){return s.createElement(a.Z,{key:e},s.createElement(u.Z,{control:s.createElement(f.Z,{checked:y.includes(e),onChange:function(){return g(e)},size:"small"}),label:s.createElement(o.Z,{variant:"body2"},e)}))}))))}},7028:(e,t,r)=>{r.r(t),r.d(t,{Footer:()=>p});var n=r(8728),a=r(4030),o=r(8177),l=r(1989),i=r(2782),c=r(2784),u=r(9857),f=r(6712),s=r(9289),m=(0,n.ZP)("footer")((function(e){var t=e.theme;return{width:"100%",backgroundColor:t.palette.secondary.dark,color:t.palette.secondary.contrastText,padding:t.spacing(4,6),display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center"}})),p=function(){return c.createElement(m,null,c.createElement(a.Z,null,c.createElement(o.Z,{direction:"row",spacing:2,alignItems:"center",sx:{mb:2}},c.createElement(a.Z,{component:"img",src:f,alt:"Lea Logo",sx:{width:100,height:100}}),c.createElement(l.Z,{variant:"body2"},"© ",(new Date).getFullYear()," Lea")),c.createElement(o.Z,{direction:"row",spacing:2},c.createElement(i.Z,{variant:"text",color:"inherit",component:u.OL,to:"/listings"},"Listings"),c.createElement(i.Z,{variant:"text",color:"inherit",component:u.OL,to:"/about"},"About"),c.createElement(i.Z,{variant:"text",color:"inherit",component:u.OL,to:"/contact"},"Contact"),c.createElement(i.Z,{variant:"text",color:"inherit",component:u.OL,to:"/privacy"},"Privacy"))),c.createElement(a.Z,null,c.createElement(o.Z,{direction:"row",spacing:2},c.createElement(s.HeroInput,{placeholder:"Subscribe to our newsletter"}),c.createElement(i.Z,{variant:"contained",color:"primary",sx:{width:"20%"}},"Subscribe"))))}},106:(e,t,r)=>{r.r(t),r.d(t,{Header:()=>h});var n=r(8728),a=r(559),o=r(2782),l=r(8886),i=r(6969),c=r(2053),u=r(3959),f=r(2784),s=r(5394),m=r(9857),p=r(6712);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,n.ZP)("header")((function(e){var t=e.theme;return{width:"100%",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,padding:t.spacing(1,6),display:"grid",gridTemplateColumns:"2fr 8fr 2fr",alignItems:"center",position:"sticky",top:0,zIndex:1,boxShadow:t.shadows[2]}})),h=function(){var e,t,r=(e=f.useState(null),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],h=r[1],g=f.useMemo((function(){return Boolean(n)}),[n]),b=function(){h(null)};return f.createElement(d,null,f.createElement(u.Z,null,f.createElement(m.OL,{to:"/"},f.createElement(u.Z,{component:"img",src:p,alt:"Lea Logo",sx:{width:60,height:60}}))),f.createElement(u.Z,null,f.createElement("form",null,f.createElement(a.Z,{variant:"outlined",placeholder:"Search for your dream occupation",sx:{width:"100%"},InputProps:{endAdornment:f.createElement(s.t2h,{size:22})}}))),f.createElement(u.Z,{sx:{display:"flex",justifyContent:"flex-end"}},f.createElement(o.Z,{variant:"outlined",sx:{ml:2},onClick:function(e){h(e.currentTarget)}},"John Doe"),f.createElement(l.Z,{open:g,onClose:b,anchorEl:n},f.createElement(i.Z,{onClick:b},f.createElement(c.Z,null,f.createElement(s.YLs,{size:20})),"Profile"),f.createElement(i.Z,{onClick:b},f.createElement(c.Z,null,f.createElement(s.Xgw,{size:20})),"Sign out"))))}},9289:(e,t,r)=>{r.r(t),r.d(t,{HeroInput:()=>f});var n=r(8728),a=r(4030),o=r(6004),l=r(2784),i=["style","as","icon"];var c=(0,n.ZP)(a.Z)((function(e){var t=e.theme;return{width:"100%",padding:t.spacing(1.5,2),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper,boxShadow:t.shadows[24],display:"flex",alignItems:"center"}})),u=(0,n.ZP)("input")((function(e){var t=e.theme;return{color:t.palette.text.primary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.h6.fontSize,lineHeight:t.typography.h6.lineHeight,letterSpacing:t.typography.h6.letterSpacing,width:"100%",flexGrow:1,border:"none",outline:"none",backgroundColor:"transparent","&::placeholder":{color:t.palette.text.secondary}}})),f=function(e){var t=e.style,r=(e.as,e.icon),n=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),a=(0,o.Z)();return l.createElement(c,{style:t},r&&l.cloneElement(r,{size:24,style:{marginRight:a.spacing(1.5),color:a.palette.text.secondary}}),l.createElement(u,n))}},8807:(e,t,r)=>{r.r(t),r.d(t,{Search:()=>g});var n=r(8728),a=r(8177),o=r(2784),l=r(9289),i=r(5394),c=r(3914),u=r(6195),f=r(7028),s=r(2056),m=r(106);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,n.ZP)("header")((function(e){return{width:"100%",padding:e.theme.spacing(6,8)}})),h=(0,n.ZP)("main")((function(e){var t=e.theme;return{width:"100%",padding:t.spacing(0,8,4,8),display:"grid",gridTemplateColumns:"1fr 5fr",gap:t.spacing(4),position:"relative"}})),g=function(){var e=(0,c.useQuery)(),t=p(o.useState(e.get("city")||""),2),r=t[0],n=t[1],y=p(o.useState(e.get("occupation")||""),2),g=y[0],b=y[1];return o.createElement(o.Fragment,null,o.createElement(m.Header,null),o.createElement(d,null,o.createElement(a.Z,{direction:"row",spacing:2,alignItems:"center",sx:{mb:2}},o.createElement(l.HeroInput,{icon:o.createElement(i.Dje,null),placeholder:"City",style:{width:300},value:r,onChange:function(e){return n(e.target.value)}}),o.createElement(l.HeroInput,{icon:o.createElement(i.yNZ,null),placeholder:"Search for your dream occupation",value:g,onChange:function(e){return b(e.target.value)}}))),o.createElement(h,null,o.createElement(u.Sidebar,null),o.createElement(s.Listings,null)),o.createElement(f.Footer,null))}},6195:(e,t,r)=>{r.r(t),r.d(t,{Sidebar:()=>v});var n=r(8728),a=r(6641),o=r(4030),l=r(1989),i=r(7216),c=r(559),u=r(2784),f=r(5447);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=(0,n.ZP)(a.Z)((function(e){return{width:"100%",padding:e.theme.spacing(1,2),maxHeight:"calc(90vh - 82px)",overflowY:"auto",position:"sticky",top:"calc(82px + 5vh)",minHeight:"50vh"}})),b=(0,n.ZP)(o.Z)((function(e){return{display:"flex",flexWrap:"wrap",gap:e.theme.spacing(1),alignItems:"center"}})),v=function(){var e,t,r=u.useRef({City:!0,"Job Type":!1,"Education Level":!1,"Experience Level":!1,"Wage Type":!1}),n={City:["Kolkata","Siliguri","Purulia","Asansol"],"Job Type":["Part Time","Work from home"],"Education Level":["None","Primary","Secondary","Higher Secondary","Graduate"],"Experience Level":["Fresher","Experienced"],"Wage Type":["Hourly","Monthly"]},a=(e=u.useState({City:["Kolkata"]}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw a}}return i}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],s=a[1],m=function(e){return function(t){var r,n=null!==(r=o[e])&&void 0!==r?r:[];n.includes(t)?s(p(p({},o),{},y({},e,n.filter((function(e){return e!==t}))))):s(p(p({},o),{},y({},e,[].concat(function(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n),[t]))))}};return u.createElement(g,{elevation:0},u.createElement(l.Z,{variant:"h6",gutterBottom:!0},"Filter and sorting"),Object.values(o).flat().length>0&&u.createElement(b,null,u.createElement(l.Z,{variant:"caption",component:"div"},"Active filters:"," "),Object.keys(o).map((function(e){return o[e].map((function(t){return u.createElement(i.Z,{key:t,label:t,onDelete:function(){return m(e)(t)}})}))}))),u.createElement(c.Z,{label:"Search for filters",variant:"outlined",fullWidth:!0,sx:{mb:2,mt:1},size:"small"}),Object.keys(n).map((function(e){var t;return u.createElement(f.Filter,{key:e,name:e,params:n[e],activeFilters:null!==(t=o[e])&&void 0!==t?t:[],onFilterChange:m(e),preExpanded:r.current[e]})})))}},3914:(e,t,r)=>{r.r(t),r.d(t,{useQuery:()=>o});var n=r(2784),a=r(3557);function o(){var e=(0,a.TH)();return n.useMemo((function(){return new URLSearchParams(e.search)}),[e])}},6712:(e,t,r)=>{e.exports=r.p+"3ac653826f5101a83135.png"}}]);
//# sourceMappingURL=807.bundle.js.map