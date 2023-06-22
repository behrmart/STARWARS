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
        
        `<div class="card text-center">
            <img src="img/Star-Wars-Logo-Azul.jpg" class="card-img-top" alt="StarWars logo">
            <div class="card-header text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
                ${personaje.name}
            </div>
            <div class="card-body text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
              <p class="card-text">Gender: ${personaje.gender}</p>
              <p class="card-text">Height: ${personaje.height}</p>
              <p class="card-text">Mass: ${personaje.mass}</p>
              <p class="card-text">Hair Color: ${personaje.hair_color}</p>
              <p class="card-text">Skin Color: ${personaje.skin_color}</p>
              <p class="card-text">Eye Color: ${personaje.eye_color}</p>
              <p class="card-text">Birth Year: ${personaje.birth_year}</p>
            </div>
        </div>`

    
}

function buscar_personaje(){
    let nombre_personaje = document.getElementById('nombre_personaje').value;
    console.log(`Buscar_personaje: ${nombre_personaje}`)
    for(let i=0; i<personajes.results.length; i++){
        if(personajes.results[i].name  == nombre_personaje){
            return personajes.results[i];
        }
    }
}


// `
//         <h2>Nombre del personaje: ${personaje.name}</h2>
//         <p>Año de nacimiento: ${personaje.birth_year}</p>
//         <p>Genero: ${personaje.gender}</p>
//         <p>Altura: ${personaje.height}</p>
//         <p>Color de ojos: ${personaje.eye_color}</p>
//         `

// {"name":"R5-D4",
// "height":"97",
// "mass":"32",
// "hair_color":"n/a",
// "skin_color":"white, red",
// "eye_color":"red",
// "birth_year":"unknown",
// "gender":"n/a",
// "homeworld":"https://swapi.dev/api/planets/1/",
// "films":["https://swapi.dev/api/films/1/"],
// "species":["https://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:57:50.959000Z","edited":"2014-12-20T21:17:50.321000Z","url":"https://swapi.dev/api/people/8/"}