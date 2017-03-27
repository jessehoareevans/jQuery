$(document).ready(function() {

var tags = ["h1", "p", "img"];

tags.forEach(function(tag) {

  $(tag).click(function(){
  alert("This is a " + tag)}


);
});
});

// $("h1").click(function() {
//   alert("This is a header.");
//   alert("I told you, THIS IS A HEADER!");
// });
//
// $("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// $("img").click(function() {
//   alert("This is an image.");
// });
// });
