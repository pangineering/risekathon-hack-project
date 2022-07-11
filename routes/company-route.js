const express = require('express');

const {
    addShop,
    getAllShops,
    getShop,
    updateShop,
    deleteShop
   } = require('../controllers/shopController');

const routers = express.Router();

routers.post('/shop/new', addShop);

routers.get('/shop/list', getAllShops);

routers.get('/shop/:id', getShop);

routers.put('/shop/update/:id', updateShop);

routers.delete('/shop/delete/:id', deleteShop);

module.exports = {
    routes: routers
}