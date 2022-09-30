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

function coinCombo(cents) {

  let quart = 0
  let dime = 0;
  let nick = 0;
  let penny = 0;

  if (cents >= 25) {
    quart = Math.floor(cents / 25);
    cents = cents - (25 * quart);
  }
  if (cents >= 10) {
    dime = Math.floor(cents / 10);
    cents = cents - (dime * 10);
  }
  if (cents >= 5) {
    nick = Math.floor(cents / 5);
    cents = cents - (nick * 5);
  }
  if (cents >= 0) {
    penny = cents;
  }
  return [penny, nick, dime, quart]
}

function noSpace(x) {

    return x.replace(/\s+/g, '');
}

// vowels = [A,E,I,O,U]
// IF x does not contain A, RETURN vowels[0]
// IF x does not contain E, RETURN vowels[1]
// IF x does not contain I, RETURN vowels[2]
// IF x does not contain O, RETURN vowels[3]
// IF x does not contain U, RETURN vowels[4]

function absentVowel(x){
  
    if (x.includes('a')===false) {
      return 0
    } else if (x.includes('e')===false) {
      return 1
    } else if (x.includes('i')===false) {
      return 2 
    } else if (x.includes('o')===false) {
      return 3
    } else if (x.includes('u')===false) {
      return 4
    }
    
  }

//   find the index of the letter it is searching for - str.indexOf(letter),
// replace index+1 with toLocaleUpperCase
// find next index of letter starting from index + 1.
// repeat for the length of the string

  function makeEveryLetterAfterXCaps(str, letter) {
    // enter solution here
    let  newStr = '';
    let num = 0;
    // for (i = 0; i <= str.length; i++) {
    let replaceIndex = (str.indexOf(letter, num) + 1);
    console.log(replaceIndex);
    let newLetter = str.substr(replaceIndex,replaceIndex + 1);
    console.log(newLetter);
    newStr = str.replace(newLetter, newLetter.toUpperCase());
    num += replaceIndex;
    // }

    console.log(newStr);
    
    }


// given an array of multiple dimensions, return the element of the given index
// have no idea on this one, will come back to it
function getElement(array, indexes) {
  for (i = 0; i <= array.length; i++ ){
    if (i === indexes) {
      return array[indexes];
    }
  }

}