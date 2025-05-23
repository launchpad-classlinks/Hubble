document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadContentButton');
    const mainVideo = document.getElementById('mainVideoPlayer');
    const secondaryAudio = document.getElementById('secondaryAudioPlayer');
    const contentContainer = document.querySelector('.container');

    if (!loadButton) {
        console.error('Critical Error: Load button not found!');
    }
    if (!mainVideo) {
        console.error('Critical Error: Main video player not found!');
    }
    if (!secondaryAudio) {
        console.error('Critical Error: Secondary audio player not found!');
    }
    if (!contentContainer) {
        console.error('Critical Error: Content container not found!');
    }

    if (loadButton && mainVideo && secondaryAudio && contentContainer) {
        loadButton.addEventListener('click', function() {
            // Add class to container to hide initial text and button
            contentContainer.classList.add('content-loaded');

            // Prepare and play the main video
            mainVideo.classList.remove('hidden');
            mainVideo.muted = false; // Ensure main video is NOT muted
            mainVideo.volume = 1.0;  // Set main video volume to full
            mainVideo.play().then(() => {
                console.log('Main video (myVideo.mp4) started playing.');
            }).catch(error => {
                console.error('Main video (myVideo.mp4) play failed:', error);
            });

            // Prepare and play the secondary audio (from myAudio.mp4)
            secondaryAudio.classList.remove('hidden'); // Still remove hidden, even if tiny
            secondaryAudio.muted = false; // Ensure secondary audio is NOT muted
            secondaryAudio.volume = 1.0;  // Set secondary audio volume to full
            secondaryAudio.play().then(() => {
                console.log('Secondary audio (myAudio.mp4) started playing.');
            }).catch(error => {
                console.error('Secondary audio (myAudio.mp4) play failed:', error);
            });

        });
    } else {
        console.error('One or more critical HTML elements were not found. Please check IDs in HTML and script.');
    }
});
