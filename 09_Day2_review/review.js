// fs is a Node Standard library package for readin and writing files

const fs = require('fs'); 


//Reading file
// fs.readFile('log.txt', 'utf8', (error, data) => 
//     error ? console.error(error) : console.log(data)
// );

//Writing to file
// fs.writeFile('log.txt', process.argv[2], (err) => 
//     err ? console.error(err) : console.log('Success!')
// );

//Adding to file (one after other)
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => 
//     err ? console.error(err) : console.log('Commit logged!')
// );


//Modularization

// const planet = {
//     name: "Earth",
//     age: "4.543 billion years",
//     moons: 1,
//     isPopulated: true,
//     population: "7.594 billion",
//     neighboringPlanets: ["Mars", "Venus"],
//     tellFunFact: function() {
//         console.log("The earth is the only planet in out solar system not named after a Roman God or Goddess.");
//     }, 
//     showWarning: function() {
//         console.log("Space junk falls into Earth's atmosphere ar a rate of about one a day.");
//     }
// }
// const planet = require('./review_planet');
// planet.tellFunFact();


// npm init / npm init - y / npm i inquirer / npm i inquirer@8.2.4 / npm i 
//npm i badmath