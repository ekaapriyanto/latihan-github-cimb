const validator = (arr, cb) =>{
    let arrResult = []
    for (let i = 0; i < arr.length; i++){
        //if (cb(arr[i])){
            arrResult[i] = cb(arr[i])
        //} else{
            //arrResult[i] = 0
        //}
    }
    return arrResult
}

let arrParam = [1,2,3,4]
console.log(validator(arrParam, (val) => {
    return val * 3
}))