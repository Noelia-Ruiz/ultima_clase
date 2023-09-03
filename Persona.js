class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(nombre){
        return `${this.nombre} te manda saludos!!`
    }
}

let persona = new Persona('Noelia', "Ruiz");
console.log(persona); 

console.log(persona.saludar());

let persona2 = new Persona('Pepe', 'Gomez');
console.log(persona2.saludar());

