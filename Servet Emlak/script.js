// ==========================
// HEADER SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// HERO ANIMATION
// ==========================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }

});

// ==========================
// PROPERTY CARDS
// ==========================

const cards = document.querySelectorAll(".property-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ==========================
// WHATSAPP
// ==========================

const whatsapp = document.querySelector(".whatsapp");

if(whatsapp){

    whatsapp.addEventListener("mouseenter",()=>{

        whatsapp.style.transform="scale(1.15)";

    });

    whatsapp.addEventListener("mouseleave",()=>{

        whatsapp.style.transform="scale(1)";

    });

}

// ==========================
// SEARCH BUTTON
// ==========================

const searchBtn = document.querySelector(".search-grid button");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

alert("Demo sürümüdür. Tüm ilanlar için lütfen bizimle iletişime geçin.");

});

}

// ==========================
// REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
".property-card,.about,.contact"
);

function reveal(){

const trigger = window.innerHeight - 120;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

console.log("Servet Emlak Demo Hazır");