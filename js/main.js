const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        }
    });
}

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ANIMATED COUNTERS */
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
    if (countersStarted) {
        return;
    }

    counters.forEach(function (counter) {
        counter.innerText = "0";

        const target = Number(counter.getAttribute("data-target"));
        const increment = Math.max(1, Math.ceil(target / 100));

        function updateCounter() {
            const current = Number(counter.innerText);

            if (current < target) {
                counter.innerText = Math.min(current + increment, target);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    });

    countersStarted = true;
}

function checkCounters() {
    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) {
        return;
    }

    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        startCounters();
    }
}

window.addEventListener("scroll", checkCounters);
window.addEventListener("load", checkCounters);

/* CONTACT FORM */
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (
            firstName === "" ||
            lastName === "" ||
            phone === "" ||
            email === "" ||
            service === "" ||
            message === ""
        ) {
            formMessage.textContent = "Please complete all required fields.";
            return;
        }

        formMessage.textContent = "Thank you. Your request has been submitted successfully.";
        contactForm.reset();
    });
}