(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(23),i=n.n(a),c=n(5),l=n(13),d=n(3),m=n(24),s=n.n(m),u=n(9),h=n(1),g=n(25),p=n.n(g),b=n(8);function f(){var e=p()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n    background: rgb(140, 140, 255);\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return f=function(){return e},e}var E=Object(b.a)(f()),y=n(10),x=n.n(y),v=n(11),w=n.n(v),z=n(29);Object(u.b)({OrbitControls:z.a});var I=function(e){var t=e.autoRotate,n=void 0!==t&&t,a=e.delayRotation,i=w()(e,["autoRotate","delayRotation"]),c=Object(r.useRef)(),l=Object(u.e)(),d=l.camera,m=l.gl;return Object(u.c)((function(){a||c.current.update()})),o.a.createElement("orbitControls",x()({enabled:!0,enableDamping:!0,ref:c,args:[d,m.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n},i))},M=function(){return o.a.createElement("mesh",null,o.a.createElement("sphereGeometry",{attach:"geometry",args:[5,100,100]}),o.a.createElement("meshStandardMaterial",{attach:"material",color:"rgb(0, 168, 224)",roughness:1,metalness:.3}))},O=Object(r.forwardRef)((function(e,t){var n=e.children,a=e.vAlign,i=void 0===a?"center":a,c=e.hAlign,l=void 0===c?"center":c,d=(e.color,e.rotation),m=void 0===d?[0,0,0]:d,s=e.offset,g=void 0===s?[0,0,0]:s,p=w()(e,["children","vAlign","hAlign","color","rotation","offset"]),b=Object(u.d)(h.FontLoader,"https://raw.githubusercontent.com/yvesgurcan/3d-menu-alt/master/public/font.json"),f=Object(r.useMemo)((function(){return{font:b,size:2.25,height:1}}),[b]),E=Object(u.f)((function(e){var t=new h.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===l?-t.x/2:"right"===l?0:-t.x,e.position.y="center"===i?-t.y/2+1.45:"top"===i?0:-t.y}),[n]);return o.a.createElement("group",x()({ref:t},p,{scale:[.1,.1,.1]}),o.a.createElement("mesh",{rotation:m,ref:E,position:[0+g[0],7+g[1],7+g[2]]},o.a.createElement("textGeometry",{attach:"geometry",args:[n,f]}),o.a.createElement("meshStandardMaterial",{attach:"material"})))})),k=function(e){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(O,e))},j=function(e){var t=e.text,n=void 0===t?"":t,r=e.to,a=void 0===r?"/inside":r,i=e.x,c=void 0===i?0:i,l=e.y,d=void 0===l?0:l,m=e.z,s=void 0===m?0:m,u=e.color,h=void 0===u?"rgb(230, 230, 230)":u,g=e.textRotation,p=void 0===g?[Math.PI/2,0,0]:g,b=e.textOffset,f=void 0===b?[0,0,0]:b,E=w()(e,["text","to","x","y","z","color","textRotation","textOffset"]);return o.a.createElement("mesh",x()({position:[0+c,0+d,0+s]},E),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.025,.025,1]})," ",o.a.createElement(k,{onClick:function(){return window.appHistory.push(a)},onPointerUp:function(){return window.appHistory.push(a)},rotation:p,offset:f},n),o.a.createElement("meshStandardMaterial",{attach:"material",color:h,roughness:.5}))},C=function(){var e=Object(r.useState)(0),t=s()(e,2),n=t[0],a=t[1],i=Object(r.useRef)(),c=Object(r.useRef)(n);function l(){c.current=3e3,a(3e3)}function d(e){var t=Math.max(0,c.current-1e3);a(t),c.current=t}return Object(r.useEffect)((function(){if(i.current)return i.current.addEventListener("click",l),setInterval((function(){return d(n)}),1e3),i.current.addEventListener("touchstart",l),setInterval((function(){return d(n)}),1e3),function(){i.current.removeEventListener("click",l),i.current.removeEventListener("touchstart",l)}}),[i]),o.a.createElement("span",{ref:i},o.a.createElement(E,null),o.a.createElement(u.a,{shadowMap:!0,camera:{position:new h.Vector3(0,6,9)}},o.a.createElement("ambientLight",{intensity:.9}),o.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.3,position:[-2,9,0]}),o.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.2,position:[7,-3,-5]}),o.a.createElement("directionalLight",{color:"rgb(200, 200, 100)",intensity:.1,position:[10,6,5]}),o.a.createElement(M,null),o.a.createElement(j,{text:"HBO",color:"red",x:3,y:3,z:3,rotation:[-Math.PI/3,Math.PI/4,-Math.PI/4]}),o.a.createElement(j,{text:"Wonder Woman",color:"blue",x:-4,y:3,z:2,rotation:[-Math.PI/3,-Math.PI/3.5,Math.PI/5]}),o.a.createElement(j,{text:"Friends",color:"yellow",y:5,rotation:[-Math.PI/2,0,0]}),o.a.createElement(I,{autoRotate:!0,delayRotation:n})))},L=b.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1v2mdar-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),R=function(e){var t=e.color,n=void 0===t?"rgb(200, 200, 200)":t,r=e.x,a=void 0===r?0:r,i=e.y,c=void 0===i?0:i,l=e.z,d=void 0===l?0:l,m=e.length,s=void 0===m?0:m,u=e.width,h=void 0===u?0:u,g=e.depth,p=void 0===g?0:g,b=e.props;return o.a.createElement("mesh",x()({position:[0+a,0+c,0+d]},b),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:[p,h,s]}),o.a.createElement("meshStandardMaterial",{attach:"material",color:n,roughness:.5}))},B=function(e){var t=e.to,n=void 0===t?"/":t,r=e.x,a=void 0===r?0:r,i=e.y,c=void 0===i?0:i,l=e.z,d=void 0===l?0:l,m=e.color,s=void 0===m?"rgb(150, 150, 150)":m,u=w()(e,["to","x","y","z","color"]);return o.a.createElement("mesh",x()({onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)},position:[0+a,0+c,0+d]},u),o.a.createElement("coneBufferGeometry",{attach:"geometry",args:[2,-5,2]}),o.a.createElement("shaderMaterial",{attach:"material",color:s,roughness:.3,uniforms:{texture:{value:"somevalue"}}}))},P=R,S=R,H=Object(b.b)(l.b).withConfig({displayName:"Inside__BackLink",componentId:"msf4gy-0"})(["padding:2rem;position:absolute;z-index:610;"]),N=b.b.div.withConfig({displayName:"MenuOverlay",componentId:"sc-17x3qt6-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),G=b.b.div.withConfig({displayName:"MenuContent",componentId:"sc-8jrut7-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),A=function(e){var t=e.text;return o.a.createElement(N,{zIndex:800},o.a.createElement(G,{backgroundColor:"rgb(245, 0, 0, 0.75)"},o.a.createElement(l.b,{to:"/inside"},"Back"),o.a.createElement(V,null,t)))},V=b.b.div.withConfig({displayName:"PinModal__BigNumber",componentId:"sc-1hxfvnc-0"})(["font-size:120px;display:flex;justify-content:center;align-items:center;height:100%;"]),_=document.getElementById("root"),F=Object(c.a)();i.a.render(o.a.createElement(l.a,{history:F},o.a.createElement(d.a,{component:function(e){var t=e.history;return window.appHistory=t,o.a.createElement(C,null)}}),o.a.createElement(d.a,{path:"/inside",component:function(){return o.a.createElement(L,{backgroundColor:"rgb(140, 140, 255)",zIndex:600},o.a.createElement(d.a,{exact:!0,path:"/inside",render:function(){return o.a.createElement(H,{to:"/"},"Back")}}),o.a.createElement(u.a,{shadowMap:!0,camera:{position:new h.Vector3(-10,0,0)}},o.a.createElement("ambientLight",{intensity:.5}),o.a.createElement("hemisphereLight",{color:"rgb(100, 100, 100)",intensity:.5,position:[10,5,0]}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:-60,y:0,z:0,length:70,width:30}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:60,y:0,z:0,length:70,width:30}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:0,y:15,z:0,length:70,depth:120}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:0,y:-15,z:0,length:70,depth:120}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:0,y:0,z:35,depth:120,width:30}),o.a.createElement(P,{color:"rgb(0, 0, 205)",x:0,y:0,z:-35,depth:120,width:30}),o.a.createElement(B,{to:"/inside/pin1",x:10,y:-10,z:-10}),o.a.createElement(B,{to:"/inside/pin2",x:40,y:-10,z:5}),o.a.createElement(B,{to:"/inside/pin3",x:-40,y:-10,z:-10}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:30,y:-12,z:-10,depth:5,width:5,length:5}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:35,y:-12,z:0,depth:5,width:5,length:5}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:30,y:-12,z:10,depth:5,width:5,length:5}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:-30,y:-12,z:-10,depth:5,width:5,length:5}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:-35,y:-12,z:0,depth:5,width:5,length:5}),o.a.createElement(S,{color:"rgb(50, 50, 50)",x:-30,y:-12,z:10,depth:5,width:5,length:5}),o.a.createElement(I,{enableZoom:!1})))}}),o.a.createElement(d.a,{path:"/inside/pin1",render:function(){return o.a.createElement(A,{text:"1"})}}),o.a.createElement(d.a,{path:"/inside/pin2",render:function(){return o.a.createElement(A,{text:"2"})}}),o.a.createElement(d.a,{path:"/inside/pin3",render:function(){return o.a.createElement(A,{text:"3"})}})),_)}},[[53,1,2]]]);