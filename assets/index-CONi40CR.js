const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-B3mXHaxB.js","assets/react-vendor-D9ikOZl-.js"])))=>i.map(i=>d[i]);
import{a as at,b as Ti,L as xo,g as Ee,c as Jt,d as vo,r as D,R as nn,u as Ur,e as Ci,H as Ai,f as ki,h as Xt,N as ji}from"./react-vendor-D9ikOZl-.js";import{d as $,m as lt}from"./styled-B4yaT2bY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Zt={exports:{}},Ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on;function $i(){if(on)return Ge;on=1;var e=at(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(a,l,u){var h,c={},y=null,P=null;u!==void 0&&(y=""+u),l.key!==void 0&&(y=""+l.key),l.ref!==void 0&&(P=l.ref);for(h in l)n.call(l,h)&&!i.hasOwnProperty(h)&&(c[h]=l[h]);if(a&&a.defaultProps)for(h in l=a.defaultProps,l)c[h]===void 0&&(c[h]=l[h]);return{$$typeof:t,type:a,key:y,ref:P,props:c,_owner:o.current}}return Ge.Fragment=r,Ge.jsx=s,Ge.jsxs=s,Ge}var sn;function Ii(){return sn||(sn=1,Zt.exports=$i()),Zt.exports}var R=Ii(),yt={},an;function Li(){if(an)return yt;an=1;var e=Ti();return yt.createRoot=e.createRoot,yt.hydrateRoot=e.hydrateRoot,yt}var Mi=Li();const Ni=$.header`
  background: rgba(19, 17, 27, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`,Di=$.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Fi=$(xo)`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: #8257e6;
  }
`,Ui=$.div`
  display: flex;
  gap: 1rem;
`,ln=$(xo)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(155, 109, 255, 0.1);
  }
`;function Bi(){return R.jsx(Ni,{children:R.jsxs(Di,{children:[R.jsx(Fi,{to:"/",children:"TRÁILERFLIX"}),R.jsxs(Ui,{children:[R.jsx(ln,{to:"/",children:"Inicio"}),R.jsx(ln,{to:"/new",children:"Nuevo Video"})]})]})})}const zi=$.footer`
  background-color: #1a1625;
  color: white;
  padding: 2rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
`,qi=$.div`
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,cn=$.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: ${e=>e.flex||"1"};

  @media (max-width: 768px) {
    flex: 1;
  }
`,un=$.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(45deg, #9b6dff, #6e40c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background: linear-gradient(45deg, #9b6dff, #6e40c9);
  }
`,Hi=$.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-left: 0.5rem;
`,gt=$.a`
  color: #9b6dff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  
  &:before {
    content: '▸';
    margin-right: 0.5rem;
    color: #6e40c9;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #6e40c9;
    transform: translateX(5px);
    
    &:before {
      color: #9b6dff;
    }
  }
`,Vi=$.p`
  color: #a8a8b3;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  font-size: 1.1rem;
`,Wi=$.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`,Ki=()=>{const e=t=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return R.jsxs(zi,{children:[R.jsxs(qi,{children:[R.jsxs(cn,{flex:"2",children:[R.jsx(un,{children:"Sobre Trailerflix"}),R.jsx(Vi,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestro catálogo y mantente al día con los últimos lanzamientos."})]}),R.jsxs(cn,{flex:"1",children:[R.jsx(un,{children:"Categorías"}),R.jsxs(Hi,{children:[R.jsx(gt,{onClick:()=>e("películas"),children:"Películas"}),R.jsx(gt,{onClick:()=>e("series"),children:"Series"}),R.jsx(gt,{onClick:()=>e("documentales"),children:"Documentales"}),R.jsx(gt,{onClick:()=>e("anime"),children:"Anime"})]})]})]}),R.jsxs(Wi,{children:[new Date().getFullYear()," Trailerflix. Todos los derechos reservados."]})]})};function wo(e,t){return function(){return e.apply(t,arguments)}}const{toString:Yi}=Object.prototype,{getPrototypeOf:Br}=Object,kt=(e=>t=>{const r=Yi.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ye=e=>(e=e.toLowerCase(),t=>kt(t)===e),jt=e=>t=>typeof t===e,{isArray:Ve}=Array,tt=jt("undefined");function Gi(e){return e!==null&&!tt(e)&&e.constructor!==null&&!tt(e.constructor)&&fe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const So=ye("ArrayBuffer");function Ji(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&So(e.buffer),t}const Xi=jt("string"),fe=jt("function"),_o=jt("number"),$t=e=>e!==null&&typeof e=="object",Zi=e=>e===!0||e===!1,wt=e=>{if(kt(e)!=="object")return!1;const t=Br(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qi=ye("Date"),es=ye("File"),ts=ye("Blob"),rs=ye("FileList"),ns=e=>$t(e)&&fe(e.pipe),os=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||fe(e.append)&&((t=kt(e))==="formdata"||t==="object"&&fe(e.toString)&&e.toString()==="[object FormData]"))},is=ye("URLSearchParams"),[ss,as,ls,cs]=["ReadableStream","Request","Response","Headers"].map(ye),us=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ct(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Ve(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(n=0;n<s;n++)a=i[n],t.call(null,e[a],a,e)}}function Po(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ke=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Oo=e=>!tt(e)&&e!==ke;function Or(){const{caseless:e}=Oo(this)&&this||{},t={},r=(n,o)=>{const i=e&&Po(t,o)||o;wt(t[i])&&wt(n)?t[i]=Or(t[i],n):wt(n)?t[i]=Or({},n):Ve(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&ct(arguments[n],r);return t}const fs=(e,t,r,{allOwnKeys:n}={})=>(ct(t,(o,i)=>{r&&fe(o)?e[i]=wo(o,r):e[i]=o},{allOwnKeys:n}),e),ds=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ps=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},hs=(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=r!==!1&&Br(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ms=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},ys=e=>{if(!e)return null;if(Ve(e))return e;let t=e.length;if(!_o(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},gs=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Br(Uint8Array)),bs=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},xs=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},vs=ye("HTMLFormElement"),ws=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),fn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ss=ye("RegExp"),Eo=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ct(r,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(n[i]=s||o)}),Object.defineProperties(e,n)},_s=e=>{Eo(e,(t,r)=>{if(fe(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(fe(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ps=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return Ve(e)?n(e):n(String(e).split(t)),r},Os=()=>{},Es=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Qt="abcdefghijklmnopqrstuvwxyz",dn="0123456789",Ro={DIGIT:dn,ALPHA:Qt,ALPHA_DIGIT:Qt+Qt.toUpperCase()+dn},Rs=(e=16,t=Ro.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Ts(e){return!!(e&&fe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Cs=e=>{const t=new Array(10),r=(n,o)=>{if($t(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=Ve(n)?[]:{};return ct(n,(s,a)=>{const l=r(s,o+1);!tt(l)&&(i[a]=l)}),t[o]=void 0,i}}return n};return r(e,0)},As=ye("AsyncFunction"),ks=e=>e&&($t(e)||fe(e))&&fe(e.then)&&fe(e.catch),To=((e,t)=>e?setImmediate:t?((r,n)=>(ke.addEventListener("message",({source:o,data:i})=>{o===ke&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),ke.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",fe(ke.postMessage)),js=typeof queueMicrotask<"u"?queueMicrotask.bind(ke):typeof process<"u"&&process.nextTick||To,_={isArray:Ve,isArrayBuffer:So,isBuffer:Gi,isFormData:os,isArrayBufferView:Ji,isString:Xi,isNumber:_o,isBoolean:Zi,isObject:$t,isPlainObject:wt,isReadableStream:ss,isRequest:as,isResponse:ls,isHeaders:cs,isUndefined:tt,isDate:Qi,isFile:es,isBlob:ts,isRegExp:Ss,isFunction:fe,isStream:ns,isURLSearchParams:is,isTypedArray:gs,isFileList:rs,forEach:ct,merge:Or,extend:fs,trim:us,stripBOM:ds,inherits:ps,toFlatObject:hs,kindOf:kt,kindOfTest:ye,endsWith:ms,toArray:ys,forEachEntry:bs,matchAll:xs,isHTMLForm:vs,hasOwnProperty:fn,hasOwnProp:fn,reduceDescriptors:Eo,freezeMethods:_s,toObjectSet:Ps,toCamelCase:ws,noop:Os,toFiniteNumber:Es,findKey:Po,global:ke,isContextDefined:Oo,ALPHABET:Ro,generateString:Rs,isSpecCompliantForm:Ts,toJSONObject:Cs,isAsyncFn:As,isThenable:ks,setImmediate:To,asap:js};function N(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}_.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Co=N.prototype,Ao={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ao[e]={value:e}});Object.defineProperties(N,Ao);Object.defineProperty(Co,"isAxiosError",{value:!0});N.from=(e,t,r,n,o,i)=>{const s=Object.create(Co);return _.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),N.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const $s=null;function Er(e){return _.isPlainObject(e)||_.isArray(e)}function ko(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function pn(e,t,r){return e?e.concat(t).map(function(o,i){return o=ko(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function Is(e){return _.isArray(e)&&!e.some(Er)}const Ls=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function It(e,t,r){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=_.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!_.isUndefined(g[f])});const n=r.metaTokens,o=r.visitor||h,i=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(_.isDate(m))return m.toISOString();if(!l&&_.isBlob(m))throw new N("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(m)||_.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,f,g){let b=m;if(m&&!g&&typeof m=="object"){if(_.endsWith(f,"{}"))f=n?f:f.slice(0,-2),m=JSON.stringify(m);else if(_.isArray(m)&&Is(m)||(_.isFileList(m)||_.endsWith(f,"[]"))&&(b=_.toArray(m)))return f=ko(f),b.forEach(function(v,E){!(_.isUndefined(v)||v===null)&&t.append(s===!0?pn([f],E,i):s===null?f:f+"[]",u(v))}),!1}return Er(m)?!0:(t.append(pn(g,f,i),u(m)),!1)}const c=[],y=Object.assign(Ls,{defaultVisitor:h,convertValue:u,isVisitable:Er});function P(m,f){if(!_.isUndefined(m)){if(c.indexOf(m)!==-1)throw Error("Circular reference detected in "+f.join("."));c.push(m),_.forEach(m,function(b,S){(!(_.isUndefined(b)||b===null)&&o.call(t,b,_.isString(S)?S.trim():S,f,y))===!0&&P(b,f?f.concat(S):[S])}),c.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return P(e),t}function hn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function zr(e,t){this._pairs=[],e&&It(e,this,t)}const jo=zr.prototype;jo.append=function(t,r){this._pairs.push([t,r])};jo.toString=function(t){const r=t?function(n){return t.call(this,n,hn)}:hn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Ms(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $o(e,t,r){if(!t)return e;const n=r&&r.encode||Ms;_.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(o?i=o(t,r):i=_.isURLSearchParams(t)?t.toString():new zr(t,r).toString(n),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class mn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Io={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ns=typeof URLSearchParams<"u"?URLSearchParams:zr,Ds=typeof FormData<"u"?FormData:null,Fs=typeof Blob<"u"?Blob:null,Us={isBrowser:!0,classes:{URLSearchParams:Ns,FormData:Ds,Blob:Fs},protocols:["http","https","file","blob","url","data"]},qr=typeof window<"u"&&typeof document<"u",Rr=typeof navigator=="object"&&navigator||void 0,Bs=qr&&(!Rr||["ReactNative","NativeScript","NS"].indexOf(Rr.product)<0),zs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qs=qr&&window.location.href||"http://localhost",Hs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qr,hasStandardBrowserEnv:Bs,hasStandardBrowserWebWorkerEnv:zs,navigator:Rr,origin:qs},Symbol.toStringTag,{value:"Module"})),se={...Hs,...Us};function Vs(e,t){return It(e,new se.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return se.isNode&&_.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ws(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ks(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Lo(e){function t(r,n,o,i){let s=r[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=r.length;return s=!s&&_.isArray(o)?o.length:s,l?(_.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!a):((!o[s]||!_.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],i)&&_.isArray(o[s])&&(o[s]=Ks(o[s])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const r={};return _.forEachEntry(e,(n,o)=>{t(Ws(n),o,r,0)}),r}return null}function Ys(e,t,r){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const ut={transitional:Io,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o?JSON.stringify(Lo(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Vs(t,this.formSerializer).toString();if((a=_.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return It(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),Ys(t)):t}],transformResponse:[function(t){const r=this.transitional||ut.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(n&&!this.responseType||o)){const s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?N.from(a,N.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:se.classes.FormData,Blob:se.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{ut.headers[e]={}});const Gs=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Js=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&Gs[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},yn=Symbol("internals");function Je(e){return e&&String(e).trim().toLowerCase()}function St(e){return e===!1||e==null?e:_.isArray(e)?e.map(St):String(e)}function Xs(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Zs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function er(e,t,r,n,o){if(_.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!_.isString(t)){if(_.isString(n))return t.indexOf(n)!==-1;if(_.isRegExp(n))return n.test(t)}}function Qs(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function ea(e,t){const r=_.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,s){return this[n].call(this,t,o,i,s)},configurable:!0})})}class ae{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(a,l,u){const h=Je(l);if(!h)throw new Error("header name must be a non-empty string");const c=_.findKey(o,h);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=St(a))}const s=(a,l)=>_.forEach(a,(u,h)=>i(u,h,l));if(_.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(_.isString(t)&&(t=t.trim())&&!Zs(t))s(Js(t),r);else if(_.isHeaders(t))for(const[a,l]of t.entries())i(l,a,n);else t!=null&&i(r,t,n);return this}get(t,r){if(t=Je(t),t){const n=_.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return Xs(o);if(_.isFunction(r))return r.call(this,o,n);if(_.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Je(t),t){const n=_.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||er(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(s){if(s=Je(s),s){const a=_.findKey(n,s);a&&(!r||er(n,n[a],a,r))&&(delete n[a],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||er(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return _.forEach(this,(o,i)=>{const s=_.findKey(n,i);if(s){r[s]=St(o),delete r[i];return}const a=t?Qs(i):String(i).trim();a!==i&&delete r[i],r[a]=St(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return _.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&_.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[yn]=this[yn]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Je(s);n[a]||(ea(o,s),n[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(ae.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});_.freezeMethods(ae);function tr(e,t){const r=this||ut,n=t||r,o=ae.from(n.headers);let i=n.data;return _.forEach(e,function(a){i=a.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Mo(e){return!!(e&&e.__CANCEL__)}function We(e,t,r){N.call(this,e??"canceled",N.ERR_CANCELED,t,r),this.name="CanceledError"}_.inherits(We,N,{__CANCEL__:!0});function No(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new N("Request failed with status code "+r.status,[N.ERR_BAD_REQUEST,N.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function ta(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ra(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),h=n[i];s||(s=u),r[o]=l,n[o]=u;let c=i,y=0;for(;c!==o;)y+=r[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const P=h&&u-h;return P?Math.round(y*1e3/P):void 0}}function na(e,t){let r=0,n=1e3/t,o,i;const s=(u,h=Date.now())=>{r=h,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const h=Date.now(),c=h-r;c>=n?s(u,h):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},n-c)))},()=>o&&s(o)]}const Rt=(e,t,r=3)=>{let n=0;const o=ra(50,250);return na(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=s-n,u=o(l),h=s<=a;n=s;const c={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&h?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(c)},r)},gn=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},bn=e=>(...t)=>_.asap(()=>e(...t)),oa=se.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,se.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(se.origin),se.navigator&&/(msie|trident)/i.test(se.navigator.userAgent)):()=>!0,ia=se.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const s=[e+"="+encodeURIComponent(t)];_.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),_.isString(n)&&s.push("path="+n),_.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sa(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function aa(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Do(e,t){return e&&!sa(t)?aa(e,t):t}const xn=e=>e instanceof ae?{...e}:e;function $e(e,t){t=t||{};const r={};function n(u,h,c,y){return _.isPlainObject(u)&&_.isPlainObject(h)?_.merge.call({caseless:y},u,h):_.isPlainObject(h)?_.merge({},h):_.isArray(h)?h.slice():h}function o(u,h,c,y){if(_.isUndefined(h)){if(!_.isUndefined(u))return n(void 0,u,c,y)}else return n(u,h,c,y)}function i(u,h){if(!_.isUndefined(h))return n(void 0,h)}function s(u,h){if(_.isUndefined(h)){if(!_.isUndefined(u))return n(void 0,u)}else return n(void 0,h)}function a(u,h,c){if(c in t)return n(u,h);if(c in e)return n(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,h,c)=>o(xn(u),xn(h),c,!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(h){const c=l[h]||o,y=c(e[h],t[h],h);_.isUndefined(y)&&c!==a||(r[h]=y)}),r}const Fo=e=>{const t=$e({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=ae.from(s),t.url=$o(Do(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(_.isFormData(r)){if(se.hasStandardBrowserEnv||se.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...h]=l?l.split(";").map(c=>c.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...h].join("; "))}}if(se.hasStandardBrowserEnv&&(n&&_.isFunction(n)&&(n=n(t)),n||n!==!1&&oa(t.url))){const u=o&&i&&ia.read(i);u&&s.set(o,u)}return t},la=typeof XMLHttpRequest<"u",ca=la&&function(e){return new Promise(function(r,n){const o=Fo(e);let i=o.data;const s=ae.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=o,h,c,y,P,m;function f(){P&&P(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(h),o.signal&&o.signal.removeEventListener("abort",h)}let g=new XMLHttpRequest;g.open(o.method.toUpperCase(),o.url,!0),g.timeout=o.timeout;function b(){if(!g)return;const v=ae.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),d={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:v,config:e,request:g};No(function(p){r(p),f()},function(p){n(p),f()},d),g=null}"onloadend"in g?g.onloadend=b:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(b)},g.onabort=function(){g&&(n(new N("Request aborted",N.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new N("Network Error",N.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let E=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const d=o.transitional||Io;o.timeoutErrorMessage&&(E=o.timeoutErrorMessage),n(new N(E,d.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,e,g)),g=null},i===void 0&&s.setContentType(null),"setRequestHeader"in g&&_.forEach(s.toJSON(),function(E,d){g.setRequestHeader(d,E)}),_.isUndefined(o.withCredentials)||(g.withCredentials=!!o.withCredentials),a&&a!=="json"&&(g.responseType=o.responseType),u&&([y,m]=Rt(u,!0),g.addEventListener("progress",y)),l&&g.upload&&([c,P]=Rt(l),g.upload.addEventListener("progress",c),g.upload.addEventListener("loadend",P)),(o.cancelToken||o.signal)&&(h=v=>{g&&(n(!v||v.type?new We(null,e,g):v),g.abort(),g=null)},o.cancelToken&&o.cancelToken.subscribe(h),o.signal&&(o.signal.aborted?h():o.signal.addEventListener("abort",h)));const S=ta(o.url);if(S&&se.protocols.indexOf(S)===-1){n(new N("Unsupported protocol "+S+":",N.ERR_BAD_REQUEST,e));return}g.send(i||null)})},ua=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const i=function(u){if(!o){o=!0,a();const h=u instanceof Error?u:this.reason;n.abort(h instanceof N?h:new We(h instanceof Error?h.message:h))}};let s=t&&setTimeout(()=>{s=null,i(new N(`timeout ${t} of ms exceeded`,N.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=()=>_.asap(a),l}},fa=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},da=async function*(e,t){for await(const r of pa(e))yield*fa(r,t)},pa=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},vn=(e,t,r,n)=>{const o=da(e,t);let i=0,s,a=l=>{s||(s=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:u,value:h}=await o.next();if(u){a(),l.close();return}let c=h.byteLength;if(r){let y=i+=c;r(y)}l.enqueue(new Uint8Array(h))}catch(u){throw a(u),u}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},Lt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Uo=Lt&&typeof ReadableStream=="function",ha=Lt&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Bo=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ma=Uo&&Bo(()=>{let e=!1;const t=new Request(se.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),wn=64*1024,Tr=Uo&&Bo(()=>_.isReadableStream(new Response("").body)),Tt={stream:Tr&&(e=>e.body)};Lt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Tt[t]&&(Tt[t]=_.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new N(`Response type '${t}' is not supported`,N.ERR_NOT_SUPPORT,n)})})})(new Response);const ya=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(se.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await ha(e)).byteLength},ga=async(e,t)=>{const r=_.toFiniteNumber(e.getContentLength());return r??ya(t)},ba=Lt&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:h,withCredentials:c="same-origin",fetchOptions:y}=Fo(e);u=u?(u+"").toLowerCase():"text";let P=ua([o,i&&i.toAbortSignal()],s),m;const f=P&&P.unsubscribe&&(()=>{P.unsubscribe()});let g;try{if(l&&ma&&r!=="get"&&r!=="head"&&(g=await ga(h,n))!==0){let d=new Request(t,{method:"POST",body:n,duplex:"half"}),C;if(_.isFormData(n)&&(C=d.headers.get("content-type"))&&h.setContentType(C),d.body){const[p,w]=gn(g,Rt(bn(l)));n=vn(d.body,wn,p,w)}}_.isString(c)||(c=c?"include":"omit");const b="credentials"in Request.prototype;m=new Request(t,{...y,signal:P,method:r.toUpperCase(),headers:h.normalize().toJSON(),body:n,duplex:"half",credentials:b?c:void 0});let S=await fetch(m);const v=Tr&&(u==="stream"||u==="response");if(Tr&&(a||v&&f)){const d={};["status","statusText","headers"].forEach(x=>{d[x]=S[x]});const C=_.toFiniteNumber(S.headers.get("content-length")),[p,w]=a&&gn(C,Rt(bn(a),!0))||[];S=new Response(vn(S.body,wn,p,()=>{w&&w(),f&&f()}),d)}u=u||"text";let E=await Tt[_.findKey(Tt,u)||"text"](S,e);return!v&&f&&f(),await new Promise((d,C)=>{No(d,C,{data:E,headers:ae.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:m})})}catch(b){throw f&&f(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new N("Network Error",N.ERR_NETWORK,e,m),{cause:b.cause||b}):N.from(b,b&&b.code,e,m)}}),Cr={http:$s,xhr:ca,fetch:ba};_.forEach(Cr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Sn=e=>`- ${e}`,xa=e=>_.isFunction(e)||e===null||e===!1,zo={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let s;if(n=r,!xa(r)&&(n=Cr[(s=String(r)).toLowerCase()],n===void 0))throw new N(`Unknown adapter '${s}'`);if(n)break;o[s||"#"+i]=n}if(!n){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(Sn).join(`
`):" "+Sn(i[0]):"as no adapter specified";throw new N("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:Cr};function rr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new We(null,e)}function _n(e){return rr(e),e.headers=ae.from(e.headers),e.data=tr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zo.getAdapter(e.adapter||ut.adapter)(e).then(function(n){return rr(e),n.data=tr.call(e,e.transformResponse,n),n.headers=ae.from(n.headers),n},function(n){return Mo(n)||(rr(e),n&&n.response&&(n.response.data=tr.call(e,e.transformResponse,n.response),n.response.headers=ae.from(n.response.headers))),Promise.reject(n)})}const qo="1.7.9",Mt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Mt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Pn={};Mt.transitional=function(t,r,n){function o(i,s){return"[Axios v"+qo+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return(i,s,a)=>{if(t===!1)throw new N(o(s," has been removed"+(r?" in "+r:"")),N.ERR_DEPRECATED);return r&&!Pn[s]&&(Pn[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,a):!0}};Mt.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function va(e,t,r){if(typeof e!="object")throw new N("options must be an object",N.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new N("option "+i+" must be "+l,N.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new N("Unknown option "+i,N.ERR_BAD_OPTION)}}const _t={assertOptions:va,validators:Mt},xe=_t.validators;class je{constructor(t){this.defaults=t,this.interceptors={request:new mn,response:new mn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=$e(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&_t.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),o!=null&&(_.isFunction(o)?r.paramsSerializer={serialize:o}:_t.assertOptions(o,{encode:xe.function,serialize:xe.function},!0)),_t.assertOptions(r,{baseUrl:xe.spelling("baseURL"),withXsrfToken:xe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=i&&_.merge(i.common,i[r.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),r.headers=ae.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(r)===!1||(l=l&&f.synchronous,a.unshift(f.fulfilled,f.rejected))});const u=[];this.interceptors.response.forEach(function(f){u.push(f.fulfilled,f.rejected)});let h,c=0,y;if(!l){const m=[_n.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),y=m.length,h=Promise.resolve(r);c<y;)h=h.then(m[c++],m[c++]);return h}y=a.length;let P=r;for(c=0;c<y;){const m=a[c++],f=a[c++];try{P=m(P)}catch(g){f.call(this,g);break}}try{h=_n.call(this,P)}catch(m){return Promise.reject(m)}for(c=0,y=u.length;c<y;)h=h.then(u[c++],u[c++]);return h}getUri(t){t=$e(this.defaults,t);const r=Do(t.baseURL,t.url);return $o(r,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){je.prototype[t]=function(r,n){return this.request($e(n||{},{method:t,url:r,data:(n||{}).data}))}});_.forEach(["post","put","patch"],function(t){function r(n){return function(i,s,a){return this.request($e(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}je.prototype[t]=r(),je.prototype[t+"Form"]=r(!0)});class Hr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{n.subscribe(a),i=a}).then(o);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i,s,a){n.reason||(n.reason=new We(i,s,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Hr(function(o){t=o}),cancel:t}}}function wa(e){return function(r){return e.apply(null,r)}}function Sa(e){return _.isObject(e)&&e.isAxiosError===!0}const Ar={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ar).forEach(([e,t])=>{Ar[t]=e});function Ho(e){const t=new je(e),r=wo(je.prototype.request,t);return _.extend(r,je.prototype,t,{allOwnKeys:!0}),_.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Ho($e(e,o))},r}const G=Ho(ut);G.Axios=je;G.CanceledError=We;G.CancelToken=Hr;G.isCancel=Mo;G.VERSION=qo;G.toFormData=It;G.AxiosError=N;G.Cancel=G.CanceledError;G.all=function(t){return Promise.all(t)};G.spread=wa;G.isAxiosError=Sa;G.mergeConfig=$e;G.AxiosHeaders=ae;G.formToJSON=e=>Lo(_.isHTMLForm(e)?new FormData(e):e);G.getAdapter=zo.getAdapter;G.HttpStatusCode=Ar;G.default=G;const Qe="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",_a="modulepreload",Pa=function(e){return"/trailerflix/"+e},On={},Oa=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(l=>{if(l=Pa(l),l in On)return;On[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":_a,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((y,P)=>{c.addEventListener("load",y),c.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var nr,En;function Vo(){if(En)return nr;En=1;var e=function(S){return t(S)&&!r(S)};function t(b){return!!b&&typeof b=="object"}function r(b){var S=Object.prototype.toString.call(b);return S==="[object RegExp]"||S==="[object Date]"||i(b)}var n=typeof Symbol=="function"&&Symbol.for,o=n?Symbol.for("react.element"):60103;function i(b){return b.$$typeof===o}function s(b){return Array.isArray(b)?[]:{}}function a(b,S){return S.clone!==!1&&S.isMergeableObject(b)?f(s(b),b,S):b}function l(b,S,v){return b.concat(S).map(function(E){return a(E,v)})}function u(b,S){if(!S.customMerge)return f;var v=S.customMerge(b);return typeof v=="function"?v:f}function h(b){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(b).filter(function(S){return Object.propertyIsEnumerable.call(b,S)}):[]}function c(b){return Object.keys(b).concat(h(b))}function y(b,S){try{return S in b}catch{return!1}}function P(b,S){return y(b,S)&&!(Object.hasOwnProperty.call(b,S)&&Object.propertyIsEnumerable.call(b,S))}function m(b,S,v){var E={};return v.isMergeableObject(b)&&c(b).forEach(function(d){E[d]=a(b[d],v)}),c(S).forEach(function(d){P(b,d)||(y(b,d)&&v.isMergeableObject(S[d])?E[d]=u(d,v)(b[d],S[d],v):E[d]=a(S[d],v))}),E}function f(b,S,v){v=v||{},v.arrayMerge=v.arrayMerge||l,v.isMergeableObject=v.isMergeableObject||e,v.cloneUnlessOtherwiseSpecified=a;var E=Array.isArray(S),d=Array.isArray(b),C=E===d;return C?E?v.arrayMerge(b,S,v):m(b,S,v):a(S,v)}f.all=function(S,v){if(!Array.isArray(S))throw new Error("first argument should be an array");return S.reduce(function(E,d){return f(E,d,v)},{})};var g=f;return nr=g,nr}var Rn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ea(e,t){return!!(e===t||Rn(e)&&Rn(t))}function Ra(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Ea(e[r],t[r]))return!1;return!0}function Ta(e,t){t===void 0&&(t=Ra);var r,n=[],o,i=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&t(a,n)||(o=e.apply(this,a),i=!0,r=this,n=a),o}return s}const Ca=Object.freeze(Object.defineProperty({__proto__:null,default:Ta},Symbol.toStringTag,{value:"Module"})),Aa=Ee(Ca);var or,Tn;function Wo(){if(Tn)return or;Tn=1;var e=typeof Element<"u",t=typeof Map=="function",r=typeof Set=="function",n=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(i,s){if(i===s)return!0;if(i&&s&&typeof i=="object"&&typeof s=="object"){if(i.constructor!==s.constructor)return!1;var a,l,u;if(Array.isArray(i)){if(a=i.length,a!=s.length)return!1;for(l=a;l--!==0;)if(!o(i[l],s[l]))return!1;return!0}var h;if(t&&i instanceof Map&&s instanceof Map){if(i.size!==s.size)return!1;for(h=i.entries();!(l=h.next()).done;)if(!s.has(l.value[0]))return!1;for(h=i.entries();!(l=h.next()).done;)if(!o(l.value[1],s.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&s instanceof Set){if(i.size!==s.size)return!1;for(h=i.entries();!(l=h.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(s)){if(a=i.length,a!=s.length)return!1;for(l=a;l--!==0;)if(i[l]!==s[l])return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf&&typeof i.valueOf=="function"&&typeof s.valueOf=="function")return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString&&typeof i.toString=="function"&&typeof s.toString=="function")return i.toString()===s.toString();if(u=Object.keys(i),a=u.length,a!==Object.keys(s).length)return!1;for(l=a;l--!==0;)if(!Object.prototype.hasOwnProperty.call(s,u[l]))return!1;if(e&&i instanceof Element)return!1;for(l=a;l--!==0;)if(!((u[l]==="_owner"||u[l]==="__v"||u[l]==="__o")&&i.$$typeof)&&!o(i[u[l]],s[u[l]]))return!1;return!0}return i!==i&&s!==s}return or=function(s,a){try{return o(s,a)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}},or}var ir={exports:{}},sr,Cn;function ka(){if(Cn)return sr;Cn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sr=e,sr}var ar,An;function ja(){if(An)return ar;An=1;var e=ka();function t(){}function r(){}return r.resetWarningCache=t,ar=function(){function n(s,a,l,u,h,c){if(c!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}n.isRequired=n;function o(){return n}var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i},ar}var kn;function $a(){return kn||(kn=1,ir.exports=ja()()),ir.exports}var lr,jn;function Ko(){if(jn)return lr;jn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(w,x)=>{for(var O in x)t(w,O,{get:x[O],enumerable:!0})},a=(w,x,O,A)=>{if(x&&typeof x=="object"||typeof x=="function")for(let I of n(x))!i.call(w,I)&&I!==O&&t(w,I,{get:()=>x[I],enumerable:!(A=r(x,I))||A.enumerable});return w},l=(w,x,O)=>(O=w!=null?e(o(w)):{},a(!w||!w.__esModule?t(O,"default",{value:w,enumerable:!0}):O,w)),u=w=>a(t({},"__esModule",{value:!0}),w),h={};s(h,{defaultProps:()=>p,propTypes:()=>d}),lr=u(h);var c=l($a());const{string:y,bool:P,number:m,array:f,oneOfType:g,shape:b,object:S,func:v,node:E}=c.default,d={url:g([y,f,S]),playing:P,loop:P,controls:P,volume:m,muted:P,playbackRate:m,width:g([y,m]),height:g([y,m]),style:S,progressInterval:m,playsinline:P,pip:P,stopOnUnmount:P,light:g([P,y,S]),playIcon:E,previewTabIndex:m,previewAriaLabel:y,fallback:E,oEmbedUrl:y,wrapper:g([y,v,b({render:v.isRequired})]),config:b({soundcloud:b({options:S}),youtube:b({playerVars:S,embedOptions:S,onUnstarted:v}),facebook:b({appId:y,version:y,playerId:y,attributes:S}),dailymotion:b({params:S}),vimeo:b({playerOptions:S,title:y}),mux:b({attributes:S,version:y}),file:b({attributes:S,tracks:f,forceVideo:P,forceAudio:P,forceHLS:P,forceSafariHLS:P,forceDisableHls:P,forceDASH:P,forceFLV:P,hlsOptions:S,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:b({options:S,playerId:y,customControls:f}),mixcloud:b({options:S}),twitch:b({options:S,playerId:y}),vidyard:b({options:S})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},C=()=>{},p={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:C},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:C,onStart:C,onPlay:C,onPause:C,onBuffer:C,onBufferEnd:C,onEnded:C,onError:C,onDuration:C,onSeek:C,onPlaybackRateChange:C,onPlaybackQualityChange:C,onProgress:C,onClickPreview:C,onEnablePIP:C,onDisablePIP:C};return lr}var cr,$n;function Ia(){if($n)return cr;$n=1,cr=function(o,i,s){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("script");typeof i=="function"&&(s=i,i={}),i=i||{},s=s||function(){},l.type=i.type||"text/javascript",l.charset=i.charset||"utf8",l.async="async"in i?!!i.async:!0,l.src=o,i.attrs&&e(l,i.attrs),i.text&&(l.text=""+i.text);var u="onload"in l?t:r;u(l,s),l.onload||t(l,s),a.appendChild(l)};function e(n,o){for(var i in o)n.setAttribute(i,o[i])}function t(n,o){n.onload=function(){this.onerror=this.onload=null,o(null,n)},n.onerror=function(){this.onerror=this.onload=null,o(new Error("Failed to load "+this.src),n)}}function r(n,o){n.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,o(null,n))}}return cr}var ur,In;function Nt(){if(In)return ur;In=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(k,M)=>{for(var F in M)t(k,F,{get:M[F],enumerable:!0})},a=(k,M,F,U)=>{if(M&&typeof M=="object"||typeof M=="function")for(let re of n(M))!i.call(k,re)&&re!==F&&t(k,re,{get:()=>M[re],enumerable:!(U=r(M,re))||U.enumerable});return k},l=(k,M,F)=>(F=k!=null?e(o(k)):{},a(!k||!k.__esModule?t(F,"default",{value:k,enumerable:!0}):F,k)),u=k=>a(t({},"__esModule",{value:!0}),k),h={};s(h,{callPlayer:()=>T,getConfig:()=>I,getSDK:()=>A,isBlobUrl:()=>W,isMediaStream:()=>j,lazy:()=>m,omit:()=>L,parseEndTime:()=>C,parseStartTime:()=>d,queryString:()=>w,randomString:()=>p,supportsWebKitPresentationMode:()=>ee}),ur=u(h);var c=l(at()),y=l(Ia()),P=l(Vo());const m=k=>c.default.lazy(async()=>{const M=await k();return typeof M.default=="function"?M:M.default}),f=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,b=/(\d+)(h|m|s)/g,S=/^\d+$/;function v(k,M){if(k instanceof Array)return;const F=k.match(M);if(F){const U=F[1];if(U.match(b))return E(U);if(S.test(U))return parseInt(U)}}function E(k){let M=0,F=b.exec(k);for(;F!==null;){const[,U,re]=F;re==="h"&&(M+=parseInt(U,10)*60*60),re==="m"&&(M+=parseInt(U,10)*60),re==="s"&&(M+=parseInt(U,10)),F=b.exec(k)}return M}function d(k){return v(k,f)}function C(k){return v(k,g)}function p(){return Math.random().toString(36).substr(2,5)}function w(k){return Object.keys(k).map(M=>`${M}=${k[M]}`).join("&")}function x(k){return window[k]?window[k]:window.exports&&window.exports[k]?window.exports[k]:window.module&&window.module.exports&&window.module.exports[k]?window.module.exports[k]:null}const O={},A=function(M,F,U=null,re=()=>!0,ge=y.default){const Re=x(F);return Re&&re(Re)?Promise.resolve(Re):new Promise((ne,pe)=>{if(O[M]){O[M].push({resolve:ne,reject:pe});return}O[M]=[{resolve:ne,reject:pe}];const Le=ce=>{O[M].forEach(Me=>Me.resolve(ce))};if(U){const ce=window[U];window[U]=function(){ce&&ce(),Le(x(F))}}ge(M,ce=>{ce?(O[M].forEach(Me=>Me.reject(ce)),O[M]=null):U||Le(x(F))})})};function I(k,M){return(0,P.default)(M.config,k.config)}function L(k,...M){const F=[].concat(...M),U={},re=Object.keys(k);for(const ge of re)F.indexOf(ge)===-1&&(U[ge]=k[ge]);return U}function T(k,...M){if(!this.player||!this.player[k]){let F=`ReactPlayer: ${this.constructor.displayName} player could not call %c${k}%c – `;return this.player?this.player[k]||(F+="The method was not available"):F+="The player was not available",console.warn(F,"font-weight: bold",""),null}return this.player[k](...M)}function j(k){return typeof window<"u"&&typeof window.MediaStream<"u"&&k instanceof window.MediaStream}function W(k){return/^blob:/.test(k)}function ee(k=document.createElement("video")){const M=/iPhone|iPod/.test(navigator.userAgent)===!1;return k.webkitSupportsPresentationMode&&typeof k.webkitSetPresentationMode=="function"&&M}function te(k){return k}return ur}var fr,Ln;function La(){if(Ln)return fr;Ln=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(v,E,d)=>E in v?t(v,E,{enumerable:!0,configurable:!0,writable:!0,value:d}):v[E]=d,a=(v,E)=>{for(var d in E)t(v,d,{get:E[d],enumerable:!0})},l=(v,E,d,C)=>{if(E&&typeof E=="object"||typeof E=="function")for(let p of n(E))!i.call(v,p)&&p!==d&&t(v,p,{get:()=>E[p],enumerable:!(C=r(E,p))||C.enumerable});return v},u=(v,E,d)=>(d=v!=null?e(o(v)):{},l(!v||!v.__esModule?t(d,"default",{value:v,enumerable:!0}):d,v)),h=v=>l(t({},"__esModule",{value:!0}),v),c=(v,E,d)=>(s(v,typeof E!="symbol"?E+"":E,d),d),y={};a(y,{default:()=>S}),fr=h(y);var P=u(at()),m=u(Wo()),f=Ko(),g=Nt();const b=5e3;class S extends P.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"isReady",!1),c(this,"isPlaying",!1),c(this,"isLoading",!0),c(this,"loadOnReady",null),c(this,"startOnPlay",!0),c(this,"seekOnPlay",null),c(this,"onDurationCalled",!1),c(this,"handlePlayerMount",E=>{if(this.player){this.progress();return}this.player=E,this.player.load(this.props.url),this.progress()}),c(this,"getInternalPlayer",E=>this.player?this.player[E]:null),c(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const E=this.getCurrentTime()||0,d=this.getSecondsLoaded(),C=this.getDuration();if(C){const p={playedSeconds:E,played:E/C};d!==null&&(p.loadedSeconds=d,p.loaded=d/C),(p.playedSeconds!==this.prevPlayed||p.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(p),this.prevPlayed=p.playedSeconds,this.prevLoaded=p.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),c(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:E,playing:d,volume:C,muted:p}=this.props;E(),!p&&C!==null&&this.player.setVolume(C),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):d&&this.player.play(),this.handleDurationCheck()}),c(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:E,onPlay:d,playbackRate:C}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&C!==1&&this.player.setPlaybackRate(C),E(),this.startOnPlay=!1),d(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),c(this,"handlePause",E=>{this.isPlaying=!1,this.isLoading||this.props.onPause(E)}),c(this,"handleEnded",()=>{const{activePlayer:E,loop:d,onEnded:C}=this.props;E.loopOnEnded&&d&&this.seekTo(0),d||(this.isPlaying=!1,C())}),c(this,"handleError",(...E)=>{this.isLoading=!1,this.props.onError(...E)}),c(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const E=this.getDuration();E?this.onDurationCalled||(this.props.onDuration(E),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),c(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(E){if(!this.player)return;const{url:d,playing:C,volume:p,muted:w,playbackRate:x,pip:O,loop:A,activePlayer:I,disableDeferredLoading:L}=this.props;if(!(0,m.default)(E.url,d)){if(this.isLoading&&!I.forceLoad&&!L&&!(0,g.isMediaStream)(d)){console.warn(`ReactPlayer: the attempt to load ${d} is being deferred until the player has loaded`),this.loadOnReady=d;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(d,this.isReady)}!E.playing&&C&&!this.isPlaying&&this.player.play(),E.playing&&!C&&this.isPlaying&&this.player.pause(),!E.pip&&O&&this.player.enablePIP&&this.player.enablePIP(),E.pip&&!O&&this.player.disablePIP&&this.player.disablePIP(),E.volume!==p&&p!==null&&this.player.setVolume(p),E.muted!==w&&(w?this.player.mute():(this.player.unmute(),p!==null&&setTimeout(()=>this.player.setVolume(p)))),E.playbackRate!==x&&this.player.setPlaybackRate&&this.player.setPlaybackRate(x),E.loop!==A&&this.player.setLoop&&this.player.setLoop(A)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(E,d,C){if(!this.isReady){E!==0&&(this.seekOnPlay=E,setTimeout(()=>{this.seekOnPlay=null},b));return}if(d?d==="fraction":E>0&&E<1){const w=this.player.getDuration();if(!w){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(w*E,C);return}this.player.seekTo(E,C)}render(){const E=this.props.activePlayer;return E?P.default.createElement(E,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return c(S,"displayName","Player"),c(S,"propTypes",f.propTypes),c(S,"defaultProps",f.defaultProps),fr}var dr,Mn;function Ma(){if(Mn)return dr;Mn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(A,I,L)=>I in A?t(A,I,{enumerable:!0,configurable:!0,writable:!0,value:L}):A[I]=L,a=(A,I)=>{for(var L in I)t(A,L,{get:I[L],enumerable:!0})},l=(A,I,L,T)=>{if(I&&typeof I=="object"||typeof I=="function")for(let j of n(I))!i.call(A,j)&&j!==L&&t(A,j,{get:()=>I[j],enumerable:!(T=r(I,j))||T.enumerable});return A},u=(A,I,L)=>(L=A!=null?e(o(A)):{},l(!A||!A.__esModule?t(L,"default",{value:A,enumerable:!0}):L,A)),h=A=>l(t({},"__esModule",{value:!0}),A),c=(A,I,L)=>(s(A,typeof I!="symbol"?I+"":I,L),L),y={};a(y,{createReactPlayer:()=>O}),dr=h(y);var P=u(at()),m=u(Vo()),f=u(Aa),g=u(Wo()),b=Ko(),S=Nt(),v=u(La());const E=(0,S.lazy)(()=>Oa(()=>import("./Preview-B3mXHaxB.js").then(A=>A.P),__vite__mapDeps([0,1]))),d=typeof window<"u"&&window.document&&typeof document<"u",C=typeof Jt<"u"&&Jt.window&&Jt.window.document,p=Object.keys(b.propTypes),w=d||C?P.Suspense:()=>null,x=[],O=(A,I)=>{var L;return L=class extends P.Component{constructor(){super(...arguments),c(this,"state",{showPreview:!!this.props.light}),c(this,"references",{wrapper:T=>{this.wrapper=T},player:T=>{this.player=T}}),c(this,"handleClickPreview",T=>{this.setState({showPreview:!1}),this.props.onClickPreview(T)}),c(this,"showPreview",()=>{this.setState({showPreview:!0})}),c(this,"getDuration",()=>this.player?this.player.getDuration():null),c(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),c(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),c(this,"getInternalPlayer",(T="player")=>this.player?this.player.getInternalPlayer(T):null),c(this,"seekTo",(T,j,W)=>{if(!this.player)return null;this.player.seekTo(T,j,W)}),c(this,"handleReady",()=>{this.props.onReady(this)}),c(this,"getActivePlayer",(0,f.default)(T=>{for(const j of[...x,...A])if(j.canPlay(T))return j;return I||null})),c(this,"getConfig",(0,f.default)((T,j)=>{const{config:W}=this.props;return m.default.all([b.defaultProps.config,b.defaultProps.config[j]||{},W,W[j]||{}])})),c(this,"getAttributes",(0,f.default)(T=>(0,S.omit)(this.props,p))),c(this,"renderActivePlayer",T=>{if(!T)return null;const j=this.getActivePlayer(T);if(!j)return null;const W=this.getConfig(T,j.key);return P.default.createElement(v.default,{...this.props,key:j.key,ref:this.references.player,config:W,activePlayer:j.lazyPlayer||j,onReady:this.handleReady})})}shouldComponentUpdate(T,j){return!(0,g.default)(this.props,T)||!(0,g.default)(this.state,j)}componentDidUpdate(T){const{light:j}=this.props;!T.light&&j&&this.setState({showPreview:!0}),T.light&&!j&&this.setState({showPreview:!1})}renderPreview(T){if(!T)return null;const{light:j,playIcon:W,previewTabIndex:ee,oEmbedUrl:te,previewAriaLabel:k}=this.props;return P.default.createElement(E,{url:T,light:j,playIcon:W,previewTabIndex:ee,previewAriaLabel:k,oEmbedUrl:te,onClick:this.handleClickPreview})}render(){const{url:T,style:j,width:W,height:ee,fallback:te,wrapper:k}=this.props,{showPreview:M}=this.state,F=this.getAttributes(T),U=typeof k=="string"?this.references.wrapper:void 0;return P.default.createElement(k,{ref:U,style:{...j,width:W,height:ee},...F},P.default.createElement(w,{fallback:te},M?this.renderPreview(T):this.renderActivePlayer(T)))}},c(L,"displayName","ReactPlayer"),c(L,"propTypes",b.propTypes),c(L,"defaultProps",b.defaultProps),c(L,"addCustomPlayer",T=>{x.push(T)}),c(L,"removeCustomPlayers",()=>{x.length=0}),c(L,"canPlay",T=>{for(const j of[...x,...A])if(j.canPlay(T))return!0;return!1}),c(L,"canEnablePIP",T=>{for(const j of[...x,...A])if(j.canEnablePIP&&j.canEnablePIP(T))return!0;return!1}),L};return dr}var pr,Nn;function Na(){if(Nn)return pr;Nn=1;var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,o=(T,j)=>{for(var W in j)e(T,W,{get:j[W],enumerable:!0})},i=(T,j,W,ee)=>{if(typeof j=="object"||typeof j=="function")for(let te of r(j))!n.call(T,te)&&te!==W&&e(T,te,{get:()=>j[te],enumerable:!(ee=t(j,te))||ee.enumerable});return T},s=T=>i(e({},"__esModule",{value:!0}),T),a={};o(a,{AUDIO_EXTENSIONS:()=>p,DASH_EXTENSIONS:()=>O,FLV_EXTENSIONS:()=>A,HLS_EXTENSIONS:()=>x,MATCH_URL_DAILYMOTION:()=>v,MATCH_URL_FACEBOOK:()=>P,MATCH_URL_FACEBOOK_WATCH:()=>m,MATCH_URL_KALTURA:()=>C,MATCH_URL_MIXCLOUD:()=>E,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>h,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>S,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>d,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>g,MATCH_URL_YOUTUBE:()=>u,VIDEO_EXTENSIONS:()=>w,canPlay:()=>L}),pr=s(a);var l=Nt();const u=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,h=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,P=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,m=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,g=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,S=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,v=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,E=/mixcloud\.com\/([^/]+\/[^/]+)/,d=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,C=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,p=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,w=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,x=/\.(m3u8)($|\?)/i,O=/\.(mpd)($|\?)/i,A=/\.(flv)($|\?)/i,I=T=>{if(T instanceof Array){for(const j of T)if(typeof j=="string"&&I(j)||I(j.src))return!0;return!1}return(0,l.isMediaStream)(T)||(0,l.isBlobUrl)(T)?!0:p.test(T)||w.test(T)||x.test(T)||O.test(T)||A.test(T)},L={youtube:T=>T instanceof Array?T.every(j=>u.test(j)):u.test(T),soundcloud:T=>h.test(T)&&!p.test(T),vimeo:T=>c.test(T)&&!w.test(T)&&!x.test(T),mux:T=>y.test(T),facebook:T=>P.test(T)||m.test(T),streamable:T=>f.test(T),wistia:T=>g.test(T),twitch:T=>b.test(T)||S.test(T),dailymotion:T=>v.test(T),mixcloud:T=>E.test(T),vidyard:T=>d.test(T),kaltura:T=>C.test(T),file:I};return pr}var hr,Dn;function Da(){if(Dn)return hr;Dn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(w,x,O)=>x in w?t(w,x,{enumerable:!0,configurable:!0,writable:!0,value:O}):w[x]=O,a=(w,x)=>{for(var O in x)t(w,O,{get:x[O],enumerable:!0})},l=(w,x,O,A)=>{if(x&&typeof x=="object"||typeof x=="function")for(let I of n(x))!i.call(w,I)&&I!==O&&t(w,I,{get:()=>x[I],enumerable:!(A=r(x,I))||A.enumerable});return w},u=(w,x,O)=>(O=w!=null?e(o(w)):{},l(!w||!w.__esModule?t(O,"default",{value:w,enumerable:!0}):O,w)),h=w=>l(t({},"__esModule",{value:!0}),w),c=(w,x,O)=>(s(w,typeof x!="symbol"?x+"":x,O),O),y={};a(y,{default:()=>p}),hr=h(y);var P=u(at()),m=Nt(),f=Na();const g="https://www.youtube.com/iframe_api",b="YT",S="onYouTubeIframeAPIReady",v=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,E=/user\/([a-zA-Z0-9_-]+)\/?/,d=/youtube-nocookie\.com/,C="https://www.youtube-nocookie.com";class p extends P.Component{constructor(){super(...arguments),c(this,"callPlayer",m.callPlayer),c(this,"parsePlaylist",x=>{if(x instanceof Array)return{listType:"playlist",playlist:x.map(this.getID).join(",")};if(v.test(x)){const[,O]=x.match(v);return{listType:"playlist",list:O.replace(/^UC/,"UU")}}if(E.test(x)){const[,O]=x.match(E);return{listType:"user_uploads",list:O}}return{}}),c(this,"onStateChange",x=>{const{data:O}=x,{onPlay:A,onPause:I,onBuffer:L,onBufferEnd:T,onEnded:j,onReady:W,loop:ee,config:{playerVars:te,onUnstarted:k}}=this.props,{UNSTARTED:M,PLAYING:F,PAUSED:U,BUFFERING:re,ENDED:ge,CUED:Re}=window[b].PlayerState;if(O===M&&k(),O===F&&(A(),T()),O===U&&I(),O===re&&L(),O===ge){const ne=!!this.callPlayer("getPlaylist");ee&&!ne&&(te.start?this.seekTo(te.start):this.play()),j()}O===Re&&W()}),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unMute")}),c(this,"ref",x=>{this.container=x})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(x){return!x||x instanceof Array||v.test(x)?null:x.match(f.MATCH_URL_YOUTUBE)[1]}load(x,O){const{playing:A,muted:I,playsinline:L,controls:T,loop:j,config:W,onError:ee}=this.props,{playerVars:te,embedOptions:k}=W,M=this.getID(x);if(O){if(v.test(x)||E.test(x)||x instanceof Array){this.player.loadPlaylist(this.parsePlaylist(x));return}this.player.cueVideoById({videoId:M,startSeconds:(0,m.parseStartTime)(x)||te.start,endSeconds:(0,m.parseEndTime)(x)||te.end});return}(0,m.getSDK)(g,b,S,F=>F.loaded).then(F=>{this.container&&(this.player=new F.Player(this.container,{width:"100%",height:"100%",videoId:M,playerVars:{autoplay:A?1:0,mute:I?1:0,controls:T?1:0,start:(0,m.parseStartTime)(x),end:(0,m.parseEndTime)(x),origin:window.location.origin,playsinline:L?1:0,...this.parsePlaylist(x),...te},events:{onReady:()=>{j&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:U=>this.props.onPlaybackRateChange(U.data),onPlaybackQualityChange:U=>this.props.onPlaybackQualityChange(U),onStateChange:this.onStateChange,onError:U=>ee(U.data)},host:d.test(x)?C:void 0,...k}))},ee),k.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(x,O=!1){this.callPlayer("seekTo",x),!O&&!this.props.playing&&this.pause()}setVolume(x){this.callPlayer("setVolume",x*100)}setPlaybackRate(x){this.callPlayer("setPlaybackRate",x)}setLoop(x){this.callPlayer("setLoop",x)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:x}=this.props,O={width:"100%",height:"100%",display:x};return P.default.createElement("div",{style:O},P.default.createElement("div",{ref:this.ref}))}}return c(p,"displayName","YouTube"),c(p,"canPlay",f.canPlay.youtube),hr}var mr,Fn;function Fa(){if(Fn)return mr;Fn=1;var e=Ma().createReactPlayer,t=Da().default;return mr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}]),mr}var Ua=Fa();const Ba=vo(Ua),yr=$.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,za=$.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,qa=$.button`
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
`,Ha=$.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,Va=$.div`
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
`,Un=$.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,Yo=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,s]=D.useState(!1),[a,l]=D.useState(t),h=(m=>{if(!m)return null;try{const f=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,g=m.match(f);return g&&g[2].length===11?g[2]:null}catch(f){return console.error("Error extracting YouTube ID:",f),null}})(e),c=h?`https://img.youtube.com/vi/${h}/maxresdefault.jpg`:null,y=()=>{console.error("Error loading video:",e),s(!0)},P=()=>{l(!0)};return e?i?R.jsx(yr,{children:R.jsx(Un,{children:"Error al cargar el video"})}):R.jsx(yr,{children:R.jsx(za,{children:!a&&o&&c?R.jsxs(R.Fragment,{children:[R.jsx(Va,{src:c}),R.jsx(qa,{onClick:P,children:R.jsx(Ha,{})})]}):R.jsx(Ba,{url:e,width:"100%",height:"100%",playing:a,controls:r,muted:n,onError:y,config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):R.jsx(yr,{children:R.jsx(Un,{children:"URL de video no válida"})})},Wa=$.div`
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
`,Ka=$.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`,Ya=$.button`
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
`,Ga=$.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  z-index: 5;
`,Ja=$.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`,Xa=$.p`
  font-size: 1rem;
  color: #a8a8b3;
  margin: 0;
`,Za=({video:e,onClose:t})=>R.jsx(Wa,{onClick:t,children:R.jsxs(Ka,{onClick:r=>r.stopPropagation(),children:[R.jsx(Ya,{onClick:t,children:"×"}),R.jsx(Yo,{url:e.url}),R.jsxs(Ga,{children:[R.jsx(Ja,{children:e.title}),R.jsx(Xa,{children:e.description})]})]})});function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(null,arguments)}function Te(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Go(e){if(D.isValidElement(e)||!Te(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=Go(e[r])}),t}function Se(e,t,r={clone:!0}){const n=r.clone?H({},e):e;return Te(e)&&Te(t)&&Object.keys(t).forEach(o=>{D.isValidElement(t[o])?n[o]=t[o]:Te(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&Te(e[o])?n[o]=Se(e[o],t[o],r):r.clone?n[o]=Te(t[o])?Go(t[o]):t[o]:n[o]=t[o]}),n}const Qa=Object.freeze(Object.defineProperty({__proto__:null,default:Se,isPlainObject:Te},Symbol.toStringTag,{value:"Module"}));function rt(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const el=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));var gr={exports:{}},V={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function tl(){if(Bn)return V;Bn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),P=Symbol.for("react.client.reference");function m(f){if(typeof f=="object"&&f!==null){var g=f.$$typeof;switch(g){case e:switch(f=f.type,f){case r:case o:case n:case l:case u:return f;default:switch(f=f&&f.$$typeof,f){case s:case a:case c:case h:return f;case i:return f;default:return g}}case t:return g}}}return V.ContextConsumer=i,V.ContextProvider=s,V.Element=e,V.ForwardRef=a,V.Fragment=r,V.Lazy=c,V.Memo=h,V.Portal=t,V.Profiler=o,V.StrictMode=n,V.Suspense=l,V.SuspenseList=u,V.isContextConsumer=function(f){return m(f)===i},V.isContextProvider=function(f){return m(f)===s},V.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},V.isForwardRef=function(f){return m(f)===a},V.isFragment=function(f){return m(f)===r},V.isLazy=function(f){return m(f)===c},V.isMemo=function(f){return m(f)===h},V.isPortal=function(f){return m(f)===t},V.isProfiler=function(f){return m(f)===o},V.isStrictMode=function(f){return m(f)===n},V.isSuspense=function(f){return m(f)===l},V.isSuspenseList=function(f){return m(f)===u},V.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===o||f===n||f===l||f===u||f===y||typeof f=="object"&&f!==null&&(f.$$typeof===c||f.$$typeof===h||f.$$typeof===s||f.$$typeof===i||f.$$typeof===a||f.$$typeof===P||f.getModuleId!==void 0)},V.typeOf=m,V}var zn;function rl(){return zn||(zn=1,gr.exports=tl()),gr.exports}var qn=rl();const nl=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Jo(e){const t=`${e}`.match(nl);return t&&t[1]||""}function Xo(e,t=""){return e.displayName||e.name||Jo(e)||t}function Hn(e,t,r){const n=Xo(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function ol(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Xo(e,"Component");if(typeof e=="object")switch(e.$$typeof){case qn.ForwardRef:return Hn(e,e.render,"ForwardRef");case qn.Memo:return Hn(e,e.type,"memo");default:return}}}const il=Object.freeze(Object.defineProperty({__proto__:null,default:ol,getFunctionName:Jo},Symbol.toStringTag,{value:"Module"}));function Ie(e){if(typeof e!="string")throw new Error(rt(7));return e.charAt(0).toUpperCase()+e.slice(1)}const sl=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));function kr(e,t){const r=H({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=H({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const o=e[n]||{},i=t[n];r[n]={},!i||!Object.keys(i)?r[n]=o:!o||!Object.keys(o)?r[n]=i:(r[n]=H({},i),Object.keys(o).forEach(s=>{r[n][s]=kr(o[s],i[s])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function al(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),r&&r[s]&&i.push(r[s])}return i},[]).join(" ")}),n}const Vn=e=>e,ll=()=>{let e=Vn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Vn}}},cl=ll(),ul={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Zo(e,t,r="Mui"){const n=ul[t];return n?`${r}-${n}`:`${cl.generate(e)}-${t}`}function fl(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=Zo(e,o,r)}),n}function dl(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}const pl=Object.freeze(Object.defineProperty({__proto__:null,default:dl},Symbol.toStringTag,{value:"Module"}));function Ce(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function Qo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=Qo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function hl(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=Qo(e))&&(n&&(n+=" "),n+=t);return n}const ml=D.createContext(void 0);function yl(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const o=t.components[r];return o.defaultProps?kr(o.defaultProps,n):!o.styleOverrides&&!o.variants?kr(o,n):n}function gl({props:e,name:t}){const r=D.useContext(ml);return yl({props:e,name:t,theme:{components:r}})}function bl(e){return gl(e)}var Ae={},br={exports:{}},Wn;function ei(){return Wn||(Wn=1,function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(br)),br.exports}var xr={exports:{}},Kn;function xl(){return Kn||(Kn=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)({}).hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(xr)),xr.exports}var vr={exports:{}},Yn;function vl(){return Yn||(Yn=1,function(e){function t(r,n){if(r==null)return{};var o={};for(var i in r)if({}.hasOwnProperty.call(r,i)){if(n.includes(i))continue;o[i]=r[i]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(vr)),vr.exports}function wl(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Sl(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var _l=function(){function e(r){var n=this;this._insertTag=function(o){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(o,i),n.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Sl(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=wl(o);try{i.insertRule(n,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var o;return(o=n.parentNode)==null?void 0:o.removeChild(n)}),this.tags=[],this.ctr=0},e}(),ie="-ms-",Ct="-moz-",B="-webkit-",ti="comm",Vr="rule",Wr="decl",Pl="@import",ri="@keyframes",Ol="@layer",El=Math.abs,Dt=String.fromCharCode,Rl=Object.assign;function Tl(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function ni(e){return e.trim()}function Cl(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,r){return e.replace(t,r)}function jr(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function nt(e,t,r){return e.slice(t,r)}function ve(e){return e.length}function Kr(e){return e.length}function bt(e,t){return t.push(e),e}function Al(e,t){return e.map(t).join("")}var Ft=1,He=1,oi=0,le=0,Q=0,Ke="";function Ut(e,t,r,n,o,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ft,column:He,length:s,return:""}}function Xe(e,t){return Rl(Ut("",null,null,"",null,null,0),e,{length:-e.length},t)}function kl(){return Q}function jl(){return Q=le>0?oe(Ke,--le):0,He--,Q===10&&(He=1,Ft--),Q}function de(){return Q=le<oi?oe(Ke,le++):0,He++,Q===10&&(He=1,Ft++),Q}function _e(){return oe(Ke,le)}function Pt(){return le}function ft(e,t){return nt(Ke,e,t)}function ot(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ii(e){return Ft=He=1,oi=ve(Ke=e),le=0,[]}function si(e){return Ke="",e}function Ot(e){return ni(ft(le-1,$r(e===91?e+2:e===40?e+1:e)))}function $l(e){for(;(Q=_e())&&Q<33;)de();return ot(e)>2||ot(Q)>3?"":" "}function Il(e,t){for(;--t&&de()&&!(Q<48||Q>102||Q>57&&Q<65||Q>70&&Q<97););return ft(e,Pt()+(t<6&&_e()==32&&de()==32))}function $r(e){for(;de();)switch(Q){case e:return le;case 34:case 39:e!==34&&e!==39&&$r(Q);break;case 40:e===41&&$r(e);break;case 92:de();break}return le}function Ll(e,t){for(;de()&&e+Q!==57;)if(e+Q===84&&_e()===47)break;return"/*"+ft(t,le-1)+"*"+Dt(e===47?e:de())}function Ml(e){for(;!ot(_e());)de();return ft(e,le)}function Nl(e){return si(Et("",null,null,null,[""],e=ii(e),0,[0],e))}function Et(e,t,r,n,o,i,s,a,l){for(var u=0,h=0,c=s,y=0,P=0,m=0,f=1,g=1,b=1,S=0,v="",E=o,d=i,C=n,p=v;g;)switch(m=S,S=de()){case 40:if(m!=108&&oe(p,c-1)==58){jr(p+=z(Ot(S),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:p+=Ot(S);break;case 9:case 10:case 13:case 32:p+=$l(m);break;case 92:p+=Il(Pt()-1,7);continue;case 47:switch(_e()){case 42:case 47:bt(Dl(Ll(de(),Pt()),t,r),l);break;default:p+="/"}break;case 123*f:a[u++]=ve(p)*b;case 125*f:case 59:case 0:switch(S){case 0:case 125:g=0;case 59+h:b==-1&&(p=z(p,/\f/g,"")),P>0&&ve(p)-c&&bt(P>32?Jn(p+";",n,r,c-1):Jn(z(p," ","")+";",n,r,c-2),l);break;case 59:p+=";";default:if(bt(C=Gn(p,t,r,u,h,o,a,v,E=[],d=[],c),i),S===123)if(h===0)Et(p,t,C,C,E,i,c,a,d);else switch(y===99&&oe(p,3)===110?100:y){case 100:case 108:case 109:case 115:Et(e,C,C,n&&bt(Gn(e,C,C,0,0,o,a,v,o,E=[],c),d),o,d,c,a,n?E:d);break;default:Et(p,C,C,C,[""],d,0,a,d)}}u=h=P=0,f=b=1,v=p="",c=s;break;case 58:c=1+ve(p),P=m;default:if(f<1){if(S==123)--f;else if(S==125&&f++==0&&jl()==125)continue}switch(p+=Dt(S),S*f){case 38:b=h>0?1:(p+="\f",-1);break;case 44:a[u++]=(ve(p)-1)*b,b=1;break;case 64:_e()===45&&(p+=Ot(de())),y=_e(),h=c=ve(v=p+=Ml(Pt())),S++;break;case 45:m===45&&ve(p)==2&&(f=0)}}return i}function Gn(e,t,r,n,o,i,s,a,l,u,h){for(var c=o-1,y=o===0?i:[""],P=Kr(y),m=0,f=0,g=0;m<n;++m)for(var b=0,S=nt(e,c+1,c=El(f=s[m])),v=e;b<P;++b)(v=ni(f>0?y[b]+" "+S:z(S,/&\f/g,y[b])))&&(l[g++]=v);return Ut(e,t,r,o===0?Vr:a,l,u,h)}function Dl(e,t,r){return Ut(e,t,r,ti,Dt(kl()),nt(e,2,-2),0)}function Jn(e,t,r,n){return Ut(e,t,r,Wr,nt(e,0,n),nt(e,n+1,-1),n)}function ze(e,t){for(var r="",n=Kr(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Fl(e,t,r,n){switch(e.type){case Ol:if(e.children.length)break;case Pl:case Wr:return e.return=e.return||e.value;case ti:return"";case ri:return e.return=e.value+"{"+ze(e.children,n)+"}";case Vr:e.value=e.props.join(",")}return ve(r=ze(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ul(e){var t=Kr(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Bl(e){return function(t){t.root||(t=t.return)&&e(t)}}function ai(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var zl=function(t,r,n){for(var o=0,i=0;o=i,i=_e(),o===38&&i===12&&(r[n]=1),!ot(i);)de();return ft(t,le)},ql=function(t,r){var n=-1,o=44;do switch(ot(o)){case 0:o===38&&_e()===12&&(r[n]=1),t[n]+=zl(le-1,r,n);break;case 2:t[n]+=Ot(o);break;case 4:if(o===44){t[++n]=_e()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=Dt(o)}while(o=de());return t},Hl=function(t,r){return si(ql(ii(t),r))},Xn=new WeakMap,Vl=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,o=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Xn.get(n))&&!o){Xn.set(t,!0);for(var i=[],s=Hl(r,i),a=n.props,l=0,u=0;l<s.length;l++)for(var h=0;h<a.length;h++,u++)t.props[u]=i[l]?s[l].replace(/&\f/g,a[h]):a[h]+" "+s[l]}}},Wl=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function li(e,t){switch(Tl(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Ct+e+ie+e+e;case 6828:case 4268:return B+e+ie+e+e;case 6165:return B+e+ie+"flex-"+e+e;case 5187:return B+e+z(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return B+e+ie+"flex-item-"+z(e,/flex-|-self/,"")+e;case 4675:return B+e+ie+"flex-line-pack"+z(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+ie+z(e,"shrink","negative")+e;case 5292:return B+e+ie+z(e,"basis","preferred-size")+e;case 6060:return B+"box-"+z(e,"-grow","")+B+e+ie+z(e,"grow","positive")+e;case 4554:return B+z(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ve(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Ct+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jr(e,"stretch")?li(z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(oe(e,t+1)!==115)break;case 6444:switch(oe(e,ve(e)-3-(~jr(e,"!important")&&10))){case 107:return z(e,":",":"+B)+e;case 101:return z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(oe(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+ie+"$2box$3")+e}break;case 5936:switch(oe(e,t+11)){case 114:return B+e+ie+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+ie+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+ie+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+ie+e+e}return e}var Kl=function(t,r,n,o){if(t.length>-1&&!t.return)switch(t.type){case Wr:t.return=li(t.value,t.length);break;case ri:return ze([Xe(t,{value:z(t.value,"@","@"+B)})],o);case Vr:if(t.length)return Al(t.props,function(i){switch(Cl(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ze([Xe(t,{props:[z(i,/:(read-\w+)/,":"+Ct+"$1")]})],o);case"::placeholder":return ze([Xe(t,{props:[z(i,/:(plac\w+)/,":"+B+"input-$1")]}),Xe(t,{props:[z(i,/:(plac\w+)/,":"+Ct+"$1")]}),Xe(t,{props:[z(i,/:(plac\w+)/,ie+"input-$1")]})],o)}return""})}},Yl=[Kl],ci=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var o=t.stylisPlugins||Yl,i={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),b=1;b<g.length;b++)i[g[b]]=!0;a.push(f)});var l,u=[Vl,Wl];{var h,c=[Fl,Bl(function(f){h.insert(f)})],y=Ul(u.concat(o,c)),P=function(g){return ze(Nl(g),y)};l=function(g,b,S,v){h=S,P(g?g+"{"+b.styles+"}":b.styles),v&&(m.inserted[b.name]=!0)}}var m={key:r,sheet:new _l({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return m.sheet.hydrate(a),m},wr={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn;function Gl(){if(Zn)return q;Zn=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,c=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,P=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function v(d){if(typeof d=="object"&&d!==null){var C=d.$$typeof;switch(C){case t:switch(d=d.type,d){case l:case u:case n:case i:case o:case c:return d;default:switch(d=d&&d.$$typeof,d){case a:case h:case m:case P:case s:return d;default:return C}}case r:return C}}}function E(d){return v(d)===u}return q.AsyncMode=l,q.ConcurrentMode=u,q.ContextConsumer=a,q.ContextProvider=s,q.Element=t,q.ForwardRef=h,q.Fragment=n,q.Lazy=m,q.Memo=P,q.Portal=r,q.Profiler=i,q.StrictMode=o,q.Suspense=c,q.isAsyncMode=function(d){return E(d)||v(d)===l},q.isConcurrentMode=E,q.isContextConsumer=function(d){return v(d)===a},q.isContextProvider=function(d){return v(d)===s},q.isElement=function(d){return typeof d=="object"&&d!==null&&d.$$typeof===t},q.isForwardRef=function(d){return v(d)===h},q.isFragment=function(d){return v(d)===n},q.isLazy=function(d){return v(d)===m},q.isMemo=function(d){return v(d)===P},q.isPortal=function(d){return v(d)===r},q.isProfiler=function(d){return v(d)===i},q.isStrictMode=function(d){return v(d)===o},q.isSuspense=function(d){return v(d)===c},q.isValidElementType=function(d){return typeof d=="string"||typeof d=="function"||d===n||d===u||d===i||d===o||d===c||d===y||typeof d=="object"&&d!==null&&(d.$$typeof===m||d.$$typeof===P||d.$$typeof===s||d.$$typeof===a||d.$$typeof===h||d.$$typeof===g||d.$$typeof===b||d.$$typeof===S||d.$$typeof===f)},q.typeOf=v,q}var Qn;function Jl(){return Qn||(Qn=1,wr.exports=Gl()),wr.exports}var Sr,eo;function Xl(){if(eo)return Sr;eo=1;var e=Jl(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=n,i[e.Memo]=o;function s(m){return e.isMemo(m)?o:i[m.$$typeof]||t}var a=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,y=Object.prototype;function P(m,f,g){if(typeof f!="string"){if(y){var b=c(f);b&&b!==y&&P(m,b,g)}var S=l(f);u&&(S=S.concat(u(f)));for(var v=s(m),E=s(f),d=0;d<S.length;++d){var C=S[d];if(!r[C]&&!(g&&g[C])&&!(E&&E[C])&&!(v&&v[C])){var p=h(f,C);try{a(m,C,p)}catch{}}}}return m}return Sr=P,Sr}Xl();var Zl=!0;function ui(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(n+=o+" ")}),n}var Yr=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||Zl===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},Gr=function(t,r,n){Yr(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var i=r;do t.insert(r===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Ql(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ec={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tc=/[A-Z]|^ms/g,rc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fi=function(t){return t.charCodeAt(1)===45},to=function(t){return t!=null&&typeof t!="boolean"},_r=ai(function(e){return fi(e)?e:e.replace(tc,"-$&").toLowerCase()}),ro=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(rc,function(n,o,i){return we={name:o,styles:i,next:we},o})}return ec[t]!==1&&!fi(t)&&typeof r=="number"&&r!==0?r+"px":r};function it(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var o=r;if(o.anim===1)return we={name:o.name,styles:o.styles,next:we},o.name;var i=r;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)we={name:s.name,styles:s.styles,next:we},s=s.next;var a=i.styles+";";return a}return nc(e,t,r)}case"function":{if(e!==void 0){var l=we,u=r(e);return we=l,it(e,t,u)}break}}var h=r;if(t==null)return h;var c=t[h];return c!==void 0?c:h}function nc(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=it(e,t,r[o])+";";else for(var i in r){var s=r[i];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?n+=i+"{"+t[a]+"}":to(a)&&(n+=_r(i)+":"+ro(i,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)to(s[l])&&(n+=_r(i)+":"+ro(i,s[l])+";");else{var u=it(e,t,s);switch(i){case"animation":case"animationName":{n+=_r(i)+":"+u+";";break}default:n+=i+"{"+u+"}"}}}return n}var no=/label:\s*([^\s;{]+)\s*(;|$)/g,we;function Bt(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";we=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,o+=it(r,t,i);else{var s=i;o+=s[0]}for(var a=1;a<e.length;a++)if(o+=it(r,t,e[a]),n){var l=i;o+=l[a]}no.lastIndex=0;for(var u="",h;(h=no.exec(o))!==null;)u+="-"+h[1];var c=Ql(o)+u;return{name:c,styles:o,next:we}}var oc=function(t){return t()},di=nn.useInsertionEffect?nn.useInsertionEffect:!1,pi=di||oc,oo=di||D.useLayoutEffect,hi=D.createContext(typeof HTMLElement<"u"?ci({key:"css"}):null),ic=hi.Provider,Jr=function(t){return D.forwardRef(function(r,n){var o=D.useContext(hi);return t(r,o,n)})},zt=D.createContext({}),Xr={}.hasOwnProperty,Ir="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sc=function(t,r){var n={};for(var o in r)Xr.call(r,o)&&(n[o]=r[o]);return n[Ir]=t,n},ac=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Yr(r,n,o),pi(function(){return Gr(r,n,o)}),null},lc=Jr(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var o=e[Ir],i=[n],s="";typeof e.className=="string"?s=ui(t.registered,i,e.className):e.className!=null&&(s=e.className+" ");var a=Bt(i,void 0,D.useContext(zt));s+=t.key+"-"+a.name;var l={};for(var u in e)Xr.call(e,u)&&u!=="css"&&u!==Ir&&(l[u]=e[u]);return l.className=s,r&&(l.ref=r),D.createElement(D.Fragment,null,D.createElement(ac,{cache:t,serialized:a,isStringTag:typeof o=="string"}),D.createElement(o,l))}),cc=lc,uc=function(t,r){var n=arguments;if(r==null||!Xr.call(r,"css"))return D.createElement.apply(void 0,n);var o=n.length,i=new Array(o);i[0]=cc,i[1]=sc(t,r);for(var s=2;s<o;s++)i[s]=n[s];return D.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(uc);var fc=Jr(function(e,t){var r=e.styles,n=Bt([r],void 0,D.useContext(zt)),o=D.useRef();return oo(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+i+" "+n.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),o.current=[s,a],function(){s.flush()}},[t]),oo(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(n.next!==void 0&&Gr(t,n.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",n,s,!1)},[t,n.name]),null});function mi(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Bt(t)}function dc(){var e=mi.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var pc=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hc=ai(function(e){return pc.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),mc=hc,yc=function(t){return t!=="theme"},io=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?mc:yc},so=function(t,r,n){var o;if(r){var i=r.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(s){return t.__emotion_forwardProp(s)&&i(s)}:i}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},gc=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Yr(r,n,o),pi(function(){return Gr(r,n,o)}),null},bc=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,i,s;r!==void 0&&(i=r.label,s=r.target);var a=so(t,r,n),l=a||io(o),u=!l("as");return function(){var h=arguments,c=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),h[0]==null||h[0].raw===void 0)c.push.apply(c,h);else{var y=h[0];c.push(y[0]);for(var P=h.length,m=1;m<P;m++)c.push(h[m],y[m])}var f=Jr(function(g,b,S){var v=u&&g.as||o,E="",d=[],C=g;if(g.theme==null){C={};for(var p in g)C[p]=g[p];C.theme=D.useContext(zt)}typeof g.className=="string"?E=ui(b.registered,d,g.className):g.className!=null&&(E=g.className+" ");var w=Bt(c.concat(d),b.registered,C);E+=b.key+"-"+w.name,s!==void 0&&(E+=" "+s);var x=u&&a===void 0?io(v):l,O={};for(var A in g)u&&A==="as"||x(A)&&(O[A]=g[A]);return O.className=E,S&&(O.ref=S),D.createElement(D.Fragment,null,D.createElement(gc,{cache:b,serialized:w,isStringTag:typeof v=="string"}),D.createElement(v,O))});return f.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=o,f.__emotion_styles=c,f.__emotion_forwardProp=a,Object.defineProperty(f,"toString",{value:function(){return"."+s}}),f.withComponent=function(g,b){var S=e(g,H({},r,b,{shouldForwardProp:so(f,b,!0)}));return S.apply(void 0,c)},f}},xc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Lr=bc.bind(null);xc.forEach(function(e){Lr[e]=Lr(e)});let Mr;typeof document=="object"&&(Mr=ci({key:"css",prepend:!0}));function vc(e){const{injectFirst:t,children:r}=e;return t&&Mr?R.jsx(ic,{value:Mr,children:r}):r}function wc(e){return e==null||Object.keys(e).length===0}function Sc(e){const{styles:t,defaultTheme:r={}}=e,n=typeof t=="function"?o=>t(wc(o)?r:o):t;return R.jsx(fc,{styles:n})}function _c(e,t){return Lr(e,t)}const Pc=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Oc=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Sc,StyledEngineProvider:vc,ThemeContext:zt,css:mi,default:_c,internal_processStyles:Pc,keyframes:dc},Symbol.toStringTag,{value:"Module"})),Ec=Ee(Oc),Rc=Ee(Qa),Tc=Ee(sl),Cc=Ee(il),Ac=["values","unit","step"],kc=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>H({},r,{[n.key]:n.val}),{})};function yi(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,o=Ce(e,Ac),i=kc(t),s=Object.keys(i);function a(y){return`@media (min-width:${typeof t[y]=="number"?t[y]:y}${r})`}function l(y){return`@media (max-width:${(typeof t[y]=="number"?t[y]:y)-n/100}${r})`}function u(y,P){const m=s.indexOf(P);return`@media (min-width:${typeof t[y]=="number"?t[y]:y}${r}) and (max-width:${(m!==-1&&typeof t[s[m]]=="number"?t[s[m]]:P)-n/100}${r})`}function h(y){return s.indexOf(y)+1<s.length?u(y,s[s.indexOf(y)+1]):a(y)}function c(y){const P=s.indexOf(y);return P===0?a(s[1]):P===s.length-1?l(s[P]):u(y,s[s.indexOf(y)+1]).replace("@media","@media not all and")}return H({keys:s,values:i,up:a,down:l,between:u,only:h,not:c,unit:r},o)}const jc={borderRadius:4};function et(e,t){return t?Se(e,t,{clone:!1}):e}const Zr={xs:0,sm:600,md:900,lg:1200,xl:1536},ao={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Zr[e]}px)`};function Oe(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const i=n.breakpoints||ao;return t.reduce((s,a,l)=>(s[i.up(i.keys[l])]=r(t[l]),s),{})}if(typeof t=="object"){const i=n.breakpoints||ao;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||Zr).indexOf(a)!==-1){const l=i.up(a);s[l]=r(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return r(t)}function $c(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,o)=>{const i=e.up(o);return n[i]={},n},{}))||{}}function Ic(e,t){return e.reduce((r,n)=>{const o=r[n];return(!o||Object.keys(o).length===0)&&delete r[n],r},t)}function qt(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(n!=null)return n}return t.split(".").reduce((n,o)=>n&&n[o]!=null?n[o]:null,e)}function At(e,t,r,n=r){let o;return typeof e=="function"?o=e(r):Array.isArray(e)?o=e[r]||n:o=qt(e,r)||n,t&&(o=t(o,n,e)),o}function Z(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=qt(l,n)||{};return Oe(s,a,c=>{let y=At(u,o,c);return c===y&&typeof c=="string"&&(y=At(u,o,`${t}${c==="default"?"":Ie(c)}`,c)),r===!1?y:{[r]:y}})};return i.propTypes={},i.filterProps=[t],i}function Lc(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const Mc={m:"margin",p:"padding"},Nc={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},lo={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Dc=Lc(e=>{if(e.length>2)if(lo[e])e=lo[e];else return[e];const[t,r]=e.split(""),n=Mc[t],o=Nc[r]||"";return Array.isArray(o)?o.map(i=>n+i):[n+o]}),Qr=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],en=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Qr,...en];function dt(e,t,r,n){var o;const i=(o=qt(e,t,!1))!=null?o:r;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function gi(e){return dt(e,"spacing",8)}function pt(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function Fc(e,t){return r=>e.reduce((n,o)=>(n[o]=pt(t,r),n),{})}function Uc(e,t,r,n){if(t.indexOf(r)===-1)return null;const o=Dc(r),i=Fc(o,n),s=e[r];return Oe(e,s,i)}function bi(e,t){const r=gi(e.theme);return Object.keys(e).map(n=>Uc(e,t,n,r)).reduce(et,{})}function J(e){return bi(e,Qr)}J.propTypes={};J.filterProps=Qr;function X(e){return bi(e,en)}X.propTypes={};X.filterProps=en;function Bc(e=8){if(e.mui)return e;const t=gi({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return r.mui=!0,r}function Ht(...e){const t=e.reduce((n,o)=>(o.filterProps.forEach(i=>{n[i]=o}),n),{}),r=n=>Object.keys(n).reduce((o,i)=>t[i]?et(o,t[i](n)):o,{});return r.propTypes={},r.filterProps=e.reduce((n,o)=>n.concat(o.filterProps),[]),r}function he(e){return typeof e!="number"?e:`${e}px solid`}function me(e,t){return Z({prop:e,themeKey:"borders",transform:t})}const zc=me("border",he),qc=me("borderTop",he),Hc=me("borderRight",he),Vc=me("borderBottom",he),Wc=me("borderLeft",he),Kc=me("borderColor"),Yc=me("borderTopColor"),Gc=me("borderRightColor"),Jc=me("borderBottomColor"),Xc=me("borderLeftColor"),Zc=me("outline",he),Qc=me("outlineColor"),Vt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=dt(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:pt(t,n)});return Oe(e,e.borderRadius,r)}return null};Vt.propTypes={};Vt.filterProps=["borderRadius"];Ht(zc,qc,Hc,Vc,Wc,Kc,Yc,Gc,Jc,Xc,Vt,Zc,Qc);const Wt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=dt(e.theme,"spacing",8),r=n=>({gap:pt(t,n)});return Oe(e,e.gap,r)}return null};Wt.propTypes={};Wt.filterProps=["gap"];const Kt=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=dt(e.theme,"spacing",8),r=n=>({columnGap:pt(t,n)});return Oe(e,e.columnGap,r)}return null};Kt.propTypes={};Kt.filterProps=["columnGap"];const Yt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=dt(e.theme,"spacing",8),r=n=>({rowGap:pt(t,n)});return Oe(e,e.rowGap,r)}return null};Yt.propTypes={};Yt.filterProps=["rowGap"];const eu=Z({prop:"gridColumn"}),tu=Z({prop:"gridRow"}),ru=Z({prop:"gridAutoFlow"}),nu=Z({prop:"gridAutoColumns"}),ou=Z({prop:"gridAutoRows"}),iu=Z({prop:"gridTemplateColumns"}),su=Z({prop:"gridTemplateRows"}),au=Z({prop:"gridTemplateAreas"}),lu=Z({prop:"gridArea"});Ht(Wt,Kt,Yt,eu,tu,ru,nu,ou,iu,su,au,lu);function qe(e,t){return t==="grey"?t:e}const cu=Z({prop:"color",themeKey:"palette",transform:qe}),uu=Z({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:qe}),fu=Z({prop:"backgroundColor",themeKey:"palette",transform:qe});Ht(cu,uu,fu);function ue(e){return e<=1&&e!==0?`${e*100}%`:e}const du=Z({prop:"width",transform:ue}),tn=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,o;const i=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||Zr[r];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:ue(r)}};return Oe(e,e.maxWidth,t)}return null};tn.filterProps=["maxWidth"];const pu=Z({prop:"minWidth",transform:ue}),hu=Z({prop:"height",transform:ue}),mu=Z({prop:"maxHeight",transform:ue}),yu=Z({prop:"minHeight",transform:ue});Z({prop:"size",cssProperty:"width",transform:ue});Z({prop:"size",cssProperty:"height",transform:ue});const gu=Z({prop:"boxSizing"});Ht(du,tn,pu,hu,mu,yu,gu);const ht={border:{themeKey:"borders",transform:he},borderTop:{themeKey:"borders",transform:he},borderRight:{themeKey:"borders",transform:he},borderBottom:{themeKey:"borders",transform:he},borderLeft:{themeKey:"borders",transform:he},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:he},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Vt},color:{themeKey:"palette",transform:qe},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:qe},backgroundColor:{themeKey:"palette",transform:qe},p:{style:X},pt:{style:X},pr:{style:X},pb:{style:X},pl:{style:X},px:{style:X},py:{style:X},padding:{style:X},paddingTop:{style:X},paddingRight:{style:X},paddingBottom:{style:X},paddingLeft:{style:X},paddingX:{style:X},paddingY:{style:X},paddingInline:{style:X},paddingInlineStart:{style:X},paddingInlineEnd:{style:X},paddingBlock:{style:X},paddingBlockStart:{style:X},paddingBlockEnd:{style:X},m:{style:J},mt:{style:J},mr:{style:J},mb:{style:J},ml:{style:J},mx:{style:J},my:{style:J},margin:{style:J},marginTop:{style:J},marginRight:{style:J},marginBottom:{style:J},marginLeft:{style:J},marginX:{style:J},marginY:{style:J},marginInline:{style:J},marginInlineStart:{style:J},marginInlineEnd:{style:J},marginBlock:{style:J},marginBlockStart:{style:J},marginBlockEnd:{style:J},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Wt},rowGap:{style:Yt},columnGap:{style:Kt},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ue},maxWidth:{style:tn},minWidth:{transform:ue},height:{transform:ue},maxHeight:{transform:ue},minHeight:{transform:ue},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function bu(...e){const t=e.reduce((n,o)=>n.concat(Object.keys(o)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function xu(e,t){return typeof e=="function"?e(t):e}function xi(){function e(r,n,o,i){const s={[r]:n,theme:o},a=i[r];if(!a)return{[r]:n};const{cssProperty:l=r,themeKey:u,transform:h,style:c}=a;if(n==null)return null;if(u==="typography"&&n==="inherit")return{[r]:n};const y=qt(o,u)||{};return c?c(s):Oe(s,n,m=>{let f=At(y,h,m);return m===f&&typeof m=="string"&&(f=At(y,h,`${r}${m==="default"?"":Ie(m)}`,m)),l===!1?f:{[l]:f}})}function t(r){var n;const{sx:o,theme:i={}}=r||{};if(!o)return null;const s=(n=i.unstable_sxConfig)!=null?n:ht;function a(l){let u=l;if(typeof l=="function")u=l(i);else if(typeof l!="object")return l;if(!u)return null;const h=$c(i.breakpoints),c=Object.keys(h);let y=h;return Object.keys(u).forEach(P=>{const m=xu(u[P],i);if(m!=null)if(typeof m=="object")if(s[P])y=et(y,e(P,m,i,s));else{const f=Oe({theme:i},m,g=>({[P]:g}));bu(f,m)?y[P]=t({sx:m,theme:i}):y=et(y,f)}else y=et(y,e(P,m,i,s))}),Ic(c,y)}return Array.isArray(o)?o.map(a):a(o)}return t}const Gt=xi();Gt.filterProps=["sx"];function vi(e,t){const r=this;return r.vars&&typeof r.getColorSchemeSelector=="function"?{[r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:r.palette.mode===e?t:{}}const vu=["breakpoints","palette","spacing","shape"];function wi(e={},...t){const{breakpoints:r={},palette:n={},spacing:o,shape:i={}}=e,s=Ce(e,vu),a=yi(r),l=Bc(o);let u=Se({breakpoints:a,direction:"ltr",components:{},palette:H({mode:"light"},n),spacing:l,shape:H({},jc,i)},s);return u.applyStyles=vi,u=t.reduce((h,c)=>Se(h,c),u),u.unstable_sxConfig=H({},ht,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(c){return Gt({sx:c,theme:this})},u}const wu=Object.freeze(Object.defineProperty({__proto__:null,default:wi,private_createBreakpoints:yi,unstable_applyStyles:vi},Symbol.toStringTag,{value:"Module"})),Su=Ee(wu),_u=["sx"],Pu=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:ht;return Object.keys(e).forEach(i=>{o[i]?n.systemProps[i]=e[i]:n.otherProps[i]=e[i]}),n};function Ou(e){const{sx:t}=e,r=Ce(e,_u),{systemProps:n,otherProps:o}=Pu(r);let i;return Array.isArray(t)?i=[n,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return Te(a)?H({},n,a):n}:i=H({},n,t),H({},o,{sx:i})}const Eu=Object.freeze(Object.defineProperty({__proto__:null,default:Gt,extendSxProp:Ou,unstable_createStyleFunctionSx:xi,unstable_defaultSxConfig:ht},Symbol.toStringTag,{value:"Module"})),Ru=Ee(Eu);var co;function Tu(){if(co)return Ae;co=1;var e=ei();Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.default=E,Ae.shouldForwardProp=m,Ae.systemDefaultTheme=void 0;var t=e(xl()),r=e(vl()),n=c(Ec),o=Rc;e(Tc),e(Cc);var i=e(Su),s=e(Ru);const a=["ownerState"],l=["variants"],u=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function h(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,p=new WeakMap;return(h=function(w){return w?p:C})(d)}function c(d,C){if(d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=h(C);if(p&&p.has(d))return p.get(d);var w={__proto__:null},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in d)if(O!=="default"&&Object.prototype.hasOwnProperty.call(d,O)){var A=x?Object.getOwnPropertyDescriptor(d,O):null;A&&(A.get||A.set)?Object.defineProperty(w,O,A):w[O]=d[O]}return w.default=d,p&&p.set(d,w),w}function y(d){return Object.keys(d).length===0}function P(d){return typeof d=="string"&&d.charCodeAt(0)>96}function m(d){return d!=="ownerState"&&d!=="theme"&&d!=="sx"&&d!=="as"}const f=Ae.systemDefaultTheme=(0,i.default)(),g=d=>d&&d.charAt(0).toLowerCase()+d.slice(1);function b({defaultTheme:d,theme:C,themeId:p}){return y(C)?d:C[p]||C}function S(d){return d?(C,p)=>p[d]:null}function v(d,C){let{ownerState:p}=C,w=(0,r.default)(C,a);const x=typeof d=="function"?d((0,t.default)({ownerState:p},w)):d;if(Array.isArray(x))return x.flatMap(O=>v(O,(0,t.default)({ownerState:p},w)));if(x&&typeof x=="object"&&Array.isArray(x.variants)){const{variants:O=[]}=x;let I=(0,r.default)(x,l);return O.forEach(L=>{let T=!0;typeof L.props=="function"?T=L.props((0,t.default)({ownerState:p},w,p)):Object.keys(L.props).forEach(j=>{(p==null?void 0:p[j])!==L.props[j]&&w[j]!==L.props[j]&&(T=!1)}),T&&(Array.isArray(I)||(I=[I]),I.push(typeof L.style=="function"?L.style((0,t.default)({ownerState:p},w,p)):L.style))}),I}return x}function E(d={}){const{themeId:C,defaultTheme:p=f,rootShouldForwardProp:w=m,slotShouldForwardProp:x=m}=d,O=A=>(0,s.default)((0,t.default)({},A,{theme:b((0,t.default)({},A,{defaultTheme:p,themeId:C}))}));return O.__mui_systemSx=!0,(A,I={})=>{(0,n.internal_processStyles)(A,ne=>ne.filter(pe=>!(pe!=null&&pe.__mui_systemSx)));const{name:L,slot:T,skipVariantsResolver:j,skipSx:W,overridesResolver:ee=S(g(T))}=I,te=(0,r.default)(I,u),k=j!==void 0?j:T&&T!=="Root"&&T!=="root"||!1,M=W||!1;let F,U=m;T==="Root"||T==="root"?U=w:T?U=x:P(A)&&(U=void 0);const re=(0,n.default)(A,(0,t.default)({shouldForwardProp:U,label:F},te)),ge=ne=>typeof ne=="function"&&ne.__emotion_real!==ne||(0,o.isPlainObject)(ne)?pe=>v(ne,(0,t.default)({},pe,{theme:b({theme:pe.theme,defaultTheme:p,themeId:C})})):ne,Re=(ne,...pe)=>{let Le=ge(ne);const ce=pe?pe.map(ge):[];L&&ee&&ce.push(Pe=>{const be=b((0,t.default)({},Pe,{defaultTheme:p,themeId:C}));if(!be.components||!be.components[L]||!be.components[L].styleOverrides)return null;const Ye=be.components[L].styleOverrides,mt={};return Object.entries(Ye).forEach(([Ei,Ri])=>{mt[Ei]=v(Ri,(0,t.default)({},Pe,{theme:be}))}),ee(Pe,mt)}),L&&!k&&ce.push(Pe=>{var be;const Ye=b((0,t.default)({},Pe,{defaultTheme:p,themeId:C})),mt=Ye==null||(be=Ye.components)==null||(be=be[L])==null?void 0:be.variants;return v({variants:mt},(0,t.default)({},Pe,{theme:Ye}))}),M||ce.push(O);const Me=ce.length-pe.length;if(Array.isArray(ne)&&Me>0){const Pe=new Array(Me).fill("");Le=[...ne,...Pe],Le.raw=[...ne.raw,...Pe]}const rn=re(Le,...ce);return A.muiName&&(rn.muiName=A.muiName),rn};return re.withConfig&&(Re.withConfig=re.withConfig),Re}}return Ae}var Cu=Tu();const Au=vo(Cu);function ku(e,t){return H({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Y={};const ju=Ee(el),$u=Ee(pl);var uo;function Iu(){if(uo)return Y;uo=1;var e=ei();Object.defineProperty(Y,"__esModule",{value:!0}),Y.alpha=m,Y.blend=C,Y.colorChannel=void 0,Y.darken=g,Y.decomposeColor=s,Y.emphasize=E,Y.getContrastRatio=P,Y.getLuminance=y,Y.hexToRgb=o,Y.hslToRgb=c,Y.lighten=S,Y.private_safeAlpha=f,Y.private_safeColorChannel=void 0,Y.private_safeDarken=b,Y.private_safeEmphasize=d,Y.private_safeLighten=v,Y.recomposeColor=u,Y.rgbToHex=h;var t=e(ju),r=e($u);function n(p,w=0,x=1){return(0,r.default)(p,w,x)}function o(p){p=p.slice(1);const w=new RegExp(`.{1,${p.length>=6?2:1}}`,"g");let x=p.match(w);return x&&x[0].length===1&&(x=x.map(O=>O+O)),x?`rgb${x.length===4?"a":""}(${x.map((O,A)=>A<3?parseInt(O,16):Math.round(parseInt(O,16)/255*1e3)/1e3).join(", ")})`:""}function i(p){const w=p.toString(16);return w.length===1?`0${w}`:w}function s(p){if(p.type)return p;if(p.charAt(0)==="#")return s(o(p));const w=p.indexOf("("),x=p.substring(0,w);if(["rgb","rgba","hsl","hsla","color"].indexOf(x)===-1)throw new Error((0,t.default)(9,p));let O=p.substring(w+1,p.length-1),A;if(x==="color"){if(O=O.split(" "),A=O.shift(),O.length===4&&O[3].charAt(0)==="/"&&(O[3]=O[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(A)===-1)throw new Error((0,t.default)(10,A))}else O=O.split(",");return O=O.map(I=>parseFloat(I)),{type:x,values:O,colorSpace:A}}const a=p=>{const w=s(p);return w.values.slice(0,3).map((x,O)=>w.type.indexOf("hsl")!==-1&&O!==0?`${x}%`:x).join(" ")};Y.colorChannel=a;const l=(p,w)=>{try{return a(p)}catch{return p}};Y.private_safeColorChannel=l;function u(p){const{type:w,colorSpace:x}=p;let{values:O}=p;return w.indexOf("rgb")!==-1?O=O.map((A,I)=>I<3?parseInt(A,10):A):w.indexOf("hsl")!==-1&&(O[1]=`${O[1]}%`,O[2]=`${O[2]}%`),w.indexOf("color")!==-1?O=`${x} ${O.join(" ")}`:O=`${O.join(", ")}`,`${w}(${O})`}function h(p){if(p.indexOf("#")===0)return p;const{values:w}=s(p);return`#${w.map((x,O)=>i(O===3?Math.round(255*x):x)).join("")}`}function c(p){p=s(p);const{values:w}=p,x=w[0],O=w[1]/100,A=w[2]/100,I=O*Math.min(A,1-A),L=(W,ee=(W+x/30)%12)=>A-I*Math.max(Math.min(ee-3,9-ee,1),-1);let T="rgb";const j=[Math.round(L(0)*255),Math.round(L(8)*255),Math.round(L(4)*255)];return p.type==="hsla"&&(T+="a",j.push(w[3])),u({type:T,values:j})}function y(p){p=s(p);let w=p.type==="hsl"||p.type==="hsla"?s(c(p)).values:p.values;return w=w.map(x=>(p.type!=="color"&&(x/=255),x<=.03928?x/12.92:((x+.055)/1.055)**2.4)),Number((.2126*w[0]+.7152*w[1]+.0722*w[2]).toFixed(3))}function P(p,w){const x=y(p),O=y(w);return(Math.max(x,O)+.05)/(Math.min(x,O)+.05)}function m(p,w){return p=s(p),w=n(w),(p.type==="rgb"||p.type==="hsl")&&(p.type+="a"),p.type==="color"?p.values[3]=`/${w}`:p.values[3]=w,u(p)}function f(p,w,x){try{return m(p,w)}catch{return p}}function g(p,w){if(p=s(p),w=n(w),p.type.indexOf("hsl")!==-1)p.values[2]*=1-w;else if(p.type.indexOf("rgb")!==-1||p.type.indexOf("color")!==-1)for(let x=0;x<3;x+=1)p.values[x]*=1-w;return u(p)}function b(p,w,x){try{return g(p,w)}catch{return p}}function S(p,w){if(p=s(p),w=n(w),p.type.indexOf("hsl")!==-1)p.values[2]+=(100-p.values[2])*w;else if(p.type.indexOf("rgb")!==-1)for(let x=0;x<3;x+=1)p.values[x]+=(255-p.values[x])*w;else if(p.type.indexOf("color")!==-1)for(let x=0;x<3;x+=1)p.values[x]+=(1-p.values[x])*w;return u(p)}function v(p,w,x){try{return S(p,w)}catch{return p}}function E(p,w=.15){return y(p)>.5?g(p,w):S(p,w)}function d(p,w,x){try{return E(p,w)}catch{return p}}function C(p,w,x,O=1){const A=(j,W)=>Math.round((j**(1/O)*(1-x)+W**(1/O)*x)**O),I=s(p),L=s(w),T=[A(I.values[0],L.values[0]),A(I.values[1],L.values[1]),A(I.values[2],L.values[2])];return u({type:"rgb",values:T})}return Y}var Nr=Iu();const st={black:"#000",white:"#fff"},Lu={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ne={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},De={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ze={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Fe={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ue={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Be={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Mu=["mode","contrastThreshold","tonalOffset"],fo={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:st.white,default:st.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Pr={text:{primary:st.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:st.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function po(e,t,r,n){const o=n.light||n,i=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=Nr.lighten(e.main,o):t==="dark"&&(e.dark=Nr.darken(e.main,i)))}function Nu(e="light"){return e==="dark"?{main:Fe[200],light:Fe[50],dark:Fe[400]}:{main:Fe[700],light:Fe[400],dark:Fe[800]}}function Du(e="light"){return e==="dark"?{main:Ne[200],light:Ne[50],dark:Ne[400]}:{main:Ne[500],light:Ne[300],dark:Ne[700]}}function Fu(e="light"){return e==="dark"?{main:De[500],light:De[300],dark:De[700]}:{main:De[700],light:De[400],dark:De[800]}}function Uu(e="light"){return e==="dark"?{main:Ue[400],light:Ue[300],dark:Ue[700]}:{main:Ue[700],light:Ue[500],dark:Ue[900]}}function Bu(e="light"){return e==="dark"?{main:Be[400],light:Be[300],dark:Be[700]}:{main:Be[800],light:Be[500],dark:Be[900]}}function zu(e="light"){return e==="dark"?{main:Ze[400],light:Ze[300],dark:Ze[700]}:{main:"#ed6c02",light:Ze[500],dark:Ze[900]}}function qu(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,o=Ce(e,Mu),i=e.primary||Nu(t),s=e.secondary||Du(t),a=e.error||Fu(t),l=e.info||Uu(t),u=e.success||Bu(t),h=e.warning||zu(t);function c(f){return Nr.getContrastRatio(f,Pr.text.primary)>=r?Pr.text.primary:fo.text.primary}const y=({color:f,name:g,mainShade:b=500,lightShade:S=300,darkShade:v=700})=>{if(f=H({},f),!f.main&&f[b]&&(f.main=f[b]),!f.hasOwnProperty("main"))throw new Error(rt(11,g?` (${g})`:"",b));if(typeof f.main!="string")throw new Error(rt(12,g?` (${g})`:"",JSON.stringify(f.main)));return po(f,"light",S,n),po(f,"dark",v,n),f.contrastText||(f.contrastText=c(f.main)),f},P={dark:Pr,light:fo};return Se(H({common:H({},st),mode:t,primary:y({color:i,name:"primary"}),secondary:y({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:y({color:a,name:"error"}),warning:y({color:h,name:"warning"}),info:y({color:l,name:"info"}),success:y({color:u,name:"success"}),grey:Lu,contrastThreshold:r,getContrastText:c,augmentColor:y,tonalOffset:n},P[t]),o)}const Hu=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Vu(e){return Math.round(e*1e5)/1e5}const ho={textTransform:"uppercase"},mo='"Roboto", "Helvetica", "Arial", sans-serif';function Wu(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=mo,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:h,pxToRem:c}=r,y=Ce(r,Hu),P=o/14,m=c||(b=>`${b/u*P}rem`),f=(b,S,v,E,d)=>H({fontFamily:n,fontWeight:b,fontSize:m(S),lineHeight:v},n===mo?{letterSpacing:`${Vu(E/S)}em`}:{},d,h),g={h1:f(i,96,1.167,-1.5),h2:f(i,60,1.2,-.5),h3:f(s,48,1.167,0),h4:f(s,34,1.235,.25),h5:f(s,24,1.334,0),h6:f(a,20,1.6,.15),subtitle1:f(s,16,1.75,.15),subtitle2:f(a,14,1.57,.1),body1:f(s,16,1.5,.15),body2:f(s,14,1.43,.15),button:f(a,14,1.75,.4,ho),caption:f(s,12,1.66,.4),overline:f(s,12,2.66,1,ho),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Se(H({htmlFontSize:u,pxToRem:m,fontFamily:n,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},g),y,{clone:!1})}const Ku=.2,Yu=.14,Gu=.12;function K(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ku})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yu})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gu})`].join(",")}const Ju=["none",K(0,2,1,-1,0,1,1,0,0,1,3,0),K(0,3,1,-2,0,2,2,0,0,1,5,0),K(0,3,3,-2,0,3,4,0,0,1,8,0),K(0,2,4,-1,0,4,5,0,0,1,10,0),K(0,3,5,-1,0,5,8,0,0,1,14,0),K(0,3,5,-1,0,6,10,0,0,1,18,0),K(0,4,5,-2,0,7,10,1,0,2,16,1),K(0,5,5,-3,0,8,10,1,0,3,14,2),K(0,5,6,-3,0,9,12,1,0,3,16,2),K(0,6,6,-3,0,10,14,1,0,4,18,3),K(0,6,7,-4,0,11,15,1,0,4,20,3),K(0,7,8,-4,0,12,17,2,0,5,22,4),K(0,7,8,-4,0,13,19,2,0,5,24,4),K(0,7,9,-4,0,14,21,2,0,5,26,4),K(0,8,9,-5,0,15,22,2,0,6,28,5),K(0,8,10,-5,0,16,24,2,0,6,30,5),K(0,8,11,-5,0,17,26,2,0,6,32,5),K(0,9,11,-5,0,18,28,2,0,7,34,6),K(0,9,12,-6,0,19,29,2,0,7,36,6),K(0,10,13,-6,0,20,31,3,0,8,38,7),K(0,10,13,-6,0,21,33,3,0,8,40,7),K(0,10,14,-6,0,22,35,3,0,8,42,7),K(0,11,14,-7,0,23,36,3,0,9,44,8),K(0,11,15,-7,0,24,38,3,0,9,46,8)],Xu=["duration","easing","delay"],Zu={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Qu={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function yo(e){return`${Math.round(e)}ms`}function ef(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function tf(e){const t=H({},Zu,e.easing),r=H({},Qu,e.duration);return H({getAutoHeightDuration:ef,create:(o=["all"],i={})=>{const{duration:s=r.standard,easing:a=t.easeInOut,delay:l=0}=i;return Ce(i,Xu),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof s=="string"?s:yo(s)} ${a} ${typeof l=="string"?l:yo(l)}`).join(",")}},e,{easing:t,duration:r})}const rf={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},nf=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function of(e={},...t){const{mixins:r={},palette:n={},transitions:o={},typography:i={}}=e,s=Ce(e,nf);if(e.vars)throw new Error(rt(18));const a=qu(n),l=wi(e);let u=Se(l,{mixins:ku(l.breakpoints,r),palette:a,shadows:Ju.slice(),typography:Wu(a,i),transitions:tf(o),zIndex:H({},rf)});return u=Se(u,s),u=t.reduce((h,c)=>Se(h,c),u),u.unstable_sxConfig=H({},ht,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(c){return Gt({sx:c,theme:this})},u}const sf=of(),af="$$material";function lf(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const cf=e=>lf(e)&&e!=="classes",uf=Au({themeId:af,defaultTheme:sf,rootShouldForwardProp:cf});function ff(e){return Zo("MuiSvgIcon",e)}fl("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const df=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],pf=e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root",t!=="inherit"&&`color${Ie(t)}`,`fontSize${Ie(r)}`]};return al(o,ff,n)},hf=uf("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="inherit"&&t[`color${Ie(r.color)}`],t[`fontSize${Ie(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,o,i,s,a,l,u,h,c,y,P,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(r=e.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=e.typography)==null||(h=u.pxToRem)==null?void 0:h.call(u,35))||"2.1875rem"}[t.fontSize],color:(c=(y=(e.vars||e).palette)==null||(y=y[t.color])==null?void 0:y.main)!=null?c:{action:(P=(e.vars||e).palette)==null||(P=P.action)==null?void 0:P.active,disabled:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),Dr=D.forwardRef(function(t,r){const n=bl({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:h=!1,titleAccess:c,viewBox:y="0 0 24 24"}=n,P=Ce(n,df),m=D.isValidElement(o)&&o.type==="svg",f=H({},n,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:h,viewBox:y,hasSvgAsChild:m}),g={};h||(g.viewBox=y);const b=pf(f);return R.jsxs(hf,H({as:a,className:hl(b.root,i),focusable:"false",color:u,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:r},g,P,m&&o.props,{ownerState:f,children:[m?o.props.children:o,c?R.jsx("title",{children:c}):null]}))});Dr.muiName="SvgIcon";function Si(e,t){function r(n,o){return R.jsx(Dr,H({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return r.muiName=Dr.muiName,D.memo(D.forwardRef(r))}const mf=Si(R.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),yf=Si(R.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),gf=lt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_i=$.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${gf} 0.5s ease-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(155, 109, 255, 0.2);
  }
`;$.div`
  position: relative;
  width: 100%;
  height: 100%;
`;const bf=$.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,xf=$.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;

  ${_i}:hover & {
    opacity: 1;
  }
`,vf=$.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,wf=$.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,Sf=$.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`,Fr=$.button`
  background: rgba(155, 109, 255, 0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(155, 109, 255, 0.8);
    transform: scale(1.1);
  }
`;$(Fr)`
  background: rgba(155, 109, 255, 0.8);
  width: 48px;
  height: 48px;
  
  &:hover {
    background: rgb(155, 109, 255);
  }
`;const _f=({video:e,onPlay:t,onDelete:r})=>{const n=Ur(),[o,i]=D.useState(!1),s=()=>{n("/edit-video",{state:{editVideo:e}})},a=h=>{h.stopPropagation(),window.confirm("¿Estás seguro de que quieres eliminar este video?")&&r()},u=`https://img.youtube.com/vi/${(h=>{const c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,y=h.match(c);return y&&y[2].length===11?y[2]:null})(e.url)}/maxresdefault.jpg`;return R.jsxs(_i,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:t,children:[R.jsx(bf,{src:u,alt:e.title}),R.jsxs(xf,{style:{opacity:o?1:0},children:[R.jsx(vf,{children:e.title}),R.jsx(wf,{children:e.description}),R.jsxs(Sf,{children:[R.jsx(Fr,{onClick:s,children:R.jsx(yf,{})}),R.jsx(Fr,{onClick:a,children:R.jsx(mf,{})})]})]})]})},Pf=lt`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`,Pi=lt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Oi=lt`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`,go=lt`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(15deg); }
`,Of=$.div`
  min-height: 100vh;
  width: 100vw;
  color: white;
  background-color: #13111b;
  overflow-x: hidden;
`,Ef=$.div`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1920px) {
    padding: 0 4rem;
  }
`,Rf=$.div`
  width: 100vw;
  min-height: 600px;
  background: linear-gradient(135deg, #13111b 0%, #1a1625 25%, #1e1b29 50%, #2a2438 75%, #13111b 100%);
  background-size: 400% 400%;
  animation: ${Pf} 15s ease infinite;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 5rem 6rem;
  gap: 8rem;
  position: relative;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(155, 109, 255, 0.1) 0%, transparent 50%);
    animation: ${Oi} 4s ease-in-out infinite;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`,Tf=$.div`
  flex: 1;
  z-index: 1;
  animation: ${Pi} 1s ease-out;
  position: relative;
`,Cf=$.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #9b6dff, #6e40c9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #9b6dff, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Af=$.div`
  position: relative;
  background: rgba(155, 109, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(155, 109, 255, 0.2);
  box-shadow: 0 8px 32px rgba(155, 109, 255, 0.1);
  
  &::before {
    content: '✨';
    position: absolute;
    top: -15px;
    left: -15px;
    font-size: 2rem;
    background: linear-gradient(45deg, #9b6dff, #6e40c9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${go} 2s infinite;
  }

  &::after {
    content: '🎬';
    position: absolute;
    bottom: -15px;
    right: -15px;
    font-size: 2rem;
    background: linear-gradient(45deg, #6e40c9, #9b6dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${go} 2s infinite reverse;
  }
`,kf=$.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #9b6dff, #ff69b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #9b6dff, transparent);
    margin: 0.5rem auto;
    border-radius: 2px;
  }
`,jf=$.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  
  span {
    color: #9b6dff;
    font-weight: 600;
  }
`,$f=$.div`
  flex: 1;
  position: relative;
  min-height: 300px;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;

  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(155, 109, 255, 0.2), transparent);
    z-index: 1;
  }
`,If=$.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.thumbnail});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`,Lf=$.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(155, 109, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  transition: all 0.3s ease;
  z-index: 2;
  box-shadow: 0 0 20px rgba(155, 109, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: rgba(155, 109, 255, 0.3);
    border-radius: 50%;
    animation: ${Oi} 2s infinite;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgb(155, 109, 255);
    box-shadow: 0 0 30px rgba(155, 109, 255, 0.7);
  }
`,Mf=$.nav`
  position: sticky;
  top: 0;
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 100;
  margin-bottom: 2rem;
  animation: ${Pi} 0.5s ease-out;
`,Nf=$.ul`
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
`,Df=$.li`
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
`,Ff=$.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Uf=$.h2`
  color: #9b6dff;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;$.footer`
  background: rgba(19, 17, 27, 0.95);
  padding: 4rem 0;
  margin-top: 4rem;
`;$.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;const Bf=()=>{const e=Ur(),[t,r]=D.useState([]),[n,o]=D.useState(null),[i,s]=D.useState(null),a=["Películas","Series","Documentales","Anime"],[l,u]=D.useState(!1);D.useRef({});const[h]=D.useState({url:"https://www.youtube.com/watch?v=O6JxZxIzRGc",title:"RECOMIENDA TU TRAILER FAVORITO",description:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.",thumbnail:"https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg"});D.useEffect(()=>{c()},[]);const c=async()=>{try{const g=await G.get(Qe);r(g.data)}catch(g){console.error("Error fetching videos:",g)}},y=g=>{const b=document.getElementById(g.toLowerCase());b&&(b.scrollIntoView({behavior:"smooth",block:"start"}),s(g))},P=g=>{e("/new-video",{state:{editVideo:g}})},m=async g=>{try{await G.delete(`${Qe}/${g}`),await c()}catch(b){console.error("Error deleting video:",b)}},f=g=>{const b=t.filter(S=>S.category===g);return b.length===0?null:R.jsxs("div",{id:g.toLowerCase(),style:{scrollMarginTop:"100px"},children:[R.jsx(Uf,{children:g}),R.jsx(Ff,{children:b.map(S=>R.jsx(_f,{video:S,onPlay:()=>o(S),onEdit:()=>P(S),onDelete:()=>m(S.id)},S.id))})]},g)};return R.jsxs(Of,{children:[R.jsxs(Rf,{children:[R.jsxs(Tf,{children:[R.jsx(Cf,{children:"TrailerFlix"}),R.jsxs(Af,{children:[R.jsx(kf,{children:"Recomienda tu Trailer Favorito"}),R.jsxs(jf,{children:["Sube tu trailer favorito para que podamos conocer tus ",R.jsx("span",{children:"películas"}),", ",R.jsx("span",{children:"animes"}),", ",R.jsx("span",{children:"series"})," y ",R.jsx("span",{children:"documentales"})," que quieres que todos veamos."]})]})]}),R.jsxs($f,{onClick:()=>u(!0),children:[R.jsx(If,{thumbnail:h.thumbnail}),R.jsx(Lf,{children:"▶"})]})]}),R.jsxs(Ef,{children:[R.jsx(Mf,{children:R.jsx(Nf,{children:a.map(g=>R.jsx(Df,{active:i===g,onClick:()=>y(g),children:g},g))})}),a.map(g=>f(g))]}),n&&R.jsx(Za,{isOpen:!!n,onClose:()=>o(null),video:n,API_URL:Qe})]})},zf=$.div`
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
`,qf=$.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 2rem auto;
  background: rgba(19, 17, 27, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`,Hf=$.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #9b6dff;
  text-align: center;
`,Vf=$.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,xt=$.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,vt=$.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`,bo=$.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`,Wf=$.select`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }

  option {
    background: #13111b;
  }
`,Kf=$.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(155, 109, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1.1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`,Yf=$.button`
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
`,Gf=$.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,Jf=$.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,Xf=()=>{var c;const e=Ur(),r=(c=Ci().state)==null?void 0:c.editVideo,[n,o]=D.useState({title:"",category:"",url:"",description:""}),[i,s]=D.useState(""),[a,l]=D.useState(!1);D.useEffect(()=>{r&&o({title:r.title||"",category:r.category||"",url:r.url||"",description:r.description||""})},[r]);const u=y=>{const{name:P,value:m}=y.target;o(f=>({...f,[P]:m}))},h=async y=>{y.preventDefault(),l(!0),s("");try{r?await G.put(`${Qe}/${r.id}`,n):await G.post(Qe,n),e("/")}catch(P){console.error("Error:",P),s("Error al guardar el video. Por favor, intenta de nuevo.")}finally{l(!1)}};return R.jsx(zf,{children:R.jsxs(qf,{children:[R.jsx(Hf,{children:r?"Editar Video":"Nuevo Video"}),R.jsxs(Vf,{onSubmit:h,children:[R.jsxs(xt,{children:[R.jsx(vt,{htmlFor:"title",children:"Título"}),R.jsx(bo,{type:"text",id:"title",name:"title",value:n.title,onChange:u,required:!0})]}),R.jsxs(xt,{children:[R.jsx(vt,{htmlFor:"category",children:"Categoría"}),R.jsxs(Wf,{id:"category",name:"category",value:n.category,onChange:u,required:!0,children:[R.jsx("option",{value:"",children:"Selecciona una categoría"}),R.jsx("option",{value:"Películas",children:"Películas"}),R.jsx("option",{value:"Series",children:"Series"}),R.jsx("option",{value:"Documentales",children:"Documentales"}),R.jsx("option",{value:"Anime",children:"Anime"})]})]}),R.jsxs(xt,{children:[R.jsx(vt,{htmlFor:"url",children:"URL del Video (YouTube)"}),R.jsx(bo,{type:"url",id:"url",name:"url",value:n.url,onChange:u,required:!0})]}),R.jsxs(xt,{children:[R.jsx(vt,{htmlFor:"description",children:"Descripción"}),R.jsx(Kf,{id:"description",name:"description",value:n.description,onChange:u,required:!0})]}),i&&R.jsx(Gf,{children:i}),n.url&&R.jsx(Jf,{children:R.jsx(Yo,{url:n.url})}),R.jsx(Yf,{type:"submit",disabled:a,children:a?"Guardando...":r?"Guardar Cambios":"Crear Video"})]})]})})},Zf=$.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #13111b;
`,Qf=$.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #13111b;
`;function ed(){return R.jsx(Ai,{children:R.jsxs(Zf,{children:[R.jsx(Bi,{}),R.jsx(Qf,{children:R.jsxs(ki,{children:[R.jsx(Xt,{path:"/",element:R.jsx(Bf,{})}),R.jsx(Xt,{path:"/new",element:R.jsx(Xf,{})}),R.jsx(Xt,{path:"*",element:R.jsx(ji,{to:"/",replace:!0})})]})}),R.jsx(Ki,{})]})})}Mi.createRoot(document.getElementById("root")).render(R.jsx(D.StrictMode,{children:R.jsx(ed,{})}));
//# sourceMappingURL=index-CONi40CR.js.map
