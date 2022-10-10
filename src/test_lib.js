const lib = require('./lib')

function test_sumArrayValue(){

    let data1 = [1, 0, -1]

    let expected = 0

    if (lib.sumArrayValues(data1) != expected){
        console.log("Problème !")
    }
}

test_sumArrayValue()