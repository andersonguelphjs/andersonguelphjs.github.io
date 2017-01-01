var topics = [
"Mind Mapping",
"Golden ratio",
"Minimalism",
"Color",
"Typography",
"Video",
"Sound",
"Image Optimization",
"Sprite Maps",
"Long Scrolling",
"Micro Interactions",
"Cards"
];
var students = [
    "Colleen Cheung",
    "Shelby Cockhill",
    "Xavian Cox",
    "Anya Cruz",
    "Emma Durant",
    "Nikola Federici",
    "Destany Filicetti",
    "Cassandra Floroff",
    "Kayla Fuoco",
    "Syoma Gebremichael",
    "Andrew Greer",
    "Cheyanne Haig",
    "Megan Hutchison",
    "Jasmine Irven",
    "Arienne Johnson",
    "Julian Klimczyk",
    "Sydney Lawson",
    "Bradley Malecki",
    "Connor McLeod",
    "Jason Nobleza",
    "Nicole Novia",
    "Sara Novia",
    "Meera Patel",
    "Robert Paul",
    "David Piano",
    "Anesha Premraj",
    "Daniela Racco",
    "Calen Robertson",
    "Evan Rowell",
    "Amanda Saglioccolo",
    "Olivia Sala",
    "Rebecca Samborsky",
    "Nicole Wells",
    "Sarah Zarnett-Klein"
];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function restart() {

    var weeksHTML = "";
    var weeksSelect = "<select class='form-control input-sm weekSelect'><option value='0'>Choose</option>";

    for (var i = 1; i <= topics.length; i++) {
        weeksHTML += "<tr data-id='" + i + "'><td class='col-md-4'>Week " + (i +1)+" - "+topics[i-1]+"</td><td class='col-md-8 names'></td></tr>";
        weeksSelect += "<option value='" + i + "'>Week " + (i +1)+ "</option>";
    }
    $("#weeks").find("tbody").html(weeksHTML);
    weeksSelect += "</select>";

    var studentsHTML = "";
    shuffle(students);

    for (var j = 0; j < students.length; j++) {
        studentsHTML += "<tr><td class='col-md-6 student'>" + students[j] + "</td><td class='col-md-6'>" + weeksSelect + "</td></tr>";
    }
    $("#students").find("tbody").html(studentsHTML);
}

$(document).ready(function() {
    restart();
    $(".container").on("change", "select", function() {
        $(".names").html("");
        var select = $("select[val!='0']");
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
