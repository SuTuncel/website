// ürün listesi getiriyor 

import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Telefon", 1000),
            new Product(2, "Samsung S7", "Telefon", 1200),
            new Product(3, "Xiaomi redmi 9s", "Telefon", 850),
            new Product(4, "Xiaomi redmi 11 pro", "Telefon", 1100),
            new Product(5, "IPhone 13 pro", "Telefon", 2000),
            new Product(6, "IPhone 11", "Telefon", 1800),
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}
