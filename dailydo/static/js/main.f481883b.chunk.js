(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(20),s=n.n(a),r=(n(26),n(4)),i=(n(27),n(0)),d=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("p",{children:"\u24d2 2021 Kevin.P, All rights reserved."})})},l=n(13),j=(n(29),"http://tasko.link"),u="http://121.130.91.176:10000",h=function(e){var t=e.userInfo;return Object(i.jsx)("nav",{className:"navigation",children:Object(i.jsxs)("ul",{className:"navigation-list",children:[Object(i.jsx)("li",{id:"logo",children:Object(i.jsx)("a",{href:j+"/#/dashboard",target:"_blank",rel:"noreferrer",children:"\u03c0"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",children:"\ud560\uc77c"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/preference",children:"\uc124\uc815"})}),Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsxs)("div",{className:"navigation-user-info",onClick:function(){document.querySelector(".user-info-dropdown").classList.toggle("show")},children:[Object(i.jsx)("img",{className:"navigation-user_picture",src:t.pictureUrl,alt:t.name}),Object(i.jsx)("span",{className:"navigation-user-name",children:t.name})]}),Object(i.jsx)("div",{className:"user-info-dropdown",children:Object(i.jsx)("p",{className:"logout",onClick:function(){document.cookie="userId= ; expires=Thu, 01 Jan 1999 00:00:10 GMT;",window.location.replace(j)},children:"\ub85c\uadf8\uc544\uc6c3"})})]})})]})})},f=n(10),b=n(8),p=(n(35),function(e){var t=e.id,n=e.content,c=e.onRemove,o=e.onChange;return Object(i.jsxs)("li",{className:"daydo-item",children:[Object(i.jsx)("input",{type:"text",className:"todo-content",value:n,onChange:function(e){o(e,t)}}),Object(i.jsx)("span",{className:"remove-item",onClick:function(e){e.stopPropagation(),c(t)},children:"\xd7"})]})}),O=(n(36),function(e){var t,n=e.day,c=e.daydoList,o=e.onRemove,a=e.onChange,s=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][n]+"\uc694\uc77c";return t=c?0===c.length?Object(i.jsxs)("div",{className:"daydo-empty-list",children:[s,"\ub9c8\ub2e4 \ud560 \uc77c\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694!"]}):c.map((function(e){var t=e.id,n=e.content;return Object(i.jsx)(p,{id:t,content:n,onRemove:o,onChange:a},t)})):Object(i.jsx)("p",{children:"\ub85c\ub529\uc911..."}),Object(i.jsx)("ul",{className:"todo-list-wrapper",children:t})}),m=(n(37),function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeyPress;return Object(i.jsxs)("div",{className:"daydo-form",children:[Object(i.jsx)("span",{children:"+"}),Object(i.jsx)("input",{type:"text",value:t,onChange:n,onKeyPress:o,placeholder:"\ud560 \uc77c \uc801\uae30"}),Object(i.jsx)("button",{onClick:c,children:"\ucd94\uac00"})]})}),x=(n(38),n(39),function(e){var t=e.day,n=e.onSlide,c=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][t]+"\uc694\uc77c";return Object(i.jsxs)("div",{className:"daydo-title",children:[Object(i.jsx)("h2",{className:"left",onClick:n,children:"<"}),Object(i.jsx)("h2",{children:c}),Object(i.jsx)("h2",{className:"right",onClick:n,children:">"})]})}),v=function(e){var t=e.darkTheme,n=new Date,o=Object(c.useState)([]),a=Object(r.a)(o,2),s=a[0],d=a[1],l=Object(c.useState)([]),h=Object(r.a)(l,2),p=h[0],v=h[1],g=Object(c.useState)(""),y=Object(r.a)(g,2),N=y[0],k=y[1],T=Object(c.useState)(!1),S=Object(r.a)(T,2),w=S[0],C=S[1],D=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),L=void 0===D?window.location.replace(j):D.split("=")[1],I=Object(c.useState)(0===n.getDay()?7:n.getDay()),E=Object(r.a)(I,2),P=E[0],J=E[1];function R(){k("");var e={userId:L,content:N,day:P};fetch("".concat(u,"/api/daydo"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("\uc0c8 Todo \uc544\uc774\ud15c \uc0dd\uc131\ub428: ",e),v([].concat(Object(b.a)(p),[e])),C(!1)}))}return Object(c.useEffect)((function(){console.log();var e=document.querySelectorAll("input");t?e.forEach((function(e){return e.classList.add("dark")})):e.forEach((function(e){return e.classList.remove("dark")}))})),Object(c.useEffect)((function(){w||fetch("".concat(u,"/api/daydos"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(L)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 \ubaa8\ub4e0 \uc694\uc77c\ubcc4 Daydo \ubaa9\ub85d \uac00\uc838\uc634: ",e),C(!0),d(e)}));var e=s.filter((function(e){return e.day===P}));v(e)}),[w,s,P]),Object(i.jsxs)("div",{className:"template-wrapper daydo-list-template-wrapper",children:[Object(i.jsx)("div",{className:"daydo-title-wrapper",children:Object(i.jsx)(x,{day:P,onSlide:function(e){"right"===e.target.className?J(7===P?1:P+1):J(1===P?7:P-1)}})}),Object(i.jsx)("p",{}),Object(i.jsx)("div",{className:"daydo-list-wrapper",children:Object(i.jsx)(O,{day:P,daydoList:p,onRemove:function(e){var t=p.filter((function(t){return t.id!==e})),n=s.filter((function(t){return t.id!==e}));fetch("".concat(u,"/api/daydo/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc0ad\uc81c\ub428")})),v(t),d(n)},onChange:function(e,t){var n=p.findIndex((function(e){return e.id===t})),c=p[n];c.content=e.target.value,fetch("".concat(u,"/api/daydo/").concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var o=Object(b.a)(p);o[n]=Object(f.a)({},c);var a=s.findIndex((function(e){return e.id===t})),r=Object(b.a)(s);r[a]=Object(f.a)({},c),v(o),d(r)}})}),Object(i.jsx)("div",{className:"daydo-form-wrapper",children:Object(i.jsx)(m,{value:N,onChange:function(e){k(e.target.value)},onCreate:R,onKeyPress:function(e){"Enter"===e.key&&R()}})})]})},g=(n(40),function(e){var t=e.darkTheme,n=e.onToggle;return Object(i.jsxs)("div",{className:"template-wrapper preference-template-wrapper",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{children:"\uae30\ubcf8 \uc124\uc815"}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("ul",{className:"general",children:Object(i.jsxs)("li",{className:"theme",children:[Object(i.jsx)("span",{className:"text",children:"\ub2e4\ud06c \ubaa8\ub4dc"}),Object(i.jsxs)("label",{className:"switch",children:[Object(i.jsx)("input",{type:"checkbox",checked:t,name:"theme",onChange:n}),Object(i.jsx)("span",{className:"slider round"})]}),Object(i.jsx)("p",{style:{color:"gray",border:"none",width:"100%",marginTop:"5%"},children:"\ubc24\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\ub97c \ucf1c\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub824\uc694."})]})})})]})});var y=function(e){var t=e.darkTheme,n=e.handleThemeToggle;return Object(i.jsxs)("div",{className:"preference-wrapper",children:[Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("h1",{style:{fontSize:"3rem"},children:"\uc124\uc815"}),Object(i.jsx)("p",{children:"\uc694\uc77c\ubcc4 \ud560 \uc77c \uc124\uc815"}),Object(i.jsx)(v,{darkTheme:t}),Object(i.jsxs)("p",{style:{color:"gray"},children:["\uc694\uc77c\ubcc4\ub85c \ud560 \uc77c\uc744 \uc124\uc815\ud558\uba74",Object(i.jsx)("br",{})," \ud574\ub2f9 \uc694\uc77c\uc5d0 \uc790\ub3d9\uc73c\ub85c \ud560 \uc77c\uc774 \uac31\uc2e0\ub429\ub2c8\ub2e4!"]})]}),Object(i.jsx)("div",{className:"component",children:Object(i.jsx)(g,{darkTheme:t,onToggle:n})})]})},N=(n(41),function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeyPress;return Object(i.jsxs)("div",{className:"todo-form",children:[Object(i.jsx)("span",{children:"+"}),Object(i.jsx)("input",{type:"text",value:t,onChange:n,onKeyPress:o,placeholder:"\ud560 \uc77c \uc801\uae30"}),Object(i.jsx)("button",{onClick:c,children:"\ucd94\uac00"})]})}),k=(n(42),function(e){var t=e.id,n=e.content,c=e.isDone,o=e.onRemove,a=e.onChange,s=e.onToggle;return Object(i.jsxs)("li",{className:"todo-item",children:[Object(i.jsx)("input",{id:t,type:"checkbox",checked:c,onChange:function(){s(t)}}),Object(i.jsx)("label",{htmlFor:t}),Object(i.jsx)("input",{type:"text",className:"todo-content ".concat(c?"checked":""),value:n,onChange:function(e){a(e,t)}}),Object(i.jsx)("span",{className:"remove-item",onClick:function(e){e.stopPropagation(),o(t)},children:"\xd7"})]})}),T=(n(43),function(e){var t,n=e.todoList,c=e.onRemove,o=e.onChange,a=e.onToggle;return t=0===n.length?Object(i.jsx)("div",{className:"todo-empty-list",children:"\uc0c8 \ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694!"}):n.map((function(e){var t=e.id,n=e.content,s=e.isDone;return Object(i.jsx)(k,{id:t,content:n,isDone:s,onRemove:c,onChange:o,onToggle:a},t)})),Object(i.jsx)("ul",{className:"todo-list-wrapper",children:t})}),S=(n(44),function(e){var t=e.darkTheme,n=Object(c.useState)([]),o=Object(r.a)(n,2),a=o[0],s=o[1],d=Object(c.useState)(""),l=Object(r.a)(d,2),h=l[0],p=l[1],O=Object(c.useState)(!1),m=Object(r.a)(O,2),x=m[0],v=m[1],g=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),y=void 0===g?window.location.replace(j):g.split("=")[1];function k(){p("");var e={userId:y,content:h,isDone:!1};fetch("".concat(u,"/api/todo"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("\uc0c8 Todo \uc544\uc774\ud15c \uc0dd\uc131\ub428: ",e),s([].concat(Object(b.a)(a),[e]))}))}return Object(c.useEffect)((function(){console.log();var e=document.querySelectorAll("input");t?e.forEach((function(e){return e.classList.add("dark")})):e.forEach((function(e){return e.classList.remove("dark")}))})),Object(c.useEffect)((function(){x||fetch("".concat(u,"/api/todos"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json()})).then((function(e){console.log("\uc11c\ubc84\ub85c\ubd80\ud130 Todo \ubaa9\ub85d \uac00\uc838\uc634: ",e),s(e),v(!0)}))}),[x]),Object(i.jsxs)("div",{className:"template-wrapper todo-list-template-wrapper",children:[Object(i.jsxs)("div",{className:"todo-title",children:[Object(i.jsx)("h2",{children:"\ubaa9\ub85d"}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"todo-lists-wrapper",children:Object(i.jsx)(T,{todoList:a,onRemove:function(e){var t=a.filter((function(t){return t.id!==e}));fetch("".concat(u,"/api/todo/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc0ad\uc81c\ub428")})),s(t)},onChange:function(e,t){var n=a.findIndex((function(e){return e.id===t})),c=a[n];c.content=e.target.value,fetch("".concat(u,"/api/todo/").concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var o=Object(b.a)(a);o[n]=Object(f.a)({},c),s(o)},onToggle:function(e){var t=a.findIndex((function(t){return t.id===e})),n=a[t];n.isDone=!n.isDone,fetch("".concat(u,"/api/todo/").concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("ID:",e," \uc5c5\ub370\uc774\ud2b8\ub428")}));var c=Object(b.a)(a);c[t]=Object(f.a)({},n),s(c)}})}),Object(i.jsx)("div",{className:"todo-form-wrapper",children:Object(i.jsx)(N,{value:h,onChange:function(e){p(e.target.value)},onCreate:k,onKeyPress:function(e){"Enter"===e.key&&k()}})})]})});var w=function(e){var t=e.darkTheme,n=e.todayDateHTML;return Object(i.jsxs)("div",{className:"component",children:[Object(i.jsx)("h1",{style:{fontSize:"3rem"},children:"\uc624\ub298 \ud560 \uc77c\uc740?"}),n,Object(i.jsx)(S,{darkTheme:t}),Object(i.jsx)("p",{style:{color:"gray"},children:"\uc694\uc77c\ubcc4\ub85c \ud560 \uc77c\uc774 \uc790\ub3d9\uc73c\ub85c \uac31\uc2e0\ub429\ub2c8\ub2e4!"})]})},C=(n(45),n(2));var D=function(){var e=new Date,t=Object(i.jsxs)("p",{children:["\uc624\ub298\uc740 ",Object(i.jsx)("br",{})," ",e.getMonth()+1,"\uc6d4 ",e.getDate(),"\uc77c ",["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"][e.getDay()],"\uc694\uc77c"]}),n=Object(c.useState)(!1),o=Object(r.a)(n,2),a=o[0],s=o[1];function f(){s(!a)}Object(c.useEffect)((function(){var e=document.querySelector("body"),t=document.querySelector(".navigation"),n=document.querySelector(".footer");a?(e.classList.add("dark"),t.classList.add("dark"),n.classList.add("dark")):(e.classList.remove("dark"),t.classList.remove("dark"),n.classList.remove("dark"))}),[a]);var b=Object(c.useState)(!1),p=Object(r.a)(b,2),O=p[0],m=p[1],x=Object(c.useState)(""),v=Object(r.a)(x,2),g=v[0],N=v[1],k=document.cookie.split("; ").find((function(e){return e.startsWith("userId")})),T=void 0===k?window.location.replace(j):k.split("=")[1];return Object(c.useEffect)((function(){O||(fetch("".concat(u,"/api/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(T)}).then((function(e){return e.json()})).then((function(e){console.log("\uc720\uc800 \uc815\ubcf4 \uac00\uc838\uc634: ",{newUserInfo:e}),N(e)})),m(!0))}),[O]),Object(i.jsx)(l.a,{children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(h,{userInfo:g}),Object(i.jsxs)(C.c,{children:[Object(i.jsx)(C.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(w,{darkTheme:a,todayDateHTML:t})}}),Object(i.jsx)(C.a,{path:"/preference",render:function(){return Object(i.jsx)(y,{darkTheme:a,handleThemeToggle:f})}})]}),Object(i.jsx)(d,{})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.f481883b.chunk.js.map