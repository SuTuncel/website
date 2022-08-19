import { Product } from './Product';
import { ProductService } from './ProductService';

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product();

p.name = "IPhone 12 mini";
p.price = 1980;
p.category = "Telefon";

_productService.saveProduct(p);
console.log(result);