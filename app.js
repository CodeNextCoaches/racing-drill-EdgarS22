//Constants for the 'a' and 'enter' keys
const A_KEY = 97;
const ENTER = 13;

//TODO: Declare 2 more variables named bottomImage and titleText
//use the document.querySelector() function to assign them appropriately
let topImage = document.querySelector('#top-img');

//Player images will start on the left edge of the screen
//'element.style.left' will give you the left position in this case, and allow you
//to reassign that left position as well
topImage.style.left = '0%';
bottomImage.style.left = '0%';

//TODO: Write two functions named "topPlayerWins()" and "bottomPlayerWins()". They
//should change the title text to "Top Player Wins!" and "Bottom Player Wins!"
//respectively






//TODO: Finish this keypress event listener. It should move the top player image by 5%
//when the 'a' button is pressed, and it should move the bottom player image by 5%
//if the 'enter' key is pressed. Also, it should check for a win and call the
//appropriate function
document.addEventListener('keypress', function(event) {
  //parseInt returns an integer value from the percentage string
  //e.g. parseInt('5%') --> 5. When we reassign the left position, we will need
  //to add the '%' sign back
  let topImageLeft = parseInt(topImage.style.left);
  let bottomImageLeft = parseInt(bottomImage.style.left);





});
