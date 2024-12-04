import { Outlet } from "react-router-dom";
import style from "./style.module.css";
function Layout() {
  return (
    <>
      <main className={style.base}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
