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

var makeEveryLetterAfterXCaps = function (str, letter) {
  let strArr = str.split('')
      
      for (let i = 0; i < strArr.length; i++) {
      
        if (strArr[i-1] === letter) {
          console.log(strArr[i]);
          
          strArr[i] = strArr[i].toUpperCase();
        }
        }

        return strArr.join('')
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

   function longest(s1, s2) {
    // consolidate to one string
    let str = s1+s2;
    // split strings into 1 array
     let array1 = str.split('');
    let array2 = [];
  //  remove duplicates
    array1.forEach((char) => {
      if (!array2.includes(char)) {
        array2.push(char);
      }
    })
    // sorts alphabetically then converts back into a string
    console.log(array2);
    array2 = array2.sort();
    console.log(array2);
    return array2.join('');
  }


  function findOdd(A) {
    let arr = [];
    for (i = 0; i <= A.length; i++) {
     arr.push(A.filter(x => x==A[i]));
      console.log(arr[i].length);
      console.log(arr[i]);
      console.log(arr[i][0]);
      console.log(arr[i].length % 2 !== 0);
      if (arr[i].length % 2 !== 0) {
        console.log('found an odd');
        return arr[i][0];
       }
      }
  }


  decodeMorse = function(morseCode){
    let newArr;
    let morseArr = morseCode.split('   ');
    let word = '';
    let returnArray = [];
    
    morseArr.forEach((array) => {
     newArr = array.split(' ');
      newArr.forEach((char) => {
        console.log(char);
        word = MORSE_CODE[char];
        returnArray.push(word);
        console.log(returnArray)
        
      }); newArr = newArr.join(',');
          return newArr;
          
        
      })
    
    }


    var uniqueInOrder=function(iterable){
      //   a sentence is given in a string
      //   return a list of items in the same order, repeating the sequence as needed so no letters of same value touch
      let uniqOrder = [];
        iterable = iterable.split('')
        for (let i = 0; i <= iterable.length; i++) {
          console.log(i);
          console.log(iterable[i]);
          console.log(iterable[i-1]);
          console.log(iterable[i-1] !== iterable[i])
          if (iterable[i-1] !== iterable[i]) {
            uniqOrder.push(iterable[i])
          }
          }
          return uniqOrder
          }
      
          function duplicateCount(text){
            text = text.toLowerCase()
            console.log(text)
            let blankArr = [];
            let finalArr = [];
            let charArr = text.split('')
            let removed;
            for (let i = 0; i < charArr.length - 1; i++) {
               removed = charArr.splice(i, 1)

                if (charArr.includes(removed[0])) {
                    blankArr.push(removed[0])
                 }
                i -= 1
              }
              blankArr.forEach(char => {
                if (!finalArr.includes(char)) {
                  finalArr.push(char)
                }
              })
            console.log(blankArr)
             return finalArr.length
            }