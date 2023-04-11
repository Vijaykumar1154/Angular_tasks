numbers_array = [12,2,9,7,11,19,17,22,23];

function check_prime(element){
    for(let x = 2; x < element; x++){
        if(element % x == 0)
            return false;
    }
    return true;
}

result = numbers_array.filter(check_prime);
console.log(result);
