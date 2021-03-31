function changeMode (size, weight, transform, background, color) {
  const bodyElement = document.querySelector('body');
  return function () {
    bodyElement.style.fontSize = size;
    bodyElement.style.fontWeight = weight;
    bodyElement.style.textTransform = transform;
    bodyElement.style.backgroundColor = background;
    bodyElement.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = 'Welcome Holberton!';

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  darkModeButton.onclick = darkMode;

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.onclick = screamMode;

  const bodyElement = document.querySelector('body');
  bodyElement.appendChild(paragraphElement);
  bodyElement.appendChild(spookyButton);
  bodyElement.appendChild(darkModeButton);
  bodyElement.appendChild(screamModeButton);
}
main();
