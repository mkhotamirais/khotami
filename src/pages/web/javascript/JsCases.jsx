import { Acc } from "../../../components/Components";

const JsCase1 = () => (
  <pre className="text-sm">{`
        const data = [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 7 },
    ];
    const maxVal = data.reduce((acc, d) => (acc = acc > d.value ? acc : d.value), 0);
    const maxVal2 = Math.max(...data.map((data) => data.value));
    console.log(maxVal, maxVal2);`}</pre>
);

const JsCase2 = () => (
  <pre className="text-sm">{`
        // filter duplicate
        const arrDuplicate = ["a", "b", "c", "a", "d", "f", "b", "d"];
        const arrSingle = arrDuplicate.filter((item, i) => arrDuplicate.indexOf(item) === i);
        console.log(arrDuplicate, arrSingle);
        
        // filter biasa
        const arrToSorting = [2, 10, 4, 30, 6, 50];
        console.log(arrToSorting.sort());
        arrToSorting.sort((a, b) => console.log(a, b, a - b));
        const arrSort = arrToSorting.sort((a, b) => a - b);
        console.log(arrSort);
            `}</pre>
);

const JsCase3 = () => (
  <pre className="text-sm">{`
        // ------- part 1
        const arr = [
          [{ id: "1a", nama: "ahmad" }],
          [
            { id: "2a", nama: "abdul" },
            { id: "1a", nama: "ahmad" },
            { id: "3a", nama: "siti" },
          ],
          [{ id: "1a", nama: "ahmad" }],
        ];
        const newArr = [];
        const il = [];
        let ilMax = 0;
        arr.map((item, i) => {
          il.push(item.length);
          ilMax = il.reduce((a, b) => Math.max(a, b));
          for (let i = 0; i < ilMax; i++) {
            if (item[i]) {
              newArr.push(item[i]);
            }
          }
        });
        
        const ids = newArr.map((o) => o.id);
        const filtered = newArr.filter(({ id }, index) => !ids.includes(id, index + 1));
        
        console.log(filtered);
        
        // ------- part 2
        const arr = [
          {
            nama: "ahmad",
            teman: [
              {
                id: 1,
                namaTeman: "abdul",
              },
            ],
          },
          {
            nama: "ahmad",
            teman: [
              {
                id: 1,
                namaTeman: "abdul",
              },
              {
                id: 2,
                namaTeman: "siti",
              },
            ],
          },
          {
            nama: "ayu",
            teman: [
              {
                id: 2,
                namaTeman: "siti",
              },
            ],
          },
        ];
        
        const arr2 = arr.filter((item) => {
          return item.nama == "ahmad";
        });
        const arr3 = arr2.map((item) => {
          return item.teman;
        });
        const arr4 = [];
        const il = [];
        let ilMax = 0;
        arr3.map((item) => {
          il.push(item.length);
          ilMax = il.reduce((a, b) => Math.max(a, b));
          for (let i = 0; i < ilMax; i++) {
            if (item[i]) {
              arr4.push(item[i]);
            }
          }
        });
        const ids = arr4.map((o) => o.id);
        const filtered = arr4.filter(({ id }, index) => !ids.includes(id, index + 1));
        console.log(arr2);
        console.log(arr3);
        console.log(filtered);
            `}</pre>
);

const jsCasesMenus = [
  { text: "max/min value pada array object", content: <JsCase1 /> },
  { text: "js filter sort", content: <JsCase2 /> },
  { text: "filter arr of obj", content: <JsCase3 /> },
];

export default function JsCases() {
  return (
    <div className="border rounded p-2">
      <Acc menus={jsCasesMenus} />
    </div>
  );
}
