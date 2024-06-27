const video = document.querySelector(".video-container video");
const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseenter", () => {
    video.play();
    hoverText.classList.remove("active");
});

video.addEventListener("mouseleave", () => {
    video.pause();
    hoverText.classList.add("active");
});


const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if ( entry.isIntersecting) {
            entry.target.classList.add('show');
        }   else{
            entry.target.classList.remove('show');
        }
    });

});
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElements = document.querySelectorAll('.hidden')