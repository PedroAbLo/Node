


    document.getElementById("mostrar--actor").addEventListener("click", getActores, false);
    document.getElementById("crear-actor").addEventListener("click", postActor , false);
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
        // document.getElementById("").innerHTML = JSON.stringify(result[0]);
        console.log(result)
        mostrarTabla(result);
    } catch(e){
        console.log(e);
    }

}
//post con fetch

async function postActor(){
    try{
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

