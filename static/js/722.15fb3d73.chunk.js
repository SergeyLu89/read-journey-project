"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[722],{7722:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r,i={},s=t(3329),o=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Filters:"}),(0,s.jsxs)("form",{autoComplete:"off",className:i.filterForm,children:[(0,s.jsx)("label",{htmlFor:"title"}),(0,s.jsx)("input",{type:"text",name:"title",id:"title"}),(0,s.jsx)("label",{htmlFor:"author"}),(0,s.jsx)("input",{type:"text",name:"author",id:"author"}),(0,s.jsx)("button",{type:"submit",children:"To apply"})]})]})},a={},l=t(1087),c=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Start your workout"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{children:"1"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Create a personal library:"})," add the books you intend to read to it."]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{children:"2"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Create your first workout:"})," define a goal, choose a period, start training."]})]})]}),(0,s.jsx)(l.rU,{className:a.functionalityLink,to:"/library",children:"Already have an account?"})]})},d=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"SVG \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"}),(0,s.jsxs)("p",{children:['"Books are ',(0,s.jsx)("span",{children:"windows"}),' to the world, and reading is a journey into the unknown."']})]})},u="Paginator_paginator__MTku1",h=function(e){var n=e.setPage,t=e.page,r=e.totalPages;return(0,s.jsxs)("ul",{className:u,children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{type:"button",disabled:1===t,onClick:function(){n(t-1)},children:"Left"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{type:"button",disabled:t===r,onClick:function(){n(t+1)},children:"Right"})})]})},j=t(9439),x=function(e){var n=e.book,t=n.author,r=n.imageUrl,i=n.title,o=n.totalPages;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:r,alt:i}),(0,s.jsx)("h3",{children:i}),(0,s.jsx)("p",{children:t}),(0,s.jsx)("p",{children:o})]})},m="RecommendedBooksItem_modalOpenBtn__ijhEG",f="RecommendedBooksItem_bookImage__M0zEw",p="Modal_backdrop__EiMyu",g="Modal_modal__8P5D2",b="Modal_modalCloseBtn__DvDur",v=t(4596),k=t(2791),y=function(e){var n=e.children,t=e.isOpen,r=e.closeFnc,i=(0,k.useCallback)((function(){t&&r()}),[t,r]);(0,k.useEffect)((function(){var e=function(e){"Escape"===e.code&&i()};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[i]);return(0,s.jsx)("div",{className:p,onClick:function(e){e.target===e.currentTarget&&i()},children:(0,s.jsxs)("div",{className:g,children:[(0,s.jsx)("button",{className:b,onClick:i,children:(0,s.jsx)("svg",{width:"22",height:"22","aria-label":"cross icon",children:(0,s.jsx)("use",{href:v.Z+"#icon-sross"})})}),n]})})},w=function(e){var n=e.book,t=(0,k.useState)(!1),r=(0,j.Z)(t,2),i=r[0],o=r[1],a=n.author,l=n.imageUrl,c=n.title;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("button",{type:"button",onClick:function(){o(!0)},className:m,children:(0,s.jsx)("img",{src:l,alt:c,className:f})}),(0,s.jsx)("h4",{children:c}),(0,s.jsx)("p",{children:a})]}),i&&(0,s.jsxs)(y,{isOpen:i,closeFnc:function(){o(!1)},children:[(0,s.jsx)(x,{book:n}),(0,s.jsx)("button",{type:"button",children:"Add to library"})]})]})},_=t(4420),N=function(e){return e.recommended.recommended},P=function(e){return e.recommended.totalPages},C=function(e){return e.recommended.isLoading},F=t(6389),E="mobile",L="tablet",M="desktop",Z=768,B=1440,I=function(e){var n,t,r=(0,l.lr)(),i=(0,j.Z)(r,2),s=i[0],o=i[1],a=null!==(n=s.get("page"))&&void 0!==n?n:1,c=null!==(t=s.get("limit"))&&void 0!==t?t:e[window.innerWidth>=B?M:window.innerWidth>=Z?L:E];return{page:Number(a),limit:Number(c),setPage:function(e){s.set("page",e),o(s)},setLimit:function(e){s.set("limit",e),o(s)}}},R=t(4942),S=(r={},(0,R.Z)(r,E,2),(0,R.Z)(r,L,8),(0,R.Z)(r,M,10),r),T=function(){var e=I(S),n=e.page,t=e.limit,r=e.setPage,i=(0,_.I0)(),o=(0,_.v9)(N),a=(0,_.v9)(P);console.log("totalPages: ",a);var l=(0,_.v9)(C);(0,k.useEffect)((function(){var e=n;(isNaN(parseInt(n))||n<=0)&&(e=1);var r=new URLSearchParams({page:e,limit:t});i((0,F.Q)(r))}),[i,n,t]);var c=!l&&0===a;return(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Recommended"}),l&&(0,s.jsx)("p",{children:"Loading..."}),a>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{setPage:r,page:n,totalPages:a}),(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsx)(w,{book:e},e._id)}))})]}),c&&(0,s.jsx)("p",{children:" EMPTY"})]})},U={},D=function(e){var n=e.children;return(0,s.jsx)("section",{className:U.dashboard,children:n})},O=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(c,{}),(0,s.jsx)(d,{})]}),(0,s.jsx)(T,{})]})}}}]);
//# sourceMappingURL=722.15fb3d73.chunk.js.map