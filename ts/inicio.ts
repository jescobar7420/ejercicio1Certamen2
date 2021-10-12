import {Clientes} from './clientes'
/* import jquery = require('jquery');
const $:JQueryStatic=jquery; */

let ListaClientes = Array<Clientes>();

ListaClientes=[
    {
    "id":1,
    "nombre":"Pepita",
    "apellido":"Cruz",
    "pais":"Chile",
    "region":"Valparaíso",
    "genero":"Mujer",
    },{
    "id":2,
    "nombre":"Juan",
    "apellido":"Totto",
    "pais":"Chile",
    "region":"Metropolitana",
    "genero":"Hombre",
    },{
    "id":3,
    "nombre":"Pedro",
    "apellido":"Tijuana",
    "pais":"Chile",
    "region":"Metropolitana",
    "genero":"Hombre",
    },{
    "id":4,
    "nombre":"Juana",
    "apellido":"de Arco",
    "pais":"Chile",
    "region":"Valparaíso",
    "genero":"Mujer",
    }
];

function mostrarClientes() {
    let i:number;
    let LClientes:any = document.getElementById("clientes");
    for(i=0; i<ListaClientes.length; i++) {
        //Crear columna
        let div1:any = document.createElement("div");
        div1.setAttribute("class", "col");
        LClientes.appendChild(div1);
        
        //Crear el div clase card
        let div2:any = document.createElement("div");
        div2.setAttribute("class", "card");
        div2.setAttribute("style", "width: 18rem;");
        div1.appendChild(div2);
        
        //Crear el body de la card
        let div3:any = document.createElement("div");
        div3.setAttribute("class", "card-body");
        div2.appendChild(div3);
        
        //Crear el titulo de la card
        let h5:any = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        div3.appendChild(h5).textContent = `${ListaClientes[i].nombre} ${ListaClientes[i].apellido}`;
        
        //Crear el subtitulo de la card
        let h6:any = document.createElement("h5");
        h6.setAttribute("class", "card-subtitle mb-2 text-muted");
        div3.appendChild(h6).textContent = `${ListaClientes[i].pais}, ${ListaClientes[i].region}`;
    }
}

function mostrarLista() {
    let i:number;
    let LClientes:any = document.getElementById("lista");
    for(i=0; i<ListaClientes.length; i++) {
        //Crear un "ul"
        let ul:any = document.createElement("ul");
        ul.setAttribute("class", "list-group list-group-horizontal");
        LClientes.appendChild(ul);
        
        //Primer "li" = Nombre completo
        let li1:any = document.createElement("li");
        li1.setAttribute("class", "list-group-item");
        ul.appendChild(li1).textContent = `${ListaClientes[i].nombre} ${ListaClientes[i].apellido}`;
        
        //Segundo "li" = Genero
        let li2:any = document.createElement("li");
        li2.setAttribute("class", "list-group-item");
        ul.appendChild(li2).textContent = `${ListaClientes[i].genero}`;
        
        //Tercero "li" = País
        let li3:any = document.createElement("li");
        li3.setAttribute("class", "list-group-item");
        ul.appendChild(li3).textContent = `${ListaClientes[i].pais}`;
        
        //Cuarto "li" = Región
        let li4:any = document.createElement("li");
        li4.setAttribute("class", "list-group-item");
        ul.appendChild(li4).textContent = `${ListaClientes[i].region}`;
    }
}
window.addEventListener("load", mostrarClientes);
window.addEventListener("load", mostrarLista);