let length ; 
let width;
function calculateArea(){
    length =parseFloat(document.getElementById('length').value);
    width =parseFloat(document.getElementById('width').value);
    let area = length * width;
    // we can use The backticks and ${} notation to include variables values in the string ! 
    document.getElementById('result').innerHTML='the area of the provided values is ${area}';
}