function acronym(str) {
    let result = '';
    let capitalizeNext = true;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        capitalizeNext = true;
      } else if (str[i] === '-') {
        result += '-';
        capitalizeNext = true;
      } else if (capitalizeNext) {
        result += str[i].toUpperCase();
        capitalizeNext = false;
      }
    }
  
    return result;
  }

  console.log(acronym(" there's no free lunch - gotta pay yer way. ")); 
  console.log(acronym("Live from New York, it's Saturday Night!")); 
  