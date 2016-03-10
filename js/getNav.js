$(document).ready(function() {

//get the file (replace with your own url)
  $.get("http://andersonguelphjs.github.io/partials/nav.html", function(data) {

//check if this document has .container
    var container = $(".container");

    //if so add nav.html contents to the top
    if (container) {
      $(".container").prepend(data).fadeIn();
    }

  });

});
