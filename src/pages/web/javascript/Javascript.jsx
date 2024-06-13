import { Tabs, Title } from "../../../components/Components";
import JsQuestions from "./JsQuestions";
import JsBasic from "./JsBasic";
import JsAdvance from "./JsAdvance";
import JsCases from "./JsCases";

const jsTabMenus = [
  { text: "basic", content: <JsBasic /> },
  { text: "object", content: <JsAdvance /> },
  { text: "cases", content: <JsCases /> },
  { text: "questions", content: <JsQuestions /> },
];

const Javascript = () => {
  return (
    <div>
      <Title left>
        <div>Javascript</div>
      </Title>
      <Tabs initialActive={"basic"} menus={jsTabMenus} desc />
    </div>
  );
};

export default Javascript;
