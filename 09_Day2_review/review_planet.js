

const planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: "7.594 billion",
    neighboringPlanets: ["Mars", "Venus"],
    tellFunFact: function() {
        console.log("The earth is the only planet in out solar system not named after a Roman God or Goddess.");
    }, 
    showWarning: function() {
        console.log("Space junk falls into Earth's atmosphere ar a rate of about one a day.");
    }
}

module.exports = planet; 