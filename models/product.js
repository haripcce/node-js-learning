const fs = require('fs');
const rootDir = require('../util/path');
const path = require('path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (error, filContent) => {
        if (error) {
            return cb([]);
        }
        cb(JSON.parse(filContent));
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                err && console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}