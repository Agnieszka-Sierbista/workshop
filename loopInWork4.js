console.log("1");

async function asyncFunction1() {
    console.log("async1")
}
asyncFunction1();

async function asyncFunction2() {
    await 1;
    console.log("async2")
}
asyncFunction2();

requestAnimationFrame(() => console.log("request1"));
queueMicrotask(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

Promise.resolve("4").then((res) => console.log(res));



console.log("6");