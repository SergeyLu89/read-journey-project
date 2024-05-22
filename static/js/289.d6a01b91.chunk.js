"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[289],{4163:function(e,r,t){t.r(r),t.d(r,{default:function(){return se}});var s="MyLibraryPage_libraryPageWrapper__twaAy",o=t(1413),a=t(5861),i=t(9439),n=t(7757),c=t.n(n),l={formTitile:"MyLibraryForm_formTitile__Wwd2H",libraryForm:"MyLibraryForm_libraryForm__x8HFe",inputWrapper:"MyLibraryForm_inputWrapper__KcMJ-",titleInput:"MyLibraryForm_titleInput__t53eH",authorInput:"MyLibraryForm_authorInput__p8hWU",pagesInput:"MyLibraryForm_pagesInput__yVhGw",error:"MyLibraryForm_error__piFXI",correct:"MyLibraryForm_correct__T3env",errorMessage:"MyLibraryForm_errorMessage__qJAvU",correctMessage:"MyLibraryForm_correctMessage__k6AuD",formBtn:"MyLibraryForm_formBtn__v+rG-",formBnt:"MyLibraryForm_formBnt__4MAeZ"},m=t(1134),d=t(2791),u=t(4695),h=t(8007),_=t(4420),p=t(746),y=t(3978),x="SuccesNotification_notificationWrapper__sDU4Q",b="SuccesNotification_likeImage__vxSyh",j="SuccesNotification_notificationDescr__TPyP6",f="SuccesNotification_notificationDescrAccent__1CZLe",g=t(9255),k=t(3329),v=function(){return(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)("img",{src:g.IL,alt:"like",className:b}),(0,k.jsx)("h3",{children:"Good job"}),(0,k.jsxs)("p",{className:j,children:["Your book is now in"," ",(0,k.jsx)("span",{className:f,children:"the library!"})," The joy knows no bounds and now you can start your training"]})]})},N=h.Ry({title:h.Z_().required("Book title is a required field"),author:h.Z_().required("The author is a required field"),totalPages:h.Rx().required("Number of pages is a required field").typeError("Hmm... I think this is not a number :)").min(1,"There must be more than 0 pages")}),L=function(){var e,r,t,s=(0,_.I0)(),n=(0,d.useState)(!1),h=(0,i.Z)(n,2),x=h[0],b=h[1],j=(0,m.cI)({mode:"onChange",resolver:(0,u.X)(N)}),f=j.register,g=j.handleSubmit,L=j.formState,M=L.errors,B=L.isValid,I=L.dirtyFields,F=j.reset,Z=function(){var e=(0,a.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s((0,p.lY)(r)).unwrap();case 3:F(),b(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,k.jsxs)("section",{className:l.libraryFormSection,children:[(0,k.jsx)("p",{className:l.formTitile,children:"Create your library:"}),(0,k.jsxs)("form",{onSubmit:g(Z),autoComplete:"off",className:l.libraryForm,children:[(0,k.jsxs)("div",{className:l.inputWrapper,children:[(0,k.jsx)("label",{htmlFor:"title",children:"Book title:"}),(0,k.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"title",id:"title"},f("title")),{},{className:"".concat(l.titleInput," ").concat(M.title&&l.error," \n            ").concat(I.title&&!M.title&&l.correct)})),(null===M||void 0===M?void 0:M.title)&&(0,k.jsx)("p",{className:l.errorMessage,children:null===(e=M.title)||void 0===e?void 0:e.message}),I.title&&!M.title&&(0,k.jsx)("p",{className:l.correctMessage,children:"Fitting title"})]}),(0,k.jsxs)("div",{className:l.inputWrapper,children:[(0,k.jsx)("label",{htmlFor:"author",children:"The author:"}),(0,k.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"author",id:"author"},f("author")),{},{className:"".concat(l.authorInput," ").concat(M.author&&l.error," \n            ").concat(I.author&&!M.author&&l.correct)})),(null===M||void 0===M?void 0:M.author)&&(0,k.jsx)("p",{className:l.errorMessage,children:null===(r=M.author)||void 0===r?void 0:r.message}),I.author&&!M.author&&(0,k.jsx)("p",{className:l.correctMessage,children:"Fitting author"})]}),(0,k.jsxs)("div",{className:l.inputWrapper,children:[(0,k.jsx)("label",{htmlFor:"pages",children:"Number of pages:"}),(0,k.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"pages",id:"pages"},f("totalPages")),{},{className:"".concat(l.pagesInput," ").concat(M.totalPages&&l.error," \n            ").concat(I.totalPages&&!M.totalPages&&l.correct)})),(null===M||void 0===M?void 0:M.totalPages)&&(0,k.jsx)("p",{className:l.errorMessage,children:null===(t=M.totalPages)||void 0===t?void 0:t.message}),I.totalPages&&!M.totalPages&&(0,k.jsx)("p",{className:l.correctMessage,children:"Almost done"})]}),(0,k.jsx)("button",{type:"submit",disabled:!B,className:l.formBtn,children:"Add book"})]}),x&&(0,k.jsx)(y.Z,{isOpen:x,closeFnc:function(){b(!1)},children:(0,k.jsx)(v,{})})]})},M="MyLibraryBooksList_libraryBooks__Gg5lX",B="MyLibraryBooksList_libraryBooksTitle__IQGIX",I="MyLibraryBooksList_libraryBooksList__fetOP",F="MyLibraryBooksList_noContentBox__2E29D",Z="MyLibraryBooksList_imgWrapper__Cm-zJ",w="MyLibraryBooksList_booksImage__Z9K8+",S=function(e){return e.library.libraryBooks},P=function(e){return e.library.isLoading},W=function(e){return e.library.error},T="MyLibraryBooksItem_modalOpenBtn__sFJ1A",R="MyLibraryBooksItem_bookImage__OI0l1",C="MyLibraryBooksItem_descriptionWrapper__1cGlY",U="MyLibraryBooksItem_libraryBooksItem__mNYmn",q="MyLibraryBooksItem_deleteBtn__NZnmH",A="MyLibraryBooksItem_btnWrapper__pvMzW",D=t(4596),G=t(7642),H=t(3974),O=t(7689),E=function(e){var r=e.book,t=r.author,s=r.imageUrl,o=r.title,a=r._id,n=(0,_.I0)(),c=(0,O.s0)(),l=(0,d.useState)(!1),m=(0,i.Z)(l,2),u=m[0],h=m[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("li",{className:U,children:[(0,k.jsx)("button",{type:"button",onClick:function(){h(!0)},className:T,children:(0,k.jsx)("img",{src:s||g.BZ,alt:o,className:R})}),(0,k.jsxs)("div",{className:A,children:[(0,k.jsxs)("div",{className:C,children:[(0,k.jsx)("h4",{children:o}),(0,k.jsx)("p",{children:t})]}),(0,k.jsx)("button",{type:"button",className:q,onClick:function(){n((0,p.uX)(a))},children:(0,k.jsx)("svg",{width:"14",height:"14","aria-label":"trash icon",children:(0,k.jsx)("use",{href:D.Z+"#icon-trash"})})})]})]}),u&&(0,k.jsxs)(y.Z,{isOpen:u,closeFnc:function(){h(!1)},children:[(0,k.jsx)(G.Z,{book:r}),(0,k.jsx)(H.Z,{title:"Start reading",btnFunction:function(){c("/reading",{state:{bookId:a}})}})]})]})},J=function(){var e=(0,_.v9)(S),r=(0,_.v9)(P),t=(0,_.v9)(W),s=(0,_.I0)();return(0,d.useEffect)((function(){s((0,p.nl)())}),[s]),(0,k.jsxs)("section",{className:M,children:[t&&(0,k.jsx)("p",{children:"Oops, something went wrong."}),(0,k.jsx)("h2",{className:B,children:"My library"}),r&&(0,k.jsx)("p",{children:"Loading..."}),0!==e.length?(0,k.jsx)("ul",{className:I,children:e.map((function(e){return(0,k.jsx)(E,{book:e},e._id)}))}):(0,k.jsxs)("div",{className:F,children:[(0,k.jsx)("div",{className:Z,children:(0,k.jsx)("img",{src:g.PN,alt:"like",className:w})}),(0,k.jsxs)("p",{children:["To start training, add ",(0,k.jsx)("span",{children:"some of your books"})," or from the recommended ones"]})]})]})},X="RecommendedBlok_recommendedSection__vTML0",Y="RecommendedBlok_recommendedSectionList__uTqvU",K="RecommendedBlok_recommendedSectionListItem__RdJKu",Q="RecommendedBlok_recommendedLinkWrapper__hFR3i",z="RecommendedBlok_recommendedLink__L2MhS",V="RecommendedBlok_recommendedLinkSvg__7LDoN",$=t(6389),ee=t(1087),re=function(){var e=(0,_.I0)(),r=(0,d.useState)([]),t=(0,i.Z)(r,2),s=t[0],o=t[1];return(0,d.useEffect)((function(){var r=function(){var r=(0,a.Z)(c().mark((function r(){var t,s,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({limit:30}),r.prev=1,r.next=4,e((0,$.Q)(t)).unwrap();case 4:s=r.sent,i=s.results,n=3,a=i.slice().sort((function(){return Math.random()-.5})).slice(0,n),o(a),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("Error fetching recommended books:",r.t0);case 12:case"end":return r.stop()}var i,n}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,k.jsxs)("section",{className:X,children:[(0,k.jsx)("h3",{children:"Recommended books"}),(0,k.jsx)("ul",{className:Y,children:s.map((function(e){var r=e.imageUrl,t=e.title,s=e.author,o=e._id;return(0,k.jsxs)("li",{className:K,children:[(0,k.jsx)("img",{src:r||g.BZ,alt:t}),(0,k.jsx)("h4",{children:t}),(0,k.jsx)("p",{children:s})]},o)}))}),(0,k.jsxs)("div",{className:Q,children:[(0,k.jsx)(ee.rU,{className:z,to:"/",children:"Home"}),(0,k.jsx)(ee.rU,{className:V,to:"/",children:(0,k.jsx)("svg",{"aria-label":"arrow icon",children:(0,k.jsx)("use",{href:D.Z+"#icon-log-in"})})})]})]})},te=t(1809),se=function(){return(0,k.jsxs)("div",{className:s,children:[(0,k.jsxs)(te.Z,{children:[(0,k.jsx)(L,{}),(0,k.jsx)(re,{})]}),(0,k.jsx)(J,{})]})}}}]);
//# sourceMappingURL=289.d6a01b91.chunk.js.map