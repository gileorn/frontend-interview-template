// in which order console logs will be executed?
//
// -->

setTimeout(() => {
  console.log("Frodo");
  Promise.resolve().then(() => {
    console.log("Legolas");
  });
}, 0);

console.log("Gandalf");

new Promise((resolve) => {
  console.log("Aragorn");
  setTimeout(() => {
    console.log("Gimli");
    resolve();
  }, 0);
}).then(() => {
  console.log("Sam");
});
