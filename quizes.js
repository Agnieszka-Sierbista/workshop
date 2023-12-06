// //quiz 1
//
// button.addEventListener("click", () => {
//     Promise.resolve().then(()=> console.log("Microtask 1"));
//     console.log("Listener 1");
// });
//
// button.addEventListener("click", () => {
//     Promise.resolve().then(()=> console.log("Microtask 2"));
//     console.log("Listener 2");
// });
//
// //quiz 2
//
// button.addEventListener("click", () => {
//     Promise.resolve().then(()=> console.log("Microtask 1"));
//     console.log("Listener 1");
// });
//
// button.addEventListener("click", () => {
//     Promise.resolve().then(()=> console.log("Microtask 2"));
//     console.log("Listener 2");
// });
//
// button.click();
//
// // quiz 3 - hard

// let x = 0;
//
// async function test() {
//     x += await 2;
//     console.log("Inner x", x);
// }
//
// test();
// x += 1;
// console.log("Outer x", x);

//quiz 4
// new Promise(resolve => {
//     resolve(1);
//     Promise.resolve().then(() => console.log(2));
// }).then(result => console.log(result));
//
// console.log(3);

//quiz 5

new Promise(resolve => {
    Promise.resolve().then(() => {
        resolve(1);
        Promise.resolve().then(() => console.log(2));
    });
}).then(result => console.log(result));

console.log(3);

//quiz 6 - in html