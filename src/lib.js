function addTwoNumbers(a, b){
    return a + b
}


function multTwoNumbers(a, b){
    return a * b
}

function sumArrayValues(values){

    let result = 0;

    for(let i = 0; i < values.length; i++){
        result += values[i]
    }

    return result

}


module.exports = {
    addTwoNumbers: addTwoNumbers,
    multTwoNumbers: multTwoNumbers,
    sumArrayValues: sumArrayValues
}


