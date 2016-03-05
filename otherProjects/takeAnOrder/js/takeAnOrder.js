$(document).ready(function() {

  $("button").on("click", function() {

      var log = $("#log");

      log.append($("input").val()+"<br/>")
        .append($("textarea").val()+"<br/>")
        .append($("select").val()+"<br/>")
        .append($("[name='gender']:checked").val()+"<br/>")
        .append($('input:checkbox:checked').map(function() {
          return this.value;
        }).get().join());
/*
    var checkedValues = $('input:checkbox:checked').map(function() {
      return this.value;
    }).get();
*/


  })
})
