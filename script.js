const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-button');
const wallpaper = document.querySelector('.wallpaper');
var myPic = new Array("img/wallpaper.jpg", "img/wallpaper2.jpg", "img/wallpaper3.jpg");

const handleFocus = ({target}) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
  if(target.value == ''){
      const span = target.previousElementSibling;
      span.classList.remove('span-active');
  }
  
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

function chooseWallpaper() {
  var randomNum = Math.floor(Math.random() * myPic.length);
  wallpaper.style.backgroundImage = "url(" + myPic[randomNum] + ")";;
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

window.onload = chooseWallpaper;

