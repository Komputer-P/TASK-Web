(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(16),a=n.n(s),r=(n(22),n(4)),i=(n(23),n(24),n(25),n(26),n(0)),l=function(e){var t=e.minutes,n=e.seconds;return Object(i.jsxs)("h1",{className:"timer_display",children:[t<10?"0":"",t,":",n<10?"0":"",n]})},j=function(e){var t=e.timeSet,n=e.pomoUpdate,o=Object(c.useRef)(null),s=!1,a=Object(c.useState)(0),j=Object(r.a)(a,2),d=j[0],u=j[1],p=Object(c.useState)(0),h=Object(r.a)(p,2),m=h[0],b=h[1],f=Object(c.useState)(t),O=Object(r.a)(f,2),x=O[0],v=O[1],g=Object(c.useState)(!1),S=Object(r.a)(g,2),y=S[0],N=S[1];function k(e){clearInterval(o);var c=Date.now()+1e3*e;o=setInterval((function(){var e=Math.round((c-Date.now())/1e3);if(e<0){clearInterval(o);var a=document.querySelector(".break_time_display");s?(s=!1,v(t),N(!1),u(Math.floor(x/60)),b(x%60),a.innerHTML=""):(s=!0,v(300),u(5),b(0),n(),a.innerHTML="\ud734\uc2dd \uc2dc\uac04!",k(300))}else u(Math.floor(e/60)),b(e%60)}),1e3)}return Object(c.useEffect)((function(){v(t)}),[t]),Object(c.useEffect)((function(){u(Math.floor(x/60)),b(x%60)}),[x]),Object(c.useEffect)((function(){return function(){return clearInterval(o)}}),[]),Object(i.jsxs)("div",{className:"timer",children:[Object(i.jsx)(l,{minutes:d,seconds:m}),Object(i.jsx)("h1",{className:"break_time_display"}),Object(i.jsx)("input",{className:"start_timer_button",type:"button",value:"\ud0c0\uc774\uba38 \uc2dc\uc791!",onClick:function(){k(x),N(!0)},disabled:y?"disabled":""})]})},d=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(1500),a=Object(r.a)(s,2),l=a[0],d=a[1],u=Object(c.useState)(!1),p=Object(r.a)(u,2),h=p[0],m=p[1],b=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),f=void 0===b?window.location.replace("http://tasko.today"):b.split("=")[1];return Object(c.useEffect)((function(){h||fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com/api/pomodoro",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(f)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Pomodoro \uc815\ubcf4 \uac00\uc838\uc634: ",e.timerSet,e.pomo),d(e.timerSet),o(e.pomo),m(!0)}))}),[h]),Object(i.jsxs)("div",{className:"timer_template component",children:[Object(i.jsx)("h1",{children:"\ubf40\ubaa8\ub3c4\ub85c!"}),Object(i.jsx)(j,{timeSet:l,pomoUpdate:function(){var e={userId:f,timerSet:l,pomo:n+1};fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com/api/pomodoro/update",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){o(e.pomo),console.log("Updated Pomo: ",e.pomo)}))}}),Object(i.jsxs)("h2",{className:"pomodoro_count",children:["\uc624\ub298\uc740 ",n," \ubf40\ubaa8\ub97c \ud588\uc5b4\uc694!"]}),Object(i.jsx)("p",{children:"1 \ud3ec\ubaa8 = 25\ubd84 \uc9d1\uc911, 5\ubd84 \ud734\uc2dd"}),Object(i.jsx)("p",{children:"4 \ud3ec\ubaa8 \ud6c4 30\ubd84 \ud734\uc2dd"})]})},u=n(10),p=n(2),h=(n(28),n(29),function(e){var t=e.darkTheme,n=e.onToggle;return Object(i.jsxs)("div",{className:"preference_component wrapper",children:[Object(i.jsx)("h3",{children:"\uae30\ubcf8 \uc124\uc815"}),Object(i.jsxs)("div",{className:"theme_toggle",children:[Object(i.jsx)("span",{className:"text",children:"\ub2e4\ud06c \ubaa8\ub4dc"}),Object(i.jsxs)("label",{className:"switch",children:[Object(i.jsx)("input",{type:"checkbox",checked:t,onChange:n}),Object(i.jsx)("span",{className:"slider"})]}),Object(i.jsx)("p",{children:"\ubc24\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\ub97c \ucf1c\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub824\uc694."})]})]})}),m=(n(30),function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(0),a=Object(r.a)(s,2),l=a[0],j=a[1],d=Object(c.useState)(0),u=Object(r.a)(d,2),p=u[0],h=u[1],m=Object(c.useState)(!1),b=Object(r.a)(m,2),f=b[0],O=b[1],x=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),v=void 0===x?window.location.replace("http://tasko.today"):x.split("=")[1];function g(){if(o(""),RegExp("[0-9][0-9]:[0-9][0-9]").test(n)){var e=n.split(":"),t=parseInt(e[0]),c=parseInt(e[1]),s={userId:v,timerSet:c+=60*t,pomo:p};fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com/api/pomodoro/update",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){j(e.timerSet),console.log("Updated TimerSet: ",e.timerSet)}))}else alert("\ud615\uc2dd\uc5d0 \ub9de\uac8c \uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!")}return Object(c.useEffect)((function(){f||fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com/api/pomodoro",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(v)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Pomodoro \uc815\ubcf4 \uac00\uc838\uc634: ",e.timerSet,e.pomo),j(e.timerSet),h(e.pomo),O(!0)}))}),[f]),Object(i.jsxs)("div",{className:"preference_component wrapper",children:[Object(i.jsx)("h3",{children:"\ud0c0\uc774\uba38 \uc124\uc815"}),Object(i.jsxs)("div",{className:"timer_set_form",children:[Object(i.jsx)("input",{className:"timer_set_text",type:"text",value:n,onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&g()},placeholder:"\ubd84 : \ucd08 "}),Object(i.jsx)("button",{className:"timer_set_submit",onClick:g,children:"\ubcc0\uacbd"})]}),Object(i.jsx)("p",{children:"\uc790\uc2e0\ub9cc\uc758 \ubf40\ubaa8\ub3c4\ub85c \ud0c0\uc774\uba38\ub97c \uc138\ud305\ud574\ubcf4\uc138\uc694."}),Object(i.jsxs)("p",{children:["\ud604\uc7ac \ud0c0\uc774\uba38 \uc138\ud305: ",Object(i.jsxs)("b",{className:"timer_set_display",children:[Math.floor(l/60)<10?"0"+Math.floor(l/60):Math.floor(l/60),":",l%60<10?"0"+l%60:l%60]})]})]})}),b=function(e){var t=e.darkTheme,n=e.onToggle;return Object(i.jsxs)("div",{className:"preference_template wrapper",children:[Object(i.jsx)("h1",{style:{fontSize:"3rem",marginBottom:"5%"},children:"\uc124\uc815"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(m,{})}),Object(i.jsx)("li",{children:Object(i.jsx)(h,{darkTheme:t,onToggle:n})})]})]})},f=(n(31),function(e){var t=e.userInfo;return Object(i.jsx)("nav",{className:"navigation",children:Object(i.jsxs)("ul",{className:"navigation-list",children:[Object(i.jsx)("li",{id:"logo",children:Object(i.jsx)("a",{href:"http://tasko.today/#/dashboard",target:"_blank",rel:"noreferrer",children:"\u03c0"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/",children:"\ubf40\ubaa8"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/preference",children:"\uc124\uc815"})}),Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsxs)("div",{className:"navigation-user-info",onClick:function(){document.querySelector(".user-info-dropdown").classList.toggle("show")},children:[Object(i.jsx)("img",{className:"navigation-user_picture",src:t.pictureUrl,alt:t.name}),Object(i.jsx)("span",{className:"navigation-user-name",children:t.name})]}),Object(i.jsx)("div",{className:"user-info-dropdown",children:Object(i.jsx)("p",{className:"logout",onClick:function(){document.cookie="userId= ; expires=Thu, 01 Jan 1999 00:00:10 GMT;",window.location.replace("http://tasko.today")},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})]})})}),O=(n(37),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"\u24d2 2021 Kevin.P, All rights reserved."})})});var x=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1];function s(){o(!n)}Object(c.useEffect)((function(){var e=document.querySelector("body"),t=document.querySelector(".navigation"),c=document.querySelector(".footer");n?(e.classList.add("dark"),t.classList.add("dark"),c.classList.add("dark")):(e.classList.remove("dark"),t.classList.remove("dark"),c.classList.remove("dark"))}),[n]);var a=Object(c.useState)(!1),l=Object(r.a)(a,2),j=l[0],h=l[1],m=Object(c.useState)(""),x=Object(r.a)(m,2),v=x[0],g=x[1],S=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),y=void 0===S?window.location.replace("http://tasko.today"):S.split("=")[1];return Object(c.useEffect)((function(){j||(fetch("http://ec2-3-36-251-188.ap-northeast-2.compute.amazonaws.com/api/user",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json()})).then((function(e){console.log("\uc720\uc800 \uc815\ubcf4 \uac00\uc838\uc634: ",{newUserInfo:e}),g(e)})),h(!0))}),[j]),Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(f,{userInfo:v}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(d,{})}}),Object(i.jsx)(p.a,{path:"/preference",render:function(){return Object(i.jsx)(b,{darkTheme:n,onToggle:s})}})]}),Object(i.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.e5e34b9e.chunk.js.map