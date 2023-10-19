
document.querySelector('.card2').style.display = "none"; 
function hide () {
    document.querySelector('.card1').style.display = "none"; 
    document.querySelector('.card2').style.display = "flex"; 
}

let but = document.querySelector('.submit') 
but.addEventListener('click',hide)