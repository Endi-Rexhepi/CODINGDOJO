function removeAt(arr, index) {
    const value = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1; 
    console.log(arr);
    return value;
  }

  console.log(removeAt([1000,3,204,77], 1)); 
  console.log(removeAt([8,20,55,44,98], 3)); 
  