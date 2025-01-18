const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-undboHBv.js","assets/react-vendor-cb1x-2tq.js"])))=>i.map(i=>d[i]);
import{a as e,b as t,g as r,u as n,c as o,d as i,r as a,e as s,B as l,f as c,h as d,R as u}from"./react-vendor-cb1x-2tq.js";import{d as p,m as f,f as h}from"./styled-DnIzXCQ5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m,y,g={exports:{}},b={};var w,x=(y||(y=1,g.exports=function(){if(m)return b;m=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var s,l={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:i.current}}return b.Fragment=n,b.jsx=s,b.jsxs=s,b}()),g.exports),v={};const O=r(function(){if(w)return v;w=1;var e=t();return v.createRoot=e.createRoot,v.hydrateRoot=e.hydrateRoot,v}()),P=p.header`
  width: 100%;
  background: rgba(19, 17, 27, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(155, 109, 255, 0.1);
`,j=p.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
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
`,S=p.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,R=p.button`
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
`,T=()=>{const e=n();return x.jsx(P,{children:x.jsxs(j,{children:[x.jsx(E,{children:"TRÁILERFLIX"}),x.jsxs(S,{children:[x.jsx(R,{to:"/",primary:"/"===e.pathname?1:0,children:"Hogar"}),x.jsx(R,{to:"/new-video",primary:"/new-video"===e.pathname?1:0,children:"Nuevo Video"})]})]})})},k=p.footer`
  width: 100%;
  background: #13111b;
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(155, 109, 255, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(19, 17, 27, 0.95);
    backdrop-filter: blur(10px);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }
`,A=p.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`,_=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,C=p.h3`
  color: #9b6dff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,L=p.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,D=p.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,U=p.li`
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #9b6dff;
  }
`,N=p.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`,I=()=>x.jsxs(k,{children:[x.jsxs(A,{children:[x.jsxs(_,{children:[x.jsx(C,{children:"Acerca de Trailerflix"}),x.jsx(L,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestros videos y ten algo que ver esta semana."})]}),x.jsxs(_,{children:[x.jsx(C,{children:"Categorías"}),x.jsxs(D,{children:[x.jsx(U,{children:"Películas"}),x.jsx(U,{children:"Serie"}),x.jsx(U,{children:"Documentales"}),x.jsx(U,{children:"Anime"})]})]})]}),x.jsxs(N,{children:[(new Date).getFullYear()," Trailerflix. Todos los derechos reservados."]})]});function M(e,t){return function(){return e.apply(t,arguments)}}const{toString:z}=Object.prototype,{getPrototypeOf:B}=Object,F=(e=>t=>{const r=z.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),q=e=>(e=e.toLowerCase(),t=>F(t)===e),V=e=>t=>typeof t===e,{isArray:$}=Array,H=V("undefined");const W=q("ArrayBuffer");const J=V("string"),K=V("function"),Y=V("number"),X=e=>null!==e&&"object"==typeof e,G=e=>{if("object"!==F(e))return!1;const t=B(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Z=q("Date"),Q=q("File"),ee=q("Blob"),te=q("FileList"),re=q("URLSearchParams"),[ne,oe,ie,ae]=["ReadableStream","Request","Response","Headers"].map(q);function se(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),$(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function le(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const ce="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,de=e=>!H(e)&&e!==ce;const ue=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&B(Uint8Array)),pe=q("HTMLFormElement"),fe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),he=q("RegExp"),me=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};se(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},ye="abcdefghijklmnopqrstuvwxyz",ge="0123456789",be={DIGIT:ge,ALPHA:ye,ALPHA_DIGIT:ye+ye.toUpperCase()+ge};const we=q("AsyncFunction"),xe=(ve="function"==typeof setImmediate,Oe=K(ce.postMessage),ve?setImmediate:Oe?(Pe=`axios@${Math.random()}`,je=[],ce.addEventListener("message",(({source:e,data:t})=>{e===ce&&t===Pe&&je.length&&je.shift()()}),!1),e=>{je.push(e),ce.postMessage(Pe,"*")}):e=>setTimeout(e));var ve,Oe,Pe,je;const Ee="undefined"!=typeof queueMicrotask?queueMicrotask.bind(ce):"undefined"!=typeof process&&process.nextTick||xe,Se={isArray:$,isArrayBuffer:W,isBuffer:function(e){return null!==e&&!H(e)&&null!==e.constructor&&!H(e.constructor)&&K(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||K(e.append)&&("formdata"===(t=F(e))||"object"===t&&K(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&W(e.buffer),t},isString:J,isNumber:Y,isBoolean:e=>!0===e||!1===e,isObject:X,isPlainObject:G,isReadableStream:ne,isRequest:oe,isResponse:ie,isHeaders:ae,isUndefined:H,isDate:Z,isFile:Q,isBlob:ee,isRegExp:he,isFunction:K,isStream:e=>X(e)&&K(e.pipe),isURLSearchParams:re,isTypedArray:ue,isFileList:te,forEach:se,merge:function e(){const{caseless:t}=de(this)&&this||{},r={},n=(n,o)=>{const i=t&&le(r,o)||o;G(r[i])&&G(n)?r[i]=e(r[i],n):G(n)?r[i]=e({},n):$(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&se(arguments[o],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(se(t,((t,n)=>{r&&K(t)?e[n]=M(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&B(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:F,kindOfTest:q,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if($(e))return e;let t=e.length;if(!Y(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:pe,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:me,freezeMethods:e=>{me(e,((t,r)=>{if(K(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];K(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return $(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:le,global:ce,isContextDefined:de,ALPHABET:be,generateString:(e=16,t=be.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&K(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(X(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=$(e)?[]:{};return se(e,((e,t)=>{const i=r(e,n+1);!H(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:we,isThenable:e=>e&&(X(e)||K(e))&&K(e.then)&&K(e.catch),setImmediate:xe,asap:Ee};function Re(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}Se.inherits(Re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Se.toJSONObject(this.config),code:this.code,status:this.status}}});const Te=Re.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ke[e]={value:e}})),Object.defineProperties(Re,ke),Object.defineProperty(Te,"isAxiosError",{value:!0}),Re.from=(e,t,r,n,o,i)=>{const a=Object.create(Te);return Se.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Re.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function Ae(e){return Se.isPlainObject(e)||Se.isArray(e)}function _e(e){return Se.endsWith(e,"[]")?e.slice(0,-2):e}function Ce(e,t,r){return e?e.concat(t).map((function(e,t){return e=_e(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Le=Se.toFlatObject(Se,{},null,(function(e){return/^is[A-Z]/.test(e)}));function De(e,t,r){if(!Se.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Se.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Se.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Se.isSpecCompliantForm(t);if(!Se.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Se.isDate(e))return e.toISOString();if(!s&&Se.isBlob(e))throw new Re("Blob is not supported. Use a Buffer instead.");return Se.isArrayBuffer(e)||Se.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){let s=e;if(e&&!o&&"object"==typeof e)if(Se.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Se.isArray(e)&&function(e){return Se.isArray(e)&&!e.some(Ae)}(e)||(Se.isFileList(e)||Se.endsWith(r,"[]"))&&(s=Se.toArray(e)))return r=_e(r),s.forEach((function(e,n){!Se.isUndefined(e)&&null!==e&&t.append(!0===a?Ce([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!Ae(e)||(t.append(Ce(o,r,i),l(e)),!1)}const d=[],u=Object.assign(Le,{defaultVisitor:c,convertValue:l,isVisitable:Ae});if(!Se.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Se.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),Se.forEach(r,(function(r,i){!0===(!(Se.isUndefined(r)||null===r)&&o.call(t,r,Se.isString(i)?i.trim():i,n,u))&&e(r,n?n.concat(i):[i])})),d.pop()}}(e),t}function Ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ne(e,t){this._pairs=[],e&&De(e,this,t)}const Ie=Ne.prototype;function Me(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,r){if(!t)return e;const n=r&&r.encode||Me;Se.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):Se.isURLSearchParams(t)?t.toString():new Ne(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}Ie.append=function(e,t){this._pairs.push([e,t])},Ie.toString=function(e){const t=e?function(t){return e.call(this,t,Ue)}:Ue;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class Be{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Se.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Ne,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Ve="undefined"!=typeof window&&"undefined"!=typeof document,$e="object"==typeof navigator&&navigator||void 0,He=Ve&&(!$e||["ReactNative","NativeScript","NS"].indexOf($e.product)<0),We="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Je=Ve&&window.location.href||"http://localhost",Ke={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ve,hasStandardBrowserEnv:He,hasStandardBrowserWebWorkerEnv:We,navigator:$e,origin:Je},Symbol.toStringTag,{value:"Module"})),...qe};function Ye(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Se.isArray(n)?n.length:i,s)return Se.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&Se.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&Se.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(Se.isFormData(e)&&Se.isFunction(e.entries)){const r={};return Se.forEachEntry(e,((e,n)=>{t(function(e){return Se.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const Xe={transitional:Fe,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=Se.isObject(e);o&&Se.isHTMLForm(e)&&(e=new FormData(e));if(Se.isFormData(e))return n?JSON.stringify(Ye(e)):e;if(Se.isArrayBuffer(e)||Se.isBuffer(e)||Se.isStream(e)||Se.isFile(e)||Se.isBlob(e)||Se.isReadableStream(e))return e;if(Se.isArrayBufferView(e))return e.buffer;if(Se.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return De(e,new Ke.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return Ke.isNode&&Se.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Se.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return De(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t){if(Se.isString(e))try{return(t||JSON.parse)(e),Se.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Xe.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Se.isResponse(e)||Se.isReadableStream(e))return e;if(e&&Se.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(o){if(r){if("SyntaxError"===o.name)throw Re.from(o,Re.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Se.forEach(["delete","get","head","post","put","patch"],(e=>{Xe.headers[e]={}}));const Ge=Se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ze=Symbol("internals");function Qe(e){return e&&String(e).trim().toLowerCase()}function et(e){return!1===e||null==e?e:Se.isArray(e)?e.map(et):String(e)}function tt(e,t,r,n,o){return Se.isFunction(n)?n.call(this,t,r):(o&&(t=r),Se.isString(t)?Se.isString(n)?-1!==t.indexOf(n):Se.isRegExp(n)?n.test(t):void 0:void 0)}class rt{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=Qe(t);if(!o)throw new Error("header name must be a non-empty string");const i=Se.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=et(e))}const i=(e,t)=>Se.forEach(e,((e,r)=>o(e,r,t)));if(Se.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Se.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&Ge[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(Se.isHeaders(e))for(const[a,s]of e.entries())o(s,a,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=Qe(e)){const r=Se.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Se.isFunction(t))return t.call(this,e,r);if(Se.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Qe(e)){const r=Se.findKey(this,e);return!(!r||void 0===this[r]||t&&!tt(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=Qe(e)){const o=Se.findKey(r,e);!o||t&&!tt(0,r[o],o,t)||(delete r[o],n=!0)}}return Se.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!tt(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return Se.forEach(this,((n,o)=>{const i=Se.findKey(r,o);if(i)return t[i]=et(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=et(n),r[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Se.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Se.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[Ze]=this[Ze]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Qe(e);t[n]||(!function(e,t){const r=Se.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return Se.isArray(e)?e.forEach(n):n(e),this}}function nt(e,t){const r=this||Xe,n=t||r,o=rt.from(n.headers);let i=n.data;return Se.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ot(e){return!(!e||!e.__CANCEL__)}function it(e,t,r){Re.call(this,null==e?"canceled":e,Re.ERR_CANCELED,t,r),this.name="CanceledError"}function at(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Re("Request failed with status code "+r.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Se.reduceDescriptors(rt.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),Se.freezeMethods(rt),Se.inherits(it,Re,{__CANCEL__:!0});const st=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[a];o||(o=l),r[i]=s,n[i]=l;let d=a,u=0;for(;d!==i;)u+=r[d++],d%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}}(50,250);return function(e,t){let r,n,o=0,i=1e3/t;const a=(t,i=Date.now())=>{o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),s=t-o;s>=i?a(e,t):(r=e,n||(n=setTimeout((()=>{n=null,a(r)}),i-s)))},()=>r&&a(r)]}((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},lt=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ct=e=>(...t)=>Se.asap((()=>e(...t))),dt=Ke.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ke.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ke.origin),Ke.navigator&&/(msie|trident)/i.test(Ke.navigator.userAgent)):()=>!0,ut=Ke.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];Se.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),Se.isString(n)&&a.push("path="+n),Se.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function pt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ft=e=>e instanceof rt?{...e}:e;function ht(e,t){t=t||{};const r={};function n(e,t,r,n){return Se.isPlainObject(e)&&Se.isPlainObject(t)?Se.merge.call({caseless:n},e,t):Se.isPlainObject(t)?Se.merge({},t):Se.isArray(t)?t.slice():t}function o(e,t,r,o){return Se.isUndefined(t)?Se.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!Se.isUndefined(t))return n(void 0,t)}function a(e,t){return Se.isUndefined(t)?Se.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(ft(e),ft(t),0,!0)};return Se.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);Se.isUndefined(a)&&i!==s||(r[n]=a)})),r}const mt=e=>{const t=ht({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=rt.from(s),t.url=ze(pt(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Se.isFormData(n))if(Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ke.hasStandardBrowserEnv&&(o&&Se.isFunction(o)&&(o=o(t)),o||!1!==o&&dt(t.url))){const e=i&&a&&ut.read(a);e&&s.set(i,e)}return t},yt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=mt(e);let o=n.data;const i=rt.from(n.headers).normalize();let a,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:f}=n;function h(){c&&c(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function y(){if(!m)return;const n=rt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());at((function(e){t(e),h()}),(function(e){r(e),h()}),{data:u&&"text"!==u&&"json"!==u?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(new Re("Request aborted",Re.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new Re("Network Error",Re.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||Fe;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Re(t,o.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Se.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Se.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),u&&"json"!==u&&(m.responseType=n.responseType),f&&([l,d]=st(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=st(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new it(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const g=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);g&&-1===Ke.protocols.indexOf(g)?r(new Re("Unsupported protocol "+g+":",Re.ERR_BAD_REQUEST,e)):m.send(o||null)}))},gt=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Re?t:new it(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Re(`timeout ${t} of ms exceeded`,Re.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>Se.asap(a),s}},bt=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},wt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},xt=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of wt(e))yield*bt(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},vt="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ot=vt&&"function"==typeof ReadableStream,Pt=vt&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),jt=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},Et=Ot&&jt((()=>{let e=!1;const t=new Request(Ke.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),St=Ot&&jt((()=>Se.isReadableStream(new Response("").body))),Rt={stream:St&&(e=>e.body)};var Tt;vt&&(Tt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Rt[e]&&(Rt[e]=Se.isFunction(Tt[e])?t=>t[e]():(t,r)=>{throw new Re(`Response type '${e}' is not supported`,Re.ERR_NOT_SUPPORT,r)})})));const kt=async(e,t)=>{const r=Se.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Se.isBlob(e))return e.size;if(Se.isSpecCompliantForm(e)){const t=new Request(Ke.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Se.isArrayBufferView(e)||Se.isArrayBuffer(e)?e.byteLength:(Se.isURLSearchParams(e)&&(e+=""),Se.isString(e)?(await Pt(e)).byteLength:void 0)})(t):r},At={http:null,xhr:yt,fetch:vt&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=mt(e);c=c?(c+"").toLowerCase():"text";let f,h=gt([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(l&&Et&&"get"!==r&&"head"!==r&&0!==(y=await kt(d,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(Se.isFormData(n)&&(e=r.headers.get("content-type"))&&d.setContentType(e),r.body){const[e,t]=lt(y,st(ct(l)));n=xt(r.body,65536,e,t)}}Se.isString(u)||(u=u?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:o?u:void 0});let i=await fetch(f);const a=St&&("stream"===c||"response"===c);if(St&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Se.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&lt(t,st(ct(s),!0))||[];i=new Response(xt(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}c=c||"text";let g=await Rt[Se.findKey(Rt,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{at(t,r,{data:g,headers:rt.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(g){if(m&&m(),g&&"TypeError"===g.name&&/fetch/i.test(g.message))throw Object.assign(new Re("Network Error",Re.ERR_NETWORK,e,f),{cause:g.cause||g});throw Re.from(g,g&&g.code,e,f)}})};Se.forEach(At,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const _t=e=>`- ${e}`,Ct=e=>Se.isFunction(e)||null===e||!1===e,Lt=e=>{e=Se.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!Ct(r)&&(n=At[(t=String(r)).toLowerCase()],void 0===n))throw new Re(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new Re("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(_t).join("\n"):" "+_t(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Dt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new it(null,e)}function Ut(e){Dt(e),e.headers=rt.from(e.headers),e.data=nt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Lt(e.adapter||Xe.adapter)(e).then((function(t){return Dt(e),t.data=nt.call(e,e.transformResponse,t),t.headers=rt.from(t.headers),t}),(function(t){return ot(t)||(Dt(e),t&&t.response&&(t.response.data=nt.call(e,e.transformResponse,t.response),t.response.headers=rt.from(t.response.headers))),Promise.reject(t)}))}const Nt="1.7.9",It={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{It[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const Mt={};It.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new Re(n(o," has been removed"+(t?" in "+t:"")),Re.ERR_DEPRECATED);return t&&!Mt[o]&&(Mt[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},It.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const zt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new Re("option "+i+" must be "+r,Re.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Re("Unknown option "+i,Re.ERR_BAD_OPTION)}},validators:It},Bt=zt.validators;class Ft{constructor(e){this.defaults=e,this.interceptors={request:new Be,response:new Be}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ht(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&zt.assertOptions(r,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),null!=n&&(Se.isFunction(n)?t.paramsSerializer={serialize:n}:zt.assertOptions(n,{encode:Bt.function,serialize:Bt.function},!0)),zt.assertOptions(t,{baseUrl:Bt.spelling("baseURL"),withXsrfToken:Bt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Se.merge(o.common,o[t.method]);o&&Se.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=rt.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let d,u=0;if(!s){const e=[Ut.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=a.length;let p=t;for(u=0;u<d;){const e=a[u++],t=a[u++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Ut.call(this,p)}catch(f){return Promise.reject(f)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ze(pt((e=ht(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Se.forEach(["delete","get","head","options"],(function(e){Ft.prototype[e]=function(t,r){return this.request(ht(r||{},{method:e,url:t,data:(r||{}).data}))}})),Se.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(ht(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Ft.prototype[e]=t(),Ft.prototype[e+"Form"]=t(!0)}));class qt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new it(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new qt((function(t){e=t})),cancel:e}}}const Vt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vt).forEach((([e,t])=>{Vt[t]=e}));const $t=function e(t){const r=new Ft(t),n=M(Ft.prototype.request,r);return Se.extend(n,Ft.prototype,r,{allOwnKeys:!0}),Se.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(ht(t,r))},n}(Xe);$t.Axios=Ft,$t.CanceledError=it,$t.CancelToken=qt,$t.isCancel=ot,$t.VERSION=Nt,$t.toFormData=De,$t.AxiosError=Re,$t.Cancel=$t.CanceledError,$t.all=function(e){return Promise.all(e)},$t.spread=function(e){return function(t){return e.apply(null,t)}},$t.isAxiosError=function(e){return Se.isObject(e)&&!0===e.isAxiosError},$t.mergeConfig=ht,$t.AxiosHeaders=rt,$t.formToJSON=e=>Ye(Se.isHTMLForm(e)?new FormData(e):e),$t.getAdapter=Lt,$t.HttpStatusCode=Vt,$t.default=$t;const Ht="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",Wt={};var Jt,Kt;function Yt(){if(Kt)return Jt;Kt=1;var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function a(e,t,n){var a={};return n.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,n)(e[o],t[o],n):a[o]=r(t[o],n))})),a}function s(t,o,i){(i=i||{}).arrayMerge=i.arrayMerge||n,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=r;var s=Array.isArray(o);return s===Array.isArray(t)?s?i.arrayMerge(t,o,i):a(t,o,i):r(o,i)}return s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})},Jt=s}var Xt=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Gt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||Xt(n)&&Xt(o)))return!1;var n,o;return!0}const Zt=o(Object.freeze(Object.defineProperty({__proto__:null,default:function(e,t){var r;void 0===t&&(t=Gt);var n,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},Symbol.toStringTag,{value:"Module"})));var Qt,er;function tr(){if(er)return Qt;er=1;var e="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){if(i.constructor!==a.constructor)return!1;var s,l,c,d;if(Array.isArray(i)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(i[l],a[l]))return!1;return!0}if(t&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;for(d=i.entries();!(l=d.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(i[l]!==a[l])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(e&&i instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!i.$$typeof)&&!o(i[c[l]],a[c[l]]))return!1;return!0}return i!=i&&a!=a}return Qt=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}var rr,nr,or,ir,ar,sr,lr,cr,dr,ur,pr,fr,hr,mr,yr,gr,br,wr,xr,vr,Or,Pr={exports:{}};function jr(){if(nr)return rr;nr=1;return rr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Er(){if(ir)return or;ir=1;var e=jr();function t(){}function r(){}return r.resetWarningCache=t,or=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}function Sr(){return ar||(ar=1,Pr.exports=Er()()),Pr.exports}function Rr(){if(lr)return sr;lr=1;var e,t=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===i||r(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable});return e},l={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(l,{defaultProps:()=>v,propTypes:()=>w}),e=l,sr=s(r({},"__esModule",{value:!0}),e);var c=((e,n,o)=>(o=null!=e?t(i(e)):{},s(e&&e.__esModule?o:r(o,"default",{value:e,enumerable:!0}),e)))(Sr());const{string:d,bool:u,number:p,array:f,oneOfType:h,shape:m,object:y,func:g,node:b}=c.default,w={url:h([d,f,y]),playing:u,loop:u,controls:u,volume:p,muted:u,playbackRate:p,width:h([d,p]),height:h([d,p]),style:y,progressInterval:p,playsinline:u,pip:u,stopOnUnmount:u,light:h([u,d,y]),playIcon:b,previewTabIndex:p,previewAriaLabel:d,fallback:b,oEmbedUrl:d,wrapper:h([d,g,m({render:g.isRequired})]),config:m({soundcloud:m({options:y}),youtube:m({playerVars:y,embedOptions:y,onUnstarted:g}),facebook:m({appId:d,version:d,playerId:d,attributes:y}),dailymotion:m({params:y}),vimeo:m({playerOptions:y,title:d}),mux:m({attributes:y,version:d}),file:m({attributes:y,tracks:f,forceVideo:u,forceAudio:u,forceHLS:u,forceSafariHLS:u,forceDisableHls:u,forceDASH:u,forceFLV:u,hlsOptions:y,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:m({options:y,playerId:d,customControls:f}),mixcloud:m({options:y}),twitch:m({options:y,playerId:d}),vidyard:m({options:y})}),onReady:g,onStart:g,onPlay:g,onPause:g,onBuffer:g,onBufferEnd:g,onEnded:g,onError:g,onDuration:g,onSeek:g,onPlaybackRateChange:g,onPlaybackQualityChange:g,onProgress:g,onClickPreview:g,onEnablePIP:g,onDisablePIP:g},x=()=>{},v={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:x},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:x,onStart:x,onPlay:x,onPause:x,onBuffer:x,onBufferEnd:x,onEnded:x,onError:x,onDuration:x,onSeek:x,onPlaybackRateChange:x,onPlaybackQualityChange:x,onProgress:x,onClickPreview:x,onEnablePIP:x,onDisablePIP:x};return sr}function Tr(){if(pr)return ur;pr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>k,getConfig:()=>R,getSDK:()=>S,isBlobUrl:()=>_,isMediaStream:()=>A,lazy:()=>h,omit:()=>T,parseEndTime:()=>v,parseStartTime:()=>x,queryString:()=>P,randomString:()=>O,supportsWebKitPresentationMode:()=>C}),t=d,ur=l(n({},"__esModule",{value:!0}),t);var u=c(e()),p=c(function(){if(dr)return cr;function e(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function t(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}return dr=1,cr=function(r,n,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},a.type=n.type||"text/javascript",a.charset=n.charset||"utf8",a.async=!("async"in n)||!!n.async,a.src=r,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(a,n.attrs),n.text&&(a.text=""+n.text),("onload"in a?e:t)(a,o),a.onload||e(a,o),i.appendChild(a)}}()),f=c(Yt());const h=e=>u.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,y=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,b=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(b.test(e))return parseInt(e)}}function x(e){return w(e,m)}function v(e){return w(e,y)}function O(){return Math.random().toString(36).substr(2,5)}function P(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function j(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},S=function(e,t,r=null,n=()=>!0,o=p.default){const i=j(t);return i&&n(i)?Promise.resolve(i):new Promise(((n,i)=>{if(E[e])return void E[e].push({resolve:n,reject:i});E[e]=[{resolve:n,reject:i}];const a=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(j(t))}}o(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||a(j(t))}))}))};function R(e,t){return(0,f.default)(t.config,e.config)}function T(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const i of o)-1===r.indexOf(i)&&(n[i]=e[i]);return n}function k(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function A(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function _(e){return/^blob:/.test(e)}function C(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}return ur}function kr(){if(hr)return fr;hr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),t=u,fr=l(n({},"__esModule",{value:!0}),t);var p=c(e()),f=c(tr()),h=Rr(),m=Tr();class y extends p.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:i,pip:a,loop:s,activePlayer:l,disableDeferredLoading:c}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!c&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?p.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return d(y,"displayName","Player"),d(y,"propTypes",h.propTypes),d(y,"defaultProps",h.defaultProps),fr}function Ar(){if(yr)return mr;yr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t,r,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(i=o(t,s))||i.enumerable});return e},d=(e,t,o)=>(o=null!=e?r(s(e)):{},c(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),p={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(p,{createReactPlayer:()=>S}),t=p,mr=c(n({},"__esModule",{value:!0}),t);var f=d(e()),h=d(Yt()),m=d(Zt),y=d(tr()),g=Rr(),b=Tr(),w=d(kr());const x=(0,b.lazy)((()=>function(e,t){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/trailerflix/"+e}(e))in Wt)return;Wt[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))}((()=>import("./Preview-undboHBv.js").then((e=>e.P))),__vite__mapDeps([0,1])))),v="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,O=void 0!==i&&i.window&&i.window.document,P=Object.keys(g.propTypes),j=v||O?f.Suspense:()=>null,E=[],S=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),u(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),u(this,"showPreview",(()=>{this.setState({showPreview:!0})})),u(this,"getDuration",(()=>this.player?this.player.getDuration():null)),u(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),u(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),u(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),u(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),u(this,"handleReady",(()=>{this.props.onReady(this)})),u(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...E,...e])if(t.canPlay(r))return t;return t||null}))),u(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),u(this,"getAttributes",(0,m.default)((e=>(0,b.omit)(this.props,P)))),u(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,y.default)(this.props,e)||!(0,y.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:i}=this.props;return f.default.createElement(x,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:i,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:i}=this.props,{showPreview:a}=this.state,s=this.getAttributes(e),l="string"==typeof i?this.references.wrapper:void 0;return f.default.createElement(i,{ref:l,style:{...t,width:r,height:n},...s},f.default.createElement(j,{fallback:o},a?this.renderPreview(e):this.renderActivePlayer(e)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",g.propTypes),u(r,"defaultProps",g.defaultProps),u(r,"addCustomPlayer",(e=>{E.push(e)})),u(r,"removeCustomPlayers",(()=>{E.length=0})),u(r,"canPlay",(t=>{for(const r of[...E,...e])if(r.canPlay(t))return!0;return!1})),u(r,"canEnablePIP",(t=>{for(const r of[...E,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r};return mr}function _r(){if(br)return gr;br=1;var e,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i={};((e,r)=>{for(var n in r)t(e,n,{get:r[n],enumerable:!0})})(i,{AUDIO_EXTENSIONS:()=>v,DASH_EXTENSIONS:()=>j,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>u,MATCH_URL_FACEBOOK_WATCH:()=>p,MATCH_URL_KALTURA:()=>x,MATCH_URL_MIXCLOUD:()=>b,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>l,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>y,MATCH_URL_TWITCH_VIDEO:()=>m,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>s,VIDEO_EXTENSIONS:()=>O,canPlay:()=>R}),e=i,gr=((e,i,a,s)=>{if("object"==typeof i||"function"==typeof i)for(let l of n(i))o.call(e,l)||l===a||t(e,l,{get:()=>i[l],enumerable:!(s=r(i,l))||s.enumerable});return e})(t({},"__esModule",{value:!0}),e);var a=Tr();const s=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,u=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,p=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,y=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,b=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,x=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,v=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,j=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,S=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&S(t))return!0;if(S(t.src))return!0}return!1}return!(!(0,a.isMediaStream)(e)&&!(0,a.isBlobUrl)(e))||(v.test(e)||O.test(e)||P.test(e)||j.test(e)||E.test(e))},R={youtube:e=>e instanceof Array?e.every((e=>s.test(e))):s.test(e),soundcloud:e=>l.test(e)&&!v.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!P.test(e),mux:e=>d.test(e),facebook:e=>u.test(e)||p.test(e),streamable:e=>f.test(e),wistia:e=>h.test(e),twitch:e=>m.test(e)||y.test(e),dailymotion:e=>g.test(e),mixcloud:e=>b.test(e),vidyard:e=>w.test(e),kaltura:e=>x.test(e),file:S};return gr}function Cr(){if(xr)return wr;xr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g}),t=d,wr=l(n({},"__esModule",{value:!0}),t);var u=((e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)))(e()),p=Tr(),f=_r();const h=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,y=/youtube-nocookie\.com/;class g extends u.Component{constructor(){super(...arguments),c(this,"callPlayer",p.callPlayer),c(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(h.test(e)){const[,t]=e.match(h);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),c(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:r,onPause:n,onBuffer:o,onBufferEnd:i,onEnded:a,onReady:s,loop:l,config:{playerVars:c,onUnstarted:d}}=this.props,{UNSTARTED:u,PLAYING:p,PAUSED:f,BUFFERING:h,ENDED:m,CUED:y}=window.YT.PlayerState;if(t===u&&d(),t===p&&(r(),i()),t===f&&n(),t===h&&o(),t===m){const e=!!this.callPlayer("getPlaylist");l&&!e&&(c.start?this.seekTo(c.start):this.play()),a()}t===y&&s()})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unMute")})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||h.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:r,muted:n,playsinline:o,controls:i,loop:a,config:s,onError:l}=this.props,{playerVars:c,embedOptions:d}=s,u=this.getID(e);if(t)return h.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:u,startSeconds:(0,p.parseStartTime)(e)||c.start,endSeconds:(0,p.parseEndTime)(e)||c.end});(0,p.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:r?1:0,mute:n?1:0,controls:i?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{a&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:y.test(e)?"https://www.youtube-nocookie.com":void 0,...d}))}),l),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:t},u.default.createElement("div",{ref:this.ref}))}}return c(g,"displayName","YouTube"),c(g,"canPlay",f.canPlay.youtube),wr}function Lr(){if(Or)return vr;Or=1;var e=Ar().createReactPlayer,t=Cr().default;return vr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}])}const Dr=r(Lr()),Ur=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,Nr=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Ir=p.button`
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
`,Mr=p.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,zr=p.div`
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
`,Br=p.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,Fr=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,s]=a.useState(!1),[l,c]=a.useState(t),d=(e=>{if(!e)return null;try{const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,r=e.match(t);return r&&11===r[2].length?r[2]:null}catch(t){return console.error("Error extracting YouTube ID:",t),null}})(e),u=d?`https://img.youtube.com/vi/${d}/maxresdefault.jpg`:null;return e?i?x.jsx(Ur,{children:x.jsx(Br,{children:"Error al cargar el video"})}):x.jsx(Ur,{children:x.jsx(Nr,{children:!l&&o&&u?x.jsxs(x.Fragment,{children:[x.jsx(zr,{src:u}),x.jsx(Ir,{onClick:()=>{c(!0)},children:x.jsx(Mr,{})})]}):x.jsx(Dr,{url:e,width:"100%",height:"100%",playing:l,controls:r,muted:n,onError:()=>{console.error("Error loading video:",e),s(!0)},config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):x.jsx(Ur,{children:x.jsx(Br,{children:"URL de video no válida"})})},qr=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Vr=p.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`,$r=p.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(155, 109, 255, 0.9);
    transform: scale(1.1);
  }
`,Hr=p.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  z-index: 5;
`,Wr=p.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`,Jr=p.p`
  font-size: 1rem;
  color: #a8a8b3;
  margin: 0;
`,Kr=({video:e,onClose:t})=>x.jsx(qr,{onClick:t,children:x.jsxs(Vr,{onClick:e=>e.stopPropagation(),children:[x.jsx($r,{onClick:t,children:"×"}),x.jsx(Fr,{url:e.url}),x.jsxs(Hr,{children:[x.jsx(Wr,{children:e.title}),x.jsx(Jr,{children:e.description})]})]})}),Yr=p.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4/3;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1/1;
  }
`,Xr=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Yr}:hover & {
    transform: scale(1.05);
  }
`,Gr=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(19, 17, 27, 0.9) 0%,
    rgba(19, 17, 27, 0.5) 50%,
    rgba(19, 17, 27, 0.3) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.3s ease;

  ${Yr}:hover & {
    opacity: 1;
  }
`,Zr=p.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Qr=p.span`
  color: #9b6dff;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,en=p.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Yr}:hover & {
    opacity: 1;
  }
`,tn=p.button`
  background: rgba(155, 109, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background: rgba(130, 87, 230, 0.9);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`,rn=p.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: rgba(155, 109, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  ${Yr}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(130, 87, 230, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`,nn=({video:e,onPlay:t,onDelete:r})=>{const n=s(),[o,i]=a.useState(!1),l=`https://img.youtube.com/vi/${(e=>{const t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null})(e.url)}/maxresdefault.jpg`;return x.jsxs(Yr,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:t,children:[x.jsx(Xr,{src:l,alt:e.title}),x.jsxs(Gr,{show:o,children:[x.jsx(Zr,{children:e.title}),x.jsx(Qr,{children:e.category})]}),x.jsx(rn,{children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:x.jsx("path",{d:"M8 5v14l11-7z"})})}),x.jsxs(en,{children:[x.jsx(tn,{onClick:()=>{n("/edit-video",{state:{editVideo:e}})},children:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"white",children:x.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})})}),x.jsx(tn,{onClick:e=>{e.stopPropagation(),window.confirm("¿Estás seguro de que quieres eliminar este video?")&&r()},children:x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"white",children:x.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]})]})};f`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;const on=f`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;f`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`,f`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(15deg); }
`;const an=p.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: #13111b;
  overflow-x: hidden;
`,sn=p.section`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #13111b 0%, #17151f 100%);
  overflow-x: hidden;
`,ln=p.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
  background: #13111b;
  
  @media (max-width: 768px) {
    height: 50vh;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, #13111b 100%);
  }
`,cn=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(19, 17, 27, 0.95) 0%,
    rgba(19, 17, 27, 0.7) 50%,
    rgba(19, 17, 27, 0.4) 100%
  );
  z-index: 2;
`,dn=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #13111b;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 1rem 0.5rem;
  }
`,un=p.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(155, 109, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(130, 87, 230, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,pn=p.section`
  flex: 1;
  padding: 2rem;
  background: rgba(19, 17, 27, 0.5);
  border-radius: 16px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`,fn=p.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #9b6dff, #8257e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,hn=p.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;p.section`
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;const mn=p.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #9b6dff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,yn=p.nav`
  position: sticky;
  top: 0;
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 100;
  margin-bottom: 2rem;
  animation: ${on} 0.5s ease-out;
`,gn=p.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,bn=p.li`
  cursor: pointer;
  color: ${e=>e.active?"#9b6dff":"rgba(255, 255, 255, 0.8)"};
  font-weight: ${e=>e.active?"600":"400"};
  font-size: 1.1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${e=>e.active?"rgba(155, 109, 255, 0.1)":"transparent"};
  
  &:hover {
    color: #9b6dff;
    transform: translateY(-2px);
    background: rgba(155, 109, 255, 0.1);
  }
`,wn=()=>{const e=s(),[t,r]=a.useState([]),[n,o]=a.useState(null),[i,l]=a.useState(null),c=["Películas","Series","Documentales","Anime"];a.useState(!1),a.useRef({}),a.useState({url:"https://www.youtube.com/watch?v=O6JxZxIzRGc",title:"RECOMIENDA TU TRAILER FAVORITO",description:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.",thumbnail:"https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg"}),a.useEffect((()=>{d()}),[]);const d=async()=>{try{const e=await $t.get(Ht);r(e.data)}catch(e){console.error("Error fetching videos:",e)}},u=r=>{const n=t.filter((e=>e.category===r));return 0===n.length?null:x.jsxs("div",{id:r.toLowerCase(),style:{scrollMarginTop:"100px"},children:[x.jsx(mn,{children:r}),x.jsx(dn,{children:n.map((t=>x.jsx(nn,{video:t,onPlay:()=>o(t),onEdit:()=>(t=>{e("/new-video",{state:{editVideo:t}})})(t),onDelete:()=>(async e=>{try{await $t.delete(`${Ht}/${e}`),await d()}catch(t){console.error("Error deleting video:",t)}})(t.id)},t.id)))})]},r)};return x.jsxs(an,{children:[x.jsxs(sn,{children:[x.jsxs(ln,{children:[x.jsx("img",{src:"/countdown.jpg",alt:"Video destacado",style:{width:"100%",height:"100%",objectFit:"cover"}}),x.jsx(un,{children:x.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:x.jsx("path",{d:"M8 5v14l11-7z"})})})]}),x.jsx(cn,{children:x.jsxs(pn,{children:[x.jsx(fn,{children:"TRÁILERFLIX"}),x.jsx(hn,{children:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos."})]})}),x.jsx(yn,{children:x.jsx(gn,{children:c.map((e=>x.jsx(bn,{active:i===e,onClick:()=>(e=>{const t=document.getElementById(e.toLowerCase());t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),l(e))})(e),children:e},e)))})}),c.map((e=>u(e)))]}),n&&x.jsx(Kr,{isOpen:!!n,onClose:()=>o(null),video:n,API_URL:Ht})]})},xn=p.div`
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
`;const vn=p.div`
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
`;const On=p.h1`
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
`,Pn=p.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,jn=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,En=p.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Sn=p.input`
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
`,Rn=p.select`
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
`,Tn=p.textarea`
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
`,kn=p.button`
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
`,An=p.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,_n=p.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,Cn=()=>{var e;const t=s(),r=null==(e=n().state)?void 0:e.editVideo,[o,i]=a.useState({title:"",category:"",url:"",description:""}),[l,c]=a.useState(""),[d,u]=a.useState(!1);a.useEffect((()=>{r&&i({title:r.title||"",category:r.category||"",url:r.url||"",description:r.description||""})}),[r]);const p=e=>{const{name:t,value:r}=e.target;i((e=>({...e,[t]:r})))};return x.jsx(xn,{children:x.jsxs(vn,{children:[x.jsx(On,{children:r?"Editar Video":"Nuevo Video"}),x.jsxs(Pn,{onSubmit:async e=>{e.preventDefault(),u(!0),c("");try{r?await $t.put(`${Ht}/${r.id}`,o):await $t.post(Ht,o),t("/")}catch(n){console.error("Error:",n),c("Error al guardar el video. Por favor, intenta de nuevo.")}finally{u(!1)}},children:[x.jsxs(jn,{children:[x.jsx(En,{htmlFor:"title",children:"Título"}),x.jsx(Sn,{type:"text",id:"title",name:"title",value:o.title,onChange:p,required:!0})]}),x.jsxs(jn,{children:[x.jsx(En,{htmlFor:"category",children:"Categoría"}),x.jsxs(Rn,{id:"category",name:"category",value:o.category,onChange:p,required:!0,children:[x.jsx("option",{value:"",children:"Selecciona una categoría"}),x.jsx("option",{value:"Películas",children:"Películas"}),x.jsx("option",{value:"Series",children:"Series"}),x.jsx("option",{value:"Documentales",children:"Documentales"}),x.jsx("option",{value:"Anime",children:"Anime"})]})]}),x.jsxs(jn,{children:[x.jsx(En,{htmlFor:"url",children:"URL del Video (YouTube)"}),x.jsx(Sn,{type:"url",id:"url",name:"url",value:o.url,onChange:p,required:!0})]}),x.jsxs(jn,{children:[x.jsx(En,{htmlFor:"description",children:"Descripción"}),x.jsx(Tn,{id:"description",name:"description",value:o.description,onChange:p,required:!0})]}),l&&x.jsx(An,{children:l}),o.url&&x.jsx(_n,{children:x.jsx(Fr,{url:o.url})}),x.jsx(kn,{type:"submit",disabled:d,children:d?"Guardando...":r?"Guardar Cambios":"Crear Video"})]})]})})},Ln=h`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: #13111b;
    overflow-x: hidden;
  }

  #root {
    min-height: 100%;
    width: 100%;
    background: #13111b;
    overflow-x: hidden;
  }
`,Dn=p.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #13111b;
  overflow-x: hidden;
`,Un=p.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #13111b;
  overflow-x: hidden;
`;function Nn(){return x.jsxs(l,{basename:"/trailerflix",children:[x.jsx(Ln,{}),x.jsxs(Dn,{children:[x.jsx(T,{}),x.jsx(Un,{children:x.jsxs(c,{children:[x.jsx(d,{path:"/",element:x.jsx(wn,{})}),x.jsx(d,{path:"/new-video",element:x.jsx(Cn,{})}),x.jsx(d,{path:"/edit-video",element:x.jsx(Cn,{})}),x.jsx(d,{path:"*",element:x.jsx(Navigate,{to:"/",replace:!0})})]})}),x.jsx(I,{})]})]})}O.createRoot(document.getElementById("root")).render(x.jsx(u.StrictMode,{children:x.jsx(Nn,{})}));
//# sourceMappingURL=index-Dea9KmYE.js.map
