$.getJSON("jsonDatabase/cat.json", function(data) {

$(document).ready(function() {
  console.dir(data);
  var html = "";

  $.each(data, function(index, item) {
    html += '<div class="col-md-4">' +
      '<div style="text-align:center;"><span class="catName"> ' + item.name + '</span></div>' +
      '<div class="catType"><small>Type: </small>' + item.type + '</div>' +
      '<div class="catPersonality"><small>Personality: </small>' + item.personality + '</div>' +
      '<div class="catRate"><small>Rate: </small>' + item.rate + '</div>' +
      '<img class="catImage" src="' + item.url + '">'+
      '<div class="panel panel-default">'+
        '<div class="panel-heading">Renter comments</div>'+
        '<ul class="list-group">';
    $.each(item.comments, function(ind, i) {
      html += '<li class="list-group-item">'+
        '<div class="comment">' +
        '<div class="renterName"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>' + i.renter + '</div>' +
        '<div class="renterComment">' + i.comment + '</div>' +
        '<div class="star">';
        for (var j=1;j<=5;j++){
          console.log(i+" "+i.star);
          if (j<=Number(i.star)){
          html+='<img class="starImg" src="images/fullStar.png">';
          }
          else{
            html+='<img class="starImg" src="images/emptyStar.png">';
          }
        }
        html+='</div>' + //star
        '</div></li>';//coment

    })//each
    html+='</ul>'+
    '</div>'+//panel
    '</div>';
  })//each

$("#cats").append(html);

})//ready



})//getJSON

/*
<div class="col-md-12">
  Lorem Ipsum
</div>
*/
