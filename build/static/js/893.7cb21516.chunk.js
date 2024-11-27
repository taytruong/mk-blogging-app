"use strict";(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[893],{8150:(e,n,r)=>{r.d(n,{$:()=>x});var s,t=r(7528),o=(r(5043),r(4574)),a=r(579);const i=o.Ay.div(s||(s=(0,t.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(e=>e.size),(e=>e.size),(e=>e.borderSize),(e=>e.borderSize),(e=>e.borderSize)),l=e=>{let{size:n="40px",borderSize:r="5px"}=e;return(0,a.jsx)(i,{size:n,borderSize:r})};var d,c,h,p,m=r(5475);const u=o.Ay.button(d||(d=(0,t.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(e=>e.height||"66px"),(e=>"secondary"===e.kind&&(0,o.AH)(c||(c=(0,t.A)(["\n      color: ",";\n      background-color: white;\n    "])),(e=>e.theme.primary))),(e=>"primary"===e.kind&&(0,o.AH)(h||(h=(0,t.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(e=>e.theme.primary),(e=>e.theme.secondary))),(e=>"ghost"===e.kind&&(0,o.AH)(p||(p=(0,t.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(e=>e.theme.primary)))),x=e=>{let{type:n="button ",onClick:r=(()=>{}),children:s,kind:t="primary",...o}=e;const{isLoading:i,to:d}=o,c=i?(0,a.jsx)(l,{}):s;return""!==d&&"string"===typeof d?(0,a.jsx)(m.k2,{to:d,className:"inline-block",children:(0,a.jsx)(u,{type:n,kind:t,onClick:r,...o,children:c})}):(0,a.jsx)(u,{type:n,kind:t,onClick:r,...o,children:c})}},5858:(e,n,r)=>{r.d(n,{A:()=>l});var s,t=r(7528),o=(r(5043),r(4574)),a=r(579);const i=o.Ay.div(s||(s=(0,t.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 20px;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),l=e=>{let{children:n}=e;return(0,a.jsx)(i,{children:n})}},3389:(e,n,r)=>{r.d(n,{D:()=>s.A,y:()=>o});var s=r(5858),t=(r(5043),r(579));const o=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"flex flex-wrap gap-5",children:n})}},5823:(e,n,r)=>{r.d(n,{A:()=>t});r(5043);var s=r(579);const t=e=>{const{name:n,className:r="",progress:t=0,image:o="",handleDeleteImage:a=(()=>{}),...i}=e;return(0,s.jsxs)("label",{className:"cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg ".concat(r," relative overflow-hidden group"),children:[(0,s.jsx)("input",{type:"file",name:n,className:"hidden-input",onChange:()=>{},...i}),0!==t&&!o&&(0,s.jsx)("div",{className:"loading w-16 h-16 border-8 border-green-500 border-t-transparent animate-spin absolute z-10 rounded-full"}),!o&&0===t&&(0,s.jsxs)("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[(0,s.jsx)("img",{src:"/img-upload.png",alt:"upload-img",className:"max-w-[80px] mb-5"}),(0,s.jsx)("p",{className:"font-semibold",children:"Choose photo"})]}),o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:o,className:"w-full h-full object-cover",alt:""}),(0,s.jsx)("button",{type:"button",className:"w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer absolute z-10 text-red-500 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible",onClick:a,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})]}),!o&&(0,s.jsx)("div",{className:"absolute w-10 h-1 bg-green-400 bottom-0 left-0 transition-all image-upload-progress",style:{width:"".concat(Math.ceil(t),"%")}})]})}},4590:(e,n,r)=>{r.d(n,{A:()=>d});var s,t=r(7528),o=(r(5043),r(4858)),a=r(4574),i=r(579);const l=a.Ay.div(s||(s=(0,t.A)(["\n  position: relative;\n  width: 100%;\n  input {\n    width: 100%;\n    padding: ",";\n    padding: 20px;\n    background-color: ",";\n    border-radius: 8px;\n    font-weight: 500;\n    transition: all 0.2s linear;\n    border: 1px solid transparent;\n  }\n\n  input:focus {\n    background-color: white;\n    border-color: ",";\n  }\n\n  input::-webkit-input-placeholder {\n    color: #84878b;\n  }\n  input::-moz-input-placeholder {\n    color: #84878b;\n  }\n\n  .input-icon-eye {\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n"])),(e=>e.hasIcon?"16px 60px 16px 20px":"16px 20px"),(e=>e.theme.grayLight),(e=>e.theme.primary)),d=e=>{let{name:n="",type:r="text",children:s,control:t,...a}=e;const{field:d}=(0,o.as)({control:t,name:n,defaultValue:""});return(0,i.jsxs)(l,{hasIcon:!!s,children:[(0,i.jsx)("input",{id:n,type:r,...d,...a}),s?(0,i.jsx)("div",{className:"input-icon-eye",children:s}):null]})}},6116:(e,n,r)=>{r.d(n,{A:()=>l});var s=r(5043),t=r(4590),o=r(579);const a=e=>{let{className:n="",onClick:r=(()=>{})}=e;return(0,o.jsx)("span",{className:n,onClick:r,children:(0,o.jsxs)("svg",{width:"22",height:"14",viewBox:"0 0 22 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M14.5 1.62156C16.8312 2.50868 18.7928 4.24569 20.5245 6.37837C20.8098 6.72982 20.8099 7.23217 20.5245 7.58361C17.9889 10.7065 14.96 12.981 11 12.981C7.04003 12.981 4.01115 10.7065 1.4755 7.58361C1.19014 7.23216 1.19016 6.72981 1.47551 6.37837C3.69735 3.64197 6.29789 1.55697 9.5717 1.0828C9.75303 1.05654 9.93641 1.03522 10.1219 1.019L10.561 1",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M13.5 6.98096C13.5 8.36167 12.3807 9.48096 11 9.48096C9.61929 9.48096 8.5 8.36167 8.5 6.98096C8.5 5.60025 9.61929 4.48096 11 4.48096C12.3807 4.48096 13.5 5.60025 13.5 6.98096Z",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})})},i=e=>{let{className:n="",onClick:r=(()=>{})}=e;return(0,o.jsx)("span",{className:n,onClick:r,children:(0,o.jsxs)("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M13.5356 8.46454C13.7677 8.69669 13.9519 8.97229 14.0775 9.27561C14.2032 9.57892 14.2678 9.90401 14.2678 10.2323C14.2678 10.5606 14.2031 10.8857 14.0775 11.189C13.9518 11.4923 13.7677 11.7679 13.5355 12.0001C13.3034 12.2322 13.0278 12.4164 12.7245 12.542C12.4211 12.6676 12.0961 12.7323 11.7678 12.7323C11.4394 12.7323 11.1144 12.6676 10.811 12.5419C10.5077 12.4163 10.2321 12.2322 10 12",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M11 4C7.04003 4 4.01115 6.27449 1.4755 9.39738C1.19014 9.74883 1.19009 10.2511 1.47544 10.6025C2.18711 11.479 2.93763 12.2887 3.73669 13M6.74043 15.0348C8.03446 15.6495 9.44549 16 11 16C11.2884 16 11.5719 15.9879 11.8507 15.9643L12.2607 15.9122M15.7029 5.18844C17.5178 6.15443 19.0991 7.64187 20.5245 9.39741C20.8099 9.74885 20.8099 10.2512 20.5245 10.6026C19.1774 12.2617 17.6911 13.6813 16 14.6476",stroke:"#999999",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M19.1217 1.11547L1.9998 18.9996",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})},l=e=>{let{control:n}=e;const[r,l]=(0,s.useState)(!1);return n?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.A,{type:r?"text":"password",name:"password",placeholder:"Enter your password",control:n,children:r?(0,o.jsx)(a,{onClick:()=>l(!1)}):(0,o.jsx)(i,{onClick:()=>l(!0)})})}):null}},7462:(e,n,r)=>{r.d(n,{m:()=>t.A,p:()=>s.A});var s=r(4590),t=r(6116)},253:(e,n,r)=>{r.d(n,{J:()=>l,$:()=>h});var s,t=r(7528),o=(r(5043),r(4574)),a=r(579);const i=o.Ay.label(s||(s=(0,t.A)(["\n  color: ",";\n  font-weight: 600;\n  cursor: pointer;\n"])),(e=>e.theme.grayDark)),l=e=>{let{htmlFor:n="",children:r,...s}=e;return(0,a.jsx)(i,{htmlFor:n,...s,children:r})};var d;const c=o.Ay.span(d||(d=(0,t.A)(["\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),h=e=>{let{children:n,type:r="default"}=e,s="text-gray-500 bg-gray-100";switch(r){case"success":s="text-green-500 bg-green-100";break;case"warning":s="text-orange-500 bg-orange-100";break;case"danger":s="text-red-500 bg-red-100"}return(0,a.jsx)(c,{className:s,children:n})}},6004:(e,n,r)=>{r.d(n,{A:()=>o});var s=r(8147),t=r(5043);function o(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const[a,i]=(0,t.useState)(0),[l,d]=(0,t.useState)("");if(!e||!n)return;return{image:l,setImage:d,handleResetUpload:()=>{d(""),i(0)},progress:a,handleSelectImage:n=>{const r=n.target.files[0];r&&(e("image_name",r.name),(e=>{const n=(0,s.c7)(),r=(0,s.KR)(n,"images/"+e.name),t=(0,s.bp)(r,e);t.on("state_changed",(e=>{const n=e.bytesTransferred/e.totalBytes*100;switch(i(n),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break;default:console.log("Nothing at all")}}),(e=>{console.log("Error")}),(()=>{(0,s.qk)(t.snapshot.ref).then((e=>{console.log("File available at",e),d(e)}))}))})(r))},handleDeleteImage:()=>{const e=(0,s.c7)(),t=(0,s.KR)(e,"images/"+(r||n("image_name")));(0,s.XR)(t).then((()=>{console.log("Remove image succesfully"),d(""),i(0),o&&o()})).catch((e=>{console.log("Can not delete image")}))}}}},9810:(e,n,r)=>{r.d(n,{A:()=>t});r(5043);var s=r(579);const t=e=>{let{title:n="",desc:r="",children:t,categoryId:o=""}=e;return(0,s.jsxs)("div",{className:"mb-10 flex items-start justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"dashboard-heading",children:n}),(0,s.jsxs)("p",{className:"dashboard-short-desc",children:[r,(0,s.jsx)("span",{className:"text-[#1DC071]",children:o})]})]}),t]})}},5893:(e,n,r)=>{r.r(n),r.d(n,{default:()=>b});var s=r(8150),t=r(3389),o=r(5823),a=r(7462),i=r(253),l=r(5883),d=r(6032),c=r(6004),h=r(9810),p=r(5043),m=r(4858),u=r(5475),x=r(9628),g=r(579);const b=()=>{const{control:e,handleSubmit:n,reset:r,setValue:b,getValues:j,formState:{isValid:f,isSubmitting:y}}=(0,m.mN)({mode:"onChange"}),k=j("avatar"),w=/%2F(\S+)\?/gm.exec(k),v=(null===w||void 0===w?void 0:w.length)>0?w[1]:"",[C]=(0,u.ok)(),N=C.get("id"),{image:A,setImage:L,progress:D,handleSelectImage:S,handleDeleteImage:z}=(0,c.A)(b,j,v,(async function(){const e=(0,d.H9)(l.db,"users",N);await(0,d.mZ)(e,{avatar:""})}));return(0,p.useEffect)((()=>{L(k)}),[k,L]),(0,p.useEffect)((()=>{!async function(){if(!N)return;const e=(0,d.H9)(l.db,"users",N),n=await(0,d.x7)(e);r(n&&n.data())}()}),[N,r]),N?(0,g.jsxs)("div",{children:[(0,g.jsx)(h.A,{title:"Account information",desc:"Update your account information"}),(0,g.jsxs)("form",{onSubmit:n((async e=>{if(f)try{const n=(0,d.H9)(l.db,"users",N);await(0,d.mZ)(n,{...e,avatar:A}),x.oR.success("Update profile information successfully!")}catch(n){x.oR.error("Update profile failed!")}})),children:[(0,g.jsx)("div",{className:"w-[200px] h-[200px] rounded-full mx-auto mb-10",children:(0,g.jsx)(o.A,{className:"!rounded-full h-full",onChange:S,handleDeleteImage:z,progress:D,image:A})}),(0,g.jsxs)("div",{className:"form-layout",children:[(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Fullname"}),(0,g.jsx)(a.p,{control:e,name:"fullname",placeholder:"Enter your fullname"})]}),(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Username"}),(0,g.jsx)(a.p,{control:e,name:"username",placeholder:"Enter your username"})]})]}),(0,g.jsxs)("div",{className:"form-layout",children:[(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Date of Birth"}),(0,g.jsx)(a.p,{control:e,name:"birthday",placeholder:"dd/mm/yyyy"})]}),(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Mobile Number"}),(0,g.jsx)(a.p,{control:e,name:"phone",placeholder:"Enter your phone number"})]})]}),(0,g.jsxs)("div",{className:"form-layout",children:[(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Email"}),(0,g.jsx)(a.p,{control:e,name:"email",type:"email",placeholder:"Enter your email address"})]}),(0,g.jsx)(t.D,{})]}),(0,g.jsxs)("div",{className:"form-layout",children:[(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"New Password"}),(0,g.jsx)(a.m,{name:"password",placeholder:"Enter your password",control:e,type:"password"})]}),(0,g.jsxs)(t.D,{children:[(0,g.jsx)(i.J,{children:"Confirm Password"}),(0,g.jsx)(a.m,{name:"password",placeholder:"Enter your password",control:e,type:"password"})]})]}),(0,g.jsx)(s.$,{kind:"primary",className:"mx-auto w-[200px]",type:"submit",isLoading:y,disabled:y,children:"Update"})]})]}):null}}}]);
//# sourceMappingURL=893.7cb21516.chunk.js.map