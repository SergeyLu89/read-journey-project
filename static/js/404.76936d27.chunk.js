"use strict";(self.webpackChunkread_journey_project=self.webpackChunkread_journey_project||[]).push([[404],{8616:function(e,s,a){a.d(s,{Z:function(){return _}});var o="HeroImageComponent_heroSection__Dqf0T",r=a.p+"static/media/hero-mobile.c5ab32df8f57990441d2.png",i=a.p+"static/media/hero-mobile@2x.00cbcddecf3eaa5bfdf8.png",c=a.p+"static/media/hero-mobile.4f5034c890b8c3f10a11.webp",n=a.p+"static/media/hero-mobile@2x.bc0da464a32f7041d21a.webp",t=a.p+"static/media/hero-desktop.ae19922edd033e26331d.png",d=a.p+"static/media/hero-desktop@2x.47c36118cdf82ff9631a.png",m=a.p+"static/media/hero-desktop.c685a04f2b6121d3921d.webp",l=a.p+"static/media/hero-desktop@2x.e466710d9c2afd0ea4c4.webp",p=a(3329),_=function(){return(0,p.jsx)("section",{className:o,children:(0,p.jsxs)("picture",{children:[(0,p.jsx)("source",{media:"(min-width: 1440px)",type:"image/webp",srcSet:"".concat(m," 1x, ").concat(l," 2x")}),(0,p.jsx)("source",{media:"(min-width: 1440px)",type:"image/png",srcSet:"".concat(t," 1x, ").concat(d," 2x")}),(0,p.jsx)("source",{media:"(min-width: 375px)",type:"image/webp",srcSet:"".concat(c," 1x, ").concat(n," 2x")}),(0,p.jsx)("source",{media:"(min-width: 375px)",type:"image/png",srcSet:"".concat(r," 1x, ").concat(i," 2x")}),(0,p.jsx)("img",{srcSet:r,alt:"iPhone"})]})})}},1125:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var o="LoginPage_pageWrapper__Gg3CJ",r=a(1413),i=a(9439),c="LoginForm_loginBlok__wlM4f",n="LoginForm_mainTitle__+S95j",t="LoginForm_loginForm__62Mj4",d="LoginForm_inputWrapper__8bb4W",m="LoginForm_emailInput__I0YKY",l="LoginForm_passwordInput__I2sqr",p="LoginForm_error__mHU6m",_="LoginForm_correct__-XySS",u="LoginForm_errorMessage__IE0L8",x="LoginForm_correctMessage__qM5JO",g="LoginForm_inputSvg__s4oEz",h="LoginForm_eyeSvg__vHy+L",j="LoginForm_eyeError__bpAWh",f="LoginForm_eyeCorrect__-2hBC",w="LoginForm_buttonWrapper__sxAgp",b="LoginForm_formBtn__DVXZt",v="LoginForm_registerLink__Pg4pp",F=a(1134),L=a(4695),y=a(8007),N=a(1087),Z=a(4420),S=a(5822),k=a(232),C=a(4596),I=a(2791),M=a(3329),q=y.Ry({email:y.Z_().email("Mail must be a valid email").required("Mail is a required field").matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),password:y.Z_().required("Password is a required field").min(7,"Minimum 7 symbols")}),P=function(){var e,s,a=(0,Z.I0)(),o=(0,I.useState)(!1),y=(0,i.Z)(o,2),P=y[0],W=y[1],A=(0,F.cI)({mode:"onChange",resolver:(0,L.X)(q)}),E=A.register,z=A.handleSubmit,B=A.formState,D=B.errors,H=B.isValid,T=B.dirtyFields;return(0,M.jsxs)("section",{className:c,children:[(0,M.jsx)(k.Z,{}),(0,M.jsxs)("h1",{className:n,children:["Expand your mind, reading ",(0,M.jsx)("span",{children:"a book"})]}),(0,M.jsxs)("form",{onSubmit:z((function(e){console.log(e),a((0,S.iW)(e))})),autoComplete:"off",className:t,children:[(0,M.jsxs)("div",{className:d,children:[(0,M.jsx)("label",{htmlFor:"user_email",children:"Mail:"}),(0,M.jsx)("input",(0,r.Z)((0,r.Z)({type:"email",name:"email",id:"user_email"},E("email")),{},{className:"".concat(m," ").concat(D.email&&p," \n            ").concat(T.email&&!D.email&&_,"\n              ")})),(null===D||void 0===D?void 0:D.email)&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("svg",{className:g,children:(0,M.jsx)("use",{href:C.Z+"#icon-error"})}),(0,M.jsx)("p",{className:u,children:null===(e=D.email)||void 0===e?void 0:e.message})]}),T.email&&!D.email&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("svg",{className:g,children:(0,M.jsx)("use",{href:C.Z+"#icon-check"})}),(0,M.jsx)("p",{className:x,children:"This is a correct mail"})]})]}),(0,M.jsxs)("div",{className:d,children:[(0,M.jsx)("label",{htmlFor:"user_password",children:"Password:"}),(0,M.jsx)("input",(0,r.Z)((0,r.Z)({type:P?"text":"password",name:"password",id:"user_password"},E("password")),{},{className:"".concat(l," ").concat(D.password&&p," \n            ").concat(T.password&&!D.password&&_,"\n              ")})),P?(0,M.jsx)("svg",{onClick:function(){W(!P)},className:"".concat(g," ").concat(h," ").concat(D.password&&j," ").concat(T.password&&!D.password&&f),children:(0,M.jsx)("use",{href:C.Z+"#icon-eye"})}):(0,M.jsx)("svg",{onClick:function(){W(!P)},className:"".concat(g," ").concat(h," ").concat(D.password&&j," ").concat(T.password&&!D.password&&f),children:(0,M.jsx)("use",{href:C.Z+"#icon-eye-off"})}),(null===D||void 0===D?void 0:D.password)&&(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("p",{className:u,children:null===(s=D.password)||void 0===s?void 0:s.message})}),T.password&&!D.password&&(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("p",{className:x,children:"Password is secure"})})]}),(0,M.jsxs)("div",{className:w,children:[(0,M.jsx)("button",{type:"submit",disabled:!H,className:b,children:"Log In"}),(0,M.jsx)(N.rU,{className:v,to:"/register",children:"Don't have an account?"})]})]})]})},W=a(8616),A=function(){return(0,M.jsxs)("div",{className:o,children:[(0,M.jsx)(P,{}),(0,M.jsx)(W.Z,{})]})}}}]);
//# sourceMappingURL=404.76936d27.chunk.js.map