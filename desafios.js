// DESAFIO COMPLEMENTARIO: Agregar Arrays //

class Productos {
    constructor (nombre , precio , stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

let productos = []

let producto1 = new Productos ("Jarron" , 1500 , 30)
productos.push(producto1)
let producto2 = new Productos ("Vaso" , 800 , 60)
productos.push(producto2)
let producto3 = new Productos ("Botella" , 1000 , 40)
productos.push(producto3)
let producto4 = new Productos ("Fuente" , 2500 , 20)
productos.push(producto4)
let producto5 = new Productos ("Boul" , 1500 , 30)
productos.push(producto5)
let producto6 = new Productos ("Taza" , 900 , 40)
productos.push(producto6)
let producto7 = new Productos ("Tetera" , 2500 , 20)
productos.push(producto7)
let producto8 = new Productos ("Plato" , 1100 , 60)
productos.push(producto8)
let producto9 = new Productos ("Recipiente" , 1000 , 30)
productos.push(producto9)
let producto10 = new Productos ("Tazón" , 1500 , 35)
productos.push(producto10)

alert("Bienvenido a DECOVSR");
let compra = prompt("¿Desea realizar una compra?");
console.log(productos);
if (compra == "si"){
    document.write("El detalle de su compra es:" + "<br>" + "<br>" + " ");
    console.log("VENTA DEL DÍA:")
    console.log("<------------->")
    let ingreso_venta = [];
    let total = 0;
    for (let venta of productos) {
        let producto = venta.nombre;
        alert("Producto: " + producto + " - Precio: $" + venta.precio);
        compra = prompt("Desea comprar el producto " + venta.nombre + "?");
        let ingresos = 0;
        if (compra == "si" || compra == "Si" || compra == "SI"){
            let unidades = parseInt(prompt("Indique las unidades que desea comprar"));
            if (unidades > 1 & unidades <= venta.stock){
            alert("Se agregaron al carrito " + unidades + " unidades del producto " + venta.nombre + " por un total de: $" + (unidades * venta.precio));
            }
            else if (unidades == 1){
                alert("Se agregó al carrito " + unidades + " unidad del producto " + venta.nombre + " por un total de: $" + (unidades * venta.precio));
            }
            else if (unidades > venta.stock){
                alert("No es posible realizar esta venta de " + unidades + " unidades por falta de stock. Disculpe.");
                unidades = 0;
                producto = ( venta.nombre + " (no pudo realizare por falta de stock)")
            }
            ingresos = (parseInt(venta.precio) * unidades);
            let suma = ingresos;
            total = total + suma
            ingreso_venta.push(ingresos);
            document.write("Producto: " + producto + "<br>" + "Precio por unidad: $" + venta.precio + "<br>" + "Unidades: " + unidades + "<br>" + "Total: $" + ingresos + "<br>" + "<br>" + " ");
            console.log("Producto: " + producto);
            console.log("Precio: $" + parseInt(venta.precio));
            console.log("Unidades vendidas: " + unidades);
            console.log("Stock restante: " + (venta.stock - unidades));
            console.log("Ingresos: $" + ingresos);           
            console.log("<------------->");
            compra = prompt("Desea seguir comprando? SI o NO");
            /* let venta_delete = ingreso_venta.indexOf(0);
            ingreso_venta.splice( venta_delete , 1 , "No realizada por falta de stock"); */
            if (compra == "no" || compra == "No" || compra == "NO"){
                break;
            }
            else if (compra == "si" || compra == "Si" || compra == "SI"){
                alert("Siguiente producto");
            }
            else {
                alert("Responda únicamente SI o NO")
            }
        }
        else if (compra == "no" || compra == "No" || compra == "NO"){
            alert("Entendido! Siguiente producto");
        }
        else {
            alert("Responda únicamente SI o NO")
        }
    }
    console.log("El ingreso total del día por ventas es: $" + total);
    alert("Compra finalizada");
    console.log(ingreso_venta);
    document.write("TOTAL A PAGAR: $" + total + "<br>" + "<br>" + " ");
    document.write("Muchas gracias por su compra. Vuelva pronto!!!" + "<br>" + " ");
    document.write("(Si usted trabaja en la empresa, habra la consola)");
}
else if (compra == "no" || compra == "No" || compra == "NO"){
    alert("¡Regrese cuando quiera comprar algo!");
}
else {
    alert("Responda unicamente SI o NO")
}