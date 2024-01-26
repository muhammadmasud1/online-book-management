import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import MainSection from "../Pages/Main Section/MainSection";


const Root = () => {
              return (
                <>
                  <Header></Header>
                  <Outlet></Outlet>
                  <MainSection></MainSection>
                </>
              );
}
export default Root;