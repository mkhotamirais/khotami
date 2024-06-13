import { memo, useState } from "react";

export default function MemoComponent() {
  return (
    <div>
      MemoComponent
      <MemoRerender />
      <p>
        memo dan useMemo, keduanya berfungsi untuk memoisasi komponen. memo memoisasi keseluruhan komponen. useMemo memoisasi
        nilai di dalam komponen. memo hanya memoisasi referensi dari props yang diterima oleh komponen tersebut. nilai lokal
        tidak akan dimemoisasi, jika ingin memoisasi nilai lokal maka gunakan useMemo.
        <br />
        useMemo dan useCallback sama-sama untuk memoisasi, bedanya useMemo untuk memoisasi value sedangkan useCallback untuk
        memoisasi function. <br />
        memoisasi komponen adalah teknik dalam react untuk meningkatkan performa aplikasi dengan menghindari render ulang
        yang tidak perlu. melalui penyimpanan dan pembanding hasil render sebelumnya.
        <br />
        saat komponen render ulang, react melakukan sejumlah pekerjaan di belakang layar, termasuk membandingkan virtual dom
        untuk menentukan apakah perlu perbarui tambilan di aktuan DOM. proses ini menjadi malah secara komputasi apalagi
        logikanya kompleks. <br />
        ketika komponen dibungkus denga memo react secara otomatis melakukan memoisasi komponen tersebut dan memutuskan
        apakah perlu dirender ulang berdasarkan perubahan props atau tidak. <br />
        proses yang mahal secara komputasi mengacu pada operasi atau perhitungan yang membutuhkan banyak sumber daya
        komputasi, seperti waktu CPU atau memori. Dalam konteks React, ini dapat merujuk pada operasi yang memakan waktu saat
        merender komponen, seperti melakukan perhitungan yang kompleks atau memproses banyak data.
      </p>
    </div>
  );
}

const CompWithMemo = memo(({ name }) => {
  console.log(`component ini rerender apabila prop yang diterimanya berubah, di komponen ini propnaya "name"`);
  return <div>component with memo, misalnya kalau nama {name} berubah maka akan rerender</div>;
});
CompWithMemo.displayName;
CompWithMemo.propTypes;

const CompWithoutMemo = () => {
  console.log(`component without memo rerender karena tanpa memo, padahal tidak perlu rerender karena tidak ada perubahan`);
  return <div>component without memo</div>;
};

function MemoRerender() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ahmad");
  return (
    <div>
      <div className="border rounded max-w-min flex items-center gap-2 p-2">
        <div className="min-w-max">count: {count}</div>
        <button onClick={() => setCount((prev) => prev + 1)} className="border rounded p-1 leading-none">
          +
        </button>
      </div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <CompWithMemo name={name} />
        <CompWithoutMemo />
      </div>
    </div>
  );
}
