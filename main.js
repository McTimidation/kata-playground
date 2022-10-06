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
  let  newStr = str;
  let upLetter;
  let newStr1;
  let newStr2;
  let newStrX;

  for (i = 0; i < str.length; i++){
    if (str[i] === letter) {
      if(i === (str.length - 1)){
        return newStr;
      }
    
    newStrX = newStr.substring(0, i+2);
    console.log(`newStrX = ${newStrX}`)
    
    newStr2 = newStr.substring(i+2);
    console.log(`newStr2 = ${newStr2}`);

    let check = newStrX[i+1];

    console.log(`letter to change is ${check}`);
      
    if (newStrX[i] === newStrX[i].toUpperCase())  {
      console.log(`if statement = ${newStrX[i]}`);
    }
    upLetter = newStrX.slice(i+1).toUpperCase();
    console.log(`upLetter = ${upLetter}`);
    console.log(`${newStrX[i]}`)
      
    if (upLetter === newStr[i]){
      console.log(newStr[i]);
      upLetter = upLetter.toLowerCase();
    } 
      // lowercaseLet = newStrX[i].toLowerCase();
     
      // newStrX = newStrX.slice(0,i) + lowercaseLet;
      
    

    newStr1 = newStrX.slice(0, i+1);

    newStr = newStr1 + upLetter + newStr2;

    } console.log(`${newStr1}${upLetter}${newStr2}`)
  } return newStr;
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

// split string into new array of the words
// use sort method to sort by length of words
// will return the first index of the array, 
// which will be the length of the shortest word of s
function findShort(s){
  let newWord = s.split(' ');
  newWord.sort((a,b) => a.length - b.length);
  return newWord[0].length;
}

// given an array, return each item as a string that states that "{item} likes this"
//  if no items in the array, "no one likes this"
// if just two items "{item} and {item} like this""
//  if 3 ""{item}, {item}, and {item} like this"
//  > 3 ""{item}, {item}, and x others like this" x = array.length minus 2

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
    
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } 
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } 
    else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }  
      else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  }


  function highAndLow(numbers){
    // let string;
    let numArray = numbers.split(' ');
    numArray.forEach((item) => {
      Number(item);
      console.log(item);
    })
    numArray.sort((a,b) => {
      {return a - b}
      }); console.log(numArray)
   return `${numArray[numArray.length-1]} ${numArray[0]}`
     
  }
  
   
  function songDecoder(song){
    let dubArray = song.split('WUB');
     console.log(`original split: ${dubArray}`);
     let lyricArray = [];
     dubArray.forEach((lyric) => {
      if (lyric !== '') {
        lyricArray.push(lyric);
      }
     })
     return lyricArray.join(' ');
   }