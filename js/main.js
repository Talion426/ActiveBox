const swiper = new Swiper(".swiper", {
    speed: 600,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
