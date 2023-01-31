function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; // some work

  callback(); // the "callback", it runs the function i gave it
}

tellMeWhenDone(
  function () {
    console.log("i am done!");
  }
);

tellMeWhenDone(
  function () {
    alert("done!");
  }
);

