// console.log("akanshu");
// let string ="akanshu";
// console.log(string.trim());
// console.log(string.slice(0,3));

let win=19;
let input=+prompt("gueess a number");
if (input===win) {
    console.log("your guess is right!!!");

} else {
    if (input<win) {
        console.log("too low !!!");
    } else {
        console.log("too high !!!");
    }
}