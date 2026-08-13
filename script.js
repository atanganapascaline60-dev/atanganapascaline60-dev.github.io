

const nav = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


// Création du bouton menu
const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-button");

nav.insertBefore(menuButton, navLinks);


// Ouvrir / fermer le menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


const form = document.querySelector("#contact form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const nom = form.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = form.querySelector(
            'input[type="email"]'
        ).value.trim();

        const sujet = form.querySelectorAll(
            'input[type="text"]'
        )[1].value.trim();

        const message = form.querySelector(
            "textarea"
        ).value.trim();


        if (
            nom === "" ||
            email === "" ||
            sujet === "" ||
            message === ""
        ) {

            alert("Veuillez remplir tous les champs.");

            return;
        }


        alert(
            "Merci " +
            nom +
            " ! Votre message a bien été préparé."
        );


        form.reset();

    });

}

const footerYear = document.querySelector(
    "footer p:last-child"
);

if (footerYear) {

    footerYear.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Tous droits réservés.";

}



const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-button");

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
