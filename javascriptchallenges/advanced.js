console.log("Advanced Challenges");

// Question 1 - given a number rating, return * and . (for half ratings)
const showRating = (rating) => {
  let newRating = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    newRating += "*"
    if (i !== Math.floor(rating)-1) {
      newRating += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    newRating =+ " .";
  }
  return newRating;
}
console.log(showRating(4.5));