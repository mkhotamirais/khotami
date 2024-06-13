import { Tabs, Title } from "../../../components/Components";
import NodeModules from "./NodeModules";
import NodeNpm from "./NodeNpm";

const nodejsTabMenus = [
  { text: "node modules", content: <NodeModules /> },
  { text: "node npm", content: <NodeNpm /> },
];

export default function Nodejs() {
  return (
    <div>
      <Title left>
        <div>Javascript</div>
      </Title>
      <Tabs initialActive={"node modules"} menus={nodejsTabMenus} desc />
    </div>
  );
}
