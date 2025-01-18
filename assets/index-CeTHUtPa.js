const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-undboHBv.js","assets/react-vendor-cb1x-2tq.js"])))=>i.map(i=>d[i]);
import{a as e,b as t,g as r,u as n,R as o,c as i,d as a,r as s,e as l,B as c,f as u,h as d}from"./react-vendor-cb1x-2tq.js";import{d as p,f}from"./styled-C2aT8hqb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var h,m,y={exports:{}},g={};var b,w=(m||(m=1,y.exports=function(){if(h)return g;h=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var s,l={},c=null,u=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:u,props:l,_owner:i.current}}return g.Fragment=n,g.jsx=s,g.jsxs=s,g}()),y.exports),v={};const x=r(function(){if(b)return v;b=1;var e=t();return v.createRoot=e.createRoot,v.hydrateRoot=e.hydrateRoot,v}()),O=p.header`
  background: rgba(19, 17, 27, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(155, 109, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`,P=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`,E=p.h1`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8257e6;
  }
`,j=p.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,S=p.button`
  background: ${e=>e.primary?"#9b6dff":"transparent"};
  color: white;
  border: ${e=>e.primary?"none":"2px solid #9b6dff"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.primary?"#8257e6":"rgba(155, 109, 255, 0.1)"};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`,R=()=>{const e=n();return w.jsx(O,{children:w.jsxs(P,{children:[w.jsx(E,{children:"TRÁILERFLIX"}),w.jsxs(j,{children:[w.jsx(S,{to:"/",primary:"/"===e.pathname?1:0,children:"Hogar"}),w.jsx(S,{to:"/new-video",primary:"/new-video"===e.pathname?1:0,children:"Nuevo Video"})]})]})})},T=p.footer`
  background: #13111b;
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(155, 109, 255, 0.1);
`,k=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`,A=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_=p.h3`
  color: #9b6dff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,C=p.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,L=p.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,D=p.li`
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #9b6dff;
  }
`,U=p.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`,N=()=>w.jsxs(T,{children:[w.jsxs(k,{children:[w.jsxs(A,{children:[w.jsx(_,{children:"Acerca de Trailerflix"}),w.jsx(C,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestros videos y ten algo que ver esta semana."})]}),w.jsxs(A,{children:[w.jsx(_,{children:"Categorías"}),w.jsxs(L,{children:[w.jsx(D,{children:"Películas"}),w.jsx(D,{children:"Serie"}),w.jsx(D,{children:"Documentales"}),w.jsx(D,{children:"Anime"})]})]})]}),w.jsxs(U,{children:[(new Date).getFullYear()," Trailerflix. Todos los derechos reservados."]})]}),I=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1825;
`,M=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,B=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(26, 24, 37, 0.8) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${I}:hover & {
    opacity: 1;
  }
`,F=p.h3`
  color: white;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.5rem;
`,z=p.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,q=p.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(155, 109, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;

  ${I}:hover & {
    opacity: 1;
  }

  &:hover {
    background: #8257e6;
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`,V=({image:e,title:t,description:r,onClick:n})=>w.jsxs(I,{onClick:n,children:[w.jsx(M,{src:e,alt:t,loading:"lazy"}),w.jsxs(B,{children:[w.jsx(F,{children:t}),w.jsx(z,{children:r})]}),w.jsx(q,{children:w.jsx("svg",{viewBox:"0 0 24 24",children:w.jsx("path",{d:"M8 5v14l11-7z"})})})]}),H=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #13111b;
  min-height: 100vh;
`,$=p.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #13111b 0%, #17151f 100%);
`,W=p.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-color: #13111b;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(19, 17, 27, 0.7) 0%,
      rgba(19, 17, 27, 0.9) 100%
    );
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    height: 50vh;
  }
`,J=p.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,K=p.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
`,X=p.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #9b6dff;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Y=p.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,G=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #13111b;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;function Z(){const[e,t]=o.useState([]),[r,n]=o.useState(null);o.useState(null);o.useState(!1),o.useRef({}),o.useState({url:"https://www.youtube.com/watch?v=O6JxZxIzRGc",title:"RECOMIENDA TU TRAILER FAVORITO",description:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.",thumbnail:"https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg"}),o.useEffect((()=>{i()}),[]);const i=async()=>{try{const e=await axios.get(API_URL);t(e.data)}catch(e){console.error("Error fetching videos:",e)}};return w.jsxs(H,{children:[w.jsxs($,{children:[w.jsxs(W,{children:[w.jsx(J,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:w.jsx("source",{src:"/banner-video.mp4",type:"video/mp4"})}),w.jsxs(K,{children:[w.jsx(X,{children:"TRÁILERFLIX"}),w.jsx(Y,{children:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos."})]})]}),w.jsx(CategoryTitle,{children:"Últimos trailers"}),w.jsx(G,{children:["Películas","Series","Documentales","Anime"].map((t=>(t=>{const r=e.filter((e=>e.category===t));return 0===r.length?null:w.jsxs("div",{id:t.toLowerCase(),style:{scrollMarginTop:"100px"},children:[w.jsx(CategoryTitle,{children:t}),w.jsx(G,{children:r.map((e=>w.jsx(V,{image:e.thumbnail,title:e.title,description:e.description,onClick:()=>n(e)},e.id)))})]},t)})(t)))})]}),r&&w.jsx(VideoModal,{isOpen:!!r,onClose:()=>n(null),video:r,API_URL:API_URL})]})}function Q(e,t){return function(){return e.apply(t,arguments)}}const{toString:ee}=Object.prototype,{getPrototypeOf:te}=Object,re=(e=>t=>{const r=ee.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ne=e=>(e=e.toLowerCase(),t=>re(t)===e),oe=e=>t=>typeof t===e,{isArray:ie}=Array,ae=oe("undefined");const se=ne("ArrayBuffer");const le=oe("string"),ce=oe("function"),ue=oe("number"),de=e=>null!==e&&"object"==typeof e,pe=e=>{if("object"!==re(e))return!1;const t=te(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},fe=ne("Date"),he=ne("File"),me=ne("Blob"),ye=ne("FileList"),ge=ne("URLSearchParams"),[be,we,ve,xe]=["ReadableStream","Request","Response","Headers"].map(ne);function Oe(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),ie(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function Pe(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,je=e=>!ae(e)&&e!==Ee;const Se=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&te(Uint8Array)),Re=ne("HTMLFormElement"),Te=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ke=ne("RegExp"),Ae=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Oe(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},_e="abcdefghijklmnopqrstuvwxyz",Ce="0123456789",Le={DIGIT:Ce,ALPHA:_e,ALPHA_DIGIT:_e+_e.toUpperCase()+Ce};const De=ne("AsyncFunction"),Ue=(Ne="function"==typeof setImmediate,Ie=ce(Ee.postMessage),Ne?setImmediate:Ie?(Me=`axios@${Math.random()}`,Be=[],Ee.addEventListener("message",(({source:e,data:t})=>{e===Ee&&t===Me&&Be.length&&Be.shift()()}),!1),e=>{Be.push(e),Ee.postMessage(Me,"*")}):e=>setTimeout(e));var Ne,Ie,Me,Be;const Fe="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Ee):"undefined"!=typeof process&&process.nextTick||Ue,ze={isArray:ie,isArrayBuffer:se,isBuffer:function(e){return null!==e&&!ae(e)&&null!==e.constructor&&!ae(e.constructor)&&ce(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||ce(e.append)&&("formdata"===(t=re(e))||"object"===t&&ce(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&se(e.buffer),t},isString:le,isNumber:ue,isBoolean:e=>!0===e||!1===e,isObject:de,isPlainObject:pe,isReadableStream:be,isRequest:we,isResponse:ve,isHeaders:xe,isUndefined:ae,isDate:fe,isFile:he,isBlob:me,isRegExp:ke,isFunction:ce,isStream:e=>de(e)&&ce(e.pipe),isURLSearchParams:ge,isTypedArray:Se,isFileList:ye,forEach:Oe,merge:function e(){const{caseless:t}=je(this)&&this||{},r={},n=(n,o)=>{const i=t&&Pe(r,o)||o;pe(r[i])&&pe(n)?r[i]=e(r[i],n):pe(n)?r[i]=e({},n):ie(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Oe(arguments[o],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(Oe(t,((t,n)=>{r&&ce(t)?e[n]=Q(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&te(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:re,kindOfTest:ne,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(ie(e))return e;let t=e.length;if(!ue(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:Re,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:Ae,freezeMethods:e=>{Ae(e,((t,r)=>{if(ce(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];ce(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return ie(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Pe,global:Ee,isContextDefined:je,ALPHABET:Le,generateString:(e=16,t=Le.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&ce(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(de(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=ie(e)?[]:{};return Oe(e,((e,t)=>{const i=r(e,n+1);!ae(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:De,isThenable:e=>e&&(de(e)||ce(e))&&ce(e.then)&&ce(e.catch),setImmediate:Ue,asap:Fe};function qe(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}ze.inherits(qe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ze.toJSONObject(this.config),code:this.code,status:this.status}}});const Ve=qe.prototype,He={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{He[e]={value:e}})),Object.defineProperties(qe,He),Object.defineProperty(Ve,"isAxiosError",{value:!0}),qe.from=(e,t,r,n,o,i)=>{const a=Object.create(Ve);return ze.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),qe.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function $e(e){return ze.isPlainObject(e)||ze.isArray(e)}function We(e){return ze.endsWith(e,"[]")?e.slice(0,-2):e}function Je(e,t,r){return e?e.concat(t).map((function(e,t){return e=We(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Ke=ze.toFlatObject(ze,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Xe(e,t,r){if(!ze.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=ze.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ze.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&ze.isSpecCompliantForm(t);if(!ze.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(ze.isDate(e))return e.toISOString();if(!s&&ze.isBlob(e))throw new qe("Blob is not supported. Use a Buffer instead.");return ze.isArrayBuffer(e)||ze.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){let s=e;if(e&&!o&&"object"==typeof e)if(ze.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(ze.isArray(e)&&function(e){return ze.isArray(e)&&!e.some($e)}(e)||(ze.isFileList(e)||ze.endsWith(r,"[]"))&&(s=ze.toArray(e)))return r=We(r),s.forEach((function(e,n){!ze.isUndefined(e)&&null!==e&&t.append(!0===a?Je([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!$e(e)||(t.append(Je(o,r,i),l(e)),!1)}const u=[],d=Object.assign(Ke,{defaultVisitor:c,convertValue:l,isVisitable:$e});if(!ze.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!ze.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),ze.forEach(r,(function(r,i){!0===(!(ze.isUndefined(r)||null===r)&&o.call(t,r,ze.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),u.pop()}}(e),t}function Ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ge(e,t){this._pairs=[],e&&Xe(e,this,t)}const Ze=Ge.prototype;function Qe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function et(e,t,r){if(!t)return e;const n=r&&r.encode||Qe;ze.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):ze.isURLSearchParams(t)?t.toString():new Ge(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}Ze.append=function(e,t){this._pairs.push([e,t])},Ze.toString=function(e){const t=e?function(t){return e.call(this,t,Ye)}:Ye;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class tt{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ze.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const rt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Ge,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ot="undefined"!=typeof window&&"undefined"!=typeof document,it="object"==typeof navigator&&navigator||void 0,at=ot&&(!it||["ReactNative","NativeScript","NS"].indexOf(it.product)<0),st="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,lt=ot&&window.location.href||"http://localhost",ct={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ot,hasStandardBrowserEnv:at,hasStandardBrowserWebWorkerEnv:st,navigator:it,origin:lt},Symbol.toStringTag,{value:"Module"})),...nt};function ut(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&ze.isArray(n)?n.length:i,s)return ze.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&ze.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&ze.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(ze.isFormData(e)&&ze.isFunction(e.entries)){const r={};return ze.forEachEntry(e,((e,n)=>{t(function(e){return ze.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const dt={transitional:rt,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=ze.isObject(e);o&&ze.isHTMLForm(e)&&(e=new FormData(e));if(ze.isFormData(e))return n?JSON.stringify(ut(e)):e;if(ze.isArrayBuffer(e)||ze.isBuffer(e)||ze.isStream(e)||ze.isFile(e)||ze.isBlob(e)||ze.isReadableStream(e))return e;if(ze.isArrayBufferView(e))return e.buffer;if(ze.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Xe(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ct.isNode&&ze.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=ze.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Xe(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t){if(ze.isString(e))try{return(t||JSON.parse)(e),ze.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||dt.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(ze.isResponse(e)||ze.isReadableStream(e))return e;if(e&&ze.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(o){if(r){if("SyntaxError"===o.name)throw qe.from(o,qe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ze.forEach(["delete","get","head","post","put","patch"],(e=>{dt.headers[e]={}}));const pt=ze.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ft=Symbol("internals");function ht(e){return e&&String(e).trim().toLowerCase()}function mt(e){return!1===e||null==e?e:ze.isArray(e)?e.map(mt):String(e)}function yt(e,t,r,n,o){return ze.isFunction(n)?n.call(this,t,r):(o&&(t=r),ze.isString(t)?ze.isString(n)?-1!==t.indexOf(n):ze.isRegExp(n)?n.test(t):void 0:void 0)}class gt{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=ht(t);if(!o)throw new Error("header name must be a non-empty string");const i=ze.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=mt(e))}const i=(e,t)=>ze.forEach(e,((e,r)=>o(e,r,t)));if(ze.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(ze.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&pt[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(ze.isHeaders(e))for(const[a,s]of e.entries())o(s,a,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=ht(e)){const r=ze.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(ze.isFunction(t))return t.call(this,e,r);if(ze.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ht(e)){const r=ze.findKey(this,e);return!(!r||void 0===this[r]||t&&!yt(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=ht(e)){const o=ze.findKey(r,e);!o||t&&!yt(0,r[o],o,t)||(delete r[o],n=!0)}}return ze.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!yt(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return ze.forEach(this,((n,o)=>{const i=ze.findKey(r,o);if(i)return t[i]=mt(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=mt(n),r[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ze.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&ze.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[ft]=this[ft]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=ht(e);t[n]||(!function(e,t){const r=ze.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return ze.isArray(e)?e.forEach(n):n(e),this}}function bt(e,t){const r=this||dt,n=t||r,o=gt.from(n.headers);let i=n.data;return ze.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function wt(e){return!(!e||!e.__CANCEL__)}function vt(e,t,r){qe.call(this,null==e?"canceled":e,qe.ERR_CANCELED,t,r),this.name="CanceledError"}function xt(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new qe("Request failed with status code "+r.status,[qe.ERR_BAD_REQUEST,qe.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ze.reduceDescriptors(gt.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),ze.freezeMethods(gt),ze.inherits(vt,qe,{__CANCEL__:!0});const Ot=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[a];o||(o=l),r[i]=s,n[i]=l;let u=a,d=0;for(;u!==i;)d+=r[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}}(50,250);return function(e,t){let r,n,o=0,i=1e3/t;const a=(t,i=Date.now())=>{o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),s=t-o;s>=i?a(e,t):(r=e,n||(n=setTimeout((()=>{n=null,a(r)}),i-s)))},()=>r&&a(r)]}((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},Pt=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Et=e=>(...t)=>ze.asap((()=>e(...t))),jt=ct.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ct.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,St=ct.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];ze.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),ze.isString(n)&&a.push("path="+n),ze.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Rt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Tt=e=>e instanceof gt?{...e}:e;function kt(e,t){t=t||{};const r={};function n(e,t,r,n){return ze.isPlainObject(e)&&ze.isPlainObject(t)?ze.merge.call({caseless:n},e,t):ze.isPlainObject(t)?ze.merge({},t):ze.isArray(t)?t.slice():t}function o(e,t,r,o){return ze.isUndefined(t)?ze.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!ze.isUndefined(t))return n(void 0,t)}function a(e,t){return ze.isUndefined(t)?ze.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(Tt(e),Tt(t),0,!0)};return ze.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);ze.isUndefined(a)&&i!==s||(r[n]=a)})),r}const At=e=>{const t=kt({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=gt.from(s),t.url=et(Rt(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),ze.isFormData(n))if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(ct.hasStandardBrowserEnv&&(o&&ze.isFunction(o)&&(o=o(t)),o||!1!==o&&jt(t.url))){const e=i&&a&&St.read(a);e&&s.set(i,e)}return t},_t="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=At(e);let o=n.data;const i=gt.from(n.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=n;function h(){c&&c(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function y(){if(!m)return;const n=gt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());xt((function(e){t(e),h()}),(function(e){r(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(new qe("Request aborted",qe.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new qe("Network Error",qe.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||rt;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new qe(t,o.clarifyTimeoutError?qe.ETIMEDOUT:qe.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&ze.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),ze.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),f&&([l,u]=Ot(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=Ot(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new vt(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const g=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);g&&-1===ct.protocols.indexOf(g)?r(new qe("Unsupported protocol "+g+":",qe.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ct=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof qe?t:new vt(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new qe(`timeout ${t} of ms exceeded`,qe.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>ze.asap(a),s}},Lt=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Dt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Ut=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of Dt(e))yield*Lt(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},Nt="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,It=Nt&&"function"==typeof ReadableStream,Mt=Nt&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Bt=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},Ft=It&&Bt((()=>{let e=!1;const t=new Request(ct.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),zt=It&&Bt((()=>ze.isReadableStream(new Response("").body))),qt={stream:zt&&(e=>e.body)};var Vt;Nt&&(Vt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!qt[e]&&(qt[e]=ze.isFunction(Vt[e])?t=>t[e]():(t,r)=>{throw new qe(`Response type '${e}' is not supported`,qe.ERR_NOT_SUPPORT,r)})})));const Ht=async(e,t)=>{const r=ze.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(ze.isBlob(e))return e.size;if(ze.isSpecCompliantForm(e)){const t=new Request(ct.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return ze.isArrayBufferView(e)||ze.isArrayBuffer(e)?e.byteLength:(ze.isURLSearchParams(e)&&(e+=""),ze.isString(e)?(await Mt(e)).byteLength:void 0)})(t):r},$t={http:null,xhr:_t,fetch:Nt&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=At(e);c=c?(c+"").toLowerCase():"text";let f,h=Ct([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(l&&Ft&&"get"!==r&&"head"!==r&&0!==(y=await Ht(u,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(ze.isFormData(n)&&(e=r.headers.get("content-type"))&&u.setContentType(e),r.body){const[e,t]=Pt(y,Ot(Et(l)));n=Ut(r.body,65536,e,t)}}ze.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const a=zt&&("stream"===c||"response"===c);if(zt&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=ze.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&Pt(t,Ot(Et(s),!0))||[];i=new Response(Ut(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}c=c||"text";let g=await qt[ze.findKey(qt,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{xt(t,r,{data:g,headers:gt.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(g){if(m&&m(),g&&"TypeError"===g.name&&/fetch/i.test(g.message))throw Object.assign(new qe("Network Error",qe.ERR_NETWORK,e,f),{cause:g.cause||g});throw qe.from(g,g&&g.code,e,f)}})};ze.forEach($t,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const Wt=e=>`- ${e}`,Jt=e=>ze.isFunction(e)||null===e||!1===e,Kt=e=>{e=ze.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!Jt(r)&&(n=$t[(t=String(r)).toLowerCase()],void 0===n))throw new qe(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new qe("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Wt).join("\n"):" "+Wt(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Xt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vt(null,e)}function Yt(e){Xt(e),e.headers=gt.from(e.headers),e.data=bt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Kt(e.adapter||dt.adapter)(e).then((function(t){return Xt(e),t.data=bt.call(e,e.transformResponse,t),t.headers=gt.from(t.headers),t}),(function(t){return wt(t)||(Xt(e),t&&t.response&&(t.response.data=bt.call(e,e.transformResponse,t.response),t.response.headers=gt.from(t.response.headers))),Promise.reject(t)}))}const Gt="1.7.9",Zt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Zt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const Qt={};Zt.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new qe(n(o," has been removed"+(t?" in "+t:"")),qe.ERR_DEPRECATED);return t&&!Qt[o]&&(Qt[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},Zt.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const er={assertOptions:function(e,t,r){if("object"!=typeof e)throw new qe("options must be an object",qe.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new qe("option "+i+" must be "+r,qe.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new qe("Unknown option "+i,qe.ERR_BAD_OPTION)}},validators:Zt},tr=er.validators;class rr{constructor(e){this.defaults=e,this.interceptors={request:new tt,response:new tt}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=kt(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&er.assertOptions(r,{silentJSONParsing:tr.transitional(tr.boolean),forcedJSONParsing:tr.transitional(tr.boolean),clarifyTimeoutError:tr.transitional(tr.boolean)},!1),null!=n&&(ze.isFunction(n)?t.paramsSerializer={serialize:n}:er.assertOptions(n,{encode:tr.function,serialize:tr.function},!0)),er.assertOptions(t,{baseUrl:tr.spelling("baseURL"),withXsrfToken:tr.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&ze.merge(o.common,o[t.method]);o&&ze.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=gt.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[Yt.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Yt.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return et(Rt((e=kt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}ze.forEach(["delete","get","head","options"],(function(e){rr.prototype[e]=function(t,r){return this.request(kt(r||{},{method:e,url:t,data:(r||{}).data}))}})),ze.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(kt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}rr.prototype[e]=t(),rr.prototype[e+"Form"]=t(!0)}));class nr{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new vt(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new nr((function(t){e=t})),cancel:e}}}const or={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(or).forEach((([e,t])=>{or[t]=e}));const ir=function e(t){const r=new rr(t),n=Q(rr.prototype.request,r);return ze.extend(n,rr.prototype,r,{allOwnKeys:!0}),ze.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(kt(t,r))},n}(dt);ir.Axios=rr,ir.CanceledError=vt,ir.CancelToken=nr,ir.isCancel=wt,ir.VERSION=Gt,ir.toFormData=Xe,ir.AxiosError=qe,ir.Cancel=ir.CanceledError,ir.all=function(e){return Promise.all(e)},ir.spread=function(e){return function(t){return e.apply(null,t)}},ir.isAxiosError=function(e){return ze.isObject(e)&&!0===e.isAxiosError},ir.mergeConfig=kt,ir.AxiosHeaders=gt,ir.formToJSON=e=>ut(ze.isHTMLForm(e)?new FormData(e):e),ir.getAdapter=Kt,ir.HttpStatusCode=or,ir.default=ir;const ar="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",sr={};var lr,cr;function ur(){if(cr)return lr;cr=1;var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function a(e,t,n){var a={};return n.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,n)(e[o],t[o],n):a[o]=r(t[o],n))})),a}function s(t,o,i){(i=i||{}).arrayMerge=i.arrayMerge||n,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=r;var s=Array.isArray(o);return s===Array.isArray(t)?s?i.arrayMerge(t,o,i):a(t,o,i):r(o,i)}return s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})},lr=s}var dr=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function pr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||dr(n)&&dr(o)))return!1;var n,o;return!0}const fr=i(Object.freeze(Object.defineProperty({__proto__:null,default:function(e,t){var r;void 0===t&&(t=pr);var n,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},Symbol.toStringTag,{value:"Module"})));var hr,mr;function yr(){if(mr)return hr;mr=1;var e="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){if(i.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(i)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(i[l],a[l]))return!1;return!0}if(t&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(u=i.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=i.entries();!(l=u.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(u=i.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(i[l]!==a[l])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(e&&i instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!i.$$typeof)&&!o(i[c[l]],a[c[l]]))return!1;return!0}return i!=i&&a!=a}return hr=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}var gr,br,wr,vr,xr,Or,Pr,Er,jr,Sr,Rr,Tr,kr,Ar,_r,Cr,Lr,Dr,Ur,Nr,Ir,Mr={exports:{}};function Br(){if(br)return gr;br=1;return gr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Fr(){if(vr)return wr;vr=1;var e=Br();function t(){}function r(){}return r.resetWarningCache=t,wr=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}function zr(){return xr||(xr=1,Mr.exports=Fr()()),Mr.exports}function qr(){if(Pr)return Or;Pr=1;var e,t=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===i||r(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable});return e},l={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(l,{defaultProps:()=>x,propTypes:()=>w}),e=l,Or=s(r({},"__esModule",{value:!0}),e);var c=((e,n,o)=>(o=null!=e?t(i(e)):{},s(e&&e.__esModule?o:r(o,"default",{value:e,enumerable:!0}),e)))(zr());const{string:u,bool:d,number:p,array:f,oneOfType:h,shape:m,object:y,func:g,node:b}=c.default,w={url:h([u,f,y]),playing:d,loop:d,controls:d,volume:p,muted:d,playbackRate:p,width:h([u,p]),height:h([u,p]),style:y,progressInterval:p,playsinline:d,pip:d,stopOnUnmount:d,light:h([d,u,y]),playIcon:b,previewTabIndex:p,previewAriaLabel:u,fallback:b,oEmbedUrl:u,wrapper:h([u,g,m({render:g.isRequired})]),config:m({soundcloud:m({options:y}),youtube:m({playerVars:y,embedOptions:y,onUnstarted:g}),facebook:m({appId:u,version:u,playerId:u,attributes:y}),dailymotion:m({params:y}),vimeo:m({playerOptions:y,title:u}),mux:m({attributes:y,version:u}),file:m({attributes:y,tracks:f,forceVideo:d,forceAudio:d,forceHLS:d,forceSafariHLS:d,forceDisableHls:d,forceDASH:d,forceFLV:d,hlsOptions:y,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:m({options:y,playerId:u,customControls:f}),mixcloud:m({options:y}),twitch:m({options:y,playerId:u}),vidyard:m({options:y})}),onReady:g,onStart:g,onPlay:g,onPause:g,onBuffer:g,onBufferEnd:g,onEnded:g,onError:g,onDuration:g,onSeek:g,onPlaybackRateChange:g,onPlaybackQualityChange:g,onProgress:g,onClickPreview:g,onEnablePIP:g,onDisablePIP:g},v=()=>{},x={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:v},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v};return Or}function Vr(){if(Rr)return Sr;Rr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{callPlayer:()=>k,getConfig:()=>R,getSDK:()=>S,isBlobUrl:()=>_,isMediaStream:()=>A,lazy:()=>h,omit:()=>T,parseEndTime:()=>x,parseStartTime:()=>v,queryString:()=>P,randomString:()=>O,supportsWebKitPresentationMode:()=>C}),t=u,Sr=l(n({},"__esModule",{value:!0}),t);var d=c(e()),p=c(function(){if(jr)return Er;function e(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function t(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}return jr=1,Er=function(r,n,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},a.type=n.type||"text/javascript",a.charset=n.charset||"utf8",a.async=!("async"in n)||!!n.async,a.src=r,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(a,n.attrs),n.text&&(a.text=""+n.text),("onload"in a?e:t)(a,o),a.onload||e(a,o),i.appendChild(a)}}()),f=c(ur());const h=e=>d.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,y=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,b=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(b.test(e))return parseInt(e)}}function v(e){return w(e,m)}function x(e){return w(e,y)}function O(){return Math.random().toString(36).substr(2,5)}function P(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function E(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const j={},S=function(e,t,r=null,n=()=>!0,o=p.default){const i=E(t);return i&&n(i)?Promise.resolve(i):new Promise(((n,i)=>{if(j[e])return void j[e].push({resolve:n,reject:i});j[e]=[{resolve:n,reject:i}];const a=t=>{j[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(E(t))}}o(e,(n=>{n?(j[e].forEach((e=>e.reject(n))),j[e]=null):r||a(E(t))}))}))};function R(e,t){return(0,f.default)(t.config,e.config)}function T(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const i of o)-1===r.indexOf(i)&&(n[i]=e[i]);return n}function k(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function A(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function _(e){return/^blob:/.test(e)}function C(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}return Sr}function Hr(){if(kr)return Tr;kr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>y}),t=d,Tr=l(n({},"__esModule",{value:!0}),t);var p=c(e()),f=c(yr()),h=qr(),m=Vr();class y extends p.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),u(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),u(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),u(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),u(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),u(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),u(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),u(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),u(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),u(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:i,pip:a,loop:s,activePlayer:l,disableDeferredLoading:c}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!c&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?p.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return u(y,"displayName","Player"),u(y,"propTypes",h.propTypes),u(y,"defaultProps",h.defaultProps),Tr}function $r(){if(_r)return Ar;_r=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},u=(e,t,o)=>(o=null!=e?r(s(e)):{},c(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),p={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(p,{createReactPlayer:()=>S}),t=p,Ar=c(n({},"__esModule",{value:!0}),t);var f=u(e()),h=u(ur()),m=u(fr),y=u(yr()),g=qr(),b=Vr(),w=u(Hr());const v=(0,b.lazy)((()=>function(e,t){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/trailerflix/"+e}(e))in sr)return;sr[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))}((()=>import("./Preview-undboHBv.js").then((e=>e.P))),__vite__mapDeps([0,1])))),x="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,O=void 0!==a&&a.window&&a.window.document,P=Object.keys(g.propTypes),E=x||O?f.Suspense:()=>null,j=[],S=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),d(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),d(this,"showPreview",(()=>{this.setState({showPreview:!0})})),d(this,"getDuration",(()=>this.player?this.player.getDuration():null)),d(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),d(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),d(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),d(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),d(this,"handleReady",(()=>{this.props.onReady(this)})),d(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...j,...e])if(t.canPlay(r))return t;return t||null}))),d(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),d(this,"getAttributes",(0,m.default)((e=>(0,b.omit)(this.props,P)))),d(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,y.default)(this.props,e)||!(0,y.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:i}=this.props;return f.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:i,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:i}=this.props,{showPreview:a}=this.state,s=this.getAttributes(e),l="string"==typeof i?this.references.wrapper:void 0;return f.default.createElement(i,{ref:l,style:{...t,width:r,height:n},...s},f.default.createElement(E,{fallback:o},a?this.renderPreview(e):this.renderActivePlayer(e)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",g.propTypes),d(r,"defaultProps",g.defaultProps),d(r,"addCustomPlayer",(e=>{j.push(e)})),d(r,"removeCustomPlayers",(()=>{j.length=0})),d(r,"canPlay",(t=>{for(const r of[...j,...e])if(r.canPlay(t))return!0;return!1})),d(r,"canEnablePIP",(t=>{for(const r of[...j,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r};return Ar}function Wr(){if(Lr)return Cr;Lr=1;var e,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i={};((e,r)=>{for(var n in r)t(e,n,{get:r[n],enumerable:!0})})(i,{AUDIO_EXTENSIONS:()=>x,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>j,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>d,MATCH_URL_FACEBOOK_WATCH:()=>p,MATCH_URL_KALTURA:()=>v,MATCH_URL_MIXCLOUD:()=>b,MATCH_URL_MUX:()=>u,MATCH_URL_SOUNDCLOUD:()=>l,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>y,MATCH_URL_TWITCH_VIDEO:()=>m,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>s,VIDEO_EXTENSIONS:()=>O,canPlay:()=>R}),e=i,Cr=((e,i,a,s)=>{if("object"==typeof i||"function"==typeof i)for(let l of n(i))o.call(e,l)||l===a||t(e,l,{get:()=>i[l],enumerable:!(s=r(i,l))||s.enumerable});return e})(t({},"__esModule",{value:!0}),e);var a=Vr();const s=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,u=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,d=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,p=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,y=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,b=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,v=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,x=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,j=/\.(flv)($|\?)/i,S=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&S(t))return!0;if(S(t.src))return!0}return!1}return!(!(0,a.isMediaStream)(e)&&!(0,a.isBlobUrl)(e))||(x.test(e)||O.test(e)||P.test(e)||E.test(e)||j.test(e))},R={youtube:e=>e instanceof Array?e.every((e=>s.test(e))):s.test(e),soundcloud:e=>l.test(e)&&!x.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!P.test(e),mux:e=>u.test(e),facebook:e=>d.test(e)||p.test(e),streamable:e=>f.test(e),wistia:e=>h.test(e),twitch:e=>m.test(e)||y.test(e),dailymotion:e=>g.test(e),mixcloud:e=>b.test(e),vidyard:e=>w.test(e),kaltura:e=>v.test(e),file:S};return Cr}function Jr(){if(Ur)return Dr;Ur=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>g}),t=u,Dr=l(n({},"__esModule",{value:!0}),t);var d=((e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)))(e()),p=Vr(),f=Wr();const h=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,y=/youtube-nocookie\.com/;class g extends d.Component{constructor(){super(...arguments),c(this,"callPlayer",p.callPlayer),c(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(h.test(e)){const[,t]=e.match(h);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),c(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:r,onPause:n,onBuffer:o,onBufferEnd:i,onEnded:a,onReady:s,loop:l,config:{playerVars:c,onUnstarted:u}}=this.props,{UNSTARTED:d,PLAYING:p,PAUSED:f,BUFFERING:h,ENDED:m,CUED:y}=window.YT.PlayerState;if(t===d&&u(),t===p&&(r(),i()),t===f&&n(),t===h&&o(),t===m){const e=!!this.callPlayer("getPlaylist");l&&!e&&(c.start?this.seekTo(c.start):this.play()),a()}t===y&&s()})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unMute")})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||h.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:r,muted:n,playsinline:o,controls:i,loop:a,config:s,onError:l}=this.props,{playerVars:c,embedOptions:u}=s,d=this.getID(e);if(t)return h.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:d,startSeconds:(0,p.parseStartTime)(e)||c.start,endSeconds:(0,p.parseEndTime)(e)||c.end});(0,p.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:r?1:0,mute:n?1:0,controls:i?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{a&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:y.test(e)?"https://www.youtube-nocookie.com":void 0,...u}))}),l),u.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}return c(g,"displayName","YouTube"),c(g,"canPlay",f.canPlay.youtube),Dr}function Kr(){if(Ir)return Nr;Ir=1;var e=$r().createReactPlayer,t=Jr().default;return Nr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}])}const Xr=r(Kr()),Yr=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,Gr=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Zr=p.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(155, 109, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(155, 109, 255, 1);
  }
`,Qr=p.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,en=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(19, 17, 27, 0.7) 0%,
      rgba(19, 17, 27, 0.3) 100%
    );
  }
`,tn=p.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,rn=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,a]=s.useState(!1),[l,c]=s.useState(t),u=(e=>{if(!e)return null;try{const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,r=e.match(t);return r&&11===r[2].length?r[2]:null}catch(t){return console.error("Error extracting YouTube ID:",t),null}})(e),d=u?`https://img.youtube.com/vi/${u}/maxresdefault.jpg`:null;return e?i?w.jsx(Yr,{children:w.jsx(tn,{children:"Error al cargar el video"})}):w.jsx(Yr,{children:w.jsx(Gr,{children:!l&&o&&d?w.jsxs(w.Fragment,{children:[w.jsx(en,{src:d}),w.jsx(Zr,{onClick:()=>{c(!0)},children:w.jsx(Qr,{})})]}):w.jsx(Xr,{url:e,width:"100%",height:"100%",playing:l,controls:r,muted:n,onError:()=>{console.error("Error loading video:",e),a(!0)},config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):w.jsx(Yr,{children:w.jsx(tn,{children:"URL de video no válida"})})},nn=p.div`
  flex: 1;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #13111b 0%, #17151f 100%);

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;p.div`
  min-height: 100vh;
  width: 100%;
  background-color: #13111b;
  color: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow-y: auto;
`;const on=p.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 17, 27, 0.5);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(155, 109, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;p.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 2rem auto;
  background: rgba(19, 17, 27, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`;const an=p.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #9b6dff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`,sn=p.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,ln=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,cn=p.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,un=p.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`,dn=p.select`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`,pn=p.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
    min-height: 100px;
  }
`,fn=p.button`
  padding: 1.2rem 2rem;
  border-radius: 8px;
  border: none;
  background: #9b6dff;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: #8a5cf7;
    transform: translateY(-2px);
  }

  &:disabled {
    background: rgba(155, 109, 255, 0.5);
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`,hn=p.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,mn=p.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,yn=()=>{var e;const t=l(),r=null==(e=n().state)?void 0:e.editVideo,[o,i]=s.useState({title:"",category:"",url:"",description:""}),[a,c]=s.useState(""),[u,d]=s.useState(!1);s.useEffect((()=>{r&&i({title:r.title||"",category:r.category||"",url:r.url||"",description:r.description||""})}),[r]);const p=e=>{const{name:t,value:r}=e.target;i((e=>({...e,[t]:r})))};return w.jsx(nn,{children:w.jsxs(on,{children:[w.jsx(an,{children:r?"Editar Video":"Nuevo Video"}),w.jsxs(sn,{onSubmit:async e=>{e.preventDefault(),d(!0),c("");try{r?await ir.put(`${ar}/${r.id}`,o):await ir.post(ar,o),t("/")}catch(n){console.error("Error:",n),c("Error al guardar el video. Por favor, intenta de nuevo.")}finally{d(!1)}},children:[w.jsxs(ln,{children:[w.jsx(cn,{htmlFor:"title",children:"Título"}),w.jsx(un,{type:"text",id:"title",name:"title",value:o.title,onChange:p,required:!0})]}),w.jsxs(ln,{children:[w.jsx(cn,{htmlFor:"category",children:"Categoría"}),w.jsxs(dn,{id:"category",name:"category",value:o.category,onChange:p,required:!0,children:[w.jsx("option",{value:"",children:"Selecciona una categoría"}),w.jsx("option",{value:"Películas",children:"Películas"}),w.jsx("option",{value:"Series",children:"Series"}),w.jsx("option",{value:"Documentales",children:"Documentales"}),w.jsx("option",{value:"Anime",children:"Anime"})]})]}),w.jsxs(ln,{children:[w.jsx(cn,{htmlFor:"url",children:"URL del Video (YouTube)"}),w.jsx(un,{type:"url",id:"url",name:"url",value:o.url,onChange:p,required:!0})]}),w.jsxs(ln,{children:[w.jsx(cn,{htmlFor:"description",children:"Descripción"}),w.jsx(pn,{id:"description",name:"description",value:o.description,onChange:p,required:!0})]}),a&&w.jsx(hn,{children:a}),o.url&&w.jsx(mn,{children:w.jsx(rn,{url:o.url})}),w.jsx(fn,{type:"submit",disabled:u,children:u?"Guardando...":r?"Guardar Cambios":"Crear Video"})]})]})})},gn=f`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #13111b;
  }
`,bn=p.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #13111b;
`,wn=p.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #13111b;
`;function vn(){return w.jsxs(c,{basename:"/trailerflix",children:[w.jsx(gn,{}),w.jsxs(bn,{children:[w.jsx(R,{}),w.jsx(wn,{children:w.jsxs(u,{children:[w.jsx(d,{path:"/",element:w.jsx(Z,{})}),w.jsx(d,{path:"/new-video",element:w.jsx(yn,{})}),w.jsx(d,{path:"/edit-video",element:w.jsx(yn,{})}),w.jsx(d,{path:"*",element:w.jsx(Navigate,{to:"/",replace:!0})})]})}),w.jsx(N,{})]})]})}x.createRoot(document.getElementById("root")).render(w.jsx(o.StrictMode,{children:w.jsx(vn,{})}));
//# sourceMappingURL=index-CeTHUtPa.js.map
