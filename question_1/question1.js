const mixedArray = ["Pizza", 10, true, 25, false, "Wings"]

async function lowerCaseWords(mixedArray, dataType) {

    mixedArray = mixedArray.filter(item => typeof item === dataType)

    for(let i = 0; i < mixedArray.length; i++){
        mixedArray[i]=mixedArray[i][0].toLowerCase() + mixedArray[i].substr(1);
    }
    
    return mixedArray
}

console.log(lowerCaseWords(mixedArray, 'string'))


