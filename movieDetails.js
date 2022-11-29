const GetData = JSON.parse(localStorage.getItem("Details"))
    
const container = document.getElementById("Grid");

function Display(Data) {

container.innerHTML = null;

Data.map(function ({Poster,Title,Year}) {
const div = document.createElement("div");

const image = document.createElement("img");
image.src = Poster;
image.id = "Image";
image.style.width = "80%";
image.style.height = "80%";
image.alt = "I am not here";

const h3 = document.createElement("h3");
h3.innerText = `Name:- ${Title}`;

const p3 = document.createElement("p");
p3.innerText = `Year:- ${Year}`;

div.append(image, h3, p3);
container.append(div);
});
}
Display(GetData)

import navbar from './components/navbar.js'

document.getElementById("navbar").innerHTML = navbar()