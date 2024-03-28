const continueBtn = document.querySelector(".welcome-message button");
const welcomeMessage = document.querySelector(".welcome-message");
const webBody = document.querySelector(".body");
const heroImg = document.querySelector(".hero-img");
const heroStar = document.querySelector(".star-hero");
const audioFile = document.querySelector('audio')


function menu() {
    const menuBtn = document.querySelector(".menu1");
    const menu = document.querySelector(".menu");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        line1.classList.toggle("line1-45deg");
        line2.classList.toggle("line2-opacity");
        line3.classList.toggle("line3-45deg");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("active");
            line1.classList.remove("line1-45deg");
            line2.classList.remove("line2-opacity");
            line3.classList.remove("line3-45deg");
        }
    });
}

menu();

audioFile.play()
audioFile.loop = true

continueBtn.addEventListener("click", () => {
    welcomeMessage.classList.add("welcome-message-dormant");
    webBody.classList.add("body-active");
});

window.addEventListener("resize", () => {
    if (heroStar.offsetHeight < 575) {
        console.log("less thna");
        heroImg.style.width = "283px";
        heroImg.style.height = "800px";
        heroImg.style.bottom = "0";
    } else if (heroStar.offsetHeight > 575) {
        // heroImg.classList.add("new-hero-img");
        heroImg.style.width = "383.23px";
        heroImg.style.height = "903.75px";
        heroImg.style.bottom = "5em";
        console.log("greater than");
    }
});

const rocket = document.querySelector(".space__rocket");
const poster = document.querySelector(".space__poster");

const handleScroll = () => {
    const { top, height } = rocket.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let scrollProgress;

    if (top < windowHeight && top + height > 0) {
        // Element is partially in view
        scrollProgress = ((windowHeight - top) / (height + windowHeight)) * 180;
    } else if (top + height < 0) {
        // Element is completely out of view above the viewport
        scrollProgress = 0;
    } else {
        // Element is completely out of view below the viewport
        scrollProgress = 180;
    }

    // Apply translation based on the scroll progress along the x-axis
    rocket.style.transform = `translateY(-${scrollProgress}%)`;
    console.log(`translate: -${scrollProgress}`);
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                window.addEventListener("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        });
    },
    { rootMargin: "0% 0px -10% 0px" }
);

observer.observe(rocket);
