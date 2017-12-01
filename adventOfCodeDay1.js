var advent1 = function(input) {
  input = input.toString().split('');
  var map = {};
  if(input[0] === input[input.length - 1]) {
    map[input[0]] = 1;
  }
  var map = input.reduce(function(map, value, index) {
    if(value === input[index + 1]) {
      if(!map.hasOwnProperty(value)) {
        map[value] = 1;
      } else {
        map[value]++;
      }
    }
    return map;
  },map)
  console.log(map);
  var sum = 0;
  for(var key in map) {
    sum += key * map[key];
  }
  return sum;
}
