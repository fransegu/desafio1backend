class ProductManager {
    constructor() {
        this.products = []
    }
    //Funcion addProduct
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Debes completar todos los campos')
            return
        } else
        //code != code =>
        {
            const codeExistente = this.products.find(el => el.code == code)
            if (!codeExistente) 
            { const producto = {
                    id: !this.products.length ? 1 : this.products[this.products.length - 1].id + 1,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                return this.products.push(producto)
                //code == code =>
            } else {
                console.error(`El código del producto llamado ${code} ya existe`)
                return
            }
        }
    }
    //Query products
    getProducts() { return this.products }
    //Buscar por ID
    getProductById(x) {
        const idBuscado = this.products.find(el => el.id == x);
        if (idBuscado) {
            return idBuscado
        } else { 
            console.error("Not Found")
            return
        }
    }

}
const producto = new ProductManager();

//Insertar productos:
producto.addProduct('Remera verde', 'Ropa', 500, 'https://www.example.com', 'Code1', 14550);
producto.addProduct('Remera roja', 'Ropa', 3000, 'https://www.example.com', 'Code2', 15400);
producto.addProduct('Riñonera gris', 'Accesorios', 750, 'https://www.example.com', 'Code4', 9200);

//Ver cuantos productos se agregaron:
console.log('Se agregaron '+producto.getProducts().length+' productos');

//Insertar producto con datos incompletos y error:
producto.addProduct('Remera con datos incompletos', 'Ropa', 'https://www.example.com', 'Code0', 14550);

//Query de productos:
console.log(producto.getProducts());

//addProduct con un code ya existente:
producto.addProduct('Gorra negra', 'Accesorios', 750, 'https://www.example.com', 'Code1', 12000);

//productoid == id (encontrado):
console.log(producto.getProductById(3));

//productoid == id (no encontrado):
console.log(producto.getProductById(5));