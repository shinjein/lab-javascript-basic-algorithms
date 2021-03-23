// Iteration 1: Names and Input
const hacker = "Jeein"
console.log(`The driver's name is ${hacker}`);
const hacker2 = "Second"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker.length} characters`);
} else if (hacker.length < hacker2.length) {
    console.log(`Ìt seems like the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both have equally long names ${hacker.length} characters!`)
}

// Iteration 3: Loops

for(let i = 0; i<1; i++) {
   console.log(hacker.split('').join(' ').toUpperCase(i))
}

let reverse = "";
for(let i = hacker.length; i>=0; i--){
    reverse = reverse + hacker.charAt(i);
}
console.log(reverse);


if (hacker.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}
