function stringToArray(string) {
  let result = [];
  let current = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
      customPush(result, current);
      current = [];
    } else {
      customPush(current, string[i]);
    }
  }

  if (current.length > 0) {
    customPush(result, current);
  }

  return result;
}

function customPush(array, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    array[array.length] = elements[i];
  }
  return array.length;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
