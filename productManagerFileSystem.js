
const { promises: fs } = require('fs')

   
class ProductManagerFileSystem {

    //Constructor
    constructor(fileName) {
            this.path = `./${fileName}.json`
            console.log(this.path)
        }
      
    //Función para buscar TODOS los productos    
     async  getProducts(){
        try {
           const data = await fs.readFile(this.path)
           const products = JSON.parse(data)
           console.log(products)
           return products
        }
        catch(error) {
            console.log('ERROR getProducts ===> ' + error.message)
        }

    }

     //Función para buscar un producto por ID    
    async getProductsById(id) {
            try {
               
                const  productsData = await this.getProducts()
                const prodById = productsData.find(obj => obj.id === id)

                console.log('------------------ FILTRANDO POR UN UNICO ID ------------------------------------------------------------')
                console.log(prodById)
                if (!prodById) {
                  return ' VALIDACION: EL PRODUCTO NO EXISTE !!!'
                }
              return prodById     
            }
            catch (error) {
                console.log('ERROR getProductsById ===> ' + error.message)
            }
        }
      
    //Función para AGREGAR un nuevo producto   
       async addProducts(product){
            try {
                console.log(product)
                
                if ( !product.name || !product.price || !product.category || !product.thumbnail || !product.stock || !product.code)
                   {
                    
                        return 'VALIDACION: - ERROR : TODOS LOS CAMPOS SON REQUERIDOS -----------------------'
                    }
                    
                    const  productsData = await this.getProducts()
                    const prod = productsData.find(prod => prod.code === product.code)                    
                    if( prod ) {
                        return 'ERROR: NO SE PUEDE REPETIR CODIGO'
                     }
                     if (!productsData){
                        return productsData.push({...product, id:1})
                          
                      }
                     
                     productsData.push({...product, id:productsData.length+1})
                     console.log(' ---> Agregando el producto ')
                     //console.log(productsData)
                     console.log(' --------- AGREGANDO EL PRODUCTO AL ARCHIVO')
                     const contenidoStr = JSON.stringify(productsData, null, 2)
                     console.log(contenidoStr)
                     await fs.writeFile(this.path, contenidoStr)

                     return(' ----------PRODUCTO AGREGADO -------------------')          
                

            }
            catch (error) {
                console.log('ERROR addProducts ===> ' + error.message)
            }
                   
                 
        }

        //Función para ACTUALIZAR los datos de un Producto pasando un Id y los campos modificados pd-->esta fue la que más me costó ;)
          async updateProductById(id, newData) {
            try {
              
              const data = await  this.getProducts()  
              const index = data.findIndex(obj => obj.id === id)
              console.log(index)
              
              const {name, price,category,stock} = newData;

               //console.log(name)
               //console.log(price)
               //console.log(data[index])
              // console.log(data.products[index].name)
               data[index].name = name
               data[index].price = price
               data[index].category = category
               data[index].stock = stock
               console.log(data[index])
              
               
               await fs.writeFile(this.path, JSON.stringify(data,null,2));
              

              
            } catch (error) {
                console.log('ERROR updateProductById ===> ' + error.message)   
            }
          }
          

          //Función para BORRAR un Producto pasando un Id
          async deleteProductById(id) {
            try {
              
              const data = await  this.getProducts()  
              const index = data.findIndex(obj => obj.id === id)
              //console.log(index)
              //console.log(data.products[index])

              if  (index === -1) {
                console.log(' VALIDACION: NO SE PUEDE ELIMNAR EL PRODUCTO. NO EXISTE')
              } 
              else {
                data.splice(index, 1);
                const newProductsJSON = JSON.stringify(data,null,2)
                console.log(newProductsJSON)
                await fs.writeFile(this.path, newProductsJSON);

              }
            } catch (error) {
                console.log('ERROR deleteProductById ===> ' + error.message)     
            }
          }


   }


/*------------------------------ COMANDOS PARA EL TEST ESCENARIOS: PUEDE IR HABILITANDO 1X1------------------------------------------------------------*/
console.log('---------------------- Inicializando el Constructor basado en FileSystem------------------------------------------------------------')
const productos = new ProductManagerFileSystem('products')

/*
console.log('----------------TEST 1: getProducts : OBTENER TODOS los productos --------------------------------------')
console.log(productos.getProducts())
*/


/*
console.log('----------------TEST 2: getProductsById : Filtrando por un Id de Producto -----------------------')
console.log(productos.getProductsById(2))
*/


/*
console.log('----------------TEST 3: addProducts : Agregando un Nuevo Producto -------------------------------')
const NewProduct =  {


    name: 'Alimento Natural Gato Miau Miau',
    price: 500,
    category: 'gatos',
    thumbnail:'https://m.media-amazon.com/images/I/61UURZCFQnL._AC_SX679_.jpg',
    stock:15,
    code:'XYZ'

} 
console.log(productos.addProducts(NewProduct))
*/

/*
console.log('----------------TEST 4: updateProduct : Actualizando un PRODUCTO POR ID -------------------------------') 
const myUpdateProduct =  {
    
    name: 'Royal Canin Small Adult-UPDATED-VALUE-12092023',
    category: 'perritos-NEW-CATEGORY',
    price: 700,
    stock: 1000   

} 
console.log(productos.updateProductById(1,myUpdateProduct)) 
*/

/*
console.log('----------------TEST 5: BORRAR UN PRODUCTO POR ID -------------------------------') 
console.log(productos.deleteProductById(3))
*/


/*
console.log('----------------TEST 6: INTENTAR BORRAR UN PRODUCTO QUE NO EXISTE -------------------------------') 
console.log(productos.deleteProductById(20))
*/


//
//Nota: Estoy muy contenta que pude completar este entregable, me sacó canas ...pero investigando, volviendo a ver el video de las clases y a prueba y error
//ahora si me quedan más claros muchos conceptos. Cara de emocionada!!! :)
//ATT.PATRICIA OLIVARES 
//
