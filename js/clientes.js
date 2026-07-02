(function () {
    const clientes = [
        {
            img: "imgs/clientes/bdp.jpeg",
            categoria: "Banco",
            titulo: "Banco de Desarrollo Productivo",
            descripcion: "Institución financiera mixta."
        },
        {
            img: "imgs/clientes/bcp.jpeg",
            categoria: "Banco",
            titulo: "Banco Central de Bolivia",
            descripcion: "Es la máxima institución económica y financiera del país."
        },
        {
            img: "imgs/clientes/cat.jpeg",
            categoria: "Distribuidor Caterpillar",
            titulo: "Finning Cat",
            descripcion: "Es el distribuidor oficial más grande del mundo de productos Caterpillar."
        },
        {
            img: "imgs/clientes/catolica.jpeg",
            categoria: "Universidad",
            titulo: "Universidad Catolica Boliviana",
            descripcion: "Destacada universidad privada boliviana."
        },
        {
            img: "imgs/clientes/cns.jpeg",
            categoria: "Institucion de Salud",
            titulo: "Caja Nacional de Salud",
            descripcion: "Institución pública descentralizada encargada de administrar el seguro de salud."
        },
        {
            img: "imgs/clientes/cobee.jpeg",
            categoria: "Compañia de Energia Electrica",
            titulo: "Cobee",
            descripcion: "Empresa privada de generación de energía eléctrica."
        },
        {
            img: "imgs/clientes/crecer.jpeg",
            categoria: "Institucion Microfinanciera",
            titulo: "Crecer IFD",
            descripcion: "Entidad financiera sin fines de lucro en Bolivia, especializada en microfinanzas."
        },
        {
            img: "imgs/clientes/credinform.jpeg",
            categoria: "Compañia de Seguros",
            titulo: "CREDINFORM",
            descripcion: "Reconocida empresa aseguradora de Bolivia."
        },
        {
            img: "imgs/clientes/epsas.jpeg",
            categoria: "Seguridad digital",
            titulo: "EPSAS",
            descripcion: "Empresa estatal y de servicio público responsable de el agua potable."
        },
        {
            img: "imgs/clientes/gladymar.jpeg",
            categoria: "Empresa de Ceramica",
            titulo: "Gladymar",
            descripcion: "Empresa líder en la fabricación y comercialización de cerámica para la construcción."
        },
        {
            img: "imgs/clientes/ministerio_de_la_presidencia.jpeg",
            categoria: "Ministerio",
            titulo: "Ministerio de la presidencia",
            descripcion: "Entidad del Órgano Ejecutivo."
        },
        {
            img: "imgs/clientes/naabol.jpeg",
            categoria: "Entidad pública",
            titulo: "Naabol",
            descripcion: "Institución pública de Bolivia encargada de administrar y operar los aeropuertos del Estado."
        },
        {
            img: "imgs/clientes/salesiana.jpeg",
            categoria: "Universidad",
            titulo: "Universidad Salesiana de Bolivia",
            descripcion: "Institución de educación superior privada."
        },
        {
            img: "imgs/clientes/soboce.jpeg",
            categoria: "Empresa Productora de Cemento",
            titulo: "Soboce",
            descripcion: "Empresa productora y comercializadora de cemento, áridos y prefabricados en Bolivia."
        },
        {
            img: "imgs/clientes/sofia.jpeg",
            categoria: "Empresa de Alimentos",
            titulo: "Sofia",
            descripcion: "Empresa líder en la industria de alimentos en Bolivia."
        },
        {
            img: "imgs/clientes/sos.jpeg",
            categoria: "Organizacion",
            titulo: "Aldeas Infatiles SOS Bolivia",
            descripcion: "Organización no gubernamental sin fines de lucro."
        },
        {
            img: "imgs/clientes/union.jpeg",
            categoria: "Entidad Financiera",
            titulo: "SAFI Unión S.A.",
            descripcion: "Entidad financiera en Bolivia, filial del Banco Unión S.A."
        }

        //para añadir un nuevo cliente se debe subir la imagen a la carpeta imgs/clientes y 
        //añadir un nuevo objeto con los datos del cliente en el array clientes, por ejemplo:
        /*

        {
            img: "imgs/clientes/nuevo_cliente.jpeg",
            categoria: "Categoría del nuevo cliente",
            titulo: "Nombre del nuevo cliente",
            descripcion: "Descripción del nuevo cliente"
        }

        NOTA: No olvidar la coma al final del objeto anterior, y 
        asegurarse de que la ruta de la imagen sea correcta.

        */
    ];

    let index = 0;
    const totalClientes = clientes.length;
    let actualizando = false;

    const tarjetas = [
        {
            card: document.getElementById("card1"),
            img: document.getElementById("img1"),
            cat: document.getElementById("cat1"),
            title: document.getElementById("title1"),
            desc: document.getElementById("desc1")
        },
        {
            card: document.getElementById("card2"),
            img: document.getElementById("img2"),
            cat: document.getElementById("cat2"),
            title: document.getElementById("title2"),
            desc: document.getElementById("desc2")
        },
        {
            card: document.getElementById("card3"),
            img: document.getElementById("img3"),
            cat: document.getElementById("cat3"),
            title: document.getElementById("title3"),
            desc: document.getElementById("desc3")
        }
    ];

    const existenTarjetas = tarjetas.every((tarjeta) => {
        return tarjeta.card && tarjeta.img && tarjeta.cat && tarjeta.title && tarjeta.desc;
    });

    if (!existenTarjetas) return;

    function cargarClientes() {
        for (let i = 0; i < 3; i++) {
            const posicion = (index + i) % totalClientes;
            const cliente = clientes[posicion];

            tarjetas[i].img.src = cliente.img;
            tarjetas[i].cat.innerText = cliente.categoria;
            tarjetas[i].title.innerText = cliente.titulo;
            tarjetas[i].desc.innerText = cliente.descripcion;
        }
    }

    function siguienteGrupo() {
        if (actualizando) return;

        actualizando = true;

        tarjetas.forEach((tarjeta) => {
            tarjeta.card.classList.add("fading");
        });

        setTimeout(() => {
            index = (index + 1) % totalClientes;

            cargarClientes();

            tarjetas.forEach((tarjeta) => {
                tarjeta.card.classList.remove("fading");
            });

            actualizando = false;
        }, 600);
    }

    cargarClientes();

    setInterval(siguienteGrupo, 8000); //8 segundos
})();