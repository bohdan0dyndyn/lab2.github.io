(function(window){
  let speakGB={};
  speakGB.speakWord = "Good Bye";

  speakGB.speak = function(name) {
    console.log(speakGB.speakWord + " " + name);
  }

  window.speakGB=speakGB;
})(window);


