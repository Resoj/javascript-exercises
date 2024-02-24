const findTheOldest = function(people) {
    const oldest = people.sort((person1, person2) => {
        let lastGuy = null;
        let nextGuy = null;
        if(person1.yearOfDeath != undefined){
            lastGuy = person1.yearOfDeath - person1.yearOfBirth;
        }
        else{
            lastGuy = (new Date()).getFullYear() - person1.yearOfBirth;
        }
        if(person2.yearOfDeath != undefined){
            nextGuy = person2.yearOfDeath - person2.yearOfBirth;
        }
        else{
            nextGuy = (new Date()).getFullYear() - person2.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
