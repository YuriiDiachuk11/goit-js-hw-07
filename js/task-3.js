const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
    console.log(inputEl);
    console.log(spanEl);

const handleInput = event => {
const input = event.target.value;
const trimmed = input.trim();
    if(trimmed === "") {
        spanEl.textContent = "Anonymous"
    } else {
        spanEl.textContent = trimmed;
    }
}
inputEl.addEventListener("input", handleInput);

inputEl.style.border = "1px solid #808080";
inputEl.style.borderRadius = "4px";
inputEl.style.width = "360px";
inputEl.style.height = "40px";



