   
$('#submit').on('click',function(){
       event.preventDefault(); 
       var userInputs = {
           name :$('#user-name').val().trim(),
           photo :$('#user-url').val().trim(),
           age: parseInt($('#user-age').val().trim()),
           city: $('#user-city').val().trim(),
        //    state: $('#user-state').val().trim(),
           country: $('#user-country').val().trim(),
           lang: $('#user-lang').val().trim(),
           secLang: $('#user-secLang').val().trim()
          
       }; 
       console.log('user input', userInputs);

       $.post('/api/user', userInputs, function(data) {
        $('.card').show();

           var userInputName = $('<p>' + userInputs.name + '</p>') ;
           var userInputpic = $('#card-pic').attr('src', userInputs.photo);
           var userInputAge = $('<p>' + userInputs.age + '</p>');
           var userInputCity = $('<p>' + userInputs.city + '</p>');
        //    var userInputState = $('<p>' + userInputs.state + '</p>');
           var userInputCountry = $('<p>' + userInputs.country+ '</p>');
           var userInputLang = $('<p>' + userInputs.lang + '</p>');
           var userInputSecLang = $('<p>' + userInputs.secLang + '</p>');

           $('#card-name').html(userInputName);
           $('#card-pic').append(userInputpic);;
           $('#card-age').html(userInputAge);
           $('#card-city').html(userInputCity);
        //    $('#card-state').html(userInputState);
           $('#card-country').html(userInputCountry);
           $('#card-lang').html(userInputLang);
           $('#card-secLang').html(userInputSecLang);
       
           console.log(data,'data')

           

// ------------below is for matched users


    //        var addCols = function (num){
    //         for (var i=1;i<=num;i++) {
    //             var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
    //             var myPanel = $('<div class="card card-outline-info" id="'+i+'Panel"><div class="card-block"><div class="card-title"><span>Card #'+i+'</span><button type="button" class="close" data-target="#'+i+'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>Some text in '+i+' </p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
    //             myPanel.appendTo(myCol);
    //             myCol.appendTo('#contentPanel');
    //         }
            
            
    //         $('.close').on('click', function(e){
    //           e.stopPropagation();  
    //               var $target = $(this).parents('.col-sm-3');
    //               $target.hide('slow', function(){ $target.remove(); });
    //         });
    //     };
       });
    });




// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);