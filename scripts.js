const codeSnippets = ["title.png", "EventLoopAS.png", "loop.gif", "dis.png", "loopWithCode.gif", "loopCode2.gif", "code3.gif", "code4.gif", "code4-5.gif", "code5.gif",
        [
            "console.log(\"1\");\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "queueMicrotask(() => console.log(\"5\"));\n" +
            "console.log(\"6\");"
        ], [
            ["console.log(\"1\");\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "queueMicrotask(() => console.log(\"5\"));\n" +
            "console.log(\"6\");\n\n"], [
                "//Result:\n" +
                "// 1\n" +
                "// 6\n" +
                "// 2\n" +
                "// 4\n" +
                "// 5\n" +
                "// 3"]
        ], "whatReindeer.png", "whatRender.png", "basicLoop.png",
        [
            ["console.log(\"1\");\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "queueMicrotask(() => console.log(\"5\"));\n" +
            "console.log(\"6\");\n\n"], [
            "//Result:\n" +
            "// 1\n" +
            "// 6\n" +
            "// 2\n" +
            "// 4\n" +
            "// 5\n" +
            "// 3"]
        ],
        [
            "console.log(\"1\");\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "requestAnimationFrame(() => console.log(\"request2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "requestAnimationFrame(() => console.log(\"request3\"));\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "requestAnimationFrame(() => console.log(\"request4\"));\n" +
            "queueMicrotask(() => console.log(\"5\"));\n" +
            "requestAnimationFrame(() => console.log(\"request5\"));\n" +
            "console.log(\"6\");"
        ], [
            ["console.log(\"1\");\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "requestAnimationFrame(() => console.log(\"request2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "requestAnimationFrame(() => console.log(\"request3\"));\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "requestAnimationFrame(() => console.log(\"request4\"));\n" +
            "queueMicrotask(() => console.log(\"5\"));\n" +
            "requestAnimationFrame(() => console.log(\"request5\"));\n" +
            "console.log(\"6\");\n\n"], [
                "//Result:\n" +
                "// 1\n" +
                "// 6\n" +
                "// 2\n" +
                "// 4\n" +
                "// 5\n" +
                "// 3\n" +
                "// request1\n" +
                "// request2\n" +
                "// request3\n" +
                "// request4\n" +
                "// request5\n"]
        ], "htmlForRequest.png", "whenRequestHappens.png", "whatTf.gif",
        "async1.gif", "async2.gif", "async3.gif", "async4.gif", "async5.gif",
        [
            "console.log(\"1\");\n" +
            "async function asyncFunction1() {\n" +
            "    console.log(\"async1\")\n" +
            "}\n" +
            "asyncFunction1();\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "console.log(\"5\");"
        ],
        [
            ["console.log(\"1\");\n" +
            "async function asyncFunction1() {\n" +
            "    console.log(\"async1\")\n" +
            "}\n" +
            "asyncFunction1();\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "console.log(\"5\");\n\n"], [
            "//Result:\n" +
            "// 1\n" +
            "// async1\n" +
            "// 5\n" +
            "// 2\n" +
            "// 4\n" +
            "// 3\n"]
        ],
        [
            "console.log(\"1\");\n" +
            "async function asyncFunction1() {\n" +
            "    console.log(\"async1\")\n" +
            "}\n" +
            "asyncFunction1();\n" +
            "async function asyncFunction2() {\n" +
            "    await 1;\n" +
            "    console.log(\"async2\")\n" +
            "}\n" +
            "asyncFunction2();\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "console.log(\"5\");"
        ],
        [
            ["console.log(\"1\");\n" +
            "async function asyncFunction1() {\n" +
            "    console.log(\"async1\")\n" +
            "}\n" +
            "asyncFunction1();\n" +
            "async function asyncFunction2() {\n" +
            "    await 1;\n" +
            "    console.log(\"async2\")\n" +
            "}\n" +
            "asyncFunction2();\n" +
            "requestAnimationFrame(() => console.log(\"request1\"));\n" +
            "queueMicrotask(() => console.log(\"2\"));\n" +
            "setTimeout(() => console.log(\"3\"), 0);\n" +
            "Promise.resolve(\"4\").then((res)=> console.log(res));\n" +
            "console.log(\"5\");\n\n"], [
            "// Result:\n" +
            "// 1\n" +
            "// async1\n" +
            "// 5\n" +
            "// async2\n" +
            "// 2\n" +
            "// 4\n" +
            "// 3\n"]
        ], "exe.png", "1.png",
        [
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 1\"));\n" +
            "    console.log(\"Listener 1\");\n" +
            "});\n" +
            "\n" +
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 2\"));\n" +
            "    console.log(\"Listener 2\");\n" +
            "});"
        ], [
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 1\"));\n" +
            "    console.log(\"Listener 1\");\n" +
            "});\n" +
            "\n" +
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 2\"));\n" +
            "    console.log(\"Listener 2\");\n" +
            "});\n\n" +
            "//Result:\n" +
            "// Listener 1\n" +
            "// Microtask 1\n" +
            "// Listener 2\n" +
            "// Microtask 2\n"
        ], "2.png",
        [
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 1\"));\n" +
            "    console.log(\"Listener 1\");\n" +
            "});\n" +
            "\n" +
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 2\"));\n" +
            "    console.log(\"Listener 2\");\n" +
            "});\n" +
            "button.click();"
        ], [
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 1\"));\n" +
            "    console.log(\"Listener 1\");\n" +
            "});\n" +
            "\n" +
            "button.addEventListener(\"click\", () => {\n" +
            "    Promise.resolve().then(()=> console.log(\"Microtask 2\"));\n" +
            "    console.log(\"Listener 2\");\n" +
            "})\n" +
            "button.click();\n\n" +
            "//Result:\n" +
            "// Listener 1\n" +
            "// Listener 2\n" +
            "// Microtask 1\n" +
            "// Microtask 2\n"
        ], "3.png",
        [
            "let x = 0;\n" +
            "\n" +
            "async function test() {\n" +
            "    x += await 2;\n" +
            "    console.log(\"Inner x\", x);\n" +
            "}\n" +
            "\n" +
            "test();\n" +
            "x += 1;\n" +
            "console.log(\"Outer x\", x);"
        ], [
            "let x = 0;\n" +
            "\n" +
            "async function test() {\n" +
            "    x += await 2;\n" +
            "    console.log(\"Inner x\", x);\n" +
            "}\n" +
            "\n" +
            "test();\n" +
            "x += 1;\n" +
            "console.log(\"Outer x\", x);\n\n" +
            "//Result:\n" +
            "// Outer x 1\n" +
            "// Inner x 2\n"
        ],
        "4.png",
        [
            "new Promise(resolve => {\n" +
            "    resolve(1);\n" +
            "    Promise.resolve().then(() => console.log(2));\n" +
            "}).then(result => console.log(result));\n" +
            "\n" +
            "console.log(3);"
        ],
        [
            "new Promise(resolve => {\n" +
            "    resolve(1);\n" +
            "    Promise.resolve().then(() => console.log(2));\n" +
            "}).then(result => console.log(result));\n" +
            "\n" +
            "console.log(3);\n\n" +
            "//Result:\n" +
            "// 3\n" +
            "// 2\n" +
            "// 1"
        ],
        "5.png",
        [
            "new Promise(resolve => {\n" +
            "    Promise.resolve().then(() => {\n" +
            "        resolve(1);\n" +
            "        Promise.resolve().then(() => console.log(2));\n" +
            "    });\n" +
            "}).then(result => console.log(result));\n" +
            "\n" +
            "console.log(3);"
        ], [
            "new Promise(resolve => {\n" +
            "    Promise.resolve().then(() => {\n" +
            "        resolve(1);\n" +
            "        Promise.resolve().then(() => console.log(2));\n" +
            "    });\n" +
            "}).then(result => console.log(result));\n" +
            "\n" +
            "console.log(3);\n\n" +
            "//Result:\n" +
            "// 3\n" +
            "// 1\n" +
            "// 2"
        ],
        "6.png", "quiz6q.png", "quiz6a.png",
        ["Sources:\n" +
        "slide 2, 4-13 - https://medium.com/gradeup/\n" +
        "       asynchronous-javascript-event-loop-1c8de41298dd\n" +
        "reindeer - https://timvandevall.com/reindeer-clipart-template/\n" +
        "slide 18 - https://javascript.info/event-loop\n" +
        "slide 20-24 - https://dev.to/lydiahallie/\n" +
        "       javascript-visualized-promises-async-await-5gke\n" +
        "quizes - Jake Archibald"
        ]
    ]
;

const itemsPerPage = 1;
let currentPage = 1;

function displayCodeSnippets(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const snippetsToShow = codeSnippets.slice(startIndex, endIndex);
    const codeContainer = document.querySelector('.code-container');

    // Prism.js
    codeContainer.innerHTML = snippetsToShow.map(snippets => {
        if (typeof snippets === "string") {
            return `<img class="img" src=${snippets} />`
        } else {
            return snippets.map((snippet) => {

                return `<pre class="language-javascript"><code>${snippet}</code></pre>`;
            }).join("");
        }


    }).join("");

    Prism.highlightAll();
}


function updatePageInfo() {
    const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCodeSnippets(currentPage);
        updatePageInfo();
    }
}

function nextPage() {
    const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCodeSnippets(currentPage);
        updatePageInfo();
    }
}

displayCodeSnippets(currentPage);
updatePageInfo();
