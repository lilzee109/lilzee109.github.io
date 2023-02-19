import React, { useState } from "react";
import { BiSearchAlt, IoClose } from "../../util/Icon";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate()

    // Update State Input
    const changeValueInput = (value) => {
        setInput(value)
    }

    const formOnSubmit = (event) => {
        event.preventDefault()
        let dataInput = input.toLowerCase()

        navigate(`/cari/${dataInput}`);
        return setInput("");
    }

    return (
        <div className="w-full lg:w-[40rem]">
            <form className="relative flex items-center group" onSubmit={formOnSubmit}>
                {/* Placeholder */}
                <p className={input.length > 0
                    ? "text-placeholder-aktif"
                    : "text-placeholder"
                }>cari product</p>

                {/* Input */}
                <input
                    type="text"
                    value={input}
                    className={input.length > 0
                        ? "input-search-product-aktif"
                        : "input-search-product"
                    }
                    onChange={(event) => changeValueInput(event.target.value)}
                />

                {/* Icon Focus */}
                <div className="absolute z-[2] right-0 text-lg sm:text-xl flex gap-2 mr-3">
                    {/* Icon Search */}
                    <BiSearchAlt
                        className="text-gray-400 cursor-pointer hover:text-primary"
                        onClick={formOnSubmit}
                    />
                    {/* Icon Close */}
                    <IoClose
                        className={input.length > 0
                            ? "cursor-pointer hover:text-red-500"
                            : "hidden"
                        }
                        onClick={() => changeValueInput("")}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchProduct