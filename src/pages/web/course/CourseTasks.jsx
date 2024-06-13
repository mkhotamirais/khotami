import { Tabs } from "../../../components/Components";

const taskMenus = [
  { src: "../../eduwork/tugas1-html/index.html", text: "task-html" },
  { src: "../../eduwork/tugas2-bootstrap/index.html", text: "task-bootstrap" },
  { src: "../../eduwork/tugas3-jsbasic/index.html", text: "task-js" },
  { src: "../../eduwork/tugas4-miniLibrary/index.html", text: "task-oop" },
  { src: "https://mkhotami.vercel.app/public-apis/jsonplaceholder", text: "task-jp" },
  { src: "https://mkhotami.vercel.app/public-apis/newsapi", text: "task-jwsapi" },
  { src: "https://mkhotami.vercel.app/public-apis/sisko", text: "task-sisko" },
  { src: "https://mkhotami.vercel.app/projects/shop", text: "task-ecommerce" },
];

const CourseTasks = () => {
  return (
    <div>
      <Tabs initialActive={"task-html"} menus={taskMenus} type="iframe" />
      <div>Link lainnya: datatables.net dan gridjs.io</div>
    </div>
  );
};

export default CourseTasks;
