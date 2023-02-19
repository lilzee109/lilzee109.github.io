import { useEffect, useState } from "react";
import { REST_API } from "../util/linkApi";
import axios from "axios";
import jwt_decode from "jwt-decode";


const useRefreshToken = () => {
    const [dataUsers, setDataUsers] = useState("");
    const [loadingLogin, setLoadingLogin] = useState(false);

    const refreshToken = async () => {
        setLoadingLogin(true)
        try {
            await axios.get(`${REST_API}token`)
                .then((res) => {
                    const decode = jwt_decode(res.data.accessToken);
                    setDataUsers(decode)
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