// ürün listesi getiriyor 

import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product("Samsung S5", "Telefon", 1000, 1),
            new Product("Samsung S7", "Telefon", 1200, 2),
            new Product("Xiaomi redmi 9s", "Telefon", 850, 3),
            new Product("Xiaomi redmi 11 pro", "Telefon", 1100, 4),
            new Product("IPhone 13 pro", "Telefon", 2000, 5),
            new Product("IPhone 11", "Telefon", 1800, 6)
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}
