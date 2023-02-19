import { React, useEffect, useState } from "react";
import { Logo, SearchProduct, Basket, Users, FormRegisterOrLogin } from "./navbar/index";
import useBodyScrollLock from "../hook/useBodyScrollLock";
import useOnScrollNavbar from "../hook/useOnScrollNavbar";

const Navbar = ({ refreshToken, dataUsers, loadingLogin, activeRegisOrLogin, setActiveRegisOrLogin }) => {
    // Hook Stop Scroll Browser
    const { toggle, dimensi } = useBodyScrollLock();
    // Hook Scroll
    const { activeNav } = useOnScrollNavbar();
    // On Off Form Regis Or Login
    const [onOffForm, setOnOffForm] = useState(false);

    // Update State On Off Login Regis
    const updateOnOffForm = () => {
        setOnOffForm(!onOffForm);
        setActiveRegisOrLogin(!onOffForm);
    }

    useEffect(() => {
        if (activeRegisOrLogin === true) return setOnOffForm(activeRegisOrLogin);
    }, [activeRegisOrLogin])

    return (
        <>
            {/* NAVBAR DEFAULT */}
            <div className="container-app">
                <div className="parent-navbar">
                    <div className="flex items-center gap-2 sm:gap-8 w-full">
                        <Logo />
                        <SearchProduct />
                    </div>
                    <div className="parent-icon_nav">
                        <Basket />
                        {dataUsers === null
                            ? (
                                <div
                                    onClick={() => {
                                        toggle()
                                        updateOnOffForm()
                                    }}
                                >
                                    <Users dataUsers={dataUsers} refreshToken={refreshToken} />
                                </div>
                            )
                            : (
                                <div><Users dataUsers={dataUsers} refreshToken={refreshToken} /></div>
                            )
                        }
                    </div>
                </div>
                <hr className="h-[1px] bg-black w-full" />
            </div>

            {/* NAVBAR SCROLL */}
            <div className={!activeNav ? "parent_navbar-scroll mt-[-150rem]" : "parent_navbar-scroll transition-all duration-300"}>
                <div className="container-app">
                    <div className="parent-navbar">
                        <div className="flex items-center gap-2 sm:gap-8 w-full">
                            <Logo />
                            <SearchProduct />
                        </div>
                        <div className="parent-icon_nav">
                            <Basket />
                            {dataUsers === null
                                ? (
                                    <div
                                        onClick={() => {
                                            toggle()
                                            updateOnOffForm()
                                        }}
                                    >
                                        <Users dataUsers={dataUsers} refreshToken={refreshToken} />
                                    </div>
                                )
                                : (
                                    <div><Users dataUsers={dataUsers} refreshToken={refreshToken} /></div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <hr className="h-[1px] bg-black w-full" />
            </div>

            {/* Form Login Or Register */}
            <FormRegisterOrLogin
                updateOnOffForm={updateOnOffForm}
                onOffForm={onOffForm}
                toggleStopScroll={toggle}
                refreshToken={refreshToken}
                dataUsers={dataUsers}
                dimensi={dimensi}
            />
        </>
    )
}

export default Navbar