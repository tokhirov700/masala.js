const image = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 0, 1]
];


function reverseImage(image) {
  const reversedImage = JSON.parse(JSON.stringify(image));
  for (let i = 0; i < reversedImage.length; i++) {
    for (let j = 0; j < reversedImage[i].length; j++) {
      reversedImage[i][j] = reversedImage[i][j] === 0 ? 1 : 0;
    }
  }

  return reversedImage;
}

const reversedImage = reverseImage(image);
console.log(reversedImage);