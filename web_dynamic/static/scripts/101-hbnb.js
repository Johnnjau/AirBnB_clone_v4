// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the span element next to the Reviews h2
    const reviewsToggle = document.querySelector('h2#reviews + span');

    // Add a click event listener to the span
    reviewsToggle.addEventListener('click', function () {
        // Check if the text is "show"
        if (reviewsToggle.textContent.trim().toLowerCase() === 'show') {
            // Fetch reviews and display them
            fetchReviews();
        } else {
            // Hide all review elements
            hideReviews();
        }
    });

    // Function to fetch reviews and display them
    function fetchReviews() {
        // Send a GET request to fetch reviews
        fetch('http://0.0.0.0:5001/api/v1/reviews')
        .then(response => response.json())
        .then(data => {
            // Create and display review elements
            displayReviews(data.reviews);
            // Change the text to "hide"
            reviewsToggle.textContent = 'hide';
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
    }

    // Function to display reviews
    function displayReviews(reviews) {
        // Get the reviews container
        const reviewsContainer = document.getElementById('reviews-container');

        // Loop through each review and create a review element
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.textContent = review.text;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Function to hide reviews
    function hideReviews() {
        // Get all review elements
        const reviews = document.querySelectorAll('#reviews-container > div');

        // Remove each review element from the DOM
        reviews.forEach(review => {
            review.remove();
        });

        // Change the text to "show"
        reviewsToggle.textContent = 'show';
    }
});
