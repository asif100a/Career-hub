import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-[80%] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;