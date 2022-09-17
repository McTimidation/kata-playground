function getSum(a,b) {
    const list = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            list.push(i);
        }
    } else if (b < a) {
        for (let i =b; i <= a; i++) {
            list.push(i);
        }
    } else {
        list.push(a);
    }
    
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;

    }


