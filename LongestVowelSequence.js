//a function that returns the length of the longest sequenece of consecutive vowels in a lower-case string.
//for example, 'aaabbeeee' would return the number 4.

function longestVowelSequence(s) {
    var counter = 0;
    return Math.max(...s.split('').reduce(function(histogram, value, position) {
        if(/^[aeiou]$/.test(value)){
            counter++;
            if(position === s.length - 1) {
                histogram.push(counter);
            }
        } else {
            if(counter > 0) {
                histogram.push(counter);
            }
            counter = 0;
        }
        return histogram;
    },[]));
}
