// Methods are a way to change data that you have created
// Each data type has methods built inside of it
// Methods are only used when you add () after their name


// String Methods
let aString = "My string"
aString.toUpperCase()
aString.toLowerCase()
aString.startsWith("M")

// Number methods
let myNumber = 1
myNumber.toPrecision()

// Array Methods
let myArray = []
// Push adds an item to an array
myArray.push('something')
// Pop removes the last item in the array
myArray.pop()
// length gives you the number of elements in the array
myArray.length

// Iterators go through every item
// and do something

// forEach just does something for each 
// item in the array. In this case it will print
// each item

let myArray2 = [1, 2, 3, 4]
myArray2.forEach(
    (item) => {
        console.log(item)
    }
)

// Map creates a new array in the background,
// and adds each thing that is returned to the
// new array. In this case, the numbers in  
// myArray2 will have 1 added to them and put into
// the newArray. But, myArray2 will remain the same

let newArray = myArray2.map(
    (item) => {
        return item++
    }
)

// Here, filter will also create a new 
// array, which will not include any odd 
// numbers. The old array will stay the same,
// but the new array will have only the items
// that return true
let myFilteredArray = myArray2.filter(
    (item) => {
        return item % 2 === 0
    }
)