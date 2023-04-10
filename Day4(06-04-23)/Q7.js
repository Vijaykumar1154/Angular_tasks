students = [
    {name:"vijay",score:80},
    {name:"dilli",score:90},
    {name:"kiran",score:56},
    {name:"raju",score:22}
]
newarray = [];

function result(value){
    if(value.score>70)
        return newarray += value
}
console.log(students.filter(result))