$("#submit").on("click", function() {
  event.preventDefault();
  var userInputs = {
    name: $("#user-name")
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
      .trim(),

    country: $("#user-country")
      .val()
      .trim(),

    lang: $("#user-lang")
      .val()
      .trim(),
    secLang: $("#user-secLang")
      .val()
      .trim()
  };

  console.log("user input", userInputs);

  $.post("/api/user", userInputs, function(data) {
    $(".card").show();

    var userInputName = $("<p>" + userInputs.name + "</p>");
    var userInputpic = $("#card-pic").attr("src", userInputs.photo);
    var userInputAge = $("<p>" + userInputs.age + "</p>");
    var userInputCity = $("<p>" + userInputs.city + "</p>");
    var userInputCountry = $("<p>" + userInputs.country + "</p>");
    var userInputLang = $("<p>" + userInputs.lang + "</p>");
    var userInputSecLang = $("<p>" + userInputs.secLang + "</p>");

    $("#card-name").html(userInputName);
    $("#card-pic").append(userInputpic);
    $("#card-age").html(userInputAge);
    $("#card-city").html(userInputCity);
    $("#card-country").html(userInputCountry);
    $("#card-lang").html(userInputLang);
    $("#card-secLang").html(userInputSecLang);

    console.log("data", data);

    for (var i = 0; i < data.length; i++) {
      //    var cards = $('#matchedCards')
      //    var cardImg = $('<img>');
      //    var cardCol = $("<li class='list-group-item mt-4'>");

      //    cardCol.append(
      //       $('<h4>').text('Name:' + data[i].name),
      //       $('<hr/>'),
      //       $('<p>').text('City to visit: ' + data[i].city),
      //       cardImg.attr('src', data[i].photo),
      //       cardImg.css({
      //          width:"90px",
      //          height: '80px',
      //       }),
      //       $('<p>').text('Country to visit: ' + data[i].country),
      //       $('<p>').text('Age: ' + data[i].age)
      //    );
      //  cards.append(cardCol);
      //    };
      // });

      var myCol = $('<div class="col-sm-3 col-md-3 py-4"></div>');
      var myPanel = $(
        '<div class="card card-outline-info"><div class="card-block"><div class="card-title"><p>Name:' +
          data[i].name +
          "</p><button type=\"button\" class=\"close\" data-target=\"#" +
          i +
          'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>City to visit ' +
          data[i].city +
          " </p><p>Country to visit: " +
          data[i].country +
          ' </p><img src="' +
          data[i].photo +
          '" class="rounded rounded-circle"width="100px"height="100px"></div></div>'
      );
      myPanel.appendTo(myCol);
      myCol.appendTo("#panel");
    }

    $(".close").on("click", function(e) {
      e.stopPropagation();
      var $target = $(this).parents(".col-sm-3");
      $target.hide("slow", function() {
        $target.remove();
      });
    });
  });

  $("#user-name").val("");
  $("#user-url").val("");
  $("#user-age").val("");
  $("#user-city").val("");
  $("#user-country").val("");
  $("#user-lang").val("");
  $("#user-secLang").val("");
});
