$.getJSON("http://andersonguelphjs.github.io/otherProjects/ajaxExamples/jsonDatabase/cat.json", function(data) {

  $(document).ready(function() {

    $("#cats").append(data);
    console.dir(data);
  })

})

/*
<div class="col-md-12">
  Lorem Ipsum
</div>
*/
