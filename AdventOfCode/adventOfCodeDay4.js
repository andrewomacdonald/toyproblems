var fs = require('file-system');

var input = fs.readFileSync('day4part1txt.txt').toString().split('\n');


var objectMap = function(string) {
    var passes = 0;
    for(var i = 0; i < string.length; i++) {
        var hello = string[i].trim(' ').split(' ').reduce(function (map, value) {
            if (!map.hasOwnProperty(value)) {
                map[value] = 1;
            } else {
                map[value]++;
            }
            return map;
        }, {});

        var sum = 0;
        for(var key in hello) {
            sum += hello[key];
        }

        if(sum === Object.keys(hello).length) {
            passes++;
        }
    }

return console.log('passes ',passes);
};