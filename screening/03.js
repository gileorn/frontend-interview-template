function createCounter() {
  let count = 0;
  return { increment: () => console.log(++count) };
}

const counter = createCounter();
counter.increment(); // --->

// -------------------- //

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
}

// --->
