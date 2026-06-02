function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateScrollButtonVisibility() {
    const button = document.querySelector(".scroll-to-top");
    if (!button) {
        return;
    }

    if (window.scrollY > 280) {
        button.classList.add("visible");
    } else {
        button.classList.remove("visible");
    }
}

function enforceMutedLoopingVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.playsInline = true;
    });
}

function initializeCarousels() {
    if (typeof bulmaCarousel === "undefined") {
        return;
    }

    bulmaCarousel.attach(".carousel", {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnHover: true
    });
}

document.addEventListener("DOMContentLoaded", () => {
    enforceMutedLoopingVideos();
    initializeCarousels();
    updateScrollButtonVisibility();
});

window.addEventListener("scroll", updateScrollButtonVisibility);
