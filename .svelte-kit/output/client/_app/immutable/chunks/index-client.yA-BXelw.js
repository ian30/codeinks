import{S as T,z as J,A as Q,B as E,C as W,D as g,U as o,E as N,g as P,o as q,F as X,G as k,H as p,I as ee,v as C,x as re,J as ae,K as te,L as ne,y as fe,M as Y,N as U,O as G,P as H,w as ie,Q as se,R as ue,b as D,V as le,W as _e,X as ve,Y as ce,Z as de,_ as K,$ as V,a0 as oe,a1 as he,a2 as ye,f as Z,a3 as be,a4 as ge,a5 as Pe,a6 as Ee,a7 as Re,a8 as we,c as F,a as me}from"./runtime.DZhlGAzU.js";import{c as Ie}from"./store.B7zjih54.js";function I(r,i=null,c){if(typeof r!="object"||r===null||T in r)return r;const v=k(r);if(v!==J&&v!==Q)return r;var n=new Map,u=p(r),h=E(0);u&&n.set("length",E(r.length));var b;return new Proxy(r,{defineProperty(s,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&W();var f=n.get(e);return f===void 0?(f=E(a.value),n.set(e,f)):g(f,I(a.value,b)),!0},deleteProperty(s,e){var a=n.get(e);if(a===void 0)e in s&&n.set(e,E(o));else{if(u&&typeof e=="string"){var f=n.get("length"),t=Number(e);Number.isInteger(t)&&t<f.v&&g(f,t)}g(a,o),$(h)}return!0},get(s,e,a){var d;if(e===T)return r;var f=n.get(e),t=e in s;if(f===void 0&&(!t||(d=N(s,e))!=null&&d.writable)&&(f=E(I(t?s[e]:o,b)),n.set(e,f)),f!==void 0){var l=P(f);return l===o?void 0:l}return Reflect.get(s,e,a)},getOwnPropertyDescriptor(s,e){var a=Reflect.getOwnPropertyDescriptor(s,e);if(a&&"value"in a){var f=n.get(e);f&&(a.value=P(f))}else if(a===void 0){var t=n.get(e),l=t==null?void 0:t.v;if(t!==void 0&&l!==o)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return a},has(s,e){var l;if(e===T)return!0;var a=n.get(e),f=a!==void 0&&a.v!==o||Reflect.has(s,e);if(a!==void 0||q!==null&&(!f||(l=N(s,e))!=null&&l.writable)){a===void 0&&(a=E(f?I(s[e],b):o),n.set(e,a));var t=P(a);if(t===o)return!1}return f},set(s,e,a,f){var w;var t=n.get(e),l=e in s;if(u&&e==="length")for(var d=a;d<t.v;d+=1){var R=n.get(d+"");R!==void 0?g(R,o):d in s&&(R=E(o),n.set(d+"",R))}t===void 0?(!l||(w=N(s,e))!=null&&w.writable)&&(t=E(void 0),g(t,I(a,b)),n.set(e,t)):(l=t.v!==o,g(t,I(a,b)));var y=Reflect.getOwnPropertyDescriptor(s,e);if(y!=null&&y.set&&y.set.call(f,a),!l){if(u&&typeof e=="string"){var S=n.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&g(S,O+1)}$(h)}return!0},ownKeys(s){P(h);var e=Reflect.ownKeys(s).filter(t=>{var l=n.get(t);return l===void 0||l.v!==o});for(var[a,f]of n)f.v!==o&&!(a in s)&&e.push(a);return e},setPrototypeOf(){X()}})}function $(r,i=1){g(r,r.v+i)}function Se(r){throw new Error("lifecycle_outside_component")}function Ne(r,i,c=!1){C&&re();var v=r,n=null,u=null,h=null,b=c?ae:0,s=!1;const e=(f,t=!0)=>{s=!0,a(t,f)},a=(f,t)=>{if(h===(h=f))return;let l=!1;if(C){const d=v.data===te;h===d&&(v=ne(),fe(v),Y(!1),l=!0)}h?(n?U(n):t&&(n=G(()=>t(v))),u&&H(u,()=>{u=null})):(u?U(u):t&&(u=G(()=>t(v))),n&&H(n,()=>{n=null})),l&&Y(!0)};ee(()=>{s=!1,i(e),s||a(null,null)},b),C&&(v=ie)}function j(r,i){return r===i||(r==null?void 0:r[T])===i}function De(r={},i,c,v){return se(()=>{var n,u;return ue(()=>{n=u,u=[],D(()=>{r!==c(...u)&&(i(r,...u),n&&j(c(...n),r)&&i(null,...n))})}),()=>{le(()=>{u&&j(c(...u),r)&&i(null,...u)})}}),r}function z(r){for(var i=q,c=q;i!==null&&!(i.f&(ce|de));)i=i.parent;try{return K(i),r()}finally{K(c)}}function xe(r,i,c,v){var M;var n=(c&Ee)!==0,u=!V||(c&oe)!==0,h=(c&he)!==0,b=(c&Re)!==0,s=!1,e;h?[e,s]=Ie(()=>r[i]):e=r[i];var a=T in r||ye in r,f=((M=N(r,i))==null?void 0:M.set)??(a&&h&&i in r?_=>r[i]=_:void 0),t=v,l=!0,d=!1,R=()=>(d=!0,l&&(l=!1,b?t=D(v):t=v),t);e===void 0&&v!==void 0&&(f&&u&&_e(),e=R(),f&&f(e));var y;if(u)y=()=>{var _=r[i];return _===void 0?R():(l=!0,d=!1,_)};else{var S=z(()=>(n?Z:be)(()=>r[i]));S.f|=ve,y=()=>{var _=P(S);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(c&ge))return y;if(f){var O=r.$$legacy;return function(_,m){return arguments.length>0?((!u||!m||O||s)&&f(m?y():_),_):y()}}var w=!1,B=!1,x=we(e),A=z(()=>Z(()=>{var _=y(),m=P(x);return w?(w=!1,B=!0,m):(B=!1,x.v=_)}));return n||(A.equals=Pe),function(_,m){if(arguments.length>0){const L=m?P(A):u&&h?I(_):_;return A.equals(L)||(w=!0,g(x,L),d&&t!==void 0&&(t=L),D(()=>P(A))),_}return P(A)}}function Le(r){F===null&&Se(),V&&F.l!==null?Oe(F).m.push(r):me(()=>{const i=D(r);if(typeof i=="function")return i})}function Oe(r){var i=r.l;return i.u??(i.u={a:[],b:[],m:[]})}export{I as a,De as b,Ne as i,Le as o,xe as p};