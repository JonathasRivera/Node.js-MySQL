const dbConnection = require('./conn');

const getProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';

        dbConnection.query(query, (err, results) => {
            if(err){
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

const searchProducts = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products WHERE product_title LIKE ? OR product_description LIKE ?';
        const searchTermLike =  `%${searchTerm}%`;

        dbConnection.query(query, [searchTermLike, searchTermLike], (err, results) => {
            if(err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products WHERE product_id = ?';

        dbConnection.query(query, [productId], (err, result) => {
            if(err){
                reject(err)
            } else {
                if(result.length > 0){
                    resolve(result[0])
                } else {
                    resolve(null) 
                }
            }
        })

    })  
}

const getProductsWithCategories = () => {
    return new Promise((resolve, reject) => {
        const query = 
        `SELECT products.product_title, categories.category_name
        FROM products INNER JOIN categories 
        ON products.category_id = categories.category_id
        ORDER BY category_name;`

        dbConnection.query(query, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    });
}

const getProductsPaginated = (startIndex, pageSize) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products ORDER BY product_title LIMIT ?, ?';
        const values = [startIndex, pageSize];

        dbConnection.query(query, values, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteProductsByCategoryId = (category_id) => {
    return  new Promise((resolve, reject) => {
        const query = 'DELETE FROM products WHERE category_id = ?';
        
        dbConnection.query(query, [category_id], (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const createProduct = (
    product_title, 
    product_price,
    product_description,
    product_image,
    product_rate,
    product_count,
    category_id
) => {
    return new Promise((resolve, reject) => {
        const query = `
        INSERT INTO products (
            product_title, 
            product_price,
            product_description,
            product_image,
            product_rate,
            product_count,
            category_id
        ) VALUES (?,?,?,?,?,?,?)`;
        values = [
            product_title, 
            product_price,
            product_description,
            product_image,
            product_rate,
            product_count,
            category_id
        ];

        dbConnection.query(query, values, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    getProducts,
    getProductById,
    getProductsWithCategories,
    getProductsPaginated,
    deleteProductsByCategoryId,
    createProduct,
    searchProducts
}