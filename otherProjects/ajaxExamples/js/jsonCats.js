$.getJSON("jsonDatabase/cat.json", function(data) {

  $(document).ready(function() {
console.dir(data);
var html="";

$.each(data, function(index, item){
  html+='<div class="col-md-4">'+
  '<div class="catName">'+item.name+'</div>'+
  '<img src="'+item.url+'">'+
  '</div>';
  /*
  '<div class="commentsContainer">'+
'<div class="comment">'+
'<div class="renterName">'+item.+'</div>'+
'<div class="renterComment">'+item.+'</div>'+
'</div>'+
  '</div>'+
*/

})

    $("#cats").append(html);

  })

})

/*
<div class="col-md-12">
  Lorem Ipsum
</div>
*/
