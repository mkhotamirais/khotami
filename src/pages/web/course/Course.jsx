import { Tabs, Title } from "../../../components/Components";
import CourseTasks from "./CourseTasks";
import CourseWork from "./CourseWork";

const courseTabMenus = [
  { text: "task", content: <CourseTasks /> },
  { text: "work", content: <CourseWork /> },
  { text: "questions", content: "questions" },
];

const Course = () => {
  return (
    <div>
      <Title left>
        <div>Javascript</div>
      </Title>
      <Tabs initialActive={"task"} menus={courseTabMenus} />
    </div>
  );
};

export default Course;
