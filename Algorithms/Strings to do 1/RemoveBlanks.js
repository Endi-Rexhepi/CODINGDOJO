function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        result += str[i];
      }
    }
    return result;
  }

  console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
  console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); 
  