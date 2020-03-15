var uce=function(e){"use strict";var t=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,l=/>[^<>]*$/,o=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,i=(e,t)=>{for(;t--;){const n=e[t];if(r.test(n))return!0;if(l.test(n))return!1}return!1},c=(e,t,n)=>s.test(t)?e:`<${t}${n.replace(a,"")}></${t}>`;const{isArray:u}=Array,{indexOf:d,slice:p}=[],h=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;const f=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),m=(e,t)=>("svg"===t?v:g)(e),g=e=>{const t=f("template");return t.innerHTML=e,t.content},v=e=>{const{content:t}=f("template"),n=f("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:s}=n.firstChild;let{length:r}=s;for(;r--;)t.appendChild(s[0]);return t},y=(e,t)=>e.childNodes[t],b=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(d.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:w,importNode:C}=document,$=1!=C.length,k=$?(e,t)=>C.call(document,m(e,t),!0):m,x=$?e=>w.call(document,e,129,null,!1):e=>w.call(document,e,129),E=(e,t,n)=>((e,t,n,s,r)=>{const l=n.length;let o=t.length,a=l,i=0,c=0,u=null;for(;i<o||c<a;)if(o===i){const t=a<l?c?s(n[c-1],-0).nextSibling:s(n[a-c],0):r;for(;c<a;)e.insertBefore(s(n[c++],1),t)}else if(a===c)for(;i<o;)u&&u.has(t[i])||e.removeChild(s(t[i],-1)),i++;else if(t[i]===n[c])i++,c++;else if(t[o-1]===n[a-1])o--,a--;else{if(o-i==1&&a-c==1){u&&u.has(t[i])?e.insertBefore(s(n[c],1),s(a<l?n[a]:r,0)):e.replaceChild(s(n[c],1),s(t[i],-1));break}if(t[i]===n[a-1]&&n[c]===t[o-1]){const r=s(t[--o],-1).nextSibling;e.insertBefore(s(n[c++],1),s(t[i++],-1).nextSibling),e.insertBefore(s(n[--a],1),r),t[o]=n[a]}else{if(!u){u=new Map;let e=c;for(;e<a;)u.set(n[e],e++)}if(u.has(t[i])){const r=u.get(t[i]);if(c<r&&r<a){let l=i,d=1;for(;++l<o&&l<a&&u.has(t[l])&&u.get(t[l])===r+d;)d++;if(d>r-c){const l=s(t[i],0);for(;c<r;)e.insertBefore(s(n[c++],1),l)}else e.replaceChild(s(n[c++],1),s(t[i++],-1))}else i++}else e.removeChild(s(t[i++],-1))}}return n})(e.parentNode,t,n,h,e);function N(e){const{type:t,path:n}=e,s=n.reduce(y,this);return"node"===t?((e,t)=>{let n,s;const r=l=>{switch(typeof l){case"string":case"number":case"boolean":n!==l&&(n=l,s||(s=document.createTextNode("")),s.textContent=l,t=E(e,t,[s]));break;case"object":case"undefined":if(null==l){n&&(n=l,t=E(e,t,[]));break}u(l)?(n=l,0===l.length?t=E(e,t,[]):"object"==typeof l[0]?t=E(e,t,l):r(String(l))):"ELEMENT_NODE"in l&&l!==n&&(n=l,t=E(e,t,11===l.nodeType?p.call(l.childNodes):[l]))}};return r})(s,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let s=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(s=s.toLowerCase()),t=>{const r=u(t)?t:[t,!1];n!==r[0]&&(n&&e.removeEventListener(s,n,r[1]),(n=r[0])&&e.addEventListener(s,n,r[1]))}}let s=!0;const r=document.createAttribute(t);return t=>{n!==t&&(n=t,null==n?s||(e.removeAttributeNode(r),s=!0):(r.value=t,s&&(e.setAttributeNode(r),s=!1)))}})(s,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(s)}const A=t(new WeakMap),L=(e,t)=>{const s=((e,t)=>{const s=[];for(let r=0,{length:l}=e;r<l;r++){const o=e[r];n.test(o)&&i(e,r+1)?s.push(o.replace(n,(e,n,s)=>`${t}${r}=${s||'"'}${n}${s?"":'"'}`)):r+1<l?s.push(o,`\x3c!--${t}${r}--\x3e`):s.push(o)}return s.join("").trim().replace(o,c)})(t,"isµ"),r=k(s,e),l=x(r),a=[],u=t.length-1;let d=0,p=`isµ${d}`;for(;d<u;){const e=l.nextNode();if(!e)throw`bad template: ${s}`;if(8===e.nodeType)e.textContent===p&&(a.push({type:"node",path:b(e)}),p=`isµ${++d}`);else{for(;e.hasAttribute(p);)a.push({type:"attr",path:b(e),name:e.getAttribute(p)}),e.removeAttribute(p),p=`isµ${++d}`;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${p}--\x3e`&&(a.push({type:"text",path:b(e)}),p=`isµ${++d}`)}}return{content:r,nodes:a}},O=(e,t)=>{const{content:n,nodes:s}=A.get(t)||A.set(t,L(e,t)),r=C.call(document,n,!0);return{content:r,updates:s.map(N,r)}},T=(e,{type:t,template:n,values:s})=>{const{length:r}=s;M(e,s,r);let{entry:l}=e;l&&l.template===n&&l.type===t||(e.entry=l=((e,t)=>{const{content:n,updates:s}=O(e,t);return{type:e,template:t,content:n,updates:s,wire:null}})(t,n));const{content:o,updates:a,wire:i}=l;for(let e=0;e<r;e++)a[e](s[e]);return i||(l.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const s=p.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:s[0],lastChild:s[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(s[t++])}return e}}})(o))},M=({stack:e},t,n)=>{for(let s=0;s<n;s++){const n=t[s];n instanceof S?t[s]=T(e[s]||(e[s]={stack:[],entry:null,wire:null}),n):u(n)?M(e[s]||(e[s]={stack:[],entry:null,wire:null}),n,n.length):e[s]=null}n<e.length&&e.splice(n)};function S(e,t,n){this.type=e,this.template=t,this.values=n}const{create:j,defineProperties:B}=Object,W=t(new WeakMap),z=e=>{const n=t(new WeakMap);return B((t,...n)=>new S(e,t,n),{for:{value(t,s){const r=n.get(t)||n.set(t,j(null));return r[s]||(r[s]=(t=>(n,...s)=>T(t,{type:e,template:n,values:s}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>T({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},D=z("html"),H=z("svg"),P=(e,t)=>{const n="function"==typeof t?t():t,s=W.get(e)||W.set(e,{stack:[],entry:null,wire:null}),r=n instanceof S?T(s,n):n;return r!==s.wire&&(s.wire=r,e.textContent="",e.appendChild(r.valueOf())),e},{define:_}=customElements,{create:R,defineProperties:q,getOwnPropertyDescriptor:F,keys:G}=Object,I=new WeakMap;function J(){return P(this,D.apply(null,arguments))}return e.define=(e,t)=>{const{attachShadow:n,attributeChanged:s,connected:r,disconnected:l,handleEvent:o,init:a,observedAttributes:i}=t,c={},u={},d=[],p=R(null);for(let e=G(t),n=0,{length:s}=e;n<s;n++){const s=e[n];if(/^on/.test(s)&&!/Options$/.test(s)){const e=t[s+"Options"]||!1,n=s.toLowerCase();let r=n.slice(2);d.push({type:r,options:e}),p[r]=s,n!==s&&(r=s.slice(2,3).toLowerCase()+s.slice(3),p[r]=s,d.push({type:r,options:e}))}switch(s){case"attachShadow":case"observedAttributes":break;default:u[s]=F(t,s)}}const{length:h}=d;h&&!o&&(u.handleEvent={value(e){this[p[e.type]](e)}}),i&&(c.observedAttributes={value:i}),u.attributeChangedCallback={value(){v(this),s&&s.apply(this,arguments)}},u.connectedCallback={value(){v(this),r&&r.apply(this,arguments)}},l&&(u.disconnectedCallback={value:l});const f=t.extends||"element";class m extends((e=>"element"===e?HTMLElement:document.createElement(e).constructor)(f)){}q(m,c),q(m.prototype,u);const g=[e,m];function v(e){if(!I.has(e)){if(I.set(e,!0),h)for(let t=0;t<h;t++){const{type:n,options:s}=d[t];e.addEventListener(n,e,s)}q(e,{html:{value:J.bind(n?e.attachShadow(n):e)}}),a&&a.call(e)}}"element"!==f&&g.push({extends:f}),_.apply(customElements,g)},e.html=D,e.render=P,e.svg=H,e}({});
