const removeFromArray = function(array, ...removeValues) {
    return array.filter(item => !removeValues.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
