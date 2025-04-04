class Persona {
    static contador = 0; 
    constructor(nombre, apellidos) {
        this._nombre = nombre; 
        this._apellidos = apellidos; 
        this._id = ++Persona.contador; 
    }
    get nombre_completo() {
        return `${this._nombre} ${this._apellidos}`; 
    }
    empleado_mes() {
        return `${this.Datos()} empleado del mes`; 
    }
}

class Empleado extends Persona { 
    #sueldo; 
    constructor(nombre, apellidos, departamento, puesto, sueldo) {
        super(nombre, apellidos);
        this._departamento = departamento; 
        this._puesto = puesto; 
        this.#sueldo = sueldo; 
    }

    get sueldo() {
        return this.#sueldo;
    }

    empleado_modelo = () => { 
        return `${this.Datos()} nuestro empleado modelo`; 
    };

    Datos() {
        return `#${this._id} ${this._nombre} ${this._apellidos}  ${this._departamento} ${this._puesto}`; 
    }
}


let empleado_1 = new Empleado('Rodrigo', 'Pinal', 'Finanzas', 'Asistente', 8954);
let empleado_2 = new Empleado('Ana', 'Torres', 'Marketing', 'Analista', 7000);
let empleado_3 = new Empleado('Aristoteles', 'Gomez', 'Limpieza', 'Intendente', 3500);


console.log(empleado_1.Datos());
console.log(empleado_2.Datos());
console.log(empleado_3.Datos());

console.log(empleado_1.empleado_mes());
console.log(empleado_2.empleado_modelo());
