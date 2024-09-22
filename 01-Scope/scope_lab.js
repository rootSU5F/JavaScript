//Global scop
var globalVar = "iam global variable ! ";
let globalLet ="iam also global but scoped with let";
const globalConst = "global const "

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

{
    // block scope 
    var blockedvar ="blocked var";
    let blockedLet = "blocked Let";
    const blockedConst = "blocked const"
}


// console.log(blockedvar);
// console.log(blockedLet);
// console.log(blockedConst);


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
    console.log(blockVar);
    console.log(blockLet);