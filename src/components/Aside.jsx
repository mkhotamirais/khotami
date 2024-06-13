import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenAside, removeOpenNav, toggleOpenAside } from "../app/features/basicSlice";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { usePath } from "./Hooks";

const webMenus = [
  { href: "/web/html", text: "html" },
  { href: "/web/css", text: "css" },
  { href: "/web/js", text: "js" },
  { href: "/web/php", text: "php" },
  { href: "/web/vcs", text: "vcs" },
  { href: "/web/vscode", text: "vscode" },
  { href: "/web/ts", text: "ts" },
  { href: "/web/course", text: "course" },
  { href: "/web/umum", text: "umum" },
  { href: "/web/mongodb", text: "mongodb" },
  { href: "/web/mysql", text: "mysql" },
  { href: "/web/reactjs", text: "react" },
  { href: "/web/expressjs", text: "express" },
  { href: "/web/nodejs", text: "node" },
];

const appsMenus = [
  { href: "/apps/components", text: "components" },
  { href: "/apps/todo", text: "todo" },
];

export const AsideBtn = ({ className }) => {
  const dispatch = useDispatch();
  const { openNav } = useSelector((state) => state.basic);

  const handleClick = () => {
    dispatch(toggleOpenAside());
    if (openNav) dispatch(removeOpenNav());
  };
  return (
    <button onClick={handleClick} className={`block sm:hidden ${className}`}>
      <TbLayoutSidebarRightCollapse />
    </button>
  );
};
AsideBtn.propTypes;

export const AsideLinks = ({ className }) => {
  const [active, setActive] = useState("");
  const { path } = usePath();
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([]);
  const handleClick = () => {
    dispatch(removeOpenAside());
  };
  useEffect(() => {
    setActive(path[2]);
  }, [path]);

  useEffect(() => {
    if (path[1] === "home") setMenus([]);
    else if (path[1] === "web") setMenus(webMenus);
    else if (path[1] === "apps") setMenus(appsMenus);
  }, [path]);

  return (
    <>
      <div className="capitalize py-3 font-medium">{path[1] && path[1].split("-").join(" ")} menu</div>
      <div className={`${className} flex flex-col`}>
        {menus.map((menu, i) => (
          <NavLink
            onClick={handleClick}
            to={menu.href}
            key={i}
            className={`${active === menu.href.split("/")[2] ? "text-cyan-500" : ""} hover:text-cyan-500 py-1 capitalize`}
          >
            {menu.text}
          </NavLink>
        ))}
      </div>
    </>
  );
};
AsideLinks.propTypes;

export const AsideMain = ({ className }) => {
  return (
    <div className={`hidden sm:block ${className}`}>
      <AsideLinks />
    </div>
  );
};
AsideMain.propTypes;

export const AsideCollapse = ({ className }) => {
  const { dark, openAside } = useSelector((state) => state.basic);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`z-40 sm:hidden ${className} ${dark ? "bg-slate-800" : "bg-white"} ${
        openAside ? "scale-x-100" : "scale-x-0"
      } overflow-y-scroll origin-left p-3 fixed top-16 bottom-0 left-0 w-3/4 shadow border-r rounded-r-lg transition-all duration-150`}
    >
      <AsideLinks />
    </div>
  );
};
AsideCollapse.propTypes;
