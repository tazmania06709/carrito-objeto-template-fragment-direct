const lista = document.querySelector("#lista");

const arrayPaises = ["Perú", "Mexico", "Colombia"];

const fragment = new DocumentFragment();

let template = "";

// arrayPaises.forEach((pais) => {

//     //   <li class="list">
//     //       <b>País: </b> <span class="text-primary">aquí va el país</span>
//     //   </li>

//     const li = document.createElement("li");
//     li.className = "list";
//     const b = document.createElement("b");
//     b.textContent = "País: ";
//     const span = document.createElement("span");
//     span.className = "text-primary";
//     span.textContent = pais;
//     li.appendChild(b);
//     li.appendChild(span);

//     fragment.appendChild(li);
   
    
// });

// lista.appendChild(fragment);

//----------------innerHTML--------------------
arrayPaises.forEach((pais) => {
    // lista.innerHTML += `
    //     <li class="list">
    //         <b>País: </b> <span class="text-primary">${pais}</span>
    //     </li>
    // `;

    template += `
        <li class="list">
            <b>País: </b> <span class="text-primary">${pais}</span>
        </li>
    `;
});
 
lista.innerHTML = template;