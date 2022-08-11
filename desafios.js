const getProducts = async() => {
    try{
        const response = await fetch("/productos.json");
        const data = await response.json();
        console.log("data from .json: " , data)
        loadProducts(data)
    }
    catch(error){
        console.log(error)
    }
}
getProducts()

const loadProducts = (data) => {
    for (let producto of data) 
    {
        const {img, nombre, precio, id} = producto
        let cartas = document.getElementById("card")
        let cartas_br = document.getElementById("card_br")
        let template = `
            <div class="card h-100 mx-4 mb-3">
                <img class="card-img" src="${img}"/>
                <div class="card-body">
                    <div class="text-center">
                        <p class="name" style="color: black;">${nombre} - <span class="price" id="precio" style="color: black;">$${precio}</span></p>
                    </div>
                </div>
                <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a href="#badge" onclick="agregado_al_carro(${id})" "id="agregar_al_carro" class="btn btn-outline-dark mt-auto" href="#">Agregar al <i class="bi bi-cart2"></i></a></div>
                </div> 
            </div>
        `
        id <= 3 ? cartas.innerHTML += template : cartas_br.innerHTML += template
    }
}

const carrito = []
let numero = 1

function agregado_al_carro(tag)
{   
    const loadCarro = async() => {
        try{
            const response = await fetch("/productos.json");
            const data = await response.json();
            getProdCarro(data)
        }
        catch(error){
            console.log(error)
        }
    }
    loadCarro()
        const getProdCarro = (data) => {
        for (const producto of data) {
            const {id} = producto
            if (id == tag)
                {
                    const {nombre, precio, img} = producto
                    carrito.push(producto); 
                    let carroVacio = document.getElementById("carroVacio")
                    carroVacio.innerText = `Agregar al carrito:`
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
                        </div>     
                    `
                    let check = document.getElementsByClassName("btn-success")
                    for (const button of check) {
                    button.addEventListener("click" , function(e) {

                        // unidades
                        let hijo = e.target
                        let padre = hijo.parentNode
                        let unidades = padre.querySelector("input")
                        producto.unidad = unidades.value
                        producto.numero = numero

                        // suma
                        let total = padre.querySelector("#total")
                        let suma = total.innerText
                        suma = precio * unidades.value
                        total.innerText = `Total: $${suma}`

                        // boton confirmar
                        let getUnidades = unidades.parentNode
                        getUnidades.innerText = `Unidades: ${unidades.value}`
                        let confirmar = padre.querySelector(".btn-success")
                        let carroVacio = document.getElementById("carroVacio")
                        carroVacio.innerText = ` `
                        padre.remove()

                        // storage
                        console.log('Carrito:' , carrito)
                        let carrito_JSON = JSON.stringify(carrito)
                        localStorage.setItem("carrito" , carrito_JSON)
                        numero++
                        let numero_JSON = JSON.stringify(numero)
                        localStorage.setItem("numero" , numero_JSON)

                        // librerías
                        Toastify({
                            text:"Agregado al carrito!",
                            duration: 2000,
                            destination: "./carro.html",
                            style: {
                                background: "#198754",
                                fontSize: "17px",
                            },
                        
                        }).showToast();
                        let carro = document.getElementById("carrobutton");
                        let num = carrito.length;
                        carro.innerText = num;
                    }) 
                }
            }
        }
    }
}

const loadPage = () => {
    let getJSON = localStorage.getItem("carrito");
    const recoverCarro = JSON.parse(getJSON)
    const length = recoverCarro.length
    const getCarrito = [...JSON.parse(getJSON)]
    let getNumJSON = localStorage.getItem("numero")
    const recoverNum = JSON.parse(getNumJSON)
    numero = recoverNum
    const recover = (length > 0) ? true : false
    recover ? console.log('Carrito:' , getCarrito) : null
    if (recover == true) 
    {
        for (let i = 0; i < getCarrito.length; i++) {
                carrito.push(getCarrito[i])    
        }
    }
    let carro = document.getElementById("carrobutton");
    let num = getCarrito.length;
    carro.innerText = num;
}
loadPage()


