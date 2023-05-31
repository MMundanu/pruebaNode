

const fizz_buzz = (num) => {
    const element = [];
    for (let i = 1; i <= num; i++) {
       if(i % 3 == 0 && i % 5 ==0){
        element.push('FizzBuzz')
       }else if(i % 3 == 0){
        element.push('Fizz')
       }else if(i % 5 == 0){
        element.push('Buzz')
       }else{
        element.push(i)
       }
        }
        console.log(element);
        
        return element
        
        
    }

    module.export = fizz_buzz()