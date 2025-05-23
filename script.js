document.addEventListener('DOMContentLoaded', function () {
    const redirectButton = document.getElementById('redirectButton');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const rickVideo = document.getElementById('rickVideo');

    if (redirectButton) {
        redirectButton.addEventListener('click', function () {
            videoModal.style.display = 'flex';
            rickVideo.currentTime = 0;
            rickVideo.play();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            videoModal.style.display = 'none';
            rickVideo.pause();
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            rickVideo.pause();
        }
    });
});
