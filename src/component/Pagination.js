import { React, useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "../util/Icon";

const Pagination = ({ currentPage, setCurrentPage, totalProduct, showPage }) => {
    const [lastSlice, setLastSlice] = useState(5);
    const [fistSlice, setFistSlice] = useState(0);
    let data = [];
    let max = Math.ceil(totalProduct / showPage);
    for (let i = 1; i <= max; i++) {
        data.push(i);
    }
    let dataSlicePagination = data.slice(fistSlice, lastSlice);

    useEffect(() => {
        const updateSlice = () => {
            if (currentPage <= 3 || max <= 5) {
                setLastSlice(5)
                return setFistSlice(0)
            }
            if (currentPage >= max - 2) {
                setFistSlice(max - 5)
                return setLastSlice(max);
            }
            if (currentPage > 3) {
                setLastSlice(currentPage + 2);
                return setFistSlice(currentPage - 3);
            }
        }
        updateSlice()
    }, [currentPage, max]);

    const updateCurrent = (value) => {
        if (value <= max && value >= 1) return setCurrentPage(value);
    }

    return (
        <>
            <ul className="flex items-center gap-4 mt-4">
                <button
                    className={currentPage === 1 ? "pagination-icon-active" : "pagination-icon"}
                    onClick={() => updateCurrent(currentPage - 1)}
                >
                    <FaLongArrowAltLeft />
                </button>
                {dataSlicePagination.map((data, index) => (
                    <li
                        key={index}
                        className={currentPage === data ? "pagination-active" : "pagination"}
                        onClick={() => setCurrentPage(data)}
                    >
                        {data}
                    </li>
                ))}
                <button
                    className={currentPage === max ? "pagination-icon-active" : "pagination-icon"}
                    onClick={() => updateCurrent(currentPage + 1)}
                >
                    <FaLongArrowAltRight />
                </button>
            </ul>
        </>
    )
}

export default Pagination