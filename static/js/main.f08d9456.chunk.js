(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(15),a=n.n(o),r=(n(21),n(6)),i=(n(22),n(10)),l=n(2),d=(n(23),n(0)),j=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{children:"\u24d2 2021 Kevin.P, All rights reserved."})})};n(25);var h=function(e){var t=e.passUserInfo,n=Object(c.useState)([]),s=Object(r.a)(n,2),o=s[0],a=s[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),j=l[0],h=l[1],u=Object(c.useState)(!1),b=Object(r.a)(u,2),O=b[0],m=b[1],p=Object(c.useState)(""),f=Object(r.a)(p,2),x=f[0],g=f[1],v=Object(c.useState)(0),N=Object(r.a)(v,2),k=N[0],S=N[1],y=Object(c.useState)(0),w=Object(r.a)(y,2),T=w[0],I=w[1],_=Object(c.useState)(0),L=Object(r.a)(_,2),P=L[0],E=L[1],U=Object(c.useState)(0),B=Object(r.a)(U,2),C=B[0],J=B[1],q=Object(c.useState)({}),z=Object(r.a)(q,2),A=z[0],D=z[1],F=document.cookie.split("; ").find((function(e){return e.startsWith("idToken")})),K=void 0===F?window.location.replace("http://komputer-task.ml"):F.split("=")[1];return Object(c.useEffect)((function(){O||(fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/user",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(K)}).then((function(e){return e.json()})).then((function(e){console.log("\uc720\uc800 \uc815\ubcf4 \uac00\uc838\uc634: ",{newUserInfo:e}),g(e),t(e)})),fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/todos",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(K)}).then((function(e){return e.json()})).then((function(e){console.log("Todo Items: ",e),a(e)})),fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/pomodoro",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(K)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Pomodoro \uc815\ubcf4 \uac00\uc838\uc634: ",e.timerSet,e.pomo,e.maxPomo,e.totalPomo),h(e)})),m(!0))}),[O]),Object(c.useEffect)((function(){S(o.length),I(o.filter((function(e){return e.isDone})).length),function(){var e=j.timerSet;E(j.pomo),J(j.totalPomo),D({minutes:Math.floor(e/60),seconds:e%60})}()}),[o,j]),Object(d.jsxs)("div",{className:"dashboard",children:[Object(d.jsxs)("div",{className:"dashboard_user_info component",children:[Object(d.jsx)("img",{className:"user_picture",src:x.pictureUrl,alt:x.name}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{style:{display:"inline-block"},children:x.name}),Object(d.jsx)("span",{children:"\ub2d8\uc758 \ub300\uc2dc\ubcf4\ub4dc"}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("div",{className:"dashboard_content component",children:[Object(d.jsxs)("div",{className:"dashboard_daily_do",children:[Object(d.jsx)("a",{href:"./dailydo",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"daily_do_app_picture",children:"\uc624\ub298 \ud560 \uc77c"})}),Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:"\uc624\ub298 \ud560 \uc77c \ub2ec\uc131\ub960"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h1",{children:[0!==k?Math.round(T/k*100):"0","%"]})]})})]}),Object(d.jsxs)("div",{className:"dashboard_pomodoro",children:[Object(d.jsx)("a",{href:"./pomodoro",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"pomodoro_app_picture",children:"\ubf40\ubaa8\ub3c4\ub85c"})}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:"\ub098\uc758 \uc9d1\uc911\ub825"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h1",{children:isNaN(A.seconds)?"0\ubd840\ucd08":A.minutes+"\ubd84"+A.seconds+"\ucd08"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:"\uc624\ub298 \ud55c \ubf40\ubaa8"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h1",{children:[P," \ubf40\ubaa8"]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:"\uc9c0\uae08\uae4c\uc9c0 \ud55c \ucd1d \ubf40\ubaa8"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h1",{children:[C," \ubf40\ubaa8"]})]})]})]})]})]})},u=(n(26),function(e){var t=e.userInfo;return Object(d.jsx)("nav",{className:"navigation",children:Object(d.jsxs)("ul",{className:"navigation-list",children:[Object(d.jsx)("li",{id:"logo",children:"\u03c0"}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dashboard",children:"\ub300\uc2dc\ubcf4\ub4dc"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/preference",children:"\uc124\uc815"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsxs)("div",{className:"navigation-user-info",onClick:function(){document.querySelector(".user-info-dropdown").classList.toggle("show")},children:[Object(d.jsx)("img",{className:"navigation-user_picture",src:t.pictureUrl,alt:t.name}),Object(d.jsx)("span",{className:"navigation-user-name",children:t.name})]}),Object(d.jsx)("div",{className:"user-info-dropdown",children:Object(d.jsx)("p",{className:"logout",onClick:function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){console.log("User signed out."),window.location.replace("http://komputer-task.ml")}))},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})]})})});var b=function(e){var t=e.darkTheme,n=e.userInfo,s=e.passUserInfo;return Object(c.useEffect)((function(){var e=document.querySelector(".navigation");t?e.classList.add("dark"):e.classList.remove("dark")}),[t]),Object(d.jsxs)("div",{className:"navigation-dashboard_wrapper wrapper",children:[Object(d.jsx)(u,{userInfo:n}),Object(d.jsx)(h,{passUserInfo:s})]})},O=(n(35),function(e){var t=e.darkTheme,n=e.onToggle;return Object(d.jsxs)("div",{className:"preference component",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h3",{children:"\uae30\ubcf8 \uc124\uc815"}),Object(d.jsx)("p",{})]}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("ul",{className:"general",children:Object(d.jsxs)("li",{className:"theme",children:[Object(d.jsx)("span",{className:"text",children:"\ub2e4\ud06c \ubaa8\ub4dc"}),Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",checked:t,name:"theme",onChange:n}),Object(d.jsx)("span",{className:"slider round"})]}),Object(d.jsx)("p",{style:{color:"gray"},children:"\ubc24\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\ub97c \ucf1c\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub824\uc694."})]})})})]})});var m=function(e){var t=e.darkTheme,n=e.userInfo,s=e.handleThemeToggle;return Object(c.useEffect)((function(){var e=document.querySelector(".navigation");t?e.classList.add("dark"):e.classList.remove("dark")}),[t]),Object(d.jsxs)("div",{className:"navigation-preference-wrapper wrapper",children:[Object(d.jsx)(u,{userInfo:n}),Object(d.jsx)("h1",{style:{fontSize:"3rem",marginBottom:"10%"},children:"\uc124\uc815"}),Object(d.jsx)("div",{className:"preferences",children:Object(d.jsx)(O,{darkTheme:t,onToggle:s})})]})};n(36);var p=function(e){var t=e.history,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){!function(e,t,n){var c,s=e.getElementsByTagName(t)[0];e.getElementById(n)||((c=e.createElement(t)).id=n,c.src="https://apis.google.com/js/platform.js?onload=googleSDKLoaded",s.parentNode.insertBefore(c,s))}(document,"script","google-jssdk"),window.googleSDKLoaded=function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"855394650411-buaopph1kokclaq6l9i8tirma6u2svf0.apps.googleusercontent.com"}).attachClickHandler(n.current,{},(function(e){!function(e){var n=e.getAuthResponse().id_token,c=3600;localStorage.setItem("idToken",n),document.cookie="idToken=".concat(n,"; max-age=").concat(c," path=/"),fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com:8080/api/google/tokensignin",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("Signed in as: "+e),t.push("/dashboard")}))}(e)}),(function(e){!function(e){alert(JSON.stringify(e,void 0,2))}(e)}))}))}}),[]),Object(d.jsxs)("div",{className:"login-wrapper component",children:[Object(d.jsxs)("div",{className:"information",children:[Object(d.jsx)("h1",{id:"logo",children:"TASK"}),Object(d.jsx)("p",{children:"\uc77c\uc815/\uc2dc\uac04 \uad00\ub9ac \uc11c\ube44\uc2a4"})]}),Object(d.jsxs)("div",{ref:n,id:"customBtn",className:"customGPlusSignIn",children:[Object(d.jsx)("span",{className:"icon"}),Object(d.jsx)("span",{className:"buttonText",children:"\uad6c\uae00 \ub85c\uadf8\uc778"})]})]})};var f=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];function o(){s(!n)}Object(c.useEffect)((function(){var e=document.querySelector("body"),t=document.querySelector(".footer");n?(e.classList.add("dark"),t.classList.add("dark")):(e.classList.remove("dark"),t.classList.remove("dark"))}),[n]);var a=Object(c.useState)(""),h=Object(r.a)(a,2),u=h[0],O=h[1];function f(e){O(e)}return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0,component:p}),Object(d.jsx)(l.a,{path:"/dashboard",render:function(){return Object(d.jsx)(b,{darkTheme:n,userInfo:u,passUserInfo:f})}}),Object(d.jsx)(l.a,{path:"/preference",render:function(){return Object(d.jsx)(m,{darkTheme:n,userInfo:u,handleThemeToggle:o})}})]}),Object(d.jsx)(j,{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),x()}},[[37,1,2]]]);
//# sourceMappingURL=main.f08d9456.chunk.js.map