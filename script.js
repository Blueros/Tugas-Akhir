$('#search-button').on('click', function() {

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '80fb7767',
            's' : $('#search-input').val()
        },

        success: function (hasil) {
            if(hasil.Response == "True") {

            } else {
                $('#movie-list').html(`
                    <div class= "col">
                        <h1 class ="text-center">Movie Not Found!</h1>
                    </div>
                `)
            }
        }

    })
})