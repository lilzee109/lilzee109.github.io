import React from "react";
import { useState } from "react";
import Pagination from "../component/Pagination";
import ShowPerPage from "./ShowPerPage";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "../util/Icon";
import confertRp from "../util/confertRp";
import LoadingProduct from "./LoadingProduct";

const DisplayProduct = ({ dataProductSlice, onSubmitToBasket }) => {
    return (
        <>
            {/* Display Product */}
            <ul className="mt-4 font-light grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dataProductSlice.map((data) => (
                    <li
                        key={data.id}
                        className="shadow-[0px_0px_5px] group shadow-black/20 rounded-[1rem] overflow-hidden relative hover:shadow-black/40 transition-all duration-300"
                    >
                        <div className="relative overflow-hidden before:absolute before:bg-transparent before:h-full before:w-full before:top-0 before:left-0 before:z-[1]">
                            <img
                                src={process.env.PUBLIC_URL + `/image/${data.category}/${data.img}`}
                                alt={`${data.nameProduct}`}
                                className="transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-2 mb-[3rem]">
                            <p className="font-normal text-lg capitalize mt-2">{data.nameProduct}</p>
                            <p className="capitalize text-sm mt-[2px]">{data.keterangan}</p>
                            <p className="text-primary font-semibold mt-2">{confertRp(data.harga)}</p>
                        </div>
                        <button
                            className="bg-primary/70 w-full flex items-center justify-center text-white py-1 text-2xl mt-4 hover:bg-primary transition-all duration-300 absolute bottom-0"
                            onClick={() => onSubmitToBasket(data)}
                        >
                            <AiOutlineShoppingCart />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

const MapProduct = ({ dataUsers, setActiveRegisOrLogin, data, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showPage, setShowPage] = useState(4);

    const lastSlice = showPage * currentPage;
    const fistSlice = lastSlice - showPage;
    let max = Math.ceil(data.length / showPage)

    const dataProductSlice = data.slice(fistSlice, lastSlice);

    useEffect(() => {
        const checkShowPage = () => {
            if (currentPage > max) return setCurrentPage(max)
            if (currentPage === 0) return setCurrentPage(1)
        }
        checkShowPage()
    }, [currentPage, max])

    const onSubmitToBasket = (value) => {
        if (dataUsers === null) return setActiveRegisOrLogin(true)
        let data = value;
        let idUsers = { userId: dataUsers.userId }
        delete data.updatedAt;
        delete data.createdAt;
        let hasil = { ...data, ...idUsers }
    }

    return (
        <>
            <div className="mt-4">
                {/* Show Per Page */}
                <ShowPerPage setShowPage={setShowPage} showPage={showPage} />


                {!loading
                    ? <DisplayProduct dataProductSlice={dataProductSlice} onSubmitToBasket={onSubmitToBasket} />
                    : <LoadingProduct />
                }


                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalProduct={data.length}
                    showPage={showPage}
                />
            </div>
        </>
    )
}

export default MapProduct