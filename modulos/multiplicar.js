// 3_ Creamos el archivo "multiplicar.js", con la función.
let multiplicar = function(num1, num2){

    //Contemplanos en caso de que un número sea cero
    if(num1 === 0 || num2 === 0){
        return 0
    }else{
        return num1 * num2;
    }
}

//Exportamos la función
module.exports = multiplicar;