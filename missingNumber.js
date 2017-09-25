//a function that accepts a beginning and end of a range of numbers, and an unsorted array
//of that range with one number missing. the function returns the missing number. it
//funds out what the sum of the range of, what the sum of the array is, and subtracts the two.

function missingNumber(beginning, end, array) {
    var sumOfSeries = ((end - beginning) * (beginning + end)) / 2;
    return Math.floor(sumOfSeries - array.sort(function(a,b) {
       return a - b;
    }).reduce(function(sum, value) {
        return sum + value;
    },0));
}
