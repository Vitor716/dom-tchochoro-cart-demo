import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()
export class ProductService{
    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product('Braveco', 'Antipulgas e Carrapatos Bravecto MSD para Cães de 20 a 40 kg', 'https://images.petz.com.br/fotos/1677767137914_mini.jpg', '304,90', 1),
        new Product('Braveco', 'Antipulgas e Carrapatos Bravecto MSD para Cães de 10 a 20 kg', 'https://images.petz.com.br/fotos/1677764858590_mini.jpg', '264,90', 2)
    ]

    getProducts(){
        return this.products.slice();
    }


    addProductsToCart(products: Product[]){
        this.products.push(...products);
    }
}