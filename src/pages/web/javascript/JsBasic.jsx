import { Acc } from "../../../components/Components";

const JsKeywords = () => (
  <div>
    <b>Definition</b> Javascript is a lightweight interpreted (just-in-time compiled) programming language with first-class
    function. (mdn) <br />
    here is an explanation from chatgpt <br />
    interpreted programming language is a type of programming langauge. <br />
    first-class function is function that is treated like any other variable, this means the function can be: assigned to a
    variable, passed as an argument, returned from a function, stored in data structures like arrays and objects <br />
    <b>history</b> Javascript was invented by brendan eich in 1995 and become an ECMA standard in 1997
    <b>history of ECMAScript</b>
    <h2>JsBasic</h2>
    <p>
      Key Words: data types, variable, let, const, var, falsy, truthy, computer language, human lang, programming lang,
      unicode, excape character, regex, compiler, interpreter, functions, hof, callback, scope, closure, this.
    </p>
    <p>
      functions adalah blok kode yang dirancang untuk melakukan tugas tertentu, dan dapat dipanggil untuk dieksekusi kapan
      saja selama masa hidup program.
    </p>
  </div>
);

const JsDataTypes = () => (
  <pre className="text-sm">
    {`
// TIPE DATA
// tipe data primitif
let num = 10; // number
let str = "a"; // string
let bool = true; // boolean (ini adalah bug js)
let nul = null; // object (ini adalah bug js)
let und; // undefined
let simbol = Symbol("unique"); // symbol
// tipe data komposit
let obj = { id: 1, name: "ahamd" }; // object
let arr = ["ahmad", "abdul"]; // object (array adalah object)
let fn = function () {console.log("halo");}; // function
console.log(typeof num, "dst")
`}
  </pre>
);

const JsFalsyTruthy = () => (
  <pre className="text-sm">
    {`
// FALSY & TRUTHY
falsy: false 0 -0 (nol negatif) 0n (bigint nol) "" '' null undefined NaN
  bigint not adalah bilangan bulat besar yang melebihi batas angka yang dapat diwakili tipe data Number
  nol negatif dalam operasi aritmatika 1/0 hasilnya infinity, tapi 1/-0 hasilnya -infinity artinya pelakuakn 0 dan -0 berbeda.
0 ? console.log(true) : console.log(false) // false
10 ? console.log(true) : console.log(false) // true
  `}
  </pre>
);

const JsLooping = () => (
  <pre className="text-sm">{`
// LOOPING (for, while, do while, break, continue, switch case, for of, for in)
for (let i = 0; i < 3; i++) console.log(i); // 0,1,2
let i = 0;
while (i < 3) { console.log(i); i++ } // 0,1,2 // jika i = 5 maka tidak ada output
let j = 0;
do { console.log(j); j++ } while (j < 3); // 0,1,2 // jika j = 5 maka outputnya 5
for (let i = 0; i < 5; i++) { if (i > 3) break; console.log(i) } // 0,1,2,3
for (let i = 0; i < 5; i++) { if (i % 2) continue; console.log(i) } // 0,2,4
const n = 4;
switch (n) {
  case 1: case 2: case 3: console.log("sangat kurang"); break;
  case 4: console.log("sedikit lagi"); break;
  case 5: console.log("betul"); break;
  default: console.log("salah atau bukan angka");
} // sedikit lagi // jika n = 1 | 2 | 3 maka "sangat kurang" jikan n = 5 maka "betul" selain itu "salah atau bukan angka"
const str = "aku";
const arr = ["a", "b", "c"];
const obj = { name: "ahmad", age: 10 };
for (let i of str) console.log(i); // a,k,u
for (let i in str) console.log(i); // 0,1,2
for (let i of arr) console.log(i, arr[i]); // a undefined, b undefined, c undefined
for (let i in arr) console.log(i, arr[i]); // 0 a, 1 b, 2 c
for (let i in obj) console.log(i, obj[i]); // name ahmad, age 10
    `}</pre>
);

const JsNumberMath = () => (
  <pre className="text-sm">{`
// NUMBER & MATH
1. basis 2-10 (binary, hexadecimal, octal, bigint)
2. Number.EPSILON .MAX_VALUE .MIN_VALUE .MAX_SAFE_INTEGER .MIN_SAFE_INTEGER .POSITIVE_INFINITY .NEGATIVE_INFIITY
3. Number.isFinite(val) .isInteger(val) .isNaN(val) .isSaveInteger(val)
4. Number.parseInt(string,radix)
5. Number.prototype.name=val
6. num.toExponential(int=0) .toFixed(x=0) .toPrecision(x=0) .valueOf() .toString(radix=0)
console.log(Number.isFinite(0));
1. Math.abs(-num) .cbrt(num**3) .sqrt(num**2) .ceil(float) .floor(float) .round(num) .sign(num),
2. Math.max(num1,num2,num-n) .min(num1,num-n) .pow(base,exponent)\n3.3 Math.round(float) .trunc(num|-num) .sign(num|-num|0),
3. Math.max.apply(null, [arr]),
4. Math.E .PI .SQRT2 .SQRT1_2,
5. Math.random()
    `}</pre>
);

const JsString = () => (
  <pre className="text-sm">
    {`
// STRING
const str = "hello world";
const strTrim = "   hello world   "
let res;
console.log(res);
1. return number
res = str.length; // 21
res = str.indexOf("d"); // 3 // .indexOf(searchVal, start = 0)
res = str.indexOf("d", 5); // 13
res = str.lastIndexOf("d"); // 13 // .lastIndexOf(searchVa, start = 0)
res = str.search("d"); // 3 // .search(searchVal = str|regex)
res = str.search("z"); // -1
res = str.match(/d/g); // ['d', 'd']
2. return boolean
res = str.includes("a"); // true // .includes(searchVal, start = 0)
res = str.includes("a", 3); // false
res = str.startsWith("a"); // true // .startsWith(searchVal, start = 0)
res = str.endsWith("4"); // false // .endsWith(searchVal, start = 0)
3. return string
res = str[0]; // h // [num]
res = str[str.length - 1]; // d
res = str.charAt(0); // h // charAt(num)
res = str.replace("l", "m"); // hemlo world // .replace(searchVal = str|regex, newVal)
res = str.replaceAll("l", "m"); // hemmo wormd // .replace(searchVal = str|regex, newVal)
res = str.slice(0, 2); // he // .slice(start = 0, end = length)
res = str.slice(2); // llo world // sama dengan .slice(2, str.length)
res = str.slice(5, 3); // "" // start lebih besar dari end hasilnya ""
res = str.slice(-2); // ld
res = str.substring(0, 2); // he // .substring(start = 0, end = length)
res = str.substring(2); // llo world // sama dengan .substring(2, str.length)
res = str.substring(5, 3); // lo // start lebih besar dari end hasilnya .substring(3,5) ditukar
res = str.substring(-2); // hello world // menganggap index negatif sebagai 0;
// perbedaan slice dan substring:
// - index negatif: slice dapat menggunakan index negatif untuk menghitung dari akhir string, substring menganggap index negatif sebagai 0;
// - index yang diterima: slice tidak menukar start dengan end index, jika start lebih besar. substring menukarnya.
res = strTrim.trim(); // "hello world"
res = strTrim.trimStart(); // "hello world   " // bisa juga dengan .trimLeft()
res = strTrim.trimEnd(); // "   hello world" // bisa juga dengan .trimRight()
// jika spasi yang banya ada di tengah seperti 'hello   world' maka trim tidak bisa menanganinya
// maka gunakan konsep "regex" yang tidak akan dibahas di sini
res = str.toUpperCase(); // HELLO WORLD
res = str.toLowerCase(); // hello world
res = str.concat(" - ", str); // hello world - hello world
4. str to arr
res = str.split(" "); // ['hello', 'world'] // .split(separator, limit = lengt max)
res = str.match(/l/g); // ['l', 'l', 'l'] // .match(searchVal = str|regex)  
`}
  </pre>
);

const JsArray = () => (
  <pre className="text-sm">{`
// ARRAY
const arrInherit = ["a", "b", ["aa", "bb", ["aaa", "bbb"]]];
const arr = ["a", "b", "c"];
let res;
console.log(res);
0. proving array
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
1. get and change arr value
res = arrInherit.length; // 3
res = arrInherit[0]; // a
res = arrInherit[2]; // ["aa", "bb", ["aaa", "bbb"]]
res = arrInherit[2][2]; // ["aaa", "bbb"]
res = arrInherit[2][2][0]; // aaa
res = arrInherit.at(0); // a
arr[0] = "z"; console.log(arr); // ["z", "b", "c"]
2. arr to string
res = arr.join(" - "); // a - b - c
res = arr.toString(); // a,b,c
3. change old arr
arr.push("d", "n"); // ['a', 'b', 'c', 'd', 'n'] // .push(item1, item-n)
arr.pop(); // ['a', 'b']
arr.unshift("y", "z"); // ['y', 'z', 'a', 'b', 'c'] // .unshift(item1, item-n)
arr.shift(); // ['b', 'c']
console.log(arr)
4. splice (Modifies the original array and returns a new array containing the deleted elements.)
// .splice(start, deleteCount, item1, item-n)
// start: index di mana prubahan dimulai jika negatif akan dihitung dari akhir array
// deleteCount: jumlah element yang akan dihapus dari array asli, jika 0 tidak ada yang dihapus
// item1, item-n: element-element yang akan ditambah ke array dimulai dari start
// jika tidak ada element yang ditentukan, splice hanya menghapus element
const arr = ["a", "b", "c", "d", "e"];
let removed;
removed = arr.splice(1, 2); // (hapus element) mulai dari index 1, hapus 2 element
console.log(arr, removed); // ['a', 'd', 'e'], ['b', 'c]
removed = arr.splice(1, 0, "aa", "ab"); // (tambah element) mulai dari index 1, tidak ada yang dihapus, tambah element aa dan ab;
console.log(arr, removed); // ['a', 'aa', 'ab', 'b', 'c', 'd', 'e'], []
removed = arr.splice(1, 2, "bb", "cc"); // (mengganti element) mulai dari index 1, hapus dua element tambahkan bb dan cc
console.log(arr, removed); // ['a', 'bb', 'cc', 'd', 'e'], ['b', 'c']
5. sort and reverse
const arrSortNum1 = [1, 3, 2, 4, 5];
const arrSortNum2 = [1, 100, 10, 20, 2, 200];
const arrSortStr = ["a", "c", "b", "aa", "bc"];
arrSortNum1.sort(); // [1,2,3,4,5]
arrSortNum1.reverse(); // [5,4,3,2,1]
arrSortNum2.sort((a, b) => a - b); // [ 1, 2, 10, 20, 100, 200 ]
arrSortNum2.sort((a, b) => b - a); // [ 200, 100, 20, 10, 2, 1 ]
arrSortNum2.reverse(); // [ 200, 2, 20, 10, 100, 1 ]
arrSortStr.sort(); // ["a", "aa", "b", "bc", "c"];
arrSortStr.reverse(); // [ 'c', 'bc', 'b', 'aa', 'a' ]
// .sort menerima parameter sebagai fungsi pembanding, .reverse tidak menerima parameter
console.log(arrSortNum1, arrSortNum2, arrSortStr);    
`}</pre>
);

const JsMapFilterReduce = () => (
  <pre className="text-sm">{`
// MAP, FILTER, REDUCE
const names = ["ahmad", "abdul", "siti"];
names.map((item, i) => console.log(i + 1, item));
const namesFilter = names.filter((item, i) => item.includes("a"));
console.log(namesFilter);
    `}</pre>
);

const JsFunction = () => (
  <pre className="text-sm">{`
// FUNCTION(Fn)
1. function declaration
function Fn() { return "function declaration" }
function Fn(param) { return "hello " + param }
function Fn(param1, param2 = "john") { return "Hello " + param1 + " and default param " + param2 }
console.log(Fn(), Fn('brendan'))
2. function expression (anonimouse function)
const Fn = function () { return "function expression" }
const Fn = function (param1, param2 = "john") { return "hello " + param1 + " and default param " + param2 }
console.log(Fn(), Fn('brendan'));
3. arrow
const Fn = () => { return "arrow function" };
const Fn = () => "arrow function" // fungsi ini sama seperti yang atas karena hanya "return"
const Fn = (param1, param2 = "abdul") => { return "hello " + param1 + " and default param " + param2 }
// jika tidak hanya return maka {} dan 'return' tidak bisa dihilangkan;
console.log(Fn(), Fn("brendan"));
4. self invoking fn (fungsi yang menjalankan diri)
(function Fn4() { console.log("self invoking fn declaration")})();
(function () { console.log("self invoking fn expression/anonimous")})();
(() => console.log("self invoking arrow fn"))();
    `}</pre>
);

const JsClosureNested = () => (
  <pre className="text-sm">{`
// Closure & Nested / Recursive function
CLOSURE adalah kemampuan sebuah fungsi untuk mengakses variabel dari luar scope nya di mana fungsi tersebut dedeklarasikan bahkan setelah scope luar tersebut selesai dieksekusi
CLOSURE hanya bisa dibuat dengan Nested function yaitu ada fungsi di dalam fungsi luar;
function outerFn(){
  const name = 'john';
  function innerFn(){ return name }
  console.dir(innerFn)
}
outerFn()
// jalankan contoh di atas (copas) di console browser hingga kamu bisa lihat closurenya.
`}</pre>
);

const JsHofCallback = () => (
  <pre className="text-sm">{`
// HOF & Call
// // HOF (higher order function) and CALLBACK
// HOF adalah fungsi yang menerima fungsi sebagai argumen atau mengembalikan fungsi sebagai hasil;
// CALLBACK adalah fungsi yang menjadi argumen dari fungsi lain lalu dieksekusi di fungsi tersebut.
// function myHof(cb){ return cb() }
// function myHof = (cb) => cb()
// function myCb(){ console.log("hello world")}
// myHof(myCb) // hello world
// myHof(function myCb(){ console.log("hello world 2")}) // hello world 2
// myHof(() => console.log("hello world 3)) // hello world 3
// ((cb) => cb())(() => console.log("halo world 4")); // hello world 4

    `}</pre>
);

const JsScopeThis = () => (
  <pre className="text-sm">{`
// Scope
// a. variable luar fungsi bisa diakses di dalam fungsi
// b. variable dalam fungsi tidak bisa diakses di luar fungsi karena javascript block scope

let nama1 = "ahmad";
let nama2;
const Fn1 = () => nama1;
const Fn2 = () => {
  let nama2 = "abdul";
  return nama2;
};
const Fn3 = () => {
  nama1 = "abdul";
  return nama1;
};
console.log(Fn1(), nama2, Fn3());

// Arrow function tidak bisa menggunakan konsep hoisting, artuments dan this
// 1. Hoisting
// a. (creatian phase = execution phase) fungsi secara default didefinisikan undefined
// b. setiap fungsi yang dibuat di mana saja akan dibaca terlebih dahulu (diangkat ke atas) lalu program membaca perintah lain"
// c. var menggunakan konsep hoisting sedangkan let tidak;
console.log(Fn1());
function Fn1() {
  return "hoisting, syntax fungsi ditaruh setelah pemanggilan";
}

// 2. Arguments: parameter apapun yang dikirimkan akan diteriman oleh Object Arguments
function Fn2() {
  return "Arguments, " + arguments[0] + " " + arguments[1] + " " + arguments[2];
}
console.log(Fn2("ahmad", "abdul", "siti"));

console.log(
  "4. This: method objek yang menggunakan key this, artinya aksesnya hanya terbatas pada objek itu saja, karena dengan objek maka tidak menggunakan konsep hoisting juga"
);
    `}</pre>
);

const jsTheoryMenus = [
  { text: "Key Words", content: <JsKeywords /> },
  { text: "Data Types", content: <JsDataTypes /> },
  { text: "Falsy Truthy", content: <JsFalsyTruthy /> },
  { text: "Looping", content: <JsLooping /> },
  { text: "Number & Math", content: <JsNumberMath /> },
  { text: "String", content: <JsString /> },
  { text: "Array", content: <JsArray /> },
  { text: "Map Filter Reduce", content: <JsMapFilterReduce /> },
  { text: "Function", content: <JsFunction /> },
  { text: "Closure & Nested Function", content: <JsClosureNested /> },
  { text: "HOF & Callback", content: <JsHofCallback /> },
  { text: "Scope & This", content: <JsScopeThis /> },
];

export default function JsBasic() {
  return (
    <div className="border rounded p-2">
      <Acc menus={jsTheoryMenus} />
    </div>
  );
}
