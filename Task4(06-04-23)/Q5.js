students=[
    {name: "Vijay", marks: 99},
    {name: "Dilli", marks: 91},
    {name: "RRR", marks: 10},
    {name: "kiran", marks: 50},
    {name: "odelu", marks: 11},
    {name: "kousalya", marks: 12}
]
const new_array=students.map(method)
function method(students){
    return students.marks
}
var high= new_array[0];
var index=0,i=0;
for(let x of new_array){
    if(x>high){a
        high=x;
        index=i;
    }
    i++;
}

console.log("Maximum Mark is "+high+" scored by "+students[index].name);
