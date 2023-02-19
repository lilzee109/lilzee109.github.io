import { React, useState, useEffect } from "react";

const JudulInput = ({ valueInput, validasi, judul }) => {
    return (
        <>
            {!validasi
                ? (
                    <h4 className={valueInput.length > 0 ? "judul-input_regis-login_active text-primary" : "judul-input_regis-login group-focus-within:text-primary"}>{judul}</h4>
                )
                : (
                    <h4 className={valueInput.length > 0 ? "judul-input_regis-login_active text-red-500" : "judul-input_regis-login group-focus-within:text-red-500"}>{judul}</h4>
                )
            }
        </>
    )
}

const InputForm = ({ typeInput, updateInput, valueInput, dataObjek, classCss, judul, min, max, activeForm, updateCekValidasi, response }) => {
    // State Validasi Input Form
    const [validasi, setValidasi] = useState({ active: false, text: "" });

    const onChangeInput = (input) => {
        // Menampung Nilai Input yang sudah dimasukan kedalam objek
        let data = onjekInput(input);
        // Proses Validasi
        checkValidasi(input)
        // mengirim data ke form register login
        return updateInput(data);
    }

    // Untuk Mengubah Nilai Input Masuk kedalam data Obejek
    const onjekInput = (input) => {
        if (dataObjek === "name") return { name: input }
        if (dataObjek === "email") return { email: input }
        if (dataObjek === "password") return { password: input }
        if (dataObjek === "confPassword") return { confPassword: input }
    }

    // Cek Validasi Input
    const checkValidasi = (input) => {
        if (input.length === 0) return updateValidasi({ active: true, text: "harus diisi" });
        if (input.length < min) return updateValidasi({ active: true, text: `${dataObjek} terlalu pendek (Minimal. ${min} Digit).` });
        if (input.length > max) return updateValidasi({ active: true, text: `${dataObjek} terlalu panjang (Maksimal. ${max} Digit).` });
        return updateValidasi({ active: false, text: "" })
    }

    // Update State Validasi
    const updateValidasi = (value) => {
        // Update State Validasi
        setValidasi(value)

        // Memasukan value validasi kedalam obejek, untuk dikirim ke Form Regitser Or Login
        if (dataObjek === "name") return updateCekValidasi({ name: value })
        if (dataObjek === "email") return updateCekValidasi({ email: value })
        if (dataObjek === "password") return updateCekValidasi({ password: value })
        if (dataObjek === "confPassword") return updateCekValidasi({ confPassword: value })
    }

    // Pada Saat perpindah Form Semua Validasi Akan Kembali ke default
    useEffect(() => {
        // Untuk Menghapus Validasi Input
        if (activeForm === "login") return setValidasi({ active: false, text: "" });
        return setValidasi({ active: false, text: "" });
    }, [activeForm])

    useEffect(() => {
        if (response !== undefined && response !== null) {
            if (response.active === true) return setValidasi({ active: true, text: `${response.text}` });
            return setValidasi({ active: false, text: "" })
        }
    }, [response])

    return (
        <div className="parent-input_form-regis-login group">
            <JudulInput valueInput={valueInput} validasi={validasi.active} judul={judul} />
            <input type={typeInput} value={valueInput} className={!validasi.active ? classCss : "form-validasi-warning"} onChange={(input) => onChangeInput(input.target.value)} />
            {!validasi.active
                ? ""
                : <p className="validasi-input">{validasi.text}</p>
            }

        </div>
    )
}

export default InputForm