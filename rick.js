async function traerDatos(){
    let datos = {}
    try {
        const respuesta = await fetch ("https://rickandmortyapi.com/api/character/1,183,5,6,16,23,5,10,25,100,2,40") 
        datos = await respuesta.json ()  
        
    } catch (error){
        window.alert("Ocurrio un error")
        console.log (error)
    }

    return datos
 
}

const miSeccion = document.getElementById("PersonajeUno")
for (let i= 0; i < 20; i++){
    const data = traerDatos().then(respuesta => {
        const articulo =document.createElement("article")
        articulo.className += "articulo"
        const titulo = document.createElement ("h3")
        titulo.innerHTML = `${respuesta[i].name}`
        const imagen =document.createElement("img")
        imagen.className +="styleImg"
        imagen.src = `${respuesta[i].image}`
        const parrafo =document.createElement("p")
        parrafo.className += "parrafo"
        parrafo.innerHTML = `Especie: ${respuesta[i].species}<br> Estado: ${respuesta[i].status}<br> Tipo:${respuesta[i].type}<br> Genero: ${respuesta[i].gender}<br>`
        
        const contenedorPrincipal =document.querySelector('#personajes')
        contenedorPrincipal.appendChild(articulo)
        articulo.appendChild(titulo)
        articulo.appendChild(imagen)
        articulo.appendChild(parrafo)

        

    })
}