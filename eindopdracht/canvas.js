class App{

runApplication(){
    let canvas = document.getElementById("canvas");
    let g = canvas.getContext("2d");
    canvas.style.background = "pink";

    g.fillStyle = "red";
    g.beginPath();
    g.moveTo(20, 220);
    g.lineTo(0, 240);
    g.lineTo(0, 270);
    g.lineTo(40, 270);
    g.lineTo(40, 240);
    g.closePath();
    g.stroke();
    g.fill();
    g.beginPath();
    g.moveTo(120, 220);
    g.lineTo(100, 240);
    g.lineTo(100, 270);
    g.lineTo(140, 270);
    g.lineTo(140, 240);
    g.closePath();
    g.stroke();
    g.fill();
    g.beginPath();
    g.moveTo(220, 220);
    g.lineTo(200, 240);
    g.lineTo(200, 270);
    g.lineTo(240, 270);
    g.lineTo(240, 240);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.moveTo(320, 220);
    g.lineTo(300, 240);
    g.lineTo(300, 270);
    g.lineTo(340, 270);
    g.lineTo(340, 240,);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "grey";
    g.beginPath();
    g.rect(0, 330, 1700, 32)
    g.closePath();
    g.fill();
    
    g.fillStyle = "black";
    g.beginPath();
    g.rect(0, 300, 1700, 32)
    g.closePath();
    g.fill();

    g.fillStyle = "grey";
    g.beginPath();
    g.rect(0, 270, 1700, 32)
    g.closePath();
    g.fill();

    g.fillStyle = "white";
    g.beginPath();
    g.rect(0, 315, 1700, 2)
    g.closePath();
    g.fill();

    g.fillStyle = "black";
    g.beginPath();
    g.arc(500, 115, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.beginPath();
    g.arc(500, 175, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.beginPath();
    g.arc(500, 235, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();
    
    g.fillStyle = "red";
    g.beginPath();
    g.arc(515, 109, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.beginPath();
    g.arc(485, 109, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "yellow"
    g.beginPath();
    g.arc(500, 123, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();


    g.fillStyle = "red";
    g.font = "30px Arial";
    g.fillText("Merry christmas mf", 120, 450);

    g.fillStyle = "white"
    g.beginPath();
    g.arc(500, 163, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "white"
    g.beginPath();
    g.arc(500, 186, 5, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(750, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "darkgreen";
    g.beginPath();
    g.moveTo(765, 0);
    g.lineTo(700, 220);
    g.lineTo(850, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(250, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "darkgreen";
    g.beginPath();
    g.moveTo(270, 0);
    g.lineTo(150, 220);
    g.lineTo(375, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(1200, 220, 40, 50);
    g.closePath();
    g.fill();

    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(1220, 0);
    g.lineTo(1150, 220);
    g.lineTo(1290, 220);
    g.closePath();
    g.fill();

    g.fillStyle = "brown";
    g.beginPath();
    g.rect(600, 120, 40, 150);
    g.closePath();
    g.fill();

    g.fillStyle = "yellow";
    g.beginPath();
    g.arc(620, 90, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();
    
    g.fillStyle = "brown";
    g.beginPath();
    g.rect(400, 120, 40, 150);
    g.closePath();
    g.fill();

    g.fillStyle = "yellow";
    g.beginPath();
    g.arc(420, 90, 35, 0, 2 * Math.PI);
    g.fill();
    g.stroke();

}



}

let app = new App();
app.runApplication();