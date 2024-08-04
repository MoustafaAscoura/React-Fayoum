import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

function HomepageLayout () {
    return <>
        <Navbar NavbarTitle={"Music App"}/>
        <Outlet/>
    </>
}

export default HomepageLayout