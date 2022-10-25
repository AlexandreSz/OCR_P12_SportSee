import React from "react";
import {Link} from "react-router-dom";
import yogaIcon from "../../assets/sidebar_1.svg";
import swimIcon from "../../assets/sidebar_2.svg";
import bikeIcon from "../../assets/sidebar_3.svg";
import weightIcon from "../../assets/sidebar_4.svg";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <Link to="/yoga"><img src={yogaIcon} alt="Icon Yoga" /></Link>
                <Link to="/nage"><img src={swimIcon} alt="Icon Nage" /></Link>
                <Link to="/velo"><img src={bikeIcon} alt="Icon Vélo" /></Link>
                <Link to="/musculation"><img src={weightIcon} alt="Icon Musculation" /></Link>
            </nav>
        </aside>
    );
};

export default Sidebar;