const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ["437742","#15658D","#D67FFC","#3b5968"];

colorBtn.addEventListener('click',changeColor);
function changeColor() {
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}

