import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import FollowInstagram from "./components/FollowInstagram/FollowInstagram";
import Footer from "./components/Footer/Footer";

const root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Home></Home>
            <CoffeeCard></CoffeeCard>
            <FollowInstagram></FollowInstagram>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default root;