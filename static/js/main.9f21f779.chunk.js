(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),i=(n(9),n(10),n(0));function o(t){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"title",children:Object(i.jsxs)("a",{className:"title",href:"/",children:[" ",t.appName," "]})})})}var l=n(4);n(12);function j(t){var e=Object(c.useState)(""),n=Object(l.a)(e,2),s=n[0],r=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"textBox",className:"form-label",children:Object(i.jsx)("h3",{children:t.heading})}),Object(i.jsx)("textarea",{className:"form-control",id:"textBox",placeholder:"Enter your text here.",value:s,onChange:function(t){console.log("On Change"),r(t.target.value)},rows:"10"})]}),Object(i.jsxs)("div",{className:"button-container",children:[Object(i.jsx)("button",{type:"button",className:"btn ",onClick:function(){var t=s.toUpperCase();r(t)},children:"Convert to Uppercase"}),Object(i.jsx)("button",{type:"button",className:"btn ",onClick:function(){var t=s.toLowerCase();r(t)},children:"Convert to Lowercase"}),Object(i.jsx)("button",{type:"button",className:"btn ",onClick:function(){r("")},children:"Clear Text"}),Object(i.jsx)("button",{type:"button",className:"btn ",onClick:function(){navigator.clipboard.writeText(s)},children:"Copy Text"}),Object(i.jsx)("button",{type:"button",className:"btn ",onClick:function(){var t=s.split(/[ ]+/);r(t.join(" "))},children:"Remove Extra Space"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h3",{children:"Analysis of your text is :"}),Object(i.jsxs)("p",{children:["Words :"," ",Object(i.jsx)("strong",{children:s.split(/\s+/).filter((function(t){return 0!==t.length})).length})," ","and Characters :",Object(i.jsxs)("strong",{children:[" ",s.length]})]}),Object(i.jsxs)("p",{children:["Reading Time :"," ",Object(i.jsxs)("strong",{children:[Math.round(100*(.008*s.split(/\s+/).length-.008+Number.EPSILON))/100," ","minutes"]})]})]})]})}var b=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"title",children:Object(i.jsx)(o,{appName:"Text Analyser"})}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(j,{heading:"Enter your text to analyse :"})})]})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.9f21f779.chunk.js.map