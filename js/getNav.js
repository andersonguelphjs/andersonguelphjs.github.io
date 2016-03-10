$(document).ready(function() {

  $.get("partials/nav.html", function(data) {

var container =   $(".container");
if (container){
    $(".container").prepend(data);
}
  });

});
