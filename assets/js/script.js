const dbz_api = "https://dragonball-api.com/api/characters?limit=1000";
const btnBuscar = document.getElementById("btn-buscar");
const searchInput = document.getElementById("searchInput");
const contenedorPadre = document.getElementById("contenedor-carta");

// Acá se almacenarán los personajes
let totalPersonajes = [];

/* Carga los datos de la API*/
const cargarDatos = async () => {
    try {
        const response = await fetch(dbz_api);
        if (!response.ok) {
            throw new Error("Error de la Api");
        }
        const data = await response.json();
        totalPersonajes = data.items; // Guardamos en una variable global
        mostrarPersonajes(totalPersonajes);
    } catch (error) {
        console.log(error);
        contenedorPadre.innerHTML = `<p class="mensaje-error">Error: ${error.message}</p>`;
    }
};



/* Función para mostrar personajes */
const mostrarPersonajes = (personajes) => {
    if (personajes.length === 0) {
        contenedorPadre.innerHTML = '<p class="mensaje-error">No se encontraron personajes.</p>';
        return;
    }
    contenedorPadre.innerHTML = "";
    personajes.forEach(personaje => {
        contenedorPadre.innerHTML += `
            <div class="col-md-6 col-lg-3 pb-3">
                <div class="card h-100">
                    <img src="${personaje.image}" class="card-img" alt="${personaje.name}" style="height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">Raza: ${personaje.race || "Raza desconocida"}</p>
                        <p class="card-text">Género: ${personaje.gender || "Género desconocido"}</p>
                    </div>
                </div>
            </div>
        `;
    });
};

/* Función para buscar a los personajes */
function buscarPersonajes() {
    const texto = searchInput.value.trim().toLowerCase();
    
    if (!texto) {
        mostrarPersonajes(totalPersonajes);
        return;
    }

    const filtrados = totalPersonajes.filter(p => 
        p.name.toLowerCase().includes(texto)
    );
    
    mostrarPersonajes(filtrados);
}

// Eventos
btnBuscar.addEventListener("click", buscarPersonajes);
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") buscarPersonajes();
});
document.addEventListener("DOMContentLoaded", cargarDatos);
