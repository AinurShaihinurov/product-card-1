const productCards = document.querySelectorAll('.product-card', );
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ffc8';
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)


function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}


const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}


const title = document.querySelector('.products__title');

title.addEventListener('mouseenter', () =>{
  console.log(
    title.textContent);
});


const toggleButton = document.querySelector('#toggle-btn');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});