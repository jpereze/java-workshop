let plusone = (array) =>{
  let newarray = array.map(item => {
    return item +1
  }
  )
  return newarray
}
let array1 = [1,2,3,4,5,6]

let randomnumber = () => {
   return console.log(`You have $${5*Math.random()} left on your wallet`)
}


class vehicle {
 constructor (model,color,topspeed){
     this.model = model
     this.color = color
     this.topspeed = topspeed
 }
  turnon(){
      console.log(`Your ${this.model} Car is On`)
  }
 
 honk(){
    console.log(`BEEP`)
    }
 paintcar(newcolor){
    this.color = newcolor
    console.log(`You painted your ${this.model} to ${this.color}`)
    }
}

let newvehicle = new vehicle ('Toyota',`Red`,`100Mph`)
newvehicle.turnon()
newvehicle.honk()
newvehicle.paintcar(`blue`)