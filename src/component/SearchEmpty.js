import React from "react";
import { useParams } from "react-router-dom";

const SearchEmpty = () => {
    const { search } = useParams();

    console.log(search)

    return (
        <>
            <div className="grid justify-items-center mt-8 mb-8">
                <div className="relative w-[90%] md:w-[30rem] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-transparent before:z-[1]">
                    <img src={process.env.PUBLIC_URL + "/image/emptySearch.png"} alt="Img-Empty" />
                </div>
                <div className="w-full overflow-hidden">
                    <h5 className="font-medium text-lg sm:text-xl text-center">Hasil Pencarian "{search}" tidak ditemukan.</h5>
                </div>
                <p className="text-black/50 mt-4 text-center text-sm sm:text-base">Tampaknya kami tidak dapat menemukan hasil apa pun berdasarkan penelusuran Anda.</p>
            </div>
        </>
    )
}

export default SearchEmpty