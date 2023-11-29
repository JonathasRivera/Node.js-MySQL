const cartData = require('../data/cart')

const getCartByUserId = async (userId) => {
    try {
        const cartInfo = cartData.getCartSumByUserId(userId);
        return cartInfo;
    } catch (error) {
        throw new Error("Erro ao consultar informações do carrinho deste usuário. Detalhes: " + error)
    }
}

const addProductToCart = (userId, productId, quantity) => {
    try {
        const activeCart = cartData.getCartByUserId(userId);

        if(activeCart.length > 0) {
            console.log('Usuário tem carrinho ativo, adicionando prods')
            const cartId = activeCart[0].cart_id;
            const result = cartData.addToCart(cartId, productId, quantity);
            return result;
        } else {
            console.log('Usuario não tem carrinho ativo. Criando carrinho e add prods')
            const newCartId = cartData.createNewCart(userId);
            console.log(newCartId)
            const result = cartData.addToCart(newCartId, productId, quantity)
            return result;
        }
    } catch (error) {
        throw new Error('Erro ao adicionar produto ao carrinho. Detalhes: ' + error)
    }
}

const getCartsInfo = async (sortOrder) => {
    try {
        const carts = cartData.getCartsInfo(sortOrder);
        return carts;
    } catch (error) {
        throw new Error('Erro ao obter carrinhos. Detalhes: ' + error)
    }
}

const getProductsByCartId = (cartId) => {
    try {
        const products = cartData.getProductsByCartId(cartId);
        return products;
    } catch (error) {
        throw new Error("Erro ao obter produtos do carrinho.  Detalhes: " + error)
    }
}

module.exports = {
    getCartByUserId,
    getProductsByCartId,
    getCartsInfo,
    addProductToCart
};