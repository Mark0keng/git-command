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
      melee.push(hero);
    } else if (type === "Ranged") {
      ranged.push(hero);
    }
  }

  return [ranged, melee];
}

function customSplit(str, delimiter) {
  const result = [];
  let current = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      result.push(current);
      current = "";
    } else {
      current += str[i];
    }
  }

  if (current !== "") {
    result.push(current);
  }

  return result;
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
