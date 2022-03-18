const isIntersecting = (entry) => {
  //se pueden validar cosas adicionales
  return entry.isIntersecting;
};

const accion = (entry) => {
  const container = entry.target;
  const imagen = container.querySelector('img');
  const url = imagen.dataset.src;
  imagen.src = url; 

  // des registra la imagen
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (Image) => {
  // Registra la webAPI de IntersectionObserver
  observer.observe(Image);
};
