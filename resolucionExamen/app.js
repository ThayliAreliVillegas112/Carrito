console.log("hola recupera");
const btnAdd = document.getElementById('btnAdd');
const btnClose = document.getElementById('btnClose');

const inputName = document.getElementById('inputName');
const inputAmount = document.getElementById('inputCantidad');
const inputPrice = document.getElementById('inputPrice');

const spanSubtotal = document.getElementById('spanSubtotal');
const spanIva = document.getElementById('spanIva');
const spanTotal = document.getElementById('spanTotal');



const shopCar = {
    folio: '',
    total:0,
    subtotal:0,
    iva:0,
    products: [],
    cerrar:function(){
        this.products.forEach((product)=>{
            this.subtotal+=product.total();
        });
        console.log("el subtotal es de " +this.subtotal);
        this.iva = this.subtotal*0.16;
        console.log("El total a pagar de IVA es: " +this.iva);
        this.total = this.subtotal+this.iva;
        console.log("El total a pagar es : "+this.total);
    }
}

btnAdd.addEventListener('click', ()=>{
    //el producto solo vive dentro de esta función
    const product = {
        name: inputName.value,
        amount: inputAmount.value,
        price: inputPrice.value,
        total: function(){
            return this.amount*this.price;
        }
    }

    shopCar.products.push(product);
    console.log(shopCar.products);
});

btnClose.addEventListener('click', ()=>{
    shopCar.cerrar();
    spanSubtotal.innerText="$"+shopCar.subtotal;
    spanIva.innerText="$"+shopCar.iva;
    spanTotal.innerText="$"+shopCar.total;
});


