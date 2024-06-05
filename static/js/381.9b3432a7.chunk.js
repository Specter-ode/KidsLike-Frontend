/*! For license information please see 381.9b3432a7.chunk.js.LICENSE.txt */
(self.webpackChunkkidslike=self.webpackChunkkidslike||[]).push([[381],{6245:function(e,t,s){"use strict";var a=s(9439),n=s(2791),l=s(6382),r=s(3329);t.Z=function(e){var t=e.label,s=e.error,i=e.name,o=e.value,c=e.onChange,d=e.required,x=void 0===d||d,p=e.type,m=e.placeholder,u=void 0===m?" ":m,h=e.title,f=e.pattern,b=e.minLength,j=void 0===b?3:b,v=e.maxLength,g=void 0===v?40:v,N=e.helper,k=(0,n.useMemo)((function(){return(0,l.x0)()}),[]),y=(0,n.useState)(!1),w=(0,a.Z)(y,2),T=w[0],C=w[1];return(0,r.jsxs)("div",{className:"relative  mb-[12px]",children:[(0,r.jsx)("input",{className:"input",id:k,name:i,value:o,onChange:c,required:x,placeholder:u,type:p,title:h,pattern:f,minLength:j,maxLength:g,onFocus:function(){C(!0)},onBlur:function(){C(!1)}}),(0,r.jsx)("label",{className:"label",htmlFor:k,children:t}),(0,r.jsx)("span",{className:"error",children:!T&&s}),(0,r.jsx)("span",{className:"helper",children:N})]})}},6005:function(e,t,s){"use strict";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},a.apply(this,arguments)}s.d(t,{Z:function(){return Z}});var n=s(4925),l=s(2791),r=s(1694),i=s.n(r),o={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},c=function(){var e=(0,l.useRef)([]),t=(0,l.useRef)(null);return(0,l.useEffect)((function(){var s=Date.now(),a=!1;e.current.forEach((function(e){if(e){a=!0;var n=e.style;n.transitionDuration=".3s, .3s, .3s, .06s",t.current&&s-t.current<100&&(n.transitionDuration="0s, 0s")}})),a&&(t.current=Date.now())})),e.current},d=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],x=function(e){var t=e.className,s=e.percent,r=e.prefixCls,o=e.strokeColor,x=e.strokeLinecap,p=e.strokeWidth,m=e.style,u=e.trailColor,h=e.trailWidth,f=e.transition,b=(0,n.Z)(e,d);delete b.gapPosition;var j=Array.isArray(s)?s:[s],v=Array.isArray(o)?o:[o],g=c(),N=p/2,k=100-p/2,y="M ".concat("round"===x?N:0,",").concat(N,"\n         L ").concat("round"===x?k:100,",").concat(N),w="0 0 100 ".concat(p),T=0;return l.createElement("svg",a({className:i()("".concat(r,"-line"),t),viewBox:w,preserveAspectRatio:"none",style:m},b),l.createElement("path",{className:"".concat(r,"-line-trail"),d:y,strokeLinecap:x,stroke:u,strokeWidth:h||p,fillOpacity:"0"}),j.map((function(e,t){var s=1;switch(x){case"round":s=1-p/100;break;case"square":s=1-p/2/100;break;default:s=1}var a={strokeDasharray:"".concat(e*s,"px, 100px"),strokeDashoffset:"-".concat(T,"px"),transition:f||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},n=v[t]||v[v.length-1];return T+=e,l.createElement("path",{key:t,className:"".concat(r,"-line-path"),d:y,strokeLinecap:x,stroke:n,strokeWidth:p,fillOpacity:"0",ref:function(e){g[t]=e},style:a})})))};x.defaultProps=o,x.displayName="Line";var p=x,m=s(1002),u=s(9439);var h=0,f=!("undefined"===typeof window||!window.document||!window.document.createElement);var b=function(e){var t=l.useState(),s=(0,u.Z)(t,2),a=s[0],n=s[1];return l.useEffect((function(){n("rc_progress_".concat(function(){var e;return f?(e=h,h+=1):e="TEST_OR_SSR",e}()))}),[]),e||a},j=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function v(e){return+e.replace("%","")}function g(e){var t=null!==e&&void 0!==e?e:[];return Array.isArray(t)?t:[t]}var N=100,k=function(e,t,s,a,n,l,r,i,o,c){var d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,x=s/100*360*((360-l)/360),p=0===l?0:{bottom:0,top:180,left:90,right:-90}[r],m=(100-a)/100*t;return"round"===o&&100!==a&&(m+=c/2)>=t&&(m=t-.01),{stroke:"string"===typeof i?i:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:m+d,transform:"rotate(".concat(n+x+p,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},y=function(e){var t=e.id,s=e.prefixCls,r=e.steps,o=e.strokeWidth,d=e.trailWidth,x=e.gapDegree,p=void 0===x?0:x,u=e.gapPosition,h=e.trailColor,f=e.strokeLinecap,y=e.style,w=e.className,T=e.strokeColor,C=e.percent,L=(0,n.Z)(e,j),Z=b(t),A="".concat(Z,"-gradient"),S=50-o/2,W=2*Math.PI*S,I=p>0?90+p/2:-90,E=W*((360-p)/360),D="object"===(0,m.Z)(r)?r:{count:r,space:2},_=D.count,O=D.space,F=k(W,E,0,100,I,p,u,h,f,o),M=g(C),B=g(T),P=B.find((function(e){return e&&"object"===(0,m.Z)(e)})),U=c();return l.createElement("svg",a({className:i()("".concat(s,"-circle"),w),viewBox:"".concat(-50," ").concat(-50," ").concat(N," ").concat(N),style:y,id:t,role:"presentation"},L),P&&l.createElement("defs",null,l.createElement("linearGradient",{id:A,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(P).sort((function(e,t){return v(e)-v(t)})).map((function(e,t){return l.createElement("stop",{key:t,offset:e,stopColor:P[e]})})))),!_&&l.createElement("circle",{className:"".concat(s,"-circle-trail"),r:S,cx:0,cy:0,stroke:h,strokeLinecap:f,strokeWidth:d||o,style:F}),_?function(){var e=Math.round(_*(M[0]/100)),t=100/_,a=0;return new Array(_).fill(null).map((function(n,r){var i=r<=e-1?B[0]:h,c=i&&"object"===(0,m.Z)(i)?"url(#".concat(A,")"):void 0,d=k(W,E,a,t,I,p,u,i,"butt",o,O);return a+=100*(E-d.strokeDashoffset+O)/E,l.createElement("circle",{key:r,className:"".concat(s,"-circle-path"),r:S,cx:0,cy:0,stroke:c,strokeWidth:o,opacity:1,style:d,ref:function(e){U[r]=e}})}))}():function(){var e=0;return M.map((function(t,a){var n=B[a]||B[B.length-1],r=n&&"object"===(0,m.Z)(n)?"url(#".concat(A,")"):void 0,i=k(W,E,e,t,I,p,u,n,f,o);return e+=t,l.createElement("circle",{key:a,className:"".concat(s,"-circle-path"),r:S,cx:0,cy:0,stroke:r,strokeLinecap:f,strokeWidth:o,opacity:0===t?0:1,style:i,ref:function(e){U[a]=e}})})).reverse()}())};y.defaultProps=o,y.displayName="Circle";var w=s(3153),T=s(9532),C=JSON.parse('{"ru-RU":{"pointsEarned":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0431\u0430\u043b\u043b\u043e\u0432:","earnedAtWeek":"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u044d\u0442\u0443 \u043d\u0435\u0434\u0435\u043b\u044e","plannedAtWeek":"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0431\u0430\u043b\u043b\u043e\u0432 \u043d\u0430 \u044d\u0442\u0443 \u043d\u0435\u0434\u0435\u043b\u044e:"},"uk-UA":{"pointsEarned":"\u0417\u0430\u0440\u043e\u0431\u043b\u0435\u043d\u043e \u0431\u0430\u043b\u0456\u0432:","earnedAtWeek":"\u0417\u0430\u0440\u043e\u0431\u043b\u0435\u043d\u043e \u0431\u0430\u043b\u0456\u0432 \u0437\u0430 \u0446\u0435\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c:","plannedAtWeek":"\u0417\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e \u0431\u0430\u043b\u0456\u0432 \u043d\u0430 \u0446\u0435\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c:"}}'),L=s(3329),Z=function(){var e=(0,w.C)((function(e){return e.auth})).lang,t=(0,w.C)((function(e){return e.info.currentChild})),s=t.rewardsGained,a=t.rewardsPlanned,n=Math.round(s/a*100||0);return(0,L.jsxs)("div",{className:"sTablet:text-center  sLaptop:m-0 sLaptop:flex sLaptop:flex-col sLaptop:items-end sLaptop:text-end lessTablet:max-w-[480px] lessTablet:px-[20px] lessTablet:py-[12px] lessLaptop:mx-auto",children:[(0,L.jsxs)("div",{className:"flex w-[calc(100%-70px)] justify-between sTablet:hidden",children:[(0,L.jsx)("p",{className:"text-[12px] font-medium text-fifth-color ",children:C[e].pointsEarned}),(0,L.jsxs)("p",{className:"text-[12px] font-bold ",children:[n,"%"]})]}),(0,L.jsxs)("div",{className:"hidden sTablet:mb-[10px] sTablet:flex sTablet:justify-center ",children:[(0,L.jsx)("p",{className:"text-[12px] font-medium text-fifth-color  ",children:C[e].earnedAtWeek}),(0,L.jsx)("p",{className:"ml-[14px] w-[16px] text-[12px] font-bold text-main-color",children:s||0})]}),(0,L.jsxs)("div",{className:"hidden sTablet:mb-[10px] sTablet:flex sTablet:justify-center",children:[(0,L.jsx)("p",{className:"text-[12px] font-medium text-fifth-color ",children:C[e].plannedAtWeek}),(0,L.jsx)("p",{className:"ml-[14px] w-[16px] text-[12px] font-bold text-main-color",children:a||0})]}),(0,L.jsxs)("div",{className:"flex items-center sTablet:justify-center",children:[(0,L.jsxs)("div",{className:"mr-[20px]",children:[(0,L.jsx)("p",{className:"text- mr-[8px] inline text-[14px] font-bold",children:s||0}),(0,L.jsxs)("p",{className:"inline text-[14px] font-normal",children:[(0,L.jsx)("span",{className:"mr-[8px]",children:"/"}),a||0]})]}),(0,L.jsxs)("div",{className:"relative h-[6px] w-[calc(100%-8rem)] items-center sTablet:w-[232px] sLaptop:w-[280px]",children:[(0,L.jsx)(p,{percent:n,strokeWidth:3,strokeColor:"#8EC63F",trailWidth:3}),(0,L.jsx)("div",{className:"absolute right-[-68px] bottom-[-16px] sTablet:hidden",children:(0,L.jsx)(T.Z,{})})]}),(0,L.jsxs)("p",{className:"ml-[8px] w-[31.5px] text-[12px] font-bold lessTablet:hidden ",children:[n,"%"]})]})]})}},7836:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return F}});var a=s(9439),n=s(2791),l=s(9085),r=s(4942),i=s(1413),o=s(9601),c=s(6245),d=s(3153),x=s(9452),p=JSON.parse('{"ru-RU":{"nameInputHelper":"\u043e\u0442 3 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432","nameInputTitle":"\u0418\u043c\u044f \u0440\u0435\u0431\u0435\u043d\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0442 3 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.","nameInputLabel":"\u0418\u043c\u044f \u0440\u0435\u0431\u0435\u043d\u043a\u0430","chooseGender":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u043b:","girlInputLabel":"\u0414\u0435\u0432\u043e\u0447\u043a\u0430","boyInputLabel":"\u041c\u0430\u043b\u044c\u0447\u0438\u043a","saveBtn":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},"uk-UA":{"nameInputHelper":"\u0432\u0456\u0434 3 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432","nameInputTitle":"\u0406\u043c\'\u044f \u0434\u0438\u0442\u0438\u043d\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 3 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432","nameInputLabel":"\u0406\u043c\'\u044f \u0434\u0438\u0442\u0438\u043d\u0438","chooseGender":"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u044c:","girlInputLabel":"\u0414\u0456\u0432\u0447\u0438\u043d\u043a\u0430","boyInputLabel":"\u0425\u043b\u043e\u043f\u0447\u0438\u043a","saveBtn":"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}}'),m=s(3329),u={name:"",gender:"male"},h=function(e){var t=e.toggleAddChildForm,s=(0,d.C)((function(e){return e.auth})).lang,l=(0,n.useState)(u),h=(0,a.Z)(l,2),f=h[0],b=h[1],j=(0,d.T)(),v=function(e){var t=e.target,s=t.value,a=t.name;b((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},a,s))}))},g=f.gender,N=f.name;return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j((0,x.U_)((0,i.Z)((0,i.Z)({},f),{},{lang:s}))),b(u),t&&t()},children:[(0,m.jsx)(c.Z,{onChange:v,value:N,name:"name",type:"text",maxLength:20,helper:p[s].nameInputHelper,title:p[s].nameInputTitle,label:p[s].nameInputLabel}),(0,m.jsxs)("div",{className:"flex items-center justify-center",children:[(0,m.jsx)("p",{className:"mr-[40px] text-[14px] font-medium text-second-color",children:p[s].chooseGender}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"mb-[10px]",children:(0,m.jsxs)("label",{htmlFor:"male",className:"flex items-center text-[14px] font-medium text-second-color",children:[(0,m.jsx)("input",{id:"male",className:"absolute opacity-0",type:"radio",name:"gender",value:"male",checked:"male"===g,onChange:v,required:!0}),"male"===g?(0,m.jsx)("svg",{className:"mr-[10px]",width:"20",height:"20",children:(0,m.jsx)("use",{href:o.Z+"#checked"})}):(0,m.jsx)("svg",{className:"mr-[10px]",width:"20",height:"20",children:(0,m.jsx)("use",{href:o.Z+"#unchecked"})}),p[s].boyInputLabel]})}),(0,m.jsx)("div",{children:(0,m.jsxs)("label",{htmlFor:"female",className:"flex items-center text-[14px] font-medium text-second-color",children:[(0,m.jsx)("input",{id:"female",className:"absolute opacity-0",type:"radio",name:"gender",value:"female",checked:"female"===g,onChange:v}),"female"===g?(0,m.jsx)("svg",{className:"mr-[10px]",width:"20",height:"20",children:(0,m.jsx)("use",{href:o.Z+"#checked"})}):(0,m.jsx)("svg",{className:"mr-[10px]",width:"20",height:"20",children:(0,m.jsx)("use",{href:o.Z+"#unchecked"})}),p[s].girlInputLabel]})})]})]}),(0,m.jsx)("button",{className:"btn mx-auto mt-[20px] w-full text-[12px]",type:"submit",children:p[s].saveBtn})]})},f=s(5570),b=s(3525),j=s(9657),v=s(7709),g=JSON.parse('{"ru-RU":{"choose":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","change":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c","back":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","profileIsNotChosen":"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d","profileIsChosen":"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430:"},"uk-UA":{"choose":"\u0412\u0438\u0431\u0440\u0430\u0442\u0438","add":"\u0414\u043e\u0434\u0430\u0442\u0438","change":"\u0417\u043c\u0456\u043d\u0438\u0442\u0438","back":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c","profileIsNotChosen":"\u041f\u0440\u043e\u0444\u0456\u043b\u044c \u0434\u0438\u0442\u0438\u043d\u0438 \u043d\u0435 \u0432\u0438\u0431\u0440\u0430\u043d\u0438\u0439","profileIsChosen":"\u041e\u0431\u0440\u0430\u043d\u043e \u043f\u0440\u043e\u0444\u0456\u043b\u044c \u0434\u0438\u0442\u0438\u043d\u0438:"}}'),N=function(e){var t=e.toggleAddChildForm,s=(0,j.Z)().width,l=(0,d.C)((function(e){return e.auth})).lang,r=(0,d.C)((function(e){return e.info})),i=r.currentChild,c=r.children,x=(0,n.useState)(!1),p=(0,a.Z)(x,2),u=p[0],h=p[1],f=(0,n.useState)(null===i||void 0===i?void 0:i._id),b=(0,a.Z)(f,2),N=b[0],k=b[1],y=(0,d.T)(),w=function(e){var t=e.target.value;k(t)},T=i&&null!==i&&void 0!==i&&i._id?g[l].profileIsChosen:g[l].profileIsNotChosen;return(0,m.jsx)("div",{className:"relative mb-[20px]",style:{minHeight:c.length>1?56:"auto"},children:u?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:"btn absolute z-10 w-[120px] sTablet:left-0 sTablet:top-0 lessTablet:bottom-[-10px] lessTablet:right-0 ",style:{height:"auto"},type:"button",onClick:function(){h(!1),k("")},children:g[l].back}),(0,m.jsxs)("div",{className:"relative flex items-center justify-between sMob:w-[376px] sTablet:h-[25px] sTablet:w-auto sTablet:justify-center lessMob:w-[280px]",children:[(0,m.jsx)("p",{className:"text-[14px] font-medium text-fifth-color",children:T}),(0,m.jsx)("p",{className:"ml-[10px] flex items-center text-[14px] font-bold text-main-color",children:null===i||void 0===i?void 0:i.name}),(0,m.jsx)("svg",{className:"ml-[5px] pb-[2px]",width:"23",height:"23",children:(0,m.jsx)("use",{href:o.Z+"#".concat(null===i||void 0===i?void 0:i.gender)})})]}),(0,m.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=c.find((function(e){return e._id===N}));t&&(y((0,v.xz)(t)),h(!1))},className:" mt-[10px] sTablet:flex sTablet:flex-wrap sTablet:justify-center lessTablet:pb-[25px]",children:c.filter((function(e){return e._id!==(null===i||void 0===i?void 0:i._id)})).map((function(e){return(0,m.jsxs)("div",{className:"flex sTablet:mr-[20px] sTablet:min-w-[110px] sTablet:flex-col sTablet:items-center sTablet:justify-center sTablet:last:mr-0 lessTablet:mb-[5px] lessTablet:min-h-[25px] lessTablet:items-center lessTablet:justify-between lessTablet:last:mb-0",children:[(0,m.jsxs)("label",{htmlFor:e.name,className:"flex items-center text-[14px] font-medium text-fifth-color ",children:[(0,m.jsx)("input",{id:e.name,className:"absolute opacity-0",type:"radio",name:"\u0420\u0435\u0431\u0435\u043d\u043e\u043a",value:e._id,checked:N===e._id,onChange:w}),N===e._id?(0,m.jsx)("svg",{className:"mr-[5px]",width:"21",height:"21",children:(0,m.jsx)("use",{href:o.Z+"#checked"})}):(0,m.jsx)("svg",{className:"mr-[5px]",width:"21",height:"21",children:(0,m.jsx)("use",{href:o.Z+"#unchecked"})}),e.name]}),N===e._id&&(0,m.jsx)("button",{className:"btn w-[120px] sTablet:absolute sTablet:right-0  sTablet:top-0 lessTablet:ml-auto",style:{height:"auto"},children:g[l].choose})]},e._id)}))})]}):(0,m.jsx)(m.Fragment,{children:s<768?(0,m.jsxs)("div",{className:"w-[280px] sMob:w-[376px]",children:[(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("p",{className:"text-[14px] font-medium text-fifth-color",children:T}),(0,m.jsxs)("div",{className:"ml-[10px] flex items-center",children:[(0,m.jsx)("p",{className:" text-[14px] font-bold text-main-color",children:(null===i||void 0===i?void 0:i.name)||""}),(0,m.jsx)("svg",{className:"ml-[5px] pb-[2px]",width:"23",height:"23",children:(0,m.jsx)("use",{href:o.Z+"#".concat(null===i||void 0===i?void 0:i.gender)})})]})]}),(0,m.jsxs)("div",{className:"mt-[10px] flex justify-between",children:[(0,m.jsx)("button",{className:"btn w-full",style:{height:"auto"},type:"button",onClick:t,children:g[l].add}),c.length>1&&(0,m.jsx)("button",{className:"btn  ml-[10px] w-full",style:{height:"auto"},type:"button",onClick:function(){h(!0)},children:g[l].change})]})]}):(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsx)("button",{className:"btn w-[120px]",style:{height:"auto"},type:"button",onClick:t,children:g[l].add}),(0,m.jsxs)("div",{className:" flex items-center",children:[(0,m.jsx)("p",{className:"text-[14px] font-medium text-fifth-color",children:T}),(0,m.jsx)("p",{className:"ml-[10px] flex items-center text-[14px] font-bold text-main-color",children:null===i||void 0===i?void 0:i.name}),(0,m.jsx)("svg",{className:"ml-[5px] pb-[2px]",width:"23",height:"23",children:(0,m.jsx)("use",{href:o.Z+"#".concat(null===i||void 0===i?void 0:i.gender)})})]}),(0,m.jsx)("button",{className:"btn w-[120px]",style:{height:"auto",opacity:c.length>1?1:0,pointerEvents:c.length>1?"auto":"none"},type:"button",onClick:function(){h(!0)},children:g[l].change})]})})})},k=s(8430),y=s.p+"static/media/no-tasks-desktop@1x.3bb8ec7c58cbbd27c5b6.png",w=s.p+"static/media/no-tasks-desktop@2x.0ad1772df6f1d88ceb9b.png",T=s.p+"static/media/no-tasks-tablet@1x.9465d0e474e8c9774e50.png",C=s.p+"static/media/no-tasks-tablet@2x.8f223eff4302e37a76b7.png",L=s.p+"static/media/no-tasks-mobile@1x.ad83ae29beaef847b930.png",Z=s.p+"static/media/no-tasks-mobile@2x.793648180cc5421a0b92.png",A=s.p+"static/media/no-tasks-xl@2x.dd0b8ea6fbfed933d6c9.png",S=s(7689),W=JSON.parse('{"ru-RU":{"noPlannedTasks":"\u041d\u0430 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043d\u0435 \u0431\u044b\u043b\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0437\u0430\u0434\u0430\u0447","planTasks":"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0438","noTasksToday":"\u041d\u0430 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c \u043d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"},"uk-UA":{"noPlannedTasks":"\u041d\u0430 \u0446\u0435\u0439 \u0434\u0435\u043d\u044c \u043d\u0435 \u0431\u0443\u043b\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0437\u0430\u0432\u0434\u0430\u043d\u044c","planTasks":"\u0417\u0430\u043f\u043b\u0430\u043d\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f","noTasksToday":"\u041d\u0430 \u0446\u0435\u0439 \u0434\u0435\u043d\u044c \u043d\u0435\u043c\u0430\u0454 \u0437\u0430\u0432\u0434\u0430\u043d\u044c"}}'),I=function(e){var t=e.isBefore,s=(0,d.C)((function(e){return e.auth})).lang,a=(0,j.Z)(),n=a.height,l=a.width,r=(0,S.s0)();return(0,m.jsxs)("div",{className:"mt-[60px]",children:[(0,m.jsx)("div",{className:"sLaptop:pr-[16px]",children:t?(0,m.jsx)("p",{className:"mb-[20px] text-center text-[12px] font-bold text-main-color",children:W[s].noPlannedTasks}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:"mb-[20px] text-center text-[12px] font-bold text-main-color",children:W[s].noTasksToday}),(0,m.jsx)("button",{className:"btn mx-auto w-[160px]",onClick:function(){return r("/planning")},type:"button",children:W[s].planTasks})]})}),(0,m.jsx)("img",{className:"absolute left-0 bottom-[64px] z-[-1] w-full sTablet:hidden",src:L,srcSet:"".concat(L," 1x, ").concat(Z," 2x"),alt:"Kids meeting",width:320}),l<1280&&l>767&&(0,m.jsx)("img",{className:"absolute-x-center bottom-[56px] z-[-1] hidden w-full sTablet:block sTablet:max-h-[445px] sLaptop:hidden",style:{display:n<879?"none":"block"},src:T,srcSet:"".concat(T," 1x, ").concat(C," 2x"),alt:"Kids meeting",width:768}),l<1600&&(0,m.jsx)("img",{className:"absolute bottom-0 right-0 z-[-1] hidden w-[calc(100%-229px)] sLaptop:block sLaptop:max-h-[calc(100vh-410px)]",src:y,srcSet:"".concat(y," 1x, ").concat(w," 2x"),alt:"Kids meeting",width:928}),l>=1600&&(0,m.jsx)("img",{className:"absolute bottom-0 right-0 z-[-1] hidden w-[calc(100%-229px)] sLaptop:block sLaptop:max-h-[calc(100vh-450px)]",src:w,srcSet:"".concat(w," 1x, ").concat(A," 2x"),alt:"Kids meeting",width:928})]})},E=s(6005),D=s(4963),_=function(){var e=(0,j.Z)().width,t=(0,d.C)((function(e){return e.auth})).lang,s=(0,d.C)((function(e){return e.info})).selectedDay,a=(0,d.T)(),l=e>1279,r=(0,n.useMemo)((function(){return l?(0,D.pC)(t,"long"):(0,D.pC)(t,"short")}),[t,l]);return(0,m.jsx)("ul",{className:"flex w-[280px] justify-between sMob:w-[376px] sLaptop:w-[181px] sLaptop:flex-col sLaptop:space-y-[8px]",children:r.map((function(e){return(0,m.jsx)("li",{className:"".concat(s===e.date?"sTablet:bg-main-bg":"sTablet:bg-day"," flex h-[24px] w-[35px] items-center justify-center sMob:w-[40px]  sLaptop:h-[42px] sLaptop:w-full sLaptop:justify-start sLaptop:rounded-l-[6px] lessTablet:bg-accent-color lessLaptop:rounded-[6px] "),children:(0,m.jsx)("button",{className:"".concat(s!==e.date&&"lessTablet:bg-day"," h-full w-full text-[12px] font-bold text-main-color sLaptop:pl-[20px] sLaptop:text-start sLaptop:text-[14px]"),onClick:function(){!function(e){a((0,v.OL)(e))}(e.date)},children:e.day})},e.date)}))})},O=JSON.parse('{"ru-RU":{"myTasks":"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438:","week":"\u041d\u0435\u0434\u0435\u043b\u044f:","welcome":"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c \u0412\u0430\u0441","addNewChild":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430","addChildToContinue":"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0431\u0435\u043d\u043a\u0430","canNotCloseModal":"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u043e\u043a\u043d\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e. \u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0434\u0435\u0442\u044f\u0445 \u043d\u0430 \u0412\u0430\u0448\u0435\u043c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0435"},"uk-UA":{"myTasks":"\u041c\u043e\u0457 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f:","week":"\u0422\u0438\u0436\u0434\u0435\u043d\u044c:","welcome":"\u0412\u0456\u0442\u0430\u0454\u043c\u043e \u0412\u0430\u0441","addNewChild":"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c \u0434\u0438\u0442\u0438\u043d\u0438","addChildToContinue":"\u0414\u043b\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u0456 \u0434\u0438\u0442\u0438\u043d\u0438","canNotCloseModal":"\u0417\u0430\u043a\u0440\u0438\u0442\u0442\u044f \u0432\u0456\u043a\u043d\u0430 \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u0435. \u041d\u0435\u043c\u0430\u0454 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 \u043f\u0440\u043e \u0434\u0456\u0442\u0435\u0439 \u043d\u0430 \u0412\u0430\u0448\u043e\u043c\u0443 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u0456"}}'),F=function(){var e=(0,n.useState)(""),t=(0,a.Z)(e,2),s=t[0],r=t[1],i=(0,n.useState)(!1),o=(0,a.Z)(i,2),c=o[0],x=o[1],p=(0,j.Z)().width,u=p<768,v=767<p&&p<1280,g=p>1279,y=(0,d.C)((function(e){return e.info})),w=y.children,T=y.currentChild,C=y.selectedDay,L=(0,d.C)((function(e){return e.auth})),Z=L.startWeekDate,A=L.endWeekDate,S=L.lang,W=function(){x(!c)},F=(0,n.useMemo)((function(){return(0,D._y)(Z,A,S)}),[Z,A,S]);return(0,n.useEffect)((function(){null!==T&&void 0!==T&&T._id&&r((0,D.qc)(T,C))}),[T,C]),(0,m.jsxs)("section",{className:"min-h-[calc(100vh-130px)] sTablet:min-h-[calc(100vh-120px)] sLaptop:relative lessTablet:pb-[20px]",children:[u&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flex flex-col items-center justify-center py-[20px]",children:[(0,m.jsx)(N,{toggleAddChildForm:W}),(0,m.jsx)(_,{})]}),(0,m.jsxs)(b.Z,{children:[(0,m.jsxs)("p",{className:"mb-[20px] text-center ",children:[O[S].week," ",F," "]}),(0,m.jsxs)("div",{className:"text-center ",children:[(0,m.jsx)("p",{className:"text-[14px] font-medium text-second-color ",children:O[S].myTasks}),(0,m.jsxs)("p",{className:"text-[14px]  font-bold tracking-widest text-main-color",children:[(0,D.ji)(C,S,"long"),", ",(0,D.Ny)(C)]})]}),(0,m.jsx)("div",{}),"active tasks"===s&&(0,m.jsx)(f.Z,{cards:T.tasks})]}),"no active before"===s&&(0,m.jsx)(I,{isBefore:!0}),"no active"===s&&(0,m.jsx)(I,{isBefore:!1}),(0,m.jsx)("div",{className:"fixed left-0 bottom-0 mx-auto w-full bg-second-bg-color",children:(null===T||void 0===T?void 0:T._id)&&(0,m.jsx)(E.Z,{})})]}),v&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"mb-[40px] flex items-center  justify-center bg-accent-color py-[22px]",children:[(0,m.jsxs)("p",{className:"mr-[28px] text-[14px] font-normal text-main-color",children:[O[S].week," ",F]}),(0,m.jsx)(_,{})]}),(0,m.jsxs)(b.Z,{children:[(0,m.jsx)(N,{toggleAddChildForm:W}),(null===T||void 0===T?void 0:T._id)&&(0,m.jsx)(E.Z,{}),(0,m.jsxs)("div",{className:"mt-[20px] flex justify-center",children:[(0,m.jsx)("p",{className:"mr-[20px] text-[14px] font-medium text-second-color ",children:O[S].myTasks}),(0,m.jsxs)("p",{className:"text-[14px] font-bold tracking-widest text-main-color ",children:[(0,D.ji)(C,S,"long"),", ",(0,D.Ny)(C)]})]}),"active tasks"===s&&(0,m.jsx)(f.Z,{cards:T.tasks})]}),"no active before"===s&&(0,m.jsx)(I,{isBefore:!0}),"no active"===s&&(0,m.jsx)(I,{isBefore:!1})]}),g&&(0,m.jsxs)("div",{className:"relative flex justify-end sTablet:min-h-[calc(100vh-120px)]",children:[(0,m.jsx)("div",{className:"absolute top-0 left-0 h-[calc(100vh-64px)] items-start justify-center bg-accent-color pt-[195px] pl-[48px]",children:(0,m.jsx)(_,{})}),(0,m.jsxs)("div",{className:"ml-[341px] w-[calc(100%-325px)] pt-[32px] pb-[40px]",children:[(0,m.jsxs)("div",{className:"pr-[16px]",children:[(0,m.jsx)(N,{toggleAddChildForm:W}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsxs)("div",{className:"w-1/2",children:[(0,m.jsxs)("p",{className:"mb-[38px]",children:[O[S].week," ",F]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("p",{className:"mr-[20px] text-[14px] font-medium text-second-color ",children:O[S].myTasks}),(0,m.jsxs)("p",{className:"text-[14px] font-bold tracking-widest text-main-color",children:[(0,D.ji)(C,S,"long"),", ",(0,D.Ny)(C)]})]})]}),(0,m.jsx)("div",{className:"w-1/2 sLaptop:relative",children:(null===T||void 0===T?void 0:T._id)&&(0,m.jsx)(E.Z,{})})]}),"active tasks"===s&&(0,m.jsx)(f.Z,{cards:T.tasks})]}),"no active before"===s&&(0,m.jsx)(I,{isBefore:!0}),"no active"===s&&(0,m.jsx)(I,{isBefore:!1})]})]}),w.length<1&&(0,m.jsx)(k.Z,{onClose:function(){l.Am.error(O[S].canNotCloseModal)},children:(0,m.jsxs)("div",{className:"p-[20px]",children:[(0,m.jsx)("h3",{className:"mb-[20px] text-[14px] font-bold text-main-color",children:O[S].welcome}),(0,m.jsx)("p",{className:"mb-[20px] text-[14px] font-medium text-main-color",children:O[S].addChildToContinue}),(0,m.jsx)(h,{})]})}),c&&(0,m.jsx)(k.Z,{onClose:W,children:(0,m.jsxs)("div",{className:"px-[20px] pt-[40px] pb-[20px] sMob:w-[376px] lessMob:w-[280px]",children:[(0,m.jsx)("h3",{className:"mb-[20px] text-center text-[14px] font-bold text-main-color",children:O[S].addNewChild}),(0,m.jsx)(h,{toggleAddChildForm:W})]})})]})}},1694:function(e,t){var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var l=typeof s;if("string"===l||"number"===l)e.push(s);else if(Array.isArray(s)){if(s.length){var r=n.apply(null,s);r&&e.push(r)}}else if("object"===l){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var i in s)a.call(s,i)&&s[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=381.9b3432a7.chunk.js.map