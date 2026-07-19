// ===============================
// SELECT ELEMENTS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const counter = document.querySelector(".image-counter");

// ===============================
// FILTER GALLERY
// ===============================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

// ===============================
// IMAGE LIST
// ===============================

const images = [];

galleryItems.forEach(item => {

    images.push(item.querySelector("img"));

});

let currentIndex = 0;

// ===============================
// UPDATE IMAGE
// ===============================

function showImage(index) {

    lightboxImg.src = images[index].src;
    counter.textContent = `${index + 1} / ${images.length}`;

}

// ===============================
// OPEN LIGHTBOX
// ===============================

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("show");

    });

});

// ===============================
// CLOSE
// ===============================

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

// ===============================
// NEXT
// ===============================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});

// ===============================
// PREVIOUS
// ===============================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});

// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown", e => {

    if (!lightbox.classList.contains("show")) return;

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

    if (e.key === "Escape") {

        lightbox.classList.remove("show");

    }

});