import { FaSun, FaMoon, FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { removeOpenAside, removeOpenNav, toggleDark, toggleOpenNav } from "../app/features/basicSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePath } from "./Hooks";

const navMenus = [
  { href: "", text: "home" },
  { href: "web", text: "web" },
  { href: "apps", text: "apps" },
];

export default function Header() {
  const { dark } = useSelector((state) => state.basic);
  return (
    <>
      <header className={`z-30 ${dark ? "bg-slate-800" : "bg-white"} h-16 sticky top-0 border-b px-3 lg:px-12`}>
        <div className="flex h-full justify-between items-center gap-5">
          <div className="min-w-max flex gap-4 uppercase">
            <Logo />
          </div>
          <div className="w-full">
            <NavMain />
          </div>
          <div className="flex gap-3 items-center">
            <DarkMode />
            <SourceCode />
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
      <ScrollRestoration />
    </>
  );
}

// nav
const NavBtn = () => {
  const { openNav, openAside } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenNav());
    if (openAside) dispatch(removeOpenAside());
  };

  return (
    <button
      onClick={handleClick}
      className={`block sm:hidden text-xl ${openNav ? "rotate-180" : ""} transition-all duration-100`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

const NavContent = ({ classLink }) => {
  const [active, setActive] = useState("home");
  const dispatch = useDispatch();
  const { path } = usePath();
  const handleClick = () => {
    dispatch(removeOpenNav());
  };
  useEffect(() => {
    setActive(path[1]);
  }, [path]);
  return navMenus.map((item, i) => (
    <NavLink
      onClick={handleClick}
      to={item.href}
      key={i}
      className={`${classLink} ${active === item.href ? "text-cyan-500" : ""} hover:text-cyan-500 capitalize`}
    >
      {item?.text}
    </NavLink>
  ));
};

const NavMain = () => {
  return (
    <div className="hidden sm:block">
      <div className="flex gap-3">
        <NavContent />
      </div>
    </div>
  );
};

const NavCollapse = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  return (
    <div
      className={`z-50 block sm:hidden ${dark ? "bg-slate-800" : "bg-white"} ${
        openNav ? "scale-y-100" : "scale-y-0"
      } origin-top fixed top-16 w-full border-b shadow rounded-lg p-3 transition-all duration-100`}
    >
      <div className="flex flex-col">
        <NavContent classLink={"py-2 border-b rounded"} />
      </div>
    </div>
  );
};

// logo, source code, dark mode
const Logo = () => {
  return (
    <a href="/" className="flex flex-col gap-1 *:leading-none min-w-max">
      <div className="text-xl font-medium">Khotami</div>
    </a>
  );
};

const SourceCode = () => {
  return (
    <a href="" className="text-xl">
      <FaGithub />
    </a>
  );
};

const DarkMode = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleDark())} className="w-5 h-5 text-xl overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`} />
    </button>
  );
};
