$(document).ready(function () {
  // svg code generator on runtime
  $("img.svg").each(function () {
    var $img = $(this),
      imgID = $img.attr("id"),
      imgClass = $img.attr("class"),
      imgURL = $img.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass);
        }
        $svg = $svg.removeAttr("xmlns:a");
        $img.replaceWith($svg);
      },
      "xml"
    );
  });

  // theme-color changing
  $(".theme-mode").html("Dark Mode");
  $("input.toggle-theme:checkbox").change(function () {
    if ($(this).is(":checked")) {
      $("body").addClass("light-blue-bg");
      $(".theme-mode").html("Light Mode");
    } else {
      $("body").removeClass("light-blue-bg");
      $(".theme-mode").html("Dark Mode");
    }
  });

  // count-up
  $(".count").counterUp({
    delay: 10,
    time: 1000,
  });
});
