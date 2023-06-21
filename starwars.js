//Parsea el swapi.js JSON
const personajes = JSON.parse(archivo);


/*Visualizando constante personajes desde mi consola*/
console.log(personajes.results);

function boton_buscar(){
    let personaje = buscar_personaje();
    /* Asignamos a la vairable card, mediante elementbyid donde se va mostrar*/
    let card = document.getElementById("card_personaje");


    /*Propiedad de JS para modificar contenido HTML, devuelve una cadena de texto */
    card.innerHTML =
        `
        <h2>Nombre del personaje: ${personaje.name}</h2>
        <p> Año de nacimiento: ${personaje.birth_year}</p>
        <p>Genero: ${personaje.gender}</p>
        <p>Altura: ${personaje.height}</p>
        <p>Color de ojos: ${personaje.eye_color}</p>
        `
    
}

function buscar_personaje(){
    let nombre_personaje = document.getElementById("nombre_personaje").value;
    for(let i=0; i<personajes.results.length; i++){
        if(personajes.results[i].name  == nombre_personaje){
            return personajes.results[i];
        }
    }
}


