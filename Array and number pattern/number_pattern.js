var i, j, array= [], finalArray= [];
for(i=0; i<=100; i++){
    array[i]= i;
}
for(i=0; i<=100; i= i+3){
    array[i]= "Hello";
}
for(i=0; i<= 100; i= i + 5){
    array[i]= "World";
}
for(i= 0; i <= 100; i=i + 15){
    array[i]= "Hello World";
}
for(i=0; i<=99; i++){
    finalArray[i]= array[i+1]
}
console.log(finalArray);