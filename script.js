var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("body");
var button = document.getElementById("rndButton");

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

css.textContent = "linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

button.addEventListener("click", setColor);

function randomGenerator() {
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };
    return random_hex_color_code();
}

function setColor() {
    var c1 = randomGenerator();
    var c2 = randomGenerator();
    body.style.background = 
    "linear-gradient(to right, " 
    + c1 
    + ", " 
    + c2 
    + ")";
    css.textContent = body.style.background + ";";
}