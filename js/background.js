/* Fetch API */

window.addEventListener('load', loadImg);

const UNSPLASH_API = 'SEhkXwPPqBzUi5jwfi7T_zyQX0xkavE80DvZ7pAsVEg';

function loadImg() {
  const url = `https://api.unsplash.com/photos/random?query=lake&orientation=landscape&client_id=${UNSPLASH_API}`;
  const imageDiv = document.querySelector('body');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const image = new Image();
      image.style = `background-image: url(${data.urls.full})`;
      image.classList.add('bgImage');
      imageDiv.appendChild(image);
    })
    .catch((error) => console.error('Error:', error));
}
