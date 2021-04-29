var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();}

recognition.onresult= function run(event){
console.log(event);
content = event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML= content;

if (content == "take my selfie"){
    speak();
console.log("taking selfie-----");}

}

function speak(){
var synth = window.speechSynthesis;
var speech_data = "Taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speech_data);
synth.speak(utterThis);
Webcam.attach(cam);
setTimeout(function(){
take_pic();
save();
},5000);}

Webcam.set({
width: 360,
height: 360,
image_format: 'png',
png_quality: 90
});

cam = document.getElementById("camera");

function take_pic(){
Webcam.snap(
function(data_uri){
document.getElementById("output").innerHTML = '<img id="selfie_img"src="'+data_uri+'">';});
}

function save(){
link = document.getElementById("link");
image = document.getElementById("selfie_img").src;
link.href= image;
link.click();}

