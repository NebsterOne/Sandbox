const { fstat } = require('fs');

constfs = require('fs');

fs.readFile('data.csv', 'utf8', (error, data) => 
error ? console.error(error) : console.log(data)
);


// ? - Example

const a = 10;
const b = 20;

const result = a === b ? true : false; 

console.log(result);