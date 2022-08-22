"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts();
result = _productService.getById(2);
var p = new Product_1.Product("IPhone 12 mini", "Telefon", 1980);
/*
p.name = "IPhone 12 mini";
p.price = 1980;
p.category = "Telefon";*/
_productService.saveProduct(p);
console.log("id: ".concat(p.id));
