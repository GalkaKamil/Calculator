let closeApp = () => {
    document.querySelector('#main').classList.add('hidden');
}

document.querySelector('.headerButtonClose').addEventListener('click', closeApp);

let x = 3;
function plus(x) {
    return x + 1;
}

console.log(plus(x));

let square = function (x) {
    return x * x;
}
square(10);
console.log(square(plus(x)));

let fun1 = (x) => {
    return x + 1;
}

let fun2 = (x) => {
    return x * x;
}

console.log(fun2(fun1(x)));


let points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 }
];

console.log(points[0].x);

points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a1 = p2.x - p1.x;
    let a2 = p2.y - p1.y;
    return Math.sqrt(a1 * a1 + a2 * a2);
}

console.log(points.dist());

Window.Window;


let tab1 = []
let tab2 = tab1;
tab2[0] = 1;
console.log(tab1[0]);

let a = ["a", "b", "c"];
let b = [];
for (let i = 0; i < a.length; i++) {
    b[i] = a[i];
}

for (let i = 0; i < a.length; i++) {
    console.log(b[i]);
}
console.log("test array");

let c = Array.from(b);
for (let i = 0; i < a.length; i++) {
    console.log(c[i]);
}

let mn = "7" - "8";
console.log(mn);



