const upvotesString = "10 5k 3.2k 500 100k 1k";
function transformUpvotes(upvotesString) {
  const upvotesArray = [];
  const upvotesList = upvotesString.split(" ");

  for (let i = 0; i < upvotesList.length; i++) {
    const upvote = upvotesList[i];
    if (upvote.endsWith("k")) {
      upvotesArray.push(parseInt(upvote.slice(0, -1)) * 1000);
    } else {
      upvotesArray.push(parseInt(upvote));
    }
  }

  return upvotesArray;
}
const result = transformUpvotes(upvotesString);
console.log(result);