function test() {
  console.log(this);
}

test(); // --->

// -------------------- //
// -------------------- //
// -------------------- //

const person = {
  name: "Dan",
  test: test,
};

person.test(); // --->

const danTest = person.test;

danTest(); // --->

// -------------------- //
// -------------------- //
// -------------------- //

let count = 10;

function createCounter() {
  let count = 0;
  return { increment: () => console.log(++count) };
}

const counter = createCounter();

counter.increment(); // --->
console.log(count); // --->
