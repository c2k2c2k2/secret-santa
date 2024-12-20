(()=>{var e={};e.id=165,e.ids=[165],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8318:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var s=r(260),a=r(8203),n=r(5155),i=r.n(n),o=r(7292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["users",{children:["add",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3590)),"D:\\Zitics\\hobby\\secret-santa\\secret-santa\\src\\app\\users\\add\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"D:\\Zitics\\hobby\\secret-santa\\secret-santa\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Zitics\\hobby\\secret-santa\\secret-santa\\src\\app\\users\\add\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/users/add/page",pathname:"/users/add",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3779:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},731:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},8816:()=>{},507:()=>{},7405:(e,t,r)=>{Promise.resolve().then(r.bind(r,3590))},5021:(e,t,r)=>{Promise.resolve().then(r.bind(r,1050))},1050:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5512),a=r(8009);function n(){let[e,t]=(0,a.useState)({name:"",email:"",age:""}),[r,n]=(0,a.useState)(""),i=async r=>{r.preventDefault();try{let r=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,age:Number(e.age)})}),s=await r.json();r.ok?(n("User added successfully!"),t({name:"",email:"",age:""})):n(s.error||"Failed to add user")}catch(e){console.error("Error:",e),n("An error occurred")}};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Add User"}),(0,s.jsxs)("form",{onSubmit:i,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Name"}),(0,s.jsx)("input",{type:"text",value:e.name,onChange:r=>t({...e,name:r.target.value})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Email"}),(0,s.jsx)("input",{type:"email",value:e.email,onChange:r=>t({...e,email:r.target.value})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Age"}),(0,s.jsx)("input",{type:"number",value:e.age,onChange:r=>t({...e,age:r.target.value})})]}),(0,s.jsx)("button",{type:"submit",children:"Add User"})]}),r&&(0,s.jsx)("p",{children:r})]})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>d});var s=r(2740),a=r(2376),n=r.n(a),i=r(8726),o=r.n(i);r(1135);let d={title:"Create Next App",description:"Generated by create next app"};function l({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} ${o().variable} antialiased`,children:e})})}},3590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Zitics\\\\hobby\\\\secret-santa\\\\secret-santa\\\\src\\\\app\\\\users\\\\add\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Zitics\\hobby\\secret-santa\\secret-santa\\src\\app\\users\\add\\page.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,779,77],()=>r(8318));module.exports=s})();