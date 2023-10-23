function newbieShow () {
    document.querySelector(".newbie").style.display = "flex";
}

document.querySelector(".newbie").style.display = "none";


const newbie = document.querySelector('#newbie-btn')
newbie.addEventListener('click',newbieShow)