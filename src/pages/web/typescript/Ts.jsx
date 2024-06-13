import { Tabs, Title } from "../../../components/Components";
import TsBasic from "./TsBasic";
import TsQuestions from "./TsQuestions";

const tsTabMenus = [
  { text: "basic", content: <TsBasic /> },
  { text: "questions", content: <TsQuestions /> },
];

const Ts = () => {
  return (
    <div>
      <Title left>
        <div>Typescript</div>
      </Title>
      <Tabs initialActive={"basic"} menus={tsTabMenus} desc />
    </div>
  );
};

export default Ts;
