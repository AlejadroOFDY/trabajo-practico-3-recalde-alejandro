const dbz_api = "https://web.dragonball-api.com";
const btnBuscar = document.getElementById("btn-buscar");
const contenedorPadre = document.getElementById("contenedor-data");

/* fetch("https://web.dragonball-api.com")
.then(fdxponxd => Response.json())
    if (!Response.OK){
        throw new Error("Error de la Api")
    }
    return Response.json()
.then((data) => console.log(data.items))
.cath((error) => console.log(error)) */

const cargarDatos = async () => {
    try {
        const response = await feth(dbz_api);
        if (response.ok) {
            throw new error("Error de la Api")
        }
        const data = await response.json()
        return data.items;
    } catch (error) {
        console.log(error);
    }
};


