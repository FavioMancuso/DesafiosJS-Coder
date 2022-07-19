class Productos {
    constructor (id , nombre , precio , stock , img , categoria){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.img = img
        this.categoria = categoria
    }
}

let productos = []

let producto1 = new Productos ( 1 , "Mate" , 1500 , 20 , "./img/WhatsApp Image 2022-06-03 at 6.12.14 PM.jpeg" , "mates")
productos.push(producto1)
let producto2 = new Productos ( 2 , "Salsero" , 500 , 20 , "./img/WhatsApp Image 2022-06-03 at 6.12.15 PM (1).jpeg" , "cocina")
productos.push(producto2)
let producto3 = new Productos ( 3 , "Taza" , 2500 , 20 , "./img/WhatsApp Image 2022-06-03 at 6.12.15 PM.jpeg" , "vajilla")
productos.push(producto3)

for (let producto of productos) 
{
    let cartas = document.getElementById("card")
    cartas.innerHTML += `
                    <div class="card h-100">
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
                                                <input class="btn unidad " type="number" name="unidades" placeholder="1" style="border: solid 1px black; width: 20%; cursor: text;">
                                            </div>
                                            <div>    
                                                <button class="btn mx-2 confirmar_unidad" style="border: solid 1px black;" value=${producto.precio}>Confirmar <i class="bi bi-check-circle"></i></button>
                                            </div>
                                        </div>
                                        <button id="agregado_al_carro "onclick="agregado_al_carro(${producto.id})" class="justify-content-center btn btn-outline-dark mt-auto" data-bs-dismiss="modal">Agregar al <i class="bi bi-cart2"></i></button>
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
    let index = 0
    let producto = productos.find(element => element.id == id);
    if(producto)
    {
        carrito.push(producto);
        let carroVacio = document.getElementById("carroVacio")
        carroVacio.innerText = ""
        let carroProductos = document.getElementById("compras")
        carroProductos.innerHTML += `
            <div class="container btn m-2 p-2 d-flex flex-row justify-content-between" style="background-color: white;">
                <div class="btn">Producto: ${producto.nombre}</div>
                <div class="btn">Unidades: ${getUnidad(index)}</div>
                <div class="btn">Precio por unidad: ${producto.precio}</div>
                <div class="btn">Total: ${getUnidad(index) * producto.precio}</div>  
                <div class="btn btn-close" style="width: 2rem; height: 2rem; background-color: red" onclick="eliminar(${producto.id})"></div>   
            </div>   
        ` 
        index++
    }
    console.log(carrito)
    let carro = document.getElementById("carrobutton");
    let num = carrito.length;
    carro.innerText = num;
}

const getUnidad = (index) =>
{
    let unidadbuttons = document.getElementsByClassName("unidad");
    let i = 0;
    for (const button of unidadbuttons)
    {
        if(i == index)
        {
            return button.value;
        }
        i++;
    }
}

const loadConfirmEvents = () =>
{
    let confirmbuttons = document.getElementsByClassName("confirmar_unidad");
    let index = 0;
    for (const button of confirmbuttons)
    {
        button.addEventListener("click" , function(){
            let value = button.value;
            console.log("value" , value);
            let unidad = getUnidad(index);
            console.log('unidad' ,  unidad);    
            index++     
        });
    }
}
loadConfirmEvents();
        



