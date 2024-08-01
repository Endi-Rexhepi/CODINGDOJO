function insertAt(arr, index, value) {
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = value;
    return arr;
  }

  console.log(insertAt([100,200,5], 2, 311)); 
  console.log(insertAt([9,33,7], 1, 42));     
  