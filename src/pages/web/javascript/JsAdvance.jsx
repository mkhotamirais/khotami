import { Acc } from "../../../components/Components";

const JsKeyWord = () => (
  <div>
    <b>Promise</b> adalah Object yang merepresentasikan berhasil atau gagal suatu event yang asynchronous di masa yang akan
    datang.
    <br />
    promise (fulfilled / rejected / pending) = janji (terpenuhi, ingkar, tenggat).
    <br />
    callback (resolve / reject / finally) resolve if fulfilled; reject if rejected; finally if finish pending.
    <br />
    action (then, catch)
    <p>Key Words: Object, Property, Method, Class, Prototype</p>
    <p>
      Semua js valui kecuali primitives adalah objek, property = variabel dalam objek, method = fungsi dalam objek, class
      cara lain penulisan objek tapi di belakang layar tetap objek. Tipe data apapun pasti objek artinya pasti punya
      prototype. Array.prototype; Number.prototype; Object.prototype; Date.prototype; dll
    </p>
  </div>
);
const JsObject = () => (
  <pre className="text-sm">{`
// OBJECT
1. Object literal
const obj = {};
obj.id = 1;
obj.name = "object literal";
const obj2 = { id: 1, name: "object literal" };
obj2.name = "name property changed";
obj2.detail = "detail property added";
console.log(obj, obj2.name); // { id: 1, name: 'object literal' } name property changed
2. Fn Declaration (object literal inside fn)
const Fn = (id, name) => {
  const obj = { id: id, name: name };
  return obj;
};
const Fd1 = Fn(1, "function declaration 1");
const Fd2 = Fn(2, "function declaration 2");
console.log(Fd1, Fd2.name); // { id: 1, name: 'function declaration 1' } function declaration 2
3. Constructor Fn (using this, no arrow fn, not recommended to use class)
function Fn(id, name) {
  //   let this = Object.create(Fn2.prototype) // implicitly
  this.id = id;
  this.name = name;
  //   return this // implicitly
}
const Cf1 = new Fn(1, "constructor function 1");
const Cf2 = new Fn(2, "constructor function 2");
console.log(Cf1, Cf2.name); // Fn { id: 1, name: 'constructor function 1' } constructor function 2
// This constructor function may be converted to a class declaration
4. Object create
const objA = { id: 1, name: "objectA" };
const objB = Object.create(objA);
obj4.asal = "jakarta";
console.log(objA, objB, objB.name); // { id: 1, name: 'objectA' } objectA
5. Object method
const obj = {
  nama: "property-name",
  panggil1: function (nama) { return "ES5 method with property " + this.nama + " and parameter " + nama },
  panggil2(nama) { return "ES6 method with property" + this.name + " and parameter " + nama },
  panggil3: (nama) => "Arrow function without property, no this and parameter " + nama,
};
console.log(obj.panggil1("ahmad")); // ES5 method with property property-name and parameter ahmad
6. Object default methods
// Object to arr with Object.values
// Object to string with JSON.stringify
        `}</pre>
);
const JsClass = () => (
  <pre className="text-sm">{`
CLASS (constructor function) AND PROTOTYPE ()
// Class: penulisan constructor function dengan es6
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  panggil(name) {
    console.log("hello param " + name + " and property " + this.name);
  }
}
const john = new Person(1, "john");
john.panggil("doe"); // output: "hello param doe and property john"

// inheritance
// jika tidak ada konstruktor maka defaultnya menggunakan kostruktor parent
class Child extends Person {
  panggil() {
    console.log("hello " + this.name);
  }
}
const brendan = new Child(1, "brendan");
brendan.panggil(); // output: "hello brendan"
// jika ada konstruktor maka perlu menggunakan super dan semua paramnya, tidak boleh hanya sebagian;
class Child2 extends Person {
  constructor(id, name, role) {
    super(id, name);
    this.role = role;
  }
  panggil(name) {
    super.panggil(name);
    console.log("hello " + this.name);
  }
}
const Ahmad = new Child2(1, "ahmad", "admin");
Ahmad.panggil("abdul"); // output: "hello param abdul and property ahmad" dan "hello ahmad"

// getter dan setter
class GetSet {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(val) {
    if (val < 0) {
      console.log("umur tidak bisa negatif");
    } else {
      this._age = val;
    }
  }
  panggil() {
    console.log("name: " this.name + " age: " + this.age);
  }
}
const Budi = new GetSet("budi", 10);
// mengguakan getter
console.log(Budi.age); // output: 10
// meggunakan setter
Budi.age = 20;
console.log(Budi.age); // output: 20
Budi.age = -10;
console.log(Budi.age); // output: "umur tidak bisa negatif" dan 20
// getter setter contoh lain
class GetSet2 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  set area(value) {
    throw new Error("area tidak bisa diatur secara langsung. ubah lebar atau tinggi");
  }
  panggil() {
    console.log("width: " + this.width + ", height: " + this.height + " area: " + this.area);
  }
}
const rect = new GetSet2(10, 20);
// get area
console.log(rect.area); // 200
// set area secara lagsung
try {
  rect.area = 50;
} catch (error) {
  console.log(error.message); // output: area tidak bisa diatur secara langsung. ubah lebar atau tinggi
}
`}</pre>
);
const JsPrototype = () => (
  <pre className="text-sm">{`
    // Prototype: mekanisme yang memungkinkan objek untuk mewarisi properti dan metode dari objek lain
  function Fn1(nama, umur) {
        this.nama = nama;
        this.umur = umur;
      }
      const Ahmad = new Fn1("ahmad", 21);
      console.log(Ahmad.nama, Ahmad.umur);

      Fn1.prototype.panggil = function () {
        return "Halo " + this.nama;
      };
      const Abdul = new Fn1("abdul", 22);
      console.log(Abdul);
      console.log(Abdul.panggil());`}</pre>
);
const JsDestructuring = () => (
  <pre className="text-sm">{`
  // 1. Rest Parameter / spread operator
console.log("1. Rest paramter");
const arr = ["a", "b", "c"];
const str = "ahmad";
console.log(arr, ...arr);
console.log(str, ...str);

  const objA = { nama: "ahmad", umur: 21 };
// ({ nama, umur } = { nama: "ahmad", umur: 25 }); // anonimous object by destructuring;


((...val) => console.log(val))(arr);
((...val) => console.log(val))(["a", "b", "c"]);
((...val) => console.log(val))(...arr);
((...val) => console.log(val))("a", "b", "c");
((...val) => console.log(val))("abc");
((...val) => console.log(val))(..."abc");

// 2. Destructuring
// destructuring array
console.log("2. Destructuring");
const a = "ahmad";
const b = "budi";
[c, d] = ["cinta", "dinda"];
const [e, f] = ["eka", "faiza"];
const names = ["gita", "hani"];
const [g, h] = names;
[j, i] = ["intan", "john"];
[j, i] = [i, j];
const ages = [1, 2, 3];
const [k, , l] = ages;
console.log(c, d, e, f, g, h, i, j, k, l);

// destructuring object
const obj = { nama: "ahmad", umur: 1 };
const { nama, umur } = obj;
const { nama2, umur2 } = { nama2: "ahmad2", umur2: 2 };
console.log(nama, umur, nama2, umur2);

// alias
const obj2 = { nama: "ahmad2", umur: 2 };
const { nama: n2, umur: u2 } = obj2;
console.log(n2, u2);

// rest
const obj3 = { nama: "ahmad3", umur: 3, asal: "jakarta", gender: "laki-laki", pasangen: "ayu" };
const { nama: n3, umur: u3, ...sisa } = obj3;
console.log(n3, u3, sisa);

// recursive obj
const obj4 = { nama: "ahmad4", umur: 4, asal: { city: "jakarta", country: "indonesia" } };
const {
  nama: n4,
  umur: u4,
  asal: { city: cty, country: cry },
} = obj4;
console.log(n4, u4, cty, cry);

// refactor obj
({ nama5, umur5 } = { nama5: "ahmad5", umur5: 5 });
console.log(nama5, umur5);

// destruct function
const obj5 = { nama: "ahmad5", umur: 5, asal: { kota: "jakarta", negara: "indonesia" } };
function Fn1({ nama, umur, asal: { kota, negara } }) {
  console.log("Hello " + nama + ", " + umur + " dari " + kota + ", " + negara);
}
Fn1(obj5);`}</pre>
);
const JsPromise = () => (
  <pre className="text-sm">{`
  Asynchronous: cara eksekusi program untuk melihat output tanpa melihat urutan eksekusinya, yakni berjalan secara bersamaan
Synchronous: cara eksekusi secara berurutan
Javascript secara default eksekusi perintah secara synchronous kecuali untuk ajax, websocket, worker, file, db, animasi dll
Proses asynchronous murni tidak bisa dibuat, tapi simulaisnya bisa dengan fungsi setInterval dan setTimeout.
Asynchronous digunakan saat operasi file, koneksi ke db, websocket, realtime communication chatting dll.

Callback: fungsi yang dieksekusi melalu parameter
Fungsi yang parameternya callback disebut higher order function
Fungsi dalam javascript adalah object atau first class object yang artinya bisa dijadikan paramter, bisa disimpan ke dalam variable, memiliki properti dan method seperti object pada umumnya, bisa mengembalikan value dalam bentuk function.
--- Contoh dalam file .html ---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>promise</title>
    <button type="button" class="btn1">Get response</button>
    <p class="hasil">no data</p>
    <button type="button" class="btn2">Get response2</button>
    <p class="hasil2">no data2</p>
  </head>
  <body>
    <h1>promise</h1>
    <script>
      const getData = (kondisi) => {
        const Janji1 = new Promise((resolve, reject) => {
          kondisi
            ? setTimeout(() => {
                resolve("Response ditepati");
              }, 2000)
            : reject("Response ingkar");
        });
        return Janji1;
      };

      const btn = document.querySelector(".btn1");
      const hasil = document.querySelector(".hasil");
      const btn2 = document.querySelector(".btn2");
      const hasil2 = document.querySelector(".hasil2");

      btn.addEventListener("click", function () {
        btn.textContent = "loading...";
        const data = getData(true);
        data
          .then((res) => (hasil.textContent = res))
          .catch((err) => (hasil.textContent = err))
          .finally(() => (btn.textContent = "Get response"));
      });

      btn2.addEventListener("click", async () => {
        btn2.textContent = "loading...";
        try {
          const data = await getData(false);
          hasil2.textContent = data;
        } catch (err) {
          hasil2.textContent = err;
        } finally {
          btn2.textContent = "Get response2";
        }
      });
    </script>
  </body>
</html>

--- Contoh dalam file .js ---
let ditepati = true;
// let ditepati = false;
const Janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("response data ditepati");
  } else {
    reject("response data ingkar");
  }
});

console.log(Janji1);
Janji1.then((res) => console.log(res)).catch((err) => console.log(err));

let ditepati2 = true;
const Janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("response data ditepati");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("response data ingkar");
    }, 2000);
  }
});
console.log("mulai");
Janji2.then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("selesai loading"));
// supaya kelihatan proses asynchronousnya jalankan syntax ini
// console.log(Janji2.then(() => console.log(Janji2)));
console.log("selesai");

// promise.All
const data1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { nama: "ahmad", umur: 20 },
      { nama: "ayu", umur: 21 },
    ]);
  }, 3000);
});

const data2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { nama: "ahmad2", umur: 20 },
      { nama: "ayu2", umur: 21 },
    ]);
  }, 2500);
});

// data1.then((res) => console.log(res));
// data2.then((res) => console.log(res));

// promise all membuat waktu tunggu bersamaan
Promise.all([data1, data2]).then((res) => {
  const [data1, data2] = res;
  console.log(data1);
  console.log(data2);
});`}</pre>
);
const JsModule = () => (
  <pre className="text-sm">{`
  --- es5Index.js
const module1 = require("./es5Module1");
const { nama, umur } = require("./es5Module1");
const { nama: n, umur: u } = require("./es5Module1");
const module2 = require("./es5Module2");
const { nama: n2, umur: u2 } = require("./es5Module2");
const { Fn, Obj } = require("./es5Module3");

console.log("moduleEs5");

console.log(module1);
console.log(module1.nama, module1.umur);
console.log(nama, umur);
console.log(n, u);

console.log(module2);
console.log(module2.nama, module2.umur);
console.log(n2, u2);

console.log(Fn("ahmad"));
console.log(Obj.nama, Obj.Panggil("ayu"));

--- es5Module1.js
exports.nama = "ahmad";
exports.umur = 20;

--- es5Module2.js
const nama = "ahmad2";
const umur = 22;

module.exports = {
  nama,
  umur,
};

--- es5Module3.js
const Fn = (param) => "Halo " + param;

const Obj = {
  nama: "ahmad",
  Panggil(param) {
    return "Halo " + param + " saya " this.nama;
  },
};

module.exports = { Fn, Obj };

------

--- es6Index.mjs
import asal, { nama, umur } from "./es6Module.mjs";

console.log(nama, umur);
console.log(asal);

--- es6Module.mjs
export const nama = "ahmad";
export const umur = "abdul";

const asal = "jakarta";
export default asal;
  `}</pre>
);

const jsObjectMenus = [
  { text: "Key Words", content: <JsKeyWord /> },
  { text: "Object", content: <JsObject /> },
  { text: "Class", content: <JsClass /> },
  { text: "Prototype", content: <JsPrototype /> },
  { text: "Destructuring", content: <JsDestructuring /> },
  { text: "Promise", content: <JsPromise /> },
  { text: "Module", content: <JsModule /> },
];

export default function JsAdvance() {
  return (
    <div className="border rounded p-2">
      <Acc menus={jsObjectMenus} />
    </div>
  );
}
