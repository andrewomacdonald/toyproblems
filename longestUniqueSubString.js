//a function that returns the length of the longest substring with unique characters in it.
//for example, is 'aaabbcdeffff', the longest substring with unique numbers is 'bcdef' which has a length of 5.

function longestSubstring(str) {
    var splitStr = str.split('');
    var solution = '';
    var map = {};
    for(var i = 0; i < splitStr.length; i++) {
        if(solution === '') {
            solution += splitStr[i];
        }
        if(!solution.includes(splitStr[i])) {
            solution += splitStr[i];
            map[solution] = solution.length;
        } else {
            solution = ''
            solution += splitStr[i];
            map[solution] = solution.length;
        }
    }
    return Math.max(...Object.values(map));
}



//version using reduce function

function longestSubstring(str) {
    var uniqueString = str[0];
    return Math.max(...Object.values(str.split('').reduce(function(objectMap, value, index) {
        if(!uniqueString.includes(value)) {
            uniqueString += value;
            objectMap[uniqueString] = uniqueString.length;
        } else {
            uniqueString = '';
            uniqueString += value;
        }
        return objectMap;
    },{})));
}