"use strict";
// ürün listesi getiriyor 
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product("Samsung S5", "Telefon", 1000, 1), new Product_1.Product("Samsung S7", "Telefon", 1200, 2), new Product_1.Product("Xiaomi redmi 9s", "Telefon", 850, 3), new Product_1.Product("Xiaomi redmi 11 pro", "Telefon", 1100, 4), new Product_1.Product("IPhone 13 pro", "Telefon", 2000, 5), new Product_1.Product("IPhone 11", "Telefon", 1800, 6));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
