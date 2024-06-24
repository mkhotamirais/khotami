import { Tabs } from "../components/Components";
import Hero from "../components/Hero";
import { canvasMenus, cssTipsMenus, simpleWebpageMenus, vanillaComponentsMenus } from "../lib/data";
import {
  BasicWeb,
  CssFwAndDesign,
  JsFwAndLib,
  PhpFw,
  NodeLib,
  Deploy,
  BuildTool,
  Database,
  Vcs,
  ApiPlatform,
} from "./Reference";

const referenceMenus = [
  { text: "Basic Website", content: <BasicWeb />, description: "basic tools for building website" },
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

export default function Home() {
  return (
    <section className="mt-5">
      <Hero />
      <Tabs title="VanillaComponents" initialActive={"canvas1"} menus={canvasMenus} type="iframe" />
      <Tabs title="reference" initialActive={"Basic Website"} menus={referenceMenus} type="content" />
      <Tabs
        title="css tips"
        initialActive={"accordion"}
        menus={cssTipsMenus}
        type="iframe"
        className={`dark:bg-white`}
      />
      <Tabs title="sample webpage" initialActive={"mrwd1"} menus={simpleWebpageMenus} type="iframe" />
      <Tabs title="VanillaComponents" initialActive={"carousel"} menus={vanillaComponentsMenus} type="iframe" />
    </section>
  );
}
