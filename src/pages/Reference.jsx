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

const FlexRef = ({ menus }) => {
  return (
    <div className="flex flex-wrap gap-3 text-3xl justify-around w-full p-3 my-3">
      {menus.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="flex flex-col items-center gap-2 hover:text-cyan-500 border-x px-4 rounded-b-lg"
        >
          {item.icon}
          <span className="text-base">{item.text}</span>
        </a>
      ))}
    </div>
  );
};
FlexRef.propTypes;

const basicWebMenu = [
  { href: "#", text: "Html5", icon: <SiHtml5 /> },
  { href: "#", text: "Css3", icon: <SiCss3 /> },
  { href: "#", text: "Javascript", icon: <SiJavascript /> },
  { href: "#", text: "Php", icon: <SiPhp /> },
];
const cssFwAndDesignMenu = [
  { href: "#", text: "Tailwindcss", icon: <SiTailwindcss /> },
  { href: "#", text: "Bootstrap", icon: <SiBootstrap /> },
  { href: "#", text: "Materialize", icon: <DiMaterializecss /> },
  { href: "#", text: "Bulma", icon: <SiBulma /> },
  { href: "#", text: "Sass", icon: <SiSass /> },
  { href: "#", text: "Figma", icon: <SiFigma /> },
];
const JsFwAndLibMenu = [
  { href: "#", text: "Alpine", icon: <SiAlpinedotjs /> },
  { href: "#", text: "Jquery", icon: <SiJquery /> },
  { href: "#", text: "Typescript", icon: <SiTypescript /> },
  { href: "#", text: "React", icon: <SiReact /> },
  { href: "#", text: "Angular", icon: <SiAngular /> },
  { href: "#", text: "Vue", icon: <SiVuedotjs /> },
  { href: "#", text: "Babel", icon: <SiBabel /> },
];
const phpFwMenu = [
  { href: "#", text: "Codeigniter", icon: <SiCodeigniter /> },
  { href: "#", text: "Laravel", icon: <SiLaravel /> },
  { href: "#", text: "Symfony", icon: <SiSymfony /> },
];
const nodeLibMenu = [
  { href: "#", text: "Node", icon: <SiNodedotjs /> },
  { href: "#", text: "Express", icon: <SiExpress /> },
];
const deployMenu = [
  { href: "#", text: "Vercel", icon: <SiVercel /> },
  { href: "#", text: "Netlify", icon: <SiNetlify /> },
  { href: "#", text: "Heroku", icon: <SiHeroku /> },
  { href: "#", text: "Hostinger", icon: <SiHostinger /> },
  { href: "#", text: "Rumahweb", icon: <SiRumahweb /> },
];
const buildToolMenu = [
  { href: "#", text: "Vite", icon: <SiVite /> },
  { href: "#", text: "Next", icon: <SiNextdotjs /> },
  { href: "#", text: "Stackblitz", icon: <SiStackblitz /> },
  { href: "#", text: "Codesandbox", icon: <SiCodesandbox /> },
  { href: "#", text: "Codepen", icon: <SiCodepen /> },
];
const databaseMenu = [
  { href: "#", text: "Mysql", icon: <SiMysql /> },
  { href: "#", text: "Mongodb", icon: <SiMongodb /> },
  { href: "#", text: "Oracle", icon: <SiOracle /> },
  { href: "#", text: "Postgresql", icon: <SiPostgresql /> },
];
const vcsMenu = [
  { href: "#", text: "Git", icon: <SiGit /> },
  { href: "#", text: "Github", icon: <SiGithub /> },
  { href: "#", text: "Gitlab", icon: <SiGitlab /> },
  { href: "#", text: "Bitbucket", icon: <SiBitbucket /> },
];
const apiPlatformMenu = [
  { href: "#", text: "Laragon", icon: <SiLaragon /> },
  { href: "#", text: "Xampp", icon: <SiXampp /> },
  { href: "#", text: "Mamp", icon: <SiMamp /> },
  { href: "#", text: "Postman", icon: <SiPostman /> },
  { href: "#", text: "Insomnia", icon: <SiInsomnia /> },
];
export const BasicWeb = () => <FlexRef menus={basicWebMenu} />;
export const CssFwAndDesign = () => <FlexRef menus={cssFwAndDesignMenu} />;
export const JsFwAndLib = () => <FlexRef menus={JsFwAndLibMenu} />;
export const PhpFw = () => <FlexRef menus={phpFwMenu} />;
export const NodeLib = () => <FlexRef menus={nodeLibMenu} />;
export const Deploy = () => <FlexRef menus={deployMenu} />;
export const BuildTool = () => <FlexRef menus={buildToolMenu} />;
export const Database = () => <FlexRef menus={databaseMenu} />;
export const Vcs = () => <FlexRef menus={vcsMenu} />;
export const ApiPlatform = () => <FlexRef menus={apiPlatformMenu} />;
