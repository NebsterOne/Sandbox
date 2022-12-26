//arrow function
// var sum = function(a, b) {
//     return a + b;

// }


// cosnt sum = (a, b) => a + b;

// const OrginalArray = [1,3,2,5,10];
// var count = function(){
//         let i = 10;
//         for (let i = 0; i < OrginalArray.length; i++){
//             console.log(i);
//         }
//         console.log('Outside:', i);
// }
// count();

//functional loops: forEach, filter and map

const moviePatrons= [
    {name: "Archie", age: 16},
    {name: "Benji", age: 30},
    {name: "Carolina", age: 24},
    {name: "Dominic", age: 36},
    {name: "Ella", age: 17},
    {name: "Fiona", age: 26},
    {name: "George", age: 46},
];

//forEach

//moviePatrons.forEach(patron => console.log(patron.name));


//filter

// const canWatchRatedR1 = moviePatrons.filter(howold => howold.age > 17);

// console.log(canWatchRatedR1);

const canWatchRatedR1 = moviePatrons.filter(item => {

console.log(item.name);
})

//map