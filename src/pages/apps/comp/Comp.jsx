import { Tabs, Title } from "../../../components/Components";
import LibraryComponents from "./libraryComponents/LibraryComponents";
import { Accordion } from "./reactComponents/accordion/Accordion";
import AutoType from "./reactComponents/autoType/AutoType";
import { Carousel } from "./reactComponents/carousel/Carousel";
import Pagination from "./reactComponents/pagination/Pagination";

const reactComponentMenus = [
  { text: "accordion", content: <Accordion /> },
  { text: "autotype", content: <AutoType /> },
  { text: "carousel", content: <Carousel /> },
  { text: "pagination", content: <Pagination /> },
];

export default function Comp() {
  return (
    <div>
      <Title>React Components</Title>
      <Tabs initialActive={"accordion"} menus={reactComponentMenus} />
      <LibraryComponents />
    </div>
  );
}
