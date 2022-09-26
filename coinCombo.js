// for an input of cents (ex. .85$), return output of minimum coins needed to make up that value

// numbers need to be in an array

// modulo operator needed to determine which coins to increment


function coinCombo(cents) {

    let quart = cents / 25;
    let dime = cents / 10;
    let nick = cents / 5;
    let penny = cents / 1;

    return [penny, nick, dime, quart]



}