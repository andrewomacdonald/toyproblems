// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
//
//     You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
//
// Example 1:
// Input:
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"]
//     ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
//
// Example 2:
// Input:
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"]
//     "KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
//     Note:
//     The length of both lists will be in the range of [1, 1000].
//     The length of strings in both lists will be in the range of [1, 30].
//     The index is starting from 0 to the list length minus 1.
//     No duplicates in both lists.


var findRestaurant = function(list1, list2) {
    var list1Indeces = createMap(list1);
    var list2Indeces = createMap(list2);
    var solutionObject = {minimum: null};

    var solution = Object.keys(list1Indeces).reduce(function(solutionObject, key){
        if(list2Indeces.hasOwnProperty(key)) {
            var sum = list1Indeces[key] + list2Indeces[key];
            if(solutionObject.minimum === null || sum < solutionObject.minimum) {
                solutionObject.minimum = sum;
                solutionObject.result = [key];
            } else if (solutionObject.minimum === sum) {
                solutionObject.result.push(key);
            }
        }
        return solutionObject;
    }, solutionObject);

    return solution.result;
};

var createMap = function(list) {
    return list.reduce(function(map,value,index) {
        map[value] = index;
        return map
    },{})
};