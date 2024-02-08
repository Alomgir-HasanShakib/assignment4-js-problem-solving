function password(obj) {
  // this three line for accessing objects property to find the value
  const name = obj.name;
  const birthYear = obj.birthYear;
  const websiteName = obj.siteName;

  //   this two string for check birth year length

  const ConvertbirthToString = birthYear.toString();
  const birthLength = ConvertbirthToString.length;

  //   in this if conditon check  all the value is presented and birthyear length

  if (
    typeof name === "undefined" ||
    typeof birthYear === "undefined" ||
    typeof websiteName === "undefined" ||
    birthLength < 4
  ) {
    return "invalid";
  }

  //   in those variable try to convert toUpperCase to the first letter of  website name

  const capitalizeFirstLetterOfSiteName = websiteName[0].toUpperCase();
  const removeFistLetterOfWebsite = websiteName.slice(1);
  const addCapitalNameAndRomovedName =
    capitalizeFirstLetterOfSiteName + removeFistLetterOfWebsite;
  const afterWebName = addCapitalNameAndRomovedName;

  const password = afterWebName + "#" + name + "@" + birthYear;
  return password;
}
