// A statement is a few lines of code that control
// the flow of that code
// By flow, we just mean what code is run and what code is not run

// Conditional statements use the keywords if, else if, and else to
// control what outcome will happen given a certain piece of data
// An if statement can exist independently, but else if and else
// Need to be linked to an if

// the structure of a conditional statement is
//the keyword, the condition, and then the result in the case 
//where the condition is true

// Simple conditional statement
// This will always be true, so it will always run
if ("Naomi" === "Naomi") {
    console.log('It is greater')
}

// Multiple conditional statement
let num = 3
// Of course, in this case, it would print 
// less. However, changing num would change
// The outcome. The idea of multiple conditions
// Is to catch the one that matches and makes
// The most sense
if (num > 5) {
    console.log('Greater')
} else if (num < 5) {
    console.log('Less')
} else if (num === 5) {
    console.log('Equal')
} else {
    console.log('That input did not make sense')
}

// Loop Statements is something that will run code inisde of it repeatedly
// until a condition you set becomes false

// While loops have a condition and will do the code inside the loop 
// until the condition is false
// Here, the while loop will run three times
// rember, we made the num variable earlier
while (num > 3) {
    console.log(num)
    num--
} 

// For loops are similar to while loops that use a counter to 
// make the condition false
// A for loop has a different structure. It creates the 
// counter inside the parentheses
// It is convention to call the counter variable i
for (let i = 0; i < 5; i = i + 1) {
    console.log(i)
}