import { Acc } from "../../../components/Components";
import { P } from "../../../components/Tags";

const TsStart = () => (
  <div>
    <P>
      - syaratnya harus terinstall nodejs (https://nodejs.org/en ) dan typescript (npm i -g typescript ) lalu pastikan sudah
      terinstall atau belum dengan: node -v; npm -v; npx -v; tsc -v;
    </P>
    <P>
      Pertama tama coba tanpa tsconfig.json, berikut caranya: buat folder bebas; buat file index.ts (isi syntax apapun di
      dalamnya); terminal `npm index.ts` --- maka akan terbentuk file index.js hasil kompilasi file index.ts;
    </P>
    <P>
      Lalu coba dengan tsconfig.json caranya: buat folder bebas; terminal `tsc --init` maka akan terbentuk file tsconfig.json
      berisi banyak hal berikut:
    </P>
    <pre>{`
// wajib diubah
"rootDir": "./src"
"outDir": "./dist"
// opsional
"removeComment": true --- agar hasil kompilasinya tidak menyertakan komentar.
"noImplisitAny": true --- jika ada yang tipe datanya 'any' maka tidak akan dinilai error;
`}</pre>
    - lalu buat folder src, buat index.ts, isi apa saja; - terminal `tsc` --- maka akan terbentuk folder dist berisi file
    index.js
  </div>
);
const TsNanti = () => (
  <div>
    <div>
      <h2 className="font-medium">pendahuluan</h2>
      <p>
        typescript is a programming language to address shortcomings of javascript. js like a kid without any dicipline who
        does whatever he or she wants. ts is like a kid with some dicipline. ts i programming language build on top of js.
        every js file is a valid ts file. ts add some cool features to js.
        <b>benefits:</b> static typing, code completion, refactoring, shorthand notations; there are two types of programming
        languages, statically typed and dinamically typed. in statically type languages like c++, c#, java. when declare a
        variable of type integer and this variable can only integer values nothing else, we cannot set it into string or
        another type of object. in dinamically type languages like js python and ruby the type of variables is dinamic. so it
        is determined at runtime and it can also change so we can declare a variable set it to a number and then leter on
        change it to a string. this variable does not have a fixed or a static type. the type is determined and may change at
        runtime. it gives us a lot of flexibility but it can also lead to problems. what if we pass this variable to a
        function that expect a number. then our app might misbehave or crash. the broble is that we will not know about these
        issues until we run our app or our unit test. assuming that we have then in place so we have to test every function
        with various edge cases to cache these bugs. this is the problem that ts tries to solve. ts is essentially js with
        type checking. with ts w explisitly set the type of our variables upon declaration just like how we code in staticly
        typed languages. then we pass our code to the ts compiler and the compiler will thell us if we are doing something
        wrong. ts is more than just type checking. most code editors these days have great support of ts. so they can detect
        the type of our variables and offer productivity boosting features like code completion and refactoring. in a
        nutshell ts is built on top of js and we can use it wherever we use js on the fe or be. anything we can do with js we
        can also do with ts.
        <b>drawbacks</b>: there is always a compilation step involved because at this time browsers do not unerstand ts code.
        so we have to give our code to the ts compiler to compile and translate into js this process called transpilation.
        second with ts we have to be a bit more deciplined when writing code. for simple app, we can totally get back to old
        vanilla js if that is what you prefer.
      </p>
      <h2 className="font-medium">pre-requisite</h2>
      <ul className="list-inslide list-disc">
        <li>downlaoad adn install nodejs then check `node -v`</li>
        <li>
          install typescript `npm i -g typescript | sudo npm i -g typescript` then check `tsc -v`. sudo is super user do
        </li>
        <li>use code editor</li>
      </ul>
      <h2 className="font-medium">begin</h2>
      <ul>
        <li>
          buat folder apa saja, lalu buat file index.ts lalu isi misalnya `let name: string = ahmad; console.log(name)`
        </li>
        <li>buka terminal lalu ketik `tsc index.ts`. maka akan muncul file index.js berisi hasil compilenya.</li>
      </ul>
      <h2 className="font-medium">mulai konfigurasi</h2>
      <ul>
        <li>
          buat folder apa saja, lalu masuk ke folder tersebut, di terminal ketik `tsc --init`. akan dibuatkan file
          tsconfig.json
        </li>
        <li>
          buka file tsconfig.json, di dalamnya terdapat compiler options: projects, language and environment, module,
          javascript support, emit, interop constraints, typechecking, completeness
        </li>
        <li>pada bagian language and environment: target dapat diubah valuenya sesuai kebutuhan.</li>
        <li>
          pada bagian modules: rootDir, hilangkan comment lalu isi dengan value rootDir: ./src (atau nama lain sesuai
          keinginan). lalu buat folder src
        </li>
        <li>
          pada bagian emit: outDir, isi dengan outdir: ./dist (atau nama lain sesuai keinginan); lalu ada removeComment
          hilangkan comment-nya agar saat dicompile commentnya tidak ada; lalu ada noEmitOnError hilangkan commentnya.
        </li>
        <li>pada folder tsc, buat file index.ts, lalu isi dengan `let nama: string = ahmad; console.log(nama)`</li>
        <li>lalu pada terminal tulis `tsc` saja. maka file dist yang di dalamnya index.js akan dibuat otomatis.</li>
      </ul>
    </div>
  </div>
);
const Lessons = () => (
  <pre>{`
// Tipe data biasa (string, number, boolean, array, null, undefined, object, function)
let data: string = "john"; // string: tipe data untuk teks
let data: number = 10;
    // number: tipe data untuk integer or floading point
    // 1_000_000 underscore utuk mempermudah membaca
let data: boolean = true; // boolean: tipe data untuk nilai true atau false
let data: string[] = ["john", "doe", "ahmad"];
let data: (number | string) = ["john", 1, "doe", 2]; // bisa campur number atau string
    // array: tipe data untuk koleksi nilai dengan jenis tertentu // isinya string semua;
let data: { readonly id: number; name: string, active?: boolean } = {id: 1, name: "john" }
data.id = 2 // readonly: id tidak bisa diubah karena readonly
data.name = "doe" // bisa diubah karena tidak readonly
    // object: tipe data untuk nilai non-primitif // valuenya object yang isinya sesuai value dan tipe data dalam objectnya;
    // optional chainig ( ? )
let data: null = null
let data: undefined = undefined
function fn(id: number, name: string = "person", active?: boolean): void { console.log('hello world') }
    // function: tipe data untuk mendefinisikan bentuk fungsi termasuk parameter dan return type nya
    // return type, void return type
    // parameters: id, number, name
    // optional parameter ( ? )
    // default parameter ( "person" )
    // rest parameter (...), type aliases

// Tipe data khusus (any, unknown, tuple, enum, literal, void, never, union, intersection)
let data: any = "john"
    // any: tipe data yang menyimpan nilai dari jenis apapun, artinya tipe data apa saja, minimalisir penggunaannya
let data: unknown = "john"
    // unknown: alternatif aman dari any
let data: [string, number, boolean] = ["john", 10, true]
    // tupple: tipe data array dengan jumlah elemen tetap dan sudah ditentukan untuk tiap elemen, valuenya array dengan menyesuaikan urutan tipenya
enum Color1 {Red, Green, Blue}
enum Color2 {Red=2, Green, Blue}
enum Color3 {Red="merah", Green="hijau", Blue: "biru"}
let data: Color1 = Color1.Red // output: 0
let data: Color1 = Color1.Blue // output: 2
let data: Color2 = Color2.Green // output: 3
let data: Color3 = Color3.Red // output: "merah"
    // enum: tipe data untuk menyimpan kumpulan nilai konstan
    // numeric enum default 0, nilai selanjutnya mengikuti urutan bilangan dari nilai pertama.
    // numeric enum initializer, enum pertama diberi nilai angka tertentu, 
    // fully initializer, semua enum diberi nilai.
type Color = "red" | "green" | "blue"
let data: Color = "red"
    // literal: tipe data yang benar benar spesifik untuk sebuah nilai
function fn():void { console.log("hello world") }
    // void: tipe data untuk fungsi yang tidak mengembalikan nilai
function fn(message: string):never { throw new Error(message) }
    // never: tipe data untuk nilai yang tidak pernah terjadi
let data: string | number | boolean | null = "ahmad"
    // union types ( | ): tipe data yang bisa memiliki lebih dari satu tipe, valuenya bisa string, number atau boolean
    // | null : nullable
type Admin = {id: number, role: string}
type Employee = {name: string, role: string}
type AdminEmployee = admin & employee
let data: AdminEmployee = {id: 1, name: "john", role: "admin"}
    // intersection ( & ): tipe data yang menggabungka dua atau lebih tipe data.

// Type aliases and interfaces
type namaType = string
let nama: namaType = "john"
    // type aliases digunakan untuk memberi nama tipe custom
interface Person { id: number, name: string }
interface Admin extends Person { role: string }
interface Employee extends Person { active: boolean }
let Person1: Admin = {id: 1, name: "john", role: "admin"},
let Person2: Employee = {id: 1, name: "doe", active: true}
    // interface: sama dengan type aliases tapi hanya bisa diterapkan pada object, tapi bisa di-extend
`}</pre>
);
const Lesson2 = () => (
  <div>
    <pre>{`
casting adalah proses override type, tapi ia tidak megubah tipe data dalam variabel
casting dengan "as" atau <> fungsinya sama.
let x: unknown = "hello"
console.log((x as string).length) // output 5
console.log((x as number).length) // tidak bisa
console.log((5 as string).length) // juga tidak bisa
console.log((<string>x).length) // output 5
let y = "hello"
console.log(((y as unknows) as number).length) // undefined
`}</pre>
  </div>
);

const tsBasicMenus = [
  { text: "ts start", content: <TsStart /> },
  { text: "nanti", content: <TsNanti /> },
  { text: "lessons", content: <Lessons /> },
  { text: "lesson2", content: <Lesson2 /> },
];

export default function TsBasic() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={tsBasicMenus} />
    </div>
  );
}
