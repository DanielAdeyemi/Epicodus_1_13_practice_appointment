$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".first").hide();
    $(".alert").show();
  })
})