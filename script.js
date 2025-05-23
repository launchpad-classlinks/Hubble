document.addEventListener('DOMContentLoaded', function() {

    const loadContentButton = document.getElementById('loadContentButton');
    const videoPlayer = document.getElementById('rickVideo');
    // Corrected line below:
    const audioPlayer = document.getElementById('audioSourcePlayer'); // Ensures this matches the ID in your HTML
    const container = document.querySelector('.container'); 

    // ... (rest of your script) ...

    if (loadContentButton && videoPlayer && audioPlayer && container) { // Now audioPlayer should be found
        loadContentButton.addEventListener('click', function() {
            if (container) {
                container.classList.add('content-loaded'); 
            }
            
            videoPlayer.classList.remove('hidden');
            videoPlayer.play().catch(error => {
                console.error("Video play failed:", error);
            });

            // Since audioPlayer is a <video> tag, it also has classList
            audioPlayer.classList.remove('hidden'); // Make sure it's not display:none
            audioPlayer.play().catch(error => {
                console.error("Audio play failed:", error);
            });

        });
    } else {
        console.error('Error: Required elements (button, video, audio, or container) not found!');
        if (!loadContentButton) console.error('Button not found');
        if (!videoPlayer) console.error('Video player not found');
        // Update this log to reflect the variable name if you like, though the check itself is most important
        if (!audioPlayer) console.error('Audio source player (audioSourcePlayer) not found'); 
        if (!container) console.error('Container not found');
    }
});
