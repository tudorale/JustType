(this.webpackJsonptypinghub=this.webpackJsonptypinghub||[]).push([[21],{251:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(0),r=(c(21),c(34)),a=c(15),i=c(39),o=c(35),u=c(2),l=c(1);t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),p=t[0],d=t[1],b=Object(s.useState)(""),m=Object(n.a)(b,2),j=m[0],h=m[1],g=Object(s.useState)(""),y=Object(n.a)(g,2),f=y[0],x=y[1],O=Object(s.useState)(""),v=Object(n.a)(O,2),S=v[0],w=v[1],C=Object(s.useState)("Sign Up"),N=Object(n.a)(C,2),I=N[0],L=N[1],M=Object(u.f)(),U=function(e,t){var c=document.querySelector("".concat(e));c&&(c.style.top="".concat(t),c.style.fontSize="1rem")},q=function(e,t,c){var n=document.querySelector("".concat(t)),s=document.querySelector("".concat(e));if(n){if(""!==s.value)return;n.style.top="".concat(c),n.style.fontSize="1.1rem"}};Object(s.useEffect)((function(){r.b.auth().signOut()}),[]);var k=[],z=new Date,B=z.getHours(),F=z.getMinutes(),T=z.getSeconds(),A=z.getFullYear(),P=z.getMonth()+1,D=z.getDate(),H=c(33);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"".concat(H.name," | Sign Up")}),Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)("h1",{children:Object(l.jsx)(a.b,{to:"/",children:"Sign Up"})}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L("Loading...");var t=document.querySelector("#btn");t.setAttribute("disabled",""),p.length>=4&&p.length<=20&&r.a.collection("users").get().then((function(e){e.forEach((function(e){k.push(e.data().username)}))})).then((function(){k.includes(p)?(L("Sign Up"),w("That username is already in use.")):r.b.auth().createUserWithEmailAndPassword(j,f).then((function(e){return r.a.collection("users").doc(e.user.uid).set({id:e.user.uid,username:p,races:0,role:"user",points:0,description:"No description",pro:!1,rank:"Beginner",bestWPM:"0",lastWPM:"0",keyboardLayout:"Not set",randomTests:0,quotesTests:0,customTests:0,randomHistory:[],quotesHistory:[],customHistory:[],changedUsername:!1,payment:{},notifications:[{sender:"{config.name}",id:Math.floor(999999999*Math.random()),message:"This is the section where you will recieve notifications from us, from events, and so on.",time:"".concat(B,":").concat(F,":").concat(T," ").concat(D,"/").concat(P,"/").concat(A)}],typingHubID:"#".concat(Math.floor(9999*Math.random())),timestamp:i.a.firestore.FieldValue.serverTimestamp(),profileImage:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348"})})).then((function(){var e=r.b.auth().currentUser;null===e||void 0===e||e.updateProfile({displayName:p,photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348"}).then((function(){M.push("/play")}))})).catch((function(e){L("Sign Up"),t.removeAttribute("disabled"),w(e.message)}))}))},children:[Object(l.jsxs)("div",{className:"usernameWrapper",children:[Object(l.jsx)("label",{htmlFor:"username",className:"userLabel",children:"Username"}),Object(l.jsx)("input",{type:"text",id:"username",maxLength:20,minLength:4,className:"userInput",required:!0,onChange:function(e){return d(e.target.value)},onFocus:function(){return U(".userLabel","5px")},onBlur:function(){return q(".userInput",".userLabel","30px")}})]}),Object(l.jsxs)("div",{className:"emailWrapper",children:[Object(l.jsx)("label",{htmlFor:"email",className:"emailLabel",children:"Valid email"}),Object(l.jsx)("input",{type:"email",id:"email",className:"emailInput",required:!0,onChange:function(e){return h(e.target.value)},onFocus:function(){return U(".emailLabel","5px")},onBlur:function(){return q(".emailInput",".emailLabel","30px")}})]}),Object(l.jsxs)("div",{className:"passwordWrapper",children:[Object(l.jsx)("label",{htmlFor:"password",className:"passLabel",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",className:"passInput",required:!0,onChange:function(e){return x(e.target.value)},onFocus:function(){return U(".passLabel","5px")},onBlur:function(){return q(".passInput",".passLabel","30px")}}),Object(l.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",className:"eyeClosedSignUp",onClick:function(){var e=document.querySelector(".passInput");document.querySelector(".eyeClosedSignUp").style.display="none",document.querySelector(".eyeOpenSignUp").style.display="block",e.setAttribute("type","password")},children:[Object(l.jsx)("path",{d:"M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083\r c12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752\r c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003\r c47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z"}),Object(l.jsx)("path",{d:"M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333\r c0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171\r c5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64\r c3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z"}),Object(l.jsx)("path",{d:"M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587\r c-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128\r c-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229\r c38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443\r C512.854,258.915,512.833,253.091,509.462,249.102z"}),Object(l.jsx)("path",{d:"M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443\r c-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792\r c3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533\r c24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699\r C334.572,126.862,331.585,120.825,325.996,118.947z"}),Object(l.jsx)("path",{d:"M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083\r c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211\r C449.025,78.051,449.025,71.288,444.865,67.128z"})]}),Object(l.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 511.992 511.992",className:"eyeOpenSignUp",onClick:function(){var e=document.querySelector(".passInput");document.querySelector(".eyeClosedSignUp").style.display="block",document.querySelector(".eyeOpenSignUp").style.display="none",e.setAttribute("type","text")},children:[Object(l.jsx)("path",{d:"M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105\r c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886\r C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128\r c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424\r C463.013,282.065,362.256,383.996,255.995,383.996z"}),Object(l.jsx)("path",{d:"M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333\r S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64\r S291.28,319.996,255.995,319.996z"})]})]}),Object(l.jsxs)("p",{children:["Already have an account? ",Object(l.jsx)(a.b,{to:"/sign-in",children:"Sign In"})]}),Object(l.jsxs)("p",{children:['By clicking "Sign Up" you agree with our'," ",Object(l.jsx)(a.b,{to:"/terms-and-conditions",children:"Terms and Conditions"})," and our"," ",Object(l.jsx)(a.b,{to:"/privacy-policy",children:"Privacy Policy"})]}),Object(l.jsx)("p",{children:S}),Object(l.jsx)("button",{type:"submit",id:"btn",children:I})]})]})]})}},33:function(e){e.exports=JSON.parse('{"name":"TypingHub"}')},34:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(39),s=(c(41),c(42),c(40),n.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),r=n.a.firestore();t.b=s},35:function(e,t,c){"use strict";var n=c(37),s=c(1);t.a=function(e){return Object(s.jsxs)(n.b,{children:[Object(s.jsx)("title",{children:e.title}),Object(s.jsx)("style",{children:"\n                 body {\n                    background-color: #0b101b;       \n                  }\n                "})]})}}}]);
//# sourceMappingURL=21.eb51da01.chunk.js.map