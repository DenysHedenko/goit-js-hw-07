function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const btn = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click', (e) => {
  const generateColor = getRandomHexColor();
  body.style.backgroundColor = generateColor;
  spanText.textContent = generateColor;
})