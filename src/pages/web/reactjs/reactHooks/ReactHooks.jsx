import { Tabs } from "../../../../components/Components";
import UseEffect from "./UseEffect";
import UseState from "./UseState";

const reactHooksMenus = [
  { text: "useState", content: <UseState /> },
  { text: "useEffect", content: <UseEffect /> },
];

export default function ReactHooks() {
  return (
    <div className="sticky top-0">
      <Tabs initialActive={"useState"} menus={reactHooksMenus} />
    </div>
  );
}
