(this.webpackJsonpjusttype=this.webpackJsonpjusttype||[]).push([[8],{242:function(e,t,s){"use strict";s.r(t);var c=s(32),n=s(0),o=(s(17),s(39)),i=s(29),a=s(13),r=s(43),l=s(30),j=s(40),d=s(62),b=s(1);t.default=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),s=t[0],p=t[1],h=Object(n.useState)(""),u=Object(c.a)(h,2),O=u[0],g=u[1],x=Object(n.useState)([]),m=Object(c.a)(x,2),f=m[0],v=m[1],y=Object(n.useState)([]),N=Object(c.a)(y,2),w=N[0],k=N[1],M=Object(n.useState)([]),L=Object(c.a)(M,2),S=L[0],C=L[1],I=Object(n.useState)([]),P=Object(c.a)(I,2),W=P[0],A=P[1],q=Object(n.useState)([]),T=Object(c.a)(q,2),B=T[0],z=T[1],Y=Object(n.useState)([]),H=Object(c.a)(Y,2),J=H[0],R=H[1];return Object(n.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){var t=document.querySelector(".loadingSpinnerProfile"),s=document.querySelector(".notLoggedIn");e?(p(e),i.a.collection("users").doc(e.uid).get().then((function(e){g(e.data()),t.style.display="none",v(e.data().randomHistory.map((function(e){return e.wpm}))),k(e.data().quotesHistory.map((function(e){return e.wpm}))),C(e.data().customHistory.map((function(e){return e.wpm}))),A(e.data().randomHistory.map((function(e){return e.time}))),z(e.data().quotesHistory.map((function(e){return e.time}))),R(e.data().customHistory.map((function(e){return e.time})))})).catch((function(e){console.log("An error has occured:",e.message)}))):(s.style.display="block",t.style.display="none")}))}),[]),Object(n.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){e&&O&&(O.points>=1200&&O.points<2200?i.a.collection("users").doc(O.id).update({rank:"Intermediate"}):O.points>=2200&&i.a.collection("users").doc(O.id).update({rank:"Advanced"}))}))}),[O]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{title:"JustType - Your profile"}),O?Object(b.jsxs)("div",{className:"profileWrapper",children:[Object(b.jsx)(o.a,{path:"/play",name:"Main"}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsxs)("div",{className:"first-section",children:[Object(b.jsx)("img",{src:s?null===s||void 0===s?void 0:s.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348"}),Object(b.jsxs)("div",{className:"userInfo",children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{className:"usern",children:s.displayName}),O.pro?Object(b.jsx)("img",{src:r.a}):"",Object(b.jsx)("span",{className:"jtId",children:O.justTypeID})]}),Object(b.jsx)("div",{className:"descriptionProfile",children:Object(b.jsx)("p",{children:O.description})}),Object(b.jsxs)("p",{className:"pointsProfile",children:[O.points," Points (",O.rank,")"]})]})]}),Object(b.jsxs)("div",{className:"second-section",children:[Object(b.jsx)("h1",{children:"Account info"}),Object(b.jsxs)("p",{children:["Points: ",Object(b.jsx)("span",{children:O.points})]}),Object(b.jsxs)("p",{children:["Keyboard Layout: ",Object(b.jsx)("span",{children:O.keyboardLayout})]}),Object(b.jsxs)("p",{children:["Best: ",Object(b.jsxs)("span",{children:[O.bestWPM," WPM"]})]}),Object(b.jsxs)("p",{children:["Last test: ",Object(b.jsxs)("span",{children:[O.lastWPM," WPM"]})]}),Object(b.jsxs)("p",{children:["Tests: ",Object(b.jsx)("span",{children:O.races})]}),Object(b.jsxs)("p",{children:["Tests on random category: ",Object(b.jsx)("span",{children:O.randomTests})]}),Object(b.jsxs)("p",{children:["Tests on quotes category: ",Object(b.jsx)("span",{children:O.quotesTests})]}),Object(b.jsxs)("p",{children:["Tests on custom category: ",Object(b.jsx)("span",{children:O.customTests})]}),Object(b.jsxs)("p",{className:"profileNote",children:["Change your account settings"," ",Object(b.jsx)(a.b,{to:"/account-settings",children:"here"})]}),O?O.pro?"":Object(b.jsxs)("p",{className:"wantPro",children:["You are not a Pro member, do you want to be one?"," ",Object(b.jsx)(a.b,{to:"/pro",children:"Buy Pro"})]}):Object(b.jsx)("p",{children:"Checking..."}),Object(b.jsx)("h1",{className:"moreStats",children:"More statistics"}),Object(b.jsxs)("p",{children:["Average WPM on random category:"," ",Object(b.jsx)("span",{children:f.length>=2?Math.floor(f.reduce((function(e,t){return Math.floor(e+t)}))/f.length):"You have to play more"})]}),Object(b.jsxs)("p",{children:["Average WPM on quotes category:"," ",Object(b.jsx)("span",{children:w.length>=2?Math.floor(w.reduce((function(e,t){return Math.floor(e+t)}))/w.length):"You have to play more"})]}),Object(b.jsxs)("p",{children:["Average WPM on custom category:"," ",Object(b.jsx)("span",{children:S.length>=2?Math.floor(S.reduce((function(e,t){return Math.floor(e+t)}))/S.length):"You have to play more"})]}),f.length>=2&&w.length>=2?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{labels:W,wpm:f,title:"WPM on Random Category",lineColor:"#5c17c4",pointColor:"#20e6b4"}),Object(b.jsx)(d.a,{labels:B,wpm:w,title:"WPM on Quotes Category",lineColor:"#226be0",pointColor:"#d91ccc"}),S.length>=2?Object(b.jsx)(d.a,{labels:J,wpm:S,title:"WPM on Custom Category",lineColor:"#5ce820",pointColor:"#e82077"}):Object(b.jsx)("p",{style:{marginTop:"30px"},children:'You Didn\'t play enough for the "custom" category to display the statistics.'})]}):Object(b.jsx)("p",{className:"restriction",children:'You have to take 2 tests on "random" and "quotes" category to unlock the statistics.'})]})]})]}):Object(b.jsx)(j.a,{}),Object(b.jsx)("div",{className:"loadingSpinnerProfile"})]})}},29:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var c=s(35),n=(s(37),s(38),s(36),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),o=c.a.firestore();t.b=n},30:function(e,t,s){"use strict";var c=s(33),n=s(1);t.a=function(e){return Object(n.jsxs)(c.b,{children:[Object(n.jsx)("title",{children:e.title}),Object(n.jsx)("style",{children:"\n                 body {\n                    background-color: #0e0b11;       \n                  }\n                "})]})}},39:function(e,t,s){"use strict";var c=s(32),n=s(0),o=(s(17),s(2)),i=s(13),a=s(29),r=s(31),l=s(1);t.a=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),j=s[0],d=s[1],b=Object(n.useState)(""),p=Object(c.a)(b,2),h=p[0],u=p[1];Object(n.useEffect)((function(){var e=!0;return a.b.auth().onAuthStateChanged((function(t){t&&e&&d(t)})),function(){e=!1}}),[]),Object(n.useEffect)((function(){var e=!0;return j&&a.a.collection("users").doc(null===j||void 0===j?void 0:j.uid).onSnapshot({includeMetadataChanges:!0},(function(t){e&&u(t.data().notifications)})),function(){e=!1}}),[j]);var O=Object(o.f)(),g=!1,x=function(){a.b.auth().signOut(),O.push("/sign-in")},m=!1;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"effectLogged",onClick:function(){g=!1;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");e.style.display="none",t.style.opacity="0",t.style.zIndex="-2"}}),Object(l.jsxs)("div",{className:"navbarLogged",children:[Object(l.jsx)("h1",{className:"logoNavLogged",children:Object(l.jsxs)(r.a,{to:"/",children:["JustTyp",Object(l.jsx)("span",{})]})}),Object(l.jsxs)("div",{className:"navContent",children:[Object(l.jsx)("ul",{children:Object(l.jsx)(i.b,{to:e.path,children:Object(l.jsx)("li",{children:e.name})})}),Object(l.jsx)(i.b,{to:"/profile",children:Object(l.jsx)("img",{src:j?j.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile"})}),Object(l.jsxs)("div",{className:"notifications",children:[Object(l.jsx)("div",{className:"notificationBox",onClick:function(){m=!m;var e=document.querySelector(".notificationsWrapper");m?(e.style.zIndex="900",e.style.opacity="1"):(e.style.zIndex="-100",e.style.opacity="0")},children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(l.jsx)("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),Object(l.jsx)("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"})]})}),Object(l.jsxs)("div",{className:"notificationsWrapper",children:[Object(l.jsx)("h1",{children:"Notifications"}),h?h.map((function(e){return Object(l.jsxs)("div",{className:"notification",children:[Object(l.jsxs)("p",{className:"sender",children:[Object(l.jsx)("span",{children:"from"})," ",e.sender]}),Object(l.jsxs)("p",{className:"notificationMessage",children:[e.message," ",Object(l.jsxs)("span",{children:[" - ",e.time]})]})]},e.id)})):Object(l.jsx)("div",{className:"notificationSpinner"})]})]}),Object(l.jsxs)("button",{className:"navButtonLogged",onClick:x,children:[Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(l.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(l.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(l.jsx)("p",{children:"Sign Out"})]}),Object(l.jsxs)("div",{className:"hamburgerLogged",onClick:function(){g=!g;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");g?(e.style.display="block",t.style.opacity="0.5",t.style.zIndex="999"):(e.style.display="none",t.style.opacity="0",t.style.zIndex="-2")},children:[Object(l.jsx)("div",{className:"lineLogged  line1",children:" "}),Object(l.jsx)("div",{className:"lineLogged line2",children:" "}),Object(l.jsx)("div",{className:"lineLogged  line3",children:" "})]})]})]}),Object(l.jsxs)("div",{className:"mobileNavLogged",children:[Object(l.jsx)("h1",{className:"logoNavMobileLogged",children:Object(l.jsxs)(r.a,{to:"/",children:["JustTyp",Object(l.jsx)("span",{})]})}),Object(l.jsxs)("div",{className:"navContentMobile",children:[Object(l.jsx)("ul",{children:e.play?Object(l.jsx)("a",{href:e.path,children:e.name}):Object(l.jsx)(i.b,{to:e.path,children:Object(l.jsx)("li",{children:e.name})})}),Object(l.jsx)(i.b,{to:"/profile",children:Object(l.jsx)("img",{src:j?j.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile"})}),Object(l.jsxs)("button",{className:"navButtonMobileLogged",onClick:x,children:[Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(l.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(l.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(l.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(l.jsx)("p",{children:"Sign Out"})]})]})]})]})}},40:function(e,t,s){"use strict";s(0),s(17);var c=s(13),n=s(1);t.a=function(){return Object(n.jsxs)("div",{className:"notLoggedIn",children:[Object(n.jsx)("p",{children:"You must be logged in to view this page"}),Object(n.jsx)(c.b,{to:"/sign-in",children:Object(n.jsx)("button",{children:"Sign In"})})]})}},43:function(e,t,s){"use strict";t.a=s.p+"static/media/pro.3e24b768.jpg"},62:function(e,t,s){"use strict";s(0);var c=s(76),n=s(1);t.a=function(e){return Object(n.jsx)("div",{className:"graphic",children:Object(n.jsx)(c.Line,{data:{labels:e.labels,datasets:[{label:e.title,data:e.wpm,backgroundColor:e.pointColor,fill:!1,borderColor:e.lineColor,tension:0,pointBorderColor:e.pointColor}]},height:400,width:1600,options:{maintainAspectRatio:!1,legend:{display:"none"},scales:{xAxes:[{gridLines:{color:"#19171d"}}],yAxes:[{gridLines:{color:"#19171d"}}]}}})})}}}]);
//# sourceMappingURL=8.71f01c6c.chunk.js.map