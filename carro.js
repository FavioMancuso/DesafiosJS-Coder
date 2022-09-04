const carrito = []

const indexOf = (index) => {
    const eliminar = carrito.indexOf(index)
    carrito.splice( eliminar , 1 , );
    console.log("Carrito: " , carrito);
    numero = numero - 1
    let numero_JSON = JSON.stringify(numero)
    localStorage.setItem("numero" , numero_JSON)
    let carrito_JSON = JSON.stringify(carrito)
    localStorage.setItem("carrito" , carrito_JSON)
}

const loadPage = () => 
{
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
            for (let producto of [(carrito[i])])
            {
                const {nombre, unidad, img, numero, precio} = producto
                let carroProductos = document.getElementById("export_carro")
                carroProductos.innerHTML += `
                    <div id="badge" class="container btn m-2 p-2 mt-2 mb-2 d-flex flex-row justify-content-between align-items-center" style="background-color: rgba(255,255,255);cursor: initial">
                        <img class="card-img" src="${img}" style="width: 4.5rem ; height: 6rem"/>     
                        <div class="btn">Producto: ${nombre}</div>
                        <div class="btn">Precio: $${precio}</div> 
                        <div class="btn">Unidades: ${unidad}</></div> 
                        <div class="btn" id="total">Total: $${precio * unidad}</div>
                        <div class="btn num" style="visibility: hidden;">${numero}</div>
                        <button onclick="skip(${numero})" class="skip buttons_borrar btn-close btn-danger" style="font-size:1.2rem; background-color: red"></button>   
                    </div>   
                `
                let carro = document.getElementById("carrobutton");
                let num = carrito.length;
                carro.innerText = num;
            }
        }
    }
}
loadPage()

function iniciarMap(){
    var coord = {lat:-34.7242466 ,lng:-58.2608255};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

const skip = (numero) => {
    let num = numero
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    }) 
    swalWithBootstrapButtons.fire({
        text: '¿Desea eliminar este prdoucto del carrito?',
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: 'Custom image',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
            )
            skip_producto(num)
            refrescar()
        }

        else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'Cancelado!',
                'Su producto se encuentra en el carrito.',
                'error'
            )
        }
    })
}

const skip_producto = (numero) => {
    const remove = () => {
        let index = numero
        return index
    }           
    remove() 
    function buscar_index(producto){   
        return producto.numero == remove()
    }
    let resultado_find = carrito.find(buscar_index);
    console.log("Se eliminó del carrito a: " , resultado_find);
    indexOf(resultado_find)
    let carro = document.getElementById("carrobutton");
    let num = carrito.length;
    carro.innerText = num;
    
}

const refrescar = () => {
    setTimeout(() => {
        reload_page() 
    }, 1200); 
}

const reload_page = () => {
    location.reload()
} 

