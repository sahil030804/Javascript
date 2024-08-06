(function chai() {
  console.log("Database connected");
})();             //named IIFE

(() => {
  console.log("hello");
})();             //unnamed IIFE

((name) => {
  console.log(`hello , ${name}`);
})("sahil");      //parameter IIFE
