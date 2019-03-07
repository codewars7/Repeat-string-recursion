const repeat = (str, num) => {
     return (num <= 0) ? ("") : (num === 1) ? (str) : (str + repeat(str, num -1))
// just if else version
//    if (num <= 0) {
//        return "" 
//    }
//    if (num === 1) {
//        return str
//    }
//    else {
//        return str + repeat(str, num -1)
//    }
}


let result = repeat("Crack coding interview", 4)
console.log(result)
