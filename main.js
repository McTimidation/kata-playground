function getSum(a, b) {
    const list = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            list.push(i);
        }
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
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


function generateRange(min, max, step) {
    let range = [];
    for (let i = min; i <= max; i += step) {
        range.push(i);
    }
    return range;
}

function findLongest(str) {

    let spl = str.split(" ");
    let longest = 0;

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }
    return longest
}

// function coinCombo(cents) {

//     let cents = []

//     let quart = 0;
//     let dime = 0;
//     let nick = 0;
//     let penny = 0;

//     if (cents >= 25) {
//         quart = Math.floor(cents / 25);
//         cents = cents - (25 * quart);
//     }
//     if (cents >= 10) {
//         dime = Math.floor(cents / 10);
//         cents = cents - (dime * 10);
//     }
//     if (cents >= 5) {
//         nick = Math.floor(cents / 5);
//         cents = cents - (nick * 5);
//     }
//     if (cents >= 0) {
//         pennies = cents;
//     }
//     return [penny, dime, nick, quart]
// }

function noSpace(x) {

        return x.replace(/\s+/g,'');
}


