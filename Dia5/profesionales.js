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

let profesionales = [actor1,actor2,actor3,actor4,actor5,actor1,actor2,actor3,actor4,actor5];


module.exports = {profesionales, Professional}