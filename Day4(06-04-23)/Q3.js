const fruits = ["pineapple", "custardapple", "apple", "banana"];
const Result = [];

function lengthiest(){
  fruits.forEach((fruit) => {
    Result.push({ str: fruit, length: fruit.length });
  })
  Result.sort((a, b) => a.length - b.length);
  const longestString = Result[Result.length - 1].str;
  return longestString
}

console.log("Lengthiest string:",fruits.reduce(lengthiest))
