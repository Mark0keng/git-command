function stringToArray(string) {
  let result = [];
  let current = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
      result.push(current);
      current = [];
    } else {
      current.push(string[i]);
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
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
