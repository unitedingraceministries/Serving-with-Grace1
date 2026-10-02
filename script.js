// ================= MODERN GALLERY =================

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("galleryImage");
    const closeBtn = document.querySelector(".gallery-close");
    const prevBtn = document.querySelector(".gallery-prev");
    const nextBtn = document.querySelector(".gallery-next");

    if (!modal || !modalImg || !closeBtn || !prevBtn || !nextBtn) {
        console.error("Gallery modal elements not found.");
        return;
    }

    const links = document.querySelectorAll(".gallery-grid a");

    let current = 0;

    function showImage(index) {
        current = index;
        modalImg.src = links[current].href;
        modal.style.display = "flex";
    }

    links.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showImage(index);
        });
    });

    function closeGallery() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeGallery);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeGallery();
        }
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        current = (current - 1 + links.length) % links.length;
        showImage(current);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        current = (current + 1) % links.length;
        showImage(current);
    });

    document.addEventListener("keydown", (e) => {
        if (modal.style.display !== "flex") return;

        if (e.key === "Escape") closeGallery();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

});
