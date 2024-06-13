import {
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
  FaArrowUpRightFromSquare,
  FaCirclePlus,
  FaCircleMinus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { usePath } from "./Hooks";
import { useSelector } from "react-redux";
import { PiSpinner } from "react-icons/pi";
import { useState } from "react";

export function Title({ className, children, left = false }) {
  return (
    <h1
      className={`${className} text-xl my-2 font-medium capitalize flex items-center gap-2 ${
        left ? "justify-start" : "justify-center"
      }`}
    >
      {children}
    </h1>
  );
}
Title.propTypes;

export function Prev({ className }) {
  return (
    <div className={`${className}`}>
      <Link to={-1} className="hover:text-cyan-600">
        <FaChevronLeft />
      </Link>
    </div>
  );
}
Prev.propTypes;

export function Next({ className }) {
  return (
    <div className={`${className}`}>
      <Link to={1} className="hover:text-cyan-600">
        <FaChevronRight />
      </Link>
    </div>
  );
}
Next.propTypes;

export function Breadcrumb({ className }) {
  const { path } = usePath();
  return (
    <div className={`${className} py-1 border-b overflow-x-scroll w-full`}>
      <div className="flex items-center gap-1">
        <div className="text-xs flex gap-3">
          <Prev />
          <Next />
        </div>
        <div className="flex min-w-max overflow-x-hidden">
          {path.map((item, i) => {
            let to;
            if (i === 0) to = "..";
            else if (item === "detail" || item === "update") to = "#";
            else to = "/" + location.pathname.split("/").splice(1, path.indexOf(item)).join("/");
            return (
              <Link to={to} key={i}>
                <div className="inline px-1 hover:text-cyan-500 hover:underline">{item.split("-").join(" ")}</div>
                {i < path.length - 1 && "/"}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
Breadcrumb.propTypes;

export function Modal({ children, onClose, itemId, modalId, closeBtn = false, confirmDel = false, submitDel, loadDel }) {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div
      onClick={onClose}
      className={`${
        modalId === itemId ? "z-50 bg-black bg-opacity-40" : "-z-10"
      } fixed inset-0 flex items-center justify-center transition-all duration-150`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${dark ? "bg-slate-900" : "bg-white"} ${
          modalId === itemId ? "scale-100" : "scale-0"
        } origin-top w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative transition-all duration-150`}
      >
        {closeBtn && (
          <>
            <div className="mr-8">ID: {itemId}</div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200"
            >
              <FaXmark />
            </button>
          </>
        )}
        {children}
        {confirmDel && (
          <form onSubmit={submitDel} className="relative">
            {modalId === itemId && <input type="checkbox" autoFocus className="absolute -z-50 opacity-0" />}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-red-500 text-white p-1 w-16 rounded hover:opacity-70 flex items-center justify-center"
              >
                {loadDel ? <PiSpinner className="animate-spin text-lg" /> : "Delete"}
              </button>
              <button type="button" onClick={onClose} className="bg-slate-500 rounded p-1 px-2 text-white hover:opacity-70">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
Modal.propTypes;

export function ModalBool({ children, openModal, title = "delete all", onClose, closeBtn, confirmDel, submitDel, loadDel }) {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div
      onClick={onClose}
      className={`${
        openModal ? "z-50 bg-black bg-opacity-40" : "-z-10"
      } fixed inset-0 flex items-center justify-center transition-all duration-150`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${dark ? "bg-slate-900" : "bg-white"} ${
          openModal ? "scale-100" : "scale-0"
        } origin-top w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative transition-all duration-150`}
      >
        {closeBtn && (
          <>
            <div className="mr-8 capitalize font-medium">{title}</div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200"
            >
              <FaXmark />
            </button>
          </>
        )}
        {children}
        {confirmDel && (
          <form onSubmit={submitDel} className="relative">
            {openModal && <input type="checkbox" autoFocus className="absolute -z-50 opacity-0" />}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-red-500 text-white p-1 w-16 rounded hover:opacity-70 flex items-center justify-center"
              >
                {loadDel ? <PiSpinner className="animate-spin text-lg" /> : "Delete"}
              </button>
              <button type="button" onClick={onClose} className="bg-slate-500 rounded p-1 px-2 text-white hover:opacity-70">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
ModalBool.propTypes;

export function Tabs({ initialActive = null, menus = [], type = "content", desc = false }) {
  const [active, setActive] = useState(initialActive);
  return (
    <div className="mb-8">
      <div className="flex gap-1 justify-center flex-wrap my-2 text-sm">
        {menus.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item.text)}
            className={`${active === item.text ? "bg-cyan-700" : ""} bg-cyan-500 rounded-lg leading-none p-1 text-white`}
          >
            {item.text}
          </button>
        ))}
      </div>
      {type === "content" &&
        menus.map((item, i) => (
          <div key={i} className={`${active === item.text ? "block" : "hidden"} border rounded p-2 overflow-y-scroll`}>
            <div className="text-lg mb-3">{item.text}</div>
            {desc && <div>{item.description}</div>}
            <div className="">{item.content}</div>
          </div>
        ))}
      {type === "btnLink" &&
        menus.map((item, i) => (
          <div key={i} className={`${active === item.text ? "block" : "hidden"} border rounded p-2 text-center`}>
            <div className="text-lg mb-3">{item.text}</div>
            <div className="flex gap-4 text-2xl justify-center">{item.content}</div>
          </div>
        ))}
      {type === "iframe" &&
        menus.map((item, i) => (
          <div
            key={i}
            className={`${active === item.text ? "block" : "hidden"} border rounded p-2 text-center flex flex-col gap-3`}
          >
            <a href={item.src} className="text-lg" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center gap-1">
                <span className="capitalize text-xl underline">{item.text}</span>
                <FaArrowUpRightFromSquare className="text-sm" />
              </div>
            </a>
            <iframe src={item.src} className="w-full h-72" />
          </div>
        ))}
    </div>
  );
}
Tabs.propTypes;

export function Acc({ menus }) {
  const [active, setActive] = useState(null);
  const handleClick = (text) => {
    setActive((prev) => (prev === text ? null : text));
  };
  return menus
    .sort((a, b) => (a.text.toLowerCase() < b.text.toLowerCase() ? -1 : a.text.toLowerCase() > b.text.toLowerCase() ? 1 : 0))
    .map((item, i) => (
      <div key={i}>
        <button
          onClick={() => handleClick(item.text)}
          className="flex justify-between gap-1 items-center border-b py-2 w-full hover:text-cyan-600"
        >
          <div className="text-left">{item.text}</div>
          <div className="min-w-max">{active === item.text ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </button>
        <div className={`${active === item.text ? "h-max" : "h-0"} overflow-hidden transition-all duration-150`}>
          {item.content}
        </div>
      </div>
    ));
}
