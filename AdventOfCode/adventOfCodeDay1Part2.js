var advent2 = function(input) {
  input = input.toString(10);
  input = input.toString(10).split("").map(function(value){
    return parseInt(value);
  });
  var middle = Math.ceil(input.length / 2);
  var left = input.slice(0, middle);
  var right = input.slice(middle, input.length);
  var sum = left.reduce(function(previous, value, index) {
    if(value === right[index]) {
      previous += value * 2;
    }
    return previous
  },0)
  return sum;
}
