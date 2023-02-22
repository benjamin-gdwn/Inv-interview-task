const subList = document.getElementById("subStringList");
const submitBtn = document.getElementById("submitBtn");
const refresh = document.getElementById("refreshBtn");

function subStrings() {
  let input = document.getElementById("nameInput").value;

  // string to case insensitive
  input = input.toLowerCase().trim();

  //   storing the values of the index

  let valueIndexX;
  let indexFindX;
  // creating a new array to store substrings
  const subString = [];

  // loop to loop through the string length
  for (let i = 0; i < input.length; i++) {
    // loop through the next character in the array
    for (let x = i + 1; x <= input.length; x++) {
      //   store the current string
      let unique = input.slice(i, x);

      indexFindX = x;
      valueIndexX = input[indexFindX];
      //   store the match method
      let duplicateFound = unique.match(valueIndexX);
      //   conditional to see if the current value at the index matches anything found previously
      if (duplicateFound) {
        // add the substring to the new set
        subString.push(unique);
        i = x;
      }
    }
    refresh.style.display = "block";
    submitBtn.style.display = "none";
    subString.map(function (string) {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(string));
    subList.appendChild(listItem);
    });
  }
}

function refreshPage() {
  let input = document.getElementById("nameInput");
  refresh.style.display = "none";
  input.value = "";
  submitBtn.style.display = "inline-block";
  subList.innerHTML = "";
}

refresh.addEventListener("click", refreshPage);
submitBtn.addEventListener("click", subStrings);
