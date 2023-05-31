

const number_cardinality = (num) => {
    let cadena = '';
    if(!Number.isInteger(num)){
        cadena += 'El numedo debe ser entero'
    }else if(num % 10 == 0){
        cadena += 'zero'
    }else if(num % 5 == 0){
        cadena += 'five'
    }else if(num % 2 == 0 && num % 10 !== 0){
        cadena += 'even'
    }else if(num % 2 !== 0 && num % 5 !== 0){
        cadena += 'odd'
    }else{
        cadena += 'por ahi no es master'
    }
   // console.log(cadena);
    return cadena
}






module.export = number_cardinality()