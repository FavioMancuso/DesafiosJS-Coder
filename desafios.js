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
                            <div class="text-center"><a id="agregar_al_carro" class="btn btn-outline-dark mt-auto" href="#" data-bs-toggle="modal" data-bs-target="#modalCompra${producto.id}">Agregar al <i class="bi bi-cart2"></i></a></div>
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
                                                <input class="btn unidad" type="number" name="unidades" placeholder="1" style="border: solid 1px black; width: 20%; cursor: text;">
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
    if (productos.producto1.id == id)
    {
        carrito.push(productos.producto1); 
        let carroVacio = document.getElementById("carroVacio")
        carroVacio.innerText = "Su carrito:"
        let carroProductos = document.getElementById("compras")
        carroProductos.innerHTML += `
            <div class="container btn m-2 p-2 d-flex flex-row justify-content-between" style="background-color: white;">
                <div class="btn">Producto: ${productos.producto1.nombre}</div>
                <div class="btn">Unidades: ${productos.producto1.unidad} </div>
                <div class="btn">Precio por unidad: ${productos.producto1.precio}</div>
                <div class="btn">Total: ${productos.producto1.unidad * productos.producto1.precio}</div>  
                <div class="btn btn-close buttons_borrar" style="width: 2rem; height: 2rem; background-color: red"></div>   
            </div>   
        `
    }
    else if (productos.producto2.id == id)
    {
        carrito.push(productos.producto2); 
        let carroVacio = document.getElementById("carroVacio")
        carroVacio.innerText = "Su carrito:"
        let carroProductos = document.getElementById("compras")
        carroProductos.innerHTML += `
            <div class="container btn m-2 p-2 d-flex flex-row justify-content-between" style="background-color: white;">
                <div class="btn">Producto: ${productos.producto2.nombre}</div>
                <div class="btn">Unidades: ${productos.producto2.unidad} </div>
                <div class="btn">Precio por unidad: ${productos.producto2.precio}</div>
                <div class="btn">Total: ${productos.producto2.unidad * productos.producto2.precio}</div>  
                <div class="btn btn-close buttons_borrar" style="width: 2rem; height: 2rem; background-color: red"></div>   
            </div>   
        `
    }
    else if (productos.producto3.id == id)
    {
        carrito.push(productos.producto3); 
        let carroVacio = document.getElementById("carroVacio")
        carroVacio.innerText = "Su carrito:"
        let carroProductos = document.getElementById("compras")
        carroProductos.innerHTML += `
            <div class="container btn m-2 p-2 d-flex flex-row justify-content-between" style="background-color: white;">
                <div class="btn">Producto: ${productos.producto3.nombre}</div>
                <div class="btn">Unidades: ${productos.producto3.unidad} </div>
                <div class="btn">Precio por unidad: ${productos.producto3.precio}</div>
                <div class="btn">Total: ${productos.producto3.unidad * productos.producto3.precio}</div>  
                <div class="btn btn-close buttons_borrar" style="width: 2rem; height: 2rem; background-color: red"></div>   
            </div>   
        `
    }
    console.log(carrito)
    let carro = document.getElementById("carrobutton");
    let num = carrito.length;
    carro.innerText = num;

    let buttons_borrar = document.querySelectorAll(".buttons_borrar")
    for (let button of buttons_borrar) {
        button.addEventListener("click" , function(e){
            let borrar = e.target
            let outNode = borrar.parentNode
            outNode.remove()
        })
    }
}

const getUnidad = (value) =>
{
    if (productos.producto1.precio == value){
        let unidadbuttons = document.getElementsByClassName("unidad");
        for (const button of unidadbuttons)
        {
                productos.producto1.unidad = button.value
                const {unidad} = productos.producto1
                return unidad
        }
    }
    else if (productos.producto2.precio == value){
        let unidadbuttons = document.getElementsByClassName("unidad");
        for (const button of unidadbuttons)
        {
            productos.producto2.unidad = button.value
            const {unidad} = productos.producto2
            return unidad
        }
    }
    else if (productos.producto3.precio == value){
        let unidadbuttons = document.getElementsByClassName("unidad");
        for (const button of unidadbuttons)
        {
            productos.producto3.unidad = button.value
            const {unidad} = productos.producto3
            return unidad
        }
    }
}

const loadConfirmEvents = () =>
{
    let confirmbuttons = document.getElementsByClassName("confirmar_unidad");
    for (const button of confirmbuttons)
    {
        button.addEventListener("click" , function(){
            let value = button.value;
            console.log("value" , value);
            let unidad = getUnidad(value);
            console.log('unidad' ,  unidad);
        });
    }
}
loadConfirmEvents();


        



