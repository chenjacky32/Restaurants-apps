if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>r(e,n),f={module:{uri:n},exports:o,require:t};i[n]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3bd9af45"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"198d07d4a138115e1f17.jpg",revision:null},{url:"91bf5c4a50c73e706c25.jpg",revision:null},{url:"app.bundle.js",revision:"1b4b06629fc882d24f35797cc880692b"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"a761b5f0ff5b357654da18dec3fa6f3f"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"icons/icons.jpeg",revision:"c96b4fa656042205a6c2181964bdf57e"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"c97a4ae10f0533340718405a1ed48d0a"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant_data",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium")),new e.StaleWhileRevalidate({cacheName:"restaurant_data_image",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
