import { useEffect, useState } from "react";

export default function UseEffect() {
  return (
    <div>
      UseEffect
      <div>
        <p>
          useEffect (sideeffect/effect) adalah hook react yang digunakan untuk menangai efek samping dalam functional
          component. hook ini menggantikan lifecycle class component. Side effect adalah operasi yang mempengaruhi sesuatu di
          luar ruang lingkup fungsi seperti <b>pemanggilan api, event listener, manipulasi dom, time atau interval.</b>
          Effect dependensi adalah array berisi identifier barupa variable atau fungsi yang tentukan kapan fungsi dipanggil.
          jika tidak ada maka fungsi effect dipanggil saat komponen terdetensi rerender. jika array kosong effect dipanggil
          saat render pertama. Render loop terjadi saat sebuah effect mengubah nilai dependensinya sendiri.
        </p>
        <p>
          Clean up function adalah return berupa fungsi dari sebuah effect yang akan dijalankan saat komponen tidak lagi
          digunakan. Banyak yang menyebut mirip componentWillUnmount namun sebenarnya berbeda. componentWillUnmount
          dijalankan ketika komponen dihapus dari interface sedangkan clean up akan dipanggil ketika salah satu nilai dari
          dependecy effect berubah. urutan eksekusi: render, effect, perubahan state, re-render dengan state baru, clean up
          function, effect selanjutnya dijalankan
        </p>
        <div>EFFECT API</div>
        <EffectApi />
        <div>EVENT LISTENER</div>
        <div>MANIPULASI DOM</div>
        <div>TIME AND INTERVAL</div>
      </div>
    </div>
  );
}

const EffectApi = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`error fetching data` + err));
  }, []);
  return (
    <div className="border rounded p-2 max-w-min">
      Effect Pemanggilan API jsonplaceholder (https://jsonplaceholder.typicode.com/users)
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
