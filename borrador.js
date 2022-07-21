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
            id: 1,
            precio: 800,
            stock: 20,
            img: './img/WhatsApp Image 2022-06-03 at 6.12.15 PM.jpeg',
            categoria: 'vajilla'
        }
    }

    productos.forEach(element => {
            console.log(element.producto1)
        });

productos.producto1.unidad = 12
productos.producto2.unidad = 22
productos.producto3.unidad = 42

console.log(productos)