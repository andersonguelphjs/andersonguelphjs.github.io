(function($) {

    //a place to hold data
    var topics, students;

    //shuffle an array
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    function start() {
        $(document).ready(function() {
            var weeksHTML = "";
            var weeksSelect = "<select class='form-control input-sm weekSelect'><option value='0'>Choose</option>";

            for (var i = 1; i <= topics.length; i++) {
                weeksHTML += "<tr data-id='" + i + "'><td class='col-md-4'>Week " + (i + 1) + " - " + topics[i - 1] + "</td><td class='col-md-8 names'></td></tr>";
                weeksSelect += "<option value='" + i + "'>Week " + (i + 1) + "</option>";
            }
            $("#weeks").find("tbody").html(weeksHTML);
            weeksSelect += "</select>";

            var studentsHTML = "";
            shuffle(students);

            for (var j = 0; j < students.length; j++) {
                studentsHTML += "<tr><td class='col-md-6 student'>" + students[j] + "</td><td class='col-md-6'>" + weeksSelect + "</td></tr>";
            }
            $("#students").find("tbody").html(studentsHTML);
            $(".container").on("change", "select", function() {
                var select = $("select[val!='0']");
                $(".names").html("");

                select.each(function() {
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
    
    $.getJSON("json/presInfo.json").done(function(data) {
            students = data.students;
            topics = data.topics;
            start();
        })
        .fail(function(data) {
            console.log("failed! " + JSON.stringify(data));
        });

}(jQuery));
