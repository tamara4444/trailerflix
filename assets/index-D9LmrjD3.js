const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Preview-CtkGHLhg.js","assets/react-vendor-4QpzhUhs.js"])))=>i.map(i=>d[i]);
import{a as at,b as $i,L as Po,g as Ee,c as tr,d as Oo,r as N,R as ln,u as Lt,e as Ii,f as Li,H as Mi,h as Ni,i as yt,N as Di}from"./react-vendor-4QpzhUhs.js";import{d as k,m as lt}from"./styled-CpklvGHk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var rr={exports:{}},Ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn;function Fi(){if(cn)return Ge;cn=1;var e=at(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(a,l,u){var d,c={},m=null,O=null;u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(O=l.ref);for(d in l)n.call(l,d)&&!i.hasOwnProperty(d)&&(c[d]=l[d]);if(a&&a.defaultProps)for(d in l=a.defaultProps,l)c[d]===void 0&&(c[d]=l[d]);return{$$typeof:t,type:a,key:m,ref:O,props:c,_owner:o.current}}return Ge.Fragment=r,Ge.jsx=s,Ge.jsxs=s,Ge}var un;function Ui(){return un||(un=1,rr.exports=Fi()),rr.exports}var v=Ui(),gt={},fn;function zi(){if(fn)return gt;fn=1;var e=$i();return gt.createRoot=e.createRoot,gt.hydrateRoot=e.hydrateRoot,gt}var Bi=zi();const qi=k.header`
  background: rgba(19, 17, 27, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`,Hi=k.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Vi=k(Po)`
  color: #9b6dff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: #8257e6;
  }
`,Wi=k.div`
  display: flex;
  gap: 1rem;
`,dn=k(Po)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(155, 109, 255, 0.1);
  }
`;function Ki(){return v.jsx(qi,{children:v.jsxs(Hi,{children:[v.jsx(Vi,{to:"/",children:"TRÁILERFLIX"}),v.jsxs(Wi,{children:[v.jsx(dn,{to:"/",children:"Inicio"}),v.jsx(dn,{to:"/new",children:"Nuevo Video"})]})]})})}const Yi=k.footer`
  background-color: #1a1625;
  color: white;
  padding: 2rem;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
`,Gi=k.div`
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
`,pn=k.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: ${e=>e.flex||"1"};

  @media (max-width: 768px) {
    flex: 1;
  }
`,hn=k.h3`
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
`,Ji=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-left: 0.5rem;
`,bt=k.a`
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
`,Xi=k.p`
  color: #a8a8b3;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  font-size: 1.1rem;
`,Zi=k.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(110, 64, 201, 0.2);
  color: #a8a8b3;
  font-size: 1rem;
`,Qi=()=>{const e=t=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return v.jsxs(Yi,{children:[v.jsxs(Gi,{children:[v.jsxs(pn,{flex:"2",children:[v.jsx(hn,{children:"Sobre Trailerflix"}),v.jsx(Xi,{children:"Tu plataforma favorita para descubrir los mejores trailers de películas, series, documentales y anime. Explora nuestro catálogo y mantente al día con los últimos lanzamientos."})]}),v.jsxs(pn,{flex:"1",children:[v.jsx(hn,{children:"Categorías"}),v.jsxs(Ji,{children:[v.jsx(bt,{onClick:()=>e("películas"),children:"Películas"}),v.jsx(bt,{onClick:()=>e("series"),children:"Series"}),v.jsx(bt,{onClick:()=>e("documentales"),children:"Documentales"}),v.jsx(bt,{onClick:()=>e("anime"),children:"Anime"})]})]})]}),v.jsxs(Zi,{children:[new Date().getFullYear()," Trailerflix. Todos los derechos reservados."]})]})};function Eo(e,t){return function(){return e.apply(t,arguments)}}const{toString:es}=Object.prototype,{getPrototypeOf:Vr}=Object,Mt=(e=>t=>{const r=es.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ye=e=>(e=e.toLowerCase(),t=>Mt(t)===e),Nt=e=>t=>typeof t===e,{isArray:Ve}=Array,tt=Nt("undefined");function ts(e){return e!==null&&!tt(e)&&e.constructor!==null&&!tt(e.constructor)&&fe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ro=ye("ArrayBuffer");function rs(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ro(e.buffer),t}const ns=Nt("string"),fe=Nt("function"),To=Nt("number"),Dt=e=>e!==null&&typeof e=="object",os=e=>e===!0||e===!1,Ot=e=>{if(Mt(e)!=="object")return!1;const t=Vr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},is=ye("Date"),ss=ye("File"),as=ye("Blob"),ls=ye("FileList"),cs=e=>Dt(e)&&fe(e.pipe),us=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||fe(e.append)&&((t=Mt(e))==="formdata"||t==="object"&&fe(e.toString)&&e.toString()==="[object FormData]"))},fs=ye("URLSearchParams"),[ds,ps,hs,ms]=["ReadableStream","Request","Response","Headers"].map(ye),ys=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ct(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Ve(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(n=0;n<s;n++)a=i[n],t.call(null,e[a],a,e)}}function Co(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ke=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ao=e=>!tt(e)&&e!==ke;function Ar(){const{caseless:e}=Ao(this)&&this||{},t={},r=(n,o)=>{const i=e&&Co(t,o)||o;Ot(t[i])&&Ot(n)?t[i]=Ar(t[i],n):Ot(n)?t[i]=Ar({},n):Ve(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&ct(arguments[n],r);return t}const gs=(e,t,r,{allOwnKeys:n}={})=>(ct(t,(o,i)=>{r&&fe(o)?e[i]=Eo(o,r):e[i]=o},{allOwnKeys:n}),e),bs=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xs=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},vs=(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=r!==!1&&Vr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ws=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ss=e=>{if(!e)return null;if(Ve(e))return e;let t=e.length;if(!To(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},_s=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vr(Uint8Array)),Ps=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Os=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Es=ye("HTMLFormElement"),Rs=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),mn=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ts=ye("RegExp"),ko=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ct(r,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(n[i]=s||o)}),Object.defineProperties(e,n)},Cs=e=>{ko(e,(t,r)=>{if(fe(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(fe(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},As=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return Ve(e)?n(e):n(String(e).split(t)),r},ks=()=>{},js=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,nr="abcdefghijklmnopqrstuvwxyz",yn="0123456789",jo={DIGIT:yn,ALPHA:nr,ALPHA_DIGIT:nr+nr.toUpperCase()+yn},$s=(e=16,t=jo.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Is(e){return!!(e&&fe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ls=e=>{const t=new Array(10),r=(n,o)=>{if(Dt(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=Ve(n)?[]:{};return ct(n,(s,a)=>{const l=r(s,o+1);!tt(l)&&(i[a]=l)}),t[o]=void 0,i}}return n};return r(e,0)},Ms=ye("AsyncFunction"),Ns=e=>e&&(Dt(e)||fe(e))&&fe(e.then)&&fe(e.catch),$o=((e,t)=>e?setImmediate:t?((r,n)=>(ke.addEventListener("message",({source:o,data:i})=>{o===ke&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),ke.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",fe(ke.postMessage)),Ds=typeof queueMicrotask<"u"?queueMicrotask.bind(ke):typeof process<"u"&&process.nextTick||$o,P={isArray:Ve,isArrayBuffer:Ro,isBuffer:ts,isFormData:us,isArrayBufferView:rs,isString:ns,isNumber:To,isBoolean:os,isObject:Dt,isPlainObject:Ot,isReadableStream:ds,isRequest:ps,isResponse:hs,isHeaders:ms,isUndefined:tt,isDate:is,isFile:ss,isBlob:as,isRegExp:Ts,isFunction:fe,isStream:cs,isURLSearchParams:fs,isTypedArray:_s,isFileList:ls,forEach:ct,merge:Ar,extend:gs,trim:ys,stripBOM:bs,inherits:xs,toFlatObject:vs,kindOf:Mt,kindOfTest:ye,endsWith:ws,toArray:Ss,forEachEntry:Ps,matchAll:Os,isHTMLForm:Es,hasOwnProperty:mn,hasOwnProp:mn,reduceDescriptors:ko,freezeMethods:Cs,toObjectSet:As,toCamelCase:Rs,noop:ks,toFiniteNumber:js,findKey:Co,global:ke,isContextDefined:Ao,ALPHABET:jo,generateString:$s,isSpecCompliantForm:Is,toJSONObject:Ls,isAsyncFn:Ms,isThenable:Ns,setImmediate:$o,asap:Ds};function D(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}P.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const Io=D.prototype,Lo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Lo[e]={value:e}});Object.defineProperties(D,Lo);Object.defineProperty(Io,"isAxiosError",{value:!0});D.from=(e,t,r,n,o,i)=>{const s=Object.create(Io);return P.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),D.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Fs=null;function kr(e){return P.isPlainObject(e)||P.isArray(e)}function Mo(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function gn(e,t,r){return e?e.concat(t).map(function(o,i){return o=Mo(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function Us(e){return P.isArray(e)&&!e.some(kr)}const zs=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function Ft(e,t,r){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=P.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!P.isUndefined(g[f])});const n=r.metaTokens,o=r.visitor||d,i=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(P.isDate(y))return y.toISOString();if(!l&&P.isBlob(y))throw new D("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(y)||P.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,f,g){let b=y;if(y&&!g&&typeof y=="object"){if(P.endsWith(f,"{}"))f=n?f:f.slice(0,-2),y=JSON.stringify(y);else if(P.isArray(y)&&Us(y)||(P.isFileList(y)||P.endsWith(f,"[]"))&&(b=P.toArray(y)))return f=Mo(f),b.forEach(function(w,R){!(P.isUndefined(w)||w===null)&&t.append(s===!0?gn([f],R,i):s===null?f:f+"[]",u(w))}),!1}return kr(y)?!0:(t.append(gn(g,f,i),u(y)),!1)}const c=[],m=Object.assign(zs,{defaultVisitor:d,convertValue:u,isVisitable:kr});function O(y,f){if(!P.isUndefined(y)){if(c.indexOf(y)!==-1)throw Error("Circular reference detected in "+f.join("."));c.push(y),P.forEach(y,function(b,_){(!(P.isUndefined(b)||b===null)&&o.call(t,b,P.isString(_)?_.trim():_,f,m))===!0&&O(b,f?f.concat(_):[_])}),c.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return O(e),t}function bn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Wr(e,t){this._pairs=[],e&&Ft(e,this,t)}const No=Wr.prototype;No.append=function(t,r){this._pairs.push([t,r])};No.toString=function(t){const r=t?function(n){return t.call(this,n,bn)}:bn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Bs(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Do(e,t,r){if(!t)return e;const n=r&&r.encode||Bs;P.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(o?i=o(t,r):i=P.isURLSearchParams(t)?t.toString():new Wr(t,r).toString(n),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class xn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Fo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qs=typeof URLSearchParams<"u"?URLSearchParams:Wr,Hs=typeof FormData<"u"?FormData:null,Vs=typeof Blob<"u"?Blob:null,Ws={isBrowser:!0,classes:{URLSearchParams:qs,FormData:Hs,Blob:Vs},protocols:["http","https","file","blob","url","data"]},Kr=typeof window<"u"&&typeof document<"u",jr=typeof navigator=="object"&&navigator||void 0,Ks=Kr&&(!jr||["ReactNative","NativeScript","NS"].indexOf(jr.product)<0),Ys=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Gs=Kr&&window.location.href||"http://localhost",Js=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kr,hasStandardBrowserEnv:Ks,hasStandardBrowserWebWorkerEnv:Ys,navigator:jr,origin:Gs},Symbol.toStringTag,{value:"Module"})),se={...Js,...Ws};function Xs(e,t){return Ft(e,new se.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return se.isNode&&P.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Zs(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qs(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Uo(e){function t(r,n,o,i){let s=r[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=r.length;return s=!s&&P.isArray(o)?o.length:s,l?(P.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!a):((!o[s]||!P.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],i)&&P.isArray(o[s])&&(o[s]=Qs(o[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const r={};return P.forEachEntry(e,(n,o)=>{t(Zs(n),o,r,0)}),r}return null}function ea(e,t,r){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const ut={transitional:Fo,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o?JSON.stringify(Uo(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Xs(t,this.formSerializer).toString();if((a=P.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ft(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),ea(t)):t}],transformResponse:[function(t){const r=this.transitional||ut.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(n&&!this.responseType||o)){const s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?D.from(a,D.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:se.classes.FormData,Blob:se.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{ut.headers[e]={}});const ta=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ra=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&ta[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},vn=Symbol("internals");function Je(e){return e&&String(e).trim().toLowerCase()}function Et(e){return e===!1||e==null?e:P.isArray(e)?e.map(Et):String(e)}function na(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const oa=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function or(e,t,r,n,o){if(P.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!P.isString(t)){if(P.isString(n))return t.indexOf(n)!==-1;if(P.isRegExp(n))return n.test(t)}}function ia(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function sa(e,t){const r=P.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,s){return this[n].call(this,t,o,i,s)},configurable:!0})})}class ae{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(a,l,u){const d=Je(l);if(!d)throw new Error("header name must be a non-empty string");const c=P.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=Et(a))}const s=(a,l)=>P.forEach(a,(u,d)=>i(u,d,l));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(P.isString(t)&&(t=t.trim())&&!oa(t))s(ra(t),r);else if(P.isHeaders(t))for(const[a,l]of t.entries())i(l,a,n);else t!=null&&i(r,t,n);return this}get(t,r){if(t=Je(t),t){const n=P.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return na(o);if(P.isFunction(r))return r.call(this,o,n);if(P.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Je(t),t){const n=P.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||or(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(s){if(s=Je(s),s){const a=P.findKey(n,s);a&&(!r||or(n,n[a],a,r))&&(delete n[a],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||or(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return P.forEach(this,(o,i)=>{const s=P.findKey(n,i);if(s){r[s]=Et(o),delete r[i];return}const a=t?ia(i):String(i).trim();a!==i&&delete r[i],r[a]=Et(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return P.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&P.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[vn]=this[vn]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Je(s);n[a]||(sa(o,s),n[a]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}}ae.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(ae.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});P.freezeMethods(ae);function ir(e,t){const r=this||ut,n=t||r,o=ae.from(n.headers);let i=n.data;return P.forEach(e,function(a){i=a.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function zo(e){return!!(e&&e.__CANCEL__)}function We(e,t,r){D.call(this,e??"canceled",D.ERR_CANCELED,t,r),this.name="CanceledError"}P.inherits(We,D,{__CANCEL__:!0});function Bo(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new D("Request failed with status code "+r.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function aa(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function la(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=n[i];s||(s=u),r[o]=l,n[o]=u;let c=i,m=0;for(;c!==o;)m+=r[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const O=d&&u-d;return O?Math.round(m*1e3/O):void 0}}function ca(e,t){let r=0,n=1e3/t,o,i;const s=(u,d=Date.now())=>{r=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),c=d-r;c>=n?s(u,d):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},n-c)))},()=>o&&s(o)]}const kt=(e,t,r=3)=>{let n=0;const o=la(50,250);return ca(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=s-n,u=o(l),d=s<=a;n=s;const c={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(c)},r)},wn=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Sn=e=>(...t)=>P.asap(()=>e(...t)),ua=se.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,se.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(se.origin),se.navigator&&/(msie|trident)/i.test(se.navigator.userAgent)):()=>!0,fa=se.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const s=[e+"="+encodeURIComponent(t)];P.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),P.isString(n)&&s.push("path="+n),P.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function da(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function pa(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function qo(e,t){return e&&!da(t)?pa(e,t):t}const _n=e=>e instanceof ae?{...e}:e;function $e(e,t){t=t||{};const r={};function n(u,d,c,m){return P.isPlainObject(u)&&P.isPlainObject(d)?P.merge.call({caseless:m},u,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function o(u,d,c,m){if(P.isUndefined(d)){if(!P.isUndefined(u))return n(void 0,u,c,m)}else return n(u,d,c,m)}function i(u,d){if(!P.isUndefined(d))return n(void 0,d)}function s(u,d){if(P.isUndefined(d)){if(!P.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function a(u,d,c){if(c in t)return n(u,d);if(c in e)return n(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d,c)=>o(_n(u),_n(d),c,!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=l[d]||o,m=c(e[d],t[d],d);P.isUndefined(m)&&c!==a||(r[d]=m)}),r}const Ho=e=>{const t=$e({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;t.headers=s=ae.from(s),t.url=Do(qo(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(P.isFormData(r)){if(se.hasStandardBrowserEnv||se.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...d]=l?l.split(";").map(c=>c.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(se.hasStandardBrowserEnv&&(n&&P.isFunction(n)&&(n=n(t)),n||n!==!1&&ua(t.url))){const u=o&&i&&fa.read(i);u&&s.set(o,u)}return t},ha=typeof XMLHttpRequest<"u",ma=ha&&function(e){return new Promise(function(r,n){const o=Ho(e);let i=o.data;const s=ae.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=o,d,c,m,O,y;function f(){O&&O(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let g=new XMLHttpRequest;g.open(o.method.toUpperCase(),o.url,!0),g.timeout=o.timeout;function b(){if(!g)return;const w=ae.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:w,config:e,request:g};Bo(function(h){r(h),f()},function(h){n(h),f()},p),g=null}"onloadend"in g?g.onloadend=b:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(b)},g.onabort=function(){g&&(n(new D("Request aborted",D.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const p=o.transitional||Fo;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),n(new D(R,p.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,g)),g=null},i===void 0&&s.setContentType(null),"setRequestHeader"in g&&P.forEach(s.toJSON(),function(R,p){g.setRequestHeader(p,R)}),P.isUndefined(o.withCredentials)||(g.withCredentials=!!o.withCredentials),a&&a!=="json"&&(g.responseType=o.responseType),u&&([m,y]=kt(u,!0),g.addEventListener("progress",m)),l&&g.upload&&([c,O]=kt(l),g.upload.addEventListener("progress",c),g.upload.addEventListener("loadend",O)),(o.cancelToken||o.signal)&&(d=w=>{g&&(n(!w||w.type?new We(null,e,g):w),g.abort(),g=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const _=aa(o.url);if(_&&se.protocols.indexOf(_)===-1){n(new D("Unsupported protocol "+_+":",D.ERR_BAD_REQUEST,e));return}g.send(i||null)})},ya=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const i=function(u){if(!o){o=!0,a();const d=u instanceof Error?u:this.reason;n.abort(d instanceof D?d:new We(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new D(`timeout ${t} of ms exceeded`,D.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=()=>P.asap(a),l}},ga=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},ba=async function*(e,t){for await(const r of xa(e))yield*ga(r,t)},xa=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Pn=(e,t,r,n)=>{const o=ba(e,t);let i=0,s,a=l=>{s||(s=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await o.next();if(u){a(),l.close();return}let c=d.byteLength;if(r){let m=i+=c;r(m)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},Ut=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vo=Ut&&typeof ReadableStream=="function",va=Ut&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Wo=(e,...t)=>{try{return!!e(...t)}catch{return!1}},wa=Vo&&Wo(()=>{let e=!1;const t=new Request(se.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),On=64*1024,$r=Vo&&Wo(()=>P.isReadableStream(new Response("").body)),jt={stream:$r&&(e=>e.body)};Ut&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!jt[t]&&(jt[t]=P.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new D(`Response type '${t}' is not supported`,D.ERR_NOT_SUPPORT,n)})})})(new Response);const Sa=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(se.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await va(e)).byteLength},_a=async(e,t)=>{const r=P.toFiniteNumber(e.getContentLength());return r??Sa(t)},Pa=Ut&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:d,withCredentials:c="same-origin",fetchOptions:m}=Ho(e);u=u?(u+"").toLowerCase():"text";let O=ya([o,i&&i.toAbortSignal()],s),y;const f=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let g;try{if(l&&wa&&r!=="get"&&r!=="head"&&(g=await _a(d,n))!==0){let p=new Request(t,{method:"POST",body:n,duplex:"half"}),C;if(P.isFormData(n)&&(C=p.headers.get("content-type"))&&d.setContentType(C),p.body){const[h,S]=wn(g,kt(Sn(l)));n=Pn(p.body,On,h,S)}}P.isString(c)||(c=c?"include":"omit");const b="credentials"in Request.prototype;y=new Request(t,{...m,signal:O,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:b?c:void 0});let _=await fetch(y);const w=$r&&(u==="stream"||u==="response");if($r&&(a||w&&f)){const p={};["status","statusText","headers"].forEach(x=>{p[x]=_[x]});const C=P.toFiniteNumber(_.headers.get("content-length")),[h,S]=a&&wn(C,kt(Sn(a),!0))||[];_=new Response(Pn(_.body,On,h,()=>{S&&S(),f&&f()}),p)}u=u||"text";let R=await jt[P.findKey(jt,u)||"text"](_,e);return!w&&f&&f(),await new Promise((p,C)=>{Bo(p,C,{data:R,headers:ae.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:y})})}catch(b){throw f&&f(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,e,y),{cause:b.cause||b}):D.from(b,b&&b.code,e,y)}}),Ir={http:Fs,xhr:ma,fetch:Pa};P.forEach(Ir,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const En=e=>`- ${e}`,Oa=e=>P.isFunction(e)||e===null||e===!1,Ko={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let s;if(n=r,!Oa(r)&&(n=Ir[(s=String(r)).toLowerCase()],n===void 0))throw new D(`Unknown adapter '${s}'`);if(n)break;o[s||"#"+i]=n}if(!n){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(En).join(`
`):" "+En(i[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:Ir};function sr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new We(null,e)}function Rn(e){return sr(e),e.headers=ae.from(e.headers),e.data=ir.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ko.getAdapter(e.adapter||ut.adapter)(e).then(function(n){return sr(e),n.data=ir.call(e,e.transformResponse,n),n.headers=ae.from(n.headers),n},function(n){return zo(n)||(sr(e),n&&n.response&&(n.response.data=ir.call(e,e.transformResponse,n.response),n.response.headers=ae.from(n.response.headers))),Promise.reject(n)})}const Yo="1.7.9",zt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{zt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Tn={};zt.transitional=function(t,r,n){function o(i,s){return"[Axios v"+Yo+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return(i,s,a)=>{if(t===!1)throw new D(o(s," has been removed"+(r?" in "+r:"")),D.ERR_DEPRECATED);return r&&!Tn[s]&&(Tn[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,a):!0}};zt.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Ea(e,t,r){if(typeof e!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new D("option "+i+" must be "+l,D.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}}const Rt={assertOptions:Ea,validators:zt},xe=Rt.validators;class je{constructor(t){this.defaults=t,this.interceptors={request:new xn,response:new xn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=$e(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&Rt.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),o!=null&&(P.isFunction(o)?r.paramsSerializer={serialize:o}:Rt.assertOptions(o,{encode:xe.function,serialize:xe.function},!0)),Rt.assertOptions(r,{baseUrl:xe.spelling("baseURL"),withXsrfToken:xe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=i&&P.merge(i.common,i[r.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),r.headers=ae.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(r)===!1||(l=l&&f.synchronous,a.unshift(f.fulfilled,f.rejected))});const u=[];this.interceptors.response.forEach(function(f){u.push(f.fulfilled,f.rejected)});let d,c=0,m;if(!l){const y=[Rn.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),m=y.length,d=Promise.resolve(r);c<m;)d=d.then(y[c++],y[c++]);return d}m=a.length;let O=r;for(c=0;c<m;){const y=a[c++],f=a[c++];try{O=y(O)}catch(g){f.call(this,g);break}}try{d=Rn.call(this,O)}catch(y){return Promise.reject(y)}for(c=0,m=u.length;c<m;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=$e(this.defaults,t);const r=qo(t.baseURL,t.url);return Do(r,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){je.prototype[t]=function(r,n){return this.request($e(n||{},{method:t,url:r,data:(n||{}).data}))}});P.forEach(["post","put","patch"],function(t){function r(n){return function(i,s,a){return this.request($e(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}je.prototype[t]=r(),je.prototype[t+"Form"]=r(!0)});class Yr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{n.subscribe(a),i=a}).then(o);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i,s,a){n.reason||(n.reason=new We(i,s,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Yr(function(o){t=o}),cancel:t}}}function Ra(e){return function(r){return e.apply(null,r)}}function Ta(e){return P.isObject(e)&&e.isAxiosError===!0}const Lr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lr).forEach(([e,t])=>{Lr[t]=e});function Go(e){const t=new je(e),r=Eo(je.prototype.request,t);return P.extend(r,je.prototype,t,{allOwnKeys:!0}),P.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Go($e(e,o))},r}const G=Go(ut);G.Axios=je;G.CanceledError=We;G.CancelToken=Yr;G.isCancel=zo;G.VERSION=Yo;G.toFormData=Ft;G.AxiosError=D;G.Cancel=G.CanceledError;G.all=function(t){return Promise.all(t)};G.spread=Ra;G.isAxiosError=Ta;G.mergeConfig=$e;G.AxiosHeaders=ae;G.formToJSON=e=>Uo(P.isHTMLForm(e)?new FormData(e):e);G.getAdapter=Ko.getAdapter;G.HttpStatusCode=Lr;G.default=G;const Qe="https://6780d27b85151f714b080be6.mockapi.io/videos/videos",Ca="modulepreload",Aa=function(e){return"/trailerflix/"+e},Cn={},ka=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(l=>{if(l=Aa(l),l in Cn)return;Cn[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Ca,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((m,O)=>{c.addEventListener("load",m),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var ar,An;function Jo(){if(An)return ar;An=1;var e=function(_){return t(_)&&!r(_)};function t(b){return!!b&&typeof b=="object"}function r(b){var _=Object.prototype.toString.call(b);return _==="[object RegExp]"||_==="[object Date]"||i(b)}var n=typeof Symbol=="function"&&Symbol.for,o=n?Symbol.for("react.element"):60103;function i(b){return b.$$typeof===o}function s(b){return Array.isArray(b)?[]:{}}function a(b,_){return _.clone!==!1&&_.isMergeableObject(b)?f(s(b),b,_):b}function l(b,_,w){return b.concat(_).map(function(R){return a(R,w)})}function u(b,_){if(!_.customMerge)return f;var w=_.customMerge(b);return typeof w=="function"?w:f}function d(b){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(b).filter(function(_){return Object.propertyIsEnumerable.call(b,_)}):[]}function c(b){return Object.keys(b).concat(d(b))}function m(b,_){try{return _ in b}catch{return!1}}function O(b,_){return m(b,_)&&!(Object.hasOwnProperty.call(b,_)&&Object.propertyIsEnumerable.call(b,_))}function y(b,_,w){var R={};return w.isMergeableObject(b)&&c(b).forEach(function(p){R[p]=a(b[p],w)}),c(_).forEach(function(p){O(b,p)||(m(b,p)&&w.isMergeableObject(_[p])?R[p]=u(p,w)(b[p],_[p],w):R[p]=a(_[p],w))}),R}function f(b,_,w){w=w||{},w.arrayMerge=w.arrayMerge||l,w.isMergeableObject=w.isMergeableObject||e,w.cloneUnlessOtherwiseSpecified=a;var R=Array.isArray(_),p=Array.isArray(b),C=R===p;return C?R?w.arrayMerge(b,_,w):y(b,_,w):a(_,w)}f.all=function(_,w){if(!Array.isArray(_))throw new Error("first argument should be an array");return _.reduce(function(R,p){return f(R,p,w)},{})};var g=f;return ar=g,ar}var kn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ja(e,t){return!!(e===t||kn(e)&&kn(t))}function $a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ja(e[r],t[r]))return!1;return!0}function Ia(e,t){t===void 0&&(t=$a);var r,n=[],o,i=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&t(a,n)||(o=e.apply(this,a),i=!0,r=this,n=a),o}return s}const La=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"})),Ma=Ee(La);var lr,jn;function Xo(){if(jn)return lr;jn=1;var e=typeof Element<"u",t=typeof Map=="function",r=typeof Set=="function",n=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(i,s){if(i===s)return!0;if(i&&s&&typeof i=="object"&&typeof s=="object"){if(i.constructor!==s.constructor)return!1;var a,l,u;if(Array.isArray(i)){if(a=i.length,a!=s.length)return!1;for(l=a;l--!==0;)if(!o(i[l],s[l]))return!1;return!0}var d;if(t&&i instanceof Map&&s instanceof Map){if(i.size!==s.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;for(d=i.entries();!(l=d.next()).done;)if(!o(l.value[1],s.get(l.value[0])))return!1;return!0}if(r&&i instanceof Set&&s instanceof Set){if(i.size!==s.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(s)){if(a=i.length,a!=s.length)return!1;for(l=a;l--!==0;)if(i[l]!==s[l])return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf&&typeof i.valueOf=="function"&&typeof s.valueOf=="function")return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString&&typeof i.toString=="function"&&typeof s.toString=="function")return i.toString()===s.toString();if(u=Object.keys(i),a=u.length,a!==Object.keys(s).length)return!1;for(l=a;l--!==0;)if(!Object.prototype.hasOwnProperty.call(s,u[l]))return!1;if(e&&i instanceof Element)return!1;for(l=a;l--!==0;)if(!((u[l]==="_owner"||u[l]==="__v"||u[l]==="__o")&&i.$$typeof)&&!o(i[u[l]],s[u[l]]))return!1;return!0}return i!==i&&s!==s}return lr=function(s,a){try{return o(s,a)}catch(l){if((l.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw l}},lr}var cr={exports:{}},ur,$n;function Na(){if($n)return ur;$n=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ur=e,ur}var fr,In;function Da(){if(In)return fr;In=1;var e=Na();function t(){}function r(){}return r.resetWarningCache=t,fr=function(){function n(s,a,l,u,d,c){if(c!==e){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}n.isRequired=n;function o(){return n}var i={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:t};return i.PropTypes=i,i},fr}var Ln;function Fa(){return Ln||(Ln=1,cr.exports=Da()()),cr.exports}var dr,Mn;function Zo(){if(Mn)return dr;Mn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(S,x)=>{for(var E in x)t(S,E,{get:x[E],enumerable:!0})},a=(S,x,E,A)=>{if(x&&typeof x=="object"||typeof x=="function")for(let I of n(x))!i.call(S,I)&&I!==E&&t(S,I,{get:()=>x[I],enumerable:!(A=r(x,I))||A.enumerable});return S},l=(S,x,E)=>(E=S!=null?e(o(S)):{},a(!S||!S.__esModule?t(E,"default",{value:S,enumerable:!0}):E,S)),u=S=>a(t({},"__esModule",{value:!0}),S),d={};s(d,{defaultProps:()=>h,propTypes:()=>p}),dr=u(d);var c=l(Fa());const{string:m,bool:O,number:y,array:f,oneOfType:g,shape:b,object:_,func:w,node:R}=c.default,p={url:g([m,f,_]),playing:O,loop:O,controls:O,volume:y,muted:O,playbackRate:y,width:g([m,y]),height:g([m,y]),style:_,progressInterval:y,playsinline:O,pip:O,stopOnUnmount:O,light:g([O,m,_]),playIcon:R,previewTabIndex:y,previewAriaLabel:m,fallback:R,oEmbedUrl:m,wrapper:g([m,w,b({render:w.isRequired})]),config:b({soundcloud:b({options:_}),youtube:b({playerVars:_,embedOptions:_,onUnstarted:w}),facebook:b({appId:m,version:m,playerId:m,attributes:_}),dailymotion:b({params:_}),vimeo:b({playerOptions:_,title:m}),mux:b({attributes:_,version:m}),file:b({attributes:_,tracks:f,forceVideo:O,forceAudio:O,forceHLS:O,forceSafariHLS:O,forceDisableHls:O,forceDASH:O,forceFLV:O,hlsOptions:_,hlsVersion:m,dashVersion:m,flvVersion:m}),wistia:b({options:_,playerId:m,customControls:f}),mixcloud:b({options:_}),twitch:b({options:_,playerId:m}),vidyard:b({options:_})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},C=()=>{},h={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:C},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:C,onStart:C,onPlay:C,onPause:C,onBuffer:C,onBufferEnd:C,onEnded:C,onError:C,onDuration:C,onSeek:C,onPlaybackRateChange:C,onPlaybackQualityChange:C,onProgress:C,onClickPreview:C,onEnablePIP:C,onDisablePIP:C};return dr}var pr,Nn;function Ua(){if(Nn)return pr;Nn=1,pr=function(o,i,s){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("script");typeof i=="function"&&(s=i,i={}),i=i||{},s=s||function(){},l.type=i.type||"text/javascript",l.charset=i.charset||"utf8",l.async="async"in i?!!i.async:!0,l.src=o,i.attrs&&e(l,i.attrs),i.text&&(l.text=""+i.text);var u="onload"in l?t:r;u(l,s),l.onload||t(l,s),a.appendChild(l)};function e(n,o){for(var i in o)n.setAttribute(i,o[i])}function t(n,o){n.onload=function(){this.onerror=this.onload=null,o(null,n)},n.onerror=function(){this.onerror=this.onload=null,o(new Error("Failed to load "+this.src),n)}}function r(n,o){n.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,o(null,n))}}return pr}var hr,Dn;function Bt(){if(Dn)return hr;Dn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(j,M)=>{for(var F in M)t(j,F,{get:M[F],enumerable:!0})},a=(j,M,F,U)=>{if(M&&typeof M=="object"||typeof M=="function")for(let re of n(M))!i.call(j,re)&&re!==F&&t(j,re,{get:()=>M[re],enumerable:!(U=r(M,re))||U.enumerable});return j},l=(j,M,F)=>(F=j!=null?e(o(j)):{},a(!j||!j.__esModule?t(F,"default",{value:j,enumerable:!0}):F,j)),u=j=>a(t({},"__esModule",{value:!0}),j),d={};s(d,{callPlayer:()=>T,getConfig:()=>I,getSDK:()=>A,isBlobUrl:()=>W,isMediaStream:()=>$,lazy:()=>y,omit:()=>L,parseEndTime:()=>C,parseStartTime:()=>p,queryString:()=>S,randomString:()=>h,supportsWebKitPresentationMode:()=>ee}),hr=u(d);var c=l(at()),m=l(Ua()),O=l(Jo());const y=j=>c.default.lazy(async()=>{const M=await j();return typeof M.default=="function"?M:M.default}),f=/[?&#](?:start|t)=([0-9hms]+)/,g=/[?&#]end=([0-9hms]+)/,b=/(\d+)(h|m|s)/g,_=/^\d+$/;function w(j,M){if(j instanceof Array)return;const F=j.match(M);if(F){const U=F[1];if(U.match(b))return R(U);if(_.test(U))return parseInt(U)}}function R(j){let M=0,F=b.exec(j);for(;F!==null;){const[,U,re]=F;re==="h"&&(M+=parseInt(U,10)*60*60),re==="m"&&(M+=parseInt(U,10)*60),re==="s"&&(M+=parseInt(U,10)),F=b.exec(j)}return M}function p(j){return w(j,f)}function C(j){return w(j,g)}function h(){return Math.random().toString(36).substr(2,5)}function S(j){return Object.keys(j).map(M=>`${M}=${j[M]}`).join("&")}function x(j){return window[j]?window[j]:window.exports&&window.exports[j]?window.exports[j]:window.module&&window.module.exports&&window.module.exports[j]?window.module.exports[j]:null}const E={},A=function(M,F,U=null,re=()=>!0,ge=m.default){const Re=x(F);return Re&&re(Re)?Promise.resolve(Re):new Promise((ne,pe)=>{if(E[M]){E[M].push({resolve:ne,reject:pe});return}E[M]=[{resolve:ne,reject:pe}];const Le=ce=>{E[M].forEach(Me=>Me.resolve(ce))};if(U){const ce=window[U];window[U]=function(){ce&&ce(),Le(x(F))}}ge(M,ce=>{ce?(E[M].forEach(Me=>Me.reject(ce)),E[M]=null):U||Le(x(F))})})};function I(j,M){return(0,O.default)(M.config,j.config)}function L(j,...M){const F=[].concat(...M),U={},re=Object.keys(j);for(const ge of re)F.indexOf(ge)===-1&&(U[ge]=j[ge]);return U}function T(j,...M){if(!this.player||!this.player[j]){let F=`ReactPlayer: ${this.constructor.displayName} player could not call %c${j}%c – `;return this.player?this.player[j]||(F+="The method was not available"):F+="The player was not available",console.warn(F,"font-weight: bold",""),null}return this.player[j](...M)}function $(j){return typeof window<"u"&&typeof window.MediaStream<"u"&&j instanceof window.MediaStream}function W(j){return/^blob:/.test(j)}function ee(j=document.createElement("video")){const M=/iPhone|iPod/.test(navigator.userAgent)===!1;return j.webkitSupportsPresentationMode&&typeof j.webkitSetPresentationMode=="function"&&M}function te(j){return j}return hr}var mr,Fn;function za(){if(Fn)return mr;Fn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(w,R,p)=>R in w?t(w,R,{enumerable:!0,configurable:!0,writable:!0,value:p}):w[R]=p,a=(w,R)=>{for(var p in R)t(w,p,{get:R[p],enumerable:!0})},l=(w,R,p,C)=>{if(R&&typeof R=="object"||typeof R=="function")for(let h of n(R))!i.call(w,h)&&h!==p&&t(w,h,{get:()=>R[h],enumerable:!(C=r(R,h))||C.enumerable});return w},u=(w,R,p)=>(p=w!=null?e(o(w)):{},l(!w||!w.__esModule?t(p,"default",{value:w,enumerable:!0}):p,w)),d=w=>l(t({},"__esModule",{value:!0}),w),c=(w,R,p)=>(s(w,typeof R!="symbol"?R+"":R,p),p),m={};a(m,{default:()=>_}),mr=d(m);var O=u(at()),y=u(Xo()),f=Zo(),g=Bt();const b=5e3;class _ extends O.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"isReady",!1),c(this,"isPlaying",!1),c(this,"isLoading",!0),c(this,"loadOnReady",null),c(this,"startOnPlay",!0),c(this,"seekOnPlay",null),c(this,"onDurationCalled",!1),c(this,"handlePlayerMount",R=>{if(this.player){this.progress();return}this.player=R,this.player.load(this.props.url),this.progress()}),c(this,"getInternalPlayer",R=>this.player?this.player[R]:null),c(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const R=this.getCurrentTime()||0,p=this.getSecondsLoaded(),C=this.getDuration();if(C){const h={playedSeconds:R,played:R/C};p!==null&&(h.loadedSeconds=p,h.loaded=p/C),(h.playedSeconds!==this.prevPlayed||h.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(h),this.prevPlayed=h.playedSeconds,this.prevLoaded=h.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),c(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:R,playing:p,volume:C,muted:h}=this.props;R(),!h&&C!==null&&this.player.setVolume(C),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):p&&this.player.play(),this.handleDurationCheck()}),c(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:R,onPlay:p,playbackRate:C}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&C!==1&&this.player.setPlaybackRate(C),R(),this.startOnPlay=!1),p(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),c(this,"handlePause",R=>{this.isPlaying=!1,this.isLoading||this.props.onPause(R)}),c(this,"handleEnded",()=>{const{activePlayer:R,loop:p,onEnded:C}=this.props;R.loopOnEnded&&p&&this.seekTo(0),p||(this.isPlaying=!1,C())}),c(this,"handleError",(...R)=>{this.isLoading=!1,this.props.onError(...R)}),c(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const R=this.getDuration();R?this.onDurationCalled||(this.props.onDuration(R),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),c(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(R){if(!this.player)return;const{url:p,playing:C,volume:h,muted:S,playbackRate:x,pip:E,loop:A,activePlayer:I,disableDeferredLoading:L}=this.props;if(!(0,y.default)(R.url,p)){if(this.isLoading&&!I.forceLoad&&!L&&!(0,g.isMediaStream)(p)){console.warn(`ReactPlayer: the attempt to load ${p} is being deferred until the player has loaded`),this.loadOnReady=p;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(p,this.isReady)}!R.playing&&C&&!this.isPlaying&&this.player.play(),R.playing&&!C&&this.isPlaying&&this.player.pause(),!R.pip&&E&&this.player.enablePIP&&this.player.enablePIP(),R.pip&&!E&&this.player.disablePIP&&this.player.disablePIP(),R.volume!==h&&h!==null&&this.player.setVolume(h),R.muted!==S&&(S?this.player.mute():(this.player.unmute(),h!==null&&setTimeout(()=>this.player.setVolume(h)))),R.playbackRate!==x&&this.player.setPlaybackRate&&this.player.setPlaybackRate(x),R.loop!==A&&this.player.setLoop&&this.player.setLoop(A)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(R,p,C){if(!this.isReady){R!==0&&(this.seekOnPlay=R,setTimeout(()=>{this.seekOnPlay=null},b));return}if(p?p==="fraction":R>0&&R<1){const S=this.player.getDuration();if(!S){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(S*R,C);return}this.player.seekTo(R,C)}render(){const R=this.props.activePlayer;return R?O.default.createElement(R,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}return c(_,"displayName","Player"),c(_,"propTypes",f.propTypes),c(_,"defaultProps",f.defaultProps),mr}var yr,Un;function Ba(){if(Un)return yr;Un=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(A,I,L)=>I in A?t(A,I,{enumerable:!0,configurable:!0,writable:!0,value:L}):A[I]=L,a=(A,I)=>{for(var L in I)t(A,L,{get:I[L],enumerable:!0})},l=(A,I,L,T)=>{if(I&&typeof I=="object"||typeof I=="function")for(let $ of n(I))!i.call(A,$)&&$!==L&&t(A,$,{get:()=>I[$],enumerable:!(T=r(I,$))||T.enumerable});return A},u=(A,I,L)=>(L=A!=null?e(o(A)):{},l(!A||!A.__esModule?t(L,"default",{value:A,enumerable:!0}):L,A)),d=A=>l(t({},"__esModule",{value:!0}),A),c=(A,I,L)=>(s(A,typeof I!="symbol"?I+"":I,L),L),m={};a(m,{createReactPlayer:()=>E}),yr=d(m);var O=u(at()),y=u(Jo()),f=u(Ma),g=u(Xo()),b=Zo(),_=Bt(),w=u(za());const R=(0,_.lazy)(()=>ka(()=>import("./Preview-CtkGHLhg.js").then(A=>A.P),__vite__mapDeps([0,1]))),p=typeof window<"u"&&window.document&&typeof document<"u",C=typeof tr<"u"&&tr.window&&tr.window.document,h=Object.keys(b.propTypes),S=p||C?O.Suspense:()=>null,x=[],E=(A,I)=>{var L;return L=class extends O.Component{constructor(){super(...arguments),c(this,"state",{showPreview:!!this.props.light}),c(this,"references",{wrapper:T=>{this.wrapper=T},player:T=>{this.player=T}}),c(this,"handleClickPreview",T=>{this.setState({showPreview:!1}),this.props.onClickPreview(T)}),c(this,"showPreview",()=>{this.setState({showPreview:!0})}),c(this,"getDuration",()=>this.player?this.player.getDuration():null),c(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),c(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),c(this,"getInternalPlayer",(T="player")=>this.player?this.player.getInternalPlayer(T):null),c(this,"seekTo",(T,$,W)=>{if(!this.player)return null;this.player.seekTo(T,$,W)}),c(this,"handleReady",()=>{this.props.onReady(this)}),c(this,"getActivePlayer",(0,f.default)(T=>{for(const $ of[...x,...A])if($.canPlay(T))return $;return I||null})),c(this,"getConfig",(0,f.default)((T,$)=>{const{config:W}=this.props;return y.default.all([b.defaultProps.config,b.defaultProps.config[$]||{},W,W[$]||{}])})),c(this,"getAttributes",(0,f.default)(T=>(0,_.omit)(this.props,h))),c(this,"renderActivePlayer",T=>{if(!T)return null;const $=this.getActivePlayer(T);if(!$)return null;const W=this.getConfig(T,$.key);return O.default.createElement(w.default,{...this.props,key:$.key,ref:this.references.player,config:W,activePlayer:$.lazyPlayer||$,onReady:this.handleReady})})}shouldComponentUpdate(T,$){return!(0,g.default)(this.props,T)||!(0,g.default)(this.state,$)}componentDidUpdate(T){const{light:$}=this.props;!T.light&&$&&this.setState({showPreview:!0}),T.light&&!$&&this.setState({showPreview:!1})}renderPreview(T){if(!T)return null;const{light:$,playIcon:W,previewTabIndex:ee,oEmbedUrl:te,previewAriaLabel:j}=this.props;return O.default.createElement(R,{url:T,light:$,playIcon:W,previewTabIndex:ee,previewAriaLabel:j,oEmbedUrl:te,onClick:this.handleClickPreview})}render(){const{url:T,style:$,width:W,height:ee,fallback:te,wrapper:j}=this.props,{showPreview:M}=this.state,F=this.getAttributes(T),U=typeof j=="string"?this.references.wrapper:void 0;return O.default.createElement(j,{ref:U,style:{...$,width:W,height:ee},...F},O.default.createElement(S,{fallback:te},M?this.renderPreview(T):this.renderActivePlayer(T)))}},c(L,"displayName","ReactPlayer"),c(L,"propTypes",b.propTypes),c(L,"defaultProps",b.defaultProps),c(L,"addCustomPlayer",T=>{x.push(T)}),c(L,"removeCustomPlayers",()=>{x.length=0}),c(L,"canPlay",T=>{for(const $ of[...x,...A])if($.canPlay(T))return!0;return!1}),c(L,"canEnablePIP",T=>{for(const $ of[...x,...A])if($.canEnablePIP&&$.canEnablePIP(T))return!0;return!1}),L};return yr}var gr,zn;function qa(){if(zn)return gr;zn=1;var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,o=(T,$)=>{for(var W in $)e(T,W,{get:$[W],enumerable:!0})},i=(T,$,W,ee)=>{if(typeof $=="object"||typeof $=="function")for(let te of r($))!n.call(T,te)&&te!==W&&e(T,te,{get:()=>$[te],enumerable:!(ee=t($,te))||ee.enumerable});return T},s=T=>i(e({},"__esModule",{value:!0}),T),a={};o(a,{AUDIO_EXTENSIONS:()=>h,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>A,HLS_EXTENSIONS:()=>x,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>O,MATCH_URL_FACEBOOK_WATCH:()=>y,MATCH_URL_KALTURA:()=>C,MATCH_URL_MIXCLOUD:()=>R,MATCH_URL_MUX:()=>m,MATCH_URL_SOUNDCLOUD:()=>d,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>_,MATCH_URL_TWITCH_VIDEO:()=>b,MATCH_URL_VIDYARD:()=>p,MATCH_URL_VIMEO:()=>c,MATCH_URL_WISTIA:()=>g,MATCH_URL_YOUTUBE:()=>u,VIDEO_EXTENSIONS:()=>S,canPlay:()=>L}),gr=s(a);var l=Bt();const u=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,d=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,c=/vimeo\.com\/(?!progressive_redirect).+/,m=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,O=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,y=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,g=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,b=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,_=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,R=/mixcloud\.com\/([^/]+\/[^/]+)/,p=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,C=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,h=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,S=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,x=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,A=/\.(flv)($|\?)/i,I=T=>{if(T instanceof Array){for(const $ of T)if(typeof $=="string"&&I($)||I($.src))return!0;return!1}return(0,l.isMediaStream)(T)||(0,l.isBlobUrl)(T)?!0:h.test(T)||S.test(T)||x.test(T)||E.test(T)||A.test(T)},L={youtube:T=>T instanceof Array?T.every($=>u.test($)):u.test(T),soundcloud:T=>d.test(T)&&!h.test(T),vimeo:T=>c.test(T)&&!S.test(T)&&!x.test(T),mux:T=>m.test(T),facebook:T=>O.test(T)||y.test(T),streamable:T=>f.test(T),wistia:T=>g.test(T),twitch:T=>b.test(T)||_.test(T),dailymotion:T=>w.test(T),mixcloud:T=>R.test(T),vidyard:T=>p.test(T),kaltura:T=>C.test(T),file:I};return gr}var br,Bn;function Ha(){if(Bn)return br;Bn=1;var e=Object.create,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,s=(S,x,E)=>x in S?t(S,x,{enumerable:!0,configurable:!0,writable:!0,value:E}):S[x]=E,a=(S,x)=>{for(var E in x)t(S,E,{get:x[E],enumerable:!0})},l=(S,x,E,A)=>{if(x&&typeof x=="object"||typeof x=="function")for(let I of n(x))!i.call(S,I)&&I!==E&&t(S,I,{get:()=>x[I],enumerable:!(A=r(x,I))||A.enumerable});return S},u=(S,x,E)=>(E=S!=null?e(o(S)):{},l(!S||!S.__esModule?t(E,"default",{value:S,enumerable:!0}):E,S)),d=S=>l(t({},"__esModule",{value:!0}),S),c=(S,x,E)=>(s(S,typeof x!="symbol"?x+"":x,E),E),m={};a(m,{default:()=>h}),br=d(m);var O=u(at()),y=Bt(),f=qa();const g="https://www.youtube.com/iframe_api",b="YT",_="onYouTubeIframeAPIReady",w=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,R=/user\/([a-zA-Z0-9_-]+)\/?/,p=/youtube-nocookie\.com/,C="https://www.youtube-nocookie.com";class h extends O.Component{constructor(){super(...arguments),c(this,"callPlayer",y.callPlayer),c(this,"parsePlaylist",x=>{if(x instanceof Array)return{listType:"playlist",playlist:x.map(this.getID).join(",")};if(w.test(x)){const[,E]=x.match(w);return{listType:"playlist",list:E.replace(/^UC/,"UU")}}if(R.test(x)){const[,E]=x.match(R);return{listType:"user_uploads",list:E}}return{}}),c(this,"onStateChange",x=>{const{data:E}=x,{onPlay:A,onPause:I,onBuffer:L,onBufferEnd:T,onEnded:$,onReady:W,loop:ee,config:{playerVars:te,onUnstarted:j}}=this.props,{UNSTARTED:M,PLAYING:F,PAUSED:U,BUFFERING:re,ENDED:ge,CUED:Re}=window[b].PlayerState;if(E===M&&j(),E===F&&(A(),T()),E===U&&I(),E===re&&L(),E===ge){const ne=!!this.callPlayer("getPlaylist");ee&&!ne&&(te.start?this.seekTo(te.start):this.play()),$()}E===Re&&W()}),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unMute")}),c(this,"ref",x=>{this.container=x})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(x){return!x||x instanceof Array||w.test(x)?null:x.match(f.MATCH_URL_YOUTUBE)[1]}load(x,E){const{playing:A,muted:I,playsinline:L,controls:T,loop:$,config:W,onError:ee}=this.props,{playerVars:te,embedOptions:j}=W,M=this.getID(x);if(E){if(w.test(x)||R.test(x)||x instanceof Array){this.player.loadPlaylist(this.parsePlaylist(x));return}this.player.cueVideoById({videoId:M,startSeconds:(0,y.parseStartTime)(x)||te.start,endSeconds:(0,y.parseEndTime)(x)||te.end});return}(0,y.getSDK)(g,b,_,F=>F.loaded).then(F=>{this.container&&(this.player=new F.Player(this.container,{width:"100%",height:"100%",videoId:M,playerVars:{autoplay:A?1:0,mute:I?1:0,controls:T?1:0,start:(0,y.parseStartTime)(x),end:(0,y.parseEndTime)(x),origin:window.location.origin,playsinline:L?1:0,...this.parsePlaylist(x),...te},events:{onReady:()=>{$&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:U=>this.props.onPlaybackRateChange(U.data),onPlaybackQualityChange:U=>this.props.onPlaybackQualityChange(U),onStateChange:this.onStateChange,onError:U=>ee(U.data)},host:p.test(x)?C:void 0,...j}))},ee),j.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(x,E=!1){this.callPlayer("seekTo",x),!E&&!this.props.playing&&this.pause()}setVolume(x){this.callPlayer("setVolume",x*100)}setPlaybackRate(x){this.callPlayer("setPlaybackRate",x)}setLoop(x){this.callPlayer("setLoop",x)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:x}=this.props,E={width:"100%",height:"100%",display:x};return O.default.createElement("div",{style:E},O.default.createElement("div",{ref:this.ref}))}}return c(h,"displayName","YouTube"),c(h,"canPlay",f.canPlay.youtube),br}var xr,qn;function Va(){if(qn)return xr;qn=1;var e=Ba().createReactPlayer,t=Ha().default;return xr=e([{key:"youtube",canPlay:t.canPlay,lazyPlayer:t}]),xr}var Wa=Va();const Ka=Oo(Wa),vr=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  border-radius: inherit;
  overflow: hidden;
  background: #13111b;
`,Ya=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Ga=k.button`
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
`,Ja=k.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 25px;
  border-color: transparent transparent transparent #ffffff;
  margin-left: 5px;
`,Xa=k.div`
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
`,Hn=k.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1625;
  color: #ff6b6b;
  padding: 1rem;
  text-align: center;
`,Qo=({url:e,playing:t=!1,controls:r=!0,muted:n=!0,light:o=!0})=>{const[i,s]=N.useState(!1),[a,l]=N.useState(t),d=(y=>{if(!y)return null;try{const f=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,g=y.match(f);return g&&g[2].length===11?g[2]:null}catch(f){return console.error("Error extracting YouTube ID:",f),null}})(e),c=d?`https://img.youtube.com/vi/${d}/maxresdefault.jpg`:null,m=()=>{console.error("Error loading video:",e),s(!0)},O=()=>{l(!0)};return e?i?v.jsx(vr,{children:v.jsx(Hn,{children:"Error al cargar el video"})}):v.jsx(vr,{children:v.jsx(Ya,{children:!a&&o&&c?v.jsxs(v.Fragment,{children:[v.jsx(Xa,{src:c}),v.jsx(Ga,{onClick:O,children:v.jsx(Ja,{})})]}):v.jsx(Ka,{url:e,width:"100%",height:"100%",playing:a,controls:r,muted:n,onError:m,config:{youtube:{playerVars:{modestbranding:1,showinfo:0,rel:0,iv_load_policy:3,origin:window.location.origin}}}})})}):v.jsx(vr,{children:v.jsx(Hn,{children:"URL de video no válida"})})},Za=k.div`
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
`,Qa=k.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
`,el=k.button`
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
`,tl=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  z-index: 5;
`,rl=k.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`,nl=k.p`
  font-size: 1rem;
  color: #a8a8b3;
  margin: 0;
`,ol=({video:e,onClose:t})=>v.jsx(Za,{onClick:t,children:v.jsxs(Qa,{onClick:r=>r.stopPropagation(),children:[v.jsx(el,{onClick:t,children:"×"}),v.jsx(Qo,{url:e.url}),v.jsxs(tl,{children:[v.jsx(rl,{children:e.title}),v.jsx(nl,{children:e.description})]})]})});function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(null,arguments)}function Te(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ei(e){if(N.isValidElement(e)||!Te(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=ei(e[r])}),t}function Se(e,t,r={clone:!0}){const n=r.clone?H({},e):e;return Te(e)&&Te(t)&&Object.keys(t).forEach(o=>{N.isValidElement(t[o])?n[o]=t[o]:Te(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&Te(e[o])?n[o]=Se(e[o],t[o],r):r.clone?n[o]=Te(t[o])?ei(t[o]):t[o]:n[o]=t[o]}),n}const il=Object.freeze(Object.defineProperty({__proto__:null,default:Se,isPlainObject:Te},Symbol.toStringTag,{value:"Module"}));function rt(e){let t="https://mui.com/production-error/?code="+e;for(let r=1;r<arguments.length;r+=1)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const sl=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));var wr={exports:{}},V={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vn;function al(){if(Vn)return V;Vn=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),O=Symbol.for("react.client.reference");function y(f){if(typeof f=="object"&&f!==null){var g=f.$$typeof;switch(g){case e:switch(f=f.type,f){case r:case o:case n:case l:case u:return f;default:switch(f=f&&f.$$typeof,f){case s:case a:case c:case d:return f;case i:return f;default:return g}}case t:return g}}}return V.ContextConsumer=i,V.ContextProvider=s,V.Element=e,V.ForwardRef=a,V.Fragment=r,V.Lazy=c,V.Memo=d,V.Portal=t,V.Profiler=o,V.StrictMode=n,V.Suspense=l,V.SuspenseList=u,V.isContextConsumer=function(f){return y(f)===i},V.isContextProvider=function(f){return y(f)===s},V.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},V.isForwardRef=function(f){return y(f)===a},V.isFragment=function(f){return y(f)===r},V.isLazy=function(f){return y(f)===c},V.isMemo=function(f){return y(f)===d},V.isPortal=function(f){return y(f)===t},V.isProfiler=function(f){return y(f)===o},V.isStrictMode=function(f){return y(f)===n},V.isSuspense=function(f){return y(f)===l},V.isSuspenseList=function(f){return y(f)===u},V.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===o||f===n||f===l||f===u||f===m||typeof f=="object"&&f!==null&&(f.$$typeof===c||f.$$typeof===d||f.$$typeof===s||f.$$typeof===i||f.$$typeof===a||f.$$typeof===O||f.getModuleId!==void 0)},V.typeOf=y,V}var Wn;function ll(){return Wn||(Wn=1,wr.exports=al()),wr.exports}var Kn=ll();const cl=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function ti(e){const t=`${e}`.match(cl);return t&&t[1]||""}function ri(e,t=""){return e.displayName||e.name||ti(e)||t}function Yn(e,t,r){const n=ri(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function ul(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return ri(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Kn.ForwardRef:return Yn(e,e.render,"ForwardRef");case Kn.Memo:return Yn(e,e.type,"memo");default:return}}}const fl=Object.freeze(Object.defineProperty({__proto__:null,default:ul,getFunctionName:ti},Symbol.toStringTag,{value:"Module"}));function Ie(e){if(typeof e!="string")throw new Error(rt(7));return e.charAt(0).toUpperCase()+e.slice(1)}const dl=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));function Mr(e,t){const r=H({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=H({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const o=e[n]||{},i=t[n];r[n]={},!i||!Object.keys(i)?r[n]=o:!o||!Object.keys(o)?r[n]=i:(r[n]=H({},i),Object.keys(o).forEach(s=>{r[n][s]=Mr(o[s],i[s])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function pl(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),r&&r[s]&&i.push(r[s])}return i},[]).join(" ")}),n}const Gn=e=>e,hl=()=>{let e=Gn;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Gn}}},ml=hl(),yl={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ni(e,t,r="Mui"){const n=yl[t];return n?`${r}-${n}`:`${ml.generate(e)}-${t}`}function gl(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=ni(e,o,r)}),n}function bl(e,t=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,r))}const xl=Object.freeze(Object.defineProperty({__proto__:null,default:bl},Symbol.toStringTag,{value:"Module"}));function Ce(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function oi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=oi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function vl(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=oi(e))&&(n&&(n+=" "),n+=t);return n}const wl=N.createContext(void 0);function Sl(e){const{theme:t,name:r,props:n}=e;if(!t||!t.components||!t.components[r])return n;const o=t.components[r];return o.defaultProps?Mr(o.defaultProps,n):!o.styleOverrides&&!o.variants?Mr(o,n):n}function _l({props:e,name:t}){const r=N.useContext(wl);return Sl({props:e,name:t,theme:{components:r}})}function Pl(e){return _l(e)}var Ae={},Sr={exports:{}},Jn;function ii(){return Jn||(Jn=1,function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Sr)),Sr.exports}var _r={exports:{}},Xn;function Ol(){return Xn||(Xn=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)({}).hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(_r)),_r.exports}var Pr={exports:{}},Zn;function El(){return Zn||(Zn=1,function(e){function t(r,n){if(r==null)return{};var o={};for(var i in r)if({}.hasOwnProperty.call(r,i)){if(n.includes(i))continue;o[i]=r[i]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Pr)),Pr.exports}function Rl(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Tl(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Cl=function(){function e(r){var n=this;this._insertTag=function(o){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(o,i),n.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Tl(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Rl(o);try{i.insertRule(n,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var o;return(o=n.parentNode)==null?void 0:o.removeChild(n)}),this.tags=[],this.ctr=0},e}(),ie="-ms-",$t="-moz-",z="-webkit-",si="comm",Gr="rule",Jr="decl",Al="@import",ai="@keyframes",kl="@layer",jl=Math.abs,qt=String.fromCharCode,$l=Object.assign;function Il(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function li(e){return e.trim()}function Ll(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Nr(e,t){return e.indexOf(t)}function oe(e,t){return e.charCodeAt(t)|0}function nt(e,t,r){return e.slice(t,r)}function ve(e){return e.length}function Xr(e){return e.length}function xt(e,t){return t.push(e),e}function Ml(e,t){return e.map(t).join("")}var Ht=1,He=1,ci=0,le=0,Q=0,Ke="";function Vt(e,t,r,n,o,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ht,column:He,length:s,return:""}}function Xe(e,t){return $l(Vt("",null,null,"",null,null,0),e,{length:-e.length},t)}function Nl(){return Q}function Dl(){return Q=le>0?oe(Ke,--le):0,He--,Q===10&&(He=1,Ht--),Q}function de(){return Q=le<ci?oe(Ke,le++):0,He++,Q===10&&(He=1,Ht++),Q}function _e(){return oe(Ke,le)}function Tt(){return le}function ft(e,t){return nt(Ke,e,t)}function ot(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ui(e){return Ht=He=1,ci=ve(Ke=e),le=0,[]}function fi(e){return Ke="",e}function Ct(e){return li(ft(le-1,Dr(e===91?e+2:e===40?e+1:e)))}function Fl(e){for(;(Q=_e())&&Q<33;)de();return ot(e)>2||ot(Q)>3?"":" "}function Ul(e,t){for(;--t&&de()&&!(Q<48||Q>102||Q>57&&Q<65||Q>70&&Q<97););return ft(e,Tt()+(t<6&&_e()==32&&de()==32))}function Dr(e){for(;de();)switch(Q){case e:return le;case 34:case 39:e!==34&&e!==39&&Dr(Q);break;case 40:e===41&&Dr(e);break;case 92:de();break}return le}function zl(e,t){for(;de()&&e+Q!==57;)if(e+Q===84&&_e()===47)break;return"/*"+ft(t,le-1)+"*"+qt(e===47?e:de())}function Bl(e){for(;!ot(_e());)de();return ft(e,le)}function ql(e){return fi(At("",null,null,null,[""],e=ui(e),0,[0],e))}function At(e,t,r,n,o,i,s,a,l){for(var u=0,d=0,c=s,m=0,O=0,y=0,f=1,g=1,b=1,_=0,w="",R=o,p=i,C=n,h=w;g;)switch(y=_,_=de()){case 40:if(y!=108&&oe(h,c-1)==58){Nr(h+=B(Ct(_),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:h+=Ct(_);break;case 9:case 10:case 13:case 32:h+=Fl(y);break;case 92:h+=Ul(Tt()-1,7);continue;case 47:switch(_e()){case 42:case 47:xt(Hl(zl(de(),Tt()),t,r),l);break;default:h+="/"}break;case 123*f:a[u++]=ve(h)*b;case 125*f:case 59:case 0:switch(_){case 0:case 125:g=0;case 59+d:b==-1&&(h=B(h,/\f/g,"")),O>0&&ve(h)-c&&xt(O>32?eo(h+";",n,r,c-1):eo(B(h," ","")+";",n,r,c-2),l);break;case 59:h+=";";default:if(xt(C=Qn(h,t,r,u,d,o,a,w,R=[],p=[],c),i),_===123)if(d===0)At(h,t,C,C,R,i,c,a,p);else switch(m===99&&oe(h,3)===110?100:m){case 100:case 108:case 109:case 115:At(e,C,C,n&&xt(Qn(e,C,C,0,0,o,a,w,o,R=[],c),p),o,p,c,a,n?R:p);break;default:At(h,C,C,C,[""],p,0,a,p)}}u=d=O=0,f=b=1,w=h="",c=s;break;case 58:c=1+ve(h),O=y;default:if(f<1){if(_==123)--f;else if(_==125&&f++==0&&Dl()==125)continue}switch(h+=qt(_),_*f){case 38:b=d>0?1:(h+="\f",-1);break;case 44:a[u++]=(ve(h)-1)*b,b=1;break;case 64:_e()===45&&(h+=Ct(de())),m=_e(),d=c=ve(w=h+=Bl(Tt())),_++;break;case 45:y===45&&ve(h)==2&&(f=0)}}return i}function Qn(e,t,r,n,o,i,s,a,l,u,d){for(var c=o-1,m=o===0?i:[""],O=Xr(m),y=0,f=0,g=0;y<n;++y)for(var b=0,_=nt(e,c+1,c=jl(f=s[y])),w=e;b<O;++b)(w=li(f>0?m[b]+" "+_:B(_,/&\f/g,m[b])))&&(l[g++]=w);return Vt(e,t,r,o===0?Gr:a,l,u,d)}function Hl(e,t,r){return Vt(e,t,r,si,qt(Nl()),nt(e,2,-2),0)}function eo(e,t,r,n){return Vt(e,t,r,Jr,nt(e,0,n),nt(e,n+1,-1),n)}function Be(e,t){for(var r="",n=Xr(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Vl(e,t,r,n){switch(e.type){case kl:if(e.children.length)break;case Al:case Jr:return e.return=e.return||e.value;case si:return"";case ai:return e.return=e.value+"{"+Be(e.children,n)+"}";case Gr:e.value=e.props.join(",")}return ve(r=Be(e.children,n))?e.return=e.value+"{"+r+"}":""}function Wl(e){var t=Xr(e);return function(r,n,o,i){for(var s="",a=0;a<t;a++)s+=e[a](r,n,o,i)||"";return s}}function Kl(e){return function(t){t.root||(t=t.return)&&e(t)}}function di(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Yl=function(t,r,n){for(var o=0,i=0;o=i,i=_e(),o===38&&i===12&&(r[n]=1),!ot(i);)de();return ft(t,le)},Gl=function(t,r){var n=-1,o=44;do switch(ot(o)){case 0:o===38&&_e()===12&&(r[n]=1),t[n]+=Yl(le-1,r,n);break;case 2:t[n]+=Ct(o);break;case 4:if(o===44){t[++n]=_e()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=qt(o)}while(o=de());return t},Jl=function(t,r){return fi(Gl(ui(t),r))},to=new WeakMap,Xl=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,o=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!to.get(n))&&!o){to.set(t,!0);for(var i=[],s=Jl(r,i),a=n.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)t.props[u]=i[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},Zl=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function pi(e,t){switch(Il(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+$t+e+ie+e+e;case 6828:case 4268:return z+e+ie+e+e;case 6165:return z+e+ie+"flex-"+e+e;case 5187:return z+e+B(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+ie+"flex-$1$2")+e;case 5443:return z+e+ie+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return z+e+ie+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return z+e+ie+B(e,"shrink","negative")+e;case 5292:return z+e+ie+B(e,"basis","preferred-size")+e;case 6060:return z+"box-"+B(e,"-grow","")+z+e+ie+B(e,"grow","positive")+e;case 4554:return z+B(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ve(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+$t+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nr(e,"stretch")?pi(B(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(oe(e,t+1)!==115)break;case 6444:switch(oe(e,ve(e)-3-(~Nr(e,"!important")&&10))){case 107:return B(e,":",":"+z)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(oe(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+ie+"$2box$3")+e}break;case 5936:switch(oe(e,t+11)){case 114:return z+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+ie+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return z+e+ie+e+e}return e}var Ql=function(t,r,n,o){if(t.length>-1&&!t.return)switch(t.type){case Jr:t.return=pi(t.value,t.length);break;case ai:return Be([Xe(t,{value:B(t.value,"@","@"+z)})],o);case Gr:if(t.length)return Ml(t.props,function(i){switch(Ll(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Be([Xe(t,{props:[B(i,/:(read-\w+)/,":"+$t+"$1")]})],o);case"::placeholder":return Be([Xe(t,{props:[B(i,/:(plac\w+)/,":"+z+"input-$1")]}),Xe(t,{props:[B(i,/:(plac\w+)/,":"+$t+"$1")]}),Xe(t,{props:[B(i,/:(plac\w+)/,ie+"input-$1")]})],o)}return""})}},ec=[Ql],hi=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var o=t.stylisPlugins||ec,i={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),b=1;b<g.length;b++)i[g[b]]=!0;a.push(f)});var l,u=[Xl,Zl];{var d,c=[Vl,Kl(function(f){d.insert(f)})],m=Wl(u.concat(o,c)),O=function(g){return Be(ql(g),m)};l=function(g,b,_,w){d=_,O(g?g+"{"+b.styles+"}":b.styles),w&&(y.inserted[b.name]=!0)}}var y={key:r,sheet:new Cl({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return y.sheet.hydrate(a),y},Or={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro;function tc(){if(ro)return q;ro=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,c=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,O=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,_=e?Symbol.for("react.scope"):60119;function w(p){if(typeof p=="object"&&p!==null){var C=p.$$typeof;switch(C){case t:switch(p=p.type,p){case l:case u:case n:case i:case o:case c:return p;default:switch(p=p&&p.$$typeof,p){case a:case d:case y:case O:case s:return p;default:return C}}case r:return C}}}function R(p){return w(p)===u}return q.AsyncMode=l,q.ConcurrentMode=u,q.ContextConsumer=a,q.ContextProvider=s,q.Element=t,q.ForwardRef=d,q.Fragment=n,q.Lazy=y,q.Memo=O,q.Portal=r,q.Profiler=i,q.StrictMode=o,q.Suspense=c,q.isAsyncMode=function(p){return R(p)||w(p)===l},q.isConcurrentMode=R,q.isContextConsumer=function(p){return w(p)===a},q.isContextProvider=function(p){return w(p)===s},q.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===t},q.isForwardRef=function(p){return w(p)===d},q.isFragment=function(p){return w(p)===n},q.isLazy=function(p){return w(p)===y},q.isMemo=function(p){return w(p)===O},q.isPortal=function(p){return w(p)===r},q.isProfiler=function(p){return w(p)===i},q.isStrictMode=function(p){return w(p)===o},q.isSuspense=function(p){return w(p)===c},q.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===n||p===u||p===i||p===o||p===c||p===m||typeof p=="object"&&p!==null&&(p.$$typeof===y||p.$$typeof===O||p.$$typeof===s||p.$$typeof===a||p.$$typeof===d||p.$$typeof===g||p.$$typeof===b||p.$$typeof===_||p.$$typeof===f)},q.typeOf=w,q}var no;function rc(){return no||(no=1,Or.exports=tc()),Or.exports}var Er,oo;function nc(){if(oo)return Er;oo=1;var e=rc(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=n,i[e.Memo]=o;function s(y){return e.isMemo(y)?o:i[y.$$typeof]||t}var a=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,m=Object.prototype;function O(y,f,g){if(typeof f!="string"){if(m){var b=c(f);b&&b!==m&&O(y,b,g)}var _=l(f);u&&(_=_.concat(u(f)));for(var w=s(y),R=s(f),p=0;p<_.length;++p){var C=_[p];if(!r[C]&&!(g&&g[C])&&!(R&&R[C])&&!(w&&w[C])){var h=d(f,C);try{a(y,C,h)}catch{}}}}return y}return Er=O,Er}nc();var oc=!0;function mi(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(n+=o+" ")}),n}var Zr=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||oc===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},Qr=function(t,r,n){Zr(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var i=r;do t.insert(r===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function ic(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var sc={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ac=/[A-Z]|^ms/g,lc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yi=function(t){return t.charCodeAt(1)===45},io=function(t){return t!=null&&typeof t!="boolean"},Rr=di(function(e){return yi(e)?e:e.replace(ac,"-$&").toLowerCase()}),so=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(lc,function(n,o,i){return we={name:o,styles:i,next:we},o})}return sc[t]!==1&&!yi(t)&&typeof r=="number"&&r!==0?r+"px":r};function it(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var o=r;if(o.anim===1)return we={name:o.name,styles:o.styles,next:we},o.name;var i=r;if(i.styles!==void 0){var s=i.next;if(s!==void 0)for(;s!==void 0;)we={name:s.name,styles:s.styles,next:we},s=s.next;var a=i.styles+";";return a}return cc(e,t,r)}case"function":{if(e!==void 0){var l=we,u=r(e);return we=l,it(e,t,u)}break}}var d=r;if(t==null)return d;var c=t[d];return c!==void 0?c:d}function cc(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=it(e,t,r[o])+";";else for(var i in r){var s=r[i];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?n+=i+"{"+t[a]+"}":io(a)&&(n+=Rr(i)+":"+so(i,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)io(s[l])&&(n+=Rr(i)+":"+so(i,s[l])+";");else{var u=it(e,t,s);switch(i){case"animation":case"animationName":{n+=Rr(i)+":"+u+";";break}default:n+=i+"{"+u+"}"}}}return n}var ao=/label:\s*([^\s;{]+)\s*(;|$)/g,we;function Wt(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";we=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,o+=it(r,t,i);else{var s=i;o+=s[0]}for(var a=1;a<e.length;a++)if(o+=it(r,t,e[a]),n){var l=i;o+=l[a]}ao.lastIndex=0;for(var u="",d;(d=ao.exec(o))!==null;)u+="-"+d[1];var c=ic(o)+u;return{name:c,styles:o,next:we}}var uc=function(t){return t()},gi=ln.useInsertionEffect?ln.useInsertionEffect:!1,bi=gi||uc,lo=gi||N.useLayoutEffect,xi=N.createContext(typeof HTMLElement<"u"?hi({key:"css"}):null),fc=xi.Provider,en=function(t){return N.forwardRef(function(r,n){var o=N.useContext(xi);return t(r,o,n)})},Kt=N.createContext({}),tn={}.hasOwnProperty,Fr="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",dc=function(t,r){var n={};for(var o in r)tn.call(r,o)&&(n[o]=r[o]);return n[Fr]=t,n},pc=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Zr(r,n,o),bi(function(){return Qr(r,n,o)}),null},hc=en(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var o=e[Fr],i=[n],s="";typeof e.className=="string"?s=mi(t.registered,i,e.className):e.className!=null&&(s=e.className+" ");var a=Wt(i,void 0,N.useContext(Kt));s+=t.key+"-"+a.name;var l={};for(var u in e)tn.call(e,u)&&u!=="css"&&u!==Fr&&(l[u]=e[u]);return l.className=s,r&&(l.ref=r),N.createElement(N.Fragment,null,N.createElement(pc,{cache:t,serialized:a,isStringTag:typeof o=="string"}),N.createElement(o,l))}),mc=hc,yc=function(t,r){var n=arguments;if(r==null||!tn.call(r,"css"))return N.createElement.apply(void 0,n);var o=n.length,i=new Array(o);i[0]=mc,i[1]=dc(t,r);for(var s=2;s<o;s++)i[s]=n[s];return N.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(yc);var gc=en(function(e,t){var r=e.styles,n=Wt([r],void 0,N.useContext(Kt)),o=N.useRef();return lo(function(){var i=t.key+"-global",s=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+i+" "+n.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),o.current=[s,a],function(){s.flush()}},[t]),lo(function(){var i=o.current,s=i[0],a=i[1];if(a){i[1]=!1;return}if(n.next!==void 0&&Qr(t,n.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}t.insert("",n,s,!1)},[t,n.name]),null});function vi(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Wt(t)}function bc(){var e=vi.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var xc=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vc=di(function(e){return xc.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),wc=vc,Sc=function(t){return t!=="theme"},co=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?wc:Sc},uo=function(t,r,n){var o;if(r){var i=r.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(s){return t.__emotion_forwardProp(s)&&i(s)}:i}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},_c=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Zr(r,n,o),bi(function(){return Qr(r,n,o)}),null},Pc=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,i,s;r!==void 0&&(i=r.label,s=r.target);var a=uo(t,r,n),l=a||co(o),u=!l("as");return function(){var d=arguments,c=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{var m=d[0];c.push(m[0]);for(var O=d.length,y=1;y<O;y++)c.push(d[y],m[y])}var f=en(function(g,b,_){var w=u&&g.as||o,R="",p=[],C=g;if(g.theme==null){C={};for(var h in g)C[h]=g[h];C.theme=N.useContext(Kt)}typeof g.className=="string"?R=mi(b.registered,p,g.className):g.className!=null&&(R=g.className+" ");var S=Wt(c.concat(p),b.registered,C);R+=b.key+"-"+S.name,s!==void 0&&(R+=" "+s);var x=u&&a===void 0?co(w):l,E={};for(var A in g)u&&A==="as"||x(A)&&(E[A]=g[A]);return E.className=R,_&&(E.ref=_),N.createElement(N.Fragment,null,N.createElement(_c,{cache:b,serialized:S,isStringTag:typeof w=="string"}),N.createElement(w,E))});return f.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",f.defaultProps=t.defaultProps,f.__emotion_real=f,f.__emotion_base=o,f.__emotion_styles=c,f.__emotion_forwardProp=a,Object.defineProperty(f,"toString",{value:function(){return"."+s}}),f.withComponent=function(g,b){var _=e(g,H({},r,b,{shouldForwardProp:uo(f,b,!0)}));return _.apply(void 0,c)},f}},Oc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ur=Pc.bind(null);Oc.forEach(function(e){Ur[e]=Ur(e)});let zr;typeof document=="object"&&(zr=hi({key:"css",prepend:!0}));function Ec(e){const{injectFirst:t,children:r}=e;return t&&zr?v.jsx(fc,{value:zr,children:r}):r}function Rc(e){return e==null||Object.keys(e).length===0}function Tc(e){const{styles:t,defaultTheme:r={}}=e,n=typeof t=="function"?o=>t(Rc(o)?r:o):t;return v.jsx(gc,{styles:n})}function Cc(e,t){return Ur(e,t)}const Ac=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},kc=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Tc,StyledEngineProvider:Ec,ThemeContext:Kt,css:vi,default:Cc,internal_processStyles:Ac,keyframes:bc},Symbol.toStringTag,{value:"Module"})),jc=Ee(kc),$c=Ee(il),Ic=Ee(dl),Lc=Ee(fl),Mc=["values","unit","step"],Nc=e=>{const t=Object.keys(e).map(r=>({key:r,val:e[r]}))||[];return t.sort((r,n)=>r.val-n.val),t.reduce((r,n)=>H({},r,{[n.key]:n.val}),{})};function wi(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,o=Ce(e,Mc),i=Nc(t),s=Object.keys(i);function a(m){return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r})`}function l(m){return`@media (max-width:${(typeof t[m]=="number"?t[m]:m)-n/100}${r})`}function u(m,O){const y=s.indexOf(O);return`@media (min-width:${typeof t[m]=="number"?t[m]:m}${r}) and (max-width:${(y!==-1&&typeof t[s[y]]=="number"?t[s[y]]:O)-n/100}${r})`}function d(m){return s.indexOf(m)+1<s.length?u(m,s[s.indexOf(m)+1]):a(m)}function c(m){const O=s.indexOf(m);return O===0?a(s[1]):O===s.length-1?l(s[O]):u(m,s[s.indexOf(m)+1]).replace("@media","@media not all and")}return H({keys:s,values:i,up:a,down:l,between:u,only:d,not:c,unit:r},o)}const Dc={borderRadius:4};function et(e,t){return t?Se(e,t,{clone:!1}):e}const rn={xs:0,sm:600,md:900,lg:1200,xl:1536},fo={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${rn[e]}px)`};function Oe(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const i=n.breakpoints||fo;return t.reduce((s,a,l)=>(s[i.up(i.keys[l])]=r(t[l]),s),{})}if(typeof t=="object"){const i=n.breakpoints||fo;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||rn).indexOf(a)!==-1){const l=i.up(a);s[l]=r(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return r(t)}function Fc(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((n,o)=>{const i=e.up(o);return n[i]={},n},{}))||{}}function Uc(e,t){return e.reduce((r,n)=>{const o=r[n];return(!o||Object.keys(o).length===0)&&delete r[n],r},t)}function Yt(e,t,r=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&r){const n=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(n!=null)return n}return t.split(".").reduce((n,o)=>n&&n[o]!=null?n[o]:null,e)}function It(e,t,r,n=r){let o;return typeof e=="function"?o=e(r):Array.isArray(e)?o=e[r]||n:o=Yt(e,r)||n,t&&(o=t(o,n,e)),o}function Z(e){const{prop:t,cssProperty:r=e.prop,themeKey:n,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=Yt(l,n)||{};return Oe(s,a,c=>{let m=It(u,o,c);return c===m&&typeof c=="string"&&(m=It(u,o,`${t}${c==="default"?"":Ie(c)}`,c)),r===!1?m:{[r]:m}})};return i.propTypes={},i.filterProps=[t],i}function zc(e){const t={};return r=>(t[r]===void 0&&(t[r]=e(r)),t[r])}const Bc={m:"margin",p:"padding"},qc={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},po={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Hc=zc(e=>{if(e.length>2)if(po[e])e=po[e];else return[e];const[t,r]=e.split(""),n=Bc[t],o=qc[r]||"";return Array.isArray(o)?o.map(i=>n+i):[n+o]}),nn=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],on=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...nn,...on];function dt(e,t,r,n){var o;const i=(o=Yt(e,t,!1))!=null?o:r;return typeof i=="number"?s=>typeof s=="string"?s:i*s:Array.isArray(i)?s=>typeof s=="string"?s:i[s]:typeof i=="function"?i:()=>{}}function Si(e){return dt(e,"spacing",8)}function pt(e,t){if(typeof t=="string"||t==null)return t;const r=Math.abs(t),n=e(r);return t>=0?n:typeof n=="number"?-n:`-${n}`}function Vc(e,t){return r=>e.reduce((n,o)=>(n[o]=pt(t,r),n),{})}function Wc(e,t,r,n){if(t.indexOf(r)===-1)return null;const o=Hc(r),i=Vc(o,n),s=e[r];return Oe(e,s,i)}function _i(e,t){const r=Si(e.theme);return Object.keys(e).map(n=>Wc(e,t,n,r)).reduce(et,{})}function J(e){return _i(e,nn)}J.propTypes={};J.filterProps=nn;function X(e){return _i(e,on)}X.propTypes={};X.filterProps=on;function Kc(e=8){if(e.mui)return e;const t=Si({spacing:e}),r=(...n)=>(n.length===0?[1]:n).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" ");return r.mui=!0,r}function Gt(...e){const t=e.reduce((n,o)=>(o.filterProps.forEach(i=>{n[i]=o}),n),{}),r=n=>Object.keys(n).reduce((o,i)=>t[i]?et(o,t[i](n)):o,{});return r.propTypes={},r.filterProps=e.reduce((n,o)=>n.concat(o.filterProps),[]),r}function he(e){return typeof e!="number"?e:`${e}px solid`}function me(e,t){return Z({prop:e,themeKey:"borders",transform:t})}const Yc=me("border",he),Gc=me("borderTop",he),Jc=me("borderRight",he),Xc=me("borderBottom",he),Zc=me("borderLeft",he),Qc=me("borderColor"),eu=me("borderTopColor"),tu=me("borderRightColor"),ru=me("borderBottomColor"),nu=me("borderLeftColor"),ou=me("outline",he),iu=me("outlineColor"),Jt=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=dt(e.theme,"shape.borderRadius",4),r=n=>({borderRadius:pt(t,n)});return Oe(e,e.borderRadius,r)}return null};Jt.propTypes={};Jt.filterProps=["borderRadius"];Gt(Yc,Gc,Jc,Xc,Zc,Qc,eu,tu,ru,nu,Jt,ou,iu);const Xt=e=>{if(e.gap!==void 0&&e.gap!==null){const t=dt(e.theme,"spacing",8),r=n=>({gap:pt(t,n)});return Oe(e,e.gap,r)}return null};Xt.propTypes={};Xt.filterProps=["gap"];const Zt=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=dt(e.theme,"spacing",8),r=n=>({columnGap:pt(t,n)});return Oe(e,e.columnGap,r)}return null};Zt.propTypes={};Zt.filterProps=["columnGap"];const Qt=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=dt(e.theme,"spacing",8),r=n=>({rowGap:pt(t,n)});return Oe(e,e.rowGap,r)}return null};Qt.propTypes={};Qt.filterProps=["rowGap"];const su=Z({prop:"gridColumn"}),au=Z({prop:"gridRow"}),lu=Z({prop:"gridAutoFlow"}),cu=Z({prop:"gridAutoColumns"}),uu=Z({prop:"gridAutoRows"}),fu=Z({prop:"gridTemplateColumns"}),du=Z({prop:"gridTemplateRows"}),pu=Z({prop:"gridTemplateAreas"}),hu=Z({prop:"gridArea"});Gt(Xt,Zt,Qt,su,au,lu,cu,uu,fu,du,pu,hu);function qe(e,t){return t==="grey"?t:e}const mu=Z({prop:"color",themeKey:"palette",transform:qe}),yu=Z({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:qe}),gu=Z({prop:"backgroundColor",themeKey:"palette",transform:qe});Gt(mu,yu,gu);function ue(e){return e<=1&&e!==0?`${e*100}%`:e}const bu=Z({prop:"width",transform:ue}),sn=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var n,o;const i=((n=e.theme)==null||(n=n.breakpoints)==null||(n=n.values)==null?void 0:n[r])||rn[r];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:ue(r)}};return Oe(e,e.maxWidth,t)}return null};sn.filterProps=["maxWidth"];const xu=Z({prop:"minWidth",transform:ue}),vu=Z({prop:"height",transform:ue}),wu=Z({prop:"maxHeight",transform:ue}),Su=Z({prop:"minHeight",transform:ue});Z({prop:"size",cssProperty:"width",transform:ue});Z({prop:"size",cssProperty:"height",transform:ue});const _u=Z({prop:"boxSizing"});Gt(bu,sn,xu,vu,wu,Su,_u);const ht={border:{themeKey:"borders",transform:he},borderTop:{themeKey:"borders",transform:he},borderRight:{themeKey:"borders",transform:he},borderBottom:{themeKey:"borders",transform:he},borderLeft:{themeKey:"borders",transform:he},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:he},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Jt},color:{themeKey:"palette",transform:qe},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:qe},backgroundColor:{themeKey:"palette",transform:qe},p:{style:X},pt:{style:X},pr:{style:X},pb:{style:X},pl:{style:X},px:{style:X},py:{style:X},padding:{style:X},paddingTop:{style:X},paddingRight:{style:X},paddingBottom:{style:X},paddingLeft:{style:X},paddingX:{style:X},paddingY:{style:X},paddingInline:{style:X},paddingInlineStart:{style:X},paddingInlineEnd:{style:X},paddingBlock:{style:X},paddingBlockStart:{style:X},paddingBlockEnd:{style:X},m:{style:J},mt:{style:J},mr:{style:J},mb:{style:J},ml:{style:J},mx:{style:J},my:{style:J},margin:{style:J},marginTop:{style:J},marginRight:{style:J},marginBottom:{style:J},marginLeft:{style:J},marginX:{style:J},marginY:{style:J},marginInline:{style:J},marginInlineStart:{style:J},marginInlineEnd:{style:J},marginBlock:{style:J},marginBlockStart:{style:J},marginBlockEnd:{style:J},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Xt},rowGap:{style:Qt},columnGap:{style:Zt},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ue},maxWidth:{style:sn},minWidth:{transform:ue},height:{transform:ue},maxHeight:{transform:ue},minHeight:{transform:ue},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Pu(...e){const t=e.reduce((n,o)=>n.concat(Object.keys(o)),[]),r=new Set(t);return e.every(n=>r.size===Object.keys(n).length)}function Ou(e,t){return typeof e=="function"?e(t):e}function Pi(){function e(r,n,o,i){const s={[r]:n,theme:o},a=i[r];if(!a)return{[r]:n};const{cssProperty:l=r,themeKey:u,transform:d,style:c}=a;if(n==null)return null;if(u==="typography"&&n==="inherit")return{[r]:n};const m=Yt(o,u)||{};return c?c(s):Oe(s,n,y=>{let f=It(m,d,y);return y===f&&typeof y=="string"&&(f=It(m,d,`${r}${y==="default"?"":Ie(y)}`,y)),l===!1?f:{[l]:f}})}function t(r){var n;const{sx:o,theme:i={}}=r||{};if(!o)return null;const s=(n=i.unstable_sxConfig)!=null?n:ht;function a(l){let u=l;if(typeof l=="function")u=l(i);else if(typeof l!="object")return l;if(!u)return null;const d=Fc(i.breakpoints),c=Object.keys(d);let m=d;return Object.keys(u).forEach(O=>{const y=Ou(u[O],i);if(y!=null)if(typeof y=="object")if(s[O])m=et(m,e(O,y,i,s));else{const f=Oe({theme:i},y,g=>({[O]:g}));Pu(f,y)?m[O]=t({sx:y,theme:i}):m=et(m,f)}else m=et(m,e(O,y,i,s))}),Uc(c,m)}return Array.isArray(o)?o.map(a):a(o)}return t}const er=Pi();er.filterProps=["sx"];function Oi(e,t){const r=this;return r.vars&&typeof r.getColorSchemeSelector=="function"?{[r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:r.palette.mode===e?t:{}}const Eu=["breakpoints","palette","spacing","shape"];function Ei(e={},...t){const{breakpoints:r={},palette:n={},spacing:o,shape:i={}}=e,s=Ce(e,Eu),a=wi(r),l=Kc(o);let u=Se({breakpoints:a,direction:"ltr",components:{},palette:H({mode:"light"},n),spacing:l,shape:H({},Dc,i)},s);return u.applyStyles=Oi,u=t.reduce((d,c)=>Se(d,c),u),u.unstable_sxConfig=H({},ht,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(c){return er({sx:c,theme:this})},u}const Ru=Object.freeze(Object.defineProperty({__proto__:null,default:Ei,private_createBreakpoints:wi,unstable_applyStyles:Oi},Symbol.toStringTag,{value:"Module"})),Tu=Ee(Ru),Cu=["sx"],Au=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:ht;return Object.keys(e).forEach(i=>{o[i]?n.systemProps[i]=e[i]:n.otherProps[i]=e[i]}),n};function ku(e){const{sx:t}=e,r=Ce(e,Cu),{systemProps:n,otherProps:o}=Au(r);let i;return Array.isArray(t)?i=[n,...t]:typeof t=="function"?i=(...s)=>{const a=t(...s);return Te(a)?H({},n,a):n}:i=H({},n,t),H({},o,{sx:i})}const ju=Object.freeze(Object.defineProperty({__proto__:null,default:er,extendSxProp:ku,unstable_createStyleFunctionSx:Pi,unstable_defaultSxConfig:ht},Symbol.toStringTag,{value:"Module"})),$u=Ee(ju);var ho;function Iu(){if(ho)return Ae;ho=1;var e=ii();Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.default=R,Ae.shouldForwardProp=y,Ae.systemDefaultTheme=void 0;var t=e(Ol()),r=e(El()),n=c(jc),o=$c;e(Ic),e(Lc);var i=e(Tu),s=e($u);const a=["ownerState"],l=["variants"],u=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function d(p){if(typeof WeakMap!="function")return null;var C=new WeakMap,h=new WeakMap;return(d=function(S){return S?h:C})(p)}function c(p,C){if(p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var h=d(C);if(h&&h.has(p))return h.get(p);var S={__proto__:null},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in p)if(E!=="default"&&Object.prototype.hasOwnProperty.call(p,E)){var A=x?Object.getOwnPropertyDescriptor(p,E):null;A&&(A.get||A.set)?Object.defineProperty(S,E,A):S[E]=p[E]}return S.default=p,h&&h.set(p,S),S}function m(p){return Object.keys(p).length===0}function O(p){return typeof p=="string"&&p.charCodeAt(0)>96}function y(p){return p!=="ownerState"&&p!=="theme"&&p!=="sx"&&p!=="as"}const f=Ae.systemDefaultTheme=(0,i.default)(),g=p=>p&&p.charAt(0).toLowerCase()+p.slice(1);function b({defaultTheme:p,theme:C,themeId:h}){return m(C)?p:C[h]||C}function _(p){return p?(C,h)=>h[p]:null}function w(p,C){let{ownerState:h}=C,S=(0,r.default)(C,a);const x=typeof p=="function"?p((0,t.default)({ownerState:h},S)):p;if(Array.isArray(x))return x.flatMap(E=>w(E,(0,t.default)({ownerState:h},S)));if(x&&typeof x=="object"&&Array.isArray(x.variants)){const{variants:E=[]}=x;let I=(0,r.default)(x,l);return E.forEach(L=>{let T=!0;typeof L.props=="function"?T=L.props((0,t.default)({ownerState:h},S,h)):Object.keys(L.props).forEach($=>{(h==null?void 0:h[$])!==L.props[$]&&S[$]!==L.props[$]&&(T=!1)}),T&&(Array.isArray(I)||(I=[I]),I.push(typeof L.style=="function"?L.style((0,t.default)({ownerState:h},S,h)):L.style))}),I}return x}function R(p={}){const{themeId:C,defaultTheme:h=f,rootShouldForwardProp:S=y,slotShouldForwardProp:x=y}=p,E=A=>(0,s.default)((0,t.default)({},A,{theme:b((0,t.default)({},A,{defaultTheme:h,themeId:C}))}));return E.__mui_systemSx=!0,(A,I={})=>{(0,n.internal_processStyles)(A,ne=>ne.filter(pe=>!(pe!=null&&pe.__mui_systemSx)));const{name:L,slot:T,skipVariantsResolver:$,skipSx:W,overridesResolver:ee=_(g(T))}=I,te=(0,r.default)(I,u),j=$!==void 0?$:T&&T!=="Root"&&T!=="root"||!1,M=W||!1;let F,U=y;T==="Root"||T==="root"?U=S:T?U=x:O(A)&&(U=void 0);const re=(0,n.default)(A,(0,t.default)({shouldForwardProp:U,label:F},te)),ge=ne=>typeof ne=="function"&&ne.__emotion_real!==ne||(0,o.isPlainObject)(ne)?pe=>w(ne,(0,t.default)({},pe,{theme:b({theme:pe.theme,defaultTheme:h,themeId:C})})):ne,Re=(ne,...pe)=>{let Le=ge(ne);const ce=pe?pe.map(ge):[];L&&ee&&ce.push(Pe=>{const be=b((0,t.default)({},Pe,{defaultTheme:h,themeId:C}));if(!be.components||!be.components[L]||!be.components[L].styleOverrides)return null;const Ye=be.components[L].styleOverrides,mt={};return Object.entries(Ye).forEach(([ki,ji])=>{mt[ki]=w(ji,(0,t.default)({},Pe,{theme:be}))}),ee(Pe,mt)}),L&&!j&&ce.push(Pe=>{var be;const Ye=b((0,t.default)({},Pe,{defaultTheme:h,themeId:C})),mt=Ye==null||(be=Ye.components)==null||(be=be[L])==null?void 0:be.variants;return w({variants:mt},(0,t.default)({},Pe,{theme:Ye}))}),M||ce.push(E);const Me=ce.length-pe.length;if(Array.isArray(ne)&&Me>0){const Pe=new Array(Me).fill("");Le=[...ne,...Pe],Le.raw=[...ne.raw,...Pe]}const an=re(Le,...ce);return A.muiName&&(an.muiName=A.muiName),an};return re.withConfig&&(Re.withConfig=re.withConfig),Re}}return Ae}var Lu=Iu();const Mu=Oo(Lu);function Nu(e,t){return H({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Y={};const Du=Ee(sl),Fu=Ee(xl);var mo;function Uu(){if(mo)return Y;mo=1;var e=ii();Object.defineProperty(Y,"__esModule",{value:!0}),Y.alpha=y,Y.blend=C,Y.colorChannel=void 0,Y.darken=g,Y.decomposeColor=s,Y.emphasize=R,Y.getContrastRatio=O,Y.getLuminance=m,Y.hexToRgb=o,Y.hslToRgb=c,Y.lighten=_,Y.private_safeAlpha=f,Y.private_safeColorChannel=void 0,Y.private_safeDarken=b,Y.private_safeEmphasize=p,Y.private_safeLighten=w,Y.recomposeColor=u,Y.rgbToHex=d;var t=e(Du),r=e(Fu);function n(h,S=0,x=1){return(0,r.default)(h,S,x)}function o(h){h=h.slice(1);const S=new RegExp(`.{1,${h.length>=6?2:1}}`,"g");let x=h.match(S);return x&&x[0].length===1&&(x=x.map(E=>E+E)),x?`rgb${x.length===4?"a":""}(${x.map((E,A)=>A<3?parseInt(E,16):Math.round(parseInt(E,16)/255*1e3)/1e3).join(", ")})`:""}function i(h){const S=h.toString(16);return S.length===1?`0${S}`:S}function s(h){if(h.type)return h;if(h.charAt(0)==="#")return s(o(h));const S=h.indexOf("("),x=h.substring(0,S);if(["rgb","rgba","hsl","hsla","color"].indexOf(x)===-1)throw new Error((0,t.default)(9,h));let E=h.substring(S+1,h.length-1),A;if(x==="color"){if(E=E.split(" "),A=E.shift(),E.length===4&&E[3].charAt(0)==="/"&&(E[3]=E[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(A)===-1)throw new Error((0,t.default)(10,A))}else E=E.split(",");return E=E.map(I=>parseFloat(I)),{type:x,values:E,colorSpace:A}}const a=h=>{const S=s(h);return S.values.slice(0,3).map((x,E)=>S.type.indexOf("hsl")!==-1&&E!==0?`${x}%`:x).join(" ")};Y.colorChannel=a;const l=(h,S)=>{try{return a(h)}catch{return h}};Y.private_safeColorChannel=l;function u(h){const{type:S,colorSpace:x}=h;let{values:E}=h;return S.indexOf("rgb")!==-1?E=E.map((A,I)=>I<3?parseInt(A,10):A):S.indexOf("hsl")!==-1&&(E[1]=`${E[1]}%`,E[2]=`${E[2]}%`),S.indexOf("color")!==-1?E=`${x} ${E.join(" ")}`:E=`${E.join(", ")}`,`${S}(${E})`}function d(h){if(h.indexOf("#")===0)return h;const{values:S}=s(h);return`#${S.map((x,E)=>i(E===3?Math.round(255*x):x)).join("")}`}function c(h){h=s(h);const{values:S}=h,x=S[0],E=S[1]/100,A=S[2]/100,I=E*Math.min(A,1-A),L=(W,ee=(W+x/30)%12)=>A-I*Math.max(Math.min(ee-3,9-ee,1),-1);let T="rgb";const $=[Math.round(L(0)*255),Math.round(L(8)*255),Math.round(L(4)*255)];return h.type==="hsla"&&(T+="a",$.push(S[3])),u({type:T,values:$})}function m(h){h=s(h);let S=h.type==="hsl"||h.type==="hsla"?s(c(h)).values:h.values;return S=S.map(x=>(h.type!=="color"&&(x/=255),x<=.03928?x/12.92:((x+.055)/1.055)**2.4)),Number((.2126*S[0]+.7152*S[1]+.0722*S[2]).toFixed(3))}function O(h,S){const x=m(h),E=m(S);return(Math.max(x,E)+.05)/(Math.min(x,E)+.05)}function y(h,S){return h=s(h),S=n(S),(h.type==="rgb"||h.type==="hsl")&&(h.type+="a"),h.type==="color"?h.values[3]=`/${S}`:h.values[3]=S,u(h)}function f(h,S,x){try{return y(h,S)}catch{return h}}function g(h,S){if(h=s(h),S=n(S),h.type.indexOf("hsl")!==-1)h.values[2]*=1-S;else if(h.type.indexOf("rgb")!==-1||h.type.indexOf("color")!==-1)for(let x=0;x<3;x+=1)h.values[x]*=1-S;return u(h)}function b(h,S,x){try{return g(h,S)}catch{return h}}function _(h,S){if(h=s(h),S=n(S),h.type.indexOf("hsl")!==-1)h.values[2]+=(100-h.values[2])*S;else if(h.type.indexOf("rgb")!==-1)for(let x=0;x<3;x+=1)h.values[x]+=(255-h.values[x])*S;else if(h.type.indexOf("color")!==-1)for(let x=0;x<3;x+=1)h.values[x]+=(1-h.values[x])*S;return u(h)}function w(h,S,x){try{return _(h,S)}catch{return h}}function R(h,S=.15){return m(h)>.5?g(h,S):_(h,S)}function p(h,S,x){try{return R(h,S)}catch{return h}}function C(h,S,x,E=1){const A=($,W)=>Math.round(($**(1/E)*(1-x)+W**(1/E)*x)**E),I=s(h),L=s(S),T=[A(I.values[0],L.values[0]),A(I.values[1],L.values[1]),A(I.values[2],L.values[2])];return u({type:"rgb",values:T})}return Y}var Br=Uu();const st={black:"#000",white:"#fff"},zu={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ne={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},De={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ze={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Fe={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ue={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ze={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Bu=["mode","contrastThreshold","tonalOffset"],yo={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:st.white,default:st.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Tr={text:{primary:st.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:st.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function go(e,t,r,n){const o=n.light||n,i=n.dark||n*1.5;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:t==="light"?e.light=Br.lighten(e.main,o):t==="dark"&&(e.dark=Br.darken(e.main,i)))}function qu(e="light"){return e==="dark"?{main:Fe[200],light:Fe[50],dark:Fe[400]}:{main:Fe[700],light:Fe[400],dark:Fe[800]}}function Hu(e="light"){return e==="dark"?{main:Ne[200],light:Ne[50],dark:Ne[400]}:{main:Ne[500],light:Ne[300],dark:Ne[700]}}function Vu(e="light"){return e==="dark"?{main:De[500],light:De[300],dark:De[700]}:{main:De[700],light:De[400],dark:De[800]}}function Wu(e="light"){return e==="dark"?{main:Ue[400],light:Ue[300],dark:Ue[700]}:{main:Ue[700],light:Ue[500],dark:Ue[900]}}function Ku(e="light"){return e==="dark"?{main:ze[400],light:ze[300],dark:ze[700]}:{main:ze[800],light:ze[500],dark:ze[900]}}function Yu(e="light"){return e==="dark"?{main:Ze[400],light:Ze[300],dark:Ze[700]}:{main:"#ed6c02",light:Ze[500],dark:Ze[900]}}function Gu(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,o=Ce(e,Bu),i=e.primary||qu(t),s=e.secondary||Hu(t),a=e.error||Vu(t),l=e.info||Wu(t),u=e.success||Ku(t),d=e.warning||Yu(t);function c(f){return Br.getContrastRatio(f,Tr.text.primary)>=r?Tr.text.primary:yo.text.primary}const m=({color:f,name:g,mainShade:b=500,lightShade:_=300,darkShade:w=700})=>{if(f=H({},f),!f.main&&f[b]&&(f.main=f[b]),!f.hasOwnProperty("main"))throw new Error(rt(11,g?` (${g})`:"",b));if(typeof f.main!="string")throw new Error(rt(12,g?` (${g})`:"",JSON.stringify(f.main)));return go(f,"light",_,n),go(f,"dark",w,n),f.contrastText||(f.contrastText=c(f.main)),f},O={dark:Tr,light:yo};return Se(H({common:H({},st),mode:t,primary:m({color:i,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:a,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:l,name:"info"}),success:m({color:u,name:"success"}),grey:zu,contrastThreshold:r,getContrastText:c,augmentColor:m,tonalOffset:n},O[t]),o)}const Ju=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Xu(e){return Math.round(e*1e5)/1e5}const bo={textTransform:"uppercase"},xo='"Roboto", "Helvetica", "Arial", sans-serif';function Zu(e,t){const r=typeof t=="function"?t(e):t,{fontFamily:n=xo,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:d,pxToRem:c}=r,m=Ce(r,Ju),O=o/14,y=c||(b=>`${b/u*O}rem`),f=(b,_,w,R,p)=>H({fontFamily:n,fontWeight:b,fontSize:y(_),lineHeight:w},n===xo?{letterSpacing:`${Xu(R/_)}em`}:{},p,d),g={h1:f(i,96,1.167,-1.5),h2:f(i,60,1.2,-.5),h3:f(s,48,1.167,0),h4:f(s,34,1.235,.25),h5:f(s,24,1.334,0),h6:f(a,20,1.6,.15),subtitle1:f(s,16,1.75,.15),subtitle2:f(a,14,1.57,.1),body1:f(s,16,1.5,.15),body2:f(s,14,1.43,.15),button:f(a,14,1.75,.4,bo),caption:f(s,12,1.66,.4),overline:f(s,12,2.66,1,bo),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Se(H({htmlFontSize:u,pxToRem:y,fontFamily:n,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},g),m,{clone:!1})}const Qu=.2,ef=.14,tf=.12;function K(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qu})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ef})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tf})`].join(",")}const rf=["none",K(0,2,1,-1,0,1,1,0,0,1,3,0),K(0,3,1,-2,0,2,2,0,0,1,5,0),K(0,3,3,-2,0,3,4,0,0,1,8,0),K(0,2,4,-1,0,4,5,0,0,1,10,0),K(0,3,5,-1,0,5,8,0,0,1,14,0),K(0,3,5,-1,0,6,10,0,0,1,18,0),K(0,4,5,-2,0,7,10,1,0,2,16,1),K(0,5,5,-3,0,8,10,1,0,3,14,2),K(0,5,6,-3,0,9,12,1,0,3,16,2),K(0,6,6,-3,0,10,14,1,0,4,18,3),K(0,6,7,-4,0,11,15,1,0,4,20,3),K(0,7,8,-4,0,12,17,2,0,5,22,4),K(0,7,8,-4,0,13,19,2,0,5,24,4),K(0,7,9,-4,0,14,21,2,0,5,26,4),K(0,8,9,-5,0,15,22,2,0,6,28,5),K(0,8,10,-5,0,16,24,2,0,6,30,5),K(0,8,11,-5,0,17,26,2,0,6,32,5),K(0,9,11,-5,0,18,28,2,0,7,34,6),K(0,9,12,-6,0,19,29,2,0,7,36,6),K(0,10,13,-6,0,20,31,3,0,8,38,7),K(0,10,13,-6,0,21,33,3,0,8,40,7),K(0,10,14,-6,0,22,35,3,0,8,42,7),K(0,11,14,-7,0,23,36,3,0,9,44,8),K(0,11,15,-7,0,24,38,3,0,9,46,8)],nf=["duration","easing","delay"],of={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},sf={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function vo(e){return`${Math.round(e)}ms`}function af(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function lf(e){const t=H({},of,e.easing),r=H({},sf,e.duration);return H({getAutoHeightDuration:af,create:(o=["all"],i={})=>{const{duration:s=r.standard,easing:a=t.easeInOut,delay:l=0}=i;return Ce(i,nf),(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof s=="string"?s:vo(s)} ${a} ${typeof l=="string"?l:vo(l)}`).join(",")}},e,{easing:t,duration:r})}const cf={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},uf=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function ff(e={},...t){const{mixins:r={},palette:n={},transitions:o={},typography:i={}}=e,s=Ce(e,uf);if(e.vars)throw new Error(rt(18));const a=Gu(n),l=Ei(e);let u=Se(l,{mixins:Nu(l.breakpoints,r),palette:a,shadows:rf.slice(),typography:Zu(a,i),transitions:lf(o),zIndex:H({},cf)});return u=Se(u,s),u=t.reduce((d,c)=>Se(d,c),u),u.unstable_sxConfig=H({},ht,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(c){return er({sx:c,theme:this})},u}const df=ff(),pf="$$material";function hf(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const mf=e=>hf(e)&&e!=="classes",yf=Mu({themeId:pf,defaultTheme:df,rootShouldForwardProp:mf});function gf(e){return ni("MuiSvgIcon",e)}gl("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const bf=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],xf=e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root",t!=="inherit"&&`color${Ie(t)}`,`fontSize${Ie(r)}`]};return pl(o,gf,n)},vf=yf("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="inherit"&&t[`color${Ie(r.color)}`],t[`fontSize${Ie(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,o,i,s,a,l,u,d,c,m,O,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(r=e.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=e.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[t.fontSize],color:(c=(m=(e.vars||e).palette)==null||(m=m[t.color])==null?void 0:m.main)!=null?c:{action:(O=(e.vars||e).palette)==null||(O=O.action)==null?void 0:O.active,disabled:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[t.color]}}),qr=N.forwardRef(function(t,r){const n=Pl({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:c,viewBox:m="0 0 24 24"}=n,O=Ce(n,bf),y=N.isValidElement(o)&&o.type==="svg",f=H({},n,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:m,hasSvgAsChild:y}),g={};d||(g.viewBox=m);const b=xf(f);return v.jsxs(vf,H({as:a,className:vl(b.root,i),focusable:"false",color:u,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:r},g,O,y&&o.props,{ownerState:f,children:[y?o.props.children:o,c?v.jsx("title",{children:c}):null]}))});qr.muiName="SvgIcon";function Ri(e,t){function r(n,o){return v.jsx(qr,H({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return r.muiName=qr.muiName,N.memo(N.forwardRef(r))}const wf=Ri(v.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),Sf=Ri(v.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),_f=lt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ti=k.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${_f} 0.5s ease-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(155, 109, 255, 0.2);
  }
`;k.div`
  position: relative;
  width: 100%;
  height: 100%;
`;const Pf=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Of=k.div`
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

  ${Ti}:hover & {
    opacity: 1;
  }
`,Ef=k.h3`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,Rf=k.p`
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
`,Tf=k.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`,Hr=k.button`
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
`;k(Hr)`
  background: rgba(155, 109, 255, 0.8);
  width: 48px;
  height: 48px;
  
  &:hover {
    background: rgb(155, 109, 255);
  }
`;const Cf=({video:e,onPlay:t,onDelete:r})=>{const n=Lt(),[o,i]=N.useState(!1),s=()=>{n("/edit-video",{state:{editVideo:e}})},a=d=>{d.stopPropagation(),window.confirm("¿Estás seguro de que quieres eliminar este video?")&&r()},u=`https://img.youtube.com/vi/${(d=>{const c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,m=d.match(c);return m&&m[2].length===11?m[2]:null})(e.url)}/maxresdefault.jpg`;return v.jsxs(Ti,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:t,children:[v.jsx(Pf,{src:u,alt:e.title}),v.jsxs(Of,{style:{opacity:o?1:0},children:[v.jsx(Ef,{children:e.title}),v.jsx(Rf,{children:e.description}),v.jsxs(Tf,{children:[v.jsx(Hr,{onClick:s,children:v.jsx(Sf,{})}),v.jsx(Hr,{onClick:a,children:v.jsx(wf,{})})]})]})]})},Af=lt`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`,Ci=lt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ai=lt`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`,wo=lt`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(15deg); }
`,kf=k.div`
  min-height: 100vh;
  width: 100vw;
  color: white;
  background-color: #13111b;
  overflow-x: hidden;
`,jf=k.div`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1920px) {
    padding: 0 4rem;
  }
`,$f=k.div`
  width: 100vw;
  min-height: 600px;
  background: linear-gradient(135deg, #13111b 0%, #1a1625 25%, #1e1b29 50%, #2a2438 75%, #13111b 100%);
  background-size: 400% 400%;
  animation: ${Af} 15s ease infinite;
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
    animation: ${Ai} 4s ease-in-out infinite;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`,If=k.div`
  flex: 1;
  z-index: 1;
  animation: ${Ci} 1s ease-out;
  position: relative;
`,Lf=k.h1`
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
`,Mf=k.div`
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
    animation: ${wo} 2s infinite;
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
    animation: ${wo} 2s infinite reverse;
  }
`,Nf=k.h2`
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
`,Df=k.p`
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
`,Ff=k.div`
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
`,Uf=k.div`
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
`,zf=k.div`
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
    animation: ${Ai} 2s infinite;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgb(155, 109, 255);
    box-shadow: 0 0 30px rgba(155, 109, 255, 0.7);
  }
`,Bf=k.nav`
  position: sticky;
  top: 0;
  background: rgba(19, 17, 27, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 100;
  margin-bottom: 2rem;
  animation: ${Ci} 0.5s ease-out;
`,qf=k.ul`
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
`,Hf=k.li`
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
`,Vf=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Wf=k.h2`
  color: #9b6dff;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;k.footer`
  background: rgba(19, 17, 27, 0.95);
  padding: 4rem 0;
  margin-top: 4rem;
`;k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;const Kf=()=>{const e=Lt(),[t,r]=N.useState([]),[n,o]=N.useState(null),[i,s]=N.useState(null),a=["Películas","Series","Documentales","Anime"],[l,u]=N.useState(!1);N.useRef({});const[d]=N.useState({url:"https://www.youtube.com/watch?v=O6JxZxIzRGc",title:"RECOMIENDA TU TRAILER FAVORITO",description:"Sube tu trailer favorito para que podamos conocer tus películas, animes, series y documentales que quieres que todos veamos.",thumbnail:"https://i.ytimg.com/vi/O6JxZxIzRGc/maxresdefault.jpg"});N.useEffect(()=>{c()},[]);const c=async()=>{try{const g=await G.get(Qe);r(g.data)}catch(g){console.error("Error fetching videos:",g)}},m=g=>{const b=document.getElementById(g.toLowerCase());b&&(b.scrollIntoView({behavior:"smooth",block:"start"}),s(g))},O=g=>{e("/new-video",{state:{editVideo:g}})},y=async g=>{try{await G.delete(`${Qe}/${g}`),await c()}catch(b){console.error("Error deleting video:",b)}},f=g=>{const b=t.filter(_=>_.category===g);return b.length===0?null:v.jsxs("div",{id:g.toLowerCase(),style:{scrollMarginTop:"100px"},children:[v.jsx(Wf,{children:g}),v.jsx(Vf,{children:b.map(_=>v.jsx(Cf,{video:_,onPlay:()=>o(_),onEdit:()=>O(_),onDelete:()=>y(_.id)},_.id))})]},g)};return v.jsxs(kf,{children:[v.jsxs($f,{children:[v.jsxs(If,{children:[v.jsx(Lf,{children:"TrailerFlix"}),v.jsxs(Mf,{children:[v.jsx(Nf,{children:"Recomienda tu Trailer Favorito"}),v.jsxs(Df,{children:["Sube tu trailer favorito para que podamos conocer tus ",v.jsx("span",{children:"películas"}),", ",v.jsx("span",{children:"animes"}),", ",v.jsx("span",{children:"series"})," y ",v.jsx("span",{children:"documentales"})," que quieres que todos veamos."]})]})]}),v.jsxs(Ff,{onClick:()=>u(!0),children:[v.jsx(Uf,{thumbnail:d.thumbnail}),v.jsx(zf,{children:"▶"})]})]}),v.jsxs(jf,{children:[v.jsx(Bf,{children:v.jsx(qf,{children:a.map(g=>v.jsx(Hf,{active:i===g,onClick:()=>m(g),children:g},g))})}),a.map(g=>f(g))]}),n&&v.jsx(ol,{isOpen:!!n,onClose:()=>o(null),video:n,API_URL:Qe})]})},Yf=k.div`
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
`,Gf=k.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 2rem auto;
  background: rgba(19, 17, 27, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
`,Jf=k.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #9b6dff;
  text-align: center;
`,Xf=k.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,vt=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,wt=k.label`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`,So=k.input`
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
`,Zf=k.select`
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
`,Qf=k.textarea`
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
`,ed=k.button`
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
`,td=k.div`
  color: #ff6b6b;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 107, 107, 0.1);
  text-align: center;
`,rd=k.div`
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  aspect-ratio: 16/9;
`,nd=()=>{var c;const e=Lt(),r=(c=Ii().state)==null?void 0:c.editVideo,[n,o]=N.useState({title:"",category:"",url:"",description:""}),[i,s]=N.useState(""),[a,l]=N.useState(!1);N.useEffect(()=>{r&&o({title:r.title||"",category:r.category||"",url:r.url||"",description:r.description||""})},[r]);const u=m=>{const{name:O,value:y}=m.target;o(f=>({...f,[O]:y}))},d=async m=>{m.preventDefault(),l(!0),s("");try{r?await G.put(`${Qe}/${r.id}`,n):await G.post(Qe,n),e("/")}catch(O){console.error("Error:",O),s("Error al guardar el video. Por favor, intenta de nuevo.")}finally{l(!1)}};return v.jsx(Yf,{children:v.jsxs(Gf,{children:[v.jsx(Jf,{children:r?"Editar Video":"Nuevo Video"}),v.jsxs(Xf,{onSubmit:d,children:[v.jsxs(vt,{children:[v.jsx(wt,{htmlFor:"title",children:"Título"}),v.jsx(So,{type:"text",id:"title",name:"title",value:n.title,onChange:u,required:!0})]}),v.jsxs(vt,{children:[v.jsx(wt,{htmlFor:"category",children:"Categoría"}),v.jsxs(Zf,{id:"category",name:"category",value:n.category,onChange:u,required:!0,children:[v.jsx("option",{value:"",children:"Selecciona una categoría"}),v.jsx("option",{value:"Películas",children:"Películas"}),v.jsx("option",{value:"Series",children:"Series"}),v.jsx("option",{value:"Documentales",children:"Documentales"}),v.jsx("option",{value:"Anime",children:"Anime"})]})]}),v.jsxs(vt,{children:[v.jsx(wt,{htmlFor:"url",children:"URL del Video (YouTube)"}),v.jsx(So,{type:"url",id:"url",name:"url",value:n.url,onChange:u,required:!0})]}),v.jsxs(vt,{children:[v.jsx(wt,{htmlFor:"description",children:"Descripción"}),v.jsx(Qf,{id:"description",name:"description",value:n.description,onChange:u,required:!0})]}),i&&v.jsx(td,{children:i}),n.url&&v.jsx(rd,{children:v.jsx(Qo,{url:n.url})}),v.jsx(ed,{type:"submit",disabled:a,children:a?"Guardando...":r?"Guardar Cambios":"Crear Video"})]})]})})},od=k.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,id=k.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,St=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_t=k.label`
  color: #fff;
  font-size: 1rem;
`,Cr=k.input`
  padding: 0.8rem;
  border: 1px solid rgba(155, 109, 255, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`,sd=k.textarea`
  padding: 0.8rem;
  border: 1px solid rgba(155, 109, 255, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #9b6dff;
  }
`,_o=k.button`
  padding: 0.8rem 1.5rem;
  background: #9b6dff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #8257e6;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,Pt=k.p`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,ad=({video:e,onSubmit:t,onCancel:r})=>{const[n,o]=N.useState({title:"",description:"",url:"",category:""}),[i,s]=N.useState({});N.useEffect(()=>{e&&o({title:e.title||"",description:e.description||"",url:e.url||"",category:e.category||""})},[e]);const a=()=>{const d={};return n.title.trim()||(d.title="El título es requerido"),n.url.trim()||(d.url="La URL es requerida"),n.category.trim()||(d.category="La categoría es requerida"),/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(n.url)||(d.url="Por favor ingresa una URL válida"),s(d),Object.keys(d).length===0},l=d=>{d.preventDefault(),a()&&t(n)},u=d=>{const{name:c,value:m}=d.target;o(O=>({...O,[c]:m})),i[c]&&s(O=>({...O,[c]:""}))};return v.jsx(od,{children:v.jsxs(id,{onSubmit:l,children:[v.jsxs(St,{children:[v.jsx(_t,{htmlFor:"title",children:"Título"}),v.jsx(Cr,{type:"text",id:"title",name:"title",value:n.title,onChange:u,placeholder:"Ingresa el título del video"}),i.title&&v.jsx(Pt,{children:i.title})]}),v.jsxs(St,{children:[v.jsx(_t,{htmlFor:"description",children:"Descripción"}),v.jsx(sd,{id:"description",name:"description",value:n.description,onChange:u,placeholder:"Describe el video"}),i.description&&v.jsx(Pt,{children:i.description})]}),v.jsxs(St,{children:[v.jsx(_t,{htmlFor:"url",children:"URL del Video"}),v.jsx(Cr,{type:"url",id:"url",name:"url",value:n.url,onChange:u,placeholder:"https://example.com/video"}),i.url&&v.jsx(Pt,{children:i.url})]}),v.jsxs(St,{children:[v.jsx(_t,{htmlFor:"category",children:"Categoría"}),v.jsx(Cr,{type:"text",id:"category",name:"category",value:n.category,onChange:u,placeholder:"Ej: Películas, Series, Anime"}),i.category&&v.jsx(Pt,{children:i.category})]}),v.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[r&&v.jsx(_o,{type:"button",onClick:r,style:{background:"transparent",border:"1px solid #9b6dff"},children:"Cancelar"}),v.jsx(_o,{type:"submit",children:e?"Guardar Cambios":"Crear Video"})]})]})})},ld=k.div`
  padding: 2rem;
  margin-top: 80px;
`,cd=k.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;function ud(){const{id:e}=Li(),t=Lt(),[r,n]=N.useState(null),[o,i]=N.useState(!0),[s,a]=N.useState(null);N.useEffect(()=>{(async()=>{try{const m=JSON.parse(localStorage.getItem("videos")||"[]").find(O=>O.id===e);m?n(m):a("Video no encontrado")}catch{a("Error al cargar el video")}finally{i(!1)}})()},[e]);const l=async d=>{try{const m=JSON.parse(localStorage.getItem("videos")||"[]").map(O=>O.id===e?{...O,...d}:O);localStorage.setItem("videos",JSON.stringify(m)),t("/")}catch{a("Error al actualizar el video")}},u=()=>{t("/")};return o?v.jsx("div",{children:"Cargando..."}):s?v.jsx("div",{children:s}):v.jsxs(ld,{children:[v.jsx(cd,{children:"Editar Video"}),v.jsx(ad,{video:r,onSubmit:l,onCancel:u})]})}const fd=k.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #13111b;
`,dd=k.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #13111b;
`;function pd(){return v.jsx(Mi,{children:v.jsxs(fd,{children:[v.jsx(Ki,{}),v.jsx(dd,{children:v.jsxs(Ni,{children:[v.jsx(yt,{path:"/",element:v.jsx(Kf,{})}),v.jsx(yt,{path:"/new",element:v.jsx(nd,{})}),v.jsx(yt,{path:"/edit/:id",element:v.jsx(ud,{})}),v.jsx(yt,{path:"*",element:v.jsx(Di,{to:"/",replace:!0})})]})}),v.jsx(Qi,{})]})})}Bi.createRoot(document.getElementById("root")).render(v.jsx(N.StrictMode,{children:v.jsx(pd,{})}));
//# sourceMappingURL=index-D9LmrjD3.js.map
