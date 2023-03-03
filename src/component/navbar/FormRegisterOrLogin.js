import { React, useCallback, useEffect, useState } from "react";
import InputForm from "../InputForm";
import usePostRegisterUsers from "../../hook/usePostRegisterUsers";
import Loading from "../loading/Loading";
import { AlertConfRegis } from "../index";
import { REST_API } from "../../util/linkApi";
import axios from "axios";
import { AiFillCloseCircle } from "../../util/Icon";

const Register = ({ activeForm, updateActive, updateLoading, updateAlert, dimensi }) => {
    let dataMaxMin = {
        name: {
            min: 4,
            max: 17
        },
        email: {
            min: 10,
            max: 25
        },
        password: {
            min: 6,
            max: 20
        },
        confPassword: {
            min: 6,
            max: 20
        }
    }
    // Menampung Input Form Register
    const [input, setInput] = useState({ name: "", email: "", password: "", confPassword: "" });
    // State Active Function submitHookRegister
    const [active, setActive] = useState(false);
    // Menampung Status Validasi Dari Input
    const [cekValidasi, setCekValidasi] = useState({ name: { active: false, text: "" }, email: { active: false, text: "" }, password: { active: false, text: "" }, confPassword: { active: false, text: "" } });

    // Hook Register Users
    const [activeHookRegister, setActiveHookRegister] = useState(false);
    const { response, loading, stopOnHook, alertSuccessRegis } = usePostRegisterUsers(input, activeHookRegister);

    const onSubmitLogin = async (event) => {
        event.preventDefault();

        submitValidasi()
    }

    const updateInput = (value) => {
        setInput((prev) => {
            return { ...prev, ...value }
        })
    }

    // Untuk Update State Validasi
    const updateCekValidasi = (value) => {
        setCekValidasi((prev) => {
            return { ...prev, ...value }
        })
    }

    // Ketika Berpindah Form, Input Form akan kembali ke default
    useEffect(() => {
        if (activeForm === "register") {
            updateInput({ name: "", email: "", password: "", confPassword: "" });
        } else {
            updateInput({ name: "", email: "", password: "", confPassword: "" });
        }
        if (activeForm === "register") {
            setCekValidasi({ name: { active: false, text: "" }, email: { active: false, text: "" }, password: { active: false, text: "" }, confPassword: { active: false, text: "" } })
        } else {
            setCekValidasi({ name: { active: false, text: "" }, email: { active: false, text: "" }, password: { active: false, text: "" }, confPassword: { active: false, text: "" } })
        }
    }, [activeForm])

    // Ketika di submit form input kosong, kirimkan validasi
    const submitValidasi = () => {
        // kondisi jika input kosong
        if (input.name.length === 0) updateCekValidasi({ name: { active: true, text: "harus diisi" } });
        if (input.email.length === 0) updateCekValidasi({ email: { active: true, text: "harus diisi" } });
        if (input.password.length === 0) updateCekValidasi({ password: { active: true, text: "harus diisi" } });
        if (input.confPassword.length === 0) updateCekValidasi({ confPassword: { active: true, text: "harus diisi" } });

        // Active submitHookRegister
        setActive(true);
        // Non Active submitHookRegister
        setTimeout(() => {
            setActive(false);
        }, 1000);
    }

    // Ketika Semua validasi input terpenuhi tidak ada waring, jalankan function ini
    const submitHookRegister = useCallback(() => {
        let name = cekValidasi.name.active;
        let email = cekValidasi.email.active;
        let password = cekValidasi.password.active;
        let confPassword = cekValidasi.confPassword.active;

        // Cek Kondisi Semua validasi, jika false jalanakan Hook Register
        if (name === false && email === false && password === false && confPassword === false) {
            setTimeout(() => {
                setActiveHookRegister(false)
            }, 1000);
            return setActiveHookRegister(true);
        }
    }, [cekValidasi.name.active, cekValidasi.email.active, cekValidasi.password.active, cekValidasi.confPassword.active])

    useEffect(() => {
        // Mengirim loding hook Register, untuk On Off Fitur loading
        updateLoading(loading);
        // Mengirim Alert hook Register, untuk On Off Fitur Alert
        if (alertSuccessRegis.active === true) updateAlert(alertSuccessRegis);

        // Call Function Hook Register
        if (active === true) submitHookRegister();

        // Update Response Hook Register
        if (stopOnHook === true) return updateCekValidasi(response);
    }, [submitHookRegister, active, response, stopOnHook, updateLoading, loading, alertSuccessRegis, updateAlert]);

    return (
        <>
            <div className="container_regis-or-login">
                {/* Banner */}
                <div className={activeForm !== "register" ? "parent_banner absolute left-[0rem]" : "parent_banner absolute left-[30rem]"}>
                    <div className={activeForm !== "register" ? "content_banner mt-[0rem] delay-500" : "content_banner mt-[-50rem]"}>
                        <h1 className="judul-banner">Register</h1>
                        <p className="text-banner">Register jika Anda belum memiliki akun</p>
                        <button className="btn-banner" onClick={() => updateActive("register")}>Register</button>
                    </div>
                </div>

                {/* Form */}
                <div className={activeForm !== "register" ? "parent_form slide-out-right ml-[30rem]" : "parent_form slide-in-right delay-500"}>
                    <form
                        onSubmit={onSubmitLogin}
                        className={!dimensi ? "" : "scroll-mobile"}
                    >
                        <h1 className="judul">Register</h1>
                        <p className="text-form">Jika Anda blom memiliki akun, silakan register dan masukan alamat email dan password Anda.</p>
                        <div className="parent_input-form">
                            {/* Input Name */}
                            <InputForm
                                judul={"Name"}
                                typeInput={"text"}
                                valueInput={input.name}
                                updateInput={updateInput}
                                dataObjek={"name"}
                                classCss={"input_regis-or-login"}
                                min={dataMaxMin.name.min}
                                max={dataMaxMin.name.max}
                                activeForm={activeForm}
                                updateCekValidasi={updateCekValidasi}
                                response={cekValidasi.name}
                            />
                            {/* Input Email */}
                            <InputForm
                                judul={"Email"}
                                typeInput={"text"}
                                valueInput={input.email}
                                updateInput={updateInput}
                                dataObjek={"email"}
                                classCss={"input_regis-or-login"}
                                min={dataMaxMin.email.min}
                                max={dataMaxMin.email.max}
                                activeForm={activeForm}
                                updateCekValidasi={updateCekValidasi}
                                response={cekValidasi.email}
                            />
                            {/* Input Password */}
                            <InputForm
                                judul={"Password"}
                                typeInput={"password"}
                                valueInput={input.password}
                                updateInput={updateInput}
                                dataObjek={"password"}
                                classCss={"input_regis-or-login"}
                                min={dataMaxMin.password.min}
                                max={dataMaxMin.password.max}
                                activeForm={activeForm}
                                updateCekValidasi={updateCekValidasi}
                                response={cekValidasi.password}
                            />
                            {/* Input ConfPassword */}
                            <InputForm
                                judul={"Confirmasi Password"}
                                typeInput={"password"}
                                valueInput={input.confPassword}
                                updateInput={updateInput}
                                dataObjek={"confPassword"}
                                classCss={"input_regis-or-login"}
                                min={dataMaxMin.confPassword.min}
                                max={dataMaxMin.confPassword.max}
                                activeForm={activeForm}
                                updateCekValidasi={updateCekValidasi}
                                response={cekValidasi.confPassword}
                            />
                        </div>
                        <button className="btn_regis-login" onClick={onSubmitLogin}>register</button>
                    </form>
                    <div className="parent_regis-to-login">
                        <p>Sudah terdaftar?</p>
                        <button className="text-primary/70" onClick={() => updateActive("login")}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Login = ({ activeForm, updateActive, updateOnOffForm, toggleStopScroll, refreshToken, dataUsers, dimensi }) => {
    let dataMaxMin = {
        email: {
            min: 10,
            max: 25
        },
        password: {
            min: 6,
            max: 20
        }
    }
    // Menampung Value Input
    const [input, setInput] = useState({ email: "", password: "" });
    // Menampung Validasi Input
    const [cekValidasi, setCekValidasi] = useState({ email: { active: false, text: "" }, password: { active: false, text: "" } });

    // Function Submit
    const onSubmitLogin = (event) => {
        /* MENCEGAH RELOAD */
        event.preventDefault();

        // Function Cek Form input
        submitValidasi()

        if (input.email.length !== 0 && input.password.length !== 0) return auth()
    }

    // Update State Input Value
    const updateInput = (input) => {
        setInput((prev) => {
            return { ...prev, ...input }
        })
    }

    // Update State Validasi
    const updateCekValidasi = (value) => {
        setCekValidasi((prev) => {
            return { ...prev, ...value }
        })
    }

    // Ketika Berpindah Form, Input Form akan kembali ke default
    useEffect(() => {
        if (activeForm === "login" || dataUsers === null) updateInput({ email: "", password: "" })
        if (activeForm === "login") setCekValidasi({ email: { active: false, text: "" }, password: { active: false, text: "" } })
    }, [activeForm, dataUsers])

    // Ketika di submit form input kosong, kirimkan validasi
    const submitValidasi = () => {
        // kondisi jika input kosong
        if (input.email.length === 0) updateCekValidasi({ email: { active: true, text: "harus diisi" } });
        if (input.password.length === 0) updateCekValidasi({ password: { active: true, text: "harus diisi" } });
    }

    // Post Login Api
    const auth = async () => {
        let email = cekValidasi.email.active;
        let password = cekValidasi.password.active;

        if (email === false && password === false) {
            try {
                await axios.post(`http://localhost:4000/login`, input).then((res) => {
                    console.log(res.data)
                    updateOnOffForm()
                    toggleStopScroll()
                    refreshToken()
                })
            } catch (error) {
                if (error.response) {
                    let data = error.response.data.response;
                    if (data === "Email tidak terdaftar") return updateCekValidasi({ email: { active: true, text: "Email tidak terdaftar" } });
                    if (data === "Password salah") return updateCekValidasi({ password: { active: true, text: "Password salah" } });
                }
            }
        }
    }

    return (
        <>
            <div className="container_regis-or-login">
                {/* Banner */}
                <div className={activeForm !== "login" ? "parent_banner absolute right-[0rem]" : "parent_banner absolute right-[30rem]"}>
                    <div className={activeForm !== "login" ? "content_banner mt-[0rem] delay-500" : "content_banner mt-[50rem]"}>
                        <h1 className="judul-banner">Login</h1>
                        <p className="text-banner">Jika Anda memiliki akun, Anda bisa untuk login.</p>
                        <button className="btn-banner" onClick={() => updateActive("login")}>Login</button>
                    </div>
                </div>

                {/* Form */}
                <div className={activeForm !== "login" ? "parent_form slide-out-left sm:ml-[-30rem]" : "parent_form slide-in-left sm:ml-[0rem] delay-500"}>
                    <form
                        onSubmit={onSubmitLogin}
                        className={!dimensi ? "w-full" : "scroll-mobile"}
                    >
                        <h1 className="judul">Login</h1>
                        <p className="text-form">Anda bisa memasukan email dan password untuk melakukan login.</p>
                        <div className="parent_input-form">
                            <InputForm
                                judul={"Email"}
                                typeInput={"text"}
                                valueInput={input.email}
                                updateInput={updateInput}
                                min={dataMaxMin.email.min}
                                max={dataMaxMin.email.max}
                                dataObjek={"email"}
                                classCss={"input_regis-or-login"}
                                updateCekValidasi={updateCekValidasi}
                                activeForm={activeForm}
                                response={cekValidasi.email}
                            />
                            <InputForm
                                judul={"Password"}
                                typeInput={"password"}
                                valueInput={input.password}
                                updateInput={updateInput}
                                min={dataMaxMin.password.min}
                                max={dataMaxMin.password.max}
                                dataObjek={"password"}
                                classCss={"input_regis-or-login"}
                                updateCekValidasi={updateCekValidasi}
                                activeForm={activeForm}
                                response={cekValidasi.password}
                            />
                        </div>
                        <button className="btn_regis-login" onClick={onSubmitLogin}>login</button>
                    </form>
                    <div className="parent_regis-to-login">
                        <p>Tidak punya akun?</p>
                        <button className="text-primary/70" onClick={() => updateActive("register")}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const FormRegisterOrLogin = ({ updateOnOffForm, onOffForm, toggleStopScroll, refreshToken, dataUsers, dimensi }) => {
    // Untuk Activikasi Form Login Or Register
    const [active, setActive] = useState("login");
    // loading
    const [activeLoading, setActveLoading] = useState(false);
    const [activeAlert, setActiveAlert] = useState({ active: false, name: "" });

    // Function Update State Loading
    const updateLoading = (value) => {
        setActveLoading(value)
    }
    // Function Update Form Login and Register
    const updateActive = (value) => {
        setActive(value);
    }
    // Function Update State Alert Confrimasi Register
    const updateAlert = (value) => {
        setActiveAlert(value)
    }

    return (
        <>
            <div className={!onOffForm ? "bg-black_from flex items-end sm:items-center" : "bg-black_from-aktif flex items-end sm:items-center"}>
                {/* LOADING */}
                {activeLoading === true ? <Loading /> : ""}

                {/* Alert */}
                {!activeAlert.active
                    ? ""
                    : <AlertConfRegis
                        updateAlert={updateAlert}
                        updateActive={updateActive}
                        name={activeAlert.name}
                    />
                }

                <div className={!onOffForm ? "parent_box-form" : "parent_box-form-aktif"}>
                    <button
                        className={!dimensi ? "button_close-login-regis" : "button_close-login-regis-mobile"}
                        onClick={() => {
                            toggleStopScroll()
                            updateOnOffForm()
                        }}
                    >
                        <AiFillCloseCircle />
                    </button>

                    <div className={!dimensi ? "box-form" : "box-form-mobile"}>
                        <Register
                            activeForm={active}
                            updateActive={updateActive}
                            updateLoading={updateLoading}
                            updateAlert={updateAlert}
                            dimensi={dimensi}
                        />
                        <Login
                            activeForm={active}
                            updateActive={updateActive}
                            toggleStopScroll={toggleStopScroll}
                            updateOnOffForm={updateOnOffForm}
                            refreshToken={refreshToken}
                            dataUsers={dataUsers}
                            dimensi={dimensi}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormRegisterOrLogin