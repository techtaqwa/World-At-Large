function myFunction(cont) {
  if (cont == 1) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#namerica").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
  if (cont == 2) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#samerica").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
  if (cont == 3) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#europe").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
  if (cont == 4) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#africa").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
  if (cont == 5) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#asia").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
  if (cont == 6) {
    $("#main").fadeOut('100');
    $('#header').fadeOut('100');
    $("#mappic").fadeOut('100');
    $("#oceania").delay('100').fadeIn('slow');
    $("#previous").delay('100').fadeIn('slow');
  }
}

function back() {
  $("#main").delay('100').fadeIn('slow');
  $("#header").delay('100').fadeIn('slow');
  $("#mappic").delay('100').fadeIn('slow');
  $("#previous").fadeOut('100');
  $("#namerica").fadeOut('100');
  $("#samerica").fadeOut('100');
  $("#europe").fadeOut('100');
  $("#africa").fadeOut('100');
  $("#asia").fadeOut('100');
  $("#oceania").fadeOut('100');
}
