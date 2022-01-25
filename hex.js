const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// select color and btn
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// listen to the btn click
btn.addEventListener("click",()=>{
    let hexNumber = "#";
    //generating six random numbers in order to gain hex code
    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexNumber += hex[randomNumber];
    }
    //changing background-color
    document.body.style.backgroundColor = hexNumber;
    
    color.textContent = hexNumber;
})