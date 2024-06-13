import { Acc } from "../../../components/Components";

const SyncAsync = () => (
  <div>
    Istilah synchronous dan asynchronous merujuk pada cara eksekusi kode, tugas atau operasi pada program. <br />
    Synchronous: cara eksekusi berurutan satu per satu dan blocking (setiap tugas harus selesai sebelum tugas berikutnya
    dimulai) <br />
    Asynchronous: cara eksekusi tidak berurutan dan non-blocking (eksekusi dapat dilanjutkan dengan tugas lain sembari
    menunggu operasi async selesai, operasi async dapat berjalan di latar belakang tanpa menghalangi kode lainnya, biasanya
    menggunakan callback, promises, asunc/await untuk operasi yang memakan waktu. <br />
    untuk melihat visualisasinya, jalankan codenya di{" "}
    <a href="https://www.jsv9000.app/" className="underline">
      Js Visualizer
    </a>{" "}
    terdapat call stack, task queue dan microtask queue
  </div>
);

const VarConstLet = () => (
  <div>
    Var, Const dan Let adalah kata kunci untuk mendeklarasikan variabel, ketiganya memiliki perbedaan dalam hal scope,
    hoisting, re-declaration dan mutabilitas. <br />
    Var scope (fungsi & block) hoisting (di-hoist dengan inisialisasi undefined) redeklarasi (boleh) mutabilitas (boleh).
    <br />
    Let scope (block) hoisting (hoisting tanpa inisialisasi, temporal dead zone) redeklarasi (tidak boleh dalam cakupan yang
    sama) mutabilitas (boleh).
    <br />
    Const sama dengan let bedanya mutabilitas (tidak dapat diubah setelah inisialisasi kecuali untuk properti objek atau
    array)
  </div>
);

const DataTypes = () => (
  <div>
    Dalam javascript ada 7 tipe data primitif (string, number, bigint, boolean, null, undefined, symbol) dan 1 tipe data
    non-primitif (object) <br />
    1. String: teks atau urutan karakter // `hello world` <br />
    2. Number: bilangan bulat (integer) dan desimal (floating point) // `10` <br />
    3. BigInt: bilangan sanget besar // `1000n` <br />
    4. Boolean: true dan false <br />
    5. Undefined: variabel yang belum diinisiasi atau properti yang tidak ada nilai, nilai defaultnya undefined // const
    name; <br />
    6. Null: nilai kosong, variabel tanpa nilai atau non-esisten secara sengaja // const name = null; <br />
    7. Symbol: es6 identitas unik <br />
    8. Tipe data Object: ada 11 instance (object biasa, array, function, date, regexp, map, set, weakmap, weakset, promise,
    error) * tipe data object dan instance object adalah dua hal yang berbeda. Berikut penjelasan singkat instance yang
    bertipe object. <br />
    1. object: kumpulan property berupa pasangan key:value, deklarasinya dengan kurung kurawal, keynya harus unik dan tidak
    berurutan, valuenya bisa berupa tipe data apapun. property yang memiliki value function disebut method. Method bawaan
    object methods nya Object.keys, Object.values dll, bisa diiterasi dengan for ... in. <br />
    2. array: kumpulan data yang diurutkan dan diakses melalui index numerik dimulai dari 0 dan dideklarasikan menggunakan
    tanda kurung siku. methodnya push, opo, shift dll, bisa diiterasi dengan for ... of atau forEach
  </div>
);

const NullObject = () => (
  <div>
    null memiliki tipe data objek karena bug historis dalam implementasi awal javascript. saat javascript diciptakan, null
    diimplementasikan sebagai object karena keputusan desain awal. yang meskipun bisa jadi tidak intuitif, telah menjadi
    bagian integral dari bahasa JavaScript. Meskipun ada upaya atau proposal untuk mengubah perilaku ini, kompatibilitas ke
    belakang dalam ekosistem JavaScript yang luas telah mencegah perubahan semacam itu. Sehingga, null tetap bertipe object
    dalam JavaScript hingga saat ini.
  </div>
);

const KarakterObjek = () => (
  <div>
    Karakteristik objek antara lain: <br />
    0. bukan tipe data primitif. 1. dibut dengan kurung kurawal <pre className="inline">{`{}`}</pre> atau konstruktor object
    new Object <br />
    2. menyimpan pasangan key:value. value bisa berupa tipe data apapun. <br />
    3. memiliki property dan method. <br />
    4. instance dari kelas atau konstruktor dengan new Instance. <br />
    5. subtipe object: array, function, date, regexp, map, weakmap, set, weakset, typedarray, promise, error
    <br />
    6. dapat diakses dengan notasi titik . atau kurung siku []
    <br />
    7. fungsi typeof mengembalikan object
    <br />
  </div>
);

const Dom = () => (
  <div>
    DOM (Document Object Modal) adalah model berorientasi object yang merepresentasikan struktur dokumen HTML sebagai sebuah
    pohon struktur objek. Dalam DOM, setiap elemen, atribut, dan teks dalam dokumen direpresentasikan sebagai objek dalam
    pohon tersebut. Ini memungkinkan pengembang web untuk berinteraksi dengan elemen-elemen dalam dokumen HTML dengan
    mengakses, memanipulasi atau mengubahnya secara dinamis menggunakan JavaScript.
  </div>
);

const jsQuestionsMenus = [
  { text: "Synchronous vs Asynchronous", content: <SyncAsync /> },
  { text: "Var vs Const vs Let", content: <VarConstLet /> },
  { text: "Data Types", content: <DataTypes /> },
  { text: "Why typeof null = object", content: <NullObject /> },
  { text: "Karakteristik Object", content: <KarakterObjek /> },
  { text: "DOM", content: <Dom /> },
  {
    text: "== vs ===",
    content: `== (loose equality) dan === (strict equality) adalah operator perbandingan untuk memeriksa kesamaan pada dua nilai.
          Loose Equality membandingkan nilai dengan konversi tipe jika diperlukan, yakni kedua nilai tidak perlu identik.
          Strict Equality membandingkan nilai tanpa konversi tipe, kedua nilai identik.`,
  },
  {
    text: "this",
    content: `this adalah kata kunci yang merujuk pada konteks di mana fungsi tersebut dipanggil. konteksnya berupa 1. global
          konteks (this = window) 2. fungsi biasa (this = window) 3. fungsi strict mode (this = undefined) 4. method object
          (this = object tersebut) 5. constructor function (this = instance baru dari objek yang dibuat) 6. arrow function
          tidak memiliki konteks this. 7. event handler merujuk pada dom yang menerika event tersebut. bisa dengan method
          call, apply dan bind.`,
  },
  {
    text: "arrow function vs regular function",
    content: `arrow function penulisannya lebih singkat, tidak memiliki konteks this tapi mengambil dari lingkup sekitar (lexical
          scoping), tidak bisa digunakan sebagai konstruktor untuk membuat objek baru, tidak memiliki arguments. Regular
          Function memiliki konteks this, mendukung arguments, dan bisa digunakan sebagai konstruktor.`,
  },

  {
    text: "while loop vs for loop",
    content: `while loop sintaksnya sederhana, hanya kata kunci while lalu kondisi, inisialisasi variabel biasanya dilakukan
          sebelum loop dimulai, ini digunakan ketika jumlah iterasi tidak pasti dan hanya ada kondisi yang perlu dipenuhi
          untuk melakukan iterasi. for loop lebih terstruktur, termasuk inisialisasi, kondisi dan ekspektasi iterasi ditulis
          dalam satu baris, digunakan saat mengetahui jumlah iterasi, kondisi dan ekspektasi iterasi.`,
  },
  {
    text: "closure",
    content: `closure adalah kemampuan sebuah fungsi untuk mengakses variabel dari luar scope nya di mana fungsi tersebut
          dedeklarasikan bahkan setelah scope luar tersebut selesai dieksekusi, kondisinya biasanya saat terdapat fungsi yang
          berisi fungsi lain (inner function / fungsi dalam) dan fungsi dalam tersebut mengakses variabel dari fungsi luar.
          kata kuncinya (scope, inner function, akses variabel)`,
  },
  {
    text: "setTimeout itu sync atau async",
    content: `content`,
  },
  {
    text: "HOF & penggunaannya",
    content: `content`,
  },
  {
    text: "hoisting",
    content: `content`,
  },
  {
    text: "callback",
    content: `content`,
  },
  {
    text: "promise? jika catch promise tidak dijalankan maka?",
    content: `content`,
  },
  {
    text: "concurrency & paralellism",
    content: `content`,
  },
  {
    text: "bagaimana js yang notabene nya single-threaded menangani proses asynchronous",
    content: `content`,
  },
  {
    text: "implementasi oberserver pattern dengan menampilkan input user dari feld input?",
    content: `content`,
  },
];

export default function JsQuestions() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={jsQuestionsMenus} />
    </div>
  );
}
