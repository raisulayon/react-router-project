import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This our Home</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;