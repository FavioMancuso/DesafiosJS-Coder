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
    const {img} = producto
    const {nombre} = producto
    const {precio} = producto
    const {id} = producto
    let cartas = document.getElementById("card")
    cartas.innerHTML += `
                    <div class="card h-100 mx-4">
                        <img class="card-img" src="${img}"/>
                        <div class="card-body">
                            <div class="text-center">
                                <p class="name" style="color: black;">${nombre} - <span class="price" id="precio" style="color: black;">$${precio}</span></p>
                            </div>
                        </div>
                        <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a onclick="agregado_al_carro(${id})" href="#badge" "id="agregar_al_carro" class="btn btn-outline-dark mt-auto" href="#">Agregar al <i class="bi bi-cart2"></i></a></div>
                        </div> 
                    </div>
                `
}

const carrito = []
let numero = 1

function agregado_al_carro(id)
{   
    for (const producto of [productos.producto1, productos.producto2, productos.producto3]) {
    if (producto.id == id)
        {
            const {nombre} = producto
            const {precio} = producto
            const {img} = producto
            carrito.push(producto); 
            let carroVacio = document.getElementById("carroVacio")
            carroVacio.innerText = `Su carrito:`
            let carroProductos = document.getElementById("compras")
            carroProductos.innerHTML += `
                <div id="badge" class="container btn m-2 p-2 d-flex flex-row justify-content-between align-items-center" style="background-color: rgba(255,255,255);">
                    <img class="card-img" src="${img}" style="width: 4.5rem ; height: 6rem"/>     
                    <div class="btn">Producto: ${nombre}</div>
                    <div class="btn">Precio: $${precio}</div> 
                    <div class="btn">Unidades: <input type="number" style="width: 3rem" placeholder="1" class="unidades"></></div> 
                    <div class="btn" id="total">Total: $${precio}</div>
                    <div class="btn num" style="visibility: hidden;">${numero}</div>
                    <button class="btn btn-success">Confirmar <i class="bi bi-check2" style="font-size:1.2rem"></i></button>   
                    <div class="skip"></div>     
            `
                    let check = document.getElementsByClassName("btn-success")
                    for (const button of check) {
                    button.addEventListener("click" , function(e) {
                        let hijo = e.target
                        let padre = hijo.parentNode
                        let node = padre.parentNode
                        let unidades = node.querySelector("input")
                        producto.unidad = unidades.value
                        producto.numero = numero
                        numero++
                        let total = node.querySelector("#total")
                        let suma = total.innerText
                        suma = precio * unidades.value
                        total.innerText = `Total: $${suma}`
                        let getUnidades = unidades.parentNode
                        getUnidades.innerText = `Unidades: ${unidades.value}`
                        let confirmar = padre.querySelector(".btn-success")
                        confirmar.remove()
                        let skip = padre.querySelector(".skip")
                        skip.innerHTML = `                    
                        <button class="btn btn-danger buttons_borrar"><i class="bi bi-x" style="font-size:1.2rem"></i></button>   
                        `
                        console.log('Carrito:' , carrito)
                        let carrito_JSON = JSON.stringify(carrito)
                        localStorage.setItem("carrito" , carrito_JSON)
                    }) 
                }

            let buttonCompra = document.getElementById("comprarAhora")
            buttonCompra.innerHTML = '<button id="comprarAhora" class="btn btn-light btn-outline-dark">Comprar ahora</button>'
            
            let buttons_borrar = document.querySelectorAll(".buttons_borrar")
            for (let button of buttons_borrar) {
                button.addEventListener("click" , function(e){
                    let borrar = e.target
                    let padre = borrar.parentNode
                    let outNode = padre.parentNode
                    outNode.remove()
                    const remove = () => {
                        let num = outNode.querySelector(".num")
                        let index = num.innerText
                        return index
                    }            
                    remove()  
                    function buscar_index(producto){    
                        return producto.numero == remove()
                    }
                    let resultado_find = carrito.find(buscar_index);
                    console.log("Se eliminó del carrito a: " , resultado_find);
                    indexOf(resultado_find)
                    let rest = restCarrito()
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
}

const indexOf = (index) => {
    const eliminar = carrito.indexOf(index)
    carrito.splice( eliminar , 1 );
    console.log("Carrito: " , carrito);
    let carrito_JSON = JSON.stringify(carrito)
    localStorage.setItem("carrito" , carrito_JSON)
}

let getJSON = localStorage.getItem("carrito");
const recoverCarro = JSON.parse(getJSON)
const length = recoverCarro.length
const getCarrito = [...JSON.parse(getJSON)]
const recover = (length > 0) ? true : false
recover ? console.log('Carrito:' , getCarrito) : null
if (recover == true) 
{
        for (let i = 0; i < getCarrito.length; i++) {
            carrito.push(getCarrito[i])            
            for (let producto of [(carrito[i])])
            {
                const {nombre} = producto
                const {unidad} = producto
                const {img} = producto
                const {precio} = producto
                let carroVacio = document.getElementById("carroVacio")
                carroVacio.innerText = "Su carrito:"
                let carroProductos = document.getElementById("compras")
                carroProductos.innerHTML += `
                    <div id="badge" class="container btn m-2 p-2 d-flex flex-row justify-content-between align-items-center" style="background-color: rgba(255,255,255);">
                        <img class="card-img" src="${img}" style="width: 4.5rem ; height: 6rem"/>     
                        <div class="btn">Producto: ${nombre}</div>
                        <div class="btn">Precio: $${precio}</div> 
                        <div class="btn">Unidades: ${unidad}</></div> 
                        <div class="btn" id="total">Total: $${precio * unidad}</div>
                        <div class="btn num" style="visibility: hidden;">${numero}</div>
                        <button class="btn btn-danger buttons_borrar"><i class="bi bi-x" style="font-size:1.2rem"></i></button>   
                    </div>   
                `

                let buttonCompra = document.getElementById("comprarAhora")
                buttonCompra.innerHTML = '<button id="comprarAhora" class="btn btn-light btn-outline-dark">Comprar ahora</button>'
                let carro = document.getElementById("carrobutton");
                let num = carrito.length;
                carro.innerText = num;
                
            }
        }
    }

