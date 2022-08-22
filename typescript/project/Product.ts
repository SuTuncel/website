export class Product {
    constructor(private _name: string, 
                private _category: string,
                private _price: number,
                private _id?){}
    
    get id(){
        return this._id;
    }

    set id(value: number){
        if(value <= 0){
            throw new Error('ID CANNOT BE NEGATIVE');
        }

        this._id = value;
    }

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get category(){
        return this._category;
    }

    set category(value: string){
        this._category = value; 
    }

    get price(){
        return this._price;
    }

    set price(value: number){
        if(value <= 0){
            throw new Error('PRICE CANNOT BE NEGATIVE');
        }
        this._price = value;
    }
}