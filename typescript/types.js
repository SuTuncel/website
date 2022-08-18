var a = 8; // tip ataması yapımı
var b;
b = 'a';
var c;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, 'a', true];
var h; // tuple
h = ['a', 5, false];
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; // 0 gelir gelecek değer
var havale = Payment.havale; // 1 gelir
var kapidaodeme = Payment.kapidaodeme;
