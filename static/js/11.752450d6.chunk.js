(this.webpackJsonptypinghub=this.webpackJsonptypinghub||[]).push([[11],{259:function(e,t,s){"use strict";s.r(t);var n=s(8),c=s(0),a=(s(22),s(42)),i=s(35),o=s(48),r=s(43),l=s(36),j=s(68),d=s(16),b=s(99),u=s.n(b),h=s(1);t.default=function(e){var t=s(34),b=e.match.params.username,p=Object(c.useState)(""),g=Object(n.a)(p,2),O=g[0],m=g[1],x=Object(c.useState)(!1),f=Object(n.a)(x,2),v=f[0],y=f[1],N=Object(c.useContext)(d.b),w=N.user,k=N.setUser,M=N.userData,L=N.setUserData,S=Object(c.useState)([]),C=Object(n.a)(S,2),P=C[0],I=C[1],T=Object(c.useState)([]),W=Object(n.a)(T,2),q=W[0],H=W[1],z=Object(c.useState)([]),A=Object(n.a)(z,2),U=A[0],B=A[1],D=Object(c.useState)([]),R=Object(n.a)(D,2),E=R[0],Y=R[1],F=Object(c.useState)([]),J=Object(n.a)(F,2),G=J[0],K=J[1],Z=Object(c.useState)([]),Q=Object(n.a)(Z,2),V=Q[0],_=Q[1],X=[];return Object(c.useEffect)((function(){var e=document.querySelector(".userPageSpinner"),t=document.querySelector(".notLoggedIn");return y(!1),i.b.auth().onAuthStateChanged((function(s){s?(k(s),e.style.display="none",i.a.collection("users").get().then((function(e){e.forEach((function(e){X.push(e.data().username)}))})).then((function(){X.includes(b)?i.a.collection("users").where("username","==",b).get().then((function(e){y(!0),e.forEach((function(e){L(e.data()),m(""),I(e.data().randomHistory.map((function(e){return e.wpm}))),H(e.data().quotesHistory.map((function(e){return e.wpm}))),B(e.data().customHistory.map((function(e){return e.wpm}))),Y(e.data().randomHistory.map((function(e){return e.time}))),K(e.data().quotesHistory.map((function(e){return e.time}))),_(e.data().customHistory.map((function(e){return e.time})))}))})):m("This user does not exist or his/her account might have been deleted or the username was changed.")}))):(t.style.display="block",e.style.display="none")})),function(){return y(!1)}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a,{title:"".concat(t.name," | ").concat(v&&b?b:"User"," page")}),w?Object(h.jsxs)("div",{className:"userPageWrapper",children:[Object(h.jsx)(a.a,{path:"/play",name:"Main"}),Object(h.jsxs)("div",{className:"userPageContent",children:[Object(h.jsx)("p",{className:"userPageStatus",children:O}),v&&M?Object(h.jsxs)("div",{className:"userPageGrid",children:[Object(h.jsxs)("div",{className:"userSectionOne",children:[Object(h.jsx)("img",{src:M.profileImage,alt:""}),Object(h.jsxs)("div",{className:"userPageInfo",children:[Object(h.jsxs)("h1",{children:[M.username,M.pro?Object(h.jsx)("img",{src:o.a}):null,Object(h.jsx)("span",{children:M.typingHubID})]}),Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{className:"userPageDescription",children:M.description})}),Object(h.jsx)("p",{className:"userPagePoints",children:"".concat(M.points," Points (").concat(M.rank,")")})]})]}),Object(h.jsxs)("div",{className:"userSectionTwo",children:[Object(h.jsx)("h1",{children:"Public info"}),Object(h.jsxs)("p",{children:["Points: ",Object(h.jsx)("span",{children:"".concat(M.points)})]}),Object(h.jsxs)("p",{children:["Keyboard Layout: ",Object(h.jsx)("span",{children:M.keyboardLayout})]}),Object(h.jsxs)("p",{children:["Best: ",Object(h.jsxs)("span",{children:[M.bestWPM," WPM"]})]}),Object(h.jsxs)("p",{children:["Last test: ",Object(h.jsxs)("span",{children:[M.lastWPM," WPM"]})]}),Object(h.jsxs)("p",{children:["Tests: ",Object(h.jsx)("span",{children:M.races})]}),Object(h.jsxs)("p",{children:["Tests on random category:"," ",Object(h.jsx)("span",{children:M.randomTests})]}),Object(h.jsxs)("p",{children:["Tests on quotes category:"," ",Object(h.jsx)("span",{children:M.quotesTests})]}),Object(h.jsxs)("p",{children:["Tests on custom category:"," ",Object(h.jsx)("span",{children:M.customTests})]}),Object(h.jsxs)("p",{children:["Account created on:"," ",Object(h.jsx)("span",{children:"".concat(M.timestamp.toDate().getDate(),"/").concat(M.timestamp.toDate().getMonth()+1,"/").concat(M.timestamp.toDate().getFullYear())})]}),Object(h.jsx)("h1",{style:{marginTop:"25px"},children:"Public statistics"}),Object(h.jsxs)("p",{children:["Average WPM on random category:"," ",Object(h.jsx)("span",{children:P.length>=2?Math.floor(P.reduce((function(e,t){return Math.floor(e+t)}))/P.length):"Unavailable"})]}),Object(h.jsxs)("p",{children:["Average WPM on quotes category:"," ",Object(h.jsx)("span",{children:q.length>=2?Math.floor(q.reduce((function(e,t){return Math.floor(e+t)}))/q.length):"Unavailable"})]}),Object(h.jsxs)("p",{children:["Average WPM on custom category:"," ",Object(h.jsx)("span",{children:U.length>=2?Math.floor(U.reduce((function(e,t){return Math.floor(e+t)}))/U.length):"Unavailable"})]}),P.length>=2&&q.length>=2?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{labels:E,wpm:P,title:"WPM on Random Category",lineColor:"#5c17c4",pointColor:"#20e6b4"}),Object(h.jsx)(j.a,{labels:G,wpm:q,title:"WPM on Quotes Category",lineColor:"#226be0",pointColor:"#d91ccc"}),U.length>=2?Object(h.jsx)(j.a,{labels:V,wpm:U,title:"WPM on Custom Category",lineColor:"#5ce820",pointColor:"#e82077"}):Object(h.jsx)("p",{style:{marginTop:"30px"},children:'This user didn\'t play enough in the "custom" category to unlock the statistics.'})]}):Object(h.jsx)("p",{className:"restriction",children:"This user did not play enough to unlock the statistics."})]})]}):""===O?Object(h.jsx)("div",{className:"userPageSpinnerTwo"}):null]})]}):Object(h.jsx)(r.a,{}),Object(h.jsx)("div",{className:"userPageSpinner"})]})}},34:function(e){e.exports=JSON.parse('{"name":"TypingHub","profileURL":"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348"}')},35:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(40),c=(s(44),s(45),s(41),n.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),a=n.a.firestore();t.b=c},36:function(e,t,s){"use strict";var n=s(38),c=s(1);t.a=function(e){return Object(c.jsxs)(n.b,{children:[Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("style",{children:"\n                 body {\n                    background-color: #0b101b;       \n                  }\n                "})]})}},42:function(e,t,s){"use strict";var n=s(8),c=s(0),a=(s(22),s(2)),i=s(15),o=s(35),r=s(37),l=s(16),j=s(1);t.a=function(e){var t=Object(c.useState)(""),s=Object(n.a)(t,2),d=s[0],b=s[1],u=Object(c.useContext)(l.b),h=u.user,p=u.setUser;Object(c.useEffect)((function(){var e=!0;return o.b.auth().onAuthStateChanged((function(t){t&&e&&p(t)})),function(){e=!1}}),[]),Object(c.useEffect)((function(){var e=!0;return h&&o.a.collection("notifications").doc("global").onSnapshot({includeMetadataChanges:!0},(function(t){e&&b(t.data().wrapper)})),function(){e=!1}}),[h]);var g=Object(a.f)(),O=!1,m=function(){o.b.auth().signOut(),g.push("/sign-in")},x=!1;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"effectLogged",onClick:function(){O=!1;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");e.style.display="none",t.style.opacity="0",t.style.zIndex="-2"}}),Object(j.jsxs)("div",{className:"navbarLogged",children:[Object(j.jsx)("h1",{className:"logoNavLogged",children:Object(j.jsxs)(r.a,{to:"/",children:["TypingHu",Object(j.jsx)("span",{})]})}),Object(j.jsxs)("div",{className:"navContent",children:[Object(j.jsx)("ul",{children:Object(j.jsx)(i.b,{to:e.path,children:Object(j.jsx)("li",{children:e.name})})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(j.jsxs)("div",{className:"notifications",children:[Object(j.jsx)("div",{className:"notificationBox",onClick:function(){x=!x;var e=document.querySelector(".notificationsWrapper");x?(e.style.zIndex="900",e.style.opacity="1"):(e.style.zIndex="-100",e.style.opacity="0")},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),Object(j.jsx)("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"})]})}),Object(j.jsxs)("div",{className:"notificationsWrapper",children:[Object(j.jsx)("h1",{children:"Notifications"}),d?d.length>=1?d.map((function(e){return Object(j.jsxs)("div",{className:"notification",children:[Object(j.jsxs)("p",{className:"sender",children:[Object(j.jsx)("span",{children:"from"})," ",e.sender]}),Object(j.jsxs)("p",{className:"notificationMessage",children:[e.message," ",Object(j.jsxs)("span",{children:[" - ",e.time]})]})]},e.id)})):Object(j.jsx)("p",{className:"zeroNotifications",children:"You have zero notifications!"}):Object(j.jsx)("div",{className:"notificationSpinner"})]})]}),Object(j.jsxs)("button",{className:"navButtonLogged",onClick:m,children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(j.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(j.jsx)("p",{children:"Sign Out"})]}),Object(j.jsxs)("div",{className:"hamburgerLogged",onClick:function(){O=!O;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");O?(e.style.display="block",t.style.opacity="0.5",t.style.zIndex="999"):(e.style.display="none",t.style.opacity="0",t.style.zIndex="-2")},children:[Object(j.jsx)("div",{className:"lineLogged  line1",children:" "}),Object(j.jsx)("div",{className:"lineLogged line2",children:" "}),Object(j.jsx)("div",{className:"lineLogged  line3",children:" "})]})]})]}),Object(j.jsxs)("div",{className:"mobileNavLogged",children:[Object(j.jsx)("h1",{className:"logoNavMobileLogged",children:Object(j.jsxs)(r.a,{to:"/",children:["TypingHu",Object(j.jsx)("span",{})]})}),Object(j.jsxs)("div",{className:"navContentMobile",children:[Object(j.jsx)("ul",{children:e.play?Object(j.jsx)("a",{href:e.path,children:e.name}):Object(j.jsx)(i.b,{to:e.path,children:Object(j.jsx)("li",{children:e.name})})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(j.jsxs)("button",{className:"navButtonMobileLogged",onClick:m,children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(j.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(j.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(j.jsx)("p",{children:"Sign Out"})]})]})]})]})}},43:function(e,t,s){"use strict";s(0),s(22);var n=s(15),c=s(1);t.a=function(e){return Object(c.jsxs)("div",{className:"notLoggedIn",children:[Object(c.jsx)("p",{children:e.adminRequest?"You need to be an admin to view this page":"We are so sorry but you must be logged in to view this page"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(n.b,{to:"/sign-in",children:Object(c.jsx)("button",{children:"Sign In"})}),Object(c.jsx)(n.b,{to:"/sign-up",children:Object(c.jsx)("button",{children:"Sign Up"})})]})]})}},48:function(e,t,s){"use strict";t.a=s.p+"static/media/pro.3e24b768.jpg"},68:function(e,t,s){"use strict";s(0);var n=s(83),c=s(1);t.a=function(e){return Object(c.jsx)("div",{className:"graphic",children:Object(c.jsx)(n.Line,{data:{labels:e.labels,datasets:[{label:e.title,data:e.wpm,backgroundColor:e.pointColor,fill:!1,lineTension:0,borderColor:e.lineColor,pointBorderColor:e.pointColor}]},height:400,width:1600,options:{maintainAspectRatio:!1,layout:{padding:5},scales:{xAxes:[{gridLines:{color:"#111825"},ticks:{display:!1}}],yAxes:[{gridLines:{color:"#111825"}}]}}})})}}}]);
//# sourceMappingURL=11.752450d6.chunk.js.map