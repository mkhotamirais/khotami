import { FaSun, FaMoon, FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { removeOpenAside, removeOpenNav, toggleOpenNav, toggleTheme } from "../app/features/basicSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePath } from "./Hooks";
import { navMenus } from "../lib/data";

export default function Header() {
  return (
    <>
      <header
        className={`z-30 dark:bg-slate-800 bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm shadow-md h-16 sticky top-0 border-b px-3 md:px-16 lg:px-24`}
      >
        <div className="flex h-full justify-between items-center gap-5">
          <div className="min-w-max flex gap-4 uppercase">
            <Logo />
          </div>
          <div className="w-full">
            <NavMain />
          </div>
          <div className="flex gap-4 items-center">
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
  const { openNav } = useSelector((state) => state.basic);
  return (
    <div
      className={`z-50 block sm:hidden dark:bg-slate-800 bg-white ${
        openNav ? "scale-y-100" : "scale-y-0"
      } origin-top fixed top-16 w-full border-b shadow rounded-b-lg p-3 transition-all duration-150`}
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
  const { theme } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button onClick={() => dispatch(toggleTheme())} className="w-5 h-5 text-xl overflow-hidden">
      <FaMoon className={`${theme === "dark" ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`} />
      <FaSun className={`${theme === "dark" ? "-translate-y-full" : "translate-y-0"} transition-all duration-100`} />
    </button>
  );
};
