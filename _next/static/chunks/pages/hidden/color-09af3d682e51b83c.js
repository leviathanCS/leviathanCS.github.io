(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{5749:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hidden/color",function(){return t(8837)}])},8837:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Q}});var n=t(1799),s=t(943);var r=t(3375);var c=t(1566);function o(a){return function(a){if(Array.isArray(a))return(0,s.Z)(a)}(a)||(0,r.Z)(a)||(0,c.Z)(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=t(5893),h=t(7294);function l(){return l=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},l.apply(this,arguments)}function u(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}var v=255,d=100,f=a=>{var{r:e,g:t,b:n,a:s}=a,r=Math.max(e,t,n),c=r-Math.min(e,t,n),o=c?r===e?(t-n)/c:r===t?2+(n-e)/c:4+(e-t)/c:0;return{h:60*(o<0?o+6:o),s:r?c/r*d:0,v:r/v*d,a:s}},p=a=>{var{h:e,s:t,v:n,a:s}=a,r=(200-t)*n/d;return{h:e,s:r>0&&r<200?t*n/d/(r<=d?r:200-r)*d:0,l:r/2,a:s}},m=(Math.PI,a=>{var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return e?f({r:Number(e[1])/(e[2]?d/v:1),g:Number(e[3])/(e[4]?d/v:1),b:Number(e[5])/(e[6]?d/v:1),a:void 0===e[7]?1:Number(e[7])/(e[8]?d:1)}):{h:0,s:0,v:0,a:1}}),g=a=>{var e,{r:t,g:n,b:s}=a;return"#"+(e=(t<<16|n<<8|s).toString(16),new Array(7-e.length).join("0")+e)},w=a=>f(x(a)),x=a=>{var e=a.replace("#","");/^#?/.test(a)&&3===e.length&&(a="#"+e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2));var t=new RegExp("[A-Za-z0-9]{2}","g"),[n,s,r=0,c]=a.match(t).map((a=>parseInt(a,16)));return{r:n,g:s,b:r,a:c?c/v:1}},j=a=>{var{h:e,s:t,v:n,a:s}=a,r=e/60,c=t/d,o=n/d,i=Math.floor(r)%6,h=r-Math.floor(r),u=v*o*(1-c),f=v*o*(1-c*h),p=v*o*(1-c*(1-h));o*=v;var m={};switch(i){case 0:m.r=o,m.g=p,m.b=u;break;case 1:m.r=f,m.g=o,m.b=u;break;case 2:m.r=u,m.g=o,m.b=p;break;case 3:m.r=u,m.g=f,m.b=o;break;case 4:m.r=p,m.g=u,m.b=o;break;case 5:m.r=o,m.g=u,m.b=f}return m.r=Math.round(m.r),m.g=Math.round(m.g),m.b=Math.round(m.b),l({},m,{a:s})},b=a=>g(j(a));function N(a){var e=(0,h.useRef)(a);return(0,h.useEffect)((()=>{e.current=a})),(0,h.useCallback)(((a,t)=>e.current&&e.current(a,t)),[])}var A=a=>"touches"in a,y=a=>{!A(a)&&a.preventDefault&&a.preventDefault()},C=function(a,e,t){return void 0===e&&(e=0),void 0===t&&(t=1),a>t?t:a<e?e:a},_=(a,e)=>{var t=a.getBoundingClientRect(),n=A(e)?e.touches[0]:e;return{left:C((n.pageX-(t.left+window.pageXOffset))/t.width),top:C((n.pageY-(t.top+window.pageYOffset))/t.height),width:t.width,height:t.height,x:n.pageX-(t.left+window.pageXOffset),y:n.pageY-(t.top+window.pageYOffset)}},k=["prefixCls","className","onMove","onDown"],E=h.forwardRef(((a,e)=>{var{prefixCls:t="w-color-interactive",className:n,onMove:s,onDown:r}=a,c=u(a,k),o=(0,h.useRef)(null),v=(0,h.useRef)(!1),[d,f]=(0,h.useState)(!1),p=N(s),m=N(r),g=(0,h.useCallback)((a=>{y(a),(A(a)?a.touches.length>0:a.buttons>0)&&o.current?p&&p(_(o.current,a),a):f(!1)}),[p]),w=(0,h.useCallback)((()=>f(!1)),[]),x=(0,h.useCallback)((a=>{var e=a?window.addEventListener:window.removeEventListener;e(v.current?"touchmove":"mousemove",g),e(v.current?"touchend":"mouseup",w)}),[]);(0,h.useEffect)((()=>(x(d),()=>{d&&x(!1)})),[d,x]);var j=(0,h.useCallback)((a=>{y(a.nativeEvent),(a=>!(v.current&&!A(a))&&(v.current=A(a),!0))(a.nativeEvent)&&(m&&m(_(o.current,a.nativeEvent),a.nativeEvent),f(!0))}),[m]);return(0,i.jsx)("div",l({},c,{className:[t,n||""].filter(Boolean).join(" "),style:l({},c.style,{touchAction:"none"}),ref:o,tabIndex:0,onMouseDown:j,onTouchStart:j}))}));E.displayName="Interactive";var S=E,O=a=>{var{className:e,prefixCls:t,left:n,top:s}=a,r={position:"absolute",left:n,top:s};return(0,h.useMemo)((()=>(0,i.jsx)("div",{className:t+"-pointer "+(e||""),style:r,children:(0,i.jsx)("div",{className:t+"-fill",style:{width:18,height:18,transform:n?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})),[e,n,s,t])},P=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],T=h.forwardRef(((a,e)=>{var{prefixCls:t="w-color-alpha",className:n,hsva:s,background:r,bgProps:c={},innerProps:o={},radius:v=0,width:d,height:f=16,direction:m="horizontal",style:g,onChange:w,pointer:x}=a,j=u(a,P),b=(0,h.useCallback)((a=>{w&&w(l({},s,{a:"horizontal"===m?a.left:a.top}),a)}),[s]),N=(a=>{var{h:e,s:t,l:n,a:s}=p(a);return"hsla("+e+", "+t+"%, "+n+"%, "+s+")"})(Object.assign({},s,{a:1})),A="linear-gradient(to "+("horizontal"===m?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+N+" 100%)",y={};return"horizontal"===m?y.left=100*s.a+"%":y.top=100*s.a+"%",(0,i.jsxs)("div",l({},j,{className:[t,t+"-"+m,n||""].filter(Boolean).join(" "),style:l({borderRadius:v,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},g,{position:"relative"},{width:d,height:f}),ref:e,children:[(0,i.jsx)("div",l({},c,{style:l({inset:0,position:"absolute",background:r||A,borderRadius:v},c.style)})),(0,i.jsx)(S,l({},o,{style:l({},o.style,{inset:0,zIndex:1,position:"absolute"}),onMove:b,onDown:b,children:h.createElement(x||O,l({prefixCls:t},y))}))]}))}));T.displayName="Aplha";var M=T,R=["prefixCls","className","hue","onChange","direction"],Z=h.forwardRef(((a,e)=>{var{prefixCls:t="w-color-hue",className:n,hue:s=0,onChange:r,direction:c="horizontal"}=a,o=u(a,R);return(0,i.jsx)(M,l({ref:e,className:t+" "+(n||"")},o,{direction:c,background:"linear-gradient(to "+("horizontal"===c?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:s,s:100,v:100,a:s/360},onChange:(a,e)=>{r&&r({h:"horizontal"===c?360*e.left:360*e.top})}}))}));Z.displayName="Hue";var z=Z,B=t(2898),D=t.n(B);function I(a){var e=a.color,t=a.palette,n=a.addToPalette,s=a.copy,r=void 0!==s&&s,c=(0,h.useState)(!1),l=c[0],u=c[1];return(0,i.jsx)("div",{className:l?D().swatchsel:D().swatch,style:{background:e},onClick:function(){!function(a,e,t,n,s,r){if(e)navigator.clipboard.writeText(a);else{var c=o(t[0]);"N"===c[0]&&(c=[]),s?c.splice(c.indexOf(a),1):c.push(a),n(c),r((function(a){return!a}))}}(e,r,t,n,l,u)},children:e})}function Y(a){var e=a.colors,t=a.direction,n=a.copy,s=void 0!==n&&n,r=a.addToPalette,c=a.palette;return(0,i.jsx)("div",{className:"h"===t?D().hgroup:D().vgroup,children:e.map((function(a,e){return(0,i.jsx)(I,{color:a,copy:s,addToPalette:r,palette:c},e)}))})}var G=t(2462),X=t.n(G),J=100;function Q(){var a=(0,h.useState)({h:0,s:J,v:J,a:1}),e=a[0],t=a[1],s=(0,h.useState)(["NAC"]),r=s[0],c=s[1],l=(0,h.useState)(""),u=l[0],v=l[1],d=function(a){c((function(e){return[a]}))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{padding:10}}),(0,i.jsx)(Y,{colors:o(r[0]),direction:"h",copy:!0}),(0,i.jsx)("input",{onKeyPress:function(a){"Enter"===a.key&&(a.preventDefault(),t({h:w(a.target.value).h,s:J,v:J,a:1}),console.log(a.target.value),console.log(e))}}),"\xa0 \xa0 \xa0 CONVERT: ",(0,i.jsx)("input",{onKeyPress:function(a){"Enter"===a.key&&(a.preventDefault(),a.target.value.includes("#")?v((a=>{var{r:e,g:t,b:n}=j(a);return"rgb("+e+", "+t+", "+n+")"})(w(a.target.value))):v(b(m("rgb("+a.target.value+")"))))}}),"\xa0 =\xa0 ",u,(0,i.jsx)(z,{hue:e.h,onChange:function(a){t((0,n.Z)({},e,a))}}),(0,i.jsx)("h3",{children:"Analogous"}),(0,i.jsxs)("div",{className:X().swatches,children:[q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsx)("h3",{children:"Complement"}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:F(e),s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:F(e),s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:F(e),s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:F(e),s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsx)("h3",{children:"Triadic"}),(0,i.jsxs)("div",{className:X().swatches,children:[q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:H(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:H(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:H(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsx)("h3",{children:"Tetradic"}),(0,i.jsxs)("div",{className:X().swatches,children:[q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q(e).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:W(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[0],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:W(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[1],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]}),(0,i.jsxs)("div",{className:X().swatches,children:[q({h:W(e)[2],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:U({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[2],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:K({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[2],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:L({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))})),q({h:W(e)[2],s:J,v:J,a:1}).map((function(a,e){return(0,i.jsx)("div",{className:X().swatches,children:V({h:a,s:J,v:J,a:1},d,r)},"".concat(e,"+").concat(a))}))]})]})}function U(a,e,t){for(var n=[],s=0;s<5;s++)n[s]=b({h:a.h,s:(4-s+1)/5*100,v:a.v,a:100});return(0,i.jsx)(Y,{colors:n,addToPalette:e,palette:t})}function K(a,e,t){for(var n=[],s=0;s<5;s++)n[s]=b({h:a.h,s:a.s,v:(4-s+1)/5*100,a:100});return(0,i.jsx)(Y,{colors:n,addToPalette:e,palette:t})}function L(a,e,t){for(var n=[],s=0;s<5;s++)n[s]=b({h:a.h,s:(4-s+1)/5*100,v:(4-s+1)/5*100,a:100});return(0,i.jsx)(Y,{colors:n,addToPalette:e,palette:t})}function V(a,e,t){for(var n=[],s=0;s<5;s++)n[s]=b({h:a.h,s:(s+1)/5*100,v:(4-s+1)/5*100,a:100});return(0,i.jsx)(Y,{colors:n,addToPalette:e,palette:t})}function q(a){for(var e=[],t=0;t<5;t++){var n=a.h+(t-2)/5*100;n<0&&(n=360+n),e[t]=n}return e}function F(a){var e=a.h+180;return e<0&&(e=360+e),e}function H(a){var e,t=[];return(e=a.h+120)<0&&(e=360+e),t[0]=e,(e=e+120)<0&&(e=360+e),t[1]=e,t}function W(a){var e,t=[];return(e=a.h+90)<0&&(e=360+e),t[0]=e,(e=e+90)<0&&(e=360+e),t[1]=e,(e=e+90)<0&&(e=360+e),t[2]=e,t}},2898:function(a){a.exports={swatch:"ColorSwatch_swatch__J7xaB",swatchsel:"ColorSwatch_swatchsel__Zao9z",hgroup:"ColorSwatch_hgroup__wphy_",vgroup:"ColorSwatch_vgroup__EZaNw"}},2462:function(a){a.exports={swatches:"color_swatches__cGJnG",stick:"color_stick__qkS8j",sep:"color_sep__rjJhQ"}},943:function(a,e,t){"use strict";function n(a,e){(null==e||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}t.d(e,{Z:function(){return n}})},3375:function(a,e,t){"use strict";function n(a){if("undefined"!==typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}t.d(e,{Z:function(){return n}})},1566:function(a,e,t){"use strict";t.d(e,{Z:function(){return s}});var n=t(943);function s(a,e){if(a){if("string"===typeof a)return(0,n.Z)(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);return"Object"===t&&a.constructor&&(t=a.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.Z)(a,e):void 0}}}},function(a){a.O(0,[774,888,179],(function(){return e=5749,a(a.s=e);var e}));var e=a.O();_N_E=e}]);