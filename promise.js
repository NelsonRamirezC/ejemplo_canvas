function sumatoria(n) {
    
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

const validar = (numero) => {
    return new Promise((resolve, reject) => {

        let resultado = sumatoria(numero)
        if(resultado <1000){
            resolve("El resultado de la sumatoria es igual a : "+ resultado);
        }else{
            reject("Número sobrepasa el limite (1000): " + resultado);
        }
    })
}


/* validar(7).then(respuesta => {
    console.log(respuesta)
}).catch(error => {
    console.log("error:", error)
}) */

(async function (){
    try{
         let resultado = await validar(4)
        console.log(resultado);
    }catch(error){
        console.log("Error: ", error)
    }
   
})();
