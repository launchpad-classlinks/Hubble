// Get DOM elements
const redirectButton = document.getElementById('redirectButton');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const popupAudio = document.getElementById('popupAudio');

// Show modal and play audio on button click
redirectButton.addEventListener('click', () => {
    videoModal.style.display = 'block';
    popupAudio.play();
});

// Close modal
closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    popupAudio.pause();
    popupAudio.currentTime = 0; // Reset to start
});

// Optional: close modal if user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
        popupAudio.pause();
        popupAudio.currentTime = 0;
    }
});
