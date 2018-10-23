// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // identify the type of the object
  // apply stringification depending on the case
  // edge cases are dates, functions, toJSON, and instances of "new" class creation
  if(obj === undefined || obj === null || typeof obj === 'function') {
    return null;
  }else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj;
  }else if (Array.isArray(obj)) {
    //Will need to iterate through each element of the array
    let result = obj.map(function(element){
      return stringifyJSON(element);
    });
    // and then evaluate the type to determine stringification
    return '[' + result.join(',') + ']';
    // return the newly converted string version of the input object
  }else if (typeof obj === 'object') {
    let result = [];
    //again need to iterate through each object property
    //evaluate both the key and value of each
    for(var key in obj) {
      result.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
    }
    // return the newly converted string version of the input object
    return '{' + result.join(',') + '}';
  }
};