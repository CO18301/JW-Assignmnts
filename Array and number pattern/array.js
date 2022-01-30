let array = [
    {
      name: 'xyz',
      age: 10
    },
     {
      name: 'ert',
      age: 4
    },
      {
      name: 'mvm',
      age: 45
    },
     {
      name: 'rere',
      age: 56
    },
]
let arraytwo = [
    {
      name: 'fdcd',
      age: 32
    },
     {
      name: 'ter',
      age: 1
    },
      {
      name: 'fdfg',
      age: 3
    },
     {
      name: 'gfdgd',
      age: 15
    },
]
let arrayThree= [...array, ...arraytwo];
console.log(arrayThree);
var i, arrayFour= [], arrayFive= [], arraySix= [];
for(i=0; i<arrayThree.length; i++){
    arrayFour[i]= arrayThree[i].age;
}
arrayFive= arrayFour.sort(function(a, b){return a - b});
console.log(arrayFive);
arraySix= arrayFive.reverse();
console.log(arraySix);
