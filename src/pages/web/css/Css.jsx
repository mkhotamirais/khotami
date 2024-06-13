import { Tabs, Title } from "../../../components/Components";
import CssBasic from "./CssBasic";
import CssQuestions from "./CssQuestions";

const cssTabMenus = [
  { text: "basic", content: <CssBasic /> },
  { text: "questions", content: <CssQuestions /> },
];
const Css = () => {
  return (
    <div>
      <Title left>
        <div>Css</div>
      </Title>
      <Tabs initialActive={"basic"} menus={cssTabMenus} desc />
    </div>
  );
};

export default Css;
