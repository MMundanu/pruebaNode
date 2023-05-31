
const range_vision = (num) => {
    let cadenaNum = ''
    let resultado
    if (Number.isInteger(num) && num > 0) {
        let arrayNum = [];
        cadenaNum = num.toString()
        arrayNum = cadenaNum.split("")
       // console.log(arrayNum, ' ==================');
        let arrayNumReverse
        arrayNumReverse = cadenaNum.split("").reverse()
       // console.log(arrayNum, ' ==================');
       // console.log(arrayNumReverse);

        //suma de un lado
        //suma del otro

        const sumaArray = (array) => {
            let suma = 0;
            for (let i = 0; i < array.length; i++) {
                
                    suma += Number(array[i]);
                
            }
            return suma;
        }

        let arrayDeSuma1 = []
        let arrayDeSuma2 = []

        for (let i = 0; i < arrayNum.length; i++) {
           // console.log(arrayNum);
            const numero = +arrayNum[i];
           // console.log(numero, '////////////////');
            let rango = numero + 1;
            let vision = arrayNum.slice(i + 1, rango)
            let laSuma = sumaArray(vision)
            
            arrayDeSuma1.push(laSuma)
           // console.log(vision);
            //console.log(laSuma, 'iiiiiii');
            

        }
       // console.log(arrayDeSuma1, 'ooooo');
      // console.log(arrayNum);

       for (let i = 0; i < arrayNumReverse.length; i++) {
        //  console.log(arrayNumReverse);
       // console.log(arrayNum);
          const numero = +arrayNumReverse[i];
         // console.log(numero, '////////////////');
          let rango = numero + 1;
          let vision = arrayNumReverse.slice(i + 1, rango)
          let laSuma = sumaArray(vision)
          
          arrayDeSuma2.push(laSuma)
         // console.log(vision);
          //console.log(laSuma, 'iiiiiii');
          

      }

      //console.log(arrayDeSuma2);
      let arrayDeIzquierda = arrayDeSuma2.reverse()
     // console.log(arrayDeIzquierda, 'iiiiiii');

      const sumarArrays = (array1, array2) => {
        
        const suma = [];
        for (let i = 0; i < array1.length; i++) {
          suma.push(array1[i] + array2[i]);
        }
        
        return suma;
      }

      let sumaDeArrays = sumarArrays(arrayDeIzquierda, arrayDeSuma1)

     // console.log(sumaDeArrays, 'vvvvvvvvvvvvvvvvv');

      const numeroMasChico1 = Math.min(...sumaDeArrays)

     // console.log(numeroMasChico1);

      const numeroMasChico0 = Math.min(...arrayNum)

      //console.log(numeroMasChico0);

     // console.log(arrayNum);

      let arrayDeNumeros = arrayNum.map(numero => Number(numero))
      
      //console.log(arrayDeNumeros);

      let posicion0 = arrayDeNumeros.indexOf(numeroMasChico0)

      let posicion1 = sumaDeArrays.indexOf(numeroMasChico1)

     // console.log(posicion0, posicion1);

      if(posicion0 == posicion1){
        resultado = true
      }else{
        resultado = false
      }

      resultado
    
    }else{
        resultado = 'no es un numero valido'
    }

    console.log(resultado);
    return resultado 

}

module.export = range_vision()