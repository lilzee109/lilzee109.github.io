import React from "react";

const AlertConfRegis = ({ updateAlert, updateActive, name }) => {
    const onSubmit = () => {
        updateAlert(false);
        updateActive("login");
    }
    return (
        <>
            <div className="parent_confirmasi-regis">
                <div className="box_alert-regis">
                    <p className="text-base text-center mt-8">Hallo {name}, kamu berhasil melakukan registration</p>
                    <button className="btn_conf-regis" onClick={onSubmit}>Selesai</button>
                </div>
            </div>
        </>
    )
}

export default AlertConfRegis