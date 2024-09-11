let menuVisible = false;
// funcion para ocultar y ver menú//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;

    }
}

function seleccionar(){
    //ocultar el menu una vez seleccionada//
    document.getElementById("nav").classList = "";
    menuVisible = false;
    
}

//funccion animaciones//

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skils = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skils >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("canva");
        habilidades[5].classList.add("after");
        habilidades[6].classList.add("illustrator");
        habilidades[7].classList.add("dmax");
        habilidades[8].classList.add("maya");
        habilidades[9].classList.add("customer");
        habilidades[10].classList.add("teamwork");
        habilidades[11].classList.add("adaptability");
        habilidades[12].classList.add("creativity");
        habilidades[13].classList.add("trouble");
        habilidades[14].classList.add("leader");
        habilidades[15].classList.add("learning");
        habilidades[16].classList.add("communication");
        habilidades[17].classList.add("autonomy");

    }
}
window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener('DOMContentLoaded', function() {
    // URLs de las redes sociales
    const urls = {
        instagram: 'https://www.instagram.com/orannges/',
        facebook: 'https://www.facebook.com/Orannges01',
        linkedin: 'https://www.linkedin.com/in/laura-martinez-169245238/'
    };

     // Función para asignar URLs a los enlaces
     function setSocialMediaLinks() {
        // Sección principal
        document.querySelector('section .redes #instagram').href = urls.instagram;
        document.querySelector('section .redes #facebook').href = urls.facebook;
        document.querySelector('section .redes #linkedin').href = urls.linkedin;

        // Pie de página
        document.getElementById('footer-instagram').href = urls.instagram;
        document.getElementById('footer-facebook').href = urls.facebook;
        document.getElementById('footer-linkedin').href = urls.linkedin;
    }

    // imprimir pdf de CV
    setSocialMediaLinks();
});

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function() {
        const pdfUrl = 'img/cv_Laura_Martinez.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv_Laura_Martinez.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

    // Enviar mensaje de contacto 
let formSubmitted = false; 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (formSubmitted) {
        alert('The form has already been submitted.');
        return;
    }

    formSubmitted = true; 
    const serviceID = 'service_rxdr0dr';  
    const templateID = 'template_6sixr9j'; 

    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message'; 
            formSubmitted = false; 
        }, (err) => {
            alert('Failed to send message. Please try again.');
            console.error(err);
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message'; 
            formSubmitted = false; 
        });
});


