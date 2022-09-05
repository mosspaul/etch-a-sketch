/* Make a grid of divs 16 by 16 so 256 squares in all, create them with js
* create big div with flex and column
* create 16 child divs of big div with flex and row
* for each mid div create 16 rows of normal divs
*/
const bod = document.querySelector(".bod");
const bigDiv = document.createElement("div");
bigDiv.classList.add("bigDiv");
// This is for making it only work when the mouse is held down
let mousePressed = false;

for (let i = 0; i < 16; i++) {
    const midDiv = document.createElement("div");
    midDiv.classList.add("midDiv");
    for (let i = 0; i < 16; i++) {
        const lastDiv = document.createElement("div");
        lastDiv.classList.add("lastDiv");
        lastDiv.addEventListener("mousedown", function () {
            mousePressed = true;
        });
        lastDiv.addEventListener("mouseover", draw);
        midDiv.appendChild(lastDiv);
    }
    bigDiv.appendChild(midDiv);
}
bod.appendChild(bigDiv);

function draw(e) {
    if (mousePressed == true) {
    e.target.style.backgroundColor = "black";
    }
}
