(this.webpackJsonpdictionary=this.webpackJsonpdictionary||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(15),s=n.n(i),o=n(3),r=n(16),d=n.n(r),l=(n(39),n(0));function j(){var e=Object(a.useState)("dictionary"),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("noun"),s=Object(o.a)(i,2),r=s[0],j=s[1],h=Object(a.useState)("A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data."),b=Object(o.a)(h,2),u=b[0],m=b[1],p=Object(a.useState)(""),O=Object(o.a)(p,2),f=O[0],g=O[1],x="https://api.dictionaryapi.dev/api/v2/entries/en/".concat(f),N=function(){d.a.get(x).then((function(e){c(e.data[0].word),j(e.data[0].meanings[0].partOfSpeech),m(e.data[0].meanings[0].definitions[0].definition)})).catch((function(e){alert("Error! Word not found.")}))};return Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{onChange:function(e){g(e.target.value)},onKeyPress:function(e){13===e.charCode&&N()},placeholder:"Search...",className:"search_input"}),Object(l.jsx)("button",{onClick:N,className:"search_btn",children:"Define"})]}),Object(l.jsxs)("div",{className:"display",children:[Object(l.jsx)("h1",{className:"word",children:n}),Object(l.jsx)("p",{className:"part_of_speech",children:r}),Object(l.jsx)("p",{className:"definition",children:u})]})]})}n(41);var h=n.p+"static/media/logo.00aab024.png";function b(){return Object(l.jsx)("div",{className:"Navbar",children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("img",{src:h,alt:"...",className:"logo-img"}),Object(l.jsx)("h1",{className:"logo-title",children:"Dictionary"})]})})}n(42);function u(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsx)(j,{})]})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.12a79bd8.chunk.js.map