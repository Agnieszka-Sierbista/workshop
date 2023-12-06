console.log("1");
requestAnimationFrame(() => console.log("request1"));
queueMicrotask(() => console.log("2"));
requestAnimationFrame(() => console.log("request2"));

setTimeout(() => console.log("3"), 0);
requestAnimationFrame(() => console.log("request3"));

Promise.resolve("4").then((res) => console.log(res));
requestAnimationFrame(() => console.log("request4"));

queueMicrotask(() => console.log("5"));
requestAnimationFrame(() => console.log("request5"));

console.log("6");