import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Home from "./pages/Home.jsx";
import Web from "./pages/web/Web.jsx";
import Apps from "./pages/apps/Apps.jsx";
import Comp from "./pages/apps/comp/Comp.jsx";
import Todo from "./pages/apps/todo/Todo.jsx";
import Html from "./pages/web/html/Html.jsx";
import Css from "./pages/web/css/Css.jsx";
import Javascript from "./pages/web/javascript/Javascript.jsx";
import Php from "./pages/web/php/Php.jsx";
import Vcs from "./pages/web/vcs/Vcs.jsx";
import Vscode from "./pages/web/vscode/Vscode.jsx";
import Ts from "./pages/web/typescript/Ts.jsx";
import Course from "./pages/web/course/Course.jsx";
import Mongodb from "./pages/web/mongodb/Mongodb.jsx";
import Mysql from "./pages/web/mysql/Mysql.jsx";
import Reactjs from "./pages/web/reactjs/Reactjs.jsx";
import Nodejs from "./pages/web/nodejs/Nodejs.jsx";
import Expressjs from "./pages/web/expressjs/Expressjs.jsx";
import Framer from "./pages/apps/framer/Framer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="web" element={<Web />}>
        <Route index element={<Html />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="js" element={<Javascript />} />
        <Route path="php" element={<Php />} />
        <Route path="vcs" element={<Vcs />} />
        <Route path="vscode" element={<Vscode />} />
        <Route path="ts" element={<Ts />} />
        <Route path="course" element={<Course />} />
        <Route path="mongodb" element={<Mongodb />} />
        <Route path="mysql" element={<Mysql />} />
        <Route path="expressjs" element={<Expressjs />} />
        <Route path="reactjs" element={<Reactjs />} />
        <Route path="nodejs" element={<Nodejs />} />
        <Route path="framer" element={<Framer />} />
      </Route>
      <Route path="apps" element={<Apps />}>
        <Route index element={<Comp />} />
        <Route path="components" element={<Comp />} />
        <Route path="todo" element={<Todo />} />
        <Route path="framer" element={<Framer />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
