/**
 * Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const holidayDestinations = [
  "Cres, Croatia",
  "Transylvania, Romania",
  "Venice, Italy",
  "Bohinj, Slovenia",
  "Lake Balaton, Hungary",
  "Paris, France",
  "Rome, Italy",
  "London, UK",
];

console.log("1. Remove the last item");
removeLastItem(holidayDestinations);

console.log("2. Add the last item as the first item on the array");
addLastItemToFirst(holidayDestinations);

console.log("3. Sort the items by alphabetical order");
sortAlphabetical(holidayDestinations);

console.log(
  "4. Use the find() method to find a specific item in the array and remove that element"
);
removeElement(
  holidayDestinations,
  findElementByText(holidayDestinations, "Italy")
);

function removeLastItem(testArray) {
  console.log("Length of the built Array: ", testArray.length);

  console.log(
    `Remove the last item. Last item was: ${testArray.pop()}` +
      `\nNew length of the array: ${testArray.length}`
  );
}

function addLastItemToFirst(testArray) {
  let lastItem = testArray.pop();
  testArray.unshift(lastItem);

  console.log("Last item was: ", lastItem);
  console.log(
    "First item should be equal to the old last item: ",
    testArray[0] === lastItem
  );
}

function sortAlphabetical(testArray) {
  console.log("Original order before sorting:\n", testArray.join("\n"));
  console.log(
    "Order after alphabetical sorting:\n",
    testArray.sort().join("\n")
  );
}

function findElementByText(testArray, text) {
  const isTextIncluded = (item) => item.includes(text);
  if (testArray.some(isTextIncluded)) {
    let result = testArray.find(isTextIncluded);
    console.log("First found element: ", result);
    return result;
  }
  console.log("No result for the search criteria.");
}

function removeElement(testArray, element) {
  testArray.splice(testArray.indexOf(element), 1);
  console.log(
    `The array after "${element}" was removed:\n${testArray.join("\n")}`
  );
  console.log(
    `The array should not contain the "${element}": ${!testArray.includes(
      element
    )}`
  );
}
