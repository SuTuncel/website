interface Point {
    x: number, 
    y: number
}

interface Vehicle { 
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // sadeceye taksiye olan özellikler eklenebilir
    constructor(private _location:Point, private _color:string){}

    travelTo(point: Point): void{
        console.log(`taksi X: ${this._location.x} Y:${this._location.y} dan X:${point.x} Y:${point.y} a konumuna gidiyor...`);
    }

    get location(){
        return this._location;
    }

    set location(value:Point){
        if (value.x < 0 || value.y < 0){
            throw new Error('coordinates cannot be negative numbers');
        }
        this._location = value;
    }

    get color(){
        return this._color;
    }

    set color(value: string){

        this._color = value; 

    }
}

/*class Bus implements Vehicle {
    // sadece otobüse özel özellikler eklenebilir
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`Otobüs X: ${point.x} Y:${point.y} konumuna gidiyor...`);
    }
}*/

let taxi_1: Taxi = new Taxi({x:2, y:1}, 'yellow');
// let taxi_1 = new Taxi(); şeklinde de yazılabiliyor

taxi_1.travelTo({x: 1, y: 2});

let currloc = taxi_1.location; // property şekilde ulaşmak

//taxi_1.currentLocation = {x:2, y:1};

//console.log(taxi_1.currentLocation.x)