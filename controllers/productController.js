const productData = require('../data/product')

const getProducts = async () => {
    const products = productData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error("Erro ao obter os produtos")
    }
}

const searchProducts = async (searchTerm) => {

    try {
        const products = productData.searchProducts(searchTerm)
        return products;

    } catch (error) {
        throw new Error ("Erro ao encontrar produtos! Detalhes: " + error)
    }
}

const getProductsById = async (productId) => {
    try {
        const product = productData.getProductById(productId)
        return product;

    } catch (error) {
        throw new Error("Erro ao obter o produto. Detalhes: " + error.message);
    }
}

const getProductsPaginated = async (page = 1, pageSize = 20) => {
    try {

        if(page === 0){
            page = 1;
        }

        const startIndex = (page - 1) * pageSize;

        const products = productData.getProductsPaginated(startIndex, pageSize)
        
        return products;

    } catch (error) {
        throw new Error("Erro ao obter produtos paginados! Detalhes: " + error.message)
    }
    

}

const getProductsWithCategories = async () => {
    try{
        const products = productData.getProductsWithCategories()
        return products;
    } catch (error) {
        throw new Error("Erro ao obter produtos com categorias. Detalhes: " + error.message)
    }
}

const createProduct = async (
    product_title, 
    product_price,
    product_description,
    product_image,
    product_rate,
    product_count,
    category_id
) => {
    try {
        product_rate = product_rate || 0;
        product_count = product_count || 0;

        const result = productData.createProduct(
            product_title, 
            product_price,
            product_description,
            product_image,
            product_rate,
            product_count,
            category_id
        );
        return result;
    } catch (error) {
        throw new Error("Erro ao criar o produto. Detalhes: " + error.message)
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsWithCategories,
    getProductsPaginated,
    createProduct,
    searchProducts
}