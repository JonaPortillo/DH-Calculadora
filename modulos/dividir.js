// 4_ Creamos el archivo "dividir.js", con la función.
let dividir = function(num1, num2){

    //Contemplanos en caso de que un número sea cero
    if(num1 === 0 || num2 === 0){
        return "No se puede dividir por cero"
    }else{
        return num1 / num2;
    }
}

//Exportamos la función
module.exports = dividir;