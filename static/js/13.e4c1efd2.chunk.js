(this.webpackJsonpjusttype=this.webpackJsonpjusttype||[]).push([[13],{250:function(e,t,n){"use strict";n.r(t);var c=n(32),r=n(0),s=n.n(r),a=n(30),i=n(72),o=(n(17),n(29)),l=n(13),d=n(43),u=n(233),j=n.n(u),b=n(235),p=n(1);var h=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],i=s.a.useRef(null);return Object(r.useEffect)((function(){var e=o.b.auth().currentUser;window.paypal.Buttons({createOrder:function(e,t,n){return a("Waiting for a payment..."),t.order.create({intent:"CAPTURE",purchase_units:[{description:"Permanent Pro Membership for JustType",amount:{currency_code:"USD",value:4.99}}]})},onApprove:function(){var t=Object(b.a)(j.a.mark((function t(n,c){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.order.capture();case 2:r=t.sent,a("Transaction completed, in a few seconds you will have your account updated."),o.a.collection("users").doc(null===e||void 0===e?void 0:e.uid).update({payment:{country:r.payer.address.country_code,email:r.payer.email_address,fullName:"".concat(r.payer.name.given_name," ").concat(r.payer.name.surname),payerId:r.payer.payer_id,paypalId:r.id,date:r.update_time},pro:!0});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),onError:function(){a("Something went wrong, please try again and make sure you have the corresponding amount.")}}).render(i.current)}),[]),Object(p.jsxs)("div",{className:"paypal",children:[Object(p.jsx)("div",{className:"ppButtons",ref:i}),Object(p.jsx)("p",{className:"ppStatus",children:n}),Object(p.jsxs)("div",{className:"redirectedButtons",children:[Object(p.jsx)(l.b,{to:"/play",children:Object(p.jsx)("button",{children:"Main Page"})}),Object(p.jsx)(l.b,{to:"/profile",children:Object(p.jsx)("button",{children:"Your Profile"})})]})]})};t.default=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(r.useState)(""),j=Object(c.a)(u,2),b=j[0],m=j[1],y=Object(r.useState)(""),O=Object(c.a)(y,2),x=O[0],f=O[1],v=Object(r.useState)("Log In"),g=Object(c.a)(v,2),S=g[0],I=g[1],w=Object(r.useState)(""),N=Object(c.a)(w,2),q=N[0],P=N[1],B=Object(r.useState)(),k=Object(c.a)(B,2),A=k[0],T=k[1];Object(r.useEffect)((function(){var e=document.querySelector(".loadingSpinnerPro"),t=document.querySelector(".loginBox"),n=document.querySelector(".proBox");o.b.auth().onAuthStateChanged((function(c){c?(s(c),o.a.collection("users").doc(c.uid).get().then((function(e){T(e.data())})),e&&(e.style.display="none"),n&&(n.style.display="block"),t&&(t.style.display="none")):(e&&(e.style.display="none"),t&&(t.style.display="block"))}))}),[n]);var C=function(e,t){var n=document.querySelector("".concat(e));n&&(n.style.marginTop="".concat(t),n.style.fontSize=".8rem")},F=function(e,t,n){var c=document.querySelector("".concat(t)),r=document.querySelector("".concat(e));if(c){if(""!==r.value)return;c.style.marginTop="".concat(n),c.style.fontSize="1rem"}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.a,{title:"JustType - Pro membership"}),Object(p.jsx)(i.a,{}),n?Object(p.jsxs)("div",{className:"proBox",children:[Object(p.jsx)("h1",{children:"JustType Pro Membership"}),Object(p.jsx)("h2",{children:"What you will get?"}),Object(p.jsx)("p",{children:"- Global chat access"}),Object(p.jsxs)("p",{children:["- Pro badge ",Object(p.jsx)("img",{src:d.a,alt:""})]}),Object(p.jsx)("p",{children:"- Fast responses from us"}),Object(p.jsx)("p",{children:"- Permanent membership"}),Object(p.jsx)("p",{children:"- Change username multiple times"}),Object(p.jsx)("p",{children:"And more features along the way."}),Object(p.jsx)("p",{children:A&&A.pro?"NOTE: You already have a Pro Membership":""}),Object(p.jsx)("h2",{children:"Buy the pro membership"}),Object(p.jsx)(h,{})]}):Object(p.jsxs)("div",{className:"loginBox",children:[Object(p.jsx)("h1",{children:"First, you will have to log in with your account."}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I("Loading...");var t=document.querySelector("#btn");t.setAttribute("disabled","");var n=document.querySelector(".loginBox"),c=document.querySelector(".proBox");o.b.auth().signInWithEmailAndPassword(b,x).then((function(){n.style.display="none",c.style.display="block"})).catch((function(e){I("Log In"),t.removeAttribute("disabled"),P(e.message)}))},children:[Object(p.jsxs)("div",{className:"email",children:[Object(p.jsx)("label",{htmlFor:"email",id:"label1",children:"E-mail"}),Object(p.jsx)("input",{type:"email",required:!0,id:"email",onChange:function(e){m(e.target.value),P("")},onFocus:function(){return C("#label1","2px")},onBlur:function(){return F("#email","#label1","15px")}})]}),Object(p.jsxs)("div",{className:"password",children:[Object(p.jsx)("label",{htmlFor:"password",id:"label2",children:"Password"}),Object(p.jsx)("input",{type:"password",required:!0,id:"password",onChange:function(e){f(e.target.value),P("")},onFocus:function(){return C("#label2","2px")},onBlur:function(){return F("#password","#label2","15px")}})]}),Object(p.jsx)(l.b,{to:"/recover-password",children:"Forgot password?"}),Object(p.jsx)("button",{id:"btn",children:S}),Object(p.jsx)("p",{children:q})]})]}),Object(p.jsx)("div",{className:"loadingSpinnerPro"})]})}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(35),r=(n(37),n(38),n(36),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),s=c.a.firestore();t.b=r},30:function(e,t,n){"use strict";var c=n(33),r=n(1);t.a=function(e){return Object(r.jsxs)(c.b,{children:[Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("style",{children:"\n                 body {\n                    background-color: #0e0b11;       \n                  }\n                "})]})}},43:function(e,t,n){"use strict";t.a=n.p+"static/media/pro.3e24b768.jpg"},72:function(e,t,n){"use strict";n(0),n(17);var c=n(13),r=n(31),s=n(1);t.a=function(){var e=!1;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"effectInfo",onClick:function(){e=!1;var t=document.querySelector(".mobileNavInfo"),n=document.querySelector(".effectInfo");t.style.display="none",n.style.opacity="0",n.style.zIndex="-2"}}),Object(s.jsxs)("div",{className:"navbarInfo",children:[Object(s.jsx)("h1",{className:"logoNavInfo",children:Object(s.jsxs)(r.a,{to:"/",children:["JustTyp",Object(s.jsx)("span",{})]})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(c.b,{to:"/",children:Object(s.jsx)("li",{children:"Landing page"})}),Object(s.jsx)(c.b,{to:"/play",children:Object(s.jsx)("li",{children:"Main page"})}),Object(s.jsx)(c.b,{to:"/sign-in",children:Object(s.jsx)("li",{children:"Sign In"})}),Object(s.jsx)(c.b,{to:"/sign-in",children:Object(s.jsx)("li",{children:"Create Account"})})]}),Object(s.jsxs)("div",{className:"hamburgerInfo",onClick:function(){e=!e;var t=document.querySelector(".mobileNavInfo"),n=document.querySelector(".effectInfo");e?(t.style.display="block",n.style.opacity="0.5",n.style.zIndex="999"):(t.style.display="none",n.style.opacity="0",n.style.zIndex="-2")},children:[Object(s.jsx)("div",{className:"lineInfo line1",children:" "}),Object(s.jsx)("div",{className:"lineInfo line2",children:" "}),Object(s.jsx)("div",{className:"lineInfo line3",children:" "})]})]}),Object(s.jsxs)("div",{className:"mobileNavInfo",children:[Object(s.jsx)("h1",{className:"logoNavMobileInfo",children:Object(s.jsxs)(r.a,{to:"/",children:["JustTyp",Object(s.jsx)("span",{})]})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(c.b,{to:"/",children:Object(s.jsx)("li",{children:"Landing page"})}),Object(s.jsx)(c.b,{to:"/play",children:Object(s.jsx)("li",{children:"Main page"})}),Object(s.jsx)(c.b,{to:"/sign-in",children:Object(s.jsx)("li",{children:"Sign In"})}),Object(s.jsx)(c.b,{to:"/sign-in",children:Object(s.jsx)("li",{children:"Create Account"})})]})]})]})}}}]);
//# sourceMappingURL=13.e4c1efd2.chunk.js.map