// elemento donde vamos a incorporar los <li>
const listaDinamica = document.querySelector("#listaDinamica");

// Creamos el <li>
//const li = document.createElement("li");

// // Agregamos texto al <li>
// li.textContent = "item desde javascript";

// // Finalmente incorporamos al <ul>
//listaDinamica.appendChild(li);
//listaDinamica.appendChild(li); // ¿qué pasó aquí?

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment(); // new DocumentFragment()

// arrayElementos.forEach((pais) => {
//     const li = document.createElement("li");
//     li.textContent = pais;
//     listaDinamica.appendChild(li);
// });

// arrayElementos.forEach((pais) => {
//     listaDinamica.innerHTML += `
//     <li>${pais}</li>
//     `;
// });


arrayElementos.forEach((pais) => {
    const newNode = document.createElement("li");
    newNode.textContent = pais;

    // Nos devuelve el primer elemento
    const referenceNode = fragment.firstChild;


    // En caso de que no exista un nodo hijo tirará null
    console.log("primer newNode", referenceNode);

    fragment.insertBefore(newNode, referenceNode);
});

listaDinamica.appendChild(fragment);

























// const inputColor = document.getElementById("inputColor");
// const boton = document.getElementById("boton");
// const textoHexa = document.getElementById("textoHexa");
// const cardColor = document.getElementById("cardColor");

// console.log(inputColor.value);

// boton.addEventListener("click", () => {
//     console.log(inputColor.value);
//     textoHexa.textContent = inputColor.value;
//     cardColor.style.backgroundColor = inputColor.value;
//     navigator.clipboard
//         .writeText(inputColor.value)
//         .then(() => console.log("texto copiado"))
//         .catch((e) => console.log(e));
// });
