var _m=Object.defineProperty,Em=Object.defineProperties;var Im=Object.getOwnPropertyDescriptors;var ql=Object.getOwnPropertySymbols;var Tm=Object.prototype.hasOwnProperty,bm=Object.prototype.propertyIsEnumerable;var zl=(t,e,n)=>e in t?_m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ko=(t,e)=>{for(var n in e||(e={}))Tm.call(e,n)&&zl(t,n,e[n]);if(ql)for(var n of ql(e))bm.call(e,n)&&zl(t,n,e[n]);return t},Wl=(t,e)=>Em(t,Im(e));const Sm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Sm();function fc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=fc(Cm);function nf(t){return!!t||t===""}function dc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?Nm(s):dc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Me(t))return t;if(De(t))return t}}const km=/;(?![^(]*\))/g,Rm=/:(.+)/;function Nm(t){const e={};return t.split(km).forEach(n=>{if(n){const s=n.split(Rm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function pc(t){let e="";if(Me(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=pc(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dm=t=>Me(t)?t:t==null?"":q(t)||De(t)&&(t.toString===af||!X(t.toString))?JSON.stringify(t,sf,2):String(t),sf=(t,e)=>e&&e.__v_isRef?sf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:rf(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!q(e)&&!cf(e)?String(e):e,ge={},ls=[],At=()=>{},Om=()=>!1,Pm=/^on[^a-z]/,eo=t=>Pm.test(t),gc=t=>t.startsWith("onUpdate:"),Qe=Object.assign,mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xm=Object.prototype.hasOwnProperty,se=(t,e)=>xm.call(t,e),q=Array.isArray,us=t=>to(t)==="[object Map]",rf=t=>to(t)==="[object Set]",X=t=>typeof t=="function",Me=t=>typeof t=="string",yc=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",of=t=>De(t)&&X(t.then)&&X(t.catch),af=Object.prototype.toString,to=t=>af.call(t),Mm=t=>to(t).slice(8,-1),cf=t=>to(t)==="[object Object]",vc=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lm=/-(\w)/g,Ot=no(t=>t.replace(Lm,(e,n)=>n?n.toUpperCase():"")),Fm=/\B([A-Z])/g,Rs=no(t=>t.replace(Fm,"-$1").toLowerCase()),so=no(t=>t.charAt(0).toUpperCase()+t.slice(1)),qo=no(t=>t?`on${so(t)}`:""),ur=(t,e)=>!Object.is(t,e),hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ya=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gl;const Um=()=>Gl||(Gl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;class Vm{constructor(e){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Bm(t,e=bt){e&&e.active&&e.effects.push(t)}const wc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lf=t=>(t.w&mn)>0,uf=t=>(t.n&mn)>0,$m=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mn},jm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lf(r)&&!uf(r)?r.delete(t):e[n++]=r,r.w&=~mn,r.n&=~mn}e.length=n}},va=new WeakMap;let Ks=0,mn=1;const wa=30;let wt;const xn=Symbol(""),_a=Symbol("");class _c{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bm(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,hn=!0,mn=1<<++Ks,Ks<=wa?$m(this):Ql(this),this.fn()}finally{Ks<=wa&&jm(this),mn=1<<--Ks,wt=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Ql(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const hf=[];function Ns(){hf.push(hn),hn=!1}function Ds(){const t=hf.pop();hn=t===void 0?!0:t}function lt(t,e,n){if(hn&&wt){let s=va.get(t);s||va.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=wc()),ff(r)}}function ff(t,e){let n=!1;Ks<=wa?uf(t)||(t.n|=mn,n=!lf(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Ht(t,e,n,s,r,i){const o=va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?vc(n)&&a.push(o.get("length")):(a.push(o.get(xn)),us(t)&&a.push(o.get(_a)));break;case"delete":q(t)||(a.push(o.get(xn)),us(t)&&a.push(o.get(_a)));break;case"set":us(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&Ea(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ea(wc(c))}}function Ea(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Xl(s);for(const s of n)s.computed||Xl(s)}function Xl(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hm=fc("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yc)),Km=Ec(),qm=Ec(!1,!0),zm=Ec(!0),Yl=Wm();function Wm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)lt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ns();const s=oe(this)[e].apply(this,n);return Ds(),s}}),t}function Ec(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ly:vf:e?yf:mf).get(s))return s;const o=q(s);if(!t&&o&&se(Yl,r))return Reflect.get(Yl,r,i);const a=Reflect.get(s,r,i);return(yc(r)?df.has(r):Hm(r))||(t||lt(s,"get",r),e)?a:je(a)?o&&vc(r)?a:a.value:De(a)?t?wf(a):Wn(a):a}}const Gm=pf(),Qm=pf(!0);function pf(t=!1){return function(n,s,r,i){let o=n[s];if(hr(o)&&je(o)&&!je(r))return!1;if(!t&&!hr(r)&&(Ia(r)||(r=oe(r),o=oe(o)),!q(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=q(n)&&vc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?ur(r,o)&&Ht(n,"set",s,r):Ht(n,"add",s,r)),c}}function Xm(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ht(t,"delete",e,void 0),s}function Ym(t,e){const n=Reflect.has(t,e);return(!yc(e)||!df.has(e))&&lt(t,"has",e),n}function Jm(t){return lt(t,"iterate",q(t)?"length":xn),Reflect.ownKeys(t)}const gf={get:Km,set:Gm,deleteProperty:Xm,has:Ym,ownKeys:Jm},Zm={get:zm,set(t,e){return!0},deleteProperty(t,e){return!0}},ey=Qe({},gf,{get:qm,set:Qm}),Ic=t=>t,ro=t=>Reflect.getPrototypeOf(t);function Jr(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&lt(r,"get",e),lt(r,"get",i));const{has:o}=ro(r),a=s?Ic:n?Sc:fr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Zr(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&lt(s,"has",t),lt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ei(t,e=!1){return t=t.__v_raw,!e&&lt(oe(t),"iterate",xn),Reflect.get(t,"size",t)}function Jl(t){t=oe(t);const e=oe(this);return ro(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function Zl(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=ro(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ur(e,o)&&Ht(n,"set",t,e):Ht(n,"add",t,e),this}function eu(t){const e=oe(this),{has:n,get:s}=ro(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ht(e,"delete",t,void 0),i}function tu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Ht(t,"clear",void 0,void 0),n}function ti(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?Ic:t?Sc:fr;return!t&&lt(a,"iterate",xn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ni(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ic:e?Sc:fr;return!e&&lt(i,"iterate",c?_a:xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function ty(){const t={get(i){return Jr(this,i)},get size(){return ei(this)},has:Zr,add:Jl,set:Zl,delete:eu,clear:tu,forEach:ti(!1,!1)},e={get(i){return Jr(this,i,!1,!0)},get size(){return ei(this)},has:Zr,add:Jl,set:Zl,delete:eu,clear:tu,forEach:ti(!1,!0)},n={get(i){return Jr(this,i,!0)},get size(){return ei(this,!0)},has(i){return Zr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ti(!0,!1)},s={get(i){return Jr(this,i,!0,!0)},get size(){return ei(this,!0)},has(i){return Zr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ni(i,!1,!1),n[i]=ni(i,!0,!1),e[i]=ni(i,!1,!0),s[i]=ni(i,!0,!0)}),[t,n,e,s]}const[ny,sy,ry,iy]=ty();function Tc(t,e){const n=e?t?iy:ry:t?sy:ny;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const oy={get:Tc(!1,!1)},ay={get:Tc(!1,!0)},cy={get:Tc(!0,!1)},mf=new WeakMap,yf=new WeakMap,vf=new WeakMap,ly=new WeakMap;function uy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hy(t){return t.__v_skip||!Object.isExtensible(t)?0:uy(Mm(t))}function Wn(t){return hr(t)?t:bc(t,!1,gf,oy,mf)}function fy(t){return bc(t,!1,ey,ay,yf)}function wf(t){return bc(t,!0,Zm,cy,vf)}function bc(t,e,n,s,r){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=hy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hs(t){return hr(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function hr(t){return!!(t&&t.__v_isReadonly)}function Ia(t){return!!(t&&t.__v_isShallow)}function _f(t){return hs(t)||hr(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Ef(t){return bi(t,"__v_skip",!0),t}const fr=t=>De(t)?Wn(t):t,Sc=t=>De(t)?wf(t):t;function If(t){hn&&wt&&(t=oe(t),ff(t.dep||(t.dep=wc())))}function Tf(t,e){t=oe(t),t.dep&&Ea(t.dep)}function je(t){return!!(t&&t.__v_isRef===!0)}function dy(t){return bf(t,!1)}function py(t){return bf(t,!0)}function bf(t,e){return je(t)?t:new gy(t,e)}class gy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:fr(e)}get value(){return If(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:fr(e),Tf(this))}}function Qs(t){return je(t)?t.value:t}const my={get:(t,e,n)=>Qs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sf(t){return hs(t)?t:new Proxy(t,my)}class yy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _c(e,()=>{this._dirty||(this._dirty=!0,Tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return If(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vy(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=At):(s=t.get,r=t.set),new yy(s,r,i||!r,n)}function fn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){io(i,e,n)}return r}function gt(t,e,n,s){if(X(t)){const i=fn(t,e,n,s);return i&&of(i)&&i.catch(o=>{io(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(gt(t[i],e,n,s));return r}function io(t,e,n,s){if(e&&e.vnode,e){let r=e.parent;const i=e.proxy,o=n;for(;r;){const c=r.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](t,i,o)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){fn(a,null,10,[t,i,o]);return}}wy(t)}function wy(t,e,n,s){console.error(t)}let Si=!1,Ta=!1;const at=[];let Lt=0;const Xs=[];let qs=null,ns=0;const Ys=[];let sn=null,ss=0;const Cf=Promise.resolve();let Cc=null,ba=null;function Af(t){const e=Cc||Cf;return t?e.then(this?t.bind(this):t):e}function _y(t){let e=Lt+1,n=at.length;for(;e<n;){const s=e+n>>>1;dr(at[s])<t?e=s+1:n=s}return e}function kf(t){(!at.length||!at.includes(t,Si&&t.allowRecurse?Lt+1:Lt))&&t!==ba&&(t.id==null?at.push(t):at.splice(_y(t.id),0,t),Rf())}function Rf(){!Si&&!Ta&&(Ta=!0,Cc=Cf.then(Of))}function Ey(t){const e=at.indexOf(t);e>Lt&&at.splice(e,1)}function Nf(t,e,n,s){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Rf()}function Iy(t){Nf(t,qs,Xs,ns)}function Ty(t){Nf(t,sn,Ys,ss)}function oo(t,e=null){if(Xs.length){for(ba=e,qs=[...new Set(Xs)],Xs.length=0,ns=0;ns<qs.length;ns++)qs[ns]();qs=null,ns=0,ba=null,oo(t,e)}}function Df(t){if(oo(),Ys.length){const e=[...new Set(Ys)];if(Ys.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,s)=>dr(n)-dr(s)),ss=0;ss<sn.length;ss++)sn[ss]();sn=null,ss=0}}const dr=t=>t.id==null?1/0:t.id;function Of(t){Ta=!1,Si=!0,oo(t),at.sort((n,s)=>dr(n)-dr(s));const e=At;try{for(Lt=0;Lt<at.length;Lt++){const n=at[Lt];n&&n.active!==!1&&fn(n,null,14)}}finally{Lt=0,at.length=0,Df(),Si=!1,Cc=null,(at.length||Xs.length||Ys.length)&&Of(t)}}function by(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ge;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(ya))}let a,c=s[a=qo(e)]||s[a=qo(Ot(e))];!c&&i&&(c=s[a=qo(Rs(e))]),c&&gt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(l,t,6,r)}}function Pf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Pf(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Qe(o,i),s.set(t,o),o)}function ao(t,e){return!t||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Rs(e))||se(t,e))}let pt=null,xf=null;function Ci(t){const e=pt;return pt=t,xf=t&&t.type.__scopeId||null,e}function Ac(t,e=pt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&fu(-1);const i=Ci(e),o=t(...r);return Ci(i),s._d&&fu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function zo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:I}=t;let E,k;const P=Ci(t);try{if(n.shapeFlag&4){const Q=r||s;E=St(u.call(Q,Q,h,i,g,f,y)),k=c}else{const Q=e;E=St(Q.length>1?Q(i,{attrs:c,slots:a,emit:l}):Q(i,null)),k=e.props?c:Sy(c)}}catch(Q){Js.length=0,io(Q,t,1),E=st(Bt)}let H=E;if(k&&I!==!1){const Q=Object.keys(k),{shapeFlag:le}=H;Q.length&&le&7&&(o&&Q.some(gc)&&(k=Cy(k,o)),H=yn(H,k))}return n.dirs&&(H=yn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),E=H,Ci(P),E}const Sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||eo(n))&&((e||(e={}))[n]=t[n]);return e},Cy=(t,e)=>{const n={};for(const s in t)(!gc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ay(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?nu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ao(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nu(s,o,l):!0:!!o;return!1}function nu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ao(n,i))return!0}return!1}function ky({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ry=t=>t.__isSuspense;function Ny(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Ty(t)}function fi(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=xe||pt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const su={};function di(t,e,n){return Mf(t,e,n)}function Mf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=xe;let c,l=!1,u=!1;if(je(t)?(c=()=>t.value,l=Ia(t)):hs(t)?(c=()=>t,s=!0):q(t)?(u=!0,l=t.some(k=>hs(k)||Ia(k)),c=()=>t.map(k=>{if(je(k))return k.value;if(hs(k))return Nn(k);if(X(k))return fn(k,a,2)})):X(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),gt(t,a,3,[f])}:c=At,e&&s){const k=c;c=()=>Nn(k())}let h,f=k=>{h=E.onStop=()=>{fn(k,a,4)}};if(gr)return f=At,e?n&&gt(e,a,3,[c(),u?[]:void 0,f]):c(),At;let g=u?[]:su;const y=()=>{if(!!E.active)if(e){const k=E.run();(s||l||(u?k.some((P,H)=>ur(P,g[H])):ur(k,g)))&&(h&&h(),gt(e,a,3,[k,g===su?void 0:g,f]),g=k)}else E.run()};y.allowRecurse=!!e;let I;r==="sync"?I=y:r==="post"?I=()=>et(y,a&&a.suspense):I=()=>Iy(y);const E=new _c(c,I);return e?n?y():g=E.run():r==="post"?et(E.run.bind(E),a&&a.suspense):E.run(),()=>{E.stop(),a&&a.scope&&mc(a.scope.effects,E)}}function Dy(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?Lf(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=xe;ys(this);const a=Mf(r,i.bind(s),n);return o?ys(o):Mn(),a}function Lf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Nn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Nn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(rf(t)||us(t))t.forEach(n=>{Nn(n,e)});else if(cf(t))for(const n in t)Nn(t[n],e);return t}function Oy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return uo(()=>{t.isMounted=!0}),jf(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],Py={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(t,{slots:e}){const n=wv(),s=Oy();let r;return()=>{const i=e.default&&Uf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==Bt){o=I;break}}const a=oe(t),{mode:c}=a;if(s.isLeaving)return Wo(o);const l=ru(o);if(!l)return Wo(o);const u=Sa(l,a,s,n);Ca(l,u);const h=n.subTree,f=h&&ru(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const I=y();r===void 0?r=I:I!==r&&(r=I,g=!0)}if(f&&f.type!==Bt&&(!kn(l,f)||g)){const I=Sa(f,a,s,n);if(Ca(f,I),c==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update()},Wo(o);c==="in-out"&&l.type!==Bt&&(I.delayLeave=(E,k,P)=>{const H=Ff(s,f);H[String(f.key)]=f,E._leaveCb=()=>{k(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},xy=Py;function Ff(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Sa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:I,onAppear:E,onAfterAppear:k,onAppearCancelled:P}=e,H=String(t.key),Q=Ff(n,t),le=(Z,ce)=>{Z&&gt(Z,s,9,ce)},Te=(Z,ce)=>{const we=ce[1];le(Z,ce),q(Z)?Z.every(Ue=>Ue.length<=1)&&we():Z.length<=1&&we()},Ae={mode:i,persisted:o,beforeEnter(Z){let ce=a;if(!n.isMounted)if(r)ce=I||a;else return;Z._leaveCb&&Z._leaveCb(!0);const we=Q[H];we&&kn(t,we)&&we.el._leaveCb&&we.el._leaveCb(),le(ce,[Z])},enter(Z){let ce=c,we=l,Ue=u;if(!n.isMounted)if(r)ce=E||c,we=k||l,Ue=P||u;else return;let Ve=!1;const yt=Z._enterCb=Jt=>{Ve||(Ve=!0,Jt?le(Ue,[Z]):le(we,[Z]),Ae.delayedLeave&&Ae.delayedLeave(),Z._enterCb=void 0)};ce?Te(ce,[Z,yt]):yt()},leave(Z,ce){const we=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return ce();le(h,[Z]);let Ue=!1;const Ve=Z._leaveCb=yt=>{Ue||(Ue=!0,ce(),yt?le(y,[Z]):le(g,[Z]),Z._leaveCb=void 0,Q[we]===t&&delete Q[we])};Q[we]=t,f?Te(f,[Z,Ve]):Ve()},clone(Z){return Sa(Z,e,n,s)}};return Ae}function Wo(t){if(co(t))return t=yn(t),t.children=null,t}function ru(t){return co(t)?t.children?t.children[0]:void 0:t}function Ca(t,e){t.shapeFlag&6&&t.component?Ca(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Uf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===nt?(o.patchFlag&128&&r++,s=s.concat(Uf(o.children,e,a))):(e||o.type!==Bt)&&s.push(a!=null?yn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Vf(t){return X(t)?{setup:t,name:t.name}:t}const pi=t=>!!t.type.__asyncLoader,co=t=>t.type.__isKeepAlive;function My(t,e){Bf(t,"a",e)}function Ly(t,e){Bf(t,"da",e)}function Bf(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(lo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)co(r.parent.vnode)&&Fy(s,e,n,r),r=r.parent}}function Fy(t,e,n,s){const r=lo(e,t,s,!0);Hf(()=>{mc(s[e],r)},n)}function lo(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ns(),ys(n);const a=gt(e,n,t,o);return Mn(),Ds(),a});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=xe)=>(!gr||t==="sp")&&lo(t,e,n),$f=Xt("bm"),uo=Xt("m"),Uy=Xt("bu"),Vy=Xt("u"),jf=Xt("bum"),Hf=Xt("um"),By=Xt("sp"),$y=Xt("rtg"),jy=Xt("rtc");function Hy(t,e=xe){lo("ec",t,e)}function Ky(t,e){const n=pt;if(n===null)return t;const s=fo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ge]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function bn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ns(),gt(c,n,8,[t.el,a,t,e]),Ds())}}const Kf="components";function kc(t,e){return zy(Kf,t,!0,e)||t}const qy=Symbol();function zy(t,e,n,s=!1){const r=pt||xe;if(r){const i=r.type;if(t===Kf){const a=bv(i);if(a&&(a===e||a===Ot(e)||a===so(Ot(e))))return i}const o=iu(r[t]||i[t],e)||iu(r.appContext[t],e);return!o&&s?i:o}}function iu(t,e){return t&&(t[e]||t[Ot(e)]||t[so(Ot(e))])}function Wy(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Aa=t=>t?nd(t)?fo(t)||t.proxy:Aa(t.parent):null,Ai=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Aa(t.parent),$root:t=>Aa(t.root),$emit:t=>t.emit,$options:t=>zf(t),$forceUpdate:t=>t.f||(t.f=()=>kf(t.update)),$nextTick:t=>t.n||(t.n=Af.bind(t.proxy)),$watch:t=>Dy.bind(t)}),Gy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ge&&se(s,e))return o[e]=1,s[e];if(r!==ge&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==ge&&se(n,e))return o[e]=4,n[e];ka&&(o[e]=0)}}const u=Ai[e];let h,f;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&se(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ge&&se(r,e)?(r[e]=n,!0):s!==ge&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&se(t,o)||e!==ge&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Ai,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ka=!0;function Qy(t){const e=zf(t),n=t.proxy,s=t.ctx;ka=!1,e.beforeCreate&&ou(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:I,deactivated:E,beforeDestroy:k,beforeUnmount:P,destroyed:H,unmounted:Q,render:le,renderTracked:Te,renderTriggered:Ae,errorCaptured:Z,serverPrefetch:ce,expose:we,inheritAttrs:Ue,components:Ve,directives:yt,filters:Jt}=e;if(l&&Xy(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const ue=o[me];X(ue)&&(s[me]=ue.bind(n))}if(r){const me=r.call(n,n);De(me)&&(t.data=Wn(me))}if(ka=!0,i)for(const me in i){const ue=i[me],it=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):At,Jn=!X(ue)&&X(ue.set)?ue.set.bind(n):At,Mt=Ct({get:it,set:Jn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Et=>Mt.value=Et})}if(a)for(const me in a)qf(a[me],s,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{fi(ue,me[ue])})}u&&ou(u,t,"c");function ke(me,ue){q(ue)?ue.forEach(it=>me(it.bind(n))):ue&&me(ue.bind(n))}if(ke($f,h),ke(uo,f),ke(Uy,g),ke(Vy,y),ke(My,I),ke(Ly,E),ke(Hy,Z),ke(jy,Te),ke($y,Ae),ke(jf,P),ke(Hf,Q),ke(By,ce),q(we))if(we.length){const me=t.exposed||(t.exposed={});we.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:it=>n[ue]=it})})}else t.exposed||(t.exposed={});le&&t.render===At&&(t.render=le),Ue!=null&&(t.inheritAttrs=Ue),Ve&&(t.components=Ve),yt&&(t.directives=yt)}function Xy(t,e,n,s=!1){q(t)&&(t=Ra(t));for(const r in t){const i=t[r];let o;De(i)?"default"in i?o=kt(i.from||r,i.default,!0):o=kt(i.from||r):o=kt(i),je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ou(t,e,n){gt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qf(t,e,n,s){const r=s.includes(".")?Lf(n,s):()=>n[s];if(Me(t)){const i=e[t];X(i)&&di(r,i)}else if(X(t))di(r,t.bind(n));else if(De(t))if(q(t))t.forEach(i=>qf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&di(r,i,t)}}function zf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ki(c,l,o,!0)),ki(c,e,o)),i.set(e,c),c}function ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ki(t,i,n,!0),r&&r.forEach(o=>ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Yy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yy={data:au,props:Cn,emits:Cn,methods:Cn,computed:Cn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Cn,directives:Cn,watch:Zy,provide:au,inject:Jy};function au(t,e){return e?t?function(){return Qe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Jy(t,e){return Cn(Ra(t),Ra(e))}function Ra(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function Zy(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function ev(t,e,n,s=!1){const r={},i={};bi(i,ho,1),t.propsDefaults=Object.create(null),Wf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:fy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function tv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ao(t.emitsOptions,f))continue;const g=e[f];if(c)if(se(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Ot(f);r[y]=Na(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Wf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Rs(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Na(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h)&&!0)&&(delete i[h],l=!0)}l&&Ht(t,"set","$attrs")}function Wf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ui(c))continue;const l=e[c];let u;r&&se(r,u=Ot(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ao(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||ge;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Na(r,c,h,l[h],t,!se(l,h))}}return o}function Na(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(ys(r),s=l[n]=c.call(null,e),Mn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Rs(n))&&(s=!0))}return s}function Gf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Gf(h,e,!0);Qe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,ls),ls;if(q(i))for(let u=0;u<i.length;u++){const h=Ot(i[u]);cu(h)&&(o[h]=ge)}else if(i)for(const u in i){const h=Ot(u);if(cu(h)){const f=i[u],g=o[h]=q(f)||X(f)?{type:f}:f;if(g){const y=hu(Boolean,g.type),I=hu(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function cu(t){return t[0]!=="$"}function lu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function uu(t,e){return lu(t)===lu(e)}function hu(t,e){return q(e)?e.findIndex(n=>uu(n,t)):X(e)&&uu(e,t)?0:-1}const Qf=t=>t[0]==="_"||t==="$stable",Rc=t=>q(t)?t.map(St):[St(t)],nv=(t,e,n)=>{if(e._n)return e;const s=Ac((...r)=>Rc(e(...r)),n);return s._c=!1,s},Xf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Qf(r))continue;const i=t[r];if(X(i))e[r]=nv(r,i,s);else if(i!=null){const o=Rc(i);e[r]=()=>o}}},Yf=(t,e)=>{const n=Rc(e);t.slots.default=()=>n},sv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),bi(e,"_",n)):Xf(e,t.slots={})}else t.slots={},e&&Yf(t,e);bi(t.slots,ho,1)},rv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Xf(e,r)),o=e}else e&&(Yf(t,e),o={default:1});if(i)for(const a in r)!Qf(a)&&!(a in o)&&delete r[a]};function Jf(){return{app:null,config:{isNativeTag:Om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function ov(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!De(r)&&(r=null);const i=Jf(),o=new Set;let a=!1;const c=i.app={_uid:iv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Cv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=st(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,fo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Da(t,e,n,s,r=!1){if(q(t)){t.forEach((f,g)=>Da(f,e&&(q(e)?e[g]:e),n,s,r));return}if(pi(s)&&!r)return;const i=s.shapeFlag&4?fo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,se(h,l)&&(h[l]=null)):je(l)&&(l.value=null)),X(c))fn(c,a,12,[o,u]);else{const f=Me(c),g=je(c);if(f||g){const y=()=>{if(t.f){const I=f?u[c]:c.value;r?q(I)&&mc(I,i):q(I)?I.includes(i)||I.push(i):f?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,se(h,c)&&(h[c]=o)):je(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,et(y,n)):y()}}}const et=Ny;function av(t){return cv(t)}function cv(t,e){const n=Um();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=At,cloneNode:y,insertStaticContent:I}=t,E=(d,p,m,_=null,w=null,A=null,D=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!kn(d,p)&&(_=F(d),ht(d,w,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:U,shapeFlag:x}=p;switch(T){case Nc:k(d,p,m,_);break;case Bt:P(d,p,m,_);break;case Go:d==null&&H(p,m,_,D);break;case nt:yt(d,p,m,_,w,A,D,C,R);break;default:x&1?Te(d,p,m,_,w,A,D,C,R):x&6?Jt(d,p,m,_,w,A,D,C,R):(x&64||x&128)&&T.process(d,p,m,_,w,A,D,C,R,ye)}U!=null&&w&&Da(U,d&&d.ref,A,p||d,!p)},k=(d,p,m,_)=>{if(d==null)s(p.el=a(p.children),m,_);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},P=(d,p,m,_)=>{d==null?s(p.el=c(p.children||""),m,_):p.el=d.el},H=(d,p,m,_)=>{[d.el,d.anchor]=I(d.children,p,m,_,d.el,d.anchor)},Q=({el:d,anchor:p},m,_)=>{let w;for(;d&&d!==p;)w=f(d),s(d,m,_),d=w;s(p,m,_)},le=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},Te=(d,p,m,_,w,A,D,C,R)=>{D=D||p.type==="svg",d==null?Ae(p,m,_,w,A,D,C,R):we(d,p,w,A,D,C,R)},Ae=(d,p,m,_,w,A,D,C)=>{let R,T;const{type:U,props:x,shapeFlag:V,transition:K,patchFlag:re,dirs:fe}=d;if(d.el&&y!==void 0&&re===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,A,x&&x.is,x),V&8?u(R,d.children):V&16&&ce(d.children,R,null,_,w,A&&U!=="foreignObject",D,C),fe&&bn(d,null,_,"created"),x){for(const _e in x)_e!=="value"&&!ui(_e)&&i(R,_e,null,x[_e],A,d.children,_,w,N);"value"in x&&i(R,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Tt(T,_,d)}Z(R,d,d.scopeId,D,_)}fe&&bn(d,null,_,"beforeMount");const de=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;de&&K.beforeEnter(R),s(R,p,m),((T=x&&x.onVnodeMounted)||de||fe)&&et(()=>{T&&Tt(T,_,d),de&&K.enter(R),fe&&bn(d,null,_,"mounted")},w)},Z=(d,p,m,_,w)=>{if(m&&g(d,m),_)for(let A=0;A<_.length;A++)g(d,_[A]);if(w){let A=w.subTree;if(p===A){const D=w.vnode;Z(d,D,D.scopeId,D.slotScopeIds,w.parent)}}},ce=(d,p,m,_,w,A,D,C,R=0)=>{for(let T=R;T<d.length;T++){const U=d[T]=C?rn(d[T]):St(d[T]);E(null,U,p,m,_,w,A,D,C)}},we=(d,p,m,_,w,A,D)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:U}=p;R|=d.patchFlag&16;const x=d.props||ge,V=p.props||ge;let K;m&&Sn(m,!1),(K=V.onVnodeBeforeUpdate)&&Tt(K,m,p,d),U&&bn(p,d,m,"beforeUpdate"),m&&Sn(m,!0);const re=w&&p.type!=="foreignObject";if(T?Ue(d.dynamicChildren,T,C,m,_,re,A):D||it(d,p,C,null,m,_,re,A,!1),R>0){if(R&16)Ve(C,p,x,V,m,_,w);else if(R&2&&x.class!==V.class&&i(C,"class",null,V.class,w),R&4&&i(C,"style",x.style,V.style,w),R&8){const fe=p.dynamicProps;for(let de=0;de<fe.length;de++){const _e=fe[de],vt=x[_e],Zn=V[_e];(Zn!==vt||_e==="value")&&i(C,_e,vt,Zn,w,d.children,m,_,N)}}R&1&&d.children!==p.children&&u(C,p.children)}else!D&&T==null&&Ve(C,p,x,V,m,_,w);((K=V.onVnodeUpdated)||U)&&et(()=>{K&&Tt(K,m,p,d),U&&bn(p,d,m,"updated")},_)},Ue=(d,p,m,_,w,A,D)=>{for(let C=0;C<p.length;C++){const R=d[C],T=p[C],U=R.el&&(R.type===nt||!kn(R,T)||R.shapeFlag&70)?h(R.el):m;E(R,T,U,null,_,w,A,D,!0)}},Ve=(d,p,m,_,w,A,D)=>{if(m!==_){for(const C in _){if(ui(C))continue;const R=_[C],T=m[C];R!==T&&C!=="value"&&i(d,C,T,R,D,p.children,w,A,N)}if(m!==ge)for(const C in m)!ui(C)&&!(C in _)&&i(d,C,m[C],null,D,p.children,w,A,N);"value"in _&&i(d,"value",m.value,_.value)}},yt=(d,p,m,_,w,A,D,C,R)=>{const T=p.el=d?d.el:a(""),U=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:V,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),d==null?(s(T,m,_),s(U,m,_),ce(p.children,m,U,w,A,D,C,R)):x>0&&x&64&&V&&d.dynamicChildren?(Ue(d.dynamicChildren,V,m,w,A,D,C),(p.key!=null||w&&p===w.subTree)&&Zf(d,p,!0)):it(d,p,m,U,w,A,D,C,R)},Jt=(d,p,m,_,w,A,D,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?w.ctx.activate(p,m,_,D,R):Yn(p,m,_,w,A,D,R):ke(d,p,R)},Yn=(d,p,m,_,w,A,D)=>{const C=d.component=vv(d,_,w);if(co(d)&&(C.ctx.renderer=ye),_v(C),C.asyncDep){if(w&&w.registerDep(C,me),!d.el){const R=C.subTree=st(Bt);P(null,R,p,m)}return}me(C,d,p,m,w,A,D)},ke=(d,p,m)=>{const _=p.component=d.component;if(Ay(d,p,m))if(_.asyncDep&&!_.asyncResolved){ue(_,p,m);return}else _.next=p,Ey(_.update),_.update();else p.el=d.el,_.vnode=p},me=(d,p,m,_,w,A,D)=>{const C=()=>{if(d.isMounted){let{next:U,bu:x,u:V,parent:K,vnode:re}=d,fe=U,de;Sn(d,!1),U?(U.el=re.el,ue(d,U,D)):U=re,x&&hi(x),(de=U.props&&U.props.onVnodeBeforeUpdate)&&Tt(de,K,U,re),Sn(d,!0);const _e=zo(d),vt=d.subTree;d.subTree=_e,E(vt,_e,h(vt.el),F(vt),d,w,A),U.el=_e.el,fe===null&&ky(d,_e.el),V&&et(V,w),(de=U.props&&U.props.onVnodeUpdated)&&et(()=>Tt(de,K,U,re),w)}else{let U;const{el:x,props:V}=p,{bm:K,m:re,parent:fe}=d,de=pi(p);if(Sn(d,!1),K&&hi(K),!de&&(U=V&&V.onVnodeBeforeMount)&&Tt(U,fe,p),Sn(d,!0),x&&Y){const _e=()=>{d.subTree=zo(d),Y(x,d.subTree,d,w,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=zo(d);E(null,_e,m,_,d,w,A),p.el=_e.el}if(re&&et(re,w),!de&&(U=V&&V.onVnodeMounted)){const _e=p;et(()=>Tt(U,fe,_e),w)}(p.shapeFlag&256||fe&&pi(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&et(d.a,w),d.isMounted=!0,p=m=_=null}},R=d.effect=new _c(C,()=>kf(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,Sn(d,!0),T()},ue=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,tv(d,p.props,_,m),rv(d,p.children,m),Ns(),oo(void 0,d.update),Ds()},it=(d,p,m,_,w,A,D,C,R=!1)=>{const T=d&&d.children,U=d?d.shapeFlag:0,x=p.children,{patchFlag:V,shapeFlag:K}=p;if(V>0){if(V&128){Mt(T,x,m,_,w,A,D,C,R);return}else if(V&256){Jn(T,x,m,_,w,A,D,C,R);return}}K&8?(U&16&&N(T,w,A),x!==T&&u(m,x)):U&16?K&16?Mt(T,x,m,_,w,A,D,C,R):N(T,w,A,!0):(U&8&&u(m,""),K&16&&ce(x,m,_,w,A,D,C,R))},Jn=(d,p,m,_,w,A,D,C,R)=>{d=d||ls,p=p||ls;const T=d.length,U=p.length,x=Math.min(T,U);let V;for(V=0;V<x;V++){const K=p[V]=R?rn(p[V]):St(p[V]);E(d[V],K,m,null,w,A,D,C,R)}T>U?N(d,w,A,!0,!1,x):ce(p,m,_,w,A,D,C,R,x)},Mt=(d,p,m,_,w,A,D,C,R)=>{let T=0;const U=p.length;let x=d.length-1,V=U-1;for(;T<=x&&T<=V;){const K=d[T],re=p[T]=R?rn(p[T]):St(p[T]);if(kn(K,re))E(K,re,m,null,w,A,D,C,R);else break;T++}for(;T<=x&&T<=V;){const K=d[x],re=p[V]=R?rn(p[V]):St(p[V]);if(kn(K,re))E(K,re,m,null,w,A,D,C,R);else break;x--,V--}if(T>x){if(T<=V){const K=V+1,re=K<U?p[K].el:_;for(;T<=V;)E(null,p[T]=R?rn(p[T]):St(p[T]),m,re,w,A,D,C,R),T++}}else if(T>V)for(;T<=x;)ht(d[T],w,A,!0),T++;else{const K=T,re=T,fe=new Map;for(T=re;T<=V;T++){const ot=p[T]=R?rn(p[T]):St(p[T]);ot.key!=null&&fe.set(ot.key,T)}let de,_e=0;const vt=V-re+1;let Zn=!1,jl=0;const Bs=new Array(vt);for(T=0;T<vt;T++)Bs[T]=0;for(T=K;T<=x;T++){const ot=d[T];if(_e>=vt){ht(ot,w,A,!0);continue}let It;if(ot.key!=null)It=fe.get(ot.key);else for(de=re;de<=V;de++)if(Bs[de-re]===0&&kn(ot,p[de])){It=de;break}It===void 0?ht(ot,w,A,!0):(Bs[It-re]=T+1,It>=jl?jl=It:Zn=!0,E(ot,p[It],m,null,w,A,D,C,R),_e++)}const Hl=Zn?lv(Bs):ls;for(de=Hl.length-1,T=vt-1;T>=0;T--){const ot=re+T,It=p[ot],Kl=ot+1<U?p[ot+1].el:_;Bs[T]===0?E(null,It,m,Kl,w,A,D,C,R):Zn&&(de<0||T!==Hl[de]?Et(It,m,Kl,2):de--)}}},Et=(d,p,m,_,w=null)=>{const{el:A,type:D,transition:C,children:R,shapeFlag:T}=d;if(T&6){Et(d.component.subTree,p,m,_);return}if(T&128){d.suspense.move(p,m,_);return}if(T&64){D.move(d,p,m,ye);return}if(D===nt){s(A,p,m);for(let x=0;x<R.length;x++)Et(R[x],p,m,_);s(d.anchor,p,m);return}if(D===Go){Q(d,p,m);return}if(_!==2&&T&1&&C)if(_===0)C.beforeEnter(A),s(A,p,m),et(()=>C.enter(A),w);else{const{leave:x,delayLeave:V,afterLeave:K}=C,re=()=>s(A,p,m),fe=()=>{x(A,()=>{re(),K&&K()})};V?V(A,re,fe):fe()}else s(A,p,m)},ht=(d,p,m,_=!1,w=!1)=>{const{type:A,props:D,ref:C,children:R,dynamicChildren:T,shapeFlag:U,patchFlag:x,dirs:V}=d;if(C!=null&&Da(C,null,m,d,!0),U&256){p.ctx.deactivate(d);return}const K=U&1&&V,re=!pi(d);let fe;if(re&&(fe=D&&D.onVnodeBeforeUnmount)&&Tt(fe,p,d),U&6)M(d.component,m,_);else{if(U&128){d.suspense.unmount(m,_);return}K&&bn(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,m,w,ye,_):T&&(A!==nt||x>0&&x&64)?N(T,p,m,!1,!0):(A===nt&&x&384||!w&&U&16)&&N(R,p,m),_&&Ho(d)}(re&&(fe=D&&D.onVnodeUnmounted)||K)&&et(()=>{fe&&Tt(fe,p,d),K&&bn(d,null,p,"unmounted")},m)},Ho=d=>{const{type:p,el:m,anchor:_,transition:w}=d;if(p===nt){v(m,_);return}if(p===Go){le(d);return}const A=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:C}=w,R=()=>D(m,A);C?C(d.el,A,R):R()}else A()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:_,scope:w,update:A,subTree:D,um:C}=d;_&&hi(_),w.stop(),A&&(A.active=!1,ht(D,d,p,m)),C&&et(C,p),et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,_=!1,w=!1,A=0)=>{for(let D=A;D<d.length;D++)ht(d[D],p,m,_,w)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,m)=>{d==null?p._vnode&&ht(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,m),Df(),p._vnode=d},ye={p:E,um:ht,m:Et,r:Ho,mt:Yn,mc:ce,pc:it,pbc:Ue,n:F,o:t};let ee,Y;return e&&([ee,Y]=e(ye)),{render:he,hydrate:ee,createApp:ov(he,ee)}}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zf(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rn(r[i]),a.el=o.el),n||Zf(o,a))}}function lv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const uv=t=>t.__isTeleport,nt=Symbol(void 0),Nc=Symbol(void 0),Bt=Symbol(void 0),Go=Symbol(void 0),Js=[];let _t=null;function fs(t=!1){Js.push(_t=t?null:[])}function hv(){Js.pop(),_t=Js[Js.length-1]||null}let pr=1;function fu(t){pr+=t}function ed(t){return t.dynamicChildren=pr>0?_t||ls:null,hv(),pr>0&&_t&&_t.push(t),t}function Zs(t,e,n,s,r,i){return ed(mt(t,e,n,s,r,i,!0))}function fv(t,e,n,s,r){return ed(st(t,e,n,s,r,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const ho="__vInternal",td=({key:t})=>t!=null?t:null,gi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||je(t)||X(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function mt(t,e=null,n=null,s=0,r=null,i=t===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&td(e),ref:e&&gi(e),scopeId:xf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Oc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),pr>0&&!o&&_t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_t.push(c),c}const st=dv;function dv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===qy)&&(t=Bt),Oa(t)){const a=yn(t,e,!0);return n&&Oc(a,n),pr>0&&!i&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(Sv(t)&&(t=t.__vccOpts),e){e=pv(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=pc(a)),De(c)&&(_f(c)&&!q(c)&&(c=Qe({},c)),e.style=dc(c))}const o=Me(t)?1:Ry(t)?128:uv(t)?64:De(t)?4:X(t)?2:0;return mt(t,e,n,s,r,o,i,!0)}function pv(t){return t?_f(t)||ho in t?Qe({},t):t:null}function yn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?gv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&td(a),ref:e&&e.ref?n&&r?q(r)?r.concat(gi(e)):[r,gi(e)]:gi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor}}function Dc(t=" ",e=0){return st(Nc,null,t,e)}function St(t){return t==null||typeof t=="boolean"?st(Bt):q(t)?st(nt,null,t.slice()):typeof t=="object"?rn(t):st(Nc,null,String(t))}function rn(t){return t.el===null||t.memo?t:yn(t)}function Oc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ho in e)?e._ctx=pt:r===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),s&64?(n=16,e=[Dc(e)]):n=8);t.children=e,t.shapeFlag|=n}function gv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=pc([e.class,s.class]));else if(r==="style")e.style=dc([e.style,s.style]);else if(eo(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){gt(t,e,7,[n,s])}const mv=Jf();let yv=0;function vv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||mv,i={uid:yv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(s,r),emitsOptions:Pf(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=by.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const wv=()=>xe||pt,ys=t=>{xe=t,t.scope.on()},Mn=()=>{xe&&xe.scope.off(),xe=null};function nd(t){return t.vnode.shapeFlag&4}let gr=!1;function _v(t,e=!1){gr=e;const{props:n,children:s}=t.vnode,r=nd(t);ev(t,n,r,e),sv(t,s);const i=r?Ev(t,e):void 0;return gr=!1,i}function Ev(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ef(new Proxy(t.ctx,Gy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Tv(t):null;ys(t),Ns();const i=fn(s,t,0,[t.props,r]);if(Ds(),Mn(),of(i)){if(i.then(Mn,Mn),e)return i.then(o=>{du(t,o,e)}).catch(o=>{io(o,t,0)});t.asyncDep=i}else du(t,i,e)}else sd(t,e)}function du(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Sf(e)),sd(t,n)}let pu;function sd(t,e,n){const s=t.type;if(!t.render){if(!e&&pu&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);s.render=pu(r,l)}}t.render=s.render||At}ys(t),Ns(),Qy(t),Ds(),Mn()}function Iv(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function Tv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Iv(t))},slots:t.slots,emit:t.emit,expose:e}}function fo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sf(Ef(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)}}))}function bv(t){return X(t)&&t.displayName||t.name}function Sv(t){return X(t)&&"__vccOpts"in t}const Ct=(t,e)=>vy(t,e,gr);function rd(t,e,n){const s=arguments.length;return s===2?De(e)&&!q(e)?Oa(e)?st(t,null,[e]):st(t,e):st(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Oa(n)&&(n=[n]),st(t,e,n))}const Cv="3.2.34",Av="http://www.w3.org/2000/svg",Rn=typeof document!="undefined"?document:null,gu=Rn&&Rn.createElement("template"),kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Rn.createElementNS(Av,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{gu.innerHTML=s?`<svg>${t}</svg>`:t;const a=gu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Rv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nv(t,e,n){const s=t.style,r=Me(n);if(n&&!r){for(const i in n)Pa(s,i,n[i]);if(e&&!Me(e))for(const i in e)n[i]==null&&Pa(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const mu=/\s*!important$/;function Pa(t,e,n){if(q(n))n.forEach(s=>Pa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Dv(t,e);mu.test(n)?t.setProperty(Rs(s),n.replace(mu,""),"important"):t[s]=n}}const yu=["Webkit","Moz","ms"],Qo={};function Dv(t,e){const n=Qo[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return Qo[e]=s;s=so(s);for(let r=0;r<yu.length;r++){const i=yu[r]+s;if(i in t)return Qo[e]=i}return e}const vu="http://www.w3.org/1999/xlink";function Ov(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n);else{const i=Am(e);n==null||i&&!nf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Pv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=nf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[id,xv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let xa=0;const Mv=Promise.resolve(),Lv=()=>{xa=0},Fv=()=>xa||(Mv.then(Lv),xa=id());function rs(t,e,n,s){t.addEventListener(e,n,s)}function Uv(t,e,n,s){t.removeEventListener(e,n,s)}function Vv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Bv(e);if(s){const l=i[e]=$v(s,r);rs(t,a,l,c)}else o&&(Uv(t,a,o,c),i[e]=void 0)}}const wu=/(?:Once|Passive|Capture)$/;function Bv(t){let e;if(wu.test(t)){e={};let n;for(;n=t.match(wu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Rs(t.slice(2)),e]}function $v(t,e){const n=s=>{const r=s.timeStamp||id();(xv||r>=n.attached-1)&&gt(jv(s,n.value),e,5,[s])};return n.value=t,n.attached=Fv(),n}function jv(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const _u=/^on[a-z]/,Hv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Rv(t,s,r):e==="style"?Nv(t,n,s):eo(e)?gc(e)||Vv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kv(t,e,s,r))?Pv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ov(t,e,s,r))};function Kv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&_u.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_u.test(e)&&Me(n)?!1:e in t}const qv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xy.props;const Eu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>hi(e,n):e};function zv(t){t.target.composing=!0}function Iu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wv={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Eu(r);const i=s||r.props&&r.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ya(a)),t._assign(a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",zv),rs(t,"compositionend",Iu),rs(t,"change",Iu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Eu(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ya(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Gv=Qe({patchProp:Hv},kv);let Tu;function Qv(){return Tu||(Tu=av(Gv))}const Xv=(...t)=>{const e=Qv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Yv(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Yv(t){return Me(t)?document.querySelector(t):t}var Jv=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const Zv={};function ew(t,e){const n=kc("router-view");return fs(),fv(n)}var tw=Jv(Zv,[["render",ew]]);/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const od=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Os=t=>od?Symbol(t):"_vr_"+t,nw=Os("rvlm"),bu=Os("rvd"),po=Os("r"),Pc=Os("rl"),Ma=Os("rvl"),is=typeof window!="undefined";function sw(t){return t.__esModule||od&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Xo(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const er=()=>{},rw=/\/$/,iw=t=>t.replace(rw,"");function Yo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=lw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function ow(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Su(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&vs(e.matched[s],n.matched[r])&&ad(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ad(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cw(t[n],e[n]))return!1;return!0}function cw(t,e){return Array.isArray(t)?Cu(t,e):Array.isArray(e)?Cu(e,t):t===e}function Cu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function lw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var mr;(function(t){t.pop="pop",t.push="push"})(mr||(mr={}));var tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tr||(tr={}));function uw(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iw(t)}const hw=/^[^#]+#/;function fw(t,e){return t.replace(hw,"#")+e}function dw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const go=()=>({left:window.pageXOffset,top:window.pageYOffset});function pw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=dw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Au(t,e){return(history.state?history.state.position-e:-1)+t}const La=new Map;function gw(t,e){La.set(t,e)}function mw(t){const e=La.get(t);return La.delete(t),e}let yw=()=>location.protocol+"//"+location.host;function cd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Su(c,"")}return Su(n,t)+s+r}function vw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=cd(t,location),y=n.value,I=e.value;let E=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}E=I?f.position-I.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:E,type:mr.pop,direction:E?E>0?tr.forward:tr.back:tr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:go()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ku(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?go():null}}function ww(t){const{history:e,location:n}=window,s={value:cd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:yw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,ku(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=pe({},r.value,e.state,{forward:c,scroll:go()});i(u.current,u,!0);const h=pe({},ku(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function _w(t){t=uw(t);const e=ww(t),n=vw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:fw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ew(t){return typeof t=="string"||t&&typeof t=="object"}function ld(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ud=Os("nf");var Ru;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ru||(Ru={}));function ws(t,e){return pe(new Error,{type:t,[ud]:!0},e)}function tn(t,e){return t instanceof Error&&ud in t&&(e==null||!!(t.type&e))}const Nu="[^/]+?",Iw={sensitive:!1,strict:!1,start:!0,end:!0},Tw=/[.+*?^${}()[\]/\\]/g;function bw(t,e){const n=pe({},Iw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Tw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:I,optional:E,regexp:k}=f;i.push({name:y,repeatable:I,optional:E});const P=k||Nu;if(P!==Nu){g+=10;try{new RegExp(`(${P})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+Q.message)}}let H=I?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(H=E&&l.length<2?`(?:/${H})`:"/"+H),E&&(H+="?"),r+=H,g+=20,E&&(g+=-8),I&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:E}=g,k=y in l?l[y]:"";if(Array.isArray(k)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(k)?k.join("/"):k;if(!P)if(E)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Sw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Sw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Aw={type:0,value:""},kw=/[a-zA-Z0-9_]/;function Rw(t){if(!t)return[[]];if(t==="/")return[[Aw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:kw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Nw(t,e,n){const s=bw(Rw(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Dw(t,e){const n=[],s=new Map;e=Ou({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=Pw(u);y.aliasOf=f&&f.record;const I=Ou(e,u),E=[y];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of H)E.push(pe({},y,{components:f?f.record.components:y.components,path:Q,aliasOf:f?f.record:y}))}let k,P;for(const H of E){const{path:Q}=H;if(h&&Q[0]!=="/"){const le=h.record.path,Te=le[le.length-1]==="/"?"":"/";H.path=h.record.path+(Q&&Te+Q)}if(k=Nw(H,h,I),f?f.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),g&&u.name&&!Du(k)&&o(u.name)),"children"in y){const le=y.children;for(let Te=0;Te<le.length;Te++)i(le[Te],k,f&&f.children[Te])}f=f||k,c(k)}return P?()=>{o(P)}:er}function o(u){if(ld(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Cw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Du(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,I;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ws(1,{location:u});I=f.record.name,g=pe(Ow(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw ws(1,{location:u,currentLocation:h});I=f.record.name,g=pe({},h.params,u.params),y=f.stringify(g)}const E=[];let k=f;for(;k;)E.unshift(k.record),k=k.parent;return{name:I,path:y,params:g,matched:E,meta:Mw(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ow(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Pw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function xw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Du(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mw(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Ou(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hd(t,e){return e.children.some(n=>n===t||hd(t,n))}const fd=/#/g,Lw=/&/g,Fw=/\//g,Uw=/=/g,Vw=/\?/g,dd=/\+/g,Bw=/%5B/g,$w=/%5D/g,pd=/%5E/g,jw=/%60/g,gd=/%7B/g,Hw=/%7C/g,md=/%7D/g,Kw=/%20/g;function xc(t){return encodeURI(""+t).replace(Hw,"|").replace(Bw,"[").replace($w,"]")}function qw(t){return xc(t).replace(gd,"{").replace(md,"}").replace(pd,"^")}function Fa(t){return xc(t).replace(dd,"%2B").replace(Kw,"+").replace(fd,"%23").replace(Lw,"%26").replace(jw,"`").replace(gd,"{").replace(md,"}").replace(pd,"^")}function zw(t){return Fa(t).replace(Uw,"%3D")}function Ww(t){return xc(t).replace(fd,"%23").replace(Vw,"%3F")}function Gw(t){return t==null?"":Ww(t).replace(Fw,"%2F")}function Ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Qw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(dd," "),o=i.indexOf("="),a=Ri(o<0?i:i.slice(0,o)),c=o<0?null:Ri(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Pu(t){let e="";for(let n in t){const s=t[n];if(n=zw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Fa(i)):[s&&Fa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function $s(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function on(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):Ew(h)?a(ws(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Jo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Yw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(on(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=sw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&on(f,n,s,i,o)()}))}}return r}function Yw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xu(t){const e=kt(po),n=kt(Pc),s=Ct(()=>e.resolve(Qs(t.to))),r=Ct(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(vs.bind(null,u));if(f>-1)return f;const g=Mu(c[l-2]);return l>1&&Mu(u)===g&&h[h.length-1].path!==g?h.findIndex(vs.bind(null,c[l-2])):f}),i=Ct(()=>r.value>-1&&t_(n.params,s.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&ad(n.params,s.value.params));function a(c={}){return e_(c)?e[Qs(t.replace)?"replace":"push"](Qs(t.to)).catch(er):Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Jw=Vf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xu,setup(t,{slots:e}){const n=Wn(xu(t)),{options:s}=kt(po),r=Ct(()=>({[Lu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Zw=Jw;function e_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function t_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Mu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lu=(t,e,n)=>t!=null?t:e!=null?e:n,n_=Vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kt(Ma),r=Ct(()=>t.route||s.value),i=kt(bu,0),o=Ct(()=>r.value.matched[i]);fi(bu,i+1),fi(nw,o),fi(Ma,r);const a=dy();return di(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!vs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Fu(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,I=rd(u,pe({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Fu(n.default,{Component:I,route:c})||I}}});function Fu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const s_=n_;function r_(t){const e=Dw(t.routes,t),n=t.parseQuery||Qw,s=t.stringifyQuery||Pu,r=t.history,i=$s(),o=$s(),a=$s(),c=py(en);let l=en;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,v=>""+v),h=Xo.bind(null,Gw),f=Xo.bind(null,Ri);function g(v,M){let N,F;return ld(v)?(N=e.getRecordMatcher(v),F=M):F=v,e.addRoute(F,N)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function I(){return e.getRoutes().map(v=>v.record)}function E(v){return!!e.getRecordMatcher(v)}function k(v,M){if(M=pe({},M||c.value),typeof v=="string"){const Y=Yo(n,v,M.path),d=e.resolve({path:Y.path},M),p=r.createHref(Y.fullPath);return pe(Y,d,{params:f(d.params),hash:Ri(Y.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=pe({},v,{path:Yo(n,v.path,M.path).path});else{const Y=pe({},v.params);for(const d in Y)Y[d]==null&&delete Y[d];N=pe({},v,{params:h(v.params)}),M.params=h(M.params)}const F=e.resolve(N,M),he=v.hash||"";F.params=u(f(F.params));const ye=ow(s,pe({},v,{hash:qw(he),path:F.path})),ee=r.createHref(ye);return pe({fullPath:ye,hash:he,query:s===Pu?Xw(v.query):v.query||{}},F,{redirectedFrom:void 0,href:ee})}function P(v){return typeof v=="string"?Yo(n,v,c.value.path):pe({},v)}function H(v,M){if(l!==v)return ws(8,{from:M,to:v})}function Q(v){return Ae(v)}function le(v){return Q(pe(P(v),{replace:!0}))}function Te(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let F=typeof N=="function"?N(v):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),pe({query:v.query,hash:v.hash,params:v.params},F)}}function Ae(v,M){const N=l=k(v),F=c.value,he=v.state,ye=v.force,ee=v.replace===!0,Y=Te(N);if(Y)return Ae(pe(P(Y),{state:he,force:ye,replace:ee}),M||N);const d=N;d.redirectedFrom=M;let p;return!ye&&aw(s,F,N)&&(p=ws(16,{to:d,from:F}),Jn(F,F,!0,!1)),(p?Promise.resolve(p):ce(d,F)).catch(m=>tn(m)?tn(m,2)?m:it(m):me(m,d,F)).then(m=>{if(m){if(tn(m,2))return Ae(pe(P(m.to),{state:he,force:ye,replace:ee}),M||d)}else m=Ue(d,F,!0,ee,he);return we(d,F,m),m})}function Z(v,M){const N=H(v,M);return N?Promise.reject(N):Promise.resolve()}function ce(v,M){let N;const[F,he,ye]=i_(v,M);N=Jo(F.reverse(),"beforeRouteLeave",v,M);for(const Y of F)Y.leaveGuards.forEach(d=>{N.push(on(d,v,M))});const ee=Z.bind(null,v,M);return N.push(ee),es(N).then(()=>{N=[];for(const Y of i.list())N.push(on(Y,v,M));return N.push(ee),es(N)}).then(()=>{N=Jo(he,"beforeRouteUpdate",v,M);for(const Y of he)Y.updateGuards.forEach(d=>{N.push(on(d,v,M))});return N.push(ee),es(N)}).then(()=>{N=[];for(const Y of v.matched)if(Y.beforeEnter&&!M.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)N.push(on(d,v,M));else N.push(on(Y.beforeEnter,v,M));return N.push(ee),es(N)}).then(()=>(v.matched.forEach(Y=>Y.enterCallbacks={}),N=Jo(ye,"beforeRouteEnter",v,M),N.push(ee),es(N))).then(()=>{N=[];for(const Y of o.list())N.push(on(Y,v,M));return N.push(ee),es(N)}).catch(Y=>tn(Y,8)?Y:Promise.reject(Y))}function we(v,M,N){for(const F of a.list())F(v,M,N)}function Ue(v,M,N,F,he){const ye=H(v,M);if(ye)return ye;const ee=M===en,Y=is?history.state:{};N&&(F||ee?r.replace(v.fullPath,pe({scroll:ee&&Y&&Y.scroll},he)):r.push(v.fullPath,he)),c.value=v,Jn(v,M,N,ee),it()}let Ve;function yt(){Ve||(Ve=r.listen((v,M,N)=>{const F=k(v),he=Te(F);if(he){Ae(pe(he,{replace:!0}),F).catch(er);return}l=F;const ye=c.value;is&&gw(Au(ye.fullPath,N.delta),go()),ce(F,ye).catch(ee=>tn(ee,12)?ee:tn(ee,2)?(Ae(ee.to,F).then(Y=>{tn(Y,20)&&!N.delta&&N.type===mr.pop&&r.go(-1,!1)}).catch(er),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(ee,F,ye))).then(ee=>{ee=ee||Ue(F,ye,!1),ee&&(N.delta?r.go(-N.delta,!1):N.type===mr.pop&&tn(ee,20)&&r.go(-1,!1)),we(F,ye,ee)}).catch(er)}))}let Jt=$s(),Yn=$s(),ke;function me(v,M,N){it(v);const F=Yn.list();return F.length?F.forEach(he=>he(v,M,N)):console.error(v),Promise.reject(v)}function ue(){return ke&&c.value!==en?Promise.resolve():new Promise((v,M)=>{Jt.add([v,M])})}function it(v){return ke||(ke=!v,yt(),Jt.list().forEach(([M,N])=>v?N(v):M()),Jt.reset()),v}function Jn(v,M,N,F){const{scrollBehavior:he}=t;if(!is||!he)return Promise.resolve();const ye=!N&&mw(Au(v.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return Af().then(()=>he(v,M,ye)).then(ee=>ee&&pw(ee)).catch(ee=>me(ee,v,M))}const Mt=v=>r.go(v);let Et;const ht=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:E,getRoutes:I,resolve:k,options:t,push:Q,replace:le,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Yn.add,isReady:ue,install(v){const M=this;v.component("RouterLink",Zw),v.component("RouterView",s_),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Qs(c)}),is&&!Et&&c.value===en&&(Et=!0,Q(r.location).catch(he=>{}));const N={};for(const he in en)N[he]=Ct(()=>c.value[he]);v.provide(po,M),v.provide(Pc,Wn(N)),v.provide(Ma,c);const F=v.unmount;ht.add(v),v.unmount=function(){ht.delete(v),ht.size<1&&(l=en,Ve&&Ve(),Ve=null,c.value=en,Et=!1,ke=!1),F()}}}}function es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function i_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>vs(l,c))||r.push(c))}return[n,s,r]}function yd(){return kt(po)}function o_(){return kt(Pc)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},a_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},c_=function(t){const e=vd(t);return wd.encodeByteArray(e,!0)},_d=function(t){return c_(t).replace(/\./g,"")},l_=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Id(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h_(){return Le().indexOf("Electron/")>=0}function bd(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f_(){return Le().indexOf("MSAppHost/")>=0}function d_(){return typeof indexedDB=="object"}function p_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=g_,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?m_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yt(r,a,s)}}function m_(t,e){return t.replace(y_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const y_=/\{\$([^}]+)}/g;function v_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Uu(i)&&Uu(o)){if(!Ni(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Uu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function w_(t,e){const n=new __(t,e);return n.subscribe.bind(n)}class __{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");E_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Zo),r.error===void 0&&(r.error=Zo),r.complete===void 0&&(r.complete=Zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new u_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b_(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:T_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T_(t){return t===An?void 0:t}function b_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new I_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const C_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},A_=ie.INFO,k_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},R_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=k_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=A_,this._logHandler=R_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const N_=(t,e)=>e.some(n=>t instanceof n);let Vu,Bu;function D_(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O_(){return Bu||(Bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,Ua=new WeakMap,Cd=new WeakMap,ea=new WeakMap,Lc=new WeakMap;function P_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sd.set(n,t)}).catch(()=>{}),Lc.set(e,t),e}function x_(t){if(Ua.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ua.set(t,e)}let Va={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M_(t){Va=t(Va)}function L_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ta(this),e,...n);return Cd.set(s,e.sort?e.sort():[e]),dn(s)}:O_().includes(t)?function(...e){return t.apply(ta(this),e),dn(Sd.get(this))}:function(...e){return dn(t.apply(ta(this),e))}}function F_(t){return typeof t=="function"?L_(t):(t instanceof IDBTransaction&&x_(t),N_(t,D_())?new Proxy(t,Va):t)}function dn(t){if(t instanceof IDBRequest)return P_(t);if(ea.has(t))return ea.get(t);const e=F_(t);return e!==t&&(ea.set(t,e),Lc.set(e,t)),e}const ta=t=>Lc.get(t);function U_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}){const o=indexedDB.open(t,e),a=dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(dn(o.result),c.oldVersion,c.newVersion,dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const V_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],na=new Map;function $u(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=B_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||V_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return na.set(e,i),i}M_(t=>Wl(Ko({},t),{get:(e,n,s)=>$u(e,n)||t.get(e,n,s),has:(e,n)=>!!$u(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",ju="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Mc("@firebase/app"),H_="@firebase/app-compat",K_="@firebase/analytics-compat",q_="@firebase/analytics",z_="@firebase/app-check-compat",W_="@firebase/app-check",G_="@firebase/auth",Q_="@firebase/auth-compat",X_="@firebase/database",Y_="@firebase/database-compat",J_="@firebase/functions",Z_="@firebase/functions-compat",eE="@firebase/installations",tE="@firebase/installations-compat",nE="@firebase/messaging",sE="@firebase/messaging-compat",rE="@firebase/performance",iE="@firebase/performance-compat",oE="@firebase/remote-config",aE="@firebase/remote-config-compat",cE="@firebase/storage",lE="@firebase/storage-compat",uE="@firebase/firestore",hE="@firebase/firestore-compat",fE="firebase",dE="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="[DEFAULT]",pE={[Ba]:"fire-core",[H_]:"fire-core-compat",[q_]:"fire-analytics",[K_]:"fire-analytics-compat",[W_]:"fire-app-check",[z_]:"fire-app-check-compat",[G_]:"fire-auth",[Q_]:"fire-auth-compat",[X_]:"fire-rtdb",[Y_]:"fire-rtdb-compat",[J_]:"fire-fn",[Z_]:"fire-fn-compat",[eE]:"fire-iid",[tE]:"fire-iid-compat",[nE]:"fire-fcm",[sE]:"fire-fcm-compat",[rE]:"fire-perf",[iE]:"fire-perf-compat",[oE]:"fire-rc",[aE]:"fire-rc-compat",[cE]:"fire-gcs",[lE]:"fire-gcs-compat",[uE]:"fire-fst",[hE]:"fire-fst-compat","fire-js":"fire-js",[fE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,$a=new Map;function gE(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if($a.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Di.values())gE(n,t);return!0}function Fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Dr("app","Firebase",mE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=dE;function Uc(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ad,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});const r=Di.get(s);if(r){if(Ni(t,r.options)&&Ni(n,r.config))return r;throw $n.create("duplicate-app",{appName:s})}const i=new S_(s);for(const a of $a.values())i.addComponent(a);const o=new yE(t,n,i);return Di.set(s,o),o}function kd(t=Ad){const e=Di.get(t);if(!e)throw $n.create("no-app",{appName:t});return e}function pn(t,e,n){var s;let r=(s=pE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}_s(new Vn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="firebase-heartbeat-database",wE=1,yr="firebase-heartbeat-store";let sa=null;function Rd(){return sa||(sa=U_(vE,wE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yr)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),sa}async function _E(t){var e;try{return(await Rd()).transaction(yr).objectStore(yr).get(Nd(t))}catch(n){if(n instanceof Yt)Bn.warn(n.message);else{const s=$n.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bn.warn(s.message)}}}async function Hu(t,e){var n;try{const r=(await Rd()).transaction(yr,"readwrite");return await r.objectStore(yr).put(e,Nd(t)),r.done}catch(s){if(s instanceof Yt)Bn.warn(s.message);else{const r=$n.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bn.warn(r.message)}}}function Nd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=1024,IE=30*24*60*60*1e3;class TE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=IE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:n,unsentEntries:s}=bE(this._heartbeatsCache.heartbeats),r=_d(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ku(){return new Date().toISOString().substring(0,10)}function bE(t,e=EE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),qu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class SE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _E(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qu(t){return _d(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){_s(new Vn("platform-logger",e=>new $_(e),"PRIVATE")),_s(new Vn("heartbeat",e=>new TE(e),"PRIVATE")),pn(Ba,ju,t),pn(Ba,ju,"esm2017"),pn("fire-js","")}CE("");var AE="firebase",kE="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(AE,kE,"app");const Vc={firebase:{apiKey:"AIzaSyCGkogK_I7Qw4OmFdEA-b1X5-ZACNW_3dY",authDomain:"markdown-me-fd33a.firebaseapp.com",projectId:"markdown-me-fd33a",storageBucket:"markdown-me-fd33a.appspot.com",messagingSenderId:"29188630198",appId:"1:29188630198:web:b83df3b9d32daf22cd2817"}};function Bc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Dd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RE=Dd,Od=new Dr("auth","Firebase",Dd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Mc("@firebase/auth");function mi(t,...e){zu.logLevel<=ie.ERROR&&zu.error(`Auth (${Pr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw $c(t,...e)}function Rt(t,...e){return $c(t,...e)}function NE(t,e,n){const s=Object.assign(Object.assign({},RE()),{[e]:n});return new Dr("auth","Firebase",s).create(e,{appName:t.name})}function $c(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Od.create(t,...e)}function z(t,e,...n){if(!t)throw $c(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mi(e),new Error(e)}function qt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;function Ut(t){qt(t instanceof Function,"Expected a class definition");let e=Wu.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e){const n=Fc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ni(i,e!=null?e:{}))return r;Kt(r,"already-initialized")}return n.initialize({options:e})}function OE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PE(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PE()||Id()||"connection"in navigator)?navigator.onLine:!0}function ME(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||Td()}get(){return xE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new xr(3e4,6e4);function xd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mo(t,e,n,s,r={}){return Md(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Or(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pd.fetch()(Fd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Md(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},LE),e);try{const r=new UE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw si(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw si(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw si(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw NE(t,u,l);Kt(t,u)}}catch(r){if(r instanceof Yt)throw r;Kt(t,"network-request-failed")}}async function Ld(t,e,n,s,r={}){const i=await mo(t,e,n,s,r);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jc(t.config,r):`${t.config.apiScheme}://${r}`}class UE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),FE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e){return mo(t,"POST","/v1/accounts:delete",e)}async function BE(t,e){return mo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $E(t,e=!1){const n=Pt(t),s=await n.getIdToken(e),r=Hc(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:nr(ra(r.auth_time)),issuedAtTime:nr(ra(r.iat)),expirationTime:nr(ra(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ra(t){return Number(t)*1e3}function Hc(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=l_(s);return i?JSON.parse(i):(mi("Failed to decode base64 JWT payload"),null)}catch(i){return mi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function jE(t){const e=Hc(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&HE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function HE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vr(t,BE(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WE(i.providerUserInfo):[],a=zE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ud(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qE(t){const e=Pt(t);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function WE(t){return t.map(e=>{var{providerId:n}=e,s=Bc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e){const n=await Md(t,{},async()=>{const s=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Fd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await GE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wr;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ud(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $E(this,e)}reload(){return qE(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Oi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,VE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:Q,isAnonymous:le,providerData:Te,stsTokenManager:Ae}=n;z(H&&Ae,e,"internal-error");const Z=wr.fromJSON(this.name,Ae);z(typeof H=="string",e,"internal-error"),nn(h,e.name),nn(f,e.name),z(typeof Q=="boolean",e,"internal-error"),z(typeof le=="boolean",e,"internal-error"),nn(g,e.name),nn(y,e.name),nn(I,e.name),nn(E,e.name),nn(k,e.name),nn(P,e.name);const ce=new Ln({uid:H,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:le,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:Z,createdAt:k,lastLoginAt:P});return Te&&Array.isArray(Te)&&(ce.providerData=Te.map(we=>Object.assign({},we))),E&&(ce._redirectEventId=E),ce}static async _fromIdTokenResponse(e,n,s=!1){const r=new wr;r.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Oi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vd.type="NONE";const Qu=Vd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yi(this.userKey,r.apiKey,i),this.fullPersistenceKey=yi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ds(Ut(Qu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ut(Qu);const o=yi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ln._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ds(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(qd(e))return"Webos";if(Kc(e))return"Safari";if((e.includes("chrome/")||$d(e))&&!e.includes("edge/"))return"Chrome";if(Hd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bd(t=Le()){return/firefox\//i.test(t)}function Kc(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $d(t=Le()){return/crios\//i.test(t)}function jd(t=Le()){return/iemobile/i.test(t)}function Hd(t=Le()){return/android/i.test(t)}function Kd(t=Le()){return/blackberry/i.test(t)}function qd(t=Le()){return/webos/i.test(t)}function yo(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QE(t=Le()){var e;return yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XE(){return bd()&&document.documentMode===10}function zd(t=Le()){return yo(t)||Hd(t)||qd(t)||Kd(t)||/windows phone/i.test(t)||jd(t)}function YE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e=[]){let n;switch(t){case"Browser":n=Xu(Le());break;case"Worker":n=`${Xu(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yu(this),this.idTokenSubscription=new Yu(this),this.beforeStateQueue=new JE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Od,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Oi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ME()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function qc(t){return Pt(t)}class Yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=w_(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Ld(t,"POST","/v1/accounts:signInWithIdp",xd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="http://localhost";class jn extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Bc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new jn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Or(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Mr{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Mr{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Mr{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return un.credential(n,s)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return Ld(t,"POST","/v1/accounts:signUp",xd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ln._fromIdTokenResponse(e,s,r),o=Ju(s);return new vn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ju(s);return new vn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ju(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t){var e;const n=qc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await t0(n,{returnSecureToken:!0}),r=await vn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Pi(e,n,s,r)}}function Xd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(t,i,e,s):i})}async function s0(t,e,n=!1){const s=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await vr(t,Xd(r,i,e,t),n);z(o.idToken,r,"internal-error");const a=Hc(o.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(t.uid===c,r,"user-mismatch"),vn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e,n=!1){const s="signIn",r=await Xd(t,s,e),i=await vn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}const xi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xi,"1"),this.storage.removeItem(xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){const t=Le();return Kc(t)||yo(t)}const a0=1e3,c0=10;class Jd extends Yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o0()&&YE(),this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);XE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,c0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},a0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jd.type="LOCAL";const l0=Jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zd.type="SESSION";const ep=Zd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await u0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function f0(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return typeof Nt().WorkerGlobalScope!="undefined"&&typeof Nt().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function g0(){return tp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="firebaseLocalStorageDb",m0=1,Mi="firebaseLocalStorage",sp="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wo(t,e){return t.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function y0(){const t=indexedDB.deleteDatabase(np);return new Lr(t).toPromise()}function Ha(){const t=indexedDB.open(np,m0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mi,{keyPath:sp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mi)?e(s):(s.close(),await y0(),e(await Ha()))})})}async function Zu(t,e,n){const s=wo(t,!0).put({[sp]:e,value:n});return new Lr(s).toPromise()}async function v0(t,e){const n=wo(t,!1).get(e),s=await new Lr(n).toPromise();return s===void 0?null:s.value}function eh(t,e){const n=wo(t,!0).delete(e);return new Lr(n).toPromise()}const w0=800,_0=3;class rp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(g0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new h0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await Zu(e,xi,"1"),await eh(e,xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>v0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=wo(r,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rp.type="LOCAL";const E0=rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function T0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",I0().appendChild(s)})}function b0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t,e){return e?Ut(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C0(t){return i0(t.auth,new Wc(t),t.bypassAuthState)}function A0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),r0(n,new Wc(t),t.bypassAuthState)}async function k0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),s0(n,new Wc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,s,r,i){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:Kt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new xr(2e3,1e4);class os extends ip{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,R0.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="pendingRedirect",vi=new Map;class D0 extends ip{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vi.get(this.auth._key());if(!e){try{const s=await O0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vi.set(this.auth._key(),e)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O0(t,e){const n=M0(e),s=x0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function P0(t,e){vi.set(t._key(),e)}function x0(t){return Ut(t._redirectPersistence)}function M0(t){return yi(N0,t.config.apiKey,t.name)}async function L0(t,e,n=!1){const s=qc(t),r=S0(s,e),o=await new D0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=10*60*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!op(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F0&&this.cachedEventUids.clear(),this.cachedEventUids.has(th(e))}saveEventToCache(e){this.cachedEventUids.add(th(e)),this.lastProcessedEventTime=Date.now()}}function th(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function op({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e={}){return mo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B0(t);for(const n of e)try{if(K0(n))return}catch{}Kt(t,"unauthorized-domain")}function K0(t){const e=ja(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!j0.test(n))return!1;if($0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new xr(3e4,6e4);function nh(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function z0(t){return new Promise((e,n)=>{var s,r,i;function o(){nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nh(),n(Rt(t,"network-request-failed"))},timeout:q0.get()})}if(!((r=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Nt().gapi)===null||i===void 0)&&i.load)o();else{const a=b0("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},T0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wi=null,e})}let wi=null;function W0(t){return wi=wi||z0(t),wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new xr(5e3,15e3),Q0="__/auth/iframe",X0="emulator/auth/iframe",Y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z0(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jc(e,X0):`https://${t.config.authDomain}/${Q0}`,s={apiKey:e.apiKey,appName:t.name,v:Pr},r=J0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Or(s).slice(1)}`}async function eI(t){const e=await W0(t),n=Nt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Z0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},G0.get());function c(){Nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nI=500,sI=600,rI="_blank",iI="http://localhost";class sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(t,e,n,s=nI,r=sI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Le().toLowerCase();n&&(a=$d(l)?rI:n),Bd(l)&&(e=e||iI,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(QE(l)&&a!=="_self")return aI(e||"",a),new sh(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new sh(h)}function aI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="__/auth/handler",lI="emulator/auth/handler";function rh(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Pr,eventId:r};if(e instanceof Qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",v_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Mr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uI(t)}?${Or(a).slice(1)}`}function uI({config:t}){return t.emulator?jc(t,lI):`https://${t.authDomain}/${cI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ep,this._completeRedirectFn=L0,this._overrideRedirectResult=P0}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rh(e,n,s,ja(),r);return oI(e,o,zc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),f0(rh(e,n,s,ja(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eI(e),s=new U0(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ia,{type:ia},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ia];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zd()||Kc()||yo()}}const fI=hI;var ih="@firebase/auth",oh="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gI(t){_s(new Vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wd(t)},u=new ZE(a,c,l);return OE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Vn("auth-internal",e=>{const n=qc(e.getProvider("auth").getImmediate());return(s=>new dI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ih,oh,pI(t)),pn(ih,oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t=kd()){const e=Fc(t,"auth");return e.isInitialized()?e.getImmediate():DE(t,{popupRedirectResolver:fI,persistence:[E0,l0,ep]})}gI("Browser");const mI=mt("h1",null,"I am the home page",-1),yI=mt("h5",null,"You should sign in here",-1),vI={name:"Home",setup(t){const e=Uc(Vc.firebase),n=ap(e),s=yd();async function r(){await n0(n),s.push("/dashboard")}return(i,o)=>(fs(),Zs(nt,null,[mI,yI,mt("button",{onClick:r},"Sign In")],64))}};var wI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Gc=Gc||{},j=wI||self;function Li(){}function Ka(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _I(t){return Object.prototype.hasOwnProperty.call(t,oa)&&t[oa]||(t[oa]=++EI)}var oa="closure_uid_"+(1e9*Math.random()>>>0),EI=0;function II(t,e,n){return t.call.apply(t.bind,arguments)}function TI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=II:He=TI,He.apply(null,arguments)}function ri(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function In(){this.s=this.s,this.o=this.o}var bI=0;In.prototype.s=!1;In.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bI!=0)&&_I(this)};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},lp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function SI(t){e:{var e=mT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ah(t){return Array.prototype.concat.apply([],arguments)}function Qc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Fi(t){return/^[\s\xa0]*$/.test(t)}var ch=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function aa(t,e){return t<e?-1:t>e?1:0}var Je;e:{var lh=j.navigator;if(lh){var uh=lh.userAgent;if(uh){Je=uh;break e}}Je=""}function Xc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function up(t){const e={};for(const n in t)e[n]=t[n];return e}var hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<hh.length;i++)n=hh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yc(t){return Yc[" "](t),t}Yc[" "]=Li;function CI(t){var e=RI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var AI=Ye(Je,"Opera"),Es=Ye(Je,"Trident")||Ye(Je,"MSIE"),fp=Ye(Je,"Edge"),qa=fp||Es,dp=Ye(Je,"Gecko")&&!(Ye(Je.toLowerCase(),"webkit")&&!Ye(Je,"Edge"))&&!(Ye(Je,"Trident")||Ye(Je,"MSIE"))&&!Ye(Je,"Edge"),kI=Ye(Je.toLowerCase(),"webkit")&&!Ye(Je,"Edge");function pp(){var t=j.document;return t?t.documentMode:void 0}var Ui;e:{var ca="",la=function(){var t=Je;if(dp)return/rv:([^\);]+)(\)|;)/.exec(t);if(fp)return/Edge\/([\d\.]+)/.exec(t);if(Es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kI)return/WebKit\/(\S+)/.exec(t);if(AI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(la&&(ca=la?la[1]:""),Es){var ua=pp();if(ua!=null&&ua>parseFloat(ca)){Ui=String(ua);break e}}Ui=ca}var RI={};function NI(){return CI(function(){let t=0;const e=ch(String(Ui)).split("."),n=ch("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=aa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||aa(r[2].length==0,i[2].length==0)||aa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var za;if(j.document&&Es){var fh=pp();za=fh||parseInt(Ui,10)||void 0}else za=void 0;var DI=za,OI=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Li,e),j.removeEventListener("test",Li,e)}catch{}return t}();function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};function _r(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dp){e:{try{Yc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_r.Z.h.call(this)}}ze(_r,Ge);var PI={2:"touch",3:"pen",4:"mouse"};_r.prototype.h=function(){_r.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ur="closure_listenable_"+(1e6*Math.random()|0),xI=0;function MI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++xI,this.ca=this.fa=!1}function _o(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Eo(t){this.src=t,this.g={},this.h=0}Eo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ga(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new MI(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Wa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=cp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(_o(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ga(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Jc="closure_lm_"+(1e6*Math.random()|0),ha={};function gp(t,e,n,s,r){if(s&&s.once)return yp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gp(t,e[i],n,s,r);return null}return n=tl(n),t&&t[Ur]?t.N(e,n,Fr(s)?!!s.capture:!!s,r):mp(t,e,n,!1,s,r)}function mp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Fr(r)?!!r.capture:!!r,a=el(t);if(a||(t[Jc]=a=new Eo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=LI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)OI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LI(){function t(n){return e.call(t.src,t.listener,n)}var e=FI;return t}function yp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)yp(t,e[i],n,s,r);return null}return n=tl(n),t&&t[Ur]?t.O(e,n,Fr(s)?!!s.capture:!!s,r):mp(t,e,n,!0,s,r)}function vp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vp(t,e[i],n,s,r);else s=Fr(s)?!!s.capture:!!s,n=tl(n),t&&t[Ur]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ga(i,n,s,r),-1<n&&(_o(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=el(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ga(e,n,s,r)),(n=-1<t?e[t]:null)&&Zc(n))}function Zc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ur])Wa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=el(e))?(Wa(n,t),n.h==0&&(n.src=null,e[Jc]=null)):_o(t)}}}function wp(t){return t in ha?ha[t]:ha[t]="on"+t}function FI(t,e){if(t.ca)t=!0;else{e=new _r(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Zc(t),t=n.call(s,e)}return t}function el(t){return t=t[Jc],t instanceof Eo?t:null}var fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(t){return typeof t=="function"?t:(t[fa]||(t[fa]=function(e){return t.handleEvent(e)}),t[fa])}function Fe(){In.call(this),this.i=new Eo(this),this.P=this,this.I=null}ze(Fe,In);Fe.prototype[Ur]=!0;Fe.prototype.removeEventListener=function(t,e,n,s){vp(this,t,e,n,s)};function Ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),hp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ii(o,s,!0,e)&&r}if(o=e.g=t,r=ii(o,s,!0,e)&&r,r=ii(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ii(o,s,!1,e)&&r}Fe.prototype.M=function(){if(Fe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)_o(n[s]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Fe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Wa(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var nl=j.JSON.stringify;function UI(){var t=Ep;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VI{constructor(){this.h=this.g=null}add(e,n){const s=_p.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var _p=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BI,t=>t.reset());class BI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $I(t){j.setTimeout(()=>{throw t},0)}function sl(t,e){Qa||jI(),Xa||(Qa(),Xa=!0),Ep.add(t,e)}var Qa;function jI(){var t=j.Promise.resolve(void 0);Qa=function(){t.then(HI)}}var Xa=!1,Ep=new VI;function HI(){for(var t;t=UI();){try{t.h.call(t.g)}catch(n){$I(n)}var e=_p;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xa=!1}function Io(t,e){Fe.call(this),this.h=t||1,this.g=e||j,this.j=He(this.kb,this),this.l=Date.now()}ze(Io,Fe);O=Io.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ke(this,"tick"),this.da&&(rl(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Io.Z.M.call(this),rl(this),delete this.g};function il(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function Ip(t){t.g=il(()=>{t.g=null,t.i&&(t.i=!1,Ip(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KI extends In{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ip(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(t){In.call(this),this.h=t,this.g={}}ze(Er,In);var dh=[];function Tp(t,e,n,s){Array.isArray(n)||(n&&(dh[0]=n.toString()),n=dh);for(var r=0;r<n.length;r++){var i=gp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bp(t){Xc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zc(e)},t),t.g={}}Er.prototype.M=function(){Er.Z.M.call(this),bp(this)};Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function To(){this.g=!0}To.prototype.Aa=function(){this.g=!1};function qI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function zI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function as(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GI(t,n)+(s?" "+s:"")})}function WI(t,e){t.info(function(){return"TIMEOUT: "+e})}To.prototype.info=function(){};function GI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return nl(n)}catch{return e}}var Gn={},ph=null;function bo(){return ph=ph||new Fe}Gn.Ma="serverreachability";function Sp(t){Ge.call(this,Gn.Ma,t)}ze(Sp,Ge);function Ir(t){const e=bo();Ke(e,new Sp(e,t))}Gn.STAT_EVENT="statevent";function Cp(t,e){Ge.call(this,Gn.STAT_EVENT,t),this.stat=e}ze(Cp,Ge);function Ze(t){const e=bo();Ke(e,new Cp(e,t))}Gn.Na="timingevent";function Ap(t,e){Ge.call(this,Gn.Na,t),this.size=e}ze(Ap,Ge);function Vr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var So={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},kp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ol(){}ol.prototype.h=null;function gh(t){return t.h||(t.h=t.i())}function Rp(){}var Br={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function al(){Ge.call(this,"d")}ze(al,Ge);function cl(){Ge.call(this,"c")}ze(cl,Ge);var Ya;function Co(){}ze(Co,ol);Co.prototype.g=function(){return new XMLHttpRequest};Co.prototype.i=function(){return{}};Ya=new Co;function $r(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Er(this),this.P=QI,t=qa?125:void 0,this.W=new Io(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Np}function Np(){this.i=null,this.g="",this.h=!1}var QI=45e3,Ja={},Vi={};O=$r.prototype;O.setTimeout=function(t){this.P=t};function Za(t,e,n){t.K=1,t.v=ko(zt(e)),t.s=n,t.U=!0,Dp(t,null)}function Dp(t,e){t.F=Date.now(),jr(t),t.A=zt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Up(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Np,t.g=rg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new KI(He(t.Ia,t,t.g),t.O)),Tp(t.V,t.g,"readystatechange",t.gb),e=t.H?up(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ir(),qI(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Vt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Vt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||qa||this.g&&(this.h.h||this.g.ga()||wh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ir(3):Ir(2)),Ao(this);var n=this.g.ba();this.N=n;t:if(Op(this)){var s=wh(this.g);t="";var r=s.length,i=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dn(this),sr(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,zI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fi(a)){var l=a;break t}}l=null}if(n=l)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ec(this,n);else{this.i=!1,this.o=3,Ze(12),Dn(this),sr(this);break e}}this.U?(Pp(this,u,o),qa&&this.i&&u==3&&(Tp(this.V,this.W,"tick",this.fb),this.W.start())):(as(this.j,this.m,o,null),ec(this,o)),u==4&&Dn(this),this.i&&!this.I&&(u==4?eg(this.l,this):(this.i=!1,jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Dn(this),sr(this)}}}catch{}finally{}};function Op(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Pp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=XI(t,n),r==Vi){e==4&&(t.o=4,Ze(14),s=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ja){t.o=4,Ze(15),as(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else as(t.j,t.m,r,null),ec(t,r);Op(t)&&r!=Vi&&r!=Ja&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),yl(e),e.L=!0,Ze(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),Dn(t),sr(t))}O.fb=function(){if(this.g){var t=Vt(this.g),e=this.g.ga();this.C<e.length&&(Ao(this),Pp(this,t,e),this.i&&t!=4&&jr(this))}};function XI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Vi:(n=Number(e.substring(n,s)),isNaN(n)?Ja:(s+=1,s+n>e.length?Vi:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Dn(this)};function jr(t){t.Y=Date.now()+t.P,xp(t,t.P)}function xp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vr(He(t.eb,t),e)}function Ao(t){t.B&&(j.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(WI(this.j,this.A),this.K!=2&&(Ir(),Ze(17)),Dn(this),this.o=2,sr(this)):xp(this,this.Y-t)};function sr(t){t.l.G==0||t.I||eg(t.l,t)}function Dn(t){Ao(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,rl(t.W),bp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ec(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tc(n.i,t))){if(n.I=t.N,!t.J&&tc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hi(n),Do(n);else break e;ml(n),Ze(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Vr(He(n.ab,n),6e3));if(1>=$p(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else On(n,11)}else if((t.J||n.g==t)&&Hi(n),!Fi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Ye(y,"spdy")||Ye(y,"quic")||Ye(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(hl(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.sa=I,Ee(s.F,s.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=sg(s,s.H?s.la:null,s.W),o.J){jp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ao(a),jr(a)),s.g=o}else Jp(s);0<n.l.length&&Oo(n)}else l[0]!="stop"&&l[0]!="close"||On(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?On(n,7):gl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ir(4)}catch{}}function YI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ka(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ll(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ka(t)||typeof t=="string")lp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ka(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=YI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ps(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ps)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Ps.prototype;O.R=function(){ul(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return ul(this),this.g.concat()};function ul(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Hn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Hn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Hn(this.h,t)?this.h[t]:e};O.set=function(t,e){Hn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Mp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function JI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Kn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Kn){this.g=e!==void 0?e:t.g,Bi(this,t.j),this.s=t.s,$i(this,t.i),ji(this,t.m),this.l=t.l,e=t.h;var n=new Tr;n.i=e.i,e.g&&(n.g=new Ps(e.g),n.h=e.h),mh(this,n),this.o=t.o}else t&&(n=String(t).match(Mp))?(this.g=!!e,Bi(this,n[1]||"",!0),this.s=rr(n[2]||""),$i(this,n[3]||"",!0),ji(this,n[4]),this.l=rr(n[5]||"",!0),mh(this,n[6]||"",!0),this.o=rr(n[7]||"")):(this.g=!!e,this.h=new Tr(null,this.g))}Kn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zs(e,yh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zs(e,yh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(zs(n,n.charAt(0)=="/"?sT:nT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zs(n,iT)),t.join("")};function zt(t){return new Kn(t)}function Bi(t,e,n){t.j=n?rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $i(t,e,n){t.i=n?rr(e,!0):e}function ji(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mh(t,e,n){e instanceof Tr?(t.h=e,oT(t.h,t.g)):(n||(e=zs(e,rT)),t.h=new Tr(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function ko(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ZI(t){return t instanceof Kn?zt(t):new Kn(t,void 0)}function eT(t,e,n,s){var r=new Kn(null,void 0);return t&&Bi(r,t),e&&$i(r,e),n&&ji(r,n),s&&(r.l=s),r}function rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yh=/[#\/\?@]/g,nT=/[#\?:]/g,sT=/[#\?]/g,rT=/[#\?@]/g,iT=/#/g;function Tr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Ps,t.h=0,t.i&&JI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Tr.prototype;O.add=function(t,e){Tn(this),this.i=null,t=xs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lp(t,e){Tn(t),e=xs(t,e),Hn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Hn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ul(t)))}function Fp(t,e){return Tn(t),e=xs(t,e),Hn(t.g.h,e)}O.forEach=function(t,e){Tn(this),this.g.forEach(function(n,s){lp(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){Tn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){Tn(this);var e=[];if(typeof t=="string")Fp(this,t)&&(e=ah(e,this.g.get(xs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ah(e,t[n])}return e};O.set=function(t,e){return Tn(this),this.i=null,t=xs(this,t),Fp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Up(t,e,n){Lp(t,e),0<n.length&&(t.i=null,t.g.set(xs(t,e),Qc(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function xs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oT(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Lp(this,s),Up(this,r,n))},t)),t.j=e}var aT=class{constructor(t,e){this.h=t,this.g=e}};function Vp(t){this.l=t||cT,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cT=10;function Bp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $p(t){return t.h?1:t.g?t.g.size:0}function tc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hl(t,e){t.g?t.g.add(e):t.h=e}function jp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vp.prototype.cancel=function(){if(this.i=Hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qc(t.i)}function fl(){}fl.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};fl.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function lT(){this.g=new fl}function uT(t,e,n){const s=n||"";try{ll(t,function(r,i){let o=r;Fr(r)&&(o=nl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function hT(t,e){const n=new To;if(j.Image){const s=new Image;s.onload=ri(oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ri(oi,n,s,"TestLoadImage: error",!1,e),s.onabort=ri(oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ri(oi,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function oi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hr(t){this.l=t.$b||null,this.j=t.ib||!1}ze(Hr,ol);Hr.prototype.g=function(){return new Ro(this.l,this.j)};Hr.prototype.i=function(t){return function(){return t}}({});function Ro(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ro,Fe);var dl=0;O=Ro.prototype;O.open=function(t,e){if(this.readyState!=dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,br(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=dl};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Kp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kr(this):br(this),this.readyState==3&&Kp(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Kr(this))};O.Ta=function(t){this.g&&(this.response=t,Kr(this))};O.ha=function(){this.g&&Kr(this)};function Kr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,br(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fT=j.JSON.parse;function Ce(t){Fe.call(this),this.headers=new Ps,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qp,this.K=this.L=!1}ze(Ce,Fe);var qp="",dT=/^https?$/i,pT=["POST","PUT"];O=Ce.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ya.g(),this.C=this.u?gh(this.u):gh(Ya),this.g.onreadystatechange=He(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){vh(this,i);return}t=n||"";const r=new Ps(this.headers);s&&ll(s,function(i,o){r.set(o,i)}),s=SI(r.T()),n=j.FormData&&t instanceof j.FormData,!(0<=cp(pT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gp(this),0<this.B&&((this.K=gT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.pa,this)):this.A=il(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){vh(this,i)}};function gT(t){return Es&&NI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function mT(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Gc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function vh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zp(t),No(t)}function zp(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),No(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),No(this,!0)),Ce.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Wp(this):this.cb())};O.cb=function(){Wp(this)};function Wp(t){if(t.h&&typeof Gc!="undefined"&&(!t.C[1]||Vt(t)!=4||t.ba()!=2)){if(t.v&&Vt(t)==4)il(t.Fa,0,t);else if(Ke(t,"readystatechange"),Vt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Mp)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!dT.test(r?r.toLowerCase():"")}n=s}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<Vt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",zp(t)}}finally{No(t)}}}}function No(t,e){if(t.g){Gp(t);const n=t.g,s=t.C[0]?Li:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function Gp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function Vt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fT(e)}};function wh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function yT(t){let e="";return Xc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function pl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=yT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qp(t){this.za=0,this.l=[],this.h=new To,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=js("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=js("baseRetryDelayMs",5e3,t),this.$a=js("retryDelaySeedMs",1e4,t),this.Ya=js("forwardChannelMaxRetries",2,t),this.ra=js("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vp(t&&t.concurrentRequestLimit),this.Ca=new lT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Qp.prototype;O.ma=8;O.G=1;function gl(t){if(Xp(t),t.G==3){var e=t.V++,n=zt(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),qr(t,n),e=new $r(t,t.h,e,void 0),e.K=2,e.v=ko(zt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=rg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),jr(e)}ng(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Do(t){t.g&&(yl(t),t.g.cancel(),t.g=null)}function Xp(t){Do(t),t.u&&(j.clearTimeout(t.u),t.u=null),Hi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function da(t,e){t.l.push(new aT(t.Za++,e)),t.G==3&&Oo(t)}function Oo(t){Bp(t.i)||t.m||(t.m=!0,sl(t.Ha,t),t.C=0)}function vT(t,e){return $p(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Vr(He(t.Ha,t,e),tg(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new $r(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=up(i),hp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yp(this,r,e),n=zt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),qr(this,n),this.o&&i&&pl(n,this.o,i),hl(this.i,r),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),r.$=!0,Za(r,n,null)):Za(r,n,e),this.G=2}}else this.G==3&&(t?_h(this,t):this.l.length==0||Bp(this.i)||_h(this))};function _h(t,e){var n;e?n=e.m:n=t.V++;const s=zt(t.F);Ee(s,"SID",t.J),Ee(s,"RID",n),Ee(s,"AID",t.U),qr(t,s),t.o&&t.s&&pl(s,t.o,t.s),n=new $r(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Yp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hl(t.i,n),Za(n,s,e)}function qr(t,e){t.j&&ll({},function(n,s){Ee(e,s,n)})}function Yp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?He(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{uT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Jp(t){t.g||t.u||(t.Y=1,sl(t.Ga,t),t.A=0)}function ml(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Vr(He(t.Ga,t),tg(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,Zp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vr(He(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Do(this),Zp(this))};function yl(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Zp(t){t.g=new $r(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=zt(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),qr(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&pl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ko(zt(e)),n.s=null,n.U=!0,Dp(n,t)}O.ab=function(){this.v!=null&&(this.v=null,Do(this),ml(this),Ze(19))};function Hi(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function eg(t,e){var n=null;if(t.g==e){Hi(t),yl(t),t.g=null;var s=2}else if(tc(t.i,e))n=e.D,jp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=bo(),Ke(s,new Ap(s,n,e,r)),Oo(t)}else Jp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&vT(t,e)||s==2&&ml(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}}function tg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function On(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=He(t.jb,t);n||(n=new Kn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Bi(n,"https"),ko(n)),hT(n.toString(),s)}else Ze(2);t.G=0,t.j&&t.j.va(e),ng(t),Xp(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function ng(t){t.G=0,t.I=-1,t.j&&((Hp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qc(t.l),t.l.length=0),t.j.ua())}function sg(t,e,n){let s=ZI(n);if(s.i!="")e&&$i(s,e+"."+s.i),ji(s,s.m);else{const r=j.location;s=eT(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Xc(t.aa,function(r,i){Ee(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ee(s,e,n),Ee(s,"VER",t.ma),qr(t,s),s}function rg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ce(new Hr({ib:!0})):new Ce(t.qa),e.L=t.H,e}function ig(){}O=ig.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Ki(){if(Es&&!(10<=Number(DI)))throw Error("Environmental error: no available transport.")}Ki.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Fe.call(this),this.g=new Qp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ms(this)}ze(ut,Fe);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),sl(He(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=sg(t,null,t.W),Oo(t)};ut.prototype.close=function(){gl(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,da(this.g,e)}else this.v?(e={},e.__data__=nl(t),da(this.g,e)):da(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,gl(this.g),delete this.g,ut.Z.M.call(this)};function og(t){al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(og,al);function ag(){cl.call(this),this.status=1}ze(ag,cl);function Ms(t){this.g=t}ze(Ms,ig);Ms.prototype.xa=function(){Ke(this.g,"a")};Ms.prototype.wa=function(t){Ke(this.g,new og(t))};Ms.prototype.va=function(t){Ke(this.g,new ag(t))};Ms.prototype.ua=function(){Ke(this.g,"b")};Ki.prototype.createWebChannel=Ki.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;So.NO_ERROR=0;So.TIMEOUT=8;So.HTTP_ERROR=6;kp.COMPLETE="complete";Rp.EventType=Br;Br.OPEN="a";Br.CLOSE="b";Br.ERROR="c";Br.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.La;Ce.prototype.getLastErrorCode=Ce.prototype.Da;Ce.prototype.getStatus=Ce.prototype.ba;Ce.prototype.getResponseJson=Ce.prototype.Qa;Ce.prototype.getResponseText=Ce.prototype.ga;Ce.prototype.send=Ce.prototype.ea;var wT=function(){return new Ki},_T=function(){return bo()},pa=So,ET=kp,IT=Gn,Eh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},TT=Hr,ai=Rp,bT=Ce;const Ih="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Mc("@firebase/firestore");function Th(){return qn.logLevel}function L(t,...e){if(qn.logLevel<=ie.DEBUG){const n=e.map(vl);qn.debug(`Firestore (${Ls}): ${t}`,...n)}}function Wt(t,...e){if(qn.logLevel<=ie.ERROR){const n=e.map(vl);qn.error(`Firestore (${Ls}): ${t}`,...n)}}function bh(t,...e){if(qn.logLevel<=ie.WARN){const n=e.map(vl);qn.warn(`Firestore (${Ls}): ${t}`,...n)}}function vl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ve(t,e){t||W()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new ST(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new tt(e)}}class kT{constructor(e,n,s){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class RT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new kT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new NT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=OT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ae(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Re(0,0))}static max(){return new J(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Sr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Sr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const PT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Sr{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return PT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function xT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new wn(r,B.empty(),e)}function MT(t){return new wn(t.readTime,t.key,-1)}class wn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new wn(J.min(),B.empty(),-1)}static max(){return new wn(J.max(),B.empty(),-1)}}function LT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==FT)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wl.ot=-1;class Oe{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Be.RED,this.left=r!=null?r:Be.EMPTY,this.right=i!=null?i:Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ch(this.data.getIterator())}getIteratorFrom(e){return new Ch(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ne(this.comparator);return n.data=e,n}}class Ch{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Ne(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const VT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(ve(!!t),typeof t=="string"){let e=0;const n=VT.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hg(t){const e=t.mapValue.fields.__previous_value__;return ug(e)?hg(e):e}function Cr(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){return t==null}function qi(t){return t===0&&1/t==-1/0}function $T(t){return typeof t=="number"&&Number.isInteger(t)&&!qi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ug(t)?4:jT(t)?9007199254740991:10:W()}function xt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cr(t).isEqual(Cr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=_n(s.timestampValue),o=_n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ts(s.bytesValue).isEqual(Ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?qi(i)===qi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Sh(i)!==Sh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!xt(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Ar(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=zn(t),s=zn(e);if(n!==s)return ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ah(t.timestampValue,e.timestampValue);case 4:return Ah(Cr(t),Cr(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ts(r),a=Ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ae(o[c],a[c]);if(l!==0)return l}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ae(Se(r.latitude),Se(i.latitude));return o!==0?o:ae(Se(r.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ss(o[c],a[c]);if(l)return l}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===li.mapValue&&i===li.mapValue)return 0;if(r===li.mapValue)return 1;if(i===li.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ae(a[u],l[u]);if(h!==0)return h;const f=Ss(o[a[u]],c[l[u]]);if(f!==0)return f}return ae(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Ah(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=_n(t),s=_n(e),r=ae(n.seconds,s.seconds);return r!==0?r:ae(n.nanos,s.nanos)}function gs(t){return nc(t)}function nc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=_n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=nc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${nc(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function sc(t){return!!t&&"integerValue"in t}function _l(t){return!!t&&"arrayValue"in t}function kh(t){return!!t&&"nullValue"in t}function Rh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _i(t){return!!t&&"mapValue"in t}function ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ir(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!_i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(n)}setAll(e){let n=We.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ir(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());_i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];_i(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Fs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(ir(this.value))}}function fg(t){const e=[];return Fs(t.fields,(n,s)=>{const r=new We([n]);if(_i(s)){const i=fg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new $e(e,0,J.min(),J.min(),dt.empty(),0)}static newFoundDocument(e,n,s){return new $e(e,1,n,J.min(),s,0)}static newNoDocument(e,n){return new $e(e,2,n,J.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,J.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Nh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new HT(t,e,n,s,r,i,o)}function El(t){const e=G(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+gs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Po(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gs(s)).join(",")),e.ut=n}return e.ut}function KT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${gs(s.value)}`;var s}).join(", ")}]`),Po(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>gs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>gs(n)).join(",")),`Target(${e})`}function Il(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!JT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!xt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oh(t.startAt,e.startAt)&&Oh(t.endAt,e.endAt)}function rc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new qT(e,n,s):n==="array-contains"?new GT(e,s):n==="in"?new QT(e,s):n==="not-in"?new XT(e,s):n==="array-contains-any"?new YT(e,s):new rt(e,n,s)}static ct(e,n,s){return n==="in"?new zT(e,s):new WT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Ss(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.at(Ss(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qT extends rt{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class zT extends rt{constructor(e,n){super(e,"in",n),this.keys=dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WT extends rt{constructor(e,n){super(e,"not-in",n),this.keys=dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class GT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _l(n)&&Ar(n.arrayValue,this.value)}}class QT extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ar(this.value.arrayValue,n)}}class XT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ar(this.value.arrayValue,n)}}class YT extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ar(this.value.arrayValue,s))}}class zi{constructor(e,n){this.position=e,this.inclusive=n}}class or{constructor(e,n="asc"){this.field=e,this.dir=n}}function JT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Dh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Ss(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Oh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function ZT(t,e,n,s,r,i,o,a){return new xo(t,e,n,s,r,i,o,a)}function Tl(t){return new xo(t)}function Ph(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tb(t){for(const e of t.filters)if(e.ht())return e.field;return null}function nb(t){return t.collectionGroup!==null}function kr(t){const e=G(t);if(e.lt===null){e.lt=[];const n=tb(e),s=eb(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new or(n)),e.lt.push(new or(We.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new or(We.keyField(),i))}}}return e.lt}function Gt(t){const e=G(t);if(!e.ft)if(e.limitType==="F")e.ft=Nh(e.path,e.collectionGroup,kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of kr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new or(i.field,o))}const s=e.endAt?new zi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zi(e.startAt.position,e.startAt.inclusive):null;e.ft=Nh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function ic(t,e,n){return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mo(t,e){return Il(Gt(t),Gt(e))&&t.limitType===e.limitType}function pg(t){return`${El(Gt(t))}|lt:${t.limitType}`}function oc(t){return`Query(target=${KT(Gt(t))}; limitType=${t.limitType})`}function bl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Dh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,kr(n),s)||n.endAt&&!function(r,i,o){const a=Dh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,kr(n),s))}(t,e)}function sb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gg(t){return(e,n)=>{let s=!1;for(const r of kr(t)){const i=rb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function rb(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ss(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(e)?"-0":e}}function yg(t){return{integerValue:""+t}}function ib(t,e){return $T(e)?yg(e):mg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this._=void 0}}function ob(t,e,n){return t instanceof Wi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Rr?wg(t,e):t instanceof Nr?_g(t,e):function(s,r){const i=vg(s,r),o=xh(i)+xh(s._t);return sc(i)&&sc(s._t)?yg(o):mg(s.wt,o)}(t,e)}function ab(t,e,n){return t instanceof Rr?wg(t,e):t instanceof Nr?_g(t,e):n}function vg(t,e){return t instanceof Gi?sc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Wi extends Lo{}class Rr extends Lo{constructor(e){super(),this.elements=e}}function wg(t,e){const n=Eg(e);for(const s of t.elements)n.some(r=>xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Nr extends Lo{constructor(e){super(),this.elements=e}}function _g(t,e){let n=Eg(e);for(const s of t.elements)n=n.filter(r=>!xt(r,s));return{arrayValue:{values:n}}}class Gi extends Lo{constructor(e,n){super(),this.wt=e,this._t=n}}function xh(t){return Se(t.integerValue||t.doubleValue)}function Eg(t){return _l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Rr&&s instanceof Rr||n instanceof Nr&&s instanceof Nr?Is(n.elements,s.elements,xt):n instanceof Gi&&s instanceof Gi?xt(n._t,s._t):n instanceof Wi&&s instanceof Wi}(t.transform,e.transform)}class lb{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ei(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fo{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,$t.none()):new Gr(t.key,t.data,$t.none());{const n=t.data,s=dt.empty();let r=new Ne(We.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qn(t.key,s,new Dt(r.toArray()),$t.none())}}function ub(t,e,n){t instanceof Gr?function(s,r,i){const o=s.value.clone(),a=Lh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(s,r,i){if(!Ei(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Lh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Tg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ar(t,e,n,s){return t instanceof Gr?function(r,i,o,a){if(!Ei(r.precondition,i))return o;const c=r.value.clone(),l=Fh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Qn?function(r,i,o,a){if(!Ei(r.precondition,i))return o;const c=Fh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Tg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ei(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=vg(s.transform,r||null);i!=null&&(n===null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Mh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Is(n,s,(r,i)=>cb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gr extends Fo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qn extends Fo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Lh(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ab(o,a,n[r]))}return s}function Fh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ob(i,o,e))}return s}class bg extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fb extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ne;function pb(t){switch(t){default:return W();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Sg(t){if(t===void 0)return Wt("GRPC error has no .code"),S.UNKNOWN;switch(t){case be.OK:return S.OK;case be.CANCELLED:return S.CANCELLED;case be.UNKNOWN:return S.UNKNOWN;case be.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case be.INTERNAL:return S.INTERNAL;case be.UNAVAILABLE:return S.UNAVAILABLE;case be.UNAUTHENTICATED:return S.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case be.NOT_FOUND:return S.NOT_FOUND;case be.ALREADY_EXISTS:return S.ALREADY_EXISTS;case be.PERMISSION_DENIED:return S.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case be.ABORTED:return S.ABORTED;case be.OUT_OF_RANGE:return S.OUT_OF_RANGE;case be.UNIMPLEMENTED:return S.UNIMPLEMENTED;case be.DATA_LOSS:return S.DATA_LOSS;default:return W()}}(ne=be||(be={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new Oe(B.comparator);function Qt(){return gb}const Cg=new Oe(B.comparator);function Ws(...t){let e=Cg;for(const n of t)e=e.insert(n.key,n);return e}function Ag(t){let e=Cg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Pn(){return cr()}function kg(){return cr()}function cr(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const mb=new Oe(B.comparator),yb=new Ne(B.comparator);function te(...t){let e=yb;for(const n of t)e=e.add(n);return e}const vb=new Ne(ae);function Rg(){return vb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Uo(J.min(),s,Rg(),Qt(),te())}}class Qr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qr(qe.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class Ng{constructor(e,n){this.targetId=e,this.It=n}}class Dg{constructor(e,n,s=qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Uh{constructor(){this.Tt=0,this.Et=Bh(),this.At=qe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=te(),n=te(),s=te();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new Qr(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Bh()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class wb{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Qt(),this.Bt=Vh(),this.Lt=new Ne(ae)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(rc(i))if(s===0){const o=new B(i.path);this.Kt(n,o,$e.newNoDocument(o,J.min()))}else ve(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&rc(a.target)){const c=new B(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,$e.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=te();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Uo(e,n,this.Lt,this.$t,s);return this.$t=Qt(),this.Bt=Vh(),this.Lt=new Ne(ae),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Uh,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ne(ae),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Uh),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function Vh(){return new Oe(B.comparator)}function Bh(){return new Oe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Eb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ib{constructor(e,n){this.databaseId=e,this.dt=n}}function Qi(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Tb(t,e){return Qi(t,e.toTimestamp())}function jt(t){return ve(!!t),J.fromTimestamp(function(e){const n=_n(e);return new Re(n.seconds,n.nanos)}(t))}function Sl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pg(t){const e=Ie.fromString(t);return ve(Lg(e)),e}function ac(t,e){return Sl(t.databaseId,e.path)}function ga(t,e){const n=Pg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(xg(n))}function cc(t,e){return Sl(t.databaseId,e)}function bb(t){const e=Pg(t);return e.length===4?Ie.emptyPath():xg(e)}function lc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $h(t,e,n){return{name:ac(t,e),fields:n.value.mapValue.fields}}function Sb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(ve(l===void 0||typeof l=="string"),qe.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Sg(c.code);return new $(l,c.message||"")}(o);n=new Dg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ga(t,s.document.name),i=jt(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=$e.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ii(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ga(t,s.document),i=s.readTime?jt(s.readTime):J.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ii([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ga(t,s.document),i=s.removedTargetIds||[];n=new Ii([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new db(r),o=s.targetId;n=new Ng(o,i)}}return n}function Cb(t,e){let n;if(e instanceof Gr)n={update:$h(t,e.key,e.value)};else if(e instanceof bg)n={delete:ac(t,e.key)};else if(e instanceof Qn)n={update:$h(t,e.key,e.data),updateMask:Lb(e.fieldMask)};else{if(!(e instanceof fb))return W();n={verify:ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Wi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Nr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Gi)return{fieldPath:i.field.canonicalString(),increment:o._t};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Tb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function Ab(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?jt(s.updateTime):jt(r);return i.isEqual(J.min())&&(i=jt(r)),new lb(i,s.transformResults||[])}(n,e))):[]}function kb(t,e){return{documents:[cc(t,e.path)]}}function Rb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=cc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Rh(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NAN"}};if(kh(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Rh(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NOT_NAN"}};if(kh(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(h.field),op:Pb(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ts(u.field),direction:Ob(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||Po(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Nb(t){let e=bb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Mg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new or(cs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Po(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new zi(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new zi(f,h)}(n.endAt)),ZT(e,r,o,i,a,"F",c,l)}function Db(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mg(t){return t?t.unaryFilter!==void 0?[Mb(t)]:t.fieldFilter!==void 0?[xb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Mg(e)).reduce((e,n)=>e.concat(n)):W():[]}function Ob(t){return _b[t]}function Pb(t){return Eb[t]}function ts(t){return{fieldPath:t.canonicalString()}}function cs(t){return We.fromServerFormat(t.fieldPath)}function xb(t){return rt.create(cs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function Mb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=cs(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=cs(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=cs(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=cs(t.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function Lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ub(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ar(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ar(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ig(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,s)=>Mh(n,s))&&Is(this.baseMutations,e.baseMutations,(n,s)=>Mh(n,s))}}class Cl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=mb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Cl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,s,r,i=J.min(),o=J.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.ne=e}}function Bb(t){const e=Nb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ic(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.ze=new jb}addToCollectionParentIndex(e,n){return this.ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(wn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class jb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ne(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ne(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Cs(0)}static Rn(){return new Cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&ar(s.mutation,r,Dt.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Pn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ws();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Pn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Qt();const o=cr(),a=cr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Qn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ar(u.mutation,l,u.mutation.getFieldMask(),Re.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Kb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=cr();let r=new Oe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=kg();u.forEach(f=>{if(!i.has(f)){const g=Ig(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Pn());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:Ag(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=Ws();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ws();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new xo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,$e.newInvalidDocument(l)))});let o=Ws();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ar(l.mutation,c,Dt.empty(),Re.now()),bl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve($e.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return b.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:jt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Bb(s.bundledQuery),readTime:jt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.overlays=new Oe(B.comparator),this.Xn=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Pn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Pn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Pn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ub(n,s));let i=this.Xn.get(n);i===void 0&&(i=te(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.Zn=new Ne(Pe.ts),this.es=new Ne(Pe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Pe(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new B(new Ie([])),s=new Pe(n,e),r=new Pe(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new Ie([])),s=new Pe(n,e),r=new Pe(n,e+1);let i=te();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||ae(e.ls,n.ls)}static ns(e,n){return ae(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ne(Pe.ts)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),r=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ne(ae);return n.forEach(r=>{const i=new Pe(r,0),o=new Pe(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),b.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new B(i),0);let a=new Ne(ae);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),b.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return b.forEach(n.mutations,r=>{const i=new Pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Pe(n,0),r=this.ds.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.ps=e,this.docs=new Oe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=Qt();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||LT(MT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}Is(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Xb(this)}getSize(e){return b.resolve(this.size)}}class Xb extends Hb{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.persistence=e,this.Ts=new Us(n=>El(n),Il),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new Al,this.targetCount=0,this.Rs=Cs.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),b.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.vn(n),b.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.bs={},this.overlays={},this.Ps=new wl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Yb(this),this.indexManager=new $b,this.remoteDocumentCache=function(s){return new Qb(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Vb(n),this.Ds=new zb(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new Gb(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new Zb(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return b.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class Zb extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class kl{constructor(e){this.persistence=e,this.ks=new Al,this.Ms=null}static Os(e){return new kl(e)}get Fs(){if(this.Ms)return this.Ms;throw W()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),b.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Fs,s=>{const r=B.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return b.or([()=>b.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Rl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(Ph(n))return b.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ic(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,ic(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,s,r){return Ph(n)||r.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(e,n):(Th()<=ie.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),oc(n)),this.Oi(e,o,n,xT(r,-1)))})}ki(e,n){let s=new Ne(gg(e));return n.forEach((r,i)=>{bl(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Th()<=ie.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",oc(n)),this.Di.getDocumentsMatchingQuery(e,n,wn.min())}Oi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Oe(ae),this.Bi=new Us(i=>El(i),Il),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qb(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function nS(t,e,n,s){return new tS(t,e,n,s)}async function Fg(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function sS(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const I=c.docVersions.get(g);ve(I!==null),y.version.compareTo(I)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ug(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function rS(t,e){const n=G(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,I,E){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=Qt(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(iS(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(J.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=r,i))}function iS(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Qt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function oS(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aS(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Un(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function uc(t,e,n){const s=G(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wr(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function jh(t,e,n){const s=G(t);let r=J.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Bi.get(l);return h!==void 0?b.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:te())).next(a=>(cS(s,sb(e),a),{documents:a,ji:i})))}function cS(t,e,n){let s=J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class Hh{constructor(){this.activeTargetIds=Rg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lS{constructor(){this.Fr=new Hh,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Hh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);L("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw bh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=hS[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new bT;a.listenOnce(ET.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pa.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),i(l);break;case pa.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new $(S.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(y)>=0?y:S.UNKNOWN}(h.status);o(new $(f,h.message))}else o(new $(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(S.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=wT(),o=_T(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new TT({})),this.uo(a.initMessageHeaders,n,s),Ed()||Td()||h_()||bd()||f_()||Id()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new fS({jr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",y),l.send(y))},Wr:()=>l.close()}),g=(y,I,E)=>{y.listen(I,k=>{try{E(k)}catch(P){setTimeout(()=>{throw P},0)}})};return g(l,ai.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(l,ai.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),f.eo())}),g(l,ai.EventType.ERROR,y=>{h||(h=!0,bh("Connection","WebChannel transport errored:",y),f.eo(new $(S.UNAVAILABLE,"The operation could not be completed")))}),g(l,ai.EventType.MESSAGE,y=>{var I;if(!h){const E=y.data[0];ve(!!E);const k=E,P=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(P){L("Connection","WebChannel received error:",P);const H=P.status;let Q=function(Te){const Ae=be[Te];if(Ae!==void 0)return Sg(Ae)}(H),le=P.message;Q===void 0&&(Q=S.INTERNAL,le="Unknown error status: "+H+" with message "+P.message),h=!0,f.eo(new $(Q,le)),l.close()}else L("Connection","WebChannel received:",E),f.no(E)}}),g(o,IT.STAT_EVENT,y=>{y.stat===Eh.PROXY?L("Connection","Detected buffering proxy"):y.stat===Eh.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ma(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){return new Ib(t,!0)}class Vg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Vg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new $(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pS extends Bg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Sb(this.wt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?jt(i.readTime):J.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=lc(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=rc(a)?{documents:kb(r,a)}:{query:Rb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Og(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Qi(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Db(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=lc(this.wt),n.removeTarget=e,this.Oo(n)}}class gS extends Bg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Ab(e.writeResults,e.commitTime),s=jt(e.commitTime);return this.listener.Jo(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=lc(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Cb(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(S.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class yS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Wt(n),this.su=!1):L("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Xn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.lu.add(4),await Xr(c),c._u.set("Unknown"),c.lu.delete(4),await Bo(c)}(this))})}),this._u=new yS(s,r)}}async function Bo(t){if(Xn(t))for(const e of t.fu)await e(!0)}async function Xr(t){for(const e of t.fu)await e(!1)}function $g(t,e){const n=G(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ol(n)?Dl(n):Vs(n).Co()&&Nl(n,e))}function jg(t,e){const n=G(t),s=Vs(n);n.hu.delete(e),s.Co()&&Hg(n,e),n.hu.size===0&&(s.Co()?s.ko():Xn(n)&&n._u.set("Unknown"))}function Nl(t,e){t.wu.Nt(e.targetId),Vs(t).Qo(e)}function Hg(t,e){t.wu.Nt(e),Vs(t).jo(e)}function Dl(t){t.wu=new wb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Vs(t).start(),t._u.iu()}function Ol(t){return Xn(t)&&!Vs(t).Do()&&t.hu.size>0}function Xn(t){return G(t).lu.size===0}function Kg(t){t.wu=void 0}async function wS(t){t.hu.forEach((e,n)=>{Nl(t,e)})}async function _S(t,e){Kg(t),Ol(t)?(t._u.uu(e),Dl(t)):t._u.set("Unknown")}async function ES(t,e,n){if(t._u.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xi(t,s)}else if(e instanceof Ii?t.wu.Ut(e):e instanceof Ng?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const s=await Ug(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Hg(r,a);const l=new Un(c.target,a,1,c.sequenceNumber);Nl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await Xi(t,s)}}async function Xi(t,e,n){if(!Wr(e))throw e;t.lu.add(1),await Xr(t),t._u.set("Offline"),n||(n=()=>Ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bo(t)})}function qg(t,e){return e().catch(n=>Xi(t,n,e))}async function $o(t){const e=G(t),n=En(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;IS(e);)try{const r=await oS(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,TS(e,r)}catch(r){await Xi(e,r)}zg(e)&&Wg(e)}function IS(t){return Xn(t)&&t.au.length<10}function TS(t,e){t.au.push(e);const n=En(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function zg(t){return Xn(t)&&!En(t).Do()&&t.au.length>0}function Wg(t){En(t).start()}async function bS(t){En(t).Xo()}async function SS(t){const e=En(t);for(const n of t.au)e.Ho(n.mutations)}async function CS(t,e,n){const s=t.au.shift(),r=Cl.from(s,e,n);await qg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $o(t)}async function AS(t,e){e&&En(t).zo&&await async function(n,s){if(r=s.code,pb(r)&&r!==S.ABORTED){const i=n.au.shift();En(n).No(),await qg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $o(n)}var r}(t,e),zg(t)&&Wg(t)}async function qh(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Xn(n);n.lu.add(3),await Xr(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bo(n)}async function kS(t,e){const n=G(t);e?(n.lu.delete(2),await Bo(n)):e||(n.lu.add(2),await Xr(n),n._u.set("Unknown"))}function Vs(t){return t.mu||(t.mu=function(e,n,s){const r=G(e);return r.tu(),new pS(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:wS.bind(null,t),Jr:_S.bind(null,t),Go:ES.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ol(t)?Dl(t):t._u.set("Unknown")):(await t.mu.stop(),Kg(t))})),t.mu}function En(t){return t.gu||(t.gu=function(e,n,s){const r=G(e);return r.tu(),new gS(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:bS.bind(null,t),Jr:AS.bind(null,t),Yo:SS.bind(null,t),Jo:CS.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await $o(t)):(await t.gu.stop(),t.au.length>0&&(L("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Pl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Wr(t))return new $(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=Ws(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ms;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.yu=new Oe(B.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class As{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new As(e,n,ms.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.Iu=void 0,this.listeners=[]}}class NS{constructor(){this.queries=new Us(e=>pg(e),Mo),this.onlineState="Unknown",this.Tu=new Set}}async function DS(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new RS),r)try{i.Iu=await n.onListen(s)}catch(o){const a=xl(o,`Initialization of query '${oc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Ml(n)}async function OS(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function PS(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Ml(n)}function xS(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ml(t){t.Tu.forEach(e=>{e.next()})}class MS{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new As(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.key=e}}class Qg{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=te(),this.mutatedKeys=te(),this.Lu=gg(e),this.Uu=new ms(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new zh,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=bl(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;f&&g?f.data.isEqual(g.data)?y!==I&&(s.track({type:3,doc:g}),E=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),E=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),E=!0):f&&!g&&(s.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(f)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new As(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new zh,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=te(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Qg(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Gg(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=te();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return As.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class FS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class US{constructor(e){this.key=e,this.Xu=!1}}class VS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Us(a=>pg(a),Mo),this.ec=new Map,this.nc=new Set,this.sc=new Oe(B.comparator),this.ic=new Map,this.rc=new Al,this.oc={},this.uc=new Map,this.cc=Cs.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function BS(t,e){const n=XS(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await aS(n.localStore,Gt(e));n.isPrimaryClient&&$g(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await $S(n,e,s,a==="current")}return r}async function $S(t,e,n,s){t.hc=(u,h,f)=>async function(g,y,I,E){let k=y.view.Ku(I);k.Mi&&(k=await jh(g.localStore,y.query,!1).then(({documents:Q})=>y.view.Ku(Q,k)));const P=E&&E.targetChanges.get(y.targetId),H=y.view.applyChanges(k,g.isPrimaryClient,P);return Gh(g,y.targetId,H.zu),H.snapshot}(t,u,h,f);const r=await jh(t.localStore,e,!0),i=new LS(e,r.ji),o=i.Ku(r.documents),a=Qr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Gh(t,n,c.zu);const l=new FS(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function jS(t,e){const n=G(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!Mo(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await uc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),jg(n.remoteStore,s.targetId),hc(n,s.targetId)}).catch(zr)):(hc(n,s.targetId),await uc(n.localStore,s.targetId,!0))}async function HS(t,e,n){const s=YS(t);try{const r=await function(i,o){const a=G(i),c=Re.now(),l=o.reduce((f,g)=>f.add(g.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Qt(),y=te();return a.Ui.getEntries(f,l).next(I=>{g=I,g.forEach((E,k)=>{k.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(I=>{u=I;const E=[];for(const k of o){const P=hb(k,u.get(k.key).overlayedDocument);P!=null&&E.push(new Qn(k.key,P,fg(P.value.mapValue),$t.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,E,o)}).next(I=>{h=I;const E=I.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,I.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Ag(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Oe(ae)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Yr(s,r.changes),await $o(s.remoteStore)}catch(r){const i=xl(r,"Failed to persist write");n.reject(i)}}async function Xg(t,e){const n=G(t);try{const s=await rS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?ve(o.Xu):r.removedDocuments.size>0&&(ve(o.Xu),o.Xu=!1))}),await Yr(n,s,e)}catch(s){await zr(s)}}function Wh(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ml(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KS(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new Oe(B.comparator);o=o.insert(i,$e.newNoDocument(i,J.min()));const a=te().add(i),c=new Uo(J.min(),new Map,new Ne(ae),o,a);await Xg(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),Ll(s)}else await uc(s.localStore,e,!1).then(()=>hc(s,e,n)).catch(zr)}async function qS(t,e){const n=G(t),s=e.batch.batchId;try{const r=await sS(n.localStore,e);Jg(n,s,null),Yg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yr(n,r)}catch(r){await zr(r)}}async function zS(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Jg(s,e,n),Yg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yr(s,r)}catch(r){await zr(r)}}function Yg(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function Jg(t,e,n){const s=G(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||Zg(t,s)})}function Zg(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(jg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ll(t))}function Gh(t,e,n){for(const s of n)s instanceof Gg?(t.rc.addReference(s.key,e),WS(t,s)):s instanceof Qg?(L("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Zg(t,s.key)):W()}function WS(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.nc.add(s),Ll(t))}function Ll(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(Ie.fromString(e)),s=t.cc.next();t.ic.set(s,new US(n)),t.sc=t.sc.insert(n,s),$g(t.remoteStore,new Un(Gt(Tl(n.path)),s,2,wl.ot))}}async function Yr(t,e,n){const s=G(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Rl.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Pi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>b.forEach(h.vi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Wr(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.$i.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,y)}}}(s.localStore,i))}async function GS(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Fg(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new $(S.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yr(n,s.Ki)}}function QS(t,e){const n=G(t),s=n.ic.get(e);if(s&&s.Xu)return te().add(s.key);{let r=te();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function XS(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KS.bind(null,e),e.Zu.Go=PS.bind(null,e.eventManager),e.Zu.lc=xS.bind(null,e.eventManager),e}function YS(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zS.bind(null,e),e}class JS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Vo(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return nS(this.persistence,new eS,e.initialUser,this.wt)}_c(e){return new Jb(kl.Os,this.wt)}dc(e){return new lS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GS.bind(null,this.syncEngine),await kS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NS}createDatastore(e){const n=Vo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new dS(r));var r;return function(i,o,a,c){return new mS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Wh(this.syncEngine,a,0),o=Kh.V()?new Kh:new uS,new vS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new VS(s,r,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);L("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Xr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=cg.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function nC(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rC(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>qh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qh(e.remoteStore,i)),t.onlineComponents=e}async function rC(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await nC(t,new JS)),t.offlineComponents}async function em(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await sC(t,new ZS)),t.onlineComponents}function iC(t){return em(t).then(e=>e.syncEngine)}async function Qh(t){const e=await em(t),n=e.eventManager;return n.onListen=BS.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n}const Xh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e,n){if(!n)throw new $(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oC(t,e,n,s){if(e===!0&&s===!0)throw new $(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yh(t){if(!B.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(B.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new $(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zh({}),this._settingsFrozen=!1,e instanceof bs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CT;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new RT(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xh.get(e);n&&(L("ComponentProvider","Removing Datastore"),Xh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class jo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class gn extends jo{constructor(e,n,s){super(e,n,Tl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new B(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function nm(t,e,...n){if(t=Pt(t),tm("collection","path",e),t instanceof Ul){const s=Ie.fromString(e,...n);return Jh(s),new gn(t,null,s)}{if(!(t instanceof ct||t instanceof gn))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Jh(s),new gn(t.firestore,null,s)}}function sm(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=cg.I()),tm("doc","path",e),t instanceof Ul){const s=Ie.fromString(e,...n);return Yh(s),new ct(t,null,new B(s))}{if(!(t instanceof ct||t instanceof gn))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Yh(s),new ct(t.firestore,t instanceof gn?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Vg(this,"async_queue_retry"),this.Kc=()=>{const n=ma();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Fn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Wr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Pl.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ef(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Yi extends Ul{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new aC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||om(this),this._firestoreClient.terminate()}}function rm(t=kd()){return Fc(t,"firestore").getImmediate()}function im(t){return t._firestoreClient||om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function om(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new BT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new tC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(qe.fromBase64String(e))}catch(n){throw new $(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^__.*__$/;class lC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gr(e,this.data,n,this.fieldTransforms)}}function cm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class $l{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new $l(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ji(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(cm(this.Zc)&&cC.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Vo(e)}aa(e,n,s,r=!1){return new $l({Zc:e,methodName:n,ca:s,path:We.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function hC(t){const e=t._freezeSettings(),n=Vo(t._databaseId);return new uC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fC(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);fm("Data must be an object, but it was:",o,s);const a=um(s,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=dC(e,h,n);if(!o.contains(f))throw new $(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gC(u,f)||u.push(f)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new lC(new dt(a),c,l)}function lm(t,e){if(hm(t=Pt(t)))return fm("Unsupported field value:",e,t),um(t,e);if(t instanceof am)return function(n,s){if(!cm(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=lm(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ib(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:Qi(s.wt,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qi(s.wt,r)}}if(n instanceof Bl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ks)return{bytesValue:Og(s.wt,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Sl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Fl(n)}`)}(t,e)}function um(t,e){const n={};return lg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(s,r)=>{const i=lm(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function hm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Bl||t instanceof ks||t instanceof ct||t instanceof am)}function fm(t,e,n){if(!hm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fl(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function dC(t,e,n){if((e=Pt(e))instanceof Vl)return e._internalPath;if(typeof e=="string")return dm(t,e);throw Ji("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function dm(t,e,n){if(e.search(pC)>=0)throw Ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vl(...e.split("."))._internalPath}catch{throw Ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ji(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(S.INVALID_ARGUMENT,a+t+c)}function gC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends pm{data(){return super.data()}}function gm(t,e){return typeof e=="string"?dm(t,e):e instanceof Vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mm extends pm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ti extends mm{data(e={}){return super.data(e)}}class yC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Gs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ti(this._firestore,this._userDataWriter,s.key,s,new Gs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ti(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ti(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:vC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return Fs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Bl(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);ve(Lg(s));const r=new bs(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class ym extends _C{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function vm(t,e,n){t=lr(t,ct);const s=lr(t.firestore,Yi),r=EC(t.converter,e,n);return IC(s,[fC(hC(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,$t.none())])}function wm(t,...e){var n,s,r;t=Pt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ef(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ef(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ct)l=lr(t.firestore,Yi),u=Tl(t._key.path),c={next:h=>{e[o]&&e[o](TC(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=lr(t,jo);l=lr(h.firestore,Yi),u=h._query;const f=new ym(l);c={next:g=>{e[o]&&e[o](new yC(l,f,h,g))},error:e[o+1],complete:e[o+2]},wC(t._query)}return function(h,f,g,y){const I=new eC(y),E=new MS(f,I,g);return h.asyncQueue.enqueueAndForget(async()=>DS(await Qh(h),E)),()=>{I.Tc(),h.asyncQueue.enqueueAndForget(async()=>OS(await Qh(h),E))}}(im(l),u,a,c)}function IC(t,e){return function(n,s){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>HS(await iC(n),s,r)),r.promise}(im(t),e)}function TC(t,e,n){const s=n.docs.get(e._key),r=new ym(t);return new mm(t,r,e._key,s,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ls=n})(Pr),_s(new Vn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Yi(r,new AT(n.getProvider("auth-internal")),new DT(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),pn(Ih,"3.4.14",t),pn(Ih,"3.4.14","esm2017")})();const bC=mt("h1",null,"I am the dashboard",-1),SC={name:"Dashboard",setup(t){const e=Uc(Vc.firebase),n=ap(e),s=rm(e),r=nm(s,"markdowns"),i=Wn({markdowns:[]}),o=yd();$f(async()=>{i.user=n.currentUser,console.log(n.currentUser)}),uo(()=>{wm(r,c=>{i.markdowns=c.docs.map(l=>Ko({id:l.id},l.data()))})});function a(){const c=sm(r);vm(c,{markdown:"",converted:""}),o.push(`/editor/${c.id}`)}return(c,l)=>{const u=kc("router-link");return fs(),Zs(nt,null,[bC,(fs(!0),Zs(nt,null,Wy(i.markdowns,h=>(fs(),Zs("ul",{key:h.id},[mt("li",null,[st(u,{to:{path:`/editor/${h.id}`}},{default:Ac(()=>[Dc(Dm(h.id),1)]),_:2},1032,["to"])])]))),128)),mt("button",{onClick:a},"New")],64)}}};var CC={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function tf(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Hs(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zi(t,e){var n,s,r,i,o,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},h=0;function f(y){var I=CC[y[1]||""],E=c[c.length-1]==y;return I?I[1]?(E?c.pop():c.push(y),I[0|E]):I[0]:y}function g(){for(var y="";c.length;)y+=f(c[c.length-1]);return y}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(y,I,E){return u[I.toLowerCase()]=E,""}).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(h,r.index),h=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((o=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+tf(Hs(o).replace(/^\n+|\n+$/g,""))+"</code></pre>":(o=r[6])?(o.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),i=Zi(tf(r[5].replace(/^\s*[>*+.-]/gm,""))),o==">"?o="blockquote":(o=o.match(/\./)?"ol":"ul",i=i.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+o+">"+i+"</"+o+">"):r[8]?n='<img src="'+Hs(r[8])+'" alt="'+Hs(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Hs(r[11]||u[s.toLowerCase()])+'">'),n=g()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(o="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Zi(r[12]||r[15],u)+"</"+o+">":r[16]?n="<code>"+Hs(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(h)+g()).replace(/^\n+|\n+$/g,"")}function AC(t){return t.split(/(?:\r?\n){2,}/).map(e=>[" ","	","#","-","*",">"].some(n=>e.startsWith(n))?Zi(e):`<p>${Zi(e)}</p>`).join(`
`)}const kC=mt("h3",null,"Editor",-1),RC=Dc("< Dashboard"),NC={id:"editor"},DC=["innerHTML"],OC={name:"Editor",setup(t){const e=Uc(Vc.firebase),n=rm(e),s=nm(n,"markdowns"),r=o_(),i=sm(s,r.params.id),o=Wn({});uo(()=>{wm(i,c=>{const l=c.data();o.converted=l.coverted,o.markdown=l.markdown})});function a(c){const l=c.target.value,u=AC(l);vm(i,{converted:u,markdown:l})}return(c,l)=>{const u=kc("router-link");return fs(),Zs(nt,null,[kC,st(u,{to:"/dashboard"},{default:Ac(()=>[RC]),_:1}),mt("div",NC,[Ky(mt("textarea",{onKeyup:a,"onUpdate:modelValue":l[0]||(l[0]=h=>o.markdown=h)},null,544),[[Wv,o.markdown]]),mt("div",{class:"output",innerHTML:o.converted},null,8,DC)])],64)}}};const PC=[{path:"/",component:vI},{path:"/dashboard/",component:SC},{path:"/editor/:id",component:OC}];Xv(tw).use(r_({history:_w(),routes:PC})).mount("#app");
