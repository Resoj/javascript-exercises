const reverseString = function(string) {
    arr = string.split('');
    res = [];
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i]);
    }
    return res.join('');
};

// Do not edit below this line
module.exports = reverseString;
