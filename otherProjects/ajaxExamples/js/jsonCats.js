$.getJSON("jsonDatabase/cat.json", function(data) {

    $(document).ready(function() {
        console.dir(data);
        var html = "";


        $.each(data, function(index, item) {//for each cat)
            html += '<div class="col-md-4">' +
            //cat details
              '<div style="text-align:center;"><span class="catName"> ' + item.name + '</span></div>' +
              '<div class="catType"><small>Type: </small>' + item.type + '</div>' +
              '<div class="catPersonality"><small>Personality: </small>' + item.personality + '</div>' +
              '<div class="catRate"><small>Rate: </small>' + item.rate + '</div>' +
              //img
              '<img class="catImage" src="' + item.url + '">' +
              '<div class="panel panel-default">' +
              //renter comment section
              '<div class="panel-heading">Renter comments</div>' +
              '<ul class="list-group">';
            $.each(item.comments, function(ind, i) {//for each renter comment

                html += '<li class="list-group-item">' +
                  '<div class="comment">' +
                  '<div class="renterName"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>' + i.renter + '</div>' +
                  '<div class="renterComment">' + i.comment + '</div>' +
                  '<div class="star">';
              
                for (var j = 1; j <= 5; j++) {//each star; how many full or empty stars (based on json field)
                  if (j <= Number(i.star)) {
                    html += '<img class="starImg" src="images/fullStar.png">';
                  } else {
                    html += '<img class="starImg" src="images/emptyStar.png">';
                  }
                }
                html += '</div>' + //star
                  '</div></li>'; //coment

              }) //each
            html += '</ul>' +
              '</div>' + //panel
              '</div>';//one cat detail container
          }) //each

        $("#cats").append(html);

      }) //ready

  }) //getJSON
