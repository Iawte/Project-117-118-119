function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
    background("white")
    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis;
}


function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}



function draw() {
    strokeWeight(12)
    stroke(0)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}


function clearCanvas() {
    console.log("Ishaan")
    background("white")
}


function classifyCanvas() {
    console.log("Nick")
    classifier.classify(canvas, gotResult)
}



function gotResult(error, results) {
    console.log("Awte")
    if (error) {
        console.error(Error)
    }
    else {
        console.log(results)
        console.log(results[0])
        console.log(results[0].label)
        console.log(results[0].confidence)
        document.getElementById("slabel").innerHTML=results[0].label;
        document.getElementById("confidence").innerHTML= Math.round(results[0].confidence*100)+"%";
        utterthis=new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterthis)
    }

}