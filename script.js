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

//funcion animaciones//
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

    function setSocialMediaLinks() {
        document.querySelector('section .redes #instagram').href = urls.instagram;
        document.querySelector('section .redes #facebook').href = urls.facebook;
        document.querySelector('section .redes #linkedin').href = urls.linkedin;

        document.getElementById('footer-instagram').href = urls.instagram;
        document.getElementById('footer-facebook').href = urls.facebook;
        document.getElementById('footer-linkedin').href = urls.linkedin;
    }

    setSocialMediaLinks();
});

// imprimir pdf de CV
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

// SECCIÓN PORTAFOLIO CON PASARELA DE IMÁGENES
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.proyecto');
    const panel = document.getElementById('project-panel');
    const closePanel = document.getElementById('close-panel');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectContent = document.getElementById('project-content');

    const projectInfo = {
        'chef.png': {
            title: 'Mobile App Development',
            description: 'As part of the mobile app development course, I have developed an application in Kotlin that integrates a local database with CRUD operations and a connection to an external API.',
            image: 'img/chef.png',
            // video: 'img/MOBILE.mp4', // VIDEO comentado
            images: [
                'img/chef_1.png',
                'img/chef_2.png',
                'img/chef_3.png'
            ],
            habilities: ['DATA BASE', 'KOTLIN', 'API', 'CRUD', 'UI TESTING']
        },
        'web.png': {
            title: 'Web Development',
            description: 'Web application using HTML, CSS, JavaScript, and MySQL database to manage school data.',
            image: 'img/web.png',
            // video: 'img/WEB.mp4', // VIDEO comentado
            images: [
                'img/web_1.png',
                'img/web_2.png'
            ],
            habilities: ['HTML', 'JAVASCRIPT', 'CSS', 'DATA BASE', 'FRAMEWORKS']
        }
    };

    function initCarousel(carousel) {
        const imgs = carousel.querySelectorAll('img');
        let index = 0;
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');

        function showImg(i) {
            imgs.forEach((img, idx) => img.classList.toggle('active', idx === i));
        }

        prev.addEventListener('click', () => {
            index = (index - 1 + imgs.length) % imgs.length;
            showImg(index);
        });
        next.addEventListener('click', () => {
            index = (index + 1) % imgs.length;
            showImg(index);
        });

        showImg(index);
    }

    function showPanel(imageSrc) {
        const info = projectInfo[imageSrc];
        if (info) {
            projectTitle.textContent = info.title;
            projectDescription.textContent = info.description;
            projectImage.src = info.image || '';

            // --- NUEVO CARRUSEL ---
            if (info.images && info.images.length > 0) {
                let carouselHTML = '<div class="carousel">';
                info.images.forEach((img, i) => {
                    carouselHTML += `<img src="${img}" class="${i===0?'active':''}">`;
                });
                carouselHTML += `<button class="prev">&#10094;</button><button class="next">&#10095;</button></div>`;
                projectContent.innerHTML = carouselHTML;

                initCarousel(projectContent.querySelector('.carousel'));
            } else {
                projectContent.innerHTML = '';
            }

            // Habilidades
            if (info.habilities && info.habilities.length > 0) {
                const iconMap = {
                    'DATA BASE': 'fa-database',
                    'KOTLIN': 'fa-code',
                    'API': 'fa-plug',
                    'CRUD': 'fa-cogs',
                    'UI TESTING': 'fa-vial',
                    'HTML': 'fa-file-code',
                    'JAVASCRIPT': 'fa-window-restore',
                    'CSS': 'fa-pager',
                    'FRAMEWORKS': 'fa-cogs'
                };

                const habilitiesHTML = `
                    <div class="project-habilities">
                        <h4>Habilities</h4>
                        <div class="contenedor-intereses">
                            ${info.habilities.map(interest => `
                                <div class="interes">
                                    <i class="fa-solid ${iconMap[interest] || 'fa-tag'}"></i>
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

    function hidePanel() {
        panel.style.display = 'none';
    }

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src.split('/').pop();
            showPanel(imgSrc);
        });
    });

    closePanel.addEventListener('click', hidePanel);

    window.addEventListener('click', function(event) {
        if (event.target === panel) hidePanel();
    });
});

