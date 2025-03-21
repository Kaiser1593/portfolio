document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1000, once: true });
 
   emailjs.init("BnqpCzJNzeiQRTgbI");
 
   document.getElementById("contact-form").addEventListener("submit", function (e) {
       e.preventDefault();
 
       const serviceID = "service_portfolio";
       const templateID = "template_portfolio";
 
       emailjs.sendForm(serviceID, templateID, this)
           .then(() => {
               const msg = document.getElementById("form-message");
               msg.textContent = "Message envoyé avec succès ! ✅";
               msg.style.color = "green";
               msg.style.marginTop = "25px";
               this.reset();
           })
           .catch((error) => {
               const msg = document.getElementById("form-message");
               msg.textContent = "Erreur lors de l'envoi ❌";
               msg.style.color = "red";
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
 