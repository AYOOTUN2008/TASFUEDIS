import * as THREE from 'three';
import {FontLoader} from 'three/addons/loaders/FontLoader.js';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import typeface from 'three/examples/fonts/optimer_bold.typeface.json';

const host=document.querySelector('.anniversary-art');
const canvas=host.querySelector('.orbital-canvas');
const toggle=host.querySelector('.hero-animation-toggle');
const replay=host.querySelector('.hero-animation-replay');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let renderer;
try { renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'}); }
catch { host.classList.add('three-fallback'); }
if(renderer) {
 renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<680?1.25:1.5));
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 const scene=new THREE.Scene();scene.background=new THREE.Color('#071d47');
 const camera=new THREE.PerspectiveCamera(36,1,.1,40);camera.position.set(0,0,7);
 const pmrem=new THREE.PMREMGenerator(renderer);
 const room=new RoomEnvironment();const environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.6;room.dispose();pmrem.dispose();
 const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
 const bloom=new UnrealBloomPass(new THREE.Vector2(500,500),.32,.4,1.65);composer.addPass(bloom);composer.addPass(new OutputPass());
 const gold=new THREE.MeshPhysicalMaterial({color:'#f3c66f',metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:1.8});
 const edgeGold=new THREE.MeshPhysicalMaterial({color:'#b88937',metalness:1,roughness:.23,envMapIntensity:1.9});
 const navy=new THREE.MeshPhysicalMaterial({color:'#082561',metalness:.45,roughness:.28,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:.45});
 const paleGold=new THREE.MeshPhysicalMaterial({color:'#ffe1a2',metalness:.92,roughness:.2,envMapIntensity:1.6});
 const emblem=new THREE.Group();scene.add(emblem);
 const base=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.35,.17,96),edgeGold);base.rotation.x=Math.PI/2;emblem.add(base);
 const face=new THREE.Mesh(new THREE.CylinderGeometry(1.31,1.31,.018,96),navy);face.rotation.x=Math.PI/2;face.position.z=.094;emblem.add(face);
 function ring(radius,tube,z,material){const mesh=new THREE.Mesh(new THREE.TorusGeometry(radius,tube,12,128),material);mesh.position.z=z;emblem.add(mesh);return mesh;}
 ring(1.34,.049,.091,gold);ring(1.25,.008,.118,paleGold);ring(1.34,.025,-.08,edgeGold);
 // Raised milled marks around the rim catch the moving studio lights.
 const marks=new THREE.InstancedMesh(new THREE.BoxGeometry(.009,.025,.009),edgeGold,100);
 const dummy=new THREE.Object3D();for(let i=0;i<100;i++){const a=i/100*Math.PI*2;dummy.position.set(Math.sin(a)*1.29,Math.cos(a)*1.29,.118);dummy.rotation.z=-a;dummy.updateMatrix();marks.setMatrixAt(i,dummy.matrix);}emblem.add(marks);
 const font=new FontLoader().parse(typeface);
 function lettering(text,size,y,z,material=gold,depth=.012){const geometry=new TextGeometry(text,{font,size,depth,curveSegments:10,bevelEnabled:true,bevelThickness:size*.027,bevelSize:size*.024,bevelSegments:3});geometry.computeBoundingBox();const box=geometry.boundingBox;geometry.translate(-(box.max.x+box.min.x)/2,-(box.max.y+box.min.y)/2,0);const mesh=new THREE.Mesh(geometry,material);mesh.position.set(0,y,z);emblem.add(mesh);return mesh;}
 const digits=lettering('30',1.13,-.1,.115,gold,.15);
 lettering('T A S F U E D I S',.082,.66,.125,paleGold);
 lettering('A N N I V E R S A R Y',.084,-.79,.125,paleGold);
 lettering('THREE DECADES OF IMPACT',.046,-1.01,.123,paleGold);
 const ordinal=lettering('TH',.095,.29,.19,paleGold,.022);ordinal.position.x=.8;
 const crestBacking=new THREE.Mesh(new THREE.CircleGeometry(.19,48),new THREE.MeshStandardMaterial({color:'#fffbec',roughness:.55,metalness:.1}));crestBacking.position.set(0,.99,.124);emblem.add(crestBacking);
 const texture=new THREE.TextureLoader().load(new URL('./school-logo.png',import.meta.url).href,()=>renderFrame(elapsed));texture.colorSpace=THREE.SRGBColorSpace;
 const crest=new THREE.Mesh(new THREE.PlaneGeometry(.26,.288),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));crest.position.set(0,.99,.127);emblem.add(crest);
 // Three-dimensional satellite rings and luminous orbital arcs.
 const satellite=new THREE.Group();scene.add(satellite);
 const silver=new THREE.MeshPhysicalMaterial({color:'#b3d5f4',metalness:.9,roughness:.22,transparent:true,opacity:.55});
 const outer=new THREE.Mesh(new THREE.TorusGeometry(1.72,.013,8,160),gold);outer.rotation.set(.65,.3,-.35);satellite.add(outer);
 const outer2=new THREE.Mesh(new THREE.TorusGeometry(1.89,.007,8,160),silver);outer2.rotation.set(-.7,-.5,.42);satellite.add(outer2);
 const arc=new THREE.Mesh(new THREE.TorusGeometry(1.67,.018,8,100,Math.PI*.7),new THREE.MeshBasicMaterial({color:'#ffe4a2',transparent:true,opacity:.78}));arc.rotation.x=.7;arc.position.z=-.18;satellite.add(arc);
 const key=new THREE.PointLight('#ffe1ad',14,12,2);key.position.set(-2.5,2.8,4);scene.add(key);
 const fill=new THREE.PointLight('#85bdff',8,10,2);fill.position.set(3,-.6,3);scene.add(fill);
 const rim=new THREE.PointLight('#fff4df',20,10,2);rim.position.set(1,3,1);scene.add(rim);
 scene.add(new THREE.HemisphereLight('#e7f2ff','#08173b',1));
 const count=innerWidth<680?70:110;const positions=new Float32Array(count*3),seeds=new Float32Array(count);
 for(let i=0;i<count;i++){positions[i*3]=(Math.random()-.5)*6;positions[i*3+1]=(Math.random()-.5)*6;positions[i*3+2]=-1-Math.random()*2;seeds[i]=Math.random();}
 const dustGeometry=new THREE.BufferGeometry();dustGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));dustGeometry.setAttribute('seed',new THREE.BufferAttribute(seeds,1));
 const dustMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{time:{value:0}},vertexShader:`attribute float seed;uniform float time;varying float brightness;void main(){vec3 p=position;p.y+=sin(time*.22+seed*18.)*.12;vec4 v=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*v;gl_PointSize=(2.+seed*3.)*6./-v.z;brightness=.25+.6*pow(.5+.5*sin(time*1.3+seed*40.),3.);}`,fragmentShader:`varying float brightness;void main(){vec2 p=gl_PointCoord-.5;float glow=exp(-dot(p,p)*24.);float rays=exp(-abs(p.x)*80.)*exp(-abs(p.y)*6.)+exp(-abs(p.y)*80.)*exp(-abs(p.x)*6.);gl_FragColor=vec4(vec3(1.,.85,.55),min(1.,glow+rays*.3)*brightness);}`});const dust=new THREE.Points(dustGeometry,dustMaterial);scene.add(dust);
 let width=0,height=0,inView=true,elapsed=0,last=0,frame=0,paused=motion.matches,lost=false;
 const pointer=new THREE.Vector2(),smoothPointer=new THREE.Vector2();
 const ease=t=>1-Math.pow(1-THREE.MathUtils.clamp(t,0,1),3);
 function renderFrame(t){
  const reveal=ease(t/5.6);
  const distance=THREE.MathUtils.lerp(7.6,6.3,reveal);camera.position.set(Math.sin(t*.14)*.08,.04+Math.sin(t*.18)*.035,distance);camera.lookAt(0,0,0);
  smoothPointer.lerp(pointer,.055);
  emblem.rotation.y=THREE.MathUtils.lerp(-1.2,.1,reveal)+Math.sin(t*.35)*.14+smoothPointer.x*.12;
  emblem.rotation.x=THREE.MathUtils.lerp(.26,.025,reveal)+Math.sin(t*.27)*.055-smoothPointer.y*.09;
  emblem.rotation.z=THREE.MathUtils.lerp(-.13,0,reveal)+Math.sin(t*.18)*.018;
  emblem.position.y=Math.sin(t*.65)*.045;emblem.position.z=THREE.MathUtils.lerp(-.3,0,reveal);
  satellite.rotation.z=t*.095;satellite.rotation.y=Math.sin(t*.22)*.16;arc.rotation.z=-t*.2;
  outer.rotation.y=.3+Math.sin(t*.24)*.35;outer2.rotation.x=-.7+Math.sin(t*.19)*.2;
  key.position.x=Math.sin(t*.38)*3;key.position.z=3+Math.cos(t*.38);rim.position.set(Math.cos(t*.52)*2.4,2.5,1.8+Math.sin(t*.52));
  dust.rotation.z=t*.012;dustMaterial.uniforms.time.value=t;
  composer.render();host.classList.add('three-ready');canvas.dataset.rendered='true';canvas.dataset.sceneTime=t.toFixed(2);
 }
 function tick(now){frame=0;if(!window.celebrationStarted||lost||paused||!inView||document.hidden)return;const delta=Math.min((now-last)/1000,.1);if(now-last>40){elapsed+=delta;last=now;renderFrame(elapsed);}frame=requestAnimationFrame(tick);}
 function sync(){if(frame)cancelAnimationFrame(frame);frame=0;toggle.textContent=paused?'Play animation':'Pause animation';toggle.setAttribute('aria-pressed',String(paused));if(window.celebrationStarted&&!lost&&!paused&&inView&&!document.hidden){last=performance.now();frame=requestAnimationFrame(tick);}}
 function resize(){width=host.clientWidth;height=host.clientHeight;renderer.setSize(width,height,false);composer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();renderFrame(paused?6:elapsed);}
 new ResizeObserver(resize).observe(host);if('IntersectionObserver'in window)new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.05}).observe(host);
 window.addEventListener('celebration:start',()=>{elapsed=0;renderFrame(motion.matches?6:0);sync();},{once:true});
 document.addEventListener('visibilitychange',sync);motion.addEventListener('change',()=>{paused=motion.matches;sync();if(paused)renderFrame(6);});
 toggle.addEventListener('click',()=>{paused=!paused;sync();});replay.addEventListener('click',()=>{elapsed=0;paused=motion.matches;renderFrame(paused?6:0);sync();});
 host.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||paused)return;const b=host.getBoundingClientRect();pointer.set((event.clientX-b.left)/b.width*2-1,(event.clientY-b.top)/b.height*2-1);});host.addEventListener('pointerleave',()=>pointer.set(0,0));
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;if(frame)cancelAnimationFrame(frame);host.classList.remove('three-ready');host.classList.add('three-fallback');});
 resize();sync();
}
