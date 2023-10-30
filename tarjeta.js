const button = document.querySelector('button');

button.addEventListener('click', () => {
  const numero = document.querySelector('#numero').value;
  const nombre = document.querySelector('#nombre').value;
  const fecha = document.querySelector('#fecha').value;
  const fechaFormateada = new Date(fecha).toLocaleDateString('es', {
    year: 'numeric',
    month: '2-digit',
  });

  document.querySelector('.numero').innerHTML = numero;
  document.querySelector('.nombre').innerHTML = nombre;
  document.querySelector('.fecha').innerHTML = fechaFormateada;
})
