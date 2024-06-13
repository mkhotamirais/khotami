import { Tabs, Title } from "../../../components/Components";
import ReactBasic from "./ReactBasic";
import ReactClass from "./ReactClass";
import ReactQuestions from "./ReactQuestions";
import ReactHooks from "./reactHooks/ReactHooks";

const reactjsTabMenus = [
  { text: "basic", content: <ReactBasic /> },
  { text: "class component / stateful", content: <ReactClass /> },
  { text: "functional compoentn / stateless with hook", content: <ReactHooks /> },
  { text: "questions", content: <ReactQuestions /> },
];

export default function Reactjs() {
  return (
    <div>
      <Title>
        <div>ReactJs</div>
      </Title>
      <Tabs initialActive={"basic"} menus={reactjsTabMenus} desc />
    </div>
  );
}
