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

function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        const skillClasses = [
            "javascript", "htmlcss", "python", "photoshop", "canva", "after",
            "illustrator", "dmax", "maya", "customer", "teamwork", "adaptability",
            "creativity", "trouble", "leader", "learning", "communication", "autonomy"
        ];

        Array.from(habilidades).forEach((el, index) => {
            if (skillClasses[index]) el.classList.add(skillClasses[index]);
        });
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

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'proyecto'
    const projects = document.querySelectorAll('.proyecto');
    
    // Selecciona el panel y los elementos dentro de él
    const panel = document.getElementById('project-panel');
    const closePanel = document.getElementById('close-panel');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectImage = document.getElementById('project-image');
    const projectContent = document.getElementById('project-content');
    
    // Información de los proyectos con intereses añadidos
    const projectInfo = {
        'chef.png': {
            title: 'Mobile App Development',
            description: 'As part of the mobile app development course, I have developed an application in Kotlin that integrates a local database with CRUD (Create, Read, Update, Delete) operations and a connection to an external API. The application presents the data obtained from the API in a drop-down list, allowing users to interact with the information intuitively.',
            image: 'img/chef.png',
            video: 'img/MOBILE.mp4',  // Actualiza la URL del video si es necesario
            habilities: ['DATA BASE', 'KOTLIN', 'API', 'CRUD', 'UI TESTING'] // Añadido
        },
        'web.png': {
            title: 'Web Development',
            description: 'We developed a web application using HTML, CSS, and JavaScript, along with a MySQL database, to manage school data. The application allows users to list students and courses, and upon selecting a student or course, displays detailed associated information. The MySQL database was created to ensure efficient and accurate data queries, seamlessly integrating with the web interface and JavaScript functionality.',
            image: 'img/web.png',
            video: 'img/WEB.mp4',  // Actualiza la URL del video si es necesario
            habilities: ['HTML', 'JAVASCRIPT', 'CSS', 'DATA BASE', 'FRAMEWORKS'] // Añadido
        }
    };
    
    // Función para mostrar el panel con información del proyecto
    function showPanel(imageSrc) {
        const info = projectInfo[imageSrc];
        if (info) {
            // Actualiza los detalles del proyecto
            projectTitle.textContent = info.title;
            projectDescription.textContent = info.description;
            projectImage.src = info.image || '';  // Muestra la imagen solo si está disponible
            
            // Mostrar el video si está disponible
            if (info.video) {
                projectContent.innerHTML = `
                    <video id="project-video" width="100%" controls>
                        <source src="${info.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                projectContent.innerHTML = ''; // Limpiar contenido si no hay video
            }
            
            // Mostrar habilidades si están disponibles
            if (info.habilities && info.habilities.length > 0) {
                // Mapa de íconos para habilidades
                const iconMap = {
                    'DATA BASE': 'fa-database',
                    'KOTLIN': 'fa-code',
                    'API': 'fa-plug',
                    'CRUD': 'fa-cogs',
                    'UI TESTING': 'fa-vial', // Añade más íconos según sea necesario
                    'HTML': 'fa-file-code',
                    'JAVASCRIPT': 'fa-window-restore',
                    'CSS': 'fa-pager',
                    'FRAMEWORKS': 'fa-cogs' // Puedes cambiarlo si tienes íconos específicos para frameworks
                };
    
                const habilitiesHTML = `
                    <div class="project-habilities">
                        <h4>Habilities</h4>
                        <div class="contenedor-intereses">
                            ${info.habilities.map(interest => `
                                <div class="interes">
                                    <i class="fa-solid ${iconMap[interest] || 'fa-tag'}"></i> <!-- Íconos específicos -->
                                    <span>${interest}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                projectContent.innerHTML += habilitiesHTML;
            }
            
            panel.style.display = 'block';  
        }
    }
    
    // Función para ocultar el panel y detener el video
    function hidePanel() {
        // Detener el video si está presente
        const video = document.getElementById('project-video');
        if (video) {
            video.pause();  // Pausa el video
            video.src = ''; // Limpia la fuente del video
        }
        
        panel.style.display = 'none';
    }
    
    // Añadir evento de clic a cada proyecto
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src.split('/').pop();
            showPanel(imgSrc);
        });
    });
    
    // Añadir evento de clic para cerrar el panel
    closePanel.addEventListener('click', hidePanel);
    
    // Cerrar el panel si se hace clic fuera del contenido del panel
    window.addEventListener('click', function(event) {
        if (event.target === panel) {
            hidePanel();
        }
    });
});





