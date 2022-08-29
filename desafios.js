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

// template productos
const loadProducts = (data) => {
    for (let producto of data) 
    {
        const {img, nombre, precio, id} = producto
        let cartas = document.getElementById("card")
        let cartas_br = document.getElementById("card_br")
        let cartas_br1 = document.getElementById("card_br1")
        let template = `
            <div class="card h-100 mx-auto mb-3">
                <img class="card-img mb-0" src="${img}"/>
                <div class="card-body p-0">
                    <div class="text-center">
                        <p class="name" style="color: black;">${nombre} - <span class="price" id="precio" style="color: black;">$${precio}</span></p>
                    </div>
                </div>
                <div class="card-footer p-1 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a href="#badge" onclick="agregado_al_carro(${id})" "id="agregar_al_carro" class="btn btn-outline-dark mt-auto">Agregar al <i class="bi bi-cart2"></i></a></div>
                </div> 
            </div>
        `
        if (id <= 3) { cartas.innerHTML += template }
        else if (id >= 4 && id <= 6) { cartas_br.innerHTML += template }
        else { cartas_br1.innerHTML += template }
    }
    
    // filtros productos
    let productos = document.getElementById("filtro_productos")
    let close_prod = document.getElementById("close_prod")
    productos.addEventListener("click" , function(){
        let filtro_prod = document.getElementById("filtros_prod")
        filtro_prod.className = "text-white"
        close_prod.className = "btn btn-close btn-danger"
        close_prod.addEventListener("click" , function(){
            filtro_prod.className = "visually-hidden"
            close_prod.className = "visually-hidden"
        })
    })
    // filtros diseños
    let diseño = document.getElementById("filtro_diseño")
    let close_dis = document.getElementById("close_dis")
    diseño.addEventListener("click" , function(){
        let filtro_dis = document.getElementById("filtros_dis")
        filtro_dis.className = "text-white"
        close_dis.className = "btn btn-close btn-danger mt-3"
        close_dis.addEventListener("click" , function(){
            filtro_dis.className = "visually-hidden"
            close_dis.className = "visually-hidden"
        })
    })
    // filtros precios
    let precios = document.getElementById("filtro_precios")
    let close_prec = document.getElementById("close_precios")
    precios.addEventListener("click" , function(){
        let filtro_pre = document.getElementById("filtros_pre")
        filtro_pre.className = "text-white"
        close_prec.className = "btn btn-close btn-danger mt-3"
        close_prec.addEventListener("click" , function(){
            filtro_pre.className = "visually-hidden"
            close_prec.className = "visually-hidden"
        })
    })

    let restablecer = document.getElementById("reestablecer")
    let filtro1 = document.getElementById("filtro1")
    let cartas1 = document.getElementById("filtrados1")
    let title1 = document.getElementById("title1") 
    // producto1   
    filtro1.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.categoria == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title1.className = "title"
        cartas1.className = "d-flex"
        loadProdFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })        
    let filtro2 = document.getElementById("filtro2")
    let cartas2 = document.getElementById("filtrados2")
    let title2 = document.getElementById("title2")
    // producto2    
    filtro2.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.categoria == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title2.className = "title"
        cartas2.className = "d-flex"
        loadProdFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })        
    let filtro3 = document.getElementById("filtro3")
    let cartas3 = document.getElementById("filtrados3")
    let title3 = document.getElementById("title3")    
    // producto3
    filtro3.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.categoria == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title3.className = "title"
        cartas3.className = "d-flex"
        loadProdFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })        
    let filtro4 = document.getElementById("diseño1")
    let cartas4 = document.getElementById("filtrados4")
    let title4 = document.getElementById("title4")  
    // diseño1  
    filtro4.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.diseño == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title4.className = "title"
        cartas4.className = "d-flex"
        loadDisFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })        
    let filtro5 = document.getElementById("diseño2")
    let cartas5 = document.getElementById("filtrados5")
    let title5 = document.getElementById("title5")
    // diseño2    
    filtro5.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.diseño == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title5.className = "title"
        cartas5.className = "d-flex"
        loadDisFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })        
    let filtro6 = document.getElementById("diseño3")
    let cartas6 = document.getElementById("filtrados6")
    let title6 = document.getElementById("title6")   
    // diseño3 
    filtro6.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.diseño == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title6.className = "title"
        cartas6.className = "d-flex"
        loadDisFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    }) 
    let filtro7 = document.getElementById("precio1")
    let cartas7 = document.getElementById("filtrados7")
    let title7 = document.getElementById("title7")
    let filtro8 = document.getElementById("precio2")
    let cartas8 = document.getElementById("filtrados8")
    let title8 = document.getElementById("title8")
    let filtro9 = document.getElementById("precio3")
    let cartas9 = document.getElementById("filtrados9")
    let title9 = document.getElementById("title9")

    filtro7.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.valor == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title7.className = "title"
        cartas7.className = "d-flex"
        loadPriceFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })
    filtro8.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.valor == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title8.className = "title"
        cartas8.className = "d-flex"
        loadPriceFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })
    filtro9.addEventListener("click" , function(e){
        let hijo = e.target
        let filtro = data.filter(function(fil){
            return fil.valor == hijo.value
        });
        console.log(filtro);
        const filtrado = [...filtro]
        console.log(filtrado)
        title9.className = "title"
        cartas9.className = "d-flex"
        loadPriceFiltrado(filtrado)
        restablecer.className = "btn btn-danger"
    })
    // template productos filtrados      
    const loadProdFiltrado = (filtrar) => {
        for (let producto of filtrar) 
        {
            const {img, nombre, precio, id, categoria} = producto
            let template = `
                <div class="card h-100 mx-auto mb-3" style="background: rgb(0,0,0,0.5)">
                    <img class="card-img mb-0" src="${img}"/>
                    <div class="card-body p-0">
                        <div class="text-center">
                            <p class="name" style="color: white;">${nombre} - <span class="price" id="precio" style="color: white;">$${precio}</span></p>
                        </div>
                    </div>
                    <div class="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div class="text-center text-white"><a href="#footer" onclick="agregado_al_carro(${id})" "id="agregar_al_carro" class="btn btn-outline-light mt-auto">Agregar al <i class="bi bi-cart2"></i></a></div>
                    </div> 
                </div>
            `
            loadProdFilt(template , categoria)
        }
    }
    // template diseños filtrados 
    const loadDisFiltrado = (filtrar) => {
        for (let producto of filtrar) 
        {
            const {img, nombre, precio, id, diseño} = producto
            let template = `
                <div class="card h-100 mx-auto mb-3" style="background: rgb(0,0,0,0.5)">
                    <img class="card-img mb-0" src="${img}"/>
                    <div class="card-body p-0">
                        <div class="text-center">
                            <p class="name" style="color: white;">${nombre} - <span class="price" id="precio" style="color: white;">$${precio}</span></p>
                        </div>
                    </div>
                    <div class="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div class="text-center text-white"><a href="#footer" onclick="agregado_al_carro(${id})" "id="agregar_al_carro" class="btn btn-outline-light mt-auto">Agregar al <i class="bi bi-cart2"></i></a></div>
                    </div> 
                </div>
            `
            loadDisFilt(template , diseño)
        }
    }
    // template precios filtrados 
    const loadPriceFiltrado = (filtrar) => {
        console.log(filtrar)
        for (let producto of filtrar) 
        {
            const {img, nombre, precio, id, valor} = producto
            let template = `
                <div class="card h-100 mx-auto mb-3" style="background: rgb(0,0,0,0.5)">
                    <img class="card-img mb-0" src="${img}"/>
                    <div class="card-body p-0">
                        <div class="text-center">
                            <p class="name" style="color: white;">${nombre} - <span class="price" id="precio" style="color: white;">$${precio}</span></p>
                        </div>
                    </div>
                    <div class="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div class="text-center text-white"><a href="#footer" onclick="agregado_al_carro(${id})" "id="agregar_al_carro" class="btn btn-outline-light mt-auto">Agregar al <i class="bi bi-cart2"></i></a></div>
                    </div> 
                </div>
            `
            loadPriceFilt(template , valor)
        }
    }
    const loadProdFilt = (card , categoria) => {
        if (categoria == "vajilla") {
            title2.className = "visually-hidden"
            cartas2.innerHTML = ""
            title3.className = "visually-hidden"
            cartas3.innerHTML = ""
            cartas1.innerHTML += card
        }
        else if (categoria == "cocina") {
            title1.className = "visually-hidden"
            cartas1.innerHTML = ""
            title3.className = "visually-hidden"
            cartas3.innerHTML = ""
            cartas2.innerHTML += card
        }
        else if (categoria == "mates") {
            title1.className = "visually-hidden"
            cartas1.innerHTML = ""
            title2.className = "visually-hidden"
            cartas2.innerHTML = ""
            cartas3.innerHTML += card
        }
    }
    const loadDisFilt = (card , diseño) => {
        if (diseño == "floreado") {
            title5.className = "visually-hidden"
            cartas5.innerHTML = ""
            title6.className = "visually-hidden"
            cartas6.innerHTML = ""
            cartas4.innerHTML += card
        }
        else if (diseño == "bw") {
            title4.className = "visually-hidden"
            cartas4.innerHTML = ""
            title6.className = "visually-hidden"
            cartas6.innerHTML = ""
            cartas5.innerHTML += card
        }
        else if (diseño == "lunar") {
            title4.className = "visually-hidden"
            cartas4.innerHTML = ""
            title5.className = "visually-hidden"
            cartas5.innerHTML = ""
            cartas6.innerHTML += card
        }
    }
    const loadPriceFilt = (card , num) => {
        if (num == "1") {
            title8.className = "visually-hidden"
            cartas8.innerHTML = ""
            title9.className = "visually-hidden"
            cartas9.innerHTML = ""
            cartas7.innerHTML += card
        }
        else if (num == "2") {
            title7.className = "visually-hidden"
            cartas7.innerHTML = ""
            title9.className = "visually-hidden"
            cartas9.innerHTML = ""
            cartas8.innerHTML += card
        }
        else if (num == "3") {
            title7.className = "visually-hidden"
            cartas7.innerHTML = ""
            title8.className = "visually-hidden"
            cartas8.innerHTML = ""
            cartas9.innerHTML += card
        }
    }
    restablecer.addEventListener("click" , refrescar)
}
// refrescar
const refrescar = () => {
    setTimeout(() => {
        reload_page() 
    }, 0); 
}

const reload_page = () => {
    location.reload()
} 

const carrito = []
let numero = 1

// carrito
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
                    let badge = document.querySelector("#badge")
                    badge.className = "p0 m0"
                    let carro = document.getElementById("carro")
                    carro.className = "d-flex flex-column align-items-center justify-content-center my-4"
                    let carroVacio = document.getElementById("carroVacio")
                    carroVacio.innerText = `Agregar al carrito:`
                    let carroProductos = document.getElementById("compras")
                    carroProductos.innerHTML += `
                        <div name="ventana" class="container btn m-2 p-2 d-flex flex-row justify-content-between align-items-center" style="background-color: rgba(255,255,255);">
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

                        //remove
                        let badge = document.querySelector("#badge")
                        badge.className = "visually-hidden"

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

// carga de página
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



