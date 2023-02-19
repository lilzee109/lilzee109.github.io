import React from "react";
// FaUserAlt = Users
import { FaUserAlt } from "../../util/Icon";
import axios from "axios";
import { REST_API } from "../../util/linkApi";

const Users = ({ dataUsers, refreshToken }) => {
    const logoutUsers = async () => {
        try {
            await axios.delete(`${REST_API}logout`)
            refreshToken()
        } catch (error) {

        }
    }

    return (
        <>
            <div className="relative group before:absolute before:w-[100%] before:h-2 before:bottom-[-.5rem] before:right-0">
                <div className={dataUsers ? "nav-users-login" : "nav-users"}>
                    <FaUserAlt />
                </div>

                {dataUsers
                    ? (
                        <div className="parent_fitur-login">
                            {/* <button className="btn_nav-profile">Profile</button> */}
                            {/* <hr /> */}
                            <button className="btn_nav-logout" onClick={logoutUsers}>Logout</button>
                        </div>
                    )
                    : ""
                }
            </div>
        </>
    )
}

export default Users