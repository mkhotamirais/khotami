import { Tabs, Title } from "../components/Components";
import {
  SiOracle,
  SiPostgresql,
  SiHeroku,
  SiHostinger,
  SiRumahweb,
  SiStackblitz,
  SiCodesandbox,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCodepen,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiVuedotjs,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiBulma,
  SiExpress,
  SiCodeigniter,
  SiBabel,
  SiJquery,
  SiAlpinedotjs,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiLaragon,
  SiInsomnia,
  SiNextdotjs,
  SiVite,
  SiVercel,
  SiNetlify,
  SiXampp,
  SiMamp,
  SiSymfony,
} from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";

const BasicWeb = () => (
  <>
    <SiHtml5 />
    <SiCss3 />
    <SiJavascript />
    <SiPhp />
  </>
);
const CssFwAndDesign = () => (
  <>
    <SiTailwindcss />
    <SiBootstrap />
    <DiMaterializecss />
    <SiBulma />
    <SiSass />
    <SiFigma />
  </>
);
const JsFwAndLib = () => (
  <>
    <SiAlpinedotjs />
    <SiJquery />
    <SiTypescript />
    <SiReact />
    <SiAngular />
    <SiVuedotjs />
    <SiBabel />
  </>
);
const PhpFw = () => (
  <>
    <SiCodeigniter />
    <SiLaravel />
    <SiSymfony />
  </>
);
const NodeLib = () => (
  <>
    <SiNodedotjs />
    <SiExpress />
  </>
);
const Deploy = () => (
  <>
    <SiVercel />
    <SiNetlify />
    <SiHeroku />
    <SiHostinger />
    <SiRumahweb />
  </>
);
const BuildTool = () => (
  <>
    <SiVite />
    <SiNextdotjs />
    <SiStackblitz />
    <SiCodesandbox />
    <SiCodepen />
  </>
);
const Database = () => (
  <>
    <SiMysql />
    <SiMongodb />
    <SiOracle />
    <SiPostgresql />
  </>
);
const Vcs = () => (
  <>
    <SiGit />
    <SiGithub />
    <SiGitlab />
    <SiBitbucket />
  </>
);
const ApiPlatform = () => (
  <>
    <SiLaragon />
    <SiXampp />
    <SiMamp />
    <SiPostman />
    <SiInsomnia />
  </>
);

const referenceMenus = [
  { text: "Basic Website", content: <BasicWeb /> },
  { text: "CSS Framework and Design", content: <CssFwAndDesign /> },
  { text: "Js Framework adn Library", content: <JsFwAndLib /> },
  { text: "PHP Framework", content: <PhpFw /> },
  { text: "Node Library", content: <NodeLib /> },
  { text: "Deploy", content: <Deploy /> },
  { text: "Buildtool", content: <BuildTool /> },
  { text: "Database", content: <Database /> },
  { text: "VCS", content: <Vcs /> },
  { text: "Api Platform", content: <ApiPlatform /> },
];

const cssTipsMenus = [
  { src: "../../css-tips/accordion.html", text: "accordion" },
  { src: "../../css-tips/stickyChildTw.html", text: "stickyChildTw" },
  { src: "../../css-tips/stickyChildGridTw.html", text: "stickyChildGridTw" },
  { src: "../../css-tips/stickyChildFlexTw.html", text: "stickyChildFlexTw" },
  { src: "../../css-tips/neumorphism.html", text: "neumorphism" },
  { src: "../../css-tips/stickyChild.html", text: "stickyChild" },
  { src: "../../css-tips/stickyChildFlex.html", text: "stickyChildFlex" },
  { src: "../../css-tips/stickyChildGrid.html", text: "stickyChildGrid" },
  { src: "../../css-tips/centerDivMethods.html", text: "centerDivMethods" },
];

const simpleWebpageMenus = [
  { src: "../../staticweb/mrwd1/index.html", text: "mrwd1" },
  { src: "../../staticweb/mrwd2/index.html", text: "mrwd2" },
  { src: "../../staticweb/nuruliman/index.html", text: "nuruliman" },
  { src: "../../staticweb/wpu-bs1/index.html", text: "wpu-bs1" },
  { src: "../../staticweb/wpu-bs2/index.html", text: "wpu-bs2" },
  { src: "../../staticweb/wpu-mtrz1/index.html", text: "wpu-mtrz1" },
  { src: "../../staticweb/omdbapi/index.html", text: "omdbapi" },
];

const vanillaComponentsMenus = [
  { src: "../../vanilla-components/carousel/index.html", text: "carousel" },
  { src: "../../vanilla-components/carousel2/index.html", text: "carousel2" },
];

export default function Home() {
  return (
    <div>
      <div className="text-center my-3">Hello, My name is Mkhotami, I am a web developer</div>
      <Title>Reference</Title>
      <Tabs initialActive={"Basic Website"} menus={referenceMenus} type="btnLink" />
      <Title>css tips</Title>
      <Tabs initialActive={"accordion"} menus={cssTipsMenus} type="iframe" />
      <Title>Simple Webpage</Title>
      <Tabs initialActive={"mrwd1"} menus={simpleWebpageMenus} type="iframe" />
      <Title>VanillaComponents</Title>
      <Tabs initialActive={"carousel"} menus={vanillaComponentsMenus} type="iframe" />
    </div>
  );
}
