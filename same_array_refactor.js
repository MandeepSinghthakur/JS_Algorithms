function same(arr1,arr2){
    if(arr1.length != arr2.length) {
        return false
    }

    let frequencyCopunter1 = {}
    let frequencyCopunter2 = {}

    for(let val of arr1){
        frequencyCopunter1[val] = frequencyCopunter1[val] ? frequencyCopunter1[val] +1 : 0;
    }
    for(let val of arr2){
        frequencyCopunter2[val] = frequencyCopunter2[val] ? frequencyCopunter2[val] +1 : 0;
    }
    
    for(let key in frequencyCopunter1){
        if(!(key**2 in [frequencyCopunter2])) {
            return false
        }
        if(frequencyCopunter2[key**2] !== frequencyCopunter1[key]){
            return false
        }
    }
    return true

}