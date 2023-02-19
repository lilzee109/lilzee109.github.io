import React from "react";
import "./index.css"

const Loading = () => {
    return (
        <div className="fixed top-0 z-[60] bg-black/80 w-full h-screen">
            <div className="parent_text-loading gap-1">
                <p className="text">Loading</p>
                <div className="flex gap-1 mt-2">
                    <span className="titik"></span>
                    <span className="titik"></span>
                    <span className="titik"></span>
                </div>
            </div>
            <section>
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section >
        </div >
    )
}

export default Loading