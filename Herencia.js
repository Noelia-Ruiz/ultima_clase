class Persona{
    //atributos estático, pertenece a la clase
    static idPersona = 0; //se va a incrementar el contador

    constructor(nombre, apellido){
        this._idPersona = ++Persona.idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //Métodos getter & setter
    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

   set nombre(nombre){
    this._nombre = nombre;
   }

   get apellido(){
    return this._apellido;
   }

   set apellido(apellido){
        this._apellido = apellido;
   }

   toString(){
    return `${this._idPersona} ${this._nombre} ${this._apellido}`; //retorna la información como cadena
   }

}

//Clase Empleado, extiende de clase padre o superclase: Persona
class Empleado extends Persona{

    static idEmpleado = 0;

    constructor(nombre, apellido, sueldo){
        super(nombre, apellido);
        this._idEmpleado = ++Empleado.idEmpleado; //incremento el contador 
        this._sueldo = sueldo;
    }

    //getter & setter
    get idEmpleado(){
        return this.idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static idCliente = 0;

    constructor(nombre, apellido, fechaDeResgistro){
        super(nombre, apellido);
        this._idCliente = ++Cliente.idCliente;
        this._fechaDeRegistro = fechaDeResgistro;
    }

    //getter & setter
    get idCliente(){
        return this._idCliente;
    }

    get fechaDeResgistro(){
        return this._fechaDeRegistro;
    }

    set fechaDeResgistro(fechaDeResgistro){
        this._fechaDeRegistro = fechaDeResgistro
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaDeRegistro}`;
    }
}

let persona1 = new Persona('Anabella', 'Perez');
console.log(persona1.toString());

let persona2 = new Persona('Arturo', 'Diaz');
console.log(persona2.toString());

let empleado1 = new Empleado('Mario', 'Bros', 25000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Belen', 'Lopez', 30000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Pepe', ' Bellis', new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Lorena', 'Jones', new Date());
console.log(cliente2.toString());