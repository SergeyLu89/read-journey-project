"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[647],{7642:function(e,r,t){t.d(r,{Z:function(){return c}});var n="BookInfoComponent_bookInfoWrapper__gAI5R",o="BookInfoComponent_author__X+erf",a="BookInfoComponent_pages__RDM4j",i=t(6042),s=t(3329),c=function(e){var r=e.book,t=r.author,c=r.imageUrl,l=r.title,u=r.totalPages;return(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("img",{src:c||i.BZ,alt:l}),(0,s.jsx)("h3",{children:l}),(0,s.jsx)("p",{className:o,children:t}),(0,s.jsx)("p",{className:a,children:u})]})}},3974:function(e,r,t){t.d(r,{Z:function(){return a}});var n="UniversalButton_universalbtn__DCYzD",o=t(3329),a=function(e){var r=e.title,t=e.btnFunction;return(0,o.jsx)("button",{type:"button",onClick:t,className:n,children:r})}},2045:function(e,r,t){t.r(r),t.d(r,{default:function(){return me}});var n="MyLibraryPage_libraryPageWrapper__twaAy",o=t(1413),a=t(5861),i=t(9439),s=t(4687),c=t.n(s),l={formTitile:"MyLibraryForm_formTitile__Wwd2H",libraryForm:"MyLibraryForm_libraryForm__x8HFe",inputWrapper:"MyLibraryForm_inputWrapper__KcMJ-",titleInput:"MyLibraryForm_titleInput__t53eH",authorInput:"MyLibraryForm_authorInput__p8hWU",pagesInput:"MyLibraryForm_pagesInput__yVhGw",error:"MyLibraryForm_error__piFXI",correct:"MyLibraryForm_correct__T3env",errorMessage:"MyLibraryForm_errorMessage__qJAvU",correctMessage:"MyLibraryForm_correctMessage__k6AuD",formBtn:"MyLibraryForm_formBtn__v+rG-",formBnt:"MyLibraryForm_formBnt__4MAeZ"},u=t(1134),d=t(2791),m=t(4695),p=t(8007),h=t(4420),_=t(746),f=t(3978),b="SuccesNotification_notificationWrapper__sDU4Q",g="SuccesNotification_likeImage__vxSyh",x="SuccesNotification_notificationDescr__TPyP6",y="SuccesNotification_notificationDescrAccent__1CZLe",j=t(6042),v=t(3329),k=function(){return(0,v.jsxs)("div",{className:b,children:[(0,v.jsx)("img",{src:j.IL,alt:"like",className:g}),(0,v.jsx)("h3",{children:"Good job"}),(0,v.jsxs)("p",{className:x,children:["Your book is now in"," ",(0,v.jsx)("span",{className:y,children:"the library!"})," The joy knows no bounds and now you can start your training"]})]})},Z=t(2564),N=t(530),L=p.Ry({title:p.Z_().required("Book title is a required field"),author:p.Z_().required("The author is a required field"),totalPages:p.Rx().required("Number of pages is a required field").typeError("Hmm... I think this is not a number :)").min(1,"There must be more than 0 pages")}),B=function(){var e,r,t,n=(0,h.I0)(),s=(0,d.useState)(!1),p=(0,i.Z)(s,2),b=p[0],g=p[1],x=(0,u.cI)({mode:"onChange",resolver:(0,m.X)(L)}),y=x.register,j=x.handleSubmit,B=x.formState,M=B.errors,I=B.isValid,w=B.dirtyFields,F=x.reset,S=function(){var e=(0,a.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,_.lY)(r)).unwrap();case 3:F(),g(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Z.Am.error("".concat(e.t0.message),N.$),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,v.jsxs)("section",{className:l.libraryFormSection,children:[(0,v.jsx)("p",{className:l.formTitile,children:"Create your library:"}),(0,v.jsxs)("form",{onSubmit:j(S),autoComplete:"off",className:l.libraryForm,children:[(0,v.jsxs)("div",{className:l.inputWrapper,children:[(0,v.jsx)("label",{htmlFor:"title",children:"Book title:"}),(0,v.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"title",id:"title"},y("title")),{},{className:"".concat(l.titleInput," ").concat(M.title&&l.error," \n            ").concat(w.title&&!M.title&&l.correct)})),(null===M||void 0===M?void 0:M.title)&&(0,v.jsx)("p",{className:l.errorMessage,children:null===(e=M.title)||void 0===e?void 0:e.message}),w.title&&!M.title&&(0,v.jsx)("p",{className:l.correctMessage,children:"Fitting title"})]}),(0,v.jsxs)("div",{className:l.inputWrapper,children:[(0,v.jsx)("label",{htmlFor:"author",children:"The author:"}),(0,v.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"author",id:"author"},y("author")),{},{className:"".concat(l.authorInput," ").concat(M.author&&l.error," \n            ").concat(w.author&&!M.author&&l.correct)})),(null===M||void 0===M?void 0:M.author)&&(0,v.jsx)("p",{className:l.errorMessage,children:null===(r=M.author)||void 0===r?void 0:r.message}),w.author&&!M.author&&(0,v.jsx)("p",{className:l.correctMessage,children:"Fitting author"})]}),(0,v.jsxs)("div",{className:l.inputWrapper,children:[(0,v.jsx)("label",{htmlFor:"pages",children:"Number of pages:"}),(0,v.jsx)("input",(0,o.Z)((0,o.Z)({type:"text",name:"pages",id:"pages"},y("totalPages")),{},{className:"".concat(l.pagesInput," ").concat(M.totalPages&&l.error," \n            ").concat(w.totalPages&&!M.totalPages&&l.correct)})),(null===M||void 0===M?void 0:M.totalPages)&&(0,v.jsx)("p",{className:l.errorMessage,children:null===(t=M.totalPages)||void 0===t?void 0:t.message}),w.totalPages&&!M.totalPages&&(0,v.jsx)("p",{className:l.correctMessage,children:"Almost done"})]}),(0,v.jsx)("button",{type:"submit",disabled:!I,className:l.formBtn,children:"Add book"})]}),b&&(0,v.jsx)(f.Z,{isOpen:b,closeFnc:function(){g(!1)},children:(0,v.jsx)(k,{})})]})},M="MyLibraryBooksList_libraryBooks__Gg5lX",I="MyLibraryBooksList_libraryBooksTitle__IQGIX",w="MyLibraryBooksList_libraryBooksList__fetOP",F="MyLibraryBooksList_noContentBox__2E29D",S="MyLibraryBooksList_imgWrapper__Cm-zJ",C="MyLibraryBooksList_booksImage__Z9K8+",R=function(e){return e.library.libraryBooks},P=function(e){return e.library.isLoading},T=function(e){return e.library.error},W="MyLibraryBooksItem_modalOpenBtn__sFJ1A",A="MyLibraryBooksItem_bookImage__OI0l1",U="MyLibraryBooksItem_descriptionWrapper__1cGlY",z="MyLibraryBooksItem_libraryBooksItem__mNYmn",D="MyLibraryBooksItem_deleteBtn__NZnmH",H="MyLibraryBooksItem_btnWrapper__pvMzW",q=t(4596),O=t(7642),G=t(3974),V=t(7689),X=function(e){var r=e.book,t=r.author,n=r.imageUrl,o=r.title,a=r._id,s=(0,h.I0)(),c=(0,V.s0)(),l=(0,d.useState)(!1),u=(0,i.Z)(l,2),m=u[0],p=u[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("li",{className:z,children:[(0,v.jsx)("button",{type:"button",onClick:function(){p(!0)},className:W,children:(0,v.jsx)("img",{src:n||j.BZ,alt:o,className:A})}),(0,v.jsxs)("div",{className:H,children:[(0,v.jsxs)("div",{className:U,children:[(0,v.jsx)("h4",{children:o}),(0,v.jsx)("p",{children:t})]}),(0,v.jsx)("button",{type:"button",className:D,onClick:function(){s((0,_.uX)(a)),Z.Am.success("The book was removed",N.$)},children:(0,v.jsx)("svg",{width:"14",height:"14","aria-label":"trash icon",children:(0,v.jsx)("use",{href:q.Z+"#icon-trash"})})})]})]}),m&&(0,v.jsxs)(f.Z,{isOpen:m,closeFnc:function(){p(!1)},children:[(0,v.jsx)(O.Z,{book:r}),(0,v.jsx)(G.Z,{title:"Start reading",btnFunction:function(){c("/reading",{state:{bookId:a}})}})]})]})},E=t(4942),J="@media only screen and (min-width: 768px)",Y={container:function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,E.Z)({position:"absolute",top:"40px",right:"20px"},J,{right:"40px"}))},control:function(e,r){return(0,o.Z)((0,o.Z)({},e),{},(0,E.Z)({width:120,padding:"12px 14px",borderRadius:"12px",border:"1px solid #3e3e3e",cursor:"pointer",boxShadow:"none",backgroundColor:"transparent","&:hover":{borderColor:"#3e3e3e"},"& .css-tj5bde-Svg":{transform:r.menuIsOpen&&"rotate(180deg)"}},J,{width:153,padding:"14px"}))},valueContainer:function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,E.Z)({padding:0,fontSize:12,fontWeight:500,lineHeight:1.33333,color:"#f9f9f9"},J,{fontSize:14,lineHeight:1.28571}))},singleValue:function(e){return(0,o.Z)((0,o.Z)({},e),{},{marginLeft:0,marginRight:0,color:"inherit"})},input:function(e){return(0,o.Z)((0,o.Z)({},e),{},{margin:0,paddingTop:0,paddingBottom:0})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e){return(0,o.Z)((0,o.Z)({},e),{},{padding:0,height:16,width:16,color:"#f9f9f9","&:hover":{color:"#f9f9f9"},"& .css-tj5bde-Svg":{width:"100%",height:"100%",transition:"transform 250ms cubic-bezier(0.4, 0, 0.2, 1)"}})},menu:function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,E.Z)({width:120,marginTop:"4px",marginBottom:0,paddingTop:"7px",paddingRight:"8px",paddingBottom:"7px",zIndex:10,backgroundColor:"#262626",borderRadius:"12px",boxShadow:"none",border:"none"},J,{width:153}))},menuList:function(e){return(0,o.Z)((0,o.Z)({},e),{},{height:"100%","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{borderRadius:10,background:"#3e3e3e"}})},option:function(e,r){return(0,o.Z)((0,o.Z)({},e),{},(0,E.Z)({paddingTop:"4px",paddingBottom:"4px",paddingLeft:"14px",paddingRight:"14px",fontSize:12,fontWeight:500,lineHeight:1.3333,letterSpacing:"-0.02em",color:r.isSelected?"#f9f9f9":"#686868",cursor:"pointer",backgroundColor:"transparent",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"#f9f9f9"},"&:active":{backgroundColor:"transparent"}},J,{fontSize:14,lineHeight:1.28571}))}},K=t(7507),Q=function(e){var r=e.defaultValue,t=e.options,n=e.onChange;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(K.ZP,{defaultValue:r,options:t,styles:Y,onChange:function(e){return n((null===e||void 0===e?void 0:e.value)||"")}})})},$=t(1281),ee=[{value:"unread",label:"Unread"},{value:"in-progress",label:"In progress"},{value:"done",label:"Done"},{value:"",label:"All books"}],re=function(){var e=(0,h.v9)(R),r=(0,h.v9)(P),t=(0,h.v9)(T),n=(0,h.I0)(),o=(0,d.useState)(""),s=(0,i.Z)(o,2),l=s[0],u=s[1];return(0,d.useEffect)((function(){(0,a.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new URLSearchParams,l&&r.set("status",l),e.next=5,n((0,_.nl)(r)).unwrap();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),Z.Am.error("".concat(e.t0.message),N.$),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[n,l]),(0,v.jsxs)("section",{className:M,children:[t&&(0,v.jsx)("p",{children:"Oops, something went wrong."}),(0,v.jsx)(Q,{options:ee,defaultValue:ee[ee.length-1],onChange:function(e){u(e)}}),(0,v.jsx)("h2",{className:I,children:"My library"}),r&&(0,v.jsx)($.a,{}),0!==e.length?(0,v.jsx)("ul",{className:w,children:e.map((function(e){return(0,v.jsx)(X,{book:e},e._id)}))}):(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)("div",{className:S,children:(0,v.jsx)("img",{src:j.PN,alt:"book",className:C})}),(0,v.jsxs)("p",{children:["To start training, add ",(0,v.jsx)("span",{children:"some of your books"})," or from the recommended ones"]})]})]})},te="RecommendedBlok_recommendedSection__vTML0",ne="RecommendedBlok_recommendedSectionList__uTqvU",oe="RecommendedBlok_recommendedSectionListItem__RdJKu",ae="RecommendedBlok_recommendedLinkWrapper__hFR3i",ie="RecommendedBlok_recommendedLink__L2MhS",se="RecommendedBlok_recommendedLinkSvg__7LDoN",ce=t(6389),le=t(1087),ue=function(){var e=(0,h.I0)(),r=(0,d.useState)([]),t=(0,i.Z)(r,2),n=t[0],o=t[1];return(0,d.useEffect)((function(){var r=function(){var r=(0,a.Z)(c().mark((function r(){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=new URLSearchParams({limit:30}),r.prev=1,r.next=4,e((0,ce.Q)(t)).unwrap();case 4:n=r.sent,i=n.results,s=3,a=i.slice().sort((function(){return Math.random()-.5})).slice(0,s),o(a),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("Error fetching recommended books:",r.t0);case 12:case"end":return r.stop()}var i,s}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,v.jsxs)("section",{className:te,children:[(0,v.jsx)("h3",{children:"Recommended books"}),(0,v.jsx)("ul",{className:ne,children:n.map((function(e){var r=e.imageUrl,t=e.title,n=e.author,o=e._id;return(0,v.jsxs)("li",{className:oe,children:[(0,v.jsx)("img",{src:r||j.BZ,alt:t}),(0,v.jsx)("h4",{children:t}),(0,v.jsx)("p",{children:n})]},o)}))}),(0,v.jsxs)("div",{className:ae,children:[(0,v.jsx)(le.rU,{className:ie,to:"/",children:"Home"}),(0,v.jsx)(le.rU,{className:se,to:"/",children:(0,v.jsx)("svg",{"aria-label":"arrow icon",children:(0,v.jsx)("use",{href:q.Z+"#icon-log-in"})})})]})]})},de=t(1809),me=function(){return(0,v.jsxs)("div",{className:n,children:[(0,v.jsxs)(de.Z,{children:[(0,v.jsx)(B,{}),(0,v.jsx)(ue,{})]}),(0,v.jsx)(re,{})]})}}}]);
//# sourceMappingURL=647.1a71decc.chunk.js.map