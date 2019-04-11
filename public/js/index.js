$(document).ready(function () {
  $("#submit").on("click", function () {
   // event.preventDefault();
  /*  var userInputs = {
      name: $("#firstName")
        .val()
        .trim() + " " + $("#lastName")
        .val()
        .trim(),

      photo: $("#user-url")
        .val()
        .trim(),
      age: parseInt(
        $("#user-age")
        .val()
        .trim()

      ),
      city: $("#user-city")
        .val()
        .toLowerCase()
        .trim(),
      countryTwo: $("#user-countryTwo")
         .val()
          .toLowerCase()
          .trim(),
      cityTwo: $("#user-cityTwo")
        .val()
        .toLowerCase()
        .trim(),
      lang: $("#user-lang")
        .val()
        .trim(),
     // secLang: $("#user-secLang")
       // .val()
        //.trim()
    };
*/
 //   console.log("user input", userInputs);
/*
    $.post("/api/user", userInputs, function (data) {
      $(".card").show();


      var userInputName = $("<p>" + userInputs.name + "</p>");
      var userInputpic = $("#card-pic").attr("src", userInputs.photo);
      var userInputAge = $("<p>" + userInputs.age + "</p>");
      var userInputCity = $("<p>" + userInputs.city + "</p>");
      var userInputCountryTwo = $("<p>" + userInputs.countryTwo + "</p>");
      var userInputCityTwo = $("<p>" + userInputs.cityTwo + "</p>");
      var userInputLang = $("<p>" + userInputs.lang + "</p>");
      var userInputSecLang = $("<p>" + userInputs.secLang + "</p>");

      $("#card-name").html(userInputName);
      $("#card-pic").append(userInputpic);
      $("#card-age").html(userInputAge);
      $("#card-city").html(userInputCity);
      $("#card-countryTwo").html(userInputCountryTwo);
      $("#card-cityTwo").html(userInputCityTwo);
      $("#card-lang").html(userInputLang);
      $("#card-secLang").html(userInputSecLang);

      console.log("data", data);

      // creating cards dynamically
      for (var i = 0; i < data.length; i++) {


        var myCol = $('<div class="col-sm-3 col-md-3 py-4"></div>');
        var myPanel = $(
          '<div class="card card-outline-info"><div class="card-block"><div class="card-title"><img src="' +
          data[i].photo +
          '" class="rounded rounded-circle"width="100px"height="100px"><p>Name:' +
          data[i].name +
          "</p><button type=\"button\" class=\"close\" data-target=\"#" +
          i +
          'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>From: ' +

          data[i].city +
          " </p><p>Country to visit: " + data[i].countryTwo + ' </p><p>City to visit: "' + data[i].cityTwo + '</p></div></div>'
        );
        myPanel.appendTo(myCol);
        myCol.appendTo("#panel");
      }

      $(".close").on("click", function (e) {
        e.stopPropagation();
        var $target = $(this).parents(".col-sm-3");
        $target.hide("slow", function () {
          $target.remove();
        });
      });

    });
*/
    // commented out for now. 
    $("#user-name").val("");
    $("#user-url").val("");
    $("#user-age").val("");
    $("#user-city").val("");
    $("#user-countryTwo").val("");
    $("#user-cityTwo").val("");
    $("#user-lang").val("");
    $("#user-secLang").val("");
    
  });
});



