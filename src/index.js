import { registerImage } from './lazy';

const images = document.querySelector('#images');
const mountNode = document.getElementById('images');
const addButton = document.querySelector('button');
const cleanButton = document.querySelector('#clean');
const [min, max] = [1, 122];

const random = () => Math.floor(Math.random() * (max - min));

const createImageNodes = () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const foxImage = document.createElement('img');
  foxImage.className = 'mx-auto';
  foxImage.width = 320;
  //Asignación de la propiedad [dataset].src (Aquí mantendremos nuestra ruta de imagen)
  foxImage.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  const wrapper = document.createElement('div');
  wrapper.className = 'bg-gray-300';
  wrapper.style.minHeight = '100px';
  wrapper.style.display = 'inline-block';
  wrapper.appendChild(foxImage);

  container.appendChild(wrapper);

  appendedImages++;
  printLog();
  return container;
};

//Autoinvocación => (function(){...})();
const validatingIntersectionObserver = (() => {
  if ('IntersectionObserver' in window) {
    console.log('El navegador soporta IntersectionObserver');
  } else {
    console.log('El navegador no soporta IntersectionObserver');
  }
})();

const addImage = () => {
  const newImage = createImageNodes();
  images.append(newImage);
  registerImage(newImage);
};

addButton.addEventListener('click', addImage);

const cleanImages = () => {
  console.log(mountNode.childNodes);

  [...mountNode.childNodes].forEach((child) => {
    child.remove();
  });
};

cleanButton.addEventListener('click', cleanImages);

/**
 * Implementaciones pendientes (RETO PLATZI)
 * 1. Agregar un recuadro gris antes de las imagenes
 * 2. Agregar un boton para limpiar las imagenes
 * 3. Reporte en la consolo de imagenes cargadas e imagenes agregadas
 */
