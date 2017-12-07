var checkSum = function(arr) {
    arr = arr.split(' ');
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('\t');
    }
    for (var j = 0; j < arr.length; j++) {
        arr[j] = arr[j].map(Number);
    }

    var sum = 0;
    for(var n = 0; n < arr.length; n++) {
        sum+= checkModule(arr[n]);
    }

    return sum;
}

var checkModulo = function(array) {
    array = array.sort(function(a,b) {
        return b-a;
    });
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        var numberToCheck = array[i];
        for(var j = i + 1; j < array.length; j++) {
            if(numberToCheck % array[j] === 0) {
                sum+= numberToCheck / array[j];
            }
        }
    }
    return sum;
}