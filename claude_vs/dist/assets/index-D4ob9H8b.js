(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lr="165",Nn={ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Go=0,xr=1,zo=2,to=1,eo=2,Ze=3,dn=0,Me=1,je=2,hn=0,ii=1,Mr=2,Sr=3,Er=4,Vo=5,Rn=100,ko=101,Wo=102,Xo=103,Yo=104,qo=200,Ko=201,Zo=202,jo=203,tr=204,er=205,$o=206,Jo=207,Qo=208,tl=209,el=210,nl=211,il=212,sl=213,rl=214,al=0,ol=1,ll=2,es=3,cl=4,hl=5,ul=6,dl=7,no=0,fl=1,pl=2,un=0,ml=1,_l=2,gl=3,io=4,vl=5,xl=6,Ml=7,so=300,ai=301,oi=302,nr=303,ir=304,ls=306,sr=1e3,Cn=1001,rr=1002,Ee=1003,Sl=1004,Ci=1005,Ne=1006,gs=1007,Ln=1008,fn=1009,El=1010,yl=1011,ns=1012,ro=1013,li=1014,$e=1015,cs=1016,ao=1017,oo=1018,ci=1020,Tl=35902,Al=1021,bl=1022,Ge=1023,Rl=1024,wl=1025,si=1026,hi=1027,lo=1028,co=1029,Cl=1030,ho=1031,uo=1033,vs=33776,xs=33777,Ms=33778,Ss=33779,yr=35840,Tr=35841,Ar=35842,br=35843,Rr=36196,wr=37492,Cr=37496,Lr=37808,Dr=37809,Pr=37810,Ir=37811,Ur=37812,Nr=37813,Or=37814,Fr=37815,Br=37816,Hr=37817,Gr=37818,zr=37819,Vr=37820,kr=37821,Es=36492,Wr=36494,Xr=36495,Ll=36283,Yr=36284,qr=36285,Kr=36286,Dl=3200,Pl=3201,fo=0,Il=1,cn="",Fe="srgb",mn="srgb-linear",cr="display-p3",hs="display-p3-linear",is="linear",$t="srgb",ss="rec709",rs="p3",Fn=7680,Zr=519,Ul=512,Nl=513,Ol=514,po=515,Fl=516,Bl=517,Hl=518,Gl=519,jr=35044,$r="300 es",Je=2e3,as=2001;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qi=Math.PI/180,ar=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function ys(i,t,e){return(1-e)*i+e*t}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vl={DEG2RAD:Qi};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],m=n[7],d=n[2],p=n[5],g=n[8],v=s[0],f=s[3],u=s[6],y=s[1],x=s[4],A=s[7],I=s[2],C=s[5],R=s[8];return r[0]=a*v+o*y+c*I,r[3]=a*f+o*x+c*C,r[6]=a*u+o*A+c*R,r[1]=l*v+h*y+m*I,r[4]=l*f+h*x+m*C,r[7]=l*u+h*A+m*R,r[2]=d*v+p*y+g*I,r[5]=d*f+p*x+g*C,r[8]=d*u+p*A+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*m+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=m*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ts.makeScale(t,e)),this}rotate(t){return this.premultiply(Ts.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ts.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new Nt;function mo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kl(){const i=os("canvas");return i.style.display="block",i}const Jr={};function _o(i){i in Jr||(Jr[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Qr=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ta=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Li={[mn]:{transfer:is,primaries:ss,toReference:i=>i,fromReference:i=>i},[Fe]:{transfer:$t,primaries:ss,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hs]:{transfer:is,primaries:rs,toReference:i=>i.applyMatrix3(ta),fromReference:i=>i.applyMatrix3(Qr)},[cr]:{transfer:$t,primaries:rs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ta),fromReference:i=>i.applyMatrix3(Qr).convertLinearToSRGB()}},Xl=new Set([mn,hs]),Kt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Li[t].toReference,s=Li[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Li[i].primaries},getTransfer:function(i){return i===cn?is:Li[i].transfer}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class Yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=os("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ql=0;class go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bs(s[a].image)):r.push(bs(s[a]))}else r=bs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class _e extends In{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=Cn,s=Cn,r=Ne,a=Ln,o=Ge,c=fn,l=_e.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Ti(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==so)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=so;_e.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],m=c[8],d=c[1],p=c[5],g=c[9],v=c[2],f=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,A=(p+1)/2,I=(u+1)/2,C=(h+d)/4,R=(m+v)/4,O=(g+f)/4;return x>A&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=R/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=C/s,r=O/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=O/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(m-v)*(m-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(m-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zl extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new _e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vo extends _e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends _e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],m=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(m!==v||c!==d||l!==p||h!==g){let f=1-o;const u=c*d+l*p+h*g+m*v,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,u*y);f=Math.sin(f*C)/I,o=Math.sin(o*C)/I}const A=o*y;if(c=c*f+d*A,l=l*f+p*A,h=h*f+g*A,m=m*f+v*A,f===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=I,l*=I,h*=I,m*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],m=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*m+c*p-l*d,t[e+1]=c*g+h*d+l*m-o*p,t[e+2]=l*g+h*p+o*d-c*m,t[e+3]=h*g-o*m-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),m=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*m+l*p*g,this._y=l*p*m-d*h*g,this._z=l*h*g+d*p*m,this._w=l*h*m-d*p*g;break;case"YXZ":this._x=d*h*m+l*p*g,this._y=l*p*m-d*h*g,this._z=l*h*g-d*p*m,this._w=l*h*m+d*p*g;break;case"ZXY":this._x=d*h*m-l*p*g,this._y=l*p*m+d*h*g,this._z=l*h*g+d*p*m,this._w=l*h*m-d*p*g;break;case"ZYX":this._x=d*h*m-l*p*g,this._y=l*p*m+d*h*g,this._z=l*h*g-d*p*m,this._w=l*h*m+d*p*g;break;case"YZX":this._x=d*h*m+l*p*g,this._y=l*p*m+d*h*g,this._z=l*h*g-d*p*m,this._w=l*h*m-d*p*g;break;case"XZY":this._x=d*h*m-l*p*g,this._y=l*p*m-d*h*g,this._z=l*h*g+d*p*m,this._w=l*h*m+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],d=n+o+m;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>m){const p=2*Math.sqrt(1+n-o-m);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>m){const p=2*Math.sqrt(1+o-n-m);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),m=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*m+this._w*d,this._x=n*m+this._x*d,this._y=s*m+this._y*d,this._z=r*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ea.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+c*l+a*m-o*h,this.y=n+c*h+o*l-r*m,this.z=s+c*m+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rs.copy(this).projectOnVector(t),this.sub(Rs)}reflect(t){return this.sub(Rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new P,ea=new Pn;class Un{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pe):Pe.fromBufferAttribute(r,a),Pe.applyMatrix4(t.matrixWorld),this.expandByPoint(Pe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Di.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(t.matrixWorld),this.union(Di)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pe),Pe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mi),Pi.subVectors(this.max,mi),Hn.subVectors(t.a,mi),Gn.subVectors(t.b,mi),zn.subVectors(t.c,mi),en.subVectors(Gn,Hn),nn.subVectors(zn,Gn),Mn.subVectors(Hn,zn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-Mn.z,Mn.y,en.z,0,-en.x,nn.z,0,-nn.x,Mn.z,0,-Mn.x,-en.y,en.x,0,-nn.y,nn.x,0,-Mn.y,Mn.x,0];return!ws(e,Hn,Gn,zn,Pi)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,Hn,Gn,zn,Pi))?!1:(Ii.crossVectors(en,nn),e=[Ii.x,Ii.y,Ii.z],ws(e,Hn,Gn,zn,Pi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new P,new P,new P,new P,new P,new P,new P,new P],Pe=new P,Di=new Un,Hn=new P,Gn=new P,zn=new P,en=new P,nn=new P,Mn=new P,mi=new P,Pi=new P,Ii=new P,Sn=new P;function ws(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Sn.fromArray(i,r);const o=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const $l=new Un,_i=new P,Cs=new P;class Ai{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$l.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(Cs)),this.expandByPoint(_i.copy(t.center).sub(Cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new P,Ls=new P,Ui=new P,sn=new P,Ds=new P,Ni=new P,Ps=new P;class xo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ls.copy(t).add(e).multiplyScalar(.5),Ui.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(Ls);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ui),o=sn.dot(this.direction),c=-sn.dot(Ui),l=sn.lengthSq(),h=Math.abs(1-a*a);let m,d,p,g;if(h>0)if(m=a*c-o,d=a*o-c,g=r*h,m>=0)if(d>=-g)if(d<=g){const v=1/h;m*=v,d*=v,p=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=r,m=Math.max(0,-(a*d+o)),p=-m*m+d*(d+2*c)+l;else d=-r,m=Math.max(0,-(a*d+o)),p=-m*m+d*(d+2*c)+l;else d<=-g?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+d*(d+2*c)+l):d<=g?(m=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+d*(d+2*c)+l);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),p=-m*m+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ls).addScaledVector(Ui,d),p}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),s=Xe.dot(Xe)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,c=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,c=(t.min.z-d.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,s,r){Ds.subVectors(e,t),Ni.subVectors(n,t),Ps.crossVectors(Ds,Ni);let a=this.direction.dot(Ps),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sn.subVectors(this.origin,t);const c=o*this.direction.dot(Ni.crossVectors(sn,Ni));if(c<0)return null;const l=o*this.direction.dot(Ds.cross(sn));if(l<0||c+l>a)return null;const h=-o*sn.dot(Ps);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,c,l,h,m,d,p,g,v,f){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,m,d,p,g,v,f)}set(t,e,n,s,r,a,o,c,l,h,m,d,p,g,v,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=m,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),a=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*m,g=o*h,v=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=p+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*m,g=l*h,v=l*m;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*m,g=l*h,v=l*m;e[0]=d-v*o,e[4]=-a*m,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*m,g=o*h,v=o*m;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+v,e[1]=c*m,e[5]=v*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*m,e[8]=g*m+p,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*m+g,e[10]=d-v*m}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=d*m+v,e[5]=a*h,e[9]=p*m-g,e[2]=g*m-p,e[6]=o*h,e[10]=v*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jl,t,Ql)}lookAt(t,e,n){const s=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),rn.crossVectors(n,be),rn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),rn.crossVectors(n,be)),rn.normalize(),Oi.crossVectors(be,rn),s[0]=rn.x,s[4]=Oi.x,s[8]=be.x,s[1]=rn.y,s[5]=Oi.y,s[9]=be.y,s[2]=rn.z,s[6]=Oi.z,s[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],m=n[5],d=n[9],p=n[13],g=n[2],v=n[6],f=n[10],u=n[14],y=n[3],x=n[7],A=n[11],I=n[15],C=s[0],R=s[4],O=s[8],T=s[12],E=s[1],L=s[5],W=s[9],F=s[13],K=s[2],Z=s[6],X=s[10],$=s[14],Y=s[3],ut=s[7],dt=s[11],mt=s[15];return r[0]=a*C+o*E+c*K+l*Y,r[4]=a*R+o*L+c*Z+l*ut,r[8]=a*O+o*W+c*X+l*dt,r[12]=a*T+o*F+c*$+l*mt,r[1]=h*C+m*E+d*K+p*Y,r[5]=h*R+m*L+d*Z+p*ut,r[9]=h*O+m*W+d*X+p*dt,r[13]=h*T+m*F+d*$+p*mt,r[2]=g*C+v*E+f*K+u*Y,r[6]=g*R+v*L+f*Z+u*ut,r[10]=g*O+v*W+f*X+u*dt,r[14]=g*T+v*F+f*$+u*mt,r[3]=y*C+x*E+A*K+I*Y,r[7]=y*R+x*L+A*Z+I*ut,r[11]=y*O+x*W+A*X+I*dt,r[15]=y*T+x*F+A*$+I*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],u=t[15];return g*(+r*c*m-s*l*m-r*o*d+n*l*d+s*o*p-n*c*p)+v*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+f*(+e*l*m-e*o*p-r*a*m+n*a*p+r*o*h-n*l*h)+u*(-s*o*h-e*c*m+e*o*d+s*a*m-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],u=t[15],y=m*f*l-v*d*l+v*c*p-o*f*p-m*c*u+o*d*u,x=g*d*l-h*f*l-g*c*p+a*f*p+h*c*u-a*d*u,A=h*v*l-g*m*l+g*o*p-a*v*p-h*o*u+a*m*u,I=g*m*c-h*v*c-g*o*d+a*v*d+h*o*f-a*m*f,C=e*y+n*x+s*A+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=y*R,t[1]=(v*d*r-m*f*r-v*s*p+n*f*p+m*s*u-n*d*u)*R,t[2]=(o*f*r-v*c*r+v*s*l-n*f*l-o*s*u+n*c*u)*R,t[3]=(m*c*r-o*d*r-m*s*l+n*d*l+o*s*p-n*c*p)*R,t[4]=x*R,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*u+e*d*u)*R,t[6]=(g*c*r-a*f*r-g*s*l+e*f*l+a*s*u-e*c*u)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*R,t[8]=A*R,t[9]=(g*m*r-h*v*r-g*n*p+e*v*p+h*n*u-e*m*u)*R,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*m*r-h*n*l+e*m*l+a*n*p-e*o*p)*R,t[12]=I*R,t[13]=(h*v*s-g*m*s+g*n*d-e*v*d-h*n*f+e*m*f)*R,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*f-e*o*f)*R,t[15]=(a*m*s-h*o*s+h*n*c-e*m*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,m=o+o,d=r*l,p=r*h,g=r*m,v=a*h,f=a*m,u=o*m,y=c*l,x=c*h,A=c*m,I=n.x,C=n.y,R=n.z;return s[0]=(1-(v+u))*I,s[1]=(p+A)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(p-A)*C,s[5]=(1-(d+u))*C,s[6]=(f+y)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(f-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vn.set(s[0],s[1],s[2]).length();const a=Vn.set(s[4],s[5],s[6]).length(),o=Vn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ie.copy(this);const l=1/r,h=1/a,m=1/o;return Ie.elements[0]*=l,Ie.elements[1]*=l,Ie.elements[2]*=l,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=m,Ie.elements[9]*=m,Ie.elements[10]*=m,e.setFromRotationMatrix(Ie),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Je){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),m=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Je)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===as)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Je){const c=this.elements,l=1/(e-t),h=1/(n-s),m=1/(a-r),d=(e+t)*l,p=(n+s)*h;let g,v;if(o===Je)g=(a+r)*m,v=-2*m;else if(o===as)g=r*m,v=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new P,Ie=new Jt,Jl=new P(0,0,0),Ql=new P(1,1,1),rn=new P,Oi=new P,be=new P,na=new Jt,ia=new Pn;class Ve{constructor(t=0,e=0,n=0,s=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],m=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tc=0;const sa=new P,kn=new Pn,Ye=new Jt,Fi=new P,gi=new P,ec=new P,nc=new Pn,ra=new P(1,0,0),aa=new P(0,1,0),oa=new P(0,0,1),la={type:"added"},ic={type:"removed"},Wn={type:"childadded",child:null},Is={type:"childremoved",child:null};class ce extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new P,e=new Ve,n=new Pn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Nt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(aa,t)}rotateZ(t){return this.rotateOnAxis(oa,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(aa,t)}translateZ(t){return this.translateOnAxis(oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ye.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ye.lookAt(gi,Fi,this.up):Ye.lookAt(Fi,gi,this.up),this.quaternion.setFromRotationMatrix(Ye),s&&(Ye.extractRotation(s.matrixWorld),kn.setFromRotationMatrix(Ye),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(la),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ic),Is.child=t,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ye.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ye.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ye),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(la),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ce.DEFAULT_UP=new P(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ue=new P,qe=new P,Us=new P,Ke=new P,Xn=new P,Yn=new P,ca=new P,Ns=new P,Os=new P,Fs=new P;class He{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ue.subVectors(t,e),s.cross(Ue);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ue.subVectors(s,e),qe.subVectors(n,e),Us.subVectors(t,e);const a=Ue.dot(Ue),o=Ue.dot(qe),c=Ue.dot(Us),l=qe.dot(qe),h=qe.dot(Us),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;const d=1/m,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Ke)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ke.x),c.addScaledVector(a,Ke.y),c.addScaledVector(o,Ke.z),c)}static isFrontFacing(t,e,n,s){return Ue.subVectors(n,e),qe.subVectors(t,e),Ue.cross(qe).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Ue.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xn.subVectors(s,n),Yn.subVectors(r,n),Ns.subVectors(t,n);const c=Xn.dot(Ns),l=Yn.dot(Ns);if(c<=0&&l<=0)return e.copy(n);Os.subVectors(t,s);const h=Xn.dot(Os),m=Yn.dot(Os);if(h>=0&&m<=h)return e.copy(s);const d=c*m-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Xn,a);Fs.subVectors(t,r);const p=Xn.dot(Fs),g=Yn.dot(Fs);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Yn,o);const f=h*g-p*m;if(f<=0&&m-h>=0&&p-g>=0)return ca.subVectors(r,s),o=(m-h)/(m-h+(p-g)),e.copy(s).addScaledVector(ca,o);const u=1/(f+v+d);return a=v*u,o=d*u,e.copy(n).addScaledVector(Xn,a).addScaledVector(Yn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Bs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class j{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=zl(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bs(a,r,t+1/3),this.g=Bs(a,r,t),this.b=Bs(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=So[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Kt.fromWorkingColorSpace(me.copy(this),t),Math.round(xe(me.r*255,0,255))*65536+Math.round(xe(me.g*255,0,255))*256+Math.round(xe(me.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,s=me.g,r=me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Fe){Kt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,s=me.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(Bi);const n=ys(an.h,Bi.h,e),s=ys(an.s,Bi.s,e),r=ys(an.l,Bi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new j;j.NAMES=So;let sc=0;class bi extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ii,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tr,this.blendDst=er,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tr&&(n.blendSrc=this.blendSrc),this.blendDst!==er&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hr extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new P,Hi=new Rt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hi.fromBufferAttribute(this,e),Hi.applyMatrix3(t),this.setXY(e,Hi.x,Hi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jr&&(t.usage=this.usage),t}}class Eo extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yo extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ze extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rc=0;const Le=new Jt,Hs=new ce,qn=new P,Re=new Un,vi=new Un,fe=new P;class _n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mo(t)?yo:Eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vi.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Re.min,vi.min),Re.expandByPoint(fe),fe.addVectors(Re.max,vi.max),Re.expandByPoint(fe)):(Re.expandByPoint(vi.min),Re.expandByPoint(vi.max))}Re.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fe.fromBufferAttribute(o,l),c&&(qn.fromBufferAttribute(t,l),fe.add(qn)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new P,c[O]=new P;const l=new P,h=new P,m=new P,d=new Rt,p=new Rt,g=new Rt,v=new P,f=new P;function u(O,T,E){l.fromBufferAttribute(n,O),h.fromBufferAttribute(n,T),m.fromBufferAttribute(n,E),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(l),m.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(m,-p.y).multiplyScalar(L),f.copy(m).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[O].add(v),o[T].add(v),o[E].add(v),c[O].add(f),c[T].add(f),c[E].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,T=y.length;O<T;++O){const E=y[O],L=E.start,W=E.count;for(let F=L,K=L+W;F<K;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new P,A=new P,I=new P,C=new P;function R(O){I.fromBufferAttribute(s,O),C.copy(I);const T=o[O];x.copy(T),x.sub(I.multiplyScalar(I.dot(T))).normalize(),A.crossVectors(C,T);const L=A.dot(c[O])<0?-1:1;a.setXYZW(O,x.x,x.y,x.z,L)}for(let O=0,T=y.length;O<T;++O){const E=y[O],L=E.start,W=E.count;for(let F=L,K=L+W;F<K;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,m=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,m=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,f=c.length;v<f;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let u=0;u<h;u++)d[g++]=l[p++]}return new Oe(d,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,m=l.length;h<m;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let m=0,d=l.length;m<d;m++){const p=l[m];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],m=r[l];for(let d=0,p=m.length;d<p;d++)h.push(m[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new Jt,En=new xo,Gi=new Ai,ua=new P,Kn=new P,Zn=new P,jn=new P,Gs=new P,zi=new P,Vi=new Rt,ki=new Rt,Wi=new Rt,da=new P,fa=new P,pa=new P,Xi=new P,Yi=new P;class De extends ce{constructor(t=new _n,e=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],m=r[c];h!==0&&(Gs.fromBufferAttribute(m,t),a?zi.addScaledVector(Gs,h):zi.addScaledVector(Gs.sub(e),h))}e.add(zi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(r),En.copy(t.ray).recast(t.near),!(Gi.containsPoint(En.origin)===!1&&(En.intersectSphere(Gi,ua)===null||En.origin.distanceToSquared(ua)>(t.far-t.near)**2))&&(ha.copy(r).invert(),En.copy(t.ray).applyMatrix4(ha),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],u=a[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let A=y,I=x;A<I;A+=3){const C=o.getX(A),R=o.getX(A+1),O=o.getX(A+2);s=qi(this,u,t,n,l,h,m,C,R,O),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let f=g,u=v;f<u;f+=3){const y=o.getX(f),x=o.getX(f+1),A=o.getX(f+2);s=qi(this,a,t,n,l,h,m,y,x,A),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],u=a[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let A=y,I=x;A<I;A+=3){const C=A,R=A+1,O=A+2;s=qi(this,u,t,n,l,h,m,C,R,O),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=g,u=v;f<u;f+=3){const y=f,x=f+1,A=f+2;s=qi(this,a,t,n,l,h,m,y,x,A),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function ac(i,t,e,n,s,r,a,o){let c;if(t.side===Me?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===dn,o),c===null)return null;Yi.copy(o),Yi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yi);return l<e.near||l>e.far?null:{distance:l,point:Yi.clone(),object:i}}function qi(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Kn),i.getVertexPosition(c,Zn),i.getVertexPosition(l,jn);const h=ac(i,t,e,n,Kn,Zn,jn,Xi);if(h){s&&(Vi.fromBufferAttribute(s,o),ki.fromBufferAttribute(s,c),Wi.fromBufferAttribute(s,l),h.uv=He.getInterpolation(Xi,Kn,Zn,jn,Vi,ki,Wi,new Rt)),r&&(Vi.fromBufferAttribute(r,o),ki.fromBufferAttribute(r,c),Wi.fromBufferAttribute(r,l),h.uv1=He.getInterpolation(Xi,Kn,Zn,jn,Vi,ki,Wi,new Rt)),a&&(da.fromBufferAttribute(a,o),fa.fromBufferAttribute(a,c),pa.fromBufferAttribute(a,l),h.normal=He.getInterpolation(Xi,Kn,Zn,jn,da,fa,pa,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:c,c:l,normal:new P,materialIndex:0};He.getNormal(Kn,Zn,jn,m.normal),h.face=m}return h}class di extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],m=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(m,2));function g(v,f,u,y,x,A,I,C,R,O,T){const E=A/R,L=I/O,W=A/2,F=I/2,K=C/2,Z=R+1,X=O+1;let $=0,Y=0;const ut=new P;for(let dt=0;dt<X;dt++){const mt=dt*L-F;for(let Gt=0;Gt<Z;Gt++){const Wt=Gt*E-W;ut[v]=Wt*y,ut[f]=mt*x,ut[u]=K,l.push(ut.x,ut.y,ut.z),ut[v]=0,ut[f]=0,ut[u]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),m.push(Gt/R),m.push(1-dt/O),$+=1}}for(let dt=0;dt<O;dt++)for(let mt=0;mt<R;mt++){const Gt=d+mt+Z*dt,Wt=d+mt+Z*(dt+1),q=d+(mt+1)+Z*(dt+1),nt=d+(mt+1)+Z*dt;c.push(Gt,Wt,nt),c.push(Wt,q,nt),Y+=6}o.addGroup(p,Y,T),p+=Y,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const s in n)t[s]=n[s]}return t}function oc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function To(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const lc={clone:ui,merge:ve};var cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=oc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ao extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Je}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const on=new P,ma=new Rt,_a=new Rt;class we extends Ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){on.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(on.x,on.y).multiplyScalar(-t/on.z),on.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(on.x,on.y).multiplyScalar(-t/on.z)}getViewSize(t,e){return this.getViewBounds(t,ma,_a),e.subVectors(_a,ma)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,Jn=1;class uc extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new we($n,Jn,t,e);s.layers=this.layers,this.add(s);const r=new we($n,Jn,t,e);r.layers=this.layers,this.add(r);const a=new we($n,Jn,t,e);a.layers=this.layers,this.add(a);const o=new we($n,Jn,t,e);o.layers=this.layers,this.add(o);const c=new we($n,Jn,t,e);c.layers=this.layers,this.add(c);const l=new we($n,Jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(m,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bo extends _e{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ai,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dc extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new di(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:hn});r.uniforms.tEquirect.value=e;const a=new De(s,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ne),new uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const zs=new P,fc=new P,pc=new Nt;class ln{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=zs.subVectors(n,e).cross(fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pc.getNormalMatrix(t),s=this.coplanarPoint(zs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ai,Ki=new P;class ur{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],m=s[6],d=s[7],p=s[8],g=s[9],v=s[10],f=s[11],u=s[12],y=s[13],x=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,f-p,A-u).normalize(),n[1].setComponents(c+r,d+l,f+p,A+u).normalize(),n[2].setComponents(c+a,d+h,f+g,A+y).normalize(),n[3].setComponents(c-a,d-h,f-g,A-y).normalize(),n[4].setComponents(c-o,d-m,f-v,A-x).normalize(),e===Je)n[5].setComponents(c+o,d+m,f+v,A+x).normalize();else if(e===as)n[5].setComponents(o,m,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ki.x=s.normal.x>0?t.max.x:t.min.x,Ki.y=s.normal.y>0?t.max.y:t.min.y,Ki.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mc(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,m=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){const h=c.array,m=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),m.count===-1&&d.length===0&&i.bufferSubData(l,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}m.count!==-1&&(i.bufferSubData(l,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count),m.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class us extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,m=t/o,d=e/c,p=[],g=[],v=[],f=[];for(let u=0;u<h;u++){const y=u*d-a;for(let x=0;x<l;x++){const A=x*m-r;g.push(A,-y,0),v.push(0,0,1),f.push(x/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<o;y++){const x=y+l*u,A=y+l*(u+1),I=y+1+l*(u+1),C=y+1+l*u;p.push(x,A,C),p.push(A,I,C)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var _c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ac=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",qc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$c=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ah=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ou=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:_c,alphahash_pars_fragment:gc,alphamap_fragment:vc,alphamap_pars_fragment:xc,alphatest_fragment:Mc,alphatest_pars_fragment:Sc,aomap_fragment:Ec,aomap_pars_fragment:yc,batching_pars_vertex:Tc,batching_vertex:Ac,begin_vertex:bc,beginnormal_vertex:Rc,bsdfs:wc,iridescence_fragment:Cc,bumpmap_pars_fragment:Lc,clipping_planes_fragment:Dc,clipping_planes_pars_fragment:Pc,clipping_planes_pars_vertex:Ic,clipping_planes_vertex:Uc,color_fragment:Nc,color_pars_fragment:Oc,color_pars_vertex:Fc,color_vertex:Bc,common:Hc,cube_uv_reflection_fragment:Gc,defaultnormal_vertex:zc,displacementmap_pars_vertex:Vc,displacementmap_vertex:kc,emissivemap_fragment:Wc,emissivemap_pars_fragment:Xc,colorspace_fragment:Yc,colorspace_pars_fragment:qc,envmap_fragment:Kc,envmap_common_pars_fragment:Zc,envmap_pars_fragment:jc,envmap_pars_vertex:$c,envmap_physical_pars_fragment:lh,envmap_vertex:Jc,fog_vertex:Qc,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:sh,lights_lambert_fragment:rh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:hh,lights_phong_fragment:uh,lights_phong_pars_fragment:dh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:_h,lights_fragment_end:gh,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:Sh,map_fragment:Eh,map_pars_fragment:yh,map_particle_fragment:Th,map_particle_pars_fragment:Ah,metalnessmap_fragment:bh,metalnessmap_pars_fragment:Rh,morphinstance_vertex:wh,morphcolor_vertex:Ch,morphnormal_vertex:Lh,morphtarget_pars_vertex:Dh,morphtarget_vertex:Ph,normal_fragment_begin:Ih,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Oh,normal_vertex:Fh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:Gh,clearcoat_pars_fragment:zh,iridescence_pars_fragment:Vh,opaque_fragment:kh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:Yh,dithering_fragment:qh,dithering_pars_fragment:Kh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:jh,shadowmap_pars_fragment:$h,shadowmap_pars_vertex:Jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:du,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:_u,backgroundCube_vert:gu,backgroundCube_frag:vu,cube_vert:xu,cube_frag:Mu,depth_vert:Su,depth_frag:Eu,distanceRGBA_vert:yu,distanceRGBA_frag:Tu,equirect_vert:Au,equirect_frag:bu,linedashed_vert:Ru,linedashed_frag:wu,meshbasic_vert:Cu,meshbasic_frag:Lu,meshlambert_vert:Du,meshlambert_frag:Pu,meshmatcap_vert:Iu,meshmatcap_frag:Uu,meshnormal_vert:Nu,meshnormal_frag:Ou,meshphong_vert:Fu,meshphong_frag:Bu,meshphysical_vert:Hu,meshphysical_frag:Gu,meshtoon_vert:zu,meshtoon_frag:Vu,points_vert:ku,points_frag:Wu,shadow_vert:Xu,shadow_frag:Yu,sprite_vert:qu,sprite_frag:Ku},ot={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Be={basic:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new j(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ve([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ve([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ve([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new j(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ve([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ve([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ve([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ve([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ve([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ve([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ve([ot.lights,ot.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Be.physical={uniforms:ve([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Zi={r:0,b:0,g:0},Tn=new Ve,Zu=new Jt;function ju(i,t,e,n,s,r,a){const o=new j(0);let c=r===!0?0:1,l,h,m=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const A=g(y);A===null?u(o,c):A&&A.isColor&&(u(A,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===ls)?(h===void 0&&(h=new De(new di(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ui(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Tn.copy(x.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zu.makeRotationFromEuler(Tn)),h.material.toneMapped=Kt.getTransfer(A.colorSpace)!==$t,(m!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,m=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new De(new us(2,2),new pn({name:"BackgroundMaterial",uniforms:ui(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(A.colorSpace)!==$t,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,m=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,x){y.getRGB(Zi,To(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:v,addToRenderList:f}}function $u(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(E,L,W,F,K){let Z=!1;const X=m(F,W,L);r!==X&&(r=X,l(r.object)),Z=p(E,F,W,K),Z&&g(E,F,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,A(E,L,W,F),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function m(E,L,W){const F=W.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let Z=K[L.id];Z===void 0&&(Z={},K[L.id]=Z);let X=Z[F];return X===void 0&&(X=d(c()),Z[F]=X),X}function d(E){const L=[],W=[],F=[];for(let K=0;K<e;K++)L[K]=0,W[K]=0,F[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,L,W,F){const K=r.attributes,Z=L.attributes;let X=0;const $=W.getAttributes();for(const Y in $)if($[Y].location>=0){const dt=K[Y];let mt=Z[Y];if(mt===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(mt=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(mt=E.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(E,L,W,F){const K={},Z=L.attributes;let X=0;const $=W.getAttributes();for(const Y in $)if($[Y].location>=0){let dt=Z[Y];dt===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor));const mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),K[Y]=mt,X++}r.attributes=K,r.attributesNum=X,r.index=F}function v(){const E=r.newAttributes;for(let L=0,W=E.length;L<W;L++)E[L]=0}function f(E){u(E,0)}function u(E,L){const W=r.newAttributes,F=r.enabledAttributes,K=r.attributeDivisors;W[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),K[E]!==L&&(i.vertexAttribDivisor(E,L),K[E]=L)}function y(){const E=r.newAttributes,L=r.enabledAttributes;for(let W=0,F=L.length;W<F;W++)L[W]!==E[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function x(E,L,W,F,K,Z,X){X===!0?i.vertexAttribIPointer(E,L,W,K,Z):i.vertexAttribPointer(E,L,W,F,K,Z)}function A(E,L,W,F){v();const K=F.attributes,Z=W.getAttributes(),X=L.defaultAttributeValues;for(const $ in Z){const Y=Z[$];if(Y.location>=0){let ut=K[$];if(ut===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),ut!==void 0){const dt=ut.normalized,mt=ut.itemSize,Gt=t.get(ut);if(Gt===void 0)continue;const Wt=Gt.buffer,q=Gt.type,nt=Gt.bytesPerElement,ft=q===i.INT||q===i.UNSIGNED_INT||ut.gpuType===ro;if(ut.isInterleavedBufferAttribute){const lt=ut.data,Ot=lt.stride,Ct=ut.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<Y.locationSize;zt++)u(Y.location+zt,lt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<Y.locationSize;zt++)f(Y.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let zt=0;zt<Y.locationSize;zt++)x(Y.location+zt,mt/Y.locationSize,q,dt,Ot*nt,(Ct+mt/Y.locationSize*zt)*nt,ft)}else{if(ut.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)u(Y.location+lt,ut.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let lt=0;lt<Y.locationSize;lt++)f(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let lt=0;lt<Y.locationSize;lt++)x(Y.location+lt,mt/Y.locationSize,q,dt,mt*nt,mt/Y.locationSize*lt*nt,ft)}}else if(X!==void 0){const dt=X[$];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Y.location,dt);break;case 3:i.vertexAttrib3fv(Y.location,dt);break;case 4:i.vertexAttrib4fv(Y.location,dt);break;default:i.vertexAttrib1fv(Y.location,dt)}}}}y()}function I(){O();for(const E in n){const L=n[E];for(const W in L){const F=L[W];for(const K in F)h(F[K].object),delete F[K];delete L[W]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const W in L){const F=L[W];for(const K in F)h(F[K].object),delete F[K];delete L[W]}delete n[E.id]}function R(E){for(const L in n){const W=n[L];if(W[E.id]===void 0)continue;const F=W[E.id];for(const K in F)h(F[K].object),delete F[K];delete W[E.id]}}function O(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function Ju(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,m){m!==0&&(i.drawArraysInstanced(n,l,h,m),e.update(h,n,m))}function o(l,h,m){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<m;p++)this.render(l[p],h[p]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,m);let p=0;for(let g=0;g<m;g++)p+=h[g];e.update(p,n,1)}}function c(l,h,m,d){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,m);let g=0;for(let v=0;v<m;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Qu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ge&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$e&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:u,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:I}}function td(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ln,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const p=m.length!==0||d||n!==0||s;return s=d,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,p){const g=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,u=i.get(m);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{const y=r?0:n,x=y*4;let A=u.clippingState||null;c.value=A,A=h(g,d,x,p);for(let I=0;I!==x;++I)A[I]=e[I];u.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,p,g){const v=m!==null?m.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const u=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<u)&&(f=new Float32Array(u));for(let x=0,A=p;x!==v;++x,A+=4)a.copy(m[x]).applyMatrix4(y,o),a.normal.toArray(f,A),f[A+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function ed(i){let t=new WeakMap;function e(a,o){return o===nr?a.mapping=ai:o===ir&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===nr||o===ir)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new dc(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wo extends Ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ei=4,ga=[.125,.215,.35,.446,.526,.582],wn=20,Vs=new wo,va=new j;let ks=null,Ws=0,Xs=0,Ys=!1;const bn=(1+Math.sqrt(5))/2,Qn=1/bn,xa=[new P(-bn,Qn,0),new P(bn,Qn,0),new P(-Qn,0,bn),new P(Qn,0,bn),new P(0,bn,-Qn),new P(0,bn,Qn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Ws,Xs),this._renderer.xr.enabled=Ys,t.scissorTest=!1,ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:cs,format:Ge,colorSpace:mn,depthBuffer:!1},s=Sa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nd(r)),this._blurMaterial=id(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,s){const o=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,d=h.toneMapping;h.getClearColor(va),h.toneMapping=un,h.autoClear=!1;const p=new hr({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new De(new di,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(va),v=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):y===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const x=this._cubeSize;ji(s,y*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=m,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ai||t.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xa[(s-r-1)%xa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new De(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wn-1),v=r/g,f=isFinite(r)?1+Math.floor(h*v):wn;f>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);const u=[];let y=0;for(let R=0;R<wn;++R){const O=R/v,T=Math.exp(-O*O/2);u.push(T),R===0?y+=T:R<f&&(y+=2*T)}for(let R=0;R<u.length;R++)u[R]=u[R]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const A=this._sizeLods[s],I=3*A*(s>x-ei?s-x+ei:0),C=4*(this._cubeSize-A);ji(e,I,C,3*A,2*A),c.setRenderTarget(e),c.render(m,Vs)}}function nd(i){const t=[],e=[],n=[];let s=i;const r=i-ei+1+ga.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ei?c=ga[a-i+ei-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,m=1+l,d=[h,h,m,h,m,m,h,h,m,m,h,m],p=6,g=6,v=3,f=2,u=1,y=new Float32Array(v*g*p),x=new Float32Array(f*g*p),A=new Float32Array(u*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,O=C>2?0:-1,T=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(T,v*g*C),x.set(d,f*g*C);const E=[C,C,C,C,C,C];A.set(E,u*g*C)}const I=new _n;I.setAttribute("position",new Oe(y,v)),I.setAttribute("uv",new Oe(x,f)),I.setAttribute("faceIndex",new Oe(A,u)),t.push(I),s>ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sa(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function id(i,t,e){const n=new Float32Array(wn),s=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Ea(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ya(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function dr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===nr||c===ir,h=c===ai||c===oi;if(l||h){let m=t.get(o);const d=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ma(i)),m=l?e.fromEquirectangular(o,m):e.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),m.texture;if(m!==void 0)return m.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ma(i)),m=l?e.fromEquirectangular(o):e.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),o.addEventListener("dispose",r),m.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_o("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ad(i,t,e,n){const s={},r=new WeakMap;function a(m){const d=m.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,u=v.length;f<u;f++)t.remove(v[f])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(m){const d=m.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=m.morphAttributes;for(const g in p){const v=p[g];for(let f=0,u=v.length;f<u;f++)t.update(v[f],i.ARRAY_BUFFER)}}function l(m){const d=[],p=m.index,g=m.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,A=y.length;x<A;x+=3){const I=y[x+0],C=y[x+1],R=y[x+2];d.push(I,C,C,R,R,I)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,A=y.length/3-1;x<A;x+=3){const I=x+0,C=x+1,R=x+2;d.push(I,C,C,R,R,I)}}else return;const f=new(mo(d)?yo:Eo)(d,1);f.version=v;const u=r.get(m);u&&t.remove(u),r.set(m,f)}function h(m){const d=r.get(m);if(d){const p=m.index;p!==null&&d.version<p.version&&l(m)}else l(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:h}}function od(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<g;f++)this.render(d[f]/a,p[f]);else{v.multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let u=0;u<g;u++)f+=p[u];e.update(f,n,1)}}function m(d,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)l(d[u]/a,p[u],v[u]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let u=0;for(let y=0;y<g;y++)u+=p[y];for(let y=0;y<v.length;y++)e.update(u,n,v[y])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ld(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cd(i,t,e){const n=new WeakMap,s=new Qt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==m){let E=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),v===!0&&(A=2),f===!0&&(A=3);let I=o.attributes.position.count*A,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*C*4*m),O=new vo(R,I,C,m);O.type=$e,O.needsUpdate=!0;const T=A*4;for(let L=0;L<m;L++){const W=u[L],F=y[L],K=x[L],Z=I*C*4*L;for(let X=0;X<W.count;X++){const $=X*T;g===!0&&(s.fromBufferAttribute(W,X),R[Z+$+0]=s.x,R[Z+$+1]=s.y,R[Z+$+2]=s.z,R[Z+$+3]=0),v===!0&&(s.fromBufferAttribute(F,X),R[Z+$+4]=s.x,R[Z+$+5]=s.y,R[Z+$+6]=s.z,R[Z+$+7]=0),f===!0&&(s.fromBufferAttribute(K,X),R[Z+$+8]=s.x,R[Z+$+9]=s.y,R[Z+$+10]=s.z,R[Z+$+11]=K.itemSize===4?s.w:1)}}d={count:m,texture:O,size:new Rt(I,C)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,m=t.get(c,h);if(s.get(m)!==l&&(t.update(m),s.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return m}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Co extends _e{constructor(t,e,n,s,r,a,o,c,l,h=si){if(h!==si&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=li),n===void 0&&h===hi&&(n=ci),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lo=new _e,Do=new Co(1,1);Do.compareFunction=po;const Po=new vo,Io=new jl,Uo=new bo,Ta=[],Aa=[],ba=new Float32Array(16),Ra=new Float32Array(9),wa=new Float32Array(4);function fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ta[s];if(r===void 0&&(r=new Float32Array(s),Ta[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ds(i,t){let e=Aa[t];e===void 0&&(e=new Int32Array(t),Aa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ud(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;wa.set(n),i.uniformMatrix2fv(this.addr,!1,wa),ue(e,n)}}function _d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Ra.set(n),i.uniformMatrix3fv(this.addr,!1,Ra),ue(e,n)}}function gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ba.set(n),i.uniformMatrix4fv(this.addr,!1,ba),ue(e,n)}}function vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Ed(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function bd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Do:Lo;e.setTexture2D(t||r,s)}function Rd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Io,s)}function wd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uo,s)}function Cd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Po,s)}function Ld(i){switch(i){case 5126:return ud;case 35664:return dd;case 35665:return fd;case 35666:return pd;case 35674:return md;case 35675:return _d;case 35676:return gd;case 5124:case 35670:return vd;case 35667:case 35671:return xd;case 35668:case 35672:return Md;case 35669:case 35673:return Sd;case 5125:return Ed;case 36294:return yd;case 36295:return Td;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return bd;case 35679:case 36299:case 36307:return Rd;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Cd}}function Dd(i,t){i.uniform1fv(this.addr,t)}function Pd(i,t){const e=fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Id(i,t){const e=fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ud(i,t){const e=fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Nd(i,t){const e=fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Od(i,t){const e=fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fd(i,t){const e=fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bd(i,t){i.uniform1iv(this.addr,t)}function Hd(i,t){i.uniform2iv(this.addr,t)}function Gd(i,t){i.uniform3iv(this.addr,t)}function zd(i,t){i.uniform4iv(this.addr,t)}function Vd(i,t){i.uniform1uiv(this.addr,t)}function kd(i,t){i.uniform2uiv(this.addr,t)}function Wd(i,t){i.uniform3uiv(this.addr,t)}function Xd(i,t){i.uniform4uiv(this.addr,t)}function Yd(i,t,e){const n=this.cache,s=t.length,r=ds(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Lo,r[a])}function qd(i,t,e){const n=this.cache,s=t.length,r=ds(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Io,r[a])}function Kd(i,t,e){const n=this.cache,s=t.length,r=ds(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uo,r[a])}function Zd(i,t,e){const n=this.cache,s=t.length,r=ds(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Po,r[a])}function jd(i){switch(i){case 5126:return Dd;case 35664:return Pd;case 35665:return Id;case 35666:return Ud;case 35674:return Nd;case 35675:return Od;case 35676:return Fd;case 5124:case 35670:return Bd;case 35667:case 35671:return Hd;case 35668:case 35672:return Gd;case 35669:case 35673:return zd;case 5125:return Vd;case 36294:return kd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return qd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Zd}}class $d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ld(e.type)}}class Jd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jd(e.type)}}class Qd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function Ca(i,t){i.seq.push(t),i.map[t.id]=t}function tf(i,t,e){const n=i.name,s=n.length;for(qs.lastIndex=0;;){const r=qs.exec(n),a=qs.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ca(e,l===void 0?new $d(o,i,t):new Jd(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Qd(o),Ca(e,m)),e=m}}}class ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function La(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ef=37297;let nf=0;function sf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function rf(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===rs&&e===ss?n="LinearDisplayP3ToLinearSRGB":t===ss&&e===rs&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case hs:return[n,"LinearTransferOETF"];case Fe:case cr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Da(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sf(i.getShaderSource(t),a)}else return s}function af(i,t){const e=rf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function of(i,t){let e;switch(t){case ml:e="Linear";break;case _l:e="Reinhard";break;case gl:e="OptimizedCineon";break;case io:e="ACESFilmic";break;case xl:e="AgX";break;case Ml:e="Neutral";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function cf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ei(i){return i!==""}function Pa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ia(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function or(i){return i.replace(uf,ff)}const df=new Map;function ff(i,t){let e=Ut[t];if(e===void 0){const n=df.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return or(e)}const pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(i){return i.replace(pf,mf)}function mf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Na(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _f(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===to?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ze&&(t="SHADOWMAP_TYPE_VSM"),t}function gf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ai:case oi:t="ENVMAP_TYPE_CUBE";break;case ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:t="ENVMAP_MODE_REFRACTION";break}return t}function xf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case no:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case pl:t="ENVMAP_BLENDING_ADD";break}return t}function Mf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_f(e),l=gf(e),h=vf(e),m=xf(e),d=Mf(e),p=lf(e),g=cf(r),v=s.createProgram();let f,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ei).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ei).join(`
`),u.length>0&&(u+=`
`)):(f=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),u=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Ut.tonemapping_pars_fragment:"",e.toneMapping!==un?of("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,af("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ei).join(`
`)),a=or(a),a=Pa(a,e),a=Ia(a,e),o=or(o),o=Pa(o,e),o=Ia(o,e),a=Ua(a),o=Ua(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",e.glslVersion===$r?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=y+f+a,A=y+u+o,I=La(s,s.VERTEX_SHADER,x),C=La(s,s.FRAGMENT_SHADER,A);s.attachShader(v,I),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),K=s.getShaderInfoLog(C).trim();let Z=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,C);else{const $=Da(s,I,"vertex"),Y=Da(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+$+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||K==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:W,vertexShader:{log:F,prefix:f},fragmentShader:{log:K,prefix:u}})}s.deleteShader(I),s.deleteShader(C),O=new ts(s,v),T=hf(s,v)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,ef)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let Ef=0;class yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tf(t),e.set(t,n)),n}}class Tf{constructor(t){this.id=Ef++,this.code=t,this.usedTimes=0}}function Af(i,t,e,n,s,r,a){const o=new Mo,c=new yf,l=new Set,h=[],m=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function f(T,E,L,W,F){const K=W.fog,Z=F.geometry,X=T.isMeshStandardMaterial?W.environment:null,$=(T.isMeshStandardMaterial?e:t).get(T.envMap||X),Y=$&&$.mapping===ls?$.image.height:null,ut=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=dt!==void 0?dt.length:0;let Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let Wt,q,nt,ft;if(ut){const Xt=Be[ut];Wt=Xt.vertexShader,q=Xt.fragmentShader}else Wt=T.vertexShader,q=T.fragmentShader,c.update(T),nt=c.getVertexShaderID(T),ft=c.getFragmentShaderID(T);const lt=i.getRenderTarget(),Ot=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,zt=!!T.map,D=!!T.matcap,Vt=!!$,Ht=!!T.aoMap,jt=!!T.lightMap,Et=!!T.bumpMap,kt=!!T.normalMap,Ft=!!T.displacementMap,Lt=!!T.emissiveMap,te=!!T.metalnessMap,b=!!T.roughnessMap,M=T.anisotropy>0,z=T.clearcoat>0,J=T.dispersion>0,tt=T.iridescence>0,et=T.sheen>0,vt=T.transmission>0,at=M&&!!T.anisotropyMap,rt=z&&!!T.clearcoatMap,Dt=z&&!!T.clearcoatNormalMap,it=z&&!!T.clearcoatRoughnessMap,_t=tt&&!!T.iridescenceMap,Bt=tt&&!!T.iridescenceThicknessMap,Tt=et&&!!T.sheenColorMap,ct=et&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,It=!!T.specularColorMap,ee=!!T.specularIntensityMap,_=vt&&!!T.transmissionMap,V=vt&&!!T.thicknessMap,B=!!T.gradientMap,k=!!T.alphaMap,Q=T.alphaTest>0,xt=!!T.alphaHash,wt=!!T.extensions;let ne=un;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const re={shaderID:ut,shaderType:T.type,shaderName:T.name,vertexShader:Wt,fragmentShader:q,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:ft,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:mn,alphaToCoverage:!!T.alphaToCoverage,map:zt,matcap:D,envMap:Vt,envMapMode:Vt&&$.mapping,envMapCubeUVHeight:Y,aoMap:Ht,lightMap:jt,bumpMap:Et,normalMap:kt,displacementMap:d&&Ft,emissiveMap:Lt,normalMapObjectSpace:kt&&T.normalMapType===Il,normalMapTangentSpace:kt&&T.normalMapType===fo,metalnessMap:te,roughnessMap:b,anisotropy:M,anisotropyMap:at,clearcoat:z,clearcoatMap:rt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:it,dispersion:J,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:Bt,sheen:et,sheenColorMap:Tt,sheenRoughnessMap:ct,specularMap:Pt,specularColorMap:It,specularIntensityMap:ee,transmission:vt,transmissionMap:_,thicknessMap:V,gradientMap:B,opaque:T.transparent===!1&&T.blending===ii&&T.alphaToCoverage===!1,alphaMap:k,alphaTest:Q,alphaHash:xt,combine:T.combine,mapUv:zt&&v(T.map.channel),aoMapUv:Ht&&v(T.aoMap.channel),lightMapUv:jt&&v(T.lightMap.channel),bumpMapUv:Et&&v(T.bumpMap.channel),normalMapUv:kt&&v(T.normalMap.channel),displacementMapUv:Ft&&v(T.displacementMap.channel),emissiveMapUv:Lt&&v(T.emissiveMap.channel),metalnessMapUv:te&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:at&&v(T.anisotropyMap.channel),clearcoatMapUv:rt&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(T.sheenRoughnessMap.channel),specularMapUv:Pt&&v(T.specularMap.channel),specularColorMapUv:It&&v(T.specularColorMap.channel),specularIntensityMapUv:ee&&v(T.specularIntensityMap.channel),transmissionMapUv:_&&v(T.transmissionMap.channel),thicknessMapUv:V&&v(T.thicknessMap.channel),alphaMapUv:k&&v(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(zt||k),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:zt&&T.map.isVideoTexture===!0&&Kt.getTransfer(T.map.colorSpace)===$t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===je,flipSided:T.side===Me,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:wt&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(y(E,T),x(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function y(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),T.push(o.mask)}function A(T){const E=g[T.type];let L;if(E){const W=Be[E];L=lc.clone(W.uniforms)}else L=T.uniforms;return L}function I(T,E){let L;for(let W=0,F=h.length;W<F;W++){const K=h[W];if(K.cacheKey===E){L=K,++L.usedTimes;break}}return L===void 0&&(L=new Sf(i,E,T,r),h.push(L)),L}function C(T){if(--T.usedTimes===0){const E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function O(){c.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:A,acquireProgram:I,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:O}}function bf(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(m,d,p,g,v,f){let u=i[t];return u===void 0?(u={id:m.id,object:m,geometry:d,material:p,groupOrder:g,renderOrder:m.renderOrder,z:v,group:f},i[t]=u):(u.id=m.id,u.object=m,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=m.renderOrder,u.z=v,u.group=f),t++,u}function o(m,d,p,g,v,f){const u=a(m,d,p,g,v,f);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(m,d,p,g,v,f){const u=a(m,d,p,g,v,f);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(m,d){e.length>1&&e.sort(m||Rf),n.length>1&&n.sort(d||Oa),s.length>1&&s.sort(d||Oa)}function h(){for(let m=t,d=i.length;m<d;m++){const p=i[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function wf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Fa,i.set(n,[a])):s>=r.length?(a=new Fa,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new j};break;case"SpotLight":e={position:new P,direction:new P,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Lf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Df=0;function Pf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function If(i){const t=new Cf,e=Lf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new Jt,a=new Jt;function o(l){let h=0,m=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,v=0,f=0,u=0,y=0,x=0,A=0,I=0,C=0,R=0;l.sort(Pf);for(let T=0,E=l.length;T<E;T++){const L=l[T],W=L.color,F=L.intensity,K=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*F,m+=W.g*F,d+=W.b*F;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],F);R++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Y=e.get(L);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=L.shadow.matrix,y++}n.directional[p]=X,p++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(W).multiplyScalar(F),X.distance=K,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[v]=X;const $=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,$.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=$.matrix,L.castShadow){const Y=e.get(L);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Z,A++}v++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(W).multiplyScalar(F),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[f]=X,f++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const $=L.shadow,Y=e.get(L);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(F),X.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[u]=X,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==f||O.hemiLength!==u||O.numDirectionalShadows!==y||O.numPointShadows!==x||O.numSpotShadows!==A||O.numSpotMaps!==I||O.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=A+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,O.directionalLength=p,O.pointLength=g,O.spotLength=v,O.rectAreaLength=f,O.hemiLength=u,O.numDirectionalShadows=y,O.numPointShadows=x,O.numSpotShadows=A,O.numSpotMaps=I,O.numLightProbes=R,n.version=Df++)}function c(l,h){let m=0,d=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){const x=l[u];if(x.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),m++}else if(x.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const A=n.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),v++}}}return{setup:o,setupView:c,state:n}}function Ba(i){const t=new If(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Uf(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ba(i),t.set(s,[o])):r>=a.length?(o=new Ba(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Nf extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Of extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ff=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hf(i,t,e){let n=new ur;const s=new Rt,r=new Rt,a=new Qt,o=new Nf({depthPacking:Pl}),c=new Of,l={},h=e.maxTextureSize,m={[dn]:Me,[Me]:dn,[je]:je},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Ff,fragmentShader:Bf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let u=this.type;this.render=function(C,R,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(hn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=u!==Ze&&this.type===Ze,K=u===Ze&&this.type!==Ze;for(let Z=0,X=C.length;Z<X;Z++){const $=C[Z],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ut=Y.getFrameExtents();if(s.multiply(ut),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,Y.mapSize.y=r.y)),Y.map===null||F===!0||K===!0){const mt=this.type!==Ze?{minFilter:Ee,magFilter:Ee}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Dn(s.x,s.y,mt),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const dt=Y.getViewportCount();for(let mt=0;mt<dt;mt++){const Gt=Y.getViewport(mt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),W.viewport(a),Y.updateMatrices($,mt),n=Y.getFrustum(),A(R,O,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ze&&y(Y,O),Y.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(T,E,L)};function y(C,R){const O=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,O,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,O,p,v,null)}function x(C,R,O,T){let E=null;const L=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=O.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=E.uuid,F=R.uuid;let K=l[W];K===void 0&&(K={},l[W]=K);let Z=K[F];Z===void 0&&(Z=E.clone(),K[F]=Z,R.addEventListener("dispose",I)),E=Z}if(E.visible=R.visible,E.wireframe=R.wireframe,T===Ze?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:m[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=O}return E}function A(C,R,O,T,E){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ze)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const F=t.update(C),K=C.material;if(Array.isArray(K)){const Z=F.groups;for(let X=0,$=Z.length;X<$;X++){const Y=Z[X],ut=K[Y.materialIndex];if(ut&&ut.visible){const dt=x(C,ut,T,E);C.onBeforeShadow(i,C,R,O,F,dt,Y),i.renderBufferDirect(O,null,F,dt,C,Y),C.onAfterShadow(i,C,R,O,F,dt,Y)}}}else if(K.visible){const Z=x(C,K,T,E);C.onBeforeShadow(i,C,R,O,F,Z,null),i.renderBufferDirect(O,null,F,Z,C,null),C.onAfterShadow(i,C,R,O,F,Z,null)}}const W=C.children;for(let F=0,K=W.length;F<K;F++)A(W[F],R,O,T,E)}function I(C){C.target.removeEventListener("dispose",I);for(const O in l){const T=l[O],E=C.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function Gf(i){function t(){let _=!1;const V=new Qt;let B=null;const k=new Qt(0,0,0,0);return{setMask:function(Q){B!==Q&&!_&&(i.colorMask(Q,Q,Q,Q),B=Q)},setLocked:function(Q){_=Q},setClear:function(Q,xt,wt,ne,re){re===!0&&(Q*=ne,xt*=ne,wt*=ne),V.set(Q,xt,wt,ne),k.equals(V)===!1&&(i.clearColor(Q,xt,wt,ne),k.copy(V))},reset:function(){_=!1,B=null,k.set(-1,0,0,0)}}}function e(){let _=!1,V=null,B=null,k=null;return{setTest:function(Q){Q?ft(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Q){V!==Q&&!_&&(i.depthMask(Q),V=Q)},setFunc:function(Q){if(B!==Q){switch(Q){case al:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=Q}},setLocked:function(Q){_=Q},setClear:function(Q){k!==Q&&(i.clearDepth(Q),k=Q)},reset:function(){_=!1,V=null,B=null,k=null}}}function n(){let _=!1,V=null,B=null,k=null,Q=null,xt=null,wt=null,ne=null,re=null;return{setTest:function(Xt){_||(Xt?ft(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Xt){V!==Xt&&!_&&(i.stencilMask(Xt),V=Xt)},setFunc:function(Xt,ae,oe){(B!==Xt||k!==ae||Q!==oe)&&(i.stencilFunc(Xt,ae,oe),B=Xt,k=ae,Q=oe)},setOp:function(Xt,ae,oe){(xt!==Xt||wt!==ae||ne!==oe)&&(i.stencilOp(Xt,ae,oe),xt=Xt,wt=ae,ne=oe)},setLocked:function(Xt){_=Xt},setClear:function(Xt){re!==Xt&&(i.clearStencil(Xt),re=Xt)},reset:function(){_=!1,V=null,B=null,k=null,Q=null,xt=null,wt=null,ne=null,re=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},m=new WeakMap,d=[],p=null,g=!1,v=null,f=null,u=null,y=null,x=null,A=null,I=null,C=new j(0,0,0),R=0,O=!1,T=null,E=null,L=null,W=null,F=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=X>=2);let Y=null,ut={};const dt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Gt=new Qt().fromArray(dt),Wt=new Qt().fromArray(mt);function q(_,V,B,k){const Q=new Uint8Array(4),xt=i.createTexture();i.bindTexture(_,xt),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<B;wt++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(V+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return xt}const nt={};nt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(es),Et(!1),kt(xr),ft(i.CULL_FACE),Ht(hn);function ft(_){l[_]!==!0&&(i.enable(_),l[_]=!0)}function lt(_){l[_]!==!1&&(i.disable(_),l[_]=!1)}function Ot(_,V){return h[_]!==V?(i.bindFramebuffer(_,V),h[_]=V,_===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=V),_===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=V),!0):!1}function Ct(_,V){let B=d,k=!1;if(_){B=m.get(V),B===void 0&&(B=[],m.set(V,B));const Q=_.textures;if(B.length!==Q.length||B[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,wt=Q.length;xt<wt;xt++)B[xt]=i.COLOR_ATTACHMENT0+xt;B.length=Q.length,k=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,k=!0);k&&i.drawBuffers(B)}function zt(_){return p!==_?(i.useProgram(_),p=_,!0):!1}const D={[Rn]:i.FUNC_ADD,[ko]:i.FUNC_SUBTRACT,[Wo]:i.FUNC_REVERSE_SUBTRACT};D[Xo]=i.MIN,D[Yo]=i.MAX;const Vt={[qo]:i.ZERO,[Ko]:i.ONE,[Zo]:i.SRC_COLOR,[tr]:i.SRC_ALPHA,[el]:i.SRC_ALPHA_SATURATE,[Qo]:i.DST_COLOR,[$o]:i.DST_ALPHA,[jo]:i.ONE_MINUS_SRC_COLOR,[er]:i.ONE_MINUS_SRC_ALPHA,[tl]:i.ONE_MINUS_DST_COLOR,[Jo]:i.ONE_MINUS_DST_ALPHA,[nl]:i.CONSTANT_COLOR,[il]:i.ONE_MINUS_CONSTANT_COLOR,[sl]:i.CONSTANT_ALPHA,[rl]:i.ONE_MINUS_CONSTANT_ALPHA};function Ht(_,V,B,k,Q,xt,wt,ne,re,Xt){if(_===hn){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),_!==Vo){if(_!==v||Xt!==O){if((f!==Rn||x!==Rn)&&(i.blendEquation(i.FUNC_ADD),f=Rn,x=Rn),Xt)switch(_){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.ONE,i.ONE);break;case Sr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Er:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Er:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}u=null,y=null,A=null,I=null,C.set(0,0,0),R=0,v=_,O=Xt}return}Q=Q||V,xt=xt||B,wt=wt||k,(V!==f||Q!==x)&&(i.blendEquationSeparate(D[V],D[Q]),f=V,x=Q),(B!==u||k!==y||xt!==A||wt!==I)&&(i.blendFuncSeparate(Vt[B],Vt[k],Vt[xt],Vt[wt]),u=B,y=k,A=xt,I=wt),(ne.equals(C)===!1||re!==R)&&(i.blendColor(ne.r,ne.g,ne.b,re),C.copy(ne),R=re),v=_,O=!1}function jt(_,V){_.side===je?lt(i.CULL_FACE):ft(i.CULL_FACE);let B=_.side===Me;V&&(B=!B),Et(B),_.blending===ii&&_.transparent===!1?Ht(hn):Ht(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),r.setFunc(_.depthFunc),r.setTest(_.depthTest),r.setMask(_.depthWrite),s.setMask(_.colorWrite);const k=_.stencilWrite;a.setTest(k),k&&(a.setMask(_.stencilWriteMask),a.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),a.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),Lt(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(_){T!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),T=_)}function kt(_){_!==Go?(ft(i.CULL_FACE),_!==E&&(_===xr?i.cullFace(i.BACK):_===zo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),E=_}function Ft(_){_!==L&&(Z&&i.lineWidth(_),L=_)}function Lt(_,V,B){_?(ft(i.POLYGON_OFFSET_FILL),(W!==V||F!==B)&&(i.polygonOffset(V,B),W=V,F=B)):lt(i.POLYGON_OFFSET_FILL)}function te(_){_?ft(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function b(_){_===void 0&&(_=i.TEXTURE0+K-1),Y!==_&&(i.activeTexture(_),Y=_)}function M(_,V,B){B===void 0&&(Y===null?B=i.TEXTURE0+K-1:B=Y);let k=ut[B];k===void 0&&(k={type:void 0,texture:void 0},ut[B]=k),(k.type!==_||k.texture!==V)&&(Y!==B&&(i.activeTexture(B),Y=B),i.bindTexture(_,V||nt[_]),k.type=_,k.texture=V)}function z(){const _=ut[Y];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Tt(_){Gt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Gt.copy(_))}function ct(_){Wt.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),Wt.copy(_))}function Pt(_,V){let B=c.get(V);B===void 0&&(B=new WeakMap,c.set(V,B));let k=B.get(_);k===void 0&&(k=i.getUniformBlockIndex(V,_.name),B.set(_,k))}function It(_,V){const k=c.get(V).get(_);o.get(V)!==k&&(i.uniformBlockBinding(V,k,_.__bindingPointIndex),o.set(V,k))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,ut={},h={},m=new WeakMap,d=[],p=null,g=!1,v=null,f=null,u=null,y=null,x=null,A=null,I=null,C=new j(0,0,0),R=0,O=!1,T=null,E=null,L=null,W=null,F=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:lt,bindFramebuffer:Ot,drawBuffers:Ct,useProgram:zt,setBlending:Ht,setMaterial:jt,setFlipSided:Et,setCullFace:kt,setLineWidth:Ft,setPolygonOffset:Lt,setScissorTest:te,activeTexture:b,bindTexture:M,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Bt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:Dt,texStorage3D:it,texSubImage2D:et,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:rt,scissor:Tt,viewport:ct,reset:ee}}function zf(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,h=new WeakMap;let m;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):os("canvas")}function v(b,M,z){let J=1;const tt=te(b);if((tt.width>z||tt.height>z)&&(J=z/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const et=Math.floor(J*tt.width),vt=Math.floor(J*tt.height);m===void 0&&(m=g(et,vt));const at=M?g(et,vt):m;return at.width=et,at.height=vt,at.getContext("2d").drawImage(b,0,0,et,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+vt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function f(b){return b.generateMipmaps&&b.minFilter!==Ee&&b.minFilter!==Ne}function u(b){i.generateMipmap(b)}function y(b,M,z,J,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=M;if(M===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),M===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),M===i.RGBA){const vt=tt?is:Kt.getTransfer(J);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=vt===$t?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(b,M){let z;return b?M===null||M===li||M===ci?z=i.DEPTH24_STENCIL8:M===$e?z=i.DEPTH32F_STENCIL8:M===ns&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===li||M===ci?z=i.DEPTH_COMPONENT24:M===$e?z=i.DEPTH_COMPONENT32F:M===ns&&(z=i.DEPTH_COMPONENT16),z}function A(b,M){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ee&&b.minFilter!==Ne?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function I(b){const M=b.target;M.removeEventListener("dispose",I),R(M),M.isVideoTexture&&h.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),T(M)}function R(b){const M=n.get(b);if(M.__webglInit===void 0)return;const z=b.source,J=d.get(z);if(J){const tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&O(b),Object.keys(J).length===0&&d.delete(z)}n.remove(b)}function O(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const z=b.source,J=d.get(z);delete J[M.__cacheKey],a.memory.textures--}function T(b){const M=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=b.textures;for(let J=0,tt=z.length;J<tt;J++){const et=n.get(z[J]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(b)}let E=0;function L(){E=0}function W(){const b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function K(b,M){const z=n.get(b);if(b.isVideoTexture&&Ft(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(z,b,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Z(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Wt(z,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function X(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Wt(z,b,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function $(b,M){const z=n.get(b);if(b.version>0&&z.__version!==b.version){q(z,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const Y={[sr]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[rr]:i.MIRRORED_REPEAT},ut={[Ee]:i.NEAREST,[Sl]:i.NEAREST_MIPMAP_NEAREST,[Ci]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[gs]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},dt={[Ul]:i.NEVER,[Gl]:i.ALWAYS,[Nl]:i.LESS,[po]:i.LEQUAL,[Ol]:i.EQUAL,[Hl]:i.GEQUAL,[Fl]:i.GREATER,[Bl]:i.NOTEQUAL};function mt(b,M){if(M.type===$e&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ne||M.magFilter===gs||M.magFilter===Ci||M.magFilter===Ln||M.minFilter===Ne||M.minFilter===gs||M.minFilter===Ci||M.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ee||M.minFilter!==Ci&&M.minFilter!==Ln||M.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Gt(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));const J=M.source;let tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));const et=F(M);if(et!==b.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[et].usedTimes++;const vt=tt[b.__cacheKey];vt!==void 0&&(tt[b.__cacheKey].usedTimes--,vt.usedTimes===0&&O(M)),b.__cacheKey=et,b.__webglTexture=tt[et].texture}return z}function Wt(b,M,z){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const tt=Gt(b,M),et=M.source;e.bindTexture(J,b.__webglTexture,i.TEXTURE0+z);const vt=n.get(et);if(et.version!==vt.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);const at=Kt.getPrimaries(Kt.workingColorSpace),rt=M.colorSpace===cn?null:Kt.getPrimaries(M.colorSpace),Dt=M.colorSpace===cn||at===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let it=v(M.image,!1,s.maxTextureSize);it=Lt(M,it);const _t=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type);let Tt=y(M.internalFormat,_t,Bt,M.colorSpace,M.isVideoTexture);mt(J,M);let ct;const Pt=M.mipmaps,It=M.isVideoTexture!==!0,ee=vt.__version===void 0||tt===!0,_=et.dataReady,V=A(M,it);if(M.isDepthTexture)Tt=x(M.format===hi,M.type),ee&&(It?e.texStorage2D(i.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Tt,it.width,it.height,0,_t,Bt,null));else if(M.isDataTexture)if(Pt.length>0){It&&ee&&e.texStorage2D(i.TEXTURE_2D,V,Tt,Pt[0].width,Pt[0].height);for(let B=0,k=Pt.length;B<k;B++)ct=Pt[B],It?_&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,ct.width,ct.height,_t,Bt,ct.data):e.texImage2D(i.TEXTURE_2D,B,Tt,ct.width,ct.height,0,_t,Bt,ct.data);M.generateMipmaps=!1}else It?(ee&&e.texStorage2D(i.TEXTURE_2D,V,Tt,it.width,it.height),_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Bt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,it.width,it.height,0,_t,Bt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,V,Tt,Pt[0].width,Pt[0].height,it.depth);for(let B=0,k=Pt.length;B<k;B++)if(ct=Pt[B],M.format!==Ge)if(_t!==null)if(It){if(_)if(M.layerUpdates.size>0){for(const Q of M.layerUpdates){const xt=ct.width*ct.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,Q,ct.width,ct.height,1,_t,ct.data.slice(xt*Q,xt*(Q+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,ct.width,ct.height,it.depth,_t,ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Tt,ct.width,ct.height,it.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,ct.width,ct.height,it.depth,_t,Bt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Tt,ct.width,ct.height,it.depth,0,_t,Bt,ct.data)}else{It&&ee&&e.texStorage2D(i.TEXTURE_2D,V,Tt,Pt[0].width,Pt[0].height);for(let B=0,k=Pt.length;B<k;B++)ct=Pt[B],M.format!==Ge?_t!==null?It?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,ct.width,ct.height,_t,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Tt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?_&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,ct.width,ct.height,_t,Bt,ct.data):e.texImage2D(i.TEXTURE_2D,B,Tt,ct.width,ct.height,0,_t,Bt,ct.data)}else if(M.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,V,Tt,it.width,it.height,it.depth),_)if(M.layerUpdates.size>0){let B;switch(Bt){case i.UNSIGNED_BYTE:switch(_t){case i.ALPHA:B=1;break;case i.LUMINANCE:B=1;break;case i.LUMINANCE_ALPHA:B=2;break;case i.RGB:B=3;break;case i.RGBA:B=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:B=1;break;default:throw new Error(`Unknown texel size for type ${Bt}.`)}const k=it.width*it.height*B;for(const Q of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,_t,Bt,it.data.slice(k*Q,k*(Q+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Bt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,_t,Bt,it.data);else if(M.isData3DTexture)It?(ee&&e.texStorage3D(i.TEXTURE_3D,V,Tt,it.width,it.height,it.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Bt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,_t,Bt,it.data);else if(M.isFramebufferTexture){if(ee)if(It)e.texStorage2D(i.TEXTURE_2D,V,Tt,it.width,it.height);else{let B=it.width,k=it.height;for(let Q=0;Q<V;Q++)e.texImage2D(i.TEXTURE_2D,Q,Tt,B,k,0,_t,Bt,null),B>>=1,k>>=1}}else if(Pt.length>0){if(It&&ee){const B=te(Pt[0]);e.texStorage2D(i.TEXTURE_2D,V,Tt,B.width,B.height)}for(let B=0,k=Pt.length;B<k;B++)ct=Pt[B],It?_&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,_t,Bt,ct):e.texImage2D(i.TEXTURE_2D,B,Tt,_t,Bt,ct);M.generateMipmaps=!1}else if(It){if(ee){const B=te(it);e.texStorage2D(i.TEXTURE_2D,V,Tt,B.width,B.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Bt,it)}else e.texImage2D(i.TEXTURE_2D,0,Tt,_t,Bt,it);f(M)&&u(J),vt.__version=et.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function q(b,M,z){if(M.image.length!==6)return;const J=Gt(b,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const et=n.get(tt);if(tt.version!==et.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const vt=Kt.getPrimaries(Kt.workingColorSpace),at=M.colorSpace===cn?null:Kt.getPrimaries(M.colorSpace),rt=M.colorSpace===cn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let k=0;k<6;k++)!Dt&&!it?_t[k]=v(M.image[k],!0,s.maxCubemapSize):_t[k]=it?M.image[k].image:M.image[k],_t[k]=Lt(M,_t[k]);const Bt=_t[0],Tt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),Pt=y(M.internalFormat,Tt,ct,M.colorSpace),It=M.isVideoTexture!==!0,ee=et.__version===void 0||J===!0,_=tt.dataReady;let V=A(M,Bt);mt(i.TEXTURE_CUBE_MAP,M);let B;if(Dt){It&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,V,Pt,Bt.width,Bt.height);for(let k=0;k<6;k++){B=_t[k].mipmaps;for(let Q=0;Q<B.length;Q++){const xt=B[Q];M.format!==Ge?Tt!==null?It?_&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,Pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,0,0,xt.width,xt.height,Tt,ct,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q,Pt,xt.width,xt.height,0,Tt,ct,xt.data)}}}else{if(B=M.mipmaps,It&&ee){B.length>0&&V++;const k=te(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,V,Pt,k.width,k.height)}for(let k=0;k<6;k++)if(it){It?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_t[k].width,_t[k].height,Tt,ct,_t[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Pt,_t[k].width,_t[k].height,0,Tt,ct,_t[k].data);for(let Q=0;Q<B.length;Q++){const wt=B[Q].image[k].image;It?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,0,0,wt.width,wt.height,Tt,ct,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,Pt,wt.width,wt.height,0,Tt,ct,wt.data)}}else{It?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Tt,ct,_t[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Pt,Tt,ct,_t[k]);for(let Q=0;Q<B.length;Q++){const xt=B[Q];It?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,0,0,Tt,ct,xt.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q+1,Pt,Tt,ct,xt.image[k])}}}f(M)&&u(i.TEXTURE_CUBE_MAP),et.__version=tt.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function nt(b,M,z,J,tt,et){const vt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),rt=y(z.internalFormat,vt,at,z.colorSpace);if(!n.get(M).__hasExternalTextures){const it=Math.max(1,M.width>>et),_t=Math.max(1,M.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,rt,it,_t,M.depth,0,vt,at,null):e.texImage2D(tt,et,rt,it,_t,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,n.get(z).__webglTexture,0,Et(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,n.get(z).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(b,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,et=x(M.stencilBuffer,tt),vt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Et(M);kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,et,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,b)}else{const J=M.textures;for(let tt=0;tt<J.length;tt++){const et=J[tt],vt=r.convert(et.format,et.colorSpace),at=r.convert(et.type),rt=y(et.internalFormat,vt,at,et.colorSpace),Dt=Et(M);z&&kt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,rt,M.width,M.height):kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,tt=Et(M);if(M.depthTexture.format===si)kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===hi)kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(b){const M=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,M,z){const J=n.get(b);M!==void 0&&nt(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ot(b)}function zt(b){const M=b.texture,z=n.get(b),J=n.get(M);b.addEventListener("dispose",C);const tt=b.textures,et=b.isWebGLCubeRenderTarget===!0,vt=tt.length>1;if(vt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),et){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let rt=0;rt<M.mipmaps.length;rt++)z.__webglFramebuffer[at][rt]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,rt=tt.length;at<rt;at++){const Dt=n.get(tt[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&kt(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const rt=tt[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Dt=r.convert(rt.format,rt.colorSpace),it=r.convert(rt.type),_t=y(rt.internalFormat,Dt,it,rt.colorSpace,b.isXRRenderTarget===!0),Bt=Et(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,_t,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),mt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)nt(z.__webglFramebuffer[at][rt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,rt);else nt(z.__webglFramebuffer[at],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(M)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,rt=tt.length;at<rt;at++){const Dt=tt[at],it=n.get(Dt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),mt(i.TEXTURE_2D,Dt),nt(z.__webglFramebuffer,b,Dt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(Dt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),mt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)nt(z.__webglFramebuffer[rt],b,M,i.COLOR_ATTACHMENT0,at,rt);else nt(z.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,at,0);f(M)&&u(at),e.unbindTexture()}b.depthBuffer&&Ot(b)}function D(b){const M=b.textures;for(let z=0,J=M.length;z<J;z++){const tt=M[z];if(f(tt)){const et=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(tt).__webglTexture;e.bindTexture(et,vt),u(et),e.unbindTexture()}}}const Vt=[],Ht=[];function jt(b){if(b.samples>0){if(kt(b)===!1){const M=b.textures,z=b.width,J=b.height;let tt=i.COLOR_BUFFER_BIT;const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),at=M.length>1;if(at)for(let rt=0;rt<M.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Dt=n.get(M[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,tt,i.NEAREST),c===!0&&(Vt.length=0,Ht.length=0,Vt.push(i.COLOR_ATTACHMENT0+rt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Vt.push(et),Ht.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let rt=0;rt<M.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Dt=n.get(M[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Et(b){return Math.min(s.maxSamples,b.samples)}function kt(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(b){const M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Lt(b,M){const z=b.colorSpace,J=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==mn&&z!==cn&&(Kt.getTransfer(z)===$t?(J!==Ge||tt!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Ct,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=kt}function Vf(i,t){function e(n,s=cn){let r;const a=Kt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.BYTE;if(n===yl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===$e)return i.FLOAT;if(n===cs)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===bl)return i.RGB;if(n===Ge)return i.RGBA;if(n===Rl)return i.LUMINANCE;if(n===wl)return i.LUMINANCE_ALPHA;if(n===si)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===co)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===vs||n===xs||n===Ms||n===Ss)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yr||n===Tr||n===Ar||n===br)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===wr||n===Cr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===wr)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lr||n===Dr||n===Pr||n===Ir||n===Ur||n===Nr||n===Or||n===Fr||n===Br||n===Hr||n===Gr||n===zr||n===Vr||n===kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===Wr||n===Xr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Yr||n===qr||n===Kr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class kf extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yi extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wf={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),u=this._getHandJoint(l,v);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=h.position.distanceTo(m.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new _e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:Xf,fragmentShader:Yf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Kf extends In{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,d=null,p=null,g=null;const v=new qf,f=e.getContextAttributes();let u=null,y=null;const x=[],A=[],I=new Rt;let C=null;const R=new we;R.layers.enable(1),R.viewport=new Qt;const O=new we;O.layers.enable(2),O.viewport=new Qt;const T=[R,O],E=new kf;E.layers.enable(1),E.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=x[q];return nt===void 0&&(nt=new Ks,x[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=x[q];return nt===void 0&&(nt=new Ks,x[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=x[q];return nt===void 0&&(nt=new Ks,x[q]=nt),nt.getHandSpace()};function F(q){const nt=A.indexOf(q.inputSource);if(nt===-1)return;const ft=x[nt];ft!==void 0&&(ft.update(q.inputSource,q.frame,l||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const nt=A[q];nt!==null&&(A[q]=null,x[q].disconnect(nt))}L=null,W=null,v.reset(),t.setRenderTarget(u),p=null,d=null,m=null,s=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Dn(p.framebufferWidth,p.framebufferHeight,{format:Ge,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let nt=null,ft=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?hi:si,ft=f.stencil?ci:li);const Ot={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};m=new XRWebGLBinding(s,e),d=m.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:Ge,type:fn,depthTexture:new Co(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(q){for(let nt=0;nt<q.removed.length;nt++){const ft=q.removed[nt],lt=A.indexOf(ft);lt>=0&&(A[lt]=null,x[lt].disconnect(ft))}for(let nt=0;nt<q.added.length;nt++){const ft=q.added[nt];let lt=A.indexOf(ft);if(lt===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=A.length){A.push(ft),lt=Ct;break}else if(A[Ct]===null){A[Ct]=ft,lt=Ct;break}if(lt===-1)break}const Ot=x[lt];Ot&&Ot.connect(ft)}}const X=new P,$=new P;function Y(q,nt,ft){X.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);const lt=X.distanceTo($),Ot=nt.projectionMatrix.elements,Ct=ft.projectionMatrix.elements,zt=Ot[14]/(Ot[10]-1),D=Ot[14]/(Ot[10]+1),Vt=(Ot[9]+1)/Ot[5],Ht=(Ot[9]-1)/Ot[5],jt=(Ot[8]-1)/Ot[0],Et=(Ct[8]+1)/Ct[0],kt=zt*jt,Ft=zt*Et,Lt=lt/(-jt+Et),te=Lt*-jt;nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(te),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=zt+Lt,M=D+Lt,z=kt-te,J=Ft+(lt-te),tt=Vt*D/M*b,et=Ht*D/M*b;q.projectionMatrix.makePerspective(z,J,tt,et,b,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ut(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),E.near=O.near=R.near=q.near,E.far=O.far=R.far=q.far,(L!==E.near||W!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,W=E.far,R.near=L,R.far=W,O.near=L,O.far=W,R.updateProjectionMatrix(),O.updateProjectionMatrix(),q.updateProjectionMatrix());const nt=q.parent,ft=E.cameras;ut(E,nt);for(let lt=0;lt<ft.length;lt++)ut(ft[lt],nt);ft.length===2?Y(E,R,O):E.projectionMatrix.copy(R.projectionMatrix),dt(q,E,nt)};function dt(q,nt,ft){ft===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ar*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let mt=null;function Gt(q,nt){if(h=nt.getViewerPose(l||a),g=nt,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let lt=!1;ft.length!==E.cameras.length&&(E.cameras.length=0,lt=!0);for(let Ct=0;Ct<ft.length;Ct++){const zt=ft[Ct];let D=null;if(p!==null)D=p.getViewport(zt);else{const Ht=m.getViewSubImage(d,zt);D=Ht.viewport,Ct===0&&(t.setRenderTargetTextures(y,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(y))}let Vt=T[Ct];Vt===void 0&&(Vt=new we,Vt.layers.enable(Ct),Vt.viewport=new Qt,T[Ct]=Vt),Vt.matrix.fromArray(zt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(zt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(D.x,D.y,D.width,D.height),Ct===0&&(E.matrix.copy(Vt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),lt===!0&&E.cameras.push(Vt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ct=m.getDepthInformation(ft[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,s.renderState)}}for(let ft=0;ft<x.length;ft++){const lt=A[ft],Ot=x[ft];lt!==null&&Ot!==void 0&&Ot.update(lt,nt,l||a)}mt&&mt(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Wt=new Ro;Wt.setAnimationLoop(Gt),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const An=new Ve,Zf=new Jt;function jf(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,To(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,y,x,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),m(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&p(f,u,A)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),v(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,y,x):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Me&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Me&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const y=t.get(u),x=y.envMap,A=y.envMapRotation;x&&(f.envMap.value=x,An.copy(A),An.x*=-1,An.y*=-1,An.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),f.envMapRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(An)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,y,x){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*y,f.scale.value=x*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function m(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,y){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Me&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function v(f,u){const y=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $f(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const A=x.program;n.uniformBlockBinding(y,A)}function l(y,x){let A=s[y.id];A===void 0&&(g(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",f));const I=x.program;n.updateUBOMapping(y,I);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const x=m();y.__bindingPointIndex=x;const A=i.createBuffer(),I=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function m(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],A=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,R=A.length;C<R;C++){const O=Array.isArray(A[C])?A[C]:[A[C]];for(let T=0,E=O.length;T<E;T++){const L=O[T];if(p(L,C,T,I)===!0){const W=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Z=0;Z<F.length;Z++){const X=F[Z],$=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,W+K,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,A,I){const C=y.value,R=x+"_"+A;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const O=I[R];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return I[R]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(y){const x=y.uniforms;let A=0;const I=16;for(let R=0,O=x.length;R<O;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,L=T.length;E<L;E++){const W=T[E],F=Array.isArray(W.value)?W.value:[W.value];for(let K=0,Z=F.length;K<Z;K++){const X=F[K],$=v(X),Y=A%I;Y!==0&&I-Y<$.boundary&&(A+=I-Y),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=$.storage}}}const C=A%I;return C>0&&(A+=I-C),y.__size=A,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Jf{constructor(t={}){const{canvas:e=kl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=un,this.toneMappingExposure=1;const x=this;let A=!1,I=0,C=0,R=null,O=-1,T=null;const E=new Qt,L=new Qt;let W=null;const F=new j(0);let K=0,Z=e.width,X=e.height,$=1,Y=null,ut=null;const dt=new Qt(0,0,Z,X),mt=new Qt(0,0,Z,X);let Gt=!1;const Wt=new ur;let q=!1,nt=!1;const ft=new Jt,lt=new P,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function zt(){return R===null?$:1}let D=n;function Vt(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lr}`),e.addEventListener("webglcontextlost",V,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",k,!1),D===null){const U="webgl2";if(D=Vt(U,S),D===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ht,jt,Et,kt,Ft,Lt,te,b,M,z,J,tt,et,vt,at,rt,Dt,it,_t,Bt,Tt,ct,Pt,It;function ee(){Ht=new rd(D),Ht.init(),ct=new Vf(D,Ht),jt=new Qu(D,Ht,t,ct),Et=new Gf(D),kt=new ld(D),Ft=new bf,Lt=new zf(D,Ht,Et,Ft,jt,ct,kt),te=new ed(x),b=new sd(x),M=new mc(D),Pt=new $u(D,M),z=new ad(D,M,kt,Pt),J=new hd(D,z,M,kt),_t=new cd(D,jt,Lt),rt=new td(Ft),tt=new Af(x,te,b,Ht,jt,Pt,rt),et=new jf(x,Ft),vt=new wf,at=new Uf(Ht),it=new ju(x,te,b,Et,J,d,c),Dt=new Hf(x,J,jt),It=new $f(D,kt,jt,Et),Bt=new Ju(D,Ht,kt),Tt=new od(D,Ht,kt),kt.programs=tt.programs,x.capabilities=jt,x.extensions=Ht,x.properties=Ft,x.renderLists=vt,x.shadowMap=Dt,x.state=Et,x.info=kt}ee();const _=new Kf(x,D);this.xr=_,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(Z,X,!1))},this.getSize=function(S){return S.set(Z,X)},this.setSize=function(S,U,H=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,X=U,e.width=Math.floor(S*$),e.height=Math.floor(U*$),H===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Z*$,X*$).floor()},this.setDrawingBufferSize=function(S,U,H){Z=S,X=U,$=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,U,H,G){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,U,H,G),Et.viewport(E.copy(dt).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(mt)},this.setScissor=function(S,U,H,G){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,U,H,G),Et.scissor(L.copy(mt).multiplyScalar($).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(S){Et.setScissorTest(Gt=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(S=!0,U=!0,H=!0){let G=0;if(S){let N=!1;if(R!==null){const st=R.texture.format;N=st===uo||st===ho||st===co}if(N){const st=R.texture.type,ht=st===fn||st===li||st===ns||st===ci||st===ao||st===oo,pt=it.getClearColor(),gt=it.getClearAlpha(),At=pt.r,bt=pt.g,yt=pt.b;ht?(p[0]=At,p[1]=bt,p[2]=yt,p[3]=gt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=At,g[1]=bt,g[2]=yt,g[3]=gt,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",k,!1),vt.dispose(),at.dispose(),Ft.dispose(),te.dispose(),b.dispose(),J.dispose(),Pt.dispose(),It.dispose(),tt.dispose(),_.dispose(),_.removeEventListener("sessionstart",ae),_.removeEventListener("sessionend",oe),ye.stop()};function V(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=kt.autoReset,U=Dt.enabled,H=Dt.autoUpdate,G=Dt.needsUpdate,N=Dt.type;ee(),kt.autoReset=S,Dt.enabled=U,Dt.autoUpdate=H,Dt.needsUpdate=G,Dt.type=N}function k(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Q(S){const U=S.target;U.removeEventListener("dispose",Q),xt(U)}function xt(S){wt(S),Ft.remove(S)}function wt(S){const U=Ft.get(S).programs;U!==void 0&&(U.forEach(function(H){tt.releaseProgram(H)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,G,N,st){U===null&&(U=Ot);const ht=N.isMesh&&N.matrixWorld.determinant()<0,pt=Oo(S,U,H,G,N);Et.setMaterial(G,ht);let gt=H.index,At=1;if(G.wireframe===!0){if(gt=z.getWireframeAttribute(H),gt===void 0)return;At=2}const bt=H.drawRange,yt=H.attributes.position;let Yt=bt.start*At,ie=(bt.start+bt.count)*At;st!==null&&(Yt=Math.max(Yt,st.start*At),ie=Math.min(ie,(st.start+st.count)*At)),gt!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,gt.count)):yt!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,yt.count));const se=ie-Yt;if(se<0||se===1/0)return;Pt.setup(N,G,pt,H,gt);let Ae,qt=Bt;if(gt!==null&&(Ae=M.get(gt),qt=Tt,qt.setIndex(Ae)),N.isMesh)G.wireframe===!0?(Et.setLineWidth(G.wireframeLinewidth*zt()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(N.isLine){let Mt=G.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*zt()),N.isLineSegments?qt.setMode(D.LINES):N.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else N.isPoints?qt.setMode(D.POINTS):N.isSprite&&qt.setMode(D.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)qt.renderInstances(Yt,se,N.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Mt);qt.renderInstances(Yt,se,ge)}else qt.render(Yt,se)};function ne(S,U,H){S.transparent===!0&&S.side===je&&S.forceSinglePass===!1?(S.side=Me,S.needsUpdate=!0,Ri(S,U,H),S.side=dn,S.needsUpdate=!0,Ri(S,U,H),S.side=je):Ri(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),f=at.get(H),f.init(U),y.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const G=new Set;return S.traverse(function(N){const st=N.material;if(st)if(Array.isArray(st))for(let ht=0;ht<st.length;ht++){const pt=st[ht];ne(pt,H,N),G.add(pt)}else ne(st,H,N),G.add(st)}),y.pop(),f=null,G},this.compileAsync=function(S,U,H=null){const G=this.compile(S,U,H);return new Promise(N=>{function st(){if(G.forEach(function(ht){Ft.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){N(S);return}setTimeout(st,10)}Ht.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let re=null;function Xt(S){re&&re(S)}function ae(){ye.stop()}function oe(){ye.start()}const ye=new Ro;ye.setAnimationLoop(Xt),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(S){re=S,_.setAnimationLoop(S),S===null?ye.stop():ye.start()},_.addEventListener("sessionstart",ae),_.addEventListener("sessionend",oe),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(U),U=_.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,R),f=at.get(S,y.length),f.init(U),y.push(f),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Wt.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,q=rt.init(this.clippingPlanes,nt),v=vt.get(S,u.length),v.init(),u.push(v),_.enabled===!0&&_.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Te(st,U,-1/0,x.sortObjects)}Te(S,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Y,ut),Ct=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,Ct&&it.addToRenderList(v,S),this.info.render.frame++,q===!0&&rt.beginShadows();const H=f.state.shadowsArray;Dt.render(H,S,U),q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,N=v.transmissive;if(f.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let ht=0,pt=st.length;ht<pt;ht++){const gt=st[ht];gn(G,N,S,gt)}Ct&&it.render(S);for(let ht=0,pt=st.length;ht<pt;ht++){const gt=st[ht];Qe(v,S,gt,gt.viewport)}}else N.length>0&&gn(G,N,S,U),Ct&&it.render(S),Qe(v,S,U);R!==null&&(Lt.updateMultisampleRenderTarget(R),Lt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(x,S,U),Pt.resetDefaultState(),O=-1,T=null,y.pop(),y.length>0?(f=y[y.length-1],q===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Te(S,U,H,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Wt.intersectsSprite(S)){G&&lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);const ht=J.update(S),pt=S.material;pt.visible&&v.push(S,ht,pt,H,lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Wt.intersectsObject(S))){const ht=J.update(S),pt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),lt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),lt.copy(ht.boundingSphere.center)),lt.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(pt)){const gt=ht.groups;for(let At=0,bt=gt.length;At<bt;At++){const yt=gt[At],Yt=pt[yt.materialIndex];Yt&&Yt.visible&&v.push(S,ht,Yt,H,lt.z,yt)}}else pt.visible&&v.push(S,ht,pt,H,lt.z,null)}}const st=S.children;for(let ht=0,pt=st.length;ht<pt;ht++)Te(st[ht],U,H,G)}function Qe(S,U,H,G){const N=S.opaque,st=S.transmissive,ht=S.transparent;f.setupLightsView(H),q===!0&&rt.setGlobalState(x.clippingPlanes,H),G&&Et.viewport(E.copy(G)),N.length>0&&vn(N,U,H),st.length>0&&vn(st,U,H),ht.length>0&&vn(ht,U,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function gn(S,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Dn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?cs:fn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const st=f.state.transmissionRenderTarget[G.id],ht=G.viewport||E;st.setSize(ht.z,ht.w);const pt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(F),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),Ct?it.render(H):x.clear();const gt=x.toneMapping;x.toneMapping=un;const At=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),q===!0&&rt.setGlobalState(x.clippingPlanes,G),vn(S,H,G),Lt.updateMultisampleRenderTarget(st),Lt.updateRenderTargetMipmap(st),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let yt=0,Yt=U.length;yt<Yt;yt++){const ie=U[yt],se=ie.object,Ae=ie.geometry,qt=ie.material,Mt=ie.group;if(qt.side===je&&se.layers.test(G.layers)){const ge=qt.side;qt.side=Me,qt.needsUpdate=!0,mr(se,H,G,Ae,qt,Mt),qt.side=ge,qt.needsUpdate=!0,bt=!0}}bt===!0&&(Lt.updateMultisampleRenderTarget(st),Lt.updateRenderTargetMipmap(st))}x.setRenderTarget(pt),x.setClearColor(F,K),At!==void 0&&(G.viewport=At),x.toneMapping=gt}function vn(S,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=S.length;N<st;N++){const ht=S[N],pt=ht.object,gt=ht.geometry,At=G===null?ht.material:G,bt=ht.group;pt.layers.test(H.layers)&&mr(pt,U,H,gt,At,bt)}}function mr(S,U,H,G,N,st){S.onBeforeRender(x,U,H,G,N,st),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,H,G,S,st),N.transparent===!0&&N.side===je&&N.forceSinglePass===!1?(N.side=Me,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,S,st),N.side=dn,N.needsUpdate=!0,x.renderBufferDirect(H,U,G,N,S,st),N.side=je):x.renderBufferDirect(H,U,G,N,S,st),S.onAfterRender(x,U,H,G,N,st)}function Ri(S,U,H){U.isScene!==!0&&(U=Ot);const G=Ft.get(S),N=f.state.lights,st=f.state.shadowsArray,ht=N.state.version,pt=tt.getParameters(S,N.state,st,U,H),gt=tt.getProgramCacheKey(pt);let At=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?b:te).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",Q),At=new Map,G.programs=At);let bt=At.get(gt);if(bt!==void 0){if(G.currentProgram===bt&&G.lightsStateVersion===ht)return gr(S,pt),bt}else pt.uniforms=tt.getUniforms(S),S.onBuild(H,pt,x),S.onBeforeCompile(pt,x),bt=tt.acquireProgram(pt,gt),At.set(gt,bt),G.uniforms=pt.uniforms;const yt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=rt.uniform),gr(S,pt),G.needsLights=Bo(S),G.lightsStateVersion=ht,G.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=bt,G.uniformsList=null,bt}function _r(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ts.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function gr(S,U){const H=Ft.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Oo(S,U,H,G,N){U.isScene!==!0&&(U=Ot),Lt.resetTextureUnits();const st=U.fog,ht=G.isMeshStandardMaterial?U.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mn,gt=(G.isMeshStandardMaterial?b:te).get(G.envMap||ht),At=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,bt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),yt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color;let se=un;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(se=x.toneMapping);const Ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=Ae!==void 0?Ae.length:0,Mt=Ft.get(G),ge=f.state.lights;if(q===!0&&(nt===!0||S!==T)){const Ce=S===T&&G.id===O;rt.setState(G,S,Ce)}let Zt=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==ge.state.version||Mt.outputColorSpace!==pt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==gt||G.fog===!0&&Mt.fog!==st||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==rt.numPlanes||Mt.numIntersection!==rt.numIntersection)||Mt.vertexAlphas!==At||Mt.vertexTangents!==bt||Mt.morphTargets!==yt||Mt.morphNormals!==Yt||Mt.morphColors!==ie||Mt.toneMapping!==se||Mt.morphTargetsCount!==qt)&&(Zt=!0):(Zt=!0,Mt.__version=G.version);let ke=Mt.currentProgram;Zt===!0&&(ke=Ri(G,U,N));let wi=!1,xn=!1,ps=!1;const de=ke.getUniforms(),tn=Mt.uniforms;if(Et.useProgram(ke.program)&&(wi=!0,xn=!0,ps=!0),G.id!==O&&(O=G.id,xn=!0),wi||T!==S){de.setValue(D,"projectionMatrix",S.projectionMatrix),de.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ce=de.map.cameraPosition;Ce!==void 0&&Ce.setValue(D,lt.setFromMatrixPosition(S.matrixWorld)),jt.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,xn=!0,ps=!0)}if(N.isSkinnedMesh){de.setOptional(D,N,"bindMatrix"),de.setOptional(D,N,"bindMatrixInverse");const Ce=N.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),de.setValue(D,"boneTexture",Ce.boneTexture,Lt))}N.isBatchedMesh&&(de.setOptional(D,N,"batchingTexture"),de.setValue(D,"batchingTexture",N._matricesTexture,Lt),de.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",N._colorsTexture,Lt));const ms=H.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&_t.update(N,H,ke),(xn||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,de.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=gt,tn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),xn&&(de.setValue(D,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&Fo(tn,ps),st&&G.fog===!0&&et.refreshFogUniforms(tn,st),et.refreshMaterialUniforms(tn,G,$,X,f.state.transmissionRenderTarget[S.id]),ts.upload(D,_r(Mt),tn,Lt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ts.upload(D,_r(Mt),tn,Lt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(D,"center",N.center),de.setValue(D,"modelViewMatrix",N.modelViewMatrix),de.setValue(D,"normalMatrix",N.normalMatrix),de.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ce=G.uniformsGroups;for(let _s=0,Ho=Ce.length;_s<Ho;_s++){const vr=Ce[_s];It.update(vr,ke),It.bind(vr,ke)}}return ke}function Fo(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Bo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,H){Ft.get(S.texture).__webglTexture=U,Ft.get(S.depthTexture).__webglTexture=H;const G=Ft.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const H=Ft.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){R=S,I=U,C=H;let G=!0,N=null,st=!1,ht=!1;if(S){const gt=Ft.get(S);gt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):gt.__webglFramebuffer===void 0?Lt.setupRenderTarget(S):gt.__hasExternalTextures&&Lt.rebindTextures(S,Ft.get(S.texture).__webglTexture,Ft.get(S.depthTexture).__webglTexture);const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ht=!0);const bt=Ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?N=bt[U][H]:N=bt[U],st=!0):S.samples>0&&Lt.useMultisampledRTT(S)===!1?N=Ft.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?N=bt[H]:N=bt,E.copy(S.viewport),L.copy(S.scissor),W=S.scissorTest}else E.copy(dt).multiplyScalar($).floor(),L.copy(mt).multiplyScalar($).floor(),W=Gt;if(Et.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&Et.drawBuffers(S,N),Et.viewport(E),Et.scissor(L),Et.setScissorTest(W),st){const gt=Ft.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,H)}else if(ht){const gt=Ft.get(S.texture),At=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,H||0,At)}O=-1},this.readRenderTargetPixels=function(S,U,H,G,N,st,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(pt=pt[ht]),pt){Et.bindFramebuffer(D.FRAMEBUFFER,pt);try{const gt=S.texture,At=gt.format,bt=gt.type;if(!jt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&H>=0&&H<=S.height-N&&D.readPixels(U,H,G,N,ct.convert(At),ct.convert(bt),st)}finally{const gt=R!==null?Ft.get(R).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,G,N,st,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(pt=pt[ht]),pt){Et.bindFramebuffer(D.FRAMEBUFFER,pt);try{const gt=S.texture,At=gt.format,bt=gt.type;if(!jt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&H>=0&&H<=S.height-N){const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(U,H,G,N,ct.convert(At),ct.convert(bt),0),D.flush();const Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Wl(D,Yt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st)}finally{D.deleteBuffer(yt),D.deleteSync(Yt)}return st}}finally{const gt=R!==null?Ft.get(R).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-H),N=Math.floor(S.image.width*G),st=Math.floor(S.image.height*G),ht=U!==null?U.x:0,pt=U!==null?U.y:0;Lt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ht,pt,N,st),Et.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,G=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let st,ht,pt,gt,At,bt;H!==null?(st=H.max.x-H.min.x,ht=H.max.y-H.min.y,pt=H.min.x,gt=H.min.y):(st=S.image.width,ht=S.image.height,pt=0,gt=0),G!==null?(At=G.x,bt=G.y):(At=0,bt=0);const yt=ct.convert(U.format),Yt=ct.convert(U.type);Lt.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=D.getParameter(D.UNPACK_ROW_LENGTH),se=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ae=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),Mt=D.getParameter(D.UNPACK_SKIP_IMAGES),ge=S.isCompressedTexture?S.mipmaps[N]:S.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,gt),S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,At,bt,st,ht,yt,Yt,ge.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,At,bt,ge.width,ge.height,yt,ge.data):D.texSubImage2D(D.TEXTURE_2D,N,At,bt,yt,Yt,ge),D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mt),N===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,G=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0);let st,ht,pt,gt,At,bt,yt,Yt,ie;const se=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(st=H.max.x-H.min.x,ht=H.max.y-H.min.y,pt=H.max.z-H.min.z,gt=H.min.x,At=H.min.y,bt=H.min.z):(st=se.width,ht=se.height,pt=se.depth,gt=0,At=0,bt=0),G!==null?(yt=G.x,Yt=G.y,ie=G.z):(yt=0,Yt=0,ie=0);const Ae=ct.convert(U.format),qt=ct.convert(U.type);let Mt;if(U.isData3DTexture)Lt.setTexture3D(U,0),Mt=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Lt.setTexture2DArray(U,0),Mt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ge=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=D.getParameter(D.UNPACK_SKIP_PIXELS),wi=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gt),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bt),S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Mt,N,yt,Yt,ie,st,ht,pt,Ae,qt,se.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,N,yt,Yt,ie,st,ht,pt,Ae,se.data):D.texSubImage3D(Mt,N,yt,Yt,ie,st,ht,pt,Ae,qt,se),D.pixelStorei(D.UNPACK_ROW_LENGTH,ge),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,wi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),N===0&&U.generateMipmaps&&D.generateMipmap(Mt),Et.unbindTexture()},this.initRenderTarget=function(S){Ft.get(S).__webglFramebuffer===void 0&&Lt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Lt.setTextureCube(S,0):S.isData3DTexture?Lt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Lt.setTexture2DArray(S,0):Lt.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,Et.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===cr?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===hs?"display-p3":"srgb"}}class fr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(t),this.density=e}clone(){return new fr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qf extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tp extends _e{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ee,h=Ee,m,d){super(null,a,o,c,l,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ti=new Jt,Ga=new Jt,$i=[],za=new Un,ep=new Jt,xi=new De,Mi=new Ai;class Zs extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ep)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ti),za.copy(t.boundingBox).applyMatrix4(ti),this.boundingBox.union(za)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ti),Mi.copy(t.boundingSphere).applyMatrix4(ti),this.boundingSphere.union(Mi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xi.geometry=this.geometry,xi.material=this.material,xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mi.copy(this.boundingSphere),Mi.applyMatrix4(n),t.ray.intersectsSphere(Mi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ti),Ga.multiplyMatrices(n,ti),xi.matrixWorld=Ga,xi.raycast(t,$i);for(let a=0,o=$i.length;a<o;a++){const c=$i[a];c.instanceId=r,c.object=this,e.push(c)}$i.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tp(new Float32Array(s*this.count),s,this.count,lo,$e));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class np extends _e{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends _n{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],m=new P,d=new P,p=[],g=[],v=[],f=[];for(let u=0;u<=n;u++){const y=[],x=u/n;let A=0;u===0&&a===0?A=.5/e:u===n&&c===Math.PI&&(A=-.5/e);for(let I=0;I<=e;I++){const C=I/e;m.x=-t*Math.cos(s+C*r)*Math.sin(a+x*o),m.y=t*Math.cos(a+x*o),m.z=t*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(m.x,m.y,m.z),d.copy(m).normalize(),v.push(d.x,d.y,d.z),f.push(C+A,1-x),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<e;y++){const x=h[u][y+1],A=h[u][y],I=h[u+1][y],C=h[u+1][y+1];(u!==0||a>0)&&p.push(x,A,C),(u!==n-1||c<Math.PI)&&p.push(A,I,C)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class js extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fs extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new j(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ip extends fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $s=new Jt,Va=new P,ka=new P;class No{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Va.setFromMatrixPosition(t.matrixWorld),e.position.copy(Va),ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ka),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wa=new Jt,Si=new P,Js=new P;class sp extends No{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Si.setFromMatrixPosition(t.matrixWorld),n.position.copy(Si),Js.copy(n.position),Js.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Js),n.updateMatrixWorld(),s.makeTranslation(-Si.x,-Si.y,-Si.z),Wa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa)}}class Xa extends fs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rp extends No{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class op extends fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ya(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ya();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ya(){return(typeof performance>"u"?Date:performance).now()}class qa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);const Ka={type:"change"},Qs={type:"start"},Za={type:"end"},Ji=new xo,ja=new ln,cp=Math.cos(70*Vl.DEG2RAD);class hp extends In{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",rt),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ka),n.update(),r=s.NONE},this.update=function(){const _=new P,V=new Pn().setFromUnitVectors(t.up,new P(0,1,0)),B=V.clone().invert(),k=new P,Q=new Pn,xt=new P,wt=2*Math.PI;return function(re=null){const Xt=n.object.position;_.copy(Xt).sub(n.target),_.applyQuaternion(V),o.setFromVector3(_),n.autoRotate&&r===s.NONE&&W(E(re)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ae=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ae)&&isFinite(oe)&&(ae<-Math.PI?ae+=wt:ae>Math.PI&&(ae-=wt),oe<-Math.PI?oe+=wt:oe>Math.PI&&(oe-=wt),ae<=oe?o.theta=Math.max(ae,Math.min(oe,o.theta)):o.theta=o.theta>(ae+oe)/2?Math.max(ae,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ye=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)o.radius=dt(o.radius);else{const Te=o.radius;o.radius=dt(o.radius*l),ye=Te!=o.radius}if(_.setFromSpherical(o),_.applyQuaternion(B),Xt.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&C){let Te=null;if(n.object.isPerspectiveCamera){const Qe=_.length();Te=dt(Qe*l);const gn=Qe-Te;n.object.position.addScaledVector(A,gn),n.object.updateMatrixWorld(),ye=!!gn}else if(n.object.isOrthographicCamera){const Qe=new P(I.x,I.y,0);Qe.unproject(n.object);const gn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ye=gn!==n.object.zoom;const vn=new P(I.x,I.y,0);vn.unproject(n.object),n.object.position.sub(vn).add(Qe),n.object.updateMatrixWorld(),Te=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Te).add(n.object.position):(Ji.origin.copy(n.object.position),Ji.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ji.direction))<cp?t.lookAt(n.target):(ja.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ji.intersectPlane(ja,n.target))))}else if(n.object.isOrthographicCamera){const Te=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Te!==n.object.zoom&&(n.object.updateProjectionMatrix(),ye=!0)}return l=1,C=!1,ye||k.distanceToSquared(n.object.position)>a||8*(1-Q.dot(n.object.quaternion))>a||xt.distanceToSquared(n.target)>a?(n.dispatchEvent(Ka),k.copy(n.object.position),Q.copy(n.object.quaternion),xt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_t),n.domElement.removeEventListener("pointerdown",te),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",M),n.domElement.getRootNode().removeEventListener("keydown",vt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new qa,c=new qa;let l=1;const h=new P,m=new Rt,d=new Rt,p=new Rt,g=new Rt,v=new Rt,f=new Rt,u=new Rt,y=new Rt,x=new Rt,A=new P,I=new Rt;let C=!1;const R=[],O={};let T=!1;function E(_){return _!==null?2*Math.PI/60*n.autoRotateSpeed*_:2*Math.PI/60/60*n.autoRotateSpeed}function L(_){const V=Math.abs(_*.01);return Math.pow(.95,n.zoomSpeed*V)}function W(_){c.theta-=_}function F(_){c.phi-=_}const K=function(){const _=new P;return function(B,k){_.setFromMatrixColumn(k,0),_.multiplyScalar(-B),h.add(_)}}(),Z=function(){const _=new P;return function(B,k){n.screenSpacePanning===!0?_.setFromMatrixColumn(k,1):(_.setFromMatrixColumn(k,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(B),h.add(_)}}(),X=function(){const _=new P;return function(B,k){const Q=n.domElement;if(n.object.isPerspectiveCamera){const xt=n.object.position;_.copy(xt).sub(n.target);let wt=_.length();wt*=Math.tan(n.object.fov/2*Math.PI/180),K(2*B*wt/Q.clientHeight,n.object.matrix),Z(2*k*wt/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(B*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),Z(k*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ut(_,V){if(!n.zoomToCursor)return;C=!0;const B=n.domElement.getBoundingClientRect(),k=_-B.left,Q=V-B.top,xt=B.width,wt=B.height;I.x=k/xt*2-1,I.y=-(Q/wt)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function dt(_){return Math.max(n.minDistance,Math.min(n.maxDistance,_))}function mt(_){m.set(_.clientX,_.clientY)}function Gt(_){ut(_.clientX,_.clientX),u.set(_.clientX,_.clientY)}function Wt(_){g.set(_.clientX,_.clientY)}function q(_){d.set(_.clientX,_.clientY),p.subVectors(d,m).multiplyScalar(n.rotateSpeed);const V=n.domElement;W(2*Math.PI*p.x/V.clientHeight),F(2*Math.PI*p.y/V.clientHeight),m.copy(d),n.update()}function nt(_){y.set(_.clientX,_.clientY),x.subVectors(y,u),x.y>0?$(L(x.y)):x.y<0&&Y(L(x.y)),u.copy(y),n.update()}function ft(_){v.set(_.clientX,_.clientY),f.subVectors(v,g).multiplyScalar(n.panSpeed),X(f.x,f.y),g.copy(v),n.update()}function lt(_){ut(_.clientX,_.clientY),_.deltaY<0?Y(L(_.deltaY)):_.deltaY>0&&$(L(_.deltaY)),n.update()}function Ot(_){let V=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),V=!0;break}V&&(_.preventDefault(),n.update())}function Ct(_){if(R.length===1)m.set(_.pageX,_.pageY);else{const V=It(_),B=.5*(_.pageX+V.x),k=.5*(_.pageY+V.y);m.set(B,k)}}function zt(_){if(R.length===1)g.set(_.pageX,_.pageY);else{const V=It(_),B=.5*(_.pageX+V.x),k=.5*(_.pageY+V.y);g.set(B,k)}}function D(_){const V=It(_),B=_.pageX-V.x,k=_.pageY-V.y,Q=Math.sqrt(B*B+k*k);u.set(0,Q)}function Vt(_){n.enableZoom&&D(_),n.enablePan&&zt(_)}function Ht(_){n.enableZoom&&D(_),n.enableRotate&&Ct(_)}function jt(_){if(R.length==1)d.set(_.pageX,_.pageY);else{const B=It(_),k=.5*(_.pageX+B.x),Q=.5*(_.pageY+B.y);d.set(k,Q)}p.subVectors(d,m).multiplyScalar(n.rotateSpeed);const V=n.domElement;W(2*Math.PI*p.x/V.clientHeight),F(2*Math.PI*p.y/V.clientHeight),m.copy(d)}function Et(_){if(R.length===1)v.set(_.pageX,_.pageY);else{const V=It(_),B=.5*(_.pageX+V.x),k=.5*(_.pageY+V.y);v.set(B,k)}f.subVectors(v,g).multiplyScalar(n.panSpeed),X(f.x,f.y),g.copy(v)}function kt(_){const V=It(_),B=_.pageX-V.x,k=_.pageY-V.y,Q=Math.sqrt(B*B+k*k);y.set(0,Q),x.set(0,Math.pow(y.y/u.y,n.zoomSpeed)),$(x.y),u.copy(y);const xt=(_.pageX+V.x)*.5,wt=(_.pageY+V.y)*.5;ut(xt,wt)}function Ft(_){n.enableZoom&&kt(_),n.enablePan&&Et(_)}function Lt(_){n.enableZoom&&kt(_),n.enableRotate&&jt(_)}function te(_){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",M)),!ct(_)&&(Bt(_),_.pointerType==="touch"?Dt(_):z(_)))}function b(_){n.enabled!==!1&&(_.pointerType==="touch"?it(_):J(_))}function M(_){switch(Tt(_),R.length){case 0:n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",M),n.dispatchEvent(Za),r=s.NONE;break;case 1:const V=R[0],B=O[V];Dt({pointerId:V,pageX:B.x,pageY:B.y});break}}function z(_){let V;switch(_.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Nn.DOLLY:if(n.enableZoom===!1)return;Gt(_),r=s.DOLLY;break;case Nn.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;Wt(_),r=s.PAN}else{if(n.enableRotate===!1)return;mt(_),r=s.ROTATE}break;case Nn.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;mt(_),r=s.ROTATE}else{if(n.enablePan===!1)return;Wt(_),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qs)}function J(_){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(_);break;case s.DOLLY:if(n.enableZoom===!1)return;nt(_);break;case s.PAN:if(n.enablePan===!1)return;ft(_);break}}function tt(_){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(_.preventDefault(),n.dispatchEvent(Qs),lt(et(_)),n.dispatchEvent(Za))}function et(_){const V=_.deltaMode,B={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(V){case 1:B.deltaY*=16;break;case 2:B.deltaY*=100;break}return _.ctrlKey&&!T&&(B.deltaY*=10),B}function vt(_){_.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",at,{passive:!0,capture:!0}))}function at(_){_.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",at,{passive:!0,capture:!0}))}function rt(_){n.enabled===!1||n.enablePan===!1||Ot(_)}function Dt(_){switch(Pt(_),R.length){case 1:switch(n.touches.ONE){case On.ROTATE:if(n.enableRotate===!1)return;Ct(_),r=s.TOUCH_ROTATE;break;case On.PAN:if(n.enablePan===!1)return;zt(_),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case On.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(_),r=s.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(_),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qs)}function it(_){switch(Pt(_),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;jt(_),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Et(_),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(_),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(_),n.update();break;default:r=s.NONE}}function _t(_){n.enabled!==!1&&_.preventDefault()}function Bt(_){R.push(_.pointerId)}function Tt(_){delete O[_.pointerId];for(let V=0;V<R.length;V++)if(R[V]==_.pointerId){R.splice(V,1);return}}function ct(_){for(let V=0;V<R.length;V++)if(R[V]==_.pointerId)return!0;return!1}function Pt(_){let V=O[_.pointerId];V===void 0&&(V=new Rt,O[_.pointerId]=V),V.set(_.pageX,_.pageY)}function It(_){const V=_.pointerId===R[0]?R[1]:R[0];return O[V]}n.domElement.addEventListener("contextmenu",_t),n.domElement.addEventListener("pointerdown",te),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",vt,{passive:!0,capture:!0}),this.update()}}class ni{constructor(t=.8){this.voxelSize=t,this.voxels=new Map,this.min={x:1/0,y:1/0,z:1/0},this.max={x:-1/0,y:-1/0,z:-1/0}}static key(t,e,n){return`${t},${e},${n}`}set(t,e,n,s,r="opaque"){(!s||typeof s.toArray!="function")&&(s=new j(14196264)),t=Math.round(t),e=Math.round(e),n=Math.round(n);const a=ni.key(t,e,n);this.voxels.set(a,{x:t,y:e,z:n,color:s,type:r}),t<this.min.x&&(this.min.x=t),e<this.min.y&&(this.min.y=e),n<this.min.z&&(this.min.z=n),t>this.max.x&&(this.max.x=t),e>this.max.y&&(this.max.y=e),n>this.max.z&&(this.max.z=n)}get(t,e,n){return this.voxels.get(ni.key(t,e,n))}has(t,e,n){return this.voxels.has(ni.key(t,e,n))}delete(t,e,n){this.voxels.delete(ni.key(t,e,n))}get count(){return this.voxels.size}fillBox(t,e,n,s,r,a,o,c="opaque"){const l=Math.min(t,s),h=Math.max(t,s),m=Math.min(e,r),d=Math.max(e,r),p=Math.min(n,a),g=Math.max(n,a);for(let v=l;v<=h;v++)for(let f=m;f<=d;f++)for(let u=p;u<=g;u++)this.set(v,f,u,o,c)}fillHollowBox(t,e,n,s,r,a,o,c=1,l="opaque"){const h=Math.min(t,s),m=Math.max(t,s),d=Math.min(e,r),p=Math.max(e,r),g=Math.min(n,a),v=Math.max(n,a);for(let f=h;f<=m;f++)for(let u=d;u<=p;u++)for(let y=g;y<=v;y++)(f<h+c||f>m-c||u<d+c||u>p-c||y<g+c||y>v-c)&&this.set(f,u,y,o,l)}buildMeshGroup(){const t=new yi;t.name="VoxelTempleComplex";const e=[],n=[],s=[],r=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(const c of this.voxels.values()){if(c.type==="emissive"){n.push(c);continue}if(c.type==="water"){s.push(c);continue}let l=!0;for(let h=0;h<6;h++){const m=c.x+r[h][0],d=c.y+r[h][1],p=c.z+r[h][2],g=this.get(m,d,p);if(!g||g.type!=="opaque"){l=!1;break}}l||e.push(c)}const a=this.voxelSize,o=new di(a,a,a);if(e.length>0){const c=new js({roughness:.82,metalness:.08,flatShading:!0}),l=new Zs(o,c,e.length);l.castShadow=!0,l.receiveShadow=!0,l.name="VoxelOpaque";const h=new j(14196264),m=new ce;for(let d=0;d<e.length;d++){const p=e[d];m.position.set(p.x*a,p.y*a,p.z*a),m.updateMatrix(),l.setMatrixAt(d,m.matrix),l.setColorAt(d,p.color&&typeof p.color.toArray=="function"?p.color:h)}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),t.add(l)}if(n.length>0){const c=new js({roughness:.2,metalness:.1,emissive:new j(16746547),emissiveIntensity:.85,flatShading:!0}),l=new Zs(o,c,n.length);l.castShadow=!1,l.receiveShadow=!1,l.name="VoxelEmissive";const h=new j(16746547),m=new ce;for(let d=0;d<n.length;d++){const p=n[d];m.position.set(p.x*a,p.y*a,p.z*a),m.updateMatrix(),l.setMatrixAt(d,m.matrix),l.setColorAt(d,p.color&&typeof p.color.toArray=="function"?p.color:h)}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),t.add(l)}if(s.length>0){const c=new js({roughness:.15,metalness:.2,transparent:!0,opacity:.8,flatShading:!0}),l=new Zs(o,c,s.length);l.receiveShadow=!0,l.name="VoxelWater";const h=new j(3238266),m=new ce;for(let d=0;d<s.length;d++){const p=s[d];m.position.set(p.x*a,p.y*a,p.z*a),m.updateMatrix(),l.setMatrixAt(d,m.matrix),l.setColorAt(d,p.color&&typeof p.color.toArray=="function"?p.color:h)}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),t.add(l)}return t.userData={totalVoxels:this.voxels.size,renderedInstances:e.length+n.length+s.length,bounds:{min:{x:this.min.x*a,y:this.min.y*a,z:this.min.z*a},max:{x:this.max.x*a,y:this.max.y*a,z:this.max.z*a}}},t}}class up{constructor(t,e){this.scene=t,this.renderer=e,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eo,this.renderer.toneMapping=io,this.renderer.toneMappingExposure=1.05,this.dirLight=new ap(4095,1.8),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=350,this.dirLight.shadow.camera.left=-95,this.dirLight.shadow.camera.right=95,this.dirLight.shadow.camera.top=95,this.dirLight.shadow.camera.bottom=-95,this.dirLight.shadow.bias=-4e-4,this.dirLight.shadow.normalBias=.03,this.scene.add(this.dirLight),this.hemiLight=new ip(16777215,4473924,.7),this.scene.add(this.hemiLight),this.ambientLight=new op(16777215,.35),this.scene.add(this.ambientLight),this.fog=new fr(0,.0042),this.scene.fog=this.fog,this.skyMesh=this.createSkyDome(),this.scene.add(this.skyMesh),this.incenseLight=new Xa(16737809,2.5,25),this.incenseLight.position.set(0,5,8),this.scene.add(this.incenseLight),this.mainHallLight=new Xa(16755268,3,35),this.mainHallLight.position.set(0,10,-5),this.scene.add(this.mainHallLight),this.currentPreset="sunset",this.applyPreset("sunset")}createSkyDome(){const t=new pr(260,32,24);t.scale(-1,1,1),this.skyCanvas=document.createElement("canvas"),this.skyCanvas.width=16,this.skyCanvas.height=256,this.skyCtx=this.skyCanvas.getContext("2d"),this.skyTexture=new np(this.skyCanvas);const e=new hr({map:this.skyTexture,depthWrite:!1,side:Me}),n=new De(t,e);return n.name="SkyDome",n}updateSkyGradient(t,e,n){const s=this.skyCtx.createLinearGradient(0,0,0,256);s.addColorStop(0,t),s.addColorStop(.65,e),s.addColorStop(1,n),this.skyCtx.fillStyle=s,this.skyCtx.fillRect(0,0,16,256),this.skyTexture.needsUpdate=!0}applyPreset(t){switch(this.currentPreset=t,t){case"sunset":this.dirLight.color.setHex(16755268),this.dirLight.intensity=2.4,this.dirLight.position.set(80,55,60),this.hemiLight.color.setHex(16763802),this.hemiLight.groundColor.setHex(5650506),this.hemiLight.intensity=.85,this.ambientLight.color.setHex(8672592),this.ambientLight.intensity=.45,this.fog.color.setHex(13667692),this.fog.density=.0038,this.scene.background=new j(13667692),this.updateSkyGradient("#2c2847","#be5846","#e89e60"),this.renderer.toneMappingExposure=1.08,this.incenseLight.intensity=3.2,this.mainHallLight.intensity=3.8;break;case"dawn":this.dirLight.color.setHex(16769706),this.dirLight.intensity=2,this.dirLight.position.set(-75,45,65),this.hemiLight.color.setHex(13886962),this.hemiLight.groundColor.setHex(4807502),this.hemiLight.intensity=.9,this.ambientLight.color.setHex(6060423),this.ambientLight.intensity=.4,this.fog.color.setHex(11323348),this.fog.density=.0045,this.scene.background=new j(11323348),this.updateSkyGradient("#385674","#9bbecf","#eed7be"),this.renderer.toneMappingExposure=1.02,this.incenseLight.intensity=2.5,this.mainHallLight.intensity=3;break;case"night":this.dirLight.color.setHex(7245749),this.dirLight.intensity=.9,this.dirLight.position.set(-60,80,-40),this.hemiLight.color.setHex(2635858),this.hemiLight.groundColor.setHex(1119778),this.hemiLight.intensity=.55,this.ambientLight.color.setHex(1648444),this.ambientLight.intensity=.3,this.fog.color.setHex(659483),this.fog.density=.0048,this.scene.background=new j(659483),this.updateSkyGradient("#030710","#0d182b","#182740"),this.renderer.toneMappingExposure=1.15,this.incenseLight.intensity=5,this.mainHallLight.intensity=5.5;break;case"day":this.dirLight.color.setHex(16775146),this.dirLight.intensity=2.2,this.dirLight.position.set(50,95,45),this.hemiLight.color.setHex(14544639),this.hemiLight.groundColor.setHex(5789768),this.hemiLight.intensity=.8,this.ambientLight.color.setHex(6712179),this.ambientLight.intensity=.35,this.fog.color.setHex(13361394),this.fog.density=.0032,this.scene.background=new j(13361394),this.updateSkyGradient("#245585","#6fa9d8","#bcdbee"),this.renderer.toneMappingExposure=1,this.incenseLight.intensity=1.8,this.mainHallLight.intensity=2;break}}update(t){const e=Math.sin(t*6)*.3+Math.cos(t*11)*.2;this.incenseLight.intensity=Math.max(.5,(this.currentPreset==="night"?5:2.5)+e)}}const w={ROOF_GOLD:new j("#d89e28"),ROOF_GOLD_DARK:new j("#b37a18"),ROOF_GOLD_LIGHT:new j("#ecc048"),ROOF_GOLD_RIDGE:new j("#f0a51e"),RIDGE_BEAST:new j("#f5b025"),ROOF_CYAN:new j("#286055"),ROOF_CYAN_DARK:new j("#1b463e"),ROOF_CYAN_LIGHT:new j("#387a6d"),ROOF_CYAN_RIDGE:new j("#1e4f45"),ROOF_GREY:new j("#464c53"),ROOF_GREY_DARK:new j("#363b40"),ROOF_GREY_LIGHT:new j("#585f67"),WALL_RED:new j("#a82d2a"),WALL_RED_DARK:new j("#861f1c"),WALL_RED_LIGHT:new j("#be3834"),PILLAR_RED:new j("#942522"),PILLAR_BASE:new j("#5e636b"),WOOD_DARK:new j("#3e2415"),WOOD_MED:new j("#583420"),WOOD_LIGHT:new j("#7a4b31"),DOUGONG_GOLD:new j("#d4af37"),DOUGONG_RED:new j("#a02826"),DOUGONG_CYAN:new j("#255850"),WINDOW_FRAME:new j("#64271e"),WINDOW_PAPER:new j("#fff2d4"),WINDOW_GLOW:new j("#ffe299"),DOOR_RED:new j("#8b2220"),DOOR_NAILS:new j("#e0a838"),PLAQUE_BG:new j("#162d47"),PLAQUE_BORDER:new j("#d4af37"),PLAQUE_TEXT:new j("#f9d76c"),MARBLE_WHITE:new j("#eee9e0"),MARBLE_SHADOW:new j("#d7d1c6"),MARBLE_DARK:new j("#c2bcb0"),DRAGON_STONE:new j("#a8a49c"),ROAD_PAVER:new j("#6e737c"),ROAD_PAVER_LIGHT:new j("#858c96"),ROAD_BORDER:new j("#9ca3ae"),COURTYARD_GROUND:new j("#7a7e85"),COURTYARD_GRAVEL:new j("#b5b0a6"),GRASS_BASE:new j("#547837"),GRASS_LIGHT:new j("#689045"),PINE_NEEDLE:new j("#193d25"),PINE_NEEDLE_LIGHT:new j("#265737"),PINE_TRUNK:new j("#432b1d"),BAMBOO_STALK:new j("#4e8036"),BAMBOO_LEAF:new j("#6ba347"),WATER_SURFACE:new j("#31697a"),LOTUS_LEAF:new j("#2b5d38"),LOTUS_FLOWER:new j("#e56f94"),BRONZE_DARK:new j("#38453d"),BRONZE_PATINA:new j("#466355"),BRONZE_GOLD:new j("#8a763d"),STONE_LION:new j("#bbb6ab"),STONE_LANTERN:new j("#b0aba0"),LANTERN_RED:new j("#e62626"),LANTERN_GLOW:new j("#ff8c2b"),LANTERN_GOLD:new j("#f0c436"),INCENSE_EMBER:new j("#ff4d12"),FIRE_GLOW:new j("#ffaa33")};class St{static buildCurvedRoof(t,{cx:e,cz:n,halfW:s,halfD:r,baseY:a,height:o,roofColor:c=w.ROOF_GOLD,ridgeColor:l=w.ROOF_GOLD_RIDGE,ridgeBeastColor:h=w.RIDGE_BEAST,eaveOverhang:m=2,upturn:d=2,roofType:p="wudian"}){const g=s+m,v=r+m;for(let f=e-g;f<=e+g;f++)for(let u=n-v;u<=n+v;u++){const y=Math.abs(f-e),x=Math.abs(u-n),A=y/g,I=x/v;if(Math.max(A,I)>1)continue;let R=0,O=!1,T=!1;if(p==="zanjian"){const F=Math.max(y,x),K=1-F/Math.max(g,v);R=a+Math.round(Math.pow(K,1.2)*o),Math.abs(y-x)<=1&&F>1&&(T=!0),y===0&&x===0&&(O=!0)}else if(p==="xieshan"){const F=Math.max(1,s-r+1);x===0&&y<=F&&(O=!0);const K=y<=F?0:(y-F)/(g-F),Z=x/v,X=Math.max(K,Z);R=a+Math.round(Math.pow(1-Math.min(1,X),1.25)*o),Math.abs(y-F-x)<=1&&y>=F&&(T=!0)}else{const F=Math.max(1,s-r);x===0&&y<=F&&(O=!0);const K=y<=F?0:(y-F)/(g-F),Z=x/v,X=Math.max(K,Z);R=a+Math.round(Math.pow(1-Math.min(1,X),1.25)*o),Math.abs(y-F-x)<=1&&y>=F&&(T=!0)}let E=0;if(A>.65&&I>.65){const F=Math.pow((A-.65)/.35*((I-.65)/.35),1.6);E=Math.round(F*d)}const L=R+E;let W=c;O?(W=l,t.set(f,L+1,u,l)):T&&(W=l),t.set(f,L,u,W),L>a&&t.set(f,L-1,u,w.WOOD_DARK),y===g&&x===v&&(t.set(f,L+1,u,h),t.set(f,L+2,u,h),t.set(f,L-1,u,w.LANTERN_GOLD),t.set(f,L-2,u,w.LANTERN_RED,"emissive"))}if(p==="zanjian"){const f=a+o+1;t.set(e,f,n,w.LANTERN_GOLD),t.set(e,f+1,n,w.LANTERN_GOLD),t.set(e,f+2,n,w.RIDGE_BEAST,"emissive")}}static buildDougongLayer(t,{minX:e,maxX:n,minZ:s,maxZ:r,y:a,step:o=3}){for(let c=e;c<=n;c++)for(let l=s;l<=r;l++){const h=(l===s||l===r)&&c>=e&&c<=n,m=(c===e||c===n)&&l>=s&&l<=r;if(h||m)if(c%o===0||l%o===0){t.set(c,a,l,w.DOUGONG_RED);let p=c,g=l;c===e&&(p=c-1),c===n&&(p=c+1),l===s&&(g=l-1),l===r&&(g=l+1),t.set(p,a+1,g,w.DOUGONG_CYAN),t.set(p,a+1,l,w.DOUGONG_GOLD),t.set(c,a+1,g,w.DOUGONG_GOLD),t.set(c,a+1,l,w.WOOD_DARK)}else t.set(c,a,l,w.WOOD_MED),t.set(c,a+1,l,w.WOOD_DARK)}}static buildPillars(t,{positions:e,minY:n,maxY:s,pillarColor:r=w.PILLAR_RED,baseColor:a=w.PILLAR_BASE}){for(const[o,c]of e){t.set(o,n,c,a);for(let l=n+1;l<s;l++)t.set(o,l,c,r);t.set(o,s,c,w.WOOD_DARK)}}static buildBalustrade(t,{x1:e,z1:n,x2:s,z2:r,y:a,postInterval:o=3}){if(n===r){const l=Math.min(e,s),h=Math.max(e,s),m=n;for(let d=l;d<=h;d++)t.set(d,a,m,w.MARBLE_SHADOW),t.set(d,a+1,m,w.MARBLE_WHITE),((d-l)%o===0||d===l||d===h)&&(t.set(d,a+2,m,w.MARBLE_WHITE),t.set(d,a+3,m,w.MARBLE_WHITE))}else{const l=Math.min(n,r),h=Math.max(n,r),m=e;for(let d=l;d<=h;d++)t.set(m,a,d,w.MARBLE_SHADOW),t.set(m,a+1,d,w.MARBLE_WHITE),((d-l)%o===0||d===l||d===h)&&(t.set(m,a+2,d,w.MARBLE_WHITE),t.set(m,a+3,d,w.MARBLE_WHITE))}}static buildStaircaseWithCarvedRamp(t,{cx:e,startZ:n,endZ:s,minY:r,maxY:a,totalWidth:o=14,rampWidth:c=4}){const l=Math.abs(s-n)+1,h=(a-r)/l,m=Math.floor(o/2),d=Math.floor(c/2);for(let p=0;p<l;p++){const g=n+(n<s?p:-p),v=Math.round(r+p*h);for(let f=e-m;f<=e+m;f++)for(let u=r;u<=v;u++)Math.abs(f-e)<=d?t.set(f,u,g,u===v?w.DRAGON_STONE:w.MARBLE_SHADOW):t.set(f,u,g,u===v?w.MARBLE_WHITE:w.MARBLE_SHADOW)}}static buildLatticeFacade(t,{minX:e,maxX:n,y:s,height:r,z:a,doorInterval:o=4}){for(let c=e;c<=n;c++)for(let l=0;l<r;l++){const h=s+l;(c-e)%o===0?t.set(c,h,a,w.PILLAR_RED):l===0?t.set(c,h,a,w.WOOD_DARK):l===1||l===2?t.set(c,h,a,w.WALL_RED):h%2===0||c%2===0?t.set(c,h,a,w.WINDOW_FRAME):t.set(c,h,a,w.WINDOW_GLOW,"emissive")}}static buildPlaque(t,{cx:e,y:n,z:s,width:r=6,height:a=3}){const o=Math.floor(r/2);for(let c=e-o;c<=e+o;c++)for(let l=0;l<a;l++){const h=n+l;c===e-o||c===e+o||l===0||l===a-1?t.set(c,h,s,w.PLAQUE_BORDER):t.set(c,h,s,w.PLAQUE_BG)}t.set(e,n+1,s,w.PLAQUE_TEXT,"emissive")}static buildLantern(t,{x:e,y:n,z:s}){t.set(e,n+2,s,w.LANTERN_GOLD),t.set(e,n+1,s,w.LANTERN_GOLD),t.set(e,n,s,w.LANTERN_RED,"emissive"),t.set(e+1,n,s,w.LANTERN_RED,"emissive"),t.set(e-1,n,s,w.LANTERN_RED,"emissive"),t.set(e,n,s+1,w.LANTERN_RED,"emissive"),t.set(e,n,s-1,w.LANTERN_RED,"emissive"),t.set(e,n-1,s,w.LANTERN_RED,"emissive"),t.set(e,n-2,s,w.LANTERN_GOLD),t.set(e,n-3,s,w.LANTERN_RED)}static buildStoneLion(t,{x:e,y:n,z:s,facing:r="north"}){t.fillBox(e-1,n,s-1,e+1,n+1,s+1,w.MARBLE_SHADOW),t.fillBox(e-1,n+2,s,e+1,n+3,s+1,w.STONE_LION),t.fillBox(e-1,n+4,s-1,e+1,n+5,s,w.STONE_LION),t.set(e,n+4,s-1,w.MARBLE_WHITE),t.set(e-1,n+5,s-1,w.BRONZE_DARK),t.set(e+1,n+5,s-1,w.BRONZE_DARK)}static buildIncenseBurner(t,{cx:e,cz:n,y:s}){t.fillBox(e-2,s,n-2,e+2,s,n+2,w.MARBLE_SHADOW),t.set(e-2,s+1,n-2,w.BRONZE_DARK),t.set(e+2,s+1,n-2,w.BRONZE_DARK),t.set(e-2,s+1,n+2,w.BRONZE_DARK),t.set(e+2,s+1,n+2,w.BRONZE_DARK),t.fillBox(e-3,s+2,n-3,e+3,s+4,n+3,w.BRONZE_PATINA),t.fillBox(e-2,s+3,n-2,e+2,s+4,n+2,w.INCENSE_EMBER,"emissive"),t.set(e-4,s+4,n,w.BRONZE_GOLD),t.set(e-4,s+5,n,w.BRONZE_GOLD),t.set(e+4,s+4,n,w.BRONZE_GOLD),t.set(e+4,s+5,n,w.BRONZE_GOLD),t.set(e,s+6,n,w.INCENSE_EMBER,"emissive"),t.set(e,s+8,n+1,w.ROAD_PAVER_LIGHT)}static buildPineTree(t,{cx:e,cz:n,groundY:s,height:r=12,seed:a=1}){let o=e,c=n;for(let h=s;h<=s+r;h++)if(t.fillBox(o,h,c,o+1,h,c+1,w.PINE_TRUNK),h===s+3&&(o+=a%2===0?1:-1),h===s+7&&(c+=a%3===0?1:-1),h===s+5||h===s+8||h===s+11){const d=h%2===0?1:-1,p=h%3===0?1:-1;for(let u=1;u<=3;u++)t.set(o+u*d,h,c+u*p,w.PINE_TRUNK);const g=o+3*d,v=c+3*p,f=h===s+11?4:3;for(let u=-f;u<=f;u++)for(let y=-f;y<=f;y++)if(u*u+y*y<=f*f){const x=(u+y)%2===0?w.PINE_NEEDLE:w.PINE_NEEDLE_LIGHT;t.set(g+u,h+1,v+y,x),Math.abs(u)<f-1&&Math.abs(y)<f-1&&t.set(g+u,h+2,v+y,x)}}const l=s+r;for(let h=-3;h<=3;h++)for(let m=-3;m<=3;m++)h*h+m*m<=9&&(t.set(o+h,l+1,c+m,w.PINE_NEEDLE),h*h+m*m<=4&&t.set(o+h,l+2,c+m,w.PINE_NEEDLE_LIGHT))}static buildStoneLantern(t,{x:e,y:n,z:s}){t.set(e,n,s,w.STONE_LANTERN),t.set(e,n+1,s,w.STONE_LANTERN),t.set(e,n+2,s,w.LANTERN_GLOW,"emissive"),t.fillBox(e-1,n+3,s-1,e+1,n+3,s+1,w.STONE_LANTERN),t.set(e,n+4,s,w.STONE_LANTERN)}}class dp{static build(t,{groundY:e=0}){for(let v=-56;v<=56;v++)for(let f=-84;f<=68;f++){const u=Math.abs(v);if(u<=4){const x=u===4?w.ROAD_BORDER:(v+f)%3===0?w.ROAD_PAVER_LIGHT:w.ROAD_PAVER;t.set(v,e,f,x)}else if(f>=21&&f<=27&&u<=32){const y=f===21||f===27;t.set(v,e,f,y?w.ROAD_BORDER:w.ROAD_PAVER)}else if(f>=-18&&f<=-12&&u<=45){const y=f===-18||f===-12;t.set(v,e,f,y?w.ROAD_BORDER:w.ROAD_PAVER)}else f>=0&&f<=15&&u<=24?t.set(v,e,f,(v+f)%2===0?w.COURTYARD_GROUND:w.ROAD_PAVER):f>=16&&f<=32&&u>=18&&u<=34?t.set(v,e,f,w.COURTYARD_GROUND):Math.sin(v*.25)*Math.cos(f*.25)>.1?t.set(v,e,f,(v+f)%2===0?w.GRASS_BASE:w.GRASS_LIGHT):t.set(v,e,f,w.COURTYARD_GRAVEL)}const o=-26,c=-10,l=36,h=46;for(let v=o;v<=c;v++)for(let f=l;f<=h;f++)v===o||v===c||f===l||f===h?(t.set(v,e,f,w.MARBLE_SHADOW),t.set(v,e+1,f,w.MARBLE_WHITE)):(t.set(v,e-1,f,w.STONE_GREY),t.set(v,e,f,w.WATER_SURFACE,"water"),(v*7+f*13)%9===0&&t.set(v,e+1,f,w.LOTUS_LEAF),(v*11+f*5)%17===0&&t.set(v,e+1,f,w.LOTUS_FLOWER));const m=Math.round((l+h)/2);for(let v=o;v<=c;v++){const f=Math.abs(v-(o+c)/2),u=e+Math.round(Math.max(1,3-f*.3));t.set(v,u,m-1,w.MARBLE_WHITE),t.set(v,u,m,w.ROAD_PAVER_LIGHT),t.set(v,u,m+1,w.MARBLE_WHITE);for(let y=e;y<u;y++)f>=3&&t.set(v,y,m,w.MARBLE_SHADOW)}St.buildIncenseBurner(t,{cx:0,cz:8,y:e+1});const d=[{x:-16,z:60,h:10,s:2},{x:16,z:60,h:11,s:3},{x:-38,z:38,h:12,s:5},{x:38,z:38,h:12,s:7},{x:-36,z:16,h:13,s:11},{x:36,z:16,h:13,s:13},{x:-26,z:-2,h:11,s:17},{x:26,z:-2,h:10,s:19},{x:-26,z:-28,h:12,s:23},{x:26,z:-28,h:11,s:29},{x:-18,z:-55,h:13,s:31},{x:18,z:-55,h:14,s:37},{x:-18,z:-78,h:12,s:41},{x:18,z:-78,h:12,s:43}];for(const v of d)St.buildPineTree(t,{cx:v.x,cz:v.z,groundY:e+1,height:v.h,seed:v.s});const p=[{x:-6,z:48},{x:6,z:48},{x:-6,z:34},{x:6,z:34},{x:-6,z:18},{x:6,z:18},{x:-6,z:2},{x:6,z:2},{x:-6,z:-38},{x:6,z:-38},{x:-6,z:-50},{x:6,z:-50},{x:-8,z:-60},{x:8,z:-60},{x:-18,z:24},{x:18,z:24}];for(const v of p)St.buildStoneLantern(t,{x:v.x,y:e+1,z:v.z});const g=5;this.buildPerimeterWallSegment(t,-56,-56,-84,68,e,g),this.buildPerimeterWallSegment(t,56,56,-84,68,e,g),this.buildPerimeterWallSegment(t,-56,56,-84,-84,e,g),this.buildPerimeterWallSegment(t,-56,-16,68,68,e,g),this.buildPerimeterWallSegment(t,16,56,68,68,e,g)}static buildPerimeterWallSegment(t,e,n,s,r,a,o){const c=Math.min(e,n),l=Math.max(e,n),h=Math.min(s,r),m=Math.max(s,r);for(let d=c;d<=l;d++)for(let p=h;p<=m;p++){t.set(d,a+1,p,w.MARBLE_SHADOW);for(let g=a+2;g<=a+o;g++)t.set(d,g,p,w.WALL_RED);t.set(d,a+o+1,p,w.ROOF_GREY_LIGHT),t.set(d,a+o+2,p,w.ROOF_GREY_DARK)}}}class fp{static build(t,{cx:e=0,cz:n=56,groundY:s=0}){t.fillBox(e-14,s,n-8,e+14,s+2-1,n+8,w.MARBLE_SHADOW),t.fillBox(e-14,s+2,n-8,e+14,s+2,n+8,w.ROAD_PAVER);const c=s+2;St.buildStaircaseWithCarvedRamp(t,{cx:e,startZ:n+8,endZ:n+8+4,minY:s,maxY:c,totalWidth:10,rampWidth:2});const l=c+1,m=l+7;for(let d=e-14+1;d<=e+14-1;d++)for(let p=l;p<=m;p++)for(let g=n-8+1;g<=n+8-1;g++)(g===n-8+1||g===n+8-1)&&t.set(d,p,g,w.WALL_RED);for(let d=e-2;d<=e+2;d++)for(let p=l;p<=l+4;p++)for(let g=n-8+1;g<=n+8-1;g++)t.delete(d,p,g);for(let d=l;d<=l+4;d++)t.set(e-3,d,n+8-1,w.MARBLE_WHITE),t.set(e+3,d,n+8-1,w.MARBLE_WHITE),t.set(e-3,d,n-8+1,w.MARBLE_WHITE),t.set(e+3,d,n-8+1,w.MARBLE_WHITE);for(let d=e-3;d<=e+3;d++)t.set(d,l+5,n+8-1,w.MARBLE_WHITE),t.set(d,l+5,n-8+1,w.MARBLE_WHITE);for(let d=e-9;d<=e-7;d++)for(let p=l;p<=l+3;p++)for(let g=n-8+1;g<=n+8-1;g++)t.delete(d,p,g);for(let d=e+7;d<=e+9;d++)for(let p=l;p<=l+3;p++)for(let g=n-8+1;g<=n+8-1;g++)t.delete(d,p,g);St.buildPlaque(t,{cx:e,y:l+5,z:n+8,width:5,height:2}),St.buildDougongLayer(t,{minX:e-14,maxX:e+14,minZ:n-8,maxZ:n+8,y:m,step:3}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:16,halfD:10,baseY:m+2,height:5,roofColor:w.ROOF_GREY,ridgeColor:w.ROOF_GREY_LIGHT,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:2,upturn:2,roofType:"xieshan"}),St.buildStoneLion(t,{x:e-7,y:s,z:n+8+5,facing:"south"}),St.buildStoneLion(t,{x:e+7,y:s,z:n+8+5,facing:"south"}),St.buildLantern(t,{x:e-4,y:m-1,z:n+8+1}),St.buildLantern(t,{x:e+4,y:m-1,z:n+8+1}),St.buildLantern(t,{x:e-14-1,y:m,z:n+8+2}),St.buildLantern(t,{x:e+14+1,y:m,z:n+8+2})}}class $a{static build(t,{cx:e,cz:n=24,type:s="bell",groundY:r=0}){t.fillBox(e-7,r,n-7,e+7,r+2-1,n+7,w.MARBLE_SHADOW),t.fillBox(e-7,r+2,n-7,e+7,r+2,n+7,w.ROAD_PAVER);const l=r+2;St.buildBalustrade(t,{x1:e-7+1,z1:n-7+1,x2:e+7-1,z2:n-7+1,y:l+1}),St.buildBalustrade(t,{x1:e-7+1,z1:n+7-1,x2:e-2,z2:n+7-1,y:l+1}),St.buildBalustrade(t,{x1:e+2,z1:n+7-1,x2:e+7-1,z2:n+7-1,y:l+1}),St.buildStaircaseWithCarvedRamp(t,{cx:e,startZ:n+7,endZ:n+7+3,minY:r,maxY:l,totalWidth:6,rampWidth:0});const h=l+1,d=h+6;t.fillHollowBox(e-7+1,h,n-7+1,e+7-1,d,n+7-1,w.WALL_RED,1);for(let A=e-1;A<=e+1;A++)for(let I=h;I<=h+4;I++)t.delete(A,I,n+7-1),t.delete(A,I,n-7+1);St.buildDougongLayer(t,{minX:e-7,maxX:e+7,minZ:n-7,maxZ:n+7,y:d,step:2}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:8,halfD:8,baseY:d+1,height:2,roofColor:w.ROOF_GREY,ridgeColor:w.ROOF_GREY_LIGHT,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:1,upturn:1,roofType:"zanjian"});const p=d+3,g=5,v=5,u=p+6;St.buildBalustrade(t,{x1:e-g-1,z1:n-v-1,x2:e+g+1,z2:n-v-1,y:p}),St.buildBalustrade(t,{x1:e-g-1,z1:n+v+1,x2:e+g+1,z2:n+v+1,y:p}),St.buildBalustrade(t,{x1:e-g-1,z1:n-v-1,x2:e-g-1,z2:n+v+1,y:p}),St.buildBalustrade(t,{x1:e+g+1,z1:n-v-1,x2:e+g+1,z2:n+v+1,y:p});const y=[[e-g,n-v],[e+g,n-v],[e-g,n+v],[e+g,n+v]];for(const[A,I]of y){for(let C=p;C<u;C++)t.set(A,C,I,w.PILLAR_RED);t.set(A,u,I,w.WOOD_DARK)}s==="bell"?(t.fillBox(e-2,u-1,n,e+2,u-1,n,w.WOOD_DARK),t.set(e,u-2,n,w.BRONZE_GOLD),t.fillBox(e-1,u-4,n-1,e+1,u-3,n+1,w.BRONZE_PATINA),t.fillBox(e-2,u-5,n-2,e+2,u-5,n+2,w.BRONZE_PATINA),t.set(e,u-6,n,w.BRONZE_DARK)):(t.set(e-2,p+1,n-1,w.WOOD_DARK),t.set(e+2,p+1,n-1,w.WOOD_DARK),t.set(e-2,p+1,n+1,w.WOOD_DARK),t.set(e+2,p+1,n+1,w.WOOD_DARK),t.fillBox(e-2,p+2,n-2,e+2,p+5,n+2,w.WALL_RED),t.fillBox(e-1,p+3,n-2,e+1,p+4,n-2,w.WINDOW_PAPER),t.fillBox(e-1,p+3,n+2,e+1,p+4,n+2,w.WINDOW_PAPER)),St.buildDougongLayer(t,{minX:e-g,maxX:e+g,minZ:n-v,maxZ:n+v,y:u,step:2}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:g+2,halfD:v+2,baseY:u+1,height:4,roofColor:s==="bell"?w.ROOF_GREY:w.ROOF_CYAN,ridgeColor:w.ROOF_GREY_LIGHT,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:2,upturn:2,roofType:"zanjian"});const x=g+3;t.set(e-x,u,n-x,w.LANTERN_GOLD),t.set(e-x,u-1,n-x,w.LANTERN_RED,"emissive"),t.set(e+x,u,n+x,w.LANTERN_GOLD),t.set(e+x,u-1,n+x,w.LANTERN_RED,"emissive")}}class pp{static build(t,{cx:e=0,cz:n=-15,groundY:s=0}){t.fillBox(e-20,s,n-16,e+20,s+4-1,n+16,w.MARBLE_SHADOW),t.fillBox(e-20,s+4,n-16,e+20,s+4,n+16,w.MARBLE_WHITE);const c=s+4;St.buildBalustrade(t,{x1:e-20+1,z1:n-16+1,x2:e+20-1,z2:n-16+1,y:c+1}),St.buildBalustrade(t,{x1:e-20+1,z1:n+16-1,x2:e-8,z2:n+16-1,y:c+1}),St.buildBalustrade(t,{x1:e+8,z1:n+16-1,x2:e+20-1,z2:n+16-1,y:c+1}),St.buildBalustrade(t,{x1:e-20+1,z1:n-16+1,x2:e-20+1,z2:n+16-1,y:c+1}),St.buildBalustrade(t,{x1:e+20-1,z1:n-16+1,x2:e+20-1,z2:n+16-1,y:c+1}),St.buildStaircaseWithCarvedRamp(t,{cx:e,startZ:n+16,endZ:n+16+6,minY:s,maxY:c,totalWidth:16,rampWidth:4});const l=15,h=11,m=c+1,d=8,p=m+d;t.fillBox(e-l,m,n-h,e+l,p,n-h,w.WALL_RED),t.fillBox(e-l,m,n-h,e-l,p,n+h,w.WALL_RED),t.fillBox(e+l,m,n-h,e+l,p,n+h,w.WALL_RED),St.buildLatticeFacade(t,{minX:e-l+2,maxX:e+l-2,y:m,height:d,z:n+h,doorInterval:4});const g=[];for(let I=e-l;I<=e+l;I+=5)g.push([I,n+h+1]),g.push([I,n-h-1]);for(let I=n-h;I<=n+h;I+=5)g.push([e-l-1,I]),g.push([e+l+1,I]);St.buildPillars(t,{positions:g,minY:m,maxY:p,pillarColor:w.PILLAR_RED,baseColor:w.PILLAR_BASE}),St.buildDougongLayer(t,{minX:e-l-2,maxX:e+l+2,minZ:n-h-2,maxZ:n+h+2,y:p,step:3}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:l+3,halfD:h+3,baseY:p+2,height:3,roofColor:w.ROOF_GOLD,ridgeColor:w.ROOF_GOLD_RIDGE,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:2,upturn:2,roofType:"wudian"});const v=11,f=8,u=p+4,y=6,x=u+y;t.fillBox(e-v,u,n-f,e+v,x,n+f,w.WALL_RED),St.buildLatticeFacade(t,{minX:e-v+2,maxX:e+v-2,y:u,height:y,z:n+f,doorInterval:4}),St.buildPlaque(t,{cx:e,y:u+2,z:n+f+1,width:7,height:4}),St.buildDougongLayer(t,{minX:e-v-1,maxX:e+v+1,minZ:n-f-1,maxZ:n+f+1,y:x,step:3}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:v+3,halfD:f+3,baseY:x+2,height:6,roofColor:w.ROOF_GOLD,ridgeColor:w.ROOF_GOLD_RIDGE,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:3,upturn:3,roofType:"wudian"});const A=[[e-l-3,p+1,n+h+3],[e+l+3,p+1,n+h+3],[e-l-3,p+1,n-h-3],[e+l+3,p+1,n-h-3],[e-5,p,n+h+1],[e+5,p,n+h+1],[e-v-3,x+1,n+f+3],[e+v+3,x+1,n+f+3]];for(const[I,C,R]of A)St.buildLantern(t,{x:I,y:C,z:R})}}class Ja{static build(t,{cx:e,cz:n=-15,side:s="east",groundY:r=0}){t.fillBox(e-9,r,n-16,e+9,r+2-1,n+16,w.MARBLE_SHADOW),t.fillBox(e-9,r+2,n-16,e+9,r+2,n+16,w.ROAD_PAVER);const l=r+2,h=s==="east"?1:-1,m=e+9*h;for(let x=0;x<=3;x++){const A=m+x*h,I=Math.round(l-x*(l-r)/3);for(let C=n-4;C<=n+4;C++)for(let R=r;R<=I;R++)t.set(A,R,C,R===I?w.ROAD_BORDER:w.MARBLE_SHADOW)}const d=l+1,p=7,g=d+p;t.fillBox(e-9+1,d,n-16+1,e+9-1,g,n-16+1,w.WALL_RED),t.fillBox(e-9+1,d,n+16-1,e+9-1,g,n+16-1,w.WALL_RED);const v=s==="east"?e-9+1:e+9-1;t.fillBox(v,d,n-16+1,v,g,n+16-1,w.WALL_RED);const f=s==="east"?e+9-3:e-9+3;for(let x=n-16+2;x<=n+16-2;x++)for(let A=0;A<p;A++){const I=d+A,C=Math.abs(x-n)<=2;if(x%4===0)t.set(f,I,x,w.PILLAR_RED);else if(C)A<=1?t.set(f,I,x,w.DOOR_RED):t.set(f,I,x,A%2===0?w.WINDOW_FRAME:w.WINDOW_GLOW,"emissive");else if(A===0||A===1)t.set(f,I,x,w.WALL_RED);else{const O=A%2===0||x%2===0;t.set(f,I,x,O?w.WINDOW_FRAME:w.WINDOW_GLOW,"emissive")}}const u=s==="east"?e+9-1:e-9+1;for(let x=n-16+2;x<=n+16-2;x+=4){for(let A=d;A<g;A++)t.set(u,A,x,w.PILLAR_RED);t.set(u,d-1,x,w.PILLAR_BASE),t.set(u,g,x,w.WOOD_DARK)}St.buildPlaque(t,{cx:f+(s==="east"?1:-1),y:d+4,z:n,width:4,height:2}),St.buildDougongLayer(t,{minX:e-9-1,maxX:e+9+1,minZ:n-16-1,maxZ:n+16+1,y:g,step:3}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:11,halfD:18,baseY:g+2,height:5,roofColor:w.ROOF_CYAN,ridgeColor:w.ROOF_CYAN_LIGHT,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:2,upturn:2,roofType:"xieshan"});const y=s==="east"?e+9:e-9;St.buildLantern(t,{x:y,y:g-1,z:n-6}),St.buildLantern(t,{x:y,y:g-1,z:n+6})}}class mp{static build(t,{cx:e=0,cz:n=-68,groundY:s=0}){t.fillBox(e-11,s,n-11,e+11,s+3-1,n+11,w.MARBLE_SHADOW),t.fillBox(e-11,s+3,n-11,e+11,s+3,n+11,w.MARBLE_WHITE);const c=s+3;St.buildBalustrade(t,{x1:e-11+1,z1:n-11+1,x2:e+11-1,z2:n-11+1,y:c+1}),St.buildBalustrade(t,{x1:e-11+1,z1:n+11-1,x2:e-4,z2:n+11-1,y:c+1}),St.buildBalustrade(t,{x1:e+4,z1:n+11-1,x2:e+11-1,z2:n+11-1,y:c+1}),St.buildBalustrade(t,{x1:e-11+1,z1:n-11+1,x2:e-11+1,z2:n+11-1,y:c+1}),St.buildBalustrade(t,{x1:e+11-1,z1:n-11+1,x2:e+11-1,z2:n+11-1,y:c+1}),St.buildStaircaseWithCarvedRamp(t,{cx:e,startZ:n+11,endZ:n+11+4,minY:s,maxY:c,totalWidth:8,rampWidth:2});const l=[{r:8,h:6,overhang:2,upturn:2},{r:7,h:5,overhang:2,upturn:2},{r:6,h:5,overhang:2,upturn:2},{r:5,h:4,overhang:2,upturn:2},{r:4,h:4,overhang:1,upturn:1},{r:3,h:3,overhang:1,upturn:1},{r:2,h:3,overhang:1,upturn:1}];let h=c+1;for(let d=0;d<l.length;d++){const{r:p,h:g,overhang:v,upturn:f}=l[d],u=h+g;if(t.fillHollowBox(e-p,h,n-p,e+p,u,n+p,w.WALL_RED,1),d>0)for(let A=e-p-1;A<=e+p+1;A++)for(let I=n-p-1;I<=n+p+1;I++)(A===e-p-1||A===e+p+1||I===n-p-1||I===n+p+1)&&t.set(A,h,I,w.MARBLE_WHITE);for(let A=h;A<=h+Math.min(3,g-1);A++)t.set(e,A,n+p,w.WINDOW_GLOW,"emissive"),p>3&&(t.set(e-1,A,n+p,w.WINDOW_FRAME),t.set(e+1,A,n+p,w.WINDOW_FRAME));t.set(e,h+1,n-p,w.WINDOW_GLOW,"emissive"),t.set(e+p,h+1,n,w.WINDOW_GLOW,"emissive"),t.set(e-p,h+1,n,w.WINDOW_GLOW,"emissive"),St.buildDougongLayer(t,{minX:e-p,maxX:e+p,minZ:n-p,maxZ:n+p,y:u,step:2}),St.buildCurvedRoof(t,{cx:e,cz:n,halfW:p,halfD:p,baseY:u+1,height:2,roofColor:d%2===0?w.ROOF_GOLD:w.ROOF_CYAN,ridgeColor:w.ROOF_GOLD_RIDGE,ridgeBeastColor:w.RIDGE_BEAST,eaveOverhang:v,upturn:f,roofType:"zanjian"});const y=p+v,x=u;t.set(e-y,x-1,n-y,w.LANTERN_GOLD),t.set(e-y,x-2,n-y,w.LANTERN_RED,"emissive"),t.set(e+y,x-1,n-y,w.LANTERN_GOLD),t.set(e+y,x-2,n-y,w.LANTERN_RED,"emissive"),t.set(e-y,x-1,n+y,w.LANTERN_GOLD),t.set(e-y,x-2,n+y,w.LANTERN_RED,"emissive"),t.set(e+y,x-1,n+y,w.LANTERN_GOLD),t.set(e+y,x-2,n+y,w.LANTERN_RED,"emissive"),h=u+3}let m=h;t.fillBox(e-1,m,n-1,e+1,m,n+1,w.BRONZE_GOLD),m+=1;for(let d=0;d<5;d++)t.set(e,m,n,w.LANTERN_GOLD),t.set(e-1,m,n,w.LANTERN_GOLD),t.set(e+1,m,n,w.LANTERN_GOLD),t.set(e,m,n-1,w.LANTERN_GOLD),t.set(e,m,n+1,w.LANTERN_GOLD),m+=1,t.set(e,m,n,w.BRONZE_DARK),m+=1;t.fillBox(e-1,m,n,e+1,m,n,w.LANTERN_GOLD),m+=1,t.fillBox(e-1,m,n-1,e+1,m+1,n+1,w.LANTERN_GLOW,"emissive"),t.set(e,m+2,n,w.FIRE_GLOW,"emissive")}}class _p{constructor(){this.ctx=null}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}strike(){if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,e=216,n=[{ratio:.5,gain:.4,decay:4.5},{ratio:1,gain:.6,decay:4},{ratio:1.2,gain:.5,decay:3.2},{ratio:1.5,gain:.4,decay:2.8},{ratio:2,gain:.35,decay:2.2},{ratio:2.7,gain:.25,decay:1.6},{ratio:3.8,gain:.15,decay:1}],s=this.ctx.createGain();s.gain.setValueAtTime(.35,t),s.connect(this.ctx.destination);for(const r of n){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(e*r.ratio+(Math.random()*.8-.4),t),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(r.gain,t+.008),o.gain.exponentialRampToValueAtTime(1e-4,t+r.decay),a.connect(o),o.connect(s),a.start(t),a.stop(t+r.decay+.1)}}}class Qa{constructor(){this.container=document.getElementById("canvas-container"),this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new Qf,this.camera=new we(45,this.width/this.height,.5,600),this.camera.position.set(68,52,112),this.renderer=new Jf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.controls=new hp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.03,this.controls.minDistance=12,this.controls.maxDistance=240,this.controls.target.set(0,10,-5),this.controls.update(),this.bell=new _p,this.skyLighting=new up(this.scene,this.renderer);try{this.generateComplex()}catch(t){console.error("Failed to generate voxel complex:",t)}finally{setTimeout(()=>{const t=document.getElementById("loading-overlay");t&&t.classList.add("hidden")},300)}this.isTransitioning=!1,this.camStartPos=new P,this.camEndPos=new P,this.targetStartPos=new P,this.targetEndPos=new P,this.transitionProgress=1,this.autoRotate=!1,this.viewPresets={overview:{pos:new P(68,52,112),target:new P(0,10,-5)},gate:{pos:new P(0,15,88),target:new P(0,7,56)},bell_drum:{pos:new P(-42,22,46),target:new P(-28,12,24)},courtyard:{pos:new P(-14,10,32),target:new P(0,6,8)},main_hall:{pos:new P(26,25,22),target:new P(0,16,-15)},side_halls:{pos:new P(0,18,-15),target:new P(-38,10,-15)},pagoda:{pos:new P(22,18,-38),target:new P(0,35,-68)}},this.clock=new lp,this.frameCount=0,this.fpsTimer=0,this.initUIEvents(),window.addEventListener("resize",()=>this.onResize()),this.animate()}generateComplex(){console.time("VoxelGeneration");const t=new ni(.8);dp.build(t,{groundY:0}),fp.build(t,{cx:0,cz:56,groundY:0}),$a.build(t,{cx:-28,cz:24,type:"bell",groundY:0}),$a.build(t,{cx:28,cz:24,type:"drum",groundY:0}),Ja.build(t,{cx:-38,cz:-15,side:"east",groundY:0}),Ja.build(t,{cx:38,cz:-15,side:"west",groundY:0}),pp.build(t,{cx:0,cz:-15,groundY:0}),mp.build(t,{cx:0,cz:-68,groundY:0}),console.timeEnd("VoxelGeneration"),console.time("MeshBuild");const e=t.buildMeshGroup();this.scene.add(e),console.timeEnd("MeshBuild");const n=document.getElementById("stat-voxels"),s=document.getElementById("stat-instances");n&&(n.textContent=e.userData.totalVoxels.toLocaleString()),s&&(s.textContent=e.userData.renderedInstances.toLocaleString())}initUIEvents(){const t=document.querySelectorAll(".building-btn");t.forEach(a=>{a.addEventListener("click",()=>{t.forEach(c=>c.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-target");o&&this.viewPresets[o]&&this.flyTo(this.viewPresets[o].pos,this.viewPresets[o].target)})});const e=document.querySelectorAll("[data-time]");e.forEach(a=>{a.addEventListener("click",()=>{e.forEach(c=>c.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-time");this.skyLighting.applyPreset(o)})});const n=document.getElementById("btn-auto-rotate");n&&n.addEventListener("click",()=>{this.autoRotate=!this.autoRotate,n.classList.toggle("active",this.autoRotate)});const s=document.getElementById("btn-reset-cam");s&&s.addEventListener("click",()=>{const a=document.querySelector('[data-target="overview"]');a&&a.click()});const r=document.getElementById("btn-strike-bell");r&&r.addEventListener("click",()=>{this.bell.strike()})}flyTo(t,e,n=1.2){this.camStartPos.copy(this.camera.position),this.camEndPos.copy(t),this.targetStartPos.copy(this.controls.target),this.targetEndPos.copy(e),this.transitionDuration=n,this.transitionProgress=0,this.isTransitioning=!0,this.autoRotate=!1;const s=document.getElementById("btn-auto-rotate");s&&s.classList.remove("active")}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}animate(){requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta(),e=this.clock.getElapsedTime();if(this.isTransitioning){this.transitionProgress+=t/this.transitionDuration,this.transitionProgress>=1&&(this.transitionProgress=1,this.isTransitioning=!1);const n=this.transitionProgress,s=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;this.camera.position.lerpVectors(this.camStartPos,this.camEndPos,s),this.controls.target.lerpVectors(this.targetStartPos,this.targetEndPos,s)}else if(this.autoRotate){const n=.25*t,s=new P().subVectors(this.camera.position,this.controls.target);s.applyAxisAngle(new P(0,1,0),n),this.camera.position.addVectors(this.controls.target,s)}if(this.controls.update(),this.skyLighting.update(e),this.renderer.render(this.scene,this.camera),this.frameCount++,this.fpsTimer+=t,this.fpsTimer>=.5){const n=Math.round(this.frameCount/this.fpsTimer),s=document.getElementById("stat-fps");s&&(s.textContent=n),this.frameCount=0,this.fpsTimer=0}}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{new Qa}):new Qa;
