/*function signature/sample */
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  // contain lastIndex Of Name and make lowercase them,and last word of good name
  const lastIdxOfName = name[name.length - 1];
  const lowerCaseOfNameLastIndex = lastIdxOfName.toLowerCase();
  const goodNameLastWord = ["a", "y", "i", "e", "o", "u", "w"];
  //   run a loop over the good name last word and check if good name last word includes in last index of name
  for (const word of goodNameLastWord) {
    if (lowerCaseOfNameLastIndex === word) {
      return "Good Name";
    }
  }
  return "bad name";
}
