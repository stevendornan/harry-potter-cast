(this["webpackJsonpharry-potter-cast"]=this["webpackJsonpharry-potter-cast"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(14),i=c.n(s),j=c(5),o=c.n(j),u=c(15),l=c(3),d=c(16),h=c.n(d),b=c.p+"static/media/logo.0208e6cb.png",O=function(){return Object(n.jsx)("header",{className:"center",children:Object(n.jsx)("img",{src:b,alt:b})})},x=function(e){var t=e.character;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:t.image,alt:t.name})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Actor Name:"})," ",t.actor]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:t.house?"House":null})," ",t.house]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:t.ancestry?"Ancestry":null})," ",t.ancestry]})]})]})]})})},f=c.p+"static/media/spinner.11d9cde8.gif",m=function(){return Object(n.jsx)("img",{src:f,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},p=function(e){var t=e.characters;return e.isLoading?Object(n.jsx)(m,{}):Object(n.jsx)("section",{className:"cards",children:t.length>0&&t.map((function(e){return Object(n.jsx)(x,{character:e},e.name)}))})},g=function(e){var t=e.getQuery,c=Object(r.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1];return Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("form",{children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:s,onChange:function(e){return c=e.target.value.toLowerCase(),i(c),void t(c);var c},autoFocus:!0})})})},v=(c(40),function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!0),i=Object(l.a)(s,2),j=i[0],d=i[1],b=Object(r.useState)(""),x=Object(l.a)(b,2),f=x[0],m=x[1];return Object(r.useEffect)((function(){d(!0),function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("http://hp-api.herokuapp.com/api/characters?q=".concat(f));case 2:t=e.sent,c=t.data?t.data.filter((function(e){return e.name.toLowerCase().includes(f)})):[],a(c),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[f]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(O,{}),Object(n.jsx)(g,{getQuery:function(e){return m(e)}}),Object(n.jsx)(p,{isLoading:j,characters:c})]})}),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.616c3dd5.chunk.js.map