import{p as r,i as U,g,M as $,x as A,h as O}from"./stdlib-aBcQoNak.js";import{c as R,g as _}from"./codegen-wgsl-CST6uU3w.js";const c={kind:r.Primitive,name:"number"};r.Primitive;const n=[{name:"Basic Math (Return 42)",code:"return 40 + 2;",expected:42},{name:"Logic Ops (&& ||)",code:"return (true && false) || true;",check:e=>{if(!(typeof e=="boolean"&&e===!0)&&!(typeof e=="number"&&Math.abs(e-1)<.001))throw new Error(`Expected true or 1, got ${e}`)}},{name:"Unary Ops (- !)",code:"return -42;",expected:-42},{name:"Unary Ops (- !)",code:"return -42;",expected:-42},{name:"Mixed Logic Ops",code:"return (true && false) || true || 1.0;",expected:1,outputType:c},{name:"Variables (Input)",code:"var x: number; return x * 2;",inputValues:{x:21},expected:42},{name:"Typed Inputs (Var Decl)",code:`
      var x: number;
      var y: number;
      return x + y;
    `,inputValues:{x:10,y:32},expected:42},{name:"If Statement (Branching)",code:`
      var x: number;
      if (x > 10) {
        return 1;
      } else {
        return 0;
      }
    `,inputValues:{x:11},expected:1},{name:"Loops (While)",code:`
       let i = 0;
       while (i < 5) {
         i = i + 1;
       }
       return i;
    `,expected:5},{name:"Array Push & Access",code:`
        let arr = [1, 2, 3];
        arr.push(4);
        return arr[3];
    `,outputType:c,expected:4,skipWGSL:!0},{name:"Array Convolution (Loops + Access)",code:`
       var signal: number[];
       const kernel = [0.5, 1];
       const result: number[] = [];
       // signal is input array of size 5
       for (let i = 0; i < 4; i++) {
          let sum = 0;
          for (let j = 0; j < 2; j++) {
             sum = sum + signal[i+j] * kernel[j];
          }
          result.push(sum);
       }
       return result;
    `,inputValues:{signal:[1,2,3,4,5]},outputType:{kind:r.Array,elementType:c},expected:[2.5,4,5.5,7],skipWGSL:!0},{name:"Struct Literal & Access",code:`
        const s = { x: 10, y: 20 };
        return s.x + s.y;
    `,expected:30},{name:"Reference Sharing (Mutable Alias)",code:`
        let p1 = { x: 1, y: 1 };
        let p2 = p1; // Alias (Ref)
        p2.x = 10;
        return p1.x; // Becomes 10
    `,expected:10,skipWGSL:!1},{name:"Nested Struct Mutation",code:`
         let a = { p: { x: 1 } };
         let b = a;
         b.p.x = 10;
         return a.p.x;
    `,expected:10,skipWGSL:!1},{name:"Array Reference Sharing",code:`
        let a = [1, 2];
        let b = a;
        b[0] = 10;
        return a[0];
    `,expected:10,skipWGSL:!1},{name:"Struct Reference Assignment (Alias)",code:`
        // interface S { x: number; }
        let s = { x: 0 };
        let r = s; // Alias r -> s
        r.x = 10;
        return s.x; // Should be 10 if aliased
    `,expected:10,skipWGSL:!1},{name:"Nested Array Element Alias",code:`
        // interface Vec2 { x: number; y: number; }
        // Mutable array of structs
        let arr = [{x:0, y:0}, {x:10, y:10}];

        for (let i = 0; i < 2; i++) {
            let v = arr[i]; // Alias v -> arr[i] (Reference)
            // If v is a copy, this won't affect arr.
            // If v is reference, it will.
            v.x = v.x + 100;
        }
        return arr[0].x; // Should be 100
    `,expected:100,skipWGSL:!1},{name:"Reference Passing to Function",code:`
        // interface S { x: number; }
        function modify(p: { x: number }) {
            p.x = p.x + 20;
        }

        let s = { x: 10 };
        modify(s); // Should pass 's' by reference (inline or ptr)
        return s.x;
    `,expected:30,skipWGSL:!1},{name:"Math Intrinsics (min/pow)",code:`
         let val = 2;
         val = Math.pow(val, 3); // 8
         return Math.min(val, 5); // 5
    `,expected:5},{name:"Optional Input Field",code:`
      interface InputStruct {
        x: number;
        y?: number;
      }
      var input: InputStruct;
      return input.y;
    `,inputValues:{input:{x:1,y:100}},check:e=>{},skipCPP:!0,skipJS:!1,skipWGSL:!0}];n[n.length-1]={name:"Optional Input Field (Present)",code:`
    interface InputStruct {
      x: number;
      y?: number;
    }
    var input: InputStruct;
    return input.y;
  `,inputValues:{input:{x:1,y:100}},outputType:{kind:r.Union,types:[c,{kind:r.Primitive,name:"undefined"}]},expected:100,skipCPP:!1,skipWGSL:!0};n.push({name:"Optional Input Field (Missing)",code:`
    interface InputStruct {
      x: number;
      y?: number;
    }
    var input: InputStruct;
    return input.y;
  `,inputValues:{input:{x:1}},outputType:{kind:r.Union,types:[c,{kind:r.Primitive,name:"undefined"}]},check:e=>{if(e!=null)throw new Error(`Expected null/undefined, got ${e}`)},skipCPP:!1,skipWGSL:!0});n.push({name:"Dynamic Function Dispatch (Inlining)",code:`
      const add = (a: number) => a + 10;
      const mul = (a: number) => a * 10;
      const mul2 = (a: number) => a * 10;
      // input.mode is struct field
      var input: { mode: number; }; // Inline struct type
      let f = add;
      if (input.mode > 0) {
          f = mul;
      }
      return f(5);
    `,inputValues:{input:{mode:1}},expected:50,skipWGSL:!0});n.push({name:"Debug Logging",code:`
        var x: number;
        let y = x * 2;
        y = y + 1;
        return y;
    `,inputValues:{x:10},debug:!0,expected:21,check:(e,t)=>{if(!t)throw new Error("Debug log missing");if(Object.keys(t||{}).length===0)throw new Error("Debug log empty")},skipWGSL:!0});const D={kind:r.Struct,name:"Ball",fields:{x:c,y:c,vx:c,vy:c}},j={kind:r.Array,elementType:D,length:2};n.push({name:"Bouncing Balls Simulation (1 Tick)",code:`
        var dt: number;
        interface Ball { x: number; y: number; vx: number; vy: number; }
        var balls: Ball[];

const width = 100.0;
const result = balls; // Modify in place (reference) or copy?
// In JS/C++ backend, 'balls' is a reference to the array.
// But we iterate and modify objects inside it.

for (let i = 0; i < balls.length; i++) {
  let b = balls[i];

  // Physics Update
  b.x = b.x + b.vx * dt;
  b.y = b.y + b.vy * dt;

  // Bounce X
  if (b.x > width) {
    b.x = width;
    b.vx = -b.vx;
  } else if (b.x < 0) {
    b.x = 0;
    b.vx = -b.vx;
  }

  // Bounce Y (Floor at 0 for simplicity or ceiling?)
  if (b.y < 0) {
    b.y = 0;
    b.vy = -b.vy;
  }
}
return balls;
`,inputValues:{dt:.1,balls:[{x:10,y:10,vx:50,vy:0},{x:99,y:10,vx:50,vy:0}]},outputType:j,debug:!0,check:(e,t)=>{if(!Array.isArray(e)||e.length!==2)throw new Error("Expected 2 balls");const s=e[0],o=e[1];if(Math.abs(s.x-15)>.1)throw new Error(`b0.x expected ~15, got ${s.x}.Debug: ${JSON.stringify(t)} `);if(Math.abs(o.x-100)>.1)throw new Error(`b1.x expected ~100, got ${o.x} `);if(Math.abs(o.vx- -50)>.1)throw new Error(`b1.vx expected - 50, got ${o.vx} `)}});n[n.length-1].skipWGSL=!1;n.push({name:"Matrix Multiplication (2x2)",code:`
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
// Result C = A * B
// C[0][0] = 1*5 + 2*7 = 5 + 14 = 19
// C[0][1] = 1*6 + 2*8 = 6 + 16 = 22
// C[1][0] = 3*5 + 4*7 = 15 + 28 = 43
// C[1][1] = 3*6 + 4*8 = 18 + 32 = 50

let result = [0, 0, 0, 0];
let idx = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    let sum = 0;
    for (let k = 0; k < 2; k++) {
      sum = sum + A[i][k] * B[k][j];
    }
    result[idx] = sum;
    idx = idx + 1;
  }
}
return result;
`,outputType:{kind:r.Array,elementType:c,length:4},expected:[19,22,43,50],skipWGSL:!1});n.push({name:"Chained Generics (Structural)",code:`
function identity<T>(arg: T): T {
  return arg;
}

function box<U>(val: U) {
  return { contents: identity(val) };
}

function process<X>(item: X) {
  return box(item);
}

return process([1, 2]);
`,outputType:{kind:r.Struct,fields:{contents:{kind:r.Array,elementType:c}}},expected:{contents:[1,2]},skipCPP:!0,skipWGSL:!0});const C={kind:r.Struct,name:"Vec3",fields:{x:c,y:c,z:c}};r.Struct;n.push({name:"Ray Tracer (Sphere Diffuse)",code:`
        // --- Structs ---
        interface RtInput { u: number; v: number; }
        var input: RtInput;

        interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface Sphere {
  center: Vec3;
  radius: number;
  color: Vec3; // RGB
}

interface Ray {
  origin: Vec3;
  dir: Vec3;
}

// --- Helpers ---
// Basic Math
const dot = (a: Vec3, b: Vec3) => a.x * b.x + a.y * b.y + a.z * b.z;

const sub = (a: Vec3, b: Vec3): Vec3 => {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
};

const add = (a: Vec3, b: Vec3): Vec3 => {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
};

const mul = (a: Vec3, s: number): Vec3 => {
  return { x: a.x * s, y: a.y * s, z: a.z * s };
};

const length = (v: Vec3) => Math.sqrt(dot(v, v));

const normalize = (v: Vec3): Vec3 => {
  const l = length(v);
  return { x: v.x / l, y: v.y / l, z: v.z / l };
};

// --- Scene ---
const sphere = {
  center: { x: 0, y: 0, z: -5 },
  radius: 1,
  color: { x: 1, y: 0, z: 0 } // Red
};

// Light direction (approx directional light)
const lightDir = normalize({ x: 1, y: 1, z: 1 });

// --- Intersection ---
const intersectSphere = (ray: { origin: Vec3, dir: Vec3 }, sph: { center: Vec3, radius: number }) => {
  const oc = sub(ray.origin, sph.center);
  const a = dot(ray.dir, ray.dir);
  const b = 2.0 * dot(oc, ray.dir);
  const c = dot(oc, oc) - sph.radius * sph.radius;
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) return -1.0;
  return (-b - Math.sqrt(discriminant)) / (2.0 * a);
};

// --- Rendering ---
// Input: input.u, input.v

// Camera setup
const origin = { x: 0, y: 0, z: 0 };
const lowerLeft = { x: -2, y: -1, z: -1 };
const horizontal = { x: 4, y: 0, z: 0 };
const vertical = { x: 0, y: 2, z: 0 };

const ray_target = add(lowerLeft, add(mul(horizontal, input.u), mul(vertical, input.v)));
const direction = normalize(sub(ray_target, origin));
const ray = { origin: origin, dir: direction };

// Trace
const t = intersectSphere(ray, sphere);

if (t > 0) {
  // Hit!
  // Calculate normal
  const hitPos = add(ray.origin, mul(ray.dir, t));
  const normal = normalize(sub(hitPos, sphere.center));

  // Diffuse shading
  let diff = Math.max(dot(normal, lightDir), 0);

  // Ambient
  diff = diff + 0.1;

  return mul(sphere.color, diff);
}

// Sky color (Gradient)
const t2 = 0.5 * (direction.y + 1.0);
// (1-t)*white + t*blue
const white: Vec3 = { x: 1, y: 1, z: 1 };
const blue: Vec3 = { x: 0.5, y: 0.7, z: 1.0 };
return add(mul(white, 1.0 - t2), mul(blue, t2));
    `,inputValues:{input:{u:.5,v:.5}},outputType:C,check:e=>{if(e.x<.1)throw new Error(`Expected red component > 0.1 for center hit, got ${JSON.stringify(e)} `)},skipCPP:!0});n.push({name:"Ray Tracer (Sky Background)",code:n[n.length-1].code,inputValues:{input:{u:0,v:0}},outputType:C,check:e=>{if(e.z<.5)throw new Error(`Expected blue component > 0.5 for sky hit, got ${JSON.stringify(e)} `)},skipCPP:!0});n.push({name:"Mixed Struct Callbacks (Compile & Run)",code:`
// Helper function expecting a dictionary of callbacks and values
function process(opts: { onStart: () => number, val: number }) {
  const x = opts.onStart(); // Call lambda
  return x + opts.val;      // Use dynamic val
}

// Usage
const cb = () => 42;
// Mixed struct: 'onStart' is Const (Lambda), 'val' is Dynamic (Input)
// dynamic_input global/input
var dynamic_input: number;
const result = process({ onStart: cb, val: dynamic_input });
return result;
`,inputValues:{dynamic_input:10},expected:52,skipWGSL:!0});n.push({name:"Inline Object Literal Arguments",code:`
function run(ops: { f: (x: number) => number }) {
  return ops.f(10);
}
const res = run({ f: (x) => x * 2 });
return res;
`,expected:20,skipCPP:!0,skipWGSL:!0});n.push({name:"Array Mutation",code:`
let arr = [1, 2, 3];
arr[0] = 10;
return arr[0];
`,expected:10,skipWGSL:!1});n.push({name:"Struct Mutation",code:`
let p = { x: 1, y: 2 };
p.x = 100;
return p.x + p.y;
`,expected:102,skipWGSL:!1});n.push({name:"Nested Properties Mutation",code:`
let arr = [{ x: 1 }, { x: 2 }];
arr[0].x = 50;
return arr[0].x + arr[1].x;
`,expected:52,skipWGSL:!1});n.push({name:"Compound Assignment",code:`
let p = { val: 10 };
p.val += 5;
return p.val;
`,expected:15,skipWGSL:!1});n.push({name:"Helper Function Inlining",code:`
function add(a, b) { return a + b; }
return add(10, 20);
`,expected:30,skipWGSL:!0});n.push({name:"Mandelbrot Iteration (Structs, Loops, Break)",code:`
interface Complex { r: number; i: number; }

var cx: number;
var cy: number;
var maxIter: number;

let c = { r: cx, i: cy };
let z = { r: 0.0, i: 0.0 };
let iter = 0;

while (iter < maxIter) {
  let r2 = z.r * z.r;
  let i2 = z.i * z.i;

  if (r2 + i2 > 4.0) {
    break;
  }

  let next_r = r2 - i2 + c.r;
  let next_i = 2.0 * z.r * z.i + c.i;

  // Assign new struct
  z = { r: next_r, i: next_i };
  iter++;
}

return iter;
`,inputValues:{cx:0,cy:0,maxIter:100},expected:100});n.push({name:"Mandelbrot Divergence",code:n[n.length-1].code,inputValues:{cx:2,cy:2,maxIter:100},expected:1});function w(e,t){const s=[];if(t.kind===r.Primitive)return typeof e=="number"?[e]:typeof e=="boolean"?[e?1:0]:[0];if(t.kind===r.Struct){const o=t,u=Object.keys(o.fields).sort();for(const a of u){const i=e?e[a]:void 0;s.push(...w(i??0,o.fields[a]))}return s}if(t.kind===r.Array){const u=t.elementType;if(Array.isArray(e))for(const a of e)s.push(...w(a,u));return s}return[0]}function N(e,t){let s;e instanceof Float32Array?s=Array.from(e):s=e;let o=0;function u(a){if(a.kind===r.Primitive){const i=s[o++];return a.name==="boolean"?i!==0:i}if(a.kind===r.Struct){const i=a,l={},d=Object.keys(i.fields).sort();for(const f of d)l[f]=u(i.fields[f]);return l}if(a.kind===r.Array){const i=a.length,l=a.elementType,d=[];if(typeof i=="number")for(let f=0;f<i;f++)d.push(u(l));else for(;o<s.length;)d.push(u(l));return d}return 0}return u(t)}var F=Object.defineProperty,J=Object.getOwnPropertyDescriptor,y=(e,t,s,o)=>{for(var u=o>1?void 0:o?J(t,s):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(u=(o?i(t,s,u):i(u))||u);return o&&u&&F(t,s,u),u};let m=class extends ${constructor(){super(...arguments),this.currentTest=null,this.code="",this.output="",this.wgslCode=""}loadTest(e){this.currentTest=e,this.code=e.code,this.output="",this.wgslCode=""}async run(){try{this.currentTest||(this.currentTest={name:"Custom",code:this.code,inputValues:{x:10},inputTypes:{x:{kind:r.Primitive,name:"number"}},outputType:{kind:r.Primitive,name:"number"}}),this.output=`=== ${this.currentTest.name} ===
Compiling...`;const e=this.currentTest.inputValues||{};let t=this.currentTest.inputTypes;if(!t){t={};for(const p in e)typeof e[p]=="number"?t[p]={kind:r.Primitive,name:"number"}:Array.isArray(e[p])?t[p]={kind:r.Array,elementType:{kind:r.Primitive,name:"number"}}:typeof e[p]=="object"&&(t[p]={kind:r.Struct,fields:{}})}const s=R(this.code,t),o=this.currentTest.outputType||{kind:r.Primitive,name:"number"},u=_(s,{inputs:t,outputType:o});if(this.wgslCode=u,this.output+=`
WGSL Generated.
Running on GPU...`,!navigator.gpu)return this.output+=`
WebGPU not supported in this browser.`,"Error: WebGPU not supported";const a=await navigator.gpu.requestAdapter();if(!a)return this.output+=`
No adapter found.`,"Error: No adapter found";const i=await a.requestDevice(),l=i.createShaderModule({code:u}),d=await l.getCompilationInfo();if(d.messages.length>0){let p=!1;for(const x of d.messages)this.output+=`
[${x.type}] line ${x.lineNum}:${x.linePos} - ${x.message}`,x.type==="error"&&(p=!0);if(p)return this.output+=`

Shader Compilation Failed. Aborting.`,`Error: Shader Compilation Failed
Logs:
${this.output}

Code:
${this.wgslCode}`}const f=[],V=Object.keys(t).sort();for(const p of V)f.push(...w(e[p],t[p]));const v=new Float32Array(f),z=Math.max(v.byteLength,16),P=i.createBuffer({size:z,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});v.byteLength>0&&i.queue.writeBuffer(P,0,v);const k=65536,T=i.createBuffer({size:k,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),L=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),B=i.createPipelineLayout({bindGroupLayouts:[L]}),E=i.createComputePipeline({layout:B,compute:{module:l,entryPoint:"main"}}),M=i.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:P}},{binding:1,resource:{buffer:T}}]}),S=i.createCommandEncoder(),b=S.beginComputePass();b.setPipeline(E),b.setBindGroup(0,M),b.dispatchWorkgroups(1),b.end();const h=i.createBuffer({size:k,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST});S.copyBufferToBuffer(T,0,h,0,k),i.queue.submit([S.finish()]),await h.mapAsync(GPUMapMode.READ);const I=h.getMappedRange(),W=new Float32Array(I),G=N(W,o);return this.output+=`
Success!
Result: ${JSON.stringify(G,null,2)}`,this.currentTest.expected!==void 0&&(this.output+=`
Expected: ${JSON.stringify(this.currentTest.expected,null,2)}`),h.unmap(),`Success: ${JSON.stringify(G)}`}catch(e){return this.output+=`
Error: ${e.message}
${e.stack}`,`Error: ${e.message}`}}async runTestByName(e){const t=n.find(s=>s.name===e);return t?(this.loadTest(t),await this.run()):`Error: Test ${e} not found`}render(){return A`
      <div style="width: 250px; border-right: 1px solid #333; overflow:auto; display:flex; flex-direction:column;">
        <div style="padding:10px; font-weight:bold; background:#252526;">Test Cases</div>
        ${n.map(e=>A`
            <div
                style="padding:5px 10px; cursor:pointer; background:${this.currentTest===e?"#37373d":"transparent"}; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;"
                @click=${()=>this.loadTest(e)}
            >
                ${e.name}
                ${e.skipWGSL?" (SKIP)":""}
            </div>
        `)}
      </div>
      <div style="flex:1; display:flex; flex-direction:column; padding:10px;">
        <div class="toolbar">
           <button @click=${this.run}>RUN WGSL</button>
        </div>
        <div style="display:flex; flex:1; gap:10px; min-height:0; margin-top:10px;">
            <div style="flex:1; display:flex; flex-direction:column;">
                <h3>TypeScript</h3>
                <textarea @input=${e=>this.code=e.target.value} .value=${this.code}></textarea>
                <h3>WGSL Output</h3>
                <pre style="flex:1">${this.wgslCode}</pre>
            </div>
            <div style="flex:1; display:flex; flex-direction:column;">
                <h3>Execution Output</h3>
                <pre>${this.output}</pre>
            </div>
        </div>
      </div>
    `}};m.styles=U`
    :host {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      background: #1e1e1e;
      color: #d4d4d4;
      font-family: monospace;
      padding: 20px;
      box-sizing: border-box;
      gap: 10px;
    }
    textarea {
      width: 100%;
      height: 300px;
      background: #252526;
      color: #dcdcdc;
      border: 1px solid #3e3e42;
      font-family: inherit;
      padding: 10px;
    }
    button {
      padding: 8px 16px;
      background: #0e639c;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background: #1177bb;
    }
    .toolbar {
      display: flex;
      gap: 10px;
    }
    pre {
      background: #2d2d2d;
      padding: 10px;
      overflow: auto;
      flex: 1;
    }
  `;y([g()],m.prototype,"currentTest",2);y([g()],m.prototype,"code",2);y([g()],m.prototype,"output",2);y([g()],m.prototype,"wgslCode",2);m=y([O("wgsl-tester")],m);
//# sourceMappingURL=wgsl-DoyEEMrN.js.map
