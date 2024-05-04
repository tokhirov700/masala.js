// const strings = ["abb", "abc", "abcde", "abcdb", "aea", "bbb"];
// const strings = ["88", "999", "989", "9988", "9898"];
const strings = ["ABCDE", "DDEB", "BED", "CCA", "BAC"];

function filterUnique(strings) {
  var uniqueStrings = [];
  for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    if (new Set(string).size === string.length) {
      uniqueStrings.push(string);
    }
  }
  return uniqueStrings;
}
const result = filterUnique(strings);
console.log(result);