function getAverage(a: number, b:number, c?): string{
    let total = a+b;
    let count = 2; 

    if (typeof c !== undefined) {
        total += c; 
        count++;
    }
    const result = total/count;
    return 'result: ' + result;
}

getAverage(10, 20, 30);
getAverage(10, 20);

// Farklı versiyonu

const getAverage2 = (...a: number[] ): string =>{ // dinamik ortalama alma
    let total = 0;
    let count = 0; 

    for(let i = 0; i < a.length ; i++){
        total += a[i]; 
        count++;
    }
    const result = total/count;
    return 'result: ' + result;
}
