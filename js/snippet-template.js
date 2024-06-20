const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector('#liTemplate');

const arrayPaises = ['Peru', 'Colombia', 'Chile', 'Brasil'];

const clickPaises = (e) => {
    console.log('me diste click', e.target); // e sirve para recoger la informacion del evento click donde se encuentra
};

arrayPaises.forEach(pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;
  
    clone.addEventListener('click', clickPaises);
    
    fragment.appendChild(clone); // se crea el fragment fuera del DOM
});

lista.appendChild(fragment);  //Aki se agrega al DOM

// const clone = liTemplate.content.cloneNode(true); 

// clone.querySelector('.text-primary').textContent = 'agregue a traves de un template'; 

// // console.log(clone);

// lista.appendChild(clone);


  