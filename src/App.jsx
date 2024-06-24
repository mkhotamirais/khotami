import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenAside, removeOpenNav } from "./app/features/basicSlice";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { usePath } from "./components/Hooks";
import { BgHero, Breadcrumb, Title } from "./components/Components";
import { AsideBtn, AsideCollapse, AsideMain } from "./components/Aside";

const App = () => {
  const dispatch = useDispatch();
  const { openNav, openAside } = useSelector((state) => state.basic);
  const { path } = usePath();
  const handleClick = () => {
    if (openNav) dispatch(removeOpenNav());
    if (openAside) dispatch(removeOpenAside());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (openNav) dispatch(removeOpenNav());
      if (openAside) dispatch(removeOpenAside());
    });
  }, [dispatch, openNav, openAside]);

  return (
    <main className={`dark:bg-slate-800 dark:text-white text-gray-800 bg-gray-50 flex flex-col`}>
      <Header />
      <BgHero />
      <section onClick={handleClick} className="z-20 px-3 md:px-16 lg:px-24">
        {path[1] ? (
          <div className="grid items-start gap-1 grid-cols-1 sm:grid-cols-4 lg:grid-cols-6">
            <AsideCollapse />
            <AsideMain className={`col-span-1 sticky top-16`} />
            <div className="col-span-1 sm:col-span-3 lg:col-span-5">
              <div className="flex gap-2 items-center text-2xl">
                <AsideBtn />
                {path[1] && <Title>{path[1]}</Title>}
              </div>
              <Breadcrumb />
              <Outlet />
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </section>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </main>
  );
};

export default App;
