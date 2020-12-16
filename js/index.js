import colors from "./colors.js";

let currColor = colors[0];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('.color-ctrl');

startBtnRef.addEventListener('click', (event) => {
console.log(event.target.dataset.action);
})


const startColorSwitching = () => {

}



