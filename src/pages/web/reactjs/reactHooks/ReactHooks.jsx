import { Tabs } from "../../../../components/Components";
import MemoComponent from "./MemoComponent";
import UseCallback from "./UseCallback";
import UseContext from "./UseContext";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

const reactHooksMenus = [
  { text: "useState", content: <UseState /> },
  { text: "useEffect", content: <UseEffect /> },
  { text: "useReducer", content: <UseReducer /> },
  { text: "useContext", content: <UseContext /> },
  { text: "memo component", content: <MemoComponent /> },
  { text: "useMemo", content: <UseMemo /> },
  { text: "useCallback", content: <UseCallback /> },
];

export default function ReactHooks() {
  return (
    <div className="sticky top-0">
      <Tabs initialActive={"useState"} menus={reactHooksMenus} />
    </div>
  );
}
