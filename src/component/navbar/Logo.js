import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div
            className="text-3xl lg:text-5xl w-[2.6rem] sm:w-[11rem] lg:w-auto font-bold text-primary pb-1 relative flex items-center cursor-pointer"
            onClick={() => navigate("/")}
        >
            <img
                src={process.env.PUBLIC_URL + "/image/logo.png"}
                alt="logo"
                className="w-8 h-8 lg:w-12 lg:h-12"
            />
            <div className="hidden sm:inline-block relative before:absolute before:left-0 before:w-full before:h-full before:bg-transparent">Buhsar</div>
        </div>
    )
}

export default Logo