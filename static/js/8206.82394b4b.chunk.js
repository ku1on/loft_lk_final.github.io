"use strict";(self.webpackChunkloft=self.webpackChunkloft||[]).push([[8206],{68206:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),a=n(15861),c=n(29439),s=n(87757),i=n.n(s),o=n(90841),u=n(44415),x=n(12520),l=n(67056),d=n(47313),p=n(31881),h=n.n(p),f=n(69172),m=n(2360),v=n(23901),j=n(75627),Z=n(46417);function b(){var e=(0,d.useState)([]),t=(0,c.Z)(e,2),n=t[0],s=t[1],p=(0,d.useState)(!1),b=(0,c.Z)(p,2),g=b[0],k=b[1],w=(0,d.useState)(!1),S=(0,c.Z)(w,2),q=S[0],y=S[1],z=(0,d.useState)(0),C=(0,c.Z)(z,2),B=C[0],I=C[1],W=(0,d.useState)(!1),_=(0,c.Z)(W,2),E=(_[0],_[1]),A=function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("".concat((0,f.Z)(),"/admin/get_releases?type=ok&limit=").concat(t),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 2:n=e.sent,s(n.data.releases),k(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("".concat((0,f.Z)(),"/admin/get_releases?type=ok"),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 2:t=e.sent,I(t.data.total),k(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){g||(A(5),K())}),[]);var M=(0,j.cI)(),N=M.register,R=M.handleSubmit,U=function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!1),E(!0),e.prev=2,""!==t.q){e.next=9;break}A(5),K(),y(!1),e.next=15;break;case 9:return e.next=11,h().get("".concat((0,f.Z)(),"/admin/search?type=ok&q=").concat(t.q),{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 11:n=e.sent,y(!0),I(n.data.total),s(n.data.releases);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(2);case 19:return e.prev=19,k(!0),E(!1),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[2,17,19,23]])})));return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)(o.xu,{children:[(0,Z.jsx)(o.X6,{size:"2xl",children:"\u0420\u0435\u043b\u0438\u0437\u044b"}),(0,Z.jsx)(o.xu,{mt:"20px",children:(0,Z.jsx)(o.xu,{borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",maxW:"lg",bgColor:"white",children:(0,Z.jsx)(o.xu,{m:"20px",children:(0,Z.jsx)("form",{onSubmit:R(U),children:(0,Z.jsx)(o.Kq,{direction:["column","row"],spacing:"10px",children:(0,Z.jsx)(u.NI,{onChange:function(){U({q:document.getElementById("q").value})},children:(0,Z.jsx)(x.Input,(0,r.Z)({id:"q",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e, \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044e"},N("q")))})})})})})}),!g&&(0,Z.jsx)(o.M5,{children:(0,Z.jsx)(l.$,{color:"main",size:"xl"})})||(0,Z.jsxs)(o.xu,{mt:"20px",maxW:"full",children:[(0,Z.jsxs)(o.xv,{fontSize:"xl",mb:"20px",children:["\u0412\u0441\u0435\u0433\u043e \u0440\u0435\u043b\u0438\u0437\u043e\u0432: ",B]}),n.map((function(e){return(0,Z.jsx)(v.Z,{isAdmin:!0,release:e})})),B>5&&(0,Z.jsx)(o.xu,{children:!q&&(0,Z.jsx)(o.xu,{children:(0,Z.jsx)(o.rU,{fontWeight:"bold",_hover:{color:"main"},onClick:function(){y(!0),A("")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"})})})]})]})}}}]);