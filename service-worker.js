if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-12865017"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"index.html",revision:"5fb7765256f2f9bf27843c5dd7a895be"},{url:"main.9fcd18e7f21e73d60c0a.js",revision:"41349e278cfafd6af13fb9417ee77541"},{url:"runtime.58908f3dbdb804a00215.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors~main.70bd4895c62524d15c79.js",revision:"839a3c8523e99ea5a1609070329c6f94"}],{})}));
