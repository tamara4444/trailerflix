const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-uDgHl20X.js","assets/react-vendor-D4gdTaOQ.js"])))=>i.map(i=>d[i]);
import{a as e,b as t,u as r,g as n,c as o,d as i,r as a,e as s,B as l,R as c,f as d,N as u}from"./react-vendor-D4gdTaOQ.js";import{d as p,m as f}from"./styled-Dr16dDXU.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var h,m,y={exports:{}},g={};var b,w=(m||(m=1,y.exports=function(){if(h)return g;h=1;var t=e(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var s,l={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:i.current}}return g.Fragment=n,g.jsx=s,g.jsxs=s,g}()),y.exports),x={};var v=function(){if(b)return x;b=1;var e=t();return x.createRoot=e.createRoot,x.hydrateRoot=e.hydrateRoot,x}();const O=p.header`
  width: 100vw;
  max-width: 100vw;
  background: rgba(19, 17, 27, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(155, 109, 255, 0.1);
`,P=p.div`
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
`,j=p.h1`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8257e6;
  }
`,E=p.div`
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
`,R=()=>{const e=r();return w.jsx(O,{children:w.jsxs(P,{children:[w.jsx(j,{children:"TRÁILERFLIX"}),w.jsxs(E,{children:[w.jsx(S,{to:"/",primary:"/"===e.pathname?1:0,children:"Hogar"}),w.jsx(S,{to:"/new-video",primary:"/new-video"===e.pathname?1:0,children:"Nuevo Video"})]})]})})},T=p.footer`
  width: 100%;
  background: rgba(19, 17, 27, 0.95);
  padding: 3rem 1rem;
  backdrop-filter: blur(10px);
  margin-top: auto;
  border-top: 1px solid rgba(155, 109, 255, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }
`,k=p.div`
  max-width: 1440px;
  width: 100%;
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
`,N=()=>w.jsxs(T,{children:[w.jsxs(k,{children:[w.jsxs(A,{children:[w.jsx(_,{children:"Acerca de Trailerflix"}),w.jsx(C,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestros videos y ten algo que ver esta semana."})]}),w.jsxs(A,{children:[w.jsx(_,{children:"Categorías"}),w.jsxs(L,{children:[w.jsx(D,{children:"Películas"}),w.jsx(D,{children:"Serie"}),w.jsx(D,{children:"Documentales"}),w.jsx(D,{children:"Anime"})]})]})]}),w.jsxs(U,{children:[(new Date).getFullYear()," Trailerflix. Todos los derechos reservados."]})]});function I(e,t){return function(){return e.apply(t,arguments)}}const{toString:M}=Object.prototype,{getPrototypeOf:z}=Object,B=(e=>t=>{const r=M.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>B(t)===e),q=e=>t=>typeof t===e,{isArray:V}=Array,$=q("undefined");const H=F("ArrayBuffer");const W=q("string"),J=q("function"),K=q("number"),Y=e=>null!==e&&"object"==typeof e,X=e=>{if("object"!==B(e))return!1;const t=z(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},G=F("Date"),Z=F("File"),Q=F("Blob"),ee=F("FileList"),te=F("URLSearchParams"),[re,ne,oe,ie]=["ReadableStream","Request","Response","Headers"].map(F);function ae(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),V(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function se(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,ce=e=>!$(e)&&e!==le;const de=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&z(Uint8Array)),ue=F("HTMLFormElement"),pe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),fe=F("RegExp"),he=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ae(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},me="abcdefghijklmnopqrstuvwxyz",ye="0123456789",ge={DIGIT:ye,ALPHA:me,ALPHA_DIGIT:me+me.toUpperCase()+ye};const be=F("AsyncFunction"),we=(xe="function"==typeof setImmediate,ve=J(le.postMessage),xe?setImmediate:ve?(Oe=`axios@${Math.random()}`,Pe=[],le.addEventListener("message",(({source:e,data:t})=>{e===le&&t===Oe&&Pe.length&&Pe.shift()()}),!1),e=>{Pe.push(e),le.postMessage(Oe,"*")}):e=>setTimeout(e));var xe,ve,Oe,Pe;const je="undefined"!=typeof queueMicrotask?queueMicrotask.bind(le):"undefined"!=typeof process&&process.nextTick||we,Ee={isArray:V,isArrayBuffer:H,isBuffer:function(e){return null!==e&&!$(e)&&null!==e.constructor&&!$(e.constructor)&&J(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||J(e.append)&&("formdata"===(t=B(e))||"object"===t&&J(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&H(e.buffer),t},isString:W,isNumber:K,isBoolean:e=>!0===e||!1===e,isObject:Y,isPlainObject:X,isReadableStream:re,isRequest:ne,isResponse:oe,isHeaders:ie,isUndefined:$,isDate:G,isFile:Z,isBlob:Q,isRegExp:fe,isFunction:J,isStream:e=>Y(e)&&J(e.pipe),isURLSearchParams:te,isTypedArray:de,isFileList:ee,forEach:ae,merge:function e(){const{caseless:t}=ce(this)&&this||{},r={},n=(n,o)=>{const i=t&&se(r,o)||o;X(r[i])&&X(n)?r[i]=e(r[i],n):X(n)?r[i]=e({},n):V(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&ae(arguments[o],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(ae(t,((t,n)=>{r&&J(t)?e[n]=I(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&z(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:B,kindOfTest:F,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(V(e))return e;let t=e.length;if(!K(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:ue,hasOwnProperty:pe,hasOwnProp:pe,reduceDescriptors:he,freezeMethods:e=>{he(e,((t,r)=>{if(J(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];J(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return V(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:se,global:le,isContextDefined:ce,ALPHABET:ge,generateString:(e=16,t=ge.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&J(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(Y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=V(e)?[]:{};return ae(e,((e,t)=>{const i=r(e,n+1);!$(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:be,isThenable:e=>e&&(Y(e)||J(e))&&J(e.then)&&J(e.catch),setImmediate:we,asap:je};function Se(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}Ee.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ee.toJSONObject(this.config),code:this.code,status:this.status}}});const Re=Se.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Te[e]={value:e}})),Object.defineProperties(Se,Te),Object.defineProperty(Re,"isAxiosError",{value:!0}),Se.from=(e,t,r,n,o,i)=>{const a=Object.create(Re);return Ee.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Se.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function ke(e){return Ee.isPlainObject(e)||Ee.isArray(e)}function Ae(e){return Ee.endsWith(e,"[]")?e.slice(0,-2):e}function _e(e,t,r){return e?e.concat(t).map((function(e,t){return e=Ae(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Ce=Ee.toFlatObject(Ee,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Le(e,t,r){if(!Ee.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Ee.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ee.isUndefined(t[e])}))).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Ee.isSpecCompliantForm(t);if(!Ee.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ee.isDate(e))return e.toISOString();if(!s&&Ee.isBlob(e))throw new Se("Blob is not supported. Use a Buffer instead.");return Ee.isArrayBuffer(e)||Ee.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){let s=e;if(e&&!o&&"object"==typeof e)if(Ee.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Ee.isArray(e)&&function(e){return Ee.isArray(e)&&!e.some(ke)}(e)||(Ee.isFileList(e)||Ee.endsWith(r,"[]"))&&(s=Ee.toArray(e)))return r=Ae(r),s.forEach((function(e,n){!Ee.isUndefined(e)&&null!==e&&t.append(!0===a?_e([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!ke(e)||(t.append(_e(o,r,i),l(e)),!1)}const d=[],u=Object.assign(Ce,{defaultVisitor:c,convertValue:l,isVisitable:ke});if(!Ee.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Ee.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),Ee.forEach(r,(function(r,i){!0===(!(Ee.isUndefined(r)||null===r)&&o.call(t,r,Ee.isString(i)?i.trim():i,n,u))&&e(r,n?n.concat(i):[i])})),d.pop()}}(e),t}function De(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ue(e,t){this._pairs=[],e&&Le(e,this,t)}const Ne=Ue.prototype;function Ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,r){if(!t)return e;const n=r&&r.encode||Ie;Ee.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):Ee.isURLSearchParams(t)?t.toString():new Ue(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}Ne.append=function(e,t){this._pairs.push([e,t])},Ne.toString=function(e){const t=e?function(t){return e.call(this,t,De)}:De;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class ze{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ee.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Fe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Ue,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},qe="undefined"!=typeof window&&"undefined"!=typeof document,Ve="object"==typeof navigator&&navigator||void 0,$e=qe&&(!Ve||["ReactNative","NativeScript","NS"].indexOf(Ve.product)<0),He="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,We=qe&&window.location.href||"http://localhost",Je={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qe,hasStandardBrowserEnv:$e,hasStandardBrowserWebWorkerEnv:He,navigator:Ve,origin:We},Symbol.toStringTag,{value:"Module"})),...Fe};function Ke(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Ee.isArray(n)?n.length:i,s)return Ee.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&Ee.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&Ee.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(Ee.isFormData(e)&&Ee.isFunction(e.entries)){const r={};return Ee.forEachEntry(e,((e,n)=>{t(function(e){return Ee.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const Ye={transitional:Be,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=Ee.isObject(e);o&&Ee.isHTMLForm(e)&&(e=new FormData(e));if(Ee.isFormData(e))return n?JSON.stringify(Ke(e)):e;if(Ee.isArrayBuffer(e)||Ee.isBuffer(e)||Ee.isStream(e)||Ee.isFile(e)||Ee.isBlob(e)||Ee.isReadableStream(e))return e;if(Ee.isArrayBufferView(e))return e.buffer;if(Ee.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Le(e,new Je.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return Je.isNode&&Ee.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Ee.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Le(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t){if(Ee.isString(e))try{return(t||JSON.parse)(e),Ee.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ye.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Ee.isResponse(e)||Ee.isReadableStream(e))return e;if(e&&Ee.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(o){if(r){if("SyntaxError"===o.name)throw Se.from(o,Se.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Je.classes.FormData,Blob:Je.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ee.forEach(["delete","get","head","post","put","patch"],(e=>{Ye.headers[e]={}}));const Xe=Ee.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ge=Symbol("internals");function Ze(e){return e&&String(e).trim().toLowerCase()}function Qe(e){return!1===e||null==e?e:Ee.isArray(e)?e.map(Qe):String(e)}function et(e,t,r,n,o){return Ee.isFunction(n)?n.call(this,t,r):(o&&(t=r),Ee.isString(t)?Ee.isString(n)?-1!==t.indexOf(n):Ee.isRegExp(n)?n.test(t):void 0:void 0)}class tt{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=Ze(t);if(!o)throw new Error("header name must be a non-empty string");const i=Ee.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Qe(e))}const i=(e,t)=>Ee.forEach(e,((e,r)=>o(e,r,t)));if(Ee.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Ee.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&Xe[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(Ee.isHeaders(e))for(const[a,s]of e.entries())o(s,a,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=Ze(e)){const r=Ee.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Ee.isFunction(t))return t.call(this,e,r);if(Ee.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ze(e)){const r=Ee.findKey(this,e);return!(!r||void 0===this[r]||t&&!et(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=Ze(e)){const o=Ee.findKey(r,e);!o||t&&!et(0,r[o],o,t)||(delete r[o],n=!0)}}return Ee.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!et(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return Ee.forEach(this,((n,o)=>{const i=Ee.findKey(r,o);if(i)return t[i]=Qe(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Qe(n),r[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Ee.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Ee.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[Ge]=this[Ge]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Ze(e);t[n]||(!function(e,t){const r=Ee.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return Ee.isArray(e)?e.forEach(n):n(e),this}}function rt(e,t){const r=this||Ye,n=t||r,o=tt.from(n.headers);let i=n.data;return Ee.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function nt(e){return!(!e||!e.__CANCEL__)}function ot(e,t,r){Se.call(this,null==e?"canceled":e,Se.ERR_CANCELED,t,r),this.name="CanceledError"}function it(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Se("Request failed with status code "+r.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ee.reduceDescriptors(tt.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),Ee.freezeMethods(tt),Ee.inherits(ot,Se,{__CANCEL__:!0});const at=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=n[a];o||(o=l),r[i]=s,n[i]=l;let d=a,u=0;for(;d!==i;)u+=r[d++],d%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}}(50,250);return function(e,t){let r,n,o=0,i=1e3/t;const a=(t,i=Date.now())=>{o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),s=t-o;s>=i?a(e,t):(r=e,n||(n=setTimeout((()=>{n=null,a(r)}),i-s)))},()=>r&&a(r)]}((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},st=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},lt=e=>(...t)=>Ee.asap((()=>e(...t))),ct=Je.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Je.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Je.origin),Je.navigator&&/(msie|trident)/i.test(Je.navigator.userAgent)):()=>!0,dt=Je.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];Ee.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),Ee.isString(n)&&a.push("path="+n),Ee.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ut(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const pt=e=>e instanceof tt?{...e}:e;function ft(e,t){t=t||{};const r={};function n(e,t,r,n){return Ee.isPlainObject(e)&&Ee.isPlainObject(t)?Ee.merge.call({caseless:n},e,t):Ee.isPlainObject(t)?Ee.merge({},t):Ee.isArray(t)?t.slice():t}function o(e,t,r,o){return Ee.isUndefined(t)?Ee.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!Ee.isUndefined(t))return n(void 0,t)}function a(e,t){return Ee.isUndefined(t)?Ee.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(pt(e),pt(t),0,!0)};return Ee.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);Ee.isUndefined(a)&&i!==s||(r[n]=a)})),r}const ht=e=>{const t=ft({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=tt.from(s),t.url=Me(ut(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ee.isFormData(n))if(Je.hasStandardBrowserEnv||Je.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Je.hasStandardBrowserEnv&&(o&&Ee.isFunction(o)&&(o=o(t)),o||!1!==o&&ct(t.url))){const e=i&&a&&dt.read(a);e&&s.set(i,e)}return t},mt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=ht(e);let o=n.data;const i=tt.from(n.headers).normalize();let a,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:f}=n;function h(){c&&c(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function y(){if(!m)return;const n=tt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());it((function(e){t(e),h()}),(function(e){r(e),h()}),{data:u&&"text"!==u&&"json"!==u?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(new Se("Request aborted",Se.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new Se("Network Error",Se.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||Be;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Se(t,o.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Ee.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ee.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),u&&"json"!==u&&(m.responseType=n.responseType),f&&([l,d]=at(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=at(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new ot(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const g=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);g&&-1===Je.protocols.indexOf(g)?r(new Se("Unsupported protocol "+g+":",Se.ERR_BAD_REQUEST,e)):m.send(o||null)}))},yt=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Se?t:new ot(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Se(`timeout ${t} of ms exceeded`,Se.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>Ee.asap(a),s}},gt=function*(e,t){let r=e.byteLength;if(r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},bt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},wt=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of bt(e))yield*gt(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},xt="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,vt=xt&&"function"==typeof ReadableStream,Ot=xt&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Pt=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},jt=vt&&Pt((()=>{let e=!1;const t=new Request(Je.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Et=vt&&Pt((()=>Ee.isReadableStream(new Response("").body))),St={stream:Et&&(e=>e.body)};var Rt;xt&&(Rt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!St[e]&&(St[e]=Ee.isFunction(Rt[e])?t=>t[e]():(t,r)=>{throw new Se(`Response type '${e}' is not supported`,Se.ERR_NOT_SUPPORT,r)})})));const Tt=async(e,t)=>{const r=Ee.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Ee.isBlob(e))return e.size;if(Ee.isSpecCompliantForm(e)){const t=new Request(Je.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ee.isArrayBufferView(e)||Ee.isArrayBuffer(e)?e.byteLength:(Ee.isURLSearchParams(e)&&(e+=""),Ee.isString(e)?(await Ot(e)).byteLength:void 0)})(t):r},kt={http:null,xhr:mt,fetch:xt&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=ht(e);c=c?(c+"").toLowerCase():"text";let f,h=yt([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(l&&jt&&"get"!==r&&"head"!==r&&0!==(y=await Tt(d,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(Ee.isFormData(n)&&(e=r.headers.get("content-type"))&&d.setContentType(e),r.body){const[e,t]=st(y,at(lt(l)));n=wt(r.body,65536,e,t)}}Ee.isString(u)||(u=u?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:o?u:void 0});let i=await fetch(f);const a=Et&&("stream"===c||"response"===c);if(Et&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Ee.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&st(t,at(lt(s),!0))||[];i=new Response(wt(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}c=c||"text";let g=await St[Ee.findKey(St,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{it(t,r,{data:g,headers:tt.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(g){if(m&&m(),g&&"TypeError"===g.name&&/fetch/i.test(g.message))throw Object.assign(new Se("Network Error",Se.ERR_NETWORK,e,f),{cause:g.cause||g});throw Se.from(g,g&&g.code,e,f)}})};Ee.forEach(kt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const At=e=>`- ${e}`,_t=e=>Ee.isFunction(e)||null===e||!1===e,Ct=e=>{e=Ee.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!_t(r)&&(n=kt[(t=String(r)).toLowerCase()],void 0===n))throw new Se(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new Se("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(At).join("\n"):" "+At(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Lt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ot(null,e)}function Dt(e){Lt(e),e.headers=tt.from(e.headers),e.data=rt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ct(e.adapter||Ye.adapter)(e).then((function(t){return Lt(e),t.data=rt.call(e,e.transformResponse,t),t.headers=tt.from(t.headers),t}),(function(t){return nt(t)||(Lt(e),t&&t.response&&(t.response.data=rt.call(e,e.transformResponse,t.response),t.response.headers=tt.from(t.response.headers))),Promise.reject(t)}))}const Ut="1.7.9",Nt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Nt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const It={};Nt.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new Se(n(o," has been removed"+(t?" in "+t:"")),Se.ERR_DEPRECATED);return t&&!It[o]&&(It[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},Nt.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const Mt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new Se("option "+i+" must be "+r,Se.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Se("Unknown option "+i,Se.ERR_BAD_OPTION)}},validators:Nt},zt=Mt.validators;class Bt{constructor(e){this.defaults=e,this.interceptors={request:new ze,response:new ze}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ft(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&Mt.assertOptions(r,{silentJSONParsing:zt.transitional(zt.boolean),forcedJSONParsing:zt.transitional(zt.boolean),clarifyTimeoutError:zt.transitional(zt.boolean)},!1),null!=n&&(Ee.isFunction(n)?t.paramsSerializer={serialize:n}:Mt.assertOptions(n,{encode:zt.function,serialize:zt.function},!0)),Mt.assertOptions(t,{baseUrl:zt.spelling("baseURL"),withXsrfToken:zt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Ee.merge(o.common,o[t.method]);o&&Ee.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=tt.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let d,u=0;if(!s){const e=[Dt.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=a.length;let p=t;for(u=0;u<d;){const e=a[u++],t=a[u++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Dt.call(this,p)}catch(f){return Promise.reject(f)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return Me(ut((e=ft(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Ee.forEach(["delete","get","head","options"],(function(e){Bt.prototype[e]=function(t,r){return this.request(ft(r||{},{method:e,url:t,data:(r||{}).data}))}})),Ee.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(ft(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Bt.prototype[e]=t(),Bt.prototype[e+"Form"]=t(!0)}));class Ft{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new ot(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Ft((function(t){e=t})),cancel:e}}}const qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qt).forEach((([e,t])=>{qt[t]=e}));const Vt=function e(t){const r=new Bt(t),n=I(Bt.prototype.request,r);return Ee.extend(n,Bt.prototype,r,{allOwnKeys:!0}),Ee.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(ft(t,r))},n}(Ye);Vt.Axios=Bt,Vt.CanceledError=ot,Vt.CancelToken=Ft,Vt.isCancel=nt,Vt.VERSION=Ut,Vt.toFormData=Le,Vt.AxiosError=Se,Vt.Cancel=Vt.CanceledError,Vt.all=function(e){return Promise.all(e)},Vt.spread=function(e){return function(t){return e.apply(null,t)}},Vt.isAxiosError=function(e){return Ee.isObject(e)&&!0===e.isAxiosError},Vt.mergeConfig=ft,Vt.AxiosHeaders=tt,Vt.formToJSON=e=>Ke(Ee.isHTMLForm(e)?new FormData(e):e),Vt.getAdapter=Ct,Vt.HttpStatusCode=qt,Vt.default=Vt;const $t="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",Ht={};var Wt,Jt;function Kt(){if(Jt)return Wt;Jt=1;var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function a(e,t,n){var a={};return n.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,n)(e[o],t[o],n):a[o]=r(t[o],n))})),a}function s(t,o,i){(i=i||{}).arrayMerge=i.arrayMerge||n,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=r;var s=Array.isArray(o);return s===Array.isArray(t)?s?i.arrayMerge(t,o,i):a(t,o,i):r(o,i)}return s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})},Wt=s}var Yt=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Xt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||Yt(n)&&Yt(o)))return!1;var n,o;return!0}const Gt=n(Object.freeze(Object.defineProperty({__proto__:null,default:function(e,t){var r;void 0===t&&(t=Xt);var n,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&r===this&&t(a,o)||(n=e.apply(this,a),i=!0,r=this,o=a),n}}},Symbol.toStringTag,{value:"Module"})));var Zt,Qt;function er(){if(Qt)return Zt;Qt=1;var e="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){if(i.constructor!==a.constructor)return!1;var s,l,c,d;if(Array.isArray(i)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(i[l],a[l]))return!1;return!0}if(t&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;for(d=i.entries();!(l=d.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((s=i.length)!=a.length)return!1;for(l=s;0!=l--;)if(i[l]!==a[l])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(e&&i instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!i.$$typeof)&&!o(i[c[l]],a[c[l]]))return!1;return!0}return i!=i&&a!=a}return Zt=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}var tr,rr,nr,or,ir,ar,sr,lr,cr,dr,ur,pr,fr,hr,mr,yr,gr,br,wr,xr,vr,Or={exports:{}};function Pr(){if(rr)return tr;rr=1;return tr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function jr(){if(or)return nr;or=1;var e=Pr();function t(){}function r(){}return r.resetWarningCache=t,nr=function(){function n(t,r,n,o,i,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function o(){return n}n.isRequired=n;var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i}}function Er(){return ir||(ir=1,Or.exports=jr()()),Or.exports}function Sr(){if(sr)return ar;sr=1;var e,t=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,s=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of o(t))a.call(e,l)||l===i||r(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable});return e},l={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(l,{defaultProps:()=>v,propTypes:()=>w}),e=l,ar=s(r({},"__esModule",{value:!0}),e);var c=((e,n,o)=>(o=null!=e?t(i(e)):{},s(e&&e.__esModule?o:r(o,"default",{value:e,enumerable:!0}),e)))(Er());const{string:d,bool:u,number:p,array:f,oneOfType:h,shape:m,object:y,func:g,node:b}=c.default,w={url:h([d,f,y]),playing:u,loop:u,controls:u,volume:p,muted:u,playbackRate:p,width:h([d,p]),height:h([d,p]),style:y,progressInterval:p,playsinline:u,pip:u,stopOnUnmount:u,light:h([u,d,y]),playIcon:b,previewTabIndex:p,previewAriaLabel:d,fallback:b,oEmbedUrl:d,wrapper:h([d,g,m({render:g.isRequired})]),config:m({soundcloud:m({options:y}),youtube:m({playerVars:y,embedOptions:y,onUnstarted:g}),facebook:m({appId:d,version:d,playerId:d,attributes:y}),dailymotion:m({params:y}),vimeo:m({playerOptions:y,title:d}),mux:m({attributes:y,version:d}),file:m({attributes:y,tracks:f,forceVideo:u,forceAudio:u,forceHLS:u,forceSafariHLS:u,forceDisableHls:u,forceDASH:u,forceFLV:u,hlsOptions:y,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:m({options:y,playerId:d,customControls:f}),mixcloud:m({options:y}),twitch:m({options:y,playerId:d}),vidyard:m({options:y})}),onReady:g,onStart:g,onPlay:g,onPause:g,onBuffer:g,onBufferEnd:g,onEnded:g,onError:g,onDuration:g,onSeek:g,onPlaybackRateChange:g,onPlaybackQualityChange:g,onProgress:g,onClickPreview:g,onEnablePIP:g,onDisablePIP:g},x=()=>{},v={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:x},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:x,onStart:x,onPlay:x,onPause:x,onBuffer:x,onBufferEnd:x,onEnded:x,onError:x,onDuration:x,onSeek:x,onPlaybackRateChange:x,onPlaybackQualityChange:x,onProgress:x,onClickPreview:x,onEnablePIP:x,onDisablePIP:x};return ar}function Rr(){if(ur)return dr;ur=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{callPlayer:()=>k,getConfig:()=>R,getSDK:()=>S,isBlobUrl:()=>_,isMediaStream:()=>A,lazy:()=>h,omit:()=>T,parseEndTime:()=>v,parseStartTime:()=>x,queryString:()=>P,randomString:()=>O,supportsWebKitPresentationMode:()=>C}),t=d,dr=l(n({},"__esModule",{value:!0}),t);var u=c(e()),p=c(function(){if(cr)return lr;function e(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function t(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}return cr=1,lr=function(r,n,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},a.type=n.type||"text/javascript",a.charset=n.charset||"utf8",a.async=!("async"in n)||!!n.async,a.src=r,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(a,n.attrs),n.text&&(a.text=""+n.text),("onload"in a?e:t)(a,o),a.onload||e(a,o),i.appendChild(a)}}()),f=c(Kt());const h=e=>u.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,y=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,b=/^\d+$/;function w(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(b.test(e))return parseInt(e)}}function x(e){return w(e,m)}function v(e){return w(e,y)}function O(){return Math.random().toString(36).substr(2,5)}function P(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function j(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},S=function(e,t,r=null,n=()=>!0,o=p.default){const i=j(t);return i&&n(i)?Promise.resolve(i):new Promise(((n,i)=>{if(E[e])return void E[e].push({resolve:n,reject:i});E[e]=[{resolve:n,reject:i}];const a=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),a(j(t))}}o(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||a(j(t))}))}))};function R(e,t){return(0,f.default)(t.config,e.config)}function T(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const i of o)-1===r.indexOf(i)&&(n[i]=e[i]);return n}function k(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function A(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function _(e){return/^blob:/.test(e)}function C(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}return dr}function Tr(){if(fr)return pr;fr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),t=u,pr=l(n({},"__esModule",{value:!0}),t);var p=c(e()),f=c(er()),h=Sr(),m=Rr();class y extends p.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"isReady",!1),d(this,"isPlaying",!1),d(this,"isLoading",!0),d(this,"loadOnReady",null),d(this,"startOnPlay",!0),d(this,"seekOnPlay",null),d(this,"onDurationCalled",!1),d(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),d(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),d(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),d(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),d(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),d(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),d(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),d(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),d(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),d(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:i,pip:a,loop:s,activePlayer:l,disableDeferredLoading:c}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!l.forceLoad&&!c&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==i&&this.player.setPlaybackRate&&this.player.setPlaybackRate(i),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?p.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return d(y,"displayName","Player"),d(y,"propTypes",h.propTypes),d(y,"defaultProps",h.defaultProps),pr}function kr(){if(mr)return hr;mr=1;var t,r=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(o=i(t,s))||o.enumerable});return e},d=(e,t,o)=>(o=null!=e?r(s(e)):{},c(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)),u=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),p={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(p,{createReactPlayer:()=>S}),t=p,hr=c(n({},"__esModule",{value:!0}),t);var f=d(e()),h=d(Kt()),m=d(Gt),y=d(er()),g=Sr(),b=Rr(),w=d(Tr());const x=(0,b.lazy)((()=>function(e,t){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));r=Promise.allSettled(t.map((e=>{if((e=function(e){return"/trailerflix/"+e}(e))in Ht)return;Ht[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,n&&o.setAttribute("nonce",n),document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))}((()=>import("./Preview-uDgHl20X.js").then((e=>e.P))),__vite__mapDeps([0,1])))),v="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,O=void 0!==o&&o.window&&o.window.document,P=Object.keys(g.propTypes),j=v||O?f.Suspense:()=>null,E=[],S=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),u(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),u(this,"showPreview",(()=>{this.setState({showPreview:!0})})),u(this,"getDuration",(()=>this.player?this.player.getDuration():null)),u(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),u(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),u(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),u(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),u(this,"handleReady",(()=>{this.props.onReady(this)})),u(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...E,...e])if(t.canPlay(r))return t;return t||null}))),u(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([g.defaultProps.config,g.defaultProps.config[t]||{},r,r[t]||{}])}))),u(this,"getAttributes",(0,m.default)((e=>(0,b.omit)(this.props,P)))),u(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,y.default)(this.props,e)||!(0,y.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:i}=this.props;return f.default.createElement(x,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:i,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:i}=this.props,{showPreview:a}=this.state,s=this.getAttributes(e),l="string"==typeof i?this.references.wrapper:void 0;return f.default.createElement(i,{ref:l,style:{...t,width:r,height:n},...s},f.default.createElement(j,{fallback:o},a?this.renderPreview(e):this.renderActivePlayer(e)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",g.propTypes),u(r,"defaultProps",g.defaultProps),u(r,"addCustomPlayer",(e=>{E.push(e)})),u(r,"removeCustomPlayers",(()=>{E.length=0})),u(r,"canPlay",(t=>{for(const r of[...E,...e])if(r.canPlay(t))return!0;return!1})),u(r,"canEnablePIP",(t=>{for(const r of[...E,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r};return hr}function Ar(){if(gr)return yr;gr=1;var e,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i={};((e,r)=>{for(var n in r)t(e,n,{get:r[n],enumerable:!0})})(i,{AUDIO_EXTENSIONS:()=>v,DASH_EXTENSIONS:()=>j,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>P,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>u,MATCH_URL_FACEBOOK_WATCH:()=>p,MATCH_URL_KALTURA:()=>x,MATCH_URL_MIXCLOUD:()=>b,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>l,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>y,MATCH_URL_TWITCH_VIDEO:()=>m,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>h,MATCH_URL_YOUTUBE:()=>s,VIDEO_EXTENSIONS:()=>O,canPlay:()=>R}),e=i,yr=((e,i,a,s)=>{if("object"==typeof i||"function"==typeof i)for(let l of n(i))o.call(e,l)||l===a||t(e,l,{get:()=>i[l],enumerable:!(s=r(i,l))||s.enumerable});return e})(t({},"__esModule",{value:!0}),e);var a=Rr();const s=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,l=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,u=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,p=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,h=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,y=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,b=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,x=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,v=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,O=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,P=/\.(m3u8)($|\?)/i,j=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,S=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&S(t))return!0;if(S(t.src))return!0}return!1}return!(!(0,a.isMediaStream)(e)&&!(0,a.isBlobUrl)(e))||(v.test(e)||O.test(e)||P.test(e)||j.test(e)||E.test(e))},R={youtube:e=>e instanceof Array?e.every((e=>s.test(e))):s.test(e),soundcloud:e=>l.test(e)&&!v.test(e),vimeo:e=>c.test(e)&&!O.test(e)&&!P.test(e),mux:e=>d.test(e),facebook:e=>u.test(e)||p.test(e),streamable:e=>f.test(e),wistia:e=>h.test(e),twitch:e=>m.test(e)||y.test(e),dailymotion:e=>g.test(e),mixcloud:e=>b.test(e),vidyard:e=>w.test(e),kaltura:e=>x.test(e),file:S};return yr}function _r(){if(wr)return br;wr=1;var t,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,l=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of i(t))s.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g}),t=d,br=l(n({},"__esModule",{value:!0}),t);var u=((e,t,o)=>(o=null!=e?r(a(e)):{},l(e&&e.__esModule?o:n(o,"default",{value:e,enumerable:!0}),e)))(e()),p=Rr(),f=Ar();const h=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,y=/youtube-nocookie\.com/;class g extends u.Component{constructor(){super(...arguments),c(this,"callPlayer",p.callPlayer),c(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(h.test(e)){const[,t]=e.match(h);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),c(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:r,onPause:n,onBuffer:o,onBufferEnd:i,onEnded:a,onReady:s,loop:l,config:{playerVars:c,onUnstarted:d}}=this.props,{UNSTARTED:u,PLAYING:p,PAUSED:f,BUFFERING:h,ENDED:m,CUED:y}=window.YT.PlayerState;if(t===u&&d(),t===p&&(r(),i()),t===f&&n(),t===h&&o(),t===m){const e=!!this.callPlayer("getPlaylist");l&&!e&&(c.start?this.seekTo(c.start):this.play()),a()}t===y&&s()})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unMute")})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||h.test(e)?null:e.match(f.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:r,muted:n,playsinline:o,controls:i,loop:a,config:s,onError:l}=this.props,{playerVars:c,embedOptions:d}=s,u=this.getID(e);if(t)return h.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:u,startSeconds:(0,p.parseStartTime)(e)||c.start,endSeconds:(0,p.parseEndTime)(e)||c.end});(0,p.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:r?1:0,mute:n?1:0,controls:i?1:0,start:(0,p.parseStartTime)(e),end:(0,p.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...c},events:{onReady:()=>{a&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>l(e.data)},host:y.test(e)?"https://www.youtube-nocookie.com":void 0,...d}))}),l),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:t},u.default.createElement("div",{ref:this.ref}))}}return c(g,"displayName","YouTube"),c(g,"canPlay",f.canPlay.youtube),br}function Cr(){if(vr)return xr;vr=1;var e=kr().createReactPlayer,t=_r().default;return xr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}])}const Lr=i(Cr()),Dr=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,Ur=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Nr=p.button`
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
`,Ir=p.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,Mr=p.div`
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
`,zr=p.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,Br=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,s]=a.useState(!1),[l,c]=a.useState(t),d=(e=>{if(!e)return null;try{const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,r=e.match(t);return r&&11===r[2].length?r[2]:null}catch(t){return console.error("Error extracting YouTube ID:",t),null}})(e),u=d?`https://img.youtube.com/vi/${d}/maxresdefault.jpg`:null;return e?i?w.jsx(Dr,{children:w.jsx(zr,{children:"Error al cargar el video"})}):w.jsx(Dr,{children:w.jsx(Ur,{children:!l&&o&&u?w.jsxs(w.Fragment,{children:[w.jsx(Mr,{src:u}),w.jsx(Nr,{onClick:()=>{c(!0)},children:w.jsx(Ir,{})})]}):w.jsx(Lr,{url:e,width:"100%",height:"100%",playing:l,controls:r,muted:n,onError:()=>{console.error("Error loading video:",e),s(!0)},config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):w.jsx(Dr,{children:w.jsx(zr,{children:"URL de video no válida"})})},Fr=p.div`
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
`,qr=p.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`,Vr=p.button`
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
`,$r=p.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  z-index: 5;
`,Hr=p.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`,Wr=p.p`
  font-size: 1rem;
  color: #a8a8b3;
  margin: 0;
`,Jr=({video:e,onClose:t})=>w.jsx(Fr,{onClick:t,children:w.jsxs(qr,{onClick:e=>e.stopPropagation(),children:[w.jsx(Vr,{onClick:t,children:"×"}),w.jsx(Br,{url:e.url}),w.jsxs($r,{children:[w.jsx(Hr,{children:e.title}),w.jsx(Wr,{children:e.description})]})]})}),Kr=p.div`
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
`,Yr=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Kr}:hover & {
    transform: scale(1.05);
  }
`,Xr=p.div`
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

  ${Kr}:hover & {
    opacity: 1;
  }
`,Gr=p.h3`
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
`,Zr=p.span`
  color: #9b6dff;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Qr=p.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Kr}:hover & {
    opacity: 1;
  }
`,en=p.button`
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
`,tn=p.div`
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

  ${Kr}:hover & {
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
`,rn=({video:e,onPlay:t,onDelete:r})=>{const n=s(),[o,i]=a.useState(!1),l=`https://img.youtube.com/vi/${(e=>{const t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null})(e.url)}/maxresdefault.jpg`;return w.jsxs(Kr,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:t,children:[w.jsx(Yr,{src:l,alt:e.title}),w.jsxs(Xr,{show:o,children:[w.jsx(Gr,{children:e.title}),w.jsx(Zr,{children:e.category})]}),w.jsx(tn,{children:w.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:w.jsx("path",{d:"M8 5v14l11-7z"})})}),w.jsxs(Qr,{children:[w.jsx(en,{onClick:()=>{n("/edit-video",{state:{editVideo:e}})},children:w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"white",children:w.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})})}),w.jsx(en,{onClick:e=>{e.stopPropagation(),window.confirm("¿Estás seguro de que quieres eliminar este video?")&&r()},children:w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"white",children:w.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]})]})};f`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;const nn=f`
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
`;const on=p.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #13111b;
  overflow-x: hidden;
`,an=p.section`
  width: 100vw;
  max-width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: linear-gradient(135deg, #13111b 0%, #17151f 100%);
  overflow-x: hidden;
`,sn=p.div`
  width: 100vw;
  max-width: 100vw;
  height: 70vh;
  position: relative;
  overflow: hidden;
  background: #13111b;
  
  @media (max-width: 768px) {
    height: 50vh;
  }
`,ln=p.div`
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
`,cn=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 1rem 0.5rem;
  }
`,dn=p.button`
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
`,un=p.section`
  flex: 1;
  padding: 2rem;
  background: rgba(19, 17, 27, 0.5);
  border-radius: 16px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`,pn=p.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #9b6dff, #8257e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,fn=p.p`
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
`;const hn=p.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #9b6dff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,mn=p.nav`
  position: sticky;
  top: 0;
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 100;
  margin-bottom: 2rem;
  animation: ${nn} 0.5s ease-out;
`,yn=p.ul`
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
`,gn=p.li`
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
`,bn=()=>{const e=s(),[t,r]=a.useState([]),[n,o]=a.useState(null),[i,l]=a.useState(null),c=["Películas","Series","Documentales","Anime"];a.useState(!1),a.useRef({}),a.useState({url:"https://www.youtube.com/watch?v=O6JxZxIzRGc",title:"RECOMIENDA TU TRAILER FAVORITO",description:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.",thumbnail:"https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg"}),a.useEffect((()=>{d()}),[]);const d=async()=>{try{const e=await Vt.get($t);r(e.data)}catch(e){console.error("Error fetching videos:",e)}},u=r=>{const n=t.filter((e=>e.category===r));return 0===n.length?null:w.jsxs("div",{id:r.toLowerCase(),style:{scrollMarginTop:"100px"},children:[w.jsx(hn,{children:r}),w.jsx(cn,{children:n.map((t=>w.jsx(rn,{video:t,onPlay:()=>o(t),onEdit:()=>(t=>{e("/new-video",{state:{editVideo:t}})})(t),onDelete:()=>(async e=>{try{await Vt.delete(`${$t}/${e}`),await d()}catch(t){console.error("Error deleting video:",t)}})(t.id)},t.id)))})]},r)};return w.jsxs(on,{children:[w.jsxs(an,{children:[w.jsxs(sn,{children:[w.jsx("img",{src:"/countdown.jpg",alt:"Video destacado",style:{width:"100%",height:"100%",objectFit:"cover"}}),w.jsx(dn,{children:w.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:w.jsx("path",{d:"M8 5v14l11-7z"})})})]}),w.jsx(ln,{children:w.jsxs(un,{children:[w.jsx(pn,{children:"TRÁILERFLIX"}),w.jsx(fn,{children:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos."})]})}),w.jsx(mn,{children:w.jsx(yn,{children:c.map((e=>w.jsx(gn,{active:i===e,onClick:()=>(e=>{const t=document.getElementById(e.toLowerCase());t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),l(e))})(e),children:e},e)))})}),c.map((e=>u(e)))]}),n&&w.jsx(Jr,{isOpen:!!n,onClose:()=>o(null),video:n,API_URL:$t})]})},wn=p.div`
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
`;const xn=p.div`
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
`;const vn=p.h1`
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
`,On=p.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Pn=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,jn=p.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,En=p.input`
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
`,Sn=p.select`
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
`,Rn=p.textarea`
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
`,Tn=p.button`
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
`,kn=p.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,An=p.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,_n=()=>{var e;const t=s(),n=null==(e=r().state)?void 0:e.editVideo,[o,i]=a.useState({title:"",category:"",url:"",description:""}),[l,c]=a.useState(""),[d,u]=a.useState(!1);a.useEffect((()=>{n&&i({title:n.title||"",category:n.category||"",url:n.url||"",description:n.description||""})}),[n]);const p=e=>{const{name:t,value:r}=e.target;i((e=>({...e,[t]:r})))};return w.jsx(wn,{children:w.jsxs(xn,{children:[w.jsx(vn,{children:n?"Editar Video":"Nuevo Video"}),w.jsxs(On,{onSubmit:async e=>{e.preventDefault(),u(!0),c("");try{n?await Vt.put(`${$t}/${n.id}`,o):await Vt.post($t,o),t("/")}catch(r){console.error("Error:",r),c("Error al guardar el video. Por favor, intenta de nuevo.")}finally{u(!1)}},children:[w.jsxs(Pn,{children:[w.jsx(jn,{htmlFor:"title",children:"Título"}),w.jsx(En,{type:"text",id:"title",name:"title",value:o.title,onChange:p,required:!0})]}),w.jsxs(Pn,{children:[w.jsx(jn,{htmlFor:"category",children:"Categoría"}),w.jsxs(Sn,{id:"category",name:"category",value:o.category,onChange:p,required:!0,children:[w.jsx("option",{value:"",children:"Selecciona una categoría"}),w.jsx("option",{value:"Películas",children:"Películas"}),w.jsx("option",{value:"Series",children:"Series"}),w.jsx("option",{value:"Documentales",children:"Documentales"}),w.jsx("option",{value:"Anime",children:"Anime"})]})]}),w.jsxs(Pn,{children:[w.jsx(jn,{htmlFor:"url",children:"URL del Video (YouTube)"}),w.jsx(En,{type:"url",id:"url",name:"url",value:o.url,onChange:p,required:!0})]}),w.jsxs(Pn,{children:[w.jsx(jn,{htmlFor:"description",children:"Descripción"}),w.jsx(Rn,{id:"description",name:"description",value:o.description,onChange:p,required:!0})]}),l&&w.jsx(kn,{children:l}),o.url&&w.jsx(An,{children:w.jsx(Br,{url:o.url})}),w.jsx(Tn,{type:"submit",disabled:d,children:d?"Guardando...":n?"Guardar Cambios":"Crear Video"})]})]})})},Cn=p.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #13111b;
  overflow-x: hidden;
`,Ln=p.main`
  flex: 1;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #13111b;
  overflow-x: hidden;
`;function Dn(){return w.jsx(l,{basename:"/trailerflix",children:w.jsxs(Cn,{children:[w.jsx(R,{}),w.jsx(Ln,{children:w.jsxs(c,{children:[w.jsx(d,{path:"/",element:w.jsx(bn,{})}),w.jsx(d,{path:"/new-video",element:w.jsx(_n,{})}),w.jsx(d,{path:"/edit-video",element:w.jsx(_n,{})}),w.jsx(d,{path:"*",element:w.jsx(u,{to:"/",replace:!0})})]})}),w.jsx(N,{})]})})}v.createRoot(document.getElementById("root")).render(w.jsx(a.StrictMode,{children:w.jsx(Dn,{})}));
//# sourceMappingURL=index-DBIh9ma5.js.map
