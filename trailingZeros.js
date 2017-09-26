//a function that returns the number of trailing zeros of a factorial.

function zeros(number) {
    var count=0;

    while(number >= 5) {
        count += Math.floor(number / 5);
        number = number / 5;
    }
    return count;
}