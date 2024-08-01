
    for(var i=0;i<=100; i++){
        if(i%3 == 0 && i%5  ==0){
            console.log('FizzBuzz')
        }
        else if(i%3 == 0){
            console.log('Fizz')
        }
        else if(i%5 == 0){
            console.log('Buzz')
        }
        else if(i){
            console.log(i)
        }
    }


    for(var i=0;i<=20; i++){
        if(i%2==1){
            console.log(i)
        }
     }


function alwaysHungry(arr) {
    var foodIsFound = false
        for(var i= 0;i<arr.length; i++){
            if(arr[i]=='food'){
                foodIsFound = true
                console.log('Yummy')
            }

        }
        if(foodIsFound == false){
            console.log("I'm Hungry")
        }
    }
       
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

