$(document).ready(function {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-change");
  });

  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("light-change");
  });
});
