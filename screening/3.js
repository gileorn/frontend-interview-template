function test() {
  console.log(this);
}

test(); // ---> window

// -------------------- //
// -------------------- //
// -------------------- //

const person = {
  name: "Dan",
  test: test,
};

person.test(); // ---> person

const danTest = person.test;

danTest(); // ---> person

// -------------------- //
// -------------------- //
// -------------------- //

let count = 10;

function createCounter() {
  let count = 0;
  return { increment: () => console.log(++count) };
}

const counter = createCounter();

counter.increment(); // ---> 1
console.log(count); // ---> 10
