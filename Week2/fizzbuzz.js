let fizzbuzz = (number) => {
let counter = 0    
    while(counter < number){
        counter++
        if (counter % 3 === 0 && counter % 5 === 0 ){
            console.log("Fizzbuzz")
        }
        else if (counter % 3 === 0){
            console.log("fizz")
        }
        else if (counter % 5 === 0){
            console.log("buzz")
        }
        else{
            console.log(counter)
        }
    }
}

fizzbuzz(15)