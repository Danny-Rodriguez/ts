async function hello() {
    return "world";
}
const url = new URL("...");
let lucky;
// lucky = '23'
lucky = 23;
let font;
font = 23;
const person = {
    first: "Jeff",
    last: "Delaney"
};
const person2 = {
    first: "Usain",
    last: "Bolt",
    fast: true
};
function pow(x, y) {
    Math.pow(x, y).toString();
}
pow(5, 10);
const arr = [];
arr.push(1);
arr.push("23");
arr.push(false);
//Generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
export {};
