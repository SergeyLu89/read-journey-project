"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[102],{7642:function(e,t,n){n.d(t,{Z:function(){return c}});var o="BookInfoComponent_bookInfoWrapper__gAI5R",i="BookInfoComponent_author__X+erf",s="BookInfoComponent_pages__RDM4j",a=n(6042),r=n(3329),c=function(e){var t=e.book,n=t.author,c=t.imageUrl,l=t.title,d=t.totalPages;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{src:c||a.BZ,alt:l}),(0,r.jsx)("h3",{children:l}),(0,r.jsx)("p",{className:i,children:n}),(0,r.jsx)("p",{className:s,children:d})]})}},3974:function(e,t,n){n.d(t,{Z:function(){return s}});var o="UniversalButton_universalbtn__DCYzD",i=n(3329),s=function(e){var t=e.title,n=e.btnFunction;return(0,i.jsx)("button",{type:"button",onClick:n,className:o,children:t})}},2786:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var o,i="RecommendedPage_recommendedPageWrapper__sRz3m",s="RecommendedFilter_recommendedFilter__0q7Nh",a="RecommendedFilter_filterForm__M5N9x",r="RecommendedFilter_inputWrapper__QO7zV",c="RecommendedFilter_titleInput__MNOaI",l="RecommendedFilter_authorInput__MwqaQ",d="RecommendedFilter_filterBnt__dxw5d",u=n(9439),m=n(1087),h=function(){var e,t,n=(0,m.lr)(),o=(0,u.Z)(n,2),i=o[0],s=o[1];return{title:null!==(e=i.get("title"))&&void 0!==e?e:"",author:null!==(t=i.get("author"))&&void 0!==t?t:"",setRecommendedFilter:function(e,t){""===t?i.delete(e):i.set(e,t),i.set("page",1),s(i)},resetRecommendedFilter:function(){s({title:"",author:""})}}},_=n(1134),j=n(3329),x=function(){var e=h(),t=e.title,n=e.author,o=e.setRecommendedFilter,i=(0,_.cI)({defaultValues:{title:t||"",author:n||""}}),u=i.handleSubmit,m=i.setValue,x=i.watch;return(0,j.jsxs)("section",{className:s,children:[(0,j.jsx)("p",{children:"Filters:"}),(0,j.jsxs)("form",{autoComplete:"off",className:a,onSubmit:u((function(e){o("title",e.title),o("author",e.author)})),children:[(0,j.jsxs)("div",{className:r,children:[(0,j.jsx)("label",{htmlFor:"title",children:"Book title:"}),(0,j.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(e){m("title",e.target.value)},value:x("title"),className:c})]}),(0,j.jsxs)("div",{className:r,children:[(0,j.jsx)("label",{htmlFor:"author",children:"The author:"}),(0,j.jsx)("input",{type:"text",name:"author",id:"author",onChange:function(e){m("author",e.target.value)},value:x("author"),className:l})]}),(0,j.jsx)("button",{type:"submit",className:d,children:"To apply"})]})]})},f="Functionality_functionalitySection__lfn-6",p="Functionality_functionalityList__6xQIo",g="Functionality_functionalityListItem__QzM9t",k="Functionality_numberWrapper__oK08M",N="Functionality_functionalityDescr__zJUDo",b="Functionality_functionalityLinkWrapper__jthOH",v="Functionality_functionalityLink__geVIs",y="Functionality_functionalityLinkSvg__GjGtH",B=n(4596),w=function(){return(0,j.jsxs)("section",{className:f,children:[(0,j.jsx)("h3",{children:"Start your workout"}),(0,j.jsxs)("ul",{className:p,children:[(0,j.jsxs)("li",{className:g,children:[(0,j.jsx)("div",{className:k,children:(0,j.jsx)("span",{children:"1"})}),(0,j.jsxs)("p",{className:N,children:[(0,j.jsx)("span",{children:"Create a personal library:"})," add the books you intend to read to it."]})]}),(0,j.jsxs)("li",{className:g,children:[(0,j.jsx)("div",{className:k,children:(0,j.jsx)("span",{children:"2"})}),(0,j.jsxs)("p",{className:N,children:[(0,j.jsx)("span",{children:"Create your first workout:"})," define a goal, choose a period, start training."]})]})]}),(0,j.jsxs)("div",{className:b,children:[(0,j.jsx)(m.rU,{className:v,to:"/library",children:"My library"}),(0,j.jsx)(m.rU,{className:y,to:"/library",children:(0,j.jsx)("svg",{width:"24",height:"24","aria-label":"arrow icon",children:(0,j.jsx)("use",{href:B.Z+"#icon-log-in"})})})]})]})},F=n(6042),R={quoteBlock:"QuoteBlock_quoteBlock__dZHwS",quoteDescr:"QuoteBlock_quoteDescr__hwfVv",quoteDescrAccent:"QuoteBlock_quoteDescrAccent__sQuv9"},I=function(){return(0,j.jsxs)("section",{className:R.quoteBlock,children:[(0,j.jsx)("img",{src:F.PN,alt:"books",className:R.booksImage}),(0,j.jsxs)("p",{className:R.quoteDescr,children:['"Books are ',(0,j.jsx)("span",{className:R.quoteDescrAccent,children:"windows"}),' to the world, and reading is a journey into the unknown."']})]})},Z="RecommendedBooksList_recommendedBooks__OSn45",C="RecommendedBooksList_recommendedBooksTitle__Kqo8v",L="RecommendedBooksList_recommendedBooksList__jVroE",P="RecommendedBooksList_noContentBox__jX2ri",q="RecommendedBooksList_imgWrapper__dO9QZ",D="RecommendedBooksList_booksImage__akyh+",Q="Paginator_paginator__MTku1",M="Paginator_paginationBtn__a8R33",S="Paginator_disabledBtn__8cVdU",O=function(e){var t=e.setPage,n=e.page,o=e.totalPages;return(0,j.jsxs)("ul",{className:Q,children:[(0,j.jsx)("li",{children:(0,j.jsx)("button",{type:"button",disabled:1===n,onClick:function(){t(n-1)},className:"".concat(M," ").concat(1===n&&S),children:(0,j.jsx)("svg",{width:"16",height:"16","aria-label":"left arrow icon",children:(0,j.jsx)("use",{href:B.Z+"#icon-chevron-left"})})})}),(0,j.jsx)("li",{children:(0,j.jsx)("button",{type:"button",disabled:n===o,onClick:function(){t(n+1)},className:"".concat(M," ").concat(n===o&&S),children:(0,j.jsx)("svg",{width:"16",height:"16","aria-label":"right arrow icon",children:(0,j.jsx)("use",{href:B.Z+"#icon-chevron-right"})})})})]})},U=n(7642),W="RecommendedBooksItem_modalOpenBtn__ijhEG",V="RecommendedBooksItem_bookImage__M0zEw",z="RecommendedBooksItem_recommendedBooksItem__jtmQg",A=n(3978),E=n(2791),T=n(4420),G=n(3974),H=n(746),K=n(2564),X=n(530),J=function(e){var t=e.book,n=(0,T.I0)(),o=(0,E.useState)(!1),i=(0,u.Z)(o,2),s=i[0],a=i[1],r=t.author,c=t.imageUrl,l=t.title,d=t._id;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("li",{className:z,children:[(0,j.jsx)("button",{type:"button",onClick:function(){a(!0)},className:W,children:(0,j.jsx)("img",{src:c,alt:l,className:V})}),(0,j.jsx)("h4",{children:l}),(0,j.jsx)("p",{children:r})]}),s&&(0,j.jsxs)(A.Z,{isOpen:s,closeFnc:function(){a(!1)},children:[(0,j.jsx)(U.Z,{book:t}),(0,j.jsx)(G.Z,{title:"Add to library",btnFunction:function(){n((0,H.Lc)(d)),K.Am.success("Book added to library",X.$)}})]})]})},Y=function(e){return e.recommended.recommended},$=function(e){return e.recommended.totalPages},ee=function(e){return e.recommended.isLoading},te=function(e){return e.recommended.error},ne=n(6389),oe="mobile",ie="tablet",se="desktop",ae=768,re=1440,ce=function(e){var t,n,o=(0,m.lr)(),i=(0,u.Z)(o,2),s=i[0],a=i[1],r=null!==(t=s.get("page"))&&void 0!==t?t:1,c=null!==(n=s.get("limit"))&&void 0!==n?n:e[window.innerWidth>=re?se:window.innerWidth>=ae?ie:oe];return{page:Number(r),limit:Number(c),setPage:function(e){s.set("page",e),a(s)},setLimit:function(e){s.set("limit",e),a(s)}}},le=n(4942),de=(o={},(0,le.Z)(o,oe,2),(0,le.Z)(o,ie,8),(0,le.Z)(o,se,10),o),ue=n(1281),me=function(){var e=ce(de),t=e.page,n=e.limit,o=e.setPage,i=h(),s=i.title,a=i.author,r=(0,T.I0)(),c=(0,T.v9)(Y),l=(0,T.v9)($),d=(0,T.v9)(ee),u=(0,T.v9)(te);return(0,E.useEffect)((function(){var e=t;(isNaN(parseInt(t))||t<=0)&&(e=1);var o=new URLSearchParams({page:e,limit:n});s&&o.set("title",s),a&&o.set("author",a),r((0,ne.Q)(o))}),[r,t,n,s,a]),(0,j.jsxs)("section",{className:Z,children:[u&&(0,j.jsx)("p",{children:"Oops, something went wrong."}),(0,j.jsx)("h2",{className:C,children:"Recommended"}),d&&(0,j.jsx)(ue.a,{}),l>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(O,{setPage:o,page:t,totalPages:l}),(0,j.jsx)("ul",{className:L,children:c.map((function(e){return(0,j.jsx)(J,{book:e},e._id)}))})]}):(0,j.jsxs)("div",{className:P,children:[(0,j.jsx)("div",{className:q,children:(0,j.jsx)("img",{src:F.PN,alt:"book",className:D})}),(0,j.jsx)("p",{children:"Nothing found"})]})]})},he=n(1809),_e=function(){return(0,j.jsxs)("div",{className:i,children:[(0,j.jsxs)(he.Z,{children:[(0,j.jsx)(x,{}),(0,j.jsx)(w,{}),(0,j.jsx)(I,{})]}),(0,j.jsx)(me,{})]})}},5462:function(){}}]);
//# sourceMappingURL=102.ec348366.chunk.js.map