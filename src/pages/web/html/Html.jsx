import { Tabs, Title } from "../../../components/Components";
import HtmlBasic from "./HtmlBasic";
import HtmlQuestions from "./HtmlQuestions";

const htmlTabMenus = [
  { text: "basic", content: <HtmlBasic /> },
  { text: "questions", content: <HtmlQuestions /> },
];

const Html = () => {
  return (
    <div>
      <Title left>
        <div>Html</div>
      </Title>
      <Tabs initialActive={"basic"} menus={htmlTabMenus} desc />
    </div>
  );
};

export default Html;
