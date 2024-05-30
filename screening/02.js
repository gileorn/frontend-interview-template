function test() {
  console.log(this);
}

test(); // --->

// -------------------- //

const person = {
  name: "Dan",
  test: test,
};

person.test(); // --->

const danTest = person.test;

danTest(); // --->

// -------------------- //

const TestInstance = new test(); // --->

// -------------------- //

// how can we invoke `test` function with the specified
// context of the `person` object?

// *your code here*
