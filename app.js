const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

// selecting colors and btn
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

// listnening to the btn click
btn.addEventListener('click', ()=> {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
