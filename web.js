const sections = document.querySelectorAll("section");

listOfLinks = document.querySelectorAll("a.menu_link");

window.addEventListener("scroll", evt => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 500 && sectionTop <= 6000) {
                section.classList.add("your-active-class");
                // here we add active_link
                listOfLinks.forEach(link => {
                    if (link.textContent === section.dataset.nav) {
                        link.classList.add("active-link");
                    }
                    else {
                        link.classList.remove("active-link");
                    }
                });
        }
            else {
                section.classList.remove("your-active-class");
            }
        });
    
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navbar_list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu_link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


// jquery 
$(document).ready(() => {
    $('#About').ripples({
        resolution:1512,
        dropRadius: 20,
        perturbance: 0.05,
    });
});



//text animation
let typingAnimation = new Typed(".text", {
    strings: ["Front-End Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay:1500
})

// build click button

let btn = document.querySelector("button");
window.onscroll = () => {
    if (window.scrollY >= 250) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

//to cancel scrolling Horizontal I put her some orders to button */

btn.onclick = () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
};
