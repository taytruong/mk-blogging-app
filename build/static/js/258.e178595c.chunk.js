"use strict";(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[258,3],{8150:(n,e,i)=>{i.d(e,{$:()=>x});var o,t=i(7528),r=(i(5043),i(4574)),a=i(579);const s=r.Ay.div(o||(o=(0,t.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(n=>n.size),(n=>n.size),(n=>n.borderSize),(n=>n.borderSize),(n=>n.borderSize)),l=n=>{let{size:e="40px",borderSize:i="5px"}=n;return(0,a.jsx)(s,{size:e,borderSize:i})};var d,c,h,m,p=i(5475);const g=r.Ay.button(d||(d=(0,t.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(n=>n.height||"66px"),(n=>"secondary"===n.kind&&(0,r.AH)(c||(c=(0,t.A)(["\n      color: ",";\n      background-color: white;\n    "])),(n=>n.theme.primary))),(n=>"primary"===n.kind&&(0,r.AH)(h||(h=(0,t.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(n=>n.theme.primary),(n=>n.theme.secondary))),(n=>"ghost"===n.kind&&(0,r.AH)(m||(m=(0,t.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(n=>n.theme.primary)))),x=n=>{let{type:e="button ",onClick:i=(()=>{}),children:o,kind:t="primary",...r}=n;const{isLoading:s,to:d}=r,c=s?(0,a.jsx)(l,{}):o;return""!==d&&"string"===typeof d?(0,a.jsx)(p.k2,{to:d,className:"inline-block",children:(0,a.jsx)(g,{type:e,kind:t,onClick:i,...r,children:c})}):(0,a.jsx)(g,{type:e,kind:t,onClick:i,...r,children:c})}},1258:(n,e,i)=>{i.r(e),i.d(e,{default:()=>f});var o,t=i(7528),r=(i(5043),i(3216)),a=i(4574),s=i(8150),l=i(1625),d=i(5475),c=i(579);const h=a.Ay.div(o||(o=(0,t.A)(["\n  background-color: white;\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  .logo {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    font-size: 18px;\n    font-weight: 600;\n    img {\n      max-width: 40px;\n    }\n  }\n  .header-avatar {\n    width: 52px;\n    height: 52px;\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 100rem;\n    }\n  }\n  .header-right {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n"]))),m=()=>{const{userInfo:n}=(0,l.A)();return console.log("\ud83d\ude80 ~ DashboardHeader ~ userInfo:",n),(0,c.jsxs)(h,{children:[(0,c.jsxs)(d.k2,{to:"/",className:"logo",children:[(0,c.jsx)("img",{srcSet:"./logo.png 2x",alt:"monkey-blogging",className:"logo"}),(0,c.jsx)("span",{className:"hidden lg:inline-block",children:"MK Blogging"})]}),(0,c.jsxs)("div",{className:"header-right",children:[(0,c.jsx)(s.$,{to:"/manage/add-post",className:"header-button",height:"52px",children:"Write new post"}),(0,c.jsx)(d.N_,{to:"/profile/?id=".concat(null===n||void 0===n?void 0:n.id),className:"header-avatar",children:(0,c.jsx)("img",{src:null===n||void 0===n?void 0:n.avatar,alt:""})})]})]})};var p,g=i(5883),x=i(9619);const u=a.Ay.div(p||(p=(0,t.A)(["\n  width: 300px;\n  background: #ffffff;\n  box-shadow: 10px 10px 20px rgb(67 50 50 / 15%);\n  border-radius: 12px;\n  .menu-item {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 14px 20px;\n    font-weight: 500;\n    color: ",";\n    margin-bottom: 20px;\n    cursor: pointer;\n    &.active,\n    &:hover {\n      background: #f1fbf7;\n      color: ",";\n    }\n  }\n  @media screen and (max-width: 1023.98px) {\n    display: none;\n  }\n"])),(n=>n.theme.gray80),(n=>n.theme.primary)),b=[{title:"Dashboard",url:"/dashboard",icon:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})})},{title:"Post",url:"/manage/post",icon:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})},{title:"Category",url:"/manage/category",icon:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})})},{title:"User",url:"/manage/user",icon:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})})},{title:"Logout",url:"/",icon:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),onClick:()=>(0,x.CI)(g.j)}],k=()=>(0,c.jsx)(u,{className:"sidebar",children:b.map((n=>n.onClick?(0,c.jsxs)("div",{className:"menu-item",onClick:n.onClick,children:[(0,c.jsx)("span",{className:"menu-icon",children:n.icon}),(0,c.jsx)("span",{className:"menu-text",children:n.title})]},n.title):(0,c.jsxs)(d.k2,{to:n.url,className:"menu-item",children:[(0,c.jsx)("span",{className:"menu-icon",children:n.icon}),(0,c.jsx)("span",{className:"menu-text",children:n.title})]},n.title)))});var w,v=i(9003);const j=a.Ay.div(w||(w=(0,t.A)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  .dashboard {\n    &-heading {\n      font-weight: bold;\n      font-size: 25px;\n      margin-bottom: 5px;\n      color: ",";\n    }\n    &-short-desc {\n      font-size: 14px;\n      color: ",";\n    }\n    &-main {\n      display: grid;\n      grid-template-columns: 300px minmax(0, 1fr);\n      padding: 40px 20px;\n      gap: 0 40px;\n      align-items: start;\n    }\n    @media screen and (max-width: 1023.98px) {\n      &-heading {\n        font-size: 20px;\n      }\n      &-main {\n        grid-template-columns: 100%;\n        padding: 20px;\n      }\n    }\n  }\n"])),(n=>n.theme.black),(n=>n.theme.gray80)),f=n=>{let{children:e}=n;const{userInfo:i}=(0,l.A)();return i?(0,c.jsxs)(j,{children:[(0,c.jsx)(m,{}),(0,c.jsxs)("div",{className:"dashboard-main",children:[(0,c.jsx)(k,{}),(0,c.jsx)("div",{className:"dashboard-children",children:(0,c.jsx)(r.sv,{})})]})]}):(0,c.jsx)(v.default,{})}},9003:(n,e,i)=>{i.r(e),i.d(e,{default:()=>d});var o,t=i(7528),r=(i(5043),i(3216)),a=i(4574),s=i(579);const l=a.Ay.div(o||(o=(0,t.A)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n  color: black;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: linear-gradient(\n      to right top,\n      ",",\n      ","\n    );\n    border-radius: 8px;\n    font-weight: 500;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(n=>n.theme.black),(n=>n.theme.primary),(n=>n.theme.secondary)),d=()=>{const n=(0,r.Zp)();return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"page-content",children:[(0,s.jsx)("img",{src:"./404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)("button",{onClick:()=>n("/"),className:"back",children:"Go back"})]})})}}}]);
//# sourceMappingURL=258.e178595c.chunk.js.map