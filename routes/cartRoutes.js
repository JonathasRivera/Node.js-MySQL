const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController')

router.post('/addProductToCart', (req, res) => {
    const {userId, productId, quantity} = req.body;
    cartController.addProductToCart(userId, productId, quantity)
    .then((result) => {
        res.send(result)
    }) 
    .catch((error) => {
        res.status(500).send('Erro ao adicionar o produto ao carrinho! Detalhes: ' + error)
    })
})

router.get('/cartsInfo/:sortOrder', (req, res) => {
    let sortOrder = req.params.sortOrder;
    sortOrder = sortOrder.toUpperCase();
    
    if(sortOrder == 'ASC' || sortOrder == 'DESC'){
        cartController.getCartsInfo(sortOrder)
        .then((results) => {
            res.json(results);
        })
        .catch((error) => {
            res.status(500).send('Erro ao obter carrinhos. Detalhes: ' + error);
        })
    } else {
        res.status(422).send('Parâmetro inválido. O parâmetro sortOrder deve ser ASC ou DESC.');
    }
})

router.get('/cartByUser/:userId', (req, res) =>{
    cartController.getCartByUserId(req.params.userId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.status(500).send('Erro ao obter carrinho do usuário. Detalhes: ' + error)
    })
})

router.get('/:cartId/products', (req, res) => {
    const cartId = req.params.cartId;
    cartController.getProductsByCartId(cartId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.status(500).send("Erro ao obter produtos do carrinho");
    })
})


module.exports = router;