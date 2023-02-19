import React from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-[90%] mx-auto">
                <img
                    src={process.env.PUBLIC_URL + "/image/notFound.png"}
                    alt="Img-NotFound"
                    className="w-[60%] 360:w-[70%] sm:w-[20rem] mx-auto mt-4"
                />
                <p className="text-center mt-4 360:text-base sm:text-lg">
                    Halaman yang Anda coba akses tidak ada atau telah dipindahkan.
                    <br />
                    Coba kembali ke beranda kami.
                </p>
                <div className="flex justify-center mt-3">
                    <button
                        className="bg-primary/70 px-5 py-2 rounded-lg text-white capitalize transition-all duration-300 hover:bg-primary"
                        onClick={() => navigate("/")}
                    >
                        go to homepage
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound