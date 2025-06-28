// Efecto de cursor personalizado
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// Efecto al hacer hover en enlaces y botones
const interactiveElements = document.querySelectorAll('a, button, .Button-Proyecto, #proyect-link');

interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('expand');
    });
    
    el.addEventListener('mouseout', () => {
        cursor.classList.remove('expand');
    });
});

// Animación de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Datos de proyectos
const projectData = {
    "Proyecto-2": {
        image: "Imagenes/Proyecto2.png",
        description: "Mi primer proyecto web, una página dedicada al youtuber Aquino. Desarrollada con HTML y CSS, muestra información básica y enlaces a sus redes sociales.",
        link: "https://eskith123.github.io/Proyecto-2/"
    },
    "Proyecto-3": {
        image: "Imagenes/Proyecto3.png",
        description: "Proyecto colaborativo donde trabajé en la estructura HTML mientras mi compañero se encargó del diseño CSS. Una experiencia valiosa en trabajo en equipo.",
        link: "https://eskith123.github.io/Proyecto-3/"
    },
    "Proyecto-4": {
        image: "Imagenes/Proyecto4.png",
        description: "Juego interactivo de Mario desarrollado con JavaScript. Implementé la lógica para el movimiento del personaje y la interacción con los elementos del juego.",
        link: "https://eskith123.github.io/Proyecto-4/"
    },
    "Proyecto-5": {
        image: "Imagenes/Proyecto5.png",
        description: "Galería de fotos interactiva creada con JavaScript. Permite navegar entre imágenes y muestra información relevante para cada una.",
        link: "https://eskith123.github.io/Proyecto-5/"
    }
};

function showProject(projectName) { 
    const projectInfo = document.getElementById("proyect-info");
    projectInfo.style.display = "block";
    projectInfo.classList.add('hidden');
    
    setTimeout(() => {
        const project = projectData[projectName];
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-description').textContent = project.description;
        document.getElementById('proyect-link').href = project.link;
        projectInfo.classList.remove('hidden');
    }, 300);
}