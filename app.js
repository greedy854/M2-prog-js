let newstitle = document.getElementById("newstitle");

let randomgetal = Math.random();
console.log(randomgetal);
if (randomgetal < 0.5) {
    newstitle.style.backgroundColor = "yellow";
} else {
    newstitle.style.backgroundColor = "green";
}