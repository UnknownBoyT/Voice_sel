var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcipt;
    console.log(content);
      document.getElementById("textbox").innerHTML = content;
      console.log(content);
      speak();
} 
function speak() {
    var synth = window.speechSynthesis;
    speakData =  document.getElementById("textbox").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
   Webcam.attach(camera); 
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:png,
    png_quality:95
});