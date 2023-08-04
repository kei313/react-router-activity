import "../assets/styles/index.css";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Header/>
      <div class="content-items">
        { <Outlet/>}
      </div>
      <Footer/>
    </>
  );
}
