function deleteInvalids(array) {
  // check if user input is an array or not

  if (!Array.isArray(array)) {
    return " Please inter an array";
  }
  //   remove all the value and contain only numbers type of value

  const newArray = [];
  for (const item of array) {
    if (item) {
      if (typeof item === "number") {
        newArray.push(item);
      }
    }
  }

  return newArray;
}
