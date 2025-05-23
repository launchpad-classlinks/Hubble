document.addEventListener('DOMContentLoaded', function() {

    const loadContentButton = document.getElementById('loadContentButton');
    const videoPlayer = document.getElementById('rickVideo');
    const audioPlayer = document.getElementById('rickAudio'); // Get the audio element
    const container = document.querySelector('.container'); // Get the container

    // Define the Rick Astley YouTube URL (no longer the primary action, but kept for reference or alternative)
    // const rickRollURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    if (loadContentButton && videoPlayer && audioPlayer && container) {
        loadContentButton.addEventListener('click', function() {
            // Option 1: Hide the button and message, show and play media
            if (container) {
                container.classList.add('content-loaded'); // Add class to hide original content
            }
            
            // Show the video player
            videoPlayer.classList.remove('hidden');
            videoPlayer.play().catch(error => {
                console.error("Video play failed:", error);
                // Handle potential autoplay block here if necessary
            });

            // Show the audio player (optional, could just play without showing)
            // audioPlayer.classList.remove('hidden'); // Uncomment if you want to show audio controls
            
            // Play the audio
            // You might want to play only the video's audio OR this separate audio file.
            // If the video itself has the desired audio, you might not need to play rickAudio.
            // If myAudio.m4a is THE Rickroll audio, then play it.
            audioPlayer.play().catch(error => {
                console.error("Audio play failed:", error);
                // Handle potential autoplay block here if necessary
            });

            // Optional: Hide the button after click so it can't be spammed
            // loadContentButton.style.display = 'none';

            // If you want to remove the original text and button completely
            // const messageElements = container.querySelectorAll('p, h1');
            // messageElements.forEach(el => el.style.display = 'none');

        });
    } else {
        console.error('Error: Required elements (button, video, audio, or container) not found!');
        if (!loadContentButton) console.error('Button not found');
        if (!videoPlayer) console.error('Video player not found');
        if (!audioPlayer) console.error('Audio player not found');
        if (!container) console.error('Container not found');
    }
});
