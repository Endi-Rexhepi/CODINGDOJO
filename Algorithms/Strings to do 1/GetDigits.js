function getDigits(str) {
    let digits = '';
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
        digits += str[i];
      }
    }
    return Number(digits);
  }
  
  console.log(getDigits("abc8c0d1ngd0j0!8"));
  console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); 