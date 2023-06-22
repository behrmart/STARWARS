// StarWars Project DEV.F 
// por Bernardo F. Martinez Meave
// Stardate 20230621

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
            <img src="img/${personaje.name}.jpeg" class="card-img-top" alt="StarWars logo">
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

function templateTarjeta(personaje){
    let div = document.createElement('div')

    div.innerHTML = `<div class="card text-center">
                        <img src="img/${personaje.name}.jpeg" class="card-img-top" alt="StarWars logo">
                        <div class="card-header text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3">
                            ${personaje.name}
                        </div>
                        <div class="card-body text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                            <p class="card-text">Gender: ${personaje.gender}</p>
                            <p class="card-text">Height: ${personaje.height}</p>
                            <p class="card-text">Mass: ${personaje.mass}</p>
                            <p class="card-text">Hair Color: ${personaje.hair_color}</p>
                            <p class="card-text">Skin Color: ${personaje.skin_color}</p>
                            <p class="card-text">Eye Color: ${personaje.eye_color}</p>
                            <p class="card-text">Birth Year: ${personaje.birth_year}</p>
                            </div>
                        </div>`
    
    const render= document.getElementById('personajecards');
    render.appendChild(div);
}

function generaCards(){
   
    for (let i=0; i<personajes.results.length; i++){
            templateTarjeta(personajes.results[i])
    }
}

generaCards();




