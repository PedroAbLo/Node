// const { profesionales } = require("./profesionales");
'use strict';


    document.getElementById("mostrar--actor").addEventListener("click", getActores, false);
    document.getElementById("crear--actor").addEventListener("click", postActor , false);
    document.getElementById("actualizar-actor").addEventListener("click", putActor, false);
    document.getElementById("eliminar-actor").addEventListener("click", deleteActor , false);

    class Professional {
    
        //Definimos constructor
        constructor(name, age, genre, weight, height,
            hairColor, eyeColor, race, isRetired,
            nationality, oscarsNumber, profession, foto) {
    
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
            // this.foto = foto;
    
        }
    }
    let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "img\bradPitt.png");
    let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "img\denzel.png");
    let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", ".img\scarlett.png");
    let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", ".img\angelina.png");
    let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", ".img\sophia.png");
    
    let profesionales = [actor1,actor2,actor3,actor4];






//get con fetch
async function getActores(){
    let id = document.getElementById("id--actor").value;
    let url = `http://localhost:3000/profesionales`
    if(id !== ""){

        url = `http://localhost:3000/profesionales?id=${id}`

    }
    let param = {
          method:"GET"
    }
    
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        console.log("a")
        if(Array.isArray(result)==true){
            console.log(result);
            mostrarTabla(result);
        }else{
            let arrayNuevo = [];
            arrayNuevo.push(result);
            console.log(arrayNuevo)
            mostrarTabla(arrayNuevo);
        }

    } catch(e){
        console.log(e);
    }

}
//post con fetch

async function postActor(){
    console.log("Adios")
    try{
        'use strict';
        let profesional = new Professional(document.getElementById("id").value,
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("retirado").value,
        document.getElementById("oscars").value,
        document.getElementById("genero").value,
        document.getElementById("peso").value,
        document.getElementById("altura").value,
        document.getElementById("raza").value,
        document.getElementById("pelo").value,
        document.getElementById("ojos").value,
        document.getElementById("profesion").value,
        );
        
        let url ="http://localhost:3000/profesionales";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(profesional),
            method: "POST"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

//push con fetch

async function putActor(){
    try{
        'use strict';
        let profesional = new Professional(document.getElementById("id").value,
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("retirado").value,
        document.getElementById("oscars").value,
        document.getElementById("genero").value,
        document.getElementById("peso").value,
        document.getElementById("altura").value,
        document.getElementById("raza").value,
        document.getElementById("pelo").value,
        document.getElementById("ojos").value,
        document.getElementById("profesion").value,
        );
        
        let url ="http://localhost:3000/profesionales";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(profesional),
            method: "POST"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

//delete con fetch

async function deleteActor() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
    const id = document.getElementById("id--actor").value;
    let url = `http://localhost:3000/profesionales?id=${id}`
    try {
      const res = await fetch(url, { method: "delete" });
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };
      console.log(result)
    } catch (err) {
      console.log(err);
    }
  }



//funcion mostrar tabla
function mostrarTabla(profesionales){

    let cuerpoTabla = document.getElementById("actores--tabla");
    let tablaLlena = "";


    for(let i = 0; i < profesionales.length; i++){

        tablaLlena += "<tr><td scope='row'>" + i +"</td>"+
        "<td>" + profesionales[i].name + "</td>" +
        "<td>" + profesionales[i].nationality + "<td>"+
        "<td>" + profesionales[i].oscarsNumber + "<td>"+
        "<td>" + profesionales[i].isRetired + "</td>" +
        "<td>" + profesionales[i].profession + "</td>" +
        "<td>" + profesionales[i].height + "</td>" +
        "<td>" + profesionales[i].weight + "</td>" +
        "<td>" + profesionales[i].age + "</td>" +
        "<td>" + profesionales[i].hairColor + "</td>" +
        "<td>" + profesionales[i].eyeColor + "</td>" +
        "<td>" + profesionales[i].race + "</td></tr>"
    }
    cuerpoTabla.innerHTML = tablaLlena;
}

