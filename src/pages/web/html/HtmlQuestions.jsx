import { Acc } from "../../../components/Components";

const htmlQuestionMenus = [
  {
    text: "div vs span",
    content: `div termasuk block level element artinya selalu memulai baris baru dan mengambil lebar penuh dari konten induknya;
          span termasuk inline-level element artinya span tidak memulai baris baru dan hanya mengambil lebar yang diperlukan
          oleh kontennya`,
  },
  {
    text: "html vs xhtml",
    content: `html dan xhtml adalah dua bahasa markup untuk membuat halaman web. html hypertext markup language lebih fleksibel
          dan toleran kesalahan, browser web biasanya bisa perbaikinya. tag html tidak case-sensitive dan tag penutup tidak
          selalu diperlukan. xhtml eXtensible hypertext markup language lebih ketat dan sesuai standarr xml yang praktik
          penulisan kodenya lebih bersih dan konsisten.`,
  },
  {
    text: "element vs tag",
    content: `element adalah unit dasar html yang lengkap terdiri dari tag pembuka, konten dan tag penutup. ia mendefinisikan
          struktur dan konten dari web page. tag adalah komponen dasar html untuk membuat elemen html, ditulis dengan dua
          kurung siku jenisnya ada tag pembuka, tag penutup dan self-closing tag.`,
  },
  {
    text: "semantic html",
    content: `semantic html adalah penggunaan tag html yang memiliki arti atau makna tertentu yang menggambarkan tujuan dan
          struktur kontent dalam dokumen web tujuannya untuk meningkatkan keterbacaan kode oleh manusia dan mesin,
          aksesibilitas, seo, dan mematuhi standar dan best practice rekomendasi w3c. contohnya tag header, footer, main,
          nav, aside, article, section, figure, figcaption`,
  },
  {
    text: "fungsi !DOCTYPE",
    content: `!DOCTYPE singkatan dari document type declaration dalah deklarasi yang muncul paling atas yang memberi tahu browser
          mengenai versi dan tipe dokumen html yang digunakan sehingga browser dapat menampilkan halaman yang sesuai. doctype
          penting untuk konsistensi rendering dengan menetapkan mode standar akan dirender secara konsisten di berbagai
          browser dan menghindari quirks mode yakni tampilan tidak terduga karena browser mencoba mendukung prilaku lama
          tidak standar.`,
  },
  { text: "quirks mode", content: `quirks mode adalah` },
];

export default function HtmlQuestions() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={htmlQuestionMenus} />
    </div>
  );
}
