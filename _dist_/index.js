import { registerImage } from './lazy.js';

const images = document.querySelector('#images');
const addButton = document.querySelector('button');
const [min, max] = [1, 122];

const random = () => Math.floor(Math.random() * (max - min));

const createImageNodes = () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const foxImage = document.createElement('img');
  foxImage.className = 'mx-auto';
  foxImage.width = 320;
  // foxImage.src = `https://randomfox.ca/images/${random()}.jpg`;
  foxImage.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(foxImage);

  return container;
};

const addImage = () => {
  const newImage = createImageNodes();
  images.append(newImage);
  registerImage(newImage);
};

//const nuevaImagen = createImageNodes();
//images.appendChild(nuevaImagen);
//images.append(nuevaImagen);

addButton.addEventListener('click', addImage);

/**
 * Implementaciones pendientes (RETO PLATZI)
 * 1. Agregar un recuadro gris antes de las imagens
 * 2. Agregar un boton para limpiar las imagenes
 * 3. Reporte en la consolo de imagenes cargadas e imagenes agregadas
 */