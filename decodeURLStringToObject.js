//a function that takes a URL query string and converts it to an object.
//for exampple, a query of ''user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
//would return an object of
{
    user: {
        favoritecolor: 'blue',
        name: {
            firsname: 'andy',
            lastname: 'macdonald'
        }
    }
}




function convertQueryToMap(query) {
    var finalObject = {};
    query.split('&').map(function(params) {
        var parts = params.split('=');
        if (!parts[1]) {
            return {}
        };
        parts[0].split('.').reduce(function(accumulator, value, index, array) {
            console.log(array);
            if(!accumulator[value]) {
                accumulator[value] = {};
            }
            if(index === array.length - 1) {
                accumulator[value] = decodeURIComponent(parts[1]);
            }
            return accumulator[value];
        },finalObject);
    });
    return finalObject;
}
