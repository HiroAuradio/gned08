const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exutBtn = document.querySelector(".exit-btn");

startBtn.onclick = () => {
  popupInfo.classList.add('active');
}
exutBtn.onclick = () => {
  popupInfo.classList.remove('active');
}

