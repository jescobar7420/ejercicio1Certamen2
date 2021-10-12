define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* import jquery = require('jquery');
    const $:JQueryStatic=jquery; */
    var ListaClientes = Array();
    ListaClientes = [
        {
            "id": 1,
            "nombre": "Pepita",
            "apellido": "Cruz",
            "pais": "Chile",
            "region": "Valparaíso",
            "genero": "Mujer",
        }, {
            "id": 2,
            "nombre": "Juan",
            "apellido": "Totto",
            "pais": "Chile",
            "region": "Metropolitana",
            "genero": "Hombre",
        }, {
            "id": 3,
            "nombre": "Pedro",
            "apellido": "Tijuana",
            "pais": "Chile",
            "region": "Metropolitana",
            "genero": "Hombre",
        }, {
            "id": 4,
            "nombre": "Juana",
            "apellido": "de Arco",
            "pais": "Chile",
            "region": "Valparaíso",
            "genero": "Mujer",
        }
    ];
    function mostrarClientes() {
        var i;
        var LClientes = document.getElementById("clientes");
        for (i = 0; i < ListaClientes.length; i++) {
            //Crear columna
            var div1 = document.createElement("div");
            div1.setAttribute("class", "col");
            LClientes.appendChild(div1);
            //Crear el div clase card
            var div2 = document.createElement("div");
            div2.setAttribute("class", "card");
            div2.setAttribute("style", "width: 18rem;");
            div1.appendChild(div2);
            //Crear el body de la card
            var div3 = document.createElement("div");
            div3.setAttribute("class", "card-body");
            div2.appendChild(div3);
            //Crear el titulo de la card
            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            div3.appendChild(h5).textContent = ListaClientes[i].nombre + " " + ListaClientes[i].apellido;
            //Crear el subtitulo de la card
            var h6 = document.createElement("h5");
            h6.setAttribute("class", "card-subtitle mb-2 text-muted");
            div3.appendChild(h6).textContent = ListaClientes[i].pais + ", " + ListaClientes[i].region;
        }
    }
    function mostrarLista() {
        var i;
        var LClientes = document.getElementById("lista");
        for (i = 0; i < ListaClientes.length; i++) {
            //Crear un "ul"
            var ul = document.createElement("ul");
            ul.setAttribute("class", "list-group list-group-horizontal");
            LClientes.appendChild(ul);
            //Primer "li" = Nombre completo
            var li1 = document.createElement("li");
            li1.setAttribute("class", "list-group-item");
            ul.appendChild(li1).textContent = ListaClientes[i].nombre + " " + ListaClientes[i].apellido;
            //Segundo "li" = Genero
            var li2 = document.createElement("li");
            li2.setAttribute("class", "list-group-item");
            ul.appendChild(li2).textContent = "" + ListaClientes[i].genero;
            //Tercero "li" = País
            var li3 = document.createElement("li");
            li3.setAttribute("class", "list-group-item");
            ul.appendChild(li3).textContent = "" + ListaClientes[i].pais;
            //Cuarto "li" = Región
            var li4 = document.createElement("li");
            li4.setAttribute("class", "list-group-item");
            ul.appendChild(li4).textContent = "" + ListaClientes[i].region;
        }
    }
    window.addEventListener("load", mostrarClientes);
    window.addEventListener("load", mostrarLista);
});
