const dbConnection = require('./conn');

const getCartByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT
            *
        FROM carts
        WHERE carts.user_id = ?
        AND carts.cart_status = 1
        `
        
        dbConnection.query(query, [userId], (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const createNewCart = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `
        INSERT INTO carts (user_id, cart_date, cart_status)
        VALUES (?, NOW(), 1)
        `
        dbConnection.query(query, [userId], (err, results) => {
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        })

    })
}

const addToCart = (cartId, productId, quantity) => {
    return new Promise((resolve, reject) => {
        const query = `
        INSERT INTO cart_products (cart_id, product_id, cart_products_quantity)
        VALUES (?,?,?)`

        dbConnection.query(query, [cartId, productId, quantity], (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}


const getCartsInfo = (sortOrder) => {
    return new Promise((resolve, reject) => {

        if(sortOrder == 'DESC'){
            query = `
            SELECT 
                carts.cart_id,
                users.user_name,
                carts.cart_date
            FROM carts 
            JOIN users ON carts.user_id = users.user_id
            WHERE carts.cart_status = 1
            ORDER BY carts.cart_date DESC

        `} else {
            query = `
            SELECT 
                carts.cart_id,
                users.user_name,
                carts.cart_date
            FROM carts 
            JOIN users ON carts.user_id = users.user_id
            WHERE carts.cart_status = 1
            ORDER BY carts.cart_date ASC
        `}
        
        dbConnection.query(query, (err, results) => {
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

const getCartSumByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT 
            carts.cart_id,
            users.user_name,
            SUM(products.product_price * cart_products.cart_products_quantity) AS total_cart    
        FROM carts
        JOIN users ON carts.user_id = users.user_id
        JOIN cart_products ON carts.cart_id = cart_products.cart_id
        JOIN products ON cart_products.product_id = products.product_id
        WHERE carts.user_id = ? AND carts.cart_status = 1
        GROUP BY carts.cart_id
        `
        dbConnection.query(query, [userId], (err, results) =>{
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        })   
    })
}

const getProductsByCartId = (cartId) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                products.product_id,
                products.product_title,
                products.product_price,
                cart_products.cart_products_quantity
            FROM cart_products
            JOIN products ON cart_products.product_id = products.product_id
            WHERE cart_products.cart_id = ? 
        `;
        
        dbConnection.query(query, [cartId], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports = {
    getCartByUserId,
    getProductsByCartId,
    getCartsInfo,
    getCartSumByUserId,
    createNewCart,
    addToCart
}