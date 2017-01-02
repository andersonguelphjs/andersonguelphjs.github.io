(function($) {

    //a place to hold data
    var topics, students;

    //shuffle an array
    function shuffle(a) {
        var j, x, i;

        //start at the end of the array, and swap values with a random element
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    function init() {
      //wait for the html to load
        $(document).ready(function() {

          //start building the html
            var weeksHTML = ""; //what goes in the right hand column
            var weeksSelect = "<select class='form-control input-sm weekSelect'><option value='0'>Choose</option>"; //the options

            //go through each topic and build
            for (var i = 1; i <= topics.length; i++) {
                weeksHTML += "<tr data-id='" + i + "'><td class='col-md-4'>Week " + (i + 1) + " - " + topics[i - 1] + "</td><td class='col-md-8 names'></td></tr>";
                weeksSelect += "<option value='" + i + "'>Week " + (i + 1) + "</option>";
            }
            $("#weeks").find("tbody").html(weeksHTML);//attach the right hand column
            weeksSelect += "</select>";

            var studentsHTML = "";
            shuffle(students);

            //go through each student and build
            for (var j = 0; j < students.length; j++) {
                studentsHTML += "<tr><td class='col-md-6 student'>" + students[j] + "</td><td class='col-md-6'>" + weeksSelect + "</td></tr>";
            }
            $("#students").find("tbody").html(studentsHTML);//attach right hand column

            //tell the browser what to do when the user makes a selection
            $(".container").on("change", "select", function() {
                var select = $("select[val!='0']");//get all the selected values
                $(".names").html("");//empty all the names; yes we do this every time

                select.each(function() {//go though each selection and add the name
                    var val = $(this).val();
                    if (val) {
                        var student = $(this).closest("tr").find(".student").text();
                        $("tr[data-id='" + val + "']").find(".names").append(student + "; ");
                    }
                });
                return false;
            });

        });

    }

    //get the data
    $.getJSON("json/presInfo.json").done(function(data) {
            //put the data into memory
            students = data.students;
            topics = data.topics;
            //start using the data
            init();
        })
        .fail(function(data) {
            console.log("failed! " + JSON.stringify(data));
        });

}(jQuery));
