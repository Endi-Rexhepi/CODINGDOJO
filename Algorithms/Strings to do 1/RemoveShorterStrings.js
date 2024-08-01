function removeShorterStrings(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= minLength) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); 
  console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); 
  