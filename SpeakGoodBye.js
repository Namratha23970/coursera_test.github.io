// STEP 7: Create the 'byeSpeaker' object
var byeSpeaker = {};

// STEP 8: Attach the "speak" method to the 'byeSpeaker' object
byeSpeaker.speak = function (name) {
  var speakWord = "Good Bye";
  console.log(speakWord + " " + name);
};

// STEP 9: Expose the 'byeSpeaker' object to the global scope
window.byeSpeaker = byeSpeaker;
