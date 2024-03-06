let cardOne = document.getElementById('card');
let cardTwo = document.getElementById('card-two');
let rating = document.getElementById('rate');
let rates = document.querySelectorAll('.num')
function hideShow(){
    cardOne.style.display = 'none';
    cardTwo.style.display = 'flex';
}
rates.forEach((rate) => {
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML
    })
}   )