import React, { useRef } from "react"
import { useEffect } from "react";
import { useState } from "react"
import { MdKeyboardArrowDown } from "../util/Icon";

const ShowPerPage = ({ setShowPage, showPage }) => {
    let data = [1, 2, 3, 4, 5, 6];
    const [mouseHover, setMouseHover] = useState(1);
    const [active, setActive] = useState(false);
    const btnRef = useRef();
    const menuRef = useRef();

    const onClickShowPerPage = (value) => {
        setMouseHover(value);
        setShowPage(value);
        setActive(!active);
    }

    useEffect(() => {
        if (active === false) return setMouseHover(showPage);
    }, [active, showPage])

    useEffect(() => {
        const onOfShowPage = (e) => {
            if (menuRef.current !== e.target && btnRef.current !== e.target) return setActive(false);
        }

        window.addEventListener("click", (e) => onOfShowPage(e));
        return () => window.removeEventListener("click", (e) => onOfShowPage(e))
    }, [])

    return (
        <>
            <div className="flex items-center gap-3 font-light relative z-10">
                <p>show</p>
                <div className="inline-block relative">
                    <button
                        className="btn-showpage"
                        onClick={() => setActive(!active)}
                        ref={btnRef}
                    >
                        {showPage}
                        <MdKeyboardArrowDown
                            className={!active ? "icon-btn" : "icon-btn-active"}
                        />
                    </button>

                    {active && (
                        <ul
                            className="parent_showpage"
                            ref={menuRef}
                        >
                            {data.map((data, index) => (
                                <li
                                    key={index}
                                    onClick={() => onClickShowPerPage(data)}
                                    onMouseEnter={() => setMouseHover(data)}
                                    className={mouseHover === data ? "btn-li-show-active" : "btn-li-show"}
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <p>per page</p>
            </div>
        </>
    )
}

export default ShowPerPage