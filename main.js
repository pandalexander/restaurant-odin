(()=>{"use strict";var e={336:(e,n,t)=>{t.d(n,{c:()=>c});var o=t(500),a=t.n(o),r=t(312),i=t.n(r)()(a());i.push([e.id,'* {\n  background-color: #f5f3ef;\n  font-family: "Merienda", cursive;\n  color: #3a3328;\n}\n\nbody {\n  height: 100vh;\n}\n\nnav {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n}\n\nnav button {\n  flex: 1;\n  background-color: #963442;\n  border-radius: 8px;\n  border-style: none;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 40px;\n  list-style: none;\n  margin: 0;\n  outline: none;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: color 100ms;\n  vertical-align: baseline;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\nnav button:hover {\n  background-color: #b55362;\n}\n\nnav button:active {\n  background-color: #e9b107;\n  color: #963442;\n}\n\n#content {\n  padding-top: 50px;\n  padding-right: 30px;\n  padding-bottom: 50px;\n  padding-left: 80px;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n}\n\n.main-container .left {\n  grid-column: 1;\n  justify-self: center;\n}\n\n.main-container img {\n  justify-self: center;\n  grid-row: 1 / 2;\n  grid-column: 2;\n  width: auto;\n  height: auto;\n  height: 50vh;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\nh1 {\n  text-align: center;\n  font-family: "Chango", sans-serif;\n  color: #963442;\n  font-size: 62px;\n}\n\nh2 {\n  margin-top: 70px;\n  text-align: center;\n  font-size: 32px;\n  color: #3587a2;\n}\n\n.menu-item h2,\n.main-container h2 {\n  margin-top: 25px;\n}\n\nh3 {\n  text-align: center;\n  font-size: 22px;\n  color: #3a3328;\n}\n\nstrong {\n  color: #e9b107;\n}\n\np {\n  font-size: 18px;\n  line-height: 35px;\n}\n\n.padded {\n  padding-left: 20vw;\n  padding-right: 20vw;\n}\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.menu-item span {\n  color: #e9b107;\n  font-weight: bold;\n  font-size: larger;\n  margin-top: auto;\n}\n\n.menu-item {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.about-container {\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 0 20px;\n}\n\n#about-us {\n  text-align: center;\n}\n\n.restaurant-image {\n  max-width: 100%;\n  border-radius: 10px; /* Rounded corners for the image */\n  margin-bottom: 20px;\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n}\n',""]);const c=i},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},176:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(596),n=t.n(e),o=t(520),a=t.n(o),r=t(176),i=t.n(r),c=t(120),d=t.n(c),s=t(808),l=t.n(s),p=t(936),u=t.n(p),m=t(336),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.c,h),m.c&&m.c.locals&&m.c.locals;const f=t.p+"83f888f64087db587c6e.jpg",g=()=>{const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("main-container"),e.appendChild(n);const t=document.createElement("div");t.classList.add("left"),n.appendChild(t);const o=document.createElement("h1");o.textContent="Welcome to Casa del Sabor!",t.appendChild(o);const a=document.createElement("h2");a.innerHTML="Discover the Authentic Flavors of <strong>Mexico</strong>",t.appendChild(a);const r=new Image;r.src=f,n.appendChild(r);const i=document.createElement("h2");i.textContent="Make Yourself at Home",e.appendChild(i);const c=document.createElement("div");c.classList.add("padded"),e.appendChild(c);const d=document.createElement("p");d.textContent="At Casa del Sabor, we invite you on a culinary journey to Mexico, where every dish is crafted with passion and tradition. Nestled in the heart of Colorado Springs, our vibrant restaurant is a celebration of Mexican culture, from the lively ambiance to the mouthwatering aromas wafting from our kitchen.",c.appendChild(d);const s=document.createElement("h2");s.textContent="Events & Specials",e.appendChild(s);const l=document.createElement("div");l.classList.add("padded"),e.appendChild(l);const p=document.createElement("p");p.textContent="At Casa del Sabor, we invite you on a culinary journey to Mexico, where every dish is crafted with passion and tradition. Nestled in the heart of Colorado Springs, our vibrant restaurant is a celebration of Mexican culture, from the lively ambiance to the mouthwatering aromas wafting from our kitchen.",l.appendChild(p);const u=document.createElement("h2");u.textContent="Visit Us",e.appendChild(u);const m=document.createElement("div");m.classList.add("padded"),e.appendChild(m);const h=document.createElement("p");h.textContent="Conveniently located in the heart of Colorado Springs, Casa del Sabor is the perfect destination for family dinners, date nights, and celebrations with friends. Our warm and welcoming staff is dedicated to providing exceptional service, ensuring every visit is a memorable one.",m.appendChild(h);const g=document.createElement("footer");e.appendChild(g);const v=document.createElement("p");g.appendChild(v);const x=document.createElement("a");x.href="https://www.pexels.com/photo/fruit-salads-in-plate-1640774/",x.target="_blank",x.textContent="Photo Credit: Ella Olsson",v.appendChild(x)},v=t.p+"f00cbb1985c2f1afb29a.jpg",x=document.getElementById("home-button"),C=document.getElementById("menu-button"),b=document.getElementById("about-button"),y=document.getElementById("content");function w(){y.innerHTML=""}g(),x.addEventListener("click",(function(){w(),g()})),C.addEventListener("click",(function(){w(),(()=>{const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Our Delicious (yet brief) Menu",e.appendChild(n);const t=document.createElement("h3");t.textContent="Gluten Free and Vegan options available upon request",e.appendChild(t);const o=document.createElement("div");o.classList.add("menu-container"),e.appendChild(o);const a=document.createElement("div");a.classList.add("menu-item"),o.appendChild(a);const r=document.createElement("h2");r.textContent="Tacos al Pastor",a.appendChild(r);const i=document.createElement("p");i.textContent="Marinated pork cooked on a vertical rotisserie, served on warm corn tortillas with fresh pineapple, cilantro, and onions. Accompanied by a side of homemade salsa verde and lime wedges.",a.appendChild(i);const c=document.createElement("span");c.textContent="$10.99",a.appendChild(c);const d=document.createElement("div");d.classList.add("menu-item"),o.appendChild(d);const s=document.createElement("h2");s.textContent="Enchiladas Suizas",d.appendChild(s);const l=document.createElement("p");l.textContent="Corn tortillas filled with tender shredded chicken, smothered in a creamy tomatillo sauce and topped with melted cheese. Served with Mexican rice, refried beans, and a dollop of sour cream.",d.appendChild(l);const p=document.createElement("span");p.textContent="$12.99",d.appendChild(p);const u=document.createElement("div");u.classList.add("menu-item"),o.appendChild(u);const m=document.createElement("h2");m.textContent="Carne Asada Burrito",u.appendChild(m);const h=document.createElement("p");h.textContent="Grilled marinated steak, wrapped in a large flour tortilla with refried beans, Mexican rice, cheese, guacamole, and pico de gallo. Served with a side of crispy tortilla chips and salsa.",u.appendChild(h);const f=document.createElement("span");f.textContent="$11.99",u.appendChild(f);const g=document.createElement("div");g.classList.add("menu-item"),o.appendChild(g);const v=document.createElement("h2");v.textContent="Chiles Rellenos",g.appendChild(v);const x=document.createElement("p");x.textContent="Roasted poblano peppers stuffed with a savory mixture of melted cheese, corn, and black beans, then lightly battered and fried to perfection. Served with a side of tangy ranchero sauce, Mexican rice, and a garnish of fresh avocado slices.",g.appendChild(x);const C=document.createElement("span");C.textContent="$13.99",g.appendChild(C)})()})),b.addEventListener("click",(function(){w(),(()=>{const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="About Casa del Sabor",e.appendChild(n);const t=document.createElement("div");t.classList.add("about-container"),e.appendChild(t);const o=document.createElement("section");o.setAttribute("id","about-us"),t.appendChild(o);const a=new Image;a.src=v,a.alt="Casa del Sabor Restaurant Table",a.classList.add("restaurant-image"),o.appendChild(a);const r=document.createElement("p");r.textContent="Welcome to Casa del Sabor, your ultimate destination for authentic Mexican cuisine! Nestled in the heart of Colorado Springs, our restaurant is a vibrant hub where flavors, culture, and community come together",o.appendChild(r);const i=document.createElement("p");i.textContent="At Casa del Sabor, we believe in celebrating the rich culinary heritage of Mexico. Every dish on our menu is crafted with care and attention to detail, using only the finest ingredients and traditional recipes passed down through generations.",o.appendChild(i);const c=document.createElement("h2");c.textContent="Our Mission",o.appendChild(c);const d=document.createElement("p");d.textContent="Our mission is simple: to provide our guests with an unforgettable dining experience that captures the essence of Mexican culture. Whether you're joining us for a casual meal with friends or a special celebration with loved ones, we strive to create a warm and welcoming atmosphere where everyone feels like family.",o.appendChild(d);const s=document.createElement("h2");s.textContent="The Casa del Sabor Experience",o.appendChild(s);const l=document.createElement("p");l.textContent="Step inside Casa del Sabor and immerse yourself in the sights, sounds, and flavors of Mexico. From the colorful decor to the aroma of sizzling spices, every detail is designed to transport you to the streets of Mexico City.",o.appendChild(l);const p=document.createElement("p");p.textContent="Our menu features a tantalizing array of Mexican classics and contemporary creations, each bursting with bold flavors and vibrant colors. Our talented chefs are dedicated to delivering an authentic culinary experience that will leave you craving more.",o.appendChild(p);const u=document.createElement("h2");u.textContent="Community and Sustainability",o.appendChild(u);const m=document.createElement("p");m.textContent="At Casa del Sabor, we're committed to supporting our local community and preserving the environment for future generations. We source our ingredients from local farmers and suppliers whenever possible, ensuring the freshest flavors while reducing our carbon footprint.",o.appendChild(m);const h=document.createElement("p");h.textContent="Additionally, we believe in giving back to the community that has given us so much. Through partnerships with local charities and organizations, we strive to make a positive impact on the lives of those in need.",o.appendChild(h);const f=document.createElement("h2");f.textContent="Visit Us Today!",o.appendChild(f);const g=document.createElement("p");g.textContent="Ready to embark on a culinary adventure? Join us at Casa del Sabor and experience the magic of Mexico right here in Colorado Springs. Whether you're a seasoned foodie or simply curious to explore new flavors, we can't wait to welcome you to our table!",o.appendChild(g);const x=document.createElement("footer");e.appendChild(x);const C=document.createElement("p");x.appendChild(C);const b=document.createElement("a");b.href="https://www.pexels.com/photo/person-holding-green-glass-bottle-7772200/",b.target="_blank",b.textContent="Photo Credit: Los Muertos Crew",C.appendChild(b)})()}))})()})();