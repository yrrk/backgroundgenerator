var cssstyle=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("body")




color1.addEventListener("input",colorpicker);
color2.addEventListener("input",colorpicker)

function colorpicker() {
	body.style.background="linear-gradient(to right, " +color1.value+" , " +color2.value+")";
}

