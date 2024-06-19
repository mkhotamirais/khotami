import { Tabs, Title } from "../components/Components";
import { cssTipsMenus, simpleWebpageMenus, vanillaComponentsMenus } from "../lib/data";
import Reference from "./Reference";

export default function Home() {
  return (
    <section className="mt-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div>
          <Title>Reference</Title>
          <Reference />
        </div>
        <div>
          <Title>css tips</Title>
          <Tabs initialActive={"accordion"} menus={cssTipsMenus} type="iframe" />
        </div>
      </div>
      <Title>Simple Webpage</Title>
      <Tabs initialActive={"mrwd1"} menus={simpleWebpageMenus} type="iframe" iframeHeight="h-96" />
      <Title>VanillaComponents</Title>
      <Tabs initialActive={"carousel"} menus={vanillaComponentsMenus} type="iframe" iframeHeight="h-96" />
    </section>
  );
}
