(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"tJ/O":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return p}));a("a1Th"),a("Btvt");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("Bl7J"),c=a("EYWl"),s=(a("sQfG"),a("bzmi")),m=a.n(s);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,n=1===a,s=a===t.numPages,i=a-1==1?"/blog/":"/blog/"+(a-1).toString(),p="/blog/"+(a+1).toString();return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"All posts",description:"Recent posts from the Rhymery team"}),r.a.createElement("div",{className:"blog-list"},r.a.createElement("h1",null,"Latest Poems & Writings"),e.map((function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.path;return r.a.createElement("article",{className:m.a.item},r.a.createElement("div",{className:m.a.title},r.a.createElement("h2",null,r.a.createElement(o.Link,{to:t.frontmatter.path},a))),r.a.createElement("div",{className:m.a.content},r.a.createElement("p",null,t.excerpt),r.a.createElement("div",{className:m.a.meta},r.a.createElement(o.Link,{to:t.frontmatter.path},r.a.createElement("button",{className:"btn"},"Read More")),r.a.createElement("h4",null,t.frontmatter.date))))})),!n&&r.a.createElement(o.Link,{className:"btn",to:i,rel:"prev"},"Previous Page"),!s&&r.a.createElement(o.Link,{className:"btn",to:p,rel:"next"},"Next Page")))},n}(r.a.Component),p="3047288667"}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-9f7e31e2167f50a14121.js.map