// 1task
function determinate (anyObj){
    for (let key in anyObj) {
        if (anyObj.hasOwnProperty(key)) {
            console.log(`${key} : ${anyObj[key]}`) 
        }   
    }
}