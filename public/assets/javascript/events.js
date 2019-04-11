$('.submit').on('click', function (event) {
    event.preventDefault();
    
  });

// $(function () {
//     $('#searchFormEvent').on('click', function (e) {
//         e.preventDefault();
//         console.log('#searchFormEvent preventDefault\'d')
//     })
//     $('#search-btn').on('click', function (e) {
//         e.preventDefault();
//         console.log('#search-btn clicked!!!')
//         $("#entire, .card-panel, .card-horizontal").fadeIn(2000);

//     })

    // onKEY EVENT 
    $(document).on('keyup', function (event) {
        console.log(event.which);
        if (event.which == 13) {
            event.preventDefault();
            $('#search-btn').click();
            console.log('#search-btn click()');
        }
        return false;
    });
