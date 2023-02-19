import React, { useState } from "react";
import { RiShoppingBag3Fill } from "../../util/Icon";

const Jumlah = () => {
    const [angka, setAngka] = useState(0);

    const updateAngka = (value) => {
        setAngka(value)
    }

    if (angka < 9) return <div className="total-product-bag text-xs sm:text-sm top-[-.5rem] sm:top-[-.5rem] right-[-.5rem] px-[5.5px] sm:px-[7px]">{angka}</div>
    if (angka < 99) return <div className="total-product-bag text-xs sm:text-sm top-[-.6rem] sm:top-[-.7rem] right-[-.7rem] py-[2px] px-[5px] sm:py-[3px] sm:px-[6px]">{angka}</div>
    if (angka < 999) return <div className="total-product-bag text-xs sm:text-sm top-[-.8rem] sm:top-[-1rem] right-[-.9rem] sm:right-[-1rem] py-[4px] sm:py-[6px] px-[4px] sm:px-[6px]">{angka}</div>
    if (angka > 999) return <div className="total-product-bag text-xs sm:text-sm top-[-1rem] sm:top-[-1.3rem] right-[-1.3rem] py-[6px] sm:py-[9px] px-[4px] sm:px-[6px]">{angka}</div>
}

const Basket = () => {

    return (
        <>
            <div className="cursor-pointer relative text-xl sm:text-3xl">
                <Jumlah />
                <RiShoppingBag3Fill />
            </div>
        </>
    )
}

export default Basket