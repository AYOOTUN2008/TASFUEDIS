var Dc=0,pl=1,Uc=2;var ml=1,Nc=2,cn=3,yn=0,Mt=1,hn=2,Qt=0,ii=1,ui=2,gl=3,_l=4,Fc=5,Vn=100,Oc=101,Bc=102,zc=103,Vc=104,kc=200,Hc=201,Gc=202,Wc=203,Nr=204,Fr=205,Xc=206,Yc=207,Zc=208,Jc=209,$c=210,Kc=211,Qc=212,jc=213,eh=214,da=0,fa=1,pa=2,si=3,ma=4,ga=5,_a=6,xa=7,va=0,th=1,nh=2,An=0,ya=1,qa=2,Ma=3,$i=4,Sa=5,ba=6,Ta=7;var xl=300,di=301,fi=302,Ea=303,wa=304,js=306,Or=1e3,Bn=1001,Br=1002,Pt=1003,ih=1004;var er=1005;var Kt=1006,Aa=1007;var Wn=1008;var jt=1009,vl=1010,yl=1011,Ki=1012,Ca=1013,Xn=1014,en=1015,Wt=1016,Ra=1017,Ia=1018,Qi=1020,ql=35902,Ml=35899,Sl=1021,bl=1022,Xt=1023,Oi=1026,ji=1027,Pa=1028,La=1029,Tl=1030,Da=1031;var Ua=1033,tr=33776,nr=33777,ir=33778,sr=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,Va=37492,ka=37496,Ha=37808,Ga=37809,Wa=37810,Xa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,Qa=37817,ja=37818,eo=37819,to=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,lo=36285,co=36286;var qs=2300,zr=2301,Ur=2302,el=2400,tl=2401,nl=2402;var sh=3200,rh=3201;var ho=0,ah=1,Cn="",Tt="srgb",ri="srgb-linear",Ms="linear",Qe="srgb";var ti=7680;var il=519,oh=512,lh=513,ch=514,El=515,hh=516,uh=517,dh=518,fh=519,sl=35044;var wl="300 es",$t=2e3,Ss=2001;var qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rc=1234567,_s=Math.PI/180,Bi=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Al(i,e){return(i%e+e)%e}function su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ru(i,e,t){return i!==e?(t-i)/(e-i):0}function xs(i,e,t){return(1-t)*i+t*e}function au(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))}function ou(i,e=1){return e-Math.abs(Al(i,e*2)-e)}function lu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uu(i,e){return i+Math.random()*(e-i)}function du(i){return i*(.5-Math.random())}function fu(i){i!==void 0&&(rc=i);let e=rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pu(i){return i*_s}function mu(i){return i*Bi}function gu(i){return(i&i-1)===0&&i!==0}function _u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yn={DEG2RAD:_s,RAD2DEG:Bi,generateUUID:pi,clamp:Xe,euclideanModulo:Al,mapLinear:su,inverseLerp:ru,lerp:xs,damp:au,pingpong:ou,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:uu,randFloatSpread:du,seededRandom:fu,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:xu,setQuaternionFromProperEuler:vu,normalize:Ct,denormalize:Ui},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*x,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let A=Math.sqrt(b),w=Math.atan2(A,f*E);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*E;if(c=c*m+d*y,l=l*m+p*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new I,ac=new Mn,ze=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],E=s[1],b=s[4],y=s[7],A=s[2],w=s[5],C=s[8];return r[0]=a*x+o*E+c*A,r[3]=a*m+o*b+c*w,r[6]=a*f+o*y+c*C,r[1]=l*x+h*E+u*A,r[4]=l*m+h*b+u*w,r[7]=l*f+h*y+u*C,r[2]=d*x+p*E+g*A,r[5]=d*m+p*b+g*w,r[8]=d*f+p*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Co=new ze;function Cl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){let i=zi("canvas");return i.style.display="block",i}var oc={};function Vi(i){i in oc||(oc[i]=!0,console.warn(i))}function mh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){let i={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ri]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Ze=yu();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qi,Vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=zi("canvas")),qi.width=e.width,qi.height=e.height;let s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qu=0,ki=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mu=0,Io=new I,Rt=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=Kt,a=Wn,o=Xt,c=jt,l=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=pi(),this.name="",this.source=new ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=xl;Rt.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(p+1)/2,A=(f+1)/2,w=(h+d)/4,C=(u+x)/4,P=(g+m)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=C/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kr=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Rt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ki(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends kr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),dr.subVectors(this.max,cs),Mi.subVectors(e.a,cs),Si.subVectors(e.b,cs),bi.subVectors(e.c,cs),Pn.subVectors(Si,Mi),Ln.subVectors(bi,Si),Kn.subVectors(Mi,bi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Kn.y,Kn.x,0];return!Po(t,Mi,Si,bi,dr)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Mi,Si,bi,dr))?!1:(fr.crossVectors(Pn,Ln),t=[fr.x,fr.y,fr.z],Po(t,Mi,Si,bi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fn=[new I,new I,new I,new I,new I,new I,new I,new I],Yt=new I,ur=new rn,Mi=new I,Si=new I,bi=new I,Pn=new I,Ln=new I,Kn=new I,cs=new I,dr=new I,fr=new I,Qn=new I;function Po(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);let o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Su=new rn,hs=new I,Lo=new I,Sn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Su.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Lo)),this.expandByPoint(hs.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pn=new I,Do=new I,pr=new I,Dn=new I,Uo=new I,mr=new I,No=new I,Ts=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=Dn.dot(this.direction),c=-Dn.dot(pr),l=Dn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Do).addScaledVector(pr,d),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);let n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),mr.subVectors(n,e),No.crossVectors(Uo,mr);let a=this.direction.dot(No),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);let c=o*this.direction.dot(mr.crossVectors(Dn,mr));if(c<0)return null;let l=o*this.direction.dot(Uo.cross(Dn));if(l<0||c+l>a)return null;let h=-o*Dn.dot(No);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bu,e,Tu)}lookAt(e,t,n){let s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Un.crossVectors(n,Nt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Un.crossVectors(n,Nt)),Un.normalize(),gr.crossVectors(Nt,Un),s[0]=Un.x,s[4]=gr.x,s[8]=Nt.x,s[1]=Un.y,s[5]=gr.y,s[9]=Nt.y,s[2]=Un.z,s[6]=gr.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],E=n[3],b=n[7],y=n[11],A=n[15],w=s[0],C=s[4],P=s[8],M=s[12],q=s[1],R=s[5],O=s[9],z=s[13],W=s[2],X=s[6],G=s[10],ne=s[14],k=s[3],ue=s[7],me=s[11],ve=s[15];return r[0]=a*w+o*q+c*W+l*k,r[4]=a*C+o*R+c*X+l*ue,r[8]=a*P+o*O+c*G+l*me,r[12]=a*M+o*z+c*ne+l*ve,r[1]=h*w+u*q+d*W+p*k,r[5]=h*C+u*R+d*X+p*ue,r[9]=h*P+u*O+d*G+p*me,r[13]=h*M+u*z+d*ne+p*ve,r[2]=g*w+x*q+m*W+f*k,r[6]=g*C+x*R+m*X+f*ue,r[10]=g*P+x*O+m*G+f*me,r[14]=g*M+x*z+m*ne+f*ve,r[3]=E*w+b*q+y*W+A*k,r[7]=E*C+b*R+y*X+A*ue,r[11]=E*P+b*O+y*G+A*me,r[15]=E*M+b*z+y*ne+A*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+x*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],E=u*m*l-x*d*l+x*c*p-o*m*p-u*c*f+o*d*f,b=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,y=h*x*l-g*u*l+g*o*p-a*x*p-h*o*f+a*u*f,A=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,w=t*E+n*b+s*y+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=E*C,e[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*C,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*f+n*c*f)*C,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=b*C,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*f-t*c*f)*C,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=y*C,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*f-t*u*f)*C,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*f+t*o*f)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=A*C,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,E=c*l,b=c*h,y=c*u,A=n.x,w=n.y,C=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*C,s[9]=(m-E)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);let l=1/r,h=1/a,u=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$t,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===$t)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$t,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===$t)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ti=new I,Zt=new st,bu=new I(0,0,0),Tu=new I(1,1,1),Un=new I,gr=new I,Nt=new I,hc=new st,uc=new Mn,Gt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eu=0,dc=new I,Ei=new Mn,mn=new st,_r=new I,us=new I,wu=new I,Au=new Mn,fc=new I(1,0,0),pc=new I(0,1,0),mc=new I(0,0,1),gc={type:"added"},Cu={type:"removed"},wi={type:"childadded",child:null},Fo={type:"childremoved",child:null},mt=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Gt,n=new Mn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(us,_r,this.up):mn.lookAt(_r,us,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(mn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new I,gn=new I,Oo=new I,_n=new I,Ai=new I,Ci=new I,_c=new I,Bo=new I,zo=new I,Vo=new I,ko=new et,Ho=new et,Go=new et,On=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),gn.subVectors(n,t),Oo.subVectors(e,t);let a=Jt.dot(Jt),o=Jt.dot(gn),c=Jt.dot(Oo),l=gn.dot(gn),h=gn.dot(Oo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ko.setScalar(0),Ho.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Go.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),gn.subVectors(e,t),Jt.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Jt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ai.subVectors(s,n),Ci.subVectors(r,n),Bo.subVectors(e,n);let c=Ai.dot(Bo),l=Ci.dot(Bo);if(c<=0&&l<=0)return t.copy(n);zo.subVectors(e,s);let h=Ai.dot(zo),u=Ci.dot(zo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ai,a);Vo.subVectors(e,r);let p=Ai.dot(Vo),g=Ci.dot(Vo);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ci,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return _c.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(_c,o);let f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Al(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ze.workingToColorSpace(bt.copy(this),e),Math.round(Xe(bt.r*255,0,255))*65536+Math.round(Xe(bt.g*255,0,255))*256+Math.round(Xe(bt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(bt.copy(this),t);let n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Tt){Ze.workingToColorSpace(bt.copy(this),e);let t=bt.r,n=bt.g,s=bt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(xr);let n=xs(Nn.h,xr.h,t),s=xs(Nn.s,xr.s,t),r=xs(Nn.l,xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new Pe;Pe.NAMES=gh;var Ru=0,an=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ii,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new I,vr=new se,Iu=0,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}};var ws=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pu=0,Ht=new st,Xo=new mt,Ri=new I,Ft=new rn,ds=new rn,xt=new I,qt=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cl(e)?As:ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ft.min,ds.min),Ft.expandByPoint(xt),xt.addVectors(Ft.max,ds.max),Ft.expandByPoint(xt)):(Ft.expandByPoint(ds.min),Ft.expandByPoint(ds.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xt.fromBufferAttribute(o,l),c&&(Ri.fromBufferAttribute(e,l),xt.add(Ri)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new I,c[P]=new I;let l=new I,h=new I,u=new I,d=new se,p=new se,g=new se,x=new I,m=new I;function f(P,M,q){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,q),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,q),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(x),o[M].add(x),o[q].add(x),c[P].add(m),c[M].add(m),c[q].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,M=E.length;P<M;++P){let q=E[P],R=q.start,O=q.count;for(let z=R,W=R+O;z<W;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new I,y=new I,A=new I,w=new I;function C(P){A.fromBufferAttribute(s,P),w.copy(A);let M=o[P];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);let R=y.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,M=E.length;P<M;++P){let q=E[P],R=q.start,O=q.count;for(let z=R,W=R+O;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xc=new st,jn=new Ts,yr=new Sn,vc=new I,qr=new I,Mr=new I,Sr=new I,Yo=new I,br=new I,yc=new I,Tr=new I,Je=class extends mt{constructor(e=new qt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Yo.fromBufferAttribute(u,e),a?br.addScaledVector(Yo,h):br.addScaledVector(Yo.sub(t),h))}t.add(br)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(yr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(yr,vc)===null||jn.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),jn.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){let w=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);s=Er(this,f,e,n,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let E=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Er(this,a,e,n,l,h,u,E,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,A=b;y<A;y+=3){let w=y,C=y+1,P=y+2;s=Er(this,f,e,n,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let E=m,b=m+1,y=m+2;s=Er(this,a,e,n,l,h,u,E,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Lu(i,e,t,n,s,r,a,o){let c;if(e.side===Mt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===yn,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Tr);return l<t.near||l>t.far?null:{distance:l,point:Tr.clone(),object:i}}function Er(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qr),i.getVertexPosition(c,Mr),i.getVertexPosition(l,Sr);let h=Lu(i,e,t,n,qr,Mr,Sr,yc);if(h){let u=new I;On.getBarycoord(yc,qr,Mr,Sr,u),s&&(h.uv=On.getInterpolatedAttribute(s,o,c,l,u,new se)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,c,l,u,new se)),a&&(h.normal=On.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};On.getNormal(qr,Mr,Sr,d.normal),h.face=d,h.barycoord=u}return h}var ln=class i extends qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,m,f,E,b,y,A,w,C,P,M){let q=y/C,R=A/P,O=y/2,z=A/2,W=w/2,X=C+1,G=P+1,ne=0,k=0,ue=new I;for(let me=0;me<G;me++){let ve=me*R-z;for(let Ne=0;Ne<X;Ne++){let We=Ne*q-O;ue[x]=We*E,ue[m]=ve*b,ue[f]=W,l.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[f]=w>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Ne/C),u.push(1-me/P),ne+=1}}for(let me=0;me<P;me++)for(let ve=0;ve<C;ve++){let Ne=d+ve+X*me,We=d+ve+X*(me+1),$e=d+(ve+1)+X*(me+1),ke=d+(ve+1)+X*me;c.push(Ne,We,ke),c.push(We,$e,ke),k+=6}o.addGroup(p,k,M),p+=k,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Du(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Rn={clone:mi,merge:wt},Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cs=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new I,qc=new se,Mc=new se,vt=class extends Cs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Mc),t.subVectors(Mc,qc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ii=-90,Pi=1,Gr=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(Ii,Pi,e,t);s.layers=this.layers,this.add(s);let r=new vt(Ii,Pi,e,t);r.layers=this.layers,this.add(r);let a=new vt(Ii,Pi,e,t);a.layers=this.layers,this.add(a);let o=new vt(Ii,Pi,e,t);o.layers=this.layers,this.add(o);let c=new vt(Ii,Pi,e,t);c.layers=this.layers,this.add(c);let l=new vt(Ii,Pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rs=class extends Rt{constructor(e=[],t=di,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wr=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:Qt});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Kt),new Gr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},sn=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fu={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ai=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xr=class extends Rt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Pt,h=Pt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Li=new st,Sc=new st,wr=[],bc=new rn,Ou=new st,fs=new Je,ps=new Sn,oi=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ou)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),bc.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(bc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),ps.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),Sc.multiplyMatrices(n,Li),fs.matrixWorld=Sc,fs.raycast(e,wr);for(let a=0,o=wr.length;a<o;a++){let c=wr[a];c.instanceId=r,c.object=this,t.push(c)}wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(s*this.count),s,this.count,Pa,en));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zo=new I,Bu=new I,zu=new ze,nn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zo.subVectors(n,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zu.getNormalMatrix(e),s=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new Sn,Vu=new se(.5,.5),Ar=new I,Gi=class{constructor(e=new nn,t=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],E=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,p-h,f-g,A-E).normalize(),s[1].setComponents(l+a,p+h,f+g,A+E).normalize(),s[2].setComponents(l+o,p+u,f+x,A+b).normalize(),s[3].setComponents(l-o,p-u,f-x,A-b).normalize(),n)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,p-d,f-m,A-y).normalize();else if(s[4].setComponents(l-c,p-d,f-m,A-y).normalize(),t===$t)s[5].setComponents(l+c,p+d,f+m,A+y).normalize();else if(t===Ss)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);let t=Vu.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yr=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tc=new st,rl=new Ts,Cr=new Sn,Rr=new I,Ps=class extends mt{constructor(e=new qt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Tc.copy(s).invert(),rl.copy(e.ray).applyMatrix4(Tc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let m=l.getX(g);Rr.fromBufferAttribute(u,m),Ec(Rr,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Rr.fromBufferAttribute(u,g),Ec(Rr,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ec(i,e,t,n,s,r,a){let o=rl.distanceSqToPoint(i);if(o<t){let c=new I;rl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ls=class extends Rt{constructor(e,t,n=Xn,s,r,a,o=Pt,c=Pt,l,h=Oi,u=1){if(h!==Oi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ki(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ds=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Us=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,h=new se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wi=class i extends qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(p,2));function E(){let y=new I,A=new I,w=0,C=(t-e)/n;for(let P=0;P<=r;P++){let M=[],q=P/r,R=q*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,W=z*c+o,X=Math.sin(W),G=Math.cos(W);A.x=R*X,A.y=-q*n+m,A.z=R*G,u.push(A.x,A.y,A.z),y.set(X,C,G).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-q),M.push(g++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let q=x[M][P],R=x[M+1][P],O=x[M+1][P+1],z=x[M][P+1];(e>0||M!==0)&&(h.push(q,R,z),w+=3),(t>0||M!==r-1)&&(h.push(R,O,z),w+=3)}l.addGroup(f,w,0),f+=w}function b(y){let A=g,w=new se,C=new I,P=0,M=y===!0?e:t,q=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*q,0),d.push(0,q,0),p.push(.5,.5),g++;let R=g;for(let O=0;O<=s;O++){let W=O/s*c+o,X=Math.cos(W),G=Math.sin(W);C.x=M*G,C.y=m*q,C.z=M*X,u.push(C.x,C.y,C.z),d.push(0,q,0),w.x=X*.5+.5,w.y=G*.5*q+.5,p.push(w.x,w.y),g++}for(let O=0;O<s;O++){let z=A+O,W=R+O;y===!0?h.push(W,W+1,z):h.push(W+1,W,z),P+=3}l.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new se:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new st;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Xe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xi=class extends Ot{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zr=class extends Xi{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Il(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ir=new I,Jo=new Il,$o=new Il,Ko=new Il,Jr=class extends Ot{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),l=Ir);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Jo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),$o.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Ko.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),$o.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ko.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Jo.calc(c),$o.calc(c),Ko.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ku(i,e){let t=1-i;return t*t*e}function Hu(i,e){return 2*(1-i)*i*e}function Gu(i,e){return i*i*e}function vs(i,e,t,n){return ku(i,e)+Hu(i,t)+Gu(i,n)}function Wu(i,e){let t=1-i;return t*t*t*e}function Xu(i,e){let t=1-i;return 3*t*t*i*e}function Yu(i,e){return 3*(1-i)*i*i*e}function Zu(i,e){return i*i*i*e}function ys(i,e,t,n,s){return Wu(i,e)+Xu(i,t)+Yu(i,n)+Zu(i,s)}var Ns=class extends Ot{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,s.x,r.x,a.x,o.x),ys(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends Ot{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,s.x,r.x,a.x,o.x),ys(e,s.y,r.y,a.y,o.y),ys(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fs=class extends Ot{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Ot{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Ot{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Ot{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y),vs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bs=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(wc(o,c.x,l.x,h.x,u.x),wc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},al=Object.freeze({__proto__:null,ArcCurve:Zr,CatmullRomCurve3:Jr,CubicBezierCurve:Ns,CubicBezierCurve3:$r,EllipseCurve:Xi,LineCurve:Fs,LineCurve3:Kr,QuadraticBezierCurve:Os,QuadraticBezierCurve3:Qr,SplineCurve:Bs}),jr=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new al[s.type]().fromJSON(s))}return this}},Yi=class extends jr{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fs(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Os(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ns(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Bs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Xi(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ni=class extends Yi{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yi().fromJSON(s))}return this}};function Ju(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_h(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=ed(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return zs(r,a,t,o,c,l,0),a}function _h(i,e,t,n,s){let r;if(s===ud(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ac(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ac(a/n|0,i[a],i[a+1],r);return r&&Zi(r,r.next)&&(ks(r),r=r.next),r}function li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zi(t,t.next)||ut(t.prev,t,t.next)===0)){if(ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&rd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Ku(i,n,s,r):$u(i)){e.push(c.i,i.i,l.i),ks(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Qu(li(i),e),zs(i,e,t,n,s,r,2)):a===2&&ju(i,e,t,n,s,r):zs(li(i),e,t,n,s,r,1);break}}}function $u(i){let e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&gs(s,o,r,c,a,l,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ku(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ut(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,c,l),g=Math.min(h,u,d),x=Math.max(o,c,l),m=Math.max(h,u,d),f=ol(p,g,e,t,n),E=ol(x,m,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=f&&y&&y.z<=E;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,c,u,l,d,b.x,b.y)&&ut(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&gs(o,h,c,u,l,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,c,u,l,d,b.x,b.y)&&ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=E;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&gs(o,h,c,u,l,d,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Zi(n,s)&&vh(n,t,t.next,s)&&Vs(n,s)&&Vs(s,n)&&(e.push(n.i,t.i,s.i),ks(t),ks(t.next),t=i=s),t=t.next}while(t!==i);return li(t)}function ju(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ld(a,o)){let c=yh(a,o);a=li(a,a.next),c=li(c,c.next),zs(a,e,t,n,s,r,0),zs(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ed(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_h(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(od(l))}s.sort(td);for(let r=0;r<s.length;r++)t=nd(s[r],t);return t}function td(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function nd(i,e){let t=id(i,e);if(!t)return e;let n=yh(t,i);return li(n,n.next),li(t,t.next)}function id(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Zi(i,t))return t;do{if(Zi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&xh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Vs(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&sd(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function sd(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function rd(i,e,t,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ad(s)}function ad(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ol(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function od(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function gs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&xh(i,e,t,n,s,r,a,o)}function ld(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cd(i,e)&&(Vs(i,e)&&Vs(e,i)&&hd(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||Zi(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zi(i,e){return i.x===e.x&&i.y===e.y}function vh(i,e,t,n){let s=Lr(ut(i,e,t)),r=Lr(ut(i,e,n)),a=Lr(ut(t,n,i)),o=Lr(ut(t,n,e));return!!(s!==r&&a!==o||s===0&&Pr(i,t,e)||r===0&&Pr(i,n,e)||a===0&&Pr(t,i,n)||o===0&&Pr(t,e,n))}function Pr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lr(i){return i>0?1:i<0?-1:0}function cd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vs(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function hd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yh(i,e){let t=ll(i.i,i.x,i.y),n=ll(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ac(i,e,t,n){let s=ll(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ll(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ud(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cl=class{static triangulate(e,t,n=2){return Ju(e,t,n)}},zn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cc(e),Rc(n,e);let a=e.length;t.forEach(Cc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Rc(n,t[c]);let o=cl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Cc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Hs=class i extends qt{constructor(e=new ni([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:dd,b,y=!1,A,w,C,P;f&&(b=f.getSpacedPoints(h),y=!0,d=!1,A=f.computeFrenetFrames(h,!1),w=new I,C=new I,P=new I),d||(m=0,p=0,g=0,x=0);let M=o.extractPoints(l),q=M.shape,R=M.holes;if(!zn.isClockWise(q)){q=q.reverse();for(let j=0,J=R.length;j<J;j++){let $=R[j];zn.isClockWise($)&&(R[j]=$.reverse())}}function z(j){let $=10000000000000001e-36,F=j[0];for(let ee=1;ee<=j.length;ee++){let ie=ee%j.length,ce=j[ie],Le=ce.x-F.x,Fe=ce.y-F.y,S=Le*Le+Fe*Fe,_=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(F.x),Math.abs(F.y)),N=$*_*_;if(S<=N){j.splice(ie,1),ee--;continue}F=ce}}z(q),R.forEach(z);let W=R.length,X=q;for(let j=0;j<W;j++){let J=R[j];q=q.concat(J)}function G(j,J,$){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(J,$)}let ne=q.length;function k(j,J,$){let F,ee,ie,ce=j.x-J.x,Le=j.y-J.y,Fe=$.x-j.x,S=$.y-j.y,_=ce*ce+Le*Le,N=ce*S-Le*Fe;if(Math.abs(N)>Number.EPSILON){let H=Math.sqrt(_),te=Math.sqrt(Fe*Fe+S*S),Y=J.x-Le/H,Ae=J.y+ce/H,he=$.x-S/te,be=$.y+Fe/te,Te=((he-Y)*S-(be-Ae)*Fe)/(ce*S-Le*Fe);F=Y+ce*Te-j.x,ee=Ae+Le*Te-j.y;let re=F*F+ee*ee;if(re<=2)return new se(F,ee);ie=Math.sqrt(re/2)}else{let H=!1;ce>Number.EPSILON?Fe>Number.EPSILON&&(H=!0):ce<-Number.EPSILON?Fe<-Number.EPSILON&&(H=!0):Math.sign(Le)===Math.sign(S)&&(H=!0),H?(F=-Le,ee=ce,ie=Math.sqrt(_)):(F=ce,ee=Le,ie=Math.sqrt(_/2))}return new se(F/ie,ee/ie)}let ue=[];for(let j=0,J=X.length,$=J-1,F=j+1;j<J;j++,$++,F++)$===J&&($=0),F===J&&(F=0),ue[j]=k(X[j],X[$],X[F]);let me=[],ve,Ne=ue.concat();for(let j=0,J=W;j<J;j++){let $=R[j];ve=[];for(let F=0,ee=$.length,ie=ee-1,ce=F+1;F<ee;F++,ie++,ce++)ie===ee&&(ie=0),ce===ee&&(ce=0),ve[F]=k($[F],$[ie],$[ce]);me.push(ve),Ne=Ne.concat(ve)}let We;if(m===0)We=zn.triangulateShape(X,R);else{let j=[],J=[];for(let $=0;$<m;$++){let F=$/m,ee=p*Math.cos(F*Math.PI/2),ie=g*Math.sin(F*Math.PI/2)+x;for(let ce=0,Le=X.length;ce<Le;ce++){let Fe=G(X[ce],ue[ce],ie);we(Fe.x,Fe.y,-ee),F===0&&j.push(Fe)}for(let ce=0,Le=W;ce<Le;ce++){let Fe=R[ce];ve=me[ce];let S=[];for(let _=0,N=Fe.length;_<N;_++){let H=G(Fe[_],ve[_],ie);we(H.x,H.y,-ee),F===0&&S.push(H)}F===0&&J.push(S)}}We=zn.triangulateShape(j,J)}let $e=We.length,ke=g+x;for(let j=0;j<ne;j++){let J=d?G(q[j],Ne[j],ke):q[j];y?(C.copy(A.normals[0]).multiplyScalar(J.x),w.copy(A.binormals[0]).multiplyScalar(J.y),P.copy(b[0]).add(C).add(w),we(P.x,P.y,P.z)):we(J.x,J.y,0)}for(let j=1;j<=h;j++)for(let J=0;J<ne;J++){let $=d?G(q[J],Ne[J],ke):q[J];y?(C.copy(A.normals[j]).multiplyScalar($.x),w.copy(A.binormals[j]).multiplyScalar($.y),P.copy(b[j]).add(C).add(w),we(P.x,P.y,P.z)):we($.x,$.y,u/h*j)}for(let j=m-1;j>=0;j--){let J=j/m,$=p*Math.cos(J*Math.PI/2),F=g*Math.sin(J*Math.PI/2)+x;for(let ee=0,ie=X.length;ee<ie;ee++){let ce=G(X[ee],ue[ee],F);we(ce.x,ce.y,u+$)}for(let ee=0,ie=R.length;ee<ie;ee++){let ce=R[ee];ve=me[ee];for(let Le=0,Fe=ce.length;Le<Fe;Le++){let S=G(ce[Le],ve[Le],F);y?we(S.x,S.y+b[h-1].y,b[h-1].x+$):we(S.x,S.y,u+$)}}}Z(),K();function Z(){let j=s.length/3;if(d){let J=0,$=ne*J;for(let F=0;F<$e;F++){let ee=We[F];qe(ee[2]+$,ee[1]+$,ee[0]+$)}J=h+m*2,$=ne*J;for(let F=0;F<$e;F++){let ee=We[F];qe(ee[0]+$,ee[1]+$,ee[2]+$)}}else{for(let J=0;J<$e;J++){let $=We[J];qe($[2],$[1],$[0])}for(let J=0;J<$e;J++){let $=We[J];qe($[0]+ne*h,$[1]+ne*h,$[2]+ne*h)}}n.addGroup(j,s.length/3-j,0)}function K(){let j=s.length/3,J=0;fe(X,J),J+=X.length;for(let $=0,F=R.length;$<F;$++){let ee=R[$];fe(ee,J),J+=ee.length}n.addGroup(j,s.length/3-j,1)}function fe(j,J){let $=j.length;for(;--$>=0;){let F=$,ee=$-1;ee<0&&(ee=j.length-1);for(let ie=0,ce=h+m*2;ie<ce;ie++){let Le=ne*ie,Fe=ne*(ie+1),S=J+F+Le,_=J+ee+Le,N=J+ee+Fe,H=J+F+Fe;He(S,_,N,H)}}}function we(j,J,$){c.push(j),c.push(J),c.push($)}function qe(j,J,$){tt(j),tt(J),tt($);let F=s.length/3,ee=E.generateTopUV(n,s,F-3,F-2,F-1);T(ee[0]),T(ee[1]),T(ee[2])}function He(j,J,$,F){tt(j),tt(J),tt(F),tt(J),tt($),tt(F);let ee=s.length/3,ie=E.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);T(ie[0]),T(ie[1]),T(ie[3]),T(ie[1]),T(ie[2]),T(ie[3])}function tt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function T(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new al[s.type]().fromJSON(s)),new i(n,e.options)}},dd={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,c),new se(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new se(a,1-c),new se(l,1-u),new se(d,1-g),new se(x,1-f)]:[new se(o,1-c),new se(h,1-u),new se(p,1-g),new se(m,1-f)]}};function fd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ci=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let E=f*d-a;for(let b=0;b<l;b++){let y=b*u-r;g.push(y,-E,0),x.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){let b=E+l*f,y=E+l*(f+1),A=E+1+l*(f+1),w=E+1+l*f;p.push(b,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var kn=class i extends qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(x,m,E),a.push(m,f,E)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gs=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tn=class extends bn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ws=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ea=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ta=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},na=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:el,endingEnd:el}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case tl:r=e,o=2*t-n;break;case nl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tl:a=e,c=2*n-t;break;case nl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+E*a[l+A]+b*a[c+A]+y*a[u+A];return r}},ia=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},sa=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&pd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ur,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bt.prototype.ValueTypeName="";Bt.prototype.TimeBufferType=Float32Array;Bt.prototype.ValueBufferType=Float32Array;Bt.prototype.DefaultInterpolation=zr;var Hn=class extends Bt{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=qs;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Bt{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var aa=class extends Bt{constructor(e,t,n,s){super(e,t,n,s)}};aa.prototype.ValueTypeName="number";var oa=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Mn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Xs=class extends Bt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Bt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=qs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends Bt{constructor(e,t,n,s){super(e,t,n,s)}};la.prototype.ValueTypeName="vector";var Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ca=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qh=new ca,En=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};En.DEFAULT_MATERIAL_NAME="__DEFAULT";var xn={},hl=class extends Error{constructor(e,t){super(e),this.response=t}},Ys=class extends En{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:s});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(f){E();function E(){u.read().then(({done:b,value:y})=>{if(b)f.close();else{x+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let w=0,C=h.length;w<C;w++){let P=h[w];P.onProgress&&P.onProgress(A)}f.enqueue(y),E()}},b=>{f.error(b)})}}});return new Response(m)}else throw new hl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Fi.add(`file:${e}`,l);let h=xn[e];delete xn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete xn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Di=new WeakMap,ha=class extends En{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Di.get(a);u===void 0&&(u=[],Di.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=zi("img");function c(){h(),t&&t(this);let u=Di.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Di.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Fi.remove(`image:${e}`);let d=Di.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}Di.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Zs=class extends En{constructor(e){super(e)}load(e,t,n,s){let r=new Rt,a=new ha(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Js=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$s=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qo=new st,Ic=new I,Pc=new I,ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pc),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Lc=new st,ms=new I,jo=new I,dl=class extends ul{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,n.coordinateSystem,n.reversedDepth)}},wn=class extends Js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ji=class extends Cs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ua=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ks=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Pl="\\[\\]\\.:\\/",md=new RegExp("["+Pl+"]","g"),Ll="[^"+Pl+"]",gd="[^"+Pl.replace("\\.","")+"]",_d=/((?:WC+[\/:])*)/.source.replace("WC",Ll),xd=/(WCOD+)?/.source.replace("WCOD",gd),vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),yd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),qd=new RegExp("^"+_d+xd+vd+yd+"$"),Md=["material","materials","bones","map"],fl=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(md,"")}static parseTrackName(e){let t=qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Md.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=fl;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var om=new Float32Array(1);var Qs=class{constructor(){this.type="ShapePath",this.color=new Pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Yi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){let E=[];for(let b=0,y=f.length;b<y;b++){let A=f[b],w=new ni;w.curves=A.curves,E.push(w)}return E}function n(f,E){let b=E.length,y=!1;for(let A=b-1,w=0;w<b;A=w++){let C=E[A],P=E[w],M=P.x-C.x,q=P.y-C.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(C=E[w],M=-M,P=E[A],q=-q),f.y<C.y||f.y>P.y)continue;if(f.y===C.y){if(f.x===C.x)return!0}else{let R=q*(f.x-C.x)-M*(f.y-C.y);if(R===0)return!0;if(R<0)continue;y=!y}}else{if(f.y!==C.y)continue;if(P.x<=f.x&&f.x<=C.x||C.x<=f.x&&f.x<=P.x)return!0}}return y}let s=zn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new ni,c.curves=o.curves,l.push(c),l;let h=!s(r[0].getPoints());h=e?!h:h;let u=[],d=[],p=[],g=0,x;d[g]=void 0,p[g]=[];for(let f=0,E=r.length;f<E;f++)o=r[f],x=o.getPoints(),a=s(x),a=e?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new ni,p:x},d[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:x[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,E=0;for(let b=0,y=d.length;b<y;b++)u[b]=[];for(let b=0,y=d.length;b<y;b++){let A=p[b];for(let w=0;w<A.length;w++){let C=A[w],P=!0;for(let M=0;M<d.length;M++)n(C.p,d[M].p)&&(b!==M&&E++,P?(P=!1,u[M].push(C)):f=!0);P&&u[b].push(C)}}E>0&&f===!1&&(p=u)}let m;for(let f=0,E=d.length;f<E;f++){c=d[f].s,l.push(c),m=p[f];for(let b=0,y=m.length;b<y;b++)c.holes.push(m[b].h)}return l}};function Dl(i,e,t,n){let s=Sd(n);switch(t){case Sl:return i*e;case Pa:return i*e/s.components*s.byteLength;case La:return i*e/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case bl:return i*e*3/s.components*s.byteLength;case Xt:return i*e*4/s.components*s.byteLength;case Ua:return i*e*4/s.components*s.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case za:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(i){switch(i){case jt:case vl:return{byteLength:1,components:1};case Ki:case yl:case Wt:return{byteLength:2,components:1};case Ra:case Ia:return{byteLength:2,components:4};case Xn:case Ca:case en:return{byteLength:4,components:1};case ql:case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Wh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Td(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Tf=`struct PhysicalMaterial {
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
}`,Ef=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,h1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,D1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,k1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,$1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,j1=`#define TOON
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
}`,ep=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Ed,alphahash_pars_fragment:wd,alphamap_fragment:Ad,alphamap_pars_fragment:Cd,alphatest_fragment:Rd,alphatest_pars_fragment:Id,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:Yd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Qd,displacementmap_vertex:jd,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:vf,envmap_vertex:cf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:_f,lights_pars_begin:xf,lights_toon_fragment:yf,lights_toon_pars_fragment:qf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:Tf,lights_fragment_begin:Ef,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:Vf,morphtarget_pars_vertex:kf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:Yf,normal_vertex:Zf,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:jf,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:s1,dithering_pars_fragment:r1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:h1,shadowmask_pars_fragment:u1,skinbase_vertex:d1,skinning_pars_vertex:f1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:_1,tonemapping_fragment:x1,tonemapping_pars_fragment:v1,transmission_fragment:y1,transmission_pars_fragment:q1,uv_pars_fragment:M1,uv_pars_vertex:S1,uv_vertex:b1,worldpos_vertex:T1,background_vert:E1,background_frag:w1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:R1,cube_frag:I1,depth_vert:P1,depth_frag:L1,distanceRGBA_vert:D1,distanceRGBA_frag:U1,equirect_vert:N1,equirect_frag:F1,linedashed_vert:O1,linedashed_frag:B1,meshbasic_vert:z1,meshbasic_frag:V1,meshlambert_vert:k1,meshlambert_frag:H1,meshmatcap_vert:G1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:Y1,meshphong_vert:Z1,meshphong_frag:J1,meshphysical_vert:$1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:j1,points_vert:ep,points_frag:tp,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},pe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},un={basic:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:wt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:wt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:wt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:wt([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:wt([pe.lights,pe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};un.physical={uniforms:wt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var uo={r:0,b:0,g:0},gi=new Gt,ap=new st;function op(i,e,t,n,s,r,a){let o=new Pe(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,A=g(b);A===null?f(o,c):A&&A.isColor&&(f(A,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===js)?(h===void 0&&(h=new Je(new ln(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:mi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(gi)),h.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Qe,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Je(new ci(2,2),new ft({name:"BackgroundMaterial",uniforms:mi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Qe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(uo,Rl(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,y,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:x,addToRenderList:m,dispose:E}}function lp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(q,R,O,z,W){let X=!1,G=u(z,O,R);r!==G&&(r=G,l(r.object)),X=p(q,z,O,W),X&&g(q,z,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(q,R,O,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(q){return i.bindVertexArray(q)}function h(q){return i.deleteVertexArray(q)}function u(q,R,O){let z=O.wireframe===!0,W=n[q.id];W===void 0&&(W={},n[q.id]=W);let X=W[R.id];X===void 0&&(X={},W[R.id]=X);let G=X[z];return G===void 0&&(G=d(c()),X[z]=G),G}function d(q){let R=[],O=[],z=[];for(let W=0;W<t;W++)R[W]=0,O[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:z,object:q,attributes:{},index:null}}function p(q,R,O,z){let W=r.attributes,X=R.attributes,G=0,ne=O.getAttributes();for(let k in ne)if(ne[k].location>=0){let me=W[k],ve=X[k];if(ve===void 0&&(k==="instanceMatrix"&&q.instanceMatrix&&(ve=q.instanceMatrix),k==="instanceColor"&&q.instanceColor&&(ve=q.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function g(q,R,O,z){let W={},X=R.attributes,G=0,ne=O.getAttributes();for(let k in ne)if(ne[k].location>=0){let me=X[k];me===void 0&&(k==="instanceMatrix"&&q.instanceMatrix&&(me=q.instanceMatrix),k==="instanceColor"&&q.instanceColor&&(me=q.instanceColor));let ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),W[k]=ve,G++}r.attributes=W,r.attributesNum=G,r.index=z}function x(){let q=r.newAttributes;for(let R=0,O=q.length;R<O;R++)q[R]=0}function m(q){f(q,0)}function f(q,R){let O=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;O[q]=1,z[q]===0&&(i.enableVertexAttribArray(q),z[q]=1),W[q]!==R&&(i.vertexAttribDivisor(q,R),W[q]=R)}function E(){let q=r.newAttributes,R=r.enabledAttributes;for(let O=0,z=R.length;O<z;O++)R[O]!==q[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function b(q,R,O,z,W,X,G){G===!0?i.vertexAttribIPointer(q,R,O,W,X):i.vertexAttribPointer(q,R,O,z,W,X)}function y(q,R,O,z){x();let W=z.attributes,X=O.getAttributes(),G=R.defaultAttributeValues;for(let ne in X){let k=X[ne];if(k.location>=0){let ue=W[ne];if(ue===void 0&&(ne==="instanceMatrix"&&q.instanceMatrix&&(ue=q.instanceMatrix),ne==="instanceColor"&&q.instanceColor&&(ue=q.instanceColor)),ue!==void 0){let me=ue.normalized,ve=ue.itemSize,Ne=e.get(ue);if(Ne===void 0)continue;let We=Ne.buffer,$e=Ne.type,ke=Ne.bytesPerElement,Z=$e===i.INT||$e===i.UNSIGNED_INT||ue.gpuType===Ca;if(ue.isInterleavedBufferAttribute){let K=ue.data,fe=K.stride,we=ue.offset;if(K.isInstancedInterleavedBuffer){for(let qe=0;qe<k.locationSize;qe++)f(k.location+qe,K.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let qe=0;qe<k.locationSize;qe++)m(k.location+qe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let qe=0;qe<k.locationSize;qe++)b(k.location+qe,ve/k.locationSize,$e,me,fe*ke,(we+ve/k.locationSize*qe)*ke,Z)}else{if(ue.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)f(k.location+K,ue.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,We);for(let K=0;K<k.locationSize;K++)b(k.location+K,ve/k.locationSize,$e,me,ve*ke,ve/k.locationSize*K*ke,Z)}}else if(G!==void 0){let me=G[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(k.location,me);break;case 3:i.vertexAttrib3fv(k.location,me);break;case 4:i.vertexAttrib4fv(k.location,me);break;default:i.vertexAttrib1fv(k.location,me)}}}}E()}function A(){P();for(let q in n){let R=n[q];for(let O in R){let z=R[O];for(let W in z)h(z[W].object),delete z[W];delete R[O]}delete n[q]}}function w(q){if(n[q.id]===void 0)return;let R=n[q.id];for(let O in R){let z=R[O];for(let W in z)h(z[W].object),delete z[W];delete R[O]}delete n[q.id]}function C(q){for(let R in n){let O=n[R];if(O[q.id]===void 0)continue;let z=O[q.id];for(let W in z)h(z[W].object),delete z[W];delete O[q.id]}}function P(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function cp(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Xt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function up(i){let e=this,t=null,n=0,s=!1,r=!1,a=new nn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,b=E*4,y=f.clippingState||null;c.value=y,y=h(g,d,b,p);for(let A=0;A!==b;++A)y[A]=t[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==x;++b,y+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dp(i){let e=new WeakMap;function t(a,o){return o===Ea?a.mapping=di:o===wa&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ea||o===wa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Wr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ts=4,Mh=[.125,.215,.35,.446,.526,.582],vi=20,Ul=new Ji,Sh=new Pe,Nl=null,Fl=0,Ol=0,Bl=!1,xi=(1+Math.sqrt(5))/2,es=1/xi,bh=[new I(-xi,es,0),new I(xi,es,0),new I(-es,0,xi),new I(es,0,xi),new I(0,xi,-es),new I(0,xi,es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],fp=new I,is=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=fp}=r;Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Fl,Ol),this._renderer.xr.enabled=Bl,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Wt,format:Xt,colorSpace:ri,depthBuffer:!1},s=Th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,n,s,r){let c=new vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Sh),u.toneMapping=An,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new on({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),m=new Je(new ln,x),f=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,f=!0):(x.color.copy(Sh),f=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;fo(s,y*A,b>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(s-r-1)%bh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Je(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let f=[],E=0;for(let C=0;C<vi;++C){let P=C/x,M=Math.exp(-P*P/2);f.push(M),C===0?E+=M:C<m&&(E+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],A=3*y*(s>b-ts?s-b+ts:0),w=4*(this._cubeSize-y);fo(t,A,w,3*y,2*y),c.setRenderTarget(t),c.render(u,Ul)}};function pp(i){let e=[],t=[],n=[],s=i,r=i-ts+1+Mh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ts?c=Mh[a-i+ts-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,P=w>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(M,x*g*w),b.set(d,m*g*w);let q=[w,w,w,w,w,w];y.set(q,f*g*w)}let A=new qt;A.setAttribute("position",new yt(E,x)),A.setAttribute("uv",new yt(b,m)),A.setAttribute("faceIndex",new yt(y,f)),e.push(A),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Th(i,e,t){let n=new Et(i,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mp(i,e,t){let n=new Float32Array(vi),s=new I(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Eh(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function wh(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function gp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ea||c===wa,h=c===di||c===fi;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new is(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new is(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _p(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xp(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let b=0,y=E.length;b<y;b+=3){let A=E[b+0],w=E[b+1],C=E[b+2];d.push(A,w,w,C,C,A)}}else if(g!==void 0){let E=g.array;x=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){let A=b+0,w=b+1,C=b+2;d.push(A,w,w,C,C,A)}}else return;let m=new(Cl(d)?As:ws)(d,1);m.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function vp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*x[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qp(i,e,t){let n=new WeakMap,s=new et;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*A*4*u),C=new bs(w,y,A,u);C.type=en,C.needsUpdate=!0;let P=b*4;for(let q=0;q<u;q++){let R=m[q],O=f[q],z=E[q],W=y*A*4*q;for(let X=0;X<R.count;X++){let G=X*P;p===!0&&(s.fromBufferAttribute(R,X),w[W+G+0]=s.x,w[W+G+1]=s.y,w[W+G+2]=s.z,w[W+G+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[W+G+4]=s.x,w[W+G+5]=s.y,w[W+G+6]=s.z,w[W+G+7]=0),x===!0&&(s.fromBufferAttribute(z,X),w[W+G+8]=s.x,w[W+G+9]=s.y,w[W+G+10]=s.z,w[W+G+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new se(y,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Mp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Xh=new Rt,Ah=new Ls(1,1),Yh=new bs,Zh=new Hr,Jh=new Rs,Ch=[],Rh=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function wp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),_t(t,n)}}function Ap(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),_t(t,n)}}function Cp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),_t(t,n)}}function Rp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Dp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Op(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ah.compareFunction=El,r=Ah):r=Xh,t.setTexture2D(e||r,s)}function Bp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jh,s)}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function kp(i){switch(i){case 5126:return Sp;case 35664:return bp;case 35665:return Tp;case 35666:return Ep;case 35674:return wp;case 35675:return Ap;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Ip;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Up;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Hp(i,e){i.uniform1fv(this.addr,e)}function Gp(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Wp(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Xp(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Yp(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zp(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jp(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function Kp(i,e){i.uniform2iv(this.addr,e)}function Qp(i,e){i.uniform3iv(this.addr,e)}function jp(i,e){i.uniform4iv(this.addr,e)}function e0(i,e){i.uniform1uiv(this.addr,e)}function t0(i,e){i.uniform2uiv(this.addr,e)}function n0(i,e){i.uniform3uiv(this.addr,e)}function i0(i,e){i.uniform4uiv(this.addr,e)}function s0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xh,r[a])}function r0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function a0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jh,r[a])}function o0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function l0(i){switch(i){case 5126:return Hp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}var Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}},kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Dh(i,e){i.seq.push(e),i.map[e.id]=e}function c0(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dh(t,l===void 0?new Vl(o,i,e):new kl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Hl(o),Dh(t,u)),t=u}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);c0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var h0=37297,u0=0;function d0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Nh=new ze;function f0(i){Ze._getMatrix(Nh,Ze.workingColorSpace,i);let e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d0(i.getShaderSource(e),o)}else return r}function p0(i,e){let t=f0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m0(i,e){let t;switch(e){case ya:t="Linear";break;case qa:t="Reinhard";break;case Ma:t="Cineon";break;case $i:t="ACESFilmic";break;case ba:t="AgX";break;case Ta:t="Neutral";break;case Sa:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new I;function g0(){Ze.getLuminanceCoefficients(po);let i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function x0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function Oh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(y0,M0)}var q0=new Map;function M0(i,e){let t=Ge[e];if(t===void 0){let n=q0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(S0,b0)}function b0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function E0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function A0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case va:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function C0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=T0(t),l=E0(t),h=w0(t),u=A0(t),d=C0(t),p=_0(t),g=x0(r),x=s.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),f.length>0&&(f+=`
`)):(m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),f=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ge.tonemapping_pars_fragment:"",t.toneMapping!==An?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,p0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Gl(a),a=Oh(a,t),a=Bh(a,t),o=Gl(o),o=Oh(o,t),o=Bh(o,t),a=zh(a),o=zh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=E+m+a,y=E+f+o,A=Uh(s,s.VERTEX_SHADER,b),w=Uh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",X=O.trim(),G=z.trim(),ne=W.trim(),k=!0,ue=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,w);else{let me=Fh(s,A,"vertex"),ve=Fh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+me+`
`+ve)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||ne==="")&&(ue=!1);ue&&(R.diagnostics={runnable:k,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(A),s.deleteShader(w),P=new ns(s,x),M=v0(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(x,h0)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var I0=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xl(e),t.set(e,n)),n}},Xl=class{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}};function P0(i,e,t,n,s,r,a){let o=new Es,c=new Wl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,q,R,O,z){let W=O.fog,X=z.geometry,G=M.isMeshStandardMaterial?O.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),k=ne&&ne.mapping===js?ne.image.height:null,ue=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=me!==void 0?me.length:0,Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let We,$e,ke,Z;if(ue){let je=un[ue];We=je.vertexShader,$e=je.fragmentShader}else We=M.vertexShader,$e=M.fragmentShader,c.update(M),ke=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);let K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,qe=z.isBatchedMesh===!0,He=!!M.map,tt=!!M.matcap,T=!!ne,j=!!M.aoMap,J=!!M.lightMap,$=!!M.bumpMap,F=!!M.normalMap,ee=!!M.displacementMap,ie=!!M.emissiveMap,ce=!!M.metalnessMap,Le=!!M.roughnessMap,Fe=M.anisotropy>0,S=M.clearcoat>0,_=M.dispersion>0,N=M.iridescence>0,H=M.sheen>0,te=M.transmission>0,Y=Fe&&!!M.anisotropyMap,Ae=S&&!!M.clearcoatMap,he=S&&!!M.clearcoatNormalMap,be=S&&!!M.clearcoatRoughnessMap,Te=N&&!!M.iridescenceMap,re=N&&!!M.iridescenceThicknessMap,xe=H&&!!M.sheenColorMap,Ue=H&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ge=!!M.specularColorMap,Ve=!!M.specularIntensityMap,L=te&&!!M.transmissionMap,le=te&&!!M.thicknessMap,de=!!M.gradientMap,Me=!!M.alphaMap,ae=M.alphaTest>0,Q=!!M.alphaHash,Ee=!!M.extensions,Be=An;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=i.toneMapping);let rt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:$e,defines:M.defines,customVertexShaderID:ke,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:qe,batchingColor:qe&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ri,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:tt,envMap:T,envMapMode:T&&ne.mapping,envMapCubeUVHeight:k,aoMap:j,lightMap:J,bumpMap:$,normalMap:F,displacementMap:d&&ee,emissiveMap:ie,normalMapObjectSpace:F&&M.normalMapType===ah,normalMapTangentSpace:F&&M.normalMapType===ho,metalnessMap:ce,roughnessMap:Le,anisotropy:Fe,anisotropyMap:Y,clearcoat:S,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:be,dispersion:_,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:re,sheen:H,sheenColorMap:xe,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:ge,specularIntensityMap:Ve,transmission:te,transmissionMap:L,thicknessMap:le,gradientMap:de,opaque:M.transparent===!1&&M.blending===ii&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:Q,combine:M.combine,mapUv:He&&x(M.map.channel),aoMapUv:j&&x(M.aoMap.channel),lightMapUv:J&&x(M.lightMap.channel),bumpMapUv:$&&x(M.bumpMap.channel),normalMapUv:F&&x(M.normalMap.channel),displacementMapUv:ee&&x(M.displacementMap.channel),emissiveMapUv:ie&&x(M.emissiveMap.channel),metalnessMapUv:ce&&x(M.metalnessMap.channel),roughnessMapUv:Le&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Ae&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:Ce&&x(M.specularMap.channel),specularColorMapUv:ge&&x(M.specularColorMap.channel),specularIntensityMapUv:Ve&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:le&&x(M.thicknessMap.channel),alphaMapUv:Me&&x(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(F||Fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(He||Me),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:q.directional.length,numPointLights:q.point.length,numSpotLights:q.spot.length,numSpotLightMaps:q.spotLightMap.length,numRectAreaLights:q.rectArea.length,numHemiLights:q.hemi.length,numDirLightShadows:q.directionalShadowMap.length,numPointLightShadows:q.pointShadowMap.length,numSpotLightShadows:q.spotShadowMap.length,numSpotLightShadowsWithMaps:q.numSpotLightShadowsWithMaps,numLightProbes:q.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Mt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(M){let q=[];if(M.shaderID?q.push(M.shaderID):(q.push(M.customVertexShaderID),q.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)q.push(R),q.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(q,M),b(q,M),q.push(i.outputColorSpace)),q.push(M.customProgramCacheKey),q.join()}function E(M,q){M.push(q.precision),M.push(q.outputColorSpace),M.push(q.envMapMode),M.push(q.envMapCubeUVHeight),M.push(q.mapUv),M.push(q.alphaMapUv),M.push(q.lightMapUv),M.push(q.aoMapUv),M.push(q.bumpMapUv),M.push(q.normalMapUv),M.push(q.displacementMapUv),M.push(q.emissiveMapUv),M.push(q.metalnessMapUv),M.push(q.roughnessMapUv),M.push(q.anisotropyMapUv),M.push(q.clearcoatMapUv),M.push(q.clearcoatNormalMapUv),M.push(q.clearcoatRoughnessMapUv),M.push(q.iridescenceMapUv),M.push(q.iridescenceThicknessMapUv),M.push(q.sheenColorMapUv),M.push(q.sheenRoughnessMapUv),M.push(q.specularMapUv),M.push(q.specularColorMapUv),M.push(q.specularIntensityMapUv),M.push(q.transmissionMapUv),M.push(q.thicknessMapUv),M.push(q.combine),M.push(q.fogExp2),M.push(q.sizeAttenuation),M.push(q.morphTargetsCount),M.push(q.morphAttributeCount),M.push(q.numDirLights),M.push(q.numPointLights),M.push(q.numSpotLights),M.push(q.numSpotLightMaps),M.push(q.numHemiLights),M.push(q.numRectAreaLights),M.push(q.numDirLightShadows),M.push(q.numPointLightShadows),M.push(q.numSpotLightShadows),M.push(q.numSpotLightShadowsWithMaps),M.push(q.numLightProbes),M.push(q.shadowMapType),M.push(q.toneMapping),M.push(q.numClippingPlanes),M.push(q.numClipIntersection),M.push(q.depthPacking)}function b(M,q){o.disableAll(),q.supportsVertexTextures&&o.enable(0),q.instancing&&o.enable(1),q.instancingColor&&o.enable(2),q.instancingMorph&&o.enable(3),q.matcap&&o.enable(4),q.envMap&&o.enable(5),q.normalMapObjectSpace&&o.enable(6),q.normalMapTangentSpace&&o.enable(7),q.clearcoat&&o.enable(8),q.iridescence&&o.enable(9),q.alphaTest&&o.enable(10),q.vertexColors&&o.enable(11),q.vertexAlphas&&o.enable(12),q.vertexUv1s&&o.enable(13),q.vertexUv2s&&o.enable(14),q.vertexUv3s&&o.enable(15),q.vertexTangents&&o.enable(16),q.anisotropy&&o.enable(17),q.alphaHash&&o.enable(18),q.batching&&o.enable(19),q.dispersion&&o.enable(20),q.batchingColor&&o.enable(21),q.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),q.fog&&o.enable(0),q.useFog&&o.enable(1),q.flatShading&&o.enable(2),q.logarithmicDepthBuffer&&o.enable(3),q.reversedDepthBuffer&&o.enable(4),q.skinning&&o.enable(5),q.morphTargets&&o.enable(6),q.morphNormals&&o.enable(7),q.morphColors&&o.enable(8),q.premultipliedAlpha&&o.enable(9),q.shadowMapEnabled&&o.enable(10),q.doubleSided&&o.enable(11),q.flipSided&&o.enable(12),q.useDepthPacking&&o.enable(13),q.dithering&&o.enable(14),q.transmission&&o.enable(15),q.sheen&&o.enable(16),q.opaque&&o.enable(17),q.pointsUvs&&o.enable(18),q.decodeVideoTexture&&o.enable(19),q.decodeVideoTextureEmissive&&o.enable(20),q.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let q=g[M.type],R;if(q){let O=un[q];R=Rn.clone(O.uniforms)}else R=M.uniforms;return R}function A(M,q){let R;for(let O=0,z=h.length;O<z;O++){let W=h[O];if(W.cacheKey===q){R=W,++R.usedTimes;break}}return R===void 0&&(R=new R0(i,q,M,r),h.push(R)),R}function w(M){if(--M.usedTimes===0){let q=h.indexOf(M);h[q]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function L0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function D0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||D0),n.length>1&&n.sort(d||kh),s.length>1&&s.sort(d||kh)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function U0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hh,i.set(n,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function N0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Pe};break;case"SpotLight":t={position:new I,direction:new I,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function F0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var O0=0;function B0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z0(i){let e=new N0,t=F0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new st,a=new st;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,E=0,b=0,y=0,A=0,w=0,C=0;l.sort(B0);for(let M=0,q=l.length;M<q;M++){let R=l[M],O=R.color,z=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],z);C++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ne=R.shadow,k=t.get(R);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=G,p++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;let ne=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,ne.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=ne.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=X,y++}x++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let ne=R.shadow,k=t.get(R);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,k.shadowCameraNear=ne.camera.near,k.shadowCameraFar=ne.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=G,g++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=C,n.version=O0++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let b=l[f];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Gh(i){let e=new z0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function V0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Gh(i),e.set(s,[o])):r>=a.length?(o=new Gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
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
}`;function G0(i,e,t){let n=new Gi,s=new se,r=new se,a=new et,o=new ea({depthPacking:rh}),c=new ta,l={},h=t.maxTextureSize,u={[yn]:Mt,[Mt]:yn,[hn]:hn},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:k0,fragmentShader:H0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Je(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),q=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==cn&&this.type===cn,W=f===cn&&this.type!==cn;for(let X=0,G=w.length;X<G;X++){let ne=w[X],k=ne.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ue=k.getFrameExtents();if(s.multiply(ue),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,k.mapSize.y=r.y)),k.map===null||z===!0||W===!0){let ve=this.type!==cn?{minFilter:Pt,magFilter:Pt}:{};k.map!==null&&k.map.dispose(),k.map=new Et(s.x,s.y,ve),k.map.texture.name=ne.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let me=k.getViewportCount();for(let ve=0;ve<me;ve++){let Ne=k.getViewport(ve);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),O.viewport(a),k.updateMatrices(ne,ve),n=k.getFrustum(),y(C,P,k.camera,ne,this.type)}k.isPointLightShadow!==!0&&this.type===cn&&E(k,P),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,q,R)};function E(w,C){let P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Et(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,p,x,null)}function b(w,C,P,M){let q=null,R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)q=R;else if(q=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=q.uuid,z=C.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let X=W[z];X===void 0&&(X=q.clone(),W[z]=X,C.addEventListener("dispose",A)),q=X}if(q.visible=C.visible,q.wireframe=C.wireframe,M===cn?q.side=C.shadowSide!==null?C.shadowSide:C.side:q.side=C.shadowSide!==null?C.shadowSide:u[C.side],q.alphaMap=C.alphaMap,q.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,q.map=C.map,q.clipShadows=C.clipShadows,q.clippingPlanes=C.clippingPlanes,q.clipIntersection=C.clipIntersection,q.displacementMap=C.displacementMap,q.displacementScale=C.displacementScale,q.displacementBias=C.displacementBias,q.wireframeLinewidth=C.wireframeLinewidth,q.linewidth=C.linewidth,P.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let O=i.properties.get(q);O.light=P}return q}function y(w,C,P,M,q){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&q===cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let z=e.update(w),W=w.material;if(Array.isArray(W)){let X=z.groups;for(let G=0,ne=X.length;G<ne;G++){let k=X[G],ue=W[k.materialIndex];if(ue&&ue.visible){let me=b(w,ue,M,q);w.onBeforeShadow(i,w,C,P,z,me,k),i.renderBufferDirect(P,null,z,me,w,k),w.onAfterShadow(i,w,C,P,z,me,k)}}}else if(W.visible){let X=b(w,W,M,q);w.onBeforeShadow(i,w,C,P,z,X,null),i.renderBufferDirect(P,null,z,X,w,null),w.onAfterShadow(i,w,C,P,z,X,null)}}let O=w.children;for(let z=0,W=O.length;z<W;z++)y(O[z],C,P,M,q)}function A(w){w.target.removeEventListener("dispose",A);for(let P in l){let M=l[P],q=w.target.uuid;q in M&&(M[q].dispose(),delete M[q])}}}var W0={[da]:fa,[pa]:_a,[ma]:xa,[si]:ga,[fa]:da,[_a]:pa,[xa]:ma,[ga]:si};function X0(i,e){function t(){let L=!1,le=new et,de=null,Me=new et(0,0,0,0);return{setMask:function(ae){de!==ae&&!L&&(i.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Q,Ee,Be,rt){rt===!0&&(ae*=Be,Q*=Be,Ee*=Be),le.set(ae,Q,Ee,Be),Me.equals(le)===!1&&(i.clearColor(ae,Q,Ee,Be),Me.copy(le))},reset:function(){L=!1,de=null,Me.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,de=null,Me=null,ae=null;return{setReversed:function(Q){if(le!==Q){let Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=Q;let Be=ae;ae=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(Q){Q?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Q){de!==Q&&!L&&(i.depthMask(Q),de=Q)},setFunc:function(Q){if(le&&(Q=W0[Q]),Me!==Q){switch(Q){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case si:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ae!==Q&&(le&&(Q=1-Q),i.clearDepth(Q),ae=Q)},reset:function(){L=!1,de=null,Me=null,ae=null,le=!1}}}function s(){let L=!1,le=null,de=null,Me=null,ae=null,Q=null,Ee=null,Be=null,rt=null;return{setTest:function(je){L||(je?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(je){le!==je&&!L&&(i.stencilMask(je),le=je)},setFunc:function(je,dn,tn){(de!==je||Me!==dn||ae!==tn)&&(i.stencilFunc(je,dn,tn),de=je,Me=dn,ae=tn)},setOp:function(je,dn,tn){(Q!==je||Ee!==dn||Be!==tn)&&(i.stencilOp(je,dn,tn),Q=je,Ee=dn,Be=tn)},setLocked:function(je){L=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){L=!1,le=null,de=null,Me=null,ae=null,Q=null,Ee=null,Be=null,rt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,b=null,y=null,A=null,w=null,C=new Pe(0,0,0),P=0,M=!1,q=null,R=null,O=null,z=null,W=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=ne>=1):k.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=ne>=2);let ue=null,me={},ve=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),We=new et().fromArray(ve),$e=new et().fromArray(Ne);function ke(L,le,de,Me){let ae=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<de;Ee++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(le+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Q}let Z={};Z[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(si),$(!1),F(pl),K(i.CULL_FACE),j(Qt);function K(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function we(L,le){return u[L]!==le?(i.bindFramebuffer(L,le),u[L]=le,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(L,le){let de=p,Me=!1;if(L){de=d.get(le),de===void 0&&(de=[],d.set(le,de));let ae=L.textures;if(de.length!==ae.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ee=ae.length;Q<Ee;Q++)de[Q]=i.COLOR_ATTACHMENT0+Q;de.length=ae.length,Me=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Me=!0);Me&&i.drawBuffers(de)}function He(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let tt={[Vn]:i.FUNC_ADD,[Oc]:i.FUNC_SUBTRACT,[Bc]:i.FUNC_REVERSE_SUBTRACT};tt[zc]=i.MIN,tt[Vc]=i.MAX;let T={[kc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[Yc]:i.ONE_MINUS_DST_ALPHA,[Kc]:i.CONSTANT_COLOR,[Qc]:i.ONE_MINUS_CONSTANT_COLOR,[jc]:i.CONSTANT_ALPHA,[eh]:i.ONE_MINUS_CONSTANT_ALPHA};function j(L,le,de,Me,ae,Q,Ee,Be,rt,je){if(L===Qt){x===!0&&(fe(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),L!==Fc){if(L!==m||je!==M){if((f!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),f=Vn,y=Vn),je)switch(L){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,A=null,w=null,C.set(0,0,0),P=0,m=L,M=je}return}ae=ae||le,Q=Q||de,Ee=Ee||Me,(le!==f||ae!==y)&&(i.blendEquationSeparate(tt[le],tt[ae]),f=le,y=ae),(de!==E||Me!==b||Q!==A||Ee!==w)&&(i.blendFuncSeparate(T[de],T[Me],T[Q],T[Ee]),E=de,b=Me,A=Q,w=Ee),(Be.equals(C)===!1||rt!==P)&&(i.blendColor(Be.r,Be.g,Be.b,rt),C.copy(Be),P=rt),m=L,M=!1}function J(L,le){L.side===hn?fe(i.CULL_FACE):K(i.CULL_FACE);let de=L.side===Mt;le&&(de=!de),$(de),L.blending===ii&&L.transparent===!1?j(Qt):j(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Me=L.stencilWrite;o.setTest(Me),Me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function F(L){L!==Dc?(K(i.CULL_FACE),L!==R&&(L===pl?i.cullFace(i.BACK):L===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),R=L}function ee(L){L!==O&&(G&&i.lineWidth(L),O=L)}function ie(L,le,de){L?(K(i.POLYGON_OFFSET_FILL),(z!==le||W!==de)&&(i.polygonOffset(le,de),z=le,W=de)):fe(i.POLYGON_OFFSET_FILL)}function ce(L){L?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Le(L){L===void 0&&(L=i.TEXTURE0+X-1),ue!==L&&(i.activeTexture(L),ue=L)}function Fe(L,le,de){de===void 0&&(ue===null?de=i.TEXTURE0+X-1:de=ue);let Me=me[de];Me===void 0&&(Me={type:void 0,texture:void 0},me[de]=Me),(Me.type!==L||Me.texture!==le)&&(ue!==de&&(i.activeTexture(de),ue=de),i.bindTexture(L,le||Z[L]),Me.type=L,Me.texture=le)}function S(){let L=me[ue];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(L){We.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function Ue(L){$e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$e.copy(L))}function Ce(L,le){let de=l.get(le);de===void 0&&(de=new WeakMap,l.set(le,de));let Me=de.get(L);Me===void 0&&(Me=i.getUniformBlockIndex(le,L.name),de.set(L,Me))}function ge(L,le){let Me=l.get(le).get(L);c.get(le)!==Me&&(i.uniformBlockBinding(le,Me,L.__bindingPointIndex),c.set(le,Me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,me={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,b=null,y=null,A=null,w=null,C=new Pe(0,0,0),P=0,M=!1,q=null,R=null,O=null,z=null,W=null,We.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:fe,bindFramebuffer:we,drawBuffers:qe,useProgram:He,setBlending:j,setMaterial:J,setFlipSided:$,setCullFace:F,setLineWidth:ee,setPolygonOffset:ie,setScissorTest:ce,activeTexture:Le,bindTexture:Fe,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Te,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:ge,texStorage2D:he,texStorage3D:be,texSubImage2D:H,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:xe,viewport:Ue,reset:Ve}}function Y0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):zi("canvas")}function x(S,_,N){let H=1,te=Fe(S);if((te.width>N||te.height>N)&&(H=N/Math.max(te.width,te.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Y=Math.floor(H*te.width),Ae=Math.floor(H*te.height);u===void 0&&(u=g(Y,Ae));let he=_?g(Y,Ae):u;return he.width=Y,he.height=Ae,he.getContext("2d").drawImage(S,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Ae+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,_,N,H,te=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=_;if(_===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),_===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Ae=te?Ms:Ze.getTransfer(H);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=Ae===Qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(S,_){let N;return S?_===null||_===Xn||_===Qi?N=i.DEPTH24_STENCIL8:_===en?N=i.DEPTH32F_STENCIL8:_===Ki&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xn||_===Qi?N=i.DEPTH_COMPONENT24:_===en?N=i.DEPTH_COMPONENT32F:_===Ki&&(N=i.DEPTH_COMPONENT16),N}function A(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pt&&S.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){let _=S.target;_.removeEventListener("dispose",w),P(_),_.isVideoTexture&&h.delete(_)}function C(S){let _=S.target;_.removeEventListener("dispose",C),q(_)}function P(S){let _=n.get(S);if(_.__webglInit===void 0)return;let N=S.source,H=d.get(N);if(H){let te=H[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(S),Object.keys(H).length===0&&d.delete(N)}n.remove(S)}function M(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let N=S.source,H=d.get(N);delete H[_.__cacheKey],a.memory.textures--}function q(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let te=0;te<_.__webglFramebuffer[H].length;te++)i.deleteFramebuffer(_.__webglFramebuffer[H][te]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=S.textures;for(let H=0,te=N.length;H<te;H++){let Y=n.get(N[H]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(S)}let R=0;function O(){R=0}function z(){let S=R;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function W(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function X(S,_){let N=n.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,S,_);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function G(S,_){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Z(N,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function ne(S,_){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Z(N,S,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function k(S,_){let N=n.get(S);if(S.version>0&&N.__version!==S.version){K(N,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}let ue={[Or]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},me={[Pt]:i.NEAREST,[ih]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},ve={[oh]:i.NEVER,[fh]:i.ALWAYS,[lh]:i.LESS,[El]:i.LEQUAL,[ch]:i.EQUAL,[dh]:i.GEQUAL,[hh]:i.GREATER,[uh]:i.NOTEQUAL};function Ne(S,_){if(_.type===en&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Aa||_.magFilter===er||_.magFilter===Wn||_.minFilter===Kt||_.minFilter===Aa||_.minFilter===er||_.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ue[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pt||_.minFilter!==er&&_.minFilter!==Wn||_.type===en&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(S,_){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",w));let H=_.source,te=d.get(H);te===void 0&&(te={},d.set(H,te));let Y=W(_);if(Y!==S.__cacheKey){te[Y]===void 0&&(te[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),te[Y].usedTimes++;let Ae=te[S.__cacheKey];Ae!==void 0&&(te[S.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(_)),S.__cacheKey=Y,S.__webglTexture=te[Y].texture}return N}function $e(S,_,N){return Math.floor(Math.floor(S/N)/_)}function ke(S,_,N,H){let Y=S.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,H,_.data);else{Y.sort((re,xe)=>re.start-xe.start);let Ae=0;for(let re=1;re<Y.length;re++){let xe=Y[Ae],Ue=Y[re],Ce=xe.start+xe.count,ge=$e(Ue.start,_.width,4),Ve=$e(xe.start,_.width,4);Ue.start<=Ce+1&&ge===Ve&&$e(Ue.start+Ue.count-1,_.width,4)===ge?xe.count=Math.max(xe.count,Ue.start+Ue.count-xe.start):(++Ae,Y[Ae]=Ue)}Y.length=Ae+1;let he=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let re=0,xe=Y.length;re<xe;re++){let Ue=Y[re],Ce=Math.floor(Ue.start/4),ge=Math.ceil(Ue.count/4),Ve=Ce%_.width,L=Math.floor(Ce/_.width),le=ge,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ve,L,le,de,N,H,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Z(S,_,N){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let te=We(S,_),Y=_.source;t.bindTexture(H,S.__webglTexture,i.TEXTURE0+N);let Ae=n.get(Y);if(Y.version!==Ae.__version||te===!0){t.activeTexture(i.TEXTURE0+N);let he=Ze.getPrimaries(Ze.workingColorSpace),be=_.colorSpace===Cn?null:Ze.getPrimaries(_.colorSpace),Te=_.colorSpace===Cn||he===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=x(_.image,!1,s.maxTextureSize);re=Le(_,re);let xe=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),Ce=b(_.internalFormat,xe,Ue,_.colorSpace,_.isVideoTexture);Ne(H,_);let ge,Ve=_.mipmaps,L=_.isVideoTexture!==!0,le=Ae.__version===void 0||te===!0,de=Y.dataReady,Me=A(_,re);if(_.isDepthTexture)Ce=y(_.format===ji,_.type),le&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,xe,Ue,null));else if(_.isDataTexture)if(Ve.length>0){L&&le&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ve[0].width,Ve[0].height);for(let ae=0,Q=Ve.length;ae<Q;ae++)ge=Ve[ae],L?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,xe,Ue,ge.data);_.generateMipmaps=!1}else L?(le&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,re.width,re.height),de&&ke(_,re,xe,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,xe,Ue,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,Ve[0].width,Ve[0].height,re.depth);for(let ae=0,Q=Ve.length;ae<Q;ae++)if(ge=Ve[ae],_.format!==Xt)if(xe!==null)if(L){if(de)if(_.layerUpdates.size>0){let Ee=Dl(ge.width,ge.height,_.format,_.type);for(let Be of _.layerUpdates){let rt=ge.data.subarray(Be*Ee/ge.data.BYTES_PER_ELEMENT,(Be+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Be,ge.width,ge.height,1,xe,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,re.depth,xe,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,ge.width,ge.height,re.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,re.depth,xe,Ue,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ce,ge.width,ge.height,re.depth,0,xe,Ue,ge.data)}else{L&&le&&t.texStorage2D(i.TEXTURE_2D,Me,Ce,Ve[0].width,Ve[0].height);for(let ae=0,Q=Ve.length;ae<Q;ae++)ge=Ve[ae],_.format!==Xt?xe!==null?L?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ge.width,ge.height,xe,Ue,ge.data):t.texImage2D(i.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,xe,Ue,ge.data)}else if(_.isDataArrayTexture)if(L){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ce,re.width,re.height,re.depth),de)if(_.layerUpdates.size>0){let ae=Dl(re.width,re.height,_.format,_.type);for(let Q of _.layerUpdates){let Ee=re.data.subarray(Q*ae/re.data.BYTES_PER_ELEMENT,(Q+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,xe,Ue,Ee)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Ue,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,xe,Ue,re.data);else if(_.isData3DTexture)L?(le&&t.texStorage3D(i.TEXTURE_3D,Me,Ce,re.width,re.height,re.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Ue,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,xe,Ue,re.data);else if(_.isFramebufferTexture){if(le)if(L)t.texStorage2D(i.TEXTURE_2D,Me,Ce,re.width,re.height);else{let ae=re.width,Q=re.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ce,ae,Q,0,xe,Ue,null),ae>>=1,Q>>=1}}else if(Ve.length>0){if(L&&le){let ae=Fe(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}for(let ae=0,Q=Ve.length;ae<Q;ae++)ge=Ve[ae],L?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,xe,Ue,ge):t.texImage2D(i.TEXTURE_2D,ae,Ce,xe,Ue,ge);_.generateMipmaps=!1}else if(L){if(le){let ae=Fe(re);t.texStorage2D(i.TEXTURE_2D,Me,Ce,ae.width,ae.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ue,re)}else t.texImage2D(i.TEXTURE_2D,0,Ce,xe,Ue,re);m(_)&&f(H),Ae.__version=Y.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function K(S,_,N){if(_.image.length!==6)return;let H=We(S,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let Y=n.get(te);if(te.version!==Y.__version||H===!0){t.activeTexture(i.TEXTURE0+N);let Ae=Ze.getPrimaries(Ze.workingColorSpace),he=_.colorSpace===Cn?null:Ze.getPrimaries(_.colorSpace),be=_.colorSpace===Cn||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!Te&&!re?xe[Q]=x(_.image[Q],!0,s.maxCubemapSize):xe[Q]=re?_.image[Q].image:_.image[Q],xe[Q]=Le(_,xe[Q]);let Ue=xe[0],Ce=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),Ve=b(_.internalFormat,Ce,ge,_.colorSpace),L=_.isVideoTexture!==!0,le=Y.__version===void 0||H===!0,de=te.dataReady,Me=A(_,Ue);Ne(i.TEXTURE_CUBE_MAP,_);let ae;if(Te){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){ae=xe[Q].mipmaps;for(let Ee=0;Ee<ae.length;Ee++){let Be=ae[Ee];_.format!==Xt?Ce!==null?L?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Ve,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Be.width,Be.height,Ce,ge,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Ve,Be.width,Be.height,0,Ce,ge,Be.data)}}}else{if(ae=_.mipmaps,L&&le){ae.length>0&&Me++;let Q=Fe(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Ce,ge,xe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,xe[Q].width,xe[Q].height,0,Ce,ge,xe[Q].data);for(let Ee=0;Ee<ae.length;Ee++){let rt=ae[Ee].image[Q].image;L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,rt.width,rt.height,Ce,ge,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Ve,rt.width,rt.height,0,Ce,ge,rt.data)}}else{L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ge,xe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,Ce,ge,xe[Q]);for(let Ee=0;Ee<ae.length;Ee++){let Be=ae[Ee];L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Ce,ge,Be.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Ve,Ce,ge,Be.image[Q])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=te.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function fe(S,_,N,H,te,Y){let Ae=r.convert(N.format,N.colorSpace),he=r.convert(N.type),be=b(N.internalFormat,Ae,he,N.colorSpace),Te=n.get(_),re=n.get(N);if(re.__renderTarget=_,!Te.__hasExternalTextures){let xe=Math.max(1,_.width>>Y),Ue=Math.max(1,_.height>>Y);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,be,xe,Ue,_.depth,0,Ae,he,null):t.texImage2D(te,Y,be,xe,Ue,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,te,re.__webglTexture,0,ee(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,te,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(S,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let H=_.depthTexture,te=H&&H.isDepthTexture?H.type:null,Y=y(_.stencilBuffer,te),Ae=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ee(_);ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,S)}else{let H=_.textures;for(let te=0;te<H.length;te++){let Y=H[te],Ae=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),be=b(Y.internalFormat,Ae,he,Y.colorSpace),Te=ee(_);N&&ie(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,be,_.width,_.height):ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,be,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,be,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let te=H.__webglTexture,Y=ee(_);if(_.depthTexture.format===Oi)ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(_.depthTexture.format===ji)ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function He(S){let _=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let H=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",te)};H.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=H}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let H=S.texture.mipmaps;H&&H.length>0?qe(_.__webglFramebuffer[0],S):qe(_.__webglFramebuffer,S)}else if(N){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),we(_.__webglDepthbuffer[H],S,!1);else{let te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}else{let H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),we(_.__webglDepthbuffer,S,!1);else{let te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(S,_,N){let H=n.get(S);_!==void 0&&fe(H.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&He(S)}function T(S){let _=S.texture,N=n.get(S),H=n.get(_);S.addEventListener("dispose",C);let te=S.textures,Y=S.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let be=0;be<_.mipmaps.length;be++)N.__webglFramebuffer[he][be]=i.createFramebuffer()}else N.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)N.__webglFramebuffer[he]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,be=te.length;he<be;he++){let Te=n.get(te[he]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ie(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let be=te[he];N.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[he]);let Te=r.convert(be.format,be.colorSpace),re=r.convert(be.type),xe=b(be.internalFormat,Te,re,be.colorSpace,S.isXRRenderTarget===!0),Ue=ee(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,xe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,N.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),we(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)fe(N.__webglFramebuffer[he][be],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else fe(N.__webglFramebuffer[he],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,be=te.length;he<be;he++){let Te=te[he],re=n.get(Te),xe=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(xe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,re.__webglTexture),Ne(xe,Te),fe(N.__webglFramebuffer,S,Te,i.COLOR_ATTACHMENT0+he,xe,0),m(Te)&&f(xe)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),Ne(he,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)fe(N.__webglFramebuffer[be],S,_,i.COLOR_ATTACHMENT0,he,be);else fe(N.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&f(he),t.unbindTexture()}S.depthBuffer&&He(S)}function j(S){let _=S.textures;for(let N=0,H=_.length;N<H;N++){let te=_[N];if(m(te)){let Y=E(S),Ae=n.get(te).__webglTexture;t.bindTexture(Y,Ae),f(Y),t.unbindTexture()}}}let J=[],$=[];function F(S){if(S.samples>0){if(ie(S)===!1){let _=S.textures,N=S.width,H=S.height,te=i.COLOR_BUFFER_BIT,Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(S),he=_.length>1;if(he)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let be=S.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let re=n.get(_[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,te,i.NEAREST),c===!0&&(J.length=0,$.length=0,J.push(i.COLOR_ATTACHMENT0+Te),S.depthBuffer&&S.resolveDepthBuffer===!1&&(J.push(Y),$.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let re=n.get(_[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ee(S){return Math.min(s.maxSamples,S.samples)}function ie(S){let _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ce(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Le(S,_){let N=S.colorSpace,H=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==ri&&N!==Cn&&(Ze.getTransfer(N)===Qe?(H!==Xt||te!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Fe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=tt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ie}function Z0(i,e){function t(n,s=Cn){let r,a=Ze.getTransfer(s);if(n===jt)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===yl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===bl)return i.RGB;if(n===Xt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Tl)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===sr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Va||n===ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Va)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:J0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Yl,f={},E=t.getContextAttributes(),b=null,y=null,A=[],w=[],C=new se,P=null,M=new vt;M.viewport=new et;let q=new vt;q.viewport=new et;let R=[M,q],O=new ua,z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=A[Z];return K===void 0&&(K=new Hi,A[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=A[Z];return K===void 0&&(K=new Hi,A[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=A[Z];return K===void 0&&(K=new Hi,A[Z]=K),K.getHandSpace()};function X(Z){let K=w.indexOf(Z.inputSource);if(K===-1)return;let fe=A[K];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,l||a),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<A.length;Z++){let K=w[Z];K!==null&&(w[Z]=null,A[Z].disconnect(K))}z=null,W=null,m.reset();for(let Z in f)delete f[Z];e.setRenderTarget(b),p=null,d=null,u=null,s=null,y=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,we=null,qe=null;E.depth&&(qe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?ji:Oi,we=E.stencil?Qi:Xn);let He={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Et(d.textureWidth,d.textureHeight,{format:Xt,type:jt,depthTexture:new Ls(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Et(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Z){for(let K=0;K<Z.removed.length;K++){let fe=Z.removed[K],we=w.indexOf(fe);we>=0&&(w[we]=null,A[we].disconnect(fe))}for(let K=0;K<Z.added.length;K++){let fe=Z.added[K],we=w.indexOf(fe);if(we===-1){for(let He=0;He<A.length;He++)if(He>=w.length){w.push(fe),we=He;break}else if(w[He]===null){w[He]=fe,we=He;break}if(we===-1)break}let qe=A[we];qe&&qe.connect(fe)}}let k=new I,ue=new I;function me(Z,K,fe){k.setFromMatrixPosition(K.matrixWorld),ue.setFromMatrixPosition(fe.matrixWorld);let we=k.distanceTo(ue),qe=K.projectionMatrix.elements,He=fe.projectionMatrix.elements,tt=qe[14]/(qe[10]-1),T=qe[14]/(qe[10]+1),j=(qe[9]+1)/qe[5],J=(qe[9]-1)/qe[5],$=(qe[8]-1)/qe[0],F=(He[8]+1)/He[0],ee=tt*$,ie=tt*F,ce=we/(-$+F),Le=ce*-$;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),qe[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Fe=tt+ce,S=T+ce,_=ee-Le,N=ie+(we-Le),H=j*T/S*Fe,te=J*T/S*Fe;Z.projectionMatrix.makePerspective(_,N,H,te,Fe,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let K=Z.near,fe=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),O.near=q.near=M.near=K,O.far=q.far=M.far=fe,(z!==O.near||W!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,W=O.far),O.layers.mask=Z.layers.mask|6,M.layers.mask=O.layers.mask&3,q.layers.mask=O.layers.mask&5;let we=Z.parent,qe=O.cameras;ve(O,we);for(let He=0;He<qe.length;He++)ve(qe[He],we);qe.length===2?me(O,M,q):O.projectionMatrix.copy(M.projectionMatrix),Ne(Z,O,we)};function Ne(Z,K,fe){fe===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return f[Z]};let We=null;function $e(Z,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let we=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,we=!0);for(let T=0;T<fe.length;T++){let j=fe[T],J=null;if(p!==null)J=p.getViewport(j);else{let F=u.getViewSubImage(d,j);J=F.viewport,T===0&&(e.setRenderTargetTextures(y,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(y))}let $=R[T];$===void 0&&($=new vt,$.layers.enable(T),$.viewport=new et,R[T]=$),$.matrix.fromArray(j.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(j.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(J.x,J.y,J.width,J.height),T===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),we===!0&&O.cameras.push($)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let T=u.getDepthInformation(fe[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(qe&&qe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let T=0;T<fe.length;T++){let j=fe[T].camera;if(j){let J=f[j];J||(J=new Ds,f[j]=J);let $=u.getCameraImage(j);J.sourceTexture=$}}}}for(let fe=0;fe<A.length;fe++){let we=w[fe],qe=A[fe];we!==null&&qe!==void 0&&qe.update(we,K,l||a)}We&&We(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ke=new Wh;ke.setAnimationLoop($e),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},_i=new Gt,K0=new st;function Q0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Rl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,_i.copy(y),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(_i)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){let y=b.program;n.uniformBlockBinding(E,y)}function l(E,b){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(E,A);let w=e.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){let b=u();E.__bindingPointIndex=b;let y=i.createBuffer(),A=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],y=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,C=y.length;w<C;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,q=P.length;M<q;M++){let R=P[M];if(p(R,w,M,A)===!0){let O=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],W=0;for(let X=0;X<z.length;X++){let G=z[X],ne=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,y,A){let w=E.value,C=b+"_"+y;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{let P=A[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){let b=E.uniforms,y=0,A=16;for(let C=0,P=b.length;C<P;C++){let M=Array.isArray(b[C])?b[C]:[b[C]];for(let q=0,R=M.length;q<R;q++){let O=M[q],z=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=z.length;W<X;W++){let G=z[W],ne=x(G),k=y%A,ue=k%ne.boundary,me=k+ue;y+=ue,me!==0&&A-me<ne.storage&&(y+=A-me),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=ne.storage}}}let w=y%A;return w>0&&(y+=A-w),E.__size=y,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var mo=class{constructor(e={}){let{canvas:t=ph(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=Tt;let w=0,C=0,P=null,M=-1,q=null,R=new et,O=new et,z=null,W=new Pe(0),X=0,G=t.width,ne=t.height,k=1,ue=null,me=null,ve=new et(0,0,G,ne),Ne=new et(0,0,G,ne),We=!1,$e=new Gi,ke=!1,Z=!1,K=new st,fe=new I,we=new et,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function tt(){return P===null?k:1}let T=n;function j(v,D){return t.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ae,!1),T===null){let D="webgl2";if(T=j(D,v),T===null)throw j(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let J,$,F,ee,ie,ce,Le,Fe,S,_,N,H,te,Y,Ae,he,be,Te,re,xe,Ue,Ce,ge,Ve;function L(){J=new _p(T),J.init(),Ce=new Z0(T,J),$=new hp(T,J,e,Ce),F=new X0(T,J),$.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),ee=new yp(T),ie=new L0,ce=new Y0(T,J,F,ie,$,Ce,ee),Le=new dp(y),Fe=new gp(y),S=new Td(T),ge=new lp(T,S),_=new xp(T,S,ee,ge),N=new Mp(T,_,S,ee),re=new qp(T,$,ce),he=new up(ie),H=new P0(y,Le,Fe,J,$,ge,he),te=new Q0(y,ie),Y=new U0,Ae=new V0(J),Te=new op(y,Le,Fe,F,N,p,c),be=new G0(y,N,$),Ve=new j0(T,ee,$,F),xe=new cp(T,J,ee),Ue=new vp(T,J,ee),ee.programs=H.programs,y.capabilities=$,y.extensions=J,y.properties=ie,y.renderLists=Y,y.shadowMap=be,y.state=F,y.info=ee}L();let le=new Zl(y,T);this.xr=le,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=J.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=J.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,ne,!1))},this.getSize=function(v){return v.set(G,ne)},this.setSize=function(v,D,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,ne=D,t.width=Math.floor(v*k),t.height=Math.floor(D*k),B===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(G*k,ne*k).floor()},this.setDrawingBufferSize=function(v,D,B){G=v,ne=D,k=B,t.width=Math.floor(v*B),t.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,D,B,V){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,D,B,V),F.viewport(R.copy(ve).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,D,B,V){v.isVector4?Ne.set(v.x,v.y,v.z,v.w):Ne.set(v,D,B,V),F.scissor(O.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){F.setScissorTest(We=v)},this.setOpaqueSort=function(v){ue=v},this.setTransparentSort=function(v){me=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let V=0;if(v){let U=!1;if(P!==null){let oe=P.texture.format;U=oe===Ua||oe===Da||oe===La}if(U){let oe=P.texture.type,_e=oe===jt||oe===Xn||oe===Ki||oe===Qi||oe===Ra||oe===Ia,Se=Te.getClearColor(),ye=Te.getClearAlpha(),De=Se.r,Oe=Se.g,Re=Se.b;_e?(g[0]=De,g[1]=Oe,g[2]=Re,g[3]=ye,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=De,x[1]=Oe,x[2]=Re,x[3]=ye,T.clearBufferiv(T.COLOR,0,x))}else V|=T.COLOR_BUFFER_BIT}D&&(V|=T.DEPTH_BUFFER_BIT),B&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Te.dispose(),Y.dispose(),Ae.dispose(),ie.dispose(),Le.dispose(),Fe.dispose(),N.dispose(),ge.dispose(),Ve.dispose(),H.dispose(),le.dispose(),le.removeEventListener("sessionstart",tn),le.removeEventListener("sessionend",jl),Jn.stop()};function de(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=ee.autoReset,D=be.enabled,B=be.autoUpdate,V=be.needsUpdate,U=be.type;L(),ee.autoReset=v,be.enabled=D,be.autoUpdate=B,be.needsUpdate=V,be.type=U}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Q(v){let D=v.target;D.removeEventListener("dispose",Q),Ee(D)}function Ee(v){Be(v),ie.remove(v)}function Be(v){let D=ie.get(v).programs;D!==void 0&&(D.forEach(function(B){H.releaseProgram(B)}),v.isShaderMaterial&&H.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,V,U,oe){D===null&&(D=qe);let _e=U.isMesh&&U.matrixWorld.determinant()<0,Se=Qh(v,D,B,V,U);F.setMaterial(V,_e);let ye=B.index,De=1;if(V.wireframe===!0){if(ye=_.getWireframeAttribute(B),ye===void 0)return;De=2}let Oe=B.drawRange,Re=B.attributes.position,Ye=Oe.start*De,nt=(Oe.start+Oe.count)*De;oe!==null&&(Ye=Math.max(Ye,oe.start*De),nt=Math.min(nt,(oe.start+oe.count)*De)),ye!==null?(Ye=Math.max(Ye,0),nt=Math.min(nt,ye.count)):Re!=null&&(Ye=Math.max(Ye,0),nt=Math.min(nt,Re.count));let dt=nt-Ye;if(dt<0||dt===1/0)return;ge.setup(U,V,Se,B,ye);let at,it=xe;if(ye!==null&&(at=S.get(ye),it=Ue,it.setIndex(at)),U.isMesh)V.wireframe===!0?(F.setLineWidth(V.wireframeLinewidth*tt()),it.setMode(T.LINES)):it.setMode(T.TRIANGLES);else if(U.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),F.setLineWidth(Ie*tt()),U.isLineSegments?it.setMode(T.LINES):U.isLineLoop?it.setMode(T.LINE_LOOP):it.setMode(T.LINE_STRIP)}else U.isPoints?it.setMode(T.POINTS):U.isSprite&&it.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ie=U._multiDrawStarts,ct=U._multiDrawCounts,Ke=U._multiDrawCount,Dt=ye?S.get(ye).bytesPerElement:1,yi=ie.get(V).currentProgram.getUniforms();for(let Ut=0;Ut<Ke;Ut++)yi.setValue(T,"_gl_DrawID",Ut),it.render(Ie[Ut]/Dt,ct[Ut])}else if(U.isInstancedMesh)it.renderInstances(Ye,dt,U.count);else if(B.isInstancedBufferGeometry){let Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,Ie);it.renderInstances(Ye,dt,ct)}else it.render(Ye,dt)};function rt(v,D,B){v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=Mt,v.needsUpdate=!0,hr(v,D,B),v.side=yn,v.needsUpdate=!0,hr(v,D,B),v.side=hn):hr(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),f=Ae.get(B),f.init(D),b.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let V=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let oe=U.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){let Se=oe[_e];rt(Se,B,U),V.add(Se)}else rt(oe,B,U),V.add(oe)}),f=b.pop(),V},this.compileAsync=function(v,D,B=null){let V=this.compile(v,D,B);return new Promise(U=>{function oe(){if(V.forEach(function(_e){ie.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){U(v);return}setTimeout(oe,10)}J.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let je=null;function dn(v){je&&je(v)}function tn(){Jn.stop()}function jl(){Jn.start()}let Jn=new Wh;Jn.setAnimationLoop(dn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(v){je=v,le.setAnimationLoop(v),v===null?Jn.stop():Jn.start()},le.addEventListener("sessionstart",tn),le.addEventListener("sessionend",jl),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,D,P),f=Ae.get(v,b.length),f.init(D),b.push(f),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$e.setFromProjectionMatrix(K,$t,D.reversedDepth),Z=this.localClippingEnabled,ke=he.init(this.clippingPlanes,Z),m=Y.get(v,E.length),m.init(),E.push(m),le.enabled===!0&&le.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&Eo(oe,D,-1/0,y.sortObjects)}Eo(v,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,me),He=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,He&&Te.addToRenderList(m,v),this.info.render.frame++,ke===!0&&he.beginShadows();let B=f.state.shadowsArray;be.render(B,v,D),ke===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){let oe=D.cameras;if(U.length>0)for(let _e=0,Se=oe.length;_e<Se;_e++){let ye=oe[_e];tc(V,U,v,ye)}He&&Te.render(v);for(let _e=0,Se=oe.length;_e<Se;_e++){let ye=oe[_e];ec(m,v,ye,ye.viewport)}}else U.length>0&&tc(V,U,v,D),He&&Te.render(v),ec(m,v,D);P!==null&&C===0&&(ce.updateMultisampleRenderTarget(P),ce.updateRenderTargetMipmap(P)),v.isScene===!0&&v.onAfterRender(y,v,D),ge.resetDefaultState(),M=-1,q=null,b.pop(),b.length>0?(f=b[b.length-1],ke===!0&&he.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Eo(v,D,B,V){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$e.intersectsSprite(v)){V&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let _e=N.update(v),Se=v.material;Se.visible&&m.push(v,_e,Se,B,we.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$e.intersectsObject(v))){let _e=N.update(v),Se=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){let ye=_e.groups;for(let De=0,Oe=ye.length;De<Oe;De++){let Re=ye[De],Ye=Se[Re.materialIndex];Ye&&Ye.visible&&m.push(v,_e,Ye,B,we.z,Re)}}else Se.visible&&m.push(v,_e,Se,B,we.z,null)}}let oe=v.children;for(let _e=0,Se=oe.length;_e<Se;_e++)Eo(oe[_e],D,B,V)}function ec(v,D,B,V){let U=v.opaque,oe=v.transmissive,_e=v.transparent;f.setupLightsView(B),ke===!0&&he.setGlobalState(y.clippingPlanes,B),V&&F.viewport(R.copy(V)),U.length>0&&cr(U,D,B),oe.length>0&&cr(oe,D,B),_e.length>0&&cr(_e,D,B),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function tc(v,D,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Et(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Wt:jt,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let oe=f.state.transmissionRenderTarget[V.id],_e=V.viewport||R;oe.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);let Se=y.getRenderTarget(),ye=y.getActiveCubeFace(),De=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(W),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),He&&Te.render(B);let Oe=y.toneMapping;y.toneMapping=An;let Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ke===!0&&he.setGlobalState(y.clippingPlanes,V),cr(v,B,V),ce.updateMultisampleRenderTarget(oe),ce.updateRenderTargetMipmap(oe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let nt=0,dt=D.length;nt<dt;nt++){let at=D[nt],it=at.object,Ie=at.geometry,ct=at.material,Ke=at.group;if(ct.side===hn&&it.layers.test(V.layers)){let Dt=ct.side;ct.side=Mt,ct.needsUpdate=!0,nc(it,B,V,Ie,ct,Ke),ct.side=Dt,ct.needsUpdate=!0,Ye=!0}}Ye===!0&&(ce.updateMultisampleRenderTarget(oe),ce.updateRenderTargetMipmap(oe))}y.setRenderTarget(Se,ye,De),y.setClearColor(W,X),Re!==void 0&&(V.viewport=Re),y.toneMapping=Oe}function cr(v,D,B){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,oe=v.length;U<oe;U++){let _e=v[U],Se=_e.object,ye=_e.geometry,De=_e.group,Oe=_e.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),Se.layers.test(B.layers)&&nc(Se,D,B,ye,Oe,De)}}function nc(v,D,B,V,U,oe){v.onBeforeRender(y,D,B,V,U,oe),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,D,B,V,v,oe),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=Mt,U.needsUpdate=!0,y.renderBufferDirect(B,D,V,U,v,oe),U.side=yn,U.needsUpdate=!0,y.renderBufferDirect(B,D,V,U,v,oe),U.side=hn):y.renderBufferDirect(B,D,V,U,v,oe),v.onAfterRender(y,D,B,V,U,oe)}function hr(v,D,B){D.isScene!==!0&&(D=qe);let V=ie.get(v),U=f.state.lights,oe=f.state.shadowsArray,_e=U.state.version,Se=H.getParameters(v,U.state,oe,D,B),ye=H.getProgramCacheKey(Se),De=V.programs;V.environment=v.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(v.isMeshStandardMaterial?Fe:Le).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",Q),De=new Map,V.programs=De);let Oe=De.get(ye);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===_e)return sc(v,Se),Oe}else Se.uniforms=H.getUniforms(v),v.onBeforeCompile(Se,y),Oe=H.acquireProgram(Se,ye),De.set(ye,Oe),V.uniforms=Se.uniforms;let Re=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=he.uniform),sc(v,Se),V.needsLights=eu(v),V.lightsStateVersion=_e,V.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function ic(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=ns.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function sc(v,D){let B=ie.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Qh(v,D,B,V,U){D.isScene!==!0&&(D=qe),ce.resetTextureUnits();let oe=D.fog,_e=V.isMeshStandardMaterial?D.environment:null,Se=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ri,ye=(V.isMeshStandardMaterial?Fe:Le).get(V.envMap||_e),De=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,nt=!!B.morphAttributes.color,dt=An;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=y.toneMapping);let at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=at!==void 0?at.length:0,Ie=ie.get(V),ct=f.state.lights;if(ke===!0&&(Z===!0||v!==q)){let At=v===q&&V.id===M;he.setState(V,v,At)}let Ke=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ct.state.version||Ie.outputColorSpace!==Se||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==ye||V.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==he.numPlanes||Ie.numIntersection!==he.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Oe||Ie.morphTargets!==Re||Ie.morphNormals!==Ye||Ie.morphColors!==nt||Ie.toneMapping!==dt||Ie.morphTargetsCount!==it)&&(Ke=!0):(Ke=!0,Ie.__version=V.version);let Dt=Ie.currentProgram;Ke===!0&&(Dt=hr(V,D,U));let yi=!1,Ut=!1,ls=!1,ht=Dt.getUniforms(),Vt=Ie.uniforms;if(F.useProgram(Dt.program)&&(yi=!0,Ut=!0,ls=!0),V.id!==M&&(M=V.id,Ut=!0),yi||q!==v){F.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ht.setValue(T,"projectionMatrix",v.projectionMatrix),ht.setValue(T,"viewMatrix",v.matrixWorldInverse);let It=ht.map.cameraPosition;It!==void 0&&It.setValue(T,fe.setFromMatrixPosition(v.matrixWorld)),$.logarithmicDepthBuffer&&ht.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,Ut=!0,ls=!0)}if(U.isSkinnedMesh){ht.setOptional(T,U,"bindMatrix"),ht.setOptional(T,U,"bindMatrixInverse");let At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ht.setValue(T,"boneTexture",At.boneTexture,ce))}U.isBatchedMesh&&(ht.setOptional(T,U,"batchingTexture"),ht.setValue(T,"batchingTexture",U._matricesTexture,ce),ht.setOptional(T,U,"batchingIdTexture"),ht.setValue(T,"batchingIdTexture",U._indirectTexture,ce),ht.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(T,"batchingColorTexture",U._colorsTexture,ce));let kt=B.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&re.update(U,B,Dt),(Ut||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,ht.setValue(T,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Vt.envMap.value=ye,Vt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Vt.envMapIntensity.value=D.environmentIntensity),Ut&&(ht.setValue(T,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&jh(Vt,ls),oe&&V.fog===!0&&te.refreshFogUniforms(Vt,oe),te.refreshMaterialUniforms(Vt,V,k,ne,f.state.transmissionRenderTarget[v.id]),ns.upload(T,ic(Ie),Vt,ce)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ns.upload(T,ic(Ie),Vt,ce),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(T,"center",U.center),ht.setValue(T,"modelViewMatrix",U.modelViewMatrix),ht.setValue(T,"normalMatrix",U.normalMatrix),ht.setValue(T,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let At=V.uniformsGroups;for(let It=0,wo=At.length;It<wo;It++){let $n=At[It];Ve.update($n,Dt),Ve.bind($n,Dt)}}return Dt}function jh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function eu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(v,D,B){let V=ie.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ie.get(v.texture).__webglTexture=D,ie.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let B=ie.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let tu=T.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){P=v,w=D,C=B;let V=!0,U=null,oe=!1,_e=!1;if(v){let ye=ie.get(v);if(ye.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)ce.setupRenderTarget(v);else if(ye.__hasExternalTextures)ce.rebindTextures(v,ie.get(v.texture).__webglTexture,ie.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Re=v.depthTexture;if(ye.__boundDepthTexture!==Re){if(Re!==null&&ie.has(Re)&&(v.width!==Re.image.width||v.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(v)}}let De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);let Oe=ie.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?U=Oe[D][B]:U=Oe[D],oe=!0):v.samples>0&&ce.useMultisampledRTT(v)===!1?U=ie.get(v).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[B]:U=Oe,R.copy(v.viewport),O.copy(v.scissor),z=v.scissorTest}else R.copy(ve).multiplyScalar(k).floor(),O.copy(Ne).multiplyScalar(k).floor(),z=We;if(B!==0&&(U=tu),F.bindFramebuffer(T.FRAMEBUFFER,U)&&V&&F.drawBuffers(v,U),F.viewport(R),F.scissor(O),F.setScissorTest(z),oe){let ye=ie.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,B)}else if(_e){let ye=D;for(let De=0;De<v.textures.length;De++){let Oe=ie.get(v.textures[De]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+De,Oe.__webglTexture,B,ye)}}else if(v!==null&&B!==0){let ye=ie.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ye.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,D,B,V,U,oe,_e,Se=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){F.bindFramebuffer(T.FRAMEBUFFER,ye);try{let De=v.textures[Se],Oe=De.format,Re=De.type;if(!$.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-V&&B>=0&&B<=v.height-U&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se),T.readPixels(D,B,V,U,Ce.convert(Oe),Ce.convert(Re),oe))}finally{let De=P!==null?ie.get(P).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,V,U,oe,_e,Se=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(D>=0&&D<=v.width-V&&B>=0&&B<=v.height-U){F.bindFramebuffer(T.FRAMEBUFFER,ye);let De=v.textures[Se],Oe=De.format,Re=De.type;if(!$.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.bufferData(T.PIXEL_PACK_BUFFER,oe.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se),T.readPixels(D,B,V,U,Ce.convert(Oe),Ce.convert(Re),0);let nt=P!==null?ie.get(P).__webglFramebuffer:null;F.bindFramebuffer(T.FRAMEBUFFER,nt);let dt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await mh(T,dt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,oe),T.deleteBuffer(Ye),T.deleteSync(dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,B=0){let V=Math.pow(2,-B),U=Math.floor(v.image.width*V),oe=Math.floor(v.image.height*V),_e=D!==null?D.x:0,Se=D!==null?D.y:0;ce.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,_e,Se,U,oe),F.unbindTexture()};let nu=T.createFramebuffer(),iu=T.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,V=null,U=0,oe=null){oe===null&&(U!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let _e,Se,ye,De,Oe,Re,Ye,nt,dt,at=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(B!==null)_e=B.max.x-B.min.x,Se=B.max.y-B.min.y,ye=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Oe=B.min.y,Re=B.isBox3?B.min.z:0;else{let kt=Math.pow(2,-U);_e=Math.floor(at.width*kt),Se=Math.floor(at.height*kt),v.isDataArrayTexture?ye=at.depth:v.isData3DTexture?ye=Math.floor(at.depth*kt):ye=1,De=0,Oe=0,Re=0}V!==null?(Ye=V.x,nt=V.y,dt=V.z):(Ye=0,nt=0,dt=0);let it=Ce.convert(D.format),Ie=Ce.convert(D.type),ct;D.isData3DTexture?(ce.setTexture3D(D,0),ct=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ce.setTexture2DArray(D,0),ct=T.TEXTURE_2D_ARRAY):(ce.setTexture2D(D,0),ct=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);let Ke=T.getParameter(T.UNPACK_ROW_LENGTH),Dt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),yi=T.getParameter(T.UNPACK_SKIP_PIXELS),Ut=T.getParameter(T.UNPACK_SKIP_ROWS),ls=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,at.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,De),T.pixelStorei(T.UNPACK_SKIP_ROWS,Oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Re);let ht=v.isDataArrayTexture||v.isData3DTexture,Vt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let kt=ie.get(v),At=ie.get(D),It=ie.get(kt.__renderTarget),wo=ie.get(At.__renderTarget);F.bindFramebuffer(T.READ_FRAMEBUFFER,It.__webglFramebuffer),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,wo.__webglFramebuffer);for(let $n=0;$n<ye;$n++)ht&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(v).__webglTexture,U,Re+$n),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,oe,dt+$n)),T.blitFramebuffer(De,Oe,_e,Se,Ye,nt,_e,Se,T.DEPTH_BUFFER_BIT,T.NEAREST);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ie.has(v)){let kt=ie.get(v),At=ie.get(D);F.bindFramebuffer(T.READ_FRAMEBUFFER,nu),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,iu);for(let It=0;It<ye;It++)ht?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,kt.__webglTexture,U,Re+It):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,kt.__webglTexture,U),Vt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,oe,dt+It):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,At.__webglTexture,oe),U!==0?T.blitFramebuffer(De,Oe,_e,Se,Ye,nt,_e,Se,T.COLOR_BUFFER_BIT,T.NEAREST):Vt?T.copyTexSubImage3D(ct,oe,Ye,nt,dt+It,De,Oe,_e,Se):T.copyTexSubImage2D(ct,oe,Ye,nt,De,Oe,_e,Se);F.bindFramebuffer(T.READ_FRAMEBUFFER,null),F.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Vt?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(ct,oe,Ye,nt,dt,_e,Se,ye,it,Ie,at.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(ct,oe,Ye,nt,dt,_e,Se,ye,it,at.data):T.texSubImage3D(ct,oe,Ye,nt,dt,_e,Se,ye,it,Ie,at):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,oe,Ye,nt,_e,Se,it,Ie,at.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,oe,Ye,nt,at.width,at.height,it,at.data):T.texSubImage2D(T.TEXTURE_2D,oe,Ye,nt,_e,Se,it,Ie,at);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ke),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Dt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,yi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ut),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ls),oe===0&&D.generateMipmaps&&T.generateMipmap(ct),F.unbindTexture()},this.initRenderTarget=function(v){ie.get(v).__webglFramebuffer===void 0&&ce.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ce.setTextureCube(v,0):v.isData3DTexture?ce.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ce.setTexture2DArray(v,0):ce.setTexture2D(v,0),F.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,F.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var _o=class extends En{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Ys(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let c=r.parse(JSON.parse(o));t&&t(c)},n,s)}parse(e){return new $l(e)}},$l=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],s=tm(e,t,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}};function tm(i,e,t){let n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,a=[],o=0,c=0;for(let l=0;l<n.length;l++){let h=n[l];if(h===`
`)o=0,c-=r;else{let u=nm(h,s,o,c,t);o+=u.offsetX,a.push(u.path)}}return a}function nm(i,e,t,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let a=new Qs,o,c,l,h,u,d,p,g;if(r.o){let x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,f=x.length;m<f;)switch(x[m++]){case"m":o=x[m++]*e+t,c=x[m++]*e+n,a.moveTo(o,c);break;case"l":o=x[m++]*e+t,c=x[m++]*e+n,a.lineTo(o,c);break;case"q":l=x[m++]*e+t,h=x[m++]*e+n,u=x[m++]*e+t,d=x[m++]*e+n,a.quadraticCurveTo(u,d,l,h);break;case"b":l=x[m++]*e+t,h=x[m++]*e+n,u=x[m++]*e+t,d=x[m++]*e+n,p=x[m++]*e+t,g=x[m++]*e+n,a.bezierCurveTo(u,d,p,g,l,h);break}}return{offsetX:r.ha*e,path:a}}var xo=class extends Hs{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let s=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}};var vo=class extends ai{constructor(){super();let e=new ln;e.deleteAttribute("uv");let t=new bn({side:Mt}),n=new bn,s=new wn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new oi(e,n,6),o=new mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Je(e,rs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Je(e,rs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Je(e,rs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Je(e,rs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Je(e,rs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new Je(e,rs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rs(i){return new Ws({color:0,emissive:16777215,emissiveIntensity:i})}var as={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},im=new Ji(-1,1,1,-1,0,1),Kl=class extends qt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},sm=new Kl,Zn=class{constructor(e){this._mesh=new Je(sm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,im)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yo=class extends zt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ar=class extends zt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qo=class extends zt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yo(as),this.copyPass.material.blending=Qt,this.clock=new Ks}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ar!==void 0&&(a instanceof ar?n=!0:a instanceof qo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var So=class extends zt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var $h={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var os=class i extends zt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,a,{type:Wt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Et(r,a,{type:Wt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Et(r,a,{type:Wt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=$h;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(as.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:as.vertexShader,fragmentShader:as.fragmentShader,blending:ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Zn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};os.BlurDirectionX=new se(1,0);os.BlurDirectionY=new se(0,1);var or={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var bo=class extends zt{constructor(){super(),this.uniforms=Rn.clone(or.uniforms),this.material=new Gs({name:or.name,uniforms:this.uniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader}),this._fsQuad=new Zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$i?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Kh={glyphs:{\u03BF:{x_min:30,x_max:741,ha:774,o:"m 395 683 q 645 587 550 683 q 741 337 741 492 q 646 79 741 173 q 385 -15 552 -15 q 127 78 225 -15 q 30 333 30 172 q 129 590 30 498 q 395 683 228 683 m 269 174 q 305 85 275 119 q 386 52 335 52 q 464 85 436 52 q 503 172 491 119 q 510 237 506 194 q 515 336 515 279 q 510 431 515 391 q 503 494 506 472 q 464 581 491 548 q 385 615 436 615 q 291 563 315 615 q 261 459 267 512 q 256 333 256 407 q 269 174 256 248 "},S:{x_min:55,x_max:687,ha:742,o:"m 95 251 l 116 251 q 188 116 145 158 q 322 75 231 75 q 438 113 385 75 q 491 211 491 151 q 382 350 491 294 q 168 461 273 407 q 55 664 55 539 q 159 875 55 801 q 409 949 264 949 q 653 891 535 949 q 622 805 635 848 q 598 712 609 762 l 583 712 q 509 818 559 779 q 391 857 459 857 q 283 827 328 857 q 238 738 238 797 q 349 609 238 666 q 570 497 461 551 q 687 295 687 416 q 570 62 687 143 q 292 -18 453 -18 q 171 -8 229 -18 q 55 26 113 1 q 72 116 64 68 q 95 251 80 165 "},"/":{x_min:-32.953125,x_max:420,ha:383,o:"m 339 1023 l 420 1024 l 47 -126 l -32 -126 l 339 1023 "},\u03A4:{x_min:8,x_max:738,ha:749,o:"m 493 818 q 490 723 493 790 q 487 652 487 656 q 490 427 487 529 q 498 201 494 326 q 503 0 503 77 q 438 2 482 0 q 374 5 395 5 q 317 3 351 5 q 244 0 284 1 q 252 266 244 88 q 261 476 261 444 q 258 670 261 533 q 255 818 255 808 q 158 815 188 818 q 8 801 128 813 l 12 872 l 8 932 q 198 927 70 932 q 373 922 327 922 q 572 927 445 922 q 738 932 700 932 l 733 870 l 738 801 q 493 818 614 818 "},\u03D5:{x_min:32,x_max:997,ha:1028,o:"m 418 -6 q 146 79 261 -6 q 32 322 32 165 q 143 560 32 474 q 418 664 254 646 q 411 819 418 715 q 404 978 404 923 q 483 970 445 970 q 622 977 556 970 q 616 829 622 938 q 611 664 611 719 q 882 573 768 664 q 997 328 997 483 q 886 90 997 171 q 611 -6 776 9 q 616 -197 611 -68 q 622 -374 622 -326 l 544 -365 q 471 -366 503 -365 q 404 -373 438 -368 q 411 -183 404 -315 q 418 -6 418 -51 m 611 328 l 611 61 q 742 147 704 72 q 780 328 780 222 q 741 510 780 433 q 612 601 703 588 l 611 328 m 418 601 q 287 510 326 588 q 249 328 249 433 q 286 147 249 223 q 416 61 324 72 l 418 328 l 418 601 "},y:{x_min:0,x_max:669.453125,ha:653,o:"m 269 -16 l 76 481 q 37 579 58 529 q 0 667 16 629 q 66 664 22 667 q 134 661 111 661 q 201 664 154 661 q 251 667 248 667 q 308 465 277 561 q 380 256 338 368 l 452 463 q 482 562 462 493 q 512 667 502 631 l 577 661 q 623 664 593 661 q 669 667 654 667 q 438 139 536 375 q 244 -373 341 -97 q 165 -368 206 -368 q 132 -368 145 -368 q 86 -373 119 -368 q 145 -277 119 -323 q 195 -176 170 -230 l 269 -16 "},"\u2248":{x_min:118.0625,x_max:1019.453125,ha:1139,o:"m 1019 527 q 894 458 956 483 q 766 433 831 433 q 570 477 698 433 q 373 522 443 522 q 238 489 297 522 q 118 417 179 457 l 118 563 q 254 632 187 607 q 391 658 320 658 q 577 614 450 658 q 761 571 704 571 q 886 596 826 571 q 1019 671 945 622 l 1019 527 m 1019 251 q 892 182 952 207 q 766 158 831 158 q 568 202 697 158 q 373 246 440 246 q 251 219 308 246 q 118 140 194 192 l 118 286 q 252 358 187 331 q 387 385 318 385 q 575 339 447 385 q 761 294 704 294 q 886 321 825 294 q 1019 397 947 348 l 1019 251 "},\u03A0:{x_min:91,x_max:957,ha:1049,o:"m 105 284 l 105 461 q 102 651 105 534 q 99 784 99 768 l 91 932 q 210 926 129 932 q 331 921 290 921 l 711 921 q 833 926 751 921 q 957 932 915 932 q 948 692 957 857 q 939 465 939 527 q 942 221 939 315 q 957 0 945 127 l 829 5 q 756 2 808 5 q 698 0 703 0 q 707 63 704 33 q 710 130 710 93 l 713 504 l 710 813 l 515 818 l 336 813 q 333 643 336 762 q 331 516 331 523 l 336 130 q 345 0 336 59 q 278 2 322 0 q 215 5 234 5 l 91 0 q 98 146 91 40 q 105 284 105 252 "},\u0390:{x_min:-147,x_max:552,ha:396,o:"m 92 126 l 92 543 l 80 666 q 139 661 105 663 q 197 658 173 658 q 265 660 239 658 q 315 666 292 663 q 305 586 308 616 q 302 523 302 557 l 302 113 q 303 72 302 88 q 315 0 305 56 l 196 4 l 82 0 q 88 67 85 30 q 92 126 92 104 m -65 961 q -7 935 -31 961 q 17 877 17 909 q -8 820 17 844 q -65 797 -33 797 q -121 820 -96 797 q -147 879 -147 844 q -123 935 -147 910 q -65 961 -99 961 m 275 1017 q 316 998 298 1017 q 334 957 334 980 q 321 919 334 935 q 283 886 307 903 l 94 755 l 36 755 l 182 950 q 225 998 204 980 q 275 1017 247 1017 m 470 961 q 528 935 504 961 q 552 877 552 910 q 528 820 552 844 q 471 797 504 797 q 413 820 438 797 q 388 879 388 844 q 412 936 388 912 q 470 961 436 961 "},g:{x_min:23,x_max:714.671875,ha:700,o:"m 213 272 q 93 331 142 278 q 45 456 45 384 q 128 623 45 563 q 322 683 211 683 l 382 683 l 534 664 l 606 660 q 666 662 641 660 q 714 666 692 665 l 714 585 l 581 589 q 623 543 610 570 q 637 477 637 515 q 541 300 637 353 q 310 248 446 248 q 258 236 281 248 q 236 199 236 225 q 386 142 236 150 q 623 102 536 134 q 711 -68 711 71 q 591 -296 711 -218 q 313 -374 471 -374 q 111 -326 199 -374 q 23 -175 23 -279 q 63 -64 23 -110 q 171 -7 104 -19 l 171 0 q 103 39 130 7 q 76 112 76 70 q 117 201 76 163 q 213 251 159 239 l 213 272 m 169 -143 q 221 -255 169 -215 q 351 -295 274 -295 q 483 -254 427 -295 q 540 -139 540 -214 q 524 -81 540 -107 q 472 -40 508 -54 q 383 -19 437 -25 q 269 -13 330 -13 l 239 -12 q 169 -143 169 -54 m 332 304 q 411 351 392 304 q 431 472 431 399 q 413 581 431 536 q 341 626 395 626 q 267 578 287 626 q 247 466 247 530 q 262 350 247 396 q 332 304 277 304 "},"\xB2":{x_min:22,x_max:465.0625,ha:494,o:"m 22 401 q 156 502 102 456 q 248 607 210 548 q 287 742 287 667 q 267 825 287 802 q 216 848 248 848 q 146 816 167 848 q 110 725 126 785 l 102 725 l 30 800 q 245 901 116 901 q 385 864 327 901 q 444 751 444 827 q 411 643 444 681 q 201 471 378 604 l 284 471 q 387 473 314 471 q 465 476 459 476 q 456 413 456 439 q 459 383 456 401 q 465 354 462 365 q 331 356 412 354 q 249 358 251 358 l 27 354 l 22 401 "},\u039A:{x_min:90,x_max:892.78125,ha:856,o:"m 334 716 l 334 515 l 569 787 q 635 866 619 845 q 682 932 651 886 l 767 926 q 817 929 784 926 q 870 932 851 932 q 687 746 790 851 q 503 554 585 641 l 623 377 q 892 0 753 179 l 753 5 q 664 2 727 5 q 595 0 600 0 q 484 190 545 98 q 334 404 424 281 l 334 193 q 348 0 334 94 q 270 2 325 0 q 212 5 215 5 l 90 0 q 99 236 90 69 q 108 461 108 402 q 103 623 108 515 q 99 787 99 731 l 90 932 q 157 927 113 932 q 219 922 201 922 q 282 925 252 922 q 342 932 312 927 q 338 831 342 907 q 334 716 334 755 "},\u00EB:{x_min:41,x_max:684.046875,ha:729,o:"m 482 98 q 566 112 532 98 q 643 160 600 126 l 661 151 q 643 96 652 125 q 628 40 634 66 q 521 -1 577 11 q 403 -15 466 -15 q 141 79 241 -15 q 41 336 41 173 q 137 586 41 490 q 386 683 234 683 q 608 601 532 683 q 684 373 684 520 l 684 332 l 267 332 q 325 165 267 232 q 482 98 383 98 m 233 976 q 300 948 272 976 q 328 878 328 920 q 303 811 328 839 q 236 784 278 784 q 166 811 194 784 q 138 878 138 838 q 166 947 138 918 q 233 976 194 976 m 493 976 q 560 948 532 976 q 588 878 588 920 q 562 811 588 838 q 496 784 536 784 q 427 811 455 784 q 399 878 399 838 q 426 946 399 917 q 493 976 454 976 m 478 411 q 481 444 481 422 q 459 566 481 513 q 377 620 438 620 q 292 562 318 620 q 267 437 267 505 l 267 411 l 478 411 "},e:{x_min:43,x_max:686.046875,ha:729,o:"m 484 95 q 566 110 531 95 q 644 161 601 125 l 662 154 q 640 84 647 105 q 629 40 634 62 q 522 -1 577 11 q 404 -15 468 -15 q 141 77 240 -15 q 43 336 43 170 q 138 585 43 488 q 387 683 234 683 q 609 602 533 683 q 686 375 686 522 l 684 332 l 269 332 q 326 162 269 230 q 484 95 384 95 m 480 411 l 482 444 q 459 567 482 513 q 379 622 437 622 q 293 565 318 622 q 269 438 269 509 l 269 411 l 480 411 "},\u03CC:{x_min:30,x_max:741,ha:774,o:"m 395 683 q 645 587 550 683 q 741 337 741 492 q 646 79 741 173 q 385 -15 552 -15 q 127 78 225 -15 q 30 333 30 172 q 129 590 30 498 q 395 683 228 683 m 538 953 q 591 1001 571 986 q 639 1017 611 1017 q 692 994 671 1017 q 713 943 713 972 q 694 897 713 915 q 643 863 675 878 l 420 755 l 352 755 l 538 953 m 269 174 q 305 85 275 119 q 386 52 335 52 q 464 85 436 52 q 503 172 491 119 q 510 237 506 194 q 515 336 515 279 q 510 431 515 391 q 503 494 506 472 q 464 581 491 548 q 385 615 436 615 q 291 563 315 615 q 261 459 267 512 q 256 333 256 407 q 269 174 256 248 "},J:{x_min:-37,x_max:356,ha:447,o:"m 214 926 q 293 929 237 926 q 356 932 349 932 q 349 680 356 857 q 342 450 342 502 q 344 314 342 411 q 346 213 346 218 l 346 105 q 249 -128 346 -36 q 10 -221 153 -221 l -24 -216 l -37 -143 l 13 -145 q 97 -94 76 -145 q 118 28 118 -44 l 118 219 q 110 619 118 352 q 103 931 103 886 l 214 926 "},"\xBB":{x_min:54.5625,x_max:587.890625,ha:629,o:"m 187 330 l 54 604 l 110 656 l 339 333 l 110 9 l 54 66 l 187 330 m 437 330 l 304 604 l 358 656 l 587 333 l 358 9 l 304 66 l 437 330 "},"\xA9":{x_min:72,x_max:1064,ha:1138,o:"m 1064 486 q 918 139 1064 285 q 570 -6 772 -6 q 220 139 369 -6 q 72 488 72 285 q 219 836 72 688 q 568 985 367 985 q 916 836 769 985 q 1064 486 1064 687 m 155 490 q 276 199 155 323 q 566 75 398 75 q 858 197 734 75 q 982 487 982 319 q 861 781 982 659 q 567 904 740 904 q 276 781 398 904 q 155 490 155 658 m 683 597 q 649 666 683 637 q 573 696 616 696 q 470 636 501 696 q 439 499 439 577 q 468 354 439 421 q 563 288 497 288 q 687 397 664 288 l 815 397 q 735 247 805 303 q 570 191 666 191 q 374 273 448 191 q 301 481 301 356 q 371 696 301 604 q 559 788 441 788 q 726 737 655 788 q 808 597 796 686 l 683 597 "},\u03CE:{x_min:30,x_max:1059,ha:1093,o:"m 335 -15 q 111 79 192 -15 q 30 320 30 173 q 72 504 30 420 q 192 666 114 588 q 297 661 237 661 q 347 663 319 661 q 390 666 374 665 q 247 280 247 498 q 269 123 247 194 q 358 52 291 52 q 421 86 399 52 q 443 165 443 121 l 443 291 q 441 415 443 379 q 435 512 440 451 q 511 505 499 505 q 544 505 522 505 q 608 508 579 505 q 657 512 636 511 q 648 402 652 465 q 644 289 644 340 q 644 237 644 258 q 650 165 644 215 q 669 85 650 119 q 730 52 688 52 q 821 122 798 52 q 844 279 844 192 q 807 481 844 386 q 700 666 771 576 q 746 662 724 663 q 793 661 767 661 q 846 663 812 661 q 898 666 881 666 q 1016 508 974 594 q 1059 322 1059 422 q 974 83 1059 182 q 753 -15 890 -15 q 630 13 685 -15 q 545 100 575 41 q 459 14 516 44 q 335 -15 402 -15 m 684 953 q 737 1001 717 986 q 786 1017 757 1017 q 838 994 817 1017 q 859 943 859 972 q 840 897 859 915 q 790 863 821 878 l 567 755 l 498 755 l 684 953 "},"\u2265":{x_min:170.828125,x_max:965,ha:1139,o:"m 965 571 l 965 455 l 173 199 l 173 338 l 732 514 l 173 690 l 173 830 l 965 571 m 965 132 l 965 0 l 170 0 l 170 132 l 965 132 "},"^":{x_min:-3,x_max:425,ha:438,o:"m 148 1003 l 270 1003 l 425 755 l 357 755 l 210 878 l 62 755 l -3 755 l 148 1003 "},"\xAB":{x_min:40.28125,x_max:575,ha:629,o:"m 193 336 l 326 62 l 272 9 l 40 333 l 272 656 l 325 599 l 193 336 m 443 336 l 575 62 l 520 9 l 288 333 l 520 656 l 575 599 l 443 336 "},D:{x_min:87,x_max:987,ha:1032,o:"m 104 221 l 104 465 q 100 742 104 650 q 89 932 97 834 l 216 929 l 283 929 l 442 929 q 532 929 488 929 q 622 929 576 929 q 894 797 802 912 q 987 496 987 682 q 832 110 987 221 q 389 -1 677 -1 l 201 -1 l 87 -1 q 98 119 93 60 q 104 221 104 178 m 415 89 q 659 192 580 89 q 738 468 738 296 q 663 746 738 653 q 407 839 588 839 l 334 839 l 330 605 l 334 98 q 374 91 353 94 q 415 89 394 89 "},w:{x_min:6.9375,x_max:1048.625,ha:1042,o:"m 302 6 q 270 5 281 6 q 215 0 258 4 l 6 667 q 77 663 33 667 q 129 659 120 659 q 197 663 154 659 q 248 667 240 667 q 359 238 293 457 l 440 505 l 484 667 q 540 663 502 667 q 580 659 577 659 q 637 663 598 659 q 677 667 676 667 q 712 520 695 586 q 748 383 729 454 l 790 238 l 855 475 q 875 555 862 501 q 899 667 888 609 q 939 662 917 665 q 973 659 961 659 q 1017 662 998 659 q 1048 667 1036 665 l 956 423 l 812 0 q 759 4 776 3 q 727 6 743 6 q 678 3 712 6 q 643 0 644 0 l 562 288 l 522 423 q 391 0 455 221 q 336 4 354 3 q 302 6 318 6 "},$:{x_min:43,x_max:697,ha:749,o:"m 43 79 q 104 254 76 165 l 128 254 q 202 128 150 177 q 331 79 254 79 l 331 365 q 108 474 168 409 q 49 623 49 539 q 130 807 49 737 q 331 889 211 878 q 322 1010 331 949 q 344 1006 329 1008 q 371 1002 360 1004 q 393 1004 382 1004 q 417 1010 403 1005 q 410 955 412 983 q 409 892 409 926 q 555 868 502 880 q 662 823 607 855 q 601 665 626 746 l 570 665 q 409 817 538 789 l 409 554 q 637 445 577 511 q 697 289 697 379 q 615 91 697 168 q 409 0 534 15 l 409 -62 q 409 -97 409 -84 q 411 -136 410 -109 l 368 -133 l 325 -136 q 328 -69 328 -112 q 331 0 329 -26 q 43 79 173 0 m 331 817 q 243 778 278 817 q 209 686 209 739 q 245 615 209 644 q 331 577 282 586 l 331 817 m 534 212 q 499 299 534 267 q 405 347 464 330 l 405 78 q 497 123 461 89 q 534 212 534 157 "},"\u2027":{x_min:105,x_max:343,ha:447,o:"m 223 654 q 306 617 270 654 q 343 533 343 581 q 306 451 343 486 q 223 417 270 417 q 139 450 174 417 q 105 534 105 483 q 139 619 105 584 q 223 654 174 654 "},"\\":{x_min:-31.953125,x_max:422,ha:383,o:"m -31 1024 l 49 1024 l 422 -126 l 338 -126 l -31 1024 "},\u0399:{x_min:94,x_max:354,ha:447,o:"m 111 402 q 107 716 111 609 q 94 932 103 822 q 161 925 124 929 q 220 922 198 922 q 292 927 245 922 q 353 931 339 932 q 340 716 343 819 q 337 465 337 613 q 340 221 337 326 q 354 0 344 116 q 273 2 330 0 q 214 5 216 5 l 95 0 q 107 199 103 88 q 111 402 111 311 "},\u038E:{x_min:-28,x_max:1295.609375,ha:1247,o:"m 635 650 q 566 772 622 672 q 469 931 509 872 l 591 926 q 683 929 619 926 q 755 931 748 931 q 844 740 803 825 q 941 554 885 656 q 1040 730 991 636 q 1135 931 1088 825 l 1210 926 q 1252 929 1224 926 q 1295 931 1280 931 q 1142 689 1213 812 q 997 420 1072 566 l 1001 143 l 1007 0 l 913 5 l 755 0 q 761 138 755 50 q 768 237 768 226 l 768 402 l 635 650 m 158 953 q 211 1001 191 986 q 259 1017 231 1017 q 312 994 291 1017 q 333 943 333 972 q 314 897 333 916 q 264 863 295 878 l 40 755 l -28 755 l 158 953 "},"\u2019":{x_min:70.828125,x_max:337.5,ha:374,o:"m 70 528 l 151 848 q 183 919 158 889 q 244 949 208 949 q 310 924 283 949 q 337 862 337 900 q 331 829 337 845 q 316 797 326 813 l 111 511 l 70 528 "},\u039D:{x_min:86,x_max:930.453125,ha:1010,o:"m 101 444 q 97 645 101 523 q 94 787 94 768 l 90 931 l 177 926 l 268 934 q 526 623 395 775 q 792 327 657 470 l 792 584 q 787 766 792 643 q 782 931 782 888 q 825 927 811 929 q 854 926 838 926 q 890 927 876 926 q 930 934 904 929 q 919 838 923 889 q 915 738 915 788 q 913 461 915 600 q 911 184 912 322 q 913 106 911 147 q 920 0 915 66 q 876 4 901 2 q 838 6 851 6 q 794 4 812 6 q 756 0 777 2 q 495 309 631 151 q 220 618 359 466 l 220 241 l 227 0 q 194 4 213 1 q 159 6 175 6 q 119 4 134 6 q 86 0 103 2 q 97 208 94 105 q 101 444 101 311 "},"-":{x_min:58.71875,x_max:386.5,ha:447,o:"m 65 334 q 62 383 65 352 q 58 422 58 415 l 386 422 l 379 333 l 386 247 l 58 247 q 62 296 58 265 q 65 334 65 327 "},Q:{x_min:40,x_max:1098.328125,ha:1129,o:"m 40 456 q 190 819 40 689 q 577 949 340 949 q 945 829 804 949 q 1086 486 1086 709 q 1004 185 1086 313 q 759 10 922 56 l 883 -72 q 1098 -182 979 -129 l 1098 -200 q 1005 -241 1053 -216 q 906 -294 956 -265 q 737 -160 824 -226 q 533 -13 649 -94 q 174 110 308 -13 q 40 456 40 233 m 562 72 q 773 193 706 72 q 840 472 840 315 q 773 741 840 623 q 566 860 706 860 q 354 741 421 860 q 287 465 287 622 q 353 192 287 312 q 562 72 420 72 "},\u03C2:{x_min:48,x_max:647,ha:689,o:"m 421 600 q 306 538 350 600 q 263 404 263 477 q 357 244 263 304 q 532 151 445 197 q 627 -17 627 88 q 527 -214 627 -140 q 302 -288 427 -288 q 291 -198 302 -247 q 318 -203 296 -198 q 353 -207 341 -207 q 440 -176 402 -207 q 484 -95 478 -145 q 324 60 484 -17 q 106 179 164 139 q 48 353 48 219 q 153 590 48 500 q 409 681 259 681 q 527 666 470 681 q 647 623 584 651 q 616 532 626 561 q 597 465 606 504 l 559 465 q 513 563 546 526 q 421 600 479 600 "},M:{x_min:32,x_max:1165,ha:1217,o:"m 105 465 l 168 932 q 211 927 190 929 q 261 926 231 926 q 309 929 277 926 q 358 932 341 932 q 441 709 409 790 q 503 559 473 629 q 608 316 533 488 l 778 690 q 872 932 834 808 q 919 929 887 932 q 966 926 951 926 q 1027 929 1006 926 q 1059 932 1048 932 l 1105 473 q 1130 240 1117 354 q 1165 0 1144 127 q 1095 3 1140 0 q 1041 6 1051 6 q 969 3 1015 6 q 915 0 924 0 q 895 291 915 142 l 865 616 q 731 317 802 480 q 597 0 661 153 l 551 0 l 500 0 q 409 218 465 87 q 317 426 352 349 q 236 605 282 504 l 196 229 q 185 108 190 173 q 180 0 180 44 q 134 3 165 0 q 100 6 102 6 q 60 4 77 6 q 32 0 43 1 q 105 465 77 258 "},\u03A8:{x_min:84,x_max:1097.890625,ha:1185,o:"m 307 708 q 307 639 307 686 q 307 569 307 593 q 342 407 307 462 q 478 353 377 353 l 480 484 q 472 735 480 568 q 464 932 464 903 q 530 925 494 929 q 587 922 566 922 q 658 927 612 922 q 719 931 705 932 q 712 777 719 877 q 706 666 706 677 l 702 353 q 800 378 761 353 q 853 457 839 404 q 871 582 868 511 q 875 670 875 652 q 868 811 875 720 q 861 931 861 901 q 926 927 881 931 q 984 922 970 922 q 1039 926 1002 922 q 1097 930 1077 930 q 1093 869 1094 904 q 1092 801 1092 834 l 1092 738 l 1092 687 l 1092 610 q 992 354 1092 432 q 702 261 892 277 q 710 126 702 219 q 719 0 719 33 q 646 3 691 0 q 591 6 601 6 q 516 3 562 6 q 464 0 470 0 q 472 134 464 40 q 480 261 480 229 q 188 358 287 261 q 90 651 90 455 l 90 804 l 90 820 q 84 930 90 881 q 139 926 102 930 q 196 922 177 922 q 257 927 219 922 q 322 931 295 931 q 311 813 316 876 q 307 708 307 750 "},C:{x_min:43,x_max:891.84375,ha:900,o:"m 587 856 q 363 744 442 856 q 285 479 285 632 q 361 202 285 322 q 586 82 437 82 q 740 108 668 82 q 855 194 812 135 l 877 184 q 861 120 868 152 q 846 45 854 88 q 710 -2 786 12 q 555 -18 634 -18 q 184 109 326 -18 q 43 464 43 236 q 190 819 43 690 q 569 949 338 949 q 723 932 652 949 q 891 876 793 915 q 866 793 879 840 q 846 710 852 746 l 827 710 q 734 818 799 781 q 587 856 669 856 "},\u0153:{x_min:36,x_max:1154.0625,ha:1197,o:"m 387 -15 q 131 79 227 -15 q 36 334 36 173 q 131 586 36 490 q 383 683 226 683 q 630 606 515 683 q 735 664 677 645 q 859 683 792 683 q 1076 600 999 683 q 1154 377 1154 517 l 1152 332 l 736 332 q 793 165 736 232 q 951 98 851 98 q 1111 160 1042 98 l 1127 151 q 1111 101 1116 119 q 1094 40 1105 83 q 990 -1 1049 11 q 870 -15 931 -15 q 735 2 794 -15 q 628 68 676 20 q 521 4 584 23 q 387 -15 458 -15 m 949 411 l 949 445 q 921 580 949 541 q 844 620 893 620 q 756 557 777 620 q 736 411 736 494 l 949 411 m 276 171 q 315 80 286 115 q 395 45 344 45 q 453 62 424 45 q 498 115 481 79 q 520 204 514 151 q 526 329 526 257 q 516 475 526 408 q 476 577 506 542 q 394 612 445 612 q 294 552 327 612 q 271 470 279 520 q 264 329 264 420 q 266 244 264 269 q 276 171 268 219 "},"!":{x_min:103,x_max:341,ha:444,o:"m 222 221 q 306 187 271 221 q 341 104 341 154 q 306 19 341 54 q 222 -15 271 -15 q 138 19 173 -15 q 103 103 103 53 q 137 186 103 151 q 222 221 172 221 m 113 818 q 142 910 113 872 q 224 949 171 949 q 304 921 274 949 q 334 847 334 894 q 325 741 334 796 q 306 628 317 687 l 276 462 q 253 296 259 369 l 193 296 q 113 818 153 557 "},\u00E7:{x_min:36,x_max:622,ha:660,o:"m 423 600 q 306 528 346 600 q 267 373 267 457 q 313 176 267 265 q 459 88 359 88 q 542 99 500 88 q 612 133 584 111 l 622 126 l 590 19 q 502 -6 551 1 q 406 -15 453 -15 q 141 76 247 -15 q 36 325 36 168 q 140 583 36 485 q 408 681 245 681 q 622 637 519 681 q 590 459 602 550 l 565 459 q 519 561 555 522 q 423 600 483 600 m 175 -203 q 276 -231 251 -226 q 332 -236 301 -236 q 381 -223 361 -236 q 402 -184 402 -211 q 384 -144 402 -161 q 341 -128 366 -128 q 319 -130 328 -128 q 301 -135 310 -132 l 301 2 l 358 2 l 358 -77 l 418 -75 q 496 -108 465 -80 q 527 -183 527 -136 q 487 -274 527 -239 q 388 -310 448 -310 q 268 -299 326 -310 q 151 -265 211 -289 l 175 -203 "},"{":{x_min:104,x_max:587.328125,ha:683,o:"m 587 844 l 540 844 q 468 821 487 844 q 446 785 449 798 q 443 752 443 773 l 443 712 l 443 552 q 416 424 443 464 q 304 353 390 383 q 413 287 383 335 q 443 155 443 238 l 443 -5 q 465 -105 443 -74 q 555 -136 488 -136 l 587 -136 l 587 -277 l 481 -275 q 343 -234 396 -268 q 280 -122 289 -200 l 280 -50 l 280 116 q 246 238 280 194 q 137 283 212 283 l 104 283 l 104 422 q 240 458 201 422 q 280 588 280 494 l 280 756 l 280 831 q 355 951 292 919 q 517 983 417 983 l 587 983 l 587 844 "},X:{x_min:-1.390625,x_max:801.390625,ha:782,o:"m 169 241 l 301 436 l 15 932 q 94 929 38 932 q 155 926 150 926 q 235 929 179 926 q 298 932 291 932 q 314 893 308 907 q 358 802 320 880 l 445 638 q 547 805 513 748 q 613 932 581 862 q 655 929 627 932 q 698 926 683 926 q 740 929 712 926 q 783 932 768 932 q 685 800 709 833 q 616 701 661 766 l 502 531 l 801 0 q 713 2 776 0 q 647 5 651 5 l 516 0 l 470 108 l 356 326 q 265 174 316 263 q 170 0 215 84 q 118 3 154 0 q 77 6 81 6 q 31 4 52 6 q -1 0 11 1 l 169 241 "},\u00F4:{x_min:32,x_max:743,ha:775,o:"m 395 683 q 647 588 551 683 q 743 337 743 494 q 648 79 743 173 q 387 -15 554 -15 q 129 78 227 -15 q 32 333 32 172 q 130 590 32 497 q 395 683 229 683 m 325 1003 l 450 1003 l 601 755 l 534 755 l 387 878 l 238 755 l 174 755 l 325 1003 m 269 174 q 307 85 277 120 q 387 50 337 50 q 466 84 437 50 q 500 156 494 119 q 511 215 507 194 q 517 335 517 271 q 511 450 517 395 q 500 509 507 471 q 466 582 494 548 q 387 616 439 616 q 294 564 319 616 q 263 459 269 513 q 258 333 258 406 q 260 244 258 270 q 269 174 262 217 "},"#":{x_min:30,x_max:1019,ha:1049,o:"m 619 974 l 522 698 l 684 698 l 781 974 l 930 975 l 831 698 l 1019 699 l 970 564 l 783 563 l 725 403 l 920 403 l 873 271 l 678 271 l 579 -5 l 432 -5 l 530 271 l 367 271 l 270 -5 l 121 -5 l 220 270 l 30 271 l 79 403 l 268 403 l 326 563 l 127 564 l 174 699 l 374 698 l 472 975 l 619 974 m 414 402 l 582 402 l 639 563 l 470 563 l 414 402 "},\u03B9:{x_min:80,x_max:314.71875,ha:396,o:"m 91 126 l 91 543 l 80 667 q 139 661 105 664 q 196 658 173 658 q 264 661 238 658 q 314 666 291 663 q 304 587 307 616 q 301 523 301 558 l 301 113 q 302 72 301 88 q 314 0 304 56 l 195 4 l 81 0 q 87 67 84 30 q 91 126 91 104 "},\u0386:{x_min:-28,x_max:983.109375,ha:963,o:"m 242 322 q 326 529 276 400 q 411 751 377 659 q 484 948 445 843 l 553 944 l 623 948 q 805 450 717 684 q 983 0 892 215 l 849 4 l 713 0 l 684 91 l 630 259 q 531 261 581 259 q 433 264 481 262 l 335 259 q 245 0 295 134 l 155 4 l 103 0 l 242 322 m 158 953 q 211 1001 191 986 q 259 1017 231 1017 q 312 994 291 1017 q 333 943 333 972 q 314 897 333 916 q 265 863 295 878 l 40 755 l -28 755 l 158 953 m 487 368 l 597 368 q 549 509 573 446 q 488 662 526 572 q 376 370 428 519 l 487 368 "},")":{x_min:72.21875,x_max:383,ha:449,o:"m 227 366 q 191 656 227 521 q 76 906 156 792 l 120 949 q 317 691 252 826 q 383 382 383 555 q 317 63 383 201 q 115 -201 252 -75 l 72 -158 q 191 81 156 -48 q 227 366 227 211 "},\u03B5:{x_min:55,x_max:599,ha:657,o:"m 512 502 q 472 579 502 548 q 396 611 442 611 q 323 577 352 611 q 295 499 295 544 q 317 429 295 460 q 377 394 340 399 l 449 394 l 449 373 q 449 336 449 349 q 449 316 449 323 q 413 319 438 319 q 322 281 362 319 q 283 195 283 244 q 323 101 283 144 q 412 59 363 59 q 498 88 461 59 q 571 167 535 117 l 599 155 q 593 130 595 144 q 592 104 592 115 q 592 82 592 90 q 599 53 592 74 q 351 -15 485 -15 q 145 30 236 -15 q 55 176 55 75 q 105 289 55 244 q 232 360 155 335 q 127 421 166 385 q 88 516 88 456 q 165 643 88 603 q 340 683 243 683 q 592 612 479 683 q 565 556 576 583 q 551 502 554 530 l 512 502 "},\u0394:{x_min:11,x_max:958.328125,ha:972,o:"m 490 926 q 531 928 509 926 q 566 932 554 930 q 690 599 633 746 q 815 296 747 452 q 958 0 884 140 q 720 3 879 0 q 481 8 562 8 q 247 3 404 8 q 11 0 90 0 q 234 470 126 223 q 415 932 342 716 q 448 928 429 930 q 490 926 468 926 m 314 373 q 217 127 262 259 q 425 118 314 118 q 542 122 468 118 q 636 127 616 127 q 598 232 616 184 q 538 391 580 280 l 433 645 l 314 373 "},\u00E2:{x_min:44,x_max:706.78125,ha:706,o:"m 237 -15 q 98 35 153 -15 q 44 169 44 86 q 212 352 44 301 q 401 421 380 403 q 410 439 410 432 q 373 539 410 502 q 275 577 337 577 q 140 511 185 577 l 135 511 l 115 585 q 230 657 164 632 q 365 683 296 683 q 543 623 479 683 q 608 452 608 564 l 604 213 q 604 166 604 184 q 608 123 604 148 q 625 87 612 99 q 658 76 638 76 q 679 80 666 76 q 702 90 691 84 l 706 40 q 643 1 676 14 q 566 -15 610 -10 q 482 5 520 -15 q 421 64 443 25 q 237 -15 351 -15 m 291 1003 l 413 1003 l 566 755 l 501 755 l 350 878 l 203 755 l 138 755 l 291 1003 m 240 200 q 261 128 240 158 q 321 99 282 99 q 388 131 367 99 q 410 211 410 164 l 410 352 q 287 302 335 338 q 240 200 240 267 "},"}":{x_min:93,x_max:579,ha:683,o:"m 126 983 q 323 955 243 983 q 403 831 403 927 l 403 756 l 403 588 q 423 478 403 512 q 473 434 443 444 q 539 423 504 424 q 579 422 574 422 l 579 283 q 442 249 481 283 q 403 116 403 216 l 403 -50 q 373 -204 403 -147 q 284 -267 343 -260 q 179 -275 225 -274 q 93 -277 133 -277 l 93 -137 q 201 -121 163 -137 q 240 -43 240 -105 l 240 -4 l 240 155 q 269 285 240 241 q 380 353 298 328 q 268 421 296 378 q 240 553 240 463 l 240 713 q 227 805 240 771 q 166 844 215 838 l 93 844 l 93 983 l 126 983 "},"\u2030":{x_min:28,x_max:1618,ha:1647,o:"m 265 910 q 434 844 369 910 q 500 672 500 779 q 435 496 500 562 q 258 431 370 431 q 91 498 154 431 q 28 669 28 565 q 93 843 28 776 q 265 910 158 910 m 831 1015 l 917 1014 l 272 -125 l 184 -125 l 831 1015 m 850 463 q 1020 401 955 463 q 1085 230 1085 339 q 1023 51 1085 117 q 846 -15 961 -15 q 678 51 743 -15 q 613 222 613 118 q 676 398 613 333 q 850 463 739 463 m 1383 463 q 1554 400 1490 463 q 1618 229 1618 337 q 1556 51 1618 117 q 1378 -15 1494 -15 q 1209 51 1274 -15 q 1144 222 1144 118 q 1209 396 1144 329 q 1383 463 1274 463 m 780 112 q 798 57 780 83 q 847 31 817 31 q 895 59 874 31 q 916 114 916 87 q 922 222 922 162 q 922 275 922 248 q 915 338 917 312 q 896 389 912 364 q 848 414 880 414 q 813 404 828 414 q 792 375 797 394 q 777 312 781 347 q 773 241 773 276 l 773 222 q 773 183 773 201 q 780 112 774 165 m 196 561 q 214 505 196 532 q 261 478 232 478 q 297 489 280 478 q 323 525 314 501 q 335 586 332 548 q 339 669 339 625 q 337 723 339 697 q 332 780 336 749 q 311 836 327 811 q 264 861 296 861 q 204 820 222 861 q 191 752 194 786 q 188 669 188 719 q 196 561 188 615 m 1315 112 q 1333 56 1315 82 q 1381 31 1351 31 q 1417 42 1402 31 q 1442 76 1433 53 q 1454 138 1451 100 q 1458 222 1458 176 q 1458 275 1458 248 q 1449 344 1453 312 q 1426 395 1445 376 q 1383 414 1408 414 q 1327 379 1338 414 q 1311 301 1315 344 q 1307 222 1307 258 q 1308 164 1307 190 q 1315 112 1309 139 "},\u00C4:{x_min:-28,x_max:848.390625,ha:829,o:"m 109 323 q 187 512 148 413 q 274 740 225 611 q 350 948 323 870 l 420 945 l 492 948 q 666 463 583 687 q 848 0 749 240 l 718 2 l 579 0 l 551 91 l 497 259 q 399 261 448 259 q 300 264 349 262 l 202 259 l 113 0 q 74 2 95 2 q 42 2 53 2 l 21 2 l -28 0 l 109 323 m 284 1242 q 351 1214 323 1242 q 380 1148 380 1187 q 353 1079 380 1108 q 286 1050 327 1050 q 216 1077 245 1050 q 187 1148 187 1105 q 215 1214 187 1187 q 284 1242 243 1242 m 543 1242 q 611 1215 583 1242 q 639 1148 639 1189 q 613 1078 639 1107 q 546 1050 587 1050 q 478 1077 507 1050 q 449 1148 449 1105 q 476 1214 449 1186 q 543 1242 504 1242 m 352 368 l 462 368 q 414 511 437 450 q 350 662 390 571 q 243 370 296 516 l 352 368 "},a:{x_min:47,x_max:708.15625,ha:706,o:"m 237 -15 q 100 35 154 -15 q 47 169 47 86 q 213 352 47 301 q 403 422 380 404 q 410 440 410 433 q 373 541 410 504 q 273 579 337 579 q 197 561 232 579 q 140 509 162 544 l 135 509 l 114 585 q 364 683 218 683 q 541 624 478 683 q 604 452 604 566 l 604 214 q 604 169 604 191 q 606 119 604 148 q 656 76 616 76 q 677 79 665 76 q 702 89 690 83 l 708 40 q 563 -11 644 -11 q 479 7 516 -11 q 421 64 441 26 q 339 4 387 23 q 237 -15 291 -15 m 240 198 q 261 127 240 158 q 322 97 282 97 q 388 131 367 97 q 410 212 410 165 l 410 351 q 287 301 334 337 q 240 198 240 266 "},"\u2014":{x_min:226.390625,x_max:1138.890625,ha:1365,o:"m 226 421 l 1138 421 l 1138 278 l 226 278 l 226 421 "},"=":{x_min:169.4375,x_max:968.0625,ha:1138,o:"m 968 615 l 968 484 l 169 484 l 169 615 l 968 615 m 968 329 l 968 196 l 169 196 l 169 329 l 968 329 "},N:{x_min:86,x_max:930.453125,ha:1010,o:"m 101 444 q 97 645 101 523 q 94 787 94 768 l 90 931 l 177 926 l 268 934 q 526 623 395 775 q 792 327 657 470 l 792 584 q 787 766 792 643 q 782 931 782 888 q 825 927 811 929 q 854 926 838 926 q 890 927 876 926 q 930 934 904 929 q 919 838 923 889 q 915 738 915 788 q 913 461 915 600 q 911 184 912 322 q 913 106 911 147 q 920 0 915 66 q 876 4 901 2 q 838 6 851 6 q 794 4 812 6 q 756 0 777 2 q 495 309 631 151 q 220 618 359 466 l 220 241 l 227 0 q 194 4 213 1 q 159 6 175 6 q 119 4 134 6 q 86 0 103 2 q 97 208 94 105 q 101 444 101 311 "},\u03C1:{x_min:48,x_max:759,ha:793,o:"m 160 -366 q 48 -374 109 -366 q 52 -291 48 -343 q 56 -223 56 -239 l 56 169 l 48 314 q 139 585 48 488 q 403 683 231 683 q 661 589 563 683 q 759 336 759 495 q 681 89 759 194 q 465 -15 603 -15 q 266 65 346 -15 l 264 -208 q 265 -268 264 -241 q 275 -373 267 -295 q 197 -367 220 -368 q 160 -366 173 -366 m 275 347 q 284 196 275 264 q 324 109 295 142 q 404 77 352 77 q 494 120 473 77 q 522 212 514 164 q 531 347 531 260 q 526 431 531 388 q 517 511 522 473 q 483 582 512 549 q 401 615 453 615 q 309 566 340 615 q 279 452 279 517 q 275 372 275 412 l 275 347 "},"2":{x_min:33,x_max:706.625,ha:749,o:"m 33 75 q 236 249 152 168 q 379 431 321 330 q 438 652 438 533 q 413 772 438 723 q 325 822 389 822 q 220 767 251 822 q 170 616 189 712 l 155 616 q 44 743 107 691 q 189 867 105 823 q 373 911 273 911 q 586 847 500 911 q 673 658 673 783 q 619 480 673 548 q 304 196 566 411 l 430 195 l 553 195 l 706 201 q 689 94 689 148 q 696 38 689 66 q 706 0 703 11 q 514 3 630 0 q 380 7 399 7 q 181 3 302 7 q 44 0 60 0 l 33 75 "},\u00FC:{x_min:75,x_max:722,ha:808,o:"m 292 -15 q 142 41 202 -15 q 83 188 83 98 l 83 337 q 79 508 83 394 q 75 666 75 623 q 134 660 108 662 q 185 658 160 658 q 240 660 209 658 q 300 666 271 663 q 290 454 290 569 l 290 384 l 290 279 q 316 146 290 181 q 394 111 343 111 q 467 147 441 111 q 501 234 493 184 l 501 330 q 498 498 501 385 q 495 666 495 610 q 554 660 518 663 q 613 658 589 658 q 671 660 640 658 q 722 666 701 663 q 717 479 722 598 q 712 326 712 359 q 717 156 712 270 q 722 1 722 43 l 617 4 l 511 1 l 511 96 q 410 15 468 46 q 292 -15 353 -15 m 273 976 q 338 948 310 976 q 366 878 366 920 q 339 811 366 839 q 274 784 313 784 q 205 811 234 784 q 176 878 176 839 q 204 947 176 918 q 273 976 232 976 m 531 976 q 599 948 571 976 q 627 878 627 920 q 599 812 627 841 q 533 784 572 784 q 464 811 495 784 q 434 878 434 839 q 462 947 434 918 q 531 976 490 976 "},Z:{x_min:25,x_max:831.953125,ha:831,o:"m 25 54 q 186 311 81 142 q 354 582 291 480 q 495 813 418 685 l 294 813 q 98 801 186 813 l 105 852 q 98 932 105 894 l 444 926 q 657 928 509 926 q 815 931 805 931 l 815 903 q 573 517 695 715 q 331 119 451 320 l 566 119 q 706 122 654 119 q 831 136 758 125 q 826 43 826 96 l 827 0 q 606 3 761 0 q 443 6 451 6 q 203 3 370 6 q 25 0 36 0 l 25 54 "},u:{x_min:75,x_max:722,ha:808,o:"m 292 -15 q 141 41 200 -15 q 83 189 83 97 l 83 336 q 79 508 83 393 q 75 667 75 624 q 140 659 109 662 q 185 656 171 656 q 251 661 218 656 q 299 666 285 665 l 290 454 l 290 382 l 290 279 q 316 147 290 182 q 393 112 343 112 q 464 146 441 112 q 497 234 488 181 l 501 331 q 497 498 501 387 q 493 667 493 610 q 563 659 531 662 q 612 656 594 656 q 672 661 640 656 q 722 666 703 665 q 716 495 722 609 q 711 326 711 381 q 716 163 711 272 q 722 1 722 55 l 616 4 l 511 1 l 511 94 q 411 15 470 45 q 292 -15 353 -15 "},k:{x_min:80,x_max:732.765625,ha:756,o:"m 93 550 q 86 827 93 648 q 80 1024 80 1005 q 184 1018 125 1018 q 307 1023 252 1018 q 301 812 307 959 q 296 602 296 665 l 296 389 q 424 511 368 445 q 545 666 481 576 q 595 665 562 666 q 645 663 628 663 l 709 666 l 714 656 l 628 576 l 475 425 q 636 154 543 304 l 732 0 q 661 3 706 0 q 607 6 616 6 q 537 3 580 6 q 487 0 494 0 q 386 174 441 83 q 296 329 332 266 q 299 141 296 273 q 302 0 302 9 l 191 4 l 80 0 q 86 320 80 113 q 93 550 93 526 "},\u0397:{x_min:91,x_max:955,ha:1049,o:"m 105 286 l 105 459 q 101 650 105 533 q 98 784 98 766 l 91 932 q 156 926 125 929 q 214 923 187 923 q 277 926 241 923 q 344 931 314 929 q 339 818 344 894 q 334 713 334 741 l 334 563 l 514 561 l 710 561 l 710 712 q 707 812 710 778 q 697 932 705 846 q 764 926 727 929 q 828 923 800 923 q 889 926 854 923 q 955 931 924 929 q 948 690 955 856 q 941 465 941 523 q 948 225 941 391 q 955 0 955 58 l 828 5 q 764 2 807 5 q 698 0 721 0 q 707 99 704 47 q 710 202 710 152 l 710 444 q 595 447 665 444 q 514 451 525 451 q 411 447 475 451 q 334 444 346 444 l 334 202 q 339 97 334 167 q 344 0 344 26 q 270 2 323 0 q 214 5 218 5 l 91 0 q 98 146 91 40 q 105 286 105 252 "},\u0391:{x_min:-29.171875,x_max:850,ha:829,o:"m 109 322 q 193 530 143 400 q 278 751 244 660 q 351 949 312 843 l 420 944 l 490 949 q 672 450 584 685 q 850 0 759 215 l 716 4 l 580 0 l 551 91 l 497 259 q 398 261 448 259 q 300 264 348 262 l 202 259 q 112 0 162 134 l 22 4 l -29 0 l 109 322 m 354 368 l 464 368 q 416 509 440 446 q 355 662 393 572 q 243 370 295 519 l 354 368 "},\u00DF:{x_min:84,x_max:776,ha:811,o:"m 198 4 l 84 1 q 87 120 84 45 q 91 212 91 195 l 91 352 l 91 651 q 167 928 91 832 q 420 1024 243 1024 q 603 985 522 1024 q 684 854 684 946 q 607 713 684 786 q 530 601 530 640 q 543 563 530 583 q 574 533 556 543 l 688 447 q 776 275 776 379 q 690 67 776 150 q 478 -15 605 -15 q 373 8 428 -15 l 403 161 l 417 161 q 461 88 435 113 q 535 64 488 64 q 600 91 574 64 q 626 157 626 118 q 504 316 626 219 q 377 476 383 413 q 459 650 377 547 q 542 822 542 754 q 511 908 542 873 q 428 943 481 943 q 327 892 361 943 q 294 770 294 841 q 296 495 294 602 q 301 238 298 387 q 304 1 304 88 l 198 4 "},\u00E9:{x_min:41,x_max:684.046875,ha:729,o:"m 482 98 q 566 112 532 98 q 643 160 600 126 l 661 151 q 643 96 652 125 q 628 40 634 66 q 521 -1 577 11 q 403 -15 466 -15 q 141 79 241 -15 q 41 336 41 173 q 137 586 41 490 q 386 683 234 683 q 608 601 532 683 q 684 373 684 520 l 684 332 l 267 332 q 325 165 267 232 q 482 98 383 98 m 409 951 q 459 1000 436 983 q 511 1017 481 1017 q 563 994 542 1017 q 585 943 585 971 q 565 895 585 915 q 515 861 545 875 l 292 754 l 223 754 l 409 951 m 478 411 q 481 444 481 422 q 459 566 481 513 q 377 620 438 620 q 292 562 318 620 q 267 437 267 505 l 267 411 l 478 411 "},s:{x_min:43,x_max:543,ha:583,o:"m 95 197 q 155 95 115 133 q 256 57 195 57 q 338 77 300 57 q 376 140 376 98 q 213 259 376 195 q 51 456 51 323 q 129 623 51 563 q 319 683 208 683 q 411 671 366 683 q 515 638 455 660 l 464 485 l 450 485 q 397 575 433 542 q 303 608 362 608 q 234 588 264 608 q 205 530 205 569 q 374 417 205 478 q 543 227 543 356 q 464 48 543 112 q 266 -15 386 -15 q 148 -6 201 -15 q 43 26 95 3 l 76 197 l 95 197 "},B:{x_min:91,x_max:773,ha:815,o:"m 109 208 l 109 465 q 105 714 109 605 q 91 932 102 823 l 250 929 l 417 929 q 655 881 560 929 q 751 707 751 834 q 692 566 751 618 q 542 503 634 515 l 542 491 q 704 431 636 491 q 773 276 773 372 q 678 69 773 138 q 438 0 584 0 l 250 4 q 152 2 211 4 q 91 0 92 0 q 103 104 97 51 q 109 208 109 158 m 519 698 q 479 803 519 763 q 374 844 440 844 l 335 839 q 331 687 331 766 l 331 540 q 466 578 413 540 q 519 698 519 617 m 380 87 q 490 137 450 87 q 531 258 531 187 q 484 392 531 338 q 360 446 437 446 l 331 446 l 331 276 l 335 91 l 380 87 "},"\u2026":{x_min:93,x_max:1053,ha:1182,o:"m 195 191 q 268 160 236 191 q 300 88 300 129 q 268 16 300 46 q 195 -13 237 -13 q 123 16 154 -13 q 93 88 93 45 q 123 160 93 129 q 195 191 154 191 m 575 191 q 647 160 615 191 q 679 88 679 129 q 647 16 679 46 q 575 -13 616 -13 q 501 16 532 -13 q 471 88 471 45 q 501 160 471 129 q 575 191 532 191 m 948 191 q 1021 160 989 191 q 1053 88 1053 129 q 1021 16 1053 46 q 948 -13 990 -13 q 876 16 907 -13 q 846 88 846 45 q 876 160 846 129 q 948 191 907 191 "},"?":{x_min:93,x_max:539,ha:597,o:"m 295 221 q 377 186 340 221 q 414 104 414 152 q 378 23 414 61 q 295 -15 343 -15 q 210 19 245 -15 q 175 103 175 53 q 211 183 175 146 q 295 221 247 221 m 433 288 q 378 277 411 280 q 339 275 344 275 q 201 329 261 275 q 142 459 142 383 q 238 620 142 530 q 335 777 335 709 q 310 838 335 812 q 252 864 286 864 q 175 838 211 864 q 119 775 138 813 l 101 777 q 93 891 101 843 q 294 949 181 949 q 467 890 395 949 q 539 730 539 832 q 429 554 539 644 q 320 407 320 464 q 338 363 320 378 q 386 349 357 349 q 421 353 403 349 q 448 358 439 357 l 433 288 "},H:{x_min:91,x_max:957,ha:1049,o:"m 105 284 l 105 461 q 101 651 105 534 q 98 787 98 768 l 91 932 q 153 927 107 932 q 222 922 200 922 q 288 926 252 922 q 345 932 324 930 q 336 827 339 886 q 334 712 334 769 l 334 564 l 515 560 l 710 564 l 710 712 q 699 932 710 833 q 767 927 721 932 q 829 922 813 922 q 895 927 851 922 q 956 932 940 932 q 943 702 947 829 q 939 461 939 576 q 942 217 939 306 q 957 0 945 128 q 883 3 930 0 q 829 6 837 6 q 755 3 804 6 q 698 0 706 0 q 707 97 704 35 q 710 201 710 158 l 710 445 q 599 447 676 445 q 515 450 522 450 l 334 445 l 334 201 q 336 88 334 120 q 345 0 338 56 q 278 2 322 0 q 215 5 234 5 q 153 2 194 5 q 91 0 111 0 q 98 146 91 40 q 105 284 105 252 "},\u03BD:{x_min:9,x_max:658,ha:694,o:"m 470 438 q 463 504 470 477 q 422 642 457 532 q 641 671 528 660 q 658 582 658 626 q 614 412 658 494 l 541 270 q 462 107 487 161 q 417 0 438 53 q 374 3 403 0 q 331 8 345 8 q 289 3 317 8 q 246 0 261 0 q 165 236 209 110 q 85 458 121 361 q 9 667 49 555 q 72 661 40 664 q 128 659 103 659 q 184 661 152 659 q 245 666 217 664 q 403 184 300 449 q 454 328 438 275 q 470 438 470 381 "},\u00EE:{x_min:-15,x_max:413,ha:396,o:"m 93 126 l 93 543 q 87 602 93 558 q 82 666 82 645 q 141 661 111 664 q 198 659 172 659 q 255 661 223 659 q 316 666 287 664 q 311 621 315 658 q 303 544 307 584 l 303 319 q 305 144 303 212 q 316 0 307 76 l 196 2 l 81 0 q 93 126 93 66 m 136 1003 l 258 1003 l 413 755 l 345 755 l 198 878 l 50 755 l -15 755 l 136 1003 "},c:{x_min:36,x_max:623.109375,ha:660,o:"m 421 600 q 306 530 344 600 q 268 376 268 461 q 313 177 268 266 q 459 88 359 88 q 539 99 498 88 q 608 135 580 111 l 617 126 l 587 21 q 500 -5 546 3 q 404 -15 454 -15 q 140 76 245 -15 q 36 324 36 168 q 140 583 36 484 q 406 683 245 683 q 623 638 514 683 q 607 570 617 620 q 587 462 596 520 l 562 462 q 515 561 550 522 q 421 600 480 600 "},"\xB6":{x_min:18,x_max:531,ha:590,o:"m 298 968 l 531 968 l 531 910 l 473 910 l 473 4 l 415 4 l 415 910 l 305 910 l 305 4 l 247 4 l 247 558 q 99 601 163 558 q 27 690 36 645 q 18 744 18 734 q 90 896 18 824 q 298 968 163 968 "},\u03B2:{x_min:82,x_max:753,ha:828,o:"m 91 -115 q 86 188 91 -19 q 82 493 82 397 q 85 654 82 597 q 102 796 88 711 q 205 951 115 882 q 421 1021 294 1021 q 626 953 540 1021 q 713 770 713 886 q 671 634 713 690 q 553 542 629 579 q 700 438 647 506 q 753 273 753 369 q 680 68 753 152 q 490 -15 608 -15 q 390 0 435 -15 q 298 50 345 16 l 298 -105 l 306 -371 q 246 -365 278 -368 q 192 -362 214 -362 q 138 -365 169 -362 q 82 -370 108 -368 q 86 -238 82 -327 q 91 -115 91 -148 m 372 572 q 474 623 445 572 q 503 757 503 674 q 484 897 503 839 q 403 956 466 956 q 332 908 354 956 q 305 807 310 861 q 299 683 300 752 q 298 551 298 613 l 298 269 q 320 131 298 188 q 412 75 343 75 q 501 135 477 75 q 525 273 525 195 q 496 431 525 377 q 372 486 467 486 l 372 572 "},\u039C:{x_min:32,x_max:1165,ha:1217,o:"m 105 465 l 168 932 q 211 927 190 929 q 261 926 231 926 q 309 929 277 926 q 358 932 341 932 q 441 709 409 790 q 503 559 473 629 q 608 316 533 488 l 778 690 q 872 932 834 808 q 919 929 887 932 q 966 926 951 926 q 1027 929 1006 926 q 1059 932 1048 932 l 1105 473 q 1130 240 1117 354 q 1165 0 1144 127 q 1095 3 1140 0 q 1041 6 1051 6 q 969 3 1015 6 q 915 0 924 0 q 895 291 915 142 l 865 616 q 731 317 802 480 q 597 0 661 153 l 551 0 l 500 0 q 409 218 465 87 q 317 426 352 349 q 236 605 282 504 l 196 229 q 185 108 190 173 q 180 0 180 44 q 134 3 165 0 q 100 6 102 6 q 60 4 77 6 q 32 0 43 1 q 105 465 77 258 "},\u038C:{x_min:-28,x_max:1364,ha:1407,o:"m 855 949 q 1223 829 1082 949 q 1364 486 1364 710 q 1220 114 1364 244 q 830 -15 1076 -15 q 454 107 591 -15 q 318 465 318 229 q 466 823 318 697 q 855 949 615 949 m 158 953 q 211 1001 191 986 q 259 1017 231 1017 q 312 994 291 1017 q 333 943 333 972 q 314 897 333 916 q 265 863 295 878 l 40 755 l -28 755 l 158 953 m 840 73 q 1051 194 984 73 q 1118 472 1118 315 q 1051 742 1118 624 q 844 860 984 860 q 631 742 698 860 q 565 465 565 624 q 631 193 565 313 q 840 73 698 73 "},\u0389:{x_min:-28,x_max:1333.109375,ha:1424,o:"m 482 284 l 482 460 q 478 651 482 534 q 474 787 474 768 l 468 931 q 530 927 484 931 q 599 922 577 922 q 665 926 629 922 q 722 931 701 930 q 713 827 716 886 q 711 711 711 769 l 711 563 l 891 560 l 1086 564 l 1086 712 q 1075 931 1086 833 q 1143 927 1097 931 q 1205 922 1190 922 q 1272 927 1227 922 q 1333 931 1316 931 q 1319 702 1323 829 q 1315 460 1315 576 q 1318 217 1315 306 q 1333 0 1321 128 q 1260 3 1306 0 q 1205 6 1213 6 q 1131 3 1180 6 q 1074 0 1083 0 q 1083 97 1080 35 q 1086 201 1086 158 l 1086 444 q 975 447 1052 444 q 891 450 898 450 l 711 444 l 711 201 q 713 88 711 120 q 722 0 715 56 q 655 2 699 0 q 592 5 611 5 q 530 2 571 5 q 468 0 488 0 q 475 146 468 40 q 482 284 482 252 m 158 953 q 211 1001 191 986 q 259 1017 231 1017 q 312 994 291 1017 q 333 943 333 972 q 314 897 333 916 q 265 863 295 878 l 40 755 l -28 755 l 158 953 "},"\u2022":{x_min:215.28125,x_max:805.5625,ha:1024,o:"m 512 803 q 718 714 631 803 q 805 505 805 626 q 719 299 805 387 q 512 212 633 212 q 301 298 387 212 q 215 505 215 384 q 303 714 215 626 q 512 803 391 803 "},"\xA5":{x_min:8,x_max:752,ha:764,o:"m 38 252 l 38 336 l 160 332 l 277 332 l 277 417 q 140 413 225 417 q 38 410 55 410 l 38 494 q 131 486 87 486 l 228 486 l 143 644 q 87 751 114 704 q 8 888 60 799 q 82 884 34 888 q 138 881 130 881 q 213 884 167 881 q 265 888 258 888 q 433 529 349 696 q 524 707 478 613 q 608 888 571 802 q 640 888 624 888 q 674 888 657 888 l 752 888 q 602 642 653 729 q 516 486 551 554 l 722 494 l 722 410 q 583 413 668 410 q 485 417 497 417 l 485 331 l 722 336 l 722 252 q 604 255 690 252 q 485 258 518 258 q 490 123 485 213 q 495 0 495 33 l 386 5 q 316 2 364 5 q 264 0 268 0 q 274 126 271 59 q 277 258 277 194 q 140 255 235 258 q 38 252 45 252 "},"(":{x_min:91,x_max:403.5,ha:449,o:"m 249 479 l 249 379 l 249 277 q 287 54 249 161 q 402 -158 326 -53 l 356 -201 q 158 57 225 -80 q 91 365 91 195 q 158 683 91 541 q 359 949 225 825 l 403 906 q 288 701 328 808 q 249 479 249 594 "},U:{x_min:82,x_max:910,ha:999,o:"m 211 926 q 275 929 232 926 q 338 932 318 932 q 325 681 329 826 q 321 421 321 536 q 373 175 321 241 q 521 110 425 110 q 678 161 611 110 q 755 278 746 212 q 768 419 765 344 q 771 547 771 494 q 754 931 771 761 l 812 926 l 910 932 q 903 769 910 882 q 896 615 896 655 l 896 480 q 896 427 896 462 q 896 375 896 391 q 793 82 896 180 q 494 -15 691 -15 q 211 55 323 -15 q 100 286 100 126 q 91 616 100 383 q 82 932 82 850 q 154 929 102 932 q 211 926 207 926 "},\u03B3:{x_min:0,x_max:713.890625,ha:700,o:"m 523 199 q 486 87 498 128 q 474 -62 474 47 q 477 -246 474 -135 q 481 -374 481 -357 q 407 -366 442 -368 q 326 -365 373 -365 l 250 -370 q 258 -204 250 -315 q 267 -72 267 -93 q 246 138 267 52 q 189 344 225 224 q 130 512 154 463 q 50 561 105 561 q 25 558 38 561 q 0 553 11 555 l 0 635 q 79 669 38 656 q 159 683 119 683 q 329 593 293 683 q 433 233 365 503 q 519 456 482 349 q 576 666 555 562 l 644 663 l 713 666 q 633 490 665 572 q 523 199 601 408 "},\u03B1:{x_min:30,x_max:827.21875,ha:878,o:"m 669 665 l 749 662 l 827 665 q 763 499 782 551 q 720 377 743 447 l 818 0 q 763 6 792 2 q 717 10 733 10 q 662 5 692 10 q 615 0 632 1 l 594 101 q 361 -15 501 -15 q 120 83 210 -15 q 30 334 30 182 q 123 583 30 484 q 368 683 217 683 q 515 647 449 683 q 633 547 582 612 q 651 601 640 563 q 669 665 662 638 m 383 614 q 313 588 343 614 q 276 523 283 562 q 260 434 265 484 q 256 333 256 385 q 269 174 256 249 q 305 87 275 122 q 385 52 335 52 q 509 144 473 52 q 546 340 546 236 q 522 504 546 428 q 455 597 498 580 q 383 614 411 614 "},F:{x_min:91,x_max:645.15625,ha:686,o:"m 109 465 q 105 710 109 620 q 91 932 102 800 l 357 926 q 520 929 406 926 q 645 932 635 932 l 638 871 q 645 810 638 844 q 524 815 607 810 q 415 820 442 820 l 339 820 q 337 663 339 778 q 335 546 335 548 l 634 557 l 629 494 l 634 431 q 462 437 573 431 q 335 443 350 443 l 335 236 q 337 106 335 149 q 348 0 339 62 l 219 2 l 91 0 q 105 209 102 102 q 109 465 109 316 "},"\xAD":{x_min:0,x_max:683.328125,ha:683,o:"m 0 421 l 683 421 l 683 278 l 0 278 l 0 421 "},":":{x_min:105,x_max:343,ha:447,o:"m 223 221 q 307 185 272 221 q 343 103 343 150 q 306 19 343 54 q 223 -15 270 -15 q 139 18 174 -15 q 105 103 105 51 q 139 186 105 151 q 223 221 174 221 m 223 654 q 306 617 270 654 q 343 532 343 581 q 306 450 343 485 q 223 416 270 416 q 139 449 174 416 q 105 534 105 482 q 139 619 105 584 q 223 654 174 654 "},\u03A7:{x_min:-1.390625,x_max:801.390625,ha:782,o:"m 169 241 l 301 436 l 15 932 q 94 929 38 932 q 155 926 150 926 q 235 929 179 926 q 298 932 291 932 q 314 893 308 907 q 358 802 320 880 l 445 638 q 547 805 513 748 q 613 932 581 862 q 655 929 627 932 q 698 926 683 926 q 740 929 712 926 q 783 932 768 932 q 685 800 709 833 q 616 701 661 766 l 502 531 l 801 0 q 713 2 776 0 q 647 5 651 5 l 516 0 l 470 108 l 356 326 q 265 174 316 263 q 170 0 215 84 q 118 3 154 0 q 77 6 81 6 q 31 4 52 6 q -1 0 11 1 l 169 241 "},"*":{x_min:91,x_max:588,ha:683,o:"m 154 520 q 128 571 139 550 q 91 634 117 593 q 186 665 139 650 q 284 698 234 680 q 190 734 242 716 q 91 765 139 751 q 154 879 125 816 l 310 750 l 298 808 l 275 949 l 339 947 l 405 948 l 368 745 l 525 879 q 588 765 553 822 q 398 698 499 737 q 490 664 441 680 q 588 634 539 648 q 557 581 574 612 q 525 520 540 551 l 370 650 q 389 528 381 580 q 404 443 397 476 l 337 446 l 273 446 l 310 650 l 154 520 "},"\xB0":{x_min:165,x_max:519,ha:683,o:"m 165 913 q 221 1032 165 980 q 351 1084 278 1084 q 469 1040 420 1084 q 519 926 519 996 q 464 804 519 853 q 335 755 409 755 q 214 799 264 755 q 165 913 165 844 m 241 905 q 268 832 241 863 q 338 801 295 801 q 414 837 388 801 q 441 927 441 874 q 416 1009 441 977 q 345 1042 392 1042 q 281 1018 310 1042 q 247 962 253 994 q 241 905 241 930 "},V:{x_min:-19.4375,x_max:856.953125,ha:818,o:"m 255 230 l -19 932 q 61 929 4 932 q 120 926 117 926 l 247 932 q 298 768 270 840 l 476 296 l 646 770 q 673 852 662 812 q 692 932 685 891 l 766 926 q 812 929 781 926 q 856 932 843 932 q 752 706 801 819 l 566 231 q 488 0 520 123 q 445 4 463 2 q 413 6 427 6 q 368 3 397 6 q 336 0 340 0 q 304 97 322 46 q 255 230 286 147 "},\u039E:{x_min:58.328125,x_max:816.671875,ha:876,o:"m 438 190 q 653 193 518 190 q 816 197 788 197 q 812 124 812 160 l 812 99 q 812 51 812 74 q 816 0 812 27 q 629 4 754 0 q 438 8 504 8 q 248 4 375 8 q 58 0 122 0 l 63 98 l 58 197 q 281 193 145 197 q 438 190 418 190 m 438 747 q 258 743 379 747 q 77 739 137 739 q 84 804 83 784 q 84 834 84 823 q 77 932 84 879 q 267 927 140 932 q 438 922 394 922 q 626 927 500 922 q 797 932 752 932 l 793 835 l 797 739 q 619 743 738 739 q 438 747 500 747 m 708 467 l 713 375 q 577 379 669 375 q 438 383 486 383 q 300 379 391 383 q 162 375 208 375 q 165 418 163 397 q 168 468 168 440 q 165 523 168 484 q 162 567 162 562 q 438 554 300 554 q 713 566 577 554 l 708 467 "},"\xA0":{x_min:0,x_max:0,ha:375},\u03AB:{x_min:-32,x_max:797,ha:747,o:"m 133 650 q 52 795 94 720 q -32 931 11 869 l 91 928 l 256 932 q 365 700 329 773 q 441 554 401 627 q 541 731 491 634 q 636 932 590 827 l 711 928 l 797 932 q 644 689 714 812 q 498 420 573 566 l 502 143 l 509 0 l 413 5 l 256 0 q 261 118 256 38 q 267 236 267 197 l 267 402 l 133 650 m 242 1242 q 309 1215 281 1242 q 337 1148 337 1189 q 311 1078 337 1107 q 243 1050 285 1050 q 173 1078 203 1050 q 144 1148 144 1107 q 173 1214 144 1186 q 242 1242 202 1242 m 502 1242 q 571 1214 542 1242 q 600 1148 600 1187 q 572 1078 600 1107 q 505 1050 545 1050 q 435 1077 463 1050 q 408 1148 408 1105 q 435 1214 408 1186 q 502 1242 463 1242 "},"0":{x_min:34,x_max:709,ha:749,o:"m 367 -19 q 104 104 175 -19 q 34 436 34 228 q 109 777 34 644 q 377 910 184 910 q 640 785 572 910 q 709 443 709 660 q 635 108 709 236 q 367 -19 561 -19 m 260 447 q 261 330 260 382 q 269 213 262 279 q 296 101 276 147 q 374 56 316 56 q 453 108 430 56 q 477 221 477 160 q 480 287 478 254 q 483 458 483 365 q 480 590 483 543 q 477 665 478 637 q 452 779 477 727 q 372 832 428 832 q 281 765 299 832 q 263 598 263 698 q 261 505 263 561 q 260 447 260 448 "},"\u201D":{x_min:72.21875,x_max:615.28125,ha:654,o:"m 72 528 l 152 848 q 183 920 159 891 q 245 949 206 949 q 311 926 286 949 q 337 861 337 903 q 315 797 337 827 l 112 511 l 72 528 m 351 528 l 430 848 q 462 919 437 889 q 525 949 487 949 q 588 925 562 949 q 615 864 615 901 q 609 829 615 845 q 594 797 604 813 l 391 511 l 351 528 "},"@":{x_min:59,x_max:1305,ha:1365,o:"m 581 72 q 418 131 475 72 q 362 298 362 191 q 455 554 362 437 q 684 672 548 672 q 771 650 734 672 q 843 586 808 629 l 877 653 l 998 653 l 897 254 l 893 229 q 912 193 893 205 q 957 181 931 181 q 1119 290 1056 181 q 1183 504 1183 399 q 1060 772 1183 668 q 771 877 937 877 q 354 735 526 877 q 183 353 183 594 q 327 20 183 140 q 689 -100 471 -100 q 898 -66 792 -100 q 1092 25 1004 -33 l 1143 -51 q 689 -204 945 -204 q 244 -54 429 -204 q 59 348 59 94 q 261 804 59 621 q 739 988 464 988 q 1134 856 964 988 q 1305 505 1305 725 q 1195 206 1305 340 q 920 72 1085 72 l 895 72 q 818 90 846 72 q 777 180 791 108 q 691 99 739 127 q 581 72 643 72 m 693 578 q 552 487 600 578 q 505 294 505 397 q 532 207 505 245 q 606 169 560 169 q 712 212 668 169 q 772 322 756 256 l 808 466 q 773 546 804 515 q 693 578 742 578 "},\u038A:{x_min:-28,x_max:728,ha:822,o:"m 485 402 q 481 715 485 609 q 468 931 477 822 q 535 925 498 929 q 594 922 572 922 q 666 927 620 922 q 727 931 713 931 q 714 716 717 819 q 711 465 711 613 q 714 221 711 326 q 728 0 718 116 q 647 2 704 0 q 588 5 590 5 l 469 0 q 481 199 477 88 q 485 402 485 310 m 157 953 q 210 1001 190 986 q 258 1017 230 1017 q 311 994 290 1017 q 332 943 332 972 q 313 897 332 916 q 264 863 294 878 l 40 755 l -28 755 l 157 953 "},\u00F6:{x_min:32,x_max:743,ha:775,o:"m 395 683 q 647 588 551 683 q 743 337 743 494 q 648 79 743 173 q 387 -15 554 -15 q 129 78 227 -15 q 32 333 32 172 q 130 590 32 497 q 395 683 229 683 m 257 976 q 324 948 296 976 q 352 878 352 920 q 325 811 352 839 q 258 784 299 784 q 190 811 221 784 q 160 878 160 839 q 188 947 160 918 q 257 976 217 976 m 517 976 q 585 948 557 976 q 613 878 613 920 q 586 811 613 839 q 519 784 560 784 q 450 811 479 784 q 421 878 421 839 q 449 947 421 918 q 517 976 478 976 m 269 174 q 307 85 277 120 q 387 50 337 50 q 466 84 437 50 q 500 156 494 119 q 511 215 507 194 q 517 335 517 271 q 511 450 517 395 q 500 509 507 471 q 466 582 494 548 q 387 616 439 616 q 294 564 319 616 q 263 459 269 513 q 258 333 258 406 q 260 244 258 270 q 269 174 262 217 "},i:{x_min:80,x_max:314.71875,ha:396,o:"m 196 1014 q 273 980 240 1014 q 307 902 307 947 q 274 825 307 858 q 196 793 241 793 q 118 824 151 793 q 85 902 85 856 q 118 980 85 947 q 196 1014 151 1014 m 91 127 l 91 543 l 80 666 q 140 660 109 663 q 196 658 171 658 q 253 660 223 658 q 314 666 284 663 l 301 545 l 301 319 q 302 145 301 206 q 312 0 304 84 l 194 4 l 81 0 q 88 64 85 33 q 91 127 91 95 "},\u0392:{x_min:91,x_max:773,ha:815,o:"m 109 208 l 109 465 q 105 714 109 605 q 91 932 102 823 l 250 929 l 417 929 q 655 881 560 929 q 751 707 751 834 q 692 566 751 618 q 542 503 634 515 l 542 491 q 704 431 636 491 q 773 276 773 372 q 678 69 773 138 q 438 0 584 0 l 250 4 q 152 2 211 4 q 91 0 92 0 q 103 104 97 51 q 109 208 109 158 m 519 698 q 479 803 519 763 q 374 844 440 844 l 335 839 q 331 687 331 766 l 331 540 q 466 578 413 540 q 519 698 519 617 m 380 87 q 490 137 450 87 q 531 258 531 187 q 484 392 531 338 q 360 446 437 446 l 331 446 l 331 276 l 335 91 l 380 87 "},"\u2264":{x_min:170.984375,x_max:962.28125,ha:1139,o:"m 960 690 l 403 514 l 960 338 l 960 200 l 171 455 l 170 572 l 960 830 l 960 690 m 962 132 l 962 0 l 171 0 l 171 132 l 962 132 "},\u03C5:{x_min:82,x_max:765,ha:843,o:"m 765 416 q 663 115 765 245 q 401 -15 562 -15 q 162 56 243 -15 q 82 284 82 128 l 86 479 q 84 590 86 523 q 82 666 82 656 q 145 663 99 666 q 195 661 191 661 q 263 663 216 661 q 311 666 309 666 q 295 477 301 566 q 290 294 290 387 q 310 122 290 193 q 402 52 330 52 q 515 146 487 52 q 544 351 544 240 q 525 502 544 433 q 469 656 507 570 q 580 659 528 656 q 684 673 632 662 q 743 548 721 614 q 765 416 765 482 "},"]":{x_min:76,x_max:385.71875,ha:454,o:"m 80 -129 l 76 -85 l 227 -88 q 231 134 227 -14 q 235 356 235 282 q 231 605 235 438 q 227 855 227 771 l 164 855 l 76 855 l 80 885 q 80 908 80 896 q 76 931 77 925 l 230 926 l 385 933 l 373 566 l 373 359 l 373 199 l 383 -164 l 227 -157 q 141 -160 195 -157 q 76 -164 86 -164 l 80 -129 "},m:{x_min:80,x_max:1135,ha:1217,o:"m 91 329 q 85 517 91 394 q 80 667 80 640 l 184 662 l 293 666 l 293 571 q 392 651 334 619 q 511 683 450 683 q 628 653 579 683 q 700 559 676 623 q 791 651 733 620 q 921 683 849 683 q 1068 624 1011 683 q 1125 477 1125 566 l 1125 331 q 1130 158 1125 274 q 1135 0 1135 41 q 1070 2 1116 0 q 1019 5 1024 5 q 954 2 999 5 q 905 0 909 0 q 910 155 905 51 q 915 298 915 259 l 915 385 q 896 506 915 458 q 818 554 877 554 q 755 528 779 554 q 719 460 730 502 q 712 381 714 426 q 710 319 710 335 q 715 153 710 265 q 720 0 720 41 q 656 3 694 0 q 608 6 617 6 q 544 3 585 6 q 496 0 504 0 q 501 155 496 51 q 506 298 506 259 l 506 385 q 487 505 506 456 q 409 554 469 554 q 346 528 370 554 q 310 460 321 502 q 303 381 305 426 q 301 319 301 335 q 306 153 301 265 q 311 0 311 41 q 243 3 284 0 q 195 6 202 6 q 128 3 170 6 q 80 0 86 0 q 85 163 80 53 q 91 329 91 273 "},\u03C7:{x_min:15.28125,x_max:730.5625,ha:731,o:"m 569 380 l 472 204 l 545 31 q 631 -159 586 -62 q 729 -368 676 -255 l 600 -363 q 475 -371 537 -363 q 404 -147 438 -259 l 350 1 l 268 -155 q 218 -260 242 -204 q 176 -371 194 -316 q 105 -363 143 -363 q 16 -371 62 -363 q 97 -240 52 -319 q 197 -66 141 -162 l 298 111 l 168 423 q 130 509 148 466 q 63 568 101 563 l 15 564 l 15 638 q 166 683 83 683 q 286 628 252 683 q 367 445 320 573 l 422 318 l 499 479 q 572 665 544 582 l 634 662 q 697 665 674 662 q 730 668 719 668 l 569 380 "},"8":{x_min:34,x_max:710,ha:749,o:"m 511 492 q 654 412 598 471 q 710 266 710 352 q 607 53 710 128 q 360 -21 504 -21 q 131 50 229 -21 q 34 248 34 122 q 88 406 34 341 q 235 492 143 471 l 235 502 q 117 568 164 516 q 71 689 71 620 q 165 855 71 802 q 382 908 259 908 q 584 857 498 908 q 671 696 671 806 q 628 574 671 621 q 511 502 586 526 l 511 492 m 373 528 q 456 573 432 528 q 481 684 481 618 q 458 792 481 748 q 376 836 435 836 q 290 791 316 836 q 264 683 264 747 q 291 575 264 622 q 373 528 318 528 m 369 55 q 464 117 439 55 q 489 259 489 180 q 465 396 489 335 q 379 457 441 457 q 285 393 314 457 q 256 256 256 329 q 278 114 256 174 q 369 55 301 55 "},\u03AF:{x_min:80,x_max:478.609375,ha:396,o:"m 91 126 l 91 543 l 80 666 q 139 660 105 663 q 196 658 173 658 q 264 660 238 658 q 314 666 291 663 q 304 586 307 616 q 301 523 301 557 l 301 113 q 302 72 301 88 q 314 0 304 56 l 195 4 l 81 0 q 87 67 84 30 q 91 126 91 104 m 303 953 q 357 1001 337 986 q 406 1017 377 1017 q 457 994 437 1017 q 478 943 478 972 q 459 897 478 915 q 410 863 441 878 l 187 755 l 118 755 l 303 953 "},\u0396:{x_min:25,x_max:831.953125,ha:831,o:"m 25 54 q 186 311 81 142 q 354 582 291 480 q 495 813 418 685 l 294 813 q 98 801 186 813 l 105 852 q 98 932 105 894 l 444 926 q 657 928 509 926 q 815 931 805 931 l 815 903 q 573 517 695 715 q 331 119 451 320 l 566 119 q 706 122 654 119 q 831 136 758 125 q 826 43 826 96 l 827 0 q 606 3 761 0 q 443 6 451 6 q 203 3 370 6 q 25 0 36 0 l 25 54 "},R:{x_min:87,x_max:860.609375,ha:836,o:"m 106 398 q 96 663 106 486 q 87 931 87 841 l 182 927 q 295 932 207 927 q 420 938 382 938 q 699 874 625 938 q 773 697 773 811 q 713 538 773 603 q 560 465 654 474 q 701 235 627 350 q 860 0 775 120 l 753 5 l 578 0 q 469 202 531 100 q 320 438 408 304 l 320 258 q 322 114 320 154 q 331 0 324 75 q 261 3 304 0 q 211 6 217 6 q 140 3 184 6 q 87 0 95 0 q 96 198 87 65 q 106 398 106 331 m 544 689 q 505 805 544 760 q 397 850 467 850 l 324 850 l 320 696 l 320 506 q 483 548 422 506 q 544 689 544 590 "},"\xD7":{x_min:183.828125,x_max:970.171875,ha:1139,o:"m 577 501 l 877 800 l 970 706 l 670 408 l 970 106 l 876 13 l 577 314 l 277 13 l 184 106 l 483 408 l 183 706 l 277 800 l 577 501 "},o:{x_min:30,x_max:741,ha:774,o:"m 395 683 q 645 587 550 683 q 741 337 741 492 q 646 79 741 173 q 385 -15 552 -15 q 127 78 225 -15 q 30 333 30 172 q 129 590 30 498 q 395 683 228 683 m 269 174 q 305 85 275 119 q 386 52 335 52 q 464 85 436 52 q 503 172 491 119 q 510 237 506 194 q 515 336 515 279 q 510 431 515 391 q 503 494 506 472 q 464 581 491 548 q 385 615 436 615 q 291 563 315 615 q 261 459 267 512 q 256 333 256 407 q 269 174 256 248 "},"5":{x_min:46,x_max:670,ha:749,o:"m 284 60 q 397 118 360 60 q 434 258 434 176 q 404 391 434 333 q 307 450 375 450 q 183 388 238 450 l 118 422 q 128 525 126 467 q 131 606 131 583 q 126 749 131 684 q 108 878 121 814 l 118 888 q 268 883 173 888 q 387 878 362 878 q 635 888 519 878 l 630 793 q 636 696 630 739 q 479 702 579 696 q 365 709 378 709 l 225 709 q 213 501 213 608 q 399 548 301 548 q 591 480 513 548 q 670 300 670 413 q 559 59 670 139 q 280 -21 449 -21 q 156 -7 222 -21 q 46 32 90 5 q 94 133 74 84 q 131 238 115 182 l 152 237 q 180 109 152 158 q 284 60 208 60 "},"7":{x_min:96,x_max:760,ha:749,o:"m 333 343 l 549 689 q 439 693 511 689 q 329 697 366 697 q 221 694 272 697 q 98 689 171 691 q 105 755 104 734 q 105 787 105 775 q 102 844 105 808 q 98 888 98 881 l 401 883 l 741 887 l 760 849 q 312 0 491 452 l 216 0 l 105 0 l 96 18 q 229 187 177 119 q 333 343 280 255 "},K:{x_min:90,x_max:892.78125,ha:856,o:"m 334 716 l 334 515 l 569 787 q 635 866 619 845 q 682 932 651 886 l 767 926 q 817 929 784 926 q 870 932 851 932 q 687 746 790 851 q 503 554 585 641 l 623 377 q 892 0 753 179 l 753 5 q 664 2 727 5 q 595 0 600 0 q 484 190 545 98 q 334 404 424 281 l 334 193 q 348 0 334 94 q 270 2 325 0 q 212 5 215 5 l 90 0 q 99 236 90 69 q 108 461 108 402 q 103 623 108 515 q 99 787 99 731 l 90 932 q 157 927 113 932 q 219 922 201 922 q 282 925 252 922 q 342 932 312 927 q 338 831 342 907 q 334 716 334 755 "},",":{x_min:25,x_max:319.4375,ha:375,o:"m 109 121 q 146 203 119 168 q 218 238 173 238 q 289 208 259 238 q 319 136 319 178 q 313 101 319 118 q 294 64 306 85 l 62 -253 l 25 -238 l 109 121 "},d:{x_min:54,x_max:744,ha:825,o:"m 318 -15 q 115 84 177 -15 q 54 336 54 184 q 124 583 54 483 q 336 683 194 683 q 525 584 451 683 l 525 738 l 518 1024 q 581 1016 554 1019 q 630 1013 609 1013 q 678 1015 653 1013 q 744 1023 703 1018 q 740 900 744 983 q 736 775 736 816 q 738 403 736 627 q 740 176 740 179 l 744 0 q 680 3 721 0 q 630 6 638 6 q 568 3 608 6 q 520 0 528 0 q 523 39 522 16 q 525 85 525 62 q 430 8 477 32 q 318 -15 383 -15 m 396 587 q 328 562 355 587 q 289 499 300 538 q 273 409 277 460 q 269 316 269 358 q 295 158 269 227 q 396 89 321 89 q 501 167 473 89 q 530 338 530 245 q 503 511 530 435 q 396 587 477 587 "},"\xA8":{x_min:65.28125,x_max:609.71875,ha:654,o:"m 251 613 q 218 541 243 570 q 154 512 194 512 q 90 537 116 512 q 65 601 65 563 q 87 665 65 634 l 291 949 l 331 933 l 251 613 m 530 613 q 498 542 525 573 q 433 512 472 512 q 371 536 397 512 q 345 598 345 560 q 366 665 345 633 l 570 949 l 609 933 l 530 613 "},E:{x_min:90,x_max:644.15625,ha:703,o:"m 108 222 l 108 465 q 104 710 108 620 q 91 932 101 800 l 357 926 q 520 929 405 926 q 644 932 634 932 q 640 903 641 916 q 638 872 638 890 q 639 848 638 857 q 644 810 640 840 q 530 815 606 810 q 414 820 453 820 l 338 820 l 334 545 l 634 557 q 630 527 631 541 q 628 494 628 514 l 633 431 q 459 437 571 431 q 334 444 347 444 l 334 296 q 336 190 334 264 q 338 113 338 115 q 638 129 489 113 l 634 63 l 638 0 q 433 3 562 0 q 278 7 305 7 q 169 3 235 7 q 90 0 102 0 q 102 114 96 54 q 108 222 108 175 "},Y:{x_min:-30,x_max:797,ha:747,o:"m 136 650 q 67 772 123 672 q -30 932 10 872 l 92 926 q 184 929 120 926 q 256 931 249 931 q 345 740 304 825 q 442 554 386 656 q 541 730 492 636 q 637 931 589 825 l 712 926 q 753 929 726 926 q 797 931 781 931 q 644 689 714 812 q 498 420 573 566 l 502 143 l 508 0 l 414 5 l 256 0 q 262 138 256 50 q 269 237 269 226 l 269 402 l 136 650 "},'"':{x_min:53,x_max:399,ha:451,o:"m 181 958 l 181 586 l 53 586 l 53 958 l 181 958 m 399 958 l 399 586 l 271 586 l 271 958 l 399 958 "},\u00EA:{x_min:41,x_max:684.046875,ha:729,o:"m 482 98 q 566 112 532 98 q 643 160 600 126 l 661 151 q 643 96 652 125 q 628 40 634 66 q 521 -1 577 11 q 403 -15 466 -15 q 141 79 241 -15 q 41 336 41 173 q 137 586 41 490 q 386 683 234 683 q 608 601 532 683 q 684 373 684 520 l 684 332 l 267 332 q 325 165 267 232 q 482 98 383 98 m 302 1001 l 426 1001 l 577 754 l 512 754 l 364 876 l 216 754 l 149 754 l 302 1001 m 478 411 q 481 444 481 422 q 459 566 481 513 q 377 620 438 620 q 292 562 318 620 q 267 437 267 505 l 267 411 l 478 411 "},\u03B4:{x_min:30,x_max:688,ha:719,o:"m 543 794 q 498 889 531 854 q 407 924 465 924 q 329 895 362 924 q 296 822 296 867 q 393 671 296 739 q 585 539 490 603 q 688 308 688 444 q 600 71 688 157 q 359 -15 513 -15 q 119 70 209 -15 q 30 305 30 155 q 88 503 30 419 q 256 614 147 586 q 130 696 178 650 q 82 812 82 743 q 173 968 82 916 q 374 1021 263 1021 q 629 946 510 1021 q 606 875 617 912 q 582 788 596 839 l 543 794 m 269 163 q 296 83 276 114 q 360 52 317 52 q 435 95 414 52 q 462 204 456 139 l 462 306 l 462 407 q 438 513 462 464 q 363 561 415 561 q 298 529 321 561 q 269 449 274 496 q 260 382 263 421 q 258 306 258 343 q 260 227 258 249 q 269 163 262 206 "},\u03AD:{x_min:55,x_max:667.5,ha:657,o:"m 512 501 q 472 579 502 548 q 396 611 442 611 q 323 577 352 611 q 295 498 295 544 q 316 429 295 458 q 375 394 337 399 l 450 394 l 450 373 q 450 336 450 349 q 450 316 450 323 q 414 319 438 319 q 322 280 361 319 q 283 194 283 242 q 323 101 283 144 q 413 59 363 59 q 498 88 461 59 q 572 167 536 117 l 600 155 q 594 130 596 144 q 593 104 593 115 q 593 82 593 90 q 600 53 593 74 q 351 -15 486 -15 q 145 30 236 -15 q 55 176 55 75 q 105 289 55 244 q 233 360 156 335 q 127 421 167 385 q 88 516 88 456 q 165 643 88 603 q 340 683 243 683 q 593 612 480 683 q 565 556 576 583 q 551 501 555 530 l 512 501 m 492 955 q 545 1003 525 988 q 595 1019 566 1019 q 646 996 625 1019 q 667 945 667 974 q 648 899 667 917 q 600 865 630 880 l 375 757 l 306 757 l 492 955 "},\u03C9:{x_min:30,x_max:1059,ha:1093,o:"m 335 -15 q 111 79 192 -15 q 30 321 30 173 q 72 505 30 421 q 192 667 114 589 q 297 661 237 661 q 347 663 319 661 q 390 667 374 665 q 247 281 247 499 q 269 123 247 195 q 358 52 291 52 q 421 86 399 52 q 443 165 443 121 l 443 291 q 441 415 443 379 q 435 512 440 451 q 510 505 499 505 q 544 505 522 505 q 608 508 579 505 q 657 512 636 511 q 648 402 652 465 q 644 289 644 340 q 644 237 644 258 q 650 165 644 215 q 669 85 650 119 q 730 52 688 52 q 821 122 798 52 q 844 279 844 192 q 807 481 844 386 q 700 666 771 576 q 746 662 724 663 q 793 661 767 661 q 846 664 812 661 q 898 667 881 667 q 1016 508 974 595 q 1059 322 1059 422 q 974 83 1059 182 q 753 -15 890 -15 q 630 13 685 -15 q 545 100 575 41 q 459 14 516 44 q 335 -15 402 -15 "},"\xB4":{x_min:70.828125,x_max:337.5,ha:374,o:"m 70 528 l 151 848 q 183 919 158 889 q 244 949 208 949 q 310 924 283 949 q 337 862 337 900 q 331 829 337 845 q 316 797 326 813 l 111 511 l 70 528 "},"\xB1":{x_min:169,x_max:969,ha:1139,o:"m 636 815 l 636 597 l 969 597 l 969 465 l 636 465 l 636 246 l 501 246 l 501 465 l 169 465 l 169 597 l 501 597 l 501 815 l 636 815 m 969 132 l 969 0 l 169 0 l 169 132 l 969 132 "},"|":{x_min:272,x_max:411,ha:683,o:"m 411 956 l 411 447 l 272 447 l 272 956 l 411 956 m 411 272 l 411 -233 l 272 -233 l 272 272 l 411 272 "},\u03CB:{x_min:82,x_max:765,ha:843,o:"m 765 415 q 663 114 765 244 q 401 -15 562 -15 q 162 56 243 -15 q 82 284 82 127 l 86 478 q 84 589 86 523 q 82 666 82 656 q 145 663 99 666 q 195 661 191 661 q 263 663 216 661 q 311 666 309 666 q 295 476 301 566 q 290 294 290 387 q 310 122 290 193 q 402 52 330 52 q 515 146 487 52 q 544 351 544 240 q 525 502 544 433 q 469 657 507 570 q 580 659 528 657 q 684 672 632 662 q 743 547 721 613 q 765 415 765 482 m 262 975 q 329 947 301 975 q 357 879 357 919 q 331 811 357 840 q 265 783 305 783 q 195 810 226 783 q 165 879 165 838 q 192 947 165 919 q 262 975 220 975 m 522 975 q 589 947 561 975 q 617 879 617 919 q 591 811 617 840 q 525 783 565 783 q 456 811 486 783 q 427 879 427 840 q 454 947 427 919 q 522 975 482 975 "},"\xA7":{x_min:61,x_max:685,ha:743,o:"m 118 39 l 136 38 q 207 -72 149 -32 q 341 -113 265 -113 q 441 -84 398 -113 q 485 -1 485 -56 q 378 121 485 73 q 170 213 272 169 q 61 386 61 277 q 95 495 61 437 q 175 584 129 554 q 133 649 148 615 q 118 721 118 683 q 206 887 118 825 q 406 949 295 949 q 531 937 479 949 q 630 895 583 926 q 598 826 613 860 q 570 754 583 791 l 558 754 q 499 848 548 812 q 388 884 451 884 q 300 858 340 884 q 261 785 261 832 q 366 672 261 717 q 575 583 472 626 q 685 414 685 519 q 657 302 685 354 q 580 216 630 250 q 622 149 602 197 q 643 68 643 101 q 545 -116 643 -51 q 322 -182 447 -182 q 197 -171 255 -182 q 86 -135 138 -161 q 118 39 106 -38 m 197 478 q 310 346 197 400 q 521 249 423 293 q 546 312 546 274 q 433 432 546 379 q 224 528 320 485 q 197 478 201 508 "},b:{x_min:79,x_max:772,ha:825,o:"m 89 647 q 84 844 89 712 q 79 1024 79 977 q 136 1018 105 1021 q 192 1015 167 1015 q 249 1018 217 1015 q 306 1023 280 1020 l 299 724 l 299 578 q 389 656 339 630 q 505 683 439 683 q 704 581 637 683 q 772 340 772 479 q 694 88 772 191 q 470 -15 617 -15 q 340 15 400 -15 q 237 104 280 45 q 202 74 215 87 q 136 1 190 62 l 79 1 q 84 357 79 132 q 89 647 89 583 m 430 586 q 318 512 346 586 q 291 338 291 438 q 316 162 291 238 q 424 86 342 86 q 528 159 503 86 q 554 331 554 233 q 531 510 554 434 q 430 586 508 586 "},q:{x_min:51,x_max:741,ha:825,o:"m 331 -15 q 121 81 191 -15 q 51 323 51 177 q 117 576 51 469 q 323 683 184 683 q 523 580 446 683 l 523 605 q 516 666 523 631 q 586 660 568 661 q 627 659 604 659 q 741 666 675 659 q 738 416 741 561 q 732 125 735 271 q 730 -124 730 -19 q 735 -246 730 -164 q 741 -371 741 -328 q 687 -363 718 -366 q 628 -361 656 -361 q 563 -363 581 -361 q 514 -372 545 -365 l 523 -58 l 523 85 q 437 10 482 35 q 331 -15 392 -15 m 386 81 q 484 135 452 81 q 523 261 516 189 l 523 300 q 523 351 523 330 q 523 392 523 372 q 490 518 523 460 q 393 576 458 576 q 290 502 314 576 q 266 327 266 429 q 288 155 266 229 q 386 81 310 81 "},\u03A9:{x_min:36,x_max:1174.890625,ha:1211,o:"m 1173 129 q 1170 103 1170 116 q 1170 83 1170 90 l 1170 70 q 1170 36 1170 52 q 1174 0 1170 19 l 953 4 l 715 0 l 715 103 q 848 251 813 162 q 883 473 883 340 q 815 741 883 623 q 607 860 747 860 q 396 738 461 860 q 331 457 331 616 q 369 245 331 339 q 496 102 407 152 l 496 0 l 256 4 l 36 0 l 38 80 l 36 129 q 264 113 151 113 q 128 258 172 167 q 85 464 85 350 q 235 821 85 693 q 622 949 386 949 q 988 830 846 949 q 1130 491 1130 712 q 1082 272 1130 363 q 928 112 1034 180 q 1173 129 1049 112 "},\u03CD:{x_min:82,x_max:765,ha:843,o:"m 765 415 q 663 114 765 244 q 400 -15 561 -15 q 162 56 242 -15 q 82 284 82 128 l 86 479 q 84 590 86 523 q 82 666 82 656 q 145 663 99 666 q 195 661 191 661 q 263 663 216 661 q 311 666 309 666 q 295 477 301 566 q 290 294 290 387 q 310 122 290 193 q 402 52 330 52 q 515 146 487 52 q 544 351 544 240 q 525 502 544 433 q 469 656 507 570 q 580 659 528 656 q 684 672 632 662 q 743 547 721 613 q 765 415 765 482 m 548 953 q 601 1001 581 986 q 651 1017 621 1017 q 702 994 681 1017 q 723 943 723 972 q 704 897 723 916 q 655 863 685 878 l 431 755 l 362 755 l 548 953 "},\u00D6:{x_min:40,x_max:1087,ha:1129,o:"m 577 949 q 946 829 805 949 q 1087 486 1087 710 q 942 115 1087 246 q 552 -15 798 -15 q 176 107 313 -15 q 40 465 40 229 q 188 823 40 697 q 577 949 337 949 m 434 1242 q 501 1215 473 1242 q 529 1148 529 1189 q 502 1079 529 1108 q 435 1050 476 1050 q 366 1079 396 1050 q 337 1148 337 1109 q 366 1214 337 1186 q 434 1242 395 1242 m 693 1242 q 761 1215 733 1242 q 789 1148 789 1189 q 762 1079 789 1108 q 695 1050 736 1050 q 627 1079 655 1050 q 600 1148 600 1108 q 627 1214 600 1186 q 693 1242 655 1242 m 562 71 q 774 194 706 71 q 843 470 843 318 q 774 742 843 623 q 563 861 706 861 q 353 741 420 861 q 287 465 287 622 q 354 191 287 312 q 562 71 421 71 "},z:{x_min:19.4375,x_max:640.28125,ha:664,o:"m 19 75 q 118 216 33 94 q 257 415 204 337 q 359 567 311 493 l 255 568 q 151 562 205 568 q 65 552 97 556 l 68 608 l 65 667 l 337 660 q 507 663 404 660 q 627 666 611 666 l 627 588 q 515 441 573 519 q 399 276 458 362 q 280 98 340 190 l 375 96 q 506 101 418 96 q 640 107 595 107 q 638 76 638 93 q 637 51 637 59 l 637 34 l 640 0 q 459 3 568 0 q 333 7 351 7 q 147 3 259 7 q 19 0 36 0 l 19 75 "},"\u2122":{x_min:136,x_max:964,ha:1138,o:"m 461 975 l 461 900 l 350 900 l 350 610 l 249 610 l 249 900 l 136 900 l 136 975 l 461 975 m 666 974 l 751 751 l 833 974 l 964 975 l 964 610 l 874 610 l 874 882 l 772 610 l 730 610 l 625 881 l 625 610 l 535 610 l 535 975 l 666 974 "},\u03AE:{x_min:80,x_max:727,ha:808,o:"m 91 339 q 85 512 91 391 q 80 667 80 632 q 137 661 125 662 q 180 661 149 661 q 244 663 199 661 q 293 666 290 666 l 293 568 q 391 651 338 622 q 511 681 443 681 q 660 622 602 681 q 719 471 719 564 l 719 327 l 719 -50 q 723 -219 719 -107 q 727 -374 727 -332 q 618 -365 670 -365 q 502 -373 562 -365 l 512 16 l 512 251 l 512 368 q 491 499 512 446 q 408 552 471 552 q 319 488 342 552 q 302 419 305 457 q 299 330 299 382 q 304 148 299 264 q 309 0 309 33 q 243 3 278 0 q 195 6 207 6 q 127 3 163 6 q 80 0 92 0 q 85 188 80 65 q 91 339 91 311 m 552 953 q 605 1001 585 986 q 654 1017 625 1017 q 706 994 685 1017 q 727 943 727 972 q 708 897 727 916 q 658 863 689 878 l 435 756 l 366 756 l 552 953 "},\u0398:{x_min:40,x_max:1087,ha:1129,o:"m 51 585 q 235 855 85 761 q 577 949 385 949 q 944 829 802 949 q 1087 487 1087 710 q 941 116 1087 247 q 552 -15 796 -15 q 176 107 313 -15 q 40 465 40 229 q 41 510 40 492 q 51 585 42 528 m 559 73 q 771 194 703 73 q 840 472 840 315 q 773 742 840 624 q 566 860 706 860 q 353 742 420 860 q 287 465 287 624 q 353 193 287 314 q 559 73 419 73 m 566 525 q 678 528 610 525 q 755 532 745 532 l 754 539 l 754 472 l 754 403 l 755 407 l 563 414 l 373 407 l 373 469 l 373 531 q 484 528 416 531 q 566 525 553 525 "},"\xAE":{x_min:72,x_max:1065,ha:1138,o:"m 1065 488 q 917 139 1065 285 q 567 -6 770 -6 q 219 139 366 -6 q 72 488 72 285 q 219 836 72 688 q 567 985 367 985 q 917 839 770 985 q 1065 488 1065 693 m 155 488 q 276 197 155 320 q 566 75 398 75 q 858 197 734 75 q 983 487 983 320 q 860 780 983 656 q 567 904 738 904 q 277 780 399 904 q 155 488 155 656 m 577 774 q 741 740 670 774 q 812 625 812 707 q 778 527 812 569 q 692 468 745 484 l 811 223 l 666 222 l 561 447 l 497 447 l 497 223 l 361 223 l 361 774 l 577 774 m 497 528 l 562 528 q 641 546 609 528 q 673 608 673 564 q 655 660 673 638 q 607 685 638 682 q 555 691 584 691 l 497 691 l 497 528 "},\u00C9:{x_min:90,x_max:644.15625,ha:703,o:"m 108 223 l 108 465 q 104 713 108 622 q 91 933 101 804 l 357 929 l 644 933 l 640 872 l 644 811 q 530 816 606 811 q 415 822 453 822 l 340 822 q 337 663 340 774 q 334 545 334 551 l 634 557 q 631 521 634 546 q 628 493 628 496 q 630 458 628 477 q 634 429 633 440 q 476 436 587 429 q 334 444 365 444 l 334 294 q 335 203 334 249 q 340 111 336 156 q 483 114 419 111 q 640 128 546 118 q 634 65 634 100 q 635 37 634 47 q 640 0 635 27 q 427 3 556 0 q 280 7 298 7 q 169 3 242 7 q 90 0 95 0 q 102 117 97 59 q 108 223 108 175 m 410 1222 q 465 1272 445 1257 q 515 1288 485 1288 q 566 1265 545 1288 q 587 1215 587 1243 q 568 1169 587 1189 q 519 1133 549 1148 l 294 1025 l 225 1025 l 410 1222 "},"~":{x_min:266,x_max:1091,ha:1367,o:"m 1091 938 q 1033 721 1091 807 q 847 636 975 636 q 661 720 757 636 q 518 805 564 805 q 427 756 453 805 q 402 636 402 708 l 266 636 q 327 849 266 761 q 510 938 388 938 q 696 853 599 938 q 846 768 793 768 q 933 815 911 768 q 956 938 956 863 l 1091 938 "},\u0395:{x_min:90,x_max:644.15625,ha:703,o:"m 108 222 l 108 465 q 104 710 108 620 q 91 932 101 800 l 357 926 q 520 929 405 926 q 644 932 634 932 q 640 903 641 916 q 638 872 638 890 q 639 848 638 857 q 644 810 640 840 q 530 815 606 810 q 414 820 453 820 l 338 820 l 334 545 l 634 557 q 630 527 631 541 q 628 494 628 514 l 633 431 q 459 437 571 431 q 334 444 347 444 l 334 296 q 336 190 334 264 q 338 113 338 115 q 638 129 489 113 l 634 63 l 638 0 q 433 3 562 0 q 278 7 305 7 q 169 3 235 7 q 90 0 102 0 q 102 114 96 54 q 108 222 108 175 "},"\xB3":{x_min:18,x_max:448,ha:494,o:"m 242 899 q 370 867 315 899 q 425 770 425 836 q 399 699 425 730 q 301 645 373 667 q 403 605 359 642 q 448 512 448 569 q 375 384 448 426 q 210 342 303 342 q 108 352 152 342 q 18 391 65 362 q 88 505 60 451 l 98 505 q 119 420 98 452 q 191 388 141 388 q 263 421 237 388 q 290 501 290 454 q 262 580 290 549 q 186 612 235 612 l 151 612 l 151 660 l 181 658 q 259 684 228 658 q 290 759 290 710 q 268 828 290 800 q 207 856 246 856 q 141 821 163 856 q 119 742 119 787 l 110 736 q 26 815 75 777 q 120 876 53 854 q 242 899 187 899 "},"[":{x_min:104,x_max:415.109375,ha:454,o:"m 409 883 l 415 852 l 261 855 l 257 541 q 261 212 257 433 q 266 -86 266 -8 l 327 -88 l 415 -88 l 409 -117 q 415 -162 409 -142 l 261 -157 l 104 -164 q 110 154 104 -50 q 117 383 117 359 q 110 703 117 496 q 104 933 104 909 q 194 929 138 933 q 258 926 249 926 q 347 929 284 926 q 415 933 410 933 q 409 883 409 911 "},L:{x_min:91,x_max:639.609375,ha:650,o:"m 109 465 q 105 710 109 620 q 91 932 102 800 l 216 927 l 350 931 q 337 618 337 783 l 337 296 q 337 201 337 249 q 341 113 337 153 q 639 129 491 113 l 635 63 l 639 0 q 434 3 563 0 q 279 7 306 7 q 170 3 236 7 q 91 0 103 0 q 105 209 102 102 q 109 465 109 316 "},\u03C3:{x_min:30,x_max:832,ha:826,o:"m 679 557 q 730 451 724 495 q 738 384 736 407 q 741 339 741 361 q 738 277 741 295 q 726 190 736 259 q 617 53 716 121 q 385 -15 518 -15 q 126 78 223 -15 q 30 336 30 172 q 127 588 30 494 q 384 683 224 683 q 536 671 432 683 q 677 660 639 660 q 765 663 705 660 q 831 666 825 666 q 827 611 827 637 l 827 594 l 832 552 l 702 557 l 679 557 m 256 333 q 269 174 256 248 q 304 88 275 124 q 381 52 332 52 q 475 104 443 52 q 508 221 508 156 q 512 258 509 235 q 515 323 515 282 q 512 411 515 370 q 508 444 509 427 q 479 563 508 511 q 389 615 450 615 q 299 565 327 615 q 263 450 271 516 q 256 333 256 384 "},\u03B6:{x_min:64,x_max:667,ha:656,o:"m 231 360 l 231 340 l 231 314 q 343 192 231 217 q 554 162 448 176 q 667 24 667 133 q 628 -103 667 -42 q 525 -221 589 -164 l 458 -181 q 505 -114 493 -134 q 521 -63 516 -95 q 375 13 521 -6 q 146 71 229 33 q 64 260 64 110 q 123 495 64 382 q 257 692 182 608 q 467 905 333 776 q 278 903 353 905 q 122 893 204 901 l 126 958 l 122 1024 q 255 1019 166 1024 q 389 1015 344 1015 q 511 1019 429 1015 q 635 1024 593 1024 l 630 978 l 634 934 q 433 764 520 848 q 288 578 346 680 q 231 360 231 476 "},\u03B8:{x_min:34,x_max:710,ha:749,o:"m 710 450 q 636 110 710 240 q 367 -19 562 -19 q 104 103 175 -19 q 34 434 34 226 q 106 774 34 641 q 368 908 178 908 q 637 785 565 908 q 710 450 710 662 m 370 416 q 305 413 351 416 q 255 410 259 410 q 257 322 255 371 q 266 208 259 273 q 292 96 272 143 q 370 49 312 49 q 429 72 406 49 q 463 135 452 96 q 479 263 474 192 q 484 410 484 335 q 418 413 464 410 q 370 416 372 416 m 484 601 q 464 769 484 698 q 372 840 445 840 q 277 759 300 840 q 255 560 255 679 l 255 492 l 372 488 l 488 492 l 484 601 "},\u039F:{x_min:40,x_max:1086,ha:1129,o:"m 577 949 q 945 829 804 949 q 1086 486 1086 710 q 942 114 1086 244 q 552 -15 798 -15 q 176 107 313 -15 q 40 465 40 229 q 188 823 40 697 q 577 949 337 949 m 562 73 q 773 194 706 73 q 840 472 840 315 q 773 742 840 624 q 566 860 706 860 q 353 742 420 860 q 287 465 287 624 q 353 193 287 313 q 562 73 420 73 "},\u0393:{x_min:91,x_max:639.609375,ha:650,o:"m 232 926 l 449 926 l 639 932 l 635 866 l 639 802 q 485 815 548 812 q 341 819 423 819 q 338 769 339 805 q 337 681 337 734 l 337 635 l 337 312 q 339 138 337 195 q 351 0 341 81 l 216 4 l 91 0 q 100 238 91 70 q 109 465 109 406 q 105 713 109 613 q 91 932 102 813 q 161 929 114 932 q 232 926 209 926 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:28,x_max:1085,ha:1122,o:"m 265 910 q 434 844 369 910 q 500 672 500 779 q 435 496 500 562 q 258 431 370 431 q 91 498 154 431 q 28 669 28 565 q 93 843 28 776 q 265 910 158 910 m 831 1015 l 917 1014 l 272 -125 l 184 -125 l 831 1015 m 849 463 q 1020 401 955 463 q 1085 230 1085 339 q 1023 51 1085 117 q 845 -15 961 -15 q 677 51 742 -15 q 612 222 612 118 q 675 398 612 333 q 849 463 738 463 m 196 561 q 214 505 196 532 q 261 478 232 478 q 297 489 280 478 q 323 525 314 501 q 335 586 332 548 q 339 669 339 625 q 337 723 339 697 q 332 780 336 749 q 311 836 327 811 q 264 861 296 861 q 204 820 222 861 q 191 752 194 786 q 188 669 188 719 q 196 561 188 615 m 779 112 q 797 57 779 83 q 847 31 816 31 q 895 59 873 31 q 916 114 916 87 q 922 222 922 162 q 922 275 922 248 q 915 338 917 312 q 896 389 912 364 q 848 414 880 414 q 812 404 827 414 q 791 375 797 394 q 776 312 780 347 q 772 241 772 276 l 772 222 q 772 183 772 201 q 779 112 773 165 "},P:{x_min:91,x_max:765,ha:801,o:"m 334 201 q 335 129 334 148 q 348 0 336 110 q 272 3 317 0 q 219 6 226 6 q 143 3 189 6 q 91 0 97 0 q 104 212 100 112 q 108 462 108 313 q 99 725 108 549 q 91 933 91 900 q 161 929 111 933 q 215 925 211 925 l 395 933 l 445 933 q 677 876 590 933 q 765 681 765 819 q 691 486 765 565 q 544 400 618 408 q 423 390 470 391 q 334 389 375 389 l 334 201 m 536 669 q 498 788 536 741 q 390 836 461 836 l 334 836 l 334 694 l 334 486 q 485 529 435 486 q 536 669 536 572 "},\u038F:{x_min:-28,x_max:1452.5625,ha:1489,o:"m 1451 129 q 1448 104 1448 117 q 1448 83 1448 90 l 1448 70 q 1448 36 1448 52 q 1452 0 1448 19 l 1231 4 l 993 0 l 993 103 q 1126 251 1091 162 q 1161 473 1161 340 q 1092 741 1161 623 q 884 860 1024 860 q 673 738 738 860 q 608 457 608 616 q 646 245 608 339 q 774 102 684 152 l 774 0 l 534 4 l 314 0 l 316 80 l 313 129 q 542 113 429 113 q 405 258 449 167 q 362 464 362 350 q 512 821 362 693 q 899 949 663 949 q 1266 830 1124 949 q 1408 491 1408 712 q 1360 272 1408 363 q 1206 112 1312 180 q 1451 129 1327 112 m 158 953 q 211 1001 191 986 q 259 1017 231 1017 q 312 994 291 1017 q 333 943 333 972 q 314 897 333 916 q 265 863 295 878 l 40 755 l -28 755 l 158 953 "},\u0388:{x_min:-28,x_max:1020.609375,ha:1078,o:"m 485 222 l 485 465 q 481 710 485 620 q 467 931 478 800 l 733 926 q 896 929 781 926 q 1020 932 1010 932 q 1016 903 1017 916 q 1015 872 1015 890 q 1015 848 1015 857 q 1020 810 1016 839 q 906 815 983 810 q 791 820 830 820 l 715 820 l 711 544 l 1010 556 q 1006 527 1008 540 q 1005 493 1005 513 l 1009 430 q 836 436 948 430 q 711 443 724 443 l 711 296 q 713 189 711 264 q 715 113 715 115 q 1015 129 865 113 l 1010 63 l 1015 0 q 810 3 938 0 q 655 7 681 7 q 545 3 612 7 q 466 0 478 0 q 478 114 472 54 q 485 222 485 175 m 158 953 q 212 1001 191 986 q 260 1017 232 1017 q 313 994 292 1017 q 334 943 334 972 q 315 897 334 916 q 265 863 296 878 l 40 755 l -28 755 l 158 953 "},_:{x_min:0,x_max:683.328125,ha:683,o:"m 683 -184 l 683 -322 l 0 -322 l 0 -184 l 683 -184 "},\u03AA:{x_min:-1,x_max:450,ha:449,o:"m 110 402 q 103 709 110 511 q 97 932 97 908 q 161 926 130 929 q 220 923 192 923 q 287 927 242 923 q 351 931 331 931 q 343 688 351 859 q 336 465 336 516 q 343 221 336 391 q 351 0 351 51 q 283 2 330 0 q 212 5 236 5 l 97 0 q 103 233 97 83 q 110 402 110 383 m 93 1242 q 160 1215 132 1242 q 188 1148 188 1189 q 162 1078 188 1107 q 97 1050 136 1050 q 28 1079 57 1050 q -1 1148 -1 1108 q 26 1214 -1 1186 q 93 1242 54 1242 m 352 1242 q 421 1214 393 1242 q 450 1148 450 1187 q 423 1079 450 1108 q 356 1050 397 1050 q 286 1078 316 1050 q 257 1148 257 1107 q 286 1214 257 1186 q 352 1242 315 1242 "},"+":{x_min:169,x_max:968,ha:1138,o:"m 636 813 l 636 473 l 968 473 l 968 340 l 636 340 l 636 0 l 501 0 l 501 340 l 169 340 l 169 473 l 501 473 l 501 813 l 636 813 "},"\xBD":{x_min:68,x_max:1145.765625,ha:1171,o:"m 207 481 l 207 736 l 207 808 q 150 784 180 798 q 103 763 120 770 l 68 813 q 195 860 131 834 q 331 918 259 886 l 348 909 q 346 744 348 844 q 344 644 344 645 l 345 650 l 345 505 l 345 511 q 345 458 345 480 q 349 391 345 437 l 299 394 q 247 392 281 394 q 198 391 213 391 l 207 481 m 844 1014 l 928 1014 l 326 -124 l 243 -124 l 844 1014 m 721 42 q 908 194 839 122 q 977 365 977 266 q 962 434 977 408 q 905 460 947 460 q 840 427 864 460 q 805 345 816 395 l 795 345 q 768 379 789 358 q 727 418 747 400 q 822 487 773 465 q 936 510 870 510 q 1068 474 1012 510 q 1124 365 1124 439 q 1035 209 1124 271 q 890 110 947 147 l 970 109 q 1070 111 999 109 q 1145 114 1140 114 q 1134 48 1134 80 q 1138 23 1134 37 q 1144 0 1143 9 l 1006 3 l 729 3 l 721 42 "},\u03A1:{x_min:91,x_max:765,ha:801,o:"m 334 201 q 335 129 334 148 q 348 0 336 110 q 272 3 317 0 q 219 6 226 6 q 143 3 189 6 q 91 0 97 0 q 104 212 100 112 q 108 462 108 313 q 99 725 108 549 q 91 933 91 900 q 161 929 111 933 q 215 925 211 925 l 395 933 l 445 933 q 677 876 590 933 q 765 681 765 819 q 691 486 765 565 q 544 400 618 408 q 423 390 470 391 q 334 389 375 389 l 334 201 m 536 669 q 498 788 536 741 q 390 836 461 836 l 334 836 l 334 694 l 334 486 q 485 529 435 486 q 536 669 536 572 "},"'":{x_min:72.21875,x_max:337.5,ha:375,o:"m 72 528 l 152 848 q 184 919 159 889 q 245 949 209 949 q 311 923 284 949 q 337 861 337 898 q 315 797 337 827 l 112 511 l 72 528 "},T:{x_min:8,x_max:738,ha:749,o:"m 493 818 q 490 723 493 790 q 487 652 487 656 q 490 427 487 529 q 498 201 494 326 q 503 0 503 77 q 438 2 482 0 q 374 5 395 5 q 317 3 351 5 q 244 0 284 1 q 252 266 244 88 q 261 476 261 444 q 258 670 261 533 q 255 818 255 808 q 158 815 188 818 q 8 801 128 813 l 12 872 l 8 932 q 198 927 70 932 q 373 922 327 922 q 572 927 445 922 q 738 932 700 932 l 733 870 l 738 801 q 493 818 614 818 "},\u03A6:{x_min:36,x_max:1093,ha:1129,o:"m 445 960 q 513 952 484 955 q 566 950 543 950 q 634 954 599 950 q 683 960 669 958 q 676 909 680 943 q 672 858 672 876 l 751 851 q 998 732 904 829 q 1093 484 1093 634 q 980 206 1093 301 q 672 72 867 112 q 673 31 672 44 q 683 -26 674 19 q 619 -20 653 -23 q 566 -17 585 -17 q 500 -20 535 -17 q 445 -26 465 -24 q 453 17 449 -5 q 458 72 458 40 l 380 82 q 133 205 231 103 q 36 454 36 307 q 150 732 36 636 q 458 858 265 828 q 452 911 458 879 q 445 960 447 943 m 668 700 l 668 467 l 668 234 l 672 171 q 817 266 774 182 q 861 468 861 351 q 817 666 861 583 q 669 764 773 750 l 668 700 m 419 755 q 301 654 336 739 q 267 469 267 570 q 309 267 267 351 q 455 171 351 183 l 458 234 l 462 424 l 458 700 l 458 764 l 419 755 "},j:{x_min:-62,x_max:313,ha:396,o:"m 196 660 q 235 660 215 660 q 307 666 254 661 l 306 490 q 309 182 306 369 q 313 -31 313 -4 q 217 -278 313 -195 q -49 -361 121 -361 l -62 -305 q 59 -240 24 -305 q 95 -81 95 -175 l 95 255 q 89 459 95 322 q 84 666 84 597 q 196 660 143 660 m 195 1014 q 272 980 239 1014 q 306 902 306 947 q 273 825 306 858 q 195 793 240 793 q 117 824 150 793 q 84 902 84 856 q 117 980 84 947 q 195 1014 150 1014 "},\u03A3:{x_min:18.0625,x_max:801.390625,ha:843,o:"m 747 865 l 751 804 q 641 808 715 804 q 527 813 568 813 l 369 813 q 481 664 427 733 q 594 519 534 594 q 402 315 496 419 l 304 203 l 544 203 q 672 208 586 203 q 801 214 758 214 l 794 112 q 801 0 794 59 l 456 4 l 18 0 l 18 57 q 261 330 138 181 l 365 461 q 222 657 298 559 q 55 865 147 755 l 55 932 q 243 928 118 932 q 431 924 368 924 q 630 928 511 924 q 751 932 750 932 l 747 865 "},"1":{x_min:55,x_max:502,ha:749,o:"m 276 616 q 273 680 276 637 q 271 747 271 723 q 197 713 223 726 q 112 666 172 700 l 55 754 q 471 940 291 848 l 498 927 l 492 454 l 493 465 l 493 202 l 493 216 q 497 102 493 178 q 502 0 502 26 l 383 6 q 314 3 362 6 q 264 0 266 0 q 270 359 264 127 q 276 616 276 591 "},\u00E4:{x_min:44,x_max:706.78125,ha:706,o:"m 236 -15 q 98 35 153 -15 q 44 169 44 86 q 212 352 44 301 q 401 421 380 403 q 410 439 410 432 q 373 539 410 502 q 275 577 337 577 q 140 511 185 577 l 135 511 l 115 585 q 230 657 164 632 q 365 683 296 683 q 543 623 479 683 q 608 452 608 564 l 604 213 q 604 166 604 184 q 608 123 604 148 q 625 87 612 99 q 658 76 638 76 q 679 80 666 76 q 702 90 691 84 l 706 40 q 643 1 676 14 q 563 -15 610 -10 q 480 5 518 -15 q 419 64 442 25 q 236 -15 350 -15 m 221 976 q 289 948 261 976 q 317 878 317 920 q 290 811 317 839 q 223 784 264 784 q 155 811 186 784 q 125 878 125 839 q 154 946 125 917 q 221 976 183 976 m 481 976 q 549 948 521 976 q 577 878 577 920 q 550 811 577 839 q 483 784 524 784 q 414 812 444 784 q 385 878 385 841 q 412 946 385 917 q 481 976 440 976 m 240 200 q 261 128 240 158 q 321 99 282 99 q 388 131 367 99 q 410 211 410 164 l 410 352 q 287 302 335 338 q 240 200 240 267 "},"<":{x_min:175,x_max:959.75,ha:1138,o:"m 959 650 l 362 406 l 959 162 l 959 17 l 175 340 l 175 471 l 959 796 l 959 650 "},"\xA3":{x_min:48,x_max:734.109375,ha:749,o:"m 56 88 q 52 142 56 117 q 48 181 49 167 q 138 198 100 181 q 185 254 177 215 q 193 315 193 292 l 191 429 l 153 429 q 99 425 128 429 q 56 421 70 421 l 61 467 l 56 512 q 113 506 81 508 q 184 504 145 504 q 172 598 172 552 q 259 829 172 748 q 499 910 346 910 q 734 848 623 910 q 710 778 718 809 q 691 695 702 747 l 658 695 q 613 795 645 758 q 523 833 581 833 q 417 787 455 833 q 379 671 379 741 q 384 582 379 637 q 391 504 390 527 l 463 504 l 480 504 q 519 504 500 504 q 598 512 538 505 l 593 466 l 598 422 l 493 429 l 391 429 q 343 288 382 340 q 219 184 303 236 l 542 189 l 724 195 q 716 146 720 174 q 711 98 711 117 q 713 62 711 78 q 724 0 716 45 q 557 3 667 0 q 391 8 448 8 q 220 3 334 8 q 48 0 106 0 q 52 46 49 16 q 56 88 56 77 "},"\xB9":{x_min:66,x_max:360,ha:494,o:"m 212 726 l 212 802 q 158 781 187 795 q 102 755 129 768 l 66 808 q 206 857 157 838 q 342 919 256 876 l 356 910 l 356 627 l 356 638 l 356 477 l 356 484 q 356 429 356 451 q 360 354 356 408 l 307 358 l 202 354 q 210 520 209 418 q 212 634 212 623 l 212 726 "},t:{x_min:9,x_max:468.71875,ha:463,o:"m 9 584 l 10 627 l 10 671 q 54 667 25 668 q 102 667 84 667 l 102 687 l 102 704 q 95 823 102 765 q 192 859 147 839 q 298 914 237 880 l 327 914 q 319 853 323 890 q 315 791 315 816 l 315 667 l 344 667 q 433 670 387 667 l 430 629 l 430 582 l 309 584 l 309 226 q 322 107 309 149 q 393 65 335 65 q 468 72 427 65 l 463 9 q 381 -11 425 -4 q 292 -18 336 -18 q 145 25 196 -18 q 95 165 95 69 q 98 410 95 260 q 102 583 102 559 l 9 584 "},\u03BB:{x_min:22.609375,x_max:662.890625,ha:686,o:"m 550 0 l 433 0 q 394 177 417 79 q 360 323 372 275 q 318 490 349 372 q 234 238 269 359 q 179 0 199 116 l 103 0 l 22 0 q 109 214 69 109 q 182 416 149 318 q 264 662 215 514 q 214 834 247 760 q 111 909 180 909 q 80 903 99 909 q 51 895 61 898 l 32 964 q 121 1008 76 993 q 215 1024 167 1024 q 384 925 342 1024 q 458 718 426 826 l 529 459 l 662 0 l 550 0 "},\u00F9:{x_min:75,x_max:722,ha:808,o:"m 474 757 l 249 865 q 198 900 216 883 q 181 946 181 917 q 203 998 181 977 q 256 1019 225 1019 q 303 1003 282 1019 q 356 955 324 987 l 542 757 l 474 757 m 292 -15 q 142 41 202 -15 q 83 189 83 98 l 83 337 q 79 509 83 394 q 75 668 75 624 q 134 661 108 663 q 185 659 160 659 q 240 662 209 659 q 300 668 271 665 q 290 455 290 570 l 290 384 l 290 279 q 316 146 290 181 q 394 111 343 111 q 467 147 441 111 q 501 234 493 184 l 501 330 q 499 488 501 415 q 495 668 497 562 q 554 662 518 665 q 613 659 589 659 q 671 662 640 659 q 722 668 701 665 q 717 505 722 625 q 712 326 712 386 q 717 156 712 270 q 722 1 722 43 l 617 4 l 511 1 l 511 96 q 410 15 468 46 q 292 -15 353 -15 "},W:{x_min:-8.328125,x_max:1325,ha:1326,o:"m -8 932 q 67 929 13 932 q 125 926 120 926 q 190 929 147 926 q 255 932 233 932 q 300 737 277 829 q 357 519 323 644 q 419 298 391 394 q 504 548 455 403 q 576 759 554 693 q 633 932 598 825 l 711 926 q 756 929 726 926 q 802 932 787 932 q 859 729 836 807 q 913 557 881 651 q 998 297 944 462 q 1166 932 1094 604 l 1248 926 q 1298 929 1280 926 q 1325 932 1316 932 l 1230 643 l 1019 0 q 972 4 983 4 q 937 5 962 5 q 884 2 904 5 q 855 0 865 0 q 793 200 831 80 q 740 363 754 319 l 652 623 q 543 325 594 476 q 441 0 493 175 q 393 3 423 0 q 359 6 363 6 q 308 4 330 6 q 272 0 286 1 q 184 320 222 191 q 107 576 147 450 q -8 932 68 703 "},\u00EF:{x_min:-26,x_max:422,ha:396,o:"m 93 126 l 93 542 q 87 601 93 557 q 82 666 82 645 q 141 660 111 663 q 198 658 172 658 q 255 661 223 658 q 316 666 287 663 q 311 621 315 658 q 303 544 307 584 l 303 319 l 303 115 l 315 0 l 195 2 l 81 0 q 93 126 93 66 m 68 976 q 134 947 107 976 q 162 878 162 918 q 136 811 162 839 q 71 784 111 784 q 2 811 31 784 q -26 878 -26 838 q 1 946 -26 917 q 68 976 29 976 m 327 976 q 394 948 366 976 q 422 878 422 920 q 396 811 422 838 q 329 784 370 784 q 260 811 288 784 q 232 878 232 838 q 260 947 232 918 q 327 976 288 976 "},">":{x_min:174.984375,x_max:961,ha:1138,o:"m 961 472 l 961 340 l 175 17 l 175 162 l 773 406 l 174 650 l 174 796 l 961 472 "},v:{x_min:0,x_max:669.453125,ha:667,o:"m 0 667 q 75 663 26 667 q 131 659 123 659 q 202 663 156 659 q 255 667 247 667 l 293 528 l 387 223 q 526 667 473 447 l 595 659 q 637 663 611 659 q 669 667 663 667 q 541 343 602 505 q 418 0 480 181 q 368 4 395 2 q 330 6 341 6 q 279 3 311 6 q 244 0 248 0 q 129 340 184 186 q 0 667 73 494 "},\u03C4:{x_min:9,x_max:654.84375,ha:661,o:"m 446 557 l 445 521 l 445 108 q 456 0 445 55 l 338 4 l 225 0 q 234 69 231 40 q 237 125 237 98 l 237 320 l 237 516 l 237 557 q 59 459 115 557 l 24 459 q 20 516 24 490 q 9 581 17 543 q 122 641 59 625 q 263 658 185 658 l 440 656 q 654 667 556 656 q 649 610 649 641 q 654 554 649 580 q 525 555 603 554 q 446 557 447 557 "},\u00FB:{x_min:75,x_max:722,ha:808,o:"m 339 1004 l 463 1004 l 616 757 l 549 757 l 400 879 l 254 757 l 186 757 l 339 1004 m 292 -15 q 142 41 202 -15 q 83 189 83 98 l 83 337 q 79 509 83 394 q 75 668 75 625 q 134 662 108 664 q 185 660 160 660 q 240 662 209 660 q 300 668 271 665 q 290 455 290 570 l 290 384 l 290 279 q 316 146 290 181 q 394 111 343 111 q 467 147 441 111 q 501 234 493 184 l 501 330 q 499 488 501 415 q 495 668 497 562 q 554 662 518 665 q 613 660 589 660 q 671 662 640 660 q 722 668 701 665 q 717 505 722 625 q 712 326 712 386 q 717 156 712 270 q 722 1 722 43 l 617 4 l 511 1 l 511 96 q 410 15 468 46 q 292 -15 353 -15 "},\u03BE:{x_min:53,x_max:675,ha:675,o:"m 559 813 q 508 904 534 873 q 432 936 482 936 q 335 887 372 936 q 299 776 299 838 q 372 648 299 683 q 550 614 446 614 l 546 569 l 546 525 l 455 528 q 320 498 379 528 q 251 432 261 469 q 240 386 241 396 q 239 360 239 376 q 240 322 239 335 q 244 304 241 310 q 363 205 258 226 q 569 165 469 183 q 675 25 675 130 q 647 -83 675 -27 q 536 -221 619 -139 l 468 -181 q 514 -114 498 -141 q 531 -55 531 -88 q 380 23 531 -5 q 141 98 229 53 q 53 287 53 143 q 113 467 53 390 q 274 586 173 544 q 144 666 196 615 q 92 790 92 716 q 180 962 92 901 q 389 1024 269 1024 q 515 1009 455 1024 q 640 963 575 994 q 620 886 632 936 q 604 809 608 836 l 559 813 "},"&":{x_min:50,x_max:948.609375,ha:974,o:"m 316 -18 q 128 44 206 -18 q 50 215 50 107 q 115 388 50 315 q 281 502 180 462 q 216 609 243 547 q 190 723 190 670 q 266 877 190 823 q 446 932 342 932 q 604 889 537 932 q 672 761 672 847 q 621 631 672 687 q 495 541 571 576 q 709 295 593 412 q 786 421 751 348 q 845 567 822 494 q 880 517 861 538 q 934 463 899 495 q 851 336 888 387 q 761 233 813 285 q 856 123 811 174 q 948 26 902 71 l 948 1 q 860 7 887 6 q 817 8 833 8 q 756 6 779 8 q 690 1 734 5 l 612 92 q 469 11 545 40 q 316 -18 394 -18 m 232 284 q 284 160 232 214 q 408 106 337 106 q 484 118 449 106 q 562 155 519 130 q 421 323 469 264 q 330 443 373 382 q 258 373 284 411 q 232 284 232 336 m 547 759 q 522 831 547 802 q 453 860 498 860 q 419 854 435 860 q 379 823 394 850 q 365 769 365 797 q 383 697 365 740 q 449 597 402 654 q 520 668 493 627 q 547 759 547 709 "},\u039B:{x_min:-19.4375,x_max:856.953125,ha:836,o:"m 583 700 l 856 0 q 781 3 823 0 q 723 6 740 6 q 645 3 688 6 q 587 0 602 0 q 563 90 579 43 q 538 163 547 137 l 359 637 l 189 161 q 142 0 163 87 l 72 5 q 35 4 48 5 q -19 0 23 4 q 25 92 -2 33 q 83 226 52 151 l 272 698 q 311 810 290 747 q 348 932 331 873 q 394 927 379 929 q 423 926 409 926 q 474 929 456 926 q 501 932 491 932 q 583 700 536 819 "},I:{x_min:94,x_max:354,ha:447,o:"m 111 402 q 107 716 111 609 q 94 932 103 822 q 161 925 124 929 q 220 922 198 922 q 292 927 245 922 q 353 931 339 932 q 340 716 343 819 q 337 465 337 613 q 340 221 337 326 q 354 0 344 116 q 273 2 330 0 q 214 5 216 5 l 95 0 q 107 199 103 88 q 111 402 111 311 "},G:{x_min:43,x_max:948,ha:1015,o:"m 552 -15 q 183 110 324 -15 q 43 461 43 236 q 195 823 43 693 q 583 954 347 954 q 763 932 679 954 q 929 865 848 911 q 879 697 895 784 l 862 697 q 749 816 818 772 q 595 860 680 860 q 390 769 471 860 q 300 608 309 679 q 289 513 291 536 q 287 469 287 490 q 289 404 287 426 q 294 375 292 382 q 389 167 310 250 q 590 84 468 84 q 713 100 651 84 q 699 430 713 272 q 824 423 768 423 q 948 431 886 423 q 942 323 948 395 q 937 214 937 251 q 939 118 937 185 q 942 47 942 51 q 746 1 839 17 q 552 -15 652 -15 "},\u03B0:{x_min:39,x_max:768,ha:843,o:"m 768 415 q 666 114 768 244 q 404 -15 565 -15 q 165 56 246 -15 q 85 284 85 127 l 89 478 q 87 589 89 523 q 85 666 85 656 q 148 663 102 666 q 198 661 194 661 q 266 663 219 661 q 314 666 312 666 q 298 476 304 566 q 293 294 293 387 q 313 122 293 193 q 405 52 333 52 q 518 146 490 52 q 547 351 547 240 q 528 502 547 433 q 472 656 510 570 q 583 659 531 656 q 687 672 636 662 q 746 547 725 613 q 768 415 768 481 m 121 961 q 179 935 155 961 q 203 877 203 910 q 179 820 203 844 q 121 797 155 797 q 64 820 89 797 q 39 879 39 844 q 62 935 39 910 q 121 961 86 961 m 462 1017 q 504 998 486 1017 q 522 957 522 980 q 508 919 522 935 q 470 886 494 903 l 282 755 l 224 755 l 368 950 q 413 998 391 979 q 462 1017 434 1017 m 657 961 q 713 935 688 961 q 739 877 739 910 q 715 820 739 844 q 658 797 691 797 q 600 820 625 797 q 575 879 575 844 q 599 936 575 912 q 657 961 623 961 "},"`":{x_min:65.671875,x_max:330.9375,ha:375,o:"m 251 613 q 217 540 240 569 q 153 512 193 512 q 92 537 118 512 q 65 598 65 562 q 87 665 65 634 l 292 949 l 330 933 l 251 613 "},\u03A5:{x_min:-30,x_max:797,ha:747,o:"m 136 650 q 67 772 123 672 q -30 932 10 872 l 92 926 q 184 929 120 926 q 256 931 249 931 q 345 740 304 825 q 442 554 386 656 q 541 730 492 636 q 637 931 589 825 l 712 926 q 753 929 726 926 q 797 931 781 931 q 644 689 714 812 q 498 420 573 566 l 502 143 l 508 0 l 414 5 l 256 0 q 262 138 256 50 q 269 237 269 226 l 269 402 l 136 650 "},r:{x_min:80,x_max:505,ha:521,o:"m 91 326 q 85 495 91 381 q 80 666 80 609 l 181 661 q 246 663 201 661 q 297 666 291 666 q 283 592 287 630 q 280 504 280 554 l 288 504 q 357 632 311 581 q 474 683 403 683 l 505 683 q 495 571 498 631 q 492 457 492 511 q 448 477 471 468 q 406 486 424 486 q 320 439 343 486 q 298 323 298 392 q 300 147 298 208 q 311 0 302 85 q 247 3 288 0 q 195 6 206 6 q 130 3 171 6 q 80 0 88 0 q 85 162 80 53 q 91 326 91 270 "},x:{x_min:-4.5625,x_max:646.828125,ha:644,o:"m 155 0 l 84 5 q 28 4 46 5 q -4 0 6 0 q 110 148 55 75 q 223 307 164 222 l 113 498 l 7 667 q 86 663 38 667 q 141 659 134 659 q 215 663 169 659 q 271 667 262 667 l 366 473 q 419 555 398 521 q 481 667 439 590 l 553 659 q 601 663 571 659 q 637 667 631 667 q 537 542 580 598 q 419 384 494 486 l 537 177 q 646 0 588 88 q 571 3 620 0 q 516 6 523 6 q 441 3 489 6 q 385 0 392 0 l 276 218 l 155 0 "},\u00E8:{x_min:41,x_max:684.046875,ha:729,o:"m 482 98 q 566 112 532 98 q 643 160 600 126 l 661 151 q 643 96 652 125 q 628 40 634 66 q 521 -1 577 11 q 403 -15 466 -15 q 141 79 241 -15 q 41 336 41 173 q 137 586 41 490 q 386 683 234 683 q 608 601 532 683 q 684 373 684 520 l 684 332 l 267 332 q 325 165 267 232 q 482 98 383 98 m 436 754 l 211 862 q 162 896 181 877 q 143 946 143 915 q 165 996 143 976 q 217 1017 186 1017 q 274 996 250 1017 q 320 952 298 975 l 508 754 l 436 754 m 478 411 q 481 444 481 422 q 459 566 481 513 q 377 620 438 620 q 292 562 318 620 q 267 437 267 505 l 267 411 l 478 411 "},\u03BC:{x_min:79,x_max:729,ha:808,o:"m 717 322 q 723 136 717 256 q 729 0 729 15 l 629 5 q 564 2 609 5 q 518 0 519 0 l 518 81 q 448 4 479 23 q 384 -15 417 -15 q 333 -4 352 -15 q 288 25 313 7 l 288 34 l 287 -57 l 288 -190 l 287 -180 q 292 -278 287 -212 q 297 -368 297 -344 q 221 -361 240 -361 q 189 -361 201 -361 q 150 -361 168 -361 q 79 -368 131 -362 q 86 -277 83 -323 q 90 -187 90 -231 l 90 116 q 90 303 90 177 q 90 491 90 428 q 86 593 90 530 q 82 667 82 655 q 190 659 139 659 q 255 663 214 659 q 305 666 296 666 q 301 506 305 613 q 297 360 297 398 l 297 260 q 315 142 297 189 q 396 95 334 95 q 486 153 466 95 q 507 299 507 211 q 503 517 507 385 q 500 667 500 650 q 619 659 566 659 q 683 663 645 659 q 729 666 722 666 q 723 465 729 594 q 717 322 717 336 "},"\xF7":{x_min:169,x_max:969,ha:1139,o:"m 669 667 q 638 597 669 626 q 566 568 608 568 q 497 597 526 568 q 468 669 468 626 q 497 739 468 710 q 567 769 526 769 q 639 739 610 769 q 669 667 669 710 m 969 474 l 969 342 l 169 342 l 169 474 l 969 474 m 669 144 q 638 73 669 103 q 568 44 608 44 q 497 73 526 44 q 468 142 468 102 q 498 214 468 184 q 568 244 528 244 q 639 216 610 244 q 669 144 669 188 "},h:{x_min:80,x_max:729,ha:808,o:"m 509 683 q 660 626 601 683 q 719 477 719 570 l 719 403 l 719 246 q 720 109 719 148 q 729 0 722 70 q 665 2 709 0 q 617 5 620 5 q 551 2 598 5 q 501 0 505 0 q 510 147 508 73 q 513 333 513 221 l 509 426 q 482 516 503 482 q 411 551 461 551 q 356 534 380 551 q 322 489 332 517 q 306 428 312 462 q 301 331 301 394 q 304 166 301 277 q 308 0 308 55 q 244 3 284 0 q 194 6 204 6 q 129 3 171 6 q 80 0 88 0 q 85 255 80 84 q 91 513 91 426 q 85 769 91 598 q 80 1024 80 940 l 180 1018 l 197 1018 q 308 1023 259 1018 q 304 902 308 976 q 301 815 301 827 l 301 583 q 509 683 379 683 "},".":{x_min:68,x_max:306,ha:375,o:"m 187 221 q 268 186 230 221 q 306 104 306 151 q 270 23 306 61 q 187 -15 235 -15 q 102 18 137 -15 q 68 103 68 51 q 102 186 68 151 q 187 221 137 221 "},\u03C6:{x_min:32,x_max:1012,ha:1044,o:"m 418 388 q 477 605 418 528 q 671 683 537 683 q 913 589 814 683 q 1012 352 1012 495 q 902 94 1012 180 q 612 -7 793 9 q 617 -198 612 -69 q 622 -374 622 -326 l 544 -365 q 471 -366 503 -365 q 404 -373 438 -368 q 411 -183 404 -315 q 418 -5 418 -51 q 359 1 377 0 q 320 8 341 2 q 112 118 193 29 q 32 334 32 206 q 123 568 32 488 q 374 669 215 648 q 381 643 376 656 q 393 612 386 629 q 278 504 311 576 q 246 329 246 431 q 285 142 246 223 q 418 61 325 61 l 418 276 l 418 388 m 612 61 q 707 88 670 66 q 763 157 743 109 q 788 255 782 205 q 794 377 794 305 q 791 450 794 416 q 779 528 788 484 q 748 593 770 572 q 696 614 725 614 q 631 564 650 614 q 612 459 612 515 l 612 276 l 612 61 "},";":{x_min:51.390625,x_max:347,ha:447,o:"m 226 654 q 310 619 274 654 q 347 534 347 584 q 312 450 347 485 q 227 416 277 416 q 142 449 177 416 q 108 534 108 482 q 142 619 108 584 q 226 654 177 654 m 134 120 q 172 203 145 170 q 244 237 200 237 q 313 207 284 237 q 343 137 343 178 q 337 100 343 116 q 319 63 331 84 l 88 -254 l 51 -238 l 134 120 "},f:{x_min:8,x_max:463.5625,ha:425,o:"m 381 1024 q 433 1019 413 1024 q 463 1010 453 1012 q 443 934 456 987 q 419 826 430 880 l 412 826 q 362 862 384 850 q 310 874 339 874 q 233 812 233 874 q 258 729 233 773 q 300 658 284 685 l 317 658 q 354 658 336 658 q 428 665 372 659 l 425 669 l 425 641 q 425 607 425 625 q 425 576 425 590 l 356 583 l 306 583 l 306 273 q 308 166 306 200 q 323 0 310 133 q 258 3 299 0 q 209 6 217 6 q 144 3 185 6 q 92 0 102 0 q 102 127 99 51 q 105 272 105 203 l 105 580 l 56 583 l 8 583 l 9 622 l 9 665 q 52 659 29 660 q 105 658 74 658 q 183 904 105 784 q 381 1024 262 1024 "},"\u201C":{x_min:65.28125,x_max:609.71875,ha:654,o:"m 251 613 q 218 541 243 570 q 154 512 194 512 q 90 537 116 512 q 65 601 65 563 q 87 665 65 634 l 291 949 l 331 933 l 251 613 m 530 613 q 498 542 525 573 q 433 512 472 512 q 371 536 397 512 q 345 598 345 560 q 366 665 345 633 l 570 949 l 609 933 l 530 613 "},A:{x_min:-29.171875,x_max:850,ha:829,o:"m 109 322 q 193 530 143 400 q 278 751 244 660 q 351 949 312 843 l 420 944 l 490 949 q 672 450 584 685 q 850 0 759 215 l 716 4 l 580 0 l 551 91 l 497 259 q 398 261 448 259 q 300 264 348 262 l 202 259 q 112 0 162 134 l 22 4 l -29 0 l 109 322 m 354 368 l 464 368 q 416 509 440 446 q 355 662 393 572 q 243 370 295 519 l 354 368 "},"6":{x_min:40,x_max:716,ha:749,o:"m 463 545 q 646 475 576 545 q 716 293 716 405 q 628 65 716 150 q 398 -19 541 -19 q 133 84 226 -19 q 40 362 40 187 q 160 750 40 590 q 501 911 280 911 q 582 903 544 911 q 670 879 620 895 q 658 812 663 845 q 652 748 652 779 l 643 747 q 579 804 612 784 q 502 825 546 825 q 330 716 383 825 q 278 475 278 608 q 359 528 309 511 q 463 545 409 545 m 383 449 q 297 393 317 449 q 278 257 278 337 q 296 113 278 174 q 381 52 315 52 q 469 110 449 52 q 490 256 490 169 q 469 393 490 337 q 383 449 449 449 "},"\u2018":{x_min:68.0625,x_max:331.9375,ha:374,o:"m 251 613 q 218 540 241 569 q 151 512 194 512 q 92 537 116 512 q 68 599 68 563 q 75 632 68 612 q 90 663 81 652 l 293 949 l 331 935 l 251 613 "},\u03CA:{x_min:-28,x_max:423,ha:396,o:"m 91 126 l 91 543 l 80 666 q 139 661 105 663 q 196 658 173 658 q 264 660 238 658 q 314 666 290 663 q 304 586 307 616 q 301 523 301 557 l 301 113 q 302 72 301 88 q 314 0 304 56 l 195 4 l 81 0 q 87 67 84 30 q 91 126 91 104 m 68 975 q 136 947 108 975 q 164 879 164 919 q 138 811 164 840 q 72 783 112 783 q 2 810 33 783 q -28 879 -28 838 q 0 947 -28 919 q 68 975 27 975 m 328 975 q 395 947 367 975 q 423 879 423 919 q 397 811 423 840 q 331 783 371 783 q 261 810 292 783 q 231 879 231 838 q 258 947 231 919 q 328 975 286 975 "},\u03C0:{x_min:19,x_max:957.890625,ha:965,o:"m 802 521 l 802 108 l 812 0 l 696 4 l 582 0 q 585 61 582 19 q 589 125 589 102 l 594 320 l 589 557 l 504 563 l 421 557 l 421 520 l 421 108 q 432 0 421 55 l 314 4 l 200 0 q 209 64 206 37 q 213 115 213 91 l 213 315 l 213 514 l 213 557 q 129 531 165 557 q 68 461 93 505 l 33 461 q 31 510 33 497 q 19 603 30 523 q 136 645 75 634 q 273 657 196 657 l 531 657 l 792 657 l 957 667 l 955 612 l 957 552 l 803 557 l 802 521 "},\u03AC:{x_min:30,x_max:827.21875,ha:878,o:"m 669 665 l 749 662 l 827 665 q 763 499 782 551 q 720 377 743 447 l 818 0 q 763 6 792 2 q 717 10 733 10 q 662 5 692 10 q 615 0 632 1 l 594 101 q 361 -15 501 -15 q 120 83 210 -15 q 30 334 30 182 q 123 583 30 484 q 368 683 217 683 q 515 647 449 683 q 633 547 582 612 q 651 601 640 563 q 669 665 662 638 m 523 952 q 576 1001 556 986 q 625 1017 596 1017 q 677 994 656 1017 q 698 943 698 972 q 679 896 698 915 q 629 862 660 877 l 406 754 l 337 754 l 523 952 m 383 614 q 313 588 343 614 q 276 523 283 562 q 260 434 265 484 q 256 333 256 385 q 269 174 256 249 q 305 87 275 122 q 385 52 335 52 q 509 144 473 52 q 546 340 546 236 q 522 504 546 428 q 455 597 498 580 q 383 614 411 614 "},O:{x_min:40,x_max:1086,ha:1129,o:"m 577 949 q 945 829 804 949 q 1086 486 1086 710 q 942 114 1086 244 q 552 -15 798 -15 q 176 107 313 -15 q 40 465 40 229 q 188 823 40 697 q 577 949 337 949 m 562 73 q 773 194 706 73 q 840 472 840 315 q 773 742 840 624 q 566 860 706 860 q 353 742 420 860 q 287 465 287 624 q 353 193 287 313 q 562 73 420 73 "},n:{x_min:80,x_max:727,ha:808,o:"m 91 338 q 85 512 91 391 q 80 667 80 632 q 137 661 125 662 q 180 661 149 661 q 249 661 215 661 q 293 666 279 665 l 293 568 q 391 648 333 616 q 508 681 449 681 q 659 624 600 681 q 719 475 719 567 l 719 329 q 723 172 719 287 q 727 0 727 58 q 673 2 709 0 q 617 5 637 5 q 552 2 598 5 q 502 0 506 0 q 507 175 502 58 q 512 333 512 291 l 512 358 q 508 426 512 393 q 483 514 508 476 q 411 552 459 552 q 355 534 379 552 q 318 487 331 517 q 302 419 305 457 q 299 330 299 382 q 304 148 299 264 q 309 0 309 33 q 244 3 285 0 q 195 6 203 6 q 128 3 170 6 q 80 0 86 0 q 85 188 80 65 q 91 338 91 311 "},"3":{x_min:30,x_max:680,ha:749,o:"m 365 908 q 561 853 479 908 q 643 691 643 799 q 593 565 643 612 q 457 485 544 517 l 457 476 q 617 410 555 463 q 680 260 680 356 q 573 50 680 122 q 318 -21 466 -21 q 30 58 155 -21 q 90 161 67 120 q 137 250 113 202 l 154 250 q 185 109 154 167 q 292 51 216 51 q 404 109 367 51 q 442 245 442 167 q 397 376 442 327 q 271 425 353 425 l 231 425 l 231 505 l 268 504 q 392 549 345 504 q 439 670 439 594 q 408 785 439 738 q 313 833 377 833 q 213 776 244 833 q 183 644 183 719 l 170 634 q 121 690 145 665 q 43 767 97 716 q 179 874 94 840 q 365 908 265 908 "},"9":{x_min:30,x_max:705,ha:749,o:"m 281 343 q 98 414 167 343 q 30 601 30 486 q 121 827 30 744 q 359 911 213 911 q 618 801 532 911 q 705 515 705 692 q 583 135 705 291 q 243 -21 461 -21 q 158 -12 193 -21 q 74 9 123 -4 q 87 74 82 42 q 92 140 92 106 l 102 143 q 163 84 127 105 q 243 64 199 64 q 414 172 362 64 q 467 414 467 280 q 386 359 435 376 q 281 343 337 343 m 360 440 q 446 495 426 440 q 467 630 467 551 q 447 775 467 714 q 361 837 427 837 q 274 778 293 837 q 256 631 256 720 q 276 496 256 553 q 360 440 296 440 "},l:{x_min:86,x_max:316,ha:407,o:"m 99 501 q 95 701 99 579 q 92 843 92 823 l 86 1024 q 154 1016 125 1019 q 201 1013 183 1013 q 265 1018 232 1013 q 316 1023 297 1022 q 309 719 316 915 q 303 501 303 523 l 307 180 l 316 0 q 263 5 309 1 q 201 10 218 10 q 138 6 169 10 q 86 0 108 2 q 92 292 86 104 q 99 501 99 480 "},\u03BA:{x_min:80,x_max:732.765625,ha:756,o:"m 184 659 q 306 667 239 659 l 301 509 l 295 461 l 295 389 q 422 510 367 447 q 545 667 478 573 l 618 667 l 709 667 l 714 657 l 628 576 l 475 425 q 552 292 510 364 q 636 154 595 220 l 732 0 q 661 3 706 0 q 607 6 616 6 q 536 3 579 6 q 486 0 493 0 q 386 174 440 83 q 295 329 331 266 l 295 249 q 298 106 295 206 q 301 0 301 6 l 190 4 l 80 0 q 85 127 80 43 q 91 255 91 212 q 85 461 91 323 q 80 666 80 598 l 184 659 "},"4":{x_min:43,x_max:708.265625,ha:749,o:"m 706 383 l 701 299 q 704 248 701 271 q 708 211 706 225 q 592 221 650 221 l 592 176 q 594 83 592 127 q 606 0 597 40 q 540 3 579 0 q 497 6 501 6 q 433 3 473 6 q 384 0 393 0 q 393 104 390 44 q 396 219 396 165 l 309 221 q 169 216 262 221 q 43 212 76 212 l 44 296 l 44 379 q 174 568 113 477 q 287 738 235 658 q 396 909 338 818 q 503 902 444 902 q 553 902 527 902 q 606 909 589 907 q 599 720 606 843 q 592 534 592 596 l 592 370 q 650 375 614 370 q 706 383 686 380 m 396 370 l 396 752 l 141 370 l 396 370 "},p:{x_min:82,x_max:772,ha:825,o:"m 502 683 q 704 574 636 683 q 772 322 772 466 q 701 82 772 179 q 491 -15 630 -15 q 302 85 371 -15 l 302 -71 l 309 -385 q 249 -379 278 -382 q 196 -376 221 -376 q 139 -379 171 -376 q 82 -384 108 -381 q 87 -252 82 -341 q 92 -131 92 -162 l 88 487 l 82 666 q 195 659 141 659 q 235 660 216 659 q 307 666 254 661 q 302 580 302 618 q 391 656 343 630 q 502 683 440 683 m 430 79 q 472 86 453 79 q 515 122 491 94 q 548 204 539 151 q 557 337 557 258 q 532 503 557 431 q 430 576 507 576 q 324 501 350 576 q 298 327 298 427 q 323 152 298 226 q 430 79 349 79 "},\u03C8:{x_min:59,x_max:1025,ha:1064,o:"m 1025 437 q 919 131 1025 249 q 625 -7 813 13 q 630 -190 625 -68 q 636 -374 636 -312 l 558 -365 q 483 -366 516 -365 q 418 -373 451 -368 q 424 -159 418 -297 q 431 -5 431 -22 q 374 0 401 -2 q 271 20 348 2 q 127 124 195 37 q 59 331 59 211 l 60 484 l 59 666 l 168 663 l 277 666 q 269 506 277 619 q 261 358 261 392 q 293 144 261 228 q 431 51 325 60 l 431 253 q 424 572 431 367 q 418 800 418 777 l 536 795 l 636 798 q 630 650 636 748 q 625 501 625 551 l 625 254 l 625 51 q 767 146 726 51 q 808 359 808 241 q 798 498 808 440 q 762 650 788 556 q 867 654 821 650 q 980 666 913 658 q 1025 437 1025 552 "},\u00DC:{x_min:82,x_max:910,ha:997,o:"m 210 927 l 338 931 q 329 643 338 836 q 321 421 321 451 q 360 197 321 284 q 521 110 400 110 q 678 162 609 110 q 756 279 747 214 q 768 420 765 344 q 771 548 771 495 q 756 931 771 755 l 814 927 l 910 931 q 903 770 910 883 q 896 616 896 657 l 896 480 l 896 375 q 794 81 896 178 q 493 -15 692 -15 q 210 56 321 -15 q 100 287 100 128 q 91 619 100 386 q 82 931 82 852 l 210 927 m 394 1242 q 461 1215 433 1242 q 489 1148 489 1189 q 463 1078 489 1107 q 396 1050 437 1050 q 327 1078 355 1050 q 299 1148 299 1107 q 326 1214 299 1186 q 394 1242 354 1242 m 654 1242 q 721 1214 694 1242 q 749 1148 749 1187 q 724 1079 749 1108 q 658 1050 699 1050 q 588 1077 617 1050 q 559 1148 559 1105 q 587 1214 559 1187 q 654 1242 615 1242 "},\u00E0:{x_min:44,x_max:706.78125,ha:706,o:"m 237 -15 q 98 35 153 -15 q 44 169 44 86 q 212 352 44 301 q 401 421 380 403 q 410 439 410 432 q 373 539 410 502 q 275 577 337 577 q 140 511 185 577 l 135 511 l 115 585 q 230 657 164 632 q 365 683 296 683 q 543 623 479 683 q 608 452 608 564 l 604 213 q 604 166 604 184 q 608 123 604 148 q 625 87 612 99 q 658 76 638 76 q 679 80 666 76 q 702 90 691 84 l 706 40 q 643 1 676 14 q 563 -15 610 -10 q 481 5 520 -15 q 421 64 441 26 q 237 -15 351 -15 m 425 755 l 201 863 q 145 902 159 883 q 131 944 131 921 q 153 996 131 975 q 206 1017 175 1017 q 253 1002 232 1017 q 309 953 273 987 l 494 755 l 425 755 m 240 200 q 261 128 240 158 q 321 99 282 99 q 388 131 367 99 q 410 211 410 164 l 410 352 q 287 302 335 338 q 240 200 240 267 "},\u03B7:{x_min:80,x_max:727,ha:808,o:"m 91 339 q 85 512 91 391 q 80 667 80 632 q 137 661 125 662 q 180 661 149 661 q 244 663 199 661 q 293 666 290 666 l 293 568 q 391 651 338 622 q 511 681 443 681 q 660 622 602 681 q 719 471 719 564 l 719 328 l 719 -49 q 723 -219 719 -106 q 727 -373 727 -332 q 618 -365 670 -365 q 502 -373 562 -365 l 512 16 l 512 251 l 512 368 q 491 499 512 446 q 408 552 471 552 q 319 488 342 552 q 302 419 305 457 q 299 330 299 382 q 304 148 299 264 q 309 0 309 33 q 243 3 278 0 q 195 6 207 6 q 127 3 163 6 q 80 0 92 0 q 85 188 80 65 q 91 339 91 311 "}},cssFontWeight:"bold",ascender:1288,underlinePosition:-133,cssFontStyle:"normal",boundingBox:{yMin:-385,xMin:-147,yMax:1288,xMax:1618},resolution:1e3,original_font_information:{postscript_name:"Optimer-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Optimer Bold",font_family_name:"Optimer",copyright:"Copyright (c) Magenta Ltd., 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta Ltd.:Optimer Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta Ltd.",font_sub_family_name:"Bold"},descender:-385,familyName:"Optimer",lineHeight:1672,underlineThickness:20};var Lt=document.querySelector(".anniversary-art"),To=Lt.querySelector(".orbital-canvas"),Ql=Lt.querySelector(".hero-animation-toggle"),am=Lt.querySelector(".hero-animation-replay"),lr=matchMedia("(prefers-reduced-motion: reduce)"),In;try{In=new mo({canvas:To,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{Lt.classList.add("three-fallback")}if(In){let g=function(F,ee,ie,ce){let Le=new Je(new kn(F,ee,12,128),ce);return Le.position.z=ie,u.add(Le),Le},E=function(F,ee,ie,ce,Le=o,Fe=.012){let S=new xo(F,{font:f,size:ee,depth:Fe,curveSegments:10,bevelEnabled:!0,bevelThickness:ee*.027,bevelSize:ee*.024,bevelSegments:3});S.computeBoundingBox();let _=S.boundingBox;S.translate(-(_.max.x+_.min.x)/2,-(_.max.y+_.min.y)/2,0);let N=new Je(S,Le);return N.position.set(0,ie,ce),u.add(N),N},T=function(F){let ee=tt(F/5.6),ie=Yn.lerp(7.6,6.3,ee);e.position.set(Math.sin(F*.14)*.08,.04+Math.sin(F*.18)*.035,ie),e.lookAt(0,0,0),He.lerp(qe,.055),u.rotation.y=Yn.lerp(-1.2,.1,ee)+Math.sin(F*.35)*.14+He.x*.12,u.rotation.x=Yn.lerp(.26,.025,ee)+Math.sin(F*.27)*.055-He.y*.09,u.rotation.z=Yn.lerp(-.13,0,ee)+Math.sin(F*.18)*.018,u.position.y=Math.sin(F*.65)*.045,u.position.z=Yn.lerp(-.3,0,ee),P.rotation.z=F*.095,P.rotation.y=Math.sin(F*.22)*.16,O.rotation.z=-F*.2,q.rotation.y=.3+Math.sin(F*.24)*.35,R.rotation.x=-.7+Math.sin(F*.19)*.2,z.position.x=Math.sin(F*.38)*3,z.position.z=3+Math.cos(F*.38),X.position.set(Math.cos(F*.52)*2.4,2.5,1.8+Math.sin(F*.52)),ve.rotation.z=F*.012,me.uniforms.time.value=F,r.render(),Lt.classList.add("three-ready"),To.dataset.rendered="true",To.dataset.sceneTime=F.toFixed(2)},j=function(F){if(K=0,!window.celebrationStarted||we||fe||!$e||document.hidden)return;let ee=Math.min((F-Z)/1e3,.1);F-Z>40&&(ke+=ee,Z=F,T(ke)),K=requestAnimationFrame(j)},J=function(){K&&cancelAnimationFrame(K),K=0,Ql.textContent=fe?"Play animation":"Pause animation",Ql.setAttribute("aria-pressed",String(fe)),window.celebrationStarted&&!we&&!fe&&$e&&!document.hidden&&(Z=performance.now(),K=requestAnimationFrame(j))},$=function(){Ne=Lt.clientWidth,We=Lt.clientHeight,In.setSize(Ne,We,!1),r.setSize(Ne,We),e.aspect=Ne/We,e.updateProjectionMatrix(),T(fe?6:ke)};In.setPixelRatio(Math.min(devicePixelRatio,innerWidth<680?1.25:1.5)),In.outputColorSpace=Tt,In.toneMapping=$i,In.toneMappingExposure=1.05;let i=new ai;i.background=new Pe("#071d47");let e=new vt(36,1,.1,40);e.position.set(0,0,7);let t=new is(In),n=new vo,s=t.fromScene(n,.04);i.environment=s.texture,i.environmentIntensity=.6,n.dispose(),t.dispose();let r=new Mo(In);r.addPass(new So(i,e));let a=new os(new se(500,500),.32,.4,1.65);r.addPass(a),r.addPass(new bo);let o=new Tn({color:"#f3c66f",metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:1.8}),c=new Tn({color:"#b88937",metalness:1,roughness:.23,envMapIntensity:1.9}),l=new Tn({color:"#082561",metalness:.45,roughness:.28,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:.45}),h=new Tn({color:"#ffe1a2",metalness:.92,roughness:.2,envMapIntensity:1.6}),u=new sn;i.add(u);let d=new Je(new Wi(1.35,1.35,.17,96),c);d.rotation.x=Math.PI/2,u.add(d);let p=new Je(new Wi(1.31,1.31,.018,96),l);p.rotation.x=Math.PI/2,p.position.z=.094,u.add(p),g(1.34,.049,.091,o),g(1.25,.008,.118,h),g(1.34,.025,-.08,c);let x=new oi(new ln(.009,.025,.009),c,100),m=new mt;for(let F=0;F<100;F++){let ee=F/100*Math.PI*2;m.position.set(Math.sin(ee)*1.29,Math.cos(ee)*1.29,.118),m.rotation.z=-ee,m.updateMatrix(),x.setMatrixAt(F,m.matrix)}u.add(x);let f=new _o().parse(Kh),b=E("30",1.13,-.1,.115,o,.15);E("T A S F U E D I S",.082,.66,.125,h),E("A N N I V E R S A R Y",.084,-.79,.125,h),E("THREE DECADES OF IMPACT",.046,-1.01,.123,h);let y=E("TH",.095,.29,.19,h,.022);y.position.x=.8;let A=new Je(new Us(.19,48),new bn({color:"#fffbec",roughness:.55,metalness:.1}));A.position.set(0,.99,.124),u.add(A);let w=new Zs().load(new URL("./school-logo.png",import.meta.url).href,()=>T(ke));w.colorSpace=Tt;let C=new Je(new ci(.35,.23),new on({map:w,transparent:!0,depthWrite:!1}));C.position.set(0,.99,.127),u.add(C);let P=new sn;i.add(P);let M=new Tn({color:"#b3d5f4",metalness:.9,roughness:.22,transparent:!0,opacity:.55}),q=new Je(new kn(1.72,.013,8,160),o);q.rotation.set(.65,.3,-.35),P.add(q);let R=new Je(new kn(1.89,.007,8,160),M);R.rotation.set(-.7,-.5,.42),P.add(R);let O=new Je(new kn(1.67,.018,8,100,Math.PI*.7),new on({color:"#ffe4a2",transparent:!0,opacity:.78}));O.rotation.x=.7,O.position.z=-.18,P.add(O);let z=new wn("#ffe1ad",14,12,2);z.position.set(-2.5,2.8,4),i.add(z);let W=new wn("#85bdff",8,10,2);W.position.set(3,-.6,3),i.add(W);let X=new wn("#fff4df",20,10,2);X.position.set(1,3,1),i.add(X),i.add(new $s("#e7f2ff","#08173b",1));let G=innerWidth<680?70:110,ne=new Float32Array(G*3),k=new Float32Array(G);for(let F=0;F<G;F++)ne[F*3]=(Math.random()-.5)*6,ne[F*3+1]=(Math.random()-.5)*6,ne[F*3+2]=-1-Math.random()*2,k[F]=Math.random();let ue=new qt;ue.setAttribute("position",new yt(ne,3)),ue.setAttribute("seed",new yt(k,1));let me=new ft({transparent:!0,depthWrite:!1,blending:ui,uniforms:{time:{value:0}},vertexShader:"attribute float seed;uniform float time;varying float brightness;void main(){vec3 p=position;p.y+=sin(time*.22+seed*18.)*.12;vec4 v=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*v;gl_PointSize=(2.+seed*3.)*6./-v.z;brightness=.25+.6*pow(.5+.5*sin(time*1.3+seed*40.),3.);}",fragmentShader:"varying float brightness;void main(){vec2 p=gl_PointCoord-.5;float glow=exp(-dot(p,p)*24.);float rays=exp(-abs(p.x)*80.)*exp(-abs(p.y)*6.)+exp(-abs(p.y)*80.)*exp(-abs(p.x)*6.);gl_FragColor=vec4(vec3(1.,.85,.55),min(1.,glow+rays*.3)*brightness);}"}),ve=new Ps(ue,me);i.add(ve);let Ne=0,We=0,$e=!0,ke=0,Z=0,K=0,fe=lr.matches,we=!1,qe=new se,He=new se,tt=F=>1-Math.pow(1-Yn.clamp(F,0,1),3);new ResizeObserver($).observe(Lt),"IntersectionObserver"in window&&new IntersectionObserver(F=>{$e=F[0].isIntersecting,J()},{threshold:.05}).observe(Lt),window.addEventListener("celebration:start",()=>{ke=0,T(lr.matches?6:0),J()},{once:!0}),document.addEventListener("visibilitychange",J),lr.addEventListener("change",()=>{fe=lr.matches,J(),fe&&T(6)}),Ql.addEventListener("click",()=>{fe=!fe,J()}),am.addEventListener("click",()=>{ke=0,fe=lr.matches,T(fe?6:0),J()}),Lt.addEventListener("pointermove",F=>{if(F.pointerType!=="mouse"||fe)return;let ee=Lt.getBoundingClientRect();qe.set((F.clientX-ee.left)/ee.width*2-1,(F.clientY-ee.top)/ee.height*2-1)}),Lt.addEventListener("pointerleave",()=>qe.set(0,0)),To.addEventListener("webglcontextlost",F=>{F.preventDefault(),we=!0,K&&cancelAnimationFrame(K),Lt.classList.remove("three-ready"),Lt.classList.add("three-fallback")}),$(),J()}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
