//a function for calculating bowling scores when given an array of scores

var bowlingScore = function(rolls) {

    var sum = function(numbers) {
        return numbers.reduce( function (a,b) { return a+b })
    }
    var isSpare = function(rolls) {
        return 10 === sum(rolls.slice(0, 2))
    }
    var isStrike = function(rolls) {
        return 10 === rolls[0]
    }

    var calcScore = function(rolls, frame) {
        if(frame === 10)
            return sum(rolls)
        else if (isStrike(rolls))
            return sum(rolls.slice(0, 3)) + calcScore(rolls.slice(1), frame + 1)
        else if (isSpare(rolls))
            return sum(rolls.slice(0, 3)) + calcScore(rolls.slice(2), frame + 1)
        else
            return sum(rolls.slice(0, 2)) + calcScore(rolls.slice(2), frame + 1)
    }
    return calcScore(rolls,1)
}