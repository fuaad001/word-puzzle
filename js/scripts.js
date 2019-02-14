var play = confirm("Do you want to play?");

if(play === true){
	var words = ["ostentatious", "animal", "agrandizing", "repungent", "celfless", "crimininal"];

  var word = words[Math.floor(Math.random() * words.length)];

	var answerArray = [];

	for(var index = 0; index < word.length; index++){
		answerArray.push("_");
	}
	alert(answerArray.join(" "));

	var trial = 3;
	var remaining = word.length;

	while(remaining > 0 && trial > 0){
  	var gues = prompt("Enter a single letter to form a word:");
    if(gues.length == 1){
    	for(var n = 0; n < word.length; n++ ){
      	if(word[n] === gues){
        	answerArray[n] = gues;
          remaining--;
          alert(answerArray.join(" "));
        }
      }
    }
    else{
    alert("Thank you for playing, the correct word was " + word)
    exit();
    }
  }
  alert("Good job! The answer was " + word);
}
