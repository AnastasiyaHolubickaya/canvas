(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var c,a=e(0),r=e(8),o=e.n(r),u=e(2),i=e(12),s=e(13),l=e(3),f=e(4),b={canvasState:!1,canvasSize:[300,300],context:null,collaps_step:101},O=function(t){return{type:"SET_CONTEXT",context:t}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CANVAS_STATE":return Object(f.a)(Object(f.a)({},t),{},{canvasState:n.stateCanvas});case"SET_CANVAS_SIZE":return Object(f.a)(Object(f.a)({},t),{},{canvasSize:n.size});case"SET_CONTEXT":return Object(f.a)(Object(f.a)({},t),{},{context:n.context});default:return t}},v=e(9),h=Object(v.a)((function(t){return t.canvas.canvasSize}),(function(t){return t})),p=Object(v.a)((function(t){return t.canvas.context}),(function(t){return t})),g=Object(v.a)((function(t){return t.canvas.collaps_step}),(function(t){return t})),d=function(t,n){var e=Object(u.a)(t,4),c=e[0],a=e[1],r=e[2],o=e[3],i=Object(u.a)(n,4),s=i[0],l=i[1],f=r-c,b=o-a,O=i[2]-s,j=i[3]-l,v=(-b*(c-s)+f*(a-l))/(-O*b+f*j),h=(+O*(a-l)-j*(c-s))/(-O*b+f*j);return v>=0&&v<=1&&h>=0&&h<=1&&[c+h*f,a+h*b]},S=function(t,n){null!==t&&n.forEach((function(n){t.moveTo(n[0],n[1]),t.arc(n[0],n[1],3,0,2*Math.PI,!0),t.fillStyle="red",t.fill()}))},T=function(t,n){null!==t&&(t.beginPath(),t.moveTo(n[0],n[1]),t.lineTo(n[2],n[3]),t.strokeStyle="black",t.stroke())},E=e(1),C=s.a.canvas(c||(c=Object(i.a)(["\n   margin: 0 auto;\n   border: 2px solid red;\n"]))),_=function(t){var n=t.width,e=t.height,c=!1,r=Object(l.b)(),o=Object(a.useRef)(null),i=Object(l.c)(p),s=Object(l.c)(g),f=0,b=[],j=[],v=[],h=[];Object(a.useEffect)((function(){if(o.current){var t=o.current;r(O(t.getContext("2d")))}}),[r]);var _=function t(){try{null!==i&&i.clearRect(0,0,n,e);for(var c=0;c<=v.length-1;c++)x(i,v[c]);f<s-1?(requestAnimationFrame(t),f++):(f=0,v=[])}catch(a){console.log("'lineCollaps' ".concat(a))}},x=function(t,n){t.beginPath(),t.moveTo(n[0]+n[4],n[1]+n[5]),t.lineTo(n[2]-n[4],n[3]-n[5]),t.stroke(),n[0]+=n[4],n[2]-=n[4],n[1]+=n[5],n[3]-=n[5]},m=function(t){return[t.pageX,t.pageY]},y=function(t){t.preventDefault(),c=!1;var n=m(t),e=Object(u.a)(n,2),a=e[0],r=e[1];b[2]=a,b[3]=r,j.push(b),v.push(function(t,n){var e=[],c=(t[2]-t[0])/2/n;e.push(c);var a=(t[3]-t[1])/2/n;return e.push(a),t.concat(e)}(b,s)),T(i,b),function(t,n,e,c){try{for(var a=[],r=0;r<e.length;r++)!1!==(a=d(n,e[r]))&&c.push(a)}catch(o){console.log("'draw' ".concat(o))}}(0,b,j,h),S(i,h),b=[]},k=function(t){_(),b=[],j=[],h=[]};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(C,{onContextMenu:function(t){return y(t)},onClick:function(t){return function(t){var n=m(t),e=Object(u.a)(n,2),a=e[0],r=e[1];b[0]=a,b[1]=r,c=!0}(t)},onMouseMove:function(t){return function(t){if(c){var a=m(t),r=Object(u.a)(a,2),o=r[0],s=r[1];null!==i&&(i.clearRect(0,0,n,e),j.length<1?(b[2]=o,b[3]=s,T(i,b)):(j.map((function(t){return T(i,t)})),b[2]=o,b[3]=s,T(i,b)),S(i,h))}}(t)},ref:o}),Object(E.jsx)("button",{onClick:function(t){return k()},children:" Collaps Line"})]})};e(28);var x=function(){var t=Object(l.c)(h),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(E.jsx)(_,{width:e,height:c})},m=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),r(t),o(t)}))},y=e(7),k=e(17),w=Object(y.b)({canvas:j}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,F=Object(y.d)(w,A(Object(y.a)(k.a)));o.a.render(Object(E.jsx)(l.a,{store:F,children:Object(E.jsx)(x,{})}),document.getElementById("root")),m()}},[[29,1,2]]]);
//# sourceMappingURL=main.03827d1d.chunk.js.map