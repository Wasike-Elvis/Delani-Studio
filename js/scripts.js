$(document).ready(function () {
        $("#design").click(function () {
            $("#hideDesign").toggle();
        })
        $("#development").click(function () {
            $("#hideDevelopment").toggle();
        })
        $("#productManagement").click(function () {
            $("#productManagementt").toggle();
        })
    })

    .hide; {
    display: none;
}
$(".PORTIFOLIO").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });