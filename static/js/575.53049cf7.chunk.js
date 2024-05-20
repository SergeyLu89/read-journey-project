"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[575],{8616:function(e,s,a){a.d(s,{Z:function(){return u}});var r="HeroImageComponent_heroSection__Dqf0T",i=a.p+"static/media/hero-mobile.c5ab32df8f57990441d2.png",c=a.p+"static/media/hero-mobile@2x.00cbcddecf3eaa5bfdf8.png",n=a.p+"static/media/hero-mobile.4f5034c890b8c3f10a11.webp",o=a.p+"static/media/hero-mobile@2x.bc0da464a32f7041d21a.webp",t=a.p+"static/media/hero-desktop.ae19922edd033e26331d.png",m=a.p+"static/media/hero-desktop@2x.47c36118cdf82ff9631a.png",d=a.p+"static/media/hero-desktop.c685a04f2b6121d3921d.webp",l=a.p+"static/media/hero-desktop@2x.e466710d9c2afd0ea4c4.webp",p=a(3329),u=function(){return(0,p.jsx)("section",{className:r,children:(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{media:"(min-width: 1440px)",type:"image/webp",srcSet:"".concat(d," 1x, ").concat(l," 2x")}),(0,p.jsx)("source",{media:"(min-width: 1440px)",type:"image/png",srcSet:"".concat(t," 1x, ").concat(m," 2x")}),(0,p.jsx)("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:"".concat(n," 1x, ").concat(o," 2x")}),(0,p.jsx)("source",{media:"(min-width: 375px)",type:"image/png",srcSet:"".concat(i," 1x, ").concat(c," 2x")}),(0,p.jsx)("img",{srcSet:i,alt:"iPhone"})]})})}},6784:function(e,s,a){a.r(s),a.d(s,{default:function(){return E}});var r="RegisterPage_pageWrapper__enStH",i=a(1413),c=a(9439),n="RegisterForm_registerBlok__UHP5s",o="RegisterForm_mainTitle__rlGfX",t="RegisterForm_registerForm__zetPE",m="RegisterForm_inputWrapper__yPfjX",d="RegisterForm_nameInput__bGFu1",l="RegisterForm_emailInput__SmClC",p="RegisterForm_passwordInput__t+rXQ",u="RegisterForm_error__DrL-o",_="RegisterForm_correct__RLs-i",h="RegisterForm_errorMessage__w8y5O",x="RegisterForm_correctMessage__RUR-6",g="RegisterForm_inputSvg__u0hFk",j="RegisterForm_eyeSvg__+oFtJ",f="RegisterForm_eyeError__ybY4j",w="RegisterForm_eyeCorrect__G5E0T",b="RegisterForm_buttonWrapper__g3gC+",v="RegisterForm_formBtn__s37qG",F="RegisterForm_loginLink__+XqQI",N=a(1134),y=a(4695),R=a(8007),Z=a(1087),k=a(5822),S=a(4420),C=a(232),q=a(4596),P=a(2791),I=a(3329),M=R.Ry({name:R.Z_().required("Name is a required field").min(2,"Minimum 2 symbols"),email:R.Z_().email("Mail must be a valid email").required("Mail is a required field").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),password:R.Z_().required("Password is a required field").min(7,"Minimum 7 symbols")}),T=function(){var e,s,a,r=(0,S.I0)(),R=(0,P.useState)(!1),T=(0,c.Z)(R,2),X=T[0],E=T[1],G=(0,N.cI)({mode:"onChange",resolver:(0,y.X)(M)}),z=G.register,A=G.handleSubmit,H=G.formState,L=H.errors,U=H.isValid,W=H.dirtyFields,B=G.reset;return(0,I.jsxs)("section",{className:n,children:[(0,I.jsx)(C.Z,{}),(0,I.jsxs)("h1",{className:o,children:["Expand your mind, reading ",(0,I.jsx)("span",{children:"a book"})]}),(0,I.jsxs)("form",{onSubmit:A((function(e){r((0,k.yY)(e)),B()})),autoComplete:"off",className:t,children:[(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)("label",{htmlFor:"user_name",children:"Name:"}),(0,I.jsx)("input",(0,i.Z)((0,i.Z)({type:"text",name:"name",id:"user_name"},z("name")),{},{className:"".concat(d," ").concat((null===L||void 0===L?void 0:L.name)&&u," \n            ").concat(W.name&&!L.name&&_,"\n              ")})),(null===L||void 0===L?void 0:L.name)&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("svg",{className:g,children:(0,I.jsx)("use",{href:q.Z+"#icon-error"})}),(0,I.jsx)("p",{className:h,children:null===(e=L.name)||void 0===e?void 0:e.message})]}),W.name&&!L.name&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("svg",{className:g,children:(0,I.jsx)("use",{href:q.Z+"#icon-check"})}),(0,I.jsx)("p",{className:x,children:"This is a correct name"})]})]}),(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)("label",{htmlFor:"user_email",children:"Mail:"}),(0,I.jsx)("input",(0,i.Z)((0,i.Z)({type:"email",name:"email",id:"user_email"},z("email")),{},{className:"".concat(l," ").concat(L.email&&u," \n            ").concat(W.email&&!L.email&&_,"\n              ")})),(null===L||void 0===L?void 0:L.email)&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("svg",{className:g,children:(0,I.jsx)("use",{href:q.Z+"#icon-error"})}),(0,I.jsx)("p",{className:h,children:null===(s=L.email)||void 0===s?void 0:s.message})]}),W.email&&!L.email&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("svg",{className:g,children:(0,I.jsx)("use",{href:q.Z+"#icon-check"})}),(0,I.jsx)("p",{className:x,children:"This is a correct mail"})]})]}),(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)("label",{htmlFor:"user_password",children:"Password:"}),(0,I.jsx)("input",(0,i.Z)((0,i.Z)({type:X?"text":"password",name:"password",id:"user_password"},z("password")),{},{className:"".concat(p," ").concat(L.password&&u," \n            ").concat(W.password&&!L.password&&_,"\n              ")})),X?(0,I.jsx)("svg",{onClick:function(){E(!X)},className:"".concat(g," ").concat(j," ").concat(L.password&&f," ").concat(W.password&&!L.password&&w),children:(0,I.jsx)("use",{href:q.Z+"#icon-eye"})}):(0,I.jsx)("svg",{onClick:function(){E(!X)},className:"".concat(g," ").concat(j," ").concat(L.password&&f," ").concat(W.password&&!L.password&&w),children:(0,I.jsx)("use",{href:q.Z+"#icon-eye-off"})}),(null===L||void 0===L?void 0:L.password)&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("p",{className:h,children:null===(a=L.password)||void 0===a?void 0:a.message})}),W.password&&!L.password&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("p",{className:x,children:"Password is secure"})})]}),(0,I.jsxs)("div",{className:b,children:[(0,I.jsx)("button",{type:"submit",disabled:!U,className:v,children:"Registration"}),(0,I.jsx)(Z.rU,{className:F,to:"/login",children:"Already have an account?"})]})]})]})},X=a(8616),E=function(){return(0,I.jsxs)("div",{className:r,children:[(0,I.jsx)(T,{}),(0,I.jsx)(X.Z,{})]})}}}]);
//# sourceMappingURL=575.53049cf7.chunk.js.map