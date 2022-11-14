// step 1. find all the todo objects that have an id greater then 100 and add them to a new array by the name of aboveHundred;
// step 2. log to the console the aboveHundred array;

//a list of data objects is being retrieved from the url you see below;
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {

    //check what is being logged to your console to familirize yourself with the data structure;
    //console.log(json);
    //write your code below this line;
    const aboveHundred = [];
    for ( let i = 0; i < json.length; i++){
      if( json[i].id > 100){
        aboveHundred.push(json[i]);
      }
    }
    console.log(aboveHundred);
    

    //write your code above this line;
  })