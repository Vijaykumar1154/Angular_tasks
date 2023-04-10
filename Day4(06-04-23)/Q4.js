const fruits = ["pineapple", "custardapple", "apple", "banana"];
let final_length = 0;
function lengthsum(total,value){
    return total + value.length
}

console.log("Sum of Lengths of strings:",fruits.reduce(lengthsum,0))
