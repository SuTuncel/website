import { Taxi } from './Taxi';

export interface Point {
    x: number, 
    y: number
}

export interface Vehicle { 
    travelTo(point: Point): void;
}

let taxi = new Taxi({ x:2, y:5 }, 'red');

taxi.travelTo({ x:1, y:15});