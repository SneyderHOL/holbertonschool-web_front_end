function createElement (data) {
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = data;
  const bodyElement = document.querySelector('body');
  bodyElement.appendChild(paragraphElement);
}
function queryWikipedia (callback) {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  const method = 'GET';
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = () => callback(xhr.response.query.pages['21721040'].extract);
  xhr.open(method, url);
  xhr.send();
}
queryWikipedia(createElement);
