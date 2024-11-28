(self.webpackChunkreact_mk_blogging=self.webpackChunkreact_mk_blogging||[]).push([[380,3],{8150:(n,e,t)=>{"use strict";t.d(e,{$:()=>m});var i,a=t(7528),r=(t(5043),t(4574)),o=t(579);const s=r.Ay.div(i||(i=(0,a.A)(["\n  width: ",";\n  height: ",";\n  border: "," solid white;\n  border-top: "," solid transparent;\n  border-bottom: "," solid transparent;\n  border-radius: 100rem;\n  display: inline-block;\n  animation: spinner 1s infinite linear;\n  @keyframes spinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(n=>n.size),(n=>n.size),(n=>n.borderSize),(n=>n.borderSize),(n=>n.borderSize)),l=n=>{let{size:e="40px",borderSize:t="5px"}=n;return(0,o.jsx)(s,{size:e,borderSize:t})};var c,d,h,p,u=t(5475);const g=r.Ay.button(c||(c=(0,a.A)(["\n  cursor: pointer;\n  padding: 0 25px;\n  line-height: 1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",";\n  ",";\n    ",";\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),(n=>n.height||"66px"),(n=>"secondary"===n.kind&&(0,r.AH)(d||(d=(0,a.A)(["\n      color: ",";\n      background-color: white;\n    "])),(n=>n.theme.primary))),(n=>"primary"===n.kind&&(0,r.AH)(h||(h=(0,a.A)(["\n      color: white;\n      background-image: linear-gradient(\n        to right bottom,\n        ",",\n        ","\n      );\n    "])),(n=>n.theme.primary),(n=>n.theme.secondary))),(n=>"ghost"===n.kind&&(0,r.AH)(p||(p=(0,a.A)(["\n      color: ",";\n      background-color: rgba(29, 192, 113, 0.1);\n    "])),(n=>n.theme.primary)))),m=n=>{let{type:e="button ",onClick:t=(()=>{}),children:i,kind:a="primary",...r}=n;const{isLoading:s,to:c}=r,d=s?(0,o.jsx)(l,{}):i;return""!==c&&"string"===typeof c?(0,o.jsx)(u.k2,{to:c,className:"inline-block",children:(0,o.jsx)(g,{type:e,kind:a,onClick:t,...r,children:d})}):(0,o.jsx)(g,{type:e,kind:a,onClick:t,...r,children:d})}},2102:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var i,a=t(7528),r=(t(5043),t(4574)),o=t(579);const s=r.Ay.h2(i||(i=(0,a.A)(["\n  color: ",';\n  font-size: 28px;\n  position: relative;\n  margin-bottom: 30px;\n  font-weight: 600;\n\n  // line accent\n  &:before {\n    content: "";\n    width: 50px;\n    height: 4px;\n    background-color: ',";\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(0, -150%);\n  }\n"])),(n=>n.theme.tertiary),(n=>n.theme.accent)),l=n=>{let{className:e="",children:t}=n;return(0,o.jsx)(s,{className:e,children:t})}},2771:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});t(5043);var i,a=t(7528),r=t(8150),o=t(1625),s=t(5475),l=t(4574),c=t(579);const d=[{url:"/",title:"Home"}],h=l.Ay.header(i||(i=(0,a.A)(["\n  padding: 20px 0;\n  .header-main {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .header-auth {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n  .logo {\n    display: block;\n    max-width: 50px;\n  }\n  .menu {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-left: 40px;\n    list-style: none;\n    font-weight: 500;\n  }\n  .search {\n    margin-left: auto;\n    padding: 15px 25px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    width: 100%;\n    max-width: 320px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-right: 20px;\n  }\n  .search-input {\n    flex: 1;\n    padding-right: 40px;\n    font-weight: 500;\n  }\n  .search-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 25px;\n  }\n  @media screen and (max-width: 1023.98px) {\n    .logo {\n      max-width: 30px;\n    }\n    .menu,\n    .search,\n    .header-button,\n    .header-auth {\n      display: none;\n    }\n  }\n"]))),p=()=>{const{userInfo:n}=(0,o.A)();return(0,c.jsx)(h,{children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"header-main",children:[(0,c.jsx)(s.k2,{to:"/",children:(0,c.jsx)("img",{srcSet:"./logo.png 2x",alt:"monkey-blogging",className:"logo"})}),(0,c.jsx)("ul",{className:"menu",children:d.map((n=>(0,c.jsx)("li",{className:"menu-item",children:(0,c.jsx)(s.k2,{to:n.url,className:"menu-link",children:n.title})},n.title)))}),n?(0,c.jsx)("div",{className:"header-auth",children:(0,c.jsx)(r.$,{type:"button",height:"56px",className:"header-button",to:"/dashboard",children:"Dashboard"})}):(0,c.jsx)(r.$,{type:"button",height:"56px",className:"header-button",to:"/sign-in",children:"Login"})]})})})},u=n=>{let{children:e}=n;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{}),e]})}},3724:(n,e,t)=>{"use strict";t.d(e,{A:()=>h});var i,a,r,o=t(7528),s=(t(5043),t(5475)),l=t(4574),c=t(579);const d=l.Ay.div(i||(i=(0,o.A)(["\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #f3f3f3;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>n.theme.gray6B),(n=>"primary"===n.type&&(0,l.AH)(a||(a=(0,o.A)(["\n      background-color: ",";\n    "])),(n=>n.theme.grayF3))),(n=>"secondary"===n.type&&(0,l.AH)(r||(r=(0,o.A)(["\n      background-color: white;\n    "]))))),h=n=>{let{children:e,type:t="primary",className:i="",to:a=""}=n;return(0,c.jsx)(d,{type:t,className:"post-category ".concat(i),children:(0,c.jsx)(s.N_,{to:"/category/".concat(a),children:e})})}},9631:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var i,a=t(7528),r=(t(5043),t(5475)),o=t(4574),s=t(579);const l=o.Ay.div(i||(i=(0,a.A)(["\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: inherit;\n  }\n"]))),c=n=>{let{className:e="",url:t="",alt:i="",to:a=""}=n;return a?(0,s.jsx)(r.N_,{to:"/".concat(a),style:{display:"block"},children:(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}):(0,s.jsx)(l,{className:"post-image ".concat(e),children:(0,s.jsx)("img",{src:t,alt:i,loading:"lazy"})})}},8875:(n,e,t)=>{"use strict";t.d(e,{A:()=>g});var i,a=t(7528),r=(t(5043),t(4574)),o=t(3724),s=t(232),l=t(3881),c=t(9631),d=t(948),h=t.n(d),p=t(579);const u=r.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  .post {\n    &-image {\n      height: 202px;\n      margin-bottom: 20px;\n      display: block;\n      width: 100%;\n      border-radius: 16px;\n    }\n    &-category {\n      display: inline-block;\n      padding: 8px;\n      border-radius: 8px;\n      color: #6b6b6b;\n      font-size: 14px;\n      font-weight: 600;\n      background-color: #f3edff;\n      margin-bottom: 16px;\n    }\n    &-info {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      font-size: 14px;\n      font-weight: 600;\n      color: #6b6b6b;\n      margin-top: auto;\n    }\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n    &-title {\n      margin-bottom: 12px;\n    }\n  }\n"]))),g=n=>{var e,t,i,a,r,d;let{data:g}=n;if(!g)return null;const m=null!==g&&void 0!==g&&null!==(e=g.createdAt)&&void 0!==e&&e.seconds?new Date(1e3*(null===g||void 0===g||null===(t=g.createdAt)||void 0===t?void 0:t.seconds)):new Date,x=new Date(m).toLocaleDateString("vi-VI");return(0,p.jsxs)(u,{children:[(0,p.jsx)(c.A,{url:g.image,alt:"",to:g.slug}),(0,p.jsx)(o.A,{to:null===(i=g.category)||void 0===i?void 0:i.slug,children:null===(a=g.category)||void 0===a?void 0:a.name}),(0,p.jsx)(s.A,{to:g.slug,children:g.title}),(0,p.jsx)(l.A,{to:h()((null===(r=g.user)||void 0===r?void 0:r.username)||"",{lower:!0}),authorName:null===(d=g.user)||void 0===d?void 0:d.fullname,date:x})]})}},3881:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var i,a=t(7528),r=(t(5043),t(5475)),o=t(4574),s=t(579);const l=o.Ay.div(i||(i=(0,a.A)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: inherit;\n  .post {\n    &-dot {\n      display: inline-block;\n      width: 4px;\n      height: 4px;\n      background-color: currentColor;\n      border-radius: 100rem;\n    }\n  }\n"]))),c=n=>{let{date:e="Mar 23",authorName:t="Andiez Le",className:i="",to:a=""}=n;return(0,s.jsxs)(l,{className:i,children:[(0,s.jsx)("span",{className:"post-time",children:e}),(0,s.jsx)("span",{className:"post-dot"}),(0,s.jsx)(r.N_,{to:"/author/".concat(a),children:(0,s.jsx)("span",{className:"post-author",children:t})})]})}},232:(n,e,t)=>{"use strict";t.d(e,{A:()=>h});var i,a,r,o=t(7528),s=(t(5043),t(5475)),l=t(4574),c=t(579);const d=l.Ay.h3(i||(i=(0,o.A)(["\n  font-weight: 600;\n  line-height: 1.5;\n  a {\n    display: block;\n  }\n  ",";\n  ",";\n"])),(n=>"normal"===n.size&&(0,l.AH)(a||(a=(0,o.A)(["\n      font-size: 18px;\n    "])))),(n=>"big"===n.size&&(0,l.AH)(r||(r=(0,o.A)(["\n      font-size: 22px;\n    "]))))),h=n=>{let{children:e,className:t="",size:i="normal",to:a=""}=n;return(0,c.jsx)(d,{size:i,className:"post-title ".concat(t),children:(0,c.jsx)(s.N_,{to:"/".concat(a),children:e})})}},9380:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>p});var i=t(2102),a=t(2771),r=t(5883),o=t(6032),s=t(8875),l=t(5043),c=t(3216),d=t(9003),h=t(579);const p=()=>{const[n,e]=(0,l.useState)([]),t=(0,c.g)();return(0,l.useEffect)((()=>{!async function(){const n=(0,o.P)((0,o.rJ)(r.db,"posts"),(0,o._M)("category.slug","==",t.slug)),i=[];(0,o.aQ)(n,(n=>{n.forEach((n=>{i.push({id:n.id,...n.data()})})),e(i)}))}()}),[t.slug]),n.length<=0?(0,h.jsx)(d.default,{}):(0,h.jsx)(a.A,{children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("div",{className:"pt-10"}),(0,h.jsxs)(i.A,{children:["Directory - ",t.slug]}),(0,h.jsx)("div",{className:"grid-layout grid-layout--primary",children:n.map((n=>(0,h.jsx)(s.A,{data:n},n.id)))})]})})}},9003:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var i,a=t(7528),r=(t(5043),t(3216)),o=t(4574),s=t(579);const l=o.Ay.div(i||(i=(0,a.A)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ",";\n  color: black;\n  .page-content {\n    max-width: 1000px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo {\n    display: inline-block;\n    margin-bottom: 40px;\n  }\n  .heading {\n    font-size: 60px;\n    font-weight: bold;\n    margin-bottom: 20px;\n  }\n  .description {\n    max-width: 800px;\n    margin: 0 auto 40px;\n  }\n  .back {\n    display: inline-block;\n    padding: 15px 30px;\n    color: white;\n    background-image: linear-gradient(\n      to right top,\n      ",",\n      ","\n    );\n    border-radius: 8px;\n    font-weight: 500;\n  }\n  .image {\n    max-width: 250px;\n    margin: 0 auto 40px;\n  }\n"])),(n=>n.theme.black),(n=>n.theme.primary),(n=>n.theme.secondary)),c=()=>{const n=(0,r.Zp)();return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"page-content",children:[(0,s.jsx)("img",{src:"./404.png",alt:"notfound",className:"image"}),(0,s.jsx)("h1",{className:"heading",children:"404 - Looks like you're lost."}),(0,s.jsx)("p",{className:"description",children:"Maybe this page used to exist or you just spelled something wrong. Chances are your spelled something wrong, so can you double check the URL?"}),(0,s.jsx)("button",{onClick:()=>n("/"),className:"back",children:"Go back"})]})})}},948:function(n){var e;e=function(){var n=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e62":"S","\u1e63":"s","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'),e=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function t(t,i){if("string"!==typeof t)throw new Error("slugify: string argument expected");var a=e[(i="string"===typeof i?{replacement:i}:i||{}).locale]||{},r=void 0===i.replacement?"-":i.replacement,o=void 0===i.trim||i.trim,s=t.normalize().split("").reduce((function(e,t){var o=a[t];return void 0===o&&(o=n[t]),void 0===o&&(o=t),o===r&&(o=" "),e+o.replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return i.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),o&&(s=s.trim()),s=s.replace(/\s+/g,r),i.lower&&(s=s.toLowerCase()),s}return t.extend=function(e){Object.assign(n,e)},t},n.exports=e(),n.exports.default=e()}}]);
//# sourceMappingURL=380.94946e8e.chunk.js.map