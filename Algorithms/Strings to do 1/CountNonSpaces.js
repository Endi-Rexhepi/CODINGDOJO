function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        count++;
      }
    }
    return count;
  }

  console.log(countNonSpaces("Honey pie, you are driving me crazy")); 
  console.log(countNonSpaces("Hello world !")); 