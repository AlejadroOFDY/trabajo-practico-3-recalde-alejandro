fetch()
.then(fdxponxd => Response.json())
    if (!Response.OK){
        throw new Error("Error de la Api")
    }
    return Response.json()
.then((data) => console.log(data.items))
.cath((error) => console.log(error))

const cargarDatos = async () => {
    try {
        const response = await feth("https://web.dragonball-api.com");
        if (response.ok) {
            throw new error("Error de la Api")
        }
        const data = await response.json()
        return data.items;
    } catch (error) {
        console.log(error);
    }
};


