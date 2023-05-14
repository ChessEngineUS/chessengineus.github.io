// Define an array of ten different affirmative messages
const affirmations = [
  "You're doing a great job, Mom!",
  "You're an amazing mother!",
  "Your children are lucky to have you!",
  "You're doing an incredible job raising your kids!",
  "You're a wonderful mom!",
  "You're doing everything right!",
  "You're a fantastic mother!",
  "You're doing an awesome job!",
  "You're a super mom!",
  "You're doing an excellent job!",
  "We love you!",
  "You're always caring!",
  "You always listen!",
  "You help us out in the house!",
  "You help us with our homework!",
  "You're a spectacular role model!",
  "Thank you for everything!",
  "You're the best mom ever!",
  "Thank you for all of your meals!",
  "Happy Mother's Day!",
  "You're a great helper towards us!",
  "You teach us how to do many things!",
  "We love that pasta that you make!",
  "Thank you for always getting me out of a jam!",
  "You grow delicious fruits, vegetables, and herbs in the garden!",
  "Thank you for listening to our insanity 24/7/365 with no breaks!",
  "You're the best chef in the whole world!",
  "Lots of love to you mom!",
  "You're always here for us!"
];

// Get the button and affirmation text elements from the HTML
const button = document.getElementById("affirmation-button");
const affirmationText = document.getElementById("affirmation-text");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Generate a random index to select a random affirmation from the array
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  // Set the text of the affirmation text element to the selected affirmation
  affirmationText.textContent = affirmations[randomIndex];
});
