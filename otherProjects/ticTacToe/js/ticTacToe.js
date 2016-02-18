$(document).ready(function() {

  var isO = true, // what does this variable represent
    isInProgress = true, // what does this variable represent
    combos = { // what does this variable represent; explain the keys and values
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
  // Explain what this event does
  $("#board").find("div").on("click", function() {
    var selection;

    if (isInProgress && $(this).hasClass("empty")) { /// Explain these conditions
      if (isO) { //Explain this condition
        selection = "o";
        $(this).removeClass("empty").addClass(selection).append("<span class='circle'>o</span"); //Explain what is happening here
      } else {
        selection = "x";
        $(this).removeClass("empty").addClass(selection).append("<span class='eX'>x</span>");
      }
      isO = !isO; //Explain
      checkIfWon($(this).index(), selection); //Explain
    }

  });

  // Explain what this event does
  $("#newGame").on("click", function() {

    var divs = $("#board").find("div");

    //Explain this each function
    divs.each(function() {
      $(this).removeClass("o").removeClass("x").addClass("empty").empty();
    })
    isInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
  function checkIfWon(i, selection) {

    var arr = combos[i],
      valid;

    if (arr && arr.length > 0) { //Explain this condition; is it really necessary?
      for (var i = 0; i < arr.length; i++) { //Explain this nested for loop
        valid = true;
        for (var j = 0; j < arr[i].length; j++) {
          if (!$("#board").find("div").eq(arr[i][j]).hasClass(selection)) { //Explain this condition
            valid = false;
          }
        }
        if (valid) { //Explain the condition and every line in the block
          alert("Winner is " + selection.toUpperCase() + "!");
          isInProgress = false;
          return false; //this exits the loop
        }
      }
    }

  }
})
