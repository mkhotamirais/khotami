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
import { Tabs } from "../components/Components";

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

export default function Reference() {
  return <Tabs initialActive={"Basic Website"} menus={referenceMenus} type="btnLink" />;
}
