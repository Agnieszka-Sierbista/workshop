console.log("1");

queueMicrotask(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

Promise.resolve("4").then((res)=> console.log(res));

queueMicrotask(() => console.log("5"));

console.log("6")