const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-Cf1Kmbsq.js","assets/react-vendor-Dm5U8JJ0.js"])))=>i.map(i=>d[i]);
import{a as e,b as t,g as r,L as n,c as o,d as i,r as s,u as a,e as l,B as c,f as u,h as d,R as p}from"./react-vendor-Dm5U8JJ0.js";import{d as f}from"./styled-CgLtJBWi.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var h,m,y={exports:{}},g={};var b,w=(m||(m=1,y.exports=function(){if(h)return g;h=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var a,l={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:l,_owner:i.current}}return g.Fragment=n,g.jsx=a,g.jsxs=a,g}()),y.exports),v={};const x=r(function(){if(b)return v;b=1;var e=t();return v.createRoot=e.createRoot,v.hydrateRoot=e.hydrateRoot,v}()),O=f.header`
  background-color: #13111b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,P=f(n)`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: #8257e6;
  }
`,E=f.nav`
  display: flex;
  gap: 1rem;
`,S=f(n)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(155, 109, 255, 0.1);
  }
`;function R(){return w.jsxs(O,{children:[w.jsx(P,{to:"/",children:"TRÁILERFLIX"}),w.jsxs(E,{children:[w.jsx(S,{to:"/",children:"Inicio"}),w.jsx(S,{to:"/new",children:"Nuevo Video"})]})]})}const j=f.footer`
  background: #13111b;
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid rgba(155, 109, 255, 0.1);
`,T=f.div`
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
`,A=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_=f.h3`
  color: #9b6dff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,k=f.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,C=f.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,L=f.li`
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #9b6dff;
  }
`,D=f.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`,U=()=>w.jsxs(j,{children:[w.jsxs(T,{children:[w.jsxs(A,{children:[w.jsx(_,{children:"Acerca de Trailerflix"}),w.jsx(k,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestros videos y ten algo que ver esta semana."})]}),w.jsxs(A,{children:[w.jsx(_,{children:"Categorías"}),w.jsxs(C,{children:[w.jsx(L,{children:"Películas"}),w.jsx(L,{children:"Serie"}),w.jsx(L,{children:"Documentales"}),w.jsx(L,{children:"Anime"})]})]})]}),w.jsxs(D,{children:[(new Date).getFullYear()," Trailerflix. Todos los derechos reservados."]})]}),N=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #13111b;
`,I=f.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`,M=f.div`
  width: 100%;
  min-height: 70vh;
  background-color: #13111b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`,B=f.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #9b6dff;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,F=f.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;function z(){return w.jsx(N,{children:w.jsx(I,{children:w.jsx(M,{children:w.jsxs("div",{children:[w.jsx(B,{children:"TRÁILERFLIX"}),w.jsx(F,{children:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos."})]})})})})}function q(e,t){return function(){return e.apply(t,arguments)}}const{toString:V}=Object.prototype,{getPrototypeOf:H}=Object,$=(e=>t=>{const r=V.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),W=e=>(e=e.toLowerCase(),t=>$(t)===e),K=e=>t=>typeof t===e,{isArray:J}=Array,X=K("undefined");const Y=W("ArrayBuffer");const G=K("string"),Z=K("function"),Q=K("number"),ee=e=>null!==e&&"object"==typeof e,te=e=>{if("object"!==$(e))return!1;const t=H(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},re=W("Date"),ne=W("File"),oe=W("Blob"),ie=W("FileList"),se=W("URLSearchParams"),[ae,le,ce,ue]=["ReadableStream","Request","Response","Headers"].map(W);function de(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),J(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}function pe(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,he=e=>!X(e)&&e!==fe;const me=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&H(Uint8Array)),ye=W("HTMLFormElement"),ge=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),be=W("RegExp"),we=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};de(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},ve="abcdefghijklmnopqrstuvwxyz",xe="0123456789",Oe={DIGIT:xe,ALPHA:ve,ALPHA_DIGIT:ve+ve.toUpperCase()+xe};const Pe=W("AsyncFunction"),Ee=(Se="function"==typeof setImmediate,Re=Z(fe.postMessage),Se?setImmediate:Re?(je=`axios@${Math.random()}`,Te=[],fe.addEventListener("message",(({source:e,data:t})=>{e===fe&&t===je&&Te.length&&Te.shift()()}),!1),e=>{Te.push(e),fe.postMessage(je,"*")}):e=>setTimeout(e));var Se,Re,je,Te;const Ae="undefined"!=typeof queueMicrotask?queueMicrotask.bind(fe):"undefined"!=typeof process&&process.nextTick||Ee,_e={isArray:J,isArrayBuffer:Y,isBuffer:function(e){return null!==e&&!X(e)&&null!==e.constructor&&!X(e.constructor)&&Z(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||Z(e.append)&&("formdata"===(t=$(e))||"object"===t&&Z(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Y(e.buffer),t},isString:G,isNumber:Q,isBoolean:e=>!0===e||!1===e,isObject:ee,isPlainObject:te,isReadableStream:ae,isRequest:le,isResponse:ce,isHeaders:ue,isUndefined:X,isDate:re,isFile:ne,isBlob:oe,isRegExp:be,isFunction:Z,isStream:e=>ee(e)&&Z(e.pipe),isURLSearchParams:se,isTypedArray:me,isFileList:ie,forEach:de,merge:function e(){const{caseless:t}=he(this)&&this||{},r={},n=(n,o)=>{const i=t&&pe(r,o)||o;te(r[i])&&te(n)?r[i]=e(r[i],n):te(n)?r[i]=e({},n):J(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&de(arguments[o],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(de(t,((t,n)=>{r&&Z(t)?e[n]=q(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],n&&!n(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==r&&H(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:$,kindOfTest:W,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(J(e))return e;let t=e.length;if(!Q(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:ye,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:we,freezeMethods:e=>{we(e,((t,r)=>{if(Z(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];Z(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return J(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:pe,global:fe,isContextDefined:he,ALPHABET:Oe,generateString:(e=16,t=Oe.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&Z(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(ee(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=J(e)?[]:{};return de(e,((e,t)=>{const i=r(e,n+1);!X(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Pe,isThenable:e=>e&&(ee(e)||Z(e))&&Z(e.then)&&Z(e.catch),setImmediate:Ee,asap:Ae};function ke(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}_e.inherits(ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_e.toJSONObject(this.config),code:this.code,status:this.status}}});const Ce=ke.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Le[e]={value:e}})),Object.defineProperties(ke,Le),Object.defineProperty(Ce,"isAxiosError",{value:!0}),ke.from=(e,t,r,n,o,i)=>{const s=Object.create(Ce);return _e.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ke.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};function De(e){return _e.isPlainObject(e)||_e.isArray(e)}function Ue(e){return _e.endsWith(e,"[]")?e.slice(0,-2):e}function Ne(e,t,r){return e?e.concat(t).map((function(e,t){return e=Ue(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Ie=_e.toFlatObject(_e,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Me(e,t,r){if(!_e.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=_e.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!_e.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&_e.isSpecCompliantForm(t);if(!_e.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(_e.isDate(e))return e.toISOString();if(!a&&_e.isBlob(e))throw new ke("Blob is not supported. Use a Buffer instead.");return _e.isArrayBuffer(e)||_e.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){let a=e;if(e&&!o&&"object"==typeof e)if(_e.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(_e.isArray(e)&&function(e){return _e.isArray(e)&&!e.some(De)}(e)||(_e.isFileList(e)||_e.endsWith(r,"[]"))&&(a=_e.toArray(e)))return r=Ue(r),a.forEach((function(e,n){!_e.isUndefined(e)&&null!==e&&t.append(!0===s?Ne([r],n,i):null===s?r:r+"[]",l(e))})),!1;return!!De(e)||(t.append(Ne(o,r,i),l(e)),!1)}const u=[],d=Object.assign(Ie,{defaultVisitor:c,convertValue:l,isVisitable:De});if(!_e.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!_e.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),_e.forEach(r,(function(r,i){!0===(!(_e.isUndefined(r)||null===r)&&o.call(t,r,_e.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),u.pop()}}(e),t}function Be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Fe(e,t){this._pairs=[],e&&Me(e,this,t)}const ze=Fe.prototype;function qe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,r){if(!t)return e;const n=r&&r.encode||qe;_e.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):_e.isURLSearchParams(t)?t.toString():new Fe(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}ze.append=function(e,t){this._pairs.push([e,t])},ze.toString=function(e){const t=e?function(t){return e.call(this,t,Be)}:Be;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class He{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_e.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const $e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},We={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Fe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Ke="undefined"!=typeof window&&"undefined"!=typeof document,Je="object"==typeof navigator&&navigator||void 0,Xe=Ke&&(!Je||["ReactNative","NativeScript","NS"].indexOf(Je.product)<0),Ye="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Ge=Ke&&window.location.href||"http://localhost",Ze={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ke,hasStandardBrowserEnv:Xe,hasStandardBrowserWebWorkerEnv:Ye,navigator:Je,origin:Ge},Symbol.toStringTag,{value:"Module"})),...We};function Qe(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&_e.isArray(n)?n.length:i,a)return _e.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&_e.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&_e.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!s}if(_e.isFormData(e)&&_e.isFunction(e.entries)){const r={};return _e.forEachEntry(e,((e,n)=>{t(function(e){return _e.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const et={transitional:$e,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=_e.isObject(e);o&&_e.isHTMLForm(e)&&(e=new FormData(e));if(_e.isFormData(e))return n?JSON.stringify(Qe(e)):e;if(_e.isArrayBuffer(e)||_e.isBuffer(e)||_e.isStream(e)||_e.isFile(e)||_e.isBlob(e)||_e.isReadableStream(e))return e;if(_e.isArrayBufferView(e))return e.buffer;if(_e.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Me(e,new Ze.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return Ze.isNode&&_e.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=_e.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Me(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t){if(_e.isString(e))try{return(t||JSON.parse)(e),_e.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||et.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(_e.isResponse(e)||_e.isReadableStream(e))return e;if(e&&_e.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(o){if(r){if("SyntaxError"===o.name)throw ke.from(o,ke.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_e.forEach(["delete","get","head","post","put","patch"],(e=>{et.headers[e]={}}));const tt=_e.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rt=Symbol("internals");function nt(e){return e&&String(e).trim().toLowerCase()}function ot(e){return!1===e||null==e?e:_e.isArray(e)?e.map(ot):String(e)}function it(e,t,r,n,o){return _e.isFunction(n)?n.call(this,t,r):(o&&(t=r),_e.isString(t)?_e.isString(n)?-1!==t.indexOf(n):_e.isRegExp(n)?n.test(t):void 0:void 0)}class st{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=nt(t);if(!o)throw new Error("header name must be a non-empty string");const i=_e.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=ot(e))}const i=(e,t)=>_e.forEach(e,((e,r)=>o(e,r,t)));if(_e.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(_e.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&tt[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(_e.isHeaders(e))for(const[s,a]of e.entries())o(a,s,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=nt(e)){const r=_e.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(_e.isFunction(t))return t.call(this,e,r);if(_e.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=nt(e)){const r=_e.findKey(this,e);return!(!r||void 0===this[r]||t&&!it(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=nt(e)){const o=_e.findKey(r,e);!o||t&&!it(0,r[o],o,t)||(delete r[o],n=!0)}}return _e.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!it(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return _e.forEach(this,((n,o)=>{const i=_e.findKey(r,o);if(i)return t[i]=ot(n),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ot(n),r[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _e.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&_e.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[rt]=this[rt]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=nt(e);t[n]||(!function(e,t){const r=_e.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return _e.isArray(e)?e.forEach(n):n(e),this}}function at(e,t){const r=this||et,n=t||r,o=st.from(n.headers);let i=n.data;return _e.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function lt(e){return!(!e||!e.__CANCEL__)}function ct(e,t,r){ke.call(this,null==e?"canceled":e,ke.ERR_CANCELED,t,r),this.name="CanceledError"}function ut(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new ke("Request failed with status code "+r.status,[ke.ERR_BAD_REQUEST,ke.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}st.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),_e.reduceDescriptors(st.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),_e.freezeMethods(st),_e.inherits(ct,ke,{__CANCEL__:!0});const dt=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=n[s];o||(o=l),r[i]=a,n[i]=l;let u=s,d=0;for(;u!==i;)d+=r[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}}(50,250);return function(e,t){let r,n,o=0,i=1e3/t;const s=(t,i=Date.now())=>{o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=i?s(e,t):(r=e,n||(n=setTimeout((()=>{n=null,s(r)}),i-a)))},()=>r&&s(r)]}((r=>{const i=r.loaded,s=r.lengthComputable?r.total:void 0,a=i-n,l=o(a);n=i;e({loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&i<=s?(s-i)/l:void 0,event:r,lengthComputable:null!=s,[t?"download":"upload"]:!0})}),r)},pt=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ft=e=>(...t)=>_e.asap((()=>e(...t))),ht=Ze.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ze.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ze.origin),Ze.navigator&&/(msie|trident)/i.test(Ze.navigator.userAgent)):()=>!0,mt=Ze.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const s=[e+"="+encodeURIComponent(t)];_e.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),_e.isString(n)&&s.push("path="+n),_e.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function yt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const gt=e=>e instanceof st?{...e}:e;function bt(e,t){t=t||{};const r={};function n(e,t,r,n){return _e.isPlainObject(e)&&_e.isPlainObject(t)?_e.merge.call({caseless:n},e,t):_e.isPlainObject(t)?_e.merge({},t):_e.isArray(t)?t.slice():t}function o(e,t,r,o){return _e.isUndefined(t)?_e.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!_e.isUndefined(t))return n(void 0,t)}function s(e,t){return _e.isUndefined(t)?_e.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t,r)=>o(gt(e),gt(t),0,!0)};return _e.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,s=i(e[n],t[n],n);_e.isUndefined(s)&&i!==a||(r[n]=s)})),r}const wt=e=>{const t=bt({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:s,headers:a,auth:l}=t;if(t.headers=a=st.from(a),t.url=Ve(yt(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),_e.isFormData(n))if(Ze.hasStandardBrowserEnv||Ze.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(r=a.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ze.hasStandardBrowserEnv&&(o&&_e.isFunction(o)&&(o=o(t)),o||!1!==o&&ht(t.url))){const e=i&&s&&mt.read(s);e&&a.set(i,e)}return t},vt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=wt(e);let o=n.data;const i=st.from(n.headers).normalize();let s,a,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=n;function h(){c&&c(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(s),n.signal&&n.signal.removeEventListener("abort",s)}let m=new XMLHttpRequest;function y(){if(!m)return;const n=st.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());ut((function(e){t(e),h()}),(function(e){r(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(new ke("Request aborted",ke.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new ke("Network Error",ke.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||$e;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new ke(t,o.clarifyTimeoutError?ke.ETIMEDOUT:ke.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&_e.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),_e.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),f&&([l,u]=dt(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([a,c]=dt(p),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(s=t=>{m&&(r(!t||t.type?new ct(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(s),n.signal&&(n.signal.aborted?s():n.signal.addEventListener("abort",s)));const g=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);g&&-1===Ze.protocols.indexOf(g)?r(new ke("Unsupported protocol "+g+":",ke.ERR_BAD_REQUEST,e)):m.send(o||null)}))},xt=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,s();const t=e instanceof Error?e:this.reason;n.abort(t instanceof ke?t:new ct(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new ke(`timeout ${t} of ms exceeded`,ke.ETIMEDOUT))}),t);const s=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=n;return a.unsubscribe=()=>_e.asap(s),a}},Ot=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Pt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Et=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of Pt(e))yield*Ot(r,t)}(e,t);let i,s=0,a=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return a(),void e.close();let i=n.byteLength;if(r){let e=s+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},St="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Rt=St&&"function"==typeof ReadableStream,jt=St&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Tt=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},At=Rt&&Tt((()=>{let e=!1;const t=new Request(Ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),_t=Rt&&Tt((()=>_e.isReadableStream(new Response("").body))),kt={stream:_t&&(e=>e.body)};var Ct;St&&(Ct=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!kt[e]&&(kt[e]=_e.isFunction(Ct[e])?t=>t[e]():(t,r)=>{throw new ke(`Response type '${e}' is not supported`,ke.ERR_NOT_SUPPORT,r)})})));const Lt=async(e,t)=>{const r=_e.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(_e.isBlob(e))return e.size;if(_e.isSpecCompliantForm(e)){const t=new Request(Ze.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return _e.isArrayBufferView(e)||_e.isArrayBuffer(e)?e.byteLength:(_e.isURLSearchParams(e)&&(e+=""),_e.isString(e)?(await jt(e)).byteLength:void 0)})(t):r},Dt={http:null,xhr:vt,fetch:St&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=wt(e);c=c?(c+"").toLowerCase():"text";let f,h=xt([o,i&&i.toAbortSignal()],s);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(l&&At&&"get"!==r&&"head"!==r&&0!==(y=await Lt(u,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(_e.isFormData(n)&&(e=r.headers.get("content-type"))&&u.setContentType(e),r.body){const[e,t]=pt(y,dt(ft(l)));n=Et(r.body,65536,e,t)}}_e.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const s=_t&&("stream"===c||"response"===c);if(_t&&(a||s&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=_e.toFiniteNumber(i.headers.get("content-length")),[r,n]=a&&pt(t,dt(ft(a),!0))||[];i=new Response(Et(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}c=c||"text";let g=await kt[_e.findKey(kt,c)||"text"](i,e);return!s&&m&&m(),await new Promise(((t,r)=>{ut(t,r,{data:g,headers:st.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(g){if(m&&m(),g&&"TypeError"===g.name&&/fetch/i.test(g.message))throw Object.assign(new ke("Network Error",ke.ERR_NETWORK,e,f),{cause:g.cause||g});throw ke.from(g,g&&g.code,e,f)}})};_e.forEach(Dt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ut=e=>`- ${e}`,Nt=e=>_e.isFunction(e)||null===e||!1===e,It=e=>{e=_e.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!Nt(r)&&(n=Dt[(t=String(r)).toLowerCase()],void 0===n))throw new ke(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new ke("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Ut).join("\n"):" "+Ut(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Mt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ct(null,e)}function Bt(e){Mt(e),e.headers=st.from(e.headers),e.data=at.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return It(e.adapter||et.adapter)(e).then((function(t){return Mt(e),t.data=at.call(e,e.transformResponse,t),t.headers=st.from(t.headers),t}),(function(t){return lt(t)||(Mt(e),t&&t.response&&(t.response.data=at.call(e,e.transformResponse,t.response),t.response.headers=st.from(t.response.headers))),Promise.reject(t)}))}const Ft="1.7.9",zt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{zt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const qt={};zt.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new ke(n(o," has been removed"+(t?" in "+t:"")),ke.ERR_DEPRECATED);return t&&!qt[o]&&(qt[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},zt.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const Vt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new ke("options must be an object",ke.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const t=e[i],r=void 0===t||s(t,i,e);if(!0!==r)throw new ke("option "+i+" must be "+r,ke.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new ke("Unknown option "+i,ke.ERR_BAD_OPTION)}},validators:zt},Ht=Vt.validators;class $t{constructor(e){this.defaults=e,this.interceptors={request:new He,response:new He}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=bt(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&Vt.assertOptions(r,{silentJSONParsing:Ht.transitional(Ht.boolean),forcedJSONParsing:Ht.transitional(Ht.boolean),clarifyTimeoutError:Ht.transitional(Ht.boolean)},!1),null!=n&&(_e.isFunction(n)?t.paramsSerializer={serialize:n}:Vt.assertOptions(n,{encode:Ht.function,serialize:Ht.function},!0)),Vt.assertOptions(t,{baseUrl:Ht.spelling("baseURL"),withXsrfToken:Ht.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&_e.merge(o.common,o[t.method]);o&&_e.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=st.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Bt.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=s.length;let p=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Bt.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return Ve(yt((e=bt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}_e.forEach(["delete","get","head","options"],(function(e){$t.prototype[e]=function(t,r){return this.request(bt(r||{},{method:e,url:t,data:(r||{}).data}))}})),_e.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(bt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}$t.prototype[e]=t(),$t.prototype[e+"Form"]=t(!0)}));class Wt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new ct(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Wt((function(t){e=t})),cancel:e}}}const Kt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Kt).forEach((([e,t])=>{Kt[t]=e}));const Jt=function e(t){const r=new $t(t),n=q($t.prototype.request,r);return _e.extend(n,$t.prototype,r,{allOwnKeys:!0}),_e.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(bt(t,r))},n}(et);Jt.Axios=$t,Jt.CanceledError=ct,Jt.CancelToken=Wt,Jt.isCancel=lt,Jt.VERSION=Ft,Jt.toFormData=Me,Jt.AxiosError=ke,Jt.Cancel=Jt.CanceledError,Jt.all=function(e){return Promise.all(e)},Jt.spread=function(e){return function(t){return e.apply(null,t)}},Jt.isAxiosError=function(e){return _e.isObject(e)&&!0===e.isAxiosError},Jt.mergeConfig=bt,Jt.AxiosHeaders=st,Jt.formToJSON=e=>Qe(_e.isHTMLForm(e)?new FormData(e):e),Jt.getAdapter=It,Jt.HttpStatusCode=Kt,Jt.default=Jt;const Xt="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",Yt={};var Gt,Zt;function Qt(){if(Zt)return Gt;Zt=1;var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function s(e,t,n){var s={};return n.isMergeableObject(e)&&o(e).forEach((function(t){s[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?s[o]=function(e,t){if(!t.customMerge)return a;var r=t.customMerge(e);return"function"==typeof r?r:a}(o,n)(e[o],t[o],n):s[o]=r(t[o],n))})),s}function a(t,o,i){(i=i||{}).arrayMerge=i.arrayMerge||n,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=r;var a=Array.isArray(o);return a===Array.isArray(t)?a?i.arrayMerge(t,o,i):s(t,o,i):r(o,i)}return a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return a(e,r,t)}),{})},Gt=a}var er=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function tr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||er(n)&&er(o)))return!1;var n,o;return!0}const rr=o(Object.freeze(Object.defineProperty({__proto__:null,default:function(e,t){var r;void 0===t&&(t=tr);var n,o=[],i=!1;return function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return i&&r===this&&t(s,o)||(n=e.apply(this,s),i=!0,r=this,o=s),n}}},Symbol.toStringTag,{value:"Module"})));var nr,or;function ir(){if(or)return nr;or=1;var e="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(i,s){if(i===s)return!0;if(i&&s&&"object"==typeof i&&"object"==typeof s){if(i.constructor!==s.constructor)return!1;var a,l,c,u;if(Array.isArray(i)){if((a=i.length)!=s.length)return!1;for(l=a;0!=l--;)if(!o(i[l],s[l]))return!1;return!0}if(t&&i instanceof Map&&s instanceof Map){if(i.size!==s.size)return!1;for(u=i.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;for(u=i.entries();!(l=u.next()).done;)if(!o(l.value[1],s.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&s instanceof Set){if(i.size!==s.size)return!1;for(u=i.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(s)){if((a=i.length)!=s.length)return!1;for(l=a;0!=l--;)if(i[l]!==s[l])return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof s.valueOf)return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof s.toString)return i.toString()===s.toString();if((a=(c=Object.keys(i)).length)!==Object.keys(s).length)return!1;for(l=a;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,c[l]))return!1;if(e&&i instanceof Element)return!1;for(l=a;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!i.$$typeof)&&!o(i[c[l]],s[c[l]]))return!1;return!0}return i!=i&&s!=s}return nr=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}var sr,ar,lr,cr,ur,dr,pr,fr,hr,mr,yr,gr,br,wr,vr,xr,Or,Pr,Er,Sr,Rr,jr={exports:{}};function Tr(){if(ar)return sr;ar=1;return sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Ar(){if(cr)return lr;cr=1;var e=Tr();function t(){}function r(){}return r.resetWarningCache=t,lr=function(){function n(t,r,n,o,i,s){if(s!==e){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}function _r(){return ur||(ur=1,jr.exports=Ar()()),jr.exports}function kr(){if(pr)return dr;pr=1;var e,t=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,a=(e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))s.call(e,l)||l===i||r(e,l,{get:()=>t[l],enumerable:!(a=n(t,l))||a.enumerable});return e},l={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(l,{defaultProps:()=>x,propTypes:()=>w}),e=l,dr=a(r({},"__esModule",{value:!0}),e);var c=((e,n,o)=>(o=null!=e?t(i(e)):{},a(e&&e.__esModule?o:r(o,"default",{value:e,enumerable:!0}),e)))(_r());const{string:u,bool:d,number:p,array:f,oneOfType:h,shape:m,object:y,func:g,node:b}=c.default,w={url:h([u,f,y]),playing:d,loop:d,controls:d,volume:p,muted:d,playbackRate:p,width:h([u,p]),height:h([u,p]),style:y,progressInterval:p,playsinline:d,pip:d,stopOnUnmount:d,light:h([d,u,y]),playIcon:b,previewTabIndex:p,previewAriaLabel:u,fallback:b,oEmbedUrl:u,wrapper:h([u,g,m({render:g.isRequired})]),config:m({soundcloud:m({options:y}),youtube:m({playerVars:y,embedOptions:y,onUnstarted:g}),facebook:m({appId:u,version:u,playerId:u,attributes:y}),dailymotion:m({params:y}),vimeo:m({playerOptions:y,title:u}),mux:m({attributes:y,version:u}),file:m({attributes:y,tracks:f,forceVideo:d,forceAudio:d,forceHLS:d,forceSafariHLS:d,forceDisableHls:d,forceDASH:d,forceFLV:d,hlsOptions:y,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:m({options:y,playerId:u,customControls:f}),mixcloud:m({options:y}),twitch:m({options:y,playerId:u}),vidyard:m({options:y})}),onReady:g,onStart:g,onPlay:g,onPause:g,onBuffer:g,onBufferEnd:g,onEnded:g,onError:g,onDuration:g,onSeek:g,onPlaybackRateChange:g,onPlaybackQualityChange:g,onProgress:g,onClickPreview:g,onEnablePIP:g,onDisablePIP:g},v=()=>{},x={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:v},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v};return dr}function Cr(){if(yr)return mr;yr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))a.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(s=o(t,l))||s.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(s(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{callPlayer:()=>A,getConfig:()=>j,getSDK:()=>R,isBlobUrl:()=>k,isMediaStream:()=>_,lazy:()=>h,omit:()=>T,parseEndTime:()=>x,parseStartTime:()=>v,queryString:()=>P,randomString:()=>O,supportsWebKitPresentationMode:()=>C}),t=u,mr=l(n({},"__esModule",{value:!0}),t);var d=c(e()),p=c(function(){if(hr)return fr;function e(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function t(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}return hr=1,fr=function(r,n,o){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=r,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?e:t)(s,o),s.onload||e(s,o),i.appendChild(s)}}()),f=c(Qt());const h=e=>d.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,y=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,b=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(b.test(e))return parseInt(e)}}function v(e){return w(e,m)}function x(e){return w(e,y)}function O(){return Math.random().toString(36).substr(2,5)}function P(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function E(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},R=function(e,t,r=null,n=()=>!0,o=p.default){const i=E(t);return i&&n(i)?Promise.resolve(i):new Promise(((n,i)=>{if(S[e])return void S[e].push({resolve:n,reject:i});S[e]=[{resolve:n,reject:i}];const s=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),s(E(t))}}o(e,(n=>{n?(S[e].forEach((e=>e.reject(n))),S[e]=null):r||s(E(t))}))}))};function j(e,t){return(0,f.default)(t.config,e.config)}function T(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const i of o)-1===r.indexOf(i)&&(n[i]=e[i]);return n}function A(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function _(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function k(e){return/^blob:/.test(e)}function C(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}return mr}function Lr(){if(br)return gr;br=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))a.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(s=o(t,l))||s.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(s(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>y}),t=d,gr=l(n({},"__esModule",{value:!0}),t);var p=c(e()),f=c(ir()),h=kr(),m=Cr();class y extends p.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),u(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),u(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),u(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),u(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),u(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),u(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),u(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),u(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),u(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:i,pip:s,loop:a,activePlayer:l,disableDeferredLoading:c}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!c&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),e.loop!==a&&this.player.setLoop&&this.player.setLoop(a)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?p.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return u(y,"displayName","Player"),u(y,"propTypes",h.propTypes),u(y,"defaultProps",h.defaultProps),gr}function Dr(){if(vr)return wr;vr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t,r,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of s(t))l.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(i=o(t,a))||i.enumerable});return e},u=(e,t,o)=>(o=null!=e?r(a(e)):{},c(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),p={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(p,{createReactPlayer:()=>R}),t=p,wr=c(n({},"__esModule",{value:!0}),t);var f=u(e()),h=u(Qt()),m=u(rr),y=u(ir()),g=kr(),b=Cr(),w=u(Lr());const v=(0,b.lazy)((()=>function(e,t){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/trailerflix/"+e}(e))in Yt)return;Yt[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))}((()=>import("./Preview-Cf1Kmbsq.js").then((e=>e.P))),__vite__mapDeps([0,1])))),x="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,O=void 0!==i&&i.window&&i.window.document,P=Object.keys(g.propTypes),E=x||O?f.Suspense:()=>null,S=[],R=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),d(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),d(this,"showPreview",(()=>{this.setState({showPreview:!0})})),d(this,"getDuration",(()=>this.player?this.player.getDuration():null)),d(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),d(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),d(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),d(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),d(this,"handleReady",(()=>{this.props.onReady(this)})),d(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...S,...e])if(t.canPlay(r))return t;return t||null}))),d(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),d(this,"getAttributes",(0,m.default)((e=>(0,b.omit)(this.props,P)))),d(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,y.default)(this.props,e)||!(0,y.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:i}=this.props;return f.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:i,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:i}=this.props,{showPreview:s}=this.state,a=this.getAttributes(e),l="string"==typeof i?this.references.wrapper:void 0;return f.default.createElement(i,{ref:l,style:{...t,width:r,height:n},...a},f.default.createElement(E,{fallback:o},s?this.renderPreview(e):this.renderActivePlayer(e)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",g.propTypes),d(r,"defaultProps",g.defaultProps),d(r,"addCustomPlayer",(e=>{S.push(e)})),d(r,"removeCustomPlayers",(()=>{S.length=0})),d(r,"canPlay",(t=>{for(const r of[...S,...e])if(r.canPlay(t))return!0;return!1})),d(r,"canEnablePIP",(t=>{for(const r of[...S,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r};return wr}function Ur(){if(Or)return xr;Or=1;var e,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i={};((e,r)=>{for(var n in r)t(e,n,{get:r[n],enumerable:!0})})(i,{AUDIO_EXTENSIONS:()=>x,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>S,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>d,MATCH_URL_FACEBOOK_WATCH:()=>p,MATCH_URL_KALTURA:()=>v,MATCH_URL_MIXCLOUD:()=>b,MATCH_URL_MUX:()=>u,MATCH_URL_SOUNDCLOUD:()=>l,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>y,MATCH_URL_TWITCH_VIDEO:()=>m,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>a,VIDEO_EXTENSIONS:()=>O,canPlay:()=>j}),e=i,xr=((e,i,s,a)=>{if("object"==typeof i||"function"==typeof i)for(let l of n(i))o.call(e,l)||l===s||t(e,l,{get:()=>i[l],enumerable:!(a=r(i,l))||a.enumerable});return e})(t({},"__esModule",{value:!0}),e);var s=Cr();const a=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,u=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,d=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,p=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,y=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,b=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,v=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,x=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,S=/\.(flv)($|\?)/i,R=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&R(t))return!0;if(R(t.src))return!0}return!1}return!(!(0,s.isMediaStream)(e)&&!(0,s.isBlobUrl)(e))||(x.test(e)||O.test(e)||P.test(e)||E.test(e)||S.test(e))},j={youtube:e=>e instanceof Array?e.every((e=>a.test(e))):a.test(e),soundcloud:e=>l.test(e)&&!x.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!P.test(e),mux:e=>u.test(e),facebook:e=>d.test(e)||p.test(e),streamable:e=>f.test(e),wistia:e=>h.test(e),twitch:e=>m.test(e)||y.test(e),dailymotion:e=>g.test(e),mixcloud:e=>b.test(e),vidyard:e=>w.test(e),kaltura:e=>v.test(e),file:R};return xr}function Nr(){if(Er)return Pr;Er=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,l=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))a.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(s=o(t,l))||s.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>g}),t=u,Pr=l(n({},"__esModule",{value:!0}),t);var d=((e,t,o)=>(o=null!=e?r(s(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)))(e()),p=Cr(),f=Ur();const h=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,y=/youtube-nocookie\.com/;class g extends d.Component{constructor(){super(...arguments),c(this,"callPlayer",p.callPlayer),c(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(h.test(e)){const[,t]=e.match(h);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),c(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:r,onPause:n,onBuffer:o,onBufferEnd:i,onEnded:s,onReady:a,loop:l,config:{playerVars:c,onUnstarted:u}}=this.props,{UNSTARTED:d,PLAYING:p,PAUSED:f,BUFFERING:h,ENDED:m,CUED:y}=window.YT.PlayerState;if(t===d&&u(),t===p&&(r(),i()),t===f&&n(),t===h&&o(),t===m){const e=!!this.callPlayer("getPlaylist");l&&!e&&(c.start?this.seekTo(c.start):this.play()),s()}t===y&&a()})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unMute")})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||h.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:r,muted:n,playsinline:o,controls:i,loop:s,config:a,onError:l}=this.props,{playerVars:c,embedOptions:u}=a,d=this.getID(e);if(t)return h.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:d,startSeconds:(0,p.parseStartTime)(e)||c.start,endSeconds:(0,p.parseEndTime)(e)||c.end});(0,p.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:r?1:0,mute:n?1:0,controls:i?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{s&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:y.test(e)?"https://www.youtube-nocookie.com":void 0,...u}))}),l),u.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}return c(g,"displayName","YouTube"),c(g,"canPlay",f.canPlay.youtube),Pr}function Ir(){if(Rr)return Sr;Rr=1;var e=Dr().createReactPlayer,t=Nr().default;return Sr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}])}const Mr=r(Ir()),Br=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,Fr=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,zr=f.button`
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
`,qr=f.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,Vr=f.div`
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
`,Hr=f.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,$r=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,a]=s.useState(!1),[l,c]=s.useState(t),u=(e=>{if(!e)return null;try{const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,r=e.match(t);return r&&11===r[2].length?r[2]:null}catch(t){return console.error("Error extracting YouTube ID:",t),null}})(e),d=u?`https://img.youtube.com/vi/${u}/maxresdefault.jpg`:null;return e?i?w.jsx(Br,{children:w.jsx(Hr,{children:"Error al cargar el video"})}):w.jsx(Br,{children:w.jsx(Fr,{children:!l&&o&&d?w.jsxs(w.Fragment,{children:[w.jsx(Vr,{src:d}),w.jsx(zr,{onClick:()=>{c(!0)},children:w.jsx(qr,{})})]}):w.jsx(Mr,{url:e,width:"100%",height:"100%",playing:l,controls:r,muted:n,onError:()=>{console.error("Error loading video:",e),a(!0)},config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):w.jsx(Br,{children:w.jsx(Hr,{children:"URL de video no válida"})})},Wr=f.div`
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
`;f.div`
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
`;const Kr=f.div`
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
`;f.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 2rem auto;
  background: rgba(19, 17, 27, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`;const Jr=f.h1`
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
`,Xr=f.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Yr=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Gr=f.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Zr=f.input`
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
`,Qr=f.select`
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
`,en=f.textarea`
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
`,tn=f.button`
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
`,rn=f.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,nn=f.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,on=()=>{var e;const t=a(),r=null==(e=l().state)?void 0:e.editVideo,[n,o]=s.useState({title:"",category:"",url:"",description:""}),[i,c]=s.useState(""),[u,d]=s.useState(!1);s.useEffect((()=>{r&&o({title:r.title||"",category:r.category||"",url:r.url||"",description:r.description||""})}),[r]);const p=e=>{const{name:t,value:r}=e.target;o((e=>({...e,[t]:r})))};return w.jsx(Wr,{children:w.jsxs(Kr,{children:[w.jsx(Jr,{children:r?"Editar Video":"Nuevo Video"}),w.jsxs(Xr,{onSubmit:async e=>{e.preventDefault(),d(!0),c("");try{r?await Jt.put(`${Xt}/${r.id}`,n):await Jt.post(Xt,n),t("/")}catch(o){console.error("Error:",o),c("Error al guardar el video. Por favor, intenta de nuevo.")}finally{d(!1)}},children:[w.jsxs(Yr,{children:[w.jsx(Gr,{htmlFor:"title",children:"Título"}),w.jsx(Zr,{type:"text",id:"title",name:"title",value:n.title,onChange:p,required:!0})]}),w.jsxs(Yr,{children:[w.jsx(Gr,{htmlFor:"category",children:"Categoría"}),w.jsxs(Qr,{id:"category",name:"category",value:n.category,onChange:p,required:!0,children:[w.jsx("option",{value:"",children:"Selecciona una categoría"}),w.jsx("option",{value:"Películas",children:"Películas"}),w.jsx("option",{value:"Series",children:"Series"}),w.jsx("option",{value:"Documentales",children:"Documentales"}),w.jsx("option",{value:"Anime",children:"Anime"})]})]}),w.jsxs(Yr,{children:[w.jsx(Gr,{htmlFor:"url",children:"URL del Video (YouTube)"}),w.jsx(Zr,{type:"url",id:"url",name:"url",value:n.url,onChange:p,required:!0})]}),w.jsxs(Yr,{children:[w.jsx(Gr,{htmlFor:"description",children:"Descripción"}),w.jsx(en,{id:"description",name:"description",value:n.description,onChange:p,required:!0})]}),i&&w.jsx(rn,{children:i}),n.url&&w.jsx(nn,{children:w.jsx($r,{url:n.url})}),w.jsx(tn,{type:"submit",disabled:u,children:u?"Guardando...":r?"Guardar Cambios":"Crear Video"})]})]})})},sn=createGlobalStyle`
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
`,an=f.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #13111b;
`,ln=f.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;function cn(){return w.jsxs(c,{basename:"/trailerflix",children:[w.jsx(sn,{}),w.jsxs(an,{children:[w.jsx(R,{}),w.jsx(ln,{children:w.jsxs(u,{children:[w.jsx(d,{path:"/",element:w.jsx(z,{})}),w.jsx(d,{path:"/new",element:w.jsx(on,{})})]})}),w.jsx(U,{})]})]})}x.createRoot(document.getElementById("root")).render(w.jsx(p.StrictMode,{children:w.jsx(cn,{})}));
//# sourceMappingURL=index-KLqtmxhU.js.map
