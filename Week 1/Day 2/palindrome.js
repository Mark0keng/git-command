function palindrome(kata) {
  let left = 0;
  let right = kata.length - 1;

  while (left < right) {
    if (kata[left] !== kata[right]) return false;

    left++;
    right--;
  }

  return true;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
