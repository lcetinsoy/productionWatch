// buildFunction -> function
function buildFunction(){
    let data = 2
    //console.log("data", data)
   
    let something = () => {
        return data
    }
    data = 4
    console.log(data)
    return something //something is a function !!
    console.log("POULETTTTT")
}
let func = buildFunction()
//console.log(data)//marche pas
//build function est terminé à ligne 15
console.log(typeof func) //function !!!!!
let result = func()
console.log(result)//
let func2 = buildFunction()