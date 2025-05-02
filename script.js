emailjs.init("zGg6PSsNVbHjx1E6U"); // Remplace avec ta Public Key
 
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
 
    const serviceID = "service_fube5n4"; // Remplace avec ton Service ID
    const templateID = "template_portfolio"; // Remplace avec ton Template ID
 
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        document.getElementById("form-message").textContent = "Message envoyé avec succès ! ✅";
        document.getElementById("form-message").style.color = "green";
        this.reset();
      })
      .catch((error) => {
        document.getElementById("form-message").textContent = "Erreur lors de l'envoi ❌";
        document.getElementById("form-message").style.color = "red";
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

   document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    // Quand on clique sur une image de projet
    document.querySelectorAll(".project-card img").forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });
  
    // Quand on clique n'importe où sur le fond du lightbox
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  });
  