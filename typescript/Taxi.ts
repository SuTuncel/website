import { Point } from './module';
import { Vehicle } from './module';

export class Taxi implements Vehicle {
    
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

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        console.log(`Bus going to...`);
    }
}
