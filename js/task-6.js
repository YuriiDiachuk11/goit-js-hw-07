function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const inputElement = document.querySelector("#controls input");
console.log(inputElement);
const createButton = document.querySelector("#controls button[data-create]");
console.log(createButton);
const destroyButton = document.querySelector("#controls button[data-destroy]");
console.log(destroyButton);
const boxElements = document.querySelector("#boxes");
console.log(boxElements);

boxElements.style.display = "flex";
boxElements.style.flexWrap = "wrap";
boxElements.style.gap = "20px";

// inputElement.style.border = "1px solid #808080";
// inputElement.style.borderRadius = "8px";
// inputElement.style.width = "150px";
// inputElement.style.height = "40px";
// inputElement.style.padding = "8px 72px";

createButton.style.borderRadius = "8px";
createButton.style.padding = "8px 16px";
createButton.style.width = "120px";
createButton.style.height = "40px";
createButton.style.backgroundColor = "#4e75ff"
createButton.style.color = "#fff";
createButton.style.fontWeight = "500";
createButton.style.fontSize = "16px";
createButton.style.lineHeight = "1.5";
createButton.style.letterSpacing = "0.04em";

destroyButton.style.borderRadius = "8px";
destroyButton.style.padding = "8px 16px";
destroyButton.style.width = "120px";
destroyButton.style.height = "40px";
destroyButton.style.backgroundColor = "#ff4e4e";
destroyButton.style.color = "#fff";
destroyButton.style.fontWeight = "500";
destroyButton.style.fontSize = "16px";
destroyButton.style.lineHeight = "1.5";
destroyButton.style.letterSpacing = "0.04em";


const createBoxes = (amount) => {
  destroyBoxes(); 

  const newArray = [];
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.width = `${30 + i * 10}px`; 
    newElement.style.height = `${30 + i * 10}px`; 
    newElement.style.backgroundColor = getRandomHexColor(); 
    newArray.push(newElement); 
  }

  boxElements.append(...newArray); 
}

const destroyBoxes = () => {
  boxElements.innerHTML = ''; 
}

const handleClick = () => {
  const amount = parseInt(inputElement.value, 10); 

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = ''; 
    alert('Please enter a number between 1 and 100.');
  }
}

createButton.addEventListener("click", handleClick);
destroyButton.addEventListener("click", destroyBoxes);


