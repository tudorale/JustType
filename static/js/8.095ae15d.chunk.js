(this.webpackJsonptypinghub=this.webpackJsonptypinghub||[]).push([[8],{257:function(e,t,s){"use strict";s.r(t);var c=s(9),n=s(0),o=(s(21),s(43)),i=s(34),a=s(15),r=s(47),l=s(35),j=s(44),d=s(64),b=s(16),p=s(94),h=s.n(p),u=s(1);t.default=function(){var e=Object(n.useContext)(b.b),t=e.user,p=e.setUser,O=e.userData,g=e.setUserData,x=Object(n.useState)([]),m=Object(c.a)(x,2),f=m[0],v=m[1],y=Object(n.useState)([]),N=Object(c.a)(y,2),k=N[0],w=N[1],M=Object(n.useState)([]),L=Object(c.a)(M,2),C=L[0],S=L[1],I=Object(n.useState)([]),P=Object(c.a)(I,2),W=P[0],A=P[1],T=Object(n.useState)([]),q=Object(c.a)(T,2),H=q[0],B=q[1],z=Object(n.useState)([]),Y=Object(c.a)(z,2),U=Y[0],D=Y[1];Object(n.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){var t=document.querySelector(".loadingSpinnerProfile"),s=document.querySelector(".notLoggedIn");e?(p(e),i.a.collection("users").doc(e.uid).get().then((function(e){g(e.data()),t.style.display="none",v(e.data().randomHistory.map((function(e){return e.wpm}))),w(e.data().quotesHistory.map((function(e){return e.wpm}))),S(e.data().customHistory.map((function(e){return e.wpm}))),A(e.data().randomHistory.map((function(e){return e.time}))),B(e.data().quotesHistory.map((function(e){return e.time}))),D(e.data().customHistory.map((function(e){return e.time})))})).catch((function(e){console.log("An error has occured:",e.message)}))):(s.style.display="block",t.style.display="none")}))}),[]),Object(n.useEffect)((function(){i.b.auth().onAuthStateChanged((function(e){e&&O&&(O.points>=1200&&O.points<2200?i.a.collection("users").doc(O.id).update({rank:"Intermediate"}):O.points>=2200&&i.a.collection("users").doc(O.id).update({rank:"Advanced"}))}))}),[O]);var R=s(33);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{title:"".concat(R.name," | Your profile")}),O?Object(u.jsxs)("div",{className:"profileWrapper",children:[Object(u.jsx)(o.a,{path:"/play",name:"Main"}),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsxs)("div",{className:"first-section",children:[Object(u.jsx)("img",{src:t?null===t||void 0===t?void 0:t.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",alt:""}),Object(u.jsxs)("div",{className:"userInfo",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"usern",children:t.displayName}),O.pro?Object(u.jsx)("img",{src:r.a,alt:""}):"",Object(u.jsx)("span",{className:"jtId",children:O.typingHubID})]}),Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"descriptionProfile",children:O.description})}),Object(u.jsxs)("p",{className:"pointsProfile",children:[O.points," Points (",O.rank,")"]})]})]}),Object(u.jsxs)("div",{className:"second-section",children:[Object(u.jsx)("h1",{children:"Account info"}),Object(u.jsxs)("p",{children:["Points: ",Object(u.jsx)("span",{children:O.points})]}),Object(u.jsxs)("p",{children:["Keyboard Layout: ",Object(u.jsx)("span",{children:O.keyboardLayout})]}),Object(u.jsxs)("p",{children:["Account created at: ",Object(u.jsx)("span",{children:t.metadata.creationTime})]}),Object(u.jsxs)("p",{children:["Best: ",Object(u.jsxs)("span",{children:[O.bestWPM," WPM"]})]}),Object(u.jsxs)("p",{children:["Last test: ",Object(u.jsxs)("span",{children:[O.lastWPM," WPM"]})]}),Object(u.jsxs)("p",{children:["Tests: ",Object(u.jsx)("span",{children:O.races})]}),Object(u.jsxs)("p",{children:["Tests on random category: ",Object(u.jsx)("span",{children:O.randomTests})]}),Object(u.jsxs)("p",{children:["Tests on quotes category: ",Object(u.jsx)("span",{children:O.quotesTests})]}),Object(u.jsxs)("p",{children:["Tests on custom category: ",Object(u.jsx)("span",{children:O.customTests})]}),Object(u.jsxs)("p",{className:"profileNote",children:["Change your account settings"," ",Object(u.jsx)(a.b,{to:"/account-settings",children:"here"})]}),O?O.pro?"":Object(u.jsxs)("p",{className:"wantPro",children:["You are not a Pro member, do you want to be one?"," ",Object(u.jsx)(a.b,{to:"/pro",children:"Buy Pro"})]}):Object(u.jsx)("p",{children:"Checking..."}),Object(u.jsx)("h1",{className:"moreStats",children:"More statistics"}),Object(u.jsxs)("p",{children:["Average WPM on random category:"," ",Object(u.jsx)("span",{children:f.length>=2?Math.floor(f.reduce((function(e,t){return Math.floor(e+t)}))/f.length):"You have to play more"})]}),Object(u.jsxs)("p",{children:["Average WPM on quotes category:"," ",Object(u.jsx)("span",{children:k.length>=2?Math.floor(k.reduce((function(e,t){return Math.floor(e+t)}))/k.length):"You have to play more"})]}),Object(u.jsxs)("p",{children:["Average WPM on custom category:"," ",Object(u.jsx)("span",{children:C.length>=2?Math.floor(C.reduce((function(e,t){return Math.floor(e+t)}))/C.length):"You have to play more"})]}),f.length>=2&&k.length>=2?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{labels:W,wpm:f,title:"WPM on Random Category",lineColor:"#5c17c4",pointColor:"#20e6b4"}),Object(u.jsx)(d.a,{labels:H,wpm:k,title:"WPM on Quotes Category",lineColor:"#226be0",pointColor:"#d91ccc"}),C.length>=2?Object(u.jsx)(d.a,{labels:U,wpm:C,title:"WPM on Custom Category",lineColor:"#5ce820",pointColor:"#e82077"}):Object(u.jsx)("p",{style:{marginTop:"30px"},children:'You didn\'t play enough in the "custom" category to display the statistics.'})]}):Object(u.jsx)("p",{className:"restriction",children:'You have to take 2 tests in "random" and "quotes" category to unlock the statistics.'})]})]})]}):Object(u.jsx)(j.a,{}),Object(u.jsx)("div",{className:"loadingSpinnerProfile"})]})}},33:function(e){e.exports=JSON.parse('{"name":"TypingHub"}')},34:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var c=s(39),n=(s(41),s(42),s(40),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),o=c.a.firestore();t.b=n},35:function(e,t,s){"use strict";var c=s(37),n=s(1);t.a=function(e){return Object(n.jsxs)(c.b,{children:[Object(n.jsx)("title",{children:e.title}),Object(n.jsx)("style",{children:"\n                 body {\n                    background-color: #0b101b;       \n                  }\n                "})]})}},43:function(e,t,s){"use strict";var c=s(9),n=s(0),o=(s(21),s(2)),i=s(15),a=s(34),r=s(36),l=s(16),j=s(1);t.a=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),d=s[0],b=s[1],p=Object(n.useContext)(l.b),h=p.user,u=p.setUser;Object(n.useEffect)((function(){var e=!0;return a.b.auth().onAuthStateChanged((function(t){t&&e&&u(t)})),function(){e=!1}}),[]),Object(n.useEffect)((function(){var e=!0;return h&&a.a.collection("users").doc(null===h||void 0===h?void 0:h.uid).onSnapshot({includeMetadataChanges:!0},(function(t){e&&b(t.data().notifications)})),function(){e=!1}}),[h]);var O=Object(o.f)(),g=!1,x=function(){a.b.auth().signOut(),O.push("/sign-in")},m=!1;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"effectLogged",onClick:function(){g=!1;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");e.style.display="none",t.style.opacity="0",t.style.zIndex="-2"}}),Object(j.jsxs)("div",{className:"navbarLogged",children:[Object(j.jsx)("h1",{className:"logoNavLogged",children:Object(j.jsxs)(r.a,{to:"/",children:["TypingHu",Object(j.jsx)("span",{})]})}),Object(j.jsxs)("div",{className:"navContent",children:[Object(j.jsx)("ul",{children:Object(j.jsx)(i.b,{to:e.path,children:Object(j.jsx)("li",{children:e.name})})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(j.jsxs)("div",{className:"notifications",children:[Object(j.jsx)("div",{className:"notificationBox",onClick:function(){m=!m;var e=document.querySelector(".notificationsWrapper");m?(e.style.zIndex="900",e.style.opacity="1"):(e.style.zIndex="-100",e.style.opacity="0")},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),Object(j.jsx)("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"})]})}),Object(j.jsxs)("div",{className:"notificationsWrapper",children:[Object(j.jsx)("h1",{children:"Notifications"}),d?d.map((function(e){return Object(j.jsxs)("div",{className:"notification",children:[Object(j.jsxs)("p",{className:"sender",children:[Object(j.jsx)("span",{children:"from"})," ",e.sender]}),Object(j.jsxs)("p",{className:"notificationMessage",children:[e.message," ",Object(j.jsxs)("span",{children:[" - ",e.time]})]})]},e.id)})):Object(j.jsx)("div",{className:"notificationSpinner"})]})]}),Object(j.jsxs)("button",{className:"navButtonLogged",onClick:x,children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(j.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(j.jsx)("p",{children:"Sign Out"})]}),Object(j.jsxs)("div",{className:"hamburgerLogged",onClick:function(){g=!g;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");g?(e.style.display="block",t.style.opacity="0.5",t.style.zIndex="999"):(e.style.display="none",t.style.opacity="0",t.style.zIndex="-2")},children:[Object(j.jsx)("div",{className:"lineLogged  line1",children:" "}),Object(j.jsx)("div",{className:"lineLogged line2",children:" "}),Object(j.jsx)("div",{className:"lineLogged  line3",children:" "})]})]})]}),Object(j.jsxs)("div",{className:"mobileNavLogged",children:[Object(j.jsx)("h1",{className:"logoNavMobileLogged",children:Object(j.jsxs)(r.a,{to:"/",children:["TypingHu",Object(j.jsx)("span",{})]})}),Object(j.jsxs)("div",{className:"navContentMobile",children:[Object(j.jsx)("ul",{children:e.play?Object(j.jsx)("a",{href:e.path,children:e.name}):Object(j.jsx)(i.b,{to:e.path,children:Object(j.jsx)("li",{children:e.name})})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(j.jsxs)("button",{className:"navButtonMobileLogged",onClick:x,children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(j.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(j.jsx)("p",{children:"Sign Out"})]})]})]})]})}},44:function(e,t,s){"use strict";s(0),s(21);var c=s(15),n=s(1);t.a=function(){return Object(n.jsxs)("div",{className:"notLoggedIn",children:[Object(n.jsx)("p",{children:"We are so sorry but you must be logged in to view this page"}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(c.b,{to:"/sign-in",children:Object(n.jsx)("button",{children:"Sign In"})}),Object(n.jsx)(c.b,{to:"/sign-up",children:Object(n.jsx)("button",{children:"Sign Up"})})]})]})}},47:function(e,t,s){"use strict";t.a=s.p+"static/media/pro.3e24b768.jpg"},64:function(e,t,s){"use strict";s(0);var c=s(78),n=s(1);t.a=function(e){return Object(n.jsx)("div",{className:"graphic",children:Object(n.jsx)(c.Line,{data:{labels:e.labels,datasets:[{label:e.title,data:e.wpm,backgroundColor:e.pointColor,fill:!1,lineTension:0,borderColor:e.lineColor,pointBorderColor:e.pointColor}]},height:400,width:1600,options:{maintainAspectRatio:!1,layout:{padding:5},scales:{xAxes:[{gridLines:{color:"#111825"},ticks:{display:!1}}],yAxes:[{gridLines:{color:"#111825"}}]}}})})}}}]);
//# sourceMappingURL=8.095ae15d.chunk.js.map