/* Make a grid of divs 16 by 16 so 256 squares in all, create them with js
* create big div with flex and column
* create 16 child divs of big div with flex and row
* for each mid div create 16 rows of normal divs
*/
const DEFAULT_SIZE = 50;
const bod = document.querySelector(".bod");
const bigDiv = document.createElement("div");
bigDiv.classList.add("bigDiv");

const slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min", 1);
slider.setAttribute("max", 100);
slider.setAttribute("step", 1);
slider.setAttribute("value", 50);

slider.addEventListener("input", function(e) {
    resetGrid();
    buildGrid(parseInt(e.target.value));     
});


function resetGrid() {
    while (bigDiv.lastElementChild) {
        bigDiv.removeChild(bigDiv.lastElementChild);
    }
}

function buildGrid(currentSize) {
    let mousePressed = false;
    for (let i = 0; i < currentSize; i++) {
        const midDiv = document.createElement("div");
        midDiv.classList.add("midDiv");
        for (let i = 0; i < currentSize; i++) {
            const lastDiv = document.createElement("div");
            lastDiv.classList.add("lastDiv");
            lastDiv.setAttribute("style", `height: ${512 / currentSize}px; width: ${512 / currentSize}px; background-color: white;`);
            lastDiv.addEventListener("mousedown", function () {
                mousePressed = true;
            });
            lastDiv.addEventListener("mouseup", function () {
                mousePressed = false;
            });
            lastDiv.addEventListener("mouseover", draw);
            midDiv.appendChild(lastDiv);
        }
        bigDiv.appendChild(midDiv);
    }

    function draw(e) {
        if (mousePressed == true) {
        e.target.style.backgroundColor = "black";
        }
    }
}

bod.appendChild(bigDiv);
bod.appendChild(slider);


window.onload = () => {
    buildGrid(DEFAULT_SIZE);
}


































/* This is for making it only work when the mouse is held down
    let mousePressed = false;
    let square = parseInt(slider.value);
    slider.addEventListener("input", function(e) {
        square = parseInt(e.target.value);
    for (let i = 0; i < square; i++) {
        const midDiv = document.createElement("div");
        midDiv.classList.add("midDiv");
        for (let i = 0; i < square; i++) {
            const lastDiv = document.createElement("div");
            lastDiv.classList.add("lastDiv");
            lastDiv.setAttribute("style", `height: ${512 / square}px; width: ${512 / square}px; background-color: white;`);
            lastDiv.addEventListener("mousedown", function () {
                mousePressed = true;
            });
            lastDiv.addEventListener("mouseup", function () {
                mousePressed = false;
            });
            lastDiv.addEventListener("mouseover", draw);
            midDiv.appendChild(lastDiv);
        }
        bigDiv.appendChild(midDiv);
    }



    function draw(e) {
        if (mousePressed == true) {
        e.target.style.backgroundColor = "black";
        }
    }});

bod.appendChild(bigDiv);
bod.appendChild(slider);*/