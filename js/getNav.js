$(document).ready(function() {

  $.get("http://andersonguelphjs.github.io/partials/nav.html", function(data) {

var container =   $(".container");
if (container){
    $(".container").prepend(data);
}
  });

});
