const sum = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sum(arr.slice(1));
  };
  
  console.log(sum([0, 1, 2, 3, 4, 5])); // 15
