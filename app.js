const os = require('os');
const fs = require('fs');
// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('Arch: ', os.userInfo());

const genders = ['F', 'M'];
const maleNames = ['Mike', 'John', 'Bob', 'Clemens'];
const femaleNames = ['Kate', 'Anna', 'Barbara'];
const lastNames = ['Brick', 'Polock', 'Track'];
const people = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const randomChoice = () => {
    const pickedGender = genders[Math.floor(Math.random() * genders.length)];
    const pickedMaleName = maleNames[Math.floor(Math.random() * maleNames.length)];
    const pickedFemaleName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    const pickedLastNames = lastNames[Math.floor(Math.random() * lastNames.length)];

    const personAge = getRandomInt(18, 78);

    if (pickedGender === 'F') {
        people.push('F', pickedFemaleName, pickedLastNames, personAge);
        
        //console.log(pickedFemaleName, pickedLastNames, personAge);
    } else {
        people.push('M', pickedMaleName, pickedLastNames, personAge);
        //console.log(pickedMaleName, pickedLastNames, personAge);
    }
    console.log(people);
    // console.log(pickedMaleName, pickedFemaleName, pickedLastNames);
}
for (let i = 0; i < 21; i++) {
    people.push(
      randomChoice()
    );
  }


fs.writeFile('outputfile.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});