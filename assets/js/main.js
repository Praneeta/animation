var Animation = Animation || {};

Animation.mainFunction = (function() {
  var test = "hello",
  mytestFunction = function() {
    console.log("This is my test function");
  };
  return {
    init: function() {
      mytestFunction();
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
