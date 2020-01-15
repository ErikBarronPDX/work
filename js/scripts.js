$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $("#drinks").show();
  } else if (age === 21) {
    alert("Happy 21st!");
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }


});