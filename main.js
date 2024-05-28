//Create js for recognising audio and convert it to text
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var final = []

function start(){
    document.getElementById("fixed").innerHTML = "Do you want to start using AI :) Well if you didn't, too bad, it's starting."
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    final.push(content)
    document.getElementById("fixeded").innerHTML = "You want so say... "+"<br>"+ final

}
