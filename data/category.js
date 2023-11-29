const dbConnection = require('./conn');
const productData = require('./product');

const getCategories = (category_name) => {
    return new Promise((resolve, reject) => {        
        const query = "SELECT * FROM categories";

        dbConnection.query(query, (err, result) =>{
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}


const createCategory = (category_name) => {
    return new Promise((resolve, reject) => {

        console.log(category_name);

        const query = "INSERT INTO categories (category_name) VALUES (?)";

        dbConnection.query(query, [category_name], (err, result) =>{
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteCategory = (category_id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM categories WHERE category_id = ?";

        dbConnection.query(query, [category_id], (err, result) => {
            if(err) {
                reject(err)
            } else {
                if(result.affectedRows > 0){
                    productData.deleteProductsByCategoryId(category_id)
                    resolve(result)
                } else {
                    reject(new Error("Categoria não encontrada!"))
                }
            }
        })
    })
}

const categoriesOrderByName = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM categories ORDER BY category_name;'

        dbConnection.query(query, (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    createCategory,
    deleteCategory,
    getCategories,
    categoriesOrderByName
}