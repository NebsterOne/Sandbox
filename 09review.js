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

//*****REVIEW
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

//**forEach

//moviePatrons.forEach(patron => console.log(patron.name));


//**filter

// const canWatchRatedR1 = moviePatrons.filter(howold => howold.age > 17);

// console.log(canWatchRatedR1);


//**Filtering each fields from the Arrays

// const canWatchRatedR1 = moviePatrons.filter(item => {

// console.log(`How old are patrons on the list ${item.age}`);
// })

//**map

const newArr2 = moviePatrons.map(item => {
    if(item.age >17) {
        return{name: item.name, age: item.age, R: true}
    }
    else {
        return item;
    }
})

console.log(newArr2);
