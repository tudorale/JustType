(this.webpackJsonpjusttype=this.webpackJsonpjusttype||[]).push([[14],{245:function(e,t,s){"use strict";s.r(t);var c=s(74),n=s(9),a=s(0),o=s.n(a),r=s(43),i=(s(21),s(42)),l=s(33),d=s(15),u=s(34),j=s(16),b=s(1),h=o.a.memo((function(e){var t,h=s(215),p=s(216),O=e.match.params.category;t="random"===O?"Random":"quotes"===O?"Quotes":"custom"===O?"Custom":O;var m=Object(a.useContext)(j.b),x=m.user,f=m.setUser,y=m.userData,g=m.setUserData,v=Object(a.useState)(5),w=Object(n.a)(v,2),M=w[0],N=w[1],S=Object(a.useState)(60),k=Object(n.a)(S,2),L=k[0],q=k[1],T=Object(a.useState)(""),W=Object(n.a)(T,2),C=W[0],I=W[1],P=Object(a.useState)(0),A=Object(n.a)(P,2),H=A[0],z=A[1],E=Object(a.useState)(0),R=Object(n.a)(E,2),B=R[0],D=R[1],Y=Object(a.useState)(0),U=Object(n.a)(Y,2),J=U[0],F=U[1],G=Object(a.useState)(1),Z=Object(n.a)(G,2),$=Z[0],K=Z[1],Q=Object(a.useState)(!1),V=Object(n.a)(Q,2),_=V[0],X=V[1],ee=Object(a.useState)(!1),te=Object(n.a)(ee,2),se=te[0],ce=te[1],ne=Object(a.useState)(0),ae=Object(n.a)(ne,2),oe=ae[0],re=ae[1],ie=Object(a.useState)(0),le=Object(n.a)(ie,2),de=le[0],ue=le[1],je=Object(a.useState)(0),be=Object(n.a)(je,2),he=be[0],pe=be[1],Oe=Object(a.useState)("Race finished, below you have your statistics."),me=Object(n.a)(Oe,2),xe=me[0],fe=me[1],ye=Object(a.useState)(""),ge=Object(n.a)(ye,2),ve=ge[0],we=ge[1],Me=Object(a.useState)("Loading..."),Ne=Object(n.a)(Me,2),Se=Ne[0],ke=Ne[1],Le=["You can use CTRL + Backspace (Win) to delete a whole word.","Try to type without looking at the keyboard, look at your screen, you will type faster!","Use your all 10 fingers when you type, you will type faster.","Is better to type correctly and a bit slower than wrong and faster.","If you have to type an uppercase letter use SHIFT + key instead of CapsLock.","Maintain a good and a comfortable position of your body.","Place your hands on the home row of the keyboard, hand placement is important.","Stretch your hands, shoulders, your neck and don't be tired, you will type easier.","Scan the text in advance with one or two words."],qe=Object(a.useState)({}),Te=Object(n.a)(qe,2),We=Te[0],Ce=Te[1],Ie=Object(a.useState)(""),Pe=Object(n.a)(Ie,2),Ae=Pe[0],He=Pe[1],ze=Object(a.useState)(""),Ee=Object(n.a)(ze,2),Re=Ee[0],Be=Ee[1];function De(e,t){return Math.floor(Math.random()*(t-e+1))+e}Object(a.useEffect)((function(){we(Le[Math.floor(9*Math.random())]),l.b.auth().onAuthStateChanged((function(e){var t=document.querySelector(".notLoggedIn");e?(f(e),l.a.collection("users").doc(e.uid).onSnapshot({includeMetadataChanges:!0},(function(e){g(e.data())})),"random"===O&&ke(h({exactly:De(20,25),join:" "})),"quotes"===O&&p.get("https://api.quotable.io/random").then((function(e){ke(e.data.content),Ce(e.data)})).catch((function(e){console.log("An error has occured: ",e)})),_||("custom"===O&&"Loading..."===Se?(ke("Waiting for text"),document.querySelector(".countdown").style.display="none",N(5)):Ye.current=setInterval((function(){N((function(e){return e-1}))}),1e3))):t&&(t.style.display="block")}))}),[]);var Ye=o.a.useRef(),Ue=o.a.useRef(),Je=o.a.useRef();Object(a.useEffect)((function(){0===M&&function(){if(clearInterval(Ye.current),"Loading..."!==Se){var e=document.querySelector(".testWrapper"),t=document.querySelector("#text"),s=document.querySelector(".countdown");e&&(e.style.opacity="1",e.style.filter="blur(0px)"),t&&(t.removeAttribute("disabled"),t.focus()),s&&(s.style.display="none"),Ue.current=setInterval((function(){q((function(e){return e-1}))}),1e3)}}()}),[M]),Object(a.useEffect)((function(){0===L&&(_e(),fe("Time's up, below you have your statistics"))}),[L]),Object(a.useEffect)((function(){_&&(Je.current=setInterval((function(){K((function(e){return e+1}))}),1e3))}),[_]);var Fe=0,Ge=new Date,Ze=Ge.getHours(),$e=Ge.getMinutes(),Ke=Ge.getFullYear(),Qe=Ge.getMonth()+1,Ve=Ge.getDate(),_e=function(){ce(!0),clearInterval(Je.current),clearInterval(Ue.current);var e=document.querySelector(".result"),t=document.querySelector(".neededWrapper"),s=document.querySelector("#text");if(!s)return null;s.blur(),s.setAttribute("disabled",""),s.setAttribute("readonly",""),s.setAttribute("maxlength","0"),e&&t&&(e.style.display="block",t.style.opacity="0.5",t.style.filter="blur(2px)");var c=document.querySelector(".testOver");c&&(c.style.display="block")};Object(a.useEffect)((function(){var e;z(function(e){var t=Se;return e.split("").filter((function(e,s){return e===t[s]})).length}(C)),re(Math.round(H/5/($/60))),ue(Math.round(H/$*60)),D(function(e){var t=Se;return e.split("").filter((function(e,s){return e!==t[s]})).length}(C)),e=C,se||e.length===Se.length&&_e()}),[C]),Object(a.useEffect)((function(){se&&("random"===O?(Fe=oe<=30?5:De(20,40),pe(Fe),l.a.collection("users").doc(x.uid).update({points:y.points+Fe,randomTests:Math.round(H/J*100)>=70?y.randomTests+1:y.randomTests,races:Math.round(H/J*100)>=70?y.races+1:y.races,lastWPM:Math.round(H/J*100)>=70?oe:y.lastWPM,bestWPM:Math.round(H/J*100)>=70&&oe>y.bestWPM?oe:y.bestWPM,randomHistory:Math.round(H/J*100)>=70?[].concat(Object(c.a)(y.randomHistory),[{wpm:oe,time:"".concat(Ze,":").concat($e," ").concat(Ve,"/").concat(Qe,"/").concat(Ke)}]):y.randomHistory})):"quotes"===O?(Fe=oe<=50?5:De(50,80),pe(Fe),l.a.collection("users").doc(x.uid).update({points:y.points+Fe,quotesTests:Math.round(H/J*100)>=70?y.quotesTests+1:y.quotesTests,races:Math.round(H/J*100)>=70?y.races+1:y.races,lastWPM:Math.round(H/J*100)>=70?oe:y.lastWPM,bestWPM:Math.round(H/J*100)>=70&&oe>y.bestWPM?oe:y.bestWPM,quotesHistory:Math.round(H/J*100)>=70?[].concat(Object(c.a)(y.quotesHistory),[{wpm:oe,time:"".concat(Ze,":").concat($e," ").concat(Ve,"/").concat(Qe,"/").concat(Ke)}]):y.quotesHistory})):"custom"===O&&(Fe=oe<=30?5:De(20,40),pe(Fe),l.a.collection("users").doc(x.uid).update({points:y.points+Fe,customTests:Math.round(H/J*100)>=70?y.customTests+1:y.customTests,races:Math.round(H/J*100)>=70?y.races+1:y.races,lastWPM:Math.round(H/J*100)>=70?oe:y.lastWPM,bestWPM:Math.round(H/J*100)>=70&&oe>y.bestWPM?oe:y.bestWPM,customHistory:Math.round(H/J*100)>=70?[].concat(Object(c.a)(y.customHistory),[{wpm:oe,time:"".concat(Ze,":").concat($e," ").concat(Ve,"/").concat(Qe,"/").concat(Ke)}]):y.customHistory})))}),[oe,se]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{title:"JustType - Test your speed"}),"random"===O||"quotes"===O||"custom"===O?Object(b.jsx)(b.Fragment,{children:x?Object(b.jsxs)("div",{className:"battleExtraWrapper",children:[Object(b.jsx)(i.a,{path:"/play",name:"Main"}),Object(b.jsxs)("div",{className:"battleWrapper",children:["custom"===O?Object(b.jsxs)("div",{className:"customText",children:[Object(b.jsx)("p",{children:"Enter your text below, make sure you follow the rules of characters; min = 100, max = 250."}),Object(b.jsx)("textarea",{onChange:function(e){He(e.target.value),Be("")},maxLength:250,minLength:150,id:"custom"}),Object(b.jsx)("button",{id:"btn",onClick:function(){var e=document.querySelector(".customText"),t=document.querySelector("#custom"),s=document.querySelector("#btn"),c=document.querySelector(".countdown");Ae.length>=100&&Ae.length<=250?/^[a-zA-Z0-9\.\,\;\?\'\"\(\)\!\$\-\& \s]*$/.test(Ae)?(ke(Ae),s.setAttribute("disabled",""),t.setAttribute("readonly",""),c.style.display="block",e.style.display="none",setTimeout((function(){Ye.current=setInterval((function(){N((function(e){return e-1}))}),1e3)}),500)):Be("You can only use lowercase, uppercase letters, numbers, punctuation and some symbols such as: () ? ! - $ & "):Be("The text length must be at least 100 characters and max 250 characters.")},children:"Go"}),Object(b.jsxs)("p",{className:"lengthText",children:[Ae.length,"/250"]}),Object(b.jsx)("p",{children:Re})]}):"",Object(b.jsx)("h1",{className:"countdown",children:M}),Object(b.jsxs)("div",{className:"testWrapper",children:[Object(b.jsxs)("div",{className:"neededWrapper",children:[Object(b.jsx)("div",{className:"quote",children:Se.split("").map((function(e,t){var s;return t<C.length&&(s=e===C[t]?"#7e41da":"red"," "===e&&C[t]!==e&&(e=C[t])),t===C.length?Object(b.jsx)("span",{className:"word",style:{color:s,fontWeight:700,textDecoration:"underline"},children:" "===e?"\xa0":e},t):Object(b.jsx)("span",{className:"word",style:{color:s},children:" "===e?"\xa0":e},t)}))}),Object(b.jsx)("input",{onPaste:function(e){return e.preventDefault()},onCopy:function(e){return e.preventDefault()},id:"text",maxLength:Se.length,onChange:function(e){se||(I(e.target.value),F((function(e){return e+1})),X(!0))},disabled:!0,type:"text",autoComplete:"off",placeholder:"Start typing the text above"}),Object(b.jsxs)("div",{className:"leftInfo",children:[Object(b.jsxs)("p",{className:"category",children:["Category: ",t]}),Object(b.jsxs)("p",{className:"features",children:["random"==O&&"Random words","quotes"==O&&"Lowercase, uppercase words, punctuation","custom"==O&&"Allowed lowercase, uppercase words, punctuation, symbols"]}),Object(b.jsxs)("p",{className:"account",children:["Account: ",x?x.displayName:"Loading...",","," ",y?y.points:"Loading"," Points,"," ",y?y.rank:"Loading..."]})]}),Object(b.jsxs)("div",{className:"rightInfo",children:[Object(b.jsx)("p",{className:"timeleft",children:L}),Object(b.jsx)("p",{className:"abandon",children:Object(b.jsx)(d.b,{to:"/play",children:"Abandon"})})]})]}),Object(b.jsxs)("p",{className:"randomTip",children:["Random Tip: ",ve]}),Object(b.jsxs)("div",{className:"testOver",children:[Object(b.jsx)("p",{children:"This test is over."}),Object(b.jsxs)("div",{className:"testOverButtons",children:[Object(b.jsxs)("button",{onClick:function(){window.location.reload()},children:["New test on ",t]}),Object(b.jsx)(d.b,{to:"/play",children:Object(b.jsx)("button",{children:"Go home"})})]})]}),Object(b.jsxs)("div",{className:"result",children:[Object(b.jsx)("h1",{children:xe}),Object(b.jsxs)("p",{className:"givenPoints",children:[Object(b.jsxs)("span",{children:["+",he]})," points. Total points:"," ",Object(b.jsx)("span",{children:y?y.points:"Calculating.."})]}),Object(b.jsx)("p",{className:"infoResult",children:5===he?"You have to get over \n                          ".concat("random"===O?"30":"","\n                          ").concat("quotes"===O?"50":"","\n                          ").concat("custom"===O?"30":"","\n                                                            \n                          WPM for this category to get the normal amount of points."):null}),Object(b.jsx)("p",{className:"notAllowed",children:Math.round(H/J*100)<70?"You have an accuracy that is less than 70%, your score will not be saved.":""}),Object(b.jsxs)("p",{children:["Category of the test: ",Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("p",{children:["WPM (Words Per Minute): ",Object(b.jsx)("span",{children:oe||"0"})]}),Object(b.jsxs)("p",{children:["CPM (Characters Per Minute):"," ",Object(b.jsx)("span",{children:de||"0"})]}),Object(b.jsxs)("p",{children:["Text typed in: ",Object(b.jsxs)("span",{children:[$," seconds"]})]}),Object(b.jsxs)("p",{children:["Time left: ",Object(b.jsxs)("span",{children:[L," seconds"]})]}),Object(b.jsxs)("p",{children:["Correct symbols: ",Object(b.jsx)("span",{children:H})]}),Object(b.jsxs)("p",{children:["Wrong symbols on text: ",Object(b.jsx)("span",{children:B})]}),Object(b.jsxs)("p",{children:["Accuracy:"," ",Object(b.jsxs)("span",{children:[Math.round(H/J*100)?Math.round(H/J*100):"0","%"]})]}),Object(b.jsxs)("p",{children:["Total keystrokes: ",Object(b.jsx)("span",{children:J})]}),Object(b.jsxs)("p",{children:["Text length: ",Object(b.jsx)("span",{children:Se.length})," characters (including spaces)"]}),Object(b.jsxs)("p",{children:["Unnecessary keystrokes:"," ",Object(b.jsx)("span",{children:J>Se.length?J-Se.length:"0"})]}),"quotes"===O?Object(b.jsxs)("p",{children:["A quote from: ",Object(b.jsx)("span",{children:We.author})]}):"",Object(b.jsx)("p",{style:{marginTop:"20px"},children:Object(b.jsx)(d.b,{to:"/info",children:"How we do it & Good to know"})})]})]})]})]}):Object(b.jsx)(r.a,{})}):Object(b.jsxs)("p",{className:"categoryNotExist",children:["This category (",O,") does not exist, sorry!"," ",Object(b.jsx)("a",{href:"/play",children:"Play"})]})]})}));t.default=h},33:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var c=s(38),n=(s(40),s(41),s(39),c.a.initializeApp({apiKey:"AIzaSyBPuJnN5gI3o_YZeVNlZwOky-7Y6LDGrTI",authDomain:"justtype-preview.firebaseapp.com",projectId:"justtype-preview",storageBucket:"justtype-preview.appspot.com",messagingSenderId:"648878251377",appId:"1:648878251377:web:e42775dc14919b1475ead0"})),a=c.a.firestore();t.b=n},34:function(e,t,s){"use strict";var c=s(36),n=s(1);t.a=function(e){return Object(n.jsxs)(c.b,{children:[Object(n.jsx)("title",{children:e.title}),Object(n.jsx)("style",{children:"\n                 body {\n                    background-color: #0e0b11;       \n                  }\n                "})]})}},42:function(e,t,s){"use strict";var c=s(9),n=s(0),a=(s(21),s(2)),o=s(15),r=s(33),i=s(35),l=s(16),d=s(1);t.a=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),u=s[0],j=s[1],b=Object(n.useContext)(l.b),h=b.user,p=b.setUser;Object(n.useEffect)((function(){var e=!0;return r.b.auth().onAuthStateChanged((function(t){t&&e&&p(t)})),function(){e=!1}}),[]),Object(n.useEffect)((function(){var e=!0;return h&&r.a.collection("users").doc(null===h||void 0===h?void 0:h.uid).onSnapshot({includeMetadataChanges:!0},(function(t){e&&j(t.data().notifications)})),function(){e=!1}}),[h]);var O=Object(a.f)(),m=!1,x=function(){r.b.auth().signOut(),O.push("/sign-in")},f=!1;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"effectLogged",onClick:function(){m=!1;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");e.style.display="none",t.style.opacity="0",t.style.zIndex="-2"}}),Object(d.jsxs)("div",{className:"navbarLogged",children:[Object(d.jsx)("h1",{className:"logoNavLogged",children:Object(d.jsxs)(i.a,{to:"/",children:["JustTyp",Object(d.jsx)("span",{})]})}),Object(d.jsxs)("div",{className:"navContent",children:[Object(d.jsx)("ul",{children:Object(d.jsx)(o.b,{to:e.path,children:Object(d.jsx)("li",{children:e.name})})}),Object(d.jsx)(o.b,{to:"/profile",children:Object(d.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(d.jsxs)("div",{className:"notifications",children:[Object(d.jsx)("div",{className:"notificationBox",onClick:function(){f=!f;var e=document.querySelector(".notificationsWrapper");f?(e.style.zIndex="900",e.style.opacity="1"):(e.style.zIndex="-100",e.style.opacity="0")},children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),Object(d.jsx)("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"})]})}),Object(d.jsxs)("div",{className:"notificationsWrapper",children:[Object(d.jsx)("h1",{children:"Notifications"}),u?u.map((function(e){return Object(d.jsxs)("div",{className:"notification",children:[Object(d.jsxs)("p",{className:"sender",children:[Object(d.jsx)("span",{children:"from"})," ",e.sender]}),Object(d.jsxs)("p",{className:"notificationMessage",children:[e.message," ",Object(d.jsxs)("span",{children:[" - ",e.time]})]})]},e.id)})):Object(d.jsx)("div",{className:"notificationSpinner"})]})]}),Object(d.jsxs)("button",{className:"navButtonLogged",onClick:x,children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign Out"})]}),Object(d.jsxs)("div",{className:"hamburgerLogged",onClick:function(){m=!m;var e=document.querySelector(".mobileNavLogged"),t=document.querySelector(".effectLogged");m?(e.style.display="block",t.style.opacity="0.5",t.style.zIndex="999"):(e.style.display="none",t.style.opacity="0",t.style.zIndex="-2")},children:[Object(d.jsx)("div",{className:"lineLogged  line1",children:" "}),Object(d.jsx)("div",{className:"lineLogged line2",children:" "}),Object(d.jsx)("div",{className:"lineLogged  line3",children:" "})]})]})]}),Object(d.jsxs)("div",{className:"mobileNavLogged",children:[Object(d.jsx)("h1",{className:"logoNavMobileLogged",children:Object(d.jsxs)(i.a,{to:"/",children:["JustTyp",Object(d.jsx)("span",{})]})}),Object(d.jsxs)("div",{className:"navContentMobile",children:[Object(d.jsx)("ul",{children:e.play?Object(d.jsx)("a",{href:e.path,children:e.name}):Object(d.jsx)(o.b,{to:e.path,children:Object(d.jsx)("li",{children:e.name})})}),Object(d.jsx)(o.b,{to:"/profile",children:Object(d.jsx)("img",{src:h?h.photoURL:"https://firebasestorage.googleapis.com/v0/b/justtype-preview.appspot.com/o/profileimage.jpg?alt=media&token=ff56cecc-ffce-42c5-8079-bcc806e70348",className:"profileImageMobile",alt:""})}),Object(d.jsxs)("button",{className:"navButtonMobileLogged",onClick:x,children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#6f32be",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),Object(d.jsx)("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),Object(d.jsx)("p",{children:"Sign Out"})]})]})]})]})}},43:function(e,t,s){"use strict";s(0),s(21);var c=s(15),n=s(1);t.a=function(){return Object(n.jsxs)("div",{className:"notLoggedIn",children:[Object(n.jsx)("p",{children:"You must be logged in to view this page"}),Object(n.jsx)(c.b,{to:"/sign-in",children:Object(n.jsx)("button",{children:"Sign In"})})]})}}}]);
//# sourceMappingURL=14.ef920935.chunk.js.map