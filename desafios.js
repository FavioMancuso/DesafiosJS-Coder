const productos = {
    producto1:
        {
            nombre: 'Mate',
            id: 1,
            precio: 1500,
            stock: 20,
            img: './img/WhatsApp Image 2022-06-03 at 6.12.14 PM.jpeg',
            categoria: 'mates'
        },
    producto2:
        {
            nombre: 'Salsero',
            id: 2,
            precio: 500,
            stock: 20,
            img: './img/WhatsApp Image 2022-06-03 at 6.12.15 PM (1).jpeg',
            categoria: 'cocina'
        },
    producto3:
        {
            nombre: 'Taza',
            id: 3,
            precio: 800,
            stock: 20,
            img: './img/WhatsApp Image 2022-06-03 at 6.12.15 PM.jpeg',
            categoria: 'vajilla'
        }
    }

for (let producto of [productos.producto1 , productos.producto2 , productos.producto3]) 
{
    let cartas = document.getElementById("card")
    cartas.innerHTML += `
                    <div class="card h-100 mx-4">
                        <img class="card-img" src="${producto.img}"/>
                        <div class="card-body">
                            <div class="text-center">
                                <p class="name" style="color: black;">${producto.nombre} - <span class="price" id="precio" style="color: black;">$${producto.precio}</span></p>
                            </div>
                        </div>
                        <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a onclick="getModal(${producto.id})" "id="agregar_al_carro" class="btn btn-outline-dark mt-auto" href="#" data-bs-toggle="modal" data-bs-target="#modalCompra${producto.id}">Agregar al <i class="bi bi-cart2"></i></a></div>
                            <!--<div class="text-center"><a class="btn btn-dark mt-1" href="#">Comprar ahora</i></a></div>-->
                        </div> 
                    </div>
                    <section id="open-modal">
                        <div tabindex="-1" aria-labelledby="modalCompra${producto.id}" class="modal fade" style="background-color: rgba(0, 0, 0, 0.5);" id="modalCompra${producto.id}" aria-hidden="true" data-bs-backdrop="static">
                            <div class="modal-dialog modal modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header d-flex justify-content-between align-items-center">
                                        <p class="p m-0" style="color: black;">${producto.nombre}</p>
                                        <button type="button" class="btn-close align-self-end p-0 m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body modal-body">
                                        <div class="div d-flex flex-row justify-content-between">
                                            <img src="${producto.img}" alt="" width="49%" height="300px">
                                            <img src="${producto.img}" alt="" width="49%" height="300px">
                                        </div>
                                    </div>
                                    <div class="modal-footer d-flex flex-column">
                                        <div class="div d-flex">
                                            <div>
                                                <label class="btn" style="cursor: initial; border: solid 1px black;" for="">Unidades:</label>    
                                                <input class="btn unidad" type="number" name="" placeholder="0" style="border: solid 1px black; width: 20%; cursor: text;">
                                            </div>
                                            <div>    
                                                <button class="btn mx-2 confirmar_unidad" style="border: solid 1px black;" value=${producto.precio}>Confirmar <i class="bi bi-check-circle"></i></button>
                                            </div>
                                        </div>
                                        <button onclick="agregado_al_carro(${producto.id})" class="badge_in justify-content-center btn btn-outline-dark mt-auto" data-bs-dismiss="modal">Agregar al <i class="bi bi-cart2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `
}

const carrito = []

function agregado_al_carro(id)
{   
    for (const producto of [productos.producto1, productos.producto2, productos.producto3]) {
    if (producto.id == id)
        {
            carrito.push(producto); 
            let carroVacio = document.getElementById("carroVacio")
            carroVacio.innerText = "Su carrito:"
            let carroProductos = document.getElementById("compras")
            carroProductos.innerHTML += `
                <div class="container btn m-2 p-2 d-flex flex-row justify-content-between" style="background-color: white;">
                    <div class="btn">Producto: ${producto.nombre}</div>
                    <div class="btn">Unidades: ${producto.unidad} </div>
                    <div class="btn">Precio por unidad: $${producto.precio}</div>
                    <div class="btn">Total: $${producto.unidad * producto.precio}</div>  
                    <div class="btn btn-close buttons_borrar" style="width: 2rem; height: 2rem; background-color: red"></div>   
                </div>   
            `
            let buttonCompra = document.getElementById("comprarAhora")
            buttonCompra.innerHTML = '<button id="comprarAhora" class="btn btn-light btn-outline-dark">Comprar ahora</button>'
            
            let buttons_borrar = document.querySelectorAll(".buttons_borrar")
            for (let button of buttons_borrar) {
                button.addEventListener("click" , function(e){
                    let borrar = e.target
                    let outNode = borrar.parentNode
                    outNode.remove()
                    carrito.splice(0,1,)
                    let rest = restCarrito()
                    console.log(carrito)
                    let carrito_JSON = JSON.stringify(carrito)
                    localStorage.setItem("carrito" , carrito_JSON)
                })
            }
        }
    }

    let carro = document.getElementById("carrobutton");
    let num = carrito.length;
    carro.innerText = num;
    const restCarrito = () => {
        num = num - 1
        carro.innerText = num;
    }
    console.log(carrito)

    let carrito_JSON = JSON.stringify(carrito)
    localStorage.setItem("carrito" , carrito_JSON)
}

const getModal = (id) => 
{
    for (const producto of [productos.producto1 , productos.producto2 , productos.producto3]) {
        if (producto.id == id) 
        {
            let confirmbuttons = document.getElementsByClassName("confirmar_unidad");
            for (const button of confirmbuttons)
            {
                button.addEventListener("click" , function(e){
                    let hijo = e.target
                    let padre = hijo.parentNode
                    let abuelo = padre.parentNode
                    let unidad = abuelo.querySelector("input")
                    console.log("unidades" , unidad.value)
                    let value = button.value;
                    console.log("value" , value); 
                    producto.unidad = unidad.value
                    console.log(producto)
                });
            }
        }
    }
}

let getJSON = localStorage.getItem("carrito");
console.log("Carrito:" , JSON.parse(getJSON))

        



