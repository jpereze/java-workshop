let emptyonone = (x) => {
  let i = x.length
  i--
  if(x[0]===1){
    while (i>=0){
        x.pop()
        i--
    }
    return x
  } 
   else if (x[i]===1){
      while (i>=0){
          x.pop()
          i--
      }
      return x
  }
  else{
      return x
  }
}
console.log(emptyonone([1,2,3,4]))
console.log(emptyonone([2,3,4,1]))
console.log(emptyonone([2,3,4]))

