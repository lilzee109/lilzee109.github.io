import { useEffect, useState } from "react";
import { REST_API } from "../util/linkApi";
import axios from "axios";


const useRefreshToken = () => {
    const [dataUsers, setDataUsers] = useState("");
    const [loadingLogin, setLoadingLogin] = useState(false);
    axios.defaults.withCredentials = true;

    const refreshToken = async () => {
        setLoadingLogin(true)
        try {
            await axios.get(`http://localhost:4000/auth`)
                .then((res) => {
                    setDataUsers(res.data)
                    setLoadingLogin(false)
                })
        } catch (error) {
            setDataUsers(null);
            setLoadingLogin(false)
        }
    }

    useEffect(() => {
        refreshToken()
    }, [])


    return { dataUsers, refreshToken, loadingLogin }
}

export default useRefreshToken