(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(16),r=n.n(s),i=(n(22),n(4)),a=(n(23),n(24),n(25),n(26),n(0)),l=function(e){var t=e.minutes,n=e.seconds;return Object(a.jsxs)("h1",{className:"timer_display",children:[t<10?"0":"",t,":",n<10?"0":"",n]})},j=function(e){var t=e.timeSet,n=e.pomoUpdate,o=Object(c.useRef)(null),s=!1,r=Object(c.useState)(0),j=Object(i.a)(r,2),d=j[0],u=j[1],b=Object(c.useState)(0),h=Object(i.a)(b,2),m=h[0],p=h[1],f=Object(c.useState)(t),O=Object(i.a)(f,2),x=O[0],v=O[1],g=Object(c.useState)(!1),S=Object(i.a)(g,2),y=S[0],N=S[1];function k(e){clearInterval(o);var c=Date.now()+1e3*e;o=setInterval((function(){var e=Math.round((c-Date.now())/1e3);if(e<0){clearInterval(o);var r=document.querySelector(".break_time_display");s?(s=!1,v(t),N(!1),u(Math.floor(x/60)),p(x%60),r.innerHTML=""):(s=!0,v(300),u(5),p(0),n(),r.innerHTML="\ud734\uc2dd \uc2dc\uac04!",k(300))}else u(Math.floor(e/60)),p(e%60)}),1e3)}return Object(c.useEffect)((function(){v(t)}),[t]),Object(c.useEffect)((function(){u(Math.floor(x/60)),p(x%60)}),[x]),Object(c.useEffect)((function(){return function(){return clearInterval(o)}}),[]),Object(a.jsxs)("div",{className:"timer",children:[Object(a.jsx)(l,{minutes:d,seconds:m}),Object(a.jsx)("h1",{className:"break_time_display"}),Object(a.jsx)("input",{className:"start_timer_button",type:"button",value:"\ud0c0\uc774\uba38 \uc2dc\uc791!",onClick:function(){k(x),N(!0)},disabled:y?"disabled":""})]})},d="http://tasko.today",u="http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com",b=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(1500),r=Object(i.a)(s,2),l=r[0],b=r[1],h=Object(c.useState)(!1),m=Object(i.a)(h,2),p=m[0],f=m[1],O=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),x=void 0===O?window.location.replace(d):O.split("=")[1];return Object(c.useEffect)((function(){p||fetch("".concat(u,"/api/pomodoro"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(x)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Pomodoro \uc815\ubcf4 \uac00\uc838\uc634: ",e.timerSet,e.pomo),b(e.timerSet),o(e.pomo),f(!0)}))}),[p]),Object(a.jsxs)("div",{className:"timer_template component",children:[Object(a.jsx)("h1",{children:"\ubf40\ubaa8\ub3c4\ub85c!"}),Object(a.jsx)(j,{timeSet:l,pomoUpdate:function(){var e={userId:x,timerSet:l,pomo:n+1};fetch("".concat(u,"/api/pomodoro/update"),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){o(e.pomo),console.log("Updated Pomo: ",e.pomo)}))}}),Object(a.jsxs)("h2",{className:"pomodoro_count",children:["\uc624\ub298\uc740 ",n," \ubf40\ubaa8\ub97c \ud588\uc5b4\uc694!"]}),Object(a.jsx)("p",{children:"1 \ud3ec\ubaa8 = 25\ubd84 \uc9d1\uc911, 5\ubd84 \ud734\uc2dd"}),Object(a.jsx)("p",{children:"4 \ud3ec\ubaa8 \ud6c4 30\ubd84 \ud734\uc2dd"})]})},h=n(10),m=n(2),p=(n(28),n(29),function(e){var t=e.darkTheme,n=e.onToggle;return Object(a.jsxs)("div",{className:"preference_component wrapper",children:[Object(a.jsx)("h3",{children:"\uae30\ubcf8 \uc124\uc815"}),Object(a.jsxs)("div",{className:"theme_toggle",children:[Object(a.jsx)("span",{className:"text",children:"\ub2e4\ud06c \ubaa8\ub4dc"}),Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",checked:t,onChange:n}),Object(a.jsx)("span",{className:"slider"})]}),Object(a.jsx)("p",{children:"\ubc24\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\ub97c \ucf1c\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub824\uc694."})]})]})}),f=(n(30),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(0),r=Object(i.a)(s,2),l=r[0],j=r[1],b=Object(c.useState)(0),h=Object(i.a)(b,2),m=h[0],p=h[1],f=Object(c.useState)(!1),O=Object(i.a)(f,2),x=O[0],v=O[1],g=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),S=void 0===g?window.location.replace(d):g.split("=")[1];function y(){if(o(""),RegExp("[0-9][0-9]:[0-9][0-9]").test(n)){var e=n.split(":"),t=parseInt(e[0]),c=parseInt(e[1]),s={userId:S,timerSet:c+=60*t,pomo:m};fetch("".concat(u,"/api/pomodoro/update"),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){j(e.timerSet),console.log("Updated TimerSet: ",e.timerSet)}))}else alert("\ud615\uc2dd\uc5d0 \ub9de\uac8c \uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!")}return Object(c.useEffect)((function(){x||fetch("".concat(u,"/api/pomodoro"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(S)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Pomodoro \uc815\ubcf4 \uac00\uc838\uc634: ",e.timerSet,e.pomo),j(e.timerSet),p(e.pomo),v(!0)}))}),[x]),Object(a.jsxs)("div",{className:"preference_component wrapper",children:[Object(a.jsx)("h3",{children:"\ud0c0\uc774\uba38 \uc124\uc815"}),Object(a.jsxs)("div",{className:"timer_set_form",children:[Object(a.jsx)("input",{className:"timer_set_text",type:"text",value:n,onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&y()},placeholder:"\ubd84 : \ucd08 "}),Object(a.jsx)("button",{className:"timer_set_submit",onClick:y,children:"\ubcc0\uacbd"})]}),Object(a.jsx)("p",{children:"\uc790\uc2e0\ub9cc\uc758 \ubf40\ubaa8\ub3c4\ub85c \ud0c0\uc774\uba38\ub97c \uc138\ud305\ud574\ubcf4\uc138\uc694."}),Object(a.jsxs)("p",{children:["\ud604\uc7ac \ud0c0\uc774\uba38 \uc138\ud305: ",Object(a.jsxs)("b",{className:"timer_set_display",children:[Math.floor(l/60)<10?"0"+Math.floor(l/60):Math.floor(l/60),":",l%60<10?"0"+l%60:l%60]})]})]})}),O=function(e){var t=e.darkTheme,n=e.onToggle;return Object(a.jsxs)("div",{className:"preference_template wrapper",children:[Object(a.jsx)("h1",{style:{fontSize:"3rem",marginBottom:"5%"},children:"\uc124\uc815"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(f,{})}),Object(a.jsx)("li",{children:Object(a.jsx)(p,{darkTheme:t,onToggle:n})})]})]})},x=(n(31),function(e){var t=e.userInfo;return Object(a.jsx)("nav",{className:"navigation",children:Object(a.jsxs)("ul",{className:"navigation-list",children:[Object(a.jsx)("li",{id:"logo",children:Object(a.jsx)("a",{href:d+"/#/dashboard",target:"_blank",rel:"noreferrer",children:"\u03c0"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/",children:"\ubf40\ubaa8"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/preference",children:"\uc124\uc815"})}),Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsxs)("div",{className:"navigation-user-info",onClick:function(){document.querySelector(".user-info-dropdown").classList.toggle("show")},children:[Object(a.jsx)("img",{className:"navigation-user_picture",src:t.pictureUrl,alt:t.name}),Object(a.jsx)("span",{className:"navigation-user-name",children:t.name})]}),Object(a.jsx)("div",{className:"user-info-dropdown",children:Object(a.jsx)("p",{className:"logout",onClick:function(){document.cookie="userId= ; expires=Thu, 01 Jan 1999 00:00:10 GMT;",window.location.replace(d)},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})]})})}),v=(n(37),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{children:"\u24d2 2021 Kevin.P, All rights reserved."})})});var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];function s(){o(!n)}Object(c.useEffect)((function(){var e=document.querySelector("body"),t=document.querySelector(".navigation"),c=document.querySelector(".footer");n?(e.classList.add("dark"),t.classList.add("dark"),c.classList.add("dark")):(e.classList.remove("dark"),t.classList.remove("dark"),c.classList.remove("dark"))}),[n]);var r=Object(c.useState)(!1),l=Object(i.a)(r,2),j=l[0],p=l[1],f=Object(c.useState)(""),g=Object(i.a)(f,2),S=g[0],y=g[1],N=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),k=void 0===N?window.location.replace(d):N.split("=")[1];return Object(c.useEffect)((function(){j||(fetch("".concat(u,"/api/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(k)}).then((function(e){return e.json()})).then((function(e){console.log("\uc720\uc800 \uc815\ubcf4 \uac00\uc838\uc634: ",{newUserInfo:e}),y(e)})),p(!0))}),[j]),Object(a.jsx)(h.a,{children:Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(x,{userInfo:S}),Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)(b,{})}}),Object(a.jsx)(m.a,{path:"/preference",render:function(){return Object(a.jsx)(O,{darkTheme:n,onToggle:s})}})]}),Object(a.jsx)(v,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.56fe174c.chunk.js.map