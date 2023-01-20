/* function sumatoria(n) {
    
    let array = [];
    let sum = 0; 
    let total = 0;
    for (let i = 1; i <= n; i++) {
    sum = (i * (i + 1)) / 2;
    array.push(sum);
    total = array.reduce((a, b) => a + b, 0);
    }
    return total;

}

const callback = (n) => {
    console.log("El resultado de la sumatoria es igual a : "+ n)
}

const callbackError = (n) => {
    console.log("Número sobrepasa el limite: " + n)
}

const calcularAvisarCuando = (numero, callback, callbackError) =>{
    let resultado = sumatoria(numero);
    if(resultado <1000){
        callback(resultado)
    }else{
        callbackError(resultado);
    }
}

calcularAvisarCuando(5, callback, callbackError); */


/* class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    getData = () => {
        return this.nombre;
    }
}

let persona = new Persona("Carlos");

console.log(persona.getData());
 */