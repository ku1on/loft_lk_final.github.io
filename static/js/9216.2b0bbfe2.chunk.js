"use strict";(self.webpackChunkloft=self.webpackChunkloft||[]).push([[9216],{79216:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(1413),a=r(15861),c=r(29439),s=r(87757),o=r.n(s),i=r(90841),u=r(44415),l=r(12520),x=r(67056),d=r(47313),h=r(31881),p=r.n(h),f=r(69172),m=r(2360),g=r(23901),v=r(75627),j=r(24511),Z=r(46417);function b(){var e=(0,j.$)().t,t=(0,d.useState)([]),r=(0,c.Z)(t,2),s=r[0],h=r[1],b=(0,d.useState)(!1),w=(0,c.Z)(b,2),k=w[0],S=w[1],q=(0,d.useState)(!1),y=(0,c.Z)(q,2),z=y[0],C=y[1],B=(0,d.useState)(0),I=(0,c.Z)(B,2),W=I[0],_=I[1],E=(0,d.useState)(!1),$=(0,c.Z)(E,2),A=($[0],$[1]),K=function(){var e=(0,a.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get("".concat((0,f.Z)(),"/user/get_releases?type=moderation&limit=").concat(t),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 2:r=e.sent,h(r.data.releases),S(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get("".concat((0,f.Z)(),"/user/get_releases?type=moderation"),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 2:t=e.sent,_(t.data.total),S(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){k||(K(5),M())}),[]);var N=(0,v.cI)(),R=N.register,U=N.handleSubmit,X=function(){var e=(0,a.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!1),A(!0),e.prev=2,""!==t.q){e.next=9;break}K(5),M(),C(!1),e.next=15;break;case 9:return e.next=11,p().get("".concat((0,f.Z)(),"/user/search?type=moderation&q=").concat(t.q),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 11:r=e.sent,C(!0),_(r.data.total),h(r.data.releases);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(2);case 19:return e.prev=19,S(!0),A(!1),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[2,17,19,23]])})));return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(i.xu,{children:[(0,Z.jsx)(i.X6,{size:"2xl",children:e("menu.moderation")}),(0,Z.jsx)(i.xu,{mt:"20px",children:(0,Z.jsx)(i.xu,{borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",maxW:"lg",bgColor:"white",children:(0,Z.jsx)(i.xu,{m:"20px",children:(0,Z.jsx)("form",{onSubmit:U(X),children:(0,Z.jsx)(i.Kq,{direction:["column","row"],spacing:"10px",children:(0,Z.jsx)(u.NI,{onChange:function(){X({q:document.getElementById("q").value})},children:(0,Z.jsx)(l.Input,(0,n.Z)({id:"q",placeholder:e("catalog.search")},R("q")))})})})})})}),!k&&(0,Z.jsx)(i.M5,{children:(0,Z.jsx)(x.$,{color:"main",size:"xl"})})||(0,Z.jsxs)(i.xu,{mt:"20px",maxW:"full",children:[(0,Z.jsxs)(i.xv,{fontSize:"xl",mb:"20px",children:[e("catalog.total"),": ",W]}),s.map((function(e){return(0,Z.jsx)(g.Z,{release:e})})),W>5&&(0,Z.jsx)(i.xu,{children:!z&&(0,Z.jsx)(i.xu,{children:(0,Z.jsx)(i.rU,{fontWeight:"bold",_hover:{color:"main"},onClick:function(){C(!0),K("")},children:e("catalog.showAll")})})})]})]})}}}]);