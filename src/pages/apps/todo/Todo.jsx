import { useState } from "react";
import { Title } from "../../../components/Components";
import Todo1 from "./todo1/Todo1";
import Todo2 from "./todo2/Todo2";
import TodoProvider from "./todo2/Todo2Provider";
import Todo3 from "./todo3/Todo3";
const Todo2WithProvider = () => (
  <TodoProvider>
    <Todo2 />
  </TodoProvider>
);

const todoMenus = [
  {
    text: "todo1",
    description:
      "The first todo list app only uses the useState and useEffect hooks and relies solely on props for data transmission between parent and child components, and the notifications are implemented manually.",
    content: <Todo1 />,
  },
  {
    text: "todo2",
    description:
      "The second todo list app uses the useState, useEffect, useContext, and useReducer hooks for data management and state management, and the notifications are implemented using the Notistack library.",
    content: <Todo2WithProvider />,
  },
  {
    text: "todo3",
    description:
      "The third to-do list project uses the Redux library for state management, allowing for centralized data and easier access to each state, and the notifications are implemented using the react-hot-toast library",
    content: <Todo3 />,
  },
];

export default function Todo() {
  const [active, setActive] = useState("todo1");

  return (
    <div>
      <Title>Todo</Title>
      <p className="text-center mb-5">
        Here are three todo list projects with the same functionality, but built using different tools. All of them run on
        the client side and store data in local storage.
      </p>
      <div className="flex gap-3 justify-center mb-3">
        {todoMenus.map((item, i) => (
          <button
            onClick={() => setActive(item.text)}
            key={i}
            className={`${
              active === item.text ? "bg-cyan-600" : "bg-cyan-500"
            } capitalize text-white rounded-lg p-2 leading-none hover:opacity-70`}
          >
            {item.text}
          </button>
        ))}
      </div>
      {todoMenus.map((item, i) => (
        <div key={i} className={`${active === item.text ? "block" : "hidden"} border rounded-xl p-3 shadow-md`}>
          <div className="capitalize">Title : {item.text}</div>
          <div>Description : {item.description}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}
