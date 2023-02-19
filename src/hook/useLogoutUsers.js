import axios from "axios"
import { useEffect, useState } from "react"
import { REST_API } from "../util/linkApi"


const useLogoutUsers = () => {
    const [logout, setLogout] = useState(false);

    const logoutUsers = async () => {
        try {
            await axios.delete(`${REST_API}logout`)
        } catch (error) {

        }
    }

    useEffect(() => {
        if (logout === true) return setLogout(false);
    }, [logout])

    return { logout, logoutUsers }
}

export default useLogoutUsers