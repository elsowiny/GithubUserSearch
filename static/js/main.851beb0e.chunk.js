(this.webpackJsonpgithubusersearch=this.webpackJsonpgithubusersearch||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(7),a=c.n(s),i=(c(15),c(6)),o=c.n(i),l=c(8),j=c(4),u=(c(17),c(35)),b=c(1);var h=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),a=Object(j.a)(s,2),i=a[0],h=(a[1],Object(n.useState)(null)),p=Object(j.a)(h,2),d=(p[0],p[1],function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.github.com/users/".concat(c),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})).catch((function(e){console.log("fetch error"+e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(b.jsx)(u.a,{className:"d-flex flex-column py-2",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("h1",{children:"Search for a user"}),Object(b.jsx)("input",{className:"inputElem",placeholder:"Search GitHub",onChange:function(e){var t=e.target.value;r(t)}})]}),Object(b.jsx)("button",{onClick:d,children:"Search"}),Object(b.jsx)("div",{className:"image-wrapper",children:Object(b.jsx)("img",{src:c?c.avatar_url:"",className:"image-adjust",alt:"user avatar"})}),Object(b.jsx)("div",{className:"error-info",children:Object(b.jsx)("p",{children:i||""})}),Object(b.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"}}),Object(b.jsxs)("div",{children:[c?c.login:"",Object(b.jsx)("br",{}),c?c.bio:"",Object(b.jsx)("br",{}),"followers: ",c?c.followers:"",Object(b.jsx)("br",{}),"following: ",c?c.following:"",Object(b.jsx)("br",{}),"repositories: ",c?c.public_repos:"",Object(b.jsx)("br",{}),"Github : ",c?Object(b.jsx)("a",{href:c.html_url,children:c.html_url}):"",Object(b.jsx)("br",{})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),p()}},[[23,1,2]]]);
//# sourceMappingURL=main.851beb0e.chunk.js.map