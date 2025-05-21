// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element by its ID
    const redirectButton = document.getElementById('redirectButton');

    // Define the URL for the Rick Astley video
    const rickRollURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // The classic!

    // Check if the button exists
    if (redirectButton) {
        // Add an event listener to the button for the 'click' event
        redirectButton.addEventListener('click', function() {
            // When the button is clicked, open the rickRollURL in a new tab/window
            window.location.href = rickRollURL;
            // You could also use window.open(rickRollURL, '_blank'); to try and force a new tab
        });
    } else {
        console.error('Error: Redirect button not found!');
    }

});
