function swap(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr;
  }

  console.log(swap([1, 2, 3, 4])); // [2,1,4,3]
  console.log(swap(["Brendan", true, 42])); // [true,"Brendan",42]
  