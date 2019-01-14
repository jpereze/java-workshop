let filtereven = (array1) =>{
console.log (array1.filter(
(even) =>{
    return even % 2 === 0
}
)
)
}
filtereven([10,15,20,25,30,35,40])