import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div
      className="bg-blue-500/40 max-h-dvh h-dvh flex flex-col overflow-hidden"
    >
        <Navbar/>
        <MainContainer>
            <Outlet/>
        </MainContainer>
        <Footer/>
    </div>
  )
}

export default Layout;