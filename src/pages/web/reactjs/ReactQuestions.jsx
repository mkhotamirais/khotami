import { Acc } from "../../../components/Components";

const Slicing = () => (
  <div>
    Slicing adalah proses pemecahan desain UI menjadi komponen-komponen kecil yang reusable. tujuannya agar lebih modular,
    terstruktur dan mudah dikelola
  </div>
);
const StatelefulStateless = () => (
  <div>
    Stateless component atau functional component adalah komponen yang tidak memiliki state internal sendiri, hanya terima
    data dari parent component. hanya bertugas merender UI statis atau UI yang hanya bergantung pada props, tanpa perubahan
    internal
  </div>
);
const MekanismeLogin = () => (
  <div>
    Cara simpan data user login adalah dengan membuat token dengan jwt yang berisi data user, lalu token itu disimpan di
    localstorage atau cookie kemudian didecode untuk mendapat data user login.
  </div>
);

const Hoc = () => (
  <div>
    HOC React adalah Hihger Order Component yakni fungsi yang menerima komponen lain sebagai argumen dan mengembalikan
    komponen baru dengan kemampuan tambahan berupa logika dan fungsionalitas tertentu
  </div>
);
const Yaml = () => (
  <div>
    yaml (yaml aint markup language) adalah sebuah format serialisasi data yang sederhana, ringan, dan mudah dibaca manusia.
    sintaksnya bersih dain intuitif, struktur hierarki menggunakan indentasi, datanya direpresentasikan dengan pasangan
    key:value, key sebelah kiri : value sebelah kanannya. Fungsinya untuk pengembangan perangkat lunak khususnya dalam
    penyimpanan dan pertukaran data antar sistem yang berbeda. selain itu juga untuk konfigurasi sistem karena kemampuannya
    untuk menangani struktur data yang kompleks dan dengan cara yang lebih mudah dipahami manusia.
  </div>
);
const JsxToHtml = () => (
  <div>
    jsx adalah ekstensi sintaks untuk javascript yang biasanya digunakan react yang memungkinkan penulisan kode seperti html
    di dalam js. biasanya digunakan untuk html dan expresi javascript bisa disisipkan dengan kurung kurawal. cara render jsx
    ke html perlu library react dan react dom. file jsx dikonversi ke javascript dengan babel lalu dirender dengan kata kunci
    ReactDOM.render
  </div>
);
const Lifecycle = () => (
  <div>
    lifecycle mengacu pada serangkaian fase yang terjadi dalam siklus hidup komponen react yang meliputi mouting
    (pemasangan), updating (pembaruan) dan unmounting (pembongkaran). fase mounting menjalankan method constuctor(), render()
    dan componentDidMount(). fase updating menjalankan method souldComponentUpdate(), render(), dan componentDidUpdate().
    fase unmounting menjalankan method componentWillUnmount()
  </div>
);

const Hook = () => (
  <div>
    <div>
      Hook dalam React adalah fungsi yang memungkinkan komponen fungsional untuk menggunakan state, siklus hidup, dan fitur
      React lainnya tanpa perlu menggunakan kelas. Mereka mempromosikan kode yang lebih bersih, reusable, dan memisahkan
      logika terkait dari tampilan komponen. beberapa hook yang umum digunakna di react adalah: useState, useEffect,
      useContext, useReducer, useCallback dan useMemo.
    </div>
  </div>
);
const Redux = () => (
  <div>
    Redux adalah library js untuk management state aplikasi. mempromosikan satu sumber keberadaan (single source of truth)
    untuk aplikasi membuat state lebih mudah diprediksi dan debug. Komponen utanyanya ada 3: store, actions dan reducer.
    Store untuk menyimpan state aplikasi yang terpusat atau global state, actions adalah objek yang mendeskripsikan perubahan
    yang akan dilakukan state dia memiliki tipe penentu jenis aksi dan bisa memiliki payload, reducers adalah fungsi murni
    yang menentukan bagaimana state berubah sebagai response terhadap actions. kelebihannya state mudah diprediksi, alat
    debug kuat, komunitas ekosistem luas; kekurangannya itu boilerplate yang banyak dan kurva pembelajaran yang curam untuk
    pemula. <br />
    Redux toolkit adalah toolkit resmi untuk redux untuk penulisan redux logis lebih mudah dan efisien. fitur utamanya ada 3:
    configureStore, createSlice, createAsyncThunk. configureStore untuk mengatur store dengan pengaturan default yang baik
    termasuk middleware dan inhancer. createSlice mengkombinasikan actions dan reducer menjadi satu unit mengurangi
    boilerplate. createAsyncThunk untuk menangani sideEffect (seperti pemanggilan API dengan mudah). kelebihannya mengurangi
    boilerplate secara signifikan, penulisan redux lebih mudah dan cepat, integrasi baik dengan ts; kekurangan masih butuh
    pemahaman dasar redux. <br />
    RTK quer adalah alat data fetching yang dibangun di atas redux toolkit. menyediakan solusi untuk fetching, caching,
    synchronizing dan updating data server-side di redux app. Fitur utamanya 3: createApi, auto-fetching, auto-caching.
    createApi membuat layanan api yang menyediakan endpoints dan query/mutation hooks untuk fetching data. Auto-caching:
    Secara otomatis meng-cache hasil query dan mengurangi kebutuhan untuk mengelola state data fetching secara manual.
    Auto-refetching: Secara otomatis memperbarui data yang sudah di-fetch saat data yang mendasarinya berubah. Kelebihannya
    Menyederhanakan proses pengambilan dan pengelolaan data dari server. Mengurangi kebutuhan untuk menulis kode fetching dan
    handling state secara manual. Mendukung caching, memoization, dan invalidation out-of-the-box; kekurangannya Menambah
    lapisan abstraksi yang mungkin memerlukan waktu untuk dipahami sepenuhnya. Terutama bermanfaat jika aplikasi banyak
    berinteraksi dengan API, mungkin berlebihan untuk aplikasi sederhana.
  </div>
);
const ContextVsRedux = () => (
  <div>
    <div>
      Context api digunakan dalam situasi berikut: state sederhana, lingkup terbatas jika hanya sedikit komponen yang perlu
      akses state, kurva belajar rendah, performasi context api lebih efisien jika digunakan hati hati misalnya
      meminimalisasi jumlah komponen yang perlu melakukan rerender ketika state berubah.
    </div>
    <div>
      Redux digunakan dalam situasi berikut: state kompleks, state global, time travel debuging, ekosistem kuat untuk
      side-effect redux-thunk redux-saga, skalabilitas untuk jangka panjang app.
    </div>
  </div>
);

const RealVirtualDom = () => (
  <div>
    <div>
      Real DOM adalah representasi struktur dokumen aktual HTML yang dimuat browser dan dapat diubah secara langsung. cara
      kerjanya setiap kali ada perubahan pada element DOM, real DOM akan memperbarui seluruh strukturnya termasuk elemen yang
      tidak berubah. hal ini berpengaruh pada kinerja karena perlu melakukan reflow dan repaint di seluruh dokumen.
    </div>
    <div>
      Virtual DOM adalah konsep di mana sebuah struktur data virtual dibuat untuk merepresentasikan struktur dokumen html
      aktual. cara kerjanya ketika terjadi perubahan pada aplikasi web, perubahan ini terlebih dahulu diterapkan pada virtual
      DOM, selanjutnya virtual dom akan membandingkan perbedaan dengan real DOM dan hanya memperbarui perubahan yang
      diperlukan pada real DOM, ini dapat meningkatkan kinerja karena mengurangi jumlah reflow dan repaint yang perlu
      dilakukan browser. Virtual DOM dibuat melalui serangkaian langkah berikut: representasi struktur data, render pertama,
      perubahan state dan props, diffing algoritma, patch dan pembaruan real DOM.
    </div>
  </div>
);
const LibVsFw = () => (
  <div>
    <div>
      library (pustaka): sekumpulan fungsi dan prosedur yang dapat digunakan oleh aplikasi lain, menyedian solusi tugas
      tertentu memungkinkan pengembang menggunakan fungsionalitas yang sudah ada. Pengembang memiliki kontrol penuh atas alur
      kerja aplikasi dan dapat memilih kapan dan bagaimana menggunakan library tersebut.
    </div>
    <div>
      framework (kerangka kerja): struktur yang mendefinisikan kerangka dasar dari aplikasi. menyediakan kerangka kerja dan
      aturan yang harus diikuti pengembang. biasanya mencakup beberapa library dan alat yang memudahkan pengembangan aplikasi
      yang lebih besar.
    </div>
    <div>
      prebedaannya pada kontrol library memberi kontrol penuh kepada pengembang, framework mengambil alih kontrol alur kerja
      dan pengembang harus menyesuaikan kode mereka agar sesuai dengan struktur framework. pada Inversi Kontrol, pada library
      alur kerja dikendalikan pengembang, pada framework, alur kerja dikendalikan framework. pada Tujuan penggunaan, library
      digunakan untuk tugas tertentu yang spesifik, framework digunakan untuk mengembangkan seluruh aplikasi dengan struktur
      yang sudah ditentukan.
    </div>
  </div>
);

const reactQuestionMenus = [
  { text: "library vs framework", content: <LibVsFw /> },
  { text: "slicing", content: <Slicing /> },
  { text: "class component vs functional component vs fungsi biasa", content: <StatelefulStateless /> },
  { text: "mekanisme login", content: <MekanismeLogin /> },
  { text: "redux vs redux toolkit vs rtk query", content: <Redux /> },
  { text: "lifecycle", content: <Lifecycle /> },
  { text: "kapan pake context & kapan pakai redux", content: <ContextVsRedux /> },
  { text: "HOC", content: <Hoc /> },
  { text: "API dan cara konsum api dari tempat lain", content: "" },
  { text: "cookies dan localstorage", content: "" },
  { text: "HTTP Request dan fungsinya", content: "" },
  { text: "project paling kompleks", content: "" },
  { text: "mengapa nodejs terapkan single threaded", content: "" },
  { text: "yaml vs json", content: <Yaml /> },
  { text: "jsx? bagaimana bisa dirender ke html", content: <JsxToHtml /> },
  { text: "real DOM vs virtual DOM", content: <RealVirtualDom /> },
  { text: "alasan react menggunakan virtual DOM", content: "" },
  { text: "kegunaan prop key dan apa yang terjadi jika tidak menggunakannya", content: "" },
  { text: "kapan dan mengapa menggunakan state management", content: "" },
  { text: "hooks", content: <Hook /> },
  { text: "mengapa hooks selalu dipanggil di top level component", content: "" },
  { text: "csr vs ssr", content: "" },
  { text: "controlled vs uncontrolled component", content: "" },
  { text: "cara agar browser dan server dapat komunikasi tanpa reload", content: "" },
  { text: "memo vs useMemo vs useCallback", content: "" },
];

export default function ReactQuestions() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={reactQuestionMenus} />
    </div>
  );
}
