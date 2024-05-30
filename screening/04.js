console.log("Gandalf");

setTimeout(() => {
  console.log("Frodo");
  Promise.resolve().then(() => {
    console.log("Legolas");
  });
}, 0);

new Promise(function (resolve) {
  console.log("Aragorn");
  setTimeout(function () {
    console.log("Gimli");
    resolve("Boromir");
  }, 0);
}).then((result) => {
  console.log("Sam");
  setTimeout(() => {
    console.log(result);
  }, 0);
});
