function popFront(arr) {
    const value = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1; 
    console.log(arr);
    return value;
  }
  
  console.log(popFront([0,5,10,15])); 
  console.log(popFront([4,5,7,9])); 
  