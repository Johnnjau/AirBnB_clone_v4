$(document).ready(function() {
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(response) {
            response.forEach(function(place) {
                var article = '<article><div class="title"><h2>' + place.name + '</h2></div></article>';
                $('section.places').append(article);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
});
