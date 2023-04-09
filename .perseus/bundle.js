let wasm;const heap=new Array(128).fill(undefined);heap.push(undefined,null,true,false);function getObject(a){return heap[a]}let WASM_VECTOR_LEN=0;let cachedUint8Memory0=null;function getUint8Memory0(){if(cachedUint8Memory0===null||cachedUint8Memory0.byteLength===0){cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)};return cachedUint8Memory0}const cachedTextEncoder=new TextEncoder('utf-8');const encodeString=typeof cachedTextEncoder.encodeInto==='function'?function(a,b){return cachedTextEncoder.encodeInto(a,b)}:function(a,b){const c=cachedTextEncoder.encode(a);b.set(c);return {read:a.length,written:c.length}};function passStringToWasm0(a,b,c){if(c===undefined){const h=cachedTextEncoder.encode(a);const i=b(h.length);getUint8Memory0().subarray(i,i+ h.length).set(h);WASM_VECTOR_LEN=h.length;return i};let d=a.length;let e=b(d);const f=getUint8Memory0();let g=0;for(;g<d;g++){const h=a.charCodeAt(g);if(h>0x7F)break;f[e+ g]=h};if(g!==d){if(g!==0){a=a.slice(g)};e=c(e,d,d=g+ a.length*3);const h=getUint8Memory0().subarray(e+ g,e+ d);const i=encodeString(a,h);g+=i.written};WASM_VECTOR_LEN=g;return e}function isLikeNone(a){return a===undefined||a===null}let cachedInt32Memory0=null;function getInt32Memory0(){if(cachedInt32Memory0===null||cachedInt32Memory0.byteLength===0){cachedInt32Memory0=new Int32Array(wasm.memory.buffer)};return cachedInt32Memory0}let heap_next=heap.length;function addHeapObject(a){if(heap_next===heap.length)heap.push(heap.length+ 1);const b=heap_next;heap_next=heap[b];heap[b]=a;return b}const cachedTextDecoder=new TextDecoder('utf-8',{ignoreBOM:true,fatal:true});cachedTextDecoder.decode();function getStringFromWasm0(a,b){return cachedTextDecoder.decode(getUint8Memory0().subarray(a,a+ b))}function dropObject(a){if(a<132)return;heap[a]=heap_next;heap_next=a}function takeObject(a){const b=getObject(a);dropObject(a);return b}function debugString(a){const b=typeof a;if(b=='number'||b=='boolean'||a==null){return `${a}`};if(b=='string'){return `"${a}"`};if(b=='symbol'){const e=a.description;if(e==null){return 'Symbol'}else{return `Symbol(${e})`}};if(b=='function'){const e=a.name;if(typeof e=='string'&&e.length>0){return `Function(${e})`}else{return 'Function'}};if(Array.isArray(a)){const e=a.length;let f='[';if(e>0){f+=debugString(a[0])};for(let g=1;g<e;g++){f+=', '+ debugString(a[g])};f+=']';return f};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>1){d=c[1]}else{return toString.call(a)};if(d=='Object'){try{return 'Object('+ JSON.stringify(a)+ ')'}catch(e){return 'Object'}};if(a instanceof Error){return `${a.name}: ${a.message}\n${a.stack}`};return d}function makeClosure(a,b,c,d){const e={a:a,b:b,cnt:1,dtor:c};const f=(...g)=>{e.cnt++;try{return d(e.a,e.b,...g)}finally{if(--e.cnt===0){wasm.__wbindgen_export_2.get(e.dtor)(e.a,e.b);e.a=0}}};f.original=e;return f}let cachedUint32Memory0=null;function getUint32Memory0(){if(cachedUint32Memory0===null||cachedUint32Memory0.byteLength===0){cachedUint32Memory0=new Uint32Array(wasm.memory.buffer)};return cachedUint32Memory0}function passArrayJsValueToWasm0(a,b){const c=b(a.length*4);const d=getUint32Memory0();for(let e=0;e<a.length;e++){d[c/4+ e]=addHeapObject(a[e])};WASM_VECTOR_LEN=a.length;return c}function __wbg_adapter_22(a,b,c){const d=passArrayJsValueToWasm0(c,wasm.__wbindgen_malloc);const e=WASM_VECTOR_LEN;wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf45469d3b96651ef(a,b,d,e)}function makeMutClosure(a,b,c,d){const e={a:a,b:b,cnt:1,dtor:c};const f=(...g)=>{e.cnt++;const h=e.a;e.a=0;try{return d(h,e.b,...g)}finally{if(--e.cnt===0){wasm.__wbindgen_export_2.get(e.dtor)(h,e.b)}else{e.a=h}}};f.original=e;return f}function __wbg_adapter_25(a,b,c){wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h30f1823335b5f54a(a,b,addHeapObject(c))}function __wbg_adapter_28(a,b){wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1bc23bcf129a0f31(a,b)}function __wbg_adapter_31(a,b){wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc3a58360f6b04a64(a,b)}function handleError(a,b){try{return a.apply(this,b)}catch(c){wasm.__wbindgen_exn_store(addHeapObject(c))}}function getCachedStringFromWasm0(a,b){if(a===0){return getObject(b)}else{return getStringFromWasm0(a,b)}}async function load(a,b){if(typeof Response==='function'&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming==='function'){try{return await WebAssembly.instantiateStreaming(a,b)}catch(d){if(a.headers.get('Content-Type')!='application/wasm'){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d)}else{throw d}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}}function getImports(){const a={};a.wbg={};a.wbg.__wbindgen_string_get=function(b,c){const f=getObject(c);const g=typeof f==='string'?f:undefined;var d=isLikeNone(g)?0:passStringToWasm0(g,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var e=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=e;getInt32Memory0()[b/4+ 0]=d};a.wbg.__wbg_createTextNode_a7d5f5b956acda97=function(b,c){const d=getObject(b).createTextNode(c);return addHeapObject(d)};a.wbg.__wbindgen_object_clone_ref=function(b){const c=getObject(b);return addHeapObject(c)};a.wbg.__wbindgen_string_new=function(b,c){const d=getStringFromWasm0(b,c);return addHeapObject(d)};a.wbg.__wbg_log_7bb108d119bafbc1=function(b){console.log(getObject(b))};a.wbg.__wbg_children_93bcc921a4904ad4=function(b){const c=getObject(b).children;return addHeapObject(c)};a.wbg.__wbg_new_f9876326328f45ed=function(){const b=new Object();return addHeapObject(b)};a.wbg.__wbg_newwithoptions_d0b8cbb7bcf679be=function(){return handleError(function(b,c){const d=new IntersectionObserver(getObject(b),getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_observe_6cba8679973bf84a=function(b,c){getObject(b).observe(getObject(c))};a.wbg.__wbg_target_608322de7560c1a4=function(b){const c=getObject(b).target;return addHeapObject(c)};a.wbg.__wbg_isIntersecting_3f4c21f625385419=function(b){const c=getObject(b).isIntersecting;return c};a.wbg.__wbindgen_object_drop_ref=function(b){takeObject(b)};a.wbg.__wbg_setTimeout_75cb9b6991a4031d=function(){return handleError(function(b,c){const d=setTimeout(getObject(b),c);return addHeapObject(d)},arguments)};a.wbg.__wbg_self_e7c1f827057f6584=function(){return handleError(function(){const b=self.self;return addHeapObject(b)},arguments)};a.wbg.__wbg_window_a09ec664e14b1b81=function(){return handleError(function(){const b=window.window;return addHeapObject(b)},arguments)};a.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return handleError(function(){const b=globalThis.globalThis;return addHeapObject(b)},arguments)};a.wbg.__wbg_global_c85a9259e621f3db=function(){return handleError(function(){const b=global.global;return addHeapObject(b)},arguments)};a.wbg.__wbindgen_is_undefined=function(b){const c=getObject(b)===undefined;return c};a.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(b,c){var d=getCachedStringFromWasm0(b,c);const e=new Function(d);return addHeapObject(e)};a.wbg.__wbg_call_95d1ea488d03e4e8=function(){return handleError(function(b,c){const d=getObject(b).call(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_decodeURIComponent_883a149b651f17b8=function(){return handleError(function(b,c){var d=getCachedStringFromWasm0(b,c);const e=decodeURIComponent(d);return addHeapObject(e)},arguments)};a.wbg.__wbg_eval_be0434aab6074e1e=function(){return handleError(function(b,c){var d=getCachedStringFromWasm0(b,c);const e=eval(d);return addHeapObject(e)},arguments)};a.wbg.__wbg_is_8f1618fe9a4fd388=function(b,c){const d=Object.is(getObject(b),getObject(c));return d};a.wbg.__wbg_set_6aa458a4ebdb65cb=function(){return handleError(function(b,c,d){const e=Reflect.set(getObject(b),getObject(c),getObject(d));return e},arguments)};a.wbg.__wbg_nodeId_bbf0efafa303e805=function(b,c){const d=getObject(c).$$$nodeId;getInt32Memory0()[b/4+ 1]=isLikeNone(d)?0:d;getInt32Memory0()[b/4+ 0]=!isLikeNone(d)};a.wbg.__wbg_setnodeId_433ef8ed15bd1612=function(b,c){getObject(b).$$$nodeId=c>>>0};a.wbg.__wbindgen_cb_drop=function(b){const c=takeObject(b).original;if(c.cnt--==1){c.a=0;return true};const d=false;return d};a.wbg.__wbg_replaceState_099eb1e3de220ab7=function(){return handleError(function(b,c,d,e,f,g){var h=getCachedStringFromWasm0(d,e);var i=getCachedStringFromWasm0(f,g);getObject(b).replaceState(getObject(c),h,i)},arguments)};a.wbg.__wbg_parentNode_e81e6d5dc2fc35b0=function(b){const c=getObject(b).parentNode;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_length_c54fcfc679a5bfbd=function(b){const c=getObject(b).length;return c};a.wbg.__wbg_insertAdjacentHTML_74a2c7ec34cb6448=function(){return handleError(function(b,c,d,e,f){var g=getCachedStringFromWasm0(c,d);var h=getCachedStringFromWasm0(e,f);getObject(b).insertAdjacentHTML(g,h)},arguments)};a.wbg.__wbindgen_boolean_get=function(b){const c=getObject(b);const d=typeof c==='boolean'?(c?1:0):2;return d};a.wbg.__wbg_newwithstrandinit_c45f0dc6da26fd03=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(b,c);const f=new Request(e,getObject(d));return addHeapObject(f)},arguments)};a.wbg.__wbg_fetch_465e8cb61a0f43ea=function(b,c){const d=getObject(b).fetch(getObject(c));return addHeapObject(d)};a.wbg.__wbg_instanceof_Response_fb3a4df648c1859b=function(b){let c;try{c=getObject(b) instanceof Response}catch{c=false};const d=c;return d};a.wbg.__wbg_text_f61464d781b099f0=function(){return handleError(function(b){const c=getObject(b).text();return addHeapObject(c)},arguments)};a.wbg.__wbg_documentElement_4f86b41ca49026c3=function(b){const c=getObject(b).documentElement;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_navigator_b18e629f7f0b75fa=function(b){const c=getObject(b).navigator;return addHeapObject(c)};a.wbg.__wbg_languages_6d6164e784b9ac11=function(b){const c=getObject(b).languages;return addHeapObject(c)};a.wbg.__wbg_length_e498fbc24f9c1d4f=function(b){const c=getObject(b).length;return c};a.wbg.__wbg_get_27fe3dac1c4d0224=function(b,c){const d=getObject(b)[c>>>0];return addHeapObject(d)};a.wbg.__wbg_language_9a87f1d238b2c3ed=function(b,c){const f=getObject(c).language;var d=isLikeNone(f)?0:passStringToWasm0(f,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var e=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=e;getInt32Memory0()[b/4+ 0]=d};a.wbg.__wbg_innerHTML_7356669f2f5a2c18=function(b,c){const d=getObject(c).innerHTML;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_newwitheventinitdict_3607f3d9a58509d5=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(b,c);const f=new CustomEvent(e,getObject(d));return addHeapObject(f)},arguments)};a.wbg.__wbg_dispatchEvent_615d1ccbba577081=function(){return handleError(function(b,c){const d=getObject(b).dispatchEvent(getObject(c));return d},arguments)};a.wbg.__wbg_body_be46234bb33edd63=function(b){const c=getObject(b).body;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_location_797a1856892cc2de=function(b){const c=getObject(b).location;return addHeapObject(c)};a.wbg.__wbg_querySelectorAll_aac86a231434ae8c=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelectorAll(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_tagName_92d4c105959ede9f=function(b,c){const d=getObject(c).tagName;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_outerHTML_e29ac244117c6543=function(b,c){const d=getObject(c).outerHTML;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_closest_bdf8174169489a96=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).closest(e);return isLikeNone(f)?0:addHeapObject(f)},arguments)};a.wbg.__wbg_rel_04d4fb5e3c8d34a8=function(b,c){const d=getObject(c).rel;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_origin_8bbb73d79e8079ce=function(b,c){const d=getObject(c).origin;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_pathname_4c77e5c6e0f49431=function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_hash_50bf9c4dfdcb9cbc=function(b,c){const d=getObject(c).hash;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_metaKey_9f0f19692d0498bd=function(b){const c=getObject(b).metaKey;return c};a.wbg.__wbg_ctrlKey_993b558f853d64ce=function(b){const c=getObject(b).ctrlKey;return c};a.wbg.__wbg_shiftKey_31e62e9d172b26f0=function(b){const c=getObject(b).shiftKey;return c};a.wbg.__wbg_altKey_dff2a075455ac01b=function(b){const c=getObject(b).altKey;return c};a.wbg.__wbg_origin_4361a18d29b70c77=function(){return handleError(function(b,c){const d=getObject(c).origin;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_hash_03f283be75af7a56=function(){return handleError(function(b,c){const d=getObject(c).hash;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_preventDefault_16b2170b12f56317=function(b){getObject(b).preventDefault()};a.wbg.__wbindgen_jsval_eq=function(b,c){const d=getObject(b)===getObject(c);return d};a.wbg.__wbg_createComment_2b861fdef485248f=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createComment(e);return addHeapObject(f)};a.wbg.__wbg_createTextNode_866e33a51b47f04c=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createTextNode(e);return addHeapObject(f)};a.wbg.__wbg_removeAttribute_ad7a5bf2eed30373=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).removeAttribute(e)},arguments)};a.wbg.__wbg_setclassName_f86a95d6ffe042e6=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).className=e},arguments)};a.wbg.__wbg_add_ea314b325ad27189=function(){return handleError(function(b,c){getObject(b).add(...getObject(c))},arguments)};a.wbg.__wbg_add_73f794d491a0e44f=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).add(e)},arguments)};a.wbg.__wbg_new_b525de17f44a8943=function(){const b=new Array();return addHeapObject(b)};a.wbg.__wbg_push_49c286f04dd3bf59=function(b,c){const d=getObject(b).push(getObject(c));return d};a.wbg.__wbg_remove_10fbe66510bfee98=function(){return handleError(function(b,c){getObject(b).remove(...getObject(c))},arguments)};a.wbg.__wbg_remove_f021903057d23f5e=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).remove(e)},arguments)};a.wbg.__wbg_appendChild_b8199dc1655c852d=function(){return handleError(function(b,c){const d=getObject(b).appendChild(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_insertBefore_77a7d032a91abf86=function(){return handleError(function(b,c,d){const e=getObject(b).insertBefore(getObject(c),getObject(d));return addHeapObject(e)},arguments)};a.wbg.__wbg_replaceChild_1a4aa5499fa85a63=function(){return handleError(function(b,c,d){const e=getObject(b).replaceChild(getObject(c),getObject(d));return addHeapObject(e)},arguments)};a.wbg.__wbg_nextSibling_653f43ab9380175f=function(b){const c=getObject(b).nextSibling;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_queueMicrotask_b580a35152f7cc7c=function(b){queueMicrotask(getObject(b))};a.wbg.__wbindgen_debug_string=function(b,c){const d=debugString(getObject(c));const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbindgen_throw=function(b,c){throw new Error(getStringFromWasm0(b,c))};a.wbg.__wbg_then_ec5db6d509eb475f=function(b,c){const d=getObject(b).then(getObject(c));return addHeapObject(d)};a.wbg.__wbg_then_f753623316e2873a=function(b,c,d){const e=getObject(b).then(getObject(c),getObject(d));return addHeapObject(e)};a.wbg.__wbg_resolve_fd40f858d9db1a04=function(b){const c=Promise.resolve(getObject(b));return addHeapObject(c)};a.wbg.__wbg_instanceof_Window_e266f02eee43b570=function(b){let c;try{c=getObject(b) instanceof Window}catch{c=false};const d=c;return d};a.wbg.__wbg_createElement_e2a0e21263eb5416=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createElement(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_createElementNS_0047de728927ea00=function(){return handleError(function(b,c,d,e,f){var g=getCachedStringFromWasm0(c,d);var h=getCachedStringFromWasm0(e,f);const i=getObject(b).createElementNS(g,h);return addHeapObject(i)},arguments)};a.wbg.__wbg_getElementById_eb93a47327bb5585=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).getElementById(e);return isLikeNone(f)?0:addHeapObject(f)};a.wbg.__wbg_querySelector_32b9d7ebb2df951d=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelector(e);return isLikeNone(f)?0:addHeapObject(f)},arguments)};a.wbg.__wbg_querySelectorAll_608b5716e2a3baf0=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelectorAll(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_setid_3ffcf3ad6af1d07c=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).id=e};a.wbg.__wbg_classList_c4ebb3813d3a2f5d=function(b){const c=getObject(b).classList;return addHeapObject(c)};a.wbg.__wbg_setinnerHTML_76167cda24d9b96b=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).innerHTML=e};a.wbg.__wbg_getAttribute_2c20e00a5cd314af=function(b,c,d,e){var f=getCachedStringFromWasm0(d,e);const i=getObject(c).getAttribute(f);var g=isLikeNone(i)?0:passStringToWasm0(i,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var h=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=h;getInt32Memory0()[b/4+ 0]=g};a.wbg.__wbg_setAttribute_79c9562d32d05e66=function(){return handleError(function(b,c,d,e,f){var g=getCachedStringFromWasm0(c,d);var h=getCachedStringFromWasm0(e,f);getObject(b).setAttribute(g,h)},arguments)};a.wbg.__wbg_append_a27bbb15a194e574=function(){return handleError(function(b,c){getObject(b).append(getObject(c))},arguments)};a.wbg.__wbg_target_b629c177f9bee3da=function(b){const c=getObject(b).target;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_addEventListener_615d4590d38da1c9=function(){return handleError(function(b,c,d,e){var f=getCachedStringFromWasm0(c,d);getObject(b).addEventListener(f,getObject(e))},arguments)};a.wbg.__wbg_pushState_429f091d389407b4=function(){return handleError(function(b,c,d,e,f,g){var h=getCachedStringFromWasm0(d,e);var i=getCachedStringFromWasm0(f,g);getObject(b).pushState(getObject(c),h,i)},arguments)};a.wbg.__wbg_href_e7e4e286ccd6b390=function(b,c){const d=getObject(c).href;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_item_2ab86c1e3cb70ed3=function(b,c){const d=getObject(b).item(c>>>0);return isLikeNone(d)?0:addHeapObject(d)};a.wbg.__wbg_value_1f2c9e357d18d3ea=function(b,c){const d=getObject(c).value;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_pathname_7b2f7ba43a0fdd6e=function(){return handleError(function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_settextContent_19dc6a6146112f16=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).textContent=e};a.wbg.__wbg_removeChild_794db72cbb6f21d3=function(){return handleError(function(b,c){const d=getObject(b).removeChild(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_get_8187c9b59091f3ad=function(b,c){const d=getObject(b)[c>>>0];return isLikeNone(d)?0:addHeapObject(d)};a.wbg.__wbg_status_d483a4ac847f380a=function(b){const c=getObject(b).status;return c};a.wbg.__wbg_pathname_188be9b0ca3ddf22=function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_new_2f2799a1c9c648e4=function(){return handleError(function(b,c){var d=getCachedStringFromWasm0(b,c);const e=new URL(d);return addHeapObject(e)},arguments)};a.wbg.__wbg_document_950215a728589a2d=function(b){const c=getObject(b).document;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_history_6ee959556f01f7ea=function(){return handleError(function(b){const c=getObject(b).history;return addHeapObject(c)},arguments)};a.wbg.__wbg_scrollTo_881c41fdbf5d1cdd=function(b,c,d){getObject(b).scrollTo(c,d)};a.wbg.__wbg_get_e6ae480a4b8df368=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b)[e];return isLikeNone(f)?0:addHeapObject(f)};a.wbg.__wbindgen_closure_wrapper165=function(b,c,d){const e=makeClosure(b,c,3,__wbg_adapter_22);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper532=function(b,c,d){const e=makeMutClosure(b,c,75,__wbg_adapter_25);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper1071=function(b,c,d){const e=makeMutClosure(b,c,93,__wbg_adapter_28);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper1076=function(b,c,d){const e=makeClosure(b,c,75,__wbg_adapter_31);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper2352=function(b,c,d){const e=makeMutClosure(b,c,75,__wbg_adapter_25);return addHeapObject(e)};return a}function initMemory(a,b){}function finalizeInit(a,b){wasm=a.exports;init.__wbindgen_wasm_module=b;cachedInt32Memory0=null;cachedUint32Memory0=null;cachedUint8Memory0=null;wasm.__wbindgen_start();return wasm}function initSync(a){const b=getImports();initMemory(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return finalizeInit(c,a)}async function init(a){if(typeof a==='undefined'){a=new URL('perseus_engine_bg.wasm',import.meta.url)};const b=getImports();if(typeof a==='string'||typeof Request==='function'&&a instanceof Request||typeof URL==='function'&&a instanceof URL){a=fetch(a)};initMemory(b);const {instance:c,module:d}=await load(await a,b);return finalizeInit(c,d)}export default init;;