(self.webpackChunkloft=self.webpackChunkloft||[]).push([[6481],{22858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},13884:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(s){l=!0,i=s}finally{try{c||null==n.return||n.return()}finally{if(l)throw i}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},80521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},63038:function(e,t,n){var r=n(22858),i=n(13884),o=n(60379),c=n(80521);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},80156:function(e,t,n){"use strict";n(47313);t.Z=n.p+"static/media/not_found.200d27f810b0b184b0ff5164f1455f07.svg"},7389:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(15861),i=n(29439),o=n(87757),c=n.n(o),l=n(38569),s=n(64153),a=n(74511),d=n(24149),x=n(16106),u=n(29596),p=n(90841),h=n(67056),f=n(31554),j=n(69172),m=n(2360),b=n(31881),g=n.n(b),v=n(47313),w=n(58585),k=n.n(w),y=n(58821),S=n(5958),Z=n(24511),C=n(46417);function _(e){var t=(0,Z.$)().t,n=e.track,o=e.isEdit,b=(0,s.qY)(),w=b.isOpen,_=b.onOpen,T=b.onClose,z=(0,v.useRef)(),R=(0,v.useState)(!1),U=(0,i.Z)(R,2),A=U[0],L=U[1],W=(0,v.useState)(!1),B=(0,i.Z)(W,2),O=B[0],q=B[1],E=(0,a.pm)(),M=(0,l.Q)({src:"".concat((0,j.Z)()).concat(n.wav),loop:!1}),I=M.isPlaying,K=M.toggle,P=function(e){return(0,C.jsx)(d.u,{borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",label:e.name,hasArrow:!0,placement:"top",children:(0,C.jsx)(x.hU,{icon:e.icon,fontSize:"20px",variant:"ghost",_active:{boxShadow:"none!important"},_focus:{boxShadow:"none!important"},onClick:e.onClick})})},H=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,g().post("".concat((0,j.Z)(),"/user/delete_track"),{id:n.id},{headers:{authorization:"Bearer ".concat((0,m.Z)())}});case 4:(t=e.sent).data.error?E({position:"top",title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",description:"".concat(t.data.error),status:"error",duration:9e3,isClosable:!0}):q(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E({position:"top",title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",description:"".concat(e.t0),status:"error",duration:9e3,isClosable:!0});case 11:L(!1),T();case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();console.log(e);if(!O)return(0,C.jsxs)(u.Tr,{children:[(0,C.jsx)(u.Td,{children:(0,C.jsx)(x.hU,{icon:I?(0,C.jsx)(y.wRS,{}):(0,C.jsx)(y.cuI,{}),variant:"ghost",fontSize:"20px",_hover:{color:"main"},onClick:K})}),(0,C.jsx)(u.Td,{children:n.title}),(0,C.jsx)(u.Td,{children:n.version||"\u041d/\u0410"}),(0,C.jsx)(u.Td,{children:n.artists}),(0,C.jsx)(u.Td,{children:n.author}),(0,C.jsx)(u.Td,{children:n.composer}),(0,C.jsxs)(u.Td,{children:[0===n.explicit&&t("edit.tracklist.explicit.no")||t("edit.tracklist.explicit.yes")," "]}),(0,C.jsx)(u.Td,{children:!A&&(0,C.jsxs)(p.Ug,{spacing:"5px",children:[(0,C.jsx)(P,{icon:(0,C.jsx)(S.JfT,{}),name:t("track.download"),onClick:function(){L(!0),g().get("https://api.codetabs.com/v1/proxy?quest=".concat((0,j.Z)()).concat(n.wav),{responseType:"blob"}).then((function(e){var t=n.version?" (".concat(n.version,")"):"",r="".concat(n.artists," - ").concat(n.title).concat(t,".wav");k()(e.data,r),L(!1)}))}}),o&&(0,C.jsx)(P,{icon:(0,C.jsx)(y.yvY,{}),name:t("track.delete"),onClick:_})]})||(0,C.jsx)(h.$,{color:"main"})}),(0,C.jsx)(f.aR,{isOpen:w,leastDestructiveRef:z,onClose:T,children:(0,C.jsx)(f.dh,{backdropFilter:"blur(5px)",children:(0,C.jsxs)(f._T,{children:[(0,C.jsx)(f.fY,{fontSize:"lg",fontWeight:"bold",children:t("track.delete")}),(0,C.jsxs)(f.iP,{children:[t("track.delete_1"),' "',n.title,'" ',t("release.delete_2")]}),(0,C.jsxs)(f.xo,{children:[(0,C.jsx)(x.zx,{ref:z,onClick:T,children:t("release.cancel")}),(0,C.jsx)(x.zx,{colorScheme:"red",onClick:H,isLoading:A,ml:3,children:t("release.delete")})]})]})})})]})}},95930:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(15861),i=n(29439),o=n(87757),c=n.n(o),l=n(7389),s=n(74511),a=n(90841),d=(n(67056),n(64153)),x=n(97418),u=n(4086),p=n(29596),h=n(47313),f=n(31881),j=n.n(f),m=n(69172),b=n(2360),g=n(97890),v=n(58821),w=n(24511),k=n(46417);function y(e){var t=(0,w.$)().t,n="user";e.isAdmin&&(n="admin");(0,s.pm)();var o=e.rid,f=(0,h.useState)(),y=(0,i.Z)(f,2),S=(y[0],y[1]),Z=(0,h.useState)([]),C=(0,i.Z)(Z,2),_=C[0],T=C[1],z=(0,h.useState)(!1),R=(0,i.Z)(z,2),U=R[0],A=R[1],L=(0,h.useState)(!1),W=(0,i.Z)(L,2),B=(W[0],W[1],(0,h.useState)(!1)),O=(0,i.Z)(B,2),q=O[0],E=O[1],M=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j().get("".concat((0,m.Z)(),"/").concat(n,"/get_release_info?id=").concat(o),{headers:{authorization:"Bearer ".concat((0,b.Z)())}});case 2:(t=e.sent).data.error?E(!0):(S(t.data.release),T(t.data.tracks),A(!0));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){U||M()}),[]);var I=(0,d.qY)(),K=I.isOpen,P=I.onToggle;return(0,k.jsxs)(a.xu,{children:[(0,k.jsxs)(a.Ug,{style:{textDecoration:"none"},_focus:{boxShadow:"none"},_hover:{color:"gray.600","text-decoration":"none"},color:"black",fontWeight:"bold",lineHeight:"1.5rem",mt:"15px",as:a.rU,onClick:P,children:[(0,k.jsx)(a.xv,{style:{marginTop:"0px",marginInline:"0px",marginBottom:"0px"},children:t("tracklist.title")}),(0,k.jsx)(x.JO,{ml:"0.75rem",as:K&&v.IAR||v.fmn,fontSize:"17px"})]}),q&&(0,k.jsx)(g.Fg,{to:"/404"}),U&&(0,k.jsx)(u.UO,{in:K,unmountOnExit:!0,animateOpacity:!0,children:(0,k.jsx)(a.W2,{maxW:"full",alignContent:"center",alignItems:"center",children:(0,k.jsx)(p.xJ,{children:(0,k.jsxs)(p.iA,{children:[(0,k.jsx)(p.hr,{children:(0,k.jsxs)(p.Tr,{children:[(0,k.jsx)(p.Th,{}),(0,k.jsx)(p.Th,{children:t("tracklist.name")}),(0,k.jsx)(p.Th,{children:t("tracklist.version")}),(0,k.jsx)(p.Th,{children:t("tracklist.artists")}),(0,k.jsx)(p.Th,{children:t("tracklist.author")}),(0,k.jsx)(p.Th,{children:t("tracklist.composer")}),(0,k.jsx)(p.Th,{children:"Explicit"}),(0,k.jsx)(p.Th,{})]})}),(0,k.jsx)(p.p3,{children:_.map((function(e){return(0,k.jsx)(l.Z,{track:e})}))})]})})})})]})}},50531:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(15861),i=n(29439),o=n(87757),c=n.n(o),l=n(90841),s=n(67056),a=n(47313),d=n(31881),x=n.n(d),u=n(69172),p=n(2360),h=n(4942),f=n(74511),j=n(24149),m=n(16106),b=n(78365),g=n(26535),v=n(60062),w=n(80156),k=(n(95930),n(29466)),y=n(97890),S=n(24511),Z=n(26672),C=n(32916),_=n(46417);function T(e){var t=(0,S.$)().t,n=((0,y.s0)(),e.release),r=e.link,i=(0,f.pm)(),o=function(e){return(0,_.jsx)(j.u,{borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",label:e.name,hasArrow:!0,placement:"top",children:(0,_.jsx)(m.hU,{icon:e.icon,fontSize:"20px",variant:"ghost",_hover:{color:"main"},onClick:e.onClick})})},c=function(e){return(0,_.jsx)(j.u,{borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",label:e.name,hasArrow:!0,placement:"top",children:(0,_.jsx)(m.hU,{icon:e.icon,fontSize:"20px",variant:"ghost",_hover:{color:"main"},as:k.rU,to:e.to})})},s=function(e){var t=document.createElement("a");t.target="_blank",t.href=e,t.click()},a=function(){var e,a;return(0,_.jsx)(l.xu,(a={style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"},borderRadius:"lg",mb:"10px",borderWidth:"1px"},(0,h.Z)(a,"style",{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"}),(0,h.Z)(a,"borderRadius","lg"),(0,h.Z)(a,"bgColor","white"),(0,h.Z)(a,"children",(0,_.jsx)(l.xu,{m:"20px",children:(0,_.jsxs)(l.Ug,{spacing:"20px",children:[(0,_.jsx)(l.xu,{children:(0,_.jsx)(l.oM,{w:"144px",h:"144px",children:(0,_.jsx)(v.Z,(e={src:"https://image.loftlabel.ru/resize?image=".concat((0,u.Z)()).concat(n.cover,"&w=144&h=144"),fallbackSrc:w.Z,draggable:!1,style:{overflow:"hidden",position:"absolute",inset:"0px",display:"flex",WebkitBoxPack:"center",justifyContent:"center",WebkitBoxAlign:"center",alignItems:"center",width:"100%",height:"100%"},borderWidth:"2px"},(0,h.Z)(e,"style",{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"}),(0,h.Z)(e,"borderRadius","lg"),(0,h.Z)(e,"borderWidth","1px"),e))})}),(0,_.jsx)(l.xu,{w:"full",children:(0,_.jsxs)(l.Kq,{direction:["column","row"],style:{WebkitBoxPack:"justify",justifyContent:"space-between"},w:"full",children:[(0,_.jsxs)(l.Kq,{direction:"column",spacing:"10px",children:[(0,_.jsxs)(l.xu,{children:[(0,_.jsx)(l.xv,{children:n.title||"\u041d/\u0410"}),(0,_.jsx)(l.xv,{children:n.artists||"\u041d/\u0410"})]}),(0,_.jsxs)(l.xu,{children:[(0,_.jsx)(l.xv,{color:"#4B5563",children:"UPC"}),(0,_.jsx)(l.xv,{children:n.upc||"\u041d/\u0410"})]}),(0,_.jsxs)(l.xu,{children:[(0,_.jsx)(l.xv,{color:"#4B5563",children:t("release.date")}),(0,_.jsx)(l.xv,{children:n.date||"\u041d/\u0410"})]})]}),(0,_.jsxs)(l.Ug,{spacing:"5px",children:[(0,_.jsx)(o,{name:t("links.to_link"),icon:(0,_.jsx)(C.AlO,{}),onClick:function(){s("https://either.fun/".concat(r.token))}}),(0,_.jsx)(o,{name:t("links.copy_link"),icon:(0,_.jsx)(Z.Dup,{}),onClick:function(){navigator.clipboard.writeText("https://either.fun/".concat(r.token)),i({position:"top",title:'\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 "'.concat(n.title,'" \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430.'),status:"info",duration:3e3,isClosable:!0})}}),(0,_.jsx)(c,{name:t("links.edit_link"),icon:(0,_.jsx)(C.vPQ,{}),to:"/marketing/promo-links/".concat(r.id,"/edit")})]})]})})]})})),a))},d=function(){var e;return(0,_.jsx)(l.xu,(e={borderRadius:"lg",mb:"10px",borderWidth:"1px",style:{boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.01),0px 2px 4px -1px rgba(0, 0, 0, 0.06)"}},(0,h.Z)(e,"borderRadius","lg"),(0,h.Z)(e,"bgColor","white"),(0,h.Z)(e,"children",(0,_.jsx)(l.Kq,{direcion:"column",w:"full",h:"full",padding:6,children:(0,_.jsxs)(l.Kq,{direction:"column",spacing:"15px",children:[(0,_.jsxs)(l.Kq,{direction:"row",w:"full",alignItems:"center",spacing:"15px",children:[(0,_.jsx)(l.xu,{alignSelf:"start",paddingTop:1,children:(0,_.jsx)(l.oM,{w:12,h:12,position:"relative",children:(0,_.jsx)(b.Ee,{fallbackSrc:w.Z,draggable:!1,src:"https://image.either.digital/resize?image=".concat((0,u.Z)()).concat(n.cover||"null","&w=100&h=100"),w:"full",h:"full",alignItems:"center",position:"absolute"})})}),(0,_.jsx)(l.Kq,{direction:"column",w:"full",alignItems:"start",children:(0,_.jsx)(l.Kq,{direction:"row",justifyContent:"space-between",w:"full",children:(0,_.jsx)(l.Kq,{direction:"column",children:(0,_.jsxs)(l.xv,{fontSize:"0.875rem",lineHeight:"1.25rem",maxW:"12rem",overflow:"hidden",children:[n.title,(0,_.jsx)("br",{}),n.artists]})})})}),(0,_.jsxs)(g.v2,{children:[(0,_.jsx)(g.j2,{as:m.zx,variant:"unstyled",_active:{color:"main"},children:(0,_.jsx)(l.M5,{children:(0,_.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 1024 1024",width:"24px",height:"24px","aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"})})})}),(0,_.jsxs)(g.qy,{children:[(0,_.jsx)(g.sN,{onClick:function(){s("https://either.fun/".concat(r.token))},children:t("links.to_link")}),(0,_.jsx)(g.sN,{onClick:function(){navigator.clipboard.writeText("https://either.fun/".concat(r.token)),i({position:"top",title:'\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 "'.concat(n.title,'" \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430.'),status:"info",duration:3e3,isClosable:!0})},children:t("links.copy_link")})]})]})]}),(0,_.jsx)(l.xu,{w:"full"}),(0,_.jsxs)(l.Kq,{direction:"row",justifyContent:"space-between",w:"full",children:[(0,_.jsx)(l.xv,{fontSize:"0.75rem",lineHeight:"1rem",color:"#4B5563",children:"UPC"}),(0,_.jsx)(l.xv,{fontSize:"0.875rem",lineHeight:"1.25rem",children:n.upc||"\u041d/\u0410"})]}),(0,_.jsxs)(l.Kq,{direction:"row",justifyContent:"space-between",w:"full",children:[(0,_.jsx)(l.xv,{fontSize:"0.75rem",lineHeight:"1rem",color:"#4B5563",children:t("release.date")}),(0,_.jsx)(l.xv,{fontSize:"0.875rem",lineHeight:"1.25rem",children:n.date||"\u041d/\u0410"})]})]})})),e))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.xu,{display:{base:"none",md:"block"},children:(0,_.jsx)(a,{})}),(0,_.jsxs)(l.xu,{display:{base:"block",md:"none"},children:[(0,_.jsx)(d,{})," "]})]})}function z(){var e=(0,S.$)().t,t=(0,a.useState)([]),n=(0,i.Z)(t,2),o=n[0],d=n[1],h=(0,a.useState)(!1),f=(0,i.Z)(h,2),j=f[0],m=f[1],b=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get("".concat((0,u.Z)(),"/user/get_links"),{headers:{authorization:"Bearer ".concat((0,p.Z)())}});case 2:t=e.sent,d(t.data.links),m(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){j||b()}),[]),(0,_.jsxs)(l.xu,{children:[(0,_.jsx)(l.X6,{size:"2xl",children:e("menu.links")}),!j&&(0,_.jsx)(l.M5,{children:(0,_.jsx)(s.$,{color:"main",size:"xl"})})||(0,_.jsx)(l.xu,{mt:"20px",maxW:"full",children:o.map((function(e){return(0,_.jsx)(T,{release:e.release,link:e.link})}))})]})}},58585:function(e){e.exports=function(e,t,n,r){var i=new Blob("undefined"!==typeof r?[r,e]:[e],{type:n||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,t);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),c=document.createElement("a");c.style.display="none",c.href=o,c.setAttribute("download",t),"undefined"===typeof c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(o)}),200)}}},38569:function(e,t,n){"use strict";t.Q=void 0;var r=n(68252);Object.defineProperty(t,"Q",{enumerable:!0,get:function(){return r.useAudio}})},68252:function(e,t,n){"use strict";var r=n(63038).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useAudio=void 0;var i=n(47313);t.useAudio=function(e){var t=(0,i.useMemo)((function(){return new Audio(e.src)}),[e.src]),n=(0,i.useState)(!1),o=r(n,2),c=o[0],l=o[1],s=function(){t.play().then((function(){return l(!0)})).catch((function(t){var n;l(!1),console.log(t),null===(n=e.onError)||void 0===n||n.call(e,t)}))},a=function(){l(!1),t.pause()};return(0,i.useEffect)((function(){return t.loop=e.loop||!1,t.volume=e.volume||1,t.muted=e.muted||!1,t.onloadeddata=function(t){var n;return null===(n=e.onLoadedData)||void 0===n?void 0:n.call(e,t)},t.addEventListener("ended",(function(n){var r;null===(r=e.onEnded)||void 0===r||r.call(e,n),e.loop?t.play():l(!1)})),function(){!e.loop&&t.removeEventListener("ended",(function(){return l(!1)}))}}),[t,e]),{isPlaying:c,play:s,pause:a,toggle:function(){return c?a():s()}}}}}]);