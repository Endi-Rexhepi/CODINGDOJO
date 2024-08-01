function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
  }
  
  console.log(pushFront([5,7,2,3], 8)); 
  console.log(pushFront([99], 7));      
  