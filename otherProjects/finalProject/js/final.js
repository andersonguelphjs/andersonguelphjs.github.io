//get the file (replace with your own url)
$.get("partials/home.html", function(data) {

  $(document).ready(function() {

      $("#pageContent").prepend(data)


  });

});
