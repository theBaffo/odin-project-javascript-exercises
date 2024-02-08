const calculatePersonAge = function(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    let oldestPerson;

    people.forEach((person) => {
        if (!oldestPerson) {
            oldestPerson = person;
        } else if (calculatePersonAge(person) > calculatePersonAge(oldestPerson)) {
            oldestPerson = person;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
