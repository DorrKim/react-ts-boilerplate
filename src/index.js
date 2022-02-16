import './style.css';
import image from '../assets/profile.jpg';

function App() {
  const divEl = document.createElement('div');
  divEl.innerHTML = '도르도 코딩';
  divEl.classList.add('hello');

  const myImage = new Image();
  myImage.src = image;

  divEl.appendChild(myImage);

  return divEl;
}

document.body.appendChild(App());
