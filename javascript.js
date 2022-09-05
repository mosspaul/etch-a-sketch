/* Make a grid of divs 16 by 16 so 256 squares in all, create them with js
* create big div with flex and column
* create 16 child divs of big div with flex and row
* for each mid div create 16 rows of normal divs
*/
const body = document.querySelector("body");
const bigDiv = document.createElement("div");
bigDiv.classList.add("bigDiv");


for (let i = 0; i < 16; i++) {
    const midDiv = document.createElement("div");
    midDiv.classList.add("midDiv");
    for (let i = 0; i < 16; i++) {
        const lastDiv = document.createElement("div");
        lastDiv.classList.add("lastDiv");
        lastDiv.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black"
        });
        midDiv.appendChild(lastDiv);
    }
    bigDiv.appendChild(midDiv);
}
body.appendChild(bigDiv);


