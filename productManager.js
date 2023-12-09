class ProductManager {

    constructor(){
         this.products = [{
            id:'1',
            name: 'Royal Canin Small Adult',
            price: 300,
            category: 'perros',
            thumbnail:  'http://rockmastercoder.com/img/productos_perro_11.png',
            stock:5,
            code:'P1'
        
        },
        {
            id:'2',
            name: 'Royal Canin Large Adult',
            price: 250,
            category: 'perros',
            thumbnail:'http://rockmastercoder.com/img/productos_perro_2.png',
            stock:10,
            code:'P2'
        
        },
        {
            id:'3',
            name: 'Royal Canin Kitten',
            price: 200,
            category: 'gatos',
            thumbnail:'http://rockmastercoder.com/img/productos_gato_1.png',
            stock:8,
            code:'P3'
        
        },
        {
            id:'4',
            name: 'Placas Identificación',
            price: 100,
            category: 'accesorios',
            thumbnail:'http://rockmastercoder.com/img/productos_accesorios_1.png',
            stock:20,
            code:'P4'
        
        },
        {
            id:'5',
            name: 'Productos de Entrenamiento',
            price: 450,
            category: 'accesorios',
            thumbnail:'http://rockmastercoder.com/img/productos_accesorios_6.png',
            stock:18,
            code:'P5'
        
        },
        {
            id:'6',
            name: 'Suplementos Alimenticios',
            price: 285,
            category: 'suplementos',
            thumbnail:'http://rockmastercoder.com/img/productos_medicamentos_2.png',
            stock:20,
            code:'P6'
        
        }] 
    }

    addProducts(product){
        //validando campos
        if ( !product.name || !product.price || !product.category || !product.thumbnail || !product.stock || !product.code){
              return '--RETURN - ERROR : TODOS LOS CAMPOS SON REQUERIDOS -----------------------'
        }
        
        const prod = this.products.find( prod => prod.code === product.code)
        if( prod ) {
            return 'ERROR: NO SE PUEDE REPETIR CODIGO'
            
         }
            
         if (this.products.length === 0 ){
           return this.products.push({...product, id:1})
             
         }
        
        this.products.push({...product, id:this.products.length+1})
        console.log(' ---> Agregando el producto ')
        console.log(this.products)
        return(' ----------PRODUCTO AGREGADO -------------------')            
             
    }
    getProducts(){
        return this.products
    }
    getProductsById(id){
       const prodById = this.products.find(prod => prod.id === id)
       if (!prodById) {
         return ' EL PRODUCTO NO EXISTE !!!'
       }
     return prodById     
               
 
    }

   ///
   removeProducts(){
    this.products = []
    console.log(this.products)
}


}


// Esquema de Testing 
console.log('------------------ TESTEANDO ESCENARIOS ------------------------------------------------------------')
const productos = new ProductManager()
console.log('----------------Escenario 1: getProducts : Todos los productos --------------------------------------')
console.log(productos.getProducts())
console.log('----------------Escenario 2: getProductsById : Filtrando por un Id de Producto -----------------------')
console.log(productos.getProductsById('4'))
console.log('----------------Escenario 3: addProducts : Agregando un Nuevo Producto -------------------------------')
const NewProduct =  {
    id:'7',
    name: 'Alimento Natural Gato Miau Miau',
    price: 500,
    category: 'gatos',
    thumbnail:'http://rockmastercoder.com/img/productos_medicamentos_2.png',
    stock:15,
    code:'P7'

} 
console.log(productos.addProducts(NewProduct))
console.log('----------------Escenario 4: Validando un producto que realmente no Existe -----------------------')
console.log(productos.getProductsById('18'))
console.log('--------------- Escenario 5: Borrando productos para agregar el ID empezando en el 1 -----------------------')
console.log(productos.removeProducts())
const NewProduct2 =  {
    
    name: 'Vitamina C para Perros',
    price: 150,
    category: 'perros',
    thumbnail:'img',
    stock:45,
    code:'P1'

} 
console.log(productos.addProducts(NewProduct2))
const NewProduct3 =  {
    
    name: 'Cama Relajante',
    price: 500,
    category: 'perros',
    thumbnail:'img',
    stock:10,
    code:'P2'

} 
console.log(productos.addProducts(NewProduct3))
const NewProduct4 =  {
    
    name: 'Spray Entrenador Repelente ',
    price: 320,
    category: 'accesorios',
    thumbnail:'img',
    stock:20,
    code:'P3'

} 
console.log(productos.addProducts(NewProduct4))