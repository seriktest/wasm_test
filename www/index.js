async function init() {
    const response       = await fetch("sum.wasm");
    const arrayBuffer   = await response.arrayBuffer();
    const wasmModule       = await WebAssembly.compile(arrayBuffer);
    const instance        = await WebAssembly.instantiate(wasmModule);
    const sum                   = instance.exports.sum;
    console.log(sum(1, 500));
}
init();