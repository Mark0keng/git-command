function changeVocals(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "i") {
      result += "j";
    } else if (str[i] === "e") {
      result += "f";
    } else if (str[i] === "u") {
      result += "v";
    } else if (str[i] === "o") {
      result += "p";
    } else if (str[i] === "A") {
      result += "B";
    } else if (str[i] === "I") {
      result += "J";
    } else if (str[i] === "E") {
      result += "F";
    } else if (str[i] === "U") {
      result += "V";
    } else if (str[i] === "O") {
      result += "P";
    } else {
      result += str[i];
    }
  }

  return result;
}

function reverseWord(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function setLowerUpperCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result += String.fromCharCode(str[i].charCodeAt(0) - 32);
    } else if (str[i] >= "A" && str[i] <= "Z") {
      result += String.fromCharCode(str[i].charCodeAt(0) + 32);
    } else {
      result += str[i];
    }
  }

  return result;
}

function removeSpaces(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
}

function passwordGenerator(name) {
  if (name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";

  name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name);
  name = removeSpaces(name);

  return name;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
