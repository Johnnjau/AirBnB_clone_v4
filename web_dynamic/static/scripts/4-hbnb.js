// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Get all the checked amenities
        const amenities = document.querySelectorAll('.amenity input:checked');

        // Create an array to store the amenity IDs
        let amenityIds = [];
        amenities.forEach(function (amenity) {
            amenityIds.push(amenity.getAttribute('data-id'));
        });

        // Send a POST request to places_search with the list of amenity IDs
        fetch('http://0.0.0.0:5001/api/v1/places_search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amenities: amenityIds })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    });
});
