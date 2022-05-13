window.swiper = new Swiper({
    el: ".slider__container", // <-- Parent element
    slideClass: "slider__slide",  // <-- No lleva punto
    createElements: true,
    autoplay: {
        delay: 3000
    }, 
    loop: true,
    spaceBetween: 0,
    pagination: true,
    navigation: true,
    slideShadows: true
    
});
	
