const John = { height: 185 };
const Mark = John;

Mark.height = 178;

console.log(John.height); // --->

// ------------------------------- //
// ------------------------------- //
// ------------------------------- //

let name = "John";

function changeIdentity(person) {
  person = "Sarah";
}

changeIdentity(name);
console.log(name); // --->
