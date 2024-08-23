function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
    console.log(button);
const colorSpan = document.querySelector(".color");
    console.log(colorSpan);

const handleClick = () => {
      const randomColor = getRandomHexColor();
 document.body.style.backgroundColor = randomColor;
 colorSpan.textContent = randomColor;
    }

button.addEventListener("click", handleClick)
 

    button.style.borderRadius = "8px";
    button.style.padding = "8px 16px";
    button.style.width = "148px";
    button.style.height = "40px";
    button.style.backgroundColor = "#4e75ff";
    button.style.color = "#fff";
    button.style.fontWeight = "500";
    button.style.fontSize = "16px";
    button.style.lineHeight = "1.5";
    button.style.textAlign = "center";
    button.style.letterSpacing = "0.04em";  

