const findTheOldest = function(people) {
    people.sort((a, b) => {
        if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear()
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
    })
    return people[people.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
