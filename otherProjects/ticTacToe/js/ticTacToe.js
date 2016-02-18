$(document).ready(function() {

  var isO = true,
    isInProgress = true,
    combos = {
      0: [
        [1, 2],
        [3, 6],
        [4, 8]
      ],
      1: [
        [0, 2],
        [4, 7]
      ],
      2: [
        [0, 1],
        [5, 8],
        [4, 6]
      ],
      3: [
        [0, 6],
        [4, 5]
      ],
      4: [
        [1, 8],
        [2, 6],
        [1, 7],
        [3, 5]
      ],
      5: [
        [2, 8],
        [3, 4]
      ],
      6: [
        [0, 3],
        [2, 4],
        [7, 8]
      ],
      7: [
        [1, 4],
        [6, 8]
      ],
      8: [
        [0, 4],
        [2, 5],
        [6, 7]
      ]
    };

  $("#board").find("div").on("click", function() {
    var selection;

    if (isInProgress && $(this).hasClass("empty")) {
      if (isO) {
        selection = "o";
        $(this).removeClass("empty").addClass(selection).append("<span class='circle'>o</span");
      } else {
        selection = "x";
        $(this).removeClass("empty").addClass(selection).append("<span class='eX'>x</span>");
      }
      isO = !isO;
      checkIfWon($(this).index(), selection);
    }

  });

  $("#newGame").on("click", function() {

    var divs = $("#board").find("div");

    divs.each(function() {
      $(this).removeClass("o").removeClass("x").addClass("empty").empty();

    })
    isInProgress = true;
  })

  function checkIfWon(i, selection) {

    var arr = combos[i],
      valid;
    if (arr && arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        valid = true;
        for (var j = 0; j < arr[i].length; j++) {
          if (!$("#board div").eq(arr[i][j]).hasClass(selection)) {
            valid = false;
          }
        }
        if (valid) {
          alert("Winner is " + selection + "!");
          isInProgress = false;
          return false;
        }
      }
    }

  }
})
