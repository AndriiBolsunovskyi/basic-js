const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {

        return false;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let dreamTeam = [];
    let nameDreamTeam = "";
    members.forEach(element => {
        if (typeof element == "string") {
            let myString = element.split(" ").join('');
            console.log("elem: " + myString);
            dreamTeam.push(myString[0].toUpperCase());
        }
    });
    dreamTeam.sort();
    nameDreamTeam = dreamTeam.join("");
    console.log(nameDreamTeam);
    return nameDreamTeam;
}

module.exports = {
    createDreamTeam
};