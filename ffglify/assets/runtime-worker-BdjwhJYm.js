var K=(e=>(e.Unknown="unknown",e.RGBA8="rgba8",e.RGBA16F="rgba16f",e.RGBA32F="rgba32f",e.R8="r8",e.R16F="r16f",e.R32F="r32f",e))(K||{});const nn={unknown:0,rgba8:1,rgba16f:2,rgba32f:3,r8:4,r16f:5,r32f:6};Object.entries(nn).reduce((e,[t,r])=>(e[r]=t,e),{});const Ht={width:1920,height:1080};function ye(e){const t=new Map;for(const r of e.resources){let n=1,a=1;if(r.size.mode==="fixed"){const s=r.size.value;Array.isArray(s)?(n=s[0],a=s[1]):n=s}if(t.set(r.id,{def:{...r,size:r.size,format:r.format??K.RGBA8},width:n,height:a,data:[]}),r.persistence.clearValue!==void 0){const s=t.get(r.id),o=n*a;s.data=new Array(o).fill(r.persistence.clearValue)}}for(const r of e.inputs)r.type==="texture2d"&&t.set(r.id,{def:{id:r.id,type:"texture2d",persistence:{retain:!1,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}},width:Ht.width,height:Ht.height});return t}var Ce=`// Intrinsics
const _applyUnary = (v, f) => Array.isArray(v) ? v.map(f) : f(v);
const _applyBinary = (a, b, f) => {
  if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => f(v, b[i]));
  if (Array.isArray(a)) return a.map(v => f(v, b));
  if (Array.isArray(b)) return b.map(v => f(a, v));
  return f(a, b);
};
const _vec_dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
const _vec_length = (a) => Math.sqrt(a.reduce((s, v) => s + v * v, 0));
const _vec_normalize = (a) => { const l = _vec_length(a); return l < 1e-10 ? a.map(() => 0) : a.map(v => v / l); };
const _mat_mul = (a, b) => {
  if (a.length === 16 || a.length === 9) {
    const dim = a.length === 16 ? 4 : 3;
    if (b.length === a.length) {
      const out = new Array(dim * dim);
      for (let r = 0; r < dim; r++) for (let c = 0; c < dim; c++) {
        let sum = 0; for (let k = 0; k < dim; k++) sum += a[k * dim + r] * b[c * dim + k];
        out[c * dim + r] = sum;
      }
      return out;
    }
    if (b.length === dim) {
      const out = new Array(dim).fill(0);
      for (let r = 0; r < dim; r++) {
        let sum = 0; for (let c = 0; c < dim; c++) sum += a[c * dim + r] * b[c];
        out[r] = sum;
      }
      return out;
    }
  } else if (b.length === 16 || b.length === 9) {
    // Vector * Matrix (Row Vector)
    const dim = b.length === 16 ? 4 : 3;
    if (a.length === dim) {
      const out = new Array(dim).fill(0);
      for (let c = 0; c < dim; c++) {
        let sum = 0; for (let r = 0; r < dim; r++) sum += a[r] * b[c * dim + r];
        out[c] = sum;
      }
      return out;
    }
  }
  return 0;
};
const _quat_mul = (a, b) => {
  const [ax, ay, az, aw] = a;
  const [bx, by, bz, bw] = b;
  return [
    ax * bw + aw * bx + ay * bz - az * by,
    ay * bw + aw * by + az * bx - ax * bz,
    az * bw + aw * bz + ax * by - ay * bx,
    aw * bw - ax * bx - ay * by - az * bz
  ];
};
const _quat_slerp = (a, b, t) => {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];
  let cosHalfTheta = ax * bx + ay * by + az * bz + aw * bw;
  if (Math.abs(cosHalfTheta) >= 1.0) return a;
  if (cosHalfTheta < 0) { bx = -bx; by = -by; bz = -bz; bw = -bw; cosHalfTheta = -cosHalfTheta; }
  const sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
  if (Math.abs(sinHalfTheta) < 0.001) return [(1 - t) * ax + t * bx, (1 - t) * ay + t * by, (1 - t) * az + t * bz, (1 - t) * aw + t * bw];
  const halfTheta = Math.acos(cosHalfTheta);
  const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
  const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
  return [ax * ratioA + bx * ratioB, ay * ratioA + by * ratioB, az * ratioA + bz * ratioB, aw * ratioA + bw * ratioB];
};
const _quat_to_mat4 = (q) => {
  const x = q[0], y = q[1], z = q[2], w = q[3];
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  return [
    1 - (yy + zz), xy + wz, xz - wy, 0,
    xy - wz, 1 - (xx + zz), yz + wx, 0,
    xz + wy, yz - wx, 1 - (xx + yy), 0,
    0, 0, 0, 1
  ];
};
const _prng_hash = (x) => {
  x = x | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) | 0;
  x = (x ^ (x >>> 16)) | 0;
  return x;
};
const _prng_hash_to_float = (x) => (((_prng_hash(x) | 0) >>> 0) / 4294967295.0);

const _getVar = (ctx, id) => {
  if (ctx.inputs.has(id)) return ctx.inputs.get(id);
  throw new Error("Variable '" + id + "' is not defined");
};

const _buffer_store = (resources, id, idx, val) => {
  const res = resources.get(id);
  if (res && res.data) {
    if (idx < 0 || idx >= res.data.length && idx < 100000) {
      // OOB check omitted for performance in JIT, reliant on validation/tests
    }
    res.data[idx] = val;
    // Mark as dirty on CPU so we know to upload later
    if (!res.flags) res.flags = { cpuDirty: false, gpuDirty: false };
    res.flags.cpuDirty = true;
  }
};

const _buffer_load = (resources, id, idx) => {
  const res = resources.get(id);
  // Throw error on OOB to satisfy conformance checks which emulate WGSL strictness or debug behavior
  if (!res || !res.data) throw new Error("Runtime Error: buffer not found");
  if (idx < 0 || idx >= res.data.length) {
    throw new Error("Runtime Error: buffer_load OOB accessing index " + idx + " of size " + res.data.length);
  }
  return res.data[idx];
};

const _createExecutor = (device, pipelines, precomputedInfos, renderPipelines, resourceInfos = new Map()) => {
  const writeOp = (view, op, val, baseOffset = 0) => {
    if (val === undefined || val === null) return;
    let currentVal = val;
    for (const p of op.path) {
      currentVal = currentVal[p];
      if (currentVal === undefined || currentVal === null) {
        return;
      }
    }

    const offset = baseOffset + op.offset;
    switch (op.op) {
      case 'f32': view.setFloat32(offset, currentVal, true); break;
      case 'i32': view.setInt32(offset, currentVal, true); break;
      case 'u32': view.setUint32(offset, currentVal, true); break;
      case 'vec': {
        const { size, elementType } = op;
        for (let i = 0; i < size; i++) {
          if (elementType === 'i32') view.setInt32(offset + i * 4, currentVal[i], true);
          else if (elementType === 'u32') view.setUint32(offset + i * 4, currentVal[i], true);
          else view.setFloat32(offset + i * 4, currentVal[i], true);
        }
        break;
      }
      case 'mat': {
        const { dim } = op;
        const colStride = dim === 3 ? 16 : dim * 4;
        for (let c = 0; c < dim; c++) {
          const colOffset = offset + c * colStride;
          for (let r = 0; r < dim; r++) {
            view.setFloat32(colOffset + r * 4, currentVal[c * dim + r], true);
          }
        }
        break;
      }
      case 'struct': {
        for (const m of op.members) {
          writeOp(view, m, currentVal, offset);
        }
        break;
      }
      case 'array': {
        const { stride, length, elementOp } = op;
        const count = length === 'runtime' ? currentVal.length : length;
        for (let i = 0; i < count; i++) {
          writeOp(view, elementOp, currentVal[i], offset + i * stride);
        }
        break;
      }
    }
  };

  // Staging buffers for async readbacks
  // Map<ResourceId, { buffer: GPUBuffer, bytesPerRow?: number, type: 'buffer'|'texture' }>
  const activeReadbacks = new Map();

  return {
    async executeShader(funcId, dim, args, resources) {
      const info = precomputedInfos.get(funcId);
      if (!info) throw new Error("Precomputed info not found: " + funcId);
      const pipeline = pipelines.get(funcId);

      const entries = [];
      const normalizedDim = [
        dim[0] || 1,
        dim[1] || 1,
        dim[2] || 1
      ];

      // 1. Inputs
      if (info.inputLayout) {
        const layout = info.inputLayout;
        let requiredSize = layout.totalSize;
        const inputs = { ...args, u_dispatch_size: normalizedDim, output_size: normalizedDim };

        if (layout.hasRuntimeArray && layout.runtimeArray) {
          const arr = inputs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            requiredSize = layout.runtimeArray.offset + arr.length * layout.runtimeArray.stride;
          }
        }

        requiredSize = Math.max(Math.ceil(requiredSize / 4) * 4, 16);
        const bufferSize = requiredSize;
        const buffer = new ArrayBuffer(bufferSize);
        const view = new DataView(buffer);

        for (const op of layout.ops) {
          writeOp(view, op, inputs);
        }

        if (layout.runtimeArray) {
          const arr = inputs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            const { offset, stride, elementOp } = layout.runtimeArray;
            for (let i = 0; i < arr.length; i++) {
              writeOp(view, elementOp, arr[i], offset + i * stride);
            }
          }
        }

        const inputBuf = device.createBuffer({
          size: bufferSize,
          usage: 128 | 8 // STORAGE | COPY_DST
        });
        device.queue.writeBuffer(inputBuf, 0, buffer);
        entries.push({ binding: info.inputBinding, resource: { buffer: inputBuf } });
      }

      // 2. Resources
      for (const resBind of info.resourceBindings) {
        const state = resources.get(resBind.id);
        if (!state) continue;
        const resInfo = resourceInfos.get(resBind.id);
        _ensureGpuResource(device, state, resInfo);

        // Mark as potentially dirty on GPU since we are computing
        if (!state.flags) state.flags = { cpuDirty: false, gpuDirty: false };
        // We assume write access for storage bindings.
        // Ideally we'd check if it's read-only, but for now be conservative.
        state.flags.gpuDirty = true;

        if (state.def.type === 'texture2d') {
          entries.push({ binding: resBind.binding, resource: state.gpuTexture.createView() });
        } else {
          entries.push({ binding: resBind.binding, resource: { buffer: state.gpuBuffer } });
        }
      }

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginComputePass();
      pass.setPipeline(pipeline);
      if (entries.length > 0) {
        const bindGroup = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries
        });
        pass.setBindGroup(0, bindGroup);
      }
      const wgSize = info.workgroupSize || [16, 16, 1];
      const workgroups = [
        Math.ceil(normalizedDim[0] / wgSize[0]),
        Math.ceil(normalizedDim[1] / wgSize[1]),
        Math.ceil(normalizedDim[2] / wgSize[2])
      ];
      pass.dispatchWorkgroups(workgroups[0], workgroups[1], workgroups[2]);
      pass.end();
      device.queue.submit([encoder.finish()]);
    },

    async executeDraw(targetId, vertexId, fragmentId, count, pipelineDef, resources, args) {
      const key = \`\${vertexId}|\${fragmentId}\`;
      const pipeline = renderPipelines.get(key);
      if (!pipeline) throw new Error("Render pipeline not found: " + key);

      // Use vertex shader info for bindings
      const info = precomputedInfos.get(vertexId);
      if (!info) throw new Error("Precomputed info not found for vertex shader: " + vertexId);

      const targetState = resources.get(targetId);
      if (!targetState) throw new Error("Target resource not found: " + targetId);
      const targetResInfo = resourceInfos.get(targetId);
      _ensureGpuResource(device, targetState, targetResInfo);

      // Target will be written to
      if (!targetState.flags) targetState.flags = { cpuDirty: false, gpuDirty: false };
      targetState.flags.gpuDirty = true;

      const entries = [];

      // Inject output_size for vertex/fragment shaders (render target dimensions)
      const outputSize = [targetState.width, targetState.height, 1];
      const inputArgs = { ...(args || {}), output_size: outputSize };

      // Inputs buffer (global inputs for vertex/fragment shaders)
      if (info.inputLayout && inputArgs) {
        const layout = info.inputLayout;
        let requiredSize = layout.totalSize;

        if (layout.hasRuntimeArray && layout.runtimeArray) {
          const arr = inputArgs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            requiredSize = layout.runtimeArray.offset + arr.length * layout.runtimeArray.stride;
          }
        }

        requiredSize = Math.max(Math.ceil(requiredSize / 4) * 4, 16);
        const bufferSize = requiredSize;
        const buffer = new ArrayBuffer(bufferSize);
        const view = new DataView(buffer);

        for (const op of layout.ops) {
          writeOp(view, op, inputArgs);
        }

        if (layout.runtimeArray) {
          const arr = inputArgs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            const { offset, stride, elementOp } = layout.runtimeArray;
            for (let i = 0; i < arr.length; i++) {
              writeOp(view, elementOp, arr[i], offset + i * stride);
            }
          }
        }

        const inputBuf = device.createBuffer({
          size: bufferSize,
          usage: 128 | 8 // STORAGE | COPY_DST
        });
        device.queue.writeBuffer(inputBuf, 0, buffer);
        entries.push({ binding: info.inputBinding, resource: { buffer: inputBuf } });
      }

      for (const resBind of info.resourceBindings) {
        if (resBind.id === targetId) continue;
        const state = resources.get(resBind.id);
        if (!state) continue;
        const resInfo = resourceInfos.get(resBind.id);
        _ensureGpuResource(device, state, resInfo);
        if (state.def.type === 'texture2d') {
          entries.push({ binding: resBind.binding, resource: state.gpuTexture.createView() });
        } else {
          entries.push({ binding: resBind.binding, resource: { buffer: state.gpuBuffer } });
        }
      }

      const useLoadOp = pipelineDef.loadOp || 'clear';
      const encoder = device.createCommandEncoder();
      const colorAttachment = {
        view: targetState.gpuTexture.createView(),
        loadOp: useLoadOp,
        storeOp: 'store',
      };
      if (useLoadOp === 'clear') {
        colorAttachment.clearValue = { r: 0, g: 0, b: 0, a: 0 };
      }
      const pass = encoder.beginRenderPass({
        colorAttachments: [colorAttachment]
      });

      pass.setPipeline(pipeline);
      pass.setViewport(0, 0, targetState.width, targetState.height, 0, 1);
      pass.setScissorRect(0, 0, targetState.width, targetState.height);
      if (entries.length > 0) {
        const bindGroup = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries
        });
        pass.setBindGroup(0, bindGroup);
      }
      pass.draw(count);
      pass.end();
      device.queue.submit([encoder.finish()]);
    },

    executeSyncToCpu(resourceId, resources) {
      const state = resources.get(resourceId);
      if (!state) return;
      // Only readback if GPU is dirty
      if (!state.flags || !state.flags.gpuDirty) return;

      const encoder = device.createCommandEncoder();

      if ((state.def.type === 'buffer' || state.def.type === 'atomic_counter') && state.gpuBuffer) {
        const size = state.gpuBuffer.size;
        const staging = device.createBuffer({
          size: size,
          usage: 1 | 8 // MAP_READ | COPY_DST
        });
        encoder.copyBufferToBuffer(state.gpuBuffer, 0, staging, 0, size);
        activeReadbacks.set(resourceId, { staging, type: 'buffer' });
      } else if (state.def.type === 'texture2d' && state.gpuTexture) {
        const bytesPerPixel = 4;
        const bytesPerRow = Math.ceil((state.width * bytesPerPixel) / 256) * 256;
        const staging = device.createBuffer({
          size: bytesPerRow * state.height,
          usage: 1 | 8 // MAP_READ | COPY_DST
        });
        encoder.copyTextureToBuffer(
          { texture: state.gpuTexture },
          { buffer: staging, bytesPerRow },
          [state.width, state.height, 1]
        );
        activeReadbacks.set(resourceId, { staging, type: 'texture', bytesPerRow });
      }

      device.queue.submit([encoder.finish()]);

      // Start async mapping (don't await here)
      const pending = activeReadbacks.get(resourceId);
      if (pending) {
        pending.promise = pending.staging.mapAsync(1);
      }
    },

    async executeWaitCpuSync(resourceId, resources) {
      const pending = activeReadbacks.get(resourceId);
      if (!pending) return; // Maybe already synced or not dirty

      await pending.promise;

      const state = resources.get(resourceId);
      const range = pending.staging.getMappedRange();

      if (pending.type === 'buffer') {
        const info = resourceInfos.get(resourceId);
        const taType = info?.typedArray || 'Float32Array';
        let rawData;
        if (taType === 'Uint32Array') rawData = new Uint32Array(range);
        else if (taType === 'Int32Array') rawData = new Int32Array(range);
        else if (taType === 'Uint8Array') rawData = new Uint8Array(range);
        else rawData = new Float32Array(range);

        const componentCount = info?.componentCount || 1;
        const flatData = Array.from(rawData).slice(0, state.width * componentCount);

        if (componentCount > 1) {
          const structured = [];
          for (let i = 0; i < state.width; i++) {
            structured.push(flatData.slice(i * componentCount, (i + 1) * componentCount));
          }
          state.data = structured;
        } else {
          state.data = flatData;
        }
      } else {
        const bytesPerRow = pending.bytesPerRow;
        const data = new Uint8Array(range);
        const reshaped = [];
        for (let y = 0; y < state.height; y++) {
          const rowStart = y * bytesPerRow;
          for (let x = 0; x < state.width; x++) {
            const start = rowStart + (x * 4);
            reshaped.push(Array.from(data.slice(start, start + 4)).map(v => v / 255.0)); // Normalize to 0-1
          }
        }
        state.data = reshaped;
      }

      pending.staging.unmap();
      pending.staging.destroy();
      activeReadbacks.delete(resourceId);

      if (state.flags) {
        state.flags.gpuDirty = false;
        state.flags.cpuDirty = false;
      }
    },

    executeCopyBuffer(srcId, dstId, srcOffset, dstOffset, count, resources) {
      const src = resources.get(srcId);
      const dst = resources.get(dstId);
      if (!src || !dst) return;

      const srcInfo = resourceInfos.get(srcId);
      const dstInfo = resourceInfos.get(dstId);

      // GPU path: only when GPU resources already exist (from prior dispatch)
      const srcHasGpu = src.gpuBuffer && src.flags && src.flags.gpuDirty;
      const dstHasGpu = dst.gpuBuffer;
      if (srcInfo && dstInfo && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuBuffer && dst.gpuBuffer) {
          const srcCC = srcInfo.componentCount || 1;
          const dstCC = dstInfo.componentCount || 1;
          const srcElems = Math.floor(src.gpuBuffer.size / (srcCC * 4));
          const dstElems = Math.floor(dst.gpuBuffer.size / (dstCC * 4));
          const maxFromSrc = srcElems - srcOffset;
          const maxToDst = dstElems - dstOffset;
          let actualCount = Math.min(maxFromSrc, maxToDst);
          if (count !== Infinity && count >= 0) actualCount = Math.min(actualCount, count);
          if (actualCount <= 0) return;

          const srcByteOff = srcOffset * srcCC * 4;
          const dstByteOff = dstOffset * dstCC * 4;
          const byteCount = actualCount * srcCC * 4;

          const encoder = device.createCommandEncoder();
          encoder.copyBufferToBuffer(src.gpuBuffer, srcByteOff, dst.gpuBuffer, dstByteOff, byteCount);
          device.queue.submit([encoder.finish()]);

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // CPU fallback
      if (!src.data || !dst.data) return;
      const srcLen = src.data.length;
      const dstLen = dst.data.length;
      const maxFromSrc = srcLen - srcOffset;
      const maxToDst = dstLen - dstOffset;
      let actualCount = Math.min(maxFromSrc, maxToDst);
      if (count !== Infinity && count >= 0) actualCount = Math.min(actualCount, count);
      for (let i = 0; i < actualCount; i++) {
        dst.data[dstOffset + i] = src.data[srcOffset + i];
      }
    },

    executeCopyTexture(srcId, dstId, srcRect, dstRect, sample, alpha, normalized, resources) {
      const src = resources.get(srcId);
      const dst = resources.get(dstId);
      if (!src || !dst) return;

      const srcInfo = resourceInfos.get(srcId);
      const dstInfo = resourceInfos.get(dstId);

      // Resolve pixel rects
      let sx = 0, sy = 0, sw = src.width, sh = src.height;
      let dx = 0, dy = 0, dw = dst.width, dh = dst.height;
      if (srcRect) {
        if (normalized) {
          sx = Math.floor(srcRect[0] * src.width); sy = Math.floor(srcRect[1] * src.height);
          sw = Math.floor(srcRect[2] * src.width); sh = Math.floor(srcRect[3] * src.height);
        } else {
          sx = Math.floor(srcRect[0]); sy = Math.floor(srcRect[1]);
          sw = Math.floor(srcRect[2]); sh = Math.floor(srcRect[3]);
        }
      }
      if (dstRect) {
        if (normalized) {
          dx = Math.floor(dstRect[0] * dst.width); dy = Math.floor(dstRect[1] * dst.height);
          dw = Math.floor(dstRect[2] * dst.width); dh = Math.floor(dstRect[3] * dst.height);
        } else {
          dx = Math.floor(dstRect[0]); dy = Math.floor(dstRect[1]);
          dw = Math.floor(dstRect[2]); dh = Math.floor(dstRect[3]);
        }
      }

      if (alpha <= 0) return;

      const isSimpleCopy = (sw === dw && sh === dh && alpha >= 1.0);

      // GPU path: only when GPU resources already exist (from prior dispatch)
      const srcHasGpu = src.gpuTexture && src.flags && src.flags.gpuDirty;
      const dstHasGpu = dst.gpuTexture;

      // GPU path: simple blit (no scaling, no alpha blending)
      if (srcInfo && dstInfo && isSimpleCopy && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuTexture && dst.gpuTexture) {
          const copyW = Math.min(sw, src.width - sx, dst.width - dx);
          const copyH = Math.min(sh, src.height - sy, dst.height - dy);
          if (copyW <= 0 || copyH <= 0) return;

          const encoder = device.createCommandEncoder();
          encoder.copyTextureToTexture(
            { texture: src.gpuTexture, origin: [sx, sy, 0] },
            { texture: dst.gpuTexture, origin: [dx, dy, 0] },
            [copyW, copyH, 1]
          );
          device.queue.submit([encoder.finish()]);

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // GPU path: complex copy (scaling or alpha < 1.0) via compute shader
      if (srcInfo && dstInfo && !isSimpleCopy && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuTexture && dst.gpuTexture) {
          const dstFormat = dstInfo.format || 'rgba8unorm';
          const needsAlphaBlend = alpha < 1.0;
          const sampleMode = (sample === 'bilinear') ? 1 : 0;

          // Get or create the copy compute pipeline
          const pipelineKey = \`__copy_tex_\${dstFormat}\`;
          if (!pipelines.has(pipelineKey)) {
            const shaderCode = \`
struct CopyParams {
  src_rect: vec4<f32>,
  dst_rect: vec4<f32>,
  alpha: f32,
  sample_mode: u32,
  src_dims: vec2<f32>,
}

@group(0) @binding(0) var src_tex: texture_2d<f32>;
@group(0) @binding(1) var orig_dst_tex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> params: CopyParams;
@group(0) @binding(3) var dst_tex: texture_storage_2d<\${dstFormat}, write>;

@compute @workgroup_size(16, 16, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let dst_x = i32(params.dst_rect.x) + i32(gid.x);
  let dst_y = i32(params.dst_rect.y) + i32(gid.y);
  if (gid.x >= u32(params.dst_rect.z) || gid.y >= u32(params.dst_rect.w)) { return; }

  // Map dst pixel to src coordinate
  let u = params.src_rect.x + (f32(gid.x) + 0.5) * params.src_rect.z / params.dst_rect.z;
  let v = params.src_rect.y + (f32(gid.y) + 0.5) * params.src_rect.w / params.dst_rect.w;

  var pixel: vec4<f32>;
  if (params.sample_mode == 1u) {
    // Bilinear sampling
    let tx = u - 0.5;
    let ty = v - 0.5;
    let x0 = i32(floor(tx));
    let y0 = i32(floor(ty));
    let fx = tx - floor(tx);
    let fy = ty - floor(ty);
    let sdims = vec2<i32>(params.src_dims);
    let cx00 = clamp(vec2<i32>(x0, y0), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx10 = clamp(vec2<i32>(x0 + 1, y0), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx01 = clamp(vec2<i32>(x0, y0 + 1), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx11 = clamp(vec2<i32>(x0 + 1, y0 + 1), vec2<i32>(0), sdims - vec2<i32>(1));
    let s00 = textureLoad(src_tex, cx00, 0);
    let s10 = textureLoad(src_tex, cx10, 0);
    let s01 = textureLoad(src_tex, cx01, 0);
    let s11 = textureLoad(src_tex, cx11, 0);
    let top = s00 * (1.0 - fx) + s10 * fx;
    let bot = s01 * (1.0 - fx) + s11 * fx;
    pixel = top * (1.0 - fy) + bot * fy;
  } else {
    // Nearest sampling
    let ix = clamp(i32(floor(u)), 0, i32(params.src_dims.x) - 1);
    let iy = clamp(i32(floor(v)), 0, i32(params.src_dims.y) - 1);
    pixel = textureLoad(src_tex, vec2<i32>(ix, iy), 0);
  }

  if (params.alpha < 1.0) {
    // Porter-Duff source-over compositing
    let existing = textureLoad(orig_dst_tex, vec2<i32>(dst_x, dst_y), 0);
    let srcA = pixel.a * params.alpha;
    let dstA = existing.a;
    let outA = srcA + dstA * (1.0 - srcA);
    var out_color: vec4<f32>;
    if (outA < 1e-5) {
      out_color = vec4<f32>(0.0, 0.0, 0.0, 0.0);
    } else {
      out_color = vec4<f32>(
        (pixel.r * srcA + existing.r * dstA * (1.0 - srcA)) / outA,
        (pixel.g * srcA + existing.g * dstA * (1.0 - srcA)) / outA,
        (pixel.b * srcA + existing.b * dstA * (1.0 - srcA)) / outA,
        outA
      );
    }
    textureStore(dst_tex, vec2<i32>(dst_x, dst_y), out_color);
  } else {
    textureStore(dst_tex, vec2<i32>(dst_x, dst_y), pixel);
  }
}
\`;
            const module = device.createShaderModule({ code: shaderCode });
            const p = device.createComputePipeline({
              layout: 'auto',
              compute: { module, entryPoint: 'main' }
            });
            pipelines.set(pipelineKey, p);
          }
          const copyPipeline = pipelines.get(pipelineKey);

          // Create uniform buffer for CopyParams
          const paramsBuffer = device.createBuffer({ size: 48, usage: 64 | 8 }); // UNIFORM | COPY_DST
          const paramsData = new Float32Array([
            sx, sy, sw, sh,    // src_rect
            dx, dy, dw, dh,    // dst_rect
            alpha, sampleMode, // alpha, sample_mode (u32 reinterpreted)
            src.width, src.height // src_dims
          ]);
          // Correctly write sample_mode as u32
          const paramsView = new DataView(paramsData.buffer);
          paramsView.setUint32(9 * 4, sampleMode, true);
          device.queue.writeBuffer(paramsBuffer, 0, paramsData);

          // For alpha blending, we need the original dst texture content
          let origDstTexture = src.gpuTexture; // dummy, won't be read if alpha >= 1.0
          if (needsAlphaBlend) {
            // Copy current dst to a temp texture for reading
            origDstTexture = device.createTexture({
              size: [dst.width, dst.height, 1],
              format: dstFormat,
              usage: 0x1F // all usages
            });
            const enc = device.createCommandEncoder();
            enc.copyTextureToTexture(
              { texture: dst.gpuTexture },
              { texture: origDstTexture },
              [dst.width, dst.height, 1]
            );
            device.queue.submit([enc.finish()]);
          }

          const bindGroup = device.createBindGroup({
            layout: copyPipeline.getBindGroupLayout(0),
            entries: [
              { binding: 0, resource: src.gpuTexture.createView() },
              { binding: 1, resource: origDstTexture.createView() },
              { binding: 2, resource: { buffer: paramsBuffer } },
              { binding: 3, resource: dst.gpuTexture.createView() }
            ]
          });

          const encoder = device.createCommandEncoder();
          const pass = encoder.beginComputePass();
          pass.setPipeline(copyPipeline);
          pass.setBindGroup(0, bindGroup);
          pass.dispatchWorkgroups(Math.ceil(dw / 16), Math.ceil(dh / 16), 1);
          pass.end();
          device.queue.submit([encoder.finish()]);

          if (needsAlphaBlend) {
            origDstTexture.destroy();
          }
          paramsBuffer.destroy();

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // CPU fallback
      if (!src.data || !dst.data) return;

      const getSrcPixel = (px, py) => {
        const cx = Math.max(0, Math.min(src.width - 1, px));
        const cy = Math.max(0, Math.min(src.height - 1, py));
        const p = src.data[cy * src.width + cx];
        return Array.isArray(p) ? p : [p, 0, 0, 1];
      };

      const sampleBilinear = (u, v) => {
        const tx = u - 0.5, ty = v - 0.5;
        const x0 = Math.floor(tx), y0 = Math.floor(ty);
        const fx = tx - x0, fy = ty - y0;
        const s00 = getSrcPixel(x0, y0);
        const s10 = getSrcPixel(x0 + 1, y0);
        const s01 = getSrcPixel(x0, y0 + 1);
        const s11 = getSrcPixel(x0 + 1, y0 + 1);
        const r = [0, 0, 0, 0];
        for (let c = 0; c < 4; c++) {
          const top = s00[c] * (1 - fx) + s10[c] * fx;
          const bot = s01[c] * (1 - fx) + s11[c] * fx;
          r[c] = top * (1 - fy) + bot * fy;
        }
        return r;
      };

      const needsSampling = sample !== null && (sw !== dw || sh !== dh);

      for (let py = 0; py < dh; py++) {
        for (let px = 0; px < dw; px++) {
          const dstX = dx + px;
          const dstY = dy + py;
          if (dstX < 0 || dstX >= dst.width || dstY < 0 || dstY >= dst.height) continue;

          let pixel;
          if (needsSampling) {
            const srcU = sx + (px + 0.5) * sw / dw;
            const srcV = sy + (py + 0.5) * sh / dh;
            if (sample === 'bilinear') {
              pixel = sampleBilinear(srcU, srcV);
            } else {
              pixel = getSrcPixel(Math.floor(srcU), Math.floor(srcV));
            }
          } else {
            const srcX = sx + Math.min(px, sw - 1);
            const srcY = sy + Math.min(py, sh - 1);
            pixel = getSrcPixel(srcX, srcY);
          }

          const dstIdx = dstY * dst.width + dstX;
          if (alpha >= 1.0) {
            dst.data[dstIdx] = [...pixel];
          } else {
            const existing = dst.data[dstIdx];
            const dstPixel = Array.isArray(existing) ? existing : [existing, 0, 0, 1];
            const srcA = pixel[3] * alpha;
            const dstA = dstPixel[3];
            const outA = srcA + dstA * (1 - srcA);
            const out = [0, 0, 0, outA];
            if (outA < 1e-5) {
              out[0] = out[1] = out[2] = 0;
            } else {
              for (let c = 0; c < 3; c++) {
                out[c] = (pixel[c] * srcA + dstPixel[c] * dstA * (1 - srcA)) / outA;
              }
            }
            dst.data[dstIdx] = out;
          }
        }
      }
    }
  };
};

const _ensureGpuResource = (device, state, info) => {
  if (!info) return;

  if (!state.flags) state.flags = { cpuDirty: true, gpuDirty: false };

  // 1. Create/Resize GPU resource if needed
  if (info.type === 'texture2d') {
    if (!state.gpuTexture || state.gpuTexture.width !== state.width || state.gpuTexture.height !== state.height) {
      if (state.gpuTexture) state.gpuTexture.destroy();
      state.gpuTexture = device.createTexture({
        size: [state.width, state.height, 1],
        format: info.format || 'rgba8unorm',
        usage: 0x1F // RENDER_ATTACHMENT | TEXTURE_BINDING | STORAGE_BINDING | COPY_SRC | COPY_DST
      });
      // New texture needs data
      state.flags.cpuDirty = true;
    }
  } else {
    // Buffer
    const { componentCount } = info;
    const byteSize = state.width * componentCount * 4;
    const alignedSize = Math.max(Math.ceil(byteSize / 4) * 4, 16);

    if (!state.gpuBuffer || state.gpuBuffer.size < alignedSize) {
      const oldBuffer = state.gpuBuffer;
      const preserveGpu = state._preserveGpuOnResize && oldBuffer;
      delete state._preserveGpuOnResize;

      state.gpuBuffer = device.createBuffer({
        size: alignedSize,
        usage: 128 | 8 | 4 // STORAGE | COPY_DST | COPY_SRC
      });

      if (preserveGpu) {
        // GPU-to-GPU copy: preserve existing data across resize
        const encoder = device.createCommandEncoder();
        const copySize = Math.min(oldBuffer.size, alignedSize);
        encoder.copyBufferToBuffer(oldBuffer, 0, state.gpuBuffer, 0, copySize);
        device.queue.submit([encoder.finish()]);
        oldBuffer.destroy();
      } else {
        if (oldBuffer) oldBuffer.destroy();
        state.flags.cpuDirty = true;
      }
    } else {
      // Buffer is large enough — clean up flag if set
      delete state._preserveGpuOnResize;
    }
  }

  // 2. Upload if CPU is dirty
  if (state.flags.cpuDirty && state.data) {
    if (info.type === 'texture2d') {
      const { typedArray, componentCount } = info;
      const flatSize = state.width * state.height * componentCount;
      const raw = typedArray === 'Float32Array' ? new Float32Array(flatSize) : new Uint8Array(flatSize);

      let ptr = 0;
      const src = state.data;

      const push = (v) => {
        if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) push(v[i]);
        } else {
          raw[ptr++] = info.typedArray === 'Uint8Array' ? v * 255 : v;
        }
      };

      for (let i = 0; i < src.length; i++) push(src[i]);

      device.queue.writeTexture(
        { texture: state.gpuTexture },
        raw,
        { bytesPerRow: state.width * (typedArray === 'Float32Array' ? 4 : 1) * componentCount },
        { width: state.width, height: state.height }
      );
    } else {
      const { componentCount } = info;
      const flatSize = state.width * componentCount;
      const raw = info.typedArray === 'Float32Array' ? new Float32Array(flatSize) :
        info.typedArray === 'Uint32Array' ? new Uint32Array(flatSize) : new Int32Array(flatSize);

      let ptr = 0;
      const push = (v) => {
        if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) push(v[i]);
        } else {
          if (ptr < raw.length) raw[ptr++] = v;
        }
      };

      for (let i = 0; i < state.data.length; i++) push(state.data[i]);
      device.queue.writeBuffer(state.gpuBuffer, 0, raw);
    }
    state.flags.cpuDirty = false;
  }
};
`;function v(e,t,r){function n(i,c){if(i._zod||Object.defineProperty(i,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),i._zod.traits.has(e))return;i._zod.traits.add(e),t(i,c);const u=o.prototype,m=Object.keys(u);for(let d=0;d<m.length;d++){const p=m[d];p in i||(i[p]=u[p].bind(i))}}const a=r?.Parent??Object;class s extends a{}Object.defineProperty(s,"name",{value:e});function o(i){var c;const u=r?.Parent?new s:this;n(u,i),(c=u._zod).deferred??(c.deferred=[]);for(const m of u._zod.deferred)m();return u}return Object.defineProperty(o,"init",{value:n}),Object.defineProperty(o,Symbol.hasInstance,{value:i=>r?.Parent&&i instanceof r.Parent?!0:i?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}class xt extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class dr extends Error{constructor(t){super(`Encountered unidirectional transform during encode: ${t}`),this.name="ZodEncodeError"}}const mr={};function dt(e){return mr}function hr(e){const t=Object.values(e).filter(n=>typeof n=="number");return Object.entries(e).filter(([n,a])=>t.indexOf(+n)===-1).map(([n,a])=>a)}function pe(e,t){return typeof t=="bigint"?t.toString():t}function ve(e){return{get value(){{const t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function be(e){return e==null}function xe(e){const t=e.startsWith("^")?1:0,r=e.endsWith("$")?e.length-1:e.length;return e.slice(t,r)}function an(e,t){const r=(e.toString().split(".")[1]||"").length,n=t.toString();let a=(n.split(".")[1]||"").length;if(a===0&&/\d?e-\d?/.test(n)){const c=n.match(/\d?e-(\d?)/);c?.[1]&&(a=Number.parseInt(c[1]))}const s=r>a?r:a,o=Number.parseInt(e.toFixed(s).replace(".","")),i=Number.parseInt(t.toFixed(s).replace(".",""));return o%i/10**s}const Ie=Symbol("evaluating");function N(e,t,r){let n;Object.defineProperty(e,t,{get(){if(n!==Ie)return n===void 0&&(n=Ie,n=r()),n},set(a){Object.defineProperty(e,t,{value:a})},configurable:!0})}function ht(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!0,configurable:!0})}function ut(...e){const t={};for(const r of e){const n=Object.getOwnPropertyDescriptors(r);Object.assign(t,n)}return Object.defineProperties({},t)}function De(e){return JSON.stringify(e)}function on(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const _r="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function Xt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const sn=ve(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Bt(e){if(Xt(e)===!1)return!1;const t=e.constructor;if(t===void 0||typeof t!="function")return!0;const r=t.prototype;return!(Xt(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function gr(e){return Bt(e)?{...e}:Array.isArray(e)?[...e]:e}const cn=new Set(["string","number","symbol"]);function ne(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lt(e,t,r){const n=new e._zod.constr(t??e._zod.def);return(!t||r?.parent)&&(n._zod.parent=e),n}function O(e){const t=e;if(!t)return{};if(typeof t=="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error=="string"?{...t,error:()=>t.error}:t}function un(e){return Object.keys(e).filter(t=>e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional")}const ln={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function fn(e,t){const r=e._zod.def,n=r.checks;if(n&&n.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=ut(e._zod.def,{get shape(){const o={};for(const i in t){if(!(i in r.shape))throw new Error(`Unrecognized key: "${i}"`);t[i]&&(o[i]=r.shape[i])}return ht(this,"shape",o),o},checks:[]});return lt(e,s)}function pn(e,t){const r=e._zod.def,n=r.checks;if(n&&n.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=ut(e._zod.def,{get shape(){const o={...e._zod.def.shape};for(const i in t){if(!(i in r.shape))throw new Error(`Unrecognized key: "${i}"`);t[i]&&delete o[i]}return ht(this,"shape",o),o},checks:[]});return lt(e,s)}function dn(e,t){if(!Bt(t))throw new Error("Invalid input to extend: expected a plain object");const r=e._zod.def.checks;if(r&&r.length>0){const s=e._zod.def.shape;for(const o in t)if(Object.getOwnPropertyDescriptor(s,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const a=ut(e._zod.def,{get shape(){const s={...e._zod.def.shape,...t};return ht(this,"shape",s),s}});return lt(e,a)}function mn(e,t){if(!Bt(t))throw new Error("Invalid input to safeExtend: expected a plain object");const r=ut(e._zod.def,{get shape(){const n={...e._zod.def.shape,...t};return ht(this,"shape",n),n}});return lt(e,r)}function hn(e,t){const r=ut(e._zod.def,{get shape(){const n={...e._zod.def.shape,...t._zod.def.shape};return ht(this,"shape",n),n},get catchall(){return t._zod.def.catchall},checks:[]});return lt(e,r)}function _n(e,t,r){const a=t._zod.def.checks;if(a&&a.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=ut(t._zod.def,{get shape(){const i=t._zod.def.shape,c={...i};if(r)for(const u in r){if(!(u in i))throw new Error(`Unrecognized key: "${u}"`);r[u]&&(c[u]=e?new e({type:"optional",innerType:i[u]}):i[u])}else for(const u in i)c[u]=e?new e({type:"optional",innerType:i[u]}):i[u];return ht(this,"shape",c),c},checks:[]});return lt(t,o)}function gn(e,t,r){const n=ut(t._zod.def,{get shape(){const a=t._zod.def.shape,s={...a};if(r)for(const o in r){if(!(o in s))throw new Error(`Unrecognized key: "${o}"`);r[o]&&(s[o]=new e({type:"nonoptional",innerType:a[o]}))}else for(const o in a)s[o]=new e({type:"nonoptional",innerType:a[o]});return ht(this,"shape",s),s}});return lt(t,n)}function yt(e,t=0){if(e.aborted===!0)return!0;for(let r=t;r<e.issues.length;r++)if(e.issues[r]?.continue!==!0)return!0;return!1}function yr(e,t){return t.map(r=>{var n;return(n=r).path??(n.path=[]),r.path.unshift(e),r})}function Zt(e){return typeof e=="string"?e:e?.message}function mt(e,t,r){const n={...e,path:e.path??[]};if(!e.message){const a=Zt(e.inst?._zod.def?.error?.(e))??Zt(t?.error?.(e))??Zt(r.customError?.(e))??Zt(r.localeError?.(e))??"Invalid input";n.message=a}return delete n.inst,delete n.continue,t?.reportInput||delete n.input,n}function $e(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function Mt(...e){const[t,r,n]=e;return typeof t=="string"?{message:t,code:"custom",input:r,inst:n}:{...t}}const vr=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,pe,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},br=v("$ZodError",vr),xr=v("$ZodError",vr,{Parent:Error});function yn(e,t=r=>r.message){const r={},n=[];for(const a of e.issues)a.path.length>0?(r[a.path[0]]=r[a.path[0]]||[],r[a.path[0]].push(t(a))):n.push(t(a));return{formErrors:n,fieldErrors:r}}function vn(e,t=r=>r.message){const r={_errors:[]},n=a=>{for(const s of a.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(o=>n({issues:o}));else if(s.code==="invalid_key")n({issues:s.issues});else if(s.code==="invalid_element")n({issues:s.issues});else if(s.path.length===0)r._errors.push(t(s));else{let o=r,i=0;for(;i<s.path.length;){const c=s.path[i];i===s.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(s))):o[c]=o[c]||{_errors:[]},o=o[c],i++}}};return n(e),r}const we=e=>(t,r,n,a)=>{const s=n?Object.assign(n,{async:!1}):{async:!1},o=t._zod.run({value:r,issues:[]},s);if(o instanceof Promise)throw new xt;if(o.issues.length){const i=new(a?.Err??e)(o.issues.map(c=>mt(c,s,dt())));throw _r(i,a?.callee),i}return o.value},ze=e=>async(t,r,n,a)=>{const s=n?Object.assign(n,{async:!0}):{async:!0};let o=t._zod.run({value:r,issues:[]},s);if(o instanceof Promise&&(o=await o),o.issues.length){const i=new(a?.Err??e)(o.issues.map(c=>mt(c,s,dt())));throw _r(i,a?.callee),i}return o.value},ae=e=>(t,r,n)=>{const a=n?{...n,async:!1}:{async:!1},s=t._zod.run({value:r,issues:[]},a);if(s instanceof Promise)throw new xt;return s.issues.length?{success:!1,error:new(e??br)(s.issues.map(o=>mt(o,a,dt())))}:{success:!0,data:s.value}},bn=ae(xr),oe=e=>async(t,r,n)=>{const a=n?Object.assign(n,{async:!0}):{async:!0};let s=t._zod.run({value:r,issues:[]},a);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new e(s.issues.map(o=>mt(o,a,dt())))}:{success:!0,data:s.value}},xn=oe(xr),$n=e=>(t,r,n)=>{const a=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return we(e)(t,r,a)},wn=e=>(t,r,n)=>we(e)(t,r,n),zn=e=>async(t,r,n)=>{const a=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return ze(e)(t,r,a)},An=e=>async(t,r,n)=>ze(e)(t,r,n),Sn=e=>(t,r,n)=>{const a=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return ae(e)(t,r,a)},Tn=e=>(t,r,n)=>ae(e)(t,r,n),kn=e=>async(t,r,n)=>{const a=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return oe(e)(t,r,a)},En=e=>async(t,r,n)=>oe(e)(t,r,n),On=/^[cC][^\s-]{8,}$/,Cn=/^[0-9a-z]+$/,In=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Dn=/^[0-9a-vA-V]{20}$/,Bn=/^[A-Za-z0-9]{27}$/,Mn=/^[a-zA-Z0-9_-]{21}$/,Rn=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Pn=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Be=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Zn=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Un="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function qn(){return new RegExp(Un,"u")}const Nn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,jn=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Vn=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Gn=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Ln=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,$r=/^[A-Za-z0-9_-]*$/,Fn=/^\+[1-9]\d{6,14}$/,wr="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Wn=new RegExp(`^${wr}$`);function zr(e){const t="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Jn(e){return new RegExp(`^${zr(e)}$`)}function Yn(e){const t=zr({precision:e.precision}),r=["Z"];e.local&&r.push(""),e.offset&&r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${t}(?:${r.join("|")})`;return new RegExp(`^${wr}T(?:${n})$`)}const Hn=e=>{const t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)},Xn=/^-?\d+$/,Kn=/^-?\d+(?:\.\d+)?$/,Qn=/^(?:true|false)$/i,ta=/^[^A-Z]*$/,ea=/^[^a-z]*$/,Q=v("$ZodCheck",(e,t)=>{var r;e._zod??(e._zod={}),e._zod.def=t,(r=e._zod).onattach??(r.onattach=[])}),Ar={number:"number",bigint:"bigint",object:"date"},Sr=v("$ZodCheckLessThan",(e,t)=>{Q.init(e,t);const r=Ar[typeof t.value];e._zod.onattach.push(n=>{const a=n._zod.bag,s=(t.inclusive?a.maximum:a.exclusiveMaximum)??Number.POSITIVE_INFINITY;t.value<s&&(t.inclusive?a.maximum=t.value:a.exclusiveMaximum=t.value)}),e._zod.check=n=>{(t.inclusive?n.value<=t.value:n.value<t.value)||n.issues.push({origin:r,code:"too_big",maximum:typeof t.value=="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Tr=v("$ZodCheckGreaterThan",(e,t)=>{Q.init(e,t);const r=Ar[typeof t.value];e._zod.onattach.push(n=>{const a=n._zod.bag,s=(t.inclusive?a.minimum:a.exclusiveMinimum)??Number.NEGATIVE_INFINITY;t.value>s&&(t.inclusive?a.minimum=t.value:a.exclusiveMinimum=t.value)}),e._zod.check=n=>{(t.inclusive?n.value>=t.value:n.value>t.value)||n.issues.push({origin:r,code:"too_small",minimum:typeof t.value=="object"?t.value.getTime():t.value,input:n.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ra=v("$ZodCheckMultipleOf",(e,t)=>{Q.init(e,t),e._zod.onattach.push(r=>{var n;(n=r._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=r=>{if(typeof r.value!=typeof t.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof r.value=="bigint"?r.value%t.value===BigInt(0):an(r.value,t.value)===0)||r.issues.push({origin:typeof r.value,code:"not_multiple_of",divisor:t.value,input:r.value,inst:e,continue:!t.abort})}}),na=v("$ZodCheckNumberFormat",(e,t)=>{Q.init(e,t),t.format=t.format||"float64";const r=t.format?.includes("int"),n=r?"int":"number",[a,s]=ln[t.format];e._zod.onattach.push(o=>{const i=o._zod.bag;i.format=t.format,i.minimum=a,i.maximum=s,r&&(i.pattern=Xn)}),e._zod.check=o=>{const i=o.value;if(r){if(!Number.isInteger(i)){o.issues.push({expected:n,format:t.format,code:"invalid_type",continue:!1,input:i,inst:e});return}if(!Number.isSafeInteger(i)){i>0?o.issues.push({input:i,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort}):o.issues.push({input:i,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:n,inclusive:!0,continue:!t.abort});return}}i<a&&o.issues.push({origin:"number",input:i,code:"too_small",minimum:a,inclusive:!0,inst:e,continue:!t.abort}),i>s&&o.issues.push({origin:"number",input:i,code:"too_big",maximum:s,inclusive:!0,inst:e,continue:!t.abort})}}),aa=v("$ZodCheckMaxLength",(e,t)=>{var r;Q.init(e,t),(r=e._zod.def).when??(r.when=n=>{const a=n.value;return!be(a)&&a.length!==void 0}),e._zod.onattach.push(n=>{const a=n._zod.bag.maximum??Number.POSITIVE_INFINITY;t.maximum<a&&(n._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{const a=n.value;if(a.length<=t.maximum)return;const o=$e(a);n.issues.push({origin:o,code:"too_big",maximum:t.maximum,inclusive:!0,input:a,inst:e,continue:!t.abort})}}),oa=v("$ZodCheckMinLength",(e,t)=>{var r;Q.init(e,t),(r=e._zod.def).when??(r.when=n=>{const a=n.value;return!be(a)&&a.length!==void 0}),e._zod.onattach.push(n=>{const a=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;t.minimum>a&&(n._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{const a=n.value;if(a.length>=t.minimum)return;const o=$e(a);n.issues.push({origin:o,code:"too_small",minimum:t.minimum,inclusive:!0,input:a,inst:e,continue:!t.abort})}}),sa=v("$ZodCheckLengthEquals",(e,t)=>{var r;Q.init(e,t),(r=e._zod.def).when??(r.when=n=>{const a=n.value;return!be(a)&&a.length!==void 0}),e._zod.onattach.push(n=>{const a=n._zod.bag;a.minimum=t.length,a.maximum=t.length,a.length=t.length}),e._zod.check=n=>{const a=n.value,s=a.length;if(s===t.length)return;const o=$e(a),i=s>t.length;n.issues.push({origin:o,...i?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),se=v("$ZodCheckStringFormat",(e,t)=>{var r,n;Q.init(e,t),e._zod.onattach.push(a=>{const s=a._zod.bag;s.format=t.format,t.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(t.pattern))}),t.pattern?(r=e._zod).check??(r.check=a=>{t.pattern.lastIndex=0,!t.pattern.test(a.value)&&a.issues.push({origin:"string",code:"invalid_format",format:t.format,input:a.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(n=e._zod).check??(n.check=()=>{})}),ia=v("$ZodCheckRegex",(e,t)=>{se.init(e,t),e._zod.check=r=>{t.pattern.lastIndex=0,!t.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:"regex",input:r.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),ca=v("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=ta),se.init(e,t)}),ua=v("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=ea),se.init(e,t)}),la=v("$ZodCheckIncludes",(e,t)=>{Q.init(e,t);const r=ne(t.includes),n=new RegExp(typeof t.position=="number"?`^.{${t.position}}${r}`:r);t.pattern=n,e._zod.onattach.push(a=>{const s=a._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(n)}),e._zod.check=a=>{a.value.includes(t.includes,t.position)||a.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:a.value,inst:e,continue:!t.abort})}}),fa=v("$ZodCheckStartsWith",(e,t)=>{Q.init(e,t);const r=new RegExp(`^${ne(t.prefix)}.*`);t.pattern??(t.pattern=r),e._zod.onattach.push(n=>{const a=n._zod.bag;a.patterns??(a.patterns=new Set),a.patterns.add(r)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),pa=v("$ZodCheckEndsWith",(e,t)=>{Q.init(e,t);const r=new RegExp(`.*${ne(t.suffix)}$`);t.pattern??(t.pattern=r),e._zod.onattach.push(n=>{const a=n._zod.bag;a.patterns??(a.patterns=new Set),a.patterns.add(r)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),da=v("$ZodCheckOverwrite",(e,t)=>{Q.init(e,t),e._zod.check=r=>{r.value=t.tx(r.value)}});class ma{constructor(t=[]){this.content=[],this.indent=0,this&&(this.args=t)}indented(t){this.indent+=1,t(this),this.indent-=1}write(t){if(typeof t=="function"){t(this,{execution:"sync"}),t(this,{execution:"async"});return}const n=t.split(`
`).filter(o=>o),a=Math.min(...n.map(o=>o.length-o.trimStart().length)),s=n.map(o=>o.slice(a)).map(o=>" ".repeat(this.indent*2)+o);for(const o of s)this.content.push(o)}compile(){const t=Function,r=this?.args,a=[...(this?.content??[""]).map(s=>`  ${s}`)];return new t(...r,a.join(`
`))}}const ha={major:4,minor:3,patch:6},F=v("$ZodType",(e,t)=>{var r;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=ha;const n=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&n.unshift(e);for(const a of n)for(const s of a._zod.onattach)s(e);if(n.length===0)(r=e._zod).deferred??(r.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{const a=(o,i,c)=>{let u=yt(o),m;for(const d of i){if(d._zod.def.when){if(!d._zod.def.when(o))continue}else if(u)continue;const p=o.issues.length,f=d._zod.check(o);if(f instanceof Promise&&c?.async===!1)throw new xt;if(m||f instanceof Promise)m=(m??Promise.resolve()).then(async()=>{await f,o.issues.length!==p&&(u||(u=yt(o,p)))});else{if(o.issues.length===p)continue;u||(u=yt(o,p))}}return m?m.then(()=>o):o},s=(o,i,c)=>{if(yt(o))return o.aborted=!0,o;const u=a(i,n,c);if(u instanceof Promise){if(c.async===!1)throw new xt;return u.then(m=>e._zod.parse(m,c))}return e._zod.parse(u,c)};e._zod.run=(o,i)=>{if(i.skipChecks)return e._zod.parse(o,i);if(i.direction==="backward"){const u=e._zod.parse({value:o.value,issues:[]},{...i,skipChecks:!0});return u instanceof Promise?u.then(m=>s(m,o,i)):s(u,o,i)}const c=e._zod.parse(o,i);if(c instanceof Promise){if(i.async===!1)throw new xt;return c.then(u=>a(u,n,i))}return a(c,n,i)}}N(e,"~standard",()=>({validate:a=>{try{const s=bn(e,a);return s.success?{value:s.data}:{issues:s.error?.issues}}catch{return xn(e,a).then(o=>o.success?{value:o.data}:{issues:o.error?.issues})}},vendor:"zod",version:1}))}),Ae=v("$ZodString",(e,t)=>{F.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Hn(e._zod.bag),e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:e}),r}}),G=v("$ZodStringFormat",(e,t)=>{se.init(e,t),Ae.init(e,t)}),_a=v("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=Pn),G.init(e,t)}),ga=v("$ZodUUID",(e,t)=>{if(t.version){const n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(n===void 0)throw new Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=Be(n))}else t.pattern??(t.pattern=Be());G.init(e,t)}),ya=v("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=Zn),G.init(e,t)}),va=v("$ZodURL",(e,t)=>{G.init(e,t),e._zod.check=r=>{try{const n=r.value.trim(),a=new URL(n);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(a.hostname)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:t.hostname.source,input:r.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(a.protocol.endsWith(":")?a.protocol.slice(0,-1):a.protocol)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:r.value,inst:e,continue:!t.abort})),t.normalize?r.value=a.href:r.value=n;return}catch{r.issues.push({code:"invalid_format",format:"url",input:r.value,inst:e,continue:!t.abort})}}}),ba=v("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=qn()),G.init(e,t)}),xa=v("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=Mn),G.init(e,t)}),$a=v("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=On),G.init(e,t)}),wa=v("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=Cn),G.init(e,t)}),za=v("$ZodULID",(e,t)=>{t.pattern??(t.pattern=In),G.init(e,t)}),Aa=v("$ZodXID",(e,t)=>{t.pattern??(t.pattern=Dn),G.init(e,t)}),Sa=v("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=Bn),G.init(e,t)}),Ta=v("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Yn(t)),G.init(e,t)}),ka=v("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=Wn),G.init(e,t)}),Ea=v("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=Jn(t)),G.init(e,t)}),Oa=v("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=Rn),G.init(e,t)}),Ca=v("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=Nn),G.init(e,t),e._zod.bag.format="ipv4"}),Ia=v("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=jn),G.init(e,t),e._zod.bag.format="ipv6",e._zod.check=r=>{try{new URL(`http://[${r.value}]`)}catch{r.issues.push({code:"invalid_format",format:"ipv6",input:r.value,inst:e,continue:!t.abort})}}}),Da=v("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=Vn),G.init(e,t)}),Ba=v("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=Gn),G.init(e,t),e._zod.check=r=>{const n=r.value.split("/");try{if(n.length!==2)throw new Error;const[a,s]=n;if(!s)throw new Error;const o=Number(s);if(`${o}`!==s)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${a}]`)}catch{r.issues.push({code:"invalid_format",format:"cidrv6",input:r.value,inst:e,continue:!t.abort})}}});function kr(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const Ma=v("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=Ln),G.init(e,t),e._zod.bag.contentEncoding="base64",e._zod.check=r=>{kr(r.value)||r.issues.push({code:"invalid_format",format:"base64",input:r.value,inst:e,continue:!t.abort})}});function Ra(e){if(!$r.test(e))return!1;const t=e.replace(/[-_]/g,n=>n==="-"?"+":"/"),r=t.padEnd(Math.ceil(t.length/4)*4,"=");return kr(r)}const Pa=v("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=$r),G.init(e,t),e._zod.bag.contentEncoding="base64url",e._zod.check=r=>{Ra(r.value)||r.issues.push({code:"invalid_format",format:"base64url",input:r.value,inst:e,continue:!t.abort})}}),Za=v("$ZodE164",(e,t)=>{t.pattern??(t.pattern=Fn),G.init(e,t)});function Ua(e,t=null){try{const r=e.split(".");if(r.length!==3)return!1;const[n]=r;if(!n)return!1;const a=JSON.parse(atob(n));return!("typ"in a&&a?.typ!=="JWT"||!a.alg||t&&(!("alg"in a)||a.alg!==t))}catch{return!1}}const qa=v("$ZodJWT",(e,t)=>{G.init(e,t),e._zod.check=r=>{Ua(r.value,t.alg)||r.issues.push({code:"invalid_format",format:"jwt",input:r.value,inst:e,continue:!t.abort})}}),Er=v("$ZodNumber",(e,t)=>{F.init(e,t),e._zod.pattern=e._zod.bag.pattern??Kn,e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=Number(r.value)}catch{}const a=r.value;if(typeof a=="number"&&!Number.isNaN(a)&&Number.isFinite(a))return r;const s=typeof a=="number"?Number.isNaN(a)?"NaN":Number.isFinite(a)?void 0:"Infinity":void 0;return r.issues.push({expected:"number",code:"invalid_type",input:a,inst:e,...s?{received:s}:{}}),r}}),Na=v("$ZodNumberFormat",(e,t)=>{na.init(e,t),Er.init(e,t)}),ja=v("$ZodBoolean",(e,t)=>{F.init(e,t),e._zod.pattern=Qn,e._zod.parse=(r,n)=>{if(t.coerce)try{r.value=!!r.value}catch{}const a=r.value;return typeof a=="boolean"||r.issues.push({expected:"boolean",code:"invalid_type",input:a,inst:e}),r}}),Va=v("$ZodAny",(e,t)=>{F.init(e,t),e._zod.parse=r=>r}),Ga=v("$ZodUnknown",(e,t)=>{F.init(e,t),e._zod.parse=r=>r}),La=v("$ZodNever",(e,t)=>{F.init(e,t),e._zod.parse=(r,n)=>(r.issues.push({expected:"never",code:"invalid_type",input:r.value,inst:e}),r)});function Me(e,t,r){e.issues.length&&t.issues.push(...yr(r,e.issues)),t.value[r]=e.value}const Fa=v("$ZodArray",(e,t)=>{F.init(e,t),e._zod.parse=(r,n)=>{const a=r.value;if(!Array.isArray(a))return r.issues.push({expected:"array",code:"invalid_type",input:a,inst:e}),r;r.value=Array(a.length);const s=[];for(let o=0;o<a.length;o++){const i=a[o],c=t.element._zod.run({value:i,issues:[]},n);c instanceof Promise?s.push(c.then(u=>Me(u,r,o))):Me(c,r,o)}return s.length?Promise.all(s).then(()=>r):r}});function Kt(e,t,r,n,a){if(e.issues.length){if(a&&!(r in n))return;t.issues.push(...yr(r,e.issues))}e.value===void 0?r in n&&(t.value[r]=void 0):t.value[r]=e.value}function Or(e){const t=Object.keys(e.shape);for(const n of t)if(!e.shape?.[n]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${n}": expected a Zod schema`);const r=un(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(r)}}function Cr(e,t,r,n,a,s){const o=[],i=a.keySet,c=a.catchall._zod,u=c.def.type,m=c.optout==="optional";for(const d in t){if(i.has(d))continue;if(u==="never"){o.push(d);continue}const p=c.run({value:t[d],issues:[]},n);p instanceof Promise?e.push(p.then(f=>Kt(f,r,d,t,m))):Kt(p,r,d,t,m)}return o.length&&r.issues.push({code:"unrecognized_keys",keys:o,input:t,inst:s}),e.length?Promise.all(e).then(()=>r):r}const Wa=v("$ZodObject",(e,t)=>{if(F.init(e,t),!Object.getOwnPropertyDescriptor(t,"shape")?.get){const i=t.shape;Object.defineProperty(t,"shape",{get:()=>{const c={...i};return Object.defineProperty(t,"shape",{value:c}),c}})}const n=ve(()=>Or(t));N(e._zod,"propValues",()=>{const i=t.shape,c={};for(const u in i){const m=i[u]._zod;if(m.values){c[u]??(c[u]=new Set);for(const d of m.values)c[u].add(d)}}return c});const a=Xt,s=t.catchall;let o;e._zod.parse=(i,c)=>{o??(o=n.value);const u=i.value;if(!a(u))return i.issues.push({expected:"object",code:"invalid_type",input:u,inst:e}),i;i.value={};const m=[],d=o.shape;for(const p of o.keys){const f=d[p],l=f._zod.optout==="optional",h=f._zod.run({value:u[p],issues:[]},c);h instanceof Promise?m.push(h.then(_=>Kt(_,i,p,u,l))):Kt(h,i,p,u,l)}return s?Cr(m,u,i,c,n.value,e):m.length?Promise.all(m).then(()=>i):i}}),Ja=v("$ZodObjectJIT",(e,t)=>{Wa.init(e,t);const r=e._zod.parse,n=ve(()=>Or(t)),a=p=>{const f=new ma(["shape","payload","ctx"]),l=n.value,h=x=>{const $=De(x);return`shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`};f.write("const input = payload.value;");const _=Object.create(null);let g=0;for(const x of l.keys)_[x]=`key_${g++}`;f.write("const newResult = {};");for(const x of l.keys){const $=_[x],D=De(x),w=p[x]?._zod?.optout==="optional";f.write(`const ${$} = ${h(x)};`),w?f.write(`
        if (${$}.issues.length) {
          if (${D} in input) {
            payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${D}, ...iss.path] : [${D}]
            })));
          }
        }
        
        if (${$}.value === undefined) {
          if (${D} in input) {
            newResult[${D}] = undefined;
          }
        } else {
          newResult[${D}] = ${$}.value;
        }
        
      `):f.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${D}, ...iss.path] : [${D}]
          })));
        }
        
        if (${$}.value === undefined) {
          if (${D} in input) {
            newResult[${D}] = undefined;
          }
        } else {
          newResult[${D}] = ${$}.value;
        }
        
      `)}f.write("payload.value = newResult;"),f.write("return payload;");const y=f.compile();return(x,$)=>y(p,x,$)};let s;const o=Xt,i=!mr.jitless,u=i&&sn.value,m=t.catchall;let d;e._zod.parse=(p,f)=>{d??(d=n.value);const l=p.value;return o(l)?i&&u&&f?.async===!1&&f.jitless!==!0?(s||(s=a(t.shape)),p=s(p,f),m?Cr([],l,p,f,d,e):p):r(p,f):(p.issues.push({expected:"object",code:"invalid_type",input:l,inst:e}),p)}});function Re(e,t,r,n){for(const s of e)if(s.issues.length===0)return t.value=s.value,t;const a=e.filter(s=>!yt(s));return a.length===1?(t.value=a[0].value,a[0]):(t.issues.push({code:"invalid_union",input:t.value,inst:r,errors:e.map(s=>s.issues.map(o=>mt(o,n,dt())))}),t)}const Ya=v("$ZodUnion",(e,t)=>{F.init(e,t),N(e._zod,"optin",()=>t.options.some(a=>a._zod.optin==="optional")?"optional":void 0),N(e._zod,"optout",()=>t.options.some(a=>a._zod.optout==="optional")?"optional":void 0),N(e._zod,"values",()=>{if(t.options.every(a=>a._zod.values))return new Set(t.options.flatMap(a=>Array.from(a._zod.values)))}),N(e._zod,"pattern",()=>{if(t.options.every(a=>a._zod.pattern)){const a=t.options.map(s=>s._zod.pattern);return new RegExp(`^(${a.map(s=>xe(s.source)).join("|")})$`)}});const r=t.options.length===1,n=t.options[0]._zod.run;e._zod.parse=(a,s)=>{if(r)return n(a,s);let o=!1;const i=[];for(const c of t.options){const u=c._zod.run({value:a.value,issues:[]},s);if(u instanceof Promise)i.push(u),o=!0;else{if(u.issues.length===0)return u;i.push(u)}}return o?Promise.all(i).then(c=>Re(c,a,e,s)):Re(i,a,e,s)}}),Ha=v("$ZodIntersection",(e,t)=>{F.init(e,t),e._zod.parse=(r,n)=>{const a=r.value,s=t.left._zod.run({value:a,issues:[]},n),o=t.right._zod.run({value:a,issues:[]},n);return s instanceof Promise||o instanceof Promise?Promise.all([s,o]).then(([c,u])=>Pe(r,c,u)):Pe(r,s,o)}});function de(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(Bt(e)&&Bt(t)){const r=Object.keys(t),n=Object.keys(e).filter(s=>r.indexOf(s)!==-1),a={...e,...t};for(const s of n){const o=de(e[s],t[s]);if(!o.valid)return{valid:!1,mergeErrorPath:[s,...o.mergeErrorPath]};a[s]=o.data}return{valid:!0,data:a}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};const r=[];for(let n=0;n<e.length;n++){const a=e[n],s=t[n],o=de(a,s);if(!o.valid)return{valid:!1,mergeErrorPath:[n,...o.mergeErrorPath]};r.push(o.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function Pe(e,t,r){const n=new Map;let a;for(const i of t.issues)if(i.code==="unrecognized_keys"){a??(a=i);for(const c of i.keys)n.has(c)||n.set(c,{}),n.get(c).l=!0}else e.issues.push(i);for(const i of r.issues)if(i.code==="unrecognized_keys")for(const c of i.keys)n.has(c)||n.set(c,{}),n.get(c).r=!0;else e.issues.push(i);const s=[...n].filter(([,i])=>i.l&&i.r).map(([i])=>i);if(s.length&&a&&e.issues.push({...a,keys:s}),yt(e))return e;const o=de(t.value,r.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}const Xa=v("$ZodEnum",(e,t)=>{F.init(e,t);const r=hr(t.entries),n=new Set(r);e._zod.values=n,e._zod.pattern=new RegExp(`^(${r.filter(a=>cn.has(typeof a)).map(a=>typeof a=="string"?ne(a):a.toString()).join("|")})$`),e._zod.parse=(a,s)=>{const o=a.value;return n.has(o)||a.issues.push({code:"invalid_value",values:r,input:o,inst:e}),a}}),Ka=v("$ZodTransform",(e,t)=>{F.init(e,t),e._zod.parse=(r,n)=>{if(n.direction==="backward")throw new dr(e.constructor.name);const a=t.transform(r.value,r);if(n.async)return(a instanceof Promise?a:Promise.resolve(a)).then(o=>(r.value=o,r));if(a instanceof Promise)throw new xt;return r.value=a,r}});function Ze(e,t){return e.issues.length&&t===void 0?{issues:[],value:void 0}:e}const Ir=v("$ZodOptional",(e,t)=>{F.init(e,t),e._zod.optin="optional",e._zod.optout="optional",N(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),N(e._zod,"pattern",()=>{const r=t.innerType._zod.pattern;return r?new RegExp(`^(${xe(r.source)})?$`):void 0}),e._zod.parse=(r,n)=>{if(t.innerType._zod.optin==="optional"){const a=t.innerType._zod.run(r,n);return a instanceof Promise?a.then(s=>Ze(s,r.value)):Ze(a,r.value)}return r.value===void 0?r:t.innerType._zod.run(r,n)}}),Qa=v("$ZodExactOptional",(e,t)=>{Ir.init(e,t),N(e._zod,"values",()=>t.innerType._zod.values),N(e._zod,"pattern",()=>t.innerType._zod.pattern),e._zod.parse=(r,n)=>t.innerType._zod.run(r,n)}),to=v("$ZodNullable",(e,t)=>{F.init(e,t),N(e._zod,"optin",()=>t.innerType._zod.optin),N(e._zod,"optout",()=>t.innerType._zod.optout),N(e._zod,"pattern",()=>{const r=t.innerType._zod.pattern;return r?new RegExp(`^(${xe(r.source)}|null)$`):void 0}),N(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(r,n)=>r.value===null?r:t.innerType._zod.run(r,n)}),eo=v("$ZodDefault",(e,t)=>{F.init(e,t),e._zod.optin="optional",N(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);if(r.value===void 0)return r.value=t.defaultValue,r;const a=t.innerType._zod.run(r,n);return a instanceof Promise?a.then(s=>Ue(s,t)):Ue(a,t)}});function Ue(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}const ro=v("$ZodPrefault",(e,t)=>{F.init(e,t),e._zod.optin="optional",N(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>(n.direction==="backward"||r.value===void 0&&(r.value=t.defaultValue),t.innerType._zod.run(r,n))}),no=v("$ZodNonOptional",(e,t)=>{F.init(e,t),N(e._zod,"values",()=>{const r=t.innerType._zod.values;return r?new Set([...r].filter(n=>n!==void 0)):void 0}),e._zod.parse=(r,n)=>{const a=t.innerType._zod.run(r,n);return a instanceof Promise?a.then(s=>qe(s,e)):qe(a,e)}});function qe(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t}),e}const ao=v("$ZodCatch",(e,t)=>{F.init(e,t),N(e._zod,"optin",()=>t.innerType._zod.optin),N(e._zod,"optout",()=>t.innerType._zod.optout),N(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);const a=t.innerType._zod.run(r,n);return a instanceof Promise?a.then(s=>(r.value=s.value,s.issues.length&&(r.value=t.catchValue({...r,error:{issues:s.issues.map(o=>mt(o,n,dt()))},input:r.value}),r.issues=[]),r)):(r.value=a.value,a.issues.length&&(r.value=t.catchValue({...r,error:{issues:a.issues.map(s=>mt(s,n,dt()))},input:r.value}),r.issues=[]),r)}}),oo=v("$ZodPipe",(e,t)=>{F.init(e,t),N(e._zod,"values",()=>t.in._zod.values),N(e._zod,"optin",()=>t.in._zod.optin),N(e._zod,"optout",()=>t.out._zod.optout),N(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(r,n)=>{if(n.direction==="backward"){const s=t.out._zod.run(r,n);return s instanceof Promise?s.then(o=>Ut(o,t.in,n)):Ut(s,t.in,n)}const a=t.in._zod.run(r,n);return a instanceof Promise?a.then(s=>Ut(s,t.out,n)):Ut(a,t.out,n)}});function Ut(e,t,r){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues},r)}const so=v("$ZodReadonly",(e,t)=>{F.init(e,t),N(e._zod,"propValues",()=>t.innerType._zod.propValues),N(e._zod,"values",()=>t.innerType._zod.values),N(e._zod,"optin",()=>t.innerType?._zod?.optin),N(e._zod,"optout",()=>t.innerType?._zod?.optout),e._zod.parse=(r,n)=>{if(n.direction==="backward")return t.innerType._zod.run(r,n);const a=t.innerType._zod.run(r,n);return a instanceof Promise?a.then(Ne):Ne(a)}});function Ne(e){return e.value=Object.freeze(e.value),e}const io=v("$ZodCustom",(e,t)=>{Q.init(e,t),F.init(e,t),e._zod.parse=(r,n)=>r,e._zod.check=r=>{const n=r.value,a=t.fn(n);if(a instanceof Promise)return a.then(s=>je(s,r,n,e));je(a,r,n,e)}});function je(e,t,r,n){if(!e){const a={code:"custom",input:r,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};n._zod.def.params&&(a.params=n._zod.def.params),t.issues.push(Mt(a))}}var Ve;class co{constructor(){this._map=new WeakMap,this._idmap=new Map}add(t,...r){const n=r[0];return this._map.set(t,n),n&&typeof n=="object"&&"id"in n&&this._idmap.set(n.id,t),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(t){const r=this._map.get(t);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(t),this}get(t){const r=t._zod.parent;if(r){const n={...this.get(r)??{}};delete n.id;const a={...n,...this._map.get(t)};return Object.keys(a).length?a:void 0}return this._map.get(t)}has(t){return this._map.has(t)}}function uo(){return new co}(Ve=globalThis).__zod_globalRegistry??(Ve.__zod_globalRegistry=uo());const Et=globalThis.__zod_globalRegistry;function lo(e,t){return new e({type:"string",...O(t)})}function fo(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...O(t)})}function Ge(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...O(t)})}function po(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...O(t)})}function mo(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...O(t)})}function ho(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...O(t)})}function _o(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...O(t)})}function go(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...O(t)})}function yo(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...O(t)})}function vo(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...O(t)})}function bo(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...O(t)})}function xo(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...O(t)})}function $o(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...O(t)})}function wo(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...O(t)})}function zo(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...O(t)})}function Ao(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...O(t)})}function So(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...O(t)})}function To(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...O(t)})}function ko(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...O(t)})}function Eo(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...O(t)})}function Oo(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...O(t)})}function Co(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...O(t)})}function Io(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...O(t)})}function Do(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...O(t)})}function Bo(e,t){return new e({type:"string",format:"date",check:"string_format",...O(t)})}function Mo(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...O(t)})}function Ro(e,t){return new e({type:"string",format:"duration",check:"string_format",...O(t)})}function Po(e,t){return new e({type:"number",checks:[],...O(t)})}function Zo(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...O(t)})}function Uo(e,t){return new e({type:"boolean",...O(t)})}function qo(e){return new e({type:"any"})}function No(e){return new e({type:"unknown"})}function jo(e,t){return new e({type:"never",...O(t)})}function Le(e,t){return new Sr({check:"less_than",...O(t),value:e,inclusive:!1})}function ce(e,t){return new Sr({check:"less_than",...O(t),value:e,inclusive:!0})}function Fe(e,t){return new Tr({check:"greater_than",...O(t),value:e,inclusive:!1})}function ue(e,t){return new Tr({check:"greater_than",...O(t),value:e,inclusive:!0})}function We(e,t){return new ra({check:"multiple_of",...O(t),value:e})}function Dr(e,t){return new aa({check:"max_length",...O(t),maximum:e})}function Qt(e,t){return new oa({check:"min_length",...O(t),minimum:e})}function Br(e,t){return new sa({check:"length_equals",...O(t),length:e})}function Vo(e,t){return new ia({check:"string_format",format:"regex",...O(t),pattern:e})}function Go(e){return new ca({check:"string_format",format:"lowercase",...O(e)})}function Lo(e){return new ua({check:"string_format",format:"uppercase",...O(e)})}function Fo(e,t){return new la({check:"string_format",format:"includes",...O(t),includes:e})}function Wo(e,t){return new fa({check:"string_format",format:"starts_with",...O(t),prefix:e})}function Jo(e,t){return new pa({check:"string_format",format:"ends_with",...O(t),suffix:e})}function zt(e){return new da({check:"overwrite",tx:e})}function Yo(e){return zt(t=>t.normalize(e))}function Ho(){return zt(e=>e.trim())}function Xo(){return zt(e=>e.toLowerCase())}function Ko(){return zt(e=>e.toUpperCase())}function Qo(){return zt(e=>on(e))}function ts(e,t,r){return new e({type:"array",element:t,...O(r)})}function es(e,t,r){return new e({type:"custom",check:"custom",fn:t,...O(r)})}function rs(e){const t=ns(r=>(r.addIssue=n=>{if(typeof n=="string")r.issues.push(Mt(n,r.value,t._zod.def));else{const a=n;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=r.value),a.inst??(a.inst=t),a.continue??(a.continue=!t._zod.def.abort),r.issues.push(Mt(a))}},e(r.value,r)));return t}function ns(e,t){const r=new Q({check:"custom",...O(t)});return r._zod.check=e,r}function Mr(e){let t=e?.target??"draft-2020-12";return t==="draft-4"&&(t="draft-04"),t==="draft-7"&&(t="draft-07"),{processors:e.processors??{},metadataRegistry:e?.metadata??Et,target:t,unrepresentable:e?.unrepresentable??"throw",override:e?.override??(()=>{}),io:e?.io??"output",counter:0,seen:new Map,cycles:e?.cycles??"ref",reused:e?.reused??"inline",external:e?.external??void 0}}function Y(e,t,r={path:[],schemaPath:[]}){var n;const a=e._zod.def,s=t.seen.get(e);if(s)return s.count++,r.schemaPath.includes(e)&&(s.cycle=r.path),s.schema;const o={schema:{},count:1,cycle:void 0,path:r.path};t.seen.set(e,o);const i=e._zod.toJSONSchema?.();if(i)o.schema=i;else{const m={...r,schemaPath:[...r.schemaPath,e],path:r.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,m);else{const p=o.schema,f=t.processors[a.type];if(!f)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);f(e,t,p,m)}const d=e._zod.parent;d&&(o.ref||(o.ref=d),Y(d,t,m),t.seen.get(d).isParent=!0)}const c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io==="input"&&H(e)&&(delete o.schema.examples,delete o.schema.default),t.io==="input"&&o.schema._prefault&&((n=o.schema).default??(n.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Rr(e,t){const r=e.seen.get(t);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const n=new Map;for(const o of e.seen.entries()){const i=e.metadataRegistry.get(o[0])?.id;if(i){const c=n.get(i);if(c&&c!==o[0])throw new Error(`Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(i,o[0])}}const a=o=>{const i=e.target==="draft-2020-12"?"$defs":"definitions";if(e.external){const d=e.external.registry.get(o[0])?.id,p=e.external.uri??(l=>l);if(d)return{ref:p(d)};const f=o[1].defId??o[1].schema.id??`schema${e.counter++}`;return o[1].defId=f,{defId:f,ref:`${p("__shared")}#/${i}/${f}`}}if(o[1]===r)return{ref:"#"};const u=`#/${i}/`,m=o[1].schema.id??`__schema${e.counter++}`;return{defId:m,ref:u+m}},s=o=>{if(o[1].schema.$ref)return;const i=o[1],{ref:c,defId:u}=a(o);i.def={...i.schema},u&&(i.defId=u);const m=i.schema;for(const d in m)delete m[d];m.$ref=c};if(e.cycles==="throw")for(const o of e.seen.entries()){const i=o[1];if(i.cycle)throw new Error(`Cycle detected: #/${i.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const o of e.seen.entries()){const i=o[1];if(t===o[0]){s(o);continue}if(e.external){const u=e.external.registry.get(o[0])?.id;if(t!==o[0]&&u){s(o);continue}}if(e.metadataRegistry.get(o[0])?.id){s(o);continue}if(i.cycle){s(o);continue}if(i.count>1&&e.reused==="ref"){s(o);continue}}}function Pr(e,t){const r=e.seen.get(t);if(!r)throw new Error("Unprocessed schema. This is a bug in Zod.");const n=o=>{const i=e.seen.get(o);if(i.ref===null)return;const c=i.def??i.schema,u={...c},m=i.ref;if(i.ref=null,m){n(m);const p=e.seen.get(m),f=p.schema;if(f.$ref&&(e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(f)):Object.assign(c,f),Object.assign(c,u),o._zod.parent===m)for(const h in c)h==="$ref"||h==="allOf"||h in u||delete c[h];if(f.$ref&&p.def)for(const h in c)h==="$ref"||h==="allOf"||h in p.def&&JSON.stringify(c[h])===JSON.stringify(p.def[h])&&delete c[h]}const d=o._zod.parent;if(d&&d!==m){n(d);const p=e.seen.get(d);if(p?.schema.$ref&&(c.$ref=p.schema.$ref,p.def))for(const f in c)f==="$ref"||f==="allOf"||f in p.def&&JSON.stringify(c[f])===JSON.stringify(p.def[f])&&delete c[f]}e.override({zodSchema:o,jsonSchema:c,path:i.path??[]})};for(const o of[...e.seen.entries()].reverse())n(o[0]);const a={};if(e.target==="draft-2020-12"?a.$schema="https://json-schema.org/draft/2020-12/schema":e.target==="draft-07"?a.$schema="http://json-schema.org/draft-07/schema#":e.target==="draft-04"?a.$schema="http://json-schema.org/draft-04/schema#":e.target,e.external?.uri){const o=e.external.registry.get(t)?.id;if(!o)throw new Error("Schema is missing an `id` property");a.$id=e.external.uri(o)}Object.assign(a,r.def??r.schema);const s=e.external?.defs??{};for(const o of e.seen.entries()){const i=o[1];i.def&&i.defId&&(s[i.defId]=i.def)}e.external||Object.keys(s).length>0&&(e.target==="draft-2020-12"?a.$defs=s:a.definitions=s);try{const o=JSON.parse(JSON.stringify(a));return Object.defineProperty(o,"~standard",{value:{...t["~standard"],jsonSchema:{input:te(t,"input",e.processors),output:te(t,"output",e.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function H(e,t){const r=t??{seen:new Set};if(r.seen.has(e))return!1;r.seen.add(e);const n=e._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return H(n.element,r);if(n.type==="set")return H(n.valueType,r);if(n.type==="lazy")return H(n.getter(),r);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return H(n.innerType,r);if(n.type==="intersection")return H(n.left,r)||H(n.right,r);if(n.type==="record"||n.type==="map")return H(n.keyType,r)||H(n.valueType,r);if(n.type==="pipe")return H(n.in,r)||H(n.out,r);if(n.type==="object"){for(const a in n.shape)if(H(n.shape[a],r))return!0;return!1}if(n.type==="union"){for(const a of n.options)if(H(a,r))return!0;return!1}if(n.type==="tuple"){for(const a of n.items)if(H(a,r))return!0;return!!(n.rest&&H(n.rest,r))}return!1}const as=(e,t={})=>r=>{const n=Mr({...r,processors:t});return Y(e,n),Rr(n,e),Pr(n,e)},te=(e,t,r={})=>n=>{const{libraryOptions:a,target:s}=n??{},o=Mr({...a??{},target:s,io:t,processors:r});return Y(e,o),Rr(o,e),Pr(o,e)},os={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},ss=(e,t,r,n)=>{const a=r;a.type="string";const{minimum:s,maximum:o,format:i,patterns:c,contentEncoding:u}=e._zod.bag;if(typeof s=="number"&&(a.minLength=s),typeof o=="number"&&(a.maxLength=o),i&&(a.format=os[i]??i,a.format===""&&delete a.format,i==="time"&&delete a.format),u&&(a.contentEncoding=u),c&&c.size>0){const m=[...c];m.length===1?a.pattern=m[0].source:m.length>1&&(a.allOf=[...m.map(d=>({...t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},is=(e,t,r,n)=>{const a=r,{minimum:s,maximum:o,format:i,multipleOf:c,exclusiveMaximum:u,exclusiveMinimum:m}=e._zod.bag;typeof i=="string"&&i.includes("int")?a.type="integer":a.type="number",typeof m=="number"&&(t.target==="draft-04"||t.target==="openapi-3.0"?(a.minimum=m,a.exclusiveMinimum=!0):a.exclusiveMinimum=m),typeof s=="number"&&(a.minimum=s,typeof m=="number"&&t.target!=="draft-04"&&(m>=s?delete a.minimum:delete a.exclusiveMinimum)),typeof u=="number"&&(t.target==="draft-04"||t.target==="openapi-3.0"?(a.maximum=u,a.exclusiveMaximum=!0):a.exclusiveMaximum=u),typeof o=="number"&&(a.maximum=o,typeof u=="number"&&t.target!=="draft-04"&&(u<=o?delete a.maximum:delete a.exclusiveMaximum)),typeof c=="number"&&(a.multipleOf=c)},cs=(e,t,r,n)=>{r.type="boolean"},us=(e,t,r,n)=>{r.not={}},ls=(e,t,r,n)=>{},fs=(e,t,r,n)=>{},ps=(e,t,r,n)=>{const a=e._zod.def,s=hr(a.entries);s.every(o=>typeof o=="number")&&(r.type="number"),s.every(o=>typeof o=="string")&&(r.type="string"),r.enum=s},ds=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},ms=(e,t,r,n)=>{if(t.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},hs=(e,t,r,n)=>{const a=r,s=e._zod.def,{minimum:o,maximum:i}=e._zod.bag;typeof o=="number"&&(a.minItems=o),typeof i=="number"&&(a.maxItems=i),a.type="array",a.items=Y(s.element,t,{...n,path:[...n.path,"items"]})},_s=(e,t,r,n)=>{const a=r,s=e._zod.def;a.type="object",a.properties={};const o=s.shape;for(const u in o)a.properties[u]=Y(o[u],t,{...n,path:[...n.path,"properties",u]});const i=new Set(Object.keys(o)),c=new Set([...i].filter(u=>{const m=s.shape[u]._zod;return t.io==="input"?m.optin===void 0:m.optout===void 0}));c.size>0&&(a.required=Array.from(c)),s.catchall?._zod.def.type==="never"?a.additionalProperties=!1:s.catchall?s.catchall&&(a.additionalProperties=Y(s.catchall,t,{...n,path:[...n.path,"additionalProperties"]})):t.io==="output"&&(a.additionalProperties=!1)},gs=(e,t,r,n)=>{const a=e._zod.def,s=a.inclusive===!1,o=a.options.map((i,c)=>Y(i,t,{...n,path:[...n.path,s?"oneOf":"anyOf",c]}));s?r.oneOf=o:r.anyOf=o},ys=(e,t,r,n)=>{const a=e._zod.def,s=Y(a.left,t,{...n,path:[...n.path,"allOf",0]}),o=Y(a.right,t,{...n,path:[...n.path,"allOf",1]}),i=u=>"allOf"in u&&Object.keys(u).length===1,c=[...i(s)?s.allOf:[s],...i(o)?o.allOf:[o]];r.allOf=c},vs=(e,t,r,n)=>{const a=e._zod.def,s=Y(a.innerType,t,n),o=t.seen.get(e);t.target==="openapi-3.0"?(o.ref=a.innerType,r.nullable=!0):r.anyOf=[s,{type:"null"}]},bs=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType},xs=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType,r.default=JSON.parse(JSON.stringify(a.defaultValue))},$s=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType,t.io==="input"&&(r._prefault=JSON.parse(JSON.stringify(a.defaultValue)))},ws=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType;let o;try{o=a.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}r.default=o},zs=(e,t,r,n)=>{const a=e._zod.def,s=t.io==="input"?a.in._zod.def.type==="transform"?a.out:a.in:a.out;Y(s,t,n);const o=t.seen.get(e);o.ref=s},As=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType,r.readOnly=!0},Zr=(e,t,r,n)=>{const a=e._zod.def;Y(a.innerType,t,n);const s=t.seen.get(e);s.ref=a.innerType},Ss=v("ZodISODateTime",(e,t)=>{Ta.init(e,t),L.init(e,t)});function Ts(e){return Do(Ss,e)}const ks=v("ZodISODate",(e,t)=>{ka.init(e,t),L.init(e,t)});function Es(e){return Bo(ks,e)}const Os=v("ZodISOTime",(e,t)=>{Ea.init(e,t),L.init(e,t)});function Cs(e){return Mo(Os,e)}const Is=v("ZodISODuration",(e,t)=>{Oa.init(e,t),L.init(e,t)});function Ds(e){return Ro(Is,e)}const Bs=(e,t)=>{br.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:r=>vn(e,r)},flatten:{value:r=>yn(e,r)},addIssue:{value:r=>{e.issues.push(r),e.message=JSON.stringify(e.issues,pe,2)}},addIssues:{value:r=>{e.issues.push(...r),e.message=JSON.stringify(e.issues,pe,2)}},isEmpty:{get(){return e.issues.length===0}}})},et=v("ZodError",Bs,{Parent:Error}),Ms=we(et),Rs=ze(et),Ps=ae(et),Zs=oe(et),Us=$n(et),qs=wn(et),Ns=zn(et),js=An(et),Vs=Sn(et),Gs=Tn(et),Ls=kn(et),Fs=En(et),W=v("ZodType",(e,t)=>(F.init(e,t),Object.assign(e["~standard"],{jsonSchema:{input:te(e,"input"),output:te(e,"output")}}),e.toJSONSchema=as(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.check=(...r)=>e.clone(ut(t,{checks:[...t.checks??[],...r.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0}),e.with=e.check,e.clone=(r,n)=>lt(e,r,n),e.brand=()=>e,e.register=((r,n)=>(r.add(e,n),e)),e.parse=(r,n)=>Ms(e,r,n,{callee:e.parse}),e.safeParse=(r,n)=>Ps(e,r,n),e.parseAsync=async(r,n)=>Rs(e,r,n,{callee:e.parseAsync}),e.safeParseAsync=async(r,n)=>Zs(e,r,n),e.spa=e.safeParseAsync,e.encode=(r,n)=>Us(e,r,n),e.decode=(r,n)=>qs(e,r,n),e.encodeAsync=async(r,n)=>Ns(e,r,n),e.decodeAsync=async(r,n)=>js(e,r,n),e.safeEncode=(r,n)=>Vs(e,r,n),e.safeDecode=(r,n)=>Gs(e,r,n),e.safeEncodeAsync=async(r,n)=>Ls(e,r,n),e.safeDecodeAsync=async(r,n)=>Fs(e,r,n),e.refine=(r,n)=>e.check(Zi(r,n)),e.superRefine=r=>e.check(Ui(r)),e.overwrite=r=>e.check(zt(r)),e.optional=()=>Xe(e),e.exactOptional=()=>Ai(e),e.nullable=()=>Ke(e),e.nullish=()=>Xe(Ke(e)),e.nonoptional=r=>Ci(e,r),e.array=()=>ft(e),e.or=r=>At([e,r]),e.and=r=>xi(e,r),e.transform=r=>Qe(e,wi(r)),e.default=r=>ki(e,r),e.prefault=r=>Oi(e,r),e.catch=r=>Di(e,r),e.pipe=r=>Qe(e,r),e.readonly=()=>Ri(e),e.describe=r=>{const n=e.clone();return Et.add(n,{description:r}),n},Object.defineProperty(e,"description",{get(){return Et.get(e)?.description},configurable:!0}),e.meta=(...r)=>{if(r.length===0)return Et.get(e);const n=e.clone();return Et.add(n,r[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e.apply=r=>r(e),e)),Ur=v("_ZodString",(e,t)=>{Ae.init(e,t),W.init(e,t),e._zod.processJSONSchema=(n,a,s)=>ss(e,n,a);const r=e._zod.bag;e.format=r.format??null,e.minLength=r.minimum??null,e.maxLength=r.maximum??null,e.regex=(...n)=>e.check(Vo(...n)),e.includes=(...n)=>e.check(Fo(...n)),e.startsWith=(...n)=>e.check(Wo(...n)),e.endsWith=(...n)=>e.check(Jo(...n)),e.min=(...n)=>e.check(Qt(...n)),e.max=(...n)=>e.check(Dr(...n)),e.length=(...n)=>e.check(Br(...n)),e.nonempty=(...n)=>e.check(Qt(1,...n)),e.lowercase=n=>e.check(Go(n)),e.uppercase=n=>e.check(Lo(n)),e.trim=()=>e.check(Ho()),e.normalize=(...n)=>e.check(Yo(...n)),e.toLowerCase=()=>e.check(Xo()),e.toUpperCase=()=>e.check(Ko()),e.slugify=()=>e.check(Qo())}),Ws=v("ZodString",(e,t)=>{Ae.init(e,t),Ur.init(e,t),e.email=r=>e.check(fo(Js,r)),e.url=r=>e.check(go(Ys,r)),e.jwt=r=>e.check(Io(li,r)),e.emoji=r=>e.check(yo(Hs,r)),e.guid=r=>e.check(Ge(Je,r)),e.uuid=r=>e.check(po(qt,r)),e.uuidv4=r=>e.check(mo(qt,r)),e.uuidv6=r=>e.check(ho(qt,r)),e.uuidv7=r=>e.check(_o(qt,r)),e.nanoid=r=>e.check(vo(Xs,r)),e.guid=r=>e.check(Ge(Je,r)),e.cuid=r=>e.check(bo(Ks,r)),e.cuid2=r=>e.check(xo(Qs,r)),e.ulid=r=>e.check($o(ti,r)),e.base64=r=>e.check(Eo(ii,r)),e.base64url=r=>e.check(Oo(ci,r)),e.xid=r=>e.check(wo(ei,r)),e.ksuid=r=>e.check(zo(ri,r)),e.ipv4=r=>e.check(Ao(ni,r)),e.ipv6=r=>e.check(So(ai,r)),e.cidrv4=r=>e.check(To(oi,r)),e.cidrv6=r=>e.check(ko(si,r)),e.e164=r=>e.check(Co(ui,r)),e.datetime=r=>e.check(Ts(r)),e.date=r=>e.check(Es(r)),e.time=r=>e.check(Cs(r)),e.duration=r=>e.check(Ds(r))});function P(e){return lo(Ws,e)}const L=v("ZodStringFormat",(e,t)=>{G.init(e,t),Ur.init(e,t)}),Js=v("ZodEmail",(e,t)=>{ya.init(e,t),L.init(e,t)}),Je=v("ZodGUID",(e,t)=>{_a.init(e,t),L.init(e,t)}),qt=v("ZodUUID",(e,t)=>{ga.init(e,t),L.init(e,t)}),Ys=v("ZodURL",(e,t)=>{va.init(e,t),L.init(e,t)}),Hs=v("ZodEmoji",(e,t)=>{ba.init(e,t),L.init(e,t)}),Xs=v("ZodNanoID",(e,t)=>{xa.init(e,t),L.init(e,t)}),Ks=v("ZodCUID",(e,t)=>{$a.init(e,t),L.init(e,t)}),Qs=v("ZodCUID2",(e,t)=>{wa.init(e,t),L.init(e,t)}),ti=v("ZodULID",(e,t)=>{za.init(e,t),L.init(e,t)}),ei=v("ZodXID",(e,t)=>{Aa.init(e,t),L.init(e,t)}),ri=v("ZodKSUID",(e,t)=>{Sa.init(e,t),L.init(e,t)}),ni=v("ZodIPv4",(e,t)=>{Ca.init(e,t),L.init(e,t)}),ai=v("ZodIPv6",(e,t)=>{Ia.init(e,t),L.init(e,t)}),oi=v("ZodCIDRv4",(e,t)=>{Da.init(e,t),L.init(e,t)}),si=v("ZodCIDRv6",(e,t)=>{Ba.init(e,t),L.init(e,t)}),ii=v("ZodBase64",(e,t)=>{Ma.init(e,t),L.init(e,t)}),ci=v("ZodBase64URL",(e,t)=>{Pa.init(e,t),L.init(e,t)}),ui=v("ZodE164",(e,t)=>{Za.init(e,t),L.init(e,t)}),li=v("ZodJWT",(e,t)=>{qa.init(e,t),L.init(e,t)}),qr=v("ZodNumber",(e,t)=>{Er.init(e,t),W.init(e,t),e._zod.processJSONSchema=(n,a,s)=>is(e,n,a),e.gt=(n,a)=>e.check(Fe(n,a)),e.gte=(n,a)=>e.check(ue(n,a)),e.min=(n,a)=>e.check(ue(n,a)),e.lt=(n,a)=>e.check(Le(n,a)),e.lte=(n,a)=>e.check(ce(n,a)),e.max=(n,a)=>e.check(ce(n,a)),e.int=n=>e.check(Ye(n)),e.safe=n=>e.check(Ye(n)),e.positive=n=>e.check(Fe(0,n)),e.nonnegative=n=>e.check(ue(0,n)),e.negative=n=>e.check(Le(0,n)),e.nonpositive=n=>e.check(ce(0,n)),e.multipleOf=(n,a)=>e.check(We(n,a)),e.step=(n,a)=>e.check(We(n,a)),e.finite=()=>e;const r=e._zod.bag;e.minValue=Math.max(r.minimum??Number.NEGATIVE_INFINITY,r.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(r.maximum??Number.POSITIVE_INFINITY,r.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(r.format??"").includes("int")||Number.isSafeInteger(r.multipleOf??.5),e.isFinite=!0,e.format=r.format??null});function ot(e){return Po(qr,e)}const fi=v("ZodNumberFormat",(e,t)=>{Na.init(e,t),qr.init(e,t)});function Ye(e){return Zo(fi,e)}const pi=v("ZodBoolean",(e,t)=>{ja.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>cs(e,r,n)});function Nr(e){return Uo(pi,e)}const di=v("ZodAny",(e,t)=>{Va.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>ls()});function R(){return qo(di)}const mi=v("ZodUnknown",(e,t)=>{Ga.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>fs()});function He(){return No(mi)}const hi=v("ZodNever",(e,t)=>{La.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>us(e,r,n)});function _i(e){return jo(hi,e)}const gi=v("ZodArray",(e,t)=>{Fa.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>hs(e,r,n,a),e.element=t.element,e.min=(r,n)=>e.check(Qt(r,n)),e.nonempty=r=>e.check(Qt(1,r)),e.max=(r,n)=>e.check(Dr(r,n)),e.length=(r,n)=>e.check(Br(r,n)),e.unwrap=()=>e.element});function ft(e,t){return ts(gi,e,t)}const yi=v("ZodObject",(e,t)=>{Ja.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>_s(e,r,n,a),N(e,"shape",()=>t.shape),e.keyof=()=>at(Object.keys(e._zod.def.shape)),e.catchall=r=>e.clone({...e._zod.def,catchall:r}),e.passthrough=()=>e.clone({...e._zod.def,catchall:He()}),e.loose=()=>e.clone({...e._zod.def,catchall:He()}),e.strict=()=>e.clone({...e._zod.def,catchall:_i()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=r=>dn(e,r),e.safeExtend=r=>mn(e,r),e.merge=r=>hn(e,r),e.pick=r=>fn(e,r),e.omit=r=>pn(e,r),e.partial=(...r)=>_n(jr,e,r[0]),e.required=(...r)=>gn(Vr,e,r[0])});function It(e,t){const r={type:"object",shape:e??{},...O(t)};return new yi(r)}const vi=v("ZodUnion",(e,t)=>{Ya.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>gs(e,r,n,a),e.options=t.options});function At(e,t){return new vi({type:"union",options:e,...O(t)})}const bi=v("ZodIntersection",(e,t)=>{Ha.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>ys(e,r,n,a)});function xi(e,t){return new bi({type:"intersection",left:e,right:t})}const me=v("ZodEnum",(e,t)=>{Xa.init(e,t),W.init(e,t),e._zod.processJSONSchema=(n,a,s)=>ps(e,n,a),e.enum=t.entries,e.options=Object.values(t.entries);const r=new Set(Object.keys(t.entries));e.extract=(n,a)=>{const s={};for(const o of n)if(r.has(o))s[o]=t.entries[o];else throw new Error(`Key ${o} not found in enum`);return new me({...t,checks:[],...O(a),entries:s})},e.exclude=(n,a)=>{const s={...t.entries};for(const o of n)if(r.has(o))delete s[o];else throw new Error(`Key ${o} not found in enum`);return new me({...t,checks:[],...O(a),entries:s})}});function at(e,t){const r=Array.isArray(e)?Object.fromEntries(e.map(n=>[n,n])):e;return new me({type:"enum",entries:r,...O(t)})}const $i=v("ZodTransform",(e,t)=>{Ka.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>ms(e,r),e._zod.parse=(r,n)=>{if(n.direction==="backward")throw new dr(e.constructor.name);r.addIssue=s=>{if(typeof s=="string")r.issues.push(Mt(s,r.value,t));else{const o=s;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=r.value),o.inst??(o.inst=e),r.issues.push(Mt(o))}};const a=t.transform(r.value,r);return a instanceof Promise?a.then(s=>(r.value=s,r)):(r.value=a,r)}});function wi(e){return new $i({type:"transform",transform:e})}const jr=v("ZodOptional",(e,t)=>{Ir.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>Zr(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Xe(e){return new jr({type:"optional",innerType:e})}const zi=v("ZodExactOptional",(e,t)=>{Qa.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>Zr(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Ai(e){return new zi({type:"optional",innerType:e})}const Si=v("ZodNullable",(e,t)=>{to.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>vs(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Ke(e){return new Si({type:"nullable",innerType:e})}const Ti=v("ZodDefault",(e,t)=>{eo.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>xs(e,r,n,a),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function ki(e,t){return new Ti({type:"default",innerType:e,get defaultValue(){return typeof t=="function"?t():gr(t)}})}const Ei=v("ZodPrefault",(e,t)=>{ro.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>$s(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Oi(e,t){return new Ei({type:"prefault",innerType:e,get defaultValue(){return typeof t=="function"?t():gr(t)}})}const Vr=v("ZodNonOptional",(e,t)=>{no.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>bs(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Ci(e,t){return new Vr({type:"nonoptional",innerType:e,...O(t)})}const Ii=v("ZodCatch",(e,t)=>{ao.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>ws(e,r,n,a),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Di(e,t){return new Ii({type:"catch",innerType:e,catchValue:typeof t=="function"?t:()=>t})}const Bi=v("ZodPipe",(e,t)=>{oo.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>zs(e,r,n,a),e.in=t.in,e.out=t.out});function Qe(e,t){return new Bi({type:"pipe",in:e,out:t})}const Mi=v("ZodReadonly",(e,t)=>{so.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>As(e,r,n,a),e.unwrap=()=>e._zod.def.innerType});function Ri(e){return new Mi({type:"readonly",innerType:e})}const Pi=v("ZodCustom",(e,t)=>{io.init(e,t),W.init(e,t),e._zod.processJSONSchema=(r,n,a)=>ds(e,r)});function Zi(e,t={}){return es(Pi,e,t)}function Ui(e){return rs(e)}function qi(e){const t={};for(const[n,a]of Object.entries(e.args)){let s=a.type;(a.refable||a.requiredRef)&&(a.requiredRef?s=P():s=At([s,P()])),a.optional&&(s=s.optional()),t[n]=s}return It(t)}const Gr=new Set(["id","op","metadata","comment","const_data","dataType"]);[...Gr];const I=ot(),Z=ot().int(),Vt=Nr(),Se=ft(ot()).length(2),Te=ft(ot()).length(3),tt=ft(ot()).length(4),Lr=ft(ot()).length(9),Fr=ft(ot()).length(16),Ni=At([I,Z,Vt]),it=At([Se,Te,tt,Lr,Fr]),Wr=At([Lr,Fr]),q=At([Ni,it,Wr,ft(R())]),ji=at(["rgba8","rgba16f","rgba32f","r8","r16f","r32f","unknown"]),tr=at(["zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha"]),er=It({operation:at(["add","subtract","reverse-subtract","min","max"]).optional(),srcFactor:tr.optional(),dstFactor:tr.optional()}),Vi=It({topology:at(["point-list","line-list","line-strip","triangle-list","triangle-strip"]).optional(),cullMode:at(["none","front","back"]).optional(),frontFace:at(["ccw","cw"]).optional(),depthStencil:It({format:ji,depthWriteEnabled:Nr(),depthCompare:at(["never","less","equal","less-equal","greater","not-equal","greater-equal","always"])}).optional(),blend:It({color:er,alpha:er}).optional()}),Gi=Object.keys(K).map(e=>`TextureFormat.${e}`),Li=at(Gi),Fi={doc:"Create a PRNG state. Optionally provide an explicit seed; if omitted, auto-seeds from thread ID and frame entropy.",args:{seed:{type:ot(),doc:"Explicit seed value",refable:!0,optional:!0}}},Wi={doc:"Advance PRNG state and produce a random value. Output type defaults to float [0,1]. Supports float, int, float2, float3, float4, int2, int3, int4. For int output, use min/max to specify range.",isExecutable:!0,args:{prng:{type:P(),doc:"Local variable name holding the PRNG state",refType:"var",isIdentifier:!0},type:{type:P(),doc:"Output type: float (default), int, float2, float3, float4, int2, int3, int4",optional:!0,isIdentifier:!0},min:{type:ot(),doc:"Minimum value for int range output",refable:!0,optional:!0},max:{type:ot(),doc:"Maximum value for int range output",refable:!0,optional:!0}}},nt={doc:"Standard numeric binary math operation. Mixed int/float operands are auto-coerced to float.",args:{a:{type:q,doc:"First operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]},b:{type:q,doc:"Second operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},le={doc:"Standard logic binary operation.",args:{a:{type:q,doc:"First operand",refable:!0,literalTypes:["bool","float","int"]},b:{type:q,doc:"Second operand",refable:!0,literalTypes:["bool","float","int"]}}},Nt={doc:"Comparison operation with numeric inputs.",args:{a:{type:q,doc:"First operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]},b:{type:q,doc:"Second operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},rr={doc:"Equality comparison operation.",args:{a:{type:q,doc:"First operand",refable:!0,literalTypes:["float","int","bool","float2","float3","float4"]},b:{type:q,doc:"Second operand",refable:!0,literalTypes:["float","int","bool","float2","float3","float4"]}}},U={doc:"Standard numeric unary math operation.",args:{val:{type:q,doc:"Input value",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},Ji={doc:"Standard logic unary operation.",args:{val:{type:q,doc:"Input value",refable:!0,literalTypes:["bool","float","int"]}}},st={doc:"Type-casting unary operation. On Metal, float->int uses wrapping for out-of-range values.",args:{val:{type:q,doc:"Input value",refable:!0,literalTypes:["float","int","bool","string","float2","float3","float4"]}}},Yi={doc:"Clamp a value between min and max.",args:{val:{type:q,doc:"Value to clamp",refable:!0},min:{type:q,doc:"Minimum value",refable:!0},max:{type:q,doc:"Maximum value",refable:!0}}},Hi={doc:"Constant literal value. By default, numeric literals are typed as 'float'. Use the optional 'type' field to specify an explicit type (e.g. 'int', 'bool').",args:{val:{type:R(),doc:"The literal value (scalar, vector, matrix, array, etc.)",literalTypes:["float","int","bool","string","float2","float3","float4","float3x3","float4x4","array","struct"]},type:{type:P().optional(),doc:"Explicit type ('int', 'float', 'bool', 'float2', etc.)",optional:!0,isIdentifier:!0}}},Xi={doc:"Construct a float2. Supports component-group keys: x, y, xy.",args:{x:{type:I,doc:"X",refable:!0,literalTypes:["float","int"],optional:!0},y:{type:I,doc:"Y",refable:!0,literalTypes:["float","int"],optional:!0},xy:{type:R(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0}}},Ki={doc:"Construct a float3. Supports component-group keys: x, y, z, xy, yz, xyz.",args:{x:{type:I,doc:"X",refable:!0,optional:!0},y:{type:I,doc:"Y",refable:!0,optional:!0},z:{type:I,doc:"Z",refable:!0,optional:!0},xy:{type:R(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:R(),doc:"YZ (float2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:R(),doc:"XYZ (float3 or scalar broadcast)",refable:!0,optional:!0}}},Qi={doc:"Construct a float4. Supports component-group keys: x, y, z, w, xy, yz, zw, xyz, yzw, xyzw.",args:{x:{type:I,doc:"X",refable:!0,optional:!0},y:{type:I,doc:"Y",refable:!0,optional:!0},z:{type:I,doc:"Z",refable:!0,optional:!0},w:{type:I,doc:"W",refable:!0,optional:!0},xy:{type:R(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:R(),doc:"YZ (float2 or scalar broadcast)",refable:!0,optional:!0},zw:{type:R(),doc:"ZW (float2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:R(),doc:"XYZ (float3 or scalar broadcast)",refable:!0,optional:!0},yzw:{type:R(),doc:"YZW (float3 or scalar broadcast)",refable:!0,optional:!0},xyzw:{type:R(),doc:"XYZW (float4 or scalar broadcast)",refable:!0,optional:!0}}},tc={doc:"Construct an int2. Supports component-group keys: x, y, xy.",args:{x:{type:Z,doc:"X",refable:!0,literalTypes:["int","float"],optional:!0},y:{type:Z,doc:"Y",refable:!0,literalTypes:["int","float"],optional:!0},xy:{type:R(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0}}},ec={doc:"Construct an int3. Supports component-group keys: x, y, z, xy, yz, xyz.",args:{x:{type:Z,doc:"X",refable:!0,optional:!0},y:{type:Z,doc:"Y",refable:!0,optional:!0},z:{type:Z,doc:"Z",refable:!0,optional:!0},xy:{type:R(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:R(),doc:"YZ (int2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:R(),doc:"XYZ (int3 or scalar broadcast)",refable:!0,optional:!0}}},rc={doc:"Construct an int4. Supports component-group keys: x, y, z, w, xy, yz, zw, xyz, yzw, xyzw.",args:{x:{type:Z,doc:"X",refable:!0,optional:!0},y:{type:Z,doc:"Y",refable:!0,optional:!0},z:{type:Z,doc:"Z",refable:!0,optional:!0},w:{type:Z,doc:"W",refable:!0,optional:!0},xy:{type:R(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:R(),doc:"YZ (int2 or scalar broadcast)",refable:!0,optional:!0},zw:{type:R(),doc:"ZW (int2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:R(),doc:"XYZ (int3 or scalar broadcast)",refable:!0,optional:!0},yzw:{type:R(),doc:"YZW (int3 or scalar broadcast)",refable:!0,optional:!0},xyzw:{type:R(),doc:"XYZW (int4 or scalar broadcast)",refable:!0,optional:!0}}},nc={doc:"Swizzle components of a vector. Works on both float and int vectors. Output type preserves the input's element type (e.g. int3.xz -> int2).",args:{vec:{type:it,doc:"Input vector (float or int)",refable:!0,literalTypes:["float2","float3","float4"]},channels:{type:P(),doc:"Swizzle mask using xyzw (e.g. 'xyz', 'xz', 'wwww')",literalTypes:["string"],isIdentifier:!0}}},ac={doc:"Linearly interpolate between two vectors.",args:{a:{type:it,doc:"a",refable:!0},b:{type:it,doc:"b",refable:!0},t:{type:I,doc:"t",refable:!0}}},oc={doc:"Draw primitives to a target resource.",isExecutable:!0,cpuOnly:!0,args:{target:{type:P(),doc:"ID of the target resource (e.g. 'screen')",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},vertex:{type:P(),doc:"ID of the vertex shader function",requiredRef:!0,refType:"func",isIdentifier:!0},fragment:{type:P(),doc:"ID of the fragment shader function",requiredRef:!0,refType:"func",isIdentifier:!0},count:{type:Z,doc:"Number of vertices/indices to draw",refable:!0},pipeline:{type:Vi,doc:"Optional render pipeline state",optional:!0}}},sc={doc:"Sample a texture at given coordinates.",args:{tex:{type:P(),doc:"ID of the texture resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:it,doc:"Coordinates",refable:!0,optional:!0}}},ic={doc:"Load pixel from texture",args:{tex:{type:P(),doc:"Texture",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:Se,doc:"Coords [x, y]",refable:!0}}},cc={doc:"Store pixel to texture",isExecutable:!0,args:{tex:{type:P(),doc:"Texture",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:Se,doc:"Coords [x, y]",refable:!0},value:{type:tt,doc:"Color",refable:!0}}},uc={doc:"Load value from a buffer.",args:{buffer:{type:P(),doc:"ID of the buffer resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:Z,doc:"Index",refable:!0}}},lc={doc:"Store value to a buffer.",isExecutable:!0,args:{buffer:{type:P(),doc:"ID of the buffer resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:Z,doc:"Index",refable:!0},value:{type:q,doc:"Value to store",refable:!0}}},nr={doc:"Get resource metadata (size or format).",args:{resource:{type:P(),doc:"ID of the resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},fc={doc:"Check if a resource input is bound (not in default/black state).",args:{resource:{type:P(),doc:"Resource input ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},pc={doc:"Atomically load a value from an atomic counter.",args:{counter:{type:P(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:Z,doc:"Element index",refable:!0}}},dc={doc:"Atomically store a value to an atomic counter.",isExecutable:!0,args:{counter:{type:P(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:Z,doc:"Element index",refable:!0},value:{type:Z,doc:"Value to store",refable:!0}}},Tt={doc:"Atomic read-modify-write operation. Returns the previous value before the operation.",isExecutable:!0,args:{counter:{type:P(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:Z,doc:"Element index",refable:!0},value:{type:Z,doc:"Operand value",refable:!0}}},mc={doc:"3x3 Matrix",args:{m00:{type:I,doc:"m00",optional:!0},m01:{type:I,doc:"m01",optional:!0},m02:{type:I,doc:"m02",optional:!0},m10:{type:I,doc:"m10",optional:!0},m11:{type:I,doc:"m11",optional:!0},m12:{type:I,doc:"m12",optional:!0},m20:{type:I,doc:"m20",optional:!0},m21:{type:I,doc:"m21",optional:!0},m22:{type:I,doc:"m22",optional:!0},cols:{type:R(),doc:"Column vectors",refable:!0,optional:!0},vals:{type:R(),doc:"Value array",refable:!0,optional:!0}}},hc={doc:"4x4 Matrix",args:{m00:{type:I,doc:"m00",optional:!0},m01:{type:I,doc:"m01",optional:!0},m02:{type:I,doc:"m02",optional:!0},m03:{type:I,doc:"m03",optional:!0},m10:{type:I,doc:"m10",optional:!0},m11:{type:I,doc:"m11",optional:!0},m12:{type:I,doc:"m12",optional:!0},m13:{type:I,doc:"m13",optional:!0},m20:{type:I,doc:"m20",optional:!0},m21:{type:I,doc:"m21",optional:!0},m22:{type:I,doc:"m22",optional:!0},m23:{type:I,doc:"m23",optional:!0},m30:{type:I,doc:"m30",optional:!0},m31:{type:I,doc:"m31",optional:!0},m32:{type:I,doc:"m32",optional:!0},m33:{type:I,doc:"m33",optional:!0},cols:{type:R(),doc:"Column vectors",refable:!0,optional:!0},vals:{type:R(),doc:"Value array",refable:!0,optional:!0}}},_c={doc:"Identity matrix",args:{size:{type:Z,doc:"Size (3 or 4)",refable:!0}}},gc={doc:"Matrix multiplication.",args:{a:{type:R(),doc:"Matrix A",refable:!0},b:{type:R(),doc:"Matrix B",refable:!0}}},ar={doc:"Matrix unary operation (transpose, inverse). Note: mat_transpose is not implemented in the standalone MSL generator.",args:{val:{type:R(),doc:"Input matrix",refable:!0}}},yc={doc:"Construct a quaternion from axis and angle.",args:{axis:{type:Te,doc:"Rotation axis",refable:!0,optional:!0},angle:{type:I,doc:"Rotation angle",refable:!0,optional:!0},x:{type:I,doc:"x",refable:!0,optional:!0},y:{type:I,doc:"y",refable:!0,optional:!0},z:{type:I,doc:"z",refable:!0,optional:!0},w:{type:I,doc:"w",refable:!0,optional:!0}}},vc={doc:"Quaternion multiplication.",args:{a:{type:tt,doc:"Quat A",refable:!0},b:{type:tt,doc:"Quat B",refable:!0}}},bc={doc:"Slerp quats",args:{a:{type:tt,doc:"a",refable:!0},b:{type:tt,doc:"b",refable:!0},t:{type:I,doc:"t",refable:!0}}},xc={doc:"Quat to mat4",args:{q:{type:tt,doc:"q",refable:!0}}},$c={doc:"Rotate vec by quat",args:{v:{type:Te,doc:"vec",refable:!0},q:{type:tt,doc:"q",refable:!0}}},wc={doc:"Alpha-aware premultiplied color blend (NOT a simple lerp). The t parameter is optional and may be unused by some backends.",args:{a:{type:tt,doc:"Source color (RGBA)",refable:!0},b:{type:tt,doc:"Destination color (RGBA)",refable:!0},t:{type:I,doc:"Blend factor (optional, unused in premultiplied blend)",refable:!0,optional:!0}}},zc={doc:"Extract a field from a struct.",args:{struct:{type:R(),doc:"Struct instance",refable:!0},field:{type:P(),doc:"Field name",literalTypes:["string"],isIdentifier:!0}}},Ac={doc:"Set an element in an array. Mutates in-place — the `array` arg should reference a var_get of the array variable, not a pure node.",isExecutable:!0,args:{array:{type:R(),doc:"Array variable (use var_get ref)",refable:!0,refType:"data"},index:{type:Z,doc:"Index",refable:!0},value:{type:R(),doc:"Value",refable:!0}}},Sc={doc:"Extract an element from an array.",args:{array:{type:R(),doc:"Array",refable:!0,refType:"data"},index:{type:Z,doc:"Index",refable:!0}}},Jr={position:"float4",vertex_index:"int",instance_index:"int",global_invocation_id:"int3",local_invocation_id:"int3",workgroup_id:"int3",local_invocation_index:"int",num_workgroups:"int3",normalized_global_invocation_id:"float3",frag_coord:"float4",front_facing:"boolean",sample_index:"int",sample_mask:"int",subgroup_invocation_id:"int",subgroup_size:"int",time:"float",delta_time:"float",bpm:"float",beat_number:"float",beat_delta:"float",output_size:"int3",prng_seed:"float"},Tc=at(["position","vertex_index","instance_index","global_invocation_id","local_invocation_id","workgroup_id","local_invocation_index","num_workgroups","normalized_global_invocation_id","frag_coord","front_facing","sample_index","sample_mask","subgroup_invocation_id","subgroup_size","time","delta_time","bpm","beat_number","beat_delta","output_size","prng_seed"]),kc={doc:"Get a GPU/Shader built-in variable. COMPUTE: global_invocation_id (int3, thread position), local_invocation_id (int3), workgroup_id (int3), num_workgroups (int3), normalized_global_invocation_id (float3, UV-like 0..1). VERTEX: vertex_index (int), instance_index (int), position (float4, OUTPUT — set to clip-space pos). FRAGMENT: frag_coord (float4, pixel coords), front_facing (bool), sample_index (int), sample_mask (int). ANY GPU STAGE: output_size (int3, dispatch grid size for compute, render target size for vertex/fragment — use for aspect ratio, UV mapping). TIME (auto-injected into shaders): time (float, seconds), delta_time (float, frame delta), bpm/beat_number/beat_delta (float, music sync).",args:{name:{type:Tc,doc:"Built-in name (see BUILTIN_TYPES for return types)",refType:"builtin",isIdentifier:!0}}},Ec={doc:"Set the value of a local variable.",isExecutable:!0,args:{var:{type:P(),doc:"Name of the variable",literalTypes:["string"],refType:"var",isIdentifier:!0},val:{type:R(),doc:"Value to store",refable:!0}}},Oc={doc:"Get the value of a local variable. Resolution order: function inputs first, then localVars, then IR-level global inputs.",args:{var:{type:P(),doc:"Name of the variable",requiredRef:!0,refType:"var",isIdentifier:!0}}},Cc={doc:"Loop over a sequence. Use either `count` (iterates 0..count-1) OR `start`+`end` (iterates start..end-1), not both. Access the current index via a `loop_index` node with a matching `tag`.",isExecutable:!0,args:{count:{type:Z,doc:"Number of iterations (0..count-1). Mutually exclusive with start/end.",refable:!0,optional:!0},start:{type:Z,doc:"Start index (inclusive). Use with end.",refable:!0,optional:!0},end:{type:Z,doc:"End index (exclusive). Use with start.",refable:!0,optional:!0},exec_body:{type:P(),doc:"Node ID for loop body",requiredRef:!0,optional:!0,refType:"exec"},exec_completed:{type:P(),doc:"Node ID for after loop",requiredRef:!0,optional:!0,refType:"exec"},tag:{type:P(),doc:"Loop tag — must match the `loop` arg in loop_index nodes to retrieve the current iteration index",optional:!0,refable:!0,isIdentifier:!0}}},Rt={math_add:nt,math_sub:nt,math_mul:nt,math_div:nt,math_mod:nt,math_pow:nt,math_min:nt,math_max:nt,math_gt:Nt,math_lt:Nt,math_ge:Nt,math_le:Nt,math_eq:rr,math_neq:rr,math_atan2:nt,math_and:le,math_or:le,math_xor:le,vec_dot:nt,math_div_scalar:{doc:"Divide by scalar",args:{val:{type:q,doc:"Value",refable:!0},scalar:{type:I,doc:"Scalar",refable:!0}}},math_abs:U,math_ceil:U,math_floor:U,math_sqrt:U,math_exp:U,math_log:U,math_sin:U,math_cos:U,math_tan:U,math_asin:U,math_acos:U,math_atan:U,math_asinh:U,math_acosh:U,math_atanh:U,math_sinh:U,math_cosh:U,math_tanh:U,math_sign:U,math_fract:U,math_trunc:U,math_round:U,math_is_nan:U,math_is_inf:U,math_is_finite:U,static_cast_int:st,static_cast_float:st,static_cast_bool:st,static_cast_int2:st,static_cast_int3:st,static_cast_int4:st,static_cast_float2:st,static_cast_float3:st,static_cast_float4:st,math_not:Ji,vec_length:{doc:"Vector length",args:{a:{type:it,doc:"Vector",refable:!0}}},vec_normalize:{doc:"Normalize vector",args:{a:{type:it,doc:"Vector",refable:!0}}},math_mad:{doc:"a * b + c",args:{a:{type:q,doc:"a",refable:!0},b:{type:q,doc:"b",refable:!0},c:{type:q,doc:"c",refable:!0}}},math_clamp:Yi,math_step:{doc:"Step function: returns 0.0 if x < edge, else 1.0. Some backend resolvers use arg keys 'edge' and 'val' instead of 'edge' and 'x'.",args:{edge:{type:q,doc:"Edge threshold",refable:!0},x:{type:q,doc:"Input value",refable:!0}}},math_smoothstep:{doc:"Smoothstep function",args:{edge0:{type:q,doc:"Edge 0",refable:!0},edge1:{type:q,doc:"Edge 1",refable:!0},x:{type:q,doc:"x",refable:!0}}},math_mix:{doc:"Linear interpolation",args:{a:{type:q,doc:"a",refable:!0},b:{type:q,doc:"b",refable:!0},t:{type:q,doc:"t",refable:!0}}},literal:Hi,math_pi:{doc:"Pi constant",args:{}},math_e:{doc:"Euler's number constant",args:{}},comment:{doc:"No-op comment node for graph annotation. Produces no value and cannot be referenced by other nodes. Use the node's `comment` field for text.",args:{}},float2:Xi,float3:Ki,float4:Qi,int2:tc,int3:ec,int4:rc,float:{doc:"Float constructor",args:{val:{type:I,doc:"Value",refable:!0}}},int:{doc:"Int constructor",args:{val:{type:Z,doc:"Value",refable:!0}}},bool:{doc:"Bool constructor",args:{val:{type:Vt,doc:"Value",refable:!0}}},string:{doc:"String constructor",args:{val:{type:P(),doc:"Value"}}},vec_swizzle:nc,vec_mix:ac,vec_get_element:{doc:"Get element from vector or matrix. For matrices, uses flat column-major indexing: index = col * colSize + row (WGSL/MSL emit mat[i/size][i%size]).",args:{vec:{type:it,doc:"Vector or Matrix",refable:!0},index:{type:Z,doc:"Element index (flat for matrices)",refable:!0}}},vec_set_element:{doc:"Set element in vector or matrix. For matrices, uses flat column-major indexing: index = col * colSize + row.",args:{vec:{type:it,doc:"Vector or Matrix",refable:!0},index:{type:Z,doc:"Element index (flat for matrices)",refable:!0},value:{type:I,doc:"Value",refable:!0}}},texture_sample:sc,texture_load:ic,texture_store:cc,buffer_load:uc,buffer_store:lc,resource_get_size:nr,resource_get_format:nr,resource_is_bound:fc,atomic_load:pc,atomic_store:dc,atomic_add:Tt,atomic_sub:Tt,atomic_min:Tt,atomic_max:Tt,atomic_exchange:Tt,prng_make:Fi,prng_next:Wi,float3x3:mc,float4x4:hc,mat_identity:_c,mat_mul:gc,mat_transpose:ar,mat_inverse:ar,mat_extract:{doc:"Extract element from matrix by col/row. Matrices are column-major: mat[col] returns a column vector in WGSL/MSL.",args:{mat:{type:Wr,doc:"Matrix",refable:!0},col:{type:Z,doc:"Column index",refable:!0},row:{type:Z,doc:"Row index",refable:!0}}},quat:yc,quat_identity:{doc:"Identity quat",args:{}},quat_mul:vc,quat_slerp:bc,quat_to_float4x4:xc,quat_rotate:$c,color_mix:wc,math_flush_subnormal:U,math_mantissa:U,math_exponent:U,math_frexp_mantissa:U,math_frexp_exponent:U,math_ldexp:{doc:"ldexp function",args:{val:{type:q,doc:"Value",refable:!0},exp:{type:q,doc:"Exponent",refable:!0}}},struct_construct:{doc:"Construct struct. The `values` keys must match the struct's member names exactly.",args:{type:{type:P(),doc:"Struct type ID (must match a struct defined in ir.structs)",refType:"struct",isIdentifier:!0},values:{type:R(),doc:"Struct fields — keys are member names, values are data refs or literals",optional:!0}}},struct_extract:zc,array_construct:{doc:"Construct a fixed-size typed array. Provide either `values` (elements list) OR `length`+`fill` (uniform fill). Element type is inferred from context or the `type` hint.",args:{values:{type:ft(R()),doc:"Array elements (determines length)",refable:!0,isArray:!0,optional:!0},type:{type:P(),doc:"Explicit element type (e.g. struct ID for arrays of structs)",optional:!0,refType:"struct",isIdentifier:!0},length:{type:R(),doc:"Array length (use with fill)",optional:!0,refable:!0},fill:{type:R(),doc:"Fill value (use with length)",optional:!0,refable:!0}}},array_set:Ac,array_extract:Sc,array_length:{doc:"Array length",args:{array:{type:R(),doc:"Array",refable:!0,literalTypes:["array"]}}},cmd_draw:oc,cmd_dispatch:{doc:"Dispatch compute shader. All function inputs are serialized as flat floats for GPU marshalling (CppMetal backend). CPU-allowed builtins (time, delta_time, bpm, etc.) are auto-injected as extra shader args.",isExecutable:!0,cpuOnly:!0,args:{func:{type:P(),doc:"Shader function ID",requiredRef:!0,refType:"func",isIdentifier:!0},threads:{type:R(),doc:"Thread counts per dimension (int3, or scalar for 1D). The runtime subdivides into workgroups internally.",optional:!0,refable:!0},args:{type:R(),doc:"Shader arguments — keys must match function input IDs",optional:!0}}},cmd_resize_resource:{doc:"Resize a resource",isExecutable:!0,cpuOnly:!0,args:{resource:{type:P(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},size:{type:q,doc:"New size [w, h] or scalar",refable:!0,literalTypes:["float","int","float2"]},clear:{type:R(),doc:"Optional clear value",optional:!0}}},cmd_sync_to_cpu:{doc:"Initiate async readback",isExecutable:!0,cpuOnly:!0,args:{resource:{type:P(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},cmd_wait_cpu_sync:{doc:"Wait for readback completion",isExecutable:!0,cpuOnly:!0,args:{resource:{type:P(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},cmd_copy_buffer:{doc:"Copy elements from one buffer to another, with optional offset and count.",isExecutable:!0,cpuOnly:!0,args:{src:{type:P(),doc:"Source buffer resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0},dst:{type:P(),doc:"Destination buffer resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},src_offset:{type:Z,doc:"Starting element index in source",refable:!0,optional:!0},dst_offset:{type:Z,doc:"Starting element index in destination",refable:!0,optional:!0},count:{type:Z,doc:"Number of typed elements to copy",refable:!0,optional:!0}}},cmd_copy_texture:{doc:"Copy/blit pixels from one texture to another, with optional scaling and alpha blending.",isExecutable:!0,cpuOnly:!0,args:{src:{type:P(),doc:"Source texture resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0},dst:{type:P(),doc:"Destination texture resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},src_rect:{type:tt,doc:"Source region [x, y, w, h]",refable:!0,optional:!0},dst_rect:{type:tt,doc:"Destination region [x, y, w, h]",refable:!0,optional:!0},sample:{type:P(),doc:"'nearest' or 'bilinear' — enables scaling",optional:!0,literalTypes:["string"]},alpha:{type:I,doc:"Opacity for compositing (0..1)",refable:!0,optional:!0},normalized:{type:Vt,doc:"If true, rect coords are 0..1 relative to texture dims",optional:!0}}},var_set:Ec,var_get:Oc,builtin_get:kc,const_get:{doc:"Get a constant, such as the value of an enum by name",args:{name:{type:Li,doc:"Name",refType:"const"}}},loop_index:{doc:"Get current loop iteration index. The `loop` arg must match the `tag` on the corresponding flow_loop node.",args:{loop:{type:P(),doc:"Loop tag (must match flow_loop's tag)",refable:!0,refType:"loop",isIdentifier:!0}}},flow_branch:{doc:"Branch based on condition",isExecutable:!0,args:{cond:{type:Vt,doc:"Condition",refable:!0},exec_true:{type:P(),doc:"Node ID for true",requiredRef:!0,optional:!0,refType:"exec"},exec_false:{type:P(),doc:"Node ID for false",requiredRef:!0,optional:!0,refType:"exec"}}},flow_loop:Cc,call_func:{doc:"Call a function. Parameters are fully typed (float, int, bool, vectors, structs, arrays, matrices) — not just float. The `args` keys must match the target function's input IDs exactly.",isExecutable:!0,args:{func:{type:P(),doc:"Function ID (must match a function defined in ir.functions)",requiredRef:!0,refType:"func",isIdentifier:!0},args:{type:R(),doc:"Function arguments — keys are input IDs, values are data refs or literals",optional:!0}}},func_return:{doc:"Return from function. Return type is determined by the parent function's outputs[0].type, not inferred from the value.",isExecutable:!0,args:{val:{type:R(),doc:"Return value (must match function's declared output type)",optional:!0,refable:!0}}}},Ic=Object.fromEntries(Object.entries(Rt).map(([e,t])=>[e,qi(t)]));function ke(e,t){const r=[],n=new Set(e.nodes.map(p=>p.id)),a=new Set(e.inputs.map(p=>p.id)),s=new Set(e.localVars.map(p=>p.id)),o=new Set(t?.resources?.map(p=>p.id)||[]),i=new Set(t?.inputs?.map(p=>p.id)||[]),c=p=>{if(typeof p!="string"||p.length===0)return!1;const f=p.includes(".")?p.substring(0,p.indexOf(".")):p;return n.has(f)||a.has(f)||s.has(f)||o.has(f)||i.has(f)},u=p=>typeof p=="string"&&p.length>0&&n.has(p),m=p=>Rt[p]?.isExecutable??!1;for(const p of e.nodes){const f=Rt[p.op];if(f){for(const[h,_]of Object.entries(f.args)){const g=p[h]??(p.args?p.args[h]:void 0);if(g!==void 0&&(_.refable||_.requiredRef)){const y=_.refType||"data";if(y==="exec")u(g)&&m(p.op)&&r.push({from:p.id,portOut:h,to:g,portIn:"exec_in",type:"execution"});else if(y==="data"||y==="var"||y==="func"||y==="resource"){const x=($,D="")=>{if(c($)){const z=typeof $=="string"&&$.includes(".")?$.substring(0,$.indexOf(".")):$;r.push({from:z,portOut:"val",to:p.id,portIn:h+D,type:"data"})}};Array.isArray(g)?g.forEach(($,D)=>x($,`[${D}]`)):x(g)}}}if(p.args!==void 0||p.values!==void 0){const h=new Set(Object.keys(f.args)),_=(g,y)=>{if(g!=null){if(typeof g=="string"){if(c(g)){const x=g.includes(".")?g.substring(0,g.indexOf(".")):g;r.push({from:x,portOut:"val",to:p.id,portIn:y,type:"data"})}}else if(Array.isArray(g))g.forEach((x,$)=>_(x,`${y}[${$}]`));else if(typeof g=="object")for(const[x,$]of Object.entries(g))y===""&&(Gr.has(x)||x.startsWith("exec_")||x==="next"||x==="_next")||y===""&&h.has(x)&&x!=="args"&&x!=="values"||_($,y===""?x:`${y}.${x}`)}};_(p,"")}}if(u(p.exec_in)){const h=e.nodes.find(g=>g.id===p.exec_in);h&&m(h.op)&&(r.find(y=>y.to===p.id&&y.portIn==="exec_in"&&y.type==="execution")||r.push({from:p.exec_in,portOut:"exec_out",to:p.id,portIn:"exec_in",type:"execution"}))}const l=p.next||p._next||p.exec_out;u(l)&&r.push({from:p.id,portOut:"exec_out",to:l,portIn:"exec_in",type:"execution"})}const d=new Set;return r.filter(p=>{const f=`${p.from}:${p.portOut}:${p.to}:${p.portIn}:${p.type}`;return d.has(f)?!1:(d.add(f),!0)})}class Yr{constructor(t){this.structLayoutCache=new Map,this.structs=new Map(t.map(r=>[r.id.toLowerCase(),r]))}calculateBlockLayout(t,r=!0,n="std430"){let a=[...t];r&&a.sort((m,d)=>{const p=this.isRuntimeArray(m.type),f=this.isRuntimeArray(d.type);if(p&&!f)return 1;if(!p&&f)return-1;const l=this.getAlignment(d.type,n)-this.getAlignment(m.type,n);return l!==0?l:m.id.localeCompare(d.id)});let s=0,o=16;const i=[];for(const m of a){const d=this.getAlignment(m.type,n),p=this.getSize(m.type,n);s=Math.ceil(s/d)*d,i.push({name:m.id,type:m.type,offset:s,size:p,align:d}),s+=p,o=Math.max(o,d)}const c=Math.ceil(s/o)*o,u=a.length>0&&this.isRuntimeArray(a[a.length-1].type);return{fields:i,totalSize:Math.max(16,c),alignment:o,hasRuntimeArray:u}}getStructLayout(t,r="std430"){const n=t.toLowerCase(),a=`${n}:${r}`;if(this.structLayoutCache.has(a))return this.structLayoutCache.get(a);const s=this.structs.get(n);if(!s)return{size:0,alignment:16,members:[]};let o=0,i=r==="std140"?16:0;const c=[];for(const d of s.members){const p=this.getAlignment(d.type,r),f=this.getSize(d.type,r);o=Math.ceil(o/p)*p,c.push({name:d.name,type:d.type,offset:o,size:f,align:p}),o+=f,i=Math.max(i,p)}const m={size:Math.ceil(o/i)*i,alignment:i,members:c};return this.structLayoutCache.set(a,m),m}getAlignment(t,r="std430"){const n=t.toLowerCase();if(["f32","i32","float","int","bool"].some(s=>n===s))return 4;if(n.startsWith("mat")||n.startsWith("float")&&n.includes("x"))return 16;if(["vec2","float2","int2"].some(s=>n.includes(s)))return 8;if(["vec3","vec4","float3","float4","int3","int4","quat"].some(s=>n.includes(s)))return 16;if(n.endsWith("]")||n.startsWith("array<")){if(r==="std140")return 16;let s="float";return n.startsWith("array<")?s=n.substring(6,n.length-1).split(",")[0].trim():s=n.substring(0,n.indexOf("[")),this.getAlignment(s,r)}if(this.structs.get(n)){const s=this.getStructLayout(t,r);return r==="std140"?Math.ceil(s.alignment/16)*16:s.alignment}return 16}getSize(t,r="std430"){const n=t.toLowerCase();if(["f32","i32","float","int","bool"].some(s=>n===s))return 4;if(n.endsWith("]")||n.startsWith("array<")){let s="float",o=0;if(n.startsWith("array<")){const m=n.substring(6,n.length-1).split(",");s=m[0].trim(),o=m.length>1?parseInt(m[1].trim()):0}else s=n.substring(0,n.indexOf("["));const i=this.getSize(s,r),c=this.getAlignment(s,r),u=Math.ceil(i/(r==="std140"?16:c))*(r==="std140"?16:c);return o*u}return n.includes("mat3")||n.includes("float3x3")?48:n.includes("mat4")||n.includes("float4x4")?64:["vec2","float2","int2"].some(s=>n.includes(s))?8:["vec3","float3","int3"].some(s=>n.includes(s))?12:["vec4","float4","int4","quat"].some(s=>n.includes(s))?16:this.structs.get(n)?this.getStructLayout(t,r).size:16}isRuntimeArray(t){const r=t.toLowerCase();return!!(r.includes("[]")||r.startsWith("array<")&&!r.includes(","))}getComponentCount(t){const r=t.toLowerCase();return r.includes("float4")||r.includes("int4")||r==="quat"||r.includes("vec4")?4:r.includes("float3")||r.includes("int3")||r.includes("vec3")?3:r.includes("float2")||r.includes("int2")||r.includes("vec2")?2:r.includes("mat4")?16:r.includes("mat3")?9:(r.includes("[")||r.startsWith("array<"),1)}}var Dc=`fn safe_f32_to_i32(v: f32) -> i32 {
  if (v >= 2147483648.0) { return bitcast<i32>(u32(v)); }
  return i32(v);
}
fn get_nan() -> f32 { var u = 0x7fc00000u; return bitcast<f32>(u); }
fn get_inf() -> f32 { var u = 0x7f800000u; return bitcast<f32>(u); }
fn get_neginf() -> f32 { var u = 0xff800000u; return bitcast<f32>(u); }
fn mat4_from_array_i32(arr: array<i32, 16>) -> mat4x4<f32> {
  return mat4x4<f32>(
    f32(arr[0]), f32(arr[1]), f32(arr[2]), f32(arr[3]),
    f32(arr[4]), f32(arr[5]), f32(arr[6]), f32(arr[7]),
    f32(arr[8]), f32(arr[9]), f32(arr[10]), f32(arr[11]),
    f32(arr[12]), f32(arr[13]), f32(arr[14]), f32(arr[15])
  );
}
fn mat3_inverse(m: mat3x3<f32>) -> mat3x3<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a01 + a02 * a21;
  let b21 = a12 * a01 - a02 * a11;
  let det = a00 * b01 + a10 * b11 + a20 * b21;
  if (det == 0.0) { return mat3x3<f32>(0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0); }
  let invDet = 1.0 / det;
  return mat3x3<f32>(
    b01 * invDet,
    (-a22 * a10 + a12 * a20) * invDet,
    (a21 * a10 - a11 * a20) * invDet,
    b11 * invDet,
    (a22 * a00 - a02 * a20) * invDet,
    (-a21 * a00 + a01 * a20) * invDet,
    b21 * invDet,
    (-a12 * a00 + a02 * a10) * invDet,
    (a11 * a00 - a01 * a10) * invDet
  );
}

fn mat4_inverse(m: mat4x4<f32>) -> mat4x4<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2]; let a03 = m[0][3];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2]; let a13 = m[1][3];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2]; let a23 = m[2][3];
  let a30 = m[3][0]; let a31 = m[3][1]; let a32 = m[3][2]; let a33 = m[3][3];
  let b00 = a00 * a11 - a01 * a10; let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10; let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11; let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30; let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30; let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31; let b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (det == 0.0) { return mat4x4<f32>(0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0); }
  let invDet = 1.0 / det;
  return mat4x4<f32>(
    (a11 * b11 - a12 * b10 + a13 * b09) * invDet,
    (a02 * b10 - a01 * b11 - a03 * b09) * invDet,
    (a31 * b05 - a32 * b04 + a33 * b03) * invDet,
    (a22 * b04 - a21 * b05 - a23 * b03) * invDet,
    (a12 * b08 - a10 * b11 - a13 * b07) * invDet,
    (a00 * b11 - a02 * b08 + a03 * b07) * invDet,
    (a32 * b02 - a30 * b05 - a33 * b01) * invDet,
    (a20 * b05 - a22 * b02 + a23 * b01) * invDet,
    (a10 * b10 - a11 * b08 + a13 * b06) * invDet,
    (a01 * b08 - a00 * b10 - a03 * b06) * invDet,
    (a30 * b04 - a31 * b02 + a33 * b00) * invDet,
    (a21 * b02 - a20 * b04 - a23 * b00) * invDet,
    (a11 * b07 - a10 * b09 - a12 * b06) * invDet,
    (a00 * b09 - a01 * b07 + a02 * b06) * invDet,
    (a31 * b01 - a30 * b03 - a32 * b00) * invDet,
    (a20 * b03 - a21 * b01 + a22 * b00) * invDet
  );
}
fn is_nan(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) > 0x7f800000u;
}
fn is_inf(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) == 0x7f800000u;
}
fn is_finite(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) < 0x7f800000u;
}
fn is_nan_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) > vec2<u32>(0x7f800000u); }
fn is_nan_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) > vec3<u32>(0x7f800000u); }
fn is_nan_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u); }

fn is_inf_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) == vec2<u32>(0x7f800000u); }
fn is_inf_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) == vec3<u32>(0x7f800000u); }
fn is_inf_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) == vec4<u32>(0x7f800000u); }

fn is_finite_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) < vec2<u32>(0x7f800000u); }
fn is_finite_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) < vec3<u32>(0x7f800000u); }
fn is_finite_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) < vec4<u32>(0x7f800000u); }

fn flush_subnormal(v: f32) -> f32 {
  let u = bitcast<u32>(v);
  if ((u & 0x7f800000u) == 0u && (u & 0x007fffffu) != 0u) {
    return 0.0;
  }
  return v;
}
fn get_mantissa(v: f32) -> f32 {
  return frexp(v).fract;
}
fn get_exponent(v: f32) -> f32 {
  return f32(frexp(v).exp);
}

fn quat_from_axis_angle(axis: vec3<f32>, angle: f32) -> vec4<f32> {
  let half_angle = angle * 0.5;
  let s = sin(half_angle);
  let c = cos(half_angle);
  return vec4<f32>(axis * s, c);
}
fn quat_mul(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(
    a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
    a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z
  );
}
fn quat_slerp(a: vec4<f32>, b: vec4<f32>, t: f32) -> vec4<f32> {
  let cos_half_theta = dot(a, b);
  if (abs(cos_half_theta) >= 1.0) { return a; }
  let sin_half_theta = sqrt(1.0 - cos_half_theta * cos_half_theta);
  if (abs(sin_half_theta) < 0.001) { return vec4<f32>((1.0 - t) * a + t * b); }
  let half_theta = acos(cos_half_theta);
  let ratio_a = sin((1.0 - t) * half_theta) / sin_half_theta;
  let ratio_b = sin(t * half_theta) / sin_half_theta;
  return ratio_a * a + ratio_b * b;
}
fn quat_rotate(v: vec3<f32>, q: vec4<f32>) -> vec3<f32> {
  let t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}
fn quat_to_mat4(q: vec4<f32>) -> mat4x4<f32> {
  let x2 = q.x + q.x; let y2 = q.y + q.y; let z2 = q.z + q.z;
  let xx = q.x * x2; let xy = q.x * y2; let xz = q.x * z2;
  let yy = q.y * y2; let yz = q.y * z2; let zz = q.z * z2;
  let wx = q.w * x2; let wy = q.w * y2; let wz = q.w * z2;
  return mat4x4<f32>(
    1.0 - (yy + zz), xy + wz, xz - wy, 0.0,
    xy - wz, 1.0 - (xx + zz), yz + wx, 0.0,
    xz + wy, yz - wx, 1.0 - (xx + yy), 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}
fn color_mix_impl(dst: vec4<f32>, src: vec4<f32>) -> vec4<f32> {
  let outA = src.a + dst.a * (1.0 - src.a);
  if (outA < 1e-6) { return vec4<f32>(0.0); }
  return vec4<f32>((src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / outA, outA);
}

fn _prng_hash(x_in: i32) -> i32 {
  var x = bitcast<u32>(x_in);
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  return bitcast<i32>(x);
}
fn _prng_hash_to_float(x: i32) -> f32 {
  return f32(bitcast<u32>(_prng_hash(x))) / 4294967295.0;
}
`;class vt{constructor(){this.allUsedBuiltins=new Set}compileFunctions(t,r,n={},a){n.entryPointId=r,a&&(n.fullIr=a);const s=t.find(k=>k.id===r);if(!s)throw new Error(`Entry point function '${r}' not found`);n.entryPointId=r,this.allUsedBuiltins=n.usedBuiltins||new Set,n.usedBuiltins||t.forEach(k=>{k.nodes.forEach(C=>{C.op==="builtin_get"&&this.allUsedBuiltins.add(C.name)})}),this.allUsedBuiltins.has("normalized_global_invocation_id")&&this.allUsedBuiltins.add("global_invocation_id"),t.forEach(k=>{k.nodes.some(C=>C.op==="prng_make")&&this.allUsedBuiltins.add("prng_seed")});const o={version:"1.0",meta:{name:"generated"},entryPoint:r,inputs:[],functions:t,structs:[],...a,resources:Array.from(n.resourceDefs?.values()||a?.resources||[])},i=[],c=[];this.generateStructs(o,i,n);const u=new Set,m=[r];for(;m.length>0;){const k=m.pop();if(u.has(k))continue;u.add(k);const C=t.find(M=>M.id===k);C&&C.nodes.forEach(M=>{M.op==="call_func"&&typeof M.func=="string"&&m.push(M.func)})}const d=new Set,p=new Set,f=new Set,l=t.filter(k=>u.has(k.id));for(const k of l)vt.findUsedResources(k,o).forEach(M=>d.add(M)),k.nodes.forEach(M=>{M.op==="texture_store"&&typeof M.tex=="string"&&p.add(M.tex),(M.op==="texture_sample"||M.op==="texture_load")&&typeof M.tex=="string"&&f.add(M.tex)});if(n.resourceBindings){const k=new Map;n.resourceBindings.forEach((C,M)=>{d.has(M)&&k.set(M,C)}),n.resourceBindings=k}n.storageResources=p,n.sampledResources=f;for(const k of l)this.emitFunction(k,k.id===r,c,n,o,l),c.push("");this.emitTextureSamplers(i,n,o,d);const h=[];h.push('#import "intrinsics.wgsl"'),h.push(""),this.validateRecursion(o.functions||[]),(o.globals&&o.globals.length>0||n.varMap&&n.varMap.size>0)&&(n.globalBufferBinding===void 0&&(n.globalBufferBinding=0),h.push("struct Globals { data: array<f32> }"),h.push(`@group(0) @binding(${n.globalBufferBinding}) var<storage, read_write> b_globals : Globals;`),h.push(""));const g=s.type==="shader"?[...o.inputs||[],...o.tuningParams||[],...s.inputs]:[...o.inputs||[],...o.tuningParams||[]],y=new Map;g.forEach(k=>y.set(k.id,k));const $=Array.from(y.values()).filter(k=>!k.builtin&&k.type!=="texture2d"&&!n.varMap?.has(k.id));let D;const z=new Yr(a?.structs||[]);if(n.inputBinding!==void 0&&(n.stage==="compute"||$.length>0)){const k=[...$];n.stage==="compute"&&(k.push({id:"u_dispatch_size",type:"vec3<u32>"}),["time","delta_time","bpm","beat_number","beat_delta","prng_seed"].forEach(M=>{this.allUsedBuiltins.has(M)&&k.push({id:M,type:"float"})})),this.allUsedBuiltins.has("output_size")&&k.push({id:"output_size",type:"vec3<i32>"});for(const C of[...o.inputs||[],...o.tuningParams||[]])C.type==="texture2d"&&k.push({id:`tex_bound_${C.id}`,type:"float"});D=z.calculateBlockLayout(k,!0,"std430"),h.push("struct Inputs {");for(const C of D.fields){let M=this.resolveType(C.type);M==="bool"&&(M="u32"),h.push(`  ${C.name} : ${M},`)}h.push("}"),h.push(`@group(0) @binding(${n.inputBinding}) var<storage, read> b_inputs : Inputs;`),h.push("")}const w=new Map;n.resourceBindings&&n.resourceBindings.forEach((k,C)=>{const M=n.resourceDefs?.get(C);if(M?.type==="atomic_counter"){w.set(C,"atomic_counter");const J=`AtomicBuffer_${C}`;h.push(`struct ${J} { data: array<atomic<i32>> }`);const _t=this.getBufferVar(C);h.push(`@group(0) @binding(${k}) var<storage, read_write> ${_t} : ${J};`)}else if(M?.type==="buffer"||!M){w.set(C,"buffer");const J=M?.dataType?this.resolveType(M.dataType):"f32",_t=`Buffer_${C}`;h.push(`struct ${_t} { data: array<${J}> }`);const Pt=this.getBufferVar(C),St=n.stage==="vertex"?"read":"read_write";h.push(`@group(0) @binding(${k}) var<storage, ${St}> ${Pt} : ${_t};`)}else if(M.type==="texture2d"){w.set(C,"texture2d");const J=n.storageResources?.has(C),_t=n.sampledResources?.has(C);if(J){let Pt="rgba8unorm";const St=M.format;typeof St=="string"&&(Pt={rgba8:"rgba8unorm",rgba16f:"rgba16float",rgba32f:"rgba32float",r32f:"r32float"}[St]||St);const rn=_t?"read_write":"write";h.push(`@group(0) @binding(${k}) var ${C} : texture_storage_2d<${Pt}, ${rn}>;`)}else h.push(`@group(0) @binding(${k}) var ${C} : texture_2d<f32>;`)}}),n.resourceBindings&&n.resourceBindings.size>0&&h.push("");const b=["global_invocation_id","local_invocation_id","workgroup_id","local_invocation_index","num_workgroups","normalized_global_invocation_id","position","frag_coord","front_facing","sample_index","vertex_index","instance_index"],T={global_invocation_id:"vec3<u32>",local_invocation_id:"vec3<u32>",workgroup_id:"vec3<u32>",local_invocation_index:"u32",num_workgroups:"vec3<u32>",normalized_global_invocation_id:"vec3<f32>",position:"vec4<f32>",frag_coord:"vec4<f32>",front_facing:"bool",sample_index:"u32",vertex_index:"u32",instance_index:"u32"},S={global_invocation_id:"GlobalInvocationID",local_invocation_id:"LocalInvocationID",workgroup_id:"WorkgroupID",local_invocation_index:"LocalInvocationIndex",num_workgroups:"NumWorkgroups",normalized_global_invocation_id:"NormalizedGlobalInvocationID",position:"Position",frag_coord:"FragCoord",front_facing:"FrontFacing",sample_index:"SampleIndex",vertex_index:"VertexIndex",instance_index:"InstanceIndex"};b.forEach(k=>{this.allUsedBuiltins.has(k)&&h.push(`var<private> ${S[k]} : ${T[k]};`)});const A=[...i,...h,...c].join(`
`),B=n.inputBinding!==void 0&&(n.stage==="compute"||$.length>0||this.allUsedBuiltins.has("output_size")),j=n.workgroupSize||(n.stage==="compute"?[16,16,1]:[1,1,1]);return{code:A,imports:{'#import "intrinsics.wgsl"':Dc},metadata:{resourceBindings:n.resourceBindings||new Map,resourceTypes:w,inputBinding:B?n.inputBinding:void 0,inputLayout:B&&D?D:void 0,structLayouts:B&&z?Object.fromEntries((a?.structs||[]).map(k=>[k.id,z.getStructLayout(k.id,"std430")])):void 0,workgroupSize:j}}}compile(t,r,n={}){if(n.resourceDefs||(n.resourceDefs=new Map(t.resources.map(s=>[s.id,s])),[...t.inputs,...t.tuningParams||[]].forEach(s=>{s.type==="texture2d"&&(n.resourceDefs.has(s.id)||n.resourceDefs.set(s.id,{...s,type:"texture2d"}))})),n.stage||(n.stage="compute"),n.inputBinding===void 0&&(n.inputBinding=1),!n.resourceBindings){n.resourceBindings=new Map;let s=2;t.resources.forEach(o=>{n.resourceBindings.set(o.id,s++)}),[...t.inputs,...t.tuningParams||[]].forEach(o=>{o.type==="texture2d"&&!n.resourceBindings.has(o.id)&&n.resourceBindings.set(o.id,s++)})}const a=t.functions.find(s=>s.id===r);return a&&(a.workgroupSize?n.workgroupSize=a.workgroupSize:a.metadata&&a.metadata.workgroup_size&&(n.workgroupSize=a.metadata.workgroup_size)),this.compileFunctions(t.functions,r,n,t)}emitTextureSamplers(t,r,n,a){r.resourceDefs&&r.resourceDefs.forEach((s,o)=>{if(a.has(o)&&s.type==="texture2d"){if(!r.sampledResources?.has(o))return;const c=r.storageResources?.has(o),u=s.sampler?.wrap||"clamp",d=(s.sampler?.filter||"nearest")==="linear";if(t.push(`fn sample_${o}(uv: vec2<f32>) -> vec4<f32> {`),t.push(`  let size_f = vec2<f32>(textureDimensions(${o}${c?"":", 0u"}));`),t.push("  let size_i = vec2<i32>(size_f);"),u==="repeat"?t.push("  let p = fract(uv);"):u==="mirror"?t.push("  let p = 1.0 - abs(fract(uv * 0.5) * 2.0 - 1.0);"):t.push("  let p = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));"),d){t.push("  let pixel_coords = p * size_f - 0.5;"),t.push("  let base = vec2<i32>(floor(pixel_coords));"),t.push("  let f = pixel_coords - vec2<f32>(base);");const p=(f,l)=>{const h=f===0&&l===0?"base":`base + vec2<i32>(${f}, ${l})`;return u==="repeat"?`textureLoad(${o}, (${h} % size_i + size_i) % size_i${c?"":", 0u"})`:`textureLoad(${o}, clamp(${h}, vec2<i32>(0), size_i - 1)${c?"":", 0u"})`};t.push(`  let c00 = ${p(0,0)};`),t.push(`  let c10 = ${p(1,0)};`),t.push(`  let c01 = ${p(0,1)};`),t.push(`  let c11 = ${p(1,1)};`),t.push("  return mix(mix(c00, c10, f.x), mix(c01, c11, f.x), f.y);")}else t.push("  let coord = vec2<i32>(floor(p * size_f));"),u==="repeat"?t.push("  let sc = (coord % size_i + size_i) % size_i;"):t.push("  let sc = clamp(coord, vec2<i32>(0), size_i - 1);"),t.push(`  return textureLoad(${o}, sc${c?"":", 0u"});`);t.push("}"),t.push("")}})}generateStructs(t,r,n){for(const a of t.structs??[]){r.push(`struct ${a.id} {`);for(const s of a.members){const o=this.resolveType(s.type);let i="";s.builtin?i+=`@builtin(${s.builtin}) `:n.stage!=="compute"&&s.location!==void 0&&(i+=`@location(${s.location}) `),r.push(`  ${i}${s.name} : ${o},`)}r.push("}"),r.push("")}}emitPlaceholders(t,r,n,a){r.resourceBindings&&r.resourceBindings.forEach((s,o)=>{if(r.resourceDefs?.get(o)?.type==="texture2d"){const c=r.storageResources?.has(o);t.push(`  _ = textureDimensions(${o}${c?"":", 0u"});`)}else{const c=this.getBufferVar(o);t.push(`  _ = &${c}.data;`)}}),n&&r.inputBinding!==void 0&&t.push("  _ = &b_inputs;")}emitFunction(t,r,n,a,s,o){const i=t.inputs.filter(u=>!u.builtin);if(r)if(a.stage==="vertex"){const u=this.resolveType(t.outputs[0]?.type||"vec4<f32>");n.push("@vertex"),n.push(`fn main(@builtin(vertex_index) vertex_index : u32, @builtin(instance_index) instance_index : u32) -> ${u} {`),this.allUsedBuiltins.has("vertex_index")&&n.push("  VertexIndex = vertex_index;"),this.allUsedBuiltins.has("instance_index")&&n.push("  InstanceIndex = instance_index;"),this.emitPlaceholders(n,a,!1,o);for(const m of t.inputs)m.builtin==="vertex_index"?n.push(`  let l_${m.id} = i32(vertex_index);`):m.builtin==="instance_index"&&n.push(`  let l_${m.id} = i32(instance_index);`)}else if(a.stage==="fragment"){const u=[];let m=0;for(const f of t.inputs)if(f.builtin==="frag_coord")u.push("@builtin(frag_coord) fc : vec4<f32>");else if(f.builtin==="front_facing")u.push("@builtin(front_facing) ff : bool");else if(f.builtin==="sample_index")u.push("@builtin(sample_index) si : u32");else if(f.builtin==="position")u.push("@builtin(position) pos : vec4<f32>");else{const h=(s.structs??[]).some(_=>_.id===f.type)?"":`@location(${f.location!==void 0?f.location:m++}) `;u.push(`${h}${f.id} : ${this.resolveType(f.type)}`)}let d="vec4<f32>",p="@location(0)";if(t.outputs.length>0){const f=t.outputs[0];d=this.resolveType(f.type),(s.structs??[]).some(l=>l.id===f.type)?p="":f.location!==void 0&&(p=`@location(${f.location})`)}n.push("@fragment"),n.push(`fn main(${u.join(", ")}) -> ${p} ${d} {`),this.allUsedBuiltins.has("frag_coord")&&n.push("  FragCoord = fc;"),this.allUsedBuiltins.has("front_facing")&&n.push("  FrontFacing = ff;"),this.allUsedBuiltins.has("sample_index")&&n.push("  SampleIndex = si;"),this.allUsedBuiltins.has("position")&&n.push("  Position = pos;"),this.emitPlaceholders(n,a,!1,o);for(const f of t.inputs)f.builtin==="frag_coord"&&n.push(`  let l_${f.id} = fc;`),f.builtin==="front_facing"&&n.push(`  let l_${f.id} = ff;`),f.builtin==="sample_index"&&n.push(`  let l_${f.id} = i32(si);`),f.builtin==="position"&&n.push(`  let l_${f.id} = pos;`)}else{const u=["@builtin(global_invocation_id) gid : vec3<u32>"];this.allUsedBuiltins.has("local_invocation_id")&&u.push("@builtin(local_invocation_id) lid : vec3<u32>"),this.allUsedBuiltins.has("workgroup_id")&&u.push("@builtin(workgroup_id) wid : vec3<u32>"),this.allUsedBuiltins.has("local_invocation_index")&&u.push("@builtin(local_invocation_index) lidx : u32"),this.allUsedBuiltins.has("num_workgroups")&&u.push("@builtin(num_workgroups) nw : vec3<u32>");const m=a.workgroupSize||[16,16,1];n.push(`@compute @workgroup_size(${m[0]}, ${m[1]}, ${m[2]})`),n.push(`fn main(${u.join(", ")}) {`),this.allUsedBuiltins.has("global_invocation_id")&&n.push("  GlobalInvocationID = gid;"),this.allUsedBuiltins.has("local_invocation_id")&&n.push("  LocalInvocationID = lid;"),this.allUsedBuiltins.has("workgroup_id")&&n.push("  WorkgroupID = wid;"),this.allUsedBuiltins.has("local_invocation_index")&&n.push("  LocalInvocationIndex = lidx;"),this.allUsedBuiltins.has("num_workgroups")&&n.push("  NumWorkgroups = nw;"),this.allUsedBuiltins.has("normalized_global_invocation_id")&&n.push("  NormalizedGlobalInvocationID = (vec3<f32>(gid) + 0.5) / vec3<f32>(b_inputs.u_dispatch_size);"),this.emitPlaceholders(n,a,i.length>0,o);for(const d of t.inputs)d.builtin==="global_invocation_id"&&n.push(`  let l_${d.id} = gid;`),d.builtin==="local_invocation_id"&&n.push(`  let l_${d.id} = lid;`),d.builtin==="workgroup_id"&&n.push(`  let l_${d.id} = wid;`),d.builtin==="local_invocation_index"&&n.push(`  let l_${d.id} = lidx;`),d.builtin==="num_workgroups"&&n.push(`  let l_${d.id} = nw;`);a.inputBinding!==void 0&&n.push("  if (any(gid >= b_inputs.u_dispatch_size)) { return; }")}else{const u=t.inputs.map(d=>`${d.id}: ${this.resolveType(d.type)}`).join(", ");let m="void";t.outputs.length===1&&(m=this.resolveType(t.outputs[0].type)),n.push(`fn ${t.id}(${u})${m==="void"?"":" -> "+m} {`)}const c=ke(t,a.fullIr);this.emitLocalVars(t,n),this.emitBody(t,n,a,new Set,s,c),n.push("}")}emitLocalVars(t,r){for(const n of t.localVars){const a=this.resolveType(n.type);let s="";n.initialValue!==void 0?s=` = ${this.formatLiteral(n.initialValue,n.type)}`:s=` = ${this.formatZero(n.type)}`,r.push(`  var l_${n.id} : ${a}${s};`)}}emitBody(t,r,n,a,s,o){const i=t.nodes.filter(c=>!o.some(u=>u.to===c.id&&u.type==="execution")&&this.isExecutable(c.op,o,c.id));for(const c of i)this.emitChain(c,t,r,n,a,s,o)}isExecutable(t,r,n){return t.startsWith("cmd_")||t.startsWith("flow_")||t==="var_set"||t==="buffer_store"||t==="texture_store"||t==="call_func"||t==="func_return"||t==="array_set"||t==="vec_set_element"||t==="atomic_store"||t==="atomic_add"||t==="atomic_sub"||t==="atomic_min"||t==="atomic_max"||t==="atomic_exchange"||t==="prng_next"?!0:r.some(s=>s.from===n&&s.type==="execution")}emitChain(t,r,n,a,s,o,i){let c=t;for(;c&&!(s.has(c.id)||(s.add(c.id),this.emitNode(c,r,n,a,o,i),c.op==="flow_branch"));){const u=i.find(m=>m.from===c.id&&m.portOut==="exec_out"&&m.type==="execution");c=u?r.nodes.find(m=>m.id===u.to):void 0}}emitNode(t,r,n,a,s,o){if(t.op==="var_set"){const c=t.var,u=this.resolveArg(t,"val",r,a,s,"any",o);if(a.varMap?.has(c)){const m=a.varMap.get(c),d=a.varTypes?.get(c)||"float",p=d.includes("x"),f=this.getComponentCount(d);if(f===1)n.push(`  b_globals.data[${m}] = f32(${u});`);else if(p){const l=f===9?3:4;for(let h=0;h<l;h++)for(let _=0;_<l;_++)n.push(`  b_globals.data[${m+h*l+_}] = f32(${u}[${h}][${_}]);`)}else for(let l=0;l<f;l++)n.push(`  b_globals.data[${m+l}] = f32(${u}[${l}]);`)}else if(r.localVars.some(m=>m.id===c)){const d=r.localVars.find(l=>l.id===c).type||"float",p=a.nodeTypes?.get(t.val)||"float",f=this.wrapCast(u,p,d);n.push(`  l_${c} = ${f};`)}}else if(t.op==="array_set"||t.op==="vec_set_element"){const c=t.array||t.vec;let u="any";if(c){let l=c;const h=r.nodes.find(x=>x.id===c);h&&h.op==="var_get"&&(l=h.var);const _=r.localVars.find(x=>x.id===l),g=r.inputs.find(x=>x.id===l),y=(_?.type||g?.type||"").toLowerCase();y==="int"?u="int":y==="bool"?u="bool":y==="float"&&(u="float")}const m=this.resolveArg(t,"index",r,a,s,"int",o),d=this.resolveArg(t,"value",r,a,s,u,o);let p=c;const f=r.nodes.find(l=>l.id===c);if(f&&f.op==="var_get"&&(p=f.var),a.varMap?.has(p)){const l=a.varMap.get(p);n.push(`  b_globals.data[u32(${l}) + u32(${m})] = f32(${d});`)}else{const l=this.resolveArg(t,t.op==="array_set"?"array":"vec",r,a,s,"any",o);n.push(`  ${l}[u32(${m})] = ${d};`)}}else if(t.op==="buffer_store"){const c=t.buffer,u=this.resolveArg(t,"index",r,a,s,"int",o),m=this.resolveArg(t,"value",r,a,s,"any",o),d=this.getBufferVar(c),f=a.resourceDefs?.get(c)?.dataType;if(f&&(s.structs??[]).some(h=>h.id===f))n.push(`  ${d}.data[u32(${u})] = ${m};`);else{const h=f?this.resolveType(f):"f32";n.push(`  ${d}.data[u32(${u})] = ${h}(${m});`)}}else if(t.op==="atomic_store"){const c=t.counter,u=this.resolveArg(t,"index",r,a,s,"int",o),m=this.resolveArg(t,"value",r,a,s,"int",o),d=this.getBufferVar(c);n.push(`  atomicStore(&${d}.data[u32(${u})], i32(${m}));`)}else if(t.op==="atomic_add"||t.op==="atomic_sub"||t.op==="atomic_min"||t.op==="atomic_max"||t.op==="atomic_exchange"){const c=t.counter,u=this.resolveArg(t,"index",r,a,s,"int",o),m=this.resolveArg(t,"value",r,a,s,"int",o),d=this.getBufferVar(c),p={atomic_add:"atomicAdd",atomic_sub:"atomicSub",atomic_min:"atomicMin",atomic_max:"atomicMax",atomic_exchange:"atomicExchange"};n.push(`  let v_${t.id} = ${p[t.op]}(&${d}.data[u32(${u})], i32(${m}));`)}else if(t.op==="prng_next"){const c=t.prng,u=t.type||"float",d={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[u]||1,p=u==="int"||u.startsWith("int");if(d===1&&!p)n.push(`  l_${c} = l_${c} + 1;`),n.push(`  let v_${t.id} = _prng_hash_to_float(l_${c});`);else if(d===1&&p){n.push(`  l_${c} = l_${c} + 1;`);const f=t.min!==void 0||o.some(h=>h.to===t.id&&h.portIn==="min"&&h.type==="data"),l=t.max!==void 0||o.some(h=>h.to===t.id&&h.portIn==="max"&&h.type==="data");if(f&&l){const h=this.resolveArg(t,"min",r,a,s,"int",o),_=this.resolveArg(t,"max",r,a,s,"int",o);n.push(`  let v_${t.id} = i32(${h}) + i32(bitcast<u32>(_prng_hash(l_${c})) % u32(i32(${_}) - i32(${h}) + 1));`)}else n.push(`  let v_${t.id} = _prng_hash(l_${c});`)}else{n.push(`  l_${c} = l_${c} + ${d};`);const f=[];for(let h=0;h<d;h++){const _=d-1-h,g=_===0?`l_${c}`:`(l_${c} - ${_})`;f.push(p?`_prng_hash(${g})`:`_prng_hash_to_float(${g})`)}const l=p?`vec${d}<i32>`:`vec${d}<f32>`;n.push(`  let v_${t.id} = ${l}(${f.join(", ")});`)}}else if(t.op==="call_func"){const c=s.functions.find(u=>u.id===t.func);if(c){const u=c.inputs.map(m=>this.resolveArg(t,`args.${m.id}`,r,a,s,"any",o)).join(", ");c.outputs.length>0?n.push(`  let v_${t.id} = ${t.func}(${u});`):n.push(`  ${t.func}(${u});`)}}else if(t.op==="func_return")if(a.entryPointId===r.id&&a.stage==="compute")n.push("  return;");else{const m=t.value!==void 0?"value":"val";n.push(`  return ${this.resolveArg(t,m,r,a,s,"any",o)};`)}else if(t.op==="flow_branch"){const c=this.resolveArg(t,"cond",r,a,s,"bool",o),m=c==="true"||c==="false"||c.includes("==")||c.includes("!=")||c.includes("<")||c.includes(">")||c.includes("&&")||c.includes("||")?c:`${c} != 0.0`;n.push(`  if (${m}) {`);const d=o.find(f=>f.from===t.id&&f.portOut==="exec_true");if(d){const f=r.nodes.find(l=>l.id===d.to);f&&this.emitChain(f,r,n,a,new Set,s,o)}n.push("  } else {");const p=o.find(f=>f.from===t.id&&f.portOut==="exec_false");if(p){const f=r.nodes.find(l=>l.id===p.to);f&&this.emitChain(f,r,n,a,new Set,s,o)}n.push("  }")}else if(t.op==="flow_loop"){const c=`i_${t.id}`;if(t.count!==void 0){const d=this.resolveArg(t,"count",r,a,s,"int",o);n.push(`  for (var ${c} = 0; ${c} < ${d}; ${c}++) {`)}else{const d=this.resolveArg(t,"start",r,a,s,"int",o),p=this.resolveArg(t,"end",r,a,s,"int",o);n.push(`  for (var ${c} = ${d}; ${c} < ${p}; ${c}++) {`)}const u=o.find(d=>d.from===t.id&&d.portOut==="exec_body");if(u){const d=r.nodes.find(p=>p.id===u.to);d&&this.emitChain(d,r,n,a,new Set,s,o)}n.push("  }");const m=o.find(d=>d.from===t.id&&d.portOut==="exec_completed");if(m){const d=r.nodes.find(p=>p.id===m.to);d&&this.emitChain(d,r,n,a,new Set,s,o)}}else if(t.op==="texture_store"){const c=this.resolveArg(t,"coords",r,a,s,"any",o),u=this.resolveArg(t,"value",r,a,s,"any",o);n.push(`  textureStore(${t.tex}, vec2<i32>(${c}), ${u});`)}else if(t.op==="buffer_store"){const c=t.buffer,u=this.resolveArg(t,"index",r,a,s,"int",o),m=this.resolveArg(t,"value",r,a,s,"any",o),d=this.getBufferVar(c),f=a.resourceDefs?.get(c)?.dataType,l=f&&(s.structs??[]).some(h=>h.id===f);if(n.push(`  if (u32(${u}) < arrayLength(&${d}.data)) {`),l)n.push(`    ${d}.data[u32(${u})] = ${m};`);else{const h=f?this.resolveType(f):"f32";n.push(`    ${d}.data[u32(${u})] = ${h}(${m});`)}n.push("  }")}else if(t.op==="cmd_dispatch"){const c=t.func,u=s.functions.find(m=>m.id===c);if(u){const m=u.inputs.map(p=>this.resolveArg(t,`args.${p.id}`,r,a,s,"any",o)).join(", "),d=this.resolveArg(t,"threads",r,a,s,"any",o);n.push(`  // Dispatch: ${c}(${m}) with dim ${d}`),n.push(`  ${c}(${m});`)}}else n.push(`  // Op: ${t.op}`)}getBufferVar(t){if(!t)return"b_unknown";const r=t.trim();return/^[bB]_/.test(r)?r:`b_${r}`}getVariableExpr(t,r,n){if(n.varMap?.has(t)){const o=n.varMap.get(t),i=n.varTypes?.get(t)||"float",c=this.getComponentCount(i);if(i==="bool")return`bool(b_globals.data[${o}])`;if(i==="int")return`bitcast<i32>(u32(b_globals.data[${o}]))`;if(i==="int")return`i32(b_globals.data[${o}])`;if(c===1)return`b_globals.data[${o}]`;if(i==="float2"||i==="vec2<f32>")return`vec2<f32>(b_globals.data[${o}], b_globals.data[${o+1}])`;if(i==="float3"||i==="vec3<f32>")return`vec3<f32>(b_globals.data[${o}], b_globals.data[${o+1}], b_globals.data[${o+2}])`;if(i==="float4"||i==="vec4<f32>")return`vec4<f32>(b_globals.data[${o}], b_globals.data[${o+1}], b_globals.data[${o+2}], b_globals.data[${o+3}])`;if(i==="int2"||i==="vec2<i32>")return`vec2<i32>(i32(b_globals.data[${o}]), i32(b_globals.data[${o+1}]))`;if(i==="int3"||i==="vec3<i32>")return`vec3<i32>(i32(b_globals.data[${o}]), i32(b_globals.data[${o+1}]), i32(b_globals.data[${o+2}]))`;if(i==="int4"||i==="vec4<i32>")return`vec4<i32>(i32(b_globals.data[${o}]), i32(b_globals.data[${o+1}]), i32(b_globals.data[${o+2}]), i32(b_globals.data[${o+3}]))`;if(i==="float3x3"||i==="mat3x3<f32>"){const u=[];for(let m=0;m<9;m++)u.push(`b_globals.data[${o+m}]`);return`mat3x3<f32>(${u.join(", ")})`}if(i==="float4x4"||i==="mat4x4<f32>"){const u=[];for(let m=0;m<16;m++)u.push(`b_globals.data[${o+m}]`);return`mat4x4<f32>(${u.join(", ")})`}if(i.startsWith("array<")){const u=i.match(/,\s*(\d+)>/);if(u){const m=parseInt(u[1]),d=[];for(let p=0;p<m;p++)d.push(`b_globals.data[${o+p}]`);return`array<f32, ${m}>(${d.join(", ")})`}}return`b_globals.data[${o}]`}if(r.localVars.some(o=>o.id===t))return`l_${t}`;const a=r.inputs.find(o=>o.id===t);if(a){if(a.builtin)return`l_${t}`;const o=n.entryPointId===r.id,i=n.stage==="fragment"&&(n.fullIr?.structs??[]).some(c=>c.id===a.type);if(o&&n.inputBinding!==void 0&&!i){const c=`b_inputs.${t}`;return a.type==="bool"?`bool(${c})`:c}return t}const s=n.fullIr?.inputs?.find(o=>o.id===t)??n.fullIr?.tuningParams?.find(o=>o.id===t);if(s&&n.inputBinding!==void 0){const o=`b_inputs.${t}`;return s.type==="bool"?`bool(${o})`:o}return t}resolveArg(t,r,n,a,s,o="float",i){const c=r==="val"||r==="value"?["val","value"]:[r];let u;for(const m of c)if(u=i.find(d=>d.to===t.id&&d.portIn===m&&d.type==="data"),u)break;if(u){const m=n.nodes.find(d=>d.id===u.from);if(m){let d="";for(const p of c){const f=t[p];if(typeof f=="string"&&f.includes(".")){d=f.substring(f.indexOf("."));break}}return m.op==="call_func"||m.op==="atomic_add"||m.op==="atomic_sub"||m.op==="atomic_min"||m.op==="atomic_max"||m.op==="atomic_exchange"||m.op==="prng_next"?`v_${m.id}`+d:m.op==="var_get"?this.getVariableExpr(m.var,n,a)+d:this.compileExpression(m,n,a,s,o,i)+d}}for(const m of c){let d;if(m.includes(".")||m.includes("[")){const p=m.split(/[\.\[\]]/).filter(l=>l!=="");let f=t;for(const l of p){if(f==null)break;f=f[l]}d=f}else d=t[m];if(d!==void 0){if(typeof d=="string"&&d.trim()!==""){const p=d.trim();let f=p,l="";const h=p.indexOf(".");if(h!==-1&&(f=p.substring(0,h),l=p.substring(h)),n.localVars.some(g=>g.id===f)||n.inputs.some(g=>g.id===f)||a.fullIr?.inputs?.some(g=>g.id===f)||a.fullIr?.tuningParams?.some(g=>g.id===f)||a.varMap?.has(f))return this.getVariableExpr(f,n,a)+l;const _=n.nodes.find(g=>g.id===f);if(_&&_.id!==t.id)return this.compileExpression(_,n,a,s,o,i)+l}return this.formatLiteral(d,o||"unknown")}}return this.formatZero(o||"float")}compileExpression(t,r,n,a,s="float",o){if(t.op==="literal")return this.formatLiteral(t.val,t.type||s||"float");if(t.op==="loop_index")return`i_${t.loop}`;if(t.op==="float")return this.resolveArg(t,"val",r,n,a,"float",o);if(t.op==="int")return this.resolveArg(t,"val",r,n,a,"int",o);if(t.op==="bool")return this.resolveArg(t,"val",r,n,a,"bool",o);if(["float2","float3","float4","int2","int3","int4"].includes(t.op)){const i=t.op.startsWith("int"),c=parseInt(t.op.replace(/^(float|int)/,"")),u=i?`vec${c}<i32>`:`vec${c}<f32>`,m=i?"i32":"f32",d=i?"int":"float",p=["x","y","z","w"].slice(0,c),f=this.detectComponentGroups(t,c);if(f){const h=f.map(_=>{const g=this.resolveArg(t,_.key,r,n,a,_.count===1?d:`${d}${_.count}`,o);return _.count===1?g:`${i?`vec${_.count}<i32>`:`vec${_.count}<f32>`}(${g})`});return`${u}(${h.join(", ")})`}const l=p.map(h=>`${m}(${this.resolveArg(t,h,r,n,a,d,o)})`);return`${u}(${l.join(", ")})`}if(t.op==="float3x3"||t.op==="float4x4"){const i=t.vals;if(Array.isArray(i)){const c=i.map(u=>this.formatLiteral(u,"float"));return`${t.op==="float3x3"?"mat3x3<f32>":"mat4x4<f32>"}(${c.join(", ")})`}else if(typeof i=="string"){const c=this.resolveArg(t,"vals",r,n,a,t.op==="float3x3"?"float3x3":"float4x4",o);if(t.op==="float4x4"){const d=n.nodeTypes?.get(i);if(d?.includes("int")||d?.includes("i32"))return`mat4_from_array_i32(${c})`}const u=t.op==="float3x3"?9:16,m=[];for(let d=0;d<u;d++)m.push(`f32(${c}[${d}])`);return`${t.op==="float3x3"?"mat3x3<f32>":"mat4x4<f32>"}(${m.join(", ")})`}}if(t.op==="mat_identity")return(t.size||4)===3?"mat3x3<f32>(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)":"mat4x4<f32>(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)";if(t.op==="mat_inverse"){const i=this.resolveArg(t,"val",r,n,a,"any",o),c=n.nodeTypes?.get(t.val)||"float4x4";return c==="float3x3"||c==="mat3x3<f32>"?`mat3_inverse(${i})`:`mat4_inverse(${i})`}if(t.op==="mat_transpose")return`transpose(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_float")return`f32(${this.resolveArg(t,"val",r,n,a,"float",o)})`;if(t.op==="static_cast_int"){const i=this.resolveArg(t,"val",r,n,a,"any",o),c=t.val,u=typeof c=="string"&&n.nodeTypes?.get(c)||"float";return u==="bool"||u==="boolean"?`i32(${i})`:`safe_f32_to_i32(${i})`}if(t.op==="static_cast_bool")return`bool(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_int2")return`vec2<i32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_int3")return`vec3<i32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_int4")return`vec4<i32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_float2")return`vec2<f32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_float3")return`vec3<f32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="static_cast_float4")return`vec4<f32>(${this.resolveArg(t,"val",r,n,a,"any",o)})`;if(t.op==="struct_construct"){const i=t.type,c=a.structs?.find(m=>m.id===i),u=c?c.members.map(m=>this.resolveArg(t,`values.${m.name}`,r,n,a,"any",o)):[];return`${i}(${u.join(", ")})`}if(t.op==="array_construct"){const i=t.values;if(Array.isArray(i)){const l=i.map((_,g)=>this.resolveArg(t,`values[${g}]`,r,n,a,"any",o));if(l.length===0)return"array<f32, 0>()";const h=t.type||n.varTypes?.get(i[0])||"f32";return`array<${this.resolveType(h)}, ${l.length}>(${l.join(", ")})`}const c=t.length||0;let u="f32";const m=t.fill,d=n.nodeTypes?.get(t.id);if(d&&(d.startsWith("array<")||d.includes("["))){const l=d.match(/array<([^,]+),/)||d.match(/^([^\[]+)\[/);l&&(u=l[1])}else t.type?u=t.type:typeof m=="number"&&Number.isInteger(m)?u="i32":(m===!0||m===!1)&&(u="bool");if(u==="i32"||u==="int"){const l=this.resolveArg(t,"fill",r,n,a,"int",o),h=new Array(c).fill(null).map(()=>l);return`array<i32, ${c}>(${h.join(", ")})`}const p=this.resolveArg(t,"fill",r,n,a,u==="bool"?"bool":"float",o),f=new Array(c).fill(null).map(()=>p);return`array<${this.resolveType(u)}, ${c}>(${f.join(", ")})`}if(t.op==="array_length")return`i32(arrayLength(&${this.resolveArg(t,"array",r,n,a,"any",o)}))`;if(t.op==="texture_sample"){const i=t.tex,c=this.resolveArg(t,"coords",r,n,a,"any",o);return`sample_${i}(${c})`}if(t.op==="texture_load"){const i=t.tex,c=this.resolveArg(t,"coords",r,n,a,"any",o),u=n.storageResources?.has(i);return`textureLoad(${i}, vec2<i32>(${c})${u?"":", 0u"})`}if(t.op==="quat"){if(t.x!==void 0)return`vec4<f32>(f32(${this.resolveArg(t,"x",r,n,a,"float",o)}), f32(${this.resolveArg(t,"y",r,n,a,"float",o)}), f32(${this.resolveArg(t,"z",r,n,a,"float",o)}), f32(${this.resolveArg(t,"w",r,n,a,"float",o)}))`;{const c=this.resolveArg(t,"axis",r,n,a,"float3",o),u=this.resolveArg(t,"angle",r,n,a,"float",o);return`quat_from_axis_angle(${c}, ${u})`}}if(t.op==="quat_identity")return"vec4<f32>(0.0, 0.0, 0.0, 1.0)";if(t.op==="quat_mul"){const i=this.resolveArg(t,"a",r,n,a,"float4",o),c=this.resolveArg(t,"b",r,n,a,"float4",o);return`quat_mul(${i}, ${c})`}if(t.op==="quat_slerp"){const i=this.resolveArg(t,"a",r,n,a,"float4",o),c=this.resolveArg(t,"b",r,n,a,"float4",o),u=this.resolveArg(t,"t",r,n,a,"float",o);return`quat_slerp(${i}, ${c}, ${u})`}if(t.op==="quat_rotate"){const i=this.resolveArg(t,"v",r,n,a,"float3",o),c=this.resolveArg(t,"q",r,n,a,"float4",o);return`quat_rotate(${i}, ${c})`}if(t.op==="quat_to_float4x4")return`quat_to_mat4(${this.resolveArg(t,"q",r,n,a,"float4",o)})`;if(t.op==="resource_get_size"){const i=t.resource,c=n.resourceDefs?.get(i);if(c?.type==="texture2d"){const u=n.storageResources?.has(i);return`vec2<f32>(textureDimensions(${i}${u?"":", 0u"}))`}return c?.type==="buffer"?`vec2<f32>(f32(arrayLength(&${this.getBufferVar(i)}.data)), 0.0)`:"vec2<f32>(0.0, 0.0)"}if(t.op==="resource_get_format")return"0.0";if(t.op==="resource_is_bound")return`(b_inputs.tex_bound_${t.resource} > 0.5)`;if(t.op==="buffer_load"){const i=t.buffer,c=this.resolveArg(t,"index",r,n,a,"int",o),u=this.getBufferVar(i),d=n.resourceDefs?.get(i)?.dataType;return d&&(a.structs??[]).some(l=>l.id===d)?`${u}.data[u32(${c})]`:`${d?this.resolveType(d):"f32"}(${u}.data[u32(${c})])`}if(t.op==="atomic_load"){const i=t.counter,c=this.resolveArg(t,"index",r,n,a,"int",o);return`atomicLoad(&${this.getBufferVar(i)}.data[u32(${c})])`}if(t.op==="color_mix")return`color_mix_impl(${this.resolveArg(t,"a",r,n,a,"float4",o)}, ${this.resolveArg(t,"b",r,n,a,"float4",o)})`;if(t.op==="vec_swizzle"){const i=this.resolveArg(t,"vec",r,n,a,"any",o),c=t.channels;return`${i}.${c}`}if(t.op==="vec_get_element"||t.op==="array_extract"){const i=this.resolveArg(t,"vec"in t?"vec":"array",r,n,a,"any",o),c=this.resolveArg(t,"index",r,n,a,"int",o),u=t.vec||t.array;if(u){const m=r.inputs.find(h=>h.id===u),d=r.localVars.find(h=>h.id===u),p=(h,_)=>{const g=h?.get(_);return g&&g!=="any"?g:null};let l=(p(n.nodeTypes,u)||p(n.varTypes,u)||m?.type||d?.type||n.fullIr?.inputs?.find(h=>h.id===u)?.type||n.fullIr?.tuningParams?.find(h=>h.id===u)?.type||"").toLowerCase();if(!l||l==="any"){const h=r.nodes.find(_=>_.id===u);if(h){const _=h.op;_==="float3x3"||_==="mat_identity"&&h.size===3?l="mat3x3<f32>":(_==="float4x4"||_==="mat_inverse"||_==="mat_transpose"||_==="mat_identity"||_==="quat_to_mat4")&&(l="mat4x4<f32>")}}if(l==="float3x3"||l==="mat3x3<f32>")return`(${i})[u32(${c} / 3)][u32(${c} % 3)]`;if(l==="float4x4"||l==="mat4x4<f32>")return`(${i})[u32(${c} / 4)][u32(${c} % 4)]`}return`(${i})[u32(${c})]`}if(t.op==="vec_set_element"||t.op==="array_set"){const i=this.resolveArg(t,"vec"in t?"vec":"array",r,n,a,"any",o),c=this.resolveArg(t,"index",r,n,a,"int",o),u=this.resolveArg(t,"value",r,n,a,"any",o);return`${i}[u32(${c})] = ${u}`}if(t.op==="mat_extract"){const i=this.resolveArg(t,"mat",r,n,a,"any",o),c=this.resolveArg(t,"row",r,n,a,"int",o),u=this.resolveArg(t,"col",r,n,a,"int",o);return`${i}[u32(${u})][u32(${c})]`}if(t.op==="struct_extract"){const i=this.resolveArg(t,"struct",r,n,a,"any",o),c=t.member||t.name||t.field;return c?`${i}.${c}`:`${i}.undefined_member`}if(t.op==="prng_make"){if(t.seed!==void 0||o.some(u=>u.to===t.id&&u.portIn==="seed"&&u.type==="data"))return`_prng_hash(i32(${this.resolveArg(t,"seed",r,n,a,"float",o)}))`;const c=this.hashString(r.id);return n.stage==="compute"?`_prng_hash(i32(b_inputs.prng_seed * 2147483647.0) + ${c} + GlobalInvocationID.x + GlobalInvocationID.y * 65536)`:`_prng_hash(i32(b_inputs.prng_seed * 2147483647.0) + ${c})`}if(t.op==="builtin_get"){const i=t.name,c=n.nodeTypes?.get(t.id)||"float3";let u="gid";if(i==="global_invocation_id"?u="GlobalInvocationID":i==="local_invocation_id"?u="LocalInvocationID":i==="workgroup_id"?u="WorkgroupID":i==="local_invocation_index"?u="LocalInvocationIndex":i==="num_workgroups"?u="NumWorkgroups":i==="normalized_global_invocation_id"?u="NormalizedGlobalInvocationID":i==="frag_coord"?u="FragCoord":i==="front_facing"?u="FrontFacing":i==="position"?u="Position":i==="vertex_index"?u="VertexIndex":i==="instance_index"?u="InstanceIndex":i==="output_size"?u="b_inputs.output_size":["time","delta_time","bpm","beat_number","beat_delta","prng_seed"].includes(i)&&(u=`b_inputs.${i}`),c.startsWith("float")||c==="float"){const m=this.getComponentCount(c);return m===1?`f32(${u})`:`vec${m}<f32>(${u})`}if(c.startsWith("int")||c==="int"){const m=this.getComponentCount(c);return m===1?`i32(${u})`:`vec${m}<i32>(${u})`}return u}return this.isMathOp(t.op)?this.compileMath(t,r,n,a,o,s):"0.0"}isMathOp(t){return t.startsWith("math_")||t.startsWith("vec_")||t.startsWith("quat_")||t.startsWith("mat_")}compileMath(t,r,n,a,s,o="float"){const i=t.op,c=n.nodeTypes?.get(t.id)||"float",u=o==="bool"||o==="boolean",m=!u&&(c.startsWith("float")||c==="float"||c.includes("x")),d=u||c==="boolean"||c==="bool",p=_=>{const g=t[_];let y=(typeof g=="string"?n.nodeTypes?.get(g):null)||"float";if(y==="float2"&&(y="vec2<f32>"),y==="float3"&&(y="vec3<f32>"),y==="float4"&&(y="vec4<f32>"),y==="int2"&&(y="vec2<i32>"),y==="int3"&&(y="vec3<i32>"),y==="int4"&&(y="vec4<i32>"),y==="float"&&typeof g=="string"){const x=r.nodes.find($=>$.id===g);x&&(x.op==="float2"?y="vec2<f32>":x.op==="float3"?y="vec3<f32>":x.op==="float4"?y="vec4<f32>":x.op==="int2"?y="vec2<i32>":x.op==="int3"?y="vec3<i32>":x.op==="int4"&&(y="vec4<i32>"))}return Array.isArray(g)?`float${g.length}`:y},f=_=>{if(m){const g=this.getComponentCount(c),y=g>1?`vec${g}<f32>(0.0)`:"0.0",x=g>1?`vec${g}<f32>(1.0)`:"1.0";return`select(${y}, ${x}, ${_})`}return _},l=_=>{const g=this.resolveArg(t,_,r,n,a,"any",s),y=p(_);return m&&y==="int"?`f32(${g})`:m&&(y==="vec2<i32>"||y==="int2")?`vec2<f32>(${g})`:m&&(y==="vec3<i32>"||y==="int3")?`vec3<f32>(${g})`:m&&(y==="vec4<i32>"||y==="int4")?`vec4<f32>(${g})`:!m&&!d&&y==="float"?`i32(${g})`:g};if(i==="math_mix"||i==="vec_mix")return`mix(${l("a")}, ${l("b")}, ${l("t")})`;const h=(_,g)=>{const y=l(_),x=p(_),$=this.getComponentCount(x),D=this.getComponentCount(g);return $===1&&D>1?`vec${D}<f32>(${y})`:y};if(i==="math_pi")return"3.14159265";if(i==="math_e")return"2.71828183";if(i==="math_add"||i==="math_sub"||i==="math_div"||i==="math_mod"||i==="math_atan2"){const[_,g]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s);if(i==="math_add")return`(${_} + ${g})`;if(i==="math_sub")return`(${_} - ${g})`;if(i==="math_div"){const y=t.b;return typeof y=="number"&&y===0?"get_inf()":`(${_} / ${g})`}if(i==="math_mod")return`(${_} % ${g})`;if(i==="math_atan2")return`atan2(${_}, ${g})`}if(i==="math_mul"||i==="mat_mul"){const[_,g]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s);return`(${_} * ${g})`}if(i==="math_neg")return`(-${l("val")})`;if(i==="math_abs")return`abs(${l("val")})`;if(i==="math_sin")return`sin(${l("val")})`;if(i==="math_cos")return`cos(${l("val")})`;if(i==="math_tan")return`tan(${l("val")})`;if(i==="math_asin")return`asin(${l("val")})`;if(i==="math_acos")return`acos(${l("val")})`;if(i==="math_atan")return`atan(${l("val")})`;if(i==="math_asinh")return`asinh(${l("val")})`;if(i==="math_acosh")return`acosh(${l("val")})`;if(i==="math_atanh")return`atanh(${l("val")})`;if(i==="math_sinh")return`sinh(${l("val")})`;if(i==="math_cosh")return`cosh(${l("val")})`;if(i==="math_tanh")return`tanh(${l("val")})`;if(t.op==="math_sqrt"){const _=t.val;return typeof _=="number"&&_<0?"get_nan()":`sqrt(${l("val")})`}if(i==="math_exp")return`exp(${l("val")})`;if(i==="math_log"){const _=t.val;return typeof _=="number"&&_<=0?"get_neginf()":`log(${l("val")})`}if(i==="math_pow")return`pow(${l("a")}, ${l("b")})`;if(i==="math_trunc")return`trunc(${l("val")})`;if(i==="math_round")return`round(${l("val")})`;if(i==="math_floor")return`floor(${l("val")})`;if(i==="math_ceil")return`ceil(${l("val")})`;if(i==="math_fract")return`fract(${l("val")})`;if(i==="math_sign")return`sign(${l("val")})`;if(i==="math_min")return`min(${l("a")}, ${l("b")})`;if(i==="math_max")return`max(${l("a")}, ${l("b")})`;if(i==="math_mad"){const _=p("a"),g=p("b"),y=p("c"),x=Math.max(this.getComponentCount(_),this.getComponentCount(g),this.getComponentCount(y)),$=x>1?`vec${x}<f32>`:"float";return`fma(${h("a",$)}, ${h("b",$)}, ${h("c",$)})`}if(i==="math_clamp"){const _=p("val");return p("min"),p("max"),`clamp(${l("val")}, ${h("min",_)}, ${h("max",_)})`}if(i==="math_mix"||i==="vec_mix")return`mix(${l("a")}, ${l("b")}, ${l("t")})`;if(i==="math_step")return`step(${l("edge")}, ${l("x")})`;if(i==="math_smoothstep")return`smoothstep(${l("edge0")}, ${l("edge1")}, ${l("x")})`;if(i==="math_fract")return`fract(${l("val")})`;if(i==="math_trunc")return`trunc(${l("val")})`;if(i==="math_frexp_mantissa"||i==="math_mantissa")return`get_mantissa(${l("val")})`;if(i==="math_frexp_exponent"||i==="math_exponent")return`get_exponent(${l("val")})`;if(i==="math_ldexp")return`ldexp(f32(${this.resolveArg(t,"fract",r,n,a,"float",s)}), i32(${this.resolveArg(t,"exp",r,n,a,"int",s)}))`;if(i==="math_flush_subnormal")return`flush_subnormal(${l("val")})`;if(i==="math_is_nan"){let _=p("val");const g=l("val");return _==="float"&&(g.startsWith("vec")||g.startsWith("bitcast<vec"))&&(g.includes("vec2")&&(_="vec2<f32>"),g.includes("vec3")&&(_="vec3<f32>"),g.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?f(`is_nan_vec2(${g})`):_.startsWith("vec3")?f(`is_nan_vec3(${g})`):_.startsWith("vec4")?f(`is_nan_vec4(${g})`):f(`is_nan(${g})`)}if(i==="math_is_inf"){let _=p("val");const g=l("val");return _==="float"&&(g.startsWith("vec")||g.startsWith("bitcast<vec"))&&(g.includes("vec2")&&(_="vec2<f32>"),g.includes("vec3")&&(_="vec3<f32>"),g.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?f(`is_inf_vec2(${g})`):_.startsWith("vec3")?f(`is_inf_vec3(${g})`):_.startsWith("vec4")?f(`is_inf_vec4(${g})`):f(`is_inf(${g})`)}if(i==="math_is_finite"){let _=p("val");const g=l("val");return _==="float"&&(g.startsWith("vec")||g.startsWith("bitcast<vec"))&&(g.includes("vec2")&&(_="vec2<f32>"),g.includes("vec3")&&(_="vec3<f32>"),g.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?f(`is_finite_vec2(${g})`):_.startsWith("vec3")?f(`is_finite_vec3(${g})`):_.startsWith("vec4")?f(`is_finite_vec4(${g})`):f(`is_finite(${g})`)}if(i==="math_mix"||i==="vec_mix"){const _=p("t");return _==="bool"||_==="boolean"||_.includes("bool")?`select(${l("a")}, ${l("b")}, ${l("t")})`:`mix(${l("a")}, ${l("b")}, ${l("t")})`}return i==="math_gt"?f(`(${l("a")} > ${l("b")})`):i==="math_lt"?f(`(${l("a")} < ${l("b")})`):i==="math_ge"?f(`(${l("a")} >= ${l("b")})`):i==="math_le"?f(`(${l("a")} <= ${l("b")})`):i==="math_eq"?f(`(${l("a")} == ${l("b")})`):i==="math_neq"?f(`(${l("a")} != ${l("b")})`):i==="math_and"?`(${l("a")} && ${l("b")})`:i==="math_or"?`(${l("a")} || ${l("b")})`:i==="math_xor"?`(${l("a")} != ${l("b")})`:i==="math_not"?`(!${l("val")})`:i==="vec_dot"?`dot(${l("a")}, ${l("b")})`:i==="vec_cross"?`cross(${l("a")}, ${l("b")})`:i==="vec_length"?`length(${l("a")})`:i==="vec_normalize"?`normalize(${l("a")})`:i==="vec_distance"?`distance(${l("a")}, ${l("b")})`:i==="vec_reflect"?`reflect(${l("a")}, ${l("b")})`:i==="vec_refract"?`refract(${l("a")}, ${l("b")}, ${this.resolveArg(t,"eta",r,n,a,"float",s)})`:(console.warn(`[WgslGen] compileMath UNHANDLED: ${i}`),"0.0")}resolveType(t){if(t==="float")return"f32";if(t==="int")return"i32";if(t==="int2")return"vec2<i32>";if(t==="int3")return"vec3<i32>";if(t==="int4")return"vec4<i32>";if(t==="bool")return"bool";if(t==="float2")return"vec2<f32>";if(t==="float3")return"vec3<f32>";if(t==="float4")return"vec4<f32>";if(t==="float3x3")return"mat3x3<f32>";if(t==="float4x4")return"mat4x4<f32>";if(t==="prng")return"i32";if(t==="string")throw new Error("Shaders do not support string type");if(t==="texture2d")return"texture_2d<f32>";if(t==="sampler")return"sampler";if(t==="sampler_comparison")return"sampler_comparison";if(t.includes("[")||t.startsWith("array<")){const r=t.match(/(\w+)\[(\d*)\]/);if(r){const a=r[1],s=r[2];return s?`array<${this.resolveType(a)}, ${s}>`:`array<${this.resolveType(a)} > `}const n=t.match(/^array<(.+?)(?:,\s*(\d+))?>$/);if(n){const a=n[1],s=n[2];return s?`array<${this.resolveType(a)}, ${s}>`:`array<${this.resolveType(a)}>`}return t}return t}getComponentCount(t){if(t==="float2"||t==="vec2<f32>"||t==="int2"||t==="vec2<i32>")return 2;if(t==="float3"||t==="vec3<f32>"||t==="int3"||t==="vec3<i32>")return 3;if(t==="float4"||t==="vec4<f32>"||t==="quat"||t==="int4"||t==="vec4<i32>")return 4;if(t==="float3x3"||t==="mat3x3<f32>")return 9;if(t==="float4x4"||t==="mat4x4<f32>")return 16;if(t.startsWith("array<")){const r=t.match(/,\s*(\d+)>/);if(r)return parseInt(r[1])}return 1}resolveCoercedArgs(t,r,n,a,s,o,i){const c=r.map(p=>this.resolveArg(t,p,a,s,o,"any",i));if(!s.nodeTypes)return c;const u=p=>{const f=i.find(_=>_.to===t.id&&_.portIn===p);let l;if(f?l=f.from:l=t[p],typeof l=="number")return Number.isInteger(l)?"int":"float";if(typeof l=="boolean")return"bool";let h;if(typeof l=="string"){if(s.varMap){const _=a.nodes.find(g=>g.id===l);if(_&&_.op==="var_get"){const g=_.var;if(s.varMap.has(g))return s.varTypes?.get(g)||"float"}}if(h=s.nodeTypes?.get(l),!h){const _=a.inputs.find(g=>g.id===l);_&&(h=_.type)}if(!h){const _=a.localVars.find(g=>g.id===l);_&&(h=_.type)}if(!h){const _=o.inputs?.find(g=>g.id===l)??o.tuningParams?.find(g=>g.id===l);_&&(h=_.type)}if(!h){const _=a.nodes.find(g=>g.id===l);_&&(_.op==="loop_index"&&(h="int"),_.op==="array_length"&&(h="int"),_.op==="resource_get_format"&&(h="int"))}if(h==="float"){const _=["math_add","math_sub","math_mul","math_div","math_mod"],g=a.nodes.find(y=>y.id===l);if(g&&_.includes(g.op)){const y=D=>{const z=i.find(b=>b.to===g.id&&b.portIn===D),w=z?z.from:g[D];if(typeof w=="number")return Number.isInteger(w)?"int":"float";if(typeof w=="string"){const b=s.nodeTypes?.get(w);if(b)return b;const T=a.inputs.find(B=>B.id===w);if(T)return T.type;const S=a.localVars.find(B=>B.id===w);if(S)return S.type;const E=o.inputs?.find(B=>B.id===w)??o.tuningParams?.find(B=>B.id===w);if(E)return E.type;const A=a.nodes.find(B=>B.id===w);if(A&&(A.op==="loop_index"||A.op==="array_length"))return"int"}return"float"},x=y("a"),$=y("b");(x==="int"||x==="i32")&&($==="int"||$==="i32")&&(h="int")}}}return h||"float"},m=r.map(u);let d=c;return n==="float"?d=c.map((p,f)=>{const l=m[f];return l==="int"||l==="i32"||l==="bool"?`f32(${p})`:l==="int2"||l==="vec2<i32>"?`vec2<f32>(${p})`:l==="int3"||l==="vec3<i32>"?`vec3<f32>(${p})`:l==="int4"||l==="vec4<i32>"?`vec4<f32>(${p})`:p}):n==="unify"&&m.some(f=>f.includes("float")||f.includes("f32")||f.includes("mat"))&&(d=c.map((f,l)=>{const h=m[l];return h==="int"||h==="i32"||h==="bool"?`f32(${f})`:h==="int2"||h==="vec2<i32>"?`vec2<f32>(${f})`:h==="int3"||h==="vec3<i32>"?`vec3<f32>(${f})`:h==="int4"||h==="vec4<i32>"?`vec4<f32>(${f})`:f})),d}detectComponentGroups(t,r){const n=["x","y","z","w"],a=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],s=[];for(const o of a)t[o]!==void 0&&o.length>1&&s.push({key:o,startIdx:n.indexOf(o[0]),count:o.length});if(s.length===0)return null;for(let o=0;o<r;o++){const i=n[o];t[i]!==void 0&&!s.some(c=>c.startIdx<=o&&o<c.startIdx+c.count)&&s.push({key:i,startIdx:o,count:1})}return s.sort((o,i)=>o.startIdx-i.startIdx),s}formatLiteral(t,r){if(typeof t=="number"){if(r==="int"||r==="i32")return Math.floor(t).toString();const n=t.toString();return r==="float"||r==="f32"||r.startsWith("vec")||r.startsWith("mat")?n.toLowerCase().includes("e")||n.includes(".")?n:n+".0":n}if(typeof t=="boolean")return t.toString();if(Array.isArray(t)){r.replace("float","f32").replace("int","i32");const n=t.map(a=>this.formatLiteral(a,"float"));return t.length===2?`vec2<f32>(${n.join(", ")})`:t.length===3?`vec3<f32>(${n.join(", ")})`:t.length===4?`vec4<f32>(${n.join(", ")})`:t.length===9?`mat3x3<f32>(${n.join(", ")})`:t.length===16?`mat4x4<f32>(${n.join(", ")})`:`array<f32, ${t.length}>(${n.join(", ")})`}return"0.0"}formatZero(t){const r=this.resolveType(t);return r==="f32"?"0.0":r==="i32"?"0":r==="bool"?"false":r==="vec2<i32>"?"vec2<i32>(0)":r==="vec3<i32>"?"vec3<i32>(0)":r==="vec4<i32>"?"vec4<i32>(0)":r.startsWith("vec")?`${r}(0.0)`:r.startsWith("mat")?`${r}()`:`${r}()`}hashString(t){let r=0;for(let n=0;n<t.length;n++)r=Math.imul(r,31)+t.charCodeAt(n)|0;return r}static findUsedResources(t,r){const n=new Set,a=Array.isArray(r)?r:[...r.resources||[],...r.inputs,...r.tuningParams||[]],s=new Set(a.map(o=>o.id));return t.nodes.forEach(o=>{const i=Rt[o.op];if(i){for(const[c,u]of Object.entries(i.args))if(u.refType==="resource"){let m=o[c];m===void 0&&o.args&&(m=o.args[c]),typeof m=="string"&&s.has(m)&&n.add(m)}}}),n}wrapCast(t,r,n){if(r===n||r==="any"||n==="any")return t;const a=this.getComponentCount(r),s=this.getComponentCount(n);return n==="float"?`f32(${t})`:n==="int"?`i32(${t})`:n==="bool"||n==="boolean"?`bool(${t})`:n.startsWith("float")&&s>1&&!n.includes("x")?a===1?`vec${s}<f32>(${t})`:`vec${s}<f32>(${t})`:n==="int2"||n==="vec2<i32>"?`vec2<i32>(${t})`:n==="int3"||n==="vec3<i32>"?`vec3<i32>(${t})`:n==="int4"||n==="vec4<i32>"?`vec4<i32>(${t})`:t}validateRecursion(t){const r=new Map;for(const o of t){const i=o.nodes.filter(c=>c.op==="call_func").map(c=>c.func);r.set(o.id,i)}const n=new Set,a=new Set,s=(o,i)=>{n.add(o),a.add(o),i.push(o);const c=r.get(o)||[];for(const u of c)if(!n.has(u))s(u,i);else if(a.has(u))throw new Error(`Recursion detected|cyclic dependency: ${i.join(" -> ")} -> ${u}`);a.delete(o),i.pop()};for(const o of t)n.has(o.id)||s(o.id,[])}static resolveImports(t){let r=t.code;for(const[n,a]of Object.entries(t.imports))r=r.replace(n,a);return r}}function or(e,t){const r=new Yr(t),n={workgroupSize:e.workgroupSize,inputBinding:e.inputBinding,resourceBindings:Array.from(e.resourceBindings.entries()).map(([a,s])=>{const o=e.resourceTypes.get(a)||"buffer";return{id:a,binding:s,type:o}})};return e.inputLayout&&(n.inputLayout=Bc(e.inputLayout,r)),n}function Bc(e,t){const r={totalSize:e.totalSize,hasRuntimeArray:e.hasRuntimeArray,ops:[]};for(const n of e.fields)if(t.isRuntimeArray(n.type)){let a="float";const s=n.type.toLowerCase();s.includes("array<")?a=s.split("<")[1].split(",")[0].trim():a=s.split("[")[0].trim();const o=t.getSize(a,"std430"),i=t.getAlignment(a,"std430"),c=Math.ceil(o/i)*i;r.runtimeArray={name:n.name,offset:n.offset,stride:c,elementType:a,elementOp:ee(0,a,[],t)}}else r.ops.push(ee(n.offset,n.type,[n.name],t));return r}function ee(e,t,r,n){const a=t.toLowerCase();if(["f32","float"].includes(a))return{op:"f32",offset:e,path:r};if(["i32","int"].includes(a))return{op:"i32",offset:e,path:r};if(["u32"].includes(a))return{op:"u32",offset:e,path:r};if(["bool"].includes(a))return{op:"u32",offset:e,path:r};if(a.startsWith("vec")||a.startsWith("float")&&!a.includes("x")&&!a.includes("[")||a.startsWith("int")&&a.length<=4){const o=n.getComponentCount(a),i=a.includes("u32")?"u32":a.includes("int")||a.includes("i32")?"i32":"f32";return{op:"vec",offset:e,path:r,size:o,elementType:i}}if(a.includes("mat")||a.includes("x")){const o=a.includes("3x3")||a.includes("3")?3:4;return{op:"mat",offset:e,path:r,dim:o}}if(a.includes("[")||a.startsWith("array<")){let o="float",i=0;if(a.startsWith("array<")){const d=a.substring(6,a.length-1).split(",");o=d[0].trim(),i=d.length>1?parseInt(d[1].trim()):0}else{const d=a.split("[");o=d[0].trim(),i=parseInt(d[1].split("]")[0])||0}const c=n.getSize(o,"std430"),u=n.getAlignment(o,"std430"),m=Math.ceil(c/u)*u;return{op:"array",offset:e,path:r,length:i,stride:m,elementType:o,elementOp:ee(0,o,[],n)}}const s=n.getStructLayout(t,"std430");return{op:"struct",offset:e,path:r,members:s.members.map(o=>ee(o.offset,o.type,[o.name],n))}}function Hr(e,t){switch(e){case"float":case"int":case"bool":return 1;case"float2":case"int2":return 2;case"float3":case"int3":return 3;case"float4":case"int4":return 4;case"float3x3":return 9;case"float4x4":return 16;default:{const r=t?.find(n=>n.id===e);return r?r.members.reduce((n,a)=>n+Hr(a.type,t),0):1}}}function sr(e,t){if(e.type==="texture2d"){const r=e.format||"rgba8";let n="rgba8unorm",a="Uint8Array",s=4;return r==="r32f"?(n="r32float",a="Float32Array",s=1):r==="rgba32f"?(n="rgba32float",a="Float32Array",s=4):r==="rgba16f"?(n="rgba16float",a="Float32Array",s=4):r==="r16f"?(n="r16float",a="Float32Array",s=1):r==="r8"&&(n="r8unorm",a="Uint8Array",s=1),{type:"texture2d",componentCount:s,typedArray:a,format:n}}else{const r=e.dataType||"float",n=r.toLowerCase();let a="Float32Array",s=!1,o=1;return t?.find(c=>c.id===r)?o=Hr(r,t):(n.includes("int")&&!n.includes("float")&&(s=!0,n==="bool"?a="Uint32Array":a="Int32Array"),n.includes("2")?o=2:n.includes("3")?o=3:n.includes("4")?o=4:n.includes("mat")&&(n.includes("3x3")?o=9:n.includes("4x4")&&(o=16))),{type:"buffer",componentCount:o,typedArray:a,isInteger:s}}}const Ee=(e,t)=>{const r=["float","float2","float3","float4","int","int2","int3","int4"],n=[];return r.forEach(a=>{let s=a;t==="boolean_vec"&&(s=a==="float"?"boolean":a),n.push({inputs:{a,b:a},output:s})}),t==="same"&&["float2","float3","float4"].forEach(a=>{const s=a;n.push({inputs:{a:s,b:"float"},output:s}),n.push({inputs:{a:"float",b:s},output:s})}),n},Gt=(e,t)=>["float","float2","float3","float4","int","int2","int3","int4"].map(n=>{let a=n;return t==="boolean_vec"&&(a=n==="float"?"boolean":n),{inputs:{val:n},output:a}}),Mc=["math_add","math_sub","math_mul","math_div","math_mod","math_pow","math_min","math_max"],Rc=["math_gt","math_lt","math_ge","math_le","math_eq","math_neq"],Pc=["math_sin","math_cos","math_tan","math_asin","math_acos","math_atan","math_sinh","math_cosh","math_tanh","math_sign","math_exp","math_log","math_sqrt","math_abs","math_ceil","math_floor","math_round","math_fract","math_trunc","math_flush_subnormal","math_mantissa","math_exponent","math_frexp_mantissa","math_frexp_exponent"],ie={math_div_scalar:[{inputs:{val:"float",scalar:"float"},output:"float"},{inputs:{val:"float2",scalar:"float"},output:"float2"},{inputs:{val:"float3",scalar:"float"},output:"float3"},{inputs:{val:"float4",scalar:"float"},output:"float4"}],math_ldexp:[{inputs:{fract:"float",exp:"int"},output:"float"},{inputs:{fract:"float2",exp:"int"},output:"float2"},{inputs:{fract:"float3",exp:"int"},output:"float3"},{inputs:{fract:"float4",exp:"int"},output:"float4"},{inputs:{fract:"float2",exp:"float2"},output:"float2"},{inputs:{fract:"float3",exp:"float3"},output:"float3"},{inputs:{fract:"float4",exp:"float4"},output:"float4"}]};Mc.forEach(e=>ie[e]=Ee(e,"same"));Rc.forEach(e=>ie[e]=Ee(e,"boolean_vec"));Pc.forEach(e=>ie[e]=Gt(e,"same"));const Zc={...ie,math_mad:[{inputs:{a:"float",b:"float",c:"float"},output:"float"},{inputs:{a:"float2",b:"float2",c:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",c:"float3"},output:"float3"},{inputs:{a:"float3",b:"float3",c:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",c:"float4"},output:"float4"},{inputs:{a:"float2",b:"float",c:"float"},output:"float2"},{inputs:{a:"float3",b:"float",c:"float"},output:"float3"},{inputs:{a:"float4",b:"float",c:"float"},output:"float4"}],math_clamp:[{inputs:{val:"float",min:"float",max:"float"},output:"float"},{inputs:{val:"float2",min:"float2",max:"float2"},output:"float2"},{inputs:{val:"float3",min:"float3",max:"float3"},output:"float3"},{inputs:{val:"float4",min:"float4",max:"float4"},output:"float4"},{inputs:{val:"float2",min:"float",max:"float"},output:"float2"},{inputs:{val:"float3",min:"float",max:"float"},output:"float3"},{inputs:{val:"float4",min:"float",max:"float"},output:"float4"}],math_is_nan:Gt("math_is_nan","boolean_vec"),math_is_inf:Gt("math_is_inf","boolean_vec"),math_is_finite:Gt("math_is_finite","boolean_vec"),math_atan2:Ee("math_atan2","same"),math_and:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_or:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_xor:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_not:[{inputs:{val:"boolean"},output:"boolean"}],static_cast_int:[{inputs:{val:"float"},output:"int"},{inputs:{val:"boolean"},output:"int"}],static_cast_float:[{inputs:{val:"int"},output:"float"},{inputs:{val:"boolean"},output:"float"}],static_cast_bool:[{inputs:{val:"int"},output:"boolean"},{inputs:{val:"float"},output:"boolean"}],static_cast_int2:[{inputs:{val:"float2"},output:"int2"}],static_cast_int3:[{inputs:{val:"float3"},output:"int3"}],static_cast_int4:[{inputs:{val:"float4"},output:"int4"}],static_cast_float2:[{inputs:{val:"float2"},output:"float2"},{inputs:{val:"int2"},output:"float2"}],static_cast_float3:[{inputs:{val:"float3"},output:"float3"},{inputs:{val:"int3"},output:"float3"}],static_cast_float4:[{inputs:{val:"float4"},output:"float4"},{inputs:{val:"int4"},output:"float4"}],float:[{inputs:{val:"float"},output:"float"}],int:[{inputs:{val:"int"},output:"int"}],bool:[{inputs:{val:"boolean"},output:"boolean"}],float2:[{inputs:{x:"float",y:"float"},output:"float2"},{inputs:{"*":"any"},output:"float2"}],float3:[{inputs:{x:"float",y:"float",z:"float"},output:"float3"},{inputs:{"*":"any"},output:"float3"}],float4:[{inputs:{x:"float",y:"float",z:"float",w:"float"},output:"float4"},{inputs:{"*":"any"},output:"float4"}],int2:[{inputs:{x:"int",y:"int"},output:"int2"},{inputs:{"*":"any"},output:"int2"}],int3:[{inputs:{x:"int",y:"int",z:"int"},output:"int3"},{inputs:{"*":"any"},output:"int3"}],int4:[{inputs:{x:"int",y:"int",z:"int",w:"int"},output:"int4"},{inputs:{"*":"any"},output:"int4"}],vec_get_element:[{inputs:{vec:"float2",index:"int"},output:"float"},{inputs:{vec:"float3",index:"int"},output:"float"},{inputs:{vec:"float4",index:"int"},output:"float"},{inputs:{vec:"int2",index:"int"},output:"int"},{inputs:{vec:"int3",index:"int"},output:"int"},{inputs:{vec:"int4",index:"int"},output:"int"},{inputs:{vec:"float3x3",index:"int"},output:"float"},{inputs:{vec:"float4x4",index:"int"},output:"float"}],vec_set_element:[{inputs:{vec:"float2",index:"int",value:"float"},output:"any"},{inputs:{vec:"float3",index:"int",value:"float"},output:"any"},{inputs:{vec:"float4",index:"int",value:"float"},output:"any"},{inputs:{vec:"int2",index:"int",value:"int"},output:"any"},{inputs:{vec:"int3",index:"int",value:"int"},output:"any"},{inputs:{vec:"int4",index:"int",value:"int"},output:"any"},{inputs:{vec:"float3x3",index:"int",value:"float"},output:"any"},{inputs:{vec:"float4x4",index:"int",value:"float"},output:"any"}],vec_swizzle:[{inputs:{vec:"float2",channels:"string"},output:"any"},{inputs:{vec:"float3",channels:"string"},output:"any"},{inputs:{vec:"float4",channels:"string"},output:"any"},{inputs:{vec:"int2",channels:"string"},output:"any"},{inputs:{vec:"int3",channels:"string"},output:"any"},{inputs:{vec:"int4",channels:"string"},output:"any"}],vec_dot:[{inputs:{a:"float2",b:"float2"},output:"float"},{inputs:{a:"float3",b:"float3"},output:"float"},{inputs:{a:"float4",b:"float4"},output:"float"},{inputs:{a:"int2",b:"int2"},output:"int"},{inputs:{a:"int3",b:"int3"},output:"int"},{inputs:{a:"int4",b:"int4"},output:"int"}],vec_mix:[{inputs:{a:"float2",b:"float2",t:"float"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float2",b:"float2",t:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float4"},output:"float4"}],vec_length:[{inputs:{a:"float2"},output:"float"},{inputs:{a:"float3"},output:"float"},{inputs:{a:"float4"},output:"float"}],vec_normalize:[{inputs:{a:"float2"},output:"float2"},{inputs:{a:"float3"},output:"float3"},{inputs:{a:"float4"},output:"float4"}],literal:[{inputs:{val:"any"},output:"any"},{inputs:{val:"any",type:"string"},output:"any"}],mat_identity:[{inputs:{size:"int"},output:"float4x4"}],float4x4:[{inputs:{"*":"any"},output:"float4x4"}],float3x3:[{inputs:{"*":"any"},output:"float3x3"}],mat_transpose:[{inputs:{val:"any"},output:"any"}],mat_inverse:[{inputs:{val:"any"},output:"any"}],mat_extract:[{inputs:{mat:"any",col:"int",row:"int"},output:"float"}],mat_mul:[{inputs:{a:"float4x4",b:"float4x4"},output:"float4x4"},{inputs:{a:"float3x3",b:"float3x3"},output:"float3x3"},{inputs:{a:"float4x4",b:"float4"},output:"float4"},{inputs:{a:"float3x3",b:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4x4"},output:"float4"},{inputs:{a:"float3",b:"float3x3"},output:"float3"}],math_step:[{inputs:{edge:"float",x:"float"},output:"float"},{inputs:{edge:"float2",x:"float2"},output:"float2"},{inputs:{edge:"float3",x:"float3"},output:"float3"},{inputs:{edge:"float4",x:"float4"},output:"float4"},{inputs:{edge:"float",x:"float2"},output:"float2"},{inputs:{edge:"float",x:"float3"},output:"float3"},{inputs:{edge:"float",x:"float4"},output:"float4"}],math_smoothstep:[{inputs:{edge0:"float",edge1:"float",x:"float"},output:"float"},{inputs:{edge0:"float2",edge1:"float2",x:"float2"},output:"float2"},{inputs:{edge0:"float3",edge1:"float3",x:"float3"},output:"float3"},{inputs:{edge0:"float4",edge1:"float4",x:"float4"},output:"float4"},{inputs:{edge0:"float",edge1:"float",x:"float2"},output:"float2"},{inputs:{edge0:"float",edge1:"float",x:"float3"},output:"float3"},{inputs:{edge0:"float",edge1:"float",x:"float4"},output:"float4"}],math_mix:[{inputs:{a:"float",b:"float",t:"float"},output:"float"},{inputs:{a:"float2",b:"float2",t:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float4"},output:"float4"},{inputs:{a:"float2",b:"float2",t:"float"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float",b:"float",t:"boolean"},output:"float"},{inputs:{a:"float2",b:"float2",t:"boolean"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"boolean"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"boolean"},output:"float4"}],color_mix:[{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float4",b:"float4"},output:"float4"}],math_pi:[{inputs:{},output:"float"}],math_e:[{inputs:{},output:"float"}],comment:[{inputs:{},output:"any"}],quat:[{inputs:{axis:"float3",angle:"float"},output:"float4"},{inputs:{x:"float",y:"float",z:"float",w:"float"},output:"float4"}],quat_identity:[{inputs:{},output:"float4"}],quat_mul:[{inputs:{a:"float4",b:"float4"},output:"float4"}],quat_slerp:[{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"}],quat_rotate:[{inputs:{v:"float3",q:"float4"},output:"float3"}],quat_to_float4x4:[{inputs:{q:"float4"},output:"float4x4"}],struct_extract:[{inputs:{struct:"struct",field:"string"},output:"any"}],const_get:[{inputs:{name:"string"},output:"float"}],buffer_load:[{inputs:{buffer:"string",index:"int"},output:"any"}],buffer_store:[{inputs:{buffer:"string",index:"int",value:"any"},output:"any"}],var_set:[{inputs:{var:"string",val:"any"},output:"any"}],var_get:[{inputs:{var:"string"},output:"any"}],loop_index:[{inputs:{loop:"string"},output:"int"}],builtin_get:Object.entries(Jr).map(([e,t])=>({inputs:{name:"string"},output:t})),struct_construct:[{inputs:{type:"string",values:"any"},output:"any"},{inputs:{type:"string","*":"any"},output:"any"},{inputs:{type:"string"},output:"any"}],array_construct:[{inputs:{values:"array"},output:"any"},{inputs:{values:"array",type:"string"},output:"any"},{inputs:{type:"string",length:"int",fill:"any"},output:"any"},{inputs:{type:"string",values:"array"},output:"any"},{inputs:{"*":"any"},output:"any"}],array_set:[{inputs:{array:"any",index:"int",value:"any"},output:"any"}],array_extract:[{inputs:{array:"any",index:"int"},output:"any"}],array_length:[{inputs:{array:"any"},output:"int"}],call_func:[{inputs:{func:"string"},output:"any"},{inputs:{func:"string",args:"any"},output:"any"},{inputs:{func:"string","*":"any"},output:"any"}],func_return:[{inputs:{val:"any"},output:"any"},{inputs:{},output:"any"}],flow_branch:[{inputs:{cond:"boolean"},output:"any"}],flow_loop:[{inputs:{start:"int",end:"int"},output:"any"},{inputs:{count:"int"},output:"any"}],resource_get_size:[{inputs:{resource:"string"},output:"float2"}],resource_get_format:[{inputs:{resource:"string"},output:"int"}],resource_is_bound:[{inputs:{resource:"string"},output:"boolean"}],texture_sample:[{inputs:{tex:"string",coords:"float2"},output:"float4"}],texture_load:[{inputs:{tex:"string",coords:"float2"},output:"float4"}],texture_store:[{inputs:{tex:"string",coords:"float2",value:"float4"},output:"any"}],cmd_dispatch:[{inputs:{func:"string"},output:"any"},{inputs:{func:"string",threads:"float3"},output:"any"},{inputs:{func:"string",threads:"int"},output:"any"},{inputs:{func:"string",threads:"any",args:"any"},output:"any"},{inputs:{func:"string",args:"any"},output:"any"},{inputs:{func:"string","*":"any"},output:"any"}],cmd_resize_resource:[{inputs:{resource:"string",size:"any"},output:"any"},{inputs:{resource:"string",size:"any",clear:"any"},output:"any"}],cmd_draw:[{inputs:{target:"string",vertex:"string",fragment:"string",count:"int",pipeline:"any"},output:"any"},{inputs:{target:"string",vertex:"string",fragment:"string",count:"int"},output:"any"}],cmd_sync_to_cpu:[{inputs:{resource:"string"},output:"any"}],cmd_wait_cpu_sync:[{inputs:{resource:"string"},output:"any"}],cmd_copy_buffer:[{inputs:{src:"string",dst:"string"},output:"any"},{inputs:{src:"string",dst:"string",src_offset:"int",dst_offset:"int",count:"int"},output:"any"},{inputs:{src:"string",dst:"string","*":"any"},output:"any"}],cmd_copy_texture:[{inputs:{src:"string",dst:"string"},output:"any"},{inputs:{src:"string",dst:"string",src_rect:"float4",dst_rect:"float4",sample:"string",alpha:"float",normalized:"boolean"},output:"any"},{inputs:{src:"string",dst:"string","*":"any"},output:"any"}],atomic_load:[{inputs:{counter:"string",index:"int"},output:"int"}],atomic_store:[{inputs:{counter:"string",index:"int",value:"int"},output:"any"}],atomic_add:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_sub:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_min:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_max:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_exchange:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],prng_make:[{inputs:{seed:"float"},output:"any"},{inputs:{seed:"int"},output:"any"},{inputs:{},output:"any"}],prng_next:[{inputs:{prng:"string"},output:"any"},{inputs:{prng:"string",type:"string"},output:"any"},{inputs:{prng:"string",type:"string",min:"float",max:"float"},output:"any"}]},fe=(e,t)=>Xr(e,t).inferredTypes,Xr=(e,t)=>{const r=new Set([...(t.resources||[]).map(c=>c.id),...(t.inputs||[]).map(c=>c.id),...(t.tuningParams||[]).map(c=>c.id)]),n=new Map,a=new Set,s=[],o=ke(e,t);e.nodes.forEach(c=>{Lt(c.id,e,t,n,r,s,o,a)});const i=new Set;for(const c of e.nodes)c.op==="resource_get_size"&&typeof c.resource=="string"&&i.add(c.resource);return{inferredTypes:n,usedBuiltins:a,usedResourceSizes:i}},ir=(e,t,r,n,a)=>{const s=["x","y","z","w","r","g","b","a"],o=e==="int2"||e==="int3"||e==="int4";if(!o&&!(e==="float2"||e==="float3"||e==="float4"))return a.push({nodeId:r,functionId:n,message:`Cannot swizzle non-vector type '${e}'`,severity:"error"}),"any";let c=0;if(e==="float2"||e==="int2"?c=2:e==="float3"||e==="int3"?c=3:(e==="float4"||e==="int4")&&(c=4),t.length<1||t.length>4)return a.push({nodeId:r,functionId:n,message:`Invalid swizzle mask length '${t}'`,severity:"error"}),"any";for(const d of t){const p=s.indexOf(d);if(p===-1)return a.push({nodeId:r,functionId:n,message:`Invalid swizzle component '${d}'`,severity:"error"}),"any";if(p%4>=c)return a.push({nodeId:r,functionId:n,message:`Swizzle component '${d}' out of bounds for ${e}`,severity:"error"}),"any"}const u=o?"int":"float",m=o?"int":"float";return t.length===1?u:`${m}${t.length}`},Lt=(e,t,r,n,a,s,o,i=new Set)=>{const c=t.id;if(n.has(e))return n.get(e);const u=t.nodes.find(z=>z.id===e);if(!u)return"any";n.set(e,"any");const m=Zc[u.op];if(!m)return s.push({nodeId:e,functionId:c,message:`Unknown op '${u.op}'`,severity:"error"}),n.set(e,"any"),"any";const d={};o.filter(z=>z.to===e&&z.type==="data").forEach(z=>{let w=Lt(z.from,t,r,n,a,s,o,i);const b=z.portIn,T=u[b];if(typeof T=="string"&&T.includes(".")){const S=T.indexOf("."),E=T.substring(S+1);if(E.length>0){if(w==="any"){const A=T.substring(0,S),B=t.localVars?.find(C=>C.id===A),j=t.inputs?.find(C=>C.id===A),k=r.inputs?.find(C=>C.id===A)??r.tuningParams?.find(C=>C.id===A);B?w=B.type:j?w=j.type:k&&(w=k.type)}w=ir(w,E,e,c,s)}}b.startsWith("args.")?d[b.substring(5)]=w:b.startsWith("values.")?d[b.substring(7)]=w:b.startsWith("values[")?d.values="array":d[b]=w});const f=new Set(["id","op","metadata","exec_in","exec_out","exec_true","exec_false","exec_body","exec_completed","_next","next","args","values","comment","id_var","id_val"]),l=(z,w)=>{if(!d[z]&&w!==void 0){if(Array.isArray(w))w.length===2?d[z]="float2":w.length===3?d[z]="float3":w.length===4?d[z]="float4":w.length===9?d[z]="float3x3":w.length===16?d[z]="float4x4":d[z]="array";else if(typeof w=="number")d[z]="float";else if(typeof w=="boolean")d[z]="boolean";else if(typeof w=="string"){const T=Rt[u.op]?.args[z]?.isIdentifier??!1;let S=w,E;const A=w.indexOf(".");A!==-1&&!T&&(S=w.substring(0,A),E=w.substring(A+1));const B=t.nodes.find(J=>J.id===S),j=t.inputs.find(J=>J.id===S),k=t.localVars.find(J=>J.id===S),C=r.inputs?.find(J=>J.id===S)??r.tuningParams?.find(J=>J.id===S);let M;if(B&&!T?(B.op==="comment"&&s.push({nodeId:e,functionId:c,message:`Node '${e}' cannot reference comment node '${S}'`,severity:"error"}),M=Lt(S,t,r,n,a,s,o)):j&&!T?M=j.type:k&&!T?M=k.type:C&&!T&&(M=C.type),M!==void 0)if(E){const J=ir(M,E,e,c,s);d[z]=J}else d[z]=M;else d[z]="string"}}};Object.keys(u).forEach(z=>{f.has(z)||l(z,u[z])}),u.args&&typeof u.args=="object"&&!Array.isArray(u.args)&&Object.entries(u.args).forEach(([z,w])=>l(z,w)),u.values&&typeof u.values=="object"&&(Array.isArray(u.values)?d.values="array":Object.entries(u.values).forEach(([z,w])=>l(z,w)));const h=Ic[u.op];if(h){const z={};Object.keys(u).forEach(b=>{f.has(b)||(z[b]=u[b])});const w=h.partial().safeParse(z);w.success||w.error.issues.forEach(b=>{s.push({nodeId:e,functionId:c,message:`Schema Error in '${u.op}': ${b.path.join(".")}: ${b.message}`,severity:"error"})})}let _;const g=(z,w)=>{let b=!0;const T="*"in z.inputs;for(const[S,E]of Object.entries(z.inputs)){if(S==="*")continue;let A=d[S];if(A==="bool"&&(A="boolean"),E==="struct"&&A!=="any"&&r.structs?.some(j=>j.id===A)&&(A="struct"),!A){b=!1;break}if(E!=="any"&&A!=="any"&&E!==A){if(E==="float"&&A==="int"||E==="int"&&A==="float"||w&&(E==="float2"&&A==="int2"||E==="int2"&&A==="float2"||E==="float3"&&A==="int3"||E==="int3"&&A==="float3"||E==="float4"&&A==="int4"||E==="int4"&&A==="float4"))continue;b=!1;break}}return b?!(Object.keys(d).filter(E=>!(E in z.inputs)&&!T).length>0):!1};for(const z of m)if(g(z,!1)){_=z;break}if(!_){for(const z of m)if(g(z,!0)){_=z;break}}if(_&&new Set(["math_add","math_sub","math_mul","math_div","math_mod","math_pow","math_min","math_max","math_atan2","math_gt","math_lt","math_ge","math_le","math_eq","math_neq"]).has(u.op)){const z=d.a,w=d.b;if(z&&w&&z!=="any"&&w!=="any"){const b=S=>/^int[234]$/.test(S),T=S=>/^float[234]$/.test(S);if(b(z)&&T(w)||T(z)&&b(w)){const S=z.replace(/^(float|int)/,"");s.push({nodeId:e,functionId:c,message:`Type mismatch in '${u.op}': cannot implicitly convert between '${z}' and '${w}'. Use static_cast_float${S} or static_cast_int${S}.`,severity:"error"})}}}if(_){if(u.op==="var_set"&&d.val&&d.val!=="any")return n.set(e,d.val),d.val;if(u.op==="builtin_get"){const b=u.name;i.add(b);const T=Jr[b];if(T)return n.set(e,T),T}if(u.op==="literal"){const b=u.type;if(b){if(["float","int","boolean","bool","float2","float3","float4","int2","int3","int4","float3x3","float4x4"].includes(b)){const E=b==="bool"?"boolean":b;return n.set(e,E),E}s.push({nodeId:e,functionId:c,message:`Invalid explicit type '${b}' on literal node`,severity:"error"})}const T=u.val;if(typeof T=="number")return n.set(e,"float"),"float";if(typeof T=="boolean")return n.set(e,"boolean"),"boolean"}if(u.op==="mat_identity"){const T=u.size===3?"float3x3":"float4x4";return n.set(e,T),T}if(u.op==="mat_transpose"||u.op==="mat_inverse"){const b=d.val;if(b&&b!=="any")return n.set(e,b),b}if(u.op==="struct_construct"){const b=u.type;if(b)return n.set(e,b),b}if(u.op==="array_construct"){let b=u.type;if(!b){const A=d.fill;if(A&&A!=="any")b=A;else if(Array.isArray(u.values)&&u.values.length>0){const B=u.values[0];typeof B=="string"&&t.nodes.some(j=>j.id===B)?b=Lt(B,t,r,n,a,s,o):typeof B=="number"?b="float":typeof B=="boolean"&&(b="boolean")}}b||(b="float");let T=0;Array.isArray(u.values)?T=u.values.length:typeof u.length=="number"&&(T=u.length);let S=b;b==="float"?S="float":b==="int"?S="int":(b==="bool"||b==="boolean")&&(S="bool");const E=`array<${S}, ${T}>`;return n.set(e,E),E}if(u.op==="var_get"){const b=u.var,T=t.localVars.find(j=>j.id===b),S=r.inputs?.find(j=>j.id===b)??r.tuningParams?.find(j=>j.id===b),E=t.inputs.find(j=>j.id===b),B=T?.type||E?.type||S?.type||"float";return n.set(e,B),B}if(u.op==="buffer_load"){const b=u.buffer,S=r.resources?.find(A=>A.id===b)?.dataType||"float";let E=S;return S==="float"?E="float":S==="int"?E="int":S==="bool"||S==="boolean"?E="boolean":S==="float2"?E="float2":S==="float3"?E="float3":S==="float4"?E="float4":S==="float3x3"?E="float3x3":S==="float4x4"&&(E="float4x4"),n.set(e,E),E}if(u.op==="atomic_load"||u.op==="atomic_add"||u.op==="atomic_sub"||u.op==="atomic_min"||u.op==="atomic_max"||u.op==="atomic_exchange")return n.set(e,"int"),"int";if(u.op==="prng_make")return n.set(e,"prng"),"prng";if(u.op==="prng_next"){const b=u.type||"float",T=["float","int","float2","float3","float4","int2","int3","int4"];return T.includes(b)?(n.set(e,b),b):(s.push({nodeId:e,functionId:c,message:`Invalid prng_next output type '${b}'. Valid: ${T.join(", ")}`,severity:"error"}),n.set(e,"float"),"float")}if(u.op==="array_extract"){const b=d.array;if(!b||b==="any")return n.set(e,"any"),"any";if(b.startsWith("array<")){const T=b.match(/^array<(\w+)(?:,\s*\d+)?>/);if(T){const S=T[1];return S==="float"?(n.set(e,"float"),"float"):S==="int"?(n.set(e,"int"),"int"):S==="bool"||S==="boolean"?(n.set(e,"boolean"),"boolean"):(n.set(e,S),S)}}return b==="float2"||b==="float3"||b==="float4"?(n.set(e,"float"),"float"):b==="int2"||b==="int3"||b==="int4"?(n.set(e,"int"),"int"):(n.set(e,"any"),"any")}if(u.op==="struct_extract"){const b=d.struct;if(!b||b==="any")return n.set(e,"any"),"any";const T=r.structs?.find(S=>S.id===b);if(T){const S=u.field,E=T.members.find(A=>A.name===S);if(E){let A=E.type;return A==="float"?A="float":A==="int"&&(A="int"),n.set(e,A),A}}return n.set(e,"any"),"any"}if(u.op==="vec_swizzle"){const b=d.vec,T=u.channels;if(typeof T!="string")return s.push({nodeId:e,functionId:c,message:"Swizzle mask must be a string literal",severity:"error"}),n.set(e,"any"),"any";const S=["x","y","z","w","r","g","b","a"];(T.length<1||T.length>4)&&s.push({nodeId:e,functionId:c,message:`Invalid swizzle mask length '${T}'`,severity:"error"});let E=0;const A=b==="int2"||b==="int3"||b==="int4";if(b==="float2"||b==="int2"?E=2:b==="float3"||b==="int3"?E=3:(b==="float4"||b==="int4")&&(E=4),E>0){for(const C of T){const M=S.indexOf(C);M===-1?s.push({nodeId:e,functionId:c,message:`Invalid swizzle component '${C}'`,severity:"error"}):M%4>=E&&s.push({nodeId:e,functionId:c,message:`Swizzle component '${C}' out of bounds for ${b}`,severity:"error"})}const B=A?"int":"float",j=A?"int":"float",k=T.length===1?B:`${j}${T.length}`;return n.set(e,k),k}}const w={float2:{dim:2,scalarType:"float",outType:"float2"},float3:{dim:3,scalarType:"float",outType:"float3"},float4:{dim:4,scalarType:"float",outType:"float4"},int2:{dim:2,scalarType:"int",outType:"int2"},int3:{dim:3,scalarType:"int",outType:"int3"},int4:{dim:4,scalarType:"int",outType:"int4"}}[u.op];if(w&&_.inputs["*"]!==void 0){const b=["x","y","z","w"],T=[],S=/^[xyzw]+$/;for(const A of Object.keys(d)){if(!S.test(A)){s.push({nodeId:e,functionId:c,message:`Invalid component-group key '${A}' for ${u.op}`,severity:"error"});continue}const B=b.indexOf(A[0]);if(B===-1){s.push({nodeId:e,functionId:c,message:`Invalid component '${A[0]}' in key '${A}'`,severity:"error"});continue}let j=!0;for(let k=0;k<A.length;k++)if(b[B+k]!==A[k]){j=!1;break}if(!j){s.push({nodeId:e,functionId:c,message:`Component-group key '${A}' must be contiguous (e.g. 'xy', 'xyz')`,severity:"error"});continue}T.push({key:A,startIdx:B,count:A.length})}T.sort((A,B)=>A.startIdx-B.startIdx);let E=0;for(const A of T)A.startIdx!==E&&s.push({nodeId:e,functionId:c,message:`Component-group gap or overlap: expected component at index ${E}, got '${A.key}' at index ${A.startIdx}`,severity:"error"}),E=A.startIdx+A.count;E!==w.dim&&s.push({nodeId:e,functionId:c,message:`Component groups cover ${E} components, but ${u.op} requires ${w.dim}`,severity:"error"});for(const A of T){const B=d[A.key];if(!B||B==="any"||B==="float"||B==="int"||B==="boolean")continue;const C={float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[B];C!==void 0&&C!==A.count&&s.push({nodeId:e,functionId:c,message:`Component-group '${A.key}' expects ${A.count} components, but got ${B} (${C})`,severity:"error"})}return n.set(e,w.outType),w.outType}return n.set(e,_.output),_.output}const x=m[0],$="*"in x.inputs,D=Object.keys(d).filter(z=>!(z in x.inputs)&&!$);D.length>0&&s.push({nodeId:e,functionId:c,message:`Unknown argument(s) '${D.join(", ")}' for op '${u.op}'`,severity:"error"});for(const z of Object.keys(x.inputs))z!=="*"&&(d[z]||s.push({nodeId:e,functionId:c,message:`Missing required argument '${z}' for op '${u.op}'`,severity:"error"}));for(const[z,w]of Object.entries(x.inputs)){const b=d[z];if(b&&w!=="any"&&b!=="any"&&w!==b){if(w==="float"&&b==="int"||w==="int"&&b==="float"||w==="float2"&&b==="int2"||w==="int2"&&b==="float2"||w==="float3"&&b==="int3"||w==="int3"&&b==="float3"||w==="float4"&&b==="int4"||w==="int4"&&b==="float4")continue;s.push({nodeId:e,functionId:c,message:`Type Mismatch at '${z}': expected ${w}, got ${b}`,severity:"error"})}}return n.set(e,"any"),"any"};class Uc{constructor(){this.functionAnalysis=new Map}compile(t,r){const n=this.compileToSource(t,r),a=n.replace("require('./intrinsics.js');",Ce),s=this.compileInitToSource(t),o=s.replace("require('./intrinsics.js');",Ce);try{const i=Object.getPrototypeOf(async function(){}).constructor,c=new i("ctx",a),u=new i("device",o);return{taskCode:n,initCode:s,finalTaskCode:a,finalInitCode:o,task:c,init:u}}catch(i){throw console.error(`JIT Compilation Failed:
`,a),i}}detectComponentGroups(t,r){const n=["x","y","z","w"],a=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],s=[];for(const o of a)t[o]!==void 0&&o.length>1&&s.push({key:o,startIdx:n.indexOf(o[0]),count:o.length});if(s.length===0)return null;for(let o=0;o<r;o++){const i=n[o];t[i]!==void 0&&!s.some(c=>c.startIdx<=o&&o<c.startIdx+c.count)&&s.push({key:i,startIdx:o,count:1})}return s.sort((o,i)=>o.startIdx-i.startIdx),s}hasResult(t){return t.startsWith("math_")||t.startsWith("vec_")||t.startsWith("mat_")||t.startsWith("quat_")?!0:["float","int","bool","literal","loop_index","float2","float3","float4","int2","int3","int4","float3x3","float4x4","mat_mul","mat_extract","static_cast_float","static_cast_int","static_cast_bool","static_cast_int2","static_cast_int3","static_cast_int4","static_cast_float2","static_cast_float3","static_cast_float4","struct_construct","struct_extract","array_construct","array_extract","array_length","array_set","var_get","buffer_load","texture_load","texture_sample","call_func","vec_swizzle","color_mix","vec_get_element","quat","resource_get_size","resource_get_format","resource_is_bound","builtin_get","const_get","atomic_load","atomic_add","atomic_sub","atomic_min","atomic_max","atomic_exchange","prng_make","prng_next"].includes(t)}compileToSource(t,r){this.ir=t,this.functionAnalysis.clear();const n=t.functions;n.forEach(p=>{this.functionAnalysis.set(p.id,Xr(p,t))});const a=n.find(p=>p.id===r);if(!a)throw new Error(`Entry point '${r}' not found`);const s=[];s.push('"use strict";'),s.push(`// Compiled Graph starting at: ${a.id}`);const o=(p,f="var")=>{const l=p.replace(/[^a-zA-Z0-9_]/g,"_");return f==="input"?`i_${l}`:f==="func"?`func_${l}`:`v_${l}`},i=p=>`n_${p.replace(/[^a-zA-Z0-9_]/g,"_")}`,c=p=>o(p,"func");this.emitIntrinsicHelpers(s),s.push("");const u=new Set,m=new Set,d=p=>{if(m.has(p))throw new Error(`Recursion detected: ${p}`);if(u.has(p))return;u.add(p),m.add(p);const f=n.find(l=>l.id===p);f&&f.nodes.forEach(l=>{if(l.op==="call_func"&&typeof l.func=="string"){const h=n.find(_=>_.id===l.func);h&&h.type==="cpu"&&d(l.func)}}),m.delete(p)};d(a.id);for(const p of u){const f=n.find(l=>l.id===p);if(f){const l=this.functionAnalysis.get(f.id);this.emitFunction(f,s,o,i,c,n,l.inferredTypes),s.push("")}}s.push("// Entry Point"),s.push("const entryInputs = {};");for(const p of a.inputs)s.push(`entryInputs['${p.id}'] = ctx.inputs.get('${p.id}');`);return s.push(`return await ${c(a.id)}(ctx, entryInputs);`),s.join(`
`)}emitIntrinsicHelpers(t){t.push(`
// Helper to ensure GPU Resource exists (simplistic version)
// In a real app this would call back to a robust resource manager or use a more advanced generated implementation.
// For this JIT, we assume intrinsics.js provides _ensureGpuResource and similar.
require('./intrinsics.js');
`)}compileInitToSource(t){const r=[];r.push('"use strict";'),this.emitIntrinsicHelpers(r);const n=new Map,a=new Map,s=new vt;return t.functions.forEach(o=>{o.nodes.forEach(i=>{if((i.op==="call_func"||i.op==="cmd_dispatch")&&typeof i.func=="string"){const c=t.functions.find(u=>u.id===i.func);if(c&&c.type==="shader"&&!n.has(c.id)){const u=fe(c,t),m=s.compile(t,c.id,{stage:"compute",inputBinding:1,nodeTypes:u});n.set(c.id,{code:vt.resolveImports(m),metadata:m.metadata})}}if(i.op==="cmd_draw"){const c=`${i.vertex}|${i.fragment}`;if(!a.has(c)){const u=t.functions.find(_=>_.id===i.vertex),m=t.functions.find(_=>_.id===i.fragment),d=u?fe(u,t):void 0,p=m?fe(m,t):void 0,f=s.compile(t,i.vertex,{stage:"vertex",inputBinding:1,nodeTypes:d}),l=s.compile(t,i.fragment,{stage:"fragment",inputBinding:1,nodeTypes:p}),h={...f.metadata,resourceBindings:new Map([...f.metadata.resourceBindings,...l.metadata.resourceBindings]),resourceTypes:new Map([...f.metadata.resourceTypes,...l.metadata.resourceTypes])};a.set(c,{vsCode:vt.resolveImports(f),fsCode:vt.resolveImports(l),metadata:h,vertexId:i.vertex,pipelineDef:i.pipeline})}}})}),r.push(`
      const pipelines = new Map(); // id -> GPUComputePipeline
      const renderPipelines = new Map(); // key -> GPURenderPipeline
      const precomputedInfos = new Map(); // id -> precomputedInfo
      const resourceInfos = new Map(); // id -> PrecomputedResourceInfo
    `),r.push("  // Precompute Resource Layouts"),t.resources.forEach(o=>{const i=sr(o,t.structs);r.push(`  resourceInfos.set('${o.id}', ${JSON.stringify(i)});`)}),[...t.inputs,...t.tuningParams||[]].forEach(o=>{if(o.type==="texture2d"){const i=sr({...o,type:"texture2d"},t.structs);r.push(`  resourceInfos.set('${o.id}', ${JSON.stringify(i)});`)}}),r.push(""),r.push("  // Pre-compile Shaders"),n.forEach((o,i)=>{r.push("  {"),r.push(`    const code = ${JSON.stringify(o.code)};`),r.push("    const module = device.createShaderModule({ code });"),r.push("    const pipeline = await device.createComputePipelineAsync({"),r.push("       layout: 'auto',"),r.push("       compute: { module, entryPoint: 'main' }"),r.push("    });"),r.push(`    pipelines.set('${i}', pipeline);`);const c=or(o.metadata,t.structs||[]);r.push(`    precomputedInfos.set('${i}', ${JSON.stringify(c)});`),r.push("  }")}),a.forEach((o,i)=>{r.push("  {"),r.push(`     const vsCode = ${JSON.stringify(o.vsCode)};`),r.push(`     const fsCode = ${JSON.stringify(o.fsCode)};`),r.push("     const vsModule = device.createShaderModule({ code: vsCode });"),r.push("     const fsModule = device.createShaderModule({ code: fsCode });");const c={format:"rgba8unorm"};o.pipelineDef?.blend&&(c.blend=o.pipelineDef.blend),r.push("     const pipeline = await device.createRenderPipelineAsync({"),r.push("        layout: 'auto',"),r.push("        vertex: { module: vsModule, entryPoint: 'main' },"),r.push(`        fragment: { module: fsModule, entryPoint: 'main', targets: [${JSON.stringify(c)}] }`),r.push("     });"),r.push(`     renderPipelines.set('${i}', pipeline);`);const u=or(o.metadata,t.structs||[]);r.push(`    precomputedInfos.set('${o.vertexId}', ${JSON.stringify(u)});`),r.push("  }")}),r.push(`
      return _createExecutor(device, pipelines, precomputedInfos, renderPipelines, resourceInfos);
    `),r.join(`
`)}emitFunction(t,r,n,a,s,o,i){r.push(`async function ${s(t.id)} (ctx, args) {
      `);for(const f of t.inputs)r.push(`  let ${n(f.id,"input")} = args['${f.id}']; `);for(const f of t.localVars){let l;if(f.initialValue!==void 0)l=JSON.stringify(f.initialValue);else{const h=f.type?.toLowerCase()||"float";h==="float2"||h==="int2"?l="[0, 0]":h==="float3"||h==="int3"?l="[0, 0, 0]":h==="float4"||h==="int4"?l="[0, 0, 0, 0]":h==="float3x3"?l="[0,0,0,0,0,0,0,0,0]":h==="float4x4"?l="[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]":h==="bool"||h==="boolean"?l="false":l="0"}r.push(`  let ${n(f.id,"var")} = ${l}; `)}const c=ke(t),u=t.nodes.filter(f=>this.hasResult(f.op));for(const f of u)r.push(`  let ${a(f.id)}; `);const m=new Set,d=f=>{if(m.has(f))return;const l=t.nodes.find(h=>h.id===f);!l||this.isExecutable(l.op,c,l.id)||(m.add(f),c.filter(h=>h.to===f&&h.type==="data").forEach(h=>{d(h.from)}),r.push(`  ${a(l.id)} = ${this.compileExpression(l,t,n,a,s,o,i,!0,d,c)}; `))};r.push("  // Pure Nodes (lazy emission)");const p=t.nodes.filter(f=>!c.some(h=>h.to===f.id&&h.type==="execution")&&this.isExecutable(f.op,c,f.id));for(const f of p)this.emitChain("  ",f,t,r,new Set,n,a,s,o,i,d,c);r.push("  return 0; // Default return"),r.push("}")}isExecutable(t,r,n){return t.startsWith("cmd_")||t.startsWith("flow_")||t==="var_set"||t==="buffer_store"||t==="texture_store"||t==="call_func"||t==="func_return"||t==="array_set"||t==="cmd_resize_resource"||t==="cmd_draw"||t==="cmd_dispatch"||t==="atomic_store"||t==="atomic_add"||t==="atomic_sub"||t==="atomic_min"||t==="atomic_max"||t==="atomic_exchange"||t==="prng_next"?!0:r.some(s=>s.from===n&&s.type==="execution")}emitChain(t,r,n,a,s,o,i,c,u,m,d,p){let f=r;for(;f&&!(s.has(f.id)&&f.op!=="flow_loop");){s.add(f.id),p.filter(h=>h.to===f.id&&h.type==="data").forEach(h=>d(h.from));for(const h in f){if(["id","op","metadata","func","args","dispatch"].includes(h))continue;const _=f[h];typeof _=="string"&&n.nodes.some(g=>g.id===_)&&d(_)}if(this.hasResult(f.op))this.emitNode(t,f,n,a,o,i,c,u,m,d,p);else if(f.op==="flow_branch"){this.emitBranch(t,f,n,a,s,o,i,c,u,m,d,p);return}else if(f.op==="flow_loop"){this.emitLoop(t,f,n,a,s,o,i,c,u,m,d,p);return}else if(f.op==="func_return"){a.push(`${t}return ${this.resolveArg(f,"val",n,o,i,c,u,m,d,p)};`);return}else this.emitNode(t,f,n,a,o,i,c,u,m,d,p);const l=p.find(h=>h.from===f.id&&h.portOut==="exec_out"&&h.type==="execution");f=l?n.nodes.find(h=>h.id===l.to):void 0}}emitBranch(t,r,n,a,s,o,i,c,u,m,d,p){const f=this.resolveArg(r,"cond",n,o,i,c,u,m,d,p);a.push(`${t}if (${f}) {`);const l=p.find(y=>y.from===r.id&&y.portOut==="exec_true"&&y.type==="execution"),h=l?n.nodes.find(y=>y.id===l.to):void 0;h&&this.emitChain(t+"  ",h,n,a,new Set(s),o,i,c,u,m,d,p),a.push(`${t}} else {`);const _=p.find(y=>y.from===r.id&&y.portOut==="exec_false"&&y.type==="execution"),g=_?n.nodes.find(y=>y.id===_.to):void 0;g&&this.emitChain(t+"  ",g,n,a,new Set(s),o,i,c,u,m,d,p),a.push(`${t}}`)}emitLoop(t,r,n,a,s,o,i,c,u,m,d,p){const f=`loop_${r.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;if(r.count!==void 0){const y=this.resolveArg(r,"count",n,o,i,c,u,m,d,p);a.push(`${t}for (let ${f} = 0; ${f} < ${y}; ${f}++) {`)}else{const y=this.resolveArg(r,"start",n,o,i,c,u,m,d,p),x=this.resolveArg(r,"end",n,o,i,c,u,m,d,p);a.push(`${t}for (let ${f} = ${y}; ${f} < ${x}; ${f}++) {`)}const l=p.find(y=>y.from===r.id&&y.portOut==="exec_body"&&y.type==="execution"),h=l?n.nodes.find(y=>y.id===l.to):void 0;h&&this.emitChain(t+"  ",h,n,a,new Set(s),o,i,c,u,m,d,p),a.push(`${t}}`);const _=p.find(y=>y.from===r.id&&y.portOut==="exec_completed"&&y.type==="execution"),g=_?n.nodes.find(y=>y.id===_.to):void 0;g&&this.emitChain(t,g,n,a,s,o,i,c,u,m,d,p)}emitNode(t,r,n,a,s,o,i,c,u,m,d){if(r.op==="cmd_dispatch"){const p=r.func,f=this.resolveArg(r,"threads",n,s,o,i,c,u,m,d);a.push(`${t}await ctx.globals.dispatch('${p}', ${f}, ${this.generateArgsObject(r,n,s,o,i,c,u,m,d)});`)}else if(r.op==="call_func"){const p=r.func,f=c.find(l=>l.id===p);if(f?.type==="shader"){const l=this.resolveArg(r,"threads",n,s,o,i,c,u,m,d);a.push(`${t}await ctx.globals.dispatch('${p}', ${l}, ${this.generateArgsObject(r,n,s,o,i,c,u,m,d)});`)}else f&&a.push(`${t}${o(r.id)} = await ${i(p)}(ctx, ${this.generateArgsObject(r,n,s,o,i,c,u,m,d)});`)}else if(r.op==="cmd_draw"){const p=r.target,f=r.vertex,l=r.fragment,h=this.resolveArg(r,"count",n,s,o,i,c,u,m,d),_=JSON.stringify(r.pipeline||{});a.push(`${t}await ctx.globals.draw('${p}', '${f}', '${l}', ${h}, ${_});`)}else if(r.op==="cmd_resize_resource"){const p=r.resource,f=this.resolveArg(r,"size",n,s,o,i,c,u,m,d),l=h=>d.find(g=>g.to===r.id&&g.portIn===h&&g.type==="data")||r[h]!==void 0?this.resolveArg(r,h,n,s,o,i,c,u,m,d):"undefined";a.push(`${t}ctx.globals.resize('${p}', ${f}, ${l("format")}, ${l("clear")});`)}else if(r.op==="var_set"){const p=this.resolveArg(r,"val",n,s,o,i,c,u,m,d),f=r.var;if(n.localVars.some(l=>l.id===f))a.push(`${t}${s(f,"var")} = ${p};`);else if(n.inputs.some(l=>l.id===f))a.push(`${t}${s(f,"input")} = ${p};`);else throw new Error(`JIT Error: Cannot set undefined variable '${f}'`)}else if(r.op==="cmd_sync_to_cpu"){const p=r.resource;a.push(`${t}ctx.globals.executeSyncToCpu('${p}');`)}else if(r.op==="cmd_wait_cpu_sync"){const p=r.resource;a.push(`${t}await ctx.globals.executeWaitCpuSync('${p}');`)}else if(r.op==="cmd_copy_buffer"){const p=r.src,f=r.dst,l=(y,x)=>d.find(D=>D.to===r.id&&D.portIn===y&&D.type==="data")||r[y]!==void 0?this.resolveArg(r,y,n,s,o,i,c,u,m,d):x,h=l("src_offset","0"),_=l("dst_offset","0"),g=l("count","Infinity");a.push(`${t}ctx.globals.copyBuffer('${p}', '${f}', ${h}, ${_}, ${g});`)}else if(r.op==="cmd_copy_texture"){const p=r.src,f=r.dst,l=$=>d.find(z=>z.to===r.id&&z.portIn===$&&z.type==="data")||r[$]!==void 0?this.resolveArg(r,$,n,s,o,i,c,u,m,d):"null",h=l("src_rect"),_=l("dst_rect"),g=r.sample!==void 0?JSON.stringify(r.sample):"null",y=l("alpha")==="null"?"1.0":l("alpha"),x=r.normalized===!0?"true":"false";a.push(`${t}ctx.globals.copyTexture('${p}', '${f}', ${h}, ${_}, ${g}, ${y}, ${x});`)}else if(r.op==="buffer_store"){const p=r.buffer,f=this.resolveArg(r,"index",n,s,o,i,c,u,m,d),l=this.resolveArg(r,"value",n,s,o,i,c,u,m,d);a.push(`${t}{ const _s = ctx.resources.get('${p}'); _s.data[${f}] = ${l}; if (_s.flags) _s.flags.cpuDirty = true; }`)}else if(r.op==="atomic_store"){const p=r.counter,f=this.resolveArg(r,"index",n,s,o,i,c,u,m,d),l=this.resolveArg(r,"value",n,s,o,i,c,u,m,d);a.push(`${t}ctx.resources.get('${p}').data[${f}] = (${l}) | 0;`)}else if(r.op==="texture_store"){const p=r.tex,f=this.resolveArg(r,"coords",n,s,o,i,c,u,m,d),l=this.resolveArg(r,"value",n,s,o,i,c,u,m,d);a.push(`${t}((coords, val) => {
        const res = ctx.resources.get('${p}');
        if (!res) return;
        const x = Math.floor(coords[0]), y = Math.floor(coords[1]);
        if (x >= 0 && x < res.width && y >= 0 && y < res.height) res.data[y * res.width + x] = val;
      })(${f}, ${l});`)}else if(r.op==="prng_next"){const p=r.prng,f=r.type||"float",l=s(p,"var"),_={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[f]||1,g=f==="int"||f.startsWith("int");if(_===1&&!g)a.push(`${t}${l} = (${l} + 1) | 0;`),a.push(`${t}${o(r.id)} = _prng_hash_to_float(${l});`);else if(_===1&&g){a.push(`${t}${l} = (${l} + 1) | 0;`);const y=r.min!==void 0||d.some($=>$.to===r.id&&$.portIn==="min"&&$.type==="data"),x=r.max!==void 0||d.some($=>$.to===r.id&&$.portIn==="max"&&$.type==="data");if(y&&x){const $=this.resolveArg(r,"min",n,s,o,i,c,u,m,d),D=this.resolveArg(r,"max",n,s,o,i,c,u,m,d);a.push(`${t}${o(r.id)} = (Math.trunc(${$}) + (((_prng_hash(${l}) >>> 0) % (Math.trunc(${D}) - Math.trunc(${$}) + 1)) | 0)) | 0;`)}else a.push(`${t}${o(r.id)} = _prng_hash(${l});`)}else{a.push(`${t}${l} = (${l} + ${_}) | 0;`);const y=[];for(let x=0;x<_;x++){const $=_-1-x,D=$>0?`(${l} - ${$}) | 0`:l;g?y.push(`_prng_hash(${D})`):y.push(`_prng_hash_to_float(${D})`)}a.push(`${t}${o(r.id)} = [${y.join(", ")}];`)}}else this.hasResult(r.op)&&a.push(`${t}${o(r.id)} = ${this.compileExpression(r,n,s,o,i,c,u,!0,m,d)};`)}resolveArg(t,r,n,a,s,o,i,c,u,m){const d=m.find(f=>f.to===t.id&&(f.portIn===r||r==="val"&&f.portIn==="value")&&f.type==="data");if(d){const f=n.nodes.find(l=>l.id===d.from);if(f){let l=this.compileExpression(f,n,a,s,o,i,c,!1,u,m);const h=t[r];if(typeof h=="string"&&h.includes(".")){const _=h.substring(h.indexOf(".")+1),g={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},y=[..._].map(x=>g[x]);return y.length===1?`(${l})[${y[0]}]`:`[${y.map(x=>`(${l})[${x}]`).join(", ")}]`}return l}}let p;if(r.includes(".")||r.includes("[")){const f=r.split(/[\.\[\]]/).filter(h=>h!=="");let l=t;for(const h of f){if(l==null)break;l=l[h]}p=l}else p=t[r];if(p!==void 0){const f=l=>{if(typeof l=="string"&&!["var","func","resource","buffer"].includes(r)){let h=l,_;const g=l.indexOf(".");g!==-1&&(h=l.substring(0,g),_=l.substring(g+1));const y=$=>{if(!_)return $;const D={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},z=[..._].map(w=>D[w]);return z.length===1?`(${$})[${z[0]}]`:`[${z.map(w=>`(${$})[${w}]`).join(", ")}]`};if(n.localVars.some($=>$.id===h))return y(a(h,"var"));if(n.inputs.some($=>$.id===h))return y(a(h,"input"));if(this.ir?.inputs.some($=>$.id===h)||this.ir?.tuningParams?.some($=>$.id===h))return y(`ctx.inputs.get('${h}')`);const x=n.nodes.find($=>$.id===h);if(x&&x.id!==t.id)return y(this.compileExpression(x,n,a,s,o,i,c,!1,u,m))}return JSON.stringify(l)};return Array.isArray(p)?`[${p.map(l=>f(l)).join(", ")}]`:f(p)}return"0"}compileExpression(t,r,n,a,s,o,i,c=!1,u,m){if(!c&&this.hasResult(t.op))return u(t.id),a(t.id);const d=(l="a")=>this.resolveArg(t,l,r,n,a,s,o,i,u,m),p=(l="b")=>this.resolveArg(t,l,r,n,a,s,o,i,u,m),f=(l="val")=>this.resolveArg(t,l,r,n,a,s,o,i,u,m);switch(t.op){case"var_get":{const l=t.var;return r.localVars.some(h=>h.id===l)?n(l,"var"):r.inputs.some(h=>h.id===l)?n(l,"input"):`((id) => { const v = ctx.inputs.get(id); if (v !== undefined) return v; throw new Error("Variable '" + id + "' is not defined"); })('${l}')`}case"literal":return t.type==="int"?`Math.trunc(${JSON.stringify(t.val)})`:JSON.stringify(t.val);case"loop_index":return`loop_${t.loop.replace(/[^a-zA-Z0-9_]/g,"_")}`;case"buffer_load":{const l=t.buffer,h=d("index");return`((idx) => {
          const res = ctx.resources.get('${l}');
          if (!res) return 0;
          if (idx < 0 || idx >= res.data.length) throw new Error("Runtime Error: buffer_load OOB");
          return res.data[idx];
        })(${h})`}case"atomic_load":{const l=t.counter,h=d("index");return`((idx) => {
          const res = ctx.resources.get('${l}');
          return res ? (res.data[idx] | 0) : 0;
        })(${h})`}case"atomic_add":case"atomic_sub":case"atomic_min":case"atomic_max":case"atomic_exchange":{const l=t.counter,h=d("index"),_=d("value");return`((idx, v) => {
          const res = ctx.resources.get('${l}');
          if (!res) return 0;
          const old = res.data[idx] | 0;
          res.data[idx] = (${{atomic_add:"old + v",atomic_sub:"old - v",atomic_min:"Math.min(old, v)",atomic_max:"Math.max(old, v)",atomic_exchange:"v"}[t.op]}) | 0;
          return old;
        })(${h}, ${_})`}case"texture_load":{const l=t.tex,h=this.resolveArg(t,"coords",r,n,a,s,o,i,u,m);return`((coords) => {
          const res = ctx.resources.get('${l}');
          if (!res) return [0, 0, 0, 0];
          const x = Math.floor(coords[0]), y = Math.floor(coords[1]);
          if (x < 0 || x >= res.width || y < 0 || y >= res.height) return [0, 0, 0, 0];
          return res.data[y * res.width + x] || [0, 0, 0, 0];
        })(${h})`}case"texture_sample":{const l=t.tex,h=this.resolveArg(t,"coords",r,n,a,s,o,i,u,m);return`((uv) => {
          const res = ctx.resources.get('${l}');
          if (!res) return [0, 0, 0, 0];
          const wrap = res.def.sampler?.wrap || 'clamp';
          const filter = res.def.sampler?.filter || 'nearest';

          const applyWrap = (c) => {
            if (wrap === 'repeat') return c - Math.floor(c);
            if (wrap === 'mirror') {
              const m = (c % 2 + 2) % 2;
              return m > 1 ? 2 - m : m;
            }
            return Math.max(0, Math.min(1, c));
          };

          const u = applyWrap(uv[0]);
          const v = applyWrap(uv[1]);
          const w = res.width;
          const h = res.height;

          const getSample = (x, y) => {
             const sx = Math.max(0, Math.min(w - 1, x));
             const sy = Math.max(0, Math.min(h - 1, y));
             const val = res.data[sy * w + sx];
             return val !== undefined ? val : [0, 0, 0, 0];
          };

          if (filter === 'nearest') {
            const x = Math.min(Math.floor(u * w), w - 1);
            const y = Math.min(Math.floor(v * h), h - 1);
            const val = res.data[y * w + x];
            return val !== undefined ? val : [0, 0, 0, 0];
          }

          const tx = u * w - 0.5;
          const ty = v * h - 0.5;
          const x0 = Math.floor(tx);
          const y0 = Math.floor(ty);
          const fx = tx - x0;
          const fy = ty - y0;

          const getWrappedSample = (targetX, targetY) => {
             let sx = targetX;
             let sy = targetY;
             if (wrap === 'clamp') {
                sx = Math.max(0, Math.min(w - 1, sx));
                sy = Math.max(0, Math.min(h - 1, sy));
             } else if (wrap === 'repeat') {
                sx = ((sx % w) + w) % w;
                sy = ((sy % h) + h) % h;
             } else if (wrap === 'mirror') {
                const mx = ((sx % (2 * w)) + (2 * w)) % (2 * w);
                sx = mx >= w ? 2 * w - 1 - mx : mx;
                const my = ((sy % (2 * h)) + (2 * h)) % (2 * h);
                sy = my >= h ? 2 * h - 1 - my : my;
             }
             const val = res.data[sy * w + sx];
             return val !== undefined ? val : [0, 0, 0, 0];
          };

          const s00 = getWrappedSample(x0, y0);
          const s10 = getWrappedSample(x0 + 1, y0);
          const s01 = getWrappedSample(x0, y0 + 1);
          const s11 = getWrappedSample(x0 + 1, y0 + 1);

          const lerp = (a, b, t) => {
             if (Array.isArray(a)) return a.map((v, i) => v * (1 - t) + b[i] * t);
             return a * (1 - t) + b * t;
          };

          const top = lerp(s00, s10, fx);
          const bot = lerp(s01, s11, fx);
          return lerp(top, bot, fy);
        })(${h})`}case"resource_get_size":return`((id) => {
          const res = ctx.resources.get(id);
          if (!res) return [0, 0];
          return res.def.type === 'texture2d' ? [res.width, res.height] : [res.width, 0];
        })('${t.resource}')`;case"resource_get_format":return`((id) => {
          const res = ctx.resources.get(id);
          return res ? (res.def.format || 'rgba8') : 'rgba8';
        })('${t.resource}')`;case"resource_is_bound":return`(ctx.inputs.get('tex_bound_${t.resource}') > 0.5)`;case"math_neg":return`_applyUnary(${f()}, v => -v)`;case"math_abs":return`_applyUnary(${f()}, Math.abs)`;case"math_sign":return`_applyUnary(${f()}, Math.sign)`;case"math_sin":return`_applyUnary(${f()}, Math.sin)`;case"math_cos":return`_applyUnary(${f()}, Math.cos)`;case"math_tan":return`_applyUnary(${f()}, Math.tan)`;case"math_asin":return`_applyUnary(${f()}, Math.asin)`;case"math_acos":return`_applyUnary(${f()}, Math.acos)`;case"math_atan":return`_applyUnary(${f()}, Math.atan)`;case"math_sinh":return`_applyUnary(${f()}, Math.sinh)`;case"math_cosh":return`_applyUnary(${f()}, Math.cosh)`;case"math_tanh":return`_applyUnary(${f()}, Math.tanh)`;case"math_sqrt":return`_applyUnary(${f()}, Math.sqrt)`;case"math_exp":return`_applyUnary(${f()}, Math.exp)`;case"math_log":return`_applyUnary(${f()}, Math.log)`;case"math_ceil":return`_applyUnary(${f()}, Math.ceil)`;case"math_floor":return`_applyUnary(${f()}, Math.floor)`;case"math_trunc":return`_applyUnary(${f()}, Math.trunc)`;case"math_fract":return`_applyUnary(${f()}, v => v - Math.floor(v))`;case"math_is_nan":return`_applyUnary(${f()}, v => isNaN(v) ? 1.0 : 0.0)`;case"math_is_inf":return`_applyUnary(${f()}, v => (!isFinite(v) && !isNaN(v)) ? 1.0 : 0.0)`;case"math_is_finite":return`_applyUnary(${f()}, v => isFinite(v) ? 1.0 : 0.0)`;case"math_flush_subnormal":return`_applyUnary(${f()}, v => Math.abs(v) < 1.17549435e-38 ? 0.0 : v)`;case"math_mantissa":return`_applyUnary(${f()}, v => {
        if (v === 0 || !isFinite(v)) return v;
        const exp = Math.floor(Math.log2(Math.abs(v))) + 1;
        return v * Math.pow(2, -exp);
      })`;case"math_exponent":return`_applyUnary(${f()}, v => {
        if (v === 0 || !isFinite(v)) return 0;
        return Math.floor(Math.log2(Math.abs(v))) + 1;
      })`;case"math_add":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, (x, y) => x + y)`}case"math_sub":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, (x, y) => x - y)`}case"math_mul":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, (x, y) => x * y)`}case"math_div":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m),_=this.getArgType(t,"a",r,i),g=this.getArgType(t,"b",r,i);return(_==="int"||_==="i32")&&(g==="int"||g==="i32")?`_applyBinary(${l}, ${h}, (x, y) => Math.trunc(x / y))`:`_applyBinary(${l}, ${h}, (x, y) => x / y)`}case"math_mod":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, (x, y) => x % y)`}case"math_pow":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, Math.pow)`}case"math_min":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, Math.min)`}case"math_max":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, Math.max)`}case"math_atan2":{const[l,h]=this.resolveCoercedArgs(t,["a","b"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, Math.atan2)`}case"math_clamp":{const l=this.resolveCoercedArgs(t,["val","min","max"],"unify",r,n,a,s,o,i,u,m);return`((v, min, max) => _applyBinary(_applyBinary(v, min, Math.max), max, Math.min))(${l[0]}, ${l[1]}, ${l[2]})`}case"math_mad":{const[l,h,_]=this.resolveCoercedArgs(t,["a","b","c"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(_applyBinary(${l}, ${h}, (x, y) => x * y), ${_}, (x, y) => x + y)`}case"math_mix":{const[l,h,_]=this.resolveCoercedArgs(t,["a","b","t"],"unify",r,n,a,s,o,i,u,m);return`((a, b, t) => _applyBinary(_applyBinary(a, _applyBinary(1, t, (x, y) => x - y), (x, y) => x * y), _applyBinary(b, t, (x, y) => x * y), (x, y) => x + y))(${l}, ${h}, ${_})`}case"math_step":{const[l,h]=this.resolveCoercedArgs(t,["edge","x"],"unify",r,n,a,s,o,i,u,m);return`_applyBinary(${l}, ${h}, (e, x) => x < e ? 0 : 1)`}case"math_smoothstep":{const[l,h,_]=this.resolveCoercedArgs(t,["edge0","edge1","x"],"unify",r,n,a,s,o,i,u,m);return`((v, edge0, edge1) => _applyUnary(_applyBinary(_applyBinary(v, edge0, (x, e) => (x - e)), _applyBinary(edge1, edge0, (e1, e0) => (e1 - e0)), (n, d) => Math.max(0, Math.min(1, n / d))), t => t * t * (3 - 2 * t)))(${_}, ${l}, ${h})`}case"mat_identity":{const l=Number(t.size||4),h=new Array(l*l).fill(0);for(let _=0;_<l;_++)h[_*l+_]=1;return JSON.stringify(h)}case"mat_mul":return`_mat_mul(${d()}, ${p()})`;case"mat_extract":return`(${d()}[${p("index")}])`;case"mat_transpose":return`((m) => {
          const dim = Math.sqrt(m.length);
          const out = new Array(m.length);
          for(let r=0; r<dim; r++) for(let c=0; c<dim; c++) out[c*dim + r] = m[r*dim + c];
          return out;
        })(${d()})`;case"color_mix":{const l=d(),h=p();if(m.find(g=>g.to===t.id&&g.portIn==="t"&&g.type==="data")||t.t!==void 0){const g=this.resolveArg(t,"t",r,n,a,s,o,i,u,m);return`_applyBinary(_applyBinary(${l}, _applyBinary(1, ${g}, (x, y) => x - y), (x, y) => x * y), _applyBinary(${h}, ${g}, (x, y) => x * y), (x, y) => x + y)`}return`((d, s) => {
          if (!Array.isArray(s) || !Array.isArray(d)) return s;
          const out = new Array(4);
          const sa = s[3] === undefined ? 1.0 : s[3];
          const da = d[3] === undefined ? 1.0 : d[3];
          const ra = sa + da * (1 - sa);
          for(let i=0; i<3; i++) out[i] = ra < 1e-6 ? 0 : (s[i]*sa + d[i]*da*(1-sa))/ra;
          out[3] = ra;
          return out;
        })(${l}, ${h})`}case"vec_get_element":return`(${this.resolveArg(t,"vec",r,n,a,s,o,i,u,m)}[${this.resolveArg(t,"index",r,n,a,s,o,i,u,m)}])`;case"vec_mix":{const[l,h,_]=this.resolveCoercedArgs(t,["a","b","t"],"unify",r,n,a,s,o,i,u,m);return`((a, b, t) => _applyBinary(_applyBinary(a, _applyBinary(1, t, (x, y) => x - y), (x, y) => x * y), _applyBinary(b, t, (x, y) => x * y), (x, y) => x + y))(${l}, ${h}, ${_})`}case"math_pi":return"Math.PI";case"math_e":return"Math.E";case"math_gt":return`_applyBinary(${d()}, ${p()}, (x, y) => x > y ? 1.0 : 0.0)`;case"math_lt":return`_applyBinary(${d()}, ${p()}, (x, y) => x < y ? 1.0 : 0.0)`;case"math_ge":return`_applyBinary(${d()}, ${p()}, (x, y) => x >= y ? 1.0 : 0.0)`;case"math_le":return`_applyBinary(${d()}, ${p()}, (x, y) => x <= y ? 1.0 : 0.0)`;case"math_eq":return`_applyBinary(${d()}, ${p()}, (x, y) => x === y ? 1.0 : 0.0)`;case"math_neq":return`_applyBinary(${d()}, ${p()}, (x, y) => x !== y ? 1.0 : 0.0)`;case"math_and":return`_applyBinary(${d()}, ${p()}, (x, y) => (x && y) ? 1.0 : 0.0)`;case"math_or":return`_applyBinary(${d()}, ${p()}, (x, y) => (x || y) ? 1.0 : 0.0)`;case"math_xor":return`_applyBinary(${d()}, ${p()}, (x, y) => (x ^ y) ? 1.0 : 0.0)`;case"math_not":return`_applyUnary(${f()}, v => (!v) ? 1.0 : 0.0)`;case"float":return`Number(${f()})`;case"int":return`Math.trunc(${f()})`;case"bool":return`Boolean(${f()})`;case"static_cast_float":return`Number(${f()})`;case"static_cast_int":return`(${f()} | 0)`;case"mat_inverse":return d("val");case"static_cast_bool":return`Boolean(${f()})`;case"static_cast_int2":case"static_cast_int3":case"static_cast_int4":return`(${f()}).map(v => Math.trunc(v))`;case"static_cast_float2":case"static_cast_float3":case"static_cast_float4":return`(${f()}).map(v => Number(v))`;case"float2":case"float3":case"float4":case"int2":case"int3":case"int4":{const l=t.op.startsWith("int"),h=parseInt(t.op.replace(/^(float|int)/,"")),_=["x","y","z","w"].slice(0,h),g=this.detectComponentGroups(t,h);if(g){const x=[];for(const $ of g){const D=d($.key);$.count===1?x.push(l?`Math.trunc(${D})`:D):x.push(`...((v) => typeof v === 'number' ? Array(${$.count}).fill(${l?"Math.trunc(v)":"v"}) : ${l?"v.map(x => Math.trunc(x))":"v"})(${D})`)}return`[${x.join(", ")}]`}return`[${_.map(x=>l?`Math.trunc(${d(x)})`:d(x)).join(", ")}]`}case"float3x3":case"float4x4":{const l=t.op==="float3x3"?9:16;return t.vals!==void 0||m.some(_=>_.to===t.id&&_.portIn==="vals")?d("vals"):`[${(l===9?["m00","m10","m20","m01","m11","m21","m02","m12","m22"]:["m00","m10","m20","m30","m01","m11","m21","m31","m02","m12","m22","m32","m03","m13","m23","m33"]).map(_=>this.resolveArg(t,_,r,n,a,s,o,i,u,m)).join(", ")}]`}case"vec_dot":return`_vec_dot(${d()}, ${p()})`;case"vec_length":return`_vec_length(${d()})`;case"vec_normalize":return`_vec_normalize(${d()})`;case"vec_swizzle":{const l=this.resolveArg(t,"vec",r,n,a,s,o,i,u,m),h=t.channels||"x",_={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},g=h.split("").map(y=>_[y]);return g.length===1?`${l}[${g[0]}]`:`[${g.map(y=>`${l}[${y}]`).join(", ")}]`}case"struct_construct":{const l=t.type,h=this.ir?.structs?.find(g=>g.id===l);return`{ ${(h?h.members.map(g=>`'${g.name}': ${this.resolveArg(t,`values.${g.name}`,r,n,a,s,o,i,u,m)}`):[]).join(", ")} }`}case"struct_extract":return`(${this.resolveArg(t,"struct",r,n,a,s,o,i,u,m)}['${t.field||t.member}'])`;case"array_construct":{const l=t.values;if(Array.isArray(l))return`[${l.map((y,x)=>this.resolveArg(t,`values[${x}]`,r,n,a,s,o,i,u,m)).join(", ")}]`;const h=this.resolveArg(t,"length",r,n,a,s,o,i,u,m),_=this.resolveArg(t,"fill",r,n,a,s,o,i,u,m);return h!==void 0&&h!=="undefined"?`new Array(${h}).fill(${_??0})`:"[]"}case"array_extract":return`${this.resolveArg(t,"array",r,n,a,s,o,i,u,m)}[${d("index")}]`;case"array_length":return`(${this.resolveArg(t,"array",r,n,a,s,o,i,u,m)}.length)`;case"array_set":return`(${this.resolveArg(t,"array",r,n,a,s,o,i,u,m)}[${d("index")}] = ${f("value")})`;case"quat":return`[${d("x")}, ${d("y")}, ${d("z")}, ${d("w")}]`;case"quat_identity":return"[0, 0, 0, 1]";case"quat_mul":return`_quat_mul(${d()}, ${p()})`;case"quat_rotate":{const l=d("v"),h=d("q");return`((v, q) => {
          const [vx, vy, vz] = v;
          const [qx, qy, qz, qw] = q;
          const ix = qw * vx + qy * vz - qz * vy;
          const iy = qw * vy + qz * vx - qx * vz;
          const iz = qw * vz + qx * vy - qy * vx;
          const iw = -qx * vx - qy * vy - qz * vz;
          return [
            ix * qw + iw * -qx + iy * -qz - iz * -qy,
            iy * qw + iw * -qy + iz * -qx - ix * -qz,
            iz * qw + iw * -qz + ix * -qy - iy * -qx
          ];
        })(${l}, ${h})`}case"quat_slerp":return`_quat_slerp(${d()}, ${p()}, ${this.resolveArg(t,"t",r,n,a,s,o,i,u,m)})`;case"quat_to_float4x4":return`_quat_to_mat4(${this.resolveArg(t,"q",r,n,a,s,o,i,u,m)})`;case"builtin_get":return`ctx.builtins['${t.name}']`;case"prng_make":return t.seed!==void 0||m.some(_=>_.to===t.id&&_.portIn==="seed"&&_.type==="data")?`_prng_hash(Math.trunc(${d("seed")}))`:`_prng_hash((Math.trunc(ctx.builtins['prng_seed'] * 2147483647.0) + ${this.hashString(r.id)}) | 0)`;default:return"0"}}resolveCoercedArgs(t,r,n,a,s,o,i,c,u,m,d){const p=r.map(h=>this.resolveArg(t,h,a,s,o,i,c,u,m,d));if(!u)return p;const f=h=>{const _=t[h];if(typeof _=="string"){const g=u.get(_);if(g)return g;if(a.localVars.some(y=>y.id===_))return a.localVars.find(y=>y.id===_).type;if(a.inputs.some(y=>y.id===_))return a.inputs.find(y=>y.id===_).type}return typeof _=="number"?Number.isInteger(_)?"int":"float":typeof _=="boolean"?"bool":"float"},l=r.map(f);return n==="float"?p.map((h,_)=>{const g=l[_];return g==="int"||g==="i32"||g==="bool"||g==="boolean"||g==="int2"||g==="int3"||g==="int4"?`Number(${h})`:h}):n==="unify"&&l.some(_=>_.includes("float")||_.includes("vec")||_.includes("mat")||_==="f32")?p.map((_,g)=>{const y=l[g];return y==="int"||y==="i32"||y==="bool"||y==="int2"||y==="int3"||y==="int4"?`Number(${_})`:_}):p}getArgType(t,r,n,a){const s=t[r];if(typeof s=="string"){const o=a?.get(s);if(o)return o;const i=n.localVars.find(u=>u.id===s);if(i)return i.type;const c=n.inputs.find(u=>u.id===s);if(c)return c.type}return typeof s=="number"?Number.isInteger(s)?"int":"float":typeof s=="boolean"?"bool":"float"}hashString(t){let r=0;for(let n=0;n<t.length;n++)r=Math.imul(r,31)+t.charCodeAt(n)|0;return r}generateArgsObject(t,r,n,a,s,o,i,c,u){const m=t.func,d=o.find(l=>l.id===m);if(!d)return"{}";const p=[];d.inputs.forEach(l=>{const h=this.resolveArg(t,`args.${l.id}`,r,n,a,s,o,i,c,u);p.push(`'${l.id}': ${h}`)});const f=this.functionAnalysis.get(m);if(f&&d.type==="shader"){const l=["time","delta_time","bpm","beat_number","beat_delta","prng_seed"],h=new Set;f.usedBuiltins.forEach(_=>{l.includes(_)&&(p.push(`'${_}': ctx.builtins['${_}']`),h.add(_))}),!h.has("prng_seed")&&d.nodes.some(_=>_.op==="prng_make")&&p.push("'prng_seed': ctx.builtins['prng_seed']")}if(this.ir)for(const l of[...this.ir.inputs||[],...this.ir.tuningParams||[]])l.type==="texture2d"&&p.push(`'tex_bound_${l.id}': ctx.inputs.get('tex_bound_${l.id}') ?? 0`);return`{ ${p.join(", ")} }`}}class Kr{constructor(t){this.device=t.device,this.executor=t.executor,this.resources=t.resources,this.inputs=t.inputs||new Map,this.onResizeCallback=t.onResizeCallback,this.logHandler=t.logHandler}async dispatch(t,r,n){const a={...Object.fromEntries(this.inputs.entries()),...n};await this.executor.executeShader(t,r,a,this.resources)}async draw(t,r,n,a,s){const o={...Object.fromEntries(this.inputs.entries())};await this.executor.executeDraw(t,r,n,a,s,this.resources,o)}executeSyncToCpu(t){this.executor.executeSyncToCpu(t,this.resources)}async executeWaitCpuSync(t){await this.executor.executeWaitCpuSync(t,this.resources)}resize(t,r,n,a){const s=this.resources.get(t);if(s){if(s.def.type==="buffer"){const o=typeof r=="number"?r:r[0];if(s.data&&s.data.length===o&&a===void 0)return;const i=a!==void 0||s.def.persistence?.clearOnResize!==!1;if(s.width=o,i)s.data=new Array(o).fill(a??0),s.flags&&(s.flags.cpuDirty=!0);else{const c=s.data||[];o<=c.length?s.data=c.slice(0,o):s.data=[...c,...new Array(o-c.length).fill(0)],s.gpuBuffer&&(s._preserveGpuOnResize=!0)}}else if(s.def.type==="texture2d"){const o=Array.isArray(r)?r[0]:r,i=Array.isArray(r)?r[1]:1;s.width=o,s.height=i,n!==void 0&&(s.def.format=n),a!==void 0&&(s.data=new Array(o*i).fill(a))}this.onResizeCallback&&this.onResizeCallback(t,r,n)}}copyBuffer(t,r,n,a,s){this.executor.executeCopyBuffer(t,r,n,a,s,this.resources)}copyTexture(t,r,n,a,s,o,i){this.executor.executeCopyTexture(t,r,n,a,s,o,i,this.resources)}log(t,r){this.logHandler&&this.logHandler(t,r)}}class Qr{constructor(t){this.builtins={time:0,delta_time:0,bpm:0,beat_number:0,beat_delta:0,prng_seed:0},this.compiledCode=t.compiledCode,this.host=t.host,this.resources=ye(t.ir)}setBuiltins(t){this.builtins={...this.builtins,...t}}async execute(t){return await this.compiledCode.task({resources:this.host.resources,inputs:t,globals:this.host,builtins:this.builtins})}}K.RGBA8;K.RGBA8;K.RGBA8;K.RGBA8;K.RGBA8;K.RGBA8;K.RGBA8,K.RGBA8;K.RGBA8;const qc=29850,Nc=29671,jc=16;function cr(e,t,r,n){return[{id:`${e}_lc`,op:"math_sub",a:"cell_x",b:r},{id:`${e}_lr`,op:"math_sub",a:"cell_y",b:n},{id:`${e}_lc_lo`,op:"math_step",edge:0,x:`${e}_lc`},{id:`${e}_lc_hi`,op:"math_step",edge:3,x:`${e}_lc`},{id:`${e}_lc_in`,op:"math_sub",a:`${e}_lc_lo`,b:`${e}_lc_hi`},{id:`${e}_lr_lo`,op:"math_step",edge:0,x:`${e}_lr`},{id:`${e}_lr_hi`,op:"math_step",edge:5,x:`${e}_lr`},{id:`${e}_lr_in`,op:"math_sub",a:`${e}_lr_lo`,b:`${e}_lr_hi`},{id:`${e}_in`,op:"math_mul",a:`${e}_lc_in`,b:`${e}_lr_in`},{id:`${e}_ri3`,op:"math_mul",a:`${e}_lr`,b:3},{id:`${e}_bi`,op:"math_add",a:`${e}_ri3`,b:`${e}_lc`},{id:`${e}_pw`,op:"math_pow",a:2,b:`${e}_bi`},{id:`${e}_dv`,op:"math_div",a:t,b:`${e}_pw`},{id:`${e}_fl`,op:"math_floor",val:`${e}_dv`},{id:`${e}_bit`,op:"math_mod",a:`${e}_fl`,b:2},{id:`${e}_dot`,op:"math_mul",a:`${e}_in`,b:`${e}_bit`}]}function Vc(){return[{id:"tex_size",op:"resource_get_size",resource:"output"},{id:"dim_min",op:"math_min",a:"tex_size.x",b:"tex_size.y"},{id:"cell_target",op:"math_div",a:"dim_min",b:jc},{id:"cols_raw",op:"math_div",a:"tex_size.x",b:"cell_target"},{id:"rows_raw",op:"math_div",a:"tex_size.y",b:"cell_target"},{id:"cols_r",op:"math_add",a:"cols_raw",b:.5},{id:"rows_r",op:"math_add",a:"rows_raw",b:.5},{id:"cols",op:"math_floor",val:"cols_r"},{id:"rows",op:"math_floor",val:"rows_r"},{id:"half_cols",op:"math_div",a:"cols",b:2},{id:"half_cols_fl",op:"math_floor",val:"half_cols"},{id:"digit_col",op:"math_sub",a:"half_cols_fl",b:1},{id:"half_rows",op:"math_div",a:"rows",b:2},{id:"half_rows_fl",op:"math_floor",val:"half_rows"},{id:"digit_row",op:"math_sub",a:"half_rows_fl",b:2},{id:"s0",op:"buffer_store",buffer:"grid_params",index:0,value:"cols",exec_out:"s1"},{id:"s1",op:"buffer_store",buffer:"grid_params",index:1,value:"rows",exec_out:"s2"},{id:"s2",op:"buffer_store",buffer:"grid_params",index:2,value:"digit_col",exec_out:"s3"},{id:"s3",op:"buffer_store",buffer:"grid_params",index:3,value:"digit_row",exec_out:"dispatch"},{id:"dispatch",op:"cmd_dispatch",func:"fn_render",threads:"tex_size"}]}function Gc(){return[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"time",op:"builtin_get",name:"time"},{id:"number",op:"var_get",var:"u_number"},{id:"cols",op:"buffer_load",buffer:"grid_params",index:0},{id:"rows",op:"buffer_load",buffer:"grid_params",index:1},{id:"digit_col",op:"buffer_load",buffer:"grid_params",index:2},{id:"digit_row",op:"buffer_load",buffer:"grid_params",index:3},{id:"gid_xf",op:"static_cast_float",val:"gid.x"},{id:"gid_yf",op:"static_cast_float",val:"gid.y"},{id:"tex_size",op:"resource_get_size",resource:"output"},{id:"cx_num",op:"math_mul",a:"gid_xf",b:"cols"},{id:"cx_div",op:"math_div",a:"cx_num",b:"tex_size.x"},{id:"cell_x",op:"math_floor",val:"cx_div"},{id:"cy_num",op:"math_mul",a:"gid_yf",b:"rows"},{id:"cy_div",op:"math_div",a:"cy_num",b:"tex_size.y"},{id:"cell_y",op:"math_floor",val:"cy_div"},{id:"left_x",op:"math_sub",a:"gid_xf",b:1},{id:"lcx_num",op:"math_mul",a:"left_x",b:"cols"},{id:"lcx_div",op:"math_div",a:"lcx_num",b:"tex_size.x"},{id:"left_cell",op:"math_floor",val:"lcx_div"},{id:"top_y",op:"math_sub",a:"gid_yf",b:1},{id:"tcy_num",op:"math_mul",a:"top_y",b:"rows"},{id:"tcy_div",op:"math_div",a:"tcy_num",b:"tex_size.y"},{id:"top_cell",op:"math_floor",val:"tcy_div"},{id:"dx",op:"math_sub",a:"cell_x",b:"left_cell"},{id:"dx_abs",op:"math_abs",val:"dx"},{id:"is_vline",op:"math_step",edge:.5,x:"dx_abs"},{id:"dy",op:"math_sub",a:"cell_y",b:"top_cell"},{id:"dy_abs",op:"math_abs",val:"dy"},{id:"is_hline",op:"math_step",edge:.5,x:"dy_abs"},{id:"is_gridline",op:"math_max",a:"is_vline",b:"is_hline"},{id:"gu",op:"math_mul",a:"nuv.x",b:"cols"},{id:"r1_lo",op:"math_step",edge:1,x:"cell_y"},{id:"r1_hi",op:"math_step",edge:2,x:"cell_y"},{id:"is_row1",op:"math_sub",a:"r1_lo",b:"r1_hi"},{id:"gray_row",op:"math_sub",a:"rows",b:2},{id:"gray_row_p1",op:"math_add",a:"gray_row",b:1},{id:"rg_lo",op:"math_step",edge:"gray_row",x:"cell_y"},{id:"rg_hi",op:"math_step",edge:"gray_row_p1",x:"cell_y"},{id:"is_gray_row",op:"math_sub",a:"rg_lo",b:"rg_hi"},{id:"cols_m1",op:"math_sub",a:"cols",b:1},{id:"inset_lo",op:"math_step",edge:1,x:"cell_x"},{id:"inset_hi",op:"math_step",edge:"cols_m1",x:"cell_x"},{id:"is_inset",op:"math_sub",a:"inset_lo",b:"inset_hi"},{id:"is_spectrum",op:"math_mul",a:"is_row1",b:"is_inset"},{id:"is_grayscale",op:"math_mul",a:"is_gray_row",b:"is_inset"},{id:"slant_y",op:"math_mul",a:"nuv.y",b:.5},{id:"slant_t",op:"math_add",a:"nuv.x",b:"slant_y"},{id:"bell_spd",op:"math_mul",a:"time",b:.3},{id:"bell_wrap",op:"math_mod",a:"bell_spd",b:2},{id:"bell_ctr",op:"math_sub",a:"bell_wrap",b:.25},{id:"bell_d",op:"math_sub",a:"slant_t",b:"bell_ctr"},{id:"bell_ds",op:"math_mul",a:"bell_d",b:2},{id:"bell_dc",op:"math_clamp",val:"bell_ds",min:-1,max:1},{id:"bell_rad",op:"math_mul",a:"bell_dc",b:3.14159},{id:"bell_cos",op:"math_cos",val:"bell_rad"},{id:"bell_p1",op:"math_add",a:"bell_cos",b:1},{id:"bell",op:"math_mul",a:"bell_p1",b:.5},{id:"ck_sum",op:"math_add",a:"cell_x",b:"cell_y"},{id:"ck_mod",op:"math_mod",a:"ck_sum",b:2},{id:"checker_full",op:"math_mix",a:.15,b:.65,t:"ck_mod"},{id:"bell_half",op:"math_mul",a:"bell",b:.5},{id:"bell_bias",op:"math_add",a:"bell_half",b:.5},{id:"checker",op:"math_mix",a:.4,b:"checker_full",t:"bell_bias"},{id:"cols_m2",op:"math_sub",a:"cols",b:2},{id:"grad_raw",op:"math_sub",a:"gu",b:1},{id:"grad_div",op:"math_div",a:"grad_raw",b:"cols_m2"},{id:"grad",op:"math_clamp",val:"grad_div",min:0,max:1},{id:"hr_fr",op:"math_fract",val:"grad"},{id:"hr6",op:"math_mul",a:"hr_fr",b:6},{id:"hr3",op:"math_sub",a:"hr6",b:3},{id:"hr_abs",op:"math_abs",val:"hr3"},{id:"hr_sub1",op:"math_sub",a:"hr_abs",b:1},{id:"spec_r",op:"math_clamp",val:"hr_sub1",min:0,max:1},{id:"hg_off",op:"math_add",a:"grad",b:.6667},{id:"hg_fr",op:"math_fract",val:"hg_off"},{id:"hg6",op:"math_mul",a:"hg_fr",b:6},{id:"hg3",op:"math_sub",a:"hg6",b:3},{id:"hg_abs",op:"math_abs",val:"hg3"},{id:"hg_sub1",op:"math_sub",a:"hg_abs",b:1},{id:"spec_g",op:"math_clamp",val:"hg_sub1",min:0,max:1},{id:"hb_off",op:"math_add",a:"grad",b:.3333},{id:"hb_fr",op:"math_fract",val:"hb_off"},{id:"hb6",op:"math_mul",a:"hb_fr",b:6},{id:"hb3",op:"math_sub",a:"hb6",b:3},{id:"hb_abs",op:"math_abs",val:"hb3"},{id:"hb_sub1",op:"math_sub",a:"hb_abs",b:1},{id:"spec_b",op:"math_clamp",val:"hb_sub1",min:0,max:1},{id:"ns1",op:"math_sub",a:1,b:"is_spectrum"},{id:"ns2",op:"math_sub",a:1,b:"is_grayscale"},{id:"not_special",op:"math_mul",a:"ns1",b:"ns2"},{id:"sr",op:"math_mul",a:"is_spectrum",b:"spec_r"},{id:"sg",op:"math_mul",a:"is_spectrum",b:"spec_g"},{id:"sb",op:"math_mul",a:"is_spectrum",b:"spec_b"},{id:"gscale",op:"math_mul",a:"is_grayscale",b:"grad"},{id:"cr",op:"math_mul",a:"not_special",b:"checker"},{id:"gs_cr",op:"math_add",a:"gscale",b:"cr"},{id:"bg_r",op:"math_add",a:"sr",b:"gs_cr"},{id:"bg_g",op:"math_add",a:"sg",b:"gs_cr"},{id:"bg_b",op:"math_add",a:"sb",b:"gs_cr"},{id:"abs_num",op:"math_abs",val:"number"},{id:"mod2",op:"math_mod",a:"abs_num",b:2},{id:"is_odd",op:"math_step",edge:.5,x:"mod2"},...cr("d1",qc,"digit_col","digit_row"),...cr("d2",Nc,"digit_col","digit_row"),{id:"digit_on",op:"math_mix",a:"d2_dot",b:"d1_dot",t:"is_odd"},{id:"fill",op:"math_mul",a:"is_odd",b:1},{id:"final_r",op:"math_mix",a:"bg_r",b:"fill",t:"digit_on"},{id:"final_g",op:"math_mix",a:"bg_g",b:"fill",t:"digit_on"},{id:"final_b",op:"math_mix",a:"bg_b",b:"fill",t:"digit_on"},{id:"out_r",op:"math_mix",a:"final_r",b:.2,t:"is_gridline"},{id:"out_g",op:"math_mix",a:"final_g",b:.2,t:"is_gridline"},{id:"out_b",op:"math_mix",a:"final_b",b:.2,t:"is_gridline"},{id:"color",op:"float4",x:"out_r",y:"out_g",z:"out_b",w:1},{id:"store",op:"texture_store",tex:"output",coords:"gid.xy",value:"color"}]}const jt={version:"1.0.0",meta:{name:"Test Card"},comment:"Colour reference: dynamic grid with spectrum row, grayscale row, checkerboard with animated contrast, and dot-matrix digit.",entryPoint:"main",inputs:[{id:"u_number",type:"int",default:1,label:"Number",ui:{min:0,max:99}}],resources:[{id:"output",type:"texture2d",format:K.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!0}},{id:"grid_params",type:"buffer",dataType:"float",size:{mode:"fixed",value:4},persistence:{retain:!1,clearEveryFrame:!1,clearOnResize:!1,cpuAccess:!1}}],structs:[],functions:[{id:"main",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:Vc()},{id:"fn_render",type:"shader",comment:"Test card: spectrum row, grayscale row, checkerboard, single-pixel grid, dot-matrix digit.",inputs:[],outputs:[],localVars:[],nodes:Gc()}]};K.RGBA8;class Lc{constructor(){this.compiledCode=null,this.gpuExecutor=null,this.cachedDevice=null}async render(t,r,n,a=0){await this.ensureCompiled(t);const s=ye(jt),o=s.get("output");o.gpuTexture=r,o.width=r.width,o.height=r.height;const i=new Map([["u_number",n]]),c=new Kr({device:t,executor:this.gpuExecutor,resources:s,inputs:i}),u=new Qr({ir:jt,compiledCode:this.compiledCode,host:c});u.setBuiltins({time:a}),await u.execute(i);const m=s.get("grid_params");m?.gpuBuffer&&m.gpuBuffer.destroy()}async ensureCompiled(t){if(!this.compiledCode){const r=new Uc;this.compiledCode=r.compile(jt,jt.entryPoint)}(!this.gpuExecutor||this.cachedDevice!==t)&&(this.gpuExecutor=await this.compiledCode.init(t),this.cachedDevice=t)}destroy(){this.compiledCode=null,this.gpuExecutor=null,this.cachedDevice=null}}let V=null,ct=null,kt=null,he=null,Ft=null,X=new Map,rt=new Map,$t=[],Oe=new Lc,Dt=new Map,pt=new Set,_e=new Set,gt=!1,re=0,wt=0,bt=0,Wt=0,Ot=null,Jt=null,ur=0,lr=0,fr=new Map,tn=null,Ct=null,ge=null,Yt=null;self.onmessage=async e=>{const t=e.data;try{switch(t.type){case"set-canvas":ct=t.canvas;break;case"resize-canvas":ur=Math.floor(t.width*t.dpr),lr=Math.floor(t.height*t.dpr),ct&&(ct.width=ur,ct.height=lr);break;case"set-compiled":await Wc(t.ir,t.finalInitCode,t.finalTaskCode);break;case"play":gt=!0;break;case"pause":gt=!1;break;case"stop":gt=!1,re=0,wt=0,bt=0;break;case"step":gt=!1,await pr(performance.now());break;case"tick":gt&&await pr(t.time);break;case"set-input":{rt.set(t.id,t.value);break}case"set-texture-input":{pt.delete(t.id),fr.set(t.id,t.bitmap),Hc(t.id,t.bitmap),rt.set(`tex_bound_${t.id}`,1);break}case"reset-texture-to-test-card":{if(fr.delete(t.id),_e.has(t.id)){rt.set(`tex_bound_${t.id}`,0);const r=X.get(t.id);if(r?.gpuTexture&&V){const n=r.gpuTexture.width*4*4,a=new Float32Array(r.gpuTexture.width*r.gpuTexture.height*4);V.queue.writeTexture({texture:r.gpuTexture},a,{bytesPerRow:n},{width:r.gpuTexture.width,height:r.gpuTexture.height})}}else{pt.add(t.id),rt.set(`tex_bound_${t.id}`,1);const r=X.get(t.id),n=Dt.get(t.id)??1;r?.gpuTexture&&V&&await Oe.render(V,r.gpuTexture,n,wt)}break}case"capture-screenshot":await Qc();break}}catch(r){const n={type:"error",message:r.message||String(r)};self.postMessage(n)}};async function Fc(){if(V)return V;const e=self.navigator?.gpu;if(!e)throw new Error("WebGPU not available in worker");const t=await e.requestAdapter();if(!t)throw new Error("No GPU adapter found");return V=await t.requestDevice(),V}async function Wc(e,t,r){try{const n=await Fc();tn=e;const a=Object.getPrototypeOf(async function(){}).constructor,s=new a("device",t),o=new a("ctx",r);X=ye(e),X.forEach((p,f)=>{if(p.def.type==="texture2d"){let l=Ht.width,h=Ht.height;const _=p.def.size;if(_){if(_.mode==="fixed"){const g=_.value;Array.isArray(g)?(l=g[0],h=g[1]):(l=g,h=g)}else if(_.mode==="reference"){const g=_.ref,y=X.get(g);y&&(l=y.width,h=y.height)}}p.width=l,p.height=h,p.gpuTexture=n.createTexture({label:`Resource: ${f}`,size:[l,h],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}}),$t=[],rt.clear(),Dt.clear(),pt.clear(),_e.clear();const i=[];[...(e.inputs||[]).map(p=>({...p,_isTuning:!1})),...(e.tuningParams||[]).map(p=>({...p,_isTuning:!0}))].forEach(p=>{const f=tu(p.type);if(!f)return;const l={id:p.id,type:f,label:p.label||p.id,currentValue:p.default,defaultValue:p.default,min:p.ui?.min,max:p.ui?.max,isTuningParam:p._isTuning};if(p.type==="texture2d")if($t.push(p.id),l.currentValue=p.id,rt.set(p.id,p.id),p.sidechannel)_e.add(p.id),rt.set(`tex_bound_${p.id}`,0),l.isSidechannel=!0;else{const _=($t.length-1)%2+1;Dt.set(p.id,_),pt.add(p.id),rt.set(`tex_bound_${p.id}`,1)}else p.default!==void 0&&rt.set(p.id,p.default);i.push(l)});for(const p of pt){const f=X.get(p),l=Dt.get(p)??1;f?.gpuTexture&&await Oe.render(n,f.gpuTexture,l)}const u=await s(n);he=new Kr({device:n,executor:u,resources:X,inputs:rt,logHandler:(p,f)=>console.log(p,f)});const m={taskCode:"",initCode:"",finalTaskCode:r,finalInitCode:t,task:o,init:s};Ft=new Qr({ir:e,compiledCode:m,host:he}),re=0,wt=0,bt=0,Wt=0;const d={type:"compiled-ok",inputEntries:i};self.postMessage(d)}catch(n){const a={type:"compiled-error",message:n.message||String(n)};self.postMessage(a)}}async function pr(e){if(!Ft||!he||!V)return;const t=bt>0?e-bt:0,r=Math.min(t/1e3,.1);wt+=r,Ft.setBuiltins({time:wt,delta_time:r,prng_seed:Math.random()});try{if(pt.size>0)for(const s of pt){const o=X.get(s),i=Dt.get(s)??1;o?.gpuTexture&&await Oe.render(V,o.gpuTexture,i,wt)}await Ft.execute(rt),re++;const n=e-bt;if(n>0){const s=1e3/n;Wt=.9*Wt+.1*s}bt=e,Jc();const a={type:"frame",frameCount:re,fps:Wt};self.postMessage(a)}catch(n){gt=!1;const a={type:"error",message:`Frame error: ${n.message||String(n)}`};self.postMessage(a)}}function Jc(){if(!ct||!V)return;const e=en();if(!e)return;const t=X.get(e);if(!t?.gpuTexture)return;if(!kt){if(kt=ct.getContext("webgpu"),!kt)return;kt.configure({device:V,format:"bgra8unorm",alphaMode:"premultiplied"})}if(Ot||Yc(V),!Ot||!Jt)return;const r=t.gpuTexture,n=ct.width,a=ct.height,s=r.width,o=r.height,i=n/a,c=s/o;let u=1,m=1;c>i?m=i/c:u=c/i;const d=new Float32Array([u,m,0,0,n,a,s,o]);V.queue.writeBuffer(Jt,0,d);const p=V.createCommandEncoder(),f=p.beginRenderPass({colorAttachments:[{view:kt.getCurrentTexture().createView(),clearValue:{r:.067,g:.067,b:.067,a:1},loadOp:"clear",storeOp:"store"}]}),l=V.createBindGroup({layout:Ot.getBindGroupLayout(0),entries:[{binding:0,resource:r.createView()},{binding:1,resource:{buffer:Jt}}]});f.setPipeline(Ot),f.setBindGroup(0,l),f.draw(4),f.end(),V.queue.submit([p.finish()])}function Yc(e){const r=e.createShaderModule({code:`
    struct Params {
      scale: vec2<f32>,
      offset: vec2<f32>,
      screenSize: vec2<f32>,
      texSize: vec2<f32>,
    }
    @group(0) @binding(1) var<uniform> params: Params;

    @vertex
    fn vert_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4<f32> {
      var pos = array<vec2<f32>, 4>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(1.0, 1.0)
      );
      return vec4<f32>(pos[vertexIndex] * params.scale + params.offset, 0.0, 1.0);
    }

    @group(0) @binding(0) var t_src: texture_2d<f32>;

    @fragment
    fn frag_main(@builtin(position) fragPos: vec4<f32>) -> @location(0) vec4<f32> {
      let gridSize = 16.0;
      let grid = floor(fragPos.xy / gridSize);
      let checker = (i32(grid.x) + i32(grid.y)) % 2;
      let bgColor = select(vec4<f32>(0.15, 0.15, 0.15, 1.0), vec4<f32>(0.2, 0.2, 0.2, 1.0), checker == 0);

      let quadOrigin = (params.screenSize - params.screenSize * params.scale) * 0.5;
      let quadSize = params.screenSize * params.scale;
      let posInQuad = fragPos.xy - quadOrigin;
      let texCoord = vec2<i32>(floor(posInQuad * params.texSize / quadSize));
      let clamped = clamp(texCoord, vec2<i32>(0), vec2<i32>(params.texSize) - 1);
      let srcColor = textureLoad(t_src, clamped, 0);

      return mix(bgColor, srcColor, srcColor.a);
    }
  `});Ot=e.createRenderPipeline({layout:"auto",vertex:{module:r,entryPoint:"vert_main"},fragment:{module:r,entryPoint:"frag_main",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-strip"}}),Jt=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}function Hc(e,t){if(!V)return;const r=X.get(e);if(!r?.gpuTexture)return;const n=t.width,a=t.height,s=V.createTexture({label:`TempUpload: ${e}`,size:[n,a],format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT});V.queue.copyExternalImageToTexture({source:t},{texture:s},[n,a]),Xc(V,s,r.gpuTexture),s.destroy()}function Xc(e,t,r){if(Ct||Kc(e),!Ct||!ge||!Yt)return;const n=r.width,a=r.height,s=t.width,o=t.height,i=n/a,c=s/o;let u=1,m=1;c>i?m=i/c:u=c/i;const d=new Float32Array([u,m,0,0]);e.queue.writeBuffer(Yt,0,d);const p=e.createCommandEncoder(),f=p.beginRenderPass({colorAttachments:[{view:r.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]}),l=e.createBindGroup({layout:Ct.getBindGroupLayout(0),entries:[{binding:0,resource:t.createView()},{binding:1,resource:ge},{binding:2,resource:{buffer:Yt}}]});f.setPipeline(Ct),f.setBindGroup(0,l),f.draw(4),f.end(),e.queue.submit([p.finish()])}function Kc(e){const r=e.createShaderModule({code:`
    struct Params {
      scale: vec2<f32>,
      offset: vec2<f32>,
    }
    @group(0) @binding(2) var<uniform> params: Params;

    struct VertexOutput {
      @builtin(position) position: vec4<f32>,
      @location(0) uv: vec2<f32>,
    }

    @vertex
    fn vert_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
      var pos = array<vec2<f32>, 4>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(1.0, 1.0)
      );
      var uv = array<vec2<f32>, 4>(
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0)
      );
      var out: VertexOutput;
      out.position = vec4<f32>(pos[vertexIndex] * params.scale + params.offset, 0.0, 1.0);
      out.uv = uv[vertexIndex];
      return out;
    }

    @group(0) @binding(0) var t_src: texture_2d<f32>;
    @group(0) @binding(1) var s_src: sampler;

    @fragment
    fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
      return textureSample(t_src, s_src, uv);
    }
  `});Ct=e.createRenderPipeline({layout:"auto",vertex:{module:r,entryPoint:"vert_main"},fragment:{module:r,entryPoint:"frag_main",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-strip"}}),ge=e.createSampler({magFilter:"linear",minFilter:"linear"}),Yt=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}async function Qc(){if(!V){const f={type:"error",message:"No GPU device"};self.postMessage(f);return}const e=en();if(!e){const f={type:"error",message:"No output texture"};self.postMessage(f);return}const t=X.get(e);if(!t?.gpuTexture){const f={type:"error",message:"No GPU texture for output"};self.postMessage(f);return}const r=t.gpuTexture,n=r.width,a=r.height,s=Math.ceil(n*4/256)*256,o=s*a,i=V.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),c=V.createCommandEncoder();c.copyTextureToBuffer({texture:r},{buffer:i,bytesPerRow:s,rowsPerImage:a},[n,a]),V.queue.submit([c.finish()]),await i.mapAsync(GPUMapMode.READ);const u=i.getMappedRange(),m=new Uint8Array(n*a*4),d=new Uint8Array(u);for(let f=0;f<a;f++)m.set(d.subarray(f*s,f*s+n*4),f*n*4);i.unmap(),i.destroy();const p={type:"screenshot",pixels:m.buffer,width:n,height:a};self.postMessage(p,{transfer:[m.buffer]})}function en(){if(!tn)return null;for(const[r,n]of X)if(n.def.isOutput&&n.def.type==="texture2d")return r;const e=["t_output","output_tex","out_tex","t_out"];for(const r of e)if(X.has(r))return r;let t=null;for(const[r,n]of X)n.def.type==="texture2d"&&(t=r);return t||($t.length>0?$t[$t.length-1]:null)}function tu(e){switch(e){case"texture2d":return"texture";case"bool":return"bool";case"int":return"int";case"float":return"float";case"float2":return"float2";case"float3":return"float3";case"float4":return"float4";default:return null}}const eu={type:"ready"};self.postMessage(eu);
//# sourceMappingURL=runtime-worker-BdjwhJYm.js.map
