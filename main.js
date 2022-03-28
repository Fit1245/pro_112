Prediction_1 = "";
Prediction_2 = "";
Prediction_3 = "";

Webcam.set({
    width : 350,
    height : 300,
    img_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id = "captured_image" src = "'+data_uri+'"/>';
});
}
console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5Jar2Xsi9/model.json",modelLoaded);

function modelLoaded() {
console.log("modelLoaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "first prediction is:"+Prediction_1+"second prediction is:"+Prediction_2+"and third prediction is;"+Prediction_3;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}

function check() {
    img  = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
console.error(error);
    
}
else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name1").innerHTML = results[1].label;
    document.getElementById("result_emotion_name2").innerHTML = results[2].label;
    
    Prediction_1 = results[0].label;
    Prediction_2 = results[1].label;
    Prediction_3 = results[2].label;
    speak();
    if (results[0].label == "best"){
        document.getElementById("Update_image").innerHTML = "&#128077;";
    }
    if (results[0].label == "victory"){
        document.getElementById("Update_image").innerHTML = "&#9996;";
    }
    if (results[0].label == "amazing"){
        document.getElementById("Update_image").innerHTML = "&#128076;";
    }
    if (results[1].label == "best"){
        document.getElementById("Update_image1").innerHTML = "&#128077;";
    }
    if (results[1].label == "victory"){
        document.getElementById("Update_image1").innerHTML = "&#9996;";
    }
    if (results[1].label == "amazing"){
        document.getElementById("Update_image1").innerHTML = "&#128076;";
    }
    if (results[2].label == "best"){
        document.getElementById("Update_image2").innerHTML = "&#128077;";
    }
    if (results[2].label == "victory"){
        document.getElementById("Update_image2").innerHTML = "&#9996;";
    }
    if (results[2].label == "amazing"){
        document.getElementById("Update_image2").innerHTML = "&#128076;";
    }
}}
