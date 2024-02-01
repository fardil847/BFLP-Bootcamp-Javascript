//--SECTION 1--//

// function angkaTerbanyak(arr) {
//   // muncul angka
//   console.log("DUAR");
//   var hitungAngka = {};
//   for (var i = 0; i < arr.length; i++) {
//     var angka =
//       typeof arr[i] === "string" ? angka + " ini string" : arr[i].toString();
//     console.log(angka);
//     if (angka in hitungAngka) {
//       hitungAngka[angka]++;
//     } else {
//       hitungAngka[angka] = 1;
//     }
//     // hitungAngka[angka] = (hitungAngka[angka] || 0) + 1;
//   }
//   // console.log(hitungAngka);
//   // angka jumlah terbanyak
//   var x;
//   var jumlahTerbanyak = 0;

//   for (var angka in hitungAngka) {
//     if (hitungAngka[angka] > jumlahTerbanyak) {
//       jumlahTerbanyak = hitungAngka[angka];
//       x = angka;
//     }
//   }

//   return {
//     angka: x,
//     jumlah: jumlahTerbanyak,
//   };
// }

// var arrayAngka = [1, 3, 4, 4, 4, 4, 4, 3, 2, 2, 4, 5, 5, 5, 7, "4"];
// var hasil = angkaTerbanyak(arrayAngka);
// console.log(`Angka terbanyak: ${hasil.angka}, Jumlah: ${hasil.jumlah}`);
// console.log("XX");

//--SECTION 2--//

// function angkaTerbanyak(arr) {
 
//   console.log("DUAR");
//     var angkaMuncul = arr.reduce((object, key) => {
//         var angka = typeof key === "string" ? key + " ini string" : key.toString();
//         if (angka in object) {
//           object[angka]++;
//         } else {
//           object[angka] = 1;
//         }
//         return object;
//     }, {});

//   var x;
//   var jumlahTerbanyak = 0;

//   for (var angka in angkaMuncul) {
//     if (angkaMuncul[angka] > jumlahTerbanyak) {
//       jumlahTerbanyak = angkaMuncul[angka];
//       x = angka;
//     }
//   }

//   return {
//     angka: x,
//     jumlah: jumlahTerbanyak,
//   };

// }

// var arrayAngka = [1, 3, 4, 4, 4, 4, 4, 3, 2, 2, 4, 5, 5, 5, 7, "4"];
// var hasil = angkaTerbanyak(arrayAngka);
// console.log(`Angka terbanyak: ${hasil.angka}, Jumlah: ${hasil.jumlah}`);
// console.log("XX");

//--SECTION 3--//
// const firstPromise= () => (new Promise ((resolve, reject) => {
//     setTimeout (() => {resolve(console.log('first Promise')), 1000});
// }))

// const secondPromise= () => (new Promise ((resolve, reject) => {
//     setTimeout (() => {resolve(console.log('second Promise')), 1000});
// }))

// const thirdPromise= () => (new Promise ((resolve, reject) => {
//     setTimeout (() => {resolve(console.log('third Promise')), 1000});
// }))


// async function asyncParalel(){
//     let a = firstPromise();
//     let b = secondPromise();
//     let c = thirdPromise();
//     console.log('done 1');

// }

// async function asyncSerial(){
//     let a = await firstPromise();
//     let b = await secondPromise();
//     let c = await thirdPromise();
//     console.log('done 2');

// }

// asyncParalel(); 
// asyncSerial();

//JAVA SCRIPT LOGIC//
//--Exercise 8--//

// function listPrima(angkaPertama, angkaKedua){
//     if (angkaPertama<=1 || angkaKedua<=1 || angkaPertama>angkaKedua){
//         return "Invalid input";
//     }
//     let prima = []; 
//     for (let number=angkaPertama; number<=angkaKedua; number++){
//         let isPrima = true;
//     }

//     for (let i =2; i<=Math.sqrt(number); i++){
//         if(number % i===0){
//             isPrima=false;
//             break; 
//         }
//     }
//     if(isPrima){
//         prima.push(number);
//     }
//     return prima;  
// }
// console.log(listPrima(1,5));
// console.log(listPrima(5,10));
// console.log(listPrima(10,20));

//JAVA SCRIPT REVIEW//
//--Exercises 1--//

const buah = ["jeruk", "mangga", "apel", "leci","pisang"]
// Tampilkan isi semua elemen array //
console.log("Array awal: ", buah);
// Tambah 1 buah
buah.push("melon");
console.log("Array setelah tambah kiwi: ",buah);
// Edit atau ubah satu buah
buah[2] = "jambu";
console.log("Array setelah edit satu buah", buah);
// Kurangi satu buah terakhir 
buah.pop();
console.log("Array setelah hapus 1 buah terakhir", buah);



//--Exercises 2--//
let infoPersonal = {
    nama_depan: "Farah",
    nama_belakang: "Anastasia",
    hobi: ["Membaca", "Menonton", "Travelling"],
    angka_favorit: 9,
    memakai_kacamata: true
};

//Tampilkan setiap property
console.log("Objek awal:", infoPersonal);
//Cetak nama lengkap
console.log("Nama lengkap:", infoPersonal.nama_depan + " "+infoPersonal.nama_belakang);
//Ubah angka favorit jadi 8
infoPersonal.angka_favorit=8;
console.log("Angka favorit setelah berubah: ",infoPersonal.angka_favorit);
//Tambah satu hobi "coding"
infoPersonal.hobi.push("Coding");
console.log("Hobi setelah ditambah:",infoPersonal);
//Tambah property "lulusan"
infoPersonal.lulusan="Hactive8";
console.log("Setelah property ditambah: ",infoPersonal);
//Cetak semua hobi dengan loop
console.log("Hobi: ");
for (let i=0; i<infoPersonal.hobi.length; i++){
    console.log(infoPersonal.hobi[i]);
}
//Cetak semua key
console.log("Keys: ", Object.keys(infoPersonal));
console.log("Values:", Object.values(infoPersonal));
//Cetak semua property dengan loop format key:values
console.log("Property dan Values: ");
for(let key in infoPersonal){
    console.log(key + " : " + infoPersonal[key]
    )};


//--Exercises 3--//
function cetakdateNow(){
    const dateNow = new Date();
    console.log("Tanggal sekarang: ", dateNow.toLocaleDateString());
}
cetakdateNow();

//--Exercises 4--//
function cekGanjilGenap(angka){
    //cek number atau NaN
    if(typeof angka !== 'number' || isNaN(angka)){
        return "Invalid Data";
    }
    //cek ganjil genap
    if(angka %2 === 0){
        return "Genap";
    }else{
        return "Ganjil";
    }
}

console.log("Angka 2:", cekGanjilGenap(2));
console.log("Angka 3:", cekGanjilGenap(3));
console.log("Angka 20:", cekGanjilGenap(20));
console.log("Angka 21:", cekGanjilGenap(21));

console.log("Data yang bukan angka:", cekGanjilGenap("Bukan Angka"));


//JAVA SCRIPT LOGIC//

//--Exercise 1--//
function compareNumbers(firstNumber, secondNumber){
    if(firstNumber<secondNumber){
        return true;
    }else if(firstNumber>secondNumber){
        return false;
    }else{
        return -1
    }
}
console.log(compareNumbers(5,8));
console.log(compareNumbers(5,3));
console.log(compareNumbers(4,4));
console.log(compareNumbers(3,3));
console.log(compareNumbers(17,2));


/--Exercise 2--//

function reverseString(text){
    //split untuk misah setiap karakter setiap elemen
    //reverse untuk membalik
    //join untuk gabung elemen
    return text.split('').reverse().join('');
}
console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
console.log(reverseString('I am a bookworm'));
console.log(reverseString('Coding is my hobby'));
console.log(reverseString('Super'));


//--Exercise 3--//

function urutHuruf(text){
 return text.split('').sort().join('');

}
console.log(urutHuruf("halo"))
console.log(urutHuruf("qwerty"))
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"))


///--Exercise 4--//
function isArithmeticProgression(numbers){
    //selisih kedua elemen
    const difference = numbers[1] - numbers[0];
    //cek elemen ketiga, dst
    for(let i = 2; i<numbers.length; i++){
        if(numbers[i] - numbers[i-1] !== difference){
            return false
        }
    }
    return true; 

}
console.log(isArithmeticProgression([1,2,3,4,5,6]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7,9]));


//--Exercise 5--//

function threeStepAB(text){
    //ubah menjadi lowercase
    const lowerCaseText = text.toLowerCase();
    //cek a dan b
    for (let i=0; i<lowerCaseText.length; i++){
        if(lowerCaseText[i]==='a'){
            for(let j=i+1; j<lowerCaseText.length; j++){
                if(lowerCaseText[j]==='b' && j-i===4){
                    return true;

                }
            }
          
        }
    }
    return false
}
console.log(threeStepAB('lane borrowed'));
console.log(threeStepAB('i am sick'));
console.log(threeStepAB('you are boring'));
console.log(threeStepAB('barbarian'));
console.log(threeStepAB('bacon dan meat'));

//--Exercise 6--//
function gcd(firstNumber, secondNumber){
    while (secondNumber !==0){
        let temp = secondNumber;
        secondNumber = firstNumber%secondNumber;
        firstNumber = temp;
    }
    //hitung FPB
    return Math.abs(firstNumber);
}
console.log(gcd(12,16));
console.log(gcd(50,40));
console.log(gcd(22,99));
console.log(gcd(24,36));
console.log(gcd(17,23));

//--Exercise 7--//
function isPrime (number){
    if (number<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(number); i++){
        if(number%i ===0){
            return false; 
        }
    }
    return true;
}
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));

//--Exercise 8--//

function listPrima(angkaPertama, angkaKedua) {
    if (angkaPertama <= 1 || angkaKedua <= 1 || angkaPertama > angkaKedua) {
      return "Invalid input";
    }
  
    let primes = [];
  
    for (let number = angkaPertama; number <= angkaKedua; number++) {
      let isPrima = true;
  
      // Mengecek apakah number adalah angka prima
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrima = false;
          break;
        }
      }
  
      // Jika number adalah angka prima, tambahkan ke dalam array primes
      if (isPrima) {
        primes.push(number);
      }
    }
  
    return primes;
  }
  
  // Contoh penggunaan fungsi listPrima
  console.log(listPrima(1, 5));    // [2, 3, 5]
  console.log(listPrima(5, 10));   // [5, 7]
  console.log(listPrima(10, 20));  // [11, 13, 17, 19]
  
  