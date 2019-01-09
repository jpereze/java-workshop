const reverseastring = (word)=>{
    let i = word.length
    let y = 0
    let newword = [] 
    while (i>=0){
        i--
        newword[y] = word[i]
        y++
    }
    return newword.join("")
}
let x = reverseastring("Finally")
console.log(x)