let a: number = 8; // tip ataması yapımı

let b: string; 
b = 'a';

let c: boolean; 

let d:any;

let e: number[] = [1, 2, 3];

let f: Array<number> = [1, 2, 3];

let g: any[] = [1, 'a', true];

let h: [string, number, boolean]; // tuple
h = ['a', 5, false];

const krediPayment = 0; 

const havalePayment = 1; 

const eftPayment = 2;

enum Payment {kredi = 0, havale = 1, kapidaodeme = 2, eft = 3};

let kredi = Payment.kredi; // 0 gelir gelecek değer

let havale = Payment.havale; // 1 gelir

let kapidaodeme = Payment.kapidaodeme;

