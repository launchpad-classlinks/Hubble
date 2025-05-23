document.addEventListener('DOMContentLoaded', function () {
    const redirectButton = document.getElementById('redirectButton');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const popupVideo = document.getElementById('popupVideo');

    redirectButton.addEventListener('click', function () {
        videoModal.style.display = 'flex';
        popupVideo.currentTime = 0;
        popupVideo.play();
    });

    closeModal.addEventListener('click', function () {
        videoModal.style.display = 'none';
        popupVideo.pause();
    });

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            popupVideo.pause();
        }
    });
});

