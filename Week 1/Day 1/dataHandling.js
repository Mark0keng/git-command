var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(datas) {
  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < datas[i].length; j++) {
      j == 0 ? console.log("Nomor ID : " + datas[i][j]) : null;
      j == 1 ? console.log("Nama Lengkap : " + datas[i][j]) : null;
      j == 3 ? console.log("TTL : " + datas[i][j]) : null;
      j == 4 ? console.log("Hobi : " + datas[i][j] + "\n") : null;
    }
  }
}

// TEST CASES
console.log(dataHandling(input));
