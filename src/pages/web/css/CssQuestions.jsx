import { Acc } from "../../../components/Components";

const cssQuestionMenus = [
  {
    text: "bisakah css menggunakan @import",
    content: `css dapat menggunakan @import untuk import file css ke file css lainnya. yang diimport bisa file css sesuai path
          atau file css yang tersimpan di internet. pertimbangannya file yang diimport ini mau disimpan di manapun akan
          dibaca lebih dulu baru file utama hingga jadi sedikit lambat dan keterbatasan browser lama`,
  },
  {
    text: "magin vs padding",
    content: `padding dan margin berfungsi untuk mengatur ruang di sekitar element html. padding adalah ruang di dalam element
          antara konten dan border element (ruang internal). margin adalah ruang di luar element antara border element dan
          element lain atau tepi halaman (ruang external)`,
  },
  {
    text: "sebutkan unit baru css3",
    content: `unit baru css3 diantaranya: viewport units yakni unit yang didasarkan pada ukuran viewport (vw, vh, vmin, vmax);
          rem (root em) unit yang relatif terhadap ukuran font root, berbeda dengan em yang relatif terhadap ukuran font
          element induk. ch (character) unit ch didasarkan pada lebar karakter 0 dari font yang digunakan element untuk
          menetapkan lebar elemen teks berdasarkan ukuran font. misal 20ch artinya seukuran 20 karakter. Ex (x-height) unit
          ex didasarkan pada tinggi huruf kecil dari font yang digunakan element, berguna untuk mengatur tinggi element text
          berdasarkan tinggi karakter. Fr (fraction) unit fr digunakan dalam konteks grid dan mewakili sebagian dari ruang
          yang tersedia dalam grid container untuk tata letak grid fleksibel. Percentages css3 memperluas penggunaan
          percentages dimana dapat digunakan dalam lebih banyak konteks seperti padding, margin yang relatif terhadap ukuran
          induk.`,
  },
  {
    text: "unit untuk desain responseive",
    content: `Unit-unit untuk membantu web responsive diantaranya: viewport units (vw, vh, vmax, vmin), precentages, rem, fr, em,
          css media queries`,
  },
  {
    text: "css specifity",
    content: `css specificity adalah aturan browser untuk menerapkan style tertentu ketika ada konflik. style yang spesifikasinya
          paling besar yang akan diterapkan. berikut spesifikasinya: inline style 1000, id selector 100, class dan atribut
          selektor 10, type selektor 1, kombinasi selektor 111. jika ada !important maka diutamakan tapi masih mengikut
          aturan spesifikasi.`,
  },
  {
    text: "cara membuat variable dalam css",
    content: `variabel css dideklarasikan dengan -- dan diakses dengan fungsi var(), di dalam element :root. variabel bisa diubah
          di element spesifik dengan override nama variabel, dan bisa dibuat nilai opsional atau nilai default jika variabel
          tidak tersedia.`,
  },
  {
    text: "inline vs block vs inline-block",
    content: `block, inline, dan inline-block merupakan value dari property display. inline tidak memulai baris baru, hanya
          mengambil ruang yang diperlukan kotennya, tidak menerima property width dan height, margin dan padding vertikal
          tidak mempengaruhinya tapi horizontal berfungsi. block memulai baris barus mengambil seluruh lebar baris meskipun
          kontentnya sedikit, menerima properti dimensi width dan height, margin dan padding berfungsi normal baik horizontal
          maupun vertikal. inline-block tidak memulai baris baru, hanyak mengambil ruang yang diperlukan kontennya namun bisa
          diatur dimensi width dan height, margin dan padding berfungsi normal.`,
  },
  {
    text: "pseudo class",
    content: `pseudo-class adalah keyword yang ditambahkan ke selector dalam css untuk menentukan keadaan khusus dari element.
          diawali dengan :, berikut keadaan khusus: hover, active, focus, first-child, last-child, nth-child(2), not(.class),
          input[type="checkbox"]:checked, iput:disabled, before, after.`,
  },
  {
    text: "cara buat div dalam div ada di tengah",
    content: `cara membuat div dalam div agar di tengah: dengan flexbox, grid, positioning, dan margin auto`,
  },
  { text: "grid system", content: `nanti` },
  { text: "aturen css ruelset", content: `nanti` },
];

export default function CssQuestions() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={cssQuestionMenus} />
    </div>
  );
}
