function displayOption() {
  const close = document.querySelector('.xx');
  const button = document.querySelector('.buton');
  const option = document.querySelector('.optionbtn');
  option.style.display = 'flex';
  button.style.display = 'none';
  close.style.display = 'block';
}
function closeOption() {
  const close = document.querySelector('.xx');
  const button = document.querySelector('.buton');
  const option = document.querySelector('.optionbtn');
  option.style.display = 'none';
  button.style.display = 'flex';
  close.style.display = 'none';
}

function closex() {
  const close = document.querySelector('.xx');
  const button = document.querySelector('.buton');
  const option = document.querySelector('.optionbtn');
  option.style.display = 'none';
  close.style.display = 'none';
  button.style.display = 'flex';
}
function donClose() {
  const close = document.querySelector('.xx');
  const button = document.querySelector('.buton');
  const option = document.querySelector('.optionbtn');
  option.style.display = 'flex';
  close.style.display = 'none';
  button.style.display = 'none';
}
function diplayNone() {
  if (window.innerWidth >= 375) {
    closex();
  }
  if (window.innerWidth >= 768) {
    donClose();
  }
}
diplayNone(MouseEvent);
displayOption();
closeOption();
