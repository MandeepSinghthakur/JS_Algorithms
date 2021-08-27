function maxSubArray(arr, num) {
    if (arr.length == 0) {
        return []
    }

    let max = -Infinity

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;

}
