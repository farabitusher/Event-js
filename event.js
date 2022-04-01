document.getElementById('redbtn').addEventListener('click', function () {
    document.body.style.backgroundColor='red'
})
document.getElementById('bluebtn').addEventListener('click', function () {
    document.body.style.backgroundColor='blue'
})
document.getElementById('greenbtn').addEventListener('click', function () {
    document.body.style.backgroundColor='green'
})
document.getElementById('yellowbtn').addEventListener('click', function () {
    document.body.style.backgroundColor='yellow'
})
// finding the input value by using javascript
const input = document.getElementById('inputText');
const p = document.getElementById('paragrap');


const update = document.getElementById('updateBtn').addEventListener('click', function () {
    p.innerText = input.value;
    input.value= ""
})