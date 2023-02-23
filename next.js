function subStrings(string) {
  
    // string to case insensitive
    string = string.toLowerCase().trim();
  
    //   storing the values of the index
  
    let valueIndexX;
    let indexFindX;
    // creating a new array to store substrings
    const subString = [];
  

    // loop to loop through the string length
    for (let i = 0; i < string.length; i++) {
      // loop through the next character in the array
      for (let x = i + 1; x <= string.length; x++) {
        //   store the current string
        let unique = string.slice(i, x);
  
        indexFindX = x;
        valueIndexX = string[indexFindX];
        //   store the match method
        let duplicateFound = unique.match(valueIndexX);
        //   conditional to see if the current value at the index matches anything found previously
        if (duplicateFound) {
          // add the substring to the new set
          subString.push(unique);
          i = x;
        }
      }
      console.log(subString);
    }
  }

subStrings('i had a dream about all the great things i can do')