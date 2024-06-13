import { useState } from "react";

export default function UseState() {
  return (
    <div>
      UseState
      <div>
        useState adalah salah satu hook react yang memungkinkan menambah state lokal ke functional component. sebelumnya
        hanya class component yang dapat memiliki state namun dengan useState functional componen juga bisa memiliki staete.
        State adalah object khusus yang bisa diinisialisasi dan dinamis yang menyimpan data atau informasi yang hanya bisa
        diakses di komponen terkait.
      </div>
      <pre className="text-sm">{`
state: Variabel yang menyimpan nilai state saat ini.
setState: Fungsi yang digunakan untuk memperbarui nilai state.
initialState: Nilai awal dari state, yang bisa berupa tipe data apapun (string, number, object, array, dll).      
`}</pre>
      <div>MODEL 1</div>
      <UseState1 />
      <pre className="text-sm">{`
function UseState1() {
  const [count, setCount] = useState(0);
  const inc = () => { setCount((prev) => prev + 1) };
  return (
    <div className="flex gap-2 items-center">
      <span>count: {count}</span>
      <button onClick={inc} className="leading-none p-1 border rounded">
        +
      </button>
    </div>
  );
}      
useState(0): inisialisasi state count dengan initialstate (nilai awal) 0.
const [count, setCount]: deklarasi state count dan fungsi setCount untuk memperbarui state count.
const inc = (p) => { setCount(prev => prev +1) }: Fungsi inc memperbarui state count dengan menambah nilainya sebanyak 1.
<button onClick={inc}>+</button>: button memanggil fungsi inc saat diklik
`}</pre>
      <div>MODEL 2</div>
      <UseState2 />
      <pre className="text-sm">{`
function UseState2() {
  const [user, setUser] = useState({ name: "", age: "" });
  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const updateAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };
  return (
    <div className="border rounded p-2 max-w-min">
      <input type="text" placeholder="name" value={user.name} onChange={updateName} className="border" />
      <input type="number" placeholder="age" value={user.age} onChange={updateAge} className="border" />
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
    </div>
  );
}

useState({ name: '', age: '' }): Menginisialisasi state user dengan object yang memiliki properti name dan age.
const [user, setUser]: Mendeklarasikan state user dan fungsi setUser untuk memperbarui state user.
Fungsi updateName dan updateAge memperbarui state user dengan nilai baru dari input. Penggunaan { ...user, name: e.target.value } dan { ...user, age: e.target.value } memastikan bahwa hanya properti yang relevan yang diperbarui, sementara properti lainnya tetap tidak berubah.
`}</pre>
    </div>
  );
}

function UseState1() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="flex gap-2 items-center border rounded max-w-min p-2">
      <div className="min-w-max">count: {count}</div>
      <button onClick={inc} className="leading-none p-1 border rounded">
        +
      </button>
    </div>
  );
}

function UseState2() {
  const [user, setUser] = useState({ name: "", age: "" });
  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const updateAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };
  return (
    <div className="border rounded p-2 max-w-min">
      <input type="text" placeholder="name" value={user.name} onChange={updateName} className="border" />
      <input type="number" placeholder="age" value={user.age} onChange={updateAge} className="border" />
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
    </div>
  );
}
