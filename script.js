function mostrarInicio() {
    // Ocultar todos los contenedores
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
        container.style.backgroundColor = ''; // Restablecer el color de fondo
    });

    // Mostrar el contenedor de inicio
    const inicioContainer = document.getElementById('inicioContainer');
    inicioContainer.style.display = 'flex';
    inicioContainer.style.backgroundColor = 'black'; // Cambiar fondo a negro
}

function mostrarProyectos() {
    // Ocultar todos los contenedores
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
        container.style.backgroundColor = ''; // Restablecer el color de fondo
    });

    // Mostrar el contenedor de proyectos
    const proyectosContainer = document.getElementById('proyectosContainer');
    proyectosContainer.style.display = 'flex';
    proyectosContainer.style.backgroundColor = 'black'; // Cambiar fondo a negro
}

function mostrarHabilidades() {
    // Ocultar todos los contenedores
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
        container.style.backgroundColor = ''; // Restablecer el color de fondo
    });

    // Mostrar el contenedor de habilidades
    const habilidadesContainer = document.getElementById('habilidadesContainer');
    habilidadesContainer.style.display = 'flex';
    habilidadesContainer.style.backgroundColor = 'black'; // Cambiar fondo a negro
}

function mostrarContacto() {
    // Ocultar todos los contenedores
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
        container.style.backgroundColor = ''; // Restablecer el color de fondo
    });

    // Mostrar el contenedor de contacto
    const contactoContainer = document.getElementById('contactoContainer');
    contactoContainer.style.display = 'flex';
    contactoContainer.style.backgroundColor = 'black'; // Cambiar fondo a negro
}
