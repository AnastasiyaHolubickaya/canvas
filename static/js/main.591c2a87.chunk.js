(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(t,n,e){},32:function(t,n,e){"use strict";e.r(n);var c,a=e(0),r=e(7),u=e.n(r),o=e(11),i=e(13),s=e(15),f=e(5),b=(e(9),e(14),e(2)),l={canvasState:!1,canvasSize:[0,0],context:null},v=function(t){return{type:"SET_CANVAS_STATE",stateCanvas:t}},O=function(t){return{type:"SET_CANVAS_SIZE",size:t}},j=function(t){return{type:"SET_CONTEXT",context:t}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CANVAS_STATE":return Object(b.a)(Object(b.a)({},t),{},{canvasState:n.stateCanvas});case"SET_CANVAS_SIZE":return Object(b.a)(Object(b.a)({},t),{},{canvasSize:n.size});case"SET_CONTEXT":return Object(b.a)(Object(b.a)({},t),{},{context:n.context});default:return t}},p=e(10),S=Object(p.a)((function(t){return t.canvas.context}),(function(t){return t})),T=(Object(p.a)((function(t){return t.canvas.canvasSize}),(function(t){return t})),e(1)),E=s.a.canvas(c||(c=Object(i.a)(["\n   margin: 0 auto;\n   border: 2px solid red;\n"]))),d=function(t,n){var e=Object(o.a)(t,4),c=e[0],a=e[1],r=e[2],u=e[3],i=Object(o.a)(n,4),s=i[0],f=i[1],b=r-c,l=u-a,v=i[2]-s,O=i[3]-f,j=(-l*(c-s)+b*(a-f))/(-v*l+b*O),h=(+v*(a-f)-O*(c-s))/(-v*l+b*O);return j>=0&&j<=1&&h>=0&&h<=1&&[c+h*b,a+h*l]},_=function(t){var n=t.width,e=t.height,c=Object(f.b)(),r=Object(f.c)(S),u=Object(a.useRef)(null),o=[],i=[],s=[],b=[],l=0,h=Object(a.useCallback)((function(){var t=u.current;c(v(!0)),c(O([n,e]));var a=t.getContext("2d");c(j(a))}),[]);Object(a.useEffect)((function(){h()}),[h]);var p=function t(c){null!==c&&c.clearRect(0,0,n,e);for(var a=0;a<=b.length-1;a++)_(c,b[a]);l<100?(setTimeout(t,30,c),l++):(l=0,b=[])},_=function(t,n){t.beginPath(),t.moveTo(n[0]+n[4],n[1]+n[5]),t.lineTo(n[2]-n[4],n[3]-n[5]),t.stroke(),n[0]+=n[4],n[2]-=n[4],n[1]+=n[5],n[3]-=n[5]},g=function(t){t.preventDefault(),h();var n=t.pageX,e=t.pageY;o.push(n,e),i.push([o[0],o[1],o[2],o[3]]);var c,a,u=function(t){var n=[],e=(t[2]-t[0])/2/101;n.push(e);var c=(t[3]-t[1])/2/101;return n.push(c),t.concat(n)}(o);b.push(u),a=o,null!==(c=r)&&(c.beginPath(),c.moveTo(a[0],a[1]),c.lineTo(a[2],a[3]),c.strokeStyle="black",c.stroke()),function(t,n,e){for(var c=0;c<e.length;c++){var a=d(n,e[c]);a&&null!==t&&(s.push(a),t.moveTo(a[0],a[1]),t.arc(a[0],a[1],3,0,2*Math.PI,!0),t.fillStyle="red",t.fill())}o=[]}(r,o,i)},x=function(t){o=[],i=[],s=[],h(),p(r)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(E,{onContextMenu:function(t){return g(t)},onClick:function(t){return function(t){var n=t.pageX,e=t.pageY;o.push(n,e)}(t)},onMouseMove:function(t){},ref:u}),Object(T.jsx)("button",{onClick:function(t){return x()},children:" tttt"})]})};e(31);var g=function(){return Object(T.jsx)(_,{width:300,height:300})},x=e(6),C=e(19),m=Object(x.b)({canvas:h}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,k=Object(x.d)(m,A(Object(x.a)(C.a)));u.a.render(Object(T.jsx)(f.a,{store:k,children:Object(T.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.591c2a87.chunk.js.map