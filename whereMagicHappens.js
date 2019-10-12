function getRandomRGBColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    // console.log([r,g,b].join(','));
    return [r,g,b].join(',');
}

function getRandomHEXColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setHEXColor(id) {
    idElement = document.querySelectorAll('#whatever div');
    idElement[id].style.backgroundColor = getRandomHEXColor();
}

var containerElement = document.querySelector('#whatever');
var btnElement = document.querySelector('#whatever .btn');

var divId = 0;
btnElement.onclick = function() {
    let divElement = document.createElement('div');
    divElement.setAttribute('id',divId);
    divElement.setAttribute('class','newBtn');
    divElement.setAttribute('onmouseover', 'setHEXColor(id)');
    divElement.style.width = '100px';
    divElement.style.height = '100px';
    divElement.style.backgroundColor = getRandomHEXColor();
    // btnElement.style.backgroundColor = 'rgb('+ getRandomRGBColor() + ')';
    containerElement.appendChild(divElement);
    divId++;
}