"use strict";(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[699],{3575:(e,n,r)=>{r.d(n,{ob:()=>s,ZP:()=>i,gS:()=>o});r(5043);var t=r(579);const s=e=>{let{onClick:n=(()=>{})}=e;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer",onClick:n,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})},i=e=>{let{onClick:n=(()=>{})}=e;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer",onClick:n,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})})},o=e=>{let{onClick:n=(()=>{})}=e;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer",onClick:n,children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})}},8150:(e,n,r)=>{r.d(n,{$:()=>p});var t,s=r(7528),i=(r(5043),r(4574)),o=r(579);const a=i.Ay.div(t||(t=(0,s.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(e=>e.size),(e=>e.size),(e=>e.borderSize),(e=>e.borderSize),(e=>e.borderSize)),d=e=>{let{size:n="40px",borderSize:r="5px"}=e;return(0,o.jsx)(a,{size:n,borderSize:r})};var c,l,h,x,g=r(5475);const u=i.Ay.button(c||(c=(0,s.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(e=>e.height||"66px"),(e=>"secondary"===e.kind&&(0,i.AH)(l||(l=(0,s.A)(["\n      color: ",";\n      background-color: white;\n    "])),(e=>e.theme.primary))),(e=>"primary"===e.kind&&(0,i.AH)(h||(h=(0,s.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(e=>e.theme.primary),(e=>e.theme.secondary))),(e=>"ghost"===e.kind&&(0,i.AH)(x||(x=(0,s.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(e=>e.theme.primary)))),p=e=>{let{type:n="button ",onClick:r=(()=>{}),children:t,kind:s="primary",...i}=e;const{isLoading:a,to:c}=i,l=a?(0,o.jsx)(d,{}):t;return""!==c&&"string"===typeof c?(0,o.jsx)(g.k2,{to:c,className:"inline-block",children:(0,o.jsx)(u,{type:n,kind:s,onClick:r,...i,children:l})}):(0,o.jsx)(u,{type:n,kind:s,onClick:r,...i,children:l})}},253:(e,n,r)=>{r.d(n,{J:()=>d,$:()=>h});var t,s=r(7528),i=(r(5043),r(4574)),o=r(579);const a=i.Ay.label(t||(t=(0,s.A)(["\n  color: ",";\n  font-weight: 600;\n  cursor: pointer;\n"])),(e=>e.theme.grayDark)),d=e=>{let{htmlFor:n="",children:r,...t}=e;return(0,o.jsx)(a,{htmlFor:n,...t,children:r})};var c;const l=i.Ay.span(c||(c=(0,s.A)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),h=e=>{let{children:n,type:r="default"}=e,t="text-gray-500 bg-gray-100";switch(r){case"success":t="text-green-500 bg-green-100";break;case"warning":t="text-orange-500 bg-orange-100";break;case"danger":t="text-red-500 bg-red-100"}return(0,o.jsx)(l,{className:t,children:n})}},106:(e,n,r)=>{r.r(n),r.d(n,{default:()=>d});var t,s=r(7528),i=(r(5043),r(4574)),o=r(579);const a=i.Ay.div(t||(t=(0,s.A)(["\n  overflow-x: auto;\n  background-color: white;\n  border-radius: 10px;\n  table {\n    width: 100%;\n  }\n  thead {\n    background-color: #f3f3f3;\n  }\n  th,\n  td {\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n  th {\n    padding: 20px 30px;\n    font-weight: 600;\n    text-align: left;\n  }\n  td {\n    padding: 15px 30px;\n  }\n  tbody {\n  }\n"]))),d=e=>{let{children:n}=e;return(0,o.jsx)(a,{children:(0,o.jsx)("table",{children:n})})}},9718:(e,n,r)=>{r.d(n,{X:()=>t});const{default:t}=r(106)},9699:(e,n,r)=>{r.r(n),r.d(n,{default:()=>b});var t=r(3575),s=r(8150),i=r(253),o=r(9718),a=r(5883),d=r(6032),c=r(9810),l=r(5043),h=r(6543),x=r(64),g=r.n(x),u=r(3216),p=r(3536),m=r(579);const b=()=>{const[e,n]=(0,l.useState)([]),r=(0,u.Zp)(),[x,b]=(0,l.useState)(""),[j,y]=(0,l.useState)(),[k,f]=(0,l.useState)(0);(0,l.useEffect)((()=>{!async function(){const e=(0,d.rJ)(a.db,"categories"),r=x?(0,d.P)(e,(0,d._M)("name",">=",x),(0,d._M)("name","<=",x+"utf8")):(0,d.P)(e,(0,d.AB)(10)),t=await(0,d.GG)(r),s=t.docs[t.docs.length-1];(0,d.aQ)(e,(e=>{f(e.size)})),(0,d.aQ)(r,(e=>{let r=[];e.forEach((e=>{r.push({id:e.id,...e.data()})})),n(r)})),y(s)}()}),[x]);const w=(0,p.debounce)((e=>{b(e.target.value)}),500);return(0,m.jsxs)("div",{children:[(0,m.jsx)(c.A,{title:"Categories",desc:"Manage your category",children:(0,m.jsx)(s.$,{kind:"ghost",height:"60px",to:"/manage/add-category",children:"Create category"})}),(0,m.jsx)("div",{className:"mb-10 flex justify-end",children:(0,m.jsx)("input",{type:"text",placeholder:"Search category ... ",className:"py-4 px-5 border border-gray-400 rounded-lg outline-none",onChange:w})}),(0,m.jsxs)(o.X,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Id"}),(0,m.jsx)("th",{children:"Name"}),(0,m.jsx)("th",{children:"Slug"}),(0,m.jsx)("th",{children:"Status"}),(0,m.jsx)("th",{children:"Actions"})]})}),(0,m.jsx)("tbody",{children:e.length>0&&e.map((e=>(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{title:e.id,children:e.id}),(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:(0,m.jsx)("span",{className:"italic text-gray-400 ",children:e.slug})}),(0,m.jsxs)("td",{children:[e.status===h.$g.APPROVED&&(0,m.jsx)(i.$,{type:"success",children:"Approved"}),e.status===h.$g.UNAPPROVED&&(0,m.jsx)(i.$,{type:"warning",children:"Unapproved"})]}),(0,m.jsx)("td",{children:(0,m.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,m.jsx)(t.gS,{}),(0,m.jsx)(t.ZP,{onClick:()=>r("/manage/update-category?id=".concat(e.id))}),(0,m.jsx)(t.ob,{onClick:()=>(async e=>{const n=(0,d.H9)(a.db,"categories",e);g().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#1DC071",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((async e=>{e.isConfirmed&&(await(0,d.kd)(n),g().fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success"}))}))})(e.id)})]})})]},e.id)))})]}),k>e.length&&(0,m.jsxs)("div",{className:"mt-10",children:[(0,m.jsx)(s.$,{onClick:async()=>{const r=(0,d.P)((0,d.rJ)(a.db,"categories"),(0,d.HM)(j),(0,d.AB)(10));(0,d.aQ)(r,(r=>{let t=[];r.forEach((e=>{t.push({id:e.id,...e.data()})})),n([...e,...t])}));const t=await(0,d.GG)(r),s=t.docs[t.docs.length-1];y(s)},className:"mx-auto",children:"Load more"}),k]})]})}},9810:(e,n,r)=>{r.d(n,{A:()=>s});r(5043);var t=r(579);const s=e=>{let{title:n="",desc:r="",children:s,categoryId:i=""}=e;return(0,t.jsxs)("div",{className:"mb-10 flex items-start justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"dashboard-heading",children:n}),(0,t.jsxs)("p",{className:"dashboard-short-desc",children:[r,(0,t.jsx)("span",{className:"text-[#1DC071]",children:i})]})]}),s]})}}}]);
//# sourceMappingURL=699.e223982c.chunk.js.map