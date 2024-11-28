"use strict";(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[233,3],{8150:(n,e,t)=>{t.d(e,{$:()=>x});var i,a=t(7528),o=(t(5043),t(4574)),r=t(579);const s=o.Ay.div(i||(i=(0,a.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(n=>n.size),(n=>n.size),(n=>n.borderSize),(n=>n.borderSize),(n=>n.borderSize)),l=n=>{let{size:e="40px",borderSize:t="5px"}=n;return(0,r.jsx)(s,{size:e,borderSize:t})};var d,c,h,p,m=t(5475);const g=o.Ay.button(d||(d=(0,a.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(n=>n.height||"66px"),(n=>"secondary"===n.kind&&(0,o.AH)(c||(c=(0,a.A)(["\n      color: ",";\n      background-color: white;\n    "])),(n=>n.theme.primary))),(n=>"primary"===n.kind&&(0,o.AH)(h||(h=(0,a.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(n=>n.theme.primary),(n=>n.theme.secondary))),(n=>"ghost"===n.kind&&(0,o.AH)(p||(p=(0,a.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(n=>n.theme.primary)))),x=n=>{let{type:e="button ",onClick:t=(()=>{}),children:i,kind:a="primary",...o}=n;const{isLoading:s,to:d}=o,c=s?(0,r.jsx)(l,{}):i;return""!==d&&"string"===typeof d?(0,r.jsx)(m.k2,{to:d,className:"inline-block",children:(0,r.jsx)(g,{type:e,kind:a,onClick:t,...o,children:c})}):(0,r.jsx)(g,{type:e,kind:a,onClick:t,...o,children:c})}},2102:(n,e,t)=>{t.d(e,{A:()=>l});var i,a=t(7528),o=(t(5043),t(4574)),r=t(579);const s=o.Ay.h2(i||(i=(0,a.A)(["\n  color: ",';\n  font-size: 28px;\n  position: relative;\n  margin-bottom: 30px;\n  font-weight: 600;\n\n  // line accent\n  &:before {\n    content: "";\n    width: 50px;\n    height: 4px;\n    background-color: ',";\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(0, -150%);\n  }\n"])),(n=>n.theme.tertiary),(n=>n.theme.accent)),l=n=>{let{className:e="",children:t}=n;return(0,r.jsx)(s,{className:e,children:t})}},2771:(n,e,t)=>{t.d(e,{A:()=>m});t(5043);var i,a=t(7528),o=t(8150),r=t(1625),s=t(5475),l=t(4574),d=t(579);const c=[{url:"/",title:"Home"}],h=l.Ay.header(i||(i=(0,a.A)(["\n  padding: 20px 0;\n  .header-main {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .header-auth {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .logo {\n    display: block;\n    max-width: 50px;\n  }\n  .menu {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-left: 40px;\n    list-style: none;\n    font-weight: 500;\n  }\n  .search {\n    margin-left: auto;\n    padding: 15px 25px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 320px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-right: 20px;\n  }\n  .search-input {\n    flex: 1;\n    padding-right: 40px;\n    font-weight: 500;\n  }\n  .search-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 25px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .logo {\n      max-width: 30px;\n    }\n    .menu,\n    .search,\n    .header-button,\n    .header-auth {\n      display: none;\n    }\n  }\n"]))),p=()=>{const{userInfo:n}=(0,r.A)();return(0,d.jsx)(h,{children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"header-main",children:[(0,d.jsx)(s.k2,{to:"/",children:(0,d.jsx)("img",{srcSet:"./logo.png 2x",alt:"monkey-blogging",className:"logo"})}),(0,d.jsx)("ul",{className:"menu",children:c.map((n=>(0,d.jsx)("li",{className:"menu-item",children:(0,d.jsx)(s.k2,{to:n.url,className:"menu-link",children:n.title})},n.title)))}),n?(0,d.jsx)("div",{className:"header-auth",children:(0,d.jsx)(o.$,{type:"button",height:"56px",className:"header-button",to:"/dashboard",children:"Dashboard"})}):(0,d.jsx)(o.$,{type:"button",height:"56px",className:"header-button",to:"/sign-in",children:"Login"})]})})})},m=n=>{let{children:e}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),e]})}},3724:(n,e,t)=>{t.d(e,{A:()=>h});var i,a,o,r=t(7528),s=(t(5043),t(5475)),l=t(4574),d=t(579);const c=l.Ay.div(i||(i=(0,r.A)(["\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f3f3f3;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>n.theme.gray6B),(n=>"primary"===n.type&&(0,l.AH)(a||(a=(0,r.A)(["\n      background-color: ",";\n    "])),(n=>n.theme.grayF3))),(n=>"secondary"===n.type&&(0,l.AH)(o||(o=(0,r.A)(["\n      background-color: white;\n    "]))))),h=n=>{let{children:e,type:t="primary",className:i="",to:a=""}=n;return(0,d.jsx)(c,{type:t,className:"post-category ".concat(i),children:(0,d.jsx)(s.N_,{to:"/category/".concat(a),children:e})})}},9631:(n,e,t)=>{t.d(e,{A:()=>d});var i,a=t(7528),o=(t(5043),t(5475)),r=t(4574),s=t(579);const l=r.Ay.div(i||(i=(0,a.A)(["\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: inherit;\n  }\n"]))),d=n=>{let{className:e="",url:t="",alt:i="",to:a=""}=n;return a?(0,s.jsx)(o.N_,{to:"/".concat(a),style:{display:"block"},children:(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}):(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}},8875:(n,e,t)=>{t.d(e,{A:()=>g});var i,a=t(7528),o=(t(5043),t(4574)),r=t(3724),s=t(232),l=t(3881),d=t(9631),c=t(948),h=t.n(c),p=t(579);const m=o.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  .post {\n    &-image {\n      height: 202px;\n      margin-bottom: 20px;\n      display: block;\n      width: 100%;\n      border-radius: 16px;\n    }\n    &-category {\n      display: inline-block;\n      padding: 8px;\n      border-radius: 8px;\n      color: #6b6b6b;\n      font-size: 14px;\n      font-weight: 600;\n      background-color: #f3edff;\n      margin-bottom: 16px;\n    }\n    &-info {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      color: #6b6b6b;\n      margin-top: auto;\n    }\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n    &-title {\n      margin-bottom: 12px;\n    }\n  }\n"]))),g=n=>{var e,t,i,a,o,c;let{data:g}=n;if(!g)return null;const x=null!==g&&void 0!==g&&null!==(e=g.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===g||void 0===g||null===(t=g.createdAt)||void 0===t?void 0:t.seconds)):new Date,u=new Date(x).toLocaleDateString("vi-VI");return(0,p.jsxs)(m,{children:[(0,p.jsx)(d.A,{url:g.image,alt:"",to:g.slug}),(0,p.jsx)(r.A,{to:null===(i=g.category)||void 0===i?void 0:i.slug,children:null===(a=g.category)||void 0===a?void 0:a.name}),(0,p.jsx)(s.A,{to:g.slug,children:g.title}),(0,p.jsx)(l.A,{to:h()((null===(o=g.user)||void 0===o?void 0:o.username)||"",{lower:!0}),authorName:null===(c=g.user)||void 0===c?void 0:c.fullname,date:u})]})}},3881:(n,e,t)=>{t.d(e,{A:()=>d});var i,a=t(7528),o=(t(5043),t(5475)),r=t(4574),s=t(579);const l=r.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: inherit;\n  .post {\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n  }\n"]))),d=n=>{let{date:e="Mar 23",authorName:t="Andiez Le",className:i="",to:a=""}=n;return(0,s.jsxs)(l,{className:i,children:[(0,s.jsx)("span",{className:"post-time",children:e}),(0,s.jsx)("span",{className:"post-dot"}),(0,s.jsx)(o.N_,{to:"/author/".concat(a),children:(0,s.jsx)("span",{className:"post-author",children:t})})]})}},232:(n,e,t)=>{t.d(e,{A:()=>h});var i,a,o,r=t(7528),s=(t(5043),t(5475)),l=t(4574),d=t(579);const c=l.Ay.h3(i||(i=(0,r.A)(["\n  font-weight: 600;\n  line-height: 1.5;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>"normal"===n.size&&(0,l.AH)(a||(a=(0,r.A)(["\n      font-size: 18px;\n    "])))),(n=>"big"===n.size&&(0,l.AH)(o||(o=(0,r.A)(["\n      font-size: 22px;\n    "]))))),h=n=>{let{children:e,className:t="",size:i="normal",to:a=""}=n;return(0,d.jsx)(c,{size:i,className:"post-title ".concat(t),children:(0,d.jsx)(s.N_,{to:"/".concat(a),children:e})})}},9003:(n,e,t)=>{t.r(e),t.d(e,{default:()=>d});var i,a=t(7528),o=(t(5043),t(3216)),r=t(4574),s=t(579);const l=r.Ay.div(i||(i=(0,a.A)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n  color: black;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: linear-gradient(\n      to right top,\n      ",",\n      ","\n    );\n    border-radius: 8px;\n    font-weight: 500;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(n=>n.theme.black),(n=>n.theme.primary),(n=>n.theme.secondary)),d=()=>{const n=(0,o.Zp)();return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"page-content",children:[(0,s.jsx)("img",{src:"./404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)("button",{onClick:()=>n("/"),className:"back",children:"Go back"})]})})}},1233:(n,e,t)=>{t.r(e),t.d(e,{default:()=>w});var i=t(7528),a=t(2771),o=t(3724),r=t(9631),s=t(3881),l=t(5043),d=t(3216),c=t(4574),h=t(9003),p=t(5883),m=t(6032),g=t(229),x=t(579);const u=n=>{let{userId:e=""}=n;const[t,i]=(0,l.useState)({});return(0,l.useEffect)((()=>{!async function(){const n=(0,m.H9)(p.db,"users",e),t=await(0,m.x7)(n);t.data()&&i(t.data())}()}),[e]),e&&t.username?(0,x.jsxs)("div",{className:"author",children:[(0,x.jsx)("div",{className:"author-image",children:(0,x.jsx)("img",{src:null===t||void 0===t?void 0:t.avatar,alt:""})}),(0,x.jsxs)("div",{className:"author-content",children:[(0,x.jsx)("h3",{className:"author-name",children:null===t||void 0===t?void 0:t.fullname}),(0,x.jsx)("p",{className:"author-desc",children:null===t||void 0===t?void 0:t.description})]})]}):null};var b=t(2102),f=t(8875);const y=n=>{let{categoryId:e=""}=n;const[t,i]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const n=(0,m.P)((0,m.rJ)(p.db,"posts"),(0,m._M)("category.name","==",e));(0,m.aQ)(n,(n=>{const e=[];n.forEach((n=>{e.push({id:n.id,...n.data()})})),i(e)}))}),[e]),!e||t.length.length<=0?null:(0,x.jsxs)("div",{className:"post-related",children:[(0,x.jsx)(b.A,{children:"Related Blog"}),(0,x.jsx)("div",{className:"grid-layout grid-layout--primary",children:t.map((n=>(0,x.jsx)(f.A,{data:n},n.id)))})]})};var v,j=t(948),A=t.n(j);const k=c.Ay.div(v||(v=(0,i.A)(["\n  padding-bottom: 100px;\n  .post {\n    &-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 40px;\n      margin: 40px 0;\n    }\n    &-feature {\n      width: 100%;\n      max-width: 640px;\n      height: 466px;\n      border-radius: 20px;\n    }\n    &-heading {\n      font-weight: bold;\n      font-size: 36px;\n      margin-bottom: 16px;\n    }\n    &-info {\n      flex: 1;\n    }\n    &-content {\n      max-width: 700px;\n      margin: 80px auto;\n    }\n  }\n  .author {\n    margin-top: 40px;\n    margin-bottom: 80px;\n    display: flex;\n    border-radius: 20px;\n    background-color: ",";\n    &-image {\n      width: 200px;\n      height: 200px;\n      flex-shrink: 0;\n      border-radius: inherit;\n    }\n    &-image img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: inherit;\n    }\n    &-content {\n      flex: 1;\n      padding: 20px;\n    }\n    &-name {\n      font-weight: bold;\n      margin-bottom: 10px;\n      font-size: 20px;\n    }\n    &-desc {\n      font-size: 14px;\n      line-height: 2;\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    padding-bottom: 40px;\n    .post {\n      &-header {\n        flex-direction: column;\n      }\n      &-feature {\n        height: auto;\n      }\n      &-heading {\n        font-size: 26px;\n      }\n      &-content {\n        margin: 40px 0;\n      }\n    }\n    .author {\n      flex-direction: column;\n      &-image {\n        width: 100%;\n        height: auto;\n      }\n    }\n  }\n"])),(n=>n.theme.grayF3)),w=()=>{var n,e,t,i,c;const{slug:b}=(0,d.g)(),[f,v]=(0,l.useState)({}),j=null!==f&&void 0!==f&&null!==(n=f.createdAt)&&void 0!==n&&n.seconds?new Date(1e3*(null===f||void 0===f||null===(e=f.createdAt)||void 0===e?void 0:e.seconds)):new Date,w=new Date(j).toLocaleDateString("vi-VI");if((0,l.useEffect)((()=>{!async function(){if(!b)return;const n=(0,m.P)((0,m.rJ)(p.db,"posts"),(0,m._M)("slug","==",b));(0,m.aQ)(n,(n=>{n.forEach((n=>{n.data()&&v(n.data())}))}))}()}),[b]),(0,l.useEffect)((()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})}),[b]),!b)return(0,x.jsx)(h.default,{});if(!f.title)return null;const{user:N}=f;return(0,x.jsx)(k,{children:(0,x.jsx)(a.A,{children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:"post-header",children:[(0,x.jsx)(r.A,{url:f.image,className:"post-feature"}),(0,x.jsxs)("div",{className:"post-info",children:[(0,x.jsx)(o.A,{className:"mb-6",to:null===(t=f.category)||void 0===t?void 0:t.slug,children:null===(i=f.category)||void 0===i?void 0:i.name}),(0,x.jsx)("h1",{className:"post-heading",children:f.title}),(0,x.jsx)(s.A,{to:A()((null===N||void 0===N?void 0:N.username)||"",{lower:!0}),authorName:null===N||void 0===N?void 0:N.fullname,date:w})]})]}),(0,x.jsxs)("div",{className:"post-content",children:[(0,x.jsx)("div",{className:"entry-content",children:(0,g.Ay)(f.content||"")}),(0,x.jsx)(u,{userId:N.id})]}),(0,x.jsx)(y,{categoryId:null===f||void 0===f||null===(c=f.category)||void 0===c?void 0:c.name})]})})})}}}]);
//# sourceMappingURL=233.417afbef.chunk.js.map