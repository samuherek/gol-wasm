import init, { greet } from "./pkg/wasmrs.js";

console.log("We are set up.");

init().then(() => {
    greet("WebAssembly");
});
