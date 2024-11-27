(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[866],{8150:(n,e,t)=>{"use strict";t.d(e,{$:()=>g});var i,a=t(7528),o=(t(5043),t(4574)),r=t(579);const s=o.Ay.div(i||(i=(0,a.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(n=>n.size),(n=>n.size),(n=>n.borderSize),(n=>n.borderSize),(n=>n.borderSize)),l=n=>{let{size:e="40px",borderSize:t="5px"}=n;return(0,r.jsx)(s,{size:e,borderSize:t})};var d,c,u,p,h=t(5475);const m=o.Ay.button(d||(d=(0,a.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(n=>n.height||"66px"),(n=>"secondary"===n.kind&&(0,o.AH)(c||(c=(0,a.A)(["\n      color: ",";\n      background-color: white;\n    "])),(n=>n.theme.primary))),(n=>"primary"===n.kind&&(0,o.AH)(u||(u=(0,a.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(n=>n.theme.primary),(n=>n.theme.secondary))),(n=>"ghost"===n.kind&&(0,o.AH)(p||(p=(0,a.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(n=>n.theme.primary)))),g=n=>{let{type:e="button ",onClick:t=(()=>{}),children:i,kind:a="primary",...o}=n;const{isLoading:s,to:d}=o,c=s?(0,r.jsx)(l,{}):i;return""!==d&&"string"===typeof d?(0,r.jsx)(h.k2,{to:d,className:"inline-block",children:(0,r.jsx)(m,{type:e,kind:a,onClick:t,...o,children:c})}):(0,r.jsx)(m,{type:e,kind:a,onClick:t,...o,children:c})}},2102:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var i,a=t(7528),o=(t(5043),t(4574)),r=t(579);const s=o.Ay.h2(i||(i=(0,a.A)(["\n  color: ",';\n  font-size: 28px;\n  position: relative;\n  margin-bottom: 30px;\n  font-weight: 600;\n\n  // line accent\n  &:before {\n    content: "";\n    width: 50px;\n    height: 4px;\n    background-color: ',";\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(0, -150%);\n  }\n"])),(n=>n.theme.tertiary),(n=>n.theme.accent)),l=n=>{let{className:e="",children:t}=n;return(0,r.jsx)(s,{className:e,children:t})}},2771:(n,e,t)=>{"use strict";t.d(e,{A:()=>h});t(5043);var i,a=t(7528),o=t(8150),r=t(1625),s=t(5475),l=t(4574),d=t(579);const c=[{url:"/",title:"Home"},{url:"/blog",title:"Blog"},{url:"/contact",title:"Contact"}],u=l.Ay.header(i||(i=(0,a.A)(["\n  padding: 20px 0;\n  .header-main {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .header-auth {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .logo {\n    display: block;\n    max-width: 50px;\n  }\n  .menu {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-left: 40px;\n    list-style: none;\n    font-weight: 500;\n  }\n  .search {\n    margin-left: auto;\n    padding: 15px 25px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 320px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-right: 20px;\n  }\n  .search-input {\n    flex: 1;\n    padding-right: 40px;\n    font-weight: 500;\n  }\n  .search-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 25px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .logo {\n      max-width: 30px;\n    }\n    .menu,\n    .search,\n    .header-button,\n    .header-auth {\n      display: none;\n    }\n  }\n"]))),p=()=>{const{userInfo:n}=(0,r.A)();return(0,d.jsx)(u,{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"header-main",children:[(0,d.jsx)(s.k2,{to:"/",children:(0,d.jsx)("img",{srcSet:"/logo.png 2x",alt:"monkey-blogging",className:"logo"})}),(0,d.jsx)("ul",{className:"menu",children:c.map((n=>(0,d.jsx)("li",{className:"menu-item",children:(0,d.jsx)(s.k2,{to:n.url,className:"menu-link",children:n.title})},n.title)))}),n?(0,d.jsx)("div",{className:"header-auth",children:(0,d.jsx)(o.$,{type:"button",height:"56px",className:"header-button",to:"/dashboard",children:"Dashboard"})}):(0,d.jsx)(o.$,{type:"button",height:"56px",className:"header-button",to:"/sign-in",children:"Login"})]})})})},h=n=>{let{children:e}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),e]})}},3724:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var i,a,o,r=t(7528),s=(t(5043),t(5475)),l=t(4574),d=t(579);const c=l.Ay.div(i||(i=(0,r.A)(["\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f3f3f3;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>n.theme.gray6B),(n=>"primary"===n.type&&(0,l.AH)(a||(a=(0,r.A)(["\n      background-color: ",";\n    "])),(n=>n.theme.grayF3))),(n=>"secondary"===n.type&&(0,l.AH)(o||(o=(0,r.A)(["\n      background-color: white;\n    "]))))),u=n=>{let{children:e,type:t="primary",className:i="",to:a=""}=n;return(0,d.jsx)(c,{type:t,className:"post-category ".concat(i),children:(0,d.jsx)(s.N_,{to:"/category/".concat(a),children:e})})}},9631:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var i,a=t(7528),o=(t(5043),t(5475)),r=t(4574),s=t(579);const l=r.Ay.div(i||(i=(0,a.A)(["\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: inherit;\n  }\n"]))),d=n=>{let{className:e="",url:t="",alt:i="",to:a=""}=n;return a?(0,s.jsx)(o.N_,{to:"/".concat(a),style:{display:"block"},children:(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}):(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}},8875:(n,e,t)=>{"use strict";t.d(e,{A:()=>m});var i,a=t(7528),o=(t(5043),t(4574)),r=t(3724),s=t(232),l=t(3881),d=t(9631),c=t(948),u=t.n(c),p=t(579);const h=o.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  .post {\n    &-image {\n      height: 202px;\n      margin-bottom: 20px;\n      display: block;\n      width: 100%;\n      border-radius: 16px;\n    }\n    &-category {\n      display: inline-block;\n      padding: 8px;\n      border-radius: 8px;\n      color: #6b6b6b;\n      font-size: 14px;\n      font-weight: 600;\n      background-color: #f3edff;\n      margin-bottom: 16px;\n    }\n    &-info {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      color: #6b6b6b;\n      margin-top: auto;\n    }\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n    &-title {\n      margin-bottom: 12px;\n    }\n  }\n"]))),m=n=>{var e,t,i,a,o,c;let{data:m}=n;if(!m)return null;const g=null!==m&&void 0!==m&&null!==(e=m.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===m||void 0===m||null===(t=m.createdAt)||void 0===t?void 0:t.seconds)):new Date,x=new Date(g).toLocaleDateString("vi-VI");return(0,p.jsxs)(h,{children:[(0,p.jsx)(d.A,{url:m.image,alt:"",to:m.slug}),(0,p.jsx)(r.A,{to:null===(i=m.category)||void 0===i?void 0:i.slug,children:null===(a=m.category)||void 0===a?void 0:a.name}),(0,p.jsx)(s.A,{to:m.slug,children:m.title}),(0,p.jsx)(l.A,{to:u()((null===(o=m.user)||void 0===o?void 0:o.username)||"",{lower:!0}),authorName:null===(c=m.user)||void 0===c?void 0:c.fullname,date:x})]})}},3881:(n,e,t)=>{"use strict";t.d(e,{A:()=>d});var i,a=t(7528),o=(t(5043),t(5475)),r=t(4574),s=t(579);const l=r.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: inherit;\n  .post {\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n  }\n"]))),d=n=>{let{date:e="Mar 23",authorName:t="Andiez Le",className:i="",to:a=""}=n;return(0,s.jsxs)(l,{className:i,children:[(0,s.jsx)("span",{className:"post-time",children:e}),(0,s.jsx)("span",{className:"post-dot"}),(0,s.jsx)(o.N_,{to:"/author/".concat(a),children:(0,s.jsx)("span",{className:"post-author",children:t})})]})}},232:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var i,a,o,r=t(7528),s=(t(5043),t(5475)),l=t(4574),d=t(579);const c=l.Ay.h3(i||(i=(0,r.A)(["\n  font-weight: 600;\n  line-height: 1.5;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>"normal"===n.size&&(0,l.AH)(a||(a=(0,r.A)(["\n      font-size: 18px;\n    "])))),(n=>"big"===n.size&&(0,l.AH)(o||(o=(0,r.A)(["\n      font-size: 22px;\n    "]))))),u=n=>{let{children:e,className:t="",size:i="normal",to:a=""}=n;return(0,d.jsx)(c,{size:i,className:"post-title ".concat(t),children:(0,d.jsx)(s.N_,{to:"/".concat(a),children:e})})}},4866:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>K});var i,a=t(7528),o=t(2771),r=t(8150),s=t(5043),l=t(4574),d=t(579);const c=l.Ay.div(i||(i=(0,a.A)(["\n  min-height: 520px;\n  padding: 40px 0;\n  background-image: linear-gradient(\n    to right bottom,\n    ",",\n    ","\n  );\n  margin-bottom: 60px;\n\n  .banner {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &-content {\n      max-width: 600px;\n      color: white;\n    }\n\n    &-heading {\n      font-size: 36px;\n      margin-bottom: 20px;\n    }\n\n    &-desc {\n      line-height: 1.75;\n      margin-bottom: 40px;\n    }\n  }\n"])),(n=>n.theme.primary),(n=>n.theme.secondary)),u=()=>(0,d.jsx)(c,{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"banner",children:[(0,d.jsxs)("div",{className:"banner-content",children:[(0,d.jsx)("h1",{className:"banner-heading",children:"MK Blogging App"}),(0,d.jsx)("p",{className:"banner-desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit laudantium nemo architecto eius, ab unde, animi saepe inventore sapiente quasi voluptatem earum reprehenderit, dolor a officia facere provident quaerat."}),(0,d.jsx)(r.$,{to:"/sign-up",kind:"secondary",children:"Get started"})]}),(0,d.jsx)("div",{className:"banner-image",children:(0,d.jsx)("img",{src:"/img-banner.png",alt:"banner"})})]})})});var p,h=t(2102),m=t(5883),g=t(6032),x=t(948),v=t.n(x),y=t(232),b=t(3881),f=t(9631),A=t(3724);const j=l.Ay.div(p||(p=(0,a.A)(["\n  width: 100%;\n  border-radius: 16px;\n  position: relative;\n  height: 169px;\n  .post {\n    &-image {\n      width: 100%;\n      height: 100%;\n      border-radius: 16px;\n    }\n    &-overlay {\n      position: absolute;\n      inset: 0;\n      border-radius: 16px;\n      background: linear-gradient(\n        179.77deg,\n        #6b6b6b 36.45%,\n        rgba(163, 163, 163, 0.622265) 63.98%,\n        rgba(255, 255, 255, 0) 99.8%\n      );\n      mix-blend-mode: multiply;\n      opacity: 0.6;\n    }\n    &-content {\n      position: absolute;\n      inset: 0;\n      z-index: 10;\n      padding: 20px;\n      color: white;\n    }\n    &-top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    height: 272px;\n  }\n"]))),w=n=>{var e,t,i;let{data:a}=n;if(!a||!a.id)return null;const o=null!==a&&void 0!==a&&null!==(e=a.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===a||void 0===a||null===(t=a.createdAt)||void 0===t?void 0:t.seconds)):new Date,r=new Date(o).toLocaleDateString("vi-VI"),{category:s,user:l}=a;return(0,d.jsxs)(j,{children:[(0,d.jsx)(f.A,{url:a.image,alt:"unsplash"}),(0,d.jsx)("div",{className:"post-overlay"}),(0,d.jsxs)("div",{className:"post-content",children:[(0,d.jsxs)("div",{className:"post-top",children:[(null===(i=a.category)||void 0===i?void 0:i.name)&&(0,d.jsx)(A.A,{to:s.slug,children:s.name}),(0,d.jsx)(b.A,{to:v()((null===l||void 0===l?void 0:l.username)||"",{lower:!0}),authorName:null===l||void 0===l?void 0:l.fullname,date:r})]}),(0,d.jsx)(y.A,{to:a.slug,size:"big",children:a.title})]})]})};var k;const N=l.Ay.div(k||(k=(0,a.A)([""]))),z=()=>{const[n,e]=(0,s.useState)([]);return(0,s.useEffect)((()=>{const n=(0,g.rJ)(m.db,"posts"),t=(0,g.P)(n,(0,g._M)("status","==",1),(0,g._M)("hot","==",!0),(0,g.AB)(3));(0,g.aQ)(t,(n=>{const t=[];n.forEach((n=>{t.push({id:n.id,...n.data()})})),e(t)}))}),[]),n.length<=0?null:(0,d.jsx)(N,{className:"home-block",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(h.A,{children:"Feature"}),(0,d.jsx)("div",{className:"grid-layout",children:n.map((n=>(0,d.jsx)(w,{data:n},n.id)))})]})})};var E,O=t(8875);const S=l.Ay.div(E||(E=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 28px;\n  padding-bottom: 28px;\n  border-bottom: 1px solid #ccc;\n  &:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0;\n    border-bottom: 0;\n  }\n  .post {\n    &-image {\n      display: block;\n      flex-shrink: 0;\n      width: 180px;\n      height: 130px;\n      border-radius: 12px;\n    }\n    &-category {\n      margin-bottom: 8px;\n    }\n    &-info {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      margin-left: auto;\n      color: #6b6b6b;\n    }\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n    &-title {\n      margin-bottom: 8px;\n    }\n  }\n"]))),D=n=>{var e,t,i,a,o,r;let{data:s}=n;const l=null!==s&&void 0!==s&&null!==(e=s.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===s||void 0===s||null===(t=s.createdAt)||void 0===t?void 0:t.seconds)):new Date,c=new Date(l).toLocaleDateString("vi-VI");return s.id?(0,d.jsxs)(S,{children:[(0,d.jsx)(f.A,{url:s.image,alt:"",to:null===s||void 0===s?void 0:s.slug}),(0,d.jsxs)("div",{className:"post-content",children:[(0,d.jsx)(A.A,{type:"secondary",to:null===s||void 0===s||null===(i=s.category)||void 0===i?void 0:i.slug,children:null===(a=s.category)||void 0===a?void 0:a.name}),(0,d.jsx)(y.A,{to:null===s||void 0===s?void 0:s.slug,children:s.title}),(0,d.jsx)(b.A,{to:v()((null===s||void 0===s||null===(o=s.user)||void 0===o?void 0:o.username)||"",{lower:!0}),authorName:null===s||void 0===s||null===(r=s.user)||void 0===r?void 0:r.fullname,date:c})]})]}):null};var C;const U=l.Ay.div(C||(C=(0,a.A)(["\n  .post {\n    &-image {\n      display: block;\n      margin-bottom: 16px;\n      height: 433px;\n      border-radius: 16px;\n    }\n    &-category {\n      margin-bottom: 10px;\n    }\n    &-title {\n      margin-bottom: 10px;\n    }\n  }\n"]))),Y=n=>{var e,t,i,a,o,r;let{data:s}=n;const l=null!==s&&void 0!==s&&null!==(e=s.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===s||void 0===s||null===(t=s.createdAt)||void 0===t?void 0:t.seconds)):new Date,c=new Date(l).toLocaleDateString("vi-VI");return s.id?(0,d.jsxs)(U,{children:[(0,d.jsx)(f.A,{url:null===s||void 0===s?void 0:s.image,alt:"",to:null===s||void 0===s?void 0:s.slug}),(0,d.jsx)(A.A,{to:null===s||void 0===s||null===(i=s.category)||void 0===i?void 0:i.slug,children:null===s||void 0===s||null===(a=s.category)||void 0===a?void 0:a.name}),(0,d.jsx)(y.A,{to:null===s||void 0===s?void 0:s.slug,size:"big",className:"post-title",children:null===s||void 0===s?void 0:s.title}),(0,d.jsx)(b.A,{to:v()((null===s||void 0===s||null===(o=s.user)||void 0===o?void 0:o.username)||"",{lower:!0}),authorName:null===s||void 0===s||null===(r=s.user)||void 0===r?void 0:r.fullname,date:c})]}):null};var H,I=new Uint8Array(16);function L(){if(!H&&!(H="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return H(I)}const J=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const _=function(n){return"string"===typeof n&&J.test(n)};for(var R=[],T=0;T<256;++T)R.push((T+256).toString(16).substr(1));const V=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(R[n[e+0]]+R[n[e+1]]+R[n[e+2]]+R[n[e+3]]+"-"+R[n[e+4]]+R[n[e+5]]+"-"+R[n[e+6]]+R[n[e+7]]+"-"+R[n[e+8]]+R[n[e+9]]+"-"+R[n[e+10]]+R[n[e+11]]+R[n[e+12]]+R[n[e+13]]+R[n[e+14]]+R[n[e+15]]).toLowerCase();if(!_(t))throw TypeError("Stringified UUID is invalid");return t};const M=function(n,e,t){var i=(n=n||{}).random||(n.rng||L)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){t=t||0;for(var a=0;a<16;++a)e[t+a]=i[a];return e}return V(i)};var B;const G=l.Ay.div(B||(B=(0,a.A)(["\n  .layout {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    grid-gap: 40px;\n    margin-bottom: 64px;\n    align-items: start;\n  }\n  .sidebar {\n    padding: 28px 20px;\n    background-color: #f3edff;\n    border-radius: 16px;\n  }\n"]))),Z=()=>{const[n,e]=(0,s.useState)([]);if((0,s.useEffect)((()=>{const n=(0,g.rJ)(m.db,"posts"),t=(0,g.P)(n,(0,g._M)("status","==",1),(0,g._M)("hot","==",!1),(0,g.AB)(4));(0,g.aQ)(t,(n=>{const t=[];n.forEach((n=>{t.push({id:n.id,...n.data()})})),e(t)}))}),[]),n.length<=0)return null;const[t,...i]=n;return(0,d.jsx)(G,{className:"home-block",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(h.A,{children:"Newest update"}),(0,d.jsxs)("div",{className:"layout",children:[(0,d.jsx)(Y,{data:t}),(0,d.jsx)("div",{className:"sidebar",children:i.length>0&&i.map((n=>(0,d.jsx)(D,{data:n},M())))})]}),(0,d.jsxs)("div",{className:"grid-layout grid-layout--primary",children:[(0,d.jsx)(O.A,{}),(0,d.jsx)(O.A,{}),(0,d.jsx)(O.A,{}),(0,d.jsx)(O.A,{})]})]})})};var P;const $=l.Ay.div(P||(P=(0,a.A)(["\n  padding-bottom: 100px;\n"]))),q=()=>{const[n,e]=(0,s.useState)([]);return(0,s.useEffect)((()=>{const n=(0,g.rJ)(m.db,"posts"),t=(0,g.P)(n,(0,g._M)("status","==",1),(0,g._M)("hot","==",!0),(0,g.AB)(4));(0,g.aQ)(t,(n=>{const t=[];n.forEach((n=>{t.push({id:n.id,...n.data()})})),e(t)}))}),[]),n.length<=0?null:(0,d.jsx)($,{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"post-related",children:[(0,d.jsx)(h.A,{children:"Related Blog"}),(0,d.jsx)("div",{className:"grid-layout grid-layout--primary",children:n.map((n=>(0,d.jsx)(O.A,{data:n},n.id)))})]})})})};var W;const F=l.Ay.div(W||(W=(0,a.A)([""]))),K=()=>(0,d.jsx)(F,{children:(0,d.jsxs)(o.A,{children:[(0,d.jsx)(u,{}),(0,d.jsx)(z,{}),(0,d.jsx)(Z,{}),(0,d.jsx)(q,{})]})})},948:function(n){var e;e=function(){var n=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e62":"S","\u1e63":"s","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'),e=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function t(t,i){if("string"!==typeof t)throw new Error("slugify: string argument expected");var a=e[(i="string"===typeof i?{replacement:i}:i||{}).locale]||{},o=void 0===i.replacement?"-":i.replacement,r=void 0===i.trim||i.trim,s=t.normalize().split("").reduce((function(e,t){var r=a[t];return void 0===r&&(r=n[t]),void 0===r&&(r=t),r===o&&(r=" "),e+r.replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return i.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),r&&(s=s.trim()),s=s.replace(/\s+/g,o),i.lower&&(s=s.toLowerCase()),s}return t.extend=function(e){Object.assign(n,e)},t},n.exports=e(),n.exports.default=e()}}]);
//# sourceMappingURL=866.6fbf878b.chunk.js.map