import axios from "axios";
import { useEffect, useState } from "react";
import { REST_API } from "../util/linkApi";

const usePostRegisterUsers = (data, activeHook) => {
    const [response, setRespone] = useState({ email: { active: false, text: null }, password: { active: false, text: null } });
    const [loading, setLoading] = useState(false);
    const [stopOnHook, setStopOnHook] = useState(false);
    const [alertSuccessRegis, setAlertSuccessRegis] = useState({ active: false, name: "" });

    useEffect(() => {
        const registerUsers = async () => {
            if (activeHook === true) {
                setLoading(true)
                setStopOnHook(true)
                try {
                    await axios.post(`${REST_API}users`, data)
                        .then((res) => {
                            let data = res.data;
                            setAlertSuccessRegis({ active: true, name: data.name });
                        })
                } catch (error) {
                    setTimeout(() => {
                        setRespone({ email: { active: false, text: null }, password: { active: false, text: null } })
                    }, 500);
                    if (error.response) {
                        if (error.response.data.response === "Password dan confirmasi password tidak sama") setRespone({ password: { active: true, text: "Password dan confirmasi password tidak sama" }, confPassword: { active: true, text: "Password dan confirmasi password tidak sama" } });

                        if (error.response.data.response === "Email yang digunakan sudah terdaftar") setRespone({ email: { active: true, text: "Email yang digunakan sudah terdaftar" } });
                    }
                }
                setLoading(false);
                setTimeout(() => {
                    setStopOnHook(false);
                    setAlertSuccessRegis({ active: false, name: "" });
                }, [500]);
            }
        }

        registerUsers();
    }, [data, activeHook])

    return { response, loading, stopOnHook, alertSuccessRegis }
}

export default usePostRegisterUsers