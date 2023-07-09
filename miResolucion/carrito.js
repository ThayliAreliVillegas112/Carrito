// const producto = {
//     nombre: null,
//     precio: 0,
//     cantidad: 0,
//     calcularTotal: function() {
//       return this.precio * this.cantidad;
//     }
//   };

//   const carrito = {
//     productos: [],
//     folio: function(length) {
//       let result = '';
//       const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//       const charactersLength = characters.length;
//       let counter = 0;
//       while (counter < length) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         counter += 1;
//       }
//       this.folio(5);
//       return result;
//     },
//     subTotal: function() {
//       let subtotal = 0;
//       for (let i = 0; i < this.productos.length; i++) {
//         subtotal += this.productos[i].calcularTotal();
//       }
//       return subtotal;
//     },
//     calcularTotalConIVA: function() {
//       const subtotal = this.subTotal();
//       const iva = subtotal * 0.16;
//       return subtotal + iva;
//     },
//     cerrar: function() {
//       const subtotal = this.subTotal();
//       const total = this.calcularTotalConIVA();
//       document.getElementById('subtotal').textContent = `Subtotal del carrito: ${subtotal}`;
//       document.getElementById('total').textContent = `Total del carrito (+IVA): ${total}`;
//       // Código adicional para cerrar el carrito
//     }
//   };

//   function agregarProducto() {
//     const nombre = document.getElementById('nombre').value;
//     const precio = parseFloat(document.getElementById('precio').value);
//     const cantidad = parseInt(document.getElementById('cantidad').value);
  
//     const nuevoProducto = {
//       nombre: nombre,
//       precio: precio,
//       cantidad: cantidad,
//       calcularTotal: function() {
//         return this.precio * this.cantidad;
//       }
//     };
  
//     carrito.productos.push(Object.assign({}, nuevoProducto));
  
//     console.log("Producto agregado:");
//     console.log(nuevoProducto);
//     console.log("Productos en el carrito:");
//     console.log(carrito.productos);
//   }

//   function cerrarCarrito() {
//     carrito.cerrar();
//   }




const carrito = {
  productos: [],
  folio: "amhxsf",
  subTotal: function(){
    let subtotal = 0;
      for (let i = 0; i < this.productos.length; i++) {
        subtotal += this.productos[i].total();
      }
      return subtotal;
  },
  iva: function(){
    return this.subTotal()*0.16;
  },
  cerrar:function(){
    let sub = this.subTotal();
    let iva = this.iva();
    let total = this.subTotal()+ this.iva();
    document.getElementById('subtotal').textContent = `${sub}`;
    document.getElementById('iva').textContent = `${iva}`;
    document.getElementById('total').textContent = `${total}`;
  }
}

function agregar(){
  let nombre = document.getElementById('nombre').value;
  let precio = document.getElementById('precio').value;
  let cantidad = document.getElementById('cantidad').value;
  const producto ={
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    total:function(){
      let valor=this.precio*this.cantidad;
      return valor;
    }
  }

  carrito.productos.push(producto);
  //console.log("carrito:", JSON.stringify(carrito.productos));
  console.log(carrito.productos);

}

function cerrar(){
  carrito.cerrar();
  
}