const sumAll = function(num1, num2) {
    let count = 0;
    let sum = 0;
    if(!((num1 < 0) && Number.isInteger(num1) || num2 < 0) && Number.isInteger(num2)){
        if(num1 >= num2){
            count = num2;
            while(count <= num1){
                sum += count;
                count += 1
            }
        }
        else{
            count = num1;
            while(count <= num2){
                sum += count;
                count += 1
            }
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
