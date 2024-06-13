import { Acc } from "../../../components/Components";

// const Javascript = () => (
//     <div>
//         Javascript is
//     </div>
// )

const jsKeywordsMenus = [
  { text: "1. Javascript", content: "" },
  { text: "", content: "" },
];

export default function JsKeywords() {
  return (
    <div className="border rounded p-2 mt-2">
      <Acc menus={jsKeywordsMenus} />
    </div>
  );
}
