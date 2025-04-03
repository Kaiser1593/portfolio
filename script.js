document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("zGg6PSsNVbHjx1E6U"); // Remplace par ta clé publique EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupère les données du formulaire
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };
 
        // Envoie l'email via EmailJS
        emailjs.send("service_fube5n4", "template_portfolio", formData)
            .then(function (response) {
                alert("Message envoyé avec succès !");
                document.getElementById("contact-form").reset(); // Réinitialise le formulaire
            })
            .catch(function (error) {
                alert("Une erreur est survenue. Réessayez plus tard.");
                console.error("Erreur EmailJS :", error);
            });
   });
 
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll(".nav-link");
 
   window.addEventListener("scroll", () => {
       let current = "";
       let scrollPosition = window.scrollY;
 
       sections.forEach((section) => {
           const sectionTop = section.offsetTop - 250;
           const sectionHeight = section.clientHeight;
 
           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
               current = section.getAttribute("id");
           }
       });
 
       navLinks.forEach((link) => {
           link.classList.remove("active");
           if (current && link.getAttribute("href").includes(current)) {
               link.classList.add("active");
           }
       });
 
       if (scrollPosition === 0) {
           navLinks.forEach(link => link.classList.remove("active"));
           document.querySelector('.nav-link[href="#hero"]').classList.add("active");
       }
   });
 
   particlesJS("particles-js", {
       "particles": {
           "number": {
               "value": 80,
               "density": {
                   "enable": true,
                   "value_area": 800
               }
           },
           "color": { "value": "#ffffff" },
           "shape": {
               "type": "circle",
               "stroke": { "width": 0, "color": "#000000" },
               "polygon": { "nb_sides": 5 }
           },
           "opacity": {
               "value": 0.5,
               "random": false
           },
           "size": {
               "value": 3,
               "random": true
           },
           "line_linked": {
               "enable": true,
               "distance": 150,
               "color": "#ffffff",
               "opacity": 0.4,
               "width": 1
           },
           "move": {
               "enable": true,
               "speed": 1,
               "direction": "none",
               "out_mode": "out"
           }
       },
       "interactivity": {
           "detect_on": "canvas",
           "events": {
               "onhover": { "enable": true, "mode": "grab" },
               "onclick": { "enable": false, "mode": "repulse" },
               "resize": true
           }
       },
       "retina_detect": true
   });
 });