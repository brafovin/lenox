(()=>{var ff=Object.defineProperty;var pf=(s,t)=>{for(var e in t)ff(s,e,{get:t[e],enumerable:!0})};var tu=0,jl=1,eu=2;var Sr=1,iu=2,Us=3,Ki=0,ai=1,ci=2,Zn=0,Fs=1,Ql=2,tc=3,ec=4,nu=5;var Jn=100,su=101,ru=102,ou=103,au=104,lu=200,cu=201,hu=202,uu=203,ic=204,nc=205,du=206,fu=207,pu=208,mu=209,gu=210,xu=211,_u=212,yu=213,vu=214,To=0,Ao=1,Ro=2,Es=3,Co=4,Io=5,Po=6,Lo=7,la=0,Mu=1,Su=2,Zi=0,sc=1,rc=2,oc=3,ac=4,lc=5,cc=6,hc=7;var uc=300,$n=301,Bs=302,ca=303,ha=304,No=1e3,Wi=1001,Do=1002,ce=1003,bu=1004;var br=1005;var ri=1006,ua=1007;var fn=1008;var hi=1009,dc=1010,fc=1011,zs=1012,da=1013,Di=1014,Oi=1015,Ui=1016,fa=1017,pa=1018,jn=1020,pc=35902,mc=35899,gc=1021,xc=1022,Fi=1023,cn=1026,pn=1027,_c=1028,ma=1029,In=1030,ga=1031;var xa=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,_a=35840,ya=35841,va=35842,Ma=35843,Sa=36196,ba=37492,Ea=37496,wa=37488,Ta=37489,Rr=37490,Aa=37491,Ra=37808,Ca=37809,Ia=37810,Pa=37811,La=37812,Na=37813,Da=37814,Oa=37815,Ua=37816,Fa=37817,Ba=37818,za=37819,ka=37820,Ga=37821,Ha=36492,Va=36494,Wa=36495,Xa=36283,qa=36284,Cr=36285,Ya=36286;var tr=2300,Oo=2301,bo=2302,Wl=2303,Xl=2400,ql=2401,Yl=2402;var Eu=3200;var Ka=0,wu=1,mn="",xi="srgb",Yn="srgb-linear",er="linear",ae="srgb";var Eo=7680;var Tu=519,Au=512,Ru=513,Cu=514,yc=515,Iu=516,Pu=517,vc=518,Mc=519,Sc=35044;var bc="300 es",Ei=2e3,ws=2001;function mf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lu(){let s=ir("canvas");return s.style.display="block",s}var Sh={},Ts=null;function nr(...s){let t="THREE."+s.shift();Ts?Ts("log",t,...s):console.log(t,...s)}function Nu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=Nu(s);let t="THREE."+s.shift();if(Ts)Ts("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=Nu(s);let t="THREE."+s.shift();if(Ts)Ts("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Qs(...s){let t=s.join(" ");t in Sh||(Sh[t]=!0,Dt(...s))}function Du(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ou={[To]:To,[Ro]:Po,[Co]:Co,[Es]:Io,[Ao]:Ao,[Po]:Ro,[Lo]:Lo,[Io]:Es},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,Uo=180/Math.PI;function Qn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function xf(s,t){return(s%t+t)%t}function vl(s,t,e){return(1-e)*s+e*t}function Uu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Za(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fu(s,t){if(t.constructor===Float32Array)return s;let e=Za(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Bu(s,t){if(t.constructor===Float32Array)return s;let e=Za(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Rc=class Rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;var Vt=Rc,qi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let _=Math.acos(m),v=Math.sin(_);p=Math.sin(p*_)/v,a=Math.sin(a*_)/v,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cc=class Cc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;var k=Cc,Ml=new k,bh=new qi,Ic=class Ic{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],_=n[1],v=n[4],M=n[7],T=n[2],E=n[5],y=n[8];return r[0]=o*x+a*_+l*T,r[3]=o*m+a*v+l*E,r[6]=o*p+a*M+l*y,r[1]=c*x+h*_+d*T,r[4]=c*m+h*v+d*E,r[7]=c*p+h*M+d*y,r[2]=u*x+f*_+g*T,r[5]=u*m+f*v+g*E,r[8]=u*p+f*M+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sl.makeScale(t,e)),this}rotate(t){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sl.makeRotation(-t)),this}translate(t,e){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;var zt=Ic,Sl=new zt,Eh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){let s={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(n.r=ln(n.r),n.g=ln(n.g),n.b=ln(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(n.r=bs(n.r),n.g=bs(n.g),n.b=bs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mn?er:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Yn]:{primaries:t,whitePoint:i,transfer:er,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}var Kt=_f();function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var os,Fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=ir("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=os}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yf=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(bl(n[o].image)):r.push(bl(n[o]))}else r=bl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var vf=0,El=new k,oi=class s extends Xi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Wi,n=Wi,r=ri,o=fn,a=Fi,l=hi,c=s.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Qn(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=uc;oi.DEFAULT_ANISOTROPY=1;var Pc=class Pc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(f+1)/2,T=(p+1)/2,E=(h+u)/4,y=(d+x)/4,w=(g+m)/4;return v>M&&v>T?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):M>T?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=w/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=y/r,n=w/r),this.set(i,n,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pc.prototype.isVector4=!0;var ve=Pc,Bo=class extends Xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new oi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new As(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Bo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sr=class extends oi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends oi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var aa=class aa{constructor(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,Sf)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),yn.crossVectors(i,mi),yn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),yn.crossVectors(i,mi)),yn.normalize(),qr.crossVectors(mi,yn),n[0]=yn.x,n[4]=qr.x,n[8]=mi.x,n[1]=yn.y,n[5]=qr.y,n[9]=mi.y,n[2]=yn.z,n[6]=qr.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],v=i[7],M=i[11],T=i[15],E=n[0],y=n[4],w=n[8],O=n[12],R=n[1],C=n[5],U=n[9],q=n[13],P=n[2],H=n[6],X=n[10],B=n[14],tt=n[3],W=n[7],J=n[11],nt=n[15];return r[0]=o*E+a*R+l*P+c*tt,r[4]=o*y+a*C+l*H+c*W,r[8]=o*w+a*U+l*X+c*J,r[12]=o*O+a*q+l*B+c*nt,r[1]=h*E+d*R+u*P+f*tt,r[5]=h*y+d*C+u*H+f*W,r[9]=h*w+d*U+u*X+f*J,r[13]=h*O+d*q+u*B+f*nt,r[2]=g*E+x*R+m*P+p*tt,r[6]=g*y+x*C+m*H+p*W,r[10]=g*w+x*U+m*X+p*J,r[14]=g*O+x*q+m*B+p*nt,r[3]=_*E+v*R+M*P+T*tt,r[7]=_*y+v*C+M*H+T*W,r[11]=_*w+v*U+M*X+T*J,r[15]=_*O+v*q+M*B+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],_=l*f-c*u,v=a*f-c*d,M=a*u-l*d,T=o*f-c*h,E=o*u-l*h,y=o*d-a*h;return e*(x*_-m*v+p*M)-i*(g*_-m*T+p*E)+n*(g*v-x*T+p*y)-r*(g*M-x*E+m*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=e*a-i*o,v=e*l-n*o,M=e*c-r*o,T=i*l-n*a,E=i*c-r*a,y=n*c-r*l,w=h*x-d*g,O=h*m-u*g,R=h*p-f*g,C=d*m-u*x,U=d*p-f*x,q=u*p-f*m,P=_*q-v*U+M*C+T*R-E*O+y*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(a*q-l*U+c*C)*H,t[1]=(n*U-i*q-r*C)*H,t[2]=(x*y-m*E+p*T)*H,t[3]=(u*E-d*y-f*T)*H,t[4]=(l*R-o*q-c*O)*H,t[5]=(e*q-n*R+r*O)*H,t[6]=(m*M-g*y-p*v)*H,t[7]=(h*y-u*M+f*v)*H,t[8]=(o*U-a*R+c*w)*H,t[9]=(i*R-e*U-r*w)*H,t[10]=(g*E-x*M+p*_)*H,t[11]=(d*M-h*E-f*_)*H,t[12]=(a*O-o*C-l*w)*H,t[13]=(e*C-i*O+n*w)*H,t[14]=(x*v-g*T-m*_)*H,t[15]=(h*T-d*v+u*_)*H,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,_=l*c,v=l*h,M=l*d,T=i.x,E=i.y,y=i.z;return n[0]=(1-(x+p))*T,n[1]=(f+M)*T,n[2]=(g-v)*T,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(u+p))*E,n[6]=(m+_)*E,n[7]=0,n[8]=(g+v)*y,n[9]=(m-_)*y,n[10]=(1-(u+x))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=as.set(n[0],n[1],n[2]).length(),a=as.set(n[4],n[5],n[6]).length(),l=as.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=Ei,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Ei)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ws)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ei,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Ei)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ws)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};aa.prototype.isMatrix4=!0;var ue=aa,as=new k,Ci=new ue,Mf=new k(0,0,0),Sf=new k(1,1,1),yn=new k,qr=new k,mi=new k,Th=new ue,Ah=new qi,hn=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bf=0,Rh=new k,ls=new qi,nn=new ue,Yr=new k,Xs=new k,Ef=new k,wf=new qi,Ch=new k(1,0,0),Ih=new k(0,1,0),Ph=new k(0,0,1),Lh={type:"added"},Tf={type:"removed"},cs={type:"childadded",child:null},wl={type:"childremoved",child:null},He=class s extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new hn,i=new qi,n=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Xs,Yr,this.up):nn.lookAt(Yr,Xs,this.up),this.quaternion.setFromRotationMatrix(nn),n&&(nn.extractRotation(n.matrixWorld),ls.setFromRotationMatrix(nn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),cs.child=t,this.dispatchEvent(cs),cs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tf),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new k(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Af={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Tl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=xf(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Tl(o,r,t+1/3),this.g=Tl(o,r,t),this.b=Tl(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,n),this}setStyle(t,e=xi){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){let i=zu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Kt.workingToColorSpace(Qe.copy(this),t),Math.round(Qt(Qe.r*255,0,255))*65536+Math.round(Qt(Qe.g*255,0,255))*256+Math.round(Qt(Qe.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Qe.copy(this),e);let i=Qe.r,n=Qe.g,r=Qe.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=xi){Kt.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,i=Qe.g,n=Qe.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Kr);let i=vl(vn.h,Kr.h,e),n=vl(vn.s,Kr.s,e),r=vl(vn.l,Kr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new It;It.NAMES=zu;var or=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ii=new k,sn=new k,Al=new k,rn=new k,hs=new k,us=new k,Nh=new k,Rl=new k,Cl=new k,Il=new k,Pl=new ve,Ll=new ve,Nl=new ve,Vi=class s{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ii.subVectors(t,e),n.cross(Ii);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ii.subVectors(n,e),sn.subVectors(i,e),Al.subVectors(t,e);let o=Ii.dot(Ii),a=Ii.dot(sn),l=Ii.dot(Al),c=sn.dot(sn),h=sn.dot(Al),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(a,rn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Pl.setScalar(0),Ll.setScalar(0),Nl.setScalar(0),Pl.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,i),Nl.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Pl,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(t,e,i,n){return Ii.subVectors(i,e),sn.subVectors(t,e),Ii.cross(sn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ii.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;hs.subVectors(n,i),us.subVectors(r,i),Rl.subVectors(t,i);let l=hs.dot(Rl),c=us.dot(Rl);if(l<=0&&c<=0)return e.copy(i);Cl.subVectors(t,n);let h=hs.dot(Cl),d=us.dot(Cl);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(hs,o);Il.subVectors(t,r);let f=hs.dot(Il),g=us.dot(Il);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(us,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Nh.subVectors(r,n),a=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(Nh,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},En=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Jr.subVectors(this.max,qs),ds.subVectors(t.a,qs),fs.subVectors(t.b,qs),ps.subVectors(t.c,qs),Mn.subVectors(fs,ds),Sn.subVectors(ps,fs),Vn.subVectors(ds,ps);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Vn.z,Vn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Vn.z,0,-Vn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Vn.y,Vn.x,0];return!Dl(e,ds,fs,ps,Jr)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,ds,fs,ps,Jr))?!1:($r.crossVectors(Mn,Sn),e=[$r.x,$r.y,$r.z],Dl(e,ds,fs,ps,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},on=[new k,new k,new k,new k,new k,new k,new k,new k],Pi=new k,Zr=new En,ds=new k,fs=new k,ps=new k,Mn=new k,Sn=new k,Vn=new k,qs=new k,Jr=new k,$r=new k,Wn=new k;function Dl(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Wn.fromArray(s,r);let a=n.x*Math.abs(Wn.x)+n.y*Math.abs(Wn.y)+n.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=i.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new k,jr=new Vt,Rf=0,Ye=class extends Xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sc,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?Za(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Fu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Bu(t,this.array)}};var ar=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ne=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cf=new En,Ys=new k,Ol=new k,wn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Cf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ys,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Ol)),this.expandByPoint(Ys.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},If=0,bi=new ue,Ul=new He,ms=new k,gi=new En,Ks=new En,Ge=new k,ei=class s extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?lr:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,i){return bi.makeTranslation(t,e,i),this.applyMatrix4(bi),this}scale(t,e,i){return bi.makeScale(t,e,i),this.applyMatrix4(bi),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(gi.min,Ks.min),gi.expandByPoint(Ge),Ge.addVectors(gi.max,Ks.max),gi.expandByPoint(Ge)):(gi.expandByPoint(Ks.min),gi.expandByPoint(Ks.max))}gi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Ge.add(ms)),n=Math.max(n,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)a[O]=new k,l[O]=new k;let h=new k,d=new k,u=new k,f=new Vt,g=new Vt,x=new Vt,m=new k,p=new k;function _(O,R,C){c[O]=c[R]=c[C]=1,h.fromBufferAttribute(i,O),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,R),x.fromBufferAttribute(r,C),d.sub(h),u.sub(h),g.sub(f),x.sub(f);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(U),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(U),a[O].add(m),a[R].add(m),a[C].add(m),l[O].add(p),l[R].add(p),l[C].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let O=0,R=v.length;O<R;++O){let C=v[O],U=C.start,q=C.count;for(let P=U,H=U+q;P<H;P+=3)_(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new k,T=new k,E=new k,y=new k;function w(O){E.fromBufferAttribute(n,O),y.copy(E);let R=a[O];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(y,R);let U=T.dot(l[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,U)}for(let O=0,R=i.count;O<R;++O)c[O]&&w(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ye(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Dh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Dh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Dh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Qn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var si=new k,cr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Za(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Fu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Bu(t,this.data.array)}},Fl=new k,Pf=new k,Lf=new zt,Li=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Fl.subVectors(i,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Fl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lf.getNormalMatrix(t),n=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nf=0,Ni=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Fs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=nc,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Is=class extends Ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,Zs=new k,xs=new k,_s=new k,ys=new Vt,Js=new Vt,ku=new ue,Qr=new k,$s=new k,to=new k,Oh=new Vt,Bl=new Vt,Uh=new Vt,hr=class extends He{constructor(t=new Is){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ei;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ko(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new cr(i,3,0,!1)),gs.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;eo(Qr.set(-.5,-.5,0),_s,o,xs,n,r),eo($s.set(.5,-.5,0),_s,o,xs,n,r),eo(to.set(.5,.5,0),_s,o,xs,n,r),Oh.set(0,0),Bl.set(1,0),Uh.set(1,1);let a=t.ray.intersectTriangle(Qr,$s,to,!1,Zs);if(a===null&&(eo($s.set(-.5,.5,0),_s,o,xs,n,r),Bl.set(0,1),a=t.ray.intersectTriangle(Qr,to,$s,!1,Zs),a===null))return;let l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:Vi.getInterpolation(Zs,Qr,$s,to,Oh,Bl,Uh,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function eo(s,t,e,i,n,r){ys.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Js.x=r*ys.x-n*ys.y,Js.y=n*ys.x+r*ys.y):Js.copy(ys),s.copy(t),s.x+=Js.x,s.y+=Js.y,s.applyMatrix4(ku)}var an=new k,zl=new k,io=new k,no=new k,Ps=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),no.copy(this.origin).sub(zl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=no.dot(this.direction),l=-no.dot(io),c=no.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(zl).addScaledVector(io,u),f}intersectSphere(t,e){if(t.radius<0)return null;an.subVectors(t.center,this.origin);let i=an.dot(this.direction),n=an.dot(an)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=i.x-o.x,_=i.y-o.y,v=i.z-o.z,M=Math.abs(l),T=Math.abs(c),E=Math.abs(h),y,w,O,R,C,U,q,P,H,X,B,tt;if(M>=T&&M>=E?(O=l,U=d,H=g,tt=p,l>=0?(y=c,w=h,R=u,C=f,q=x,P=m,X=_,B=v):(y=h,w=c,R=f,C=u,q=m,P=x,X=v,B=_)):T>=E?(O=c,U=u,H=x,tt=_,c>=0?(y=h,w=l,R=f,C=d,q=m,P=g,X=v,B=p):(y=l,w=h,R=d,C=f,q=g,P=m,X=p,B=v)):(O=h,U=f,H=m,tt=v,h>=0?(y=l,w=c,R=d,C=u,q=g,P=x,X=p,B=_):(y=c,w=l,R=u,C=d,q=x,P=g,X=_,B=p)),O===0)return null;let W=y/O,J=w/O,nt=1/O,Et=R-W*U,Bt=C-J*U,$=q-W*H,gt=P-J*H,St=X-W*tt,At=B-J*tt,xt=St*gt-At*$,Ot=Et*At-Bt*St,we=$*Bt-gt*Et;if(n){if(xt<0||Ot<0||we<0)return null}else if((xt<0||Ot<0||we<0)&&(xt>0||Ot>0||we>0))return null;let Lt=xt+Ot+we;if(Lt===0)return null;let Zt=nt*(xt*U+Ot*H+we*tt);return(Lt>0?Zt<0:Zt>0)?null:this.at(Zt/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fh=new ue,Xn=new Ps,so=new wn,Bh=new k,ro=new k,oo=new k,ao=new k,kl=new k,lo=new k,zh=new k,co=new k,ie=class extends He{constructor(t=new ei,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(kl.fromBufferAttribute(d,t),o?lo.addScaledVector(kl,h):lo.addScaledVector(kl.sub(e),h))}e.add(lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(so.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(so,Bh)===null||Xn.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,T=v;M<T;M+=3){let E=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);n=ho(this,p,t,i,c,h,d,E,y,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);n=ho(this,o,t,i,c,h,d,_,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,T=v;M<T;M+=3){let E=M,y=M+1,w=M+2;n=ho(this,p,t,i,c,h,d,E,y,w),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,v=m+1,M=m+2;n=ho(this,o,t,i,c,h,d,_,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Df(s,t,e,i,n,r,o,a){let l;if(t.side===ai?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Ki,a),l===null)return null;co.copy(a),co.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:s}}function ho(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,ro),s.getVertexPosition(l,oo),s.getVertexPosition(c,ao);let h=Df(s,t,e,i,ro,oo,ao,zh);if(h){let d=new k;Vi.getBarycoord(zh,ro,oo,ao,d),n&&(h.uv=Vi.getInterpolatedAttribute(n,a,l,c,d,new Vt)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,a,l,c,d,new Vt)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};Vi.getNormal(ro,oo,ao,u.normal),h.face=u,h.barycoord=d}return h}var Go=class extends oi{constructor(t=null,e=1,i=1,n,r,o,a,l,c=ce,h=ce,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=new wn,Of=new Vt(.5,.5),uo=new k,Tn=class{constructor(t=new Li,e=new Li,i=new Li,n=new Li,r=new Li,o=new Li){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],v=r[13],M=r[14],T=r[15];if(n[0].setComponents(c-o,f-h,p-g,T-_).normalize(),n[1].setComponents(c+o,f+h,p+g,T+_).normalize(),n[2].setComponents(c+a,f+d,p+x,T+v).normalize(),n[3].setComponents(c-a,f-d,p-x,T-v).normalize(),i)n[4].setComponents(l,u,m,M).normalize(),n[5].setComponents(c-l,f-u,p-m,T-M).normalize();else if(n[4].setComponents(c-l,f-u,p-m,T-M).normalize(),e===Ei)n[5].setComponents(c+l,f+u,p+m,T+M).normalize();else if(e===ws)n[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);let e=Of.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(uo.x=n.normal.x>0?t.max.x:t.min.x,uo.y=n.normal.y>0?t.max.y:t.min.y,uo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kh=new ue,Ho=class s{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];kh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Tn),i[n].setFromProjectionMatrix(kh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Tn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ls=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new k,Wo=new k,Gh=new ue,js=new Ps,fo=new wn,Gl=new k,Hh=new k,Xo=class extends He{constructor(t=new ei,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Vo.fromBufferAttribute(e,n-1),Wo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Vo.distanceTo(Wo);t.setAttribute("lineDistance",new Ne(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(n),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;Gh.copy(n).invert(),js.copy(t.ray).applyMatrix4(Gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),v=po(this,t,js,l,p,_,x);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=po(this,t,js,l,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=po(this,t,js,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=po(this,t,js,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function po(s,t,e,i,n,r,o){let a=s.geometry.attributes.position;if(Vo.fromBufferAttribute(a,n),Wo.fromBufferAttribute(a,r),e.distanceSqToSegment(Vo,Wo,Gl,Hh)>i)return;Gl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gl);if(!(c<t.near||c>t.far))return{distance:c,point:Hh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Vh=new k,Wh=new k,ur=class extends Xo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Vh.fromBufferAttribute(e,n),Wh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vh.distanceTo(Wh);t.setAttribute("lineDistance",new Ne(i,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ns=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xh=new ue,Kl=new Ps,mo=new wn,go=new k,dr=class extends He{constructor(t=new ei,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(n),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;Xh.copy(n).invert(),Kl.copy(t.ray).applyMatrix4(Xh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=c.getX(g);go.fromBufferAttribute(d,m),qh(go,m,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)go.fromBufferAttribute(d,g),qh(go,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qh(s,t,e,i,n,r,o){let a=Kl.distanceSqToPoint(s);if(a<e){let l=new k;Kl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fr=class extends oi{constructor(t=[],e=$n,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yi=class extends oi{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var un=class extends oi{constructor(t,e,i=Di,n,r,o,a=ce,l=ce,c,h=cn,d=1){if(h!==cn&&h!==pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pr=class extends un{constructor(t,e=Di,i=$n,n,r,o=ce,a=ce,l,c=cn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mr=class extends oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class s extends ei{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(d,2));function g(x,m,p,_,v,M,T,E,y,w,O){let R=M/y,C=T/w,U=M/2,q=T/2,P=E/2,H=y+1,X=w+1,B=0,tt=0,W=new k;for(let J=0;J<X;J++){let nt=J*C-q;for(let Et=0;Et<H;Et++){let Bt=Et*R-U;W[x]=Bt*_,W[m]=nt*v,W[p]=P,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(Et/y),d.push(1-J/w),B+=1}}for(let J=0;J<w;J++)for(let nt=0;nt<y;nt++){let Et=u+nt+H*J,Bt=u+nt+H*(J+1),$=u+(nt+1)+H*(J+1),gt=u+(nt+1)+H*J;l.push(Et,Bt,gt),l.push(Bt,$,gt),tt+=6}a.addGroup(f,tt,O),f+=tt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xo=new k,_o=new k,Hl=new k,yo=new Vi,gr=class extends ei{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),r=Math.cos(wo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=yo;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),yo.getNormal(Hl),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let v=(_+1)%3,M=d[_],T=d[v],E=yo[h[_]],y=yo[h[v]],w=`${M}_${T}`,O=`${T}_${M}`,R=u.get(O);R?(Hl.dot(R.normal)<=r&&(f.push(E.x,E.y,E.z),f.push(y.x,y.y,y.z)),u.set(O,null)):u.has(w)||u.set(w,{index0:c[_],index1:c[v],normal:Hl.clone()})}}for(let g of u.values())if(g){let{index0:x,index1:m}=g;xo.fromBufferAttribute(a,x),_o.fromBufferAttribute(a,m),f.push(xo.x,xo.y,xo.z),f.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new Ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var dn=class s extends ei{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-o;for(let v=0;v<c;v++){let M=v*d-r;g.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,M=_+c*(p+1),T=_+1+c*(p+1),E=_+1+c*p;f.push(v,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function ts(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Yh(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Yh(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ii(s){let t={};for(let e=0;e<s.length;e++){let i=ts(s[e]);for(let n in i)t[n]=i[n]}return t}function Yh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Uf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ec(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Gu={clone:ts,merge:ii},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new It().setHex(n.value);break;case"v2":this.uniforms[i].value=new Vt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new k().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(n.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qo=class extends wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Kn=class extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=la,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Yo=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ko=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function vo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var An=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zo=class extends An{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=t,a=2*e-i;break;case Yl:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:o=t,l=2*i-e;break;case Yl:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+_*o[c+T]+v*o[l+T]+M*o[d+T];return r}},Jo=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},$o=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},jo=class extends An{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(n-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=f*u+g*2,_=d[p],v=d[p+1],M=t*u+g*2,T=h[M],E=h[M+1],y=kf(i,e,_,T,n);r[g]=Hu(y,x,v,E,m)}return r}};function Hu(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function zf(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function kf(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=Hu(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=zf(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),vo(t.settings)&&(i.settings={inTangents:vs(t.settings.inTangents,Array),outTangents:vs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new jo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case Oo:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break;case Wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;vo(this.settings)&&(Kh(this.settings.inTangents,t),Kh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;vo(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ut("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&gf(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,vo(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Kh(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Zh(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Oo;var Rn=class extends yi{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=tr;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends yi{constructor(t,e,i,n){super(t,e,i,n)}};Qo.prototype.ValueTypeName="color";var ta=class extends yi{constructor(t,e,i,n){super(t,e,i,n)}};ta.prototype.ValueTypeName="number";var ea=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},xr=class extends yi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends yi{constructor(t,e,i){super(t,e,i)}};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=tr;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends yi{constructor(t,e,i,n){super(t,e,i,n)}};ia.prototype.ValueTypeName="vector";var na=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vu=new na,sa=class{constructor(t){this.manager=t!==void 0?t:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Vl=new ue,Jh=new k,$h=new k,ra=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tn,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Vl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mo=new k,So=new qi,Hi=new k,yr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,So,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Mo,So,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new k,jh=new Vt,Qh=new Vt,ti=class extends yr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Qh),e.subVectors(Qh,jh)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vr=class extends yr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zl=class extends ra{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ds=class extends _r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ms=-90,Ss=1,Os=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ti(Ms,Ss,t,e);n.layers=this.layers,this.add(n);let r=new ti(Ms,Ss,t,e);r.layers=this.layers,this.add(r);let o=new ti(Ms,Ss,t,e);o.layers=this.layers,this.add(o);let a=new ti(Ms,Ss,t,e);a.layers=this.layers,this.add(a);let l=new ti(Ms,Ss,t,e);l.layers=this.layers,this.add(l);let c=new ti(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},oa=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var wc="\\[\\]\\.:\\/",Gf=new RegExp("["+wc+"]","g"),Tc="[^"+wc+"]",Hf="[^"+wc.replace("\\.","")+"]",Vf=/((?:WC+[\/:])*)/.source.replace("WC",Tc),Wf=/(WCOD+)?/.source.replace("WCOD",Hf),Xf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),qf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Yf=new RegExp("^"+Vf+Wf+Xf+qf+"$"),Kf=["material","materials","bones","map"],Jl=class{constructor(t,e,i){let n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(t){let e=Yf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Kf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Jl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);var Lc=class Lc{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Lc.prototype.isMatrix2=!0;var $l=Lc;function Ac(s,t,e,i){let n=Zf(i);switch(e){case gc:return s*t;case _c:return s*t/n.components*n.byteLength;case ma:return s*t/n.components*n.byteLength;case In:return s*t*2/n.components*n.byteLength;case ga:return s*t*2/n.components*n.byteLength;case xc:return s*t*3/n.components*n.byteLength;case Fi:return s*t*4/n.components*n.byteLength;case xa:return s*t*4/n.components*n.byteLength;case Er:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(s,16)*Math.max(t,8)/4;case _a:case va:return Math.max(s,8)*Math.max(t,8)/2;case Sa:case ba:case wa:case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Rr:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Va:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xa:case qa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cr:case Ya:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zf(s){switch(s){case hi:case dc:return{byteLength:1,components:1};case zs:case fc:case Ui:return{byteLength:2,components:1};case fa:case pa:return{byteLength:2,components:4};case Di:case da:case Oi:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ud(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $f(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,x0=`#define NORMAL
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
}`,_0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y0=`#define PHONG
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
}`,v0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,b0=`#define TOON
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
}`,E0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,w0=`uniform float size;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,C0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,I0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:jf,alphahash_pars_fragment:Qf,alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:ip,alphatest_pars_fragment:np,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:op,batching_vertex:ap,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:_p,color_pars_vertex:yp,color_vertex:vp,common:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:Tp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Vp,envmap_vertex:Np,fog_vertex:Dp,fog_pars_vertex:Op,fog_fragment:Up,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:$p,lights_fragment_end:jp,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:nm,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:om,map_particle_pars_fragment:am,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:xm,normal_pars_vertex:_m,normal_vertex:ym,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Em,opaque_fragment:wm,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Im,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Om,shadowmask_pars_fragment:Um,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:km,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Km,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:$m,background_frag:jm,backgroundCube_vert:Qm,backgroundCube_frag:t0,cube_vert:e0,cube_frag:i0,depth_vert:n0,depth_frag:s0,distance_vert:r0,distance_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:x0,meshnormal_frag:_0,meshphong_vert:y0,meshphong_frag:v0,meshphysical_vert:M0,meshphysical_frag:S0,meshtoon_vert:b0,meshtoon_frag:E0,points_vert:w0,points_frag:T0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:I0},vt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},$i={basic:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ii([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ii([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new It(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ii([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ii([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ii([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ii([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ii([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ii([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:ii([vt.common,vt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:ii([vt.lights,vt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$i.physical={uniforms:ii([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Ja={r:0,b:0,g:0},P0=new ue,dd=new zt;dd.set(-1,0,0,0,1,0,0,0,1);function L0(s,t,e,i,n,r){let o=new It(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let M=_.backgroundBlurriness>0;v=t.get(v,M)}return v}function g(_){let v=!1,M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,v){let M=f(v);M&&M.isCubeTexture?(c===void 0&&(c=new ie(new Me(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ts($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dd),c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ie(new dn(2,2),new wi({name:"BackgroundMaterial",uniforms:ts($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(Ja,Ec(s)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:x,dispose:p}}function N0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(C,U,q,P,H){let X=!1,B=d(C,P,q,U);r!==B&&(r=B,c(r.object)),X=f(C,P,q,H),X&&g(C,P,q,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(C,U,q,P),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function d(C,U,q,P){let H=P.wireframe===!0,X=i[U.id];X===void 0&&(X={},i[U.id]=X);let B=C.isInstancedMesh===!0?C.id:0,tt=X[B];tt===void 0&&(tt={},X[B]=tt);let W=tt[q.id];W===void 0&&(W={},tt[q.id]=W);let J=W[H];return J===void 0&&(J=u(l()),W[H]=J),J}function u(C){let U=[],q=[],P=[];for(let H=0;H<e;H++)U[H]=0,q[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,U,q,P){let H=r.attributes,X=U.attributes,B=0,tt=q.getAttributes();for(let W in tt)if(tt[W].location>=0){let nt=H[W],Et=X[W];if(Et===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),nt===void 0||nt.attribute!==Et||Et&&nt.data!==Et.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(C,U,q,P){let H={},X=U.attributes,B=0,tt=q.getAttributes();for(let W in tt)if(tt[W].location>=0){let nt=X[W];nt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor));let Et={};Et.attribute=nt,nt&&nt.data&&(Et.data=nt.data),H[W]=Et,B++}r.attributes=H,r.attributesNum=B,r.index=P}function x(){let C=r.newAttributes;for(let U=0,q=C.length;U<q;U++)C[U]=0}function m(C){p(C,0)}function p(C,U){let q=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;q[C]=1,P[C]===0&&(s.enableVertexAttribArray(C),P[C]=1),H[C]!==U&&(s.vertexAttribDivisor(C,U),H[C]=U)}function _(){let C=r.newAttributes,U=r.enabledAttributes;for(let q=0,P=U.length;q<P;q++)U[q]!==C[q]&&(s.disableVertexAttribArray(q),U[q]=0)}function v(C,U,q,P,H,X,B){B===!0?s.vertexAttribIPointer(C,U,q,H,X):s.vertexAttribPointer(C,U,q,P,H,X)}function M(C,U,q,P){x();let H=P.attributes,X=q.getAttributes(),B=U.defaultAttributeValues;for(let tt in X){let W=X[tt];if(W.location>=0){let J=H[tt];if(J===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){let nt=J.normalized,Et=J.itemSize,Bt=t.get(J);if(Bt===void 0)continue;let $=Bt.buffer,gt=Bt.type,St=Bt.bytesPerElement,At=gt===s.INT||gt===s.UNSIGNED_INT||J.gpuType===da;if(J.isInterleavedBufferAttribute){let xt=J.data,Ot=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,we=J.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Lt=0;Lt<W.locationSize;Lt++)p(W.location+Lt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Lt=0;Lt<W.locationSize;Lt++)m(W.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Lt=0;Lt<W.locationSize;Lt++)v(W.location+Lt,Et/W.locationSize,gt,nt,Ot*St,(we+Et/W.locationSize*Lt)*St,At)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<W.locationSize;xt++)p(W.location+xt,J.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let xt=0;xt<W.locationSize;xt++)v(W.location+xt,Et/W.locationSize,gt,nt,Et*St,Et/W.locationSize*xt*St,At)}}else if(B!==void 0){let nt=B[tt];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(W.location,nt);break;case 3:s.vertexAttrib3fv(W.location,nt);break;case 4:s.vertexAttrib4fv(W.location,nt);break;default:s.vertexAttrib1fv(W.location,nt)}}}}_()}function T(){O();for(let C in i){let U=i[C];for(let q in U){let P=U[q];for(let H in P){let X=P[H];for(let B in X)h(X[B].object),delete X[B];delete P[H]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let U=i[C.id];for(let q in U){let P=U[q];for(let H in P){let X=P[H];for(let B in X)h(X[B].object),delete X[B];delete P[H]}}delete i[C.id]}function y(C){for(let U in i){let q=i[U];for(let P in q){let H=q[P];if(H[C.id]===void 0)continue;let X=H[C.id];for(let B in X)h(X[B].object),delete X[B];delete H[C.id]}}}function w(C){for(let U in i){let q=i[U],P=C.isInstancedMesh===!0?C.id:0,H=q[P];if(H!==void 0){for(let X in H){let B=H[X];for(let tt in B)h(B[tt].object),delete B[tt];delete H[X]}delete q[P],Object.keys(q).length===0&&delete i[U]}}}function O(){R(),o=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:O,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function D0(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function O0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==Fi&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==hi&&y!==Oi&&!w&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:T,samples:E}}function U0(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Li,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,M=p.clippingState||null;l.value=M,M=h(g,u,v,f);for(let T=0;T!==v;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Lr=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new fr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Me(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:Zn});r.uniforms.tEquirect.value=e;let o=new ie(n,r),a=e.minFilter;return e.minFilter===fn&&(e.minFilter=ri),new Os(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Wu=256,F0=3,B0=20,fd=256,pd=16,z0=3,k0=new k,G0=new It,ja=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Os(1,10,null),this._boxMesh=new ie(new Me(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=k0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(G0));let m=new Os(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wu,Uu(t))}_fromTexture(t,e){t.mapping===$n||t.mapping===Bs?this._setSize(t.image.length===0?Wu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Xu(t,!1,!1),i=Math.log2(t)-F0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===$n||t.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=H0(),this._integrationMaterial=V0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/pd);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-z0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(fd*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=W0());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Xu(s,t,e){return new Lr(s,{minFilter:fn,generateMipmaps:t,type:Ui,colorSpace:Yn,depthBuffer:e})}function Nr(s,t,e){return new wi({name:s,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:ai,blending:Zn,depthTest:!1,depthWrite:!1})}function H0(){return Nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function V0(){return Nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function W0(){return Nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${B0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qu(){return Nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yu(){return Nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function X0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ca||f===ha)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Lr(g.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===ca||f===ha,x=f===$n||f===Bs;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ja(s)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new ja(s)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ca?u.mapping=$n:f===ha&&(u.mapping=Bs),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function q0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Qs("WebGLRenderer: "+i+" extension not supported."),n}}}function Y0(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?lr:ar,M=new v(Math.ceil(_/3)*6,1),T=M.array;if(x!==null){let y=x.array;p=x.version;for(let w=0,O=0;w<_;w+=3){let R=y[w+0],C=y[w+1],U=y[w+2];T[O++]=R,T[O++]=C,T[O++]=C,T[O++]=U,T[O++]=U,T[O++]=R}}else{p=m.version;for(let y=0,w=0;y<_;y+=3){let O=y+0,R=y+1,C=y+2;T[w++]=O,T[w++]=R,T[w++]=R,T[w++]=C,T[w++]=C,T[w++]=O}}M.version=p;let E=r.get(g);E&&t.remove(E),r.set(g,M)}function u(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function K0(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Z0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function J0(s,t,e){let i=new WeakMap,n=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let O=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*T*4*d),y=new sr(E,M,T,d);y.type=Oi,y.needsUpdate=!0;let w=v*4;for(let R=0;R<d;R++){let C=m[R],U=p[R],q=_[R],P=M*T*4*R;for(let H=0;H<C.count;H++){let X=H*w;f===!0&&(n.fromBufferAttribute(C,H),E[P+X+0]=n.x,E[P+X+1]=n.y,E[P+X+2]=n.z,E[P+X+3]=0),g===!0&&(n.fromBufferAttribute(U,H),E[P+X+4]=n.x,E[P+X+5]=n.y,E[P+X+6]=n.z,E[P+X+7]=0),x===!0&&(n.fromBufferAttribute(q,H),E[P+X+8]=n.x,E[P+X+9]=n.y,E[P+X+10]=n.z,E[P+X+11]=q.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new Vt(M,T)},i.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function $0(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var j0={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Q0(s,t,e,i,n,r){let o=new _i(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ei;h.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ne([0,2,0,0,2,0],2));let d=new qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ie(h,d),f=new vr(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,_=null,v=[],M=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let y=0;y<v.length;y++){let w=v[y];w.setSize&&w.setSize(T,E)}},this.setEffects=function(T){v=T,M=v.length>0&&v[0].isRenderPass===!0;let E=o.width,y=o.height;v.length>0&&a===null&&(a=new _i(E,y,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new _i(E,y,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let w=n===!0&&v.some(O=>O.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new un(E,y),r===!0&&(c.format=pn,c.type=jn)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let O=0;O<v.length;O++){let R=v[O];R.setSize&&R.setSize(E,y),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===Zi&&v.length===0)return!1;if(_=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&T.setRenderTarget(o),p=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(T,E){T.toneMapping=p,m=!0;let y=o,w=a;for(let O=0;O<v.length;O++){let R=v[O];R.enabled!==!1&&(R.render(T,w,y,E),R.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,d.defines={},Kt.getTransfer(g)===ae&&(d.defines.SRGB_TRANSFER="");let O=j0[x];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(_),T.render(u,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var md=new oi,gd=new un(1,1),xd=new pr(1),_d=new sr,yd=new zo,vd=new fr,Ku=[],Zu=[],Ju=new Float32Array(16),$u=new Float32Array(9),ju=new Float32Array(4);function Gs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Ku[n];if(r===void 0&&(r=new Float32Array(n),Ku[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function tl(s,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function tg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function sg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;ju.set(i),s.uniformMatrix2fv(this.addr,!1,ju),Oe(e,i)}}function rg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;$u.set(i),s.uniformMatrix3fv(this.addr,!1,$u),Oe(e,i)}}function og(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(De(e,i))return;Ju.set(i),s.uniformMatrix4fv(this.addr,!1,Ju),Oe(e,i)}}function ag(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function el(s){return s.version===0&&(s.compareFunction=Mc,s.needsUpdate=!0),s}function mg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=el(gd):r=md,e.setTexture2D(t||r,n)}function gg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||yd,n)}function xg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=el(xd):r=vd,e.setTextureCube(t||r,n)}function _g(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||_d,n)}function yg(s){switch(s){case 5126:return tg;case 35664:return eg;case 35665:return ig;case 35666:return ng;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(s,t){s.uniform1fv(this.addr,t)}function Mg(s,t){let e=Gs(t,this.size,2);s.uniform2fv(this.addr,e)}function Sg(s,t){let e=Gs(t,this.size,3);s.uniform3fv(this.addr,e)}function bg(s,t){let e=Gs(t,this.size,4);s.uniform4fv(this.addr,e)}function Eg(s,t){let e=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wg(s,t){let e=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tg(s,t){let e=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ag(s,t){s.uniform1iv(this.addr,t)}function Rg(s,t){s.uniform2iv(this.addr,t)}function Cg(s,t){s.uniform3iv(this.addr,t)}function Ig(s,t){s.uniform4iv(this.addr,t)}function Pg(s,t){s.uniform1uiv(this.addr,t)}function Lg(s,t){s.uniform2uiv(this.addr,t)}function Ng(s,t){s.uniform3uiv(this.addr,t)}function Dg(s,t){s.uniform4uiv(this.addr,t)}function Og(s,t,e){let i=this.cache,n=t.length,r=tl(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=el(gd):o=md;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function Ug(s,t,e){let i=this.cache,n=t.length,r=tl(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||yd,r[o])}function Fg(s,t,e){let i=this.cache,n=t.length,r=tl(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=el(xd):o=vd;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function Bg(s,t,e){let i=this.cache,n=t.length,r=tl(e,n);De(i,r)||(s.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||_d,r[o])}function zg(s){switch(s){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Ig;case 5125:return Pg;case 36294:return Lg;case 36295:return Ng;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}var Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Uc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Qu(s,t){s.seq.push(t),s.map[t.id]=t}function kg(s,t,e){let i=s.name,n=i.length;for(Nc.lastIndex=0;;){let r=Nc.exec(i),o=Nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Qu(e,c===void 0?new Oc(a,s,t):new Uc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Fc(a),Qu(e,d)),e=d}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);kg(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function td(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Gg=37297,Hg=0;function Vg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ed=new zt;function Wg(s){Kt._getMatrix(ed,Kt.workingColorSpace,s);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case er:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function id(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vg(s.getShaderSource(t),a)}else return r}function Xg(s,t){let e=Wg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qg={[sc]:"Linear",[rc]:"Reinhard",[oc]:"Cineon",[ac]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function Yg(s,t){let e=qg[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $a=new k;function Kg(){Kt.getLuminanceCoefficients($a);let s=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Jg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $g(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Pr(s){return s!==""}function nd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(s){return s.replace(jg,Qg)}function Qg(s,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bc(e)}var tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(tx,ex)}function ex(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function od(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ix={[Sr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function nx(s){return ix[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sx={[Bs]:"ENVMAP_MODE_REFRACTION"};function rx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ox={[la]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function ax(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ox[s.combine]||"ENVMAP_BLENDING_NONE"}function lx(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=rx(e),d=ax(e),u=Zg(e),f=Jg(r),g=n.createProgram(),x,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Pr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(x=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Bc(o),o=nd(o,e),o=sd(o,e),a=Bc(a),a=nd(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+x+o,v=p+m+a,M=td(n,n.VERTEX_SHADER,_),T=td(n,n.FRAGMENT_SHADER,v);n.attachShader(g,M),n.attachShader(g,T),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(R){if(s.debug.checkShaderErrors){let C=n.getProgramInfoLog(g)||"",U=n.getShaderInfoLog(M)||"",q=n.getShaderInfoLog(T)||"",P=C.trim(),H=U.trim(),X=q.trim(),B=!0,tt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,M,T);else{let W=id(n,M,"vertex"),J=id(n,T,"fragment");Ut("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+J)}else P!==""?Dt("WebGLProgram: Program Info Log:",P):(H===""||X==="")&&(tt=!1);tt&&(R.diagnostics={runnable:B,programLog:P,vertexShader:{log:H,prefix:x},fragmentShader:{log:X,prefix:m}})}n.deleteShader(M),n.deleteShader(T),y=new ks(n,g),w=$g(n,g)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(g,Gg)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var cx=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function hx(s){return s===In||s===Rr||s===Cr}function ux(s,t,e,i,n,r){let o=new rr,a=new zc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,O,R,C,U){let q=R.fog,P=C.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=t.get(y.envMap||H,X),tt=u[y.type],W=i.precision;y.precision!==null&&(W=i.getMaxPrecision(y.precision),W!==y.precision&&Dt("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,nt=J!==void 0?J.length:0,Et=0;P.morphAttributes.position!==void 0&&(Et=1),P.morphAttributes.normal!==void 0&&(Et=2),P.morphAttributes.color!==void 0&&(Et=3);let Bt,$,gt,St;if(tt){let yt=$i[tt];Bt=yt.vertexShader,$=yt.fragmentShader}else{Bt=y.vertexShader,$=y.fragmentShader;let yt=a.getVertexShaderStage(y),le=a.getFragmentShaderStage(y);a.update(y,yt,le),gt=yt.id,St=le.id}let At=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Ot=C.isInstancedMesh===!0,we=C.isBatchedMesh===!0,Lt=!!y.map,Zt=!!y.matcap,jt=!!B,Xt=jt&&B.isPMREMTexture===!0,Ce=!!y.aoMap,Se=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,fe=!!y.normalMap,Be=!!y.displacementMap,pe=!!y.emissiveMap,di=!!y.metalnessMap,fi=!!y.roughnessMap,li=y.anisotropy>0,D=y.clearcoat>0,pi=y.diffuseRoughness>0,_e=y.dispersion>0,ye=y.retroreflectivity>0,mt=y.iridescence>0,Le=y.sheen>0,Nt=y.transmission>0,kt=li&&!!y.anisotropyMap,A=D&&!!y.clearcoatMap,S=D&&!!y.clearcoatNormalMap,z=D&&!!y.clearcoatRoughnessMap,st=pi&&!!y.diffuseRoughnessMap,et=mt&&!!y.iridescenceMap,at=mt&&!!y.iridescenceThicknessMap,dt=Le&&!!y.sheenColorMap,Z=Le&&!!y.sheenRoughnessMap,j=!!y.specularMap,ct=!!y.specularColorMap,I=!!y.specularIntensityMap,Q=Nt&&!!y.transmissionMap,Y=Nt&&!!y.thicknessMap,ht=!!y.gradientMap,ot=!!y.alphaMap,lt=y.alphaTest>0,Ct=!!y.alphaHash,qt=!!y.extensions,rt=Zi;y.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(rt=s.toneMapping);let Pt=Xt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Wt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Bt,fragmentShader:$,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:we,batchingColor:we&&C._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&C.instanceColor!==null,instancingMorph:Ot&&C.morphTexture!==null,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:Zt,envMap:jt,envMapMode:jt&&B.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Pt.length-1:null,envMapSize:Xt?Pt[0].width:null,aoMap:Ce,lightMap:Se,bumpMap:Xe,normalMap:fe,displacementMap:Be,emissiveMap:pe,normalMapObjectSpace:fe&&y.normalMapType===wu,normalMapTangentSpace:fe&&y.normalMapType===Ka,packedNormalMap:fe&&y.normalMapType===Ka&&hx(y.normalMap.format),metalnessMap:di,roughnessMap:fi,anisotropy:li,anisotropyMap:kt,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:pi,diffuseRoughnessMap:st,dispersion:_e,retroreflection:ye,iridescence:mt,iridescenceMap:et,iridescenceThicknessMap:at,sheen:Le,sheenColorMap:dt,sheenRoughnessMap:Z,specularMap:j,specularColorMap:ct,specularIntensityMap:I,transmission:Nt,transmissionMap:Q,thicknessMap:Y,gradientMap:ht,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:lt,alphaHash:Ct,combine:y.combine,mapUv:Lt&&f(y.map.channel),aoMapUv:Ce&&f(y.aoMap.channel),lightMapUv:Se&&f(y.lightMap.channel),bumpMapUv:Xe&&f(y.bumpMap.channel),normalMapUv:fe&&f(y.normalMap.channel),displacementMapUv:Be&&f(y.displacementMap.channel),emissiveMapUv:pe&&f(y.emissiveMap.channel),metalnessMapUv:di&&f(y.metalnessMap.channel),roughnessMapUv:fi&&f(y.roughnessMap.channel),anisotropyMapUv:kt&&f(y.anisotropyMap.channel),clearcoatMapUv:A&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:ct&&f(y.specularColorMap.channel),specularIntensityMapUv:I&&f(y.specularIntensityMap.channel),transmissionMapUv:Q&&f(y.transmissionMap.channel),thicknessMapUv:Y&&f(y.thicknessMap.channel),alphaMapUv:ot&&f(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fe||li),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(Lt||ot),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ae,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(y.emissiveMap.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ci,flipSided:y.side===ai,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||we)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function x(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)w.push(O),w.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(m(w,y),p(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let w=u[y.type],O;if(w){let R=$i[w];O=Gu.clone(R.uniforms)}else O=y.uniforms;return O}function v(y,w){let O=h.get(w);return O!==void 0?++O.usedTimes:(O=new lx(s,w,y,n),c.push(O),h.set(w,O)),O}function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function dx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function fx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ld(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=p),t++,_}function l(u,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let v=a(u,f,g,x,m,p);g.transmission>0?i.push(v):g.transparent===!0?n.push(v):e.push(v)}function c(u,f,g,x,m,p){let _=a(u,f,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?n.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||fx),i.length>1&&i.sort(f||ad),n.length>1&&n.sort(f||ad)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function px(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new ld,s.set(i,[o])):n>=r.length?(o=new ld,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new It};break;case"SpotLight":e={position:new k,direction:new k,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function gx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var xx=0;function _x(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yx(s){let t=new mx,e=gx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let n=new k,r=new ue,o=new ue;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,v=0,M=0,T=0,E=0,y=0,w=0,O=0,R=0;c.sort(_x);for(let U=0,q=c.length;U<q;U++){let P=c[U],H=P.color,X=P.intensity,B=P.distance,tt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===In?tt=P.shadow.map.texture:tt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*X,d+=H.g*X,u+=H.b*X;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],X);R++}else if(P.isSunLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,nt=e.get(P);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=tt;let Et=J.getViewportCount();for(let Bt=0;Bt<Et;Bt++)i.sunShadowMatrix[x+Bt]=J.getMatrix(Bt),i.sunShadowCascade[x+Bt]=J._cascadeData[Bt];x+=Et,g++}i.sun[f]=W,f++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,nt=e.get(P);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=W,m++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(X),W.distance=B,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;let J=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,J.updateMatrices(P),P.castShadow&&O++),i.spotLightMatrix[_]=J.matrix,P.castShadow){let nt=e.get(P);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.spotShadow[_]=nt,i.spotShadowMap[_]=tt,y++}_++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(H).multiplyScalar(X),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=W,v++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,nt=e.get(P);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=tt,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=W,p++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(X),W.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[M]=W,M++}}v>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==v||C.hemiLength!==M||C.numSunShadows!==g||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+w-O,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=_,C.rectAreaLength=v,C.hemiLength=M,C.numSunShadows=g,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=R,i.version=xx++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let M=c[_];if(M.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),u++}else if(M.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function cd(s){let t=new yx(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vx(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new cd(s),t.set(n,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ex=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],hd=new ue,Ir=new k,Dc=new k;function wx(s,t,e){let i=new Tn,n=new Vt,r=new Vt,o=new ve,a=new Yo,l=new Ko,c={},h=e.maxTextureSize,d={[Ki]:ai,[ai]:Ki,[ci]:ci},u=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ei;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ie(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(E,y,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===iu&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let O=s.getRenderTarget(),R=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Zn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=p!==this.type;q&&y.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=E.length;P<H;P++){let X=E[P],B=X.shadow;if(B===void 0){Dt("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let tt=B.getFrameExtents();n.multiply(tt),r.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/tt.x),n.x=r.x*tt.x,B.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/tt.y),n.y=r.y*tt.y,B.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Us){if(X.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new _i(n.x,n.y,{format:In,type:Ui,minFilter:ri,magFilter:ri,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new un(n.x,n.y,Oi),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=cn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ce,B.map.depthTexture.magFilter=ce}else X.isPointLight?(B.map=new Lr(n.x),B.map.depthTexture=new pr(n.x,Di)):(B.map=new _i(n.x,n.y),B.map.depthTexture=new un(n.x,n.y,Di)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=cn,this.type===Sr?(B.map.depthTexture.compareFunction=W?vc:yc,B.map.depthTexture.minFilter=ri,B.map.depthTexture.magFilter=ri):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ce,B.map.depthTexture.magFilter=ce);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let J=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();X.isPointLight!==!0&&B.updateMatrices(X,w);let nt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let Et=0;Et<J;Et++){let Bt=B.getCamera(Et);if(X.isPointLight){let $=B.camera,gt=B.matrix,St=X.distance||$.far;St!==$.far&&($.far=St,$.updateProjectionMatrix()),Ir.setFromMatrixPosition(X.matrixWorld),$.position.copy(Ir),Dc.copy($.position),Dc.add(bx[Et]),$.up.copy(Ex[Et]),$.lookAt(Dc),$.updateMatrixWorld(),gt.makeTranslation(-Ir.x,-Ir.y,-Ir.z),hd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(hd,$.coordinateSystem,$.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(B.map),s.clear());let $=B.getViewport(Et);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),U.viewport(o)}i=B.getFrustum(Et),M(y,w,Bt,X,nt,this.type)}B.isPointLightShadow!==!0&&this.type===Us&&_(B,w),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(O,R,C)};function _(E,y){let w=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new _i(n.x,n.y,{format:In,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,w,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,w,f,x,null)}function v(E,y,w,O){let R=null,C=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)R=C;else if(R=w.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let U=R.uuid,q=y.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let H=P[q];H===void 0&&(H=R.clone(),P[q]=H,y.addEventListener("dispose",T)),R=H}if(R.visible=y.visible,R.wireframe=y.wireframe,O===Us?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:d[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=s.properties.get(R);U.light=w}return R}function M(E,y,w,O,R,C){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Us)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let P=t.update(E),H=E.material;if(Array.isArray(H)){let X=P.groups;for(let B=0,tt=X.length;B<tt;B++){let W=X[B],J=H[W.materialIndex];if(J&&J.visible){let nt=v(E,J,O,C);E.onBeforeShadow(s,E,y,w,P,nt,W),s.renderBufferDirect(w,null,P,nt,E,W),E.onAfterShadow(s,E,y,w,P,nt,W)}}}else if(H.visible){let X=v(E,H,O,C);E.onBeforeShadow(s,E,y,w,P,X,null),s.renderBufferDirect(w,null,P,X,E,null),E.onAfterShadow(s,E,y,w,P,X,null)}}let q=E.children;for(let P=0,H=q.length;P<H;P++)M(q[P],y,w,O,R,C)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let O=c[w],R=E.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function Tx(s,t){function e(){let I=!1,Q=new ve,Y=null,ht=new ve(0,0,0,0);return{setMask:function(ot){Y!==ot&&!I&&(s.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){I=ot},setClear:function(ot,lt,Ct,qt,rt){rt===!0&&(ot*=qt,lt*=qt,Ct*=qt),Q.set(ot,lt,Ct,qt),ht.equals(Q)===!1&&(s.clearColor(ot,lt,Ct,qt),ht.copy(Q))},reset:function(){I=!1,Y=null,ht.set(-1,0,0,0)}}}function i(){let I=!1,Q=!1,Y=null,ht=null,ot=null;return{setReversed:function(lt){if(Q!==lt){let Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Q=lt;let qt=ot;ot=null,this.setClear(qt)}},getReversed:function(){return Q},setTest:function(lt){lt?xt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!I&&(s.depthMask(lt),Y=lt)},setFunc:function(lt){if(Q&&(lt=Ou[lt]),ht!==lt){switch(lt){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Io:s.depthFunc(s.GEQUAL);break;case Po:s.depthFunc(s.GREATER);break;case Lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=lt}},setLocked:function(lt){I=lt},setClear:function(lt){ot!==lt&&(ot=lt,Q&&(lt=1-lt),s.clearDepth(lt))},reset:function(){I=!1,Y=null,ht=null,ot=null,Q=!1}}}function n(){let I=!1,Q=null,Y=null,ht=null,ot=null,lt=null,Ct=null,qt=null,rt=null;return{setTest:function(Pt){I||(Pt?xt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(Pt){Q!==Pt&&!I&&(s.stencilMask(Pt),Q=Pt)},setFunc:function(Pt,Wt,yt){(Y!==Pt||ht!==Wt||ot!==yt)&&(s.stencilFunc(Pt,Wt,yt),Y=Pt,ht=Wt,ot=yt)},setOp:function(Pt,Wt,yt){(lt!==Pt||Ct!==Wt||qt!==yt)&&(s.stencilOp(Pt,Wt,yt),lt=Pt,Ct=Wt,qt=yt)},setLocked:function(Pt){I=Pt},setClear:function(Pt){rt!==Pt&&(s.clearStencil(Pt),rt=Pt)},reset:function(){I=!1,Q=null,Y=null,ht=null,ot=null,lt=null,Ct=null,qt=null,rt=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,v=null,M=null,T=null,E=null,y=null,w=new It(0,0,0),O=0,R=!1,C=null,U=null,q=null,P=null,H=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,tt=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=tt>=2);let J=null,nt={},Et=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),$=new ve().fromArray(Et),gt=new ve().fromArray(Bt);function St(I,Q,Y,ht){let ot=new Uint8Array(4),lt=s.createTexture();s.bindTexture(I,lt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<Y;Ct++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(Q+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return lt}let At={};At[s.TEXTURE_2D]=St(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=St(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=St(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=St(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(s.DEPTH_TEST),o.setFunc(Es),Xe(!1),fe(jl),xt(s.CULL_FACE),Ce(Zn);function xt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ot(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function we(I,Q){return u[I]!==Q?(s.bindFramebuffer(I,Q),u[I]=Q,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Q),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Lt(I,Q){let Y=g,ht=!1;if(I){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let ot=I.textures;if(Y.length!==ot.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ct=ot.length;lt<Ct;lt++)Y[lt]=s.COLOR_ATTACHMENT0+lt;Y.length=ot.length,ht=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ht=!0);ht&&s.drawBuffers(Y)}function Zt(I){return x!==I?(s.useProgram(I),x=I,!0):!1}let jt={[Jn]:s.FUNC_ADD,[su]:s.FUNC_SUBTRACT,[ru]:s.FUNC_REVERSE_SUBTRACT};jt[ou]=s.MIN,jt[au]=s.MAX;let Xt={[lu]:s.ZERO,[cu]:s.ONE,[hu]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[gu]:s.SRC_ALPHA_SATURATE,[pu]:s.DST_COLOR,[du]:s.DST_ALPHA,[uu]:s.ONE_MINUS_SRC_COLOR,[nc]:s.ONE_MINUS_SRC_ALPHA,[mu]:s.ONE_MINUS_DST_COLOR,[fu]:s.ONE_MINUS_DST_ALPHA,[xu]:s.CONSTANT_COLOR,[_u]:s.ONE_MINUS_CONSTANT_COLOR,[yu]:s.CONSTANT_ALPHA,[vu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,Q,Y,ht,ot,lt,Ct,qt,rt,Pt){if(I===Zn){m===!0&&(Ot(s.BLEND),m=!1);return}if(m===!1&&(xt(s.BLEND),m=!0),I!==nu){if(I!==p||Pt!==R){if((_!==Jn||T!==Jn)&&(s.blendEquation(s.FUNC_ADD),_=Jn,T=Jn),Pt)switch(I){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ql:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tc:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",I);break}v=null,M=null,E=null,y=null,w.set(0,0,0),O=0,p=I,R=Pt}return}ot=ot||Q,lt=lt||Y,Ct=Ct||ht,(Q!==_||ot!==T)&&(s.blendEquationSeparate(jt[Q],jt[ot]),_=Q,T=ot),(Y!==v||ht!==M||lt!==E||Ct!==y)&&(s.blendFuncSeparate(Xt[Y],Xt[ht],Xt[lt],Xt[Ct]),v=Y,M=ht,E=lt,y=Ct),(qt.equals(w)===!1||rt!==O)&&(s.blendColor(qt.r,qt.g,qt.b,rt),w.copy(qt),O=rt),p=I,R=!1}function Se(I,Q){I.side===ci?Ot(s.CULL_FACE):xt(s.CULL_FACE);let Y=I.side===ai;Q&&(Y=!Y),Xe(Y),I.blending===Fs&&I.transparent===!1?Ce(Zn):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let ht=I.stencilWrite;a.setTest(ht),ht&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){C!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),C=I)}function fe(I){I!==tu?(xt(s.CULL_FACE),I!==U&&(I===jl?s.cullFace(s.BACK):I===eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),U=I}function Be(I){I!==q&&(B&&s.lineWidth(I),q=I)}function pe(I,Q,Y){I?(xt(s.POLYGON_OFFSET_FILL),(P!==Q||H!==Y)&&(P=Q,H=Y,o.getReversed()&&(Q=-Q,Y=-Y),s.polygonOffset(Q,Y))):Ot(s.POLYGON_OFFSET_FILL)}function di(I){I?xt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function fi(I){I===void 0&&(I=s.TEXTURE0+X-1),J!==I&&(s.activeTexture(I),J=I)}function li(I,Q,Y){Y===void 0&&(J===null?Y=s.TEXTURE0+X-1:Y=J);let ht=nt[Y];ht===void 0&&(ht={type:void 0,texture:void 0},nt[Y]=ht),(ht.type!==I||ht.texture!==Q)&&(J!==Y&&(s.activeTexture(Y),J=Y),s.bindTexture(I,Q||At[I]),ht.type=I,ht.texture=Q)}function D(){let I=nt[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pi(){try{s.compressedTexImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function _e(){try{s.compressedTexImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function ye(){try{s.texSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function mt(){try{s.texSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function Le(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function kt(){try{s.texStorage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function A(){try{s.texStorage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function S(){try{s.texImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function z(){try{s.texImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function st(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function et(I,Q){d[I]!==Q&&(s.pixelStorei(I,Q),d[I]=Q)}function at(I){$.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),$.copy(I))}function dt(I){gt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),gt.copy(I))}function Z(I,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let ht=Y.get(I);ht===void 0&&(ht=s.getUniformBlockIndex(Q,I.name),s.uniformBlockBinding(Q,ht,ht),Y.set(I,ht))}function j(I,Q,Y){let ot=c.get(Q).get(I);l[ot]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,ot,Y),l[ot]=Y)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,nt={},u={},l={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,v=null,M=null,T=null,E=null,y=null,w=new It(0,0,0),O=0,R=!1,C=null,U=null,q=null,P=null,H=null,$.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Ot,bindFramebuffer:we,drawBuffers:Lt,useProgram:Zt,setBlending:Ce,setMaterial:Se,setFlipSided:Xe,setCullFace:fe,setLineWidth:Be,setPolygonOffset:pe,setScissorTest:di,activeTexture:fi,bindTexture:li,unbindTexture:D,compressedTexImage2D:pi,compressedTexImage3D:_e,texImage2D:S,texImage3D:z,pixelStorei:et,getParameter:st,updateUBOMapping:Z,uniformBlockBinding:j,texStorage2D:kt,texStorage3D:A,texSubImage2D:ye,texSubImage3D:mt,compressedTexSubImage2D:Le,compressedTexSubImage3D:Nt,scissor:at,viewport:dt,reset:ct}}function Ax(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,S){return m?new OffscreenCanvas(A,S):ir("canvas")}function _(A,S,z){let st=1,et=kt(A);if((et.width>z||et.height>z)&&(st=z/Math.max(et.width,et.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let at=Math.floor(st*et.width),dt=Math.floor(st*et.height);u===void 0&&(u=p(at,dt));let Z=S?p(at,dt):u;return Z.width=at,Z.height=dt,Z.getContext("2d").drawImage(A,0,0,at,dt),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+at+"x"+dt+")."),Z}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function v(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,S,z,st,et,at=!1){if(A!==null){if(s[A]!==void 0)return s[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let dt;st&&(dt=t.get("EXT_texture_norm16"),dt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),z===s.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),z===s.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),z===s.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),S===s.RGBA){let j=at?er:Kt.getTransfer(et);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=j===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),z===s.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(A,S){let z;return A?S===null||S===Di||S===jn?z=s.DEPTH24_STENCIL8:S===Oi?z=s.DEPTH32F_STENCIL8:S===zs&&(z=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===jn?z=s.DEPTH_COMPONENT24:S===Oi?z=s.DEPTH_COMPONENT32F:S===zs&&(z=s.DEPTH_COMPONENT16),z}function w(A,S){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==ce&&A.minFilter!==ri?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function O(A){let S=new WeakRef(A);i.get(A).__ref=S,g.add(S),x.register(A,S,S)}function R(A){let S=i.get(A).__ref;S!==void 0&&(g.delete(S),x.unregister(S))}function C(A){q(A.target)}function U(A){P(A.target)}function q(A){A.removeEventListener("dispose",C),R(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",U),R(A),tt(A)}function H(){for(let A of g){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):q(S))}g.clear(),d.clear()}function X(A){let S=i.get(A);if(S.__webglInit===void 0)return;let z=A.source,st=f.get(z);if(st){let et=st[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&B(A),Object.keys(st).length===0&&f.delete(z)}i.remove(A)}function B(A){let S=i.get(A);s.deleteTexture(S.__webglTexture);let z=A.source,st=f.get(z);delete st[S.__cacheKey],o.memory.textures--}function tt(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&q(z),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let at=0;at<S.__webglFramebuffer[et].length;at++)s.deleteFramebuffer(S.__webglFramebuffer[et][at]);else s.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)s.deleteFramebuffer(S.__webglFramebuffer[et]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let st=A.textures;for(let et=0,at=st.length;et<at;et++){let dt=i.get(st[et]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(st[et])}i.remove(A)}let W=0;function J(){W=0}function nt(){return W}function Et(A){W=A}function Bt(){let A=W;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,A}function $(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function gt(A,S){let z=i.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let st=A.image;if(st===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function St(A,S){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function At(A,S){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Se(z,A,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function xt(A,S){let z=i.get(A);if(A.version>0&&z.__version!==A.version){Xe(z,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let Ot={[No]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},we={[ce]:s.NEAREST,[bu]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[ri]:s.LINEAR,[ua]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},Lt={[Au]:s.NEVER,[Mc]:s.ALWAYS,[Ru]:s.LESS,[yc]:s.LEQUAL,[Cu]:s.EQUAL,[vc]:s.GEQUAL,[Iu]:s.GREATER,[Pu]:s.NOTEQUAL};function Zt(A,S){if(S.type===Oi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ri||S.magFilter===ua||S.magFilter===br||S.magFilter===fn||S.minFilter===ri||S.minFilter===ua||S.minFilter===br||S.minFilter===fn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ot[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ot[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ot[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,we[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ce||S.minFilter!==br&&S.minFilter!==fn||S.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function jt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C),O(S));let st=S.source,et=f.get(st);et===void 0&&(et={},f.set(st,et));let at=$(S);if(at!==A.__cacheKey){et[at]===void 0&&(et[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[at].usedTimes++;let dt=et[A.__cacheKey];dt!==void 0&&(et[A.__cacheKey].usedTimes--,dt.usedTimes===0&&B(S)),A.__cacheKey=at,A.__webglTexture=et[at].texture}return z}function Xt(A,S,z){return Math.floor(Math.floor(A/z)/S)}function Ce(A,S,z,st){let at=A.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,st,S.data);else{at.sort((I,Q)=>I.start-Q.start);let dt=0;for(let I=1;I<at.length;I++){let Q=at[dt],Y=at[I],ht=Q.start+Q.count,ot=Xt(Y.start,S.width,4),lt=Xt(Q.start,S.width,4);Y.start<=ht+1&&ot===lt&&Xt(Y.start+Y.count-1,S.width,4)===ot?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++dt,at[dt]=Y)}at.length=dt+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let I=0,Q=at.length;I<Q;I++){let Y=at[I],ht=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),lt=ht%S.width,Ct=Math.floor(ht/S.width),qt=ot,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(s.TEXTURE_2D,0,lt,Ct,qt,rt,z,st,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function Se(A,S,z){let st=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=s.TEXTURE_3D);let et=jt(A,S),at=S.source;e.bindTexture(st,A.__webglTexture,s.TEXTURE0+z);let dt=i.get(at);if(at.version!==dt.__version||et===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let rt=Kt.getPrimaries(Kt.workingColorSpace),Pt=S.colorSpace===mn?null:Kt.getPrimaries(S.colorSpace),Wt=S.colorSpace===mn||rt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let j=_(S.image,!1,n.maxTextureSize);j=Nt(S,j);let ct=r.convert(S.format,S.colorSpace),I=r.convert(S.type),Q=E(S.internalFormat,ct,I,S.normalized,S.colorSpace,S.isVideoTexture);Zt(st,S);let Y,ht=S.mipmaps,ot=S.isVideoTexture!==!0,lt=dt.__version===void 0||et===!0,Ct=at.dataReady,qt=w(S,j);if(S.isDepthTexture)Q=y(S.format===pn,S.type),lt&&(ot?e.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ct,I,null));else if(S.isDataTexture)if(ht.length>0){ot&&lt&&e.texStorage2D(s.TEXTURE_2D,qt,Q,ht[0].width,ht[0].height);for(let rt=0,Pt=ht.length;rt<Pt;rt++)Y=ht[rt],ot?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,I,Y.data):e.texImage2D(s.TEXTURE_2D,rt,Q,Y.width,Y.height,0,ct,I,Y.data);S.generateMipmaps=!1}else ot?(lt&&e.texStorage2D(s.TEXTURE_2D,qt,Q,j.width,j.height),Ct&&Ce(S,j,ct,I)):e.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,ct,I,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Q,ht[0].width,ht[0].height,j.depth);for(let rt=0,Pt=ht.length;rt<Pt;rt++)if(Y=ht[rt],S.format!==Fi)if(ct!==null)if(ot){if(Ct)if(S.layerUpdates.size>0){let Wt=Ac(Y.width,Y.height,S.format,S.type);for(let yt of S.layerUpdates){let le=Y.data.subarray(yt*Wt/Y.data.BYTES_PER_ELEMENT,(yt+1)*Wt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,yt,Y.width,Y.height,1,ct,le)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Y.width,Y.height,j.depth,ct,Y.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Q,Y.width,Y.height,j.depth,0,Y.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Y.width,Y.height,j.depth,ct,I,Y.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Q,Y.width,Y.height,j.depth,0,ct,I,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ot&&lt&&e.texStorage2D(s.TEXTURE_2D,qt,Q,ht[0].width,ht[0].height);for(let rt=0,Pt=ht.length;rt<Pt;rt++)Y=ht[rt],S.format!==Fi?ct!==null?ot?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Q,Y.width,Y.height,0,Y.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Y.width,Y.height,ct,I,Y.data):e.texImage2D(s.TEXTURE_2D,rt,Q,Y.width,Y.height,0,ct,I,Y.data)}else if(S.isDataArrayTexture)if(ot){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Q,j.width,j.height,j.depth),Ct)if(S.layerUpdates.size>0){let rt=Ac(j.width,j.height,S.format,S.type);for(let Pt of S.layerUpdates){let Wt=j.data.subarray(Pt*rt/j.data.BYTES_PER_ELEMENT,(Pt+1)*rt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pt,j.width,j.height,1,ct,I,Wt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,I,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ct,I,j.data);else if(S.isData3DTexture)ot?(lt&&e.texStorage3D(s.TEXTURE_3D,qt,Q,j.width,j.height,j.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,I,j.data)):e.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ct,I,j.data);else if(S.isFramebufferTexture){if(lt)if(ot)e.texStorage2D(s.TEXTURE_2D,qt,Q,j.width,j.height);else{let rt=j.width,Pt=j.height;for(let Wt=0;Wt<qt;Wt++)e.texImage2D(s.TEXTURE_2D,Wt,Q,rt,Pt,0,ct,I,null),rt>>=1,Pt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),j.parentNode!==rt){rt.appendChild(j),d.add(S),rt.onpaint=Pt=>{let Wt=Pt.changedElements;for(let yt of d)Wt.includes(yt.image)&&(yt.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Wt=s.RGBA,yt=s.RGBA,le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Wt,yt,le,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(ot&&lt){let rt=kt(ht[0]);e.texStorage2D(s.TEXTURE_2D,qt,Q,rt.width,rt.height)}for(let rt=0,Pt=ht.length;rt<Pt;rt++)Y=ht[rt],ot?Ct&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ct,I,Y):e.texImage2D(s.TEXTURE_2D,rt,Q,ct,I,Y);S.generateMipmaps=!1}else if(ot){if(lt){let rt=kt(j);e.texStorage2D(s.TEXTURE_2D,qt,Q,rt.width,rt.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,I,j)}else e.texImage2D(s.TEXTURE_2D,0,Q,ct,I,j);v(S)&&S.mipmapsAutoUpdate===!0&&M(st),dt.__version=at.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Xe(A,S,z){if(S.image.length!==6)return;let st=jt(A,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let at=i.get(et);if(et.version!==at.__version||st===!0){e.activeTexture(s.TEXTURE0+z);let dt=Kt.getPrimaries(Kt.workingColorSpace),Z=S.colorSpace===mn?null:Kt.getPrimaries(S.colorSpace),j=S.colorSpace===mn||dt===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let yt=0;yt<6;yt++)!ct&&!I?Q[yt]=_(S.image[yt],!0,n.maxCubemapSize):Q[yt]=I?S.image[yt].image:S.image[yt],Q[yt]=Nt(S,Q[yt]);let Y=Q[0],ht=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),lt=E(S.internalFormat,ht,ot,S.normalized,S.colorSpace),Ct=S.isVideoTexture!==!0,qt=at.__version===void 0||st===!0,rt=et.dataReady,Pt=w(S,Y);Zt(s.TEXTURE_CUBE_MAP,S);let Wt;if(S.isDepthTexture){if(lt=y(S.format===pn,S.type),qt)if(Ct)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,lt,Y.width,Y.height);else for(let yt=0;yt<6;yt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,Y.width,Y.height,0,ht,ot,null)}else if(ct){Ct&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,Y.width,Y.height);for(let yt=0;yt<6;yt++){Wt=Q[yt].mipmaps;for(let le=0;le<Wt.length;le++){let ze=Wt[le];S.format!==Fi?ht!==null?Ct?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,ze.width,ze.height,ht,ze.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,lt,ze.width,ze.height,0,ze.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,ze.width,ze.height,ht,ot,ze.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,lt,ze.width,ze.height,0,ht,ot,ze.data)}}}else{if(Wt=S.mipmaps,Ct&&qt){Wt.length>0&&Pt++;let yt=kt(Q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,lt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(I){Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Q[yt].width,Q[yt].height,ht,ot,Q[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,Q[yt].width,Q[yt].height,0,ht,ot,Q[yt].data);for(let le=0;le<Wt.length;le++){let xn=Wt[le].image[yt].image;Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,xn.width,xn.height,ht,ot,xn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,lt,xn.width,xn.height,0,ht,ot,xn.data)}}else{Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ht,ot,Q[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,ht,ot,Q[yt]);for(let le=0;le<Wt.length;le++){let ze=Wt[le];Ct?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,ht,ot,ze.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,lt,ht,ot,ze.image[yt])}}}v(S)&&S.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),at.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,z,st,et,at){let dt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),j=E(z.internalFormat,dt,Z,z.normalized,z.colorSpace),ct=i.get(S),I=i.get(z);if(I.__renderTarget=S,!ct.__hasExternalTextures){let Q=Math.max(1,S.width>>at),Y=Math.max(1,S.height>>at);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,at,j,Q,Y,S.depth,0,dt,Z,null):e.texImage2D(et,at,j,Q,Y,0,dt,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,et,I.__webglTexture,0,ye(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,et,I.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(A,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let st=S.depthTexture,et=st&&st.isDepthTexture?st.type:null,at=y(S.stencilBuffer,et),dt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(S),at,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(S),at,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,at,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,A)}else{let st=S.textures;for(let et=0;et<st.length;et++){let at=st[et],dt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),j=E(at.internalFormat,dt,Z,at.normalized,at.colorSpace);mt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(S),j,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(S),j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(A,S,z){let st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(S.depthTexture);et.__renderTarget=S;let at=st?S.depthTexture.image[0]:S.depthTexture.image;(!et.__webglTexture||at.width!==S.width||at.height!==S.height)&&(at.width=S.width,at.height=S.height,S.depthTexture.needsUpdate=!0),st?xt(S.depthTexture,0):gt(S.depthTexture,0);let dt=et.__webglTexture,Z=ye(S),j=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,ct=S.depthTexture.format===pn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===cn)mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,j,dt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ct,j,dt,0);else if(S.depthTexture.format===pn)mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,j,dt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ct,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function di(A){let S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",et)};st.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)pe(S.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?pe(S.__webglFramebuffer[0],A,0):pe(S.__webglFramebuffer,A,0);else if(z){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=s.createRenderbuffer(),Be(S.__webglDepthbuffer[st],A,!1);else{let et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Be(S.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fi(A,S,z){let st=i.get(A);S!==void 0&&fe(st.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&di(A)}function li(A){let S=A.texture,z=i.get(A),st=i.get(S);A.addEventListener("dispose",U),O(A);let et=A.textures,at=A.isWebGLCubeRenderTarget===!0,dt=et.length>1;if(dt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=S.version,o.memory.textures++),at){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let j=0;j<S.mipmaps.length;j++)z.__webglFramebuffer[Z][j]=s.createFramebuffer()}else z.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[Z]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(dt)for(let Z=0,j=et.length;Z<j;Z++){let ct=i.get(et[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&mt(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<et.length;Z++){let j=et[Z];z.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let ct=r.convert(j.format,j.colorSpace),I=r.convert(j.type),Q=E(j.internalFormat,ct,I,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Y=ye(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)fe(z.__webglFramebuffer[Z][j],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else fe(z.__webglFramebuffer[Z],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);v(S)?M(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Z=0,j=et.length;Z<j;Z++){let ct=et[Z],I=i.get(ct),Q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),Zt(Q,ct),fe(z.__webglFramebuffer,A,ct,s.COLOR_ATTACHMENT0+Z,Q,0),v(ct)&&M(Q)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,st.__webglTexture),Zt(Z,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)fe(z.__webglFramebuffer[j],A,S,s.COLOR_ATTACHMENT0,Z,j);else fe(z.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,Z,0);v(S)?M(Z):S.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&di(A)}function D(A){let S=A.textures;for(let z=0,st=S.length;z<st;z++){let et=S[z];if(v(et)&&et.mipmapsAutoUpdate===!0){let at=T(A),dt=i.get(et).__webglTexture;e.bindTexture(at,dt),M(at),e.unbindTexture()}}}let pi=[];function _e(A){if(A.samples>0){if(mt(A)===!1){let S=A.textures,z=A.width,st=A.height,et=s.COLOR_BUFFER_BIT,at=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(A),Z=S.length>1;if(Z)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(S[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,z,st,0,0,z,st,et,s.NEAREST),l===!0&&(pi.length=0,pi.push(s.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&pi.push(at),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pi))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let I=i.get(S[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,I,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ye(A){return Math.min(n.maxSamples,A.samples)}function mt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Nt(A,S){let z=A.colorSpace,st=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yn&&z!==mn&&(Kt.getTransfer(z)===ae?(st!==Fi||et!==hi)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",z)),S}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=J,this.getTextureUnits=nt,this.setTextureUnits=Et,this.setTexture2D=gt,this.setTexture2DArray=St,this.setTexture3D=At,this.setTextureCube=xt,this.rebindTextures=fi,this.setupRenderTarget=li,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=di,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=mt,this.dispose=H}function Rx(s,t){function e(i,n=mn){let r,o=Kt.getTransfer(n);if(i===hi)return s.UNSIGNED_BYTE;if(i===fa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===pa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===mc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===dc)return s.BYTE;if(i===fc)return s.SHORT;if(i===zs)return s.UNSIGNED_SHORT;if(i===da)return s.INT;if(i===Di)return s.UNSIGNED_INT;if(i===Oi)return s.FLOAT;if(i===Ui)return s.HALF_FLOAT;if(i===gc)return s.ALPHA;if(i===xc)return s.RGB;if(i===Fi)return s.RGBA;if(i===cn)return s.DEPTH_COMPONENT;if(i===pn)return s.DEPTH_STENCIL;if(i===_c)return s.RED;if(i===ma)return s.RED_INTEGER;if(i===In)return s.RG;if(i===ga)return s.RG_INTEGER;if(i===xa)return s.RGBA_INTEGER;if(i===Er||i===wr||i===Tr||i===Ar)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_a||i===ya||i===va||i===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Rr||i===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sa||i===ba)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wa)return r.COMPRESSED_R11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Rr)return r.COMPRESSED_RG11_EAC;if(i===Aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ra||i===Ca||i===Ia||i===Pa||i===La||i===Na||i===Da||i===Oa||i===Ua||i===Fa||i===Ba||i===za||i===ka||i===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===Va||i===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ha)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===qa||i===Cr||i===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new wi({vertexShader:Cx,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends Xi{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Gc,p={},_=e.getContextAttributes(),v=null,M=null,T=[],E=[],y=new Vt,w=null,O=null,R=new ti;R.viewport=new ve;let C=new ti;C.viewport=new ve;let U=[R,C],q=new oa,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=T[$];return gt===void 0&&(gt=new Rs,T[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=T[$];return gt===void 0&&(gt=new Rs,T[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=T[$];return gt===void 0&&(gt=new Rs,T[$]=gt),gt.getHandSpace()};function X($){let gt=E.indexOf($.inputSource);if(gt===-1)return;let St=T[gt];St!==void 0&&(St.update($.inputSource,$.frame,c||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",tt);for(let $=0;$<T.length;$++){let gt=E[$];gt!==null&&(E[$]=null,T[$].disconnect(gt))}P=null,H=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(v),f=null,u=null,d=null,n=null,M=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(y.width,y.height,!1),O!==null){let $=O.camera;$.fov=O.fov,$.zoom=O.zoom,$.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(v=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",B),n.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,At=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=_.stencil?pn:cn,At=_.stencil?jn:Di);let Ot={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new _i(u.textureWidth,u.textureHeight,{format:Fi,type:hi,depthTexture:new un(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,St),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new _i(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let gt=0;gt<$.removed.length;gt++){let St=$.removed[gt],At=E.indexOf(St);At>=0&&(E[At]=null,T[At].disconnect(St))}for(let gt=0;gt<$.added.length;gt++){let St=$.added[gt],At=E.indexOf(St);if(At===-1){for(let Ot=0;Ot<T.length;Ot++)if(Ot>=E.length){E.push(St),At=Ot;break}else if(E[Ot]===null){E[Ot]=St,At=Ot;break}if(At===-1)break}let xt=T[At];xt&&xt.connect(St)}}function W($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let gt=$.near,St=$.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),q.near=C.near=R.near=gt,q.far=C.far=R.far=St,(P!==q.near||H!==q.far)&&(n.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,H=q.far),q.layers.mask=$.layers.mask|6,R.layers.mask=q.layers.mask&-5,C.layers.mask=q.layers.mask&-3;let At=$.parent,xt=q.cameras;W(q,At);for(let Ot=0;Ot<xt.length;Ot++)W(xt[Ot],At);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),O===null&&$.isPerspectiveCamera&&(O={camera:$,fov:$.fov,zoom:$.zoom}),J($,q,At)};function J($,gt,St){St===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Uo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function($){return p[$]};let nt=null;function Et($,gt){if(h=gt.getViewerPose(c||o),g=gt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let At=!1;St.length!==q.cameras.length&&(q.cameras.length=0,At=!0);for(let Lt=0;Lt<St.length;Lt++){let Zt=St[Lt],jt=null;if(f!==null)jt=f.getViewport(Zt);else{let Ce=d.getViewSubImage(u,Zt);jt=Ce.viewport,Lt===0&&(t.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(M))}let Xt=U[Lt];Xt===void 0&&(Xt=new ti,Xt.layers.enable(Lt),Xt.viewport=new ve,U[Lt]=Xt),Xt.matrix.fromArray(Zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(jt.x,jt.y,jt.width,jt.height),Lt===0&&(q.matrix.copy(Xt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),At===!0&&q.cameras.push(Xt)}let xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Lt=d.getDepthInformation(St[0]);Lt&&Lt.isValid&&Lt.texture&&m.init(Lt,n.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Lt=0;Lt<St.length;Lt++){let Zt=St[Lt].camera;if(Zt){let jt=p[Zt];jt||(jt=new mr,p[Zt]=jt);let Xt=d.getCameraImage(Zt);jt.sourceTexture=Xt}}}}for(let St=0;St<T.length;St++){let At=E[St],xt=T[St];At!==null&&xt!==void 0&&xt.update(At,gt,c||o)}nt&&nt($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),g=null}let Bt=new ud;Bt.setAnimationLoop(Et),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}},Px=new ue,Md=new zt;Md.set(-1,0,0,0,1,0,0,0,1);function Lx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,v,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ai&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ai&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Md),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Nx(s,t,e,i){let n={},r={};function o(_,v){let M=v.program;i.uniformBlockBinding(_,M,n[_.id])}function a(_,v){let M=n[_.id];M===void 0&&(g(_),M=l(_),n[_.id]=M,_.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(_,T);let E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){let v=s.createBuffer(),M=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,M,T),s.bindBuffer(s.UNIFORM_BUFFER,null),v}function c(_){let v=n[_.id],M=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,y=M.length;E<y;E++){let w=M[E];if(Array.isArray(w))for(let O=0,R=w.length;O<R;O++)h(w[O],E,O,T);else h(w,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,v,M,T){if(u(_,v,M,T)===!0){let E=_.__offset,y=_.value;if(Array.isArray(y)){let w=0;for(let O=0;O<y.length;O++){let R=y[O],C=x(R,!0);d(R,_.__data,w),w+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,_.__data)}}function d(_,v,M){typeof _=="number"||typeof _=="boolean"?v[M]=_:_.isMatrix3?(v[M]=_.elements[0],v[M+1]=_.elements[1],v[M+2]=_.elements[2],v[M+3]=0,v[M+4]=_.elements[3],v[M+5]=_.elements[4],v[M+6]=_.elements[5],v[M+7]=0,v[M+8]=_.elements[6],v[M+9]=_.elements[7],v[M+10]=_.elements[8],v[M+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-M),M):_.toArray(v,M)}function u(_,v,M,T){let E=_.value,y=v+"_"+M;if(Array.isArray(E)){T[y]===void 0&&(T[y]=[]);let w=T[y],O=!1;for(let R=0;R<E.length;R++)f(E[R],w,R)===!0&&(O=!0);return O}return f(E,T,y)}function f(_,v,M){if(v[M]===void 0)return typeof _=="number"||typeof _=="boolean"?v[M]=_:ArrayBuffer.isView(_)?v[M]=_.slice():v[M]=_.clone(),!0;{let T=v[M];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return v[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){let v=_.uniforms,M=0,T=16;for(let y=0,w=v.length;y<w;y++){let O=Array.isArray(v[y])?v[y]:[v[y]];for(let R=0,C=O.length;R<C;R++){let U=O[R],q=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(v[y])||Array.isArray(U.value),H=M;for(let B=0,tt=q.length;B<tt;B++){let W=q[B],J=x(W,P),nt=M%T,Et=nt%J.boundary,Bt=nt+Et;M+=Et,Bt!==0&&T-Bt<J.storage&&(M+=T-Bt),B===0&&(H=M),M+=J.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((M-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let E=M%T;return E>0&&(M+=T-E),_.__size=M,_.__cache={},this}function x(_,v){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let v=_.target;v.removeEventListener("dispose",m),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:o,update:a,dispose:p}}var Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Ox(){return Ji===null&&(Ji=new Go(Dx,16,16,In,Ui),Ji.name="DFG_LUT",Ji.minFilter=ri,Ji.magFilter=ri,Ji.wrapS=Wi,Ji.wrapT=Wi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Qa=class{constructor(t={}){let{canvas:e=Lu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,m=new Set([xa,ga,ma]),p=new Set([hi,Di,zs,jn,fa,pa]),_=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,E=null,y=[],w=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,U=null,q=null,P=null,H=null;this._outputColorSpace=xi;let X=0,B=0,tt=null,W=-1,J=null,nt=new ve,Et=new ve,Bt=null,$=new It(0),gt=0,St=e.width,At=e.height,xt=1,Ot=null,we=null,Lt=new ve(0,0,St,At),Zt=new ve(0,0,St,At),jt=!1,Xt=new Tn,Ce=new Ho,Se=!1,Xe=!1,fe=new ue,Be=new k,pe=new ve,di={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fi=!1;function li(){return tt===null?xt:1}let D=i;function pi(b,L){return e.getContext(b,L)}let _e,ye,mt,Le,Nt,kt,A,S,z,st,et,at,dt,Z,j,ct,I,Q,Y,ht,ot,lt,Ct;try{let b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),D===null){let L="webgl2";if(D=pi(L,b),D===null)throw pi(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(b){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Ut("WebGLRenderer: "+b.message),b}function qt(){_e=new q0(D),_e.init(),ot=new Rx(D,_e),ye=new O0(D,_e,t,ot),mt=new Tx(D,_e),ye.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),q=D.createFramebuffer(),P=D.createFramebuffer(),H=D.createFramebuffer(),Le=new Z0(D),Nt=new dx,kt=new Ax(D,_e,mt,Nt,ye,ot,Le),A=new X0(R),S=new $f(D),lt=new N0(D,S),z=new Y0(D,S,Le,lt),st=new $0(D,z,S,lt,Le),Q=new J0(D,ye,kt),j=new U0(Nt),et=new ux(R,A,_e,ye,lt,j),at=new Lx(R,Nt),dt=new px,Z=new vx(_e),I=new L0(R,A,mt,st,g,l),ct=new wx(R,st,ye),Ct=new Nx(D,Le,ye,mt),Y=new D0(D,_e,Le),ht=new K0(D,_e,Le),Le.programs=et.programs,R.capabilities=ye,R.extensions=_e,R.properties=Nt,R.renderLists=dt,R.shadowMap=ct,R.state=mt,R.info=Le}x!==hi&&(O=new Q0(x,e.width,e.height,a,n,r));let rt=new Hc(R,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=_e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=_e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(b){b!==void 0&&(xt=b,this.setSize(St,At,!1))},this.getSize=function(b){return b.set(St,At)},this.setSize=function(b,L,V=!0){if(rt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=b,At=L,e.width=Math.floor(b*xt),e.height=Math.floor(L*xt),V===!0&&(e.style.width=b+"px",e.style.height=L+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(St*xt,At*xt).floor()},this.setDrawingBufferSize=function(b,L,V){St=b,At=L,xt=V,e.width=Math.floor(b*V),e.height=Math.floor(L*V),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(x===hi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(Lt)},this.setViewport=function(b,L,V,F){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,L,V,F),mt.viewport(nt.copy(Lt).multiplyScalar(li()).round())},this.getScissor=function(b){return b.copy(Zt)},this.setScissor=function(b,L,V,F){b.isVector4?Zt.set(b.x,b.y,b.z,b.w):Zt.set(b,L,V,F),mt.scissor(Et.copy(Zt).multiplyScalar(li()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){mt.setScissorTest(jt=b)},this.setOpaqueSort=function(b){Ot=b},this.setTransparentSort=function(b){we=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,V=!0){let F=0;if(b){let G=!1;if(tt!==null){let ft=tt.texture.format;G=m.has(ft)}if(G){let ft=tt.texture.type,bt=p.has(ft),ut=I.getClearColor(),Mt=I.getClearAlpha(),Rt=ut.r,Gt=ut.g,Jt=ut.b;bt?(_[0]=Rt,_[1]=Gt,_[2]=Jt,_[3]=Mt,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=Rt,v[1]=Gt,v[2]=Jt,v[3]=Mt,D.clearBufferiv(D.COLOR,0,v))}else F|=D.COLOR_BUFFER_BIT}L&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),I.dispose(),dt.dispose(),Z.dispose(),kt.dispose(),Nt.dispose(),A.dispose(),st.dispose(),z.dispose(),lt.dispose(),Ct.dispose(),et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",dh),rt.removeEventListener("sessionend",fh),kn.stop()};function Pt(b){b.preventDefault(),nr("WebGLRenderer: Context Lost."),C=!0}function Wt(){nr("WebGLRenderer: Context Restored."),C=!1;let b=Le.autoReset,L=ct.enabled,V=ct.autoUpdate,F=ct.needsUpdate,G=ct.type;qt(),Le.autoReset=b,ct.enabled=L,ct.autoUpdate=V,ct.needsUpdate=F,ct.type=G}function yt(b){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){let L=b.target;L.removeEventListener("dispose",le),ze(L)}function ze(b){xn(b),Nt.remove(b)}function xn(b){let L=Nt.get(b).programs;L!==void 0&&(L.forEach(function(V){et.releaseProgram(V)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,V,F,G,ft){L===null&&(L=di);let bt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=hf(b,L,V,F,G);mt.setMaterial(F,bt);let Mt=V.index,Rt=1;if(F.wireframe===!0){if(Mt=z.getWireframeAttribute(V),Mt===void 0)return;Rt=2}let Gt=V.drawRange,Jt=V.attributes.position,wt=Gt.start*Rt,$t=(Gt.start+Gt.count)*Rt;ft!==null&&(wt=Math.max(wt,ft.start*Rt),$t=Math.min($t,(ft.start+ft.count)*Rt)),Mt!==null?(wt=Math.max(wt,0),$t=Math.min($t,Mt.count)):Jt!=null&&(wt=Math.max(wt,0),$t=Math.min($t,Jt.count));let Ie=$t-wt;if(Ie<0||Ie===1/0)return;lt.setup(G,F,ut,V,Mt);let me,he=Y;if(Mt!==null&&(me=S.get(Mt),he=ht,he.setIndex(me)),G.isMesh)F.wireframe===!0?(mt.setLineWidth(F.wireframeLinewidth*li()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(G.isLine){let Je=F.linewidth;Je===void 0&&(Je=1),mt.setLineWidth(Je*li()),G.isLineSegments?he.setMode(D.LINES):G.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else G.isPoints?he.setMode(D.POINTS):G.isSprite&&he.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))he.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Je=G._multiDrawStarts,Tt=G._multiDrawCounts,ni=G._multiDrawCount,se=Mt?S.get(Mt).bytesPerElement:1,Gn=Nt.get(F).currentProgram.getUniforms();for(let $e=0;$e<ni;$e++)Gn.setValue(D,"_gl_DrawID",$e),he.render(Je[$e]/se,Tt[$e])}else if(G.isInstancedMesh)he.renderInstances(wt,Ie,G.count);else if(V.isInstancedBufferGeometry){let Je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tt=Math.min(V.instanceCount,Je);he.renderInstances(wt,Ie,Tt)}else he.render(wt,Ie)};function uh(b,L,V,F){U!==null&&b.isNodeMaterial&&U.setObject(F,b),Se===!0&&j.setState(b,V,!1),b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=ai,b.needsUpdate=!0,Ws(b,L,F),b.side=Ki,b.needsUpdate=!0,Ws(b,L,F),b.side=ci):Ws(b,L,F)}this.compile=function(b,L,V=null){V===null&&(V=b),U!==null&&U.renderStart(b,L,V),E=Z.get(V),E.init(L),w.push(E),V.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),b!==V&&b.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Xe=this.localClippingEnabled,Se=j.init(this.clippingPlanes,Xe),Se===!0&&j.setGlobalState(this.clippingPlanes,L),U!==null&&ct.render(E.state.shadowsArray,V,L);let F=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){let ut=ft[bt];uh(ut,V,L,G),F.add(ut)}else uh(ft,V,L,G),F.add(ft)}),E=w.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(b,L,V=null){let F=this.compile(b,L,V);return new Promise(G=>{function ft(){if(F.forEach(function(bt){let Mt=Nt.get(bt).currentProgram;(Mt===void 0||Mt.isReady())&&F.delete(bt)}),F.size===0){G(b);return}setTimeout(ft,10)}_e.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let _l=null;function lf(b){_l&&_l(b)}function dh(){kn.stop()}function fh(){kn.start()}let kn=new ud;kn.setAnimationLoop(lf),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){_l=b,rt.setAnimationLoop(b),b===null?kn.stop():kn.start()},rt.addEventListener("sessionstart",dh),rt.addEventListener("sessionend",fh),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(b,L);let V=rt.enabled===!0&&rt.isPresenting===!0,F=O!==null&&(tt===null||V)&&O.begin(R,tt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(L),L=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,L,tt),E=Z.get(b,w.length),E.init(L),E.state.textureUnits=kt.getTextureUnits(),w.push(E),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ce.setFromArrayCamera(L):Xt.setFromProjectionMatrix(fe,Ei,L.reversedDepth),Xe=this.localClippingEnabled,Se=j.init(this.clippingPlanes,Xe),T=dt.get(b,y.length),T.init(),y.push(T),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let bt=R.xr.getDepthSensingMesh();bt!==null&&yl(bt,L,-1/0,R.sortObjects)}yl(b,L,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Ot,we),fi=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,fi&&I.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),Se===!0&&j.beginShadows();let G=E.state.shadowsArray;if(ct.render(G,b,L),Se===!0&&j.endShadows(),(F&&O.hasRenderPass())===!1){let bt=T.opaque,ut=T.transmissive;if(E.setupLights(),L.isArrayCamera){let Mt=L.cameras;if(ut.length>0)for(let Rt=0,Gt=Mt.length;Rt<Gt;Rt++){let Jt=Mt[Rt];mh(bt,ut,b,Jt)}fi&&I.render(b);for(let Rt=0,Gt=Mt.length;Rt<Gt;Rt++){let Jt=Mt[Rt];ph(T,b,Jt,Jt.viewport)}}else ut.length>0&&mh(bt,ut,b,L),fi&&I.render(b),ph(T,b,L)}tt!==null&&B===0&&(kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt)),F&&O.end(R),b.isScene===!0&&b.onAfterRender(R,b,L),lt.resetDefaultState(),W=-1,J=null,w.pop(),w.length>0?(E=w[w.length-1],kt.setTextureUnits(E.state.textureUnits),Se===!0&&j.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,U!==null&&U.renderEnd()};function yl(b,L,V,F){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let bt=L.isArrayCamera?Ce:Xt;if(!b.frustumCulled||b.intersectsFrustum(bt)){F&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);let ut=st.update(b),Mt=b.material;Mt.visible&&T.push(b,ut,Mt,V,pe.z,null,L)}}else if(b.isMesh||b.isLine||b.isPoints){let bt=L.isArrayCamera?Ce:Xt;if(!b.frustumCulled||b.intersectsFrustum(bt)){let ut=st.update(b),Mt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),pe.copy(ut.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(Mt)){let Rt=ut.groups;for(let Gt=0,Jt=Rt.length;Gt<Jt;Gt++){let wt=Rt[Gt],$t=Mt[wt.materialIndex];$t&&$t.visible&&T.push(b,ut,$t,V,pe.z,wt,L)}}else Mt.visible&&T.push(b,ut,Mt,V,pe.z,null,L)}}}let ft=b.children;for(let bt=0,ut=ft.length;bt<ut;bt++)yl(ft[bt],L,V,F)}function ph(b,L,V,F){let{opaque:G,transmissive:ft,transparent:bt}=b;E.setupLightsView(V),Se===!0&&j.setGlobalState(R.clippingPlanes,V),F&&mt.viewport(nt.copy(F)),G.length>0&&Wr(G,L,V),ft.length>0&&Wr(ft,L,V),bt.length>0&&Wr(bt,L,V),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function mh(b,L,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let wt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new _i(1,1,{generateMipmaps:!0,type:wt?Ui:hi,minFilter:fn,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let ft=E.state.transmissionRenderTarget[F.id],bt=F.viewport||nt;ft.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),Mt=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor($),gt=R.getClearAlpha(),gt<1&&R.setClearColor(16777215,.5),R.clear(),fi&&I.render(V);let Gt=R.toneMapping;R.toneMapping=Zi;let Jt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),Se===!0&&j.setGlobalState(R.clippingPlanes,F),Wr(b,V,F),kt.updateMultisampleRenderTarget(ft),kt.updateRenderTargetMipmap(ft),_e.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let $t=0,Ie=L.length;$t<Ie;$t++){let me=L[$t],{object:he,geometry:Je,material:Tt,group:ni}=me;if(Tt.side===ci&&he.layers.test(F.layers)){let se=Tt.side;Tt.side=ai,Tt.needsUpdate=!0,gh(he,V,F,Je,Tt,ni),Tt.side=se,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(kt.updateMultisampleRenderTarget(ft),kt.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,Mt,Rt),R.setClearColor($,gt),Jt!==void 0&&(F.viewport=Jt),R.toneMapping=Gt}function Wr(b,L,V){let F=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ft=b.length;G<ft;G++){let bt=b[G],{object:ut,geometry:Mt,group:Rt}=bt,Gt=bt.material;Gt.allowOverride===!0&&F!==null&&(Gt=F),ut.layers.test(V.layers)&&gh(ut,L,V,Mt,Gt,Rt)}}function gh(b,L,V,F,G,ft){U!==null&&G.isNodeMaterial&&U.setObject(b,G),b.onBeforeRender(R,L,V,F,G,ft),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,L,V,F,b,ft),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=ai,G.needsUpdate=!0,R.renderBufferDirect(V,L,F,G,b,ft),G.side=Ki,G.needsUpdate=!0,R.renderBufferDirect(V,L,F,G,b,ft),G.side=ci):R.renderBufferDirect(V,L,F,G,b,ft),b.onAfterRender(R,L,V,F,G,ft)}function xh(b){let L=0;for(let V of b)V.texture!==null&&L++;return L}function Ws(b,L,V){L.isScene!==!0&&(L=di);let F=Nt.get(b),G=E.state.lights,ft=E.state.shadowsArray,bt=G.state.version,ut=et.getParameters(b,G.state,ft,L,V,E.state.lightProbeGridArray),Mt=et.getProgramCacheKey(ut),Rt=F.programs;F.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;F.envMap=A.get(b.envMap||F.environment,Gt),F.envMapRotation=F.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",le),Rt=new Map,F.programs=Rt,F.programVariants=new Map);let Jt=Rt.get(Mt);if(Jt!==void 0){if(F.currentProgram===Jt&&F.lightsStateVersion===bt)return yh(b,ut),Jt}else ut.uniforms=et.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,V,ut),b.onBeforeCompile(ut,R),Jt=et.acquireProgram(ut,Mt),Rt.set(Mt,Jt),F.uniforms=ut.uniforms;let wt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=j.uniform),yh(b,ut),F.needsLights=df(b),F.lightsStateVersion=bt,F.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.sunLights.value=G.state.sun,wt.sunLightShadows.value=G.state.sunShadow,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.sunShadowMatrix.value=G.state.sunShadowMatrix,wt.sunShadowCascade.value=G.state.sunShadowCascade,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),F.numLightProbeGrids=xh(E.state.lightProbeGridArray),F.currentProgram=Jt,F.uniformsList=null,Jt}function cf(b,L,V,F,G){let ft=Nt.get(b),bt=ft.currentProgram.id+","+F+","+G,ut=ft.programVariants.get(bt);return ut===void 0?(ut=Ws(b,L,V),ft.programVariants.set(bt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=F,ft.toneMapping=G),ut}function _h(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=ks.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function yh(b,L){let V=Nt.get(b);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function hf(b,L,V,F,G){L.isScene!==!0&&(L=di),kt.resetTextureUnits();let ft=L.fog,bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,ut=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Kt.workingColorSpace,Mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Rt=A.get(F.envMap||bt,Mt),Gt=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,Ie=!!V.morphAttributes.color,me=Zi;F.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(me=R.toneMapping);let he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=he!==void 0?he.length:0,Tt=Nt.get(F),ni=E.state.lights;if(Se===!0&&(Xe===!0||b!==J)){let be=b===J&&F.id===W;j.setState(F,b,be)}let se=!1,Gn=!1;F.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==ni.state.version||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Rt||F.fog===!0&&Tt.fog!==ft||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==j.numPlanes||Tt.numIntersection!==j.numIntersection)||Tt.vertexAlphas!==Gt||Tt.vertexTangents!==Jt||Tt.morphTargets!==wt||Tt.morphNormals!==$t||Tt.morphColors!==Ie||Tt.morphTargetsCount!==Je||Tt.numLightProbeGrids!==xh(E.state.lightProbeGridArray)?se=!0:(Tt.outputColorSpace!==ut||Tt.toneMapping!==me)&&(Gn=!0):(se=!0,Tt.__version=F.version);let $e=Tt.currentProgram;(se===!0||Gn===!0)&&($e=Gn===!0?cf(F,L,G,ut,me):Ws(F,L,G),U&&F.isNodeMaterial&&U.onUpdateProgram(F,$e,Tt));let Xr=!1,_n=!1,Hn=!1,ee=$e.getUniforms(),qe=Tt.uniforms;if(mt.useProgram($e.program)&&(Xr=!0,_n=!0,Hn=!0),F.id!==W&&(W=F.id,_n=!0),Xr||J!==b){mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ee.setValue(D,"projectionMatrix",b.projectionMatrix),ee.setValue(D,"viewMatrix",b.matrixWorldInverse);let ke=ee.map.cameraPosition;ke!==void 0&&ke.setValue(D,Be.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&ee.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ee.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,_n=!0,Hn=!0)}if(Tt.needsLights&&(ni.state.sunShadowMap.length>0&&ee.setValue(D,"sunShadowMap",ni.state.sunShadowMap,kt),ni.state.directionalShadowMap.length>0&&ee.setValue(D,"directionalShadowMap",ni.state.directionalShadowMap,kt),ni.state.spotShadowMap.length>0&&ee.setValue(D,"spotShadowMap",ni.state.spotShadowMap,kt),ni.state.pointShadowMap.length>0&&ee.setValue(D,"pointShadowMap",ni.state.pointShadowMap,kt)),G.isSkinnedMesh){ee.setOptional(D,G,"bindMatrix"),ee.setOptional(D,G,"bindMatrixInverse");let be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ee.setValue(D,"boneTexture",be.boneTexture,kt))}G.isBatchedMesh&&(ee.setOptional(D,G,"batchingTexture"),ee.setValue(D,"batchingTexture",G._matricesTexture,kt),ee.setOptional(D,G,"batchingIdTexture"),ee.setValue(D,"batchingIdTexture",G._indirectTexture,kt),ee.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ee.setValue(D,"batchingColorTexture",G._colorsTexture,kt));let Ri=V.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Q.update(G,V,$e),(_n||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,ee.setValue(D,"receiveShadow",G.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(qe.envMapIntensity.value=L.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Ox()),_n){if(ee.setValue(D,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&uf(qe,Hn),ft&&F.fog===!0&&at.refreshFogUniforms(qe,ft),at.refreshMaterialUniforms(qe,F,xt,At,E.state.transmissionRenderTarget[b.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let be=M,ke=0;for(let en of E.state.lightProbeGridArray)en.texture!==null&&(be.textures[ke]=en.texture,be.min[ke]=en.boundingBox.min,be.max[ke]=en.boundingBox.max,be.resolution[ke]=en.resolution,ke++);for(let en in be)be[en].length=ke;qe.probesSH.value=be.textures,qe.probesMin.value=be.min,qe.probesMax.value=be.max,qe.probesResolution.value=be.resolution}ks.upload(D,_h(Tt),qe,kt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ks.upload(D,_h(Tt),qe,kt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ee.setValue(D,"center",G.center),ee.setValue(D,"modelViewMatrix",G.modelViewMatrix),ee.setValue(D,"normalMatrix",G.normalMatrix),ee.setValue(D,"modelMatrix",G.matrixWorld),F.uniformsGroups!==void 0){let be=F.uniformsGroups;for(let ke=0,en=be.length;ke<en;ke++){let Mh=be[ke];Ct.update(Mh,$e),Ct.bind(Mh,$e)}}return $e}function uf(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function df(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(b,L,V){let F=Nt.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=L,Nt.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let V=Nt.get(b);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,V=0){tt=b,X=L,B=V;let F=null,G=!1,ft=!1;if(b){let ut=Nt.get(b);if(ut.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),nt.copy(b.viewport),Et.copy(b.scissor),Bt=b.scissorTest,mt.viewport(nt),mt.scissor(Et),mt.setScissorTest(Bt),W=-1;return}else if(ut.__webglFramebuffer===void 0)kt.setupRenderTarget(b);else if(ut.__hasExternalTextures)kt.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Gt=b.depthTexture;if(ut.__boundDepthTexture!==Gt){if(Gt!==null&&Nt.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(b)}}let Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);let Rt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?F=Rt[L][V]:F=Rt[L],G=!0):b.samples>0&&kt.useMultisampledRTT(b)===!1?F=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[V]:F=Rt,nt.copy(b.viewport),Et.copy(b.scissor),Bt=b.scissorTest}else nt.copy(Lt).multiplyScalar(xt).floor(),Et.copy(Zt).multiplyScalar(xt).floor(),Bt=jt;if(V!==0&&(F=q),mt.bindFramebuffer(D.FRAMEBUFFER,F)&&mt.drawBuffers(b,F),mt.viewport(nt),mt.scissor(Et),mt.setScissorTest(Bt),G){let ut=Nt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,V)}else if(ft){let ut=L;for(let Mt=0;Mt<b.textures.length;Mt++){let Rt=Nt.get(b.textures[Mt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,V,ut)}}else if(b!==null&&V!==0){let ut=Nt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,V)}W=-1};function vh(b){let L=Nt.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=ye.textureFormatReadable(b.format),L.__typeReadable=ye.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,V,F,G,ft,bt,ut=0){if(!(b&&b.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){mt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let Rt=b.textures[ut],Gt=Rt.format,Jt=Rt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let wt=vh(Rt);if(wt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-F&&V>=0&&V<=b.height-G&&D.readPixels(L,V,F,G,ot.convert(Gt),ot.convert(Jt),ft)}finally{let Rt=tt!==null?Nt.get(tt).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,L,V,F,G,ft,bt,ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(L>=0&&L<=b.width-F&&V>=0&&V<=b.height-G){mt.bindFramebuffer(D.FRAMEBUFFER,Mt);let Rt=b.textures[ut],Gt=Rt.format,Jt=Rt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let wt=vh(Rt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$t),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(L,V,F,G,ot.convert(Gt),ot.convert(Jt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ie=tt!==null?Nt.get(tt).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,Ie);let me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Du(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer($t),D.deleteSync(me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,V=0){let F=Math.pow(2,-V),G=Math.floor(b.image.width*F),ft=Math.floor(b.image.height*F),bt=L!==null?L.x:0,ut=L!==null?L.y:0;kt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,bt,ut,G,ft),mt.unbindTexture()},this.copyTextureToTexture=function(b,L,V=null,F=null,G=0,ft=0){let bt,ut,Mt,Rt,Gt,Jt,wt,$t,Ie,me=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(V!==null)bt=V.max.x-V.min.x,ut=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Gt=V.min.y,Jt=V.isBox3?V.min.z:0;else{let ee=Math.pow(2,-G);bt=Math.floor(me.width*ee),ut=Math.floor(me.height*ee),b.isDataArrayTexture?Mt=me.depth:b.isData3DTexture?Mt=Math.floor(me.depth*ee):Mt=1,Rt=0,Gt=0,Jt=0}F!==null?(wt=F.x,$t=F.y,Ie=F.z):(wt=0,$t=0,Ie=0);let he=ot.convert(L.format),Je=ot.convert(L.type),Tt;L.isData3DTexture?(kt.setTexture3D(L,0),Tt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(kt.setTexture2DArray(L,0),Tt=D.TEXTURE_2D_ARRAY):(kt.setTexture2D(L,0),Tt=D.TEXTURE_2D),mt.activeTexture(D.TEXTURE0),mt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),mt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),mt.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let ni=mt.getParameter(D.UNPACK_ROW_LENGTH),se=mt.getParameter(D.UNPACK_IMAGE_HEIGHT),Gn=mt.getParameter(D.UNPACK_SKIP_PIXELS),$e=mt.getParameter(D.UNPACK_SKIP_ROWS),Xr=mt.getParameter(D.UNPACK_SKIP_IMAGES);mt.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),mt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),mt.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),mt.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),mt.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt);let _n=b.isDataArrayTexture||b.isData3DTexture,Hn=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let ee=Nt.get(b),qe=Nt.get(L),Ri=Nt.get(ee.__renderTarget),be=Nt.get(qe.__renderTarget);mt.bindFramebuffer(D.READ_FRAMEBUFFER,Ri.__webglFramebuffer),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<Mt;ke++)_n&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,G,Jt+ke),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.get(L).__webglTexture,ft,Ie+ke)),D.blitFramebuffer(Rt,Gt,Rt+bt,Gt+ut,wt,$t,wt+bt,$t+ut,D.DEPTH_BUFFER_BIT,D.NEAREST);mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Nt.has(b)){let ee=Nt.get(b),qe=Nt.get(L);mt.bindFramebuffer(D.READ_FRAMEBUFFER,P),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let Ri=0;Ri<Mt;Ri++)_n?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ee.__webglTexture,G,Jt+Ri):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ee.__webglTexture,G),Hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,ft,Ie+Ri):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,ft),G!==0?D.blitFramebuffer(Rt,Gt,Rt+bt,Gt+ut,wt,$t,wt+bt,$t+ut,D.COLOR_BUFFER_BIT,D.NEAREST):Hn?D.copyTexSubImage3D(Tt,ft,wt,$t,Ie+Ri,Rt,Gt,bt,ut):D.copyTexSubImage2D(Tt,ft,wt,$t,Rt,Gt,bt,ut);mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Hn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Tt,ft,wt,$t,Ie,bt,ut,Mt,he,Je,me.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,ft,wt,$t,Ie,bt,ut,Mt,he,me.data):D.texSubImage3D(Tt,ft,wt,$t,Ie,bt,ut,Mt,he,Je,me):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,wt,$t,bt,ut,he,Je,me.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,wt,$t,me.width,me.height,he,me.data):D.texSubImage2D(D.TEXTURE_2D,ft,wt,$t,bt,ut,he,Je,me);mt.pixelStorei(D.UNPACK_ROW_LENGTH,ni),mt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se),mt.pixelStorei(D.UNPACK_SKIP_PIXELS,Gn),mt.pixelStorei(D.UNPACK_SKIP_ROWS,$e),mt.pixelStorei(D.UNPACK_SKIP_IMAGES,Xr),ft===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&D.generateMipmap(Tt),mt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&kt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?kt.setTextureCube(b,0):b.isData3DTexture?kt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?kt.setTexture2DArray(b,0):kt.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){X=0,B=0,tt=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Zc={};pf(Zc,{DEF:()=>_t,FUEL:()=>Dn,ID:()=>N,MATS:()=>nl,RECIPES:()=>Dr,SMELT:()=>Nn,TILE:()=>Ln,TILE_COLS:()=>Pn,buildAtlas:()=>qc,crackCanvases:()=>Yc,iconURL:()=>rl,isBlockItem:()=>kx,itemDef:()=>Fx,itemIcon:()=>sl,matchRecipe:()=>Kc,tileCanvas:()=>es});function Ke(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vi(s,t,e,i){let n=Math.imul(s|0,374761393)+Math.imul(t|0,1103515245)+Math.imul(e|0,668265263)+Math.imul(i|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function bd(s){if(s==null||s==="")return Math.random()*2**31|0;if(/^-?\d+$/.test(s))return parseInt(s,10)|0;let t=1779033703;for(let e=0;e<s.length;e++)t=Math.imul(t^s.charCodeAt(e),3432918353),t=t<<13|t>>>19;return t|0}var Sd=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Hs=class{constructor(t){let e=Ke(t),i=new Uint8Array(256);for(let n=0;n<256;n++)i[n]=n;for(let n=255;n>0;n--){let r=e()*(n+1)|0,o=i[n];i[n]=i[r],i[r]=o}this.p=new Uint8Array(512);for(let n=0;n<512;n++)this.p[n]=i[n&255]}n2(t,e){let i=this.p,n=Math.floor(t),r=Math.floor(e);t-=n,e-=r;let o=n&255,a=r&255,l=t*t*t*(t*(t*6-15)+10),c=e*e*e*(e*(e*6-15)+10),h=(p,_,v)=>{let M=Sd[p%12];return M[0]*_+M[1]*v},d=i[i[o]+a],u=i[i[o]+a+1],f=i[i[o+1]+a],g=i[i[o+1]+a+1],x=h(d,t,e)+l*(h(f,t-1,e)-h(d,t,e)),m=h(u,t,e-1)+l*(h(g,t-1,e-1)-h(u,t,e-1));return x+c*(m-x)}n3(t,e,i){let n=this.p,r=Math.floor(t),o=Math.floor(e),a=Math.floor(i);t-=r,e-=o,i-=a;let l=r&255,c=o&255,h=a&255,d=y=>y*y*y*(y*(y*6-15)+10),u=d(t),f=d(e),g=d(i),x=(y,w,O,R)=>{let C=Sd[y%12];return C[0]*w+C[1]*O+C[2]*R},m=n[l]+c,p=n[m]+h,_=n[m+1]+h,v=n[l+1]+c,M=n[v]+h,T=n[v+1]+h,E=(y,w,O)=>y+O*(w-y);return E(E(E(x(n[p],t,e,i),x(n[M],t-1,e,i),u),E(x(n[_],t,e-1,i),x(n[T],t-1,e-1,i),u),f),E(E(x(n[p+1],t,e,i-1),x(n[M+1],t-1,e,i-1),u),E(x(n[_+1],t,e-1,i-1),x(n[T+1],t-1,e-1,i-1),u),f),g)}fbm2(t,e,i=4){let n=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=n*this.n2(t*r,e*r),a+=n,n*=.5,r*=2;return o/a}fbm3(t,e,i,n=3){let r=1,o=1,a=0,l=0;for(let c=0;c<n;c++)a+=r*this.n3(t*o,e*o,i*o),l+=r,r*=.5,o*=2;return a/l}},il=(s,t,e)=>s<t?t:s>e?e:s;var N={},_t=[],Ln={},Ad=[],Rd=1,Cd=256;_t[0]={id:0,name:"AIR",label:"Luft",block:!0,solid:!1,opaque:!1,hardness:0,group:"cutout",tiles:["stone","stone","stone"],maxStack:64,drops:null,air:!0};var it=(s,t,e,i=1)=>`rgba(${Math.max(0,Math.min(255,s))|0},${Math.max(0,Math.min(255,t))|0},${Math.max(0,Math.min(255,e))|0},${i})`,K=(s,t,e,i)=>{s.fillStyle=i,s.fillRect(t,e,1,1)};function re(s,t,e,i){for(let n=0;n<16;n++)for(let r=0;r<16;r++){let o=(t()-.5)*i;K(s,r,n,it(e[0]+o,e[1]+o,e[2]+o))}}function Te(s,t,e,i,n=1){for(let r=0;r<i;r++){let o=t()*16|0,a=t()*16|0;for(let l=0;l<n;l++)for(let c=0;c<n;c++)o+l<16&&a+c<16&&K(s,o+l,a+c,e)}}function Ed(s,t,e,i,n,r=16){re(s,t,e,r);let o=16/n;for(let a=0;a<n;a++){let l=a*o|0;for(let h=0;h<16;h++)K(s,h,l,i);let c=a%2?4:0;for(let h=c;h<16;h+=8)for(let d=l;d<l+o;d++)K(s,h%16,d,i)}}var Id=(s,t)=>re(s,t,[125,125,125],26),Bi={stone:Id,dirt:(s,t)=>{re(s,t,[134,96,67],24),Te(s,t,it(100,70,50),8)},grass_top:(s,t)=>{re(s,t,[95,159,53],28),Te(s,t,it(120,180,70),12)},grass_side:(s,t)=>{Bi.dirt(s,t);for(let e=0;e<16;e++){let i=3+(t()*2|0);for(let n=0;n<i;n++){let r=(t()-.5)*26;K(s,e,n,it(95+r,159+r,53+r))}}},cobble:(s,t)=>{re(s,t,[118,118,118],22),[0,5,10].forEach((i,n)=>{let r=n===2?6:5;for(let a=0;a<16;a++)K(s,a,i,it(70,70,70));let o=t()*4|0;for(;o<16;){for(let a=i;a<i+r;a++)K(s,o,a,it(70,70,70));o+=4+(t()*4|0)}})},sand:(s,t)=>{re(s,t,[219,207,163],14),Te(s,t,it(200,188,145),8)},gravel:(s,t)=>{re(s,t,[132,124,122],44),Te(s,t,it(80,78,78),14),Te(s,t,it(170,165,160),10)},log_side:(s,t)=>{for(let e=0;e<16;e++){let i=e%4===0||e%7===3?-22:0;for(let n=0;n<16;n++){let r=(t()-.5)*12+i;K(s,e,n,it(102+r,81+r,50+r))}}},log_top:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Math.max(Math.abs(i-7.5),Math.abs(e-7.5)),r=(n|0)%3===0?-16:0,o=n>6.5,a=(t()-.5)*10+r;o?K(s,i,e,it(95+a,75+a,45+a)):K(s,i,e,it(166+a,133+a,82+a))}},leaves:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){if(t()<.2)continue;let n=(t()-.5)*55;K(s,i,e,it(56+n,128+n,38+n))}},planks:(s,t)=>{re(s,t,[160,130,80],14);for(let e=3;e<16;e+=4)for(let i=0;i<16;i++)K(s,i,e,it(120,94,55));for(let e=0;e<4;e++){let i=t()*16|0;for(let n=e*4;n<e*4+3;n++)K(s,i,n,it(130,102,60))}},sandstone_side:(s,t)=>{re(s,t,[216,203,155],10);for(let e=0;e<16;e++)K(s,e,3,it(190,176,128)),K(s,e,12,it(190,176,128))},sandstone_top:(s,t)=>re(s,t,[222,210,165],8),coal_ore:null,iron_ore:null,gold_ore:null,diamond_ore:null,redstone_ore:null,lapis_ore:null,bedrock:(s,t)=>{re(s,t,[70,70,70],60),Te(s,t,it(20,20,20),22,2),Te(s,t,it(110,110,110),8)},water:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=(t()-.5)*30;K(s,i,e,it(36+n,90+n,205+n,.7))}},lava:(s,t)=>{re(s,t,[225,95,12],70),Te(s,t,it(255,215,60),18,2),Te(s,t,it(160,40,5),10,2)},obsidian:(s,t)=>{re(s,t,[22,14,38],16),Te(s,t,it(60,36,100),12)},craft_top:(s,t)=>{re(s,t,[160,130,80],14);for(let e=0;e<16;e+=5)for(let i=0;i<16;i++)K(s,e,i,it(90,66,35)),K(s,i,e,it(90,66,35))},craft_side:(s,t)=>{re(s,t,[150,118,70],14);for(let e=0;e<16;e++)K(s,e,0,it(80,55,30)),K(s,e,1,it(80,55,30)),K(s,e,15,it(100,72,40));for(let e=3;e<14;e++)K(s,3,e,it(110,110,120)),K(s,4,e,it(110,110,120)),K(s,11,e,it(140,90,40)),K(s,12,e,it(140,90,40));for(let e=6;e<10;e++)K(s,e,5,it(190,190,200))},furnace_front:(s,t)=>{Bi.cobble(s,t);for(let e=8;e<14;e++)for(let i=4;i<12;i++)K(s,i,e,it(20,20,20));for(let e=4;e<12;e++)K(s,e,13,it(230,120,20));for(let e=3;e<13;e++)K(s,e,3,it(30,30,30)),K(s,e,4,it(30,30,30))},furnace_side:(s,t)=>Bi.cobble(s,t),furnace_top:(s,t)=>{re(s,t,[98,98,98],14);for(let e=0;e<16;e++)K(s,e,0,it(60,60,60)),K(s,0,e,it(60,60,60)),K(s,e,15,it(60,60,60)),K(s,15,e,it(60,60,60))},glass:s=>{s.clearRect(0,0,16,16);for(let t=0;t<16;t++)K(s,t,0,it(200,230,240)),K(s,t,15,it(200,230,240)),K(s,0,t,it(200,230,240)),K(s,15,t,it(200,230,240));for(let t=3;t<7;t++)K(s,t,t,it(255,255,255,.8))},cactus_side:(s,t)=>{re(s,t,[14,108,30],24);for(let e=0;e<16;e+=3)for(let i=1;i<16;i+=4)K(s,i,e,it(200,220,170));for(let e=0;e<16;e++)K(s,0,e,it(8,70,20)),K(s,15,e,it(8,70,20))},cactus_top:(s,t)=>{re(s,t,[30,130,40],20);for(let e=0;e<16;e++)K(s,e,0,it(10,80,24)),K(s,0,e,it(10,80,24)),K(s,e,15,it(10,80,24)),K(s,15,e,it(10,80,24))},netherrack:(s,t)=>{re(s,t,[112,44,44],34),Te(s,t,it(70,22,24),14,2),Te(s,t,it(150,70,66),8)},soul_sand:(s,t)=>{re(s,t,[84,66,54],16);for(let e=0;e<6;e++){let i=1+(t()*12|0),n=1+(t()*12|0);K(s,i,n,it(40,30,26)),K(s,i+1,n,it(40,30,26)),K(s,i,n+1,it(54,42,34))}},glowstone:(s,t)=>{re(s,t,[200,150,70],50),Te(s,t,it(255,235,150),22,2),Te(s,t,it(150,100,40),10,2)},nether_brick:(s,t)=>Ed(s,t,[56,28,34],it(24,10,14),4,10),ancient_side:(s,t)=>{re(s,t,[96,66,56],20);for(let e=0;e<16;e+=4)for(let i=0;i<16;i++)K(s,i,e,it(60,38,34));Te(s,t,it(150,110,90),10)},ancient_top:(s,t)=>{re(s,t,[126,94,78],20);for(let e=0;e<16;e+=5)for(let i=0;i<16;i++)K(s,e,i,it(80,54,46)),K(s,i,e,it(80,54,46))},end_stone:(s,t)=>{re(s,t,[222,222,160],16),Te(s,t,it(190,190,120),14)},portal:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Math.sin(i*.7+e*.4)*30+(t()-.5)*50;K(s,i,e,it(120+n,30+n*.5,210+n,.62))}},mossy:(s,t)=>{Bi.cobble(s,t),Te(s,t,it(70,120,50),40),Te(s,t,it(90,140,60),14,2)},stone_bricks:(s,t)=>Ed(s,t,[126,126,126],it(80,80,80),4,14),frame_top:(s,t)=>{re(s,t,[66,108,92],14);for(let e=3;e<13;e++)for(let i=3;i<13;i++)K(s,i,e,it(34,60,50));for(let e=5;e<11;e++)for(let i=5;i<11;i++)K(s,i,e,it(10,24,20))},frame_side:(s,t)=>{re(s,t,[222,222,160],12);for(let e=0;e<9;e++)for(let i=0;i<16;i++){let n=(t()-.5)*14;K(s,i,e,it(66+n,108+n,92+n))}},frame_top_eye:(s,t)=>{Bi.frame_top(s,t);for(let e=4;e<12;e++)for(let i=4;i<12;i++){let n=Math.hypot(i-7.5,e-7.5);n<4&&K(s,i,e,n<1.8?it(10,50,20):it(70,200,110))}},end_portal:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++)K(s,i,e,it(6,10,20));Te(s,t,it(60,220,190),18),Te(s,t,it(255,255,255),6)},chest_top:(s,t)=>{re(s,t,[165,115,45],12);for(let e=0;e<16;e++)K(s,e,0,it(90,55,20)),K(s,0,e,it(90,55,20)),K(s,e,15,it(90,55,20)),K(s,15,e,it(90,55,20))},chest_side:(s,t)=>{re(s,t,[155,105,40],12);for(let e=0;e<16;e++)K(s,e,0,it(90,55,20)),K(s,e,15,it(90,55,20)),K(s,e,5,it(110,70,28));for(let e=0;e<16;e++)K(s,0,e,it(90,55,20)),K(s,15,e,it(90,55,20))},chest_front:(s,t)=>{Bi.chest_side(s,t);for(let e=4;e<9;e++)for(let i=7;i<9;i++)K(s,i,e,it(210,210,215));for(let e=7;e<9;e++)K(s,e,9,it(60,60,70))},torch:s=>{s.clearRect(0,0,16,16);for(let t=7;t<16;t++)K(s,7,t,it(120,85,40)),K(s,8,t,it(96,66,30));for(let t=4;t<7;t++)K(s,7,t,it(255,200,40)),K(s,8,t,it(255,160,20));K(s,7,3,it(255,240,120)),K(s,8,3,it(255,210,60))},flower_red:s=>{s.clearRect(0,0,16,16);for(let t=8;t<16;t++)K(s,8,t,it(40,130,30));K(s,7,12,it(40,130,30)),K(s,9,10,it(40,130,30));for(let t=4;t<8;t++)for(let e=6;e<11;e++)K(s,e,t,it(210,30,40));K(s,8,6,it(250,220,60))},flower_yellow:s=>{s.clearRect(0,0,16,16);for(let t=8;t<16;t++)K(s,8,t,it(40,130,30));K(s,7,12,it(40,130,30));for(let t=4;t<8;t++)for(let e=6;e<11;e++)K(s,e,t,it(250,220,40));K(s,8,6,it(230,150,20))},tall_grass:(s,t)=>{s.clearRect(0,0,16,16);for(let e=0;e<7;e++){let i=1+(t()*14|0),n=5+(t()*9|0);for(let r=16-n;r<16;r++)K(s,i,r,it(70+t()*40,140+t()*30,40))}},dead_bush:(s,t)=>{s.clearRect(0,0,16,16);for(let e=0;e<5;e++){let i=8,n=15,r=(t()-.5)*1.4;for(let o=0;o<8;o++)K(s,i|0,n,it(110,76,40)),i+=r,n--}},jlog_side:(s,t)=>{for(let e=0;e<16;e++){let i=e%5===0?-25:0;for(let n=0;n<16;n++){let r=(t()-.5)*14+i;K(s,e,n,it(88+r,70+r,30+r))}}Te(s,t,it(50,110,40),12)},jlog_top:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Math.max(Math.abs(i-7.5),Math.abs(e-7.5)),r=(t()-.5)*10+((n|0)%3===0?-14:0);n>6.5?K(s,i,e,it(80+r,64+r,28+r)):K(s,i,e,it(170+r,130+r,80+r))}},jleaves:(s,t)=>{for(let e=0;e<16;e++)for(let i=0;i<16;i++){if(t()<.16)continue;let n=(t()-.5)*50;K(s,i,e,it(30+n,120+n,20+n))}},wool:(s,t)=>{re(s,t,[235,235,235],16)},path_top:(s,t)=>{re(s,t,[150,120,70],22),Te(s,t,it(120,96,52),12)},magma:(s,t)=>{re(s,t,[90,26,10],30);for(let e=0;e<9;e++){let i=t()*14|0,n=t()*14|0;for(let r=0;r<4;r++)K(s,i+r,n+r%2,it(255,150+t()*80,20))}},plank_door:null},wd={coal_ore:[24,24,24],iron_ore:[216,175,147],gold_ore:[252,238,75],diamond_ore:[92,219,213],redstone_ore:[210,20,20],lapis_ore:[34,70,190]};for(let s in wd)Bi[s]=(t,e)=>{Id(t,e);let i=wd[s];for(let n=0;n<7;n++){let r=1+(e()*12|0),o=1+(e()*12|0),a=[[0,0],[1,0],[0,1],[1,1],[2,1],[-1,0]],l=3+(e()*3|0);for(let c=0;c<l;c++){let h=a[c],d=(e()-.5)*40;K(t,r+h[0],o+h[1],it(i[0]+d,i[1]+d,i[2]+d))}}};delete Bi.plank_door;Object.keys(Bi).forEach((s,t)=>{Ln[s]=t,Ad.push(s)});var Pn=16;function qc(){let s=document.createElement("canvas");s.width=s.height=Pn*16;let t=s.getContext("2d"),e=document.createElement("canvas");e.width=e.height=16;let i=e.getContext("2d");return Ad.forEach((n,r)=>{i.clearRect(0,0,16,16),Bi[n](i,Ke(1e3+r*77)),t.drawImage(e,r%Pn*16,(r/Pn|0)*16)}),s}function es(s){let t=document.createElement("canvas");t.width=t.height=16;let e=t.getContext("2d"),i=Ln[s];return Bi[s](e,Ke(1e3+i*77)),t}function Yc(){let s=[],t=Ke(555),e=[];for(let i=0;i<6;i++){let n=3+t()*10,r=3+t()*10,o=t()*6.28;for(let a=0;a<22;a++)e.push([n|0,r|0]),n+=Math.cos(o+(t()-.5)*1.6)*.9+(t()-.5),r+=Math.sin(o+(t()-.5)*1.6)*.9+(t()-.5)}for(let i=0;i<10;i++){let n=document.createElement("canvas");n.width=n.height=16;let r=n.getContext("2d"),o=Math.floor(e.length*(i+1)/10);for(let a=0;a<o;a++){let l=e[a];l[0]>=0&&l[0]<16&&l[1]>=0&&l[1]<16&&K(r,l[0],l[1],"rgba(0,0,0,0.75)")}s.push(n)}return s}function Ft(s,t,e,i={}){let n=Rd++;N[s]=n,_t[n]=Object.assign({id:n,name:s,label:t,block:!0,solid:!0,opaque:!0,hardness:1,group:"opaque",maxStack:64,tool:null,tier:0,needs:!1},i);let r=e;return _t[n].tiles=typeof r=="string"?[r,r,r]:r,n}var Ve={tool:"pickaxe",needs:!0};Ft("STONE","Stein","stone",{hardness:1.5,drop:"COBBLE",...Ve});Ft("GRASS","Grasblock",["grass_top","dirt","grass_side"],{hardness:.6,tool:"shovel",drop:"DIRT"});Ft("DIRT","Erde","dirt",{hardness:.5,tool:"shovel"});Ft("COBBLE","Bruchstein","cobble",{hardness:2,...Ve});Ft("SAND","Sand","sand",{hardness:.5,tool:"shovel",gravity:!0});Ft("GRAVEL","Kies","gravel",{hardness:.6,tool:"shovel",gravity:!0});Ft("LOG","Eichenstamm",["log_top","log_top","log_side"],{hardness:2,tool:"axe"});Ft("LEAVES","Eichenlaub","leaves",{hardness:.2,opaque:!1,group:"cutout",tool:"axe"});Ft("PLANKS","Holzbretter","planks",{hardness:2,tool:"axe"});Ft("SANDSTONE","Sandstein",["sandstone_top","sandstone_top","sandstone_side"],{hardness:.8,...Ve});Ft("COAL_ORE","Kohleerz","coal_ore",{hardness:3,drop:"COAL",...Ve});Ft("IRON_ORE","Eisenerz","iron_ore",{hardness:3,tier:1,...Ve});Ft("GOLD_ORE","Golderz","gold_ore",{hardness:3,tier:2,...Ve});Ft("DIAMOND_ORE","Diamanterz","diamond_ore",{hardness:3,tier:2,drop:"DIAMOND",...Ve});Ft("REDSTONE_ORE","Redstone-Erz","redstone_ore",{hardness:3,tier:2,drop:["REDSTONE",4,5],...Ve});Ft("LAPIS_ORE","Lapislazuli-Erz","lapis_ore",{hardness:3,tier:1,drop:["LAPIS",4,8],...Ve});Ft("BEDROCK","Grundgestein","bedrock",{hardness:-1});Ft("WATER","Wasser","water",{solid:!1,opaque:!1,group:"trans",fluid:"water",hardness:-1});Ft("LAVA","Lava","lava",{solid:!1,opaque:!1,group:"opaque",fluid:"lava",light:13,hardness:-1});Ft("OBSIDIAN","Obsidian","obsidian",{hardness:50,tier:3,...Ve});Ft("CRAFTING_TABLE","Werkbank",["craft_top","planks","craft_side"],{hardness:2.5,tool:"axe",ui:"craft"});Ft("FURNACE","Ofen",["furnace_top","furnace_top","furnace_front"],{hardness:3.5,ui:"furnace",...Ve});Ft("GLASS","Glas","glass",{hardness:.3,opaque:!1,group:"cutout",drop:null,sameCull:!0});Ft("CACTUS","Kaktus",["cactus_top","cactus_top","cactus_side"],{hardness:.4,opaque:!1,group:"cutout",damage:!0});Ft("NETHERRACK","Netherrack","netherrack",{hardness:.4,...Ve});Ft("SOUL_SAND","Seelensand","soul_sand",{hardness:.5,tool:"shovel"});Ft("GLOWSTONE","Leuchtstein","glowstone",{hardness:.3,light:15});Ft("NETHER_BRICK","Netherziegel","nether_brick",{hardness:2,...Ve});Ft("ANCIENT_DEBRIS","Antiker Schrott",["ancient_top","ancient_top","ancient_side"],{hardness:30,tier:3,...Ve});Ft("END_STONE","Endstein","end_stone",{hardness:3,...Ve});Ft("PORTAL_X","Portal","portal",{solid:!1,opaque:!1,group:"trans",hardness:-2,portal:"x"});Ft("PORTAL_Z","Portal","portal",{solid:!1,opaque:!1,group:"trans",hardness:-2,portal:"z"});Ft("MOSSY_COBBLE","Bemooster Bruchstein","mossy",{hardness:2,...Ve});Ft("STONE_BRICKS","Steinziegel","stone_bricks",{hardness:1.5,...Ve});Ft("END_FRAME","Endportalrahmen",["frame_top","end_stone","frame_side"],{hardness:-1,h:13/16,special:"frame"});Ft("END_FRAME_EYE","Endportalrahmen",["frame_top_eye","end_stone","frame_side"],{hardness:-1,h:13/16,special:"frame"});Ft("END_PORTAL","Endportal","end_portal",{solid:!1,opaque:!1,group:"opaque",hardness:-1,special:"endportal",h:.75});Ft("CHEST","Truhe",["chest_top","chest_top","chest_side","chest_front"],{hardness:2.5,tool:"axe",ui:"chest"});Ft("TORCH","Fackel","torch",{solid:!1,opaque:!1,group:"cutout",cross:!0,hardness:0,light:14,torch:!0});Ft("FLOWER_RED","Mohn","flower_red",{solid:!1,opaque:!1,group:"cutout",cross:!0,hardness:0,plant:!0});Ft("FLOWER_YELLOW","L\xF6wenzahn","flower_yellow",{solid:!1,opaque:!1,group:"cutout",cross:!0,hardness:0,plant:!0});Ft("TALL_GRASS","Gras","tall_grass",{solid:!1,opaque:!1,group:"cutout",cross:!0,hardness:0,plant:!0,drop:null});Ft("DEAD_BUSH","Toter Busch","dead_bush",{solid:!1,opaque:!1,group:"cutout",cross:!0,hardness:0,plant:!0,drop:"STICK"});Ft("JUNGLE_LOG","Dschungelstamm",["jlog_top","jlog_top","jlog_side"],{hardness:2,tool:"axe"});Ft("JUNGLE_LEAVES","Dschungellaub","jleaves",{hardness:.2,opaque:!1,group:"cutout",tool:"axe"});Ft("WOLLE","Wolle","wool",{hardness:.8});Ft("PATH","Dorfweg",["path_top","dirt","dirt"],{hardness:.65,tool:"shovel",drop:"DIRT"});Ft("MAGMA","Magmablock","magma",{hardness:.5,light:3,...Ve});if(Rd>=256)throw new Error("zu viele Bl\xF6cke");function te(s,t,e,i={}){let n=Cd++;return N[s]=n,_t[n]=Object.assign({id:n,name:s,label:t,maxStack:64,ic:e},i),n}var nl={WOODEN:{label:"Holz",tier:0,speed:2,color:"#a07a44",sword:4,axe:3,pickaxe:2,shovel:2.5,dur:59},STONE:{label:"Stein",tier:1,speed:4,color:"#8b8b8b",sword:5,axe:4,pickaxe:3,shovel:3.5,dur:131},GOLDEN:{label:"Gold",tier:0,speed:12,color:"#f7d63a",sword:4,axe:3,pickaxe:2,shovel:2.5,dur:32},IRON:{label:"Eisen",tier:2,speed:6,color:"#dcdcdc",sword:6,axe:5,pickaxe:4,shovel:4.5,dur:250},DIAMOND:{label:"Diamant",tier:3,speed:8,color:"#43e8d4",sword:7,axe:6,pickaxe:5,shovel:5.5,dur:1561},NETHERITE:{label:"Netherit",tier:4,speed:9,color:"#54464f",sword:8,axe:7,pickaxe:6,shovel:6.5,dur:2031}},Ux={sword:"schwert",pickaxe:"spitzhacke",axe:"axt",shovel:"schaufel"};for(let s in nl)for(let t of["sword","pickaxe","axe","shovel"]){let e=nl[s];te(`${s}_${t.toUpperCase()}`,`${e.label}${Ux[t]}`,["tool",t,e.color],{maxStack:1,tool:{type:t,tier:e.tier,speed:e.speed,dmg:e[t]??e.sword,dur:e.dur}})}te("STICK","Stock",["stick","#9a7240"]);te("COAL","Kohle",["coal","#202020"]);te("CHARCOAL","Holzkohle",["coal","#4a3a2c"]);te("IRON_INGOT","Eisenbarren",["ingot","#d8d8d8"]);te("GOLD_INGOT","Goldbarren",["ingot","#f7d63a"]);te("DIAMOND","Diamant",["gem","#43e8d4"]);te("REDSTONE","Redstone",["dust","#d01818"]);te("LAPIS","Lapislazuli",["gem","#2a4cc8"]);te("NETHERITE_SCRAP","Netherit-Schrott",["ingot","#7a5a4c"]);te("NETHERITE_INGOT","Netheritbarren",["ingot","#54464f"]);te("FLINT","Feuerstein",["flint"]);te("FLINT_AND_STEEL","Feuerzeug",["flintsteel"],{maxStack:1,dur:64});te("BUCKET","Eimer",["bucket",null],{maxStack:16});te("WATER_BUCKET","Wassereimer",["bucket","#2a5fe0"],{maxStack:1});te("LAVA_BUCKET","Lavaeimer",["bucket","#f08a10"],{maxStack:1});te("BLAZE_ROD","Lohenrute",["stick","#f2b21a",2]);te("BLAZE_POWDER","Lohenpulver",["dust","#f2a01a"]);te("ENDER_PEARL","Enderperle",["round","#0d6b5a","#2fd6b0"],{maxStack:16});te("ENDER_EYE","Enderauge",["eye"],{maxStack:64});te("SLIME_BALL","Schleimball",["round","#5ec04a","#a6f28a"]);te("GUNPOWDER","Schie\xDFpulver",["dust","#6e6e6e"]);te("BONE","Knochen",["bone"]);te("STRING","Faden",["string"]);te("APPLE","Apfel",["apple"],{food:4});te("RAW_PORKCHOP","Rohes Schweinefleisch",["meat","#e88a8a","#c06060"],{food:3});te("COOKED_PORKCHOP","Gebratenes Schweinefleisch",["meat","#b4683a","#7a4020"],{food:8});te("RAW_BEEF","Rohes Rindfleisch",["meat","#c44a4a","#8c2a2a"],{food:3});te("STEAK","Steak",["meat","#8a4a28","#5a2c14"],{food:8});te("RAW_CHICKEN","Rohes H\xFChnchen",["meat","#f0c0b0","#d09a88"],{food:2});te("COOKED_CHICKEN","Gebratenes H\xFChnchen",["meat","#d4994a","#9c6428"],{food:6});te("RAW_MUTTON","Rohes Hammelfleisch",["meat","#d0605a","#a03a38"],{food:2});te("COOKED_MUTTON","Gebratenes Hammelfleisch",["meat","#a46030","#6c3c18"],{food:6});te("ROTTEN_FLESH","Verrottetes Fleisch",["meat","#7a8a4a","#566030"],{food:4});if(Cd>=512)throw new Error("zu viele Items");_t.forEach(s=>{if(!s||!s.block)return;let t=s.drop;t===void 0?s.drops=[s.id,1,1]:t===null?s.drops=null:typeof t=="string"?s.drops=[N[t],1,1]:s.drops=[N[t[0]],t[1],t[2]]});var Fx=s=>_t[s],Wc=new Map,ji=s=>{let t=parseInt(s.slice(1),16);return[t>>16&255,t>>8&255,t&255]},ne=(s,t)=>`rgb(${Math.max(0,Math.min(255,s[0]*t))|0},${Math.max(0,Math.min(255,s[1]*t))|0},${Math.max(0,Math.min(255,s[2]*t))|0})`;function Ae(s,t,e,i,n,r,o=1){let a=Math.max(Math.abs(i-t),Math.abs(n-e));for(let l=0;l<=a;l++){let c=Math.round(t+(i-t)*l/a),h=Math.round(e+(n-e)*l/a);for(let d=0;d<o;d++)for(let u=0;u<o;u++)K(s,c+d,h+u,r)}}function Bx(s,t){let e=t.ic,i=Ke(t.id*31+7),n=e[0];if(n==="tool"){let r=ji(e[2]),o=e[1],a="#7a5428";if(o==="sword")Ae(s,3,12,6,9,a,1),Ae(s,2,13,3,12,a),Ae(s,4,8,8,12,"#8a6a30",1),Ae(s,5,8,8,11,"#8a6a30"),Ae(s,6,9,14,1,ne(r,1),2),Ae(s,7,10,14,3,ne(r,.78),1),Ae(s,7,8,13,1,ne(r,1.2),1);else if(o==="pickaxe")Ae(s,3,13,12,4,a,2),Ae(s,4,4,7,2,ne(r,1),2),Ae(s,7,2,12,2,ne(r,1),2),Ae(s,12,2,14,6,ne(r,1),2),Ae(s,4,5,7,3,ne(r,.78),1),Ae(s,13,4,15,8,ne(r,.78),1);else if(o==="axe"){Ae(s,3,14,11,6,a,2);for(let l=1;l<8;l++)for(let c=7;c<14;c++)c-7+Math.abs(l-4)*.8<6&&c-l>3&&K(s,c,l,(c+l)%3?ne(r,1):ne(r,.82));Ae(s,6,3,10,7,ne(r,.7),1)}else{Ae(s,3,14,10,7,a,2);for(let l=1;l<8;l++)for(let c=8;c<15;c++){let h=Math.hypot(c-11,l-4);h<3.4&&K(s,c,l,h>2.4?ne(r,.8):ne(r,1.05))}}}else if(n==="stick"){let r=ji(e[1]);Ae(s,3,13,12,4,ne(r,1),e[2]||2),Ae(s,4,13,12,5,ne(r,.7),1)}else if(n==="coal"){let r=ji(e[1]);for(let o=4;o<13;o++)for(let a=4;a<13;a++)Math.hypot(a-8,o-8.5)<4.2+(i()-.5)*1.5&&K(s,a,o,ne(r,.8+i()*.5));K(s,6,6,ne(r,2)),K(s,7,6,ne(r,1.7))}else if(n==="ingot"){let r=ji(e[1]);for(let o=0;o<6;o++)for(let a=7-o;a<15-o;a++)K(s,a,5+o,o===0?ne(r,1.25):o===5?ne(r,.6):ne(r,.95));for(let o=0;o<6;o++)K(s,14-o,5+o,ne(r,.7))}else if(n==="gem"){let r=ji(e[1]);[[7,8],[6,9],[4,11],[3,12],[3,12],[4,11],[5,10],[6,9],[7,8]].forEach((a,l)=>{for(let c=a[0];c<=a[1];c++)K(s,c,3+l,ne(r,(c<8?1.2:.8)-l*.02))}),K(s,6,5,"#ffffff"),K(s,7,6,ne(r,1.5))}else if(n==="dust"){let r=ji(e[1]);for(let o=0;o<50;o++){let a=i()*6.28,l=i()*5,c=8+Math.cos(a)*l,h=10+Math.sin(a)*l*.55;K(s,c|0,h|0,ne(r,.7+i()*.6))}}else if(n==="flint"){let r=[[6,3],[10,4],[12,8],[10,12],[6,13],[4,9]];for(let o=2;o<14;o++)for(let a=3;a<13;a++){let l=!1;for(let c=0,h=r.length-1;c<r.length;h=c++)r[c][1]>o!=r[h][1]>o&&a<(r[h][0]-r[c][0])*(o-r[c][1])/(r[h][1]-r[c][1])+r[c][0]&&(l=!l);l&&K(s,a,o,ne([70,70,74],.8+i()*.5))}}else if(n==="flintsteel"){Ae(s,2,13,9,6,"#b8b8c0",2),Ae(s,3,13,9,7,"#707078",1);for(let r=3;r<10;r++)for(let o=8;o<14;o++)Math.hypot(o-10.5,r-6.5)<3&&K(s,o,r,ne([60,60,66],.8+i()*.6));K(s,12,3,"#ffcc33"),K(s,13,2,"#ff8822")}else if(n==="bucket"){for(let r=4;r<13;r++){let o=5-Math.floor((r-4)/3);for(let a=8-o;a<8+o;a++)K(s,a,r,a===8-o||r===12?"#7a7a82":"#b9b9c2")}for(let r=3;r<13;r++)K(s,r,4,"#d8d8e0");if(e[1])for(let r=4;r<12;r++)K(s,r,5,e[1]),K(s,r,6,e[1])}else if(n==="round"){let r=ji(e[1]),o=ji(e[2]);for(let a=3;a<14;a++)for(let l=3;l<14;l++){let c=Math.hypot(l-8,a-8);c<5&&K(s,l,a,c<3?ne(o,.9):ne(r,1.1))}K(s,6,6,"#ffffff"),K(s,7,6,ne(o,1.4))}else if(n==="eye"){for(let r=3;r<14;r++)for(let o=3;o<14;o++){let a=Math.hypot(o-8,r-8);a<5&&K(s,o,r,a<2?"#0a2a14":a<3.4?"#46c46e":"#1f6a4a")}K(s,6,6,"#c8ffd8")}else if(n==="bone")Ae(s,4,12,12,4,"#ecece4",2),K(s,3,11,"#ecece4"),K(s,4,13,"#ecece4"),K(s,12,3,"#ecece4"),K(s,13,5,"#ecece4");else if(n==="string")for(let r=2;r<14;r++)K(s,r,8+Math.round(Math.sin(r*.9)*2),"#f0f0f0");else if(n==="apple"){for(let r=4;r<14;r++)for(let o=3;o<14;o++){let a=Math.hypot((o-8.5)*.9,r-9);a<4.6&&K(s,o,r,ne([200,30,30],a>3.4?.7:1.05))}K(s,8,3,"#6a4a20"),K(s,8,4,"#6a4a20"),K(s,9,3,"#3a9a30"),K(s,6,7,"#ff9a9a")}else if(n==="meat"){let r=ji(e[1]),o=ji(e[2]);for(let a=3;a<14;a++)for(let l=2;l<14;l++){let c=(l-8)*.7+(a-8)*.7,h=(l-8)*.7-(a-8)*.7;c*c/36+h*h/14<1&&K(s,l,a,c*c/36+h*h/14>.6?ne(o,1):ne(r,.9+i()*.2))}Ae(s,3,12,5,10,"#f0ece0",2)}}function sl(s){if(Wc.has(s))return Wc.get(s);let t=document.createElement("canvas");t.width=t.height=16;let e=t.getContext("2d");e.imageSmoothingEnabled=!1;let i=_t[s];if(!i)return t;if(i.block)if(i.cross)e.drawImage(es(i.tiles[2]),0,0);else{t.width=t.height=32;let n=t.getContext("2d");n.imageSmoothingEnabled=!1;let r=es(i.tiles[0]),o=es(i.tiles[3]||i.tiles[2]);n.save(),n.setTransform(14/16,7/16,-14/16,7/16,16,2),n.drawImage(r,0,0),n.restore(),n.save(),n.setTransform(14/16,7/16,0,14/16,2,9),n.drawImage(es(i.tiles[2]),0,0),n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(0,0,16,16),n.restore(),n.save(),n.setTransform(14/16,-7/16,0,14/16,16,16),n.drawImage(o,0,0),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,0,16,16),n.restore()}else Bx(e,i);return Wc.set(s,t),t}var Xc=new Map;function rl(s){return Xc.has(s)||Xc.set(s,sl(s).toDataURL()),Xc.get(s)}var Dr=[],Pd=s=>Array.isArray(s)?s.map(t=>N[t]):N[s];function Mi(s,t,e,i){let n={};for(let r in i)n[r]=Pd(i[r]);Dr.push({out:N[s],n:t,shape:e.map(r=>r.split("")),key:n})}function Or(s,t,e){Dr.push({out:N[s],n:t,list:e.map(Pd)})}Or("PLANKS",4,[["LOG","JUNGLE_LOG"]]);Mi("STICK",4,["P","P"],{P:"PLANKS"});Mi("CRAFTING_TABLE",1,["PP","PP"],{P:"PLANKS"});Mi("FURNACE",1,["CCC","C.C","CCC"],{C:"COBBLE"});Mi("CHEST",1,["PPP","P.P","PPP"],{P:"PLANKS"});Mi("TORCH",4,["C","S"],{C:["COAL","CHARCOAL"],S:"STICK"});var zx={WOODEN:"PLANKS",STONE:"COBBLE",GOLDEN:"GOLD_INGOT",IRON:"IRON_INGOT",DIAMOND:"DIAMOND",NETHERITE:"NETHERITE_INGOT"};for(let s in nl){let t=zx[s];Mi(`${s}_SWORD`,1,["M","M","S"],{M:t,S:"STICK"}),Mi(`${s}_PICKAXE`,1,["MMM",".S.",".S."],{M:t,S:"STICK"}),Mi(`${s}_AXE`,1,["MM","MS",".S"],{M:t,S:"STICK"}),Mi(`${s}_SHOVEL`,1,["M","S","S"],{M:t,S:"STICK"})}Mi("BUCKET",1,["I.I",".I."],{I:"IRON_INGOT"});Or("FLINT_AND_STEEL",1,["IRON_INGOT","FLINT"]);Or("BLAZE_POWDER",2,["BLAZE_ROD"]);Or("ENDER_EYE",1,["ENDER_PEARL","BLAZE_POWDER"]);Or("NETHERITE_INGOT",1,["NETHERITE_SCRAP","NETHERITE_SCRAP","NETHERITE_SCRAP","NETHERITE_SCRAP","GOLD_INGOT","GOLD_INGOT","GOLD_INGOT","GOLD_INGOT"]);Mi("STONE_BRICKS",4,["SS","SS"],{S:"STONE"});Mi("SANDSTONE",1,["SS","SS"],{S:"SAND"});Mi("GLASS",1,["G"],{G:"GLASS"});Dr.pop();var Td=(s,t)=>Array.isArray(s)?s.includes(t):s===t;function Kc(s,t,e){let i=t,n=e,r=-1,o=-1,a=0;for(let h=0;h<e;h++)for(let d=0;d<t;d++)s[h*t+d]&&(a++,i=Math.min(i,d),r=Math.max(r,d),n=Math.min(n,h),o=Math.max(o,h));if(!a)return null;let l=r-i+1,c=o-n+1;for(let h of Dr)if(h.list){if(h.list.length!==a)continue;let d=new Array(h.list.length).fill(!1),u=!0;for(let f=0;f<s.length&&u;f++){let g=s[f];if(!g)continue;let x=!1;for(let m=0;m<h.list.length;m++)if(!d[m]&&Td(h.list[m],g)){d[m]=!0,x=!0;break}x||(u=!1)}if(u)return h}else{let d=h.shape;if(d.length!==c||d[0].length!==l)continue;for(let u of[!1,!0]){let f=!0;for(let g=0;g<c&&f;g++)for(let x=0;x<l&&f;x++){let m=d[g][u?l-1-x:x],p=s[(n+g)*t+i+x];m==="."?p&&(f=!1):(!p||!Td(h.key[m],p))&&(f=!1)}if(f)return h}}return null}var Nn={},Ti=(s,t)=>{Nn[N[s]]=N[t]};Ti("IRON_ORE","IRON_INGOT");Ti("GOLD_ORE","GOLD_INGOT");Ti("SAND","GLASS");Ti("COBBLE","STONE");Ti("ANCIENT_DEBRIS","NETHERITE_SCRAP");Ti("LOG","CHARCOAL");Ti("JUNGLE_LOG","CHARCOAL");Ti("RAW_PORKCHOP","COOKED_PORKCHOP");Ti("RAW_BEEF","STEAK");Ti("RAW_CHICKEN","COOKED_CHICKEN");Ti("RAW_MUTTON","COOKED_MUTTON");Ti("COAL_ORE","COAL");var Dn={},On=(s,t)=>{Dn[N[s]]=t};On("COAL",80);On("CHARCOAL",80);On("LOG",15);On("JUNGLE_LOG",15);On("PLANKS",15);On("STICK",5);On("BLAZE_ROD",120);On("CRAFTING_TABLE",15);function kx(s){return s>0&&s<256}var Ld=(s,t)=>((s>>4)+32768)*65536+((t>>4)+32768),Jc=class{constructor(){this.ch=new Map,this.chests=[],this.spawns=[]}set(t,e,i,n){if(e<0||e>=96)return;let r=Ld(t,i),o=this.ch.get(r);o||(o=[],this.ch.set(r,o)),o.push(t,e,i,n)}fill(t,e,i,n,r,o,a){for(let l=Math.min(e,r);l<=Math.max(e,r);l++)for(let c=Math.min(i,o);c<=Math.max(i,o);c++)for(let h=Math.min(t,n);h<=Math.max(t,n);h++)this.set(h,l,c,a)}chest(t,e,i,n){this.set(t,e,i,N.CHEST),this.chests.push({x:t,y:e,z:i,table:n})}spawn(t,e,i,n){this.spawns.push({type:t,x:e,y:i,z:n})}};function Gx(s,t){let e=[],i=(r,o,a,l)=>{t()<o&&e.push({id:N[r],n:a+(t()*(l-a+1)|0)})};switch(s){case"village":i("IRON_INGOT",.6,1,4),i("COAL",.7,2,6),i("APPLE",.6,1,3),i("PLANKS",.6,4,12),i("OBSIDIAN",.35,2,4),i("GOLD_INGOT",.3,1,3),i("DIAMOND",.06,1,1),i("IRON_PICKAXE",.15,1,1),i("BUCKET",.3,1,1),i("TORCH",.5,4,8),i("STEAK",.35,2,4),i("FLINT_AND_STEEL",.12,1,1),i("IRON_SWORD",.12,1,1),i("LOG",.5,2,6);break;case"desert":i("DIAMOND",.3,1,3),i("IRON_INGOT",.7,1,5),i("GOLD_INGOT",.7,2,6),i("BONE",.7,3,6),i("ROTTEN_FLESH",.6,2,5),i("GUNPOWDER",.5,1,4),i("OBSIDIAN",.2,1,2);break;case"jungle":i("IRON_INGOT",.7,1,5),i("GOLD_INGOT",.6,2,5),i("DIAMOND",.25,1,2),i("BONE",.6,2,6),i("ROTTEN_FLESH",.5,2,4),i("STRING",.4,1,4);break;case"ship":i("IRON_INGOT",.7,1,5),i("GOLD_INGOT",.5,1,3),i("COAL",.7,3,8),i("DIAMOND",.12,1,1),i("APPLE",.5,2,4),i("BUCKET",.3,1,1),i("STEAK",.4,2,5),i("TORCH",.5,3,6);break;case"stronghold":i("IRON_INGOT",.7,1,5),i("GOLD_INGOT",.5,1,3),i("REDSTONE",.5,2,6),i("COAL",.6,3,8),i("DIAMOND",.1,1,1),i("APPLE",.5,1,3),i("IRON_PICKAXE",.15,1,1),i("FLINT_AND_STEEL",.1,1,1),i("ENDER_PEARL",.1,1,1);break;case"nether":i("GOLD_INGOT",.7,2,6),i("IRON_INGOT",.6,1,4),i("OBSIDIAN",.4,2,4),i("FLINT_AND_STEEL",.25,1,1),i("DIAMOND",.2,1,2),i("NETHERITE_SCRAP",.1,1,1),i("STEAK",.4,2,5);break}let n=new Array(27).fill(null);for(let r of e){let o=t()*27|0,a=0;for(;n[o]&&a++<30;)o=(o+1)%27;n[o]=r.id>=256&&_t[r.id].tool?{id:r.id,n:1,d:0}:{id:r.id,n:r.n}}return n}var ol=class{constructor(t,e,i){this.dim=t,this.seed=e,this.world=i,this.n1=new Hs(e),this.n2=new Hs(e+1337),this.n3=new Hs(e+4242),this.sc=new Map,this.strongholds=[];for(let n=0;n<3;n++){let r=vi(n,0,0,e)*6.283+n*2.1,o=280+vi(n,1,0,e)*120;this.strongholds.push({x:Math.round(Math.cos(r)*o/4)*4,z:Math.round(Math.sin(r)*o/4)*4})}}cont(t,e){let i=Math.hypot(t,e);return this.n1.fbm2(t*.0022,e*.0022,4)*1.7+Math.max(0,1-i/160)*.9}heightAt(t,e){let i=this.cont(t,e),n=this.n2.fbm2(t*.012,e*.012,4),r;return i<0?r=31+i*16+n*3:r=33+i*9+n*(3+i*9)+Math.max(0,i-.55)*45,Math.min(88,Math.max(3,Math.floor(r)))}biomeAt(t,e){let i=Math.hypot(t,e);if(this.cont(t,e)<0&&i>90)return"ocean";if(i<85)return"plains";let r=this.n3.fbm2(t*.004+100,e*.004,3),o=this.n3.fbm2(t*.004,e*.004+200,3);return r>.1&&o<0?"desert":r>.08&&o>.1?"jungle":o>.04?"forest":"plains"}findSpawn(){for(let t=0;t<400;t+=4)for(let e=0;e<6.28;e+=.5){let i=Math.round(Math.cos(e)*t),n=Math.round(Math.sin(e)*t);if(this.heightAt(i,n)>33&&this.biomeAt(i,n)!=="ocean")return{x:i+.5,z:n+.5}}return{x:.5,z:.5}}generate(t){this.dim==="overworld"?this.genOverworld(t):this.dim==="nether"?this.genNether(t):this.genEnd(t);let e=t.b,i=0,n=new Uint8Array(256);_t.forEach(r=>{r&&r.block&&r.opaque&&!r.fluid&&!r.cross&&(n[r.id]=1)});for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=-1;for(let l=95;l>=0;l--){let c=e[o+16*(r+16*l)];if(c&&(l>i&&(i=l),n[c]&&a<0&&(a=l),a>=0&&i>=l))break}t.hm[o+r*16]=a}t.maxY=i}genOverworld(t){let e=t.cx,i=t.cz,n=e*16,r=i*16,o=t.b,a=(u,f,g)=>u+16*(g+16*f),l=new Int16Array(256),c=new Array(256);for(let u=0;u<16;u++)for(let f=0;f<16;f++)l[f+u*16]=this.heightAt(n+f,r+u),c[f+u*16]=this.biomeAt(n+f,r+u);let h=Ke(vi(e,i,this.seed,11)*4294967296);for(let u=0;u<16;u++)for(let f=0;f<16;f++){let g=l[f+u*16],x=c[f+u*16],m=n+f,p=r+u;o[a(f,0,u)]=N.BEDROCK,h()<.5&&(o[a(f,1,u)]=N.BEDROCK);let _=g<=33;for(let v=1;v<=g;v++){let M=N.STONE;v===g?M=x==="desert"||_?x==="ocean"&&g<30?N.GRAVEL:N.SAND:g>72?N.STONE:N.GRASS:v>=g-3&&(M=x==="desert"||_?v>=g-2?N.SAND:N.SANDSTONE:g>72?N.STONE:N.DIRT),(v>1||o[a(f,v,u)]===0)&&(o[a(f,v,u)]=M)}for(let v=g+1;v<=32;v++)o[a(f,v,u)]=N.WATER;for(let v=5;v<g-2;v++){let M=this.n1.n3(m*.045+10,v*.07,p*.045),T=this.n2.n3(m*.045,v*.07+5,p*.045+30),E=M*M+T*T<.006;!E&&v<34&&(E=this.n3.n3(m*.02,v*.04,p*.02+70)>.55),E&&(o[a(f,v,u)]=v<=9?N.LAVA:0)}}let d=[["COAL_ORE",18,8,5,70],["IRON_ORE",14,5,4,56],["GOLD_ORE",3,4,4,28],["REDSTONE_ORE",6,5,4,16],["LAPIS_ORE",2,4,4,28],["DIAMOND_ORE",2,4,4,15]];for(let[u,f,g,x,m]of d)for(let p=0;p<f;p++){let _=h()*16|0,v=h()*16|0,M=x+(h()*(m-x)|0);for(let T=0;T<g;T++)_>=0&&_<16&&v>=0&&v<16&&M>1&&o[a(_,M,v)]===N.STONE&&(o[a(_,M,v)]=N[u]),_+=(h()*3|0)-1,M+=(h()*3|0)-1,v+=(h()*3|0)-1}for(let u=0;u<16;u++)for(let f=0;f<16;f++){let g=l[f+u*16],x=c[f+u*16];if(g<=32)continue;let m=o[a(f,g,u)];if(g+1>=96)continue;let p=h();if(m===N.GRASS)p<(x==="jungle"?.2:.09)?o[a(f,g+1,u)]=N.TALL_GRASS:p<.1+.012&&x!=="jungle"&&(o[a(f,g+1,u)]=h()<.5?N.FLOWER_RED:N.FLOWER_YELLOW);else if(m===N.SAND&&x==="desert")if(p<.006){let _=1+(h()*3|0);for(let v=1;v<=_;v++)o[a(f,g+v,u)]=N.CACTUS}else p<.02&&(o[a(f,g+1,u)]=N.DEAD_BUSH)}for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++)this.placeTrees(t,e+u,i+f,o);if(this.applyStructures(t),h()<.1){let u=2+(h()*3|0),g=["pig","cow","sheep","chicken"][h()*4|0];for(let x=0;x<u;x++){let m=h()*16|0,p=h()*16|0,_=l[m+p*16];o[a(m,_,p)]===N.GRASS&&t.spawns.push({type:g,x:n+m+.5,y:_+1,z:r+p+.5})}}}treeList(t,e){let i="t"+t+","+e;if(this.sc.has(i))return this.sc.get(i);let n=Ke(vi(t,e,this.seed,77)*4294967296),r=[],o=this.biomeAt(t*16+8,e*16+8),a={plains:1.5,forest:9,jungle:11,desert:0,ocean:0}[o]??1,l=Math.floor(a+n()*2);for(let c=0;c<l;c++){let h=t*16+(n()*16|0),d=e*16+(n()*16|0),u=this.biomeAt(h,d);if(u==="desert"||u==="ocean")continue;let f=this.heightAt(h,d);if(f<=33||f>70)continue;let g=u==="jungle";r.push({x:h,z:d,h:f,jungle:g,th:g?7+(n()*6|0):4+(n()*3|0),r2:n()})}return this.sc.set(i,r),r}placeTrees(t,e,i,n){let r=t.cx*16,o=t.cz*16,a=(c,h,d,u)=>{let f=c-r,g=d-o;f<0||f>15||g<0||g>15||h>=96||(n[f+16*(g+16*h)]=u)},l=(c,h,d,u)=>{let f=c-r,g=d-o;if(f<0||f>15||g<0||g>15||h>=96)return;let x=f+16*(g+16*h);(n[x]===0||n[x]===N.TALL_GRASS)&&(n[x]=u)};for(let c of this.treeList(e,i)){if(Math.abs(c.x-r-8)>20||Math.abs(c.z-o-8)>20)continue;let h=c.jungle?N.JUNGLE_LOG:N.LOG,d=c.jungle?N.JUNGLE_LEAVES:N.LEAVES,u=c.h+c.th;for(let f=c.h+1;f<=u;f++)a(c.x,f,c.z,h);if(c.jungle)for(let f=u-3;f<=u+2;f++){let g=f>=u?2:3;for(let x=-g;x<=g;x++)for(let m=-g;m<=g;m++)Math.abs(x)+Math.abs(m)>g+1||x===0&&m===0&&f<=u||l(c.x+x,f,c.z+m,d)}else for(let f=u-2;f<=u+1;f++){let g=f<=u-1?2:1;for(let x=-g;x<=g;x++)for(let m=-g;m<=g;m++)Math.abs(x)===g&&Math.abs(m)===g&&(f>u-1||x*7+m*13+c.x&1)||x===0&&m===0&&f<=u||l(c.x+x,f,c.z+m,d)}}}surfaceStructure(t,e){let i="s"+t+","+e;if(this.sc.has(i))return this.sc.get(i);let n=null,r=Ke(vi(t,e,this.seed,5)*4294967296),o=t*128+28+Math.floor(r()*72),a=e*128+28+Math.floor(r()*72);if(t===0&&e===0)n={type:"village",x:56,z:40};else{let l=this.biomeAt(o,a),c=r(),h=this.heightAt(o,a);l==="plains"||l==="forest"?c<.5&&(n={type:"village",x:o,z:a}):l==="desert"?c<.45?n={type:"desert",x:o,z:a}:c<.7&&(n={type:"village",x:o,z:a}):l==="jungle"?c<.6&&(n={type:"jungle",x:o,z:a}):l==="ocean"&&h<29&&c<.7&&(n={type:"ship",x:o,z:a})}return n&&(n.rng=r),this.sc.set(i,n),n}structBuf(t,e){let i="b"+e+t.x+","+t.z;if(this.sc.has(i))return this.sc.get(i);let n=new Jc,r=Ke(vi(t.x,t.z,this.seed,99)*4294967296);return e==="village"?this.buildVillage(n,t,r):e==="desert"?this.buildDesert(n,t,r):e==="jungle"?this.buildJungle(n,t,r):e==="ship"?this.buildShip(n,t,r):e==="stronghold"?this.buildStronghold(n,t,r):e==="fortress"&&this.buildFortress(n,t,r),this.sc.set(i,n),n}structuresNear(t,e){let i=[],n=t*16+8,r=e*16+8;if(this.dim==="overworld"){let o=Math.floor(n/128),a=Math.floor(r/128);for(let l=o-1;l<=o+1;l++)for(let c=a-1;c<=a+1;c++){let h=this.surfaceStructure(l,c);h&&Math.abs(h.x-n)<60&&Math.abs(h.z-r)<60&&i.push(this.structBuf(h,h.type))}for(let l of this.strongholds)Math.abs(l.x-n)<48&&Math.abs(l.z-r)<48&&i.push(this.structBuf(l,"stronghold"))}else if(this.dim==="nether")for(let o of this.fortresses(n,r))Math.abs(o.x-n)<52&&Math.abs(o.z-r)<52&&i.push(this.structBuf(o,"fortress"));return i}fortresses(t,e){let i=[],n=Math.floor(t/160),r=Math.floor(e/160);for(let o=n-1;o<=n+1;o++)for(let a=r-1;a<=r+1;a++){if(o===0&&a===0){i.push({x:56,z:24});continue}vi(o,a,this.seed,31)<.45&&i.push({x:o*160+40+Math.floor(vi(o,a,this.seed,32)*80),z:a*160+40+Math.floor(vi(o,a,this.seed,33)*80)})}return i}locate(t,e){let i={},n=(r,o,a)=>{let l=Math.hypot(o-t,a-e);(!i[r]||l<i[r].d)&&(i[r]={x:o,z:a,d:l})};if(this.dim==="overworld"){let r=Math.floor(t/128),o=Math.floor(e/128);for(let a=r-6;a<=r+6;a++)for(let l=o-6;l<=o+6;l++){let c=this.surfaceStructure(a,l);c&&n(c.type,c.x,c.z)}for(let a of this.strongholds)n("stronghold",a.x,a.z)}else if(this.dim==="nether")for(let r of this.fortresses(t,e))n("fortress",r.x,r.z);return i}applyStructures(t){let e=Ld(t.cx*16,t.cz*16);for(let i of this.structuresNear(t.cx,t.cz)){let n=i.ch.get(e);if(n)for(let r=0;r<n.length;r+=4){let o=n[r]-t.cx*16,a=n[r+2]-t.cz*16;t.b[o+16*(a+16*n[r+1])]=n[r+3]}for(let r of i.chests)r.x>>4===t.cx&&r.z>>4===t.cz&&this.world.tiles.set(r.x+","+r.y+","+r.z,{type:"chest",items:Gx(r.table,Ke(vi(r.x,r.y,r.z,this.seed)*4294967296))});for(let r of i.spawns)r.x>>4===t.cx&&r.z>>4===t.cz&&t.spawns.push({type:r.type,x:r.x+.5,y:r.y,z:r.z+.5})}}gy(t,e){return Math.max(this.heightAt(t,e),33)}buildVillage(t,e,i){let n=e.x,r=e.z,o=this.gy(n,r),a=(h,d)=>{let u=this.gy(h,d);t.set(h,u,d,N.PATH);for(let f=1;f<=3;f++)t.set(h,u+f,d,0)};for(let h=-34;h<=34;h++)for(let d=-1;d<=1;d++)a(n+h,r+d),a(n+d,r+h);for(let h=-2;h<=2;h++)for(let d=-2;d<=2;d++)t.fill(n+h,o-3,r+d,n+h,o+6,r+d,0),t.set(n+h,o,r+d,N.COBBLE),t.fill(n+h,o-3,r+d,n+h,o-1,r+d,N.COBBLE),Math.abs(h)<2&&Math.abs(d)<2?t.set(n+h,o,r+d,N.WATER):t.set(n+h,o+1,r+d,N.COBBLE);for(let[h,d]of[[-2,-2],[2,-2],[-2,2],[2,2]])t.fill(n+h,o+1,r+d,n+h,o+4,r+d,N.LOG);t.fill(n-2,o+5,r-2,n+2,o+5,r+2,N.PLANKS);let l=[[-14,-12],[14,-12],[-14,12],[14,12],[-26,0],[26,0],[0,-24],[0,24],[-26,-22],[26,22]],c=0;l.forEach(([h,d],u)=>{if(i()<.15&&u>4)return;let f=n+h+(i()*4|0)-2,g=r+d+(i()*4|0)-2,x=5+(i()*2|0)*2,m=5+(i()*2|0)*2,p=u===3?"smith":u===0?"house":i()<.3?"farm":i()<.5?"stone":"house",_=this.gy(f,g),v=f-(x/2|0),M=v+x-1,T=g-(m/2|0),E=T+m-1;if(p==="farm"){t.fill(v-1,_,T-1,M+1,_+5,E+1,0),t.fill(v-1,_-3,T-1,M+1,_-1,E+1,N.DIRT),t.fill(v,_,T,M,_,E,N.GRASS);for(let R=v;R<=M;R++)for(let C=T;C<=E;C++)(R-v)%2!==1&&i()<.6&&t.set(R,_+1,C,i()<.5?N.FLOWER_YELLOW:N.TALL_GRASS);t.set(f,_,g,N.WATER);return}let y=p==="house"||p==="smith"&&!1?N.PLANKS:N.COBBLE;t.fill(v-1,_+1,T-1,M+1,_+8,E+1,0),t.fill(v,_-4,T,M,_-1,E,N.COBBLE),t.fill(v,_,T,M,_,E,p==="house"?N.PLANKS:N.COBBLE);for(let R=_+1;R<=_+3;R++)for(let C=v;C<=M;C++)for(let U=T;U<=E;U++){if(!(C===v||C===M||U===T||U===E))continue;let P=(C===v||C===M)&&(U===T||U===E);t.set(C,R,U,P?N.LOG:y)}let w=Math.abs(n-f)>Math.abs(r-g)?n>f?"x2":"x1":r>g?"z2":"z1",O=w[0]==="x"?[w==="x2"?M:v,g]:[f,w==="z2"?E:T];t.set(O[0],_+1,O[1],0),t.set(O[0],_+2,O[1],0);for(let[R,C]of[[f,T],[f,E],[v,g],[M,g]])R===O[0]&&C===O[1]||t.set(R,_+2,C,N.GLASS);t.fill(v-1,_+4,T-1,M+1,_+4,E+1,p==="house"?N.LOG:N.COBBLE),t.fill(v,_+4,T,M,_+4,E,N.PLANKS),t.fill(v+1,_+5,T+1,M-1,_+5,E-1,N.PLANKS),t.set(v+1,_+2,T+1,N.TORCH),p==="smith"?(t.chest(M-1,_+1,E-1,"village"),t.chest(M-1,_+1,E-2,"village"),t.set(v+1,_+1,E-1,N.FURNACE),t.set(v+1,_+1,E-2,N.CRAFTING_TABLE),t.fill(M+1,_+1,E-1,M+1,_+1,E-1,0)):c<4&&i()<.7?(t.chest(M-1,_+1,E-1,"village"),c++):i()<.5&&t.set(M-1,_+1,E-1,N.CRAFTING_TABLE),t.set(O[0]+(w==="x2"?1:w==="x1"?-1:0),_+1,O[1]+(w==="z2"?1:w==="z1"?-1:0),N.TORCH)})}buildDesert(t,e,i){let n=e.x,r=e.z,o=this.heightAt(n,r),a=Math.max(o,33);t.fill(n-10,a-6,r-10,n+10,a-1,r+10,N.SANDSTONE),t.fill(n-11,a+1,r-11,n+11,a+14,r+11,0);for(let l=0;l<=10;l++){let c=10-l;t.fill(n-c,a+l,r-c,n+c,a+l,r+c,N.SANDSTONE)}t.fill(n-5,a+1,r-5,n+5,a+5,r+5,0),t.fill(n-5,a-1,r-5,n+5,a-1,r+5,N.SANDSTONE),t.fill(n-1,a,r+5,n+1,a+3,r+11,0),t.fill(n-1,a-1,r+5,n+1,a-1,r+11,N.SANDSTONE);for(let[l,c]of[[-4,-4],[4,-4],[-4,4],[4,4]])t.set(n+l,a,r+c,N.SANDSTONE),t.set(n+l,a+1,r+c,N.SANDSTONE),t.set(n+l,a+2,r+c,N.SANDSTONE);t.chest(n-4,a+3,r-4,"desert"),t.chest(n+4,a+3,r-4,"desert"),t.chest(n-4,a+3,r+4,"desert"),t.chest(n+4,a+3,r+4,"desert"),t.chest(n,a,r-5,"desert"),t.set(n,a+3,r,N.TORCH);for(let[l,c]of[[-5,0],[5,0],[0,-5]])t.set(n+l,a+2,r+c,N.TORCH);t.spawn("zombie",n+2,a+1,r-2),t.spawn("skeleton",n-2,a+1,r+2),t.spawn("spider",n,a+1,r)}buildJungle(t,e,i){let n=e.x,r=e.z,o=Math.max(this.heightAt(n,r),33),a=(l,c,h)=>t.set(l,c,h,i()<.55?N.MOSSY_COBBLE:N.COBBLE);t.fill(n-7,o-5,r-8,n+7,o-1,r+8,N.COBBLE),t.fill(n-8,o+1,r-9,n+8,o+14,r+9,0);for(let l=o;l<=o+6;l++)for(let c=n-6;c<=n+6;c++)for(let h=r-7;h<=r+7;h++)a(c,l,h);for(let l=o+7;l<=o+10;l++)for(let c=n-4;c<=n+4;c++)for(let h=r-5;h<=r+5;h++)a(c,l,h);t.fill(n-5,o+1,r-6,n+5,o+5,r+6,0),t.fill(n-3,o+8,r-4,n+3,o+9,r+4,0),t.fill(n-1,o+1,r+6,n+1,o+3,r+8,0),t.fill(n-1,o+6,r-1,n+1,o+7,r+1,0);for(let l=n-5;l<=n+5;l++)for(let c=r-6;c<=r+6;c++)Math.abs(l-n)<=1&&Math.abs(c-r)<=1||t.set(l,o+6,c,N.MOSSY_COBBLE);t.chest(n-4,o+1,r-5,"jungle"),t.chest(n+4,o+1,r-5,"jungle"),t.chest(n,o+8,r-3,"jungle"),t.set(n-3,o+2,r+3,N.TORCH),t.set(n+3,o+2,r+3,N.TORCH),t.set(n,o+9,r+2,N.TORCH),t.spawn("spider",n,o+1,r),t.spawn("zombie",n+2,o+1,r+2),t.spawn("skeleton",n-2,o+8,r)}buildShip(t,e,i){let n=i()<.5,o=this.heightAt(e.x,e.z),a=(l,c,h,d)=>{n?t.set(e.x+l,h,e.z+c,d):t.set(e.x+c,h,e.z+l,d)};for(let l=0;l<15;l++){let c=l<1||l>13?0:l<3||l>11?1:2;for(let h=-c;h<=c;h++)if(!(i()<.1)&&(a(l,h,o,N.PLANKS),Math.abs(h)===c))for(let d=o+1;d<=o+3+(l>11?1:0);d++)i()>.15&&a(l,h,d,d%2?N.PLANKS:N.LOG);(l===0||l===14)&&a(l,0,o+1,N.PLANKS)}for(let l=o+1;l<=o+9;l++)a(6,0,l,N.LOG);for(let l=-2;l<=2;l++)a(6,l,o+7,N.PLANKS);n?t.chest(e.x+11,o+1,e.z,"ship"):t.chest(e.x,o+1,e.z+11,"ship"),n?t.chest(e.x+3,o+1,e.z+1,"ship"):t.chest(e.x+1,o+1,e.z+3,"ship")}buildStronghold(t,e,i){let o=(g,x)=>[e.x+(g-2)*12,e.z+(x-2)*12],a=(g,x,m)=>{let p=i();t.set(g,x,m,p<.12?N.MOSSY_COBBLE:p<.2?N.COBBLE:N.STONE_BRICKS)},l=(g,x,m,p,_,v)=>{for(let M=x;M<=_;M++)for(let T=m;T<=v;T++)for(let E=g;E<=p;E++)a(E,M,T)},c=[],h=new Set(["2,2"]),d=[[2,2]];for(;d.length;){let[g,x]=d[d.length-1],m=[[1,0],[-1,0],[0,1],[0,-1]].map(([_,v])=>[g+_,x+v]).filter(([_,v])=>_>=0&&_<5&&v>=0&&v<5&&!h.has(_+","+v));if(!m.length){d.pop();continue}let p=m[i()*m.length|0];h.add(p[0]+","+p[1]),c.push([g,x,p[0],p[1]]),d.push(p)}for(let g=0;g<6;g++){let x=i()*4|0,m=i()*5|0;c.push([x,m,x+1,m]);let p=i()*5|0,_=i()*4|0;c.push([p,_,p,_+1])}for(let g=0;g<5;g++)for(let x=0;x<5;x++){let[m,p]=o(g,x),_=g===2&&x===2,v=_?6:4,M=_?7:5;l(m-v-1,9,p-v-1,m+v+1,10+M,p+v+1)}for(let[g,x,m,p]of c){let[_,v]=o(g,x),[M,T]=o(m,p);l(Math.min(_,M)-2,9,Math.min(v,T)-2,Math.max(_,M)+2,14,Math.max(v,T)+2)}for(let g=0;g<5;g++)for(let x=0;x<5;x++){let[m,p]=o(g,x),_=g===2&&x===2,v=_?6:3,M=_?6:3;if(t.fill(m-M,10,p-M,m+M,10+(_?6:4),p+M,0),!_){let T=i();T<.3&&t.chest(m+2,10,p+2,"stronghold"),t.set(m-M,12,p,N.TORCH),t.set(m+M,12,p,N.TORCH),T>.55&&(t.spawn(["silverfish","zombie","skeleton","silverfish"][i()*4|0],m-1,10,p-1),t.spawn("silverfish",m+1,10,p+1))}}for(let[g,x,m,p]of c){let[_,v]=o(g,x),[M,T]=o(m,p);t.fill(Math.min(_,M),10,Math.min(v,T)-1,Math.max(_,M),12,Math.max(v,T)+1,0),t.fill(Math.min(_,M)-1,10,Math.min(v,T),Math.max(_,M)+1,12,Math.max(v,T),0),t.fill(Math.min(_,M)-1,10,Math.min(v,T)-1,Math.max(_,M)+1,12,Math.max(v,T)+1,0)}let[u,f]=o(2,2);t.fill(u-3,10,f-3,u+3,12,f+3,N.STONE_BRICKS),t.fill(u-1,10,f-1,u+1,12,f+1,N.LAVA),t.fill(u-1,13,f-1,u+1,13,f+1,0);for(let g=-1;g<=1;g++)t.set(u-2,13,f+g,N.END_FRAME),t.set(u+2,13,f+g,N.END_FRAME),t.set(u+g,13,f-2,N.END_FRAME),t.set(u+g,13,f+2,N.END_FRAME);for(let[g,x]of[[-5,-5],[5,-5],[-5,5],[5,5]])t.set(u+g,12,f+x,N.TORCH);t.spawn("silverfish",u+4,10,f+4),t.spawn("silverfish",u-4,10,f-4),t.spawn("zombie",u+4,10,f-4),t.spawn("skeleton",u-4,10,f+4),t.portalRoom={x:u,y:13,z:f}}netherDensity(t,e,i){let n=this.n1.fbm3(t*.016,e*.035,i*.016,3),r=1-Math.abs(e-34)/20,o=n*1.2+r*.9-.62;return e>52&&(o+=(e-52)*.3),o}genNether(t){let e=t.cx*16,i=t.cz*16,n=t.b,r=(l,c,h)=>l+16*(h+16*c),o=Ke(vi(t.cx,t.cz,this.seed,13)*4294967296),a=14;for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=e+c,d=i+l;for(let u=0;u<64;u++){let f=0;u===0||u===63||u===62&&o()<.5||u===1&&o()<.5?f=N.BEDROCK:u<=2?f=N.NETHERRACK:this.netherDensity(h,u,d)>0?f=N.NETHERRACK:u<=a&&(f=N.LAVA),n[r(c,u,l)]=f}}for(let l=0;l<16;l++)for(let c=0;c<16;c++)for(let h=4;h<62;h++){let d=r(c,h,l);if(n[d]!==N.NETHERRACK)continue;let u=o(),f=n[r(c,h+1,l)],g=n[r(c,h-1,l)];if(f===0&&h>a&&u<.12&&this.n2.n2((e+c)*.07,(i+l)*.07)>.1)n[d]=N.SOUL_SAND;else if(g===0&&u<.003&&h>20){n[d]=N.GLOWSTONE;for(let x=0;x<6;x++){let m=c+(o()*3|0)-1,p=l+(o()*3|0)-1,_=h-(o()*3|0);m>=0&&m<16&&p>=0&&p<16&&n[r(m,_,p)]===N.NETHERRACK&&(n[r(m,_,p)]=N.GLOWSTONE)}}else u>.9985&&h<44&&h>16?n[d]=N.ANCIENT_DEBRIS:u>.992&&u<=.9985?n[d]=N.GOLD_ORE:u>.99&&u<=.992&&f===0&&(n[d]=N.MAGMA)}if(this.applyStructures(t),o()<.07){let l=o()*16|0,c=o()*16|0,h=!0;for(let d=36;d<46;d++)n[r(l,d,c)]&&(h=!1);h&&t.spawns.push({type:"ghast",x:e+l+.5,y:40,z:i+c+.5})}if(o()<.25){let l=o()*16|0,c=o()*16|0;for(let h=56;h>a+1;h--)if(n[r(l,h,c)]===N.NETHERRACK&&!n[r(l,h+1,c)]){t.spawns.push({type:"magma_cube",x:e+l+.5,y:h+1,z:i+c+.5});break}}}netherSolid(t,e,i){return this.netherDensity(t,e,i)>0}buildFortress(t,e,i){let n=e.x,r=e.z,o=36,a=N.NETHER_BRICK,l=(h,d)=>{for(let u=o-1;u>3&&!(this.netherSolid(h,u,d)&&u>14);u--)t.set(h,u,d,a)},c=(h,d,u)=>{for(let f=d;f<=u;f++){for(let g=-2;g<=2;g++){let x=h?n+f:n+g,m=h?r+g:r+f;for(let _=o+1;_<=o+5;_++)t.set(x,_,m,0);if(t.set(x,o,m,a),Math.abs(g)===2)for(let _=o+1;_<=o+4;_++)t.set(x,_,m,_===o+3&&f%3!==0?0:a);t.set(x,o+5,m,a)}if(f%9===0)for(let g of[-2,2])l(h?n+f:n+g,h?r+g:r+f);if(f%6===0){let g=h?n+f:n,x=h?r:r+f;t.set(g,o+4,x,N.GLOWSTONE)}}};t.fill(n-7,o,r-7,n+7,o+9,r+7,0),t.fill(n-7,o-1,r-7,n+7,o,r+7,a);for(let h=o+1;h<=o+7;h++)for(let d=-7;d<=7;d++)t.set(n+d,h,r-7,a),t.set(n+d,h,r+7,a),t.set(n-7,h,r+d,a),t.set(n+7,h,r+d,a);t.fill(n-7,o+8,r-7,n+7,o+8,r+7,a),t.fill(n-6,o+1,r-6,n+6,o+7,r+6,0),t.fill(n-7,o+1,r-1,n-7,o+3,r+1,0),t.fill(n+7,o+1,r-1,n+7,o+3,r+1,0),t.fill(n-1,o+1,r-7,n+1,o+3,r-7,0),t.fill(n-1,o+1,r+7,n+1,o+3,r+7,0);for(let[h,d]of[[-6,-6],[6,-6],[-6,6],[6,6]])t.fill(n+h,o+1,r+d,n+h,o+6,r+d,a);t.fill(n-1,o+1,r-1,n+1,o+1,r+1,a),t.set(n,o+2,r,N.GLOWSTONE),t.chest(n-5,o+1,r-5,"nether"),t.chest(n+5,o+1,r+5,"nether");for(let h=0;h<4;h++)t.spawn("blaze",n+(h%2*6-3),o+2,r+((h>>1)*6-3));c(!0,8,34),c(!0,-34,-8),c(!1,8,30),c(!1,-30,-8);for(let[h,d]of[[35,0],[-35,0],[0,31],[0,-31]])t.fill(n+h-4,o,r+d-4,n+h+4,o+6,r+d+4,a),t.fill(n+h-3,o+1,r+d-3,n+h+3,o+5,r+d+3,0),t.fill(n+h-4,o+1,r+d-1,n+h+4,o+3,r+d+1,0),t.fill(n+h-1,o+1,r+d-4,n+h+1,o+3,r+d+4,0),t.set(n+h,o+5,r+d,N.GLOWSTONE),l(n+h-4,r+d-4),l(n+h+4,r+d-4),l(n+h-4,r+d+4),l(n+h+4,r+d+4),t.spawn("wither_skeleton",n+h,o+1,r+d);for(let h of[-20,-14,14,20])t.spawn("wither_skeleton",n+h,o+1,r),t.spawn("wither_skeleton",n,o+1,r+h);t.chest(n+35,o+1,r+2,"nether")}pillars(){if(this._pillars)return this._pillars;let t=[16,20,24,28,22,18];return this._pillars=t.map((e,i)=>({x:Math.round(Math.cos(i*Math.PI/3+.3)*26),z:Math.round(Math.sin(i*Math.PI/3+.3)*26),h:e,r:i%2?2.6:3.3})),this._pillars}genEnd(t){let e=t.cx*16,i=t.cz*16,n=t.b,r=(c,h,d)=>c+16*(d+16*h),o=48,a=Ke(vi(t.cx,t.cz,this.seed,17)*4294967296);for(let c=0;c<16;c++)for(let h=0;h<16;h++){let d=e+h,u=i+c,f=Math.hypot(d,u),g=44+this.n1.n2(d*.05,u*.05)*6;if(f<g){let x=Math.floor((1-(f/g)**2)*16)+2;for(let m=o-x;m<=o;m++)n[r(h,m,c)]=N.END_STONE}for(let x of this.pillars())if(Math.hypot(d-x.x,u-x.z)<=x.r){for(let m=o-4;m<=o+x.h;m++)n[r(h,m,c)]=N.OBSIDIAN;Math.hypot(d-x.x,u-x.z)<1.2&&(n[r(h,o+x.h+1,c)]=N.BEDROCK)}}if(t.cx>=1&&t.cx<=3&&t.cz>=-1&&t.cz<=0)for(let c=-2;c<=2;c++)for(let h=-2;h<=2;h++){let d=34+h-e,u=c-i;if(!(d<0||d>15||u<0||u>15)){n[r(d,o,u)]=N.OBSIDIAN;for(let f=o+1;f<=o+4;f++)n[r(d,f,u)]=0}}for(let c of this.pillars())c.x>>4===t.cx&&c.z>>4===t.cz&&t.spawns.push({type:"crystal",x:c.x+.5,y:o+c.h+2,z:c.z+.5});let l=Math.hypot(e+8,i+8);if(l<44&&l>8&&a()<.5){let c=1+(a()*2|0);for(let h=0;h<c;h++){let d=e+(a()*16|0),u=i+(a()*16|0);Math.hypot(d-34,u)>6&&t.spawns.push({type:"enderman",x:d+.5,y:o+1,z:u+.5})}}}};var $c=class{constructor(t,e){this.cx=t,this.cz=e,this.b=new Uint8Array(256*96),this.hm=new Int16Array(256).fill(-1),this.maxY=0,this.dirty=!0,this.group=null,this.spawns=[],this.meshed=!1}},al=new Uint8Array(256);_t.forEach(s=>{s&&s.block&&s.opaque&&!s.fluid&&!s.cross&&(al[s.id]=1)});var is=class s{constructor(t,e){this.dim=t,this.seed=e,this.chunks=new Map,this.tiles=new Map,this.gen=new ol(t,e,this),this.dirtyList=new Set,this.entities=[],this.skyless=t!=="overworld"}static key(t,e){return(t+32768)*65536+(e+32768)}getChunk(t,e){return this.chunks.get(s.key(t,e))}ensureChunk(t,e){let i=this.chunks.get(s.key(t,e));if(i)return i;i=new $c(t,e),this.chunks.set(s.key(t,e),i),this.gen.generate(i);for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let o=this.getChunk(t+n,e+r);o&&o!==i&&(o.dirty=!0,this.dirtyList.add(o))}return i.dirty=!0,this.dirtyList.add(i),i}getBlock(t,e,i){if(e<0||e>=96)return 0;let n=this.chunks.get(s.key(t>>4,i>>4));return n?n.b[(t&15)+16*((i&15)+16*e)]:0}hasChunkAt(t,e){return this.chunks.has(s.key(t>>4,e>>4))}isSolid(t,e,i){if(e<0)return!0;if(e>=96)return!1;let n=this.chunks.get(s.key(t>>4,i>>4));return n?_t[n.b[(t&15)+16*((i&15)+16*e)]].solid===!0:!0}setBlock(t,e,i,n,r){if(e<0||e>=96)return!1;let o=t>>4,a=i>>4,l=this.chunks.get(s.key(o,a));if(!l)return!1;let c=t&15,h=i&15,d=c+16*(h+16*e),u=l.b[d];if(u===n)return!1;l.b[d]=n;let f=c+h*16;if(al[n])e>l.hm[f]&&(l.hm[f]=e);else if(al[u]&&e===l.hm[f]){let g=e-1;for(;g>=0&&!al[l.b[c+16*(h+16*g)]];)g--;l.hm[f]=g}return n&&e>l.maxY&&(l.maxY=e),r||this.markDirty(t,e,i),!0}markDirty(t,e,i){let n=t>>4,r=i>>4,o=t&15,a=i&15,l=(d,u)=>{let f=this.getChunk(d,u);f&&(f.dirty=!0,this.dirtyList.add(f))};l(n,r);let c=o<7?-1:o>=9?1:0,h=a<7?-1:a>=9?1:0;c&&l(n+c,r),h&&l(n,r+h),c&&h&&l(n+c,r+h)}skyLit(t,e,i){if(this.skyless)return!1;let n=this.getChunk(t>>4,i>>4);return n?e>n.hm[(t&15)+(i&15)*16]:!0}topY(t,e){let i=this.getChunk(t>>4,e>>4);return i?i.hm[(t&15)+(e&15)*16]:0}surfaceY(t,e){for(let i=95;i>=0;i--){let n=_t[this.getBlock(t,i,e)];if(n.solid||n.fluid)return i}return 0}tileKey(t,e,i){return t+","+e+","+i}};var ge=30,Z1=_t.length,Un=new Uint8Array(256),jc=new Uint8Array(256),Nd=new Uint8Array(256),Dd=new Uint8Array(256),cl=new Uint8Array(256);_t.forEach(s=>{!s||!s.block||(Un[s.id]=s.opaque?1:0,jc[s.id]=s.light||0,Nd[s.id]=s.sameCull||s.fluid||s.name==="LEAVES"||s.name==="JUNGLE_LEAVES"?1:0,Dd[s.id]=s.group==="opaque"?0:s.group==="cutout"?1:2,cl[s.id]=s.fluid?1:0)});var Od=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.68,t:[1,2]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.68,t:[1,2]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1,t:[0,2]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5,t:[0,2]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.82,t:[0,1]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.82,t:[0,1]}];var ll=1/Pn;function Ur(s){let t=s%Pn,e=s/Pn|0,i=4e-4;return[t*ll+i,1-(e+1)*ll+i,(t+1)*ll-i,1-e*ll-i]}function Ud(s,t){let e;return t===2?e=s.tiles[0]:t===3?e=s.tiles[1]:e=s.tiles[3]&&(t===4||t===5)?s.tiles[3]:s.tiles[2],Ln[e]}var Fr=class{constructor(){this.pos=[],this.uv=[],this.light=[],this.idx=[],this.n=0}};function Fd(s,t){let e=t.cx*16-7,i=t.cz*16-7,n=[],r=t.maxY;for(let p=-1;p<=1;p++)for(let _=-1;_<=1;_++){let v=s.getChunk(t.cx+_,t.cz+p);n.push(v||null),v&&v.maxY>r&&(r=v.maxY)}let o=Math.min(96,r+3),a=ge*ge,l=new Uint8Array(a*o);for(let p=0;p<ge;p++){let _=i+p,v=(_>>4)-t.cz+1,M=_&15;for(let T=0;T<ge;T++){let E=e+T,y=(E>>4)-t.cx+1,w=E&15,O=n[v*3+y];if(!O)continue;let R=w+16*M,C=T+ge*p;for(let U=0;U<o;U++)l[C]=O.b[R],R+=256,C+=a}}let c=new Uint8Array(a*o),h=new Uint8Array(a*o),d=s.skyless,u=new Int16Array(a).fill(-1),f=[];for(let p=0;p<ge;p++)for(let _=0;_<ge;_++){let v=_+ge*p,M=-1;if(!d)for(let T=o-1;T>=0;T--){let E=l[v+a*T];if(E&&Un[E]&&!cl[E]){M=T;break}}if(u[v]=M,d)for(let T=0;T<o;T++)c[v+a*T]=15;else for(let T=M+1;T<o;T++)c[v+a*T]=15}let g=(p,_)=>{let v=0;for(;v<f.length;){let M=f[v++],T=p[M]-_;if(T<=0)continue;let E=M/a|0,y=M-E*a,w=y/ge|0,O=y-w*ge,R=C=>{p[C]<T&&!Un[l[C]]&&(p[C]=T,f.push(C))};O>0&&R(M-1),O<ge-1&&R(M+1),w>0&&R(M-ge),w<ge-1&&R(M+ge),E>0&&R(M-a),E<o-1&&R(M+a)}};if(!d){f.length=0;for(let p=1;p<ge-1;p++)for(let _=1;_<ge-1;_++){let v=_+ge*p,M=u[v],T=Math.max(u[v-1],u[v+1],u[v-ge],u[v+ge]);for(let E=M+1;E<=T&&E<o;E++)f.push(v+a*E)}g(c,2)}f.length=0;for(let p=0;p<l.length;p++){let _=l[p];_&&jc[_]&&(h[p]=jc[_],f.push(p))}g(h,2);let x=[new Fr,new Fr,new Fr],m=(p,_,v,M)=>{let T=x[p];for(let y=0;y<4;y++)T.pos.push(_[y][0],_[y][1],_[y][2]),T.uv.push(v[y][0],v[y][1]),T.light.push(M[y][0],M[y][1],M[y][2]);let E=T.n;M[0][3]+M[2][3]>M[1][3]+M[3][3]?T.idx.push(E+1,E+2,E+3,E+1,E+3,E):T.idx.push(E,E+1,E+2,E,E+2,E+3),T.n+=4};for(let p=0;p<o;p++)for(let _=0;_<16;_++)for(let v=0;v<16;v++){let M=v+7,T=_+7,E=M+ge*T+a*p,y=l[E];if(!y)continue;let w=_t[y],O=Dd[y],R=v,C=p,U=_;if(w.cross){let H=c[E]/15,X=h[E]/15,B=Ur(Ln[w.tiles[2]]),tt=[H,X,1,H+X],W=[[R+.1,C,U+.1],[R+.9,C,U+.9],[R+.9,C+1,U+.9],[R+.1,C+1,U+.1]],J=[[R+.9,C,U+.1],[R+.1,C,U+.9],[R+.1,C+1,U+.9],[R+.9,C+1,U+.1]],nt=[[B[0],B[1]],[B[2],B[1]],[B[2],B[3]],[B[0],B[3]]];m(1,W,nt,[tt,tt,tt,tt]),m(1,J,nt,[tt,tt,tt,tt]);continue}if(w.portal){let H=c[E]/15,X=h[E]/15,B=Ur(Ln.portal),tt=[Math.max(H,.9),Math.max(X,.9),1,2],W=[[B[0],B[1]],[B[2],B[1]],[B[2],B[3]],[B[0],B[3]]],J=w.portal==="x"?[[R,C,U+.5],[R+1,C,U+.5],[R+1,C+1,U+.5],[R,C+1,U+.5]]:[[R+.5,C,U],[R+.5,C,U+1],[R+.5,C+1,U+1],[R+.5,C+1,U]];m(2,J,W,[tt,tt,tt,tt]);continue}if(w.special==="endportal"){let H=Ur(Ln.end_portal),X=[1,1,1,2];m(0,[[R,C+.75,U+1],[R+1,C+.75,U+1],[R+1,C+.75,U],[R,C+.75,U]],[[H[0],H[1]],[H[2],H[1]],[H[2],H[3]],[H[0],H[3]]],[X,X,X,X]);continue}let q=cl[y],P=w.h||1;for(let H=0;H<6;H++){let X=Od[H],B=M+X.n[0],tt=p+X.n[1],W=T+X.n[2],J=0;if(tt>=0&&tt<o&&(J=l[B+ge*W+a*tt]),J&&(Un[J]&&!_t[J].h||J===y&&Nd[y])||q&&J&&cl[J]&&J===y)continue;let nt=B+ge*W+a*Math.min(Math.max(tt,0),o-1),[Et,Bt]=X.t,$=[],gt=[],St=Ud(w,H),At=Ur(St);for(let xt=0;xt<4;xt++){let Ot=X.c[xt],we=Ot[Et]*2-1,Lt=Ot[Bt]*2-1,Zt=[0,0,0],jt=[0,0,0];Zt[Et]=we,jt[Bt]=Lt;let Xt=nt+Zt[0]+ge*Zt[2]+a*Zt[1],Ce=nt+jt[0]+ge*jt[2]+a*jt[1],Se=nt+Zt[0]+jt[0]+ge*(Zt[2]+jt[2])+a*(Zt[1]+jt[1]),Xe=Un[l[Xt]],fe=Un[l[Ce]],Be=c[nt],pe=h[nt],di=1;J&&Un[J]&&(Be=0,pe=0),Xe||(Be+=c[Xt],pe+=h[Xt]),fe||(Be+=c[Ce],pe+=h[Ce]),!(Xe&&fe)&&!Un[l[Se]]&&(Be+=c[Se],pe+=h[Se]),Be/=4,pe/=4;let li=Be/15+pe/15;$.push([Be/15,pe/15,X.shade,li]);let D=Ot[1];q&&D===1?l[M+ge*T+a*Math.min(p+1,o-1)]!==y&&(D=.88):P!==1&&(D=D*P),gt.push([v+Ot[0],p+D,_+Ot[2]])}m(O,gt,[[At[0],At[1]],[At[2],At[1]],[At[2],At[3]],[At[0],At[3]]],$)}}return x.map(p=>({pos:new Float32Array(p.pos),uv:new Float32Array(p.uv),light:new Float32Array(p.light),idx:p.n>65535?new Uint32Array(p.idx):new Uint16Array(p.idx),n:p.n}))}function Bd(s){let t=[],e=[],i=[],n=[];return Od.forEach((r,o)=>{let a=Ur(Ud(s,o)),l=t.length/3;r.c.forEach((c,h)=>{t.push(c[0]-.5,c[1]-.5,c[2]-.5),e.push(h===0||h===3?a[0]:a[2],h<2?a[1]:a[3]);let d=r.shade;n.push(d,d,d)}),i.push(l,l+1,l+2,l,l+2,l+3)}),{pos:t,uv:e,idx:i,col:n}}var Br=.001;function Qc(s,t,e,i){let n=t.w/2,r=Math.floor(t.x-n+1e-4),o=Math.floor(t.x+n-1e-4),a=Math.floor(t.y+1e-4),l=Math.floor(t.y+t.h-1e-4),c=Math.floor(t.z-n+1e-4),h=Math.floor(t.z+n-1e-4),d=!1,u=i>0?1/0:-1/0;for(let f=a;f<=l;f++)for(let g=c;g<=h;g++)for(let x=r;x<=o;x++)s.isSolid(x,f,g)&&(d=!0,e==="x"?u=i>0?Math.min(u,x-n-Br):Math.max(u,x+1+n+Br):e==="z"?u=i>0?Math.min(u,g-n-Br):Math.max(u,g+1+n+Br):u=i>0?Math.min(u,f-t.h-Br):Math.max(u,f+1));return d&&(t[e]=u,e==="x"?(t.vx=0,t.hitX=!0):e==="z"?(t.vz=0,t.hitZ=!0):(i<0&&(t.onGround=!0),t.vy=0)),d}function Vs(s,t,e,i){t.onGround=!1,t.hitX=!1,t.hitZ=!1;let n=Math.max(1,Math.ceil(Math.max(Math.abs(t.vx),Math.abs(t.vy),Math.abs(t.vz))*e/.35)),r=e/n;for(let o=0;o<n;o++){let a=t.vy*r;a&&(t.y+=a,Qc(s,t,"y",a));let l=t.onGround||t.wasGround;if(a=t.vx*r,a){let c=t.x;t.x+=a,Qc(s,t,"x",a),i&&l&&!zd(s,t)&&(t.x=c,t.vx=0)}if(a=t.vz*r,a){let c=t.z;t.z+=a,Qc(s,t,"z",a),i&&l&&!zd(s,t)&&(t.z=c,t.vz=0)}}t.wasGround=t.onGround}function zd(s,t){let e=t.w/2;for(let i of[-e,e])for(let n of[-e,e])if(s.isSolid(Math.floor(t.x+i),Math.floor(t.y-.05),Math.floor(t.z+n)))return!0;return!1}function Fn(s,t,e,i){let n=s.getBlock(Math.floor(t),Math.floor(e),Math.floor(i));return _t[n].fluid||null}function kd(s,t,e,i,n,r){let o=n/2;for(let a=Math.floor(e+1e-4);a<=Math.floor(e+r-1e-4);a++)for(let l=Math.floor(i-o+1e-4);l<=Math.floor(i+o-1e-4);l++)for(let c=Math.floor(t-o+1e-4);c<=Math.floor(t+o-1e-4);c++)if(s.isSolid(c,a,l))return!0;return!1}function hl(s,t,e,i,n,r,o,a,l){let c=Math.floor(t),h=Math.floor(e),d=Math.floor(i),u=n>0?1:-1,f=r>0?1:-1,g=o>0?1:-1,x=n?Math.abs(1/n):1/0,m=r?Math.abs(1/r):1/0,p=o?Math.abs(1/o):1/0,_=n?(n>0?c+1-t:t-c)*x:1/0,v=r?(r>0?h+1-e:e-h)*m:1/0,M=o?(o>0?d+1-i:i-d)*p:1/0,T=0,E=0,y=0,w=0;for(let O=0;O<200;O++){let R=s.getBlock(c,h,d);if(R){let C=_t[R];if(C.portal?!1:C.fluid?!!l:C.special!=="endportal")return{x:c,y:h,z:d,id:R,nx:T,ny:E,nz:y,t:w}}if(_<v&&_<M){if(w=_,w>a)break;c+=u,_+=x,T=-u,E=0,y=0}else if(v<M){if(w=v,w>a)break;h+=f,v+=m,T=0,E=-f,y=0}else{if(w=M,w>a)break;d+=g,M+=p,T=0,E=0,y=-g}}return null}function Gd(s,t,e,i,n,r,o,a,l,c,h,d){let u=0,f=1/0,g=[s,t,e],x=[i,n,r],m=[o,a,l],p=[c,h,d];for(let _=0;_<3;_++)if(Math.abs(x[_])<1e-9){if(g[_]<m[_]||g[_]>p[_])return-1}else{let v=(m[_]-g[_])/x[_],M=(p[_]-g[_])/x[_];if(v>M){let T=v;v=M,M=T}if(u=Math.max(u,v),f=Math.min(f,M),u>f)return-1}return u}function ns(s,t,e,i,n,r,o){let a=n-t,l=r-e,c=o-i,h=Math.hypot(a,l,c);if(h<.01)return!0;let d=hl(s,t,e,i,a/h,l/h,c/h,h,!1);return d?!_t[d.id].opaque:!0}var th=new Map;function ul(s,t){if(th.has(s))return th.get(s);let e=document.createElement("canvas");e.width=e.height=16,t(e.getContext("2d"));let i=new Yi(e);return i.magFilter=ce,i.minFilter=ce,th.set(s,i),i}function Re(s,t=.12,e=1){return ul("n"+s+t+e,i=>{i.fillStyle=s,i.fillRect(0,0,16,16);let n=Ke(e+s.length*13+s.charCodeAt(1)*7);for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=n();a<.3?(i.fillStyle=`rgba(0,0,0,${t*n()})`,i.fillRect(o,r,1,1)):a>.8&&(i.fillStyle=`rgba(255,255,255,${t*.6*n()})`,i.fillRect(o,r,1,1))}})}function gn(s,t,e){return ul("f"+s+t,i=>{i.fillStyle=t,i.fillRect(0,0,16,16),e(i)})}var pt=(s,t,e,i,n,r)=>{s.fillStyle=t,s.fillRect(e,i,n,r)},Bn={Steve:{skin:"#c8956a",hair:"#3a2a1a",shirt:"#1ab5b5",pants:"#3a3aa0",shoes:"#5a5a5a",eyes:"#3a4ad0"},Alex:{skin:"#e0b090",hair:"#d98a2a",shirt:"#4caf50",pants:"#6b4a2a",shoes:"#4a3a2a",eyes:"#2a8a3a"},Ninja:{skin:"#d9a77c",hair:"#111111",shirt:"#222222",pants:"#1a1a1a",shoes:"#111111",eyes:"#222222"},Feuer:{skin:"#e8b088",hair:"#a02010",shirt:"#d42a1a",pants:"#3a2a2a",shoes:"#2a2a2a",eyes:"#c03020"},Eis:{skin:"#e8c8b0",hair:"#e8f4ff",shirt:"#5ac8fa",pants:"#2a4a8a",shoes:"#cccccc",eyes:"#2060d0"}};function oe(s,t){return new Kn(Object.assign({map:s},t||{}))}function de(s,t,e,i){let n=new ie(new Me(t[0],t[1],t[2]),e);return n.position.set(i[0],i[1],i[2]),s.add(n),n}function ki(s,t,e,i){let n=new Ht;n.position.set(i[0],i[1],i[2]);let r=new ie(new Me(t[0],t[1],t[2]),e);return r.position.y=-t[1]/2,n.add(r),s.add(n),n}function tn(s){let t=[];return s.traverse(e=>{e.isMesh&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.emissive&&!t.includes(i)&&t.push(i)})}),t}function Hx(s,t,e,i,n){return[oe(s),oe(s),oe(t),oe(e),oe(i),oe(n||s)]}function dl(s){let t=s.u||.0625,[e,i,n]=s.head||[8,8,8],[r,o,a]=s.body||[8,12,4],[l,c,h]=s.arm||[4,12,4],[d,u,f]=s.leg||[4,12,4],g=new Ht,x=u*t,m=o*t,p=s.colors,_=oe(Re(p.shirt,.14,2)),v=oe(Re(p.pants,.14,3)),M=oe(Re(p.arm||p.skin,.14,4)),T=gn(s.name+"face",p.skin,s.face),E=s.sideTex?Re(s.sideTex,.14,5):Re(p.skin,.12,5),y=Re(p.hair||p.skin,.14,6),w=Hx(E,y,Re(p.skin,.12,7),T,s.backTex?Re(p.hair||p.skin,.14,8):E),O=[ki(g,[d*t,x,f*t],v,[-d*t/2-.001,x,0]),ki(g,[d*t,x,f*t],v,[d*t/2+.001,x,0])];de(g,[r*t,m,a*t],_,[0,x+m/2,0]);let R=x+m-(s.shoulder??2)*t,C=[ki(g,[l*t,c*t,h*t],M,[-(r/2+l/2)*t-.001,R,0]),ki(g,[l*t,c*t,h*t],M,[(r/2+l/2)*t+.001,R,0])],U=new Ht;U.position.set(0,x+m,0),de(U,[e*t,i*t,n*t],w,[0,i*t/2,0]),g.add(U),s.hatColor&&(de(U,[(e+1)*t,(i+1)*t,(n+1)*t],oe(Re(s.hatColor,.1,9),{transparent:!0,opacity:0}),[0,i*t/2,0]).visible=!1);let q={root:g,legs:O,arms:C,head:U,phase:0,atk:0,mats:[],height:(u+o+i)*t};return q.update=(P,H,X,B)=>{q.phase+=P*H*(s.stride||2.6);let tt=Math.min(1,H/3)*.9;O[0].rotation.x=Math.sin(q.phase)*tt,O[1].rotation.x=-Math.sin(q.phase)*tt;let W=s.armsForward?-1.45:0;C[0].rotation.x=W-Math.sin(q.phase)*tt*(s.armsForward?.15:1),C[1].rotation.x=W+Math.sin(q.phase)*tt*(s.armsForward?.15:1),X>0&&(C[1].rotation.x=W-Math.sin(X*Math.PI)*1.6)},q.mats=tn(g),q}function Hd(s){let t=Object.assign({},Bn.Steve,s||{});return dl({name:"p"+JSON.stringify(t),u:.05625,colors:{skin:t.skin,hair:t.hair,shirt:t.shirt,pants:t.pants,arm:t.skin},face:e=>{pt(e,t.hair,0,0,16,4),pt(e,t.hair,0,4,2,3),pt(e,t.hair,14,4,2,3),pt(e,"#ffffff",3,8,3,2),pt(e,"#ffffff",10,8,3,2),pt(e,t.eyes,4,8,2,2),pt(e,t.eyes,10,8,2,2),pt(e,"#8a5a3a",6,11,4,1),pt(e,"#a06a4a",7,12,2,1)},sideTex:t.hair,backTex:!0})}function Vx(s){pt(s,"#1a3a1a",0,0,16,3),pt(s,"#000000",3,7,3,3),pt(s,"#000000",10,7,3,3),pt(s,"#2a4a2a",5,12,6,2)}function Wx(s){pt(s,"#000000",3,6,3,3),pt(s,"#000000",10,6,3,3),pt(s,"#8a8a8a",7,9,2,2),pt(s,"#555555",4,12,8,1),pt(s,"#777777",4,13,8,1)}function Xx(s){pt(s,"#a020f0",2,8,5,2),pt(s,"#e090ff",3,8,2,2),pt(s,"#a020f0",9,8,5,2),pt(s,"#e090ff",10,8,2,2)}function eh(s){let t=dl({name:"zombie",u:.05625,colors:{skin:"#4f8a3a",shirt:"#2a8a98",pants:"#3a3a8a",hair:"#3f7030",arm:"#4f8a3a"},face:Vx,armsForward:!0,stride:2.2});return s&&(t.root.scale.setScalar(.55),t.head.scale.setScalar(1.35),t.head.position.y*=1),t}function ih(s){return dl({name:s?"wither":"skel",u:s?.0675:.05625,colors:s?{skin:"#2a2a2a",shirt:"#242424",pants:"#202020",hair:"#2a2a2a",arm:"#2a2a2a"}:{skin:"#c0c0c0",shirt:"#a8a8a8",pants:"#b4b4b4",hair:"#c0c0c0",arm:"#b4b4b4"},face:s?e=>{pt(e,"#000000",3,6,3,3),pt(e,"#000000",10,6,3,3),pt(e,"#444444",4,12,8,1)}:Wx,body:[8,12,4],arm:[2,12,2],leg:[2,12,2],armsForward:!!s,stride:2.4})}function Vd(){let s=dl({name:"ender",u:.0625,colors:{skin:"#161616",shirt:"#101010",pants:"#101010",hair:"#161616",arm:"#101010"},face:Xx,body:[8,12,4],arm:[2,30,2],leg:[2,30,2],shoulder:0,stride:2});return s.mouth=null,s}function Wd(){let s=new Ht,t=1/16,e=Re("#4aa84a",.3,21),i=oe(e),n=gn("creeper","#4aa84a",l=>{pt(l,"#000000",2,4,4,4),pt(l,"#000000",10,4,4,4),pt(l,"#000000",6,8,4,5),pt(l,"#000000",4,10,2,5),pt(l,"#000000",10,10,2,5)}),r=new Ht;r.position.set(0,18*t,0),de(r,[8*t,8*t,8*t],[i,i,i,i,oe(n),i],[0,4*t,0]),s.add(r),de(s,[8*t,12*t,4*t],i,[0,12*t,0]);let o=[[-2,2],[2,2],[-2,-2],[2,-2]].map(([l,c])=>ki(s,[4*t,6*t,4*t],i,[l*t,6*t,c*t])),a={root:s,legs:o,head:r,phase:0,mats:[],height:1.6,fuse:0};return a.update=(l,c)=>{a.phase+=l*c*3;let h=Math.min(1,c/3)*.8;o[0].rotation.x=Math.sin(a.phase)*h,o[3].rotation.x=Math.sin(a.phase)*h,o[1].rotation.x=-Math.sin(a.phase)*h,o[2].rotation.x=-Math.sin(a.phase)*h},a.mats=tn(s),a}function nh(s){let t=new Ht,e=oe(Re(s.body,.18,31)),i=oe(Re(s.leg||s.body,.18,32)),n=oe(Re(s.head,.16,33)),r=oe(gn(s.name,s.head,s.face)),[o,a,l]=s.bs,[c,h,d]=s.hs,[u,f,g]=s.ls;de(t,[o,a,l],e,[0,f+a/2,0]);let x=new Ht;x.position.set(0,f+a*(s.headY??.8),l/2+d*.2),de(x,[c,h,d],[n,n,n,n,r,n],[0,0,d/2-d*.2]),t.add(x);let m=[[-1,1],[1,1],[-1,-1],[1,-1]].map(([_,v])=>ki(t,[u,f,g],i,[_*(o/2-u/2),f,v*(l/2-g/2-.02)])),p={root:t,legs:m,head:x,phase:0,mats:[],height:f+a+(s.extraH||0)};return p.update=(_,v)=>{p.phase+=_*v*3.2;let M=Math.min(1,v/2)*.7;m[0].rotation.x=Math.sin(p.phase)*M,m[3].rotation.x=Math.sin(p.phase)*M,m[1].rotation.x=-Math.sin(p.phase)*M,m[2].rotation.x=-Math.sin(p.phase)*M},p.mats=tn(t),p}function Xd(){return nh({name:"pig",body:"#f0a0a8",head:"#f0a0a8",bs:[.6,.55,.9],hs:[.5,.5,.45],ls:[.22,.3,.22],headY:.75,face:s=>{pt(s,"#ffffff",3,5,3,2),pt(s,"#ffffff",10,5,3,2),pt(s,"#3a2a6a",4,5,2,2),pt(s,"#3a2a6a",10,5,2,2),pt(s,"#d07880",5,9,6,4),pt(s,"#a05860",6,10,1,2),pt(s,"#a05860",9,10,1,2)}})}function qd(){return nh({name:"cow",body:"#5a3a24",head:"#4a3020",leg:"#4a3020",bs:[.7,.75,1.1],hs:[.5,.5,.45],ls:[.24,.5,.24],headY:.85,face:s=>{pt(s,"#ffffff",3,5,3,2),pt(s,"#ffffff",10,5,3,2),pt(s,"#000000",4,5,2,2),pt(s,"#000000",10,5,2,2),pt(s,"#c8b8a0",4,10,8,5),pt(s,"#3a2a20",5,12,2,2),pt(s,"#3a2a20",9,12,2,2)}})}function Yd(){return nh({name:"sheep",body:"#e8e8e8",head:"#b8a890",leg:"#b8a890",bs:[.75,.7,1],hs:[.4,.45,.4],ls:[.2,.42,.2],headY:.8,face:s=>{pt(s,"#ffffff",3,5,3,2),pt(s,"#ffffff",10,5,3,2),pt(s,"#000000",4,5,2,2),pt(s,"#000000",10,5,2,2),pt(s,"#8a7a62",5,10,6,4)}})}function Kd(){let s=new Ht,t=oe(Re("#f4f4f4",.15,41)),e=oe(Re("#e0a020",.1,42)),i=oe(Re("#d02020",.1,43));de(s,[.3,.3,.4],t,[0,.4,0]);let n=new Ht;n.position.set(0,.62,.2);let r=oe(gn("chicken","#f4f4f4",c=>{pt(c,"#000000",3,4,2,2),pt(c,"#000000",11,4,2,2),pt(c,"#e0a020",5,8,6,3),pt(c,"#d02020",6,11,4,3)}));de(n,[.2,.25,.2],[t,t,t,t,r,t],[0,.1,.05]),s.add(n),de(s,[.1,.1,.1],e,[0,.65,.32]);let o=[ki(s,[.06,.25,.06],e,[-.08,.25,0]),ki(s,[.06,.25,.06],e,[.08,.25,0])],a=[ki(s,[.05,.2,.3],t,[-.18,.5,0]),ki(s,[.05,.2,.3],t,[.18,.5,0])],l={root:s,legs:o,head:n,phase:0,mats:[],height:.75};return l.update=(c,h)=>{l.phase+=c*h*4;let d=Math.min(1,h/2)*.8;o[0].rotation.x=Math.sin(l.phase)*d,o[1].rotation.x=-Math.sin(l.phase)*d,a[0].rotation.z=.2+Math.abs(Math.sin(l.phase*.5))*.1,a[1].rotation.z=-a[0].rotation.z},l.mats=tn(s),l}function Zd(){let s=new Ht,t=oe(Re("#1a1a1a",.5,51)),e=oe(gn("spider","#1a1a1a",o=>{pt(o,"#d01010",2,5,4,3),pt(o,"#d01010",10,5,4,3),pt(o,"#ff4040",3,6,1,1),pt(o,"#ff4040",11,6,1,1),pt(o,"#a00808",6,4,1,1),pt(o,"#a00808",9,4,1,1),pt(o,"#000",5,10,6,3)}));de(s,[.65,.55,.9],t,[0,.45,-.45]),de(s,[.5,.45,.5],t,[0,.45,.1]);let i=new Ht;i.position.set(0,.45,.4),de(i,[.5,.45,.5],[t,t,t,t,e,t],[0,0,.1]),s.add(i);let n=[];for(let o=0;o<4;o++)for(let a of[-1,1]){let l=new Ht;l.position.set(a*.2,.45,.2-o*.18);let c=new ie(new Me(.9,.08,.08),t);c.position.x=a*.45,l.add(c),l.rotation.z=a*-.5,l.rotation.y=a*(.35-o*.22),s.add(l),n.push({p:l,base:l.rotation.z,i:o,s:a})}let r={root:s,head:i,legs:n,phase:0,mats:[],height:.9};return r.update=(o,a)=>{r.phase+=o*a*4,n.forEach(l=>{l.p.rotation.z=l.base+Math.sin(r.phase+l.i*1.3+(l.s>0?1.5:0))*.3*Math.min(1,a/2)})},r.mats=tn(s),r}function Jd(){let s=new Ht,t=oe(Re("#8a8a90",.35,61)),e=oe(gn("silver","#8a8a90",a=>{pt(a,"#000",3,5,3,3),pt(a,"#000",10,5,3,3)})),i=[],n=[[.25,.25,.2],[.3,.3,.2],[.35,.3,.25],[.3,.25,.2],[.22,.2,.2]],r=.3;n.forEach((a,l)=>{r-=a[2]/2;let c=de(s,a,l===0?[t,t,t,t,e,t]:t,[0,a[1]/2,r]);r-=a[2]/2,i.push(c)});let o={root:s,segs:i,phase:0,mats:[],height:.3,head:i[0]};return o.update=(a,l)=>{o.phase+=a*l*6,i.forEach((c,h)=>{c.position.x=Math.sin(o.phase-h*.8)*.05*Math.min(1,l/2)})},o.mats=tn(s),o}function $d(){let s=new Ht,t=oe(Re("#f2b82a",.3,71),{emissive:new It(5583616)}),e=oe(gn("blaze","#e8a828",a=>{pt(a,"#3a1a00",2,5,4,3),pt(a,"#3a1a00",10,5,4,3),pt(a,"#3a1a00",5,11,6,2)}),{emissive:new It(5583616)}),i=new Ht;i.position.set(0,1.5,0),de(i,[.5,.5,.5],[t,t,t,t,e,t],[0,.25,0]),s.add(i);let n=new Ht;s.add(n);let r=[];for(let a=0;a<12;a++){let l=a%3,c=a/12*Math.PI*2,h=.38+l*.08,d=de(n,[.12,.55,.12],t,[Math.cos(c)*h,1.05-l*.3,Math.sin(c)*h]);r.push({rod:d,a:c,rr:h,ring:l})}let o={root:s,head:i,phase:0,mats:[],height:1.8};return o.update=(a,l)=>{o.phase+=a,r.forEach(c=>{let h=c.a+o.phase*(1.4+c.ring*.3);c.rod.position.x=Math.cos(h)*c.rr,c.rod.position.z=Math.sin(h)*c.rr,c.rod.position.y=1.05-c.ring*.32+Math.sin(o.phase*2+c.a)*.06})},o.mats=tn(s),o}function jd(){let s=new Ht,t=oe(Re("#f4f4f4",.08,81)),e=oe(gn("ghast","#f4f4f4",o=>{pt(o,"#c8c8c8",1,4,5,1),pt(o,"#c8c8c8",10,4,5,1),pt(o,"#000000",2,5,4,1),pt(o,"#000000",10,5,4,1),pt(o,"#c8c8c8",6,10,4,3),pt(o,"#000",7,11,2,1)})),i=new Ht;i.position.set(0,2,0),de(i,[4,4,4],[t,t,t,t,e,t],[0,0,0]),s.add(i);let n=[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].map(([o,a])=>ki(s,[.7,1.6,.7],t,[o,.2,a])),r={root:s,head:i,legs:n,phase:0,mats:[],height:4,fire:0};return r.update=o=>{r.phase+=o,n.forEach((a,l)=>{a.rotation.x=Math.sin(r.phase*2+l)*.15})},r.mats=tn(s),r}function Qd(){let s=new Ht,t=ul("magma",a=>{a.fillStyle="#3a1008",a.fillRect(0,0,16,16);let l=Ke(91);for(let c=0;c<40;c++)a.fillStyle=l()<.5?"#e05a10":"#8a2a08",a.fillRect(l()*16|0,l()*16|0,2,1);for(let c=0;c<16;c++)a.fillStyle="#f08a20",a.fillRect(c,8,1,1)}),e=ul("magmaface",a=>{a.drawImage(t.image,0,0),pt(a,"#ffe040",3,4,3,3),pt(a,"#ffe040",10,4,3,3),pt(a,"#000",4,5,1,1),pt(a,"#000",11,5,1,1),pt(a,"#200800",5,10,6,2)}),i=new Kn({map:t,emissive:new It(4198400)}),n=new Kn({map:e,emissive:new It(4198400)}),r=new Ht;de(r,[1,1,1],[i,i,i,i,n,i],[0,.5,0]),s.add(r);let o={root:s,head:r,body:r,phase:0,mats:[],height:1};return o.update=a=>{o.phase+=a},o.mats=tn(s),o}function tf(){let s=new Ht,t=oe(Re("#161616",.4,101),{emissive:new It(656400)}),e=oe(Re("#2a2030",.4,102),{emissive:new It(656400)}),i=new Ht;s.add(i),de(i,[5,4,9],t,[0,0,0]);let n=new Ht;n.position.set(0,.4,4.4),i.add(n);let r=[];for(let u=0;u<3;u++){let f=new Ht;f.position.set(0,0,u*2),n.add(f),de(f,[2.2,2.2,2.4],t,[0,0,0]),r.push(f),de(f,[.5,.7,.5],e,[0,1.4,0])}let o=new Ht;o.position.set(0,.2,6.2),n.add(o);let a=oe(gn("dragon","#161616",u=>{pt(u,"#d080ff",2,4,4,2),pt(u,"#d080ff",10,4,4,2),pt(u,"#000",5,9,1,2),pt(u,"#000",10,9,1,2)}),{emissive:new It(656400)});de(o,[3,2.2,3.6],[t,t,t,t,a,t],[0,.2,.5]);let l=new Ht;l.position.set(0,-.6,.6),o.add(l),de(l,[2.8,.7,3.2],e,[0,0,1]);let c=[];for(let u=0;u<6;u++){let f=new Ht;f.position.set(0,0,-4.5-u*2),i.add(f),de(f,[2.6-u*.3,2.2-u*.2,2.2],t,[0,0,0]),c.push(f)}let h=[];for(let u of[-1,1]){let f=new Ht;f.position.set(u*2.5,1.6,.5),i.add(f),de(f,[9,.5,5],e,[u*4.5,0,0]);let g=new Ht;g.position.set(u*9,0,0),f.add(g),de(g,[9,.35,4],e,[u*4.5,0,-.4]),h.push({w1:f,w2:g,sd:u})}for(let u of[-1,1])for(let f of[1.5,-2.5])de(i,[1.4,2.6,1.4],t,[u*1.8,-2.2,f]);let d={root:s,head:o,jaw:l,body:i,wings:h,necks:r,tails:c,phase:0,mats:[],height:4};return d.update=(u,f,g,x)=>{d.phase+=u*2.4;let m=Math.sin(d.phase);h.forEach(p=>{p.w1.rotation.z=-p.sd*m*.5,p.w2.rotation.z=-p.sd*m*.35}),r.forEach((p,_)=>{p.rotation.x=Math.sin(d.phase*.5+_)*.06}),c.forEach((p,_)=>{p.position.y=Math.sin(d.phase*.7-_*.6)*.3*(_+1)*.3}),l.rotation.x=x&&x.open?.5:.05},d.mats=tn(s),d}function ef(){let s=new Ht,t=new Ee({color:16743136,transparent:!0,opacity:.75}),e=new Ee({color:16777215}),i=new ie(new Me(.55,.55,.55),e);i.position.y=1;let n=new ie(new Me(1,1,1),t);n.position.y=1;let r=new Ht;r.add(n,i),s.add(r);let o={root:s,holder:r,mats:[],phase:0,height:2};return o.update=a=>{o.phase+=a,r.rotation.y+=a*1.5,r.rotation.x=Math.PI/4,r.position.y=Math.sin(o.phase*2)*.15},o}function ss(s,t,e=7803153){s.mats.forEach(i=>{i.emissive&&(t?(i.userData.oe=i.userData.oe??i.emissive.getHex(),i.emissive.setHex(e)):i.userData.oe!==void 0&&i.emissive.setHex(i.userData.oe))})}var oh=30,Ue=(s,t)=>s+Math.random()*(t-s),zn=(s,t)=>{let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Gr={pig:{hp:10,w:.8,h:.9,speed:1.5,passive:!0,rig:Xd,drops:[["RAW_PORKCHOP",1,3,1]],label:"Schwein"},cow:{hp:10,w:.9,h:1.4,speed:1.4,passive:!0,rig:qd,drops:[["RAW_BEEF",1,3,1]],label:"Kuh"},sheep:{hp:8,w:.9,h:1.2,speed:1.4,passive:!0,rig:Yd,drops:[["RAW_MUTTON",1,2,1],["WOLLE",1,1,1]],label:"Schaf"},chicken:{hp:4,w:.4,h:.7,speed:1.3,passive:!0,rig:Kd,drops:[["RAW_CHICKEN",1,1,1]],label:"Huhn"},zombie:{hp:20,w:.6,h:1.95,speed:2.4,hostile:!0,ai:"melee",dmg:3,burn:!0,rig:()=>eh(!1),drops:[["ROTTEN_FLESH",0,2,1],["IRON_INGOT",1,1,.03]],label:"Zombie"},baby_zombie:{hp:10,w:.4,h:1.05,speed:3.6,hostile:!0,ai:"melee",dmg:2,burn:!0,rig:()=>eh(!0),drops:[["ROTTEN_FLESH",0,1,1]],label:"Baby-Zombie"},skeleton:{hp:20,w:.6,h:1.95,speed:2.2,hostile:!0,ai:"skeleton",burn:!0,rig:()=>ih(!1),drops:[["BONE",0,2,1]],label:"Skelett"},wither_skeleton:{hp:20,w:.7,h:2.4,speed:2.6,hostile:!0,ai:"melee",dmg:5,rig:()=>ih(!0),drops:[["COAL",0,1,.6],["BONE",0,2,1]],label:"Wither-Skelett"},creeper:{hp:20,w:.6,h:1.7,speed:2.3,hostile:!0,ai:"creeper",rig:Wd,drops:[["GUNPOWDER",0,2,1]],label:"Creeper"},spider:{hp:16,w:1.4,h:.9,speed:3.3,hostile:!0,ai:"spider",dmg:2,rig:Zd,drops:[["STRING",0,2,1]],label:"Spinne"},enderman:{hp:40,w:.6,h:2.9,speed:5,ai:"enderman",dmg:6,rig:Vd,drops:[["ENDER_PEARL",1,1,.75]],label:"Enderman"},silverfish:{hp:8,w:.4,h:.3,speed:3.2,hostile:!0,ai:"melee",dmg:1,rig:Jd,drops:[],label:"Silberfischchen"},blaze:{hp:20,w:.6,h:1.8,speed:2.6,hostile:!0,ai:"blaze",fly:!0,rig:$d,drops:[["BLAZE_ROD",1,1,.8]],label:"Lohe"},ghast:{hp:10,w:3.6,h:3.6,speed:1.5,hostile:!0,ai:"ghast",fly:!0,rig:jd,drops:[["GUNPOWDER",0,2,1]],label:"Ghast"},magma_cube:{hp:12,w:1,h:1,speed:3,hostile:!0,ai:"magma",rig:Qd,drops:[],label:"Magmaw\xFCrfel"},dragon:{hp:200,w:8,h:4,label:"Enderdrache"},crystal:{hp:1,w:1.2,h:2,label:"Endkristall"}},sh={size:[2.2,1.5,1,.6],hp:[12,8,4,2],dmg:[4,3,2,1]},ah=1,fl=class{constructor(t,e,i,n,r={}){this.kind="mob",this.type=t,this.id=ah++;let o=Gr[t];if(this.cfg=o,this.gen=r.gen||0,this.x=e,this.y=i,this.z=n,this.vx=this.vy=this.vz=0,this.w=o.w,this.h=o.h,this.hp=o.hp,t==="magma_cube"){let a=sh.size[this.gen];this.w=a,this.h=a,this.hp=sh.hp[this.gen]}this.maxHp=this.hp,this.yaw=Math.random()*6.28,this.onGround=!1,this.t=0,this.cool=0,this.flash=0,this.dead=!1,this.deadT=0,this.wanderT=0,this.wdx=0,this.wdz=0,this.fleeT=0,this.fuse=-1,this.aggro=!1,this.shootT=Ue(1,3),this.burst=0,this.hopT=Ue(.5,2),this.rig=o.rig?o.rig():null,this.rig&&(this.mesh=this.rig.root,t==="magma_cube"&&this.mesh.scale.setScalar(this.w)),this.speedNow=0,this.noDespawn=!!r.persistent,this.fire=0}aabbs(){let t=this.w/2;return[[this.x-t,this.y,this.z-t,this.x+t,this.y+this.h,this.z+t]]}damage(t,e,i,n,r=1){if(this.dead)return;this.hp-=t,this.flash=.25,this.rig&&ss(this.rig,!0);let o=this.x-i,a=this.z-n,l=Math.hypot(o,a)||1;this.cfg.fly?(this.vx+=o/l*4*r,this.vz+=a/l*4*r):(this.vx+=o/l*6*r,this.vz+=a/l*6*r,this.vy=Math.max(this.vy,4.5*Math.min(r,1))),this.cfg.passive&&(this.fleeT=5,this.fleeFrom=[i,n]),this.type==="enderman"&&(this.aggro=!0,Math.random()<.5&&this.teleport(e)),(this.type==="spider"||this.type==="zombie")&&(this.aggro=!0),e.sfx("hit"),this.hp<=0&&this.die(e)}die(t){this.dead=!0,this.deadT=.6,t.sfx("mobdie");let e=this.cfg;if(e.drops)for(let[i,n,r,o]of e.drops){if(Math.random()>o)continue;let a=n+Math.floor(Math.random()*(r-n+1));a>0&&t.spawnItem(N[i],a,this.x,this.y+.5,this.z)}if(this.type==="magma_cube")if(this.gen<3)for(let i=0;i<2;i++){let n=t.addMob("magma_cube",this.x+(i?.4:-.4),this.y+.3,this.z,{gen:this.gen+1});n&&(n.vx=i?3:-3,n.vy=5)}else t.spawnItem(N.SLIME_BALL,1,this.x,this.y+.5,this.z);(this.type==="blaze"||this.type==="ghast")&&(this.fallT=1)}teleport(t){let e=t.world;for(let i=0;i<24;i++){let n=Math.random()*6.28,r=Ue(5,14),o=this.x+Math.cos(n)*r,a=this.z+Math.sin(n)*r;if(e.hasChunkAt(Math.floor(o),Math.floor(a))){for(let l=Math.floor(this.y)+6;l>Math.floor(this.y)-8;l--)if(e.isSolid(Math.floor(o),l-1,Math.floor(a))&&!e.isSolid(Math.floor(o),l,Math.floor(a))&&!e.isSolid(Math.floor(o),l+1,Math.floor(a))&&!e.isSolid(Math.floor(o),l+2,Math.floor(a))&&!_t[e.getBlock(Math.floor(o),l-1,Math.floor(a))].fluid)return this.x=o,this.y=l,this.z=a,this.vx=this.vy=this.vz=0,t.sfx("tp"),!0}}return!1}steer(t,e,i,n){let r=t-this.x,o=e-this.z,a=Math.hypot(r,o);if(a<.05){this.vx*=.8,this.vz*=.8;return}let l=Math.min(1,n*(this.onGround||this.cfg.fly?12:2.5));this.vx+=(r/a*i-this.vx)*l,this.vz+=(o/a*i-this.vz)*l;let c=Math.atan2(r,o);this.yaw+=zn(this.yaw,c)*Math.min(1,n*10),(this.hitX||this.hitZ)&&this.onGround&&(this.vy=8.4)}update(t,e){let i=this.cfg,n=e.world,r=e.player;if(this.t+=t,this.flash>0&&(this.flash-=t,this.flash<=0&&this.rig&&ss(this.rig,!1)),this.dead)return this.deadT-=t,this.mesh&&(this.mesh.rotation.z=Math.min(Math.PI/2,this.mesh.rotation.z+t*6)),i.fly&&(this.vy-=oh*t*.5,Vs(n,this,t)),this.deadT<=0;this.cool>0&&(this.cool-=t);let o=r.x-this.x,a=r.z-this.z,l=r.y+1-(this.y+this.h*.5),c=Math.hypot(o,a),h=Math.hypot(o,l,a),d=Fn(n,this.x,this.y+.3,this.z)==="water";if(Fn(n,this.x,this.y+.3,this.z)==="lava"&&this.type!=="magma_cube"&&this.type!=="blaze"&&this.type!=="ghast"&&(this.fire+=t,this.fire>.5&&(this.fire=0,this.damage(3,e,this.x,this.z,0))),i.burn&&e.dim==="overworld"&&e.isDay()&&n.skyLit(Math.floor(this.x),Math.floor(this.y+1),Math.floor(this.z))&&!d&&(this.fire+=t,this.fire>=1&&(this.fire=0,this.damage(1.5,e,this.x,this.z,0))),i.fly||(this.vy-=oh*t,this.vy<-50&&(this.vy=-50),d&&(this.vy=Math.max(this.vy,-2),(this.hitX||this.hitZ||Math.random()<.05)&&(this.vy=3),this.vx*=.9,this.vz*=.9)),this.ai(t,e,{dx:o,dz:a,dy:l,dist:c,dist3:h,inWater:d}),Vs(n,this,t),this.onGround&&(this.vx*=(Math.pow(5e-4,t)>.5,1)),this.speedNow=Math.hypot(this.vx,this.vz),this.mesh&&(this.mesh.position.set(this.x,this.y,this.z),this.mesh.rotation.y=this.yaw,this.rig.update&&this.rig.update(t,this.type==="magma_cube"?0:this.speedNow,0),this.type==="creeper"&&this.fuse>=0)){let f=1+Math.sin(this.fuse*30)*.06+this.fuse*.12;this.mesh.scale.set(f,f,f),ss(this.rig,Math.floor(this.fuse*8)%2===0,8947848)}return this.y<-20}wander(t,e,i){if(this.wanderT-=t,this.wanderT<=0)if(this.wanderT=Ue(2,6),Math.random()<.4)this.wdx=0,this.wdz=0;else{let n=Math.random()*6.28;this.wdx=Math.cos(n),this.wdz=Math.sin(n)}this.wdx||this.wdz?this.steer(this.x+this.wdx,this.z+this.wdz,i,t):(this.vx*=.8,this.vz*=.8)}melee(t,e){this.cool<=0&&(this.cool=1,t.hurtPlayer(e,this.x,this.z,1,this.cfg.label))}ai(t,e,i){let n=this.cfg,r=e.player,o=!e.isDay();switch(n.ai){case void 0:{if(this.fleeT>0){this.fleeT-=t;let a=this.fleeFrom;this.steer(this.x+(this.x-a[0]),this.z+(this.z-a[1]),n.speed*2.2,t)}else this.wander(t,e,n.speed*.6);break}case"melee":{let a=this.type==="silverfish"?12:22;i.dist<a&&(i.dist<10||ns(e.world,this.x,this.y+1.5,this.z,r.x,r.y+1.5,r.z))&&!r.dead?(this.steer(r.x,r.z,n.speed,t),i.dist<1.2+this.w*.5&&Math.abs(i.dy)<1.8&&this.melee(e,n.dmg)):this.wander(t,e,n.speed*.4);break}case"skeleton":{if(i.dist<18&&!r.dead){let a=ns(e.world,this.x,this.y+1.6,this.z,r.x,r.y+1.6,r.z),l=Math.atan2(i.dx,i.dz);if(this.yaw+=zn(this.yaw,l)*Math.min(1,t*10),i.dist>9||!a?this.steer(r.x,r.z,n.speed,t):i.dist<5?this.steer(this.x-i.dx,this.z-i.dz,n.speed,t):(this.vx*=.8,this.vz*=.8),this.shootT-=t,this.shootT<=0&&a&&i.dist<16){this.shootT=Ue(1.4,2.2);let c=this.x,h=this.y+1.6,d=this.z,u=r.x,f=r.y+1.3,g=r.z,x=Math.hypot(u-c,f-h,g-d);e.addProj("arrow",c,h,d,(u-c)/x*20+Ue(-1,1),(f-h)/x*20+x*.25,(g-d)/x*20+Ue(-1,1),{dmg:3}),e.sfx("shoot")}}else this.wander(t,e,n.speed*.4);break}case"creeper":{i.dist<16&&!r.dead&&ns(e.world,this.x,this.y+1,this.z,r.x,r.y+1,r.z)?this.fuse<0?(this.steer(r.x,r.z,n.speed,t),i.dist<3&&(this.fuse=0,e.sfx("fuse"))):(this.vx*=.7,this.vz*=.7,this.fuse+=t,i.dist>6?(this.fuse=-1,this.mesh.scale.set(1,1,1),ss(this.rig,!1)):this.fuse>=1.5&&(this.dead=!0,this.deadT=0,e.explode(this.x,this.y+.8,this.z,3.2,{dmg:22,blocks:!0}),this.mesh.visible=!1)):(this.fuse=-1,this.wander(t,e,n.speed*.4));break}case"spider":{(o||this.aggro||!e.world.skyLit(Math.floor(this.x),Math.floor(this.y+1),Math.floor(this.z)))&&i.dist<20&&!r.dead?(this.steer(r.x,r.z,n.speed,t),i.dist<4&&i.dist>1.8&&this.onGround&&this.cool<=0&&Math.random()<t*2&&(this.vy=6,this.vx=i.dx/i.dist*6,this.vz=i.dz/i.dist*6),i.dist<1.6&&Math.abs(i.dy)<1.5&&this.melee(e,n.dmg),(this.hitX||this.hitZ)&&(this.vy=5)):this.wander(t,e,n.speed*.4);break}case"enderman":{if(!this.aggro&&e.dim!==null&&!r.dead&&i.dist<40){let a=r.eye(),l=e.lookDir(),c=this.x-a[0],h=this.y+2.6-a[1],d=this.z-a[2],u=Math.hypot(c,h,d);u<40&&(c*l[0]+h*l[1]+d*l[2])/u>.985&&ns(e.world,a[0],a[1],a[2],this.x,this.y+2.6,this.z)&&(this.aggro=!0,e.sfx("scream"))}this.aggro&&!r.dead?(this.steer(r.x,r.z,n.speed,t),i.dist<1.6&&Math.abs(i.dy)<2.5&&this.melee(e,n.dmg),i.dist>14&&Math.random()<t*.4&&this.teleportNear(e),this.rig.head&&(this.rig.head.rotation.x=-.15)):(this.wander(t,e,n.speed*.2),Math.random()<t*.03&&this.teleport(e));break}case"magma":{this.hopT-=t;let a=this.gen;if(i.dist<18&&!r.dead){let l=Math.atan2(i.dx,i.dz);this.yaw+=zn(this.yaw,l)*Math.min(1,t*8),this.onGround&&this.hopT<=0&&(this.hopT=Ue(.7,1.4),this.vy=7+(3-a),this.vx=i.dx/(i.dist||1)*4,this.vz=i.dz/(i.dist||1)*4),i.dist<this.w*.5+.6&&Math.abs(i.dy)<this.h+1&&this.melee(e,sh.dmg[this.gen])}else if(this.onGround&&(this.vx*=.8,this.vz*=.8,this.hopT<=0)){this.hopT=Ue(1.5,3);let l=Math.random()*6.28;this.vy=6,this.vx=Math.cos(l)*2,this.vz=Math.sin(l)*2}if(this.onGround&&this.vy,this.mesh){let l=this.onGround?1:1.15;this.rig.body.scale.set(1/Math.sqrt(l),l,1/Math.sqrt(l))}break}case"blaze":{if(i.dist<30&&!r.dead){let a=Math.atan2(i.dx,i.dz);this.yaw+=zn(this.yaw,a)*Math.min(1,t*6);let l=ns(e.world,this.x,this.y+1,this.z,r.x,r.y+1,r.z),c=r.y+2.5;if(this.vy+=(Math.max(-3,Math.min(3,c-this.y))-this.vy)*Math.min(1,t*3),i.dist>10||!l?(this.vx+=(i.dx/(i.dist||1)*n.speed-this.vx)*Math.min(1,t*3),this.vz+=(i.dz/(i.dist||1)*n.speed-this.vz)*Math.min(1,t*3)):i.dist<5?(this.vx+=(-i.dx/(i.dist||1)*n.speed-this.vx)*Math.min(1,t*3),this.vz+=(-i.dz/(i.dist||1)*n.speed-this.vz)*Math.min(1,t*3)):(this.vx*=.9,this.vz*=.9),this.shootT-=t,l&&this.shootT<=0&&i.dist<24&&(this.burst=3,this.shootT=3,this.burstT=0),this.burst>0&&(this.burstT-=t,this.burstT<=0)){this.burstT=.25,this.burst--;let h=this.x,d=this.y+1.2,u=this.z,f=Math.hypot(r.x-h,r.y+1-d,r.z-u)||1;e.addProj("fireball",h,d,u,(r.x-h)/f*14,(r.y+1-d)/f*14,(r.z-u)/f*14,{dmg:5}),e.sfx("fire")}}else this.vx*=.95,this.vz*=.95,this.vy=Math.sin(this.t)*.5;break}case"ghast":{if(i.dist<48&&!r.dead){let a=Math.atan2(i.dx,i.dz);this.yaw+=zn(this.yaw,a)*Math.min(1,t*3);let l=ns(e.world,this.x,this.y+1.5,this.z,r.x,r.y+1,r.z);if(i.dist>22||!l?(this.vx+=(i.dx/i.dist*2.2-this.vx)*Math.min(1,t),this.vz+=(i.dz/i.dist*2.2-this.vz)*Math.min(1,t),this.vy+=((r.y+4-this.y)*.3-this.vy)*Math.min(1,t)):(this.vx*=.97,this.vz*=.97,this.vy+=(Math.sin(this.t*.7)*.5-this.vy)*Math.min(1,t)),this.shootT-=t,l&&this.shootT<=0&&i.dist<40){this.shootT=3.5;let c=this.x,h=this.y+2,d=this.z,u=Math.hypot(r.x-c,r.y+1-h,r.z-d)||1;e.addProj("bigfire",c,h,d,(r.x-c)/u*9,(r.y+1-h)/u*9,(r.z-d)/u*9,{dmg:6,owner:this}),e.sfx("fire")}}else this.vx*=.97,this.vz*=.97,this.vy=Math.sin(this.t*.5)*.4;break}}}teleportNear(t){let e=t.player;for(let i=0;i<12;i++){let n=Math.random()*6.28,r=Ue(4,8),o=e.x+Math.cos(n)*r,a=e.z+Math.sin(n)*r;for(let l=Math.floor(e.y)+4;l>Math.floor(e.y)-6;l--){let c=t.world;if(c.isSolid(Math.floor(o),l-1,Math.floor(a))&&!c.isSolid(Math.floor(o),l,Math.floor(a))&&!c.isSolid(Math.floor(o),l+1,Math.floor(a))&&!c.isSolid(Math.floor(o),l+2,Math.floor(a))){this.x=o,this.y=l,this.z=a;return}}}}},zr=class{constructor(t,e,i){this.kind="mob",this.type="dragon",this.id=ah++,this.cfg=Gr.dragon,this.x=t,this.y=e,this.z=i,this.vx=this.vy=this.vz=0,this.w=8,this.h=4,this.hp=200,this.maxHp=200,this.yaw=0,this.dead=!1,this.deadT=0,this.flash=0,this.rig=tf(),this.mesh=this.rig.root,this.ang=0,this.state="circle",this.stT=Ue(10,16),this.hitCool=0,this.noDespawn=!0,this.healT=0,this.tx=0,this.ty=0,this.tz=0,this.dying=0,this.t=0}headPos(){return[this.x+Math.sin(this.yaw)*7,this.y+.8,this.z+Math.cos(this.yaw)*7]}aabbs(){let t=this.headPos();return[[this.x-3.2,this.y-2.5,this.z-3.2,this.x+3.2,this.y+2.5,this.z+3.2],[t[0]-1.8,t[1]-1.5,t[2]-1.8,t[0]+1.8,t[1]+1.5,t[2]+1.8]]}damage(t,e,i,n){this.dead||this.dying>0||(this.hp-=t,this.flash=.2,ss(this.rig,!0),e.sfx("hit"),this.hp<=0&&(this.dying=5,this.hp=0,e.sfx("dragondie")))}update(t,e){let i=e.player;if(this.t+=t,this.flash>0&&(this.flash-=t,this.flash<=0&&ss(this.rig,!1)),this.dying>0)return this.dying-=t,this.y+=Math.sin(this.t*3)*.02,this.vy=-2,this.y+=this.vy*t*.3,this.rig.update(t,0,0,{}),this.mesh.position.set(this.x,this.y,this.z),this.mesh.rotation.z=Math.sin(this.t*20)*.05,Math.random()<t*14&&e.puff(this.x+Ue(-4,4),this.y+Ue(-2,2),this.z+Ue(-4,4)),this.dying<=0?(this.dead=!0,e.onDragonDead(this),!0):!1;let n=e.world.entities.filter(x=>x.type==="crystal"&&!x.dead);this.crystals=n.length,n.length&&this.hp<this.maxHp&&(this.healT+=t,this.healT>=1&&(this.healT=0,this.hp=Math.min(this.maxHp,this.hp+n.length*1.2))),this.stT-=t;let r,o,a,l;if(this.state==="circle")this.ang+=t*.32,r=Math.cos(this.ang)*34,a=Math.sin(this.ang)*34,o=74+Math.sin(this.t*.5)*6,l=16,this.stT<=0&&!i.dead&&(this.cycles=(this.cycles||0)+1,this.cycles%3===0?(this.state="perch",this.stT=16,e.log("Der Enderdrache landet in der Mitte der Insel - jetzt ist deine Chance!")):(this.state="charge",this.stT=6,e.log("Der Enderdrache greift an!")));else if(this.state==="perch"){r=0,a=0,o=53;let x=Math.hypot(this.x,this.z,this.y-53);if(l=x<3?0:14,x<6){let m=Math.atan2(i.x-this.x,i.z-this.z);this.yaw+=zn(this.yaw,m)*Math.min(1,t*1.5)}this.stT<=0&&(this.state="circle",this.stT=Ue(14,22),this.ang=Math.atan2(this.z,this.x))}else r=i.x,a=i.z,o=i.y+1,l=22,(this.stT<=0||Math.hypot(this.x-i.x,this.z-i.z)<5&&this.stT<4.5)&&(this.state="circle",this.stT=Ue(14,22),this.ang=Math.atan2(this.z,this.x));let c=r-this.x,h=o-this.y,d=a-this.z,u=Math.hypot(c,h,d)||1,f=Math.min(1,t*1.6);this.vx+=(c/u*l-this.vx)*f,this.vy+=(h/u*l-this.vy)*f,this.vz+=(d/u*l-this.vz)*f,this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let g=Math.atan2(this.vx,this.vz);if(this.state!=="perch"&&Math.hypot(this.vx,this.vz)>1&&(this.yaw+=zn(this.yaw,g)*Math.min(1,t*2.5)),this.hitCool-=t,this.hitCool<=0&&!i.dead){for(let x of this.aabbs())if(i.x>x[0]-.4&&i.x<x[3]+.4&&i.y+1.8>x[1]&&i.y<x[4]&&i.z>x[2]-.4&&i.z<x[5]+.4){this.hitCool=1.6,e.hurtPlayer(4,this.x,this.z,2.2,"Enderdrache");break}}return this.mesh.position.set(this.x,this.y,this.z),this.mesh.rotation.y=this.yaw,this.mesh.rotation.z=-zn(this.yaw,g)*.3,this.rig.update(t,0,0,{open:this.state==="charge"}),!1}},kr=class{constructor(t,e,i){this.kind="mob",this.type="crystal",this.id=ah++,this.cfg=Gr.crystal,this.x=t,this.y=e,this.z=i,this.vx=this.vy=this.vz=0,this.w=1.2,this.h=2,this.hp=1,this.maxHp=1,this.dead=!1,this.noDespawn=!0,this.noPhys=!0,this.rig=ef(),this.mesh=this.rig.root,this.mesh.position.set(t,e-1,i)}aabbs(){return[[this.x-.7,this.y-.5,this.z-.7,this.x+.7,this.y+1.7,this.z+.7]]}damage(t,e){this.dead||(this.dead=!0,e.explode(this.x,this.y+.5,this.z,3,{dmg:10,blocks:!1,big:!0}),e.log("Ein Endkristall wurde zerst\xF6rt!"))}update(t){return this.rig.update(t),this.dead}},pl=class{constructor(t,e,i,n,r,o,a,l={}){this.kind="proj",this.type=t,this.x=e,this.y=i,this.z=n,this.vx=r,this.vy=o,this.vz=a,this.dmg=l.dmg||3,this.owner=l.owner,this.fromPlayer=!!l.fromPlayer,this.life=0,this.dead=!1,this.o=l;let c;if(t==="arrow")c=new ie(new Me(.06,.06,.7),new Ee({color:13152400}));else if(t==="fireball"||t==="bigfire"){let h=t==="bigfire"?1.1:.3;c=new ie(new Me(h,h,h),new Ee({color:t==="bigfire"?16744496:16755232}));let d=new ie(new Me(h*.6,h*.6,h*.6),new Ee({color:16772744}));c.add(d)}else t==="pearl"?c=new ie(new Me(.25,.25,.25),new Ee({color:2078874})):t==="eye"&&(c=new ie(new Me(.28,.28,.28),new Ee({color:3982448})),this.sx=e,this.sz=n);this.mesh=c,this.w=.2,this.h=.2}update(t,e){this.life+=t;let i=e.world,n=e.player;if(this.type==="eye")return this.updateEye(t,e);this.type==="arrow"?this.vy-=10*t:this.type==="pearl"&&(this.vy-=20*t);let r=this.x+this.vx*t,o=this.y+this.vy*t,a=this.z+this.vz*t;if(!this.fromPlayer&&!n.dead&&Math.abs(r-n.x)<.5&&a>n.z-.5&&a<n.z+.5&&o>n.y&&o<n.y+1.9)return this.type==="bigfire"?e.explode(r,o,a,2.2,{dmg:this.dmg+4,blocks:!1,big:!0}):e.hurtPlayer(this.dmg,this.x-this.vx,this.z-this.vz,.6,this.type==="arrow"?"Skelett":"Lohe"),this.dead=!0,!0;if(this.fromPlayer&&(this.type==="bigfire"||this.type==="fireball")){for(let l of i.entities)if(!(l.kind!=="mob"||l.dead||l===this.owner&&this.life<.5)){for(let c of l.aabbs())if(r>c[0]&&r<c[3]&&o>c[1]&&o<c[4]&&a>c[2]&&a<c[5])return l.damage(this.type==="bigfire"?20:5,e,this.x,this.z,1),this.type==="bigfire"&&e.explode(r,o,a,2,{dmg:0,blocks:!1,big:!0}),this.dead=!0,!0}}return i.isSolid(Math.floor(r),Math.floor(o),Math.floor(a))?(this.type==="bigfire"?e.explode(this.x,this.y,this.z,2.2,{dmg:this.dmg+4,blocks:!1,big:!0}):this.type==="pearl"&&e.pearlLand(this.x,this.y,this.z,this),this.dead=!0,!0):this.type==="pearl"&&o<-5?(this.dead=!0,!0):(this.x=r,this.y=o,this.z=a,this.life>12||this.y<-10?(this.dead=!0,!0):(this.mesh.position.set(this.x,this.y,this.z),this.type==="arrow"&&this.mesh.lookAt(this.x+this.vx,this.y+this.vy,this.z+this.vz),!1))}updateEye(t,e){let i=this.o,n=this.life;if(n<1.4){if(i.tx!==void 0){let r=i.tx-this.x,o=i.tz-this.z,a=Math.hypot(r,o)||1,l=Math.min(9,a*2+2);this.x+=r/a*l*t,this.z+=o/a*l*t}else this.x+=this.vx*t,this.z+=this.vz*t;this.y+=(n<.9?3.5:.5)*t}else if(this.vy-=18*t,this.y+=this.vy*t,n>2.3||e.world.isSolid(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z)))return Math.random()<.8?e.spawnItem(N.ENDER_EYE,1,this.x,this.y+.3,this.z):e.log("Das Enderauge ist zersprungen."),this.dead=!0,!0;return this.mesh.position.set(this.x,this.y,this.z),!1}},rh=new Map;function lh(s){if(rh.has(s))return rh.get(s);let t=sl(s),e=new Yi(t);return e.magFilter=ce,e.minFilter=ce,rh.set(s,e),e}var ml=class{constructor(t,e,i,n,r){this.kind="item",this.stack=t,this.x=e,this.y=i,this.z=n,this.vx=r?r[0]:Ue(-1.5,1.5),this.vy=r?r[1]:Ue(2,4),this.vz=r?r[2]:Ue(-1.5,1.5),this.w=.3,this.h=.3,this.age=0,this.delay=.6,this.dead=!1;let o=new Is({map:lh(t.id),transparent:!0,alphaTest:.1});this.mesh=new hr(o);let a=_t[t.id].block&&!_t[t.id].cross?.38:.45;this.mesh.scale.set(a,a,a),this.size=a}update(t,e){if(this.age+=t,this.delay-=t,this.vy-=oh*t,Vs(e.world,this,t),this.onGround&&(this.vx*=.8,this.vz*=.8),Fn(e.world,this.x,this.y,this.z)==="lava")return this.dead=!0,!0;this.mesh.position.set(this.x,this.y+this.size*.5+Math.sin(this.age*3)*.04+.1,this.z);let n=e.player;if(this.delay<=0&&!n.dead){let r=n.x-this.x,o=n.y+.9-this.y,a=n.z-this.z,l=r*r+o*o+a*a;if(l<1.2*1.2){if(e.pickup(this.stack))return this.dead=!0,e.sfx("pop"),!0}else if(l<9&&e.canPickup(this.stack)){let c=Math.sqrt(l);this.vx+=r/c*20*t,this.vz+=a/c*20*t,this.vy+=o/c*20*t}}return this.age>300?(this.dead=!0,!0):!1}};var Si=s=>_t[s].maxStack||64,Hr=s=>!!_t[s].tool||s===N.FLINT_AND_STEEL,Vr=class{constructor(){this.slots=new Array(36).fill(null),this.sel=0}held(){return this.slots[this.sel]}canAdd(t){let e=t.n;for(let i=0;i<36&&e>0;i++){let n=this.slots[i];n?n.id===t.id&&!Hr(t.id)&&(e-=Si(t.id)-n.n):e-=Si(t.id)}return e<=0||this.slots.some(i=>!i||i.id===t.id&&!Hr(t.id)&&i.n<Si(t.id))}add(t){if(!t||t.n<=0)return!0;let e=[];for(let i=0;i<36;i++)e.push(i);if(!Hr(t.id))for(let i of e){let n=this.slots[i];if(n&&n.id===t.id){let r=Si(t.id)-n.n,o=Math.min(r,t.n);if(n.n+=o,t.n-=o,t.n<=0)return!0}}for(let i of e)if(!this.slots[i]){let n=Math.min(Si(t.id),t.n);if(this.slots[i]=Object.assign({},t,{n}),t.n-=n,t.n<=0)return!0}return t.n<=0}removeFromSel(t=1){let e=this.slots[this.sel];e&&(e.n-=t,e.n<=0&&(this.slots[this.sel]=null))}count(t){let e=0;for(let i of this.slots)i&&i.id===t&&(e+=i.n);return e}};function rs(s,t,e=1){let i=document.createElement("canvas");i.width=i.height=9;let n=i.getContext("2d");return s.forEach((r,o)=>{for(let a=0;a<9;a++){let l=t[r[a]];l&&(n.fillStyle=l,n.fillRect(a,o,1,1))}}),i.toDataURL()}var ch=[".XX...XX.","XooXXXooX","XoRRRRRRX","XRRRRRRRX",".XRRRRRX.","..XRRRX..","...XRX...","....X....","........."],nf=rs(ch.map(s=>s.replace(/o/g,"h")),{X:"#000",R:"#e0201c",h:"#ff8a8a"}),Yx=rs(ch.map(s=>s.replace(/[oR]/g,"E")),{X:"#000",E:"#3a1010"}),Kx=rs(ch.map(s=>s.split("").map((t,e)=>t==="o"?e<4?"h":"E":t==="R"?e<5?"R":"E":t).join("")),{X:"#000",R:"#e0201c",h:"#ff8a8a",E:"#3a1010"}),hh=[".....XXX.","....XbbbX","...XbBBbX","..XbBBBbX",".XbBBBbX.","XwXbBbX..","XwwXbX...",".XXX.....","........."],sf=rs(hh,{X:"#000",b:"#d08840",B:"#a8602a",w:"#f2f2e6"}),Zx=rs(hh.map(s=>s.replace(/[bB]/g,"E")),{X:"#000",E:"#3a2a10",w:"#6a6a60"}),Jx=rs(hh.map(s=>s.split("").map((t,e)=>t==="b"||t==="B"?e<5?t:"E":t).join("")),{X:"#000",b:"#d08840",B:"#a8602a",E:"#3a2a10",w:"#f2f2e6"}),$x=rs(["..XXXXX..",".XwwwwwX.","XwhhwwwwX","XwhwwwwwX","XwwwwwwwX","XwwwwwwwX",".XwwwwwX.","..XXXXX..","........."],{X:"#1a3a8a",w:"#6aa0ff",h:"#e0f0ff"}),gl=class{constructor(t){this.g=t,this.cursor=null,this.screen=null,this.hud=document.getElementById("hud"),this.hearts=[],this.foods=[],this.bubbles=[];let e=document.getElementById("hearts"),i=document.getElementById("food"),n=document.getElementById("air");for(let r=0;r<10;r++){let o=document.createElement("img");o.src=nf,e.appendChild(o),this.hearts.push(o);let a=document.createElement("img");a.src=sf,i.appendChild(a),this.foods.push(a);let l=document.createElement("img");l.src=$x,n.appendChild(l),this.bubbles.push(l)}this.hotbarEl=document.getElementById("hotbar"),this.hotSlots=[];for(let r=0;r<9;r++){let o=this.makeSlot();o.el.classList.add("hot");let a=document.createElement("span");a.className="num",a.textContent=r+1,o.el.appendChild(a),this.hotbarEl.appendChild(o.el),this.hotSlots.push(o)}this.cursorEl=document.getElementById("cursoritem"),this.screenEl=document.getElementById("screen"),this.tip=document.getElementById("tooltip"),this.toastEl=document.getElementById("toast"),this.last={hp:-1,food:-1,sel:-1,air:-1},window.addEventListener("mousemove",r=>{this.cursorEl.style.left=r.clientX+"px",this.cursorEl.style.top=r.clientY+"px",this.tip.style.left=r.clientX+14+"px",this.tip.style.top=r.clientY-28+"px"})}makeSlot(){let t=document.createElement("div");t.className="slot";let e=document.createElement("img");e.draggable=!1,t.appendChild(e);let i=document.createElement("span");i.className="count",t.appendChild(i);let n=document.createElement("div");n.className="dur";let r=document.createElement("div");return n.appendChild(r),t.appendChild(n),{el:t,img:e,cnt:i,dur:n,bar:r,key:null}}paint(t,e){let i=e?e.id+":"+e.n+":"+(e.d||0):"";if(t.key===i)return;if(t.key=i,!e){t.img.style.display="none",t.cnt.textContent="",t.dur.style.display="none";return}t.img.style.display="block",t.img.src=rl(e.id),t.cnt.textContent=e.n>1?e.n:"";let n=_t[e.id],r=n.tool?n.tool.dur:n.dur;if(r&&e.d>0){t.dur.style.display="block";let o=1-e.d/r;t.bar.style.width=o*100+"%",t.bar.style.background=o>.5?"#4f4":o>.25?"#fd4":"#f44"}else t.dur.style.display="none"}toast(t,e=2800){let i=document.createElement("div");for(i.className="toastline",i.textContent=t,this.toastEl.appendChild(i),setTimeout(()=>i.classList.add("fade"),e-600),setTimeout(()=>i.remove(),e);this.toastEl.children.length>5;)this.toastEl.firstChild.remove()}update(){let t=this.g,e=t.player,i=Math.ceil(e.hp),n=Math.ceil(e.food),r=e.hp<=6;if(this.last.hp!==i){this.last.hp=i;for(let a=0;a<10;a++){let l=i-a*2;this.hearts[a].src=l>=2?nf:l===1?Kx:Yx}}if(this.last.food!==n){this.last.food=n;for(let a=0;a<10;a++){let l=n-a*2;this.foods[a].src=l>=2?sf:l===1?Jx:Zx}}let o=e.headInWater?Math.ceil(e.air/30):0;this.last.air!==o&&(this.last.air=o,document.getElementById("air").style.display=o>0&&e.air<300?"flex":"none",this.bubbles.forEach((a,l)=>{a.style.visibility=l<o?"visible":"hidden"}));for(let a=0;a<9;a++)this.paint(this.hotSlots[a],t.inv.slots[a]);if(this.last.sel!==t.inv.sel){this.last.sel=t.inv.sel,this.hotSlots.forEach((c,h)=>c.el.classList.toggle("sel",h===t.inv.sel));let a=t.inv.held(),l=document.getElementById("helditem");l.textContent=a?_t[a.id].label:"",l.style.opacity=1,clearTimeout(this._ht),this._ht=setTimeout(()=>l.style.opacity=0,1800)}this.screen&&this.refreshScreen()}open(t,e){let i=this.g;this.screen={kind:t,tile:e,slots:[]};let n=t==="craft"?3:t==="inventory"?2:0;this.screen.n=n,this.screen.grid=n?new Array(n*n).fill(null):null;let r=this.screenEl;r.innerHTML="",r.style.display="flex";let o=document.createElement("div");o.className="panel",r.appendChild(o);let a=document.createElement("div");a.className="ptitle",a.textContent=t==="craft"?"Werkbank":t==="furnace"?"Ofen":t==="chest"?"Truhe":"Inventar & Handwerk",o.appendChild(a);let l=this.screen,c=(m,p)=>{let _=document.createElement("div");return _.className="grid",_.style.gridTemplateColumns=`repeat(${p}, 44px)`,m.forEach(v=>_.appendChild(v.el)),_},h=(m,p,_={})=>{let v=this.makeSlot();return v.get=m,v.set=p,Object.assign(v,_),v.el.addEventListener("mousedown",M=>{M.preventDefault(),this.click(v,M)}),v.el.addEventListener("mouseenter",()=>{let M=v.get();M&&(this.tip.textContent=_t[M.id].label,this.tip.style.display="block")}),v.el.addEventListener("mouseleave",()=>this.tip.style.display="none"),l.slots.push(v),v},d=i.inv;if(n){let m=document.createElement("div");m.className="craftrow";let p=[];for(let v=0;v<n*n;v++)p.push(h(()=>l.grid[v],M=>{l.grid[v]=M},{grid:!0}));m.appendChild(c(p,n));let _=document.createElement("div");_.className="arrow",_.textContent="\u279C",m.appendChild(_),l.out=h(()=>l.outStack,()=>{},{output:!0}),m.appendChild(l.out.el),o.appendChild(m)}else if(t==="furnace"){let m=e,p=document.createElement("div");p.className="furnace";let _=document.createElement("div");_.className="fcol",l.fin=h(()=>m.in,M=>{m.in=M},{furnace:"in"}),l.flame=document.createElement("div"),l.flame.className="flame",l.flameFill=document.createElement("div"),l.flame.appendChild(l.flameFill),l.ffuel=h(()=>m.fuel,M=>{m.fuel=M},{furnace:"fuel"}),_.append(l.fin.el,l.flame,l.ffuel.el);let v=document.createElement("div");v.className="prog",l.progFill=document.createElement("div"),v.appendChild(l.progFill),l.fout=h(()=>m.out,M=>{m.out=M},{output:!0,furnaceOut:!0}),p.append(_,v,l.fout.el),o.appendChild(p)}else if(t==="chest"){let m=[];for(let p=0;p<27;p++)m.push(h(()=>e.items[p],_=>{e.items[p]=_},{chest:!0}));o.appendChild(c(m,9))}let u=document.createElement("div");u.className="ptitle small",u.textContent="Inventar",o.appendChild(u);let f=[];for(let m=9;m<36;m++)f.push(h(()=>d.slots[m],p=>{d.slots[m]=p},{inv:!0}));o.appendChild(c(f,9));let g=[];for(let m=0;m<9;m++)g.push(h(()=>d.slots[m],p=>{d.slots[m]=p},{inv:!0}));let x=c(g,9);x.style.marginTop="8px",o.appendChild(x),r.onmousedown=m=>{m.target===r&&this.dropCursor(m.button===2)},r.oncontextmenu=m=>m.preventDefault(),this.refreshScreen()}dropCursor(t){if(!this.cursor)return;let e=this.g;t&&this.cursor.n>1?(e.dropFromPlayer(Object.assign({},this.cursor,{n:1})),this.cursor.n--):(e.dropFromPlayer(this.cursor),this.cursor=null)}close(){let t=this.screen;if(!t)return;let e=this.g;t.grid&&t.grid.forEach(i=>{i&&e.pickupOrDrop(i)}),this.cursor&&(e.pickupOrDrop(this.cursor),this.cursor=null),this.screen=null,this.screenEl.style.display="none",this.screenEl.innerHTML="",this.tip.style.display="none",this.cursorEl.style.display="none"}recomputeOutput(){let t=this.screen;if(!t.grid)return;let e=Kc(t.grid.map(i=>i?i.id:0),t.n,t.n);if(t.recipe=e,e){let i=_t[e.out];t.outStack={id:e.out,n:e.n},(i.tool||i.dur)&&(t.outStack.d=0)}else t.outStack=null}refreshScreen(){let t=this.screen;if(!t)return;this.recomputeOutput();for(let i of t.slots)this.paint(i,i.get());if(t.kind==="furnace"){let i=t.tile;t.flameFill.style.height=(i.burnMax>0&&i.burn>0?i.burn/i.burnMax*100:0)+"%",t.progFill.style.width=i.cook/10*100+"%"}let e=this.cursor;e?(this.cursorEl.style.display="block",this.cursorEl.innerHTML=`<img src="${rl(e.id)}"><span>${e.n>1?e.n:""}</span>`):this.cursorEl.style.display="none"}same(t,e){return t&&e&&t.id===e.id&&!Hr(t.id)&&(t.d||0)===(e.d||0)}click(t,e){let i=this.screen,n=e.button===2,r=this.cursor,o=t.get();if(e.shiftKey&&!n){this.shiftClick(t),this.refreshScreen();return}if(t.output){if(!o)return;if(t.furnaceOut){r?this.same(r,o)&&r.n+o.n<=Si(r.id)&&(r.n+=o.n,t.set(null)):(this.cursor=o,t.set(null)),this.refreshScreen();return}if(r&&!(this.same(r,o)&&r.n+o.n<=Si(r.id)))return;this.takeCraft(),this.refreshScreen();return}if(t.furnace==="in"&&r&&Nn[r.id],n){if(r)o?this.same(r,o)&&o.n<Si(o.id)?(o.n++,r.n--,r.n<=0&&(this.cursor=null)):this.same(r,o)||(t.set(r),this.cursor=o):(t.set(Object.assign({},r,{n:1})),r.n--,r.n<=0&&(this.cursor=null));else if(o){let a=Math.ceil(o.n/2);this.cursor=Object.assign({},o,{n:a}),o.n-=a,o.n<=0&&t.set(null)}}else if(!r)o&&(this.cursor=o,t.set(null));else if(!o)t.set(r),this.cursor=null;else if(this.same(r,o)){let a=Math.min(Si(o.id)-o.n,r.n);o.n+=a,r.n-=a,r.n<=0&&(this.cursor=null)}else t.set(r),this.cursor=o;this.refreshScreen()}takeCraft(){let t=this.screen;if(!t.outStack)return!1;let e=Object.assign({},t.outStack);return this.cursor?this.cursor.n+=e.n:this.cursor=e,t.grid.forEach((i,n)=>{i&&(i.n--,i.n<=0&&(t.grid[n]=null))}),this.g.sfx("pop"),this.recomputeOutput(),!0}shiftClick(t){let e=this.screen,i=this.g,n=t.get();if(!n)return;if(t.output&&!t.furnaceOut){let a=0;for(;e.outStack&&a++<64;){let l=Object.assign({},e.outStack);if(!i.inv.canAdd(l))break;i.inv.add(l),e.grid.forEach((c,h)=>{c&&(c.n--,c.n<=0&&(e.grid[h]=null))}),this.recomputeOutput()}return}let r=Object.assign({},n),o=!1;if(t.inv){if(e.kind==="chest")o=this.addToList(e.tile.items,r);else if(e.kind==="furnace"){let a=e.tile;if(Nn[r.id]&&!a.in)a.in=Object.assign({},r),r.n=0,o=!0;else if(Nn[r.id]&&this.same(a.in,r)){let l=Math.min(r.n,Si(r.id)-a.in.n);a.in.n+=l,r.n-=l,o=!0}else if(Dn[r.id]&&!a.fuel)a.fuel=Object.assign({},r),r.n=0,o=!0;else if(Dn[r.id]&&this.same(a.fuel,r)){let l=Math.min(r.n,Si(r.id)-a.fuel.n);a.fuel.n+=l,r.n-=l,o=!0}}else e.grid&&(o=this.addToList(e.grid,r));if(!o){let l=i.inv.slots.indexOf(n)<9?[9,36]:[0,9],c=i.inv.slots.slice(l[0],l[1]);if(this.addToList(c,r)){for(let h=l[0];h<l[1];h++)i.inv.slots[h]=c[h-l[0]];o=!0}}}else{let a=i.inv.slots.slice();this.addToHotbarFirst(a,r)&&(i.inv.slots.splice(0,36,...a),o=!0)}o&&(r.n<=0?t.set(null):n.n=r.n)}addToHotbarFirst(t,e){return this.addToList(t,e)}addToList(t,e){let i=!1;if(!Hr(e.id))for(let n=0;n<t.length&&e.n>0;n++){let r=t[n];if(r&&r.id===e.id){let o=Math.min(Si(e.id)-r.n,e.n);o>0&&(r.n+=o,e.n-=o,i=!0)}}for(let n=0;n<t.length&&e.n>0;n++)if(!t[n]){let r=Math.min(Si(e.id),e.n);t[n]=Object.assign({},e,{n:r}),e.n-=r,i=!0}return i}};Kt.enabled=!1;var jx=`
attribute vec3 aLight; varying vec2 vUv; varying vec3 vL; varying float vD;
void main(){ vUv = uv; vL = aLight; vec4 mv = modelViewMatrix * vec4(position,1.0); vD = length(mv.xyz); gl_Position = projectionMatrix * mv; }`,Qx=`
uniform sampler2D map; uniform float uDay; uniform float uAmb; uniform vec3 uFog; uniform float uNear; uniform float uFar; uniform float uAT; uniform float uBright; uniform float uTime;
varying vec2 vUv; varying vec3 vL; varying float vD;
void main(){
  vec4 c = texture2D(map, vUv);
  if (c.a < uAT) discard;
  float l = max(max(vL.x * uDay, vL.y), uAmb);
  float b = clamp(l * vL.z * uBright, 0.0, 1.0);
  vec3 col = c.rgb * b;
  col += vec3(0.12,0.05,0.0) * vL.y * 0.5;
  float f = smoothstep(uNear, uFar, vD);
  gl_FragColor = vec4(mix(col, uFog, f), c.a);
}`,rf={overworld:"Oberwelt",nether:"Nether",end:"Das Ende"},Ze=(s,t)=>s+Math.random()*(t-s),t_=s=>_t[s].maxStack||64,xl=class{constructor(t){this.canvas=t,this.renderer=new Qa({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Yn,this.renderer.autoClear=!1,this.scene=new Cs,this.camera=new ti(72,1,.05,500),this.camera.rotation.order="YXZ",this.handScene=new Cs,this.handCam=new ti(60,1,.01,10),this.amb=new Ds(16777215,2.6),this.scene.add(this.amb),this.sun=new Mr(16777215,1.6),this.sun.position.set(.4,1,.3),this.scene.add(this.sun),this.handScene.add(new Ds(16777215,1));let e=qc();this.atlasCanvas=e,this.atlas=new Yi(e),this.atlas.magFilter=ce,this.atlas.minFilter=ce,this.atlas.generateMipmaps=!1,this.U={map:{value:this.atlas},uDay:{value:1},uAmb:{value:.06},uFog:{value:new It(9419007)},uNear:{value:60},uFar:{value:100},uBright:{value:1.12},uTime:{value:0}};let i=(o,a,l)=>new wi({uniforms:Object.assign({},this.U,{uAT:{value:o}}),vertexShader:jx,fragmentShader:Qx,transparent:a,depthWrite:!a,side:l});this.mats=[i(.01,!1,Ki),i(.5,!1,ci),i(.02,!0,ci)],this.sunMesh=new ie(new dn(70,70),new Ee({color:16773792,fog:!1,depthWrite:!1})),this.moonMesh=new ie(new dn(50,50),new Ee({color:14673653,fog:!1,depthWrite:!1})),this.sunMesh.renderOrder=-10,this.moonMesh.renderOrder=-10,this.scene.add(this.sunMesh,this.moonMesh);let n=new Float32Array(600*3);for(let o=0;o<600;o++){let a=Math.random()*6.283,l=Math.acos(Math.random()*2-1);n[o*3]=Math.sin(l)*Math.cos(a)*420,n[o*3+1]=Math.abs(Math.cos(l))*420,n[o*3+2]=Math.sin(l)*Math.sin(a)*420}let r=new ei;r.setAttribute("position",new Ye(n,3)),this.stars=new dr(r,new Ns({color:16777215,size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:0})),this.scene.add(this.stars),this.sel=new ur(new gr(new Me(1.004,1.004,1.004)),new Ls({color:0})),this.sel.visible=!1,this.scene.add(this.sel),this.crackTex=Yc().map(o=>{let a=new Yi(o);return a.magFilter=ce,a.minFilter=ce,a}),this.crack=new ie(new Me(1.01,1.01,1.01),new Ee({map:this.crackTex[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.crack.visible=!1,this.scene.add(this.crack),this.particles=[],this.pGeo=new Me(.1,.1,.1),this.pMats=new Map,this.keys={},this.mouse={l:!1,r:!1},this.inv=new Vr,this.ui=new gl(this),this.renderDist=6,this.skin=Object.assign({},Bn.Steve),this.playing=!1,this.paused=!1,this.camMode=0,this.showDebug=!1,this.fps=60,this._fa=0,this._fc=0,this.buildHand(),this.offsets=[];for(let o=-16;o<=16;o++)for(let a=-16;a<=16;a++)this.offsets.push([o,a,o*o+a*a]);this.offsets.sort((o,a)=>o[2]-a[2]),this.bindInput(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.worlds={},this.last=performance.now(),requestAnimationFrame(o=>this.loop(o))}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.handCam.aspect=t/e,this.handCam.updateProjectionMatrix()}async start(t,e){this.seed=bd(t.seed),this.renderDist=t.dist||6,this.skin=Object.assign({},Bn.Steve,t.skin||{});for(let d in this.worlds)this.scene.remove(this.worlds[d].group);this.worlds={},this.inv=new Vr,this.ui.inv=this.inv,this.ui.last.sel=-1,this.ui.last.hp=-1,this.ui.last.food=-1,this.ui.screen=null,this.ui.cursor=null,this.worldFor("overworld"),this.world=this.worlds.overworld,this.dim="overworld",this.scene.add(this.world.group);let i=this.world.gen.findSpawn();this.spawn={x:i.x,z:i.z};let n=Math.floor(i.x/16),r=Math.floor(i.z/16),o=3,a=0,l=(2*o+3)**2;for(let d=-o-1;d<=o+1;d++)for(let u=-o-1;u<=o+1;u++)this.genChunk(n+d,r+u),a++,a%6===0&&(e&&e("Gel\xE4nde wird erzeugt...",a/l*.6),await new Promise(f=>setTimeout(f,0)));let c=0;for(let d=-o;d<=o;d++)for(let u=-o;u<=o;u++){let f=this.world.getChunk(n+d,r+u);this.meshNow(f),c++,c%4===0&&(e&&e("Bl\xF6cke werden gebaut...",.6+c/(2*o+1)**2*.4),await new Promise(g=>setTimeout(g,0)))}this.player=this.newPlayer();let h=this.safeY(i.x,i.z);this.player.x=i.x,this.player.y=h,this.player.z=i.z,this.player.yaw=0,this.player.pitch=0,this.time=1200*.04,this.portalT=0,this.portalReady=!0,this.endInit=!1,this.endDefeated=!1,this.boss=null,this.setupDim(),this.updateHeld(!0),this.rig=null,this.rebuildPlayerRig(),this.playing=!0,this.paused=!1,this.last=performance.now(),this.ui.toast("Willkommen in der Welt! Dr\xFCcke E f\xFCr das Inventar.",5e3)}rebuildPlayerRig(){this.rig&&this.scene.remove(this.rig.root),this.rig=Hd(this.skin),this.rig.root.visible=!1,this.scene.add(this.rig.root),this.armMat.color.set(this.skin.skin),this.sleeveMat.color.set(this.skin.shirt)}newPlayer(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,w:.6,h:1.8,yaw:0,pitch:0,hp:20,food:20,sat:5,exh:0,dead:!1,onGround:!1,sneaking:!1,sprinting:!1,air:300,headInWater:!1,inWater:!1,invuln:0,peakY:0,burn:0,regenT:0,starveT:0,atk:0,eatT:0,cause:"",eye(){return[this.x,this.y+(this.sneaking?1.27:1.62),this.z]}}}worldFor(t){if(!this.worlds[t]){let e=new is(t,this.seed+(t==="nether"?7:t==="end"?13:0));e.group=new Ht,this.worlds[t]=e}return this.worlds[t]}safeY(t,e){let i=this.world;for(let n=94;n>1;n--){let r=i.getBlock(Math.floor(t),n,Math.floor(e));if(_t[r].solid&&!i.isSolid(Math.floor(t),n+1,Math.floor(e))&&!i.isSolid(Math.floor(t),n+2,Math.floor(e)))return n+1}return 40}genChunk(t,e){let i=this.world,n=i.chunks.has(is.key(t,e)),r=i.ensureChunk(t,e);return n||this.processSpawns(r),r}processSpawns(t){for(let e of t.spawns)if(e.type==="crystal"){let i=new kr(e.x,e.y,e.z);this.world.entities.push(i),this.world.group.add(i.mesh)}else this.addMob(e.type,e.x,e.y,e.z);t.spawns=[]}buildHand(){this.hand=new Ht,this.armMat=new Ee({color:13145450}),this.sleeveMat=new Ee({color:1750453});let t=new ie(new Me(.2,.2,.55),this.armMat);t.position.set(0,0,0);let e=new ie(new Me(.205,.205,.25),this.sleeveMat);e.position.set(0,0,.2),this.hand.add(t,e),this.hand.position.set(.38,-.34,-.6),this.hand.rotation.set(-.1,.25,0),this.heldHolder=new Ht,this.hand.add(this.heldHolder),this.handScene.add(this.hand),this.swing=0,this.swinging=!1,this.heldId=-1}updateHeld(t){let e=this.inv.held(),i=e?e.id:0;if(i===this.heldId&&!t)return;for(this.heldId=i;this.heldHolder.children.length;)this.heldHolder.remove(this.heldHolder.children[0]);if(!i){this.hand.children[0].visible=!0;return}let n=_t[i];if(n.block&&!n.cross){let r=Bd(n),o=new ei;o.setAttribute("position",new Ne(r.pos,3)),o.setAttribute("uv",new Ne(r.uv,2)),o.setAttribute("color",new Ne(r.col,3)),o.setIndex(r.idx);let a=new ie(o,new Ee({map:this.atlas,vertexColors:!0,transparent:!0,alphaTest:.1}));a.scale.setScalar(.32),a.position.set(0,.17,-.22),a.rotation.set(.2,.7,0),this.heldHolder.add(a)}else{let r=new ie(new dn(.46,.46),new Ee({map:lh(i),transparent:!0,alphaTest:.1,side:ci}));r.position.set(.02,.2,-.3),r.rotation.set(.1,-.6,-.5),this.heldHolder.add(r)}}bindInput(){let t=this.canvas;window.addEventListener("keydown",e=>{if(this.playing){if((e.code==="F5"||e.code==="F3"||e.code==="F4"||e.code==="Tab")&&e.preventDefault(),e.repeat){this.keys[e.code]=!0;return}if(this.keys[e.code]=!0,!this.player.dead&&(e.code==="KeyE"?this.ui.screen?this.closeScreen():this.paused||this.openScreen("inventory"):e.code==="Escape"&&this.ui.screen&&this.closeScreen(),!this.ui.screen)){if(e.code.startsWith("Digit")){let i=+e.code.slice(5);i>=1&&i<=9&&(this.inv.sel=i-1,this.updateHeld())}else if(e.code==="KeyQ")this.dropHeld(e.ctrlKey);else if(e.code==="F3")this.showDebug=!this.showDebug,document.getElementById("debug").style.display=this.showDebug?"block":"none";else if(e.code==="F5")this.camMode=(this.camMode+1)%3;else if(e.code==="F4"||e.code==="KeyL")this.locate();else if(e.code==="KeyW"){let i=performance.now();i-(this._wt||0)<280&&(this.sprintLatch=!0),this._wt=i}}}}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1,e.code==="KeyW"&&(this.sprintLatch=!1)}),window.addEventListener("blur",()=>{this.keys={},this.mouse.l=this.mouse.r=!1}),window.addEventListener("mousedown",e=>{!this.playing||this.paused||this.ui.screen||this.player.dead||document.pointerLockElement===t&&(e.button===0&&(this.mouse.l=!0,this.clickL=!0),e.button===2&&(this.mouse.r=!0,this.clickR=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.l=!1),e.button===2&&(this.mouse.r=!1,this.player&&(this.player.eatT=0))}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{if(!this.playing||document.pointerLockElement!==t||this.paused||this.ui.screen||this.player.dead)return;let i=this.player;i.yaw-=e.movementX*.0022,i.pitch-=e.movementY*.0022,i.pitch=il(i.pitch,-1.55,1.55)}),window.addEventListener("wheel",e=>{!this.playing||this.ui.screen||this.paused||(this.inv.sel=(this.inv.sel+(e.deltaY>0?1:8))%9,this.updateHeld())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!(document.pointerLockElement===t)&&this.playing&&!this.ui.screen&&!this.player.dead&&!this.suppressPause&&this.setPaused(!0),this.suppressPause=!1})}lock(){try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}setPaused(t){this.paused=t,document.getElementById("pause").style.display=t?"flex":"none",t||this.lock()}openScreen(t,e){this.suppressPause=!0,document.pointerLockElement&&document.exitPointerLock(),this.ui.open(t,e),this.mouse.l=this.mouse.r=!1}closeScreen(){this.ui.close(),this.lock()}initAudio(){if(!this.audio)try{this.audio=new(window.AudioContext||window.webkitAudioContext),this.master=this.audio.createGain(),this.master.gain.value=.25,this.master.connect(this.audio.destination)}catch{this.audio=null}}sfx(t){if(!this.audio)return;let e=this.audio.currentTime;if(this._sfxT=this._sfxT||{},this._sfxT[t]&&e-this._sfxT[t]<.05)return;this._sfxT[t]=e;let i=this.audio,n=(o,a,l,c,h)=>{let d=i.createOscillator(),u=i.createGain();d.type=l,d.frequency.setValueAtTime(o,e),h&&d.frequency.exponentialRampToValueAtTime(h,e+a),u.gain.setValueAtTime(c,e),u.gain.exponentialRampToValueAtTime(.001,e+a),d.connect(u),u.connect(this.master),d.start(e),d.stop(e+a)},r=(o,a,l)=>{let c=i.sampleRate*o,h=i.createBuffer(1,c,i.sampleRate),d=h.getChannelData(0);for(let x=0;x<c;x++)d[x]=Math.random()*2-1;let u=i.createBufferSource();u.buffer=h;let f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=l;let g=i.createGain();g.gain.setValueAtTime(a,e),g.gain.exponentialRampToValueAtTime(.001,e+o),u.connect(f),f.connect(g),g.connect(this.master),u.start(e)};switch(t){case"break":r(.18,.9,1800);break;case"place":n(160,.1,"square",.3,90);break;case"hit":n(220,.08,"sawtooth",.4,110);break;case"hurt":n(300,.25,"sawtooth",.5,90);break;case"mobdie":n(200,.4,"sawtooth",.4,50);break;case"explode":r(.9,1.2,700),n(70,.6,"sine",.6,30);break;case"pop":n(600,.08,"sine",.25,900);break;case"shoot":n(500,.15,"triangle",.25,200);break;case"fire":r(.3,.5,900);break;case"fuse":r(.8,.4,3e3);break;case"tp":n(900,.2,"sine",.4,200);break;case"scream":n(400,.5,"sawtooth",.3,800);break;case"portal":n(120,1.2,"sine",.4,400);break;case"eat":r(.1,.5,2500);break;case"dragondie":r(2,1,400),n(80,2,"sawtooth",.5,20);break}}log(t){this.ui.toast(t)}isDay(){return this.dayFactor>.45}pickup(t){let e=this.inv.add(t);return this.updateHeld(),e}canPickup(t){return this.inv.canAdd(t)}pickupOrDrop(t){this.inv.add(t)||this.dropFromPlayer(t),this.updateHeld()}dropFromPlayer(t){let e=this.player,i=this.lookDir(),n=e.eye();this.spawnItem(t.id,t.n,n[0],n[1]-.3,n[2],[i[0]*5,i[1]*5+2,i[2]*5],t.d)}dropHeld(t){let e=this.inv.held();if(!e)return;let i=Object.assign({},e,{n:t?e.n:1});this.dropFromPlayer(i),this.inv.removeFromSel(i.n),this.updateHeld()}spawnItem(t,e,i,n,r,o,a){if(!t||e<=0)return;let l={id:t,n:e};(_t[t].tool||_t[t].dur)&&(l.d=a||0);let c=new ml(l,i,n,r,o);c.delay=o?1.2:.5,this.world.entities.push(c),this.world.group.add(c.mesh)}damageHeld(t=1){let e=this.inv.held();if(!e)return;let i=_t[e.id],n=i.tool?i.tool.dur:i.dur;n&&(e.d=(e.d||0)+t,e.d>=n&&(this.inv.slots[this.inv.sel]=null,this.sfx("break"),this.log(i.label+" ist kaputtgegangen")),this.updateHeld(!0))}heldTool(){let t=this.inv.held();return t&&_t[t.id].tool?_t[t.id].tool:null}lookDir(){let t=this.player,e=Math.cos(t.pitch);return[-Math.sin(t.yaw)*e,Math.sin(t.pitch),-Math.cos(t.yaw)*e]}loop(t){requestAnimationFrame(i=>this.loop(i));let e=(t-this.last)/1e3;this.last=t,e>.1&&(e=.1),this._fa+=e,this._fc++,this._fa>=.5&&(this.fps=Math.round(this._fc/this._fa),this._fa=0,this._fc=0),this.playing&&(this.paused||this.update(e),this.render(e))}update(t){let e=this.player;this.time+=t,this.updateSkyState(),e.dead?this.updateDead(t):(this.updatePlayer(t),this.updateActions(t)),this.updateEntities(t),this.updateFurnaces(t),this.updateChunks(7),this.updateSpawning(t),this.updateParticles(t),this.updatePortalLogic(t),this.ui.update(),e.invuln=Math.max(0,e.invuln-t),e.atk+=t,this.boss&&this.updateBossBar(),this.showDebug&&this.updateDebug()}updatePlayer(t){let e=this.player,i=this.keys,n=this.world,r=this.ui.screen||this.paused,o=r?0:(i.KeyW?1:0)-(i.KeyS?1:0),a=r?0:(i.KeyD?1:0)-(i.KeyA?1:0);e.sneaking=!r&&!!(i.ShiftLeft||i.ShiftRight);let l=!r&&!!i.Space;e.sprinting=!r&&(i.ControlLeft||i.KeyR||this.sprintLatch)&&o>0&&!e.sneaking&&e.food>6,o<=0&&(this.sprintLatch=!1);let c=Math.hypot(o,a);c>0&&(o/=c,a/=c);let h=Math.sin(e.yaw),d=Math.cos(e.yaw),u=-h*o+d*a,f=-d*o-h*a,g=Fn(n,e.x,e.y+.4,e.z);e.inWater=g==="water",e.inLava=g==="lava",e.headInWater=Fn(n,e.x,e.y+1.62,e.z)==="water";let x=e.sneaking?1.3:e.sprinting?5.6:4.3;e.inWater&&(x*=.6),e.inLava&&(x*=.35);let m=e.onGround?14:e.inWater||e.inLava?6:2.2,p=Math.min(1,m*t);if(e.vx+=(u*x-e.vx)*p,e.vz+=(f*x-e.vz)*p,e.inWater||e.inLava?(e.vy-=10*t,l&&(e.vy=Math.min(e.vy+32*t,e.inLava?2.6:3.8)),e.vy=Math.max(e.vy,-4),e.vy*=Math.pow(.25,t)):(e.vy-=32*t,e.vy<-70&&(e.vy=-70),l&&e.onGround&&(e.vy=9.2,e.sprinting?(e.vx+=u*2,e.vz+=f*2,e.exh+=.2):e.exh+=.05)),Vs(n,e,t,e.sneaking),e.onGround||e.inWater||e.inLava){let v=e.peakY-e.y;v>3.2&&!e.inWater&&!e.inLava&&this.hurtPlayer(Math.ceil(v-3),null,null,0,"Fallschaden",!0),e.peakY=e.y}else e.y>e.peakY&&(e.peakY=e.y);e.inWater&&(e.peakY=e.y),e.y<-40&&this.hurtPlayer(100,null,null,0,"Sturz in die Leere",!0);let _=Math.hypot(e.vx,e.vz);if(e.sprinting&&_>1&&(e.exh+=.1*_*t*1.2),e.exh>=4&&(e.exh-=4,e.sat>0?e.sat=Math.max(0,e.sat-1):e.food=Math.max(0,e.food-1)),e.regenT+=t,e.food>=18&&e.hp<20){let v=e.food>=20&&e.sat>0?.5:4;e.regenT>=v&&(e.regenT=0,e.hp=Math.min(20,e.hp+1),e.exh+=1.5)}else e.food<=0?e.regenT>=4&&(e.regenT=0,e.hp>1&&this.hurtPlayer(1,null,null,0,"Verhungern",!0)):e.food<18&&(e.regenT=0);e.headInWater?(e.air-=t*20,e.air<=0&&(e.air=0,e.airT=(e.airT||0)+t,e.airT>=1&&(e.airT=0,this.hurtPlayer(2,null,null,0,"Ertrinken",!0)))):e.air=Math.min(300,e.air+t*100),e.inLava&&(e.burn=8,e.lavaT=(e.lavaT||0)+t,e.lavaT>.4&&(e.lavaT=0,this.hurtPlayer(4,null,null,0,"Lava",!0))),e.burn>0&&(e.inWater?e.burn=0:(e.burn-=t,e.burnT=(e.burnT||0)+t,e.burnT>=1&&(e.burnT=0,this.hurtPlayer(1,null,null,0,"Feuer",!0)))),this.cactusNear(e)&&(e.cactT=(e.cactT||0)+t,e.cactT>.5&&(e.cactT=0,this.hurtPlayer(1,null,null,0,"Kaktus",!0))),document.getElementById("water").style.opacity=this.camInWater()?1:0,document.getElementById("fire").style.opacity=e.burn>0?1:0}camInWater(){let t=this.player.eye();return Fn(this.world,t[0],t[1],t[2])==="water"}cactusNear(t){let e=this.world;for(let i of[-.4,.4])for(let n of[-.4,.4])for(let r of[.2,1])if(e.getBlock(Math.floor(t.x+i*1.3),Math.floor(t.y+r),Math.floor(t.z+n*1.3))===N.CACTUS)return!0;return!1}hurtPlayer(t,e,i,n=1,r="",o){let a=this.player;if(a.dead||t<=0||a.invuln>0&&!o)return;a.hp-=t,a.invuln=o?.3:.55,this.sfx("hurt");let l=document.getElementById("flash");if(l.style.opacity=.55,clearTimeout(this._ft),this._ft=setTimeout(()=>l.style.opacity=0,220),e!=null&&n>0){let c=a.x-e,h=a.z-i,d=Math.hypot(c,h)||1;a.vx+=c/d*6*n,a.vz+=h/d*6*n,a.vy=Math.max(a.vy,4.5)}a.exh+=.1,a.hp<=0&&(a.hp=0,this.die(r))}die(t){let e=this.player;e.dead=!0,e.cause=t,this.suppressPause=!0,document.pointerLockElement&&document.exitPointerLock(),this.ui.close(),document.getElementById("death").style.display="flex",document.getElementById("deathcause").textContent=t?`Todesursache: ${t}`:"",this.mouse.l=this.mouse.r=!1,this.camTilt=0}updateDead(t){this.camTilt=Math.min(1.2,(this.camTilt||0)+t*2)}respawn(){document.getElementById("death").style.display="none";let t=this.player;this.dim!=="overworld"&&this.enterDimension("overworld",this.spawn.x,0,this.spawn.z,!0),t.hp=20,t.food=20,t.sat=5,t.dead=!1,t.vx=t.vy=t.vz=0,t.burn=0,t.air=300,t.invuln=2,t.x=this.spawn.x,t.z=this.spawn.z,this.ensureAround(t.x,t.z,2),t.y=this.safeY(t.x,t.z),t.peakY=t.y,this.ui.last.hp=-1,this.ui.last.food=-1,this.lock()}eatFood(t){let e=_t[t.id].food;this.player.food=Math.min(20,this.player.food+e),this.player.sat=Math.min(this.player.food,this.player.sat+e*.6),this.sfx("eat"),t.id===N.ROTTEN_FLESH&&Math.random()<.8&&this.hurtPlayer(2,null,null,0,"Vergiftung",!0)}updateActions(t){let e=this.player,i=this.world,n=this.ui.screen||this.paused,r=e.eye(),o=this.lookDir(),a=this.inv.held(),l=a&&a.id===N.BUCKET;if(this.target=n?null:hl(i,r[0],r[1],r[2],o[0],o[1],o[2],5,l),this.entTarget=null,!n){let c=3.4,h=this.target?this.target.t:99;for(let d of i.entities)if(!(d.kind!=="mob"||d.dead))for(let u of d.aabbs()){let f=Gd(r[0],r[1],r[2],o[0],o[1],o[2],u[0],u[1],u[2],u[3],u[4],u[5]);f>=0&&f<c&&f<h&&(c=f,this.entTarget=d)}}if(this.target&&!this.entTarget&&this.camMode===0?(this.sel.visible=!0,this.sel.position.set(this.target.x+.5,this.target.y+.5,this.target.z+.5)):this.sel.visible=!1,this.clickL&&(this.clickL=!1,this.entTarget&&this.attack(this.entTarget),this.swinging=!0,this.swing=1e-4),!this.mouse.l||n)this.mineT=0,this.mineKey=null,this.crack.visible=!1;else if(!this.entTarget&&this.target){let c=this.target,h=c.x+","+c.y+","+c.z;this.mineKey!==h&&(this.mineKey=h,this.mineT=0);let d=_t[c.id];if(d.hardness<0)this.crack.visible=!1;else{let u=this.heldTool(),f=!d.needs||u&&u.type===d.tool&&u.tier>=d.tier,g=1;u&&u.type===d.tool&&(g=u.speed);let x=d.hardness===0?0:d.hardness*(f?1.5:5)/g;if(!e.onGround&&!e.inWater&&(x*=5),e.headInWater&&(x*=5),this.mineT+=t,this.swinging=!0,this.mineT>=x)this.breakBlock(c.x,c.y,c.z,f,!0),d.hardness>0&&this.damageHeld(1),e.exh+=.005,this.mineKey=null,this.mineT=0,this.crack.visible=!1,this.mineCool=.18;else{let m=Math.min(9,Math.floor(this.mineT/x*10));this.crack.visible=!0,this.crack.position.set(c.x+.5,c.y+.5,c.z+.5),this.crack.material.map=this.crackTex[m],this.mineSfx=(this.mineSfx||0)-t,this.mineSfx<=0&&(this.mineSfx=.25,this.sfx("hit"))}}}if(this.mineCool>0&&(this.mineCool-=t),this.clickR)this.clickR=!1,this.useItem(),this.placeCool=.25;else if(this.mouse.r&&!n){this.placeCool=(this.placeCool||0)-t;let c=this.inv.held();c&&_t[c.id].food&&e.food<20?(e.eatT+=t,this.swinging=!0,e.eatT>=1.6&&(e.eatT=0,this.eatFood(c),this.inv.removeFromSel(1),this.updateHeld())):c&&c.id<256&&this.placeCool<=0&&(this.placeCool=.25,this.useItem())}this.swinging&&(this.swing+=t*4.5,this.swing>=1&&(this.swing=0,this.swinging=this.mouse.l&&!n||this.mouse.r&&!n&&this.inv.held()&&_t[this.inv.held().id].food))}attack(t){let e=this.player,i=this.heldTool(),n=i?i.dmg:1;i&&i.type==="shovel"&&(n=i.dmg-1),i&&i.type==="pickaxe"&&(n=i.dmg);let r=Math.min(1,e.atk/.6);n*=.2+.8*r*r,!e.onGround&&e.vy<0&&r>.9&&(n*=1.5),e.atk=0,e.exh+=.1,t.damage(n,this,e.x,e.z,.8+(e.sprinting?.6:0)),i&&this.damageHeld(i.type==="sword"?1:2)}breakBlock(t,e,i,n=!0,r=!1){let o=this.world,a=o.getBlock(t,e,i);if(!a)return;let l=_t[a];if(l.hardness<0&&r)return;let c=o.tileKey(t,e,i),h=o.tiles.get(c);if(h){let d=u=>{u&&this.spawnItem(u.id,u.n,t+.5,e+.5,i+.5,null,u.d)};h.type==="chest"?h.items.forEach(d):(d(h.in),d(h.fuel),d(h.out)),o.tiles.delete(c)}if(o.setBlock(t,e,i,0),this.burst(t,e,i,a),this.sfx("break"),n||!r){if(a===N.GRAVEL&&Math.random()<.15)this.spawnItem(N.FLINT,1,t+.5,e+.5,i+.5);else if(a===N.LEAVES||a===N.JUNGLE_LEAVES)Math.random()<.06&&this.spawnItem(N.APPLE,1,t+.5,e+.5,i+.5),Math.random()<.1&&this.spawnItem(N.STICK,1,t+.5,e+.5,i+.5);else if(l.drops){let d=l.drops[1]+Math.floor(Math.random()*(l.drops[2]-l.drops[1]+1));d>0&&this.spawnItem(l.drops[0],d,t+.5,e+.5,i+.5)}}this.afterChange(t,e,i,a)}afterChange(t,e,i,n){let r=this.world,o=r.getBlock(t,e+1,i);if(o&&_t[o].cross?this.breakBlock(t,e+1,i,!0,!1):o&&_t[o].gravity&&this.settle(t,e+1,i),n===N.OBSIDIAN)for(let[a,l,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let h=r.getBlock(t+a,e+l,i+c);_t[h].portal&&this.removePortal(t+a,e+l,i+c)}}settle(t,e,i){let n=this.world,r=n.getBlock(t,e,i);if(!_t[r].gravity)return;let o=l=>{let c=_t[n.getBlock(t,l,i)];return l>=0&&(!n.getBlock(t,l,i)||c.fluid||c.cross)},a=e;for(;a>0&&o(a-1);)a--;a!==e&&(n.setBlock(t,e,i,0),n.setBlock(t,a,i,r),this.settle(t,e+1,i))}removePortal(t,e,i){let n=this.world,r=[[t,e,i]],o=0;for(;r.length&&o<800;){let[a,l,c]=r.pop();if(_t[n.getBlock(a,l,c)].portal){n.setBlock(a,l,c,0),o++;for(let[h,d,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]])r.push([a+h,l+d,c+u])}}this.sfx("break")}useItem(){let t=this.player,e=this.world,i=this.inv.held(),n=this.target;if(this.swinging=!0,this.swing=Math.max(this.swing,1e-4),n&&!t.sneaking){let a=_t[n.id];if(a.ui){let l=e.tiles.get(e.tileKey(n.x,n.y,n.z));a.ui==="furnace"&&!l&&(l={type:"furnace",in:null,fuel:null,out:null,burn:0,burnMax:0,cook:0},e.tiles.set(e.tileKey(n.x,n.y,n.z),l)),a.ui==="chest"&&!l&&(l={type:"chest",items:new Array(27).fill(null)},e.tiles.set(e.tileKey(n.x,n.y,n.z),l)),this.openScreen(a.ui,l);return}}if(!i)return;let r=i.id,o=_t[r];if(r===N.BUCKET){if(n&&_t[n.id].fluid){e.setBlock(n.x,n.y,n.z,0),this.inv.slots[this.inv.sel]=i.n>1?(i.n--,i):null;let a={id:_t[n.id].fluid==="water"?N.WATER_BUCKET:N.LAVA_BUCKET,n:1};this.inv.slots[this.inv.sel]?this.pickupOrDrop(a):this.inv.slots[this.inv.sel]=a,this.updateHeld(!0),this.sfx("pop")}return}if(r===N.WATER_BUCKET||r===N.LAVA_BUCKET){if(!n)return;let a=n.x+n.nx,l=n.y+n.ny,c=n.z+n.nz,h=e.getBlock(n.x,n.y,n.z);(_t[h].fluid||_t[h].cross)&&(a=n.x,l=n.y,c=n.z);let d=e.getBlock(a,l,c);if(d&&!_t[d].fluid&&!_t[d].cross)return;if(r===N.WATER_BUCKET&&this.dim==="nether"){this.log("Das Wasser verdunstet im Nether."),this.inv.slots[this.inv.sel]={id:N.BUCKET,n:1},this.updateHeld(!0);return}this.placeFluid(a,l,c,r===N.WATER_BUCKET?N.WATER:N.LAVA),this.inv.slots[this.inv.sel]={id:N.BUCKET,n:1},this.updateHeld(!0);return}if(r===N.FLINT_AND_STEEL){if(n){let a=n.x+n.nx,l=n.y+n.ny,c=n.z+n.nz;this.tryLightPortal(a,l,c)?(this.damageHeld(1),this.sfx("fire")):n.id===N.END_FRAME||this.sfx("fire")}return}if(r===N.ENDER_PEARL){let a=t.eye(),l=this.lookDir();this.addProj("pearl",a[0],a[1]-.1,a[2],l[0]*26,l[1]*26+2,l[2]*26,{fromPlayer:!0}),this.inv.removeFromSel(1),this.updateHeld(),this.sfx("shoot");return}if(r===N.ENDER_EYE){if(n&&n.id===N.END_FRAME){this.world.setBlock(n.x,n.y,n.z,N.END_FRAME_EYE),this.inv.removeFromSel(1),this.updateHeld(),this.sfx("place"),this.checkEndPortal(n.x,n.y,n.z);return}if(this.dim==="overworld"){let a=this.nearestStronghold(),l=t.eye();this.addProj("eye",l[0],l[1]-.2,l[2],0,0,0,{tx:a.x,tz:a.z}),this.inv.removeFromSel(1),this.updateHeld(),this.sfx("shoot"),this.log("Das Enderauge fliegt in Richtung des Strongholds...")}else this.log("Das Enderauge funktioniert nur in der Oberwelt.");return}if(!o.food&&r<256&&n){let a=n.x+n.nx,l=n.y+n.ny,c=n.z+n.nz;if(l<0||l>=96)return;let h=e.getBlock(a,l,c),d=_t[h];if(h&&!d.fluid&&!d.cross||o.solid&&e_(t,a,l,c))return;for(let u of e.entities)if(u.kind==="mob"&&!u.dead&&o.solid&&i_(u,a,l,c))return;e.setBlock(a,l,c,r),o.fluid&&this.fluidInteract(a,l,c),this.sfx("place"),this.inv.removeFromSel(1),this.updateHeld(),o.gravity&&this.settle(a,l,c),N.OBSIDIAN}}placeFluid(t,e,i,n){this.world.setBlock(t,e,i,n),this.sfx("place"),this.fluidInteract(t,e,i)}fluidInteract(t,e,i){let n=this.world,r=n.getBlock(t,e,i),o=r===N.WATER?N.LAVA:N.WATER;if(r===N.WATER)for(let[a,l,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]])n.getBlock(t+a,e+l,i+c)===N.LAVA&&(n.setBlock(t+a,e+l,i+c,N.OBSIDIAN),this.sfx("fire"));else if(r===N.LAVA){for(let[a,l,c]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]])if(n.getBlock(t+a,e+l,i+c)===N.WATER){n.setBlock(t,e,i,N.OBSIDIAN),this.sfx("fire");break}}}tryLightPortal(t,e,i){let n=this.world,r=(o,a,l)=>n.getBlock(o,a,l)===0;for(let o of["x","z"]){let a=o==="x"?1:0,l=o==="x"?0:1,c=e,h=0;for(;r(t,c-1,i)&&h++<22;)c--;if(n.getBlock(t,c-1,i)!==N.OBSIDIAN)continue;let d=t,u=i;for(h=0;r(d-a,c,u-l)&&h++<22;)d-=a,u-=l;if(n.getBlock(d-a,c,u-l)!==N.OBSIDIAN)continue;let f=t,g=i;for(h=0;r(f+a,c,g+l)&&h++<22;)f+=a,g+=l;if(n.getBlock(f+a,c,g+l)!==N.OBSIDIAN)continue;let x=Math.abs(f-d)+Math.abs(g-u)+1;if(x<2||x>21)continue;let m=0,p=v=>{for(let M=0;M<x;M++)if(!r(d+a*M,v,u+l*M))return!1;return!0};for(;m<21&&p(c+m);)m++;if(m<3)continue;let _=!0;for(let v=0;v<x;v++)(n.getBlock(d+a*v,c+m,u+l*v)!==N.OBSIDIAN||n.getBlock(d+a*v,c-1,u+l*v)!==N.OBSIDIAN)&&(_=!1);for(let v=0;v<m;v++)(n.getBlock(d-a,c+v,u-l)!==N.OBSIDIAN||n.getBlock(f+a,c+v,g+l)!==N.OBSIDIAN)&&(_=!1);if(_){for(let v=0;v<x;v++)for(let M=0;M<m;M++)n.setBlock(d+a*v,c+M,u+l*v,o==="x"?N.PORTAL_X:N.PORTAL_Z);return this.log("Das Netherportal wurde entz\xFCndet!"),this.sfx("portal"),!0}}return!1}checkEndPortal(t,e,i){let n=this.world;for(let r=t-2;r<=t+2;r++)for(let o=i-2;o<=i+2;o++){let a=!0;for(let l=-1;l<=1&&a;l++)for(let[c,h]of[[r-2,o+l],[r+2,o+l],[r+l,o-2],[r+l,o+2]])n.getBlock(c,e,h)!==N.END_FRAME_EYE&&(a=!1);if(a){for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)n.setBlock(r+l,e,o+c,N.END_PORTAL);return this.log("Das Endportal ist offen!"),this.sfx("portal"),!0}}return!1}nearestStronghold(){let t=this.player,e=null,i=1e12;for(let n of this.worlds.overworld.gen.strongholds){let r=Math.hypot(n.x-t.x,n.z-t.z);r<i&&(i=r,e=n)}return e}updatePortalLogic(t){let e=this.player;if(e.dead)return;let i=this.world,n=h=>i.getBlock(Math.floor(e.x),Math.floor(e.y+h),Math.floor(e.z)),r=_t[n(.1)],o=_t[n(1)],a=!!(r.portal||o.portal);if(r.special==="endportal"||_t[n(-.2)].special==="endportal"||_t[n(.5)].special==="endportal"){this.dim==="overworld"?(this.enterDimension("end",34.5,49,.5),this.log("Du betrittst Das Ende...")):this.dim==="end"&&(this.enterDimension("overworld",this.spawn.x,0,this.spawn.z,!0),this.log("Du kehrst in die Oberwelt zur\xFCck. Gut gemacht!"));return}let c=document.getElementById("portalfx");a&&this.portalReady?(this.portalT+=t,c.style.opacity=Math.min(.85,this.portalT/3.5),this.portalT===t&&this.sfx("portal"),this.portalT>=3.5&&(this.portalT=0,c.style.opacity=0,this.useNetherPortal())):(a||(this.portalReady=!0),this.portalT=Math.max(0,this.portalT-t*2),c.style.opacity=Math.min(.85,this.portalT/3.5))}useNetherPortal(){let t=this.player,e=this.dim==="nether"?"overworld":"nether",i=Math.floor(e==="nether"?t.x/8:t.x*8),n=Math.floor(e==="nether"?t.z/8:t.z*8),r=this.worldFor(e),o=this.world;this.world=r;let a=e==="nether"?16:24;this.ensureAround(i,n,Math.ceil(a/16)+1);let l=this.findPortalNear(r,i,n,a);l||(l=this.buildPortal(r,i,n,e)),this.world=o,this.enterDimension(e,l.x,l.y,l.z),this.portalReady=!1}ensureAround(t,e,i){let n=Math.floor(t/16),r=Math.floor(e/16);for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++)this.genChunk(n+o,r+a)}findPortalNear(t,e,i,n){let r=null,o=1e9,a=1,l=t.dim==="nether"?62:94;for(let h=e-n;h<=e+n;h++)for(let d=i-n;d<=i+n;d++)for(let u=a;u<=l;u++)if(_t[t.getBlock(h,u,d)].portal){let g=(h-e)**2+(d-i)**2+u*.01;g<o&&(o=g,r={x:h,y:u,z:d})}if(!r)return null;let c=r.y;for(;_t[t.getBlock(r.x,c-1,r.z)].portal;)c--;return{x:r.x+.5,y:c,z:r.z+.5}}buildPortal(t,e,i,n){let r=e,o=i,a,l=(c,h,d)=>{for(let u=0;u<4;u++)for(let f=-1;f<=1;f++)for(let g=0;g<5;g++)if(t.isSolid(c+u,h+g,d+f)||_t[t.getBlock(c+u,h+g,d+f)].fluid)return!1;for(let u=0;u<4;u++)for(let f=-1;f<=1;f++)if(!t.isSolid(c+u,h-1,d+f)||_t[t.getBlock(c+u,h-1,d+f)].fluid)return!1;return!0};if(n==="nether"){let c=!1;for(let h=0;h<=24&&!c;h+=2)for(let d=0;d<8&&!c;d++){let u=Math.round(e+Math.cos(d*.785)*h),f=Math.round(i+Math.sin(d*.785)*h);for(let g=52;g>18;g--)if(l(u,g,f)){r=u,o=f,a=g,c=!0;break}}if(!c){a=34,r=e,o=i;for(let h=-1;h<5;h++)for(let d=-2;d<=2;d++){for(let u=0;u<7;u++)t.setBlock(r+h,a+u,o+d,0);t.setBlock(r+h,a-1,o+d,N.NETHERRACK)}}}else{let c=t.surfaceY(e,i);a=Math.max(c,32)+1,r=e,o=i;for(let h=-1;h<5;h++)for(let d=-2;d<=2;d++)for(let u=0;u<6;u++)t.setBlock(r+h,a+u,o+d,0)}for(let c=-1;c<=2;c++)for(let h=-1;h<=1;h++)t.setBlock(r+c,a-1,o+h,N.OBSIDIAN);for(let c=0;c<4;c++)t.setBlock(r-1,a+c,o,N.OBSIDIAN),t.setBlock(r+2,a+c,o,N.OBSIDIAN);for(let c=0;c<=1;c++){t.setBlock(r+c,a+3,o,N.OBSIDIAN);for(let h=0;h<3;h++)t.setBlock(r+c,a+h,o,N.PORTAL_X)}return{x:r+1,y:a,z:o+.5}}enterDimension(t,e,i,n,r){let o=this.player;this.scene.remove(this.world.group),this.world=this.worldFor(t),this.dim=t,this.scene.add(this.world.group),this.ensureAround(e,n,2);for(let a of this.world.chunks.values())a.dirty=!0,this.world.dirtyList.add(a);for(let a=-2;a<=2;a++)for(let l=-2;l<=2;l++){let c=this.world.getChunk(Math.floor(e/16)+a,Math.floor(n/16)+l);c&&!c.group&&this.meshNow(c)}o.x=e,o.z=n,o.vx=o.vy=o.vz=0,o.y=i>0&&!r?i:this.safeY(e,n),o.peakY=o.y,this.setupDim(),this.mineKey=null,this.showTitle(rf[t]),t==="end"&&!this.endInit&&(this.endInit=!0,setTimeout(()=>{if(this.dim!=="end")return;let a=new zr(0,78,0);this.world.entities.push(a),this.world.group.add(a.mesh),this.boss=a,document.getElementById("boss").style.display="block",this.log("Der Enderdrache erwacht! Zerst\xF6re die Kristalle auf den Obsidian-T\xFCrmen.")},800)),t==="end"&&this.boss&&!this.boss.dead?document.getElementById("boss").style.display="block":t!=="end"&&(document.getElementById("boss").style.display="none")}showTitle(t){let e=document.getElementById("title");e.textContent=t,e.style.opacity=1,clearTimeout(this._tt),this._tt=setTimeout(()=>e.style.opacity=0,2400)}setupDim(){let t=this.dim,e=Math.min(this.renderDist*16-8,220);this.U.uDay.value=1,t==="overworld"?(this.U.uAmb.value=.07,this.U.uNear.value=e*.55,this.U.uFar.value=e):t==="nether"?(this.U.uAmb.value=.62,this.U.uNear.value=8,this.U.uFar.value=Math.min(e,90),this.U.uFog.value.set(3147784),this.scene.background=new It(3147784),this.sunMesh.visible=this.moonMesh.visible=!1,this.stars.material.opacity=0):(this.U.uAmb.value=.5,this.U.uNear.value=e*.7,this.U.uFar.value=e*1.1,this.U.uFog.value.set(459790),this.scene.background=new It(459790),this.sunMesh.visible=this.moonMesh.visible=!1,this.stars.material.opacity=1),this.scene.fog=new or(this.U.uFog.value.getHex(),this.U.uNear.value,this.U.uFar.value),this.sky2=null}updateSkyState(){let e=this.time%1200/1200*Math.PI*2,i=Math.sin(e);this.dayFactor=this.dim==="overworld"?il((i+.18)/.5,0,1):1,this.sunAng=e}updateSky(t){if(this.dim!=="overworld"){this.dim==="end"&&this.stars.position.copy(this.camera.position);return}let e=this.dayFactor,i=Math.sin(this.sunAng);this.U.uDay.value=.26+.74*e;let n=new It(9355519),r=new It(461596),o=new It(15237178),a=r.clone().lerp(n,e),l=Math.max(0,1-Math.abs(i)*5);a.lerp(o,l*.5);let c=a;if(this.camInWater())c=new It(1323646).multiplyScalar(.35+.65*e),this.U.uNear.value=0,this.U.uFar.value=22;else{let g=Math.min(this.renderDist*16-8,220);this.U.uNear.value=g*.55,this.U.uFar.value=g}this.U.uFog.value.copy(c),this.scene.background=c.clone(),this.scene.fog.color.copy(c),this.scene.fog.near=this.U.uNear.value,this.scene.fog.far=this.U.uFar.value,this.amb.intensity=(.35+.6*e)*2.9,this.sun.intensity=(.15+.5*e)*3;let d=this.camera.position;this.sunMesh.visible=!0,this.moonMesh.visible=!0;let u=Math.cos(this.sunAng),f=Math.sin(this.sunAng);this.sunMesh.position.set(d.x+u*400,d.y+f*400,d.z+60),this.sunMesh.lookAt(d),this.moonMesh.position.set(d.x-u*400,d.y-f*400,d.z+60),this.moonMesh.lookAt(d),this.stars.position.copy(d),this.stars.material.opacity=il(1-e*1.6,0,1)}meshNow(t){if(!t)return;let e=this.world,i=Fd(e,t);t.group&&(this.disposeGroup(t.group),e.group.remove(t.group));let n=new Ht;n.position.set(t.cx*16,0,t.cz*16),i.forEach((r,o)=>{if(!r.n)return;let a=new ei;a.setAttribute("position",new Ye(r.pos,3)),a.setAttribute("uv",new Ye(r.uv,2)),a.setAttribute("aLight",new Ye(r.light,3)),a.setIndex(new Ye(r.idx,1)),a.computeBoundingSphere();let l=new ie(a,this.mats[o]);o===2&&(l.renderOrder=2),n.add(l)}),t.group=n,t.dirty=!1,e.dirtyList.delete(t),e.group.add(n)}disposeGroup(t){t.children.forEach(e=>e.geometry&&e.geometry.dispose())}updateChunks(t){let e=this.world,i=this.player,n=Math.floor(i.x/16),r=Math.floor(i.z/16),o=this.renderDist,a=performance.now();for(let[l,c,h]of this.offsets)if(h>(o+1)*(o+1)||!e.chunks.has(is.key(n+l,r+c))&&(this.genChunk(n+l,r+c),performance.now()-a>t*.5))break;if(e.dirtyList.size){let l=[];for(let h of e.dirtyList){let d=(h.cx-n)**2+(h.cz-r)**2;d<=o*o+1&&l.push([d,h])}l.sort((h,d)=>h[0]-d[0]);let c=0;for(let[h,d]of l){let u=!0;for(let f=-1;f<=1&&u;f++)for(let g=-1;g<=1;g++)if(!e.chunks.has(is.key(d.cx+f,d.cz+g))){u=!1;break}if(u&&(this.meshNow(d),c++,performance.now()-a>t||c>=4))break}}if(this._unl=(this._unl||0)+1,this._unl%40===0)for(let l of e.chunks.values())l.group&&(l.cx-n)**2+(l.cz-r)**2>(o+2)*(o+2)&&(this.disposeGroup(l.group),e.group.remove(l.group),l.group=null,l.dirty=!0)}addMob(t,e,i,n,r){let o;if(t==="dragon")o=new zr(e,i,n);else if(t==="crystal")o=new kr(e,i,n);else{if(!Gr[t])return null;o=new fl(t,e,i,n,r)}return this.world.entities.push(o),this.world.group.add(o.mesh),o}addProj(t,e,i,n,r,o,a,l){let c=new pl(t,e,i,n,r,o,a,l);return c.mesh.position.set(e,i,n),this.world.entities.push(c),this.world.group.add(c.mesh),c}updateEntities(t){let e=this.world,i=this.player,n=e.entities;for(let r=n.length-1;r>=0;r--){let o=n[r],a=Math.hypot(o.x-i.x,o.z-i.z);if(a>130&&!o.noDespawn){this.removeEnt(r);continue}if(a>90&&o.kind==="mob"&&!o.noDespawn&&o.cfg&&o.cfg.hostile){this.removeEnt(r);continue}if(a>110&&o.noDespawn)continue;let l=!1;try{l=o.update(t,this)}catch(c){console.error(c),l=!0}(l||o.dead&&o.kind!=="mob")&&this.removeEnt(r)}this.rig&&(this.rig.root.visible=this.camMode>0&&!i.dead,this.rig.root.position.set(i.x,i.y,i.z),this.rig.root.rotation.y=i.yaw+Math.PI,this.rig.update(t,Math.hypot(i.vx,i.vz)*(i.onGround?1:0),this.swinging?this.swing:0,{}),this.rig.head.rotation.x=-i.pitch)}removeEnt(t){let e=this.world.entities[t];e.mesh&&(this.world.group.remove(e.mesh),e.mesh.traverse(i=>{i.geometry&&!i.isSprite&&i.geometry.dispose()})),this.world.entities.splice(t,1)}updateFurnaces(t){for(let e of this.world.tiles.values()){if(e.type!=="furnace")continue;let i=e.in?Nn[e.in.id]:0,n=i&&(!e.out||e.out.id===i&&e.out.n<t_(i));e.burn>0&&(e.burn-=t),n&&e.burn<=0&&e.fuel&&Dn[e.fuel.id]&&(e.burn=e.burnMax=Dn[e.fuel.id],e.fuel.n--,e.fuel.n<=0&&(e.fuel=null)),n&&e.burn>0?(e.cook+=t,e.cook>=10&&(e.cook=0,e.out?e.out.n++:e.out={id:i,n:1},e.in.n--,e.in.n<=0&&(e.in=null))):e.cook>0&&(e.cook=Math.max(0,e.cook-t*2)),e.burn<0&&(e.burn=0)}}updateSpawning(t){if(this.spawnT=(this.spawnT||0)-t,this.spawnT>0)return;this.spawnT=1.2;let e=this.world,i=this.player;if(i.dead)return;let n=e.entities.filter(o=>o.kind==="mob"&&!o.dead),r=n.filter(o=>o.cfg&&o.cfg.hostile).length;if(this.dim==="overworld"){if(r>=18)return;for(let o=0;o<3;o++){let a=Math.random()*6.283,l=Ze(18,40),c=Math.floor(i.x+Math.cos(a)*l),h=Math.floor(i.z+Math.sin(a)*l);if(!e.hasChunkAt(c,h))continue;let d=-1;for(let m=Math.floor(i.y)+12;m>Math.floor(i.y)-20;m--)if(e.isSolid(c,m-1,h)&&!e.isSolid(c,m,h)&&!e.isSolid(c,m+1,h)&&!_t[e.getBlock(c,m-1,h)].fluid&&!_t[e.getBlock(c,m,h)].fluid){d=m;break}if(d<0)continue;let u=e.skyLit(c,d,h);if(u&&this.isDay())continue;let f=e.getBlock(c,d-1,h),g=Math.random(),x=g<.38?"zombie":g<.62?"skeleton":g<.82?"creeper":g<.96?"spider":"enderman";x==="zombie"&&Math.random()<.05&&(x="baby_zombie"),x==="enderman"&&u===!1&&(x="zombie"),this.addMob(x,c+.5,d,h+.5);break}if(this.isDay()&&n.length-r<12&&Math.random()<.25){let o=Math.random()*6.283,a=Ze(24,44),l=Math.floor(i.x+Math.cos(o)*a),c=Math.floor(i.z+Math.sin(o)*a);if(e.hasChunkAt(l,c)){let h=e.topY(l,c);h>0&&e.getBlock(l,h,c)===N.GRASS&&this.addMob(["pig","cow","sheep","chicken"][Math.random()*4|0],l+.5,h+1,c+.5)}}}else if(this.dim==="end"){if(n.filter(a=>a.type==="enderman").length<5){let a=Math.random()*6.283,l=Ze(15,30),c=Math.floor(i.x+Math.cos(a)*l),h=Math.floor(i.z+Math.sin(a)*l);if(Math.hypot(c,h)<40&&e.hasChunkAt(c,h)){let d=e.topY(c,h);d>0&&e.getBlock(c,d,h)===N.END_STONE&&this.addMob("enderman",c+.5,d+1,h+.5)}}}else if(this.dim==="nether"&&r<14&&Math.random()<.3){let o=Math.random()*6.283,a=Ze(20,40),l=Math.floor(i.x+Math.cos(o)*a),c=Math.floor(i.z+Math.sin(o)*a);if(e.hasChunkAt(l,c)){for(let h=56;h>16;h--)if(e.getBlock(l,h-1,c)===N.NETHERRACK&&!e.isSolid(l,h,c)&&!e.isSolid(l,h+1,c)){this.addMob(Math.random()<.6?"magma_cube":"ghast",l+.5,Math.random()<.5?h:h+6,c+.5);break}}}}onDragonDead(t){this.endDefeated=!0,this.boss=null,document.getElementById("boss").style.display="none";let e=this.world,i=49;for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)e.setBlock(n,i,r,N.END_PORTAL);for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)Math.max(Math.abs(n),Math.abs(r))===2&&e.setBlock(n,i,r,N.BEDROCK);for(let n=0;n<4;n++)e.setBlock(0,i+n,0,N.BEDROCK);e.setBlock(0,i+4,0,N.TORCH),e.setBlock(1,i+3,0,N.TORCH),e.setBlock(-1,i+3,0,N.TORCH);for(let n=0;n<20;n++)this.puff(Ze(-4,4),50+Ze(0,6),Ze(-4,4));this.sfx("explode"),this.showTitle("Enderdrache besiegt!"),this.log("Du hast den Enderdrachen besiegt! Betritt das Portal in der Mitte, um zur\xFCckzukehren."),this.spawnItem(N.DIAMOND,3,.5,i+2,2.5)}updateBossBar(){let t=this.boss;!t||t.dead||(document.getElementById("bossfill").style.width=Math.max(0,t.hp)/t.maxHp*100+"%")}explode(t,e,i,n,r={}){let o=this.player,a=Math.hypot(o.x-t,o.y+1-e,o.z-i);if(a<n*2&&r.dmg){let l=1-a/(n*2);this.hurtPlayer(Math.max(1,Math.round(r.dmg*l)),t,i,1.5,"Explosion",!0)}this.sfx("explode");for(let l=0;l<(r.big?12:22);l++)this.puff(t+Ze(-n,n)*.6,e+Ze(-n,n)*.6,i+Ze(-n,n)*.6);if(r.blocks){let l=this.world,c=Math.ceil(n);for(let h=-c;h<=c;h++)for(let d=-c;d<=c;d++)for(let u=-c;u<=c;u++){if(h*h+d*d+u*u>n*n)continue;let f=Math.floor(t)+h,g=Math.floor(e)+d,x=Math.floor(i)+u,m=l.getBlock(f,g,x);if(!m)continue;let p=_t[m];p.hardness<0||m===N.OBSIDIAN||p.fluid||Math.random()<.9&&this.breakBlock(f,g,x,Math.random()<.3,!1)}}}pearlLand(t,e,i,n){let r=this.player,o=this.world,a=t-n.vx*.02,l=e-n.vy*.02,c=i-n.vz*.02;for(let h=0;h<6&&kd(o,a,l,c,.6,1.8);h++)l+=.5;r.x=a,r.y=l,r.z=c,r.vx=r.vy=r.vz=0,r.peakY=r.y,this.sfx("tp"),this.hurtPlayer(5,null,null,0,"Enderperlen-Teleport",!0)}puff(t,e,i){let n="puff",r=this.pMats.get(n);r||(r=new Ee({color:13421772,transparent:!0,opacity:.8}),this.pMats.set(n,r));let o=new ie(this.pGeo,r);o.position.set(t,e,i),o.scale.setScalar(Ze(2,5)),this.world.group.add(o),this.particles.push({m:o,vx:Ze(-1,1),vy:Ze(.5,2),vz:Ze(-1,1),life:.8,grav:-1,g:this.world.group})}blockColor(t){if(this._bc=this._bc||{},this._bc[t])return this._bc[t];let e=_t[t],i=8947848;try{let r=es(e.tiles[2]).getContext("2d").getImageData(0,0,16,16).data,o=0,a=0,l=0,c=0;for(let h=0;h<r.length;h+=4)r[h+3]>100&&(o+=r[h],a+=r[h+1],l+=r[h+2],c++);c&&(i=o/c<<16|a/c<<8|l/c)}catch{}return this._bc[t]=i,i}burst(t,e,i,n){let r=this.blockColor(n),o=this.pMats.get(r);o||(o=new Ee({color:r}),this.pMats.set(r,o));for(let a=0;a<8;a++){let l=new ie(this.pGeo,o);l.position.set(t+Math.random(),e+Math.random(),i+Math.random()),this.world.group.add(l),this.particles.push({m:l,vx:Ze(-2,2),vy:Ze(1,4),vz:Ze(-2,2),life:.7,grav:14,g:this.world.group})}}updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){let i=this.particles[e];i.life-=t,i.vy-=i.grav*t,i.m.position.x+=i.vx*t,i.m.position.y+=i.vy*t,i.m.position.z+=i.vz*t,i.life<=0&&(i.g.remove(i.m),this.particles.splice(e,1))}}locate(){let t=this.player,e=this.world.gen.locate(t.x,t.z),i={village:"Dorf",desert:"W\xFCstentempel",jungle:"Dschungeltempel",ship:"Schiffswrack",stronghold:"Stronghold",fortress:"Netherfestung"},n=Object.keys(e);if(!n.length){this.log("Hier gibt es keine bekannten Strukturen.");return}for(let r of n)this.log(`${i[r]||r}: x=${Math.round(e[r].x)}, z=${Math.round(e[r].z)} (${Math.round(e[r].d)} Bl\xF6cke entfernt)`)}updateDebug(){let t=this.player,e=this.dim==="overworld"?this.world.gen.biomeAt(Math.floor(t.x),Math.floor(t.z)):this.dim;document.getElementById("debug").textContent=`Minecraft-Klon | ${this.fps} FPS
XYZ: ${t.x.toFixed(1)} / ${t.y.toFixed(1)} / ${t.z.toFixed(1)}
Welt: ${rf[this.dim]} | Biom: ${e}
Chunk: ${Math.floor(t.x/16)}, ${Math.floor(t.z/16)} | geladen: ${this.world.chunks.size}
Entit\xE4ten: ${this.world.entities.length} | Tageszeit: ${Math.floor(this.time%1200/1200*24)}h
[L] Strukturen finden`}render(t){let e=this.player,i=this.camera,n=e.eye(),r=n[0],o=n[1],a=n[2],l=0;if(i.rotation.set(e.pitch,e.yaw,e.dead&&this.camTilt||0),i.fov=72+(e.sprinting?8:0)*1,i.updateProjectionMatrix(),this.camMode>0){let h=this.lookDir(),d=this.camMode===1?-1:1,u=4,f=hl(this.world,n[0],n[1],n[2],d*h[0],d*h[1],d*h[2],u,!1);f&&(u=Math.max(.5,f.t-.3)),r=n[0]+d*h[0]*u,o=n[1]+d*h[1]*u,a=n[2]+d*h[2]*u,this.camMode===2&&i.rotation.set(-e.pitch,e.yaw+Math.PI,0)}i.position.set(r,o,a),this.updateSky(t),this.U.uTime.value=this.time,this.dim==="nether"?(this.amb.intensity=2.8,this.sun.intensity=1,this.amb.color.set(16755336)):this.dim==="end"?(this.amb.intensity=2.3,this.sun.intensity=1,this.amb.color.set(13417471)):this.amb.color.set(16777215),this.updateHeld();let c=this.camMode===0&&!e.dead;if(this.hand.visible=c,c){let h=this.swing>0?Math.sin(this.swing*Math.PI):0,d=Math.sin(this.time*9)*.012*Math.min(1,Math.hypot(e.vx,e.vz)/4)*(e.onGround?1:0);this.hand.position.set(.38-h*.1,-.34-h*.1+d+(e.eatT>0?Math.sin(this.time*20)*.02:0),-.6-h*.1),this.hand.rotation.set(-.1-h*1.1,.25-h*.3,-h*.2)}this.renderer.clear(),this.renderer.render(this.scene,i),c&&(this.renderer.clearDepth(),this.renderer.render(this.handScene,this.handCam))}};function e_(s,t,e,i){let n=s.w/2;return s.x+n>t&&s.x-n<t+1&&s.z+n>i&&s.z-n<i+1&&s.y+s.h>e&&s.y<e+1}function i_(s,t,e,i){let n=s.w/2;return s.x+n>t&&s.x-n<t+1&&s.z+n>i&&s.z-n<i+1&&s.y+s.h>e&&s.y<e+1}var Fe=s=>document.getElementById(s),Gi=new xl(Fe("c"));window.game=Gi;window.REG=Zc;var Ai=Object.assign({},Bn.Steve),n_="Steve";function of(){let s=Fe("skinprev");s.innerHTML="";let t=6,e=(l,c,h)=>{let d=document.createElement("i");return d.style.width=l*t+"px",d.style.height=c*t+"px",d.style.background=h,d},i=(...l)=>{let c=document.createElement("div");l.forEach(h=>c.appendChild(h)),s.appendChild(c)},n=e(8,8,Ai.skin);n.style.borderTop=`${t*3}px solid ${Ai.hair}`,n.style.height=8*t-t*3+"px";let r=document.createElement("div");r.style.cssText=`display:flex;gap:${t*2}px;position:absolute;left:${t*1.5}px;top:${t*4}px`;let o=()=>{let l=document.createElement("i");return l.style.cssText=`width:${t}px;height:${t}px;background:${Ai.eyes||"#223"};`,l};r.append(o(),o());let a=document.createElement("div");a.style.position="relative",a.appendChild(n),a.appendChild(r),i(a),i(e(4,12,Ai.skin),e(8,12,Ai.shirt),e(4,12,Ai.skin)),i(e(4,12,Ai.pants),e(4,12,Ai.pants))}function af(s){n_=s,Ai=Object.assign({},Bn[s]),document.querySelectorAll(".skinbtn").forEach(t=>t.classList.toggle("on",t.textContent===s)),["skin","hair","shirt","pants"].forEach(t=>{Fe("c_"+t).value=Ai[t]}),of()}Object.keys(Bn).forEach(s=>{let t=document.createElement("button");t.className="skinbtn",t.textContent=s,t.onclick=()=>af(s),Fe("skins").appendChild(t)});["skin","hair","shirt","pants"].forEach(s=>{Fe("c_"+s).oninput=t=>{Ai[s]=t.target.value,of()}});af("Steve");async function s_(){Gi.initAudio(),Fe("menu").style.display="none",Fe("loading").style.display="flex",await Gi.start({seed:Fe("seed").value.trim(),dist:parseInt(Fe("dist").value,10),skin:Ai},(s,t)=>{Fe("loadtext").textContent=s,Fe("loadfill").style.width=Math.round(t*100)+"%"}),Fe("loading").style.display="none",Fe("hud").style.display="block",Gi.lock(),setTimeout(()=>{document.pointerLockElement!==Fe("c")&&!Gi.player.dead&&!Gi.ui.screen&&Gi.setPaused(!0)},500)}Fe("create").onclick=s_;Fe("resume").onclick=()=>{Gi.initAudio(),Gi.setPaused(!1)};Fe("respawn").onclick=()=>Gi.respawn();Fe("tomenu").onclick=Fe("tomenu2").onclick=()=>location.reload();document.addEventListener("keydown",s=>{s.code==="Escape"&&Gi.paused});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
