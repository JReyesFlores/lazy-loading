const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const functionIntersection = (entries, observer) => {
  entries.filter(isIntersecting).forEach((entry) => {
    const container = entry.target;
    //console.log(container);
    const imagen = container.querySelector('img');
    console.log(imagen);
    const url = imagen.dataset.src;
    imagen.src = url;

    loadedImages++;
    printLog();

    console.log('Unregister web API');
    observer.unobserve(container);
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

// Declaramos la web API de IntersectionObserver
const observer = new IntersectionObserver(functionIntersection, options);

export const registerImage = (Image) => {
  // Registra la webAPI de IntersectionObserver
  console.log('Register web API');
  observer.observe(Image);
};
