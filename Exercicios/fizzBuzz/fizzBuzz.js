const fizzBuzz = n => {
    if(typeof(n) === 'number'){
        if(n % 3 == 0 && n % 5 == 0){
            return 'FizzBuzz';
        }else if(n % 3 == 0){
            return 'Fizz';
        }else if(n % 5 == 0){
            return 'Buzz';
        }else if(n % 3 > 0 && n % 5 > 0){
            return n;
        }
    }
    return 'Não é um número.';
}

console.log(fizzBuzz(20));