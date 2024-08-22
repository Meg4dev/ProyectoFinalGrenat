document.addEventListener("DOMContentLoaded", () => {
  //! Este archivo . js contiene las funcionalidades para traer elementos del DOM y generar contenido de forma dinamica. De aca salen las cards, los botones de comprar, el carrito, etc. Tambien se traen los arrays desde un archivo .json alojado en jsonbin utilizando fetch.

  const url = "https://api.jsonbin.io/v3/b/66c773c5e41b4d34e423d192";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const guitarrasElectricasGibson = data.record.guitarrasElectricasGibson;
      const guitarrasElectricasFender = data.record.guitarrasElectricasFender;
      const guitarrasElectricasESP = data.record.guitarrasElectricasESP;
      const guitarrasElectricasSquier = data.record.guitarrasElectricasSquier;
      const guitarrasAcusticasYamaha = data.record.guitarrasAcusticasYamaha;
      const bajosYamaha = data.record.bajosYamaha;
      const bajosIbanez = data.record.bajosIbanez;
      const bajosFender = data.record.bajosFender;
      const amplificadoresGuitarra = data.record.amplificadoresGuitarra;
      const AccesoriosInstrumentos = data.record.AccesoriosInstrumentos;

      const mostrarGuitarrasElecGibson = document.querySelector(
        ".card-container-gibson"
      );

      const guitarrasElecGibson = guitarrasElectricasGibson;
      guitarrasElecGibson.forEach((guitarra) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${guitarra.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${guitarra.brand}</h5>
                <p class="card-text">${guitarra.model}</p>
                <p class="card-price">$${guitarra.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarGuitarrasElecGibson.appendChild(card);
      });

      const mostrarGuitarrasElecFender = document.querySelector(
        ".card-container-fender"
      );

      const guitarrasElecFender = guitarrasElectricasFender;
      guitarrasElecFender.forEach((guitarra) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${guitarra.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${guitarra.brand}</h5>
                <p class="card-text">${guitarra.model}</p>
                <p class="card-price">$${guitarra.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarGuitarrasElecFender.appendChild(card);
      });

      const mostrarGuitarrasElecESP = document.querySelector(
        ".card-container-esp"
      );

      const guitarrasElecESP = guitarrasElectricasESP;
      guitarrasElecESP.forEach((guitarra) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${guitarra.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${guitarra.brand}</h5>
                <p class="card-text">${guitarra.model}</p>
                <p class="card-price">$${guitarra.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarGuitarrasElecESP.appendChild(card);
      });

      const mostrarGuitarrasElecSquier = document.querySelector(
        ".card-container-squier"
      );

      const guitarrasElecSquier = guitarrasElectricasSquier;
      guitarrasElecSquier.forEach((guitarra) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${guitarra.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${guitarra.brand}</h5>
                <p class="card-text">${guitarra.model}</p>
                <p class="card-price">$${guitarra.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarGuitarrasElecSquier.appendChild(card);
      });

      const mostrarGuitarrasYamaha = document.querySelector(
        ".card-container-yamaha"
      );

      const guitarrasYamaha = document.querySelector(
        ".guitarrasYamahaContainer"
      );
      guitarrasAcusticasYamaha.forEach((guitarra) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${guitarra.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${guitarra.brand}</h5>
                <p class="card-text">${guitarra.model}</p>
                <p class="card-price">$${guitarra.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarGuitarrasYamaha.appendChild(card);
      });

      const mostrarBajosYamaha = document.querySelector(
        ".card-container-yamaha-bajos"
      );

      const bajosYamahaCard = document.querySelector(".bajosYamahaContainer");
      bajosYamaha.forEach((bajos) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${bajos.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${bajos.brand}</h5>
                <p class="card-text">${bajos.model}</p>
                <p class="card-price">$${bajos.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarBajosYamaha.appendChild(card);
      });

      const mostrarBajosIbanez = document.querySelector(
        ".card-container-ibanez"
      );

      const bajosIbanezCard = document.querySelector(".bajosIbanezContainer");
      bajosIbanez.forEach((bajos) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${bajos.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${bajos.brand}</h5>
                <p class="card-text">${bajos.model}</p>
                <p class="card-price">$${bajos.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarBajosIbanez.appendChild(card);
      });

      const mostrarBajosFender = document.querySelector(
        ".card-container-fender-bajos"
      );

      const bajosFenderCard = document.querySelector(".bajosFenderContainer");
      bajosFender.forEach((bajos) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${bajos.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${bajos.brand}</h5>
                <p class="card-text">${bajos.model}</p>
                <p class="card-price">$${bajos.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarBajosFender.appendChild(card);
      });

      const mostrarAmplificadores = document.querySelector(
        ".card-container-amps"
      );

      const amplificadoresCard = document.querySelector(
        ".amplificadoresContainer"
      );
      amplificadoresGuitarra.forEach((amplificadores) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${amplificadores.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${amplificadores.brand}</h5>
                <p class="card-text">${amplificadores.model}</p>
                <p class="card-price">$${amplificadores.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;
        mostrarAmplificadores.appendChild(card);
      });

      const mostrarAccesorios = document.querySelector(
        ".card-container-accesorios"
      );

      const accesoriosCard = document.querySelector(".accesoriosContainer");
      AccesoriosInstrumentos.forEach((accesorios) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${accesorios.img}" class="card-img-top" alt=" ">
            <div class="card-body">
                <h5 class="card-title">${accesorios.brand}</h5>
                <p class="card-text">${accesorios.model}</p>
                <p class="card-price">$${accesorios.price}</p>
                <span class="buttonContainer"></span>
            </div>
        `;

        mostrarAccesorios.appendChild(card);
      });

      //! CARRITO: El mismo comienza cargando el carrito desde localStorage, agregando diferentes funciones para el mismo, como guardarlo en localStorage y actualizar la visualización del mismo. Tambien se crean tanto los botones de las cards, como del carrito de forma dinamica de manera que sean funcionales para agregar productos al carrito, vaciarlo o simular una compra. El carrito cuenta con un icono flotante que redirije hacia el contenedor del mismo.

      let productos = [
        ...guitarrasElectricasGibson,
        ...guitarrasElectricasFender,
        ...guitarrasElectricasESP,
        ...guitarrasElectricasSquier,
        ...guitarrasAcusticasYamaha,
        ...bajosYamaha,
        ...bajosIbanez,
        ...bajosFender,
        ...amplificadoresGuitarra,
        ...AccesoriosInstrumentos,
      ];

      // Cargar carrito desde localStorage
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Función para guardar carrito en localStorage
      function guardarCarritoEnLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }

      // Función para actualizar la visualización del carrito
      function actualizarCarritoVisual() {
        const mostrarCarrito = document.querySelector(".carrito-container");
        mostrarCarrito.style.display = "flex";
        setTimeout(function () {
          mostrarCarrito.classList.add("mostrar");
        }, 20);
        const divProductoAgregado = document.querySelector(
          ".agregadosAlCarrito"
        );
        divProductoAgregado.innerHTML = "";

        carrito.forEach((producto) => {
          divProductoAgregado.innerHTML += `
            <div class="card card-carrito">
                <img src="${producto.img}" class="card-img-top" alt=" ">
                <div class="card-body cardbody-carrito"></div>
                    <div class="card-title-carrito"><h5 class="card-title">${producto.brand}</h5>
                    </div>
                    <div class="card-text-carrito"><p class="card-text">${producto.model}</p></div>
                    <div class='card-price-carrito'><p class="card-price">$${producto.price}</p></div>
                </div>
            </div>
        `;
        });

        if (carrito.length === 0) {
          document.querySelector(".carrito-container").style.display = "none";
        } else {
          const total = carrito.reduce(
            (total, producto) => total + parseFloat(producto.price),
            0
          );
          document.querySelector(
            ".totalAPagar"
          ).textContent = `Total a pagar: $${total}`;
        }

        // Actualizar total a pagar
      }

      // Función para mostrar botones
      function mostrarBotones() {
        document.getElementById("vaciar-carrito").style.display = "block";
        document.getElementById("comprar").style.display = "block";
      }

      // Función para agregar productos al carrito
      function agregarAlCarrito(producto) {
        carrito.push(producto);
        guardarCarritoEnLocalStorage();
        mostrarBotones();
        actualizarCarritoVisual();
      }

      // Añadir eventos a los botones dinámicos
      document
        .querySelectorAll(".buttonContainer")
        .forEach((contenedor, indice) => {
          const boton = document.createElement("button");
          boton.textContent = `Agregar al Carrito`;
          boton.className = "button";
          contenedor.appendChild(boton);

          boton.addEventListener("click", () => {
            Toastify({
              text: "Producto agregado al carrito.",
              offset: {
                x: 0,
                y: 800,
              },
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();

            const producto = {
              img: productos[indice].img,
              brand: productos[indice].brand,
              model: productos[indice].model,
              price: productos[indice].price,
            };
            agregarAlCarrito(producto);
          });
        });

      // Función para manejar el scroll del ícono del carrito
      function manejarScroll() {
        const iconoCarrito = document.getElementById("icono-carrito");
        if (window.scrollY > 100) {
          iconoCarrito.classList.add("mostrar");
        } else {
          iconoCarrito.classList.remove("mostrar");
        }
      }

      // Función para vaciar el carrito
      function vaciarCarrito() {
        carrito.length = 0;
        guardarCarritoEnLocalStorage();
        actualizarCarritoVisual();
        document.querySelector(".totalAPagar").textContent = "";
        document.getElementById("vaciar-carrito").style.display = "none";
        document.getElementById("comprar").style.display = "none";
      }

      // Función para realizar la compra
      function Comprar() {
        carrito.length = 0;
        guardarCarritoEnLocalStorage();
        actualizarCarritoVisual();
        document.querySelector(".totalAPagar").textContent = "";
        document.getElementById("vaciar-carrito").style.display = "none";
        document.getElementById("comprar").style.display = "none";
        document.querySelector(".agregadosAlCarrito").innerHTML =
          "Su pedido fue procesado exitosamente!";
      }

      // Evento para vaciar el carrito
      const botonVaciar = document.querySelector("#vaciar-carrito");
      botonVaciar.addEventListener("click", () => {
        Toastify({
          text: "Se ha vaciado el carrito.",
          offset: {
            x: 0,
            y: 800,
          },
          style: {
            background: "linear-gradient(to right, #ff6f00, #eba742)",
          },
        }).showToast();
        vaciarCarrito();
      });

      // Evento para realizar la compra
      const botonComprar = document.querySelector("#comprar");
      botonComprar.addEventListener("click", () => {
        Swal.fire({
          title: "Muchas gracias por su compra!",
          text: "Su pedido fue procesado exitosamente.",
          icon: "success",
        });
        Comprar();
      });

      // Evento para manejar el scroll
      window.addEventListener("scroll", manejarScroll);

      // Cargar y mostrar el carrito al cargar la página
      actualizarCarritoVisual();
      if (carrito.length > 0) {
        mostrarBotones();
      }
    });
});
