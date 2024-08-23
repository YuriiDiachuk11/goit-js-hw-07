const categories = document.querySelectorAll("ul#categories li.item");
    console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
const title = category.querySelector("h2").textContent;
const numberOfElements = category.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberOfElements}`);
});


const ulElements = document.querySelectorAll('ul');
    console.log(ulElements);

ulElements.forEach(ul => {
    ul.style.color = "#fff";
    // ul.style.width = "392px";
    // ul.style.height = "266px"
    // ul.style.padding = "16px";
    ul.style.borderRadius = "8px";
    ul.style.backgroundColor = "f6f6fe";
    ul.style.marginBottom = "24px";
})


const headers = document.querySelectorAll("#categories .item h2");
    console.log(headers);

headers.forEach(header => {
    header.style.color = "#2e2f42";
    header.style.fontSize = "24px";
    header.style.fontWeight = "600";  
    header.style.lineHeight = "1.33";
    header.style.letterSpacing = "0.04em";
    header.style.marginBottom = "16px";
  });
  
  const listItems = document.querySelectorAll("li");
    console.log(listItems);
  
  listItems.forEach(listItem => {
    listItem.style.border = "1px solid #808080";
    listItem.style.borderRadius = "4px";
    listItem.style.listStyleType = "none";  
    listItem.style.fontSize = "16px";
    listItem.style.fontWeight = "400";
    listItem.style.lineHeight = "1.5";
    listItem.style.letterSpacing = "0.04em";
    listItem.style.color = "#2e2f42";
    listItem.style.width = "100%";  
    listItem.style.height = "auto";  
  });
  

