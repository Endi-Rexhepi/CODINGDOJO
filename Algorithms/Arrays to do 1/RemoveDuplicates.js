function removeDupes(arr) {
    if (arr.length === 0) return arr;
  
    let uniqueIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[uniqueIndex]) {
        uniqueIndex++;
        arr[uniqueIndex] = arr[i];
      }
    }
  
    arr.length = uniqueIndex + 1; 
    return arr;
  }

  console.log(removeDupes([-2,-2,3.14,5,5,10])); 
  console.log(removeDupes([9,19,19,19,19,19,29]));
  