function meleeRangedGrouping(str) {
  if (str.length === 0) {
    return [];
  }

  const heroes = customSplit(str, ",");
  const melee = [];
  const ranged = [];

  for (let i = 0; i < heroes.length; i++) {
    const [hero, type] = customSplit(heroes[i], "-");
    if (type === "Melee") {
      customPush(melee, hero);
    } else if (type === "Ranged") {
      customPush(ranged, hero);
    }
  }

  return [ranged, melee];
}

function customSplit(str, delimiter) {
  const result = [];
  let current = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      customPush(result, current);
      current = "";
    } else {
      current += str[i];
    }
  }

  if (current !== "") {
    customPush(result, current);
  }

  return result;
}

function customPush(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
