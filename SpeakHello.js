(function(window){
  let speakH ={};
  speakH.speakWord = "Hello";

  speakH.speak = function (name) {
    console.log(speakH.speakWord + " " + name);
  }
  window.speakH=speakH;
})(window);


