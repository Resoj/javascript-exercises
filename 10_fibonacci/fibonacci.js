const fibonacci = function(num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    }

    if(num < 0){
        return 'OOPS'
    }
    if(num === 0){
        return 0
    }
    prev = 1
    current = 1

    for(let i = 0; i < num - 2; i++){
        temp = prev + current;
        prev = current;
        current = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
