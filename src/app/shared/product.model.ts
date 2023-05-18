export class Product {
    public name: string;
    public image: string;
    public description: string;
    public price: string;
    public id: number

    constructor(name: string, desc: string, image: string, price: string, id: number ){
        this.name = name;
        this.image = image;
        this.description = desc;
        this.price = price;
        this.id = id;
    }
}