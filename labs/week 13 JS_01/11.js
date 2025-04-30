function calcArea(length, width) {
    return length * width;
}

function calcVolume(length, width, height) {
    let area = calcArea(length, width); 
    return area * height;
} 

let volume = calcVolume(5, 3, 4);