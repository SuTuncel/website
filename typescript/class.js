var Taxi = /** @class */ (function () {
    // sadeceye taksiye olan özellikler eklenebilir
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this._location.x, " Y:").concat(this._location.y, " dan X:").concat(point.x, " Y:").concat(point.y, " a konumuna gidiyor..."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('coordinates cannot be negative numbers');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Taxi.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
/*class Bus implements Vehicle {
    // sadece otobüse özel özellikler eklenebilir
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`Otobüs X: ${point.x} Y:${point.y} konumuna gidiyor...`);
    }
}*/
var taxi_1 = new Taxi({ x: 2, y: 1 }, 'yellow');
// let taxi_1 = new Taxi(); şeklinde de yazılabiliyor
taxi_1.travelTo({ x: 1, y: 2 });
var currloc = taxi_1.location; // property şekilde ulaşmak
//taxi_1.currentLocation = {x:2, y:1};
//console.log(taxi_1.currentLocation.x)
