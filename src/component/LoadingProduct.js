import React from 'react'

const LoadingProduct = () => {
    let totalLoop = [];

    for (let i = 0; i <= 20; i++) {
        totalLoop.push(i);
    }

    return (
        <>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
                {totalLoop.map((data, index) => (
                    <div key={index} className="bg-gray-200 w-[100%] h-[20.5rem] md:h-[23rem] lg:h-[26rem] rounded-xl overflow-hidden animate-pulse">
                        <div className="bg-gray-300 w-full md:h-[15.5rem] h-[13.5rem] lg:h-[18.5rem]">
                        </div>
                        <div className="bg-gray-300 w-[60%] lg:w-[10rem] h-[1rem] mx-3 mt-2"></div>
                        <div className="bg-gray-300 w-[80%] lg:w-[15rem] h-[1rem] mx-3 mt-2"></div>
                        <div className="bg-gray-300 w-[40%] lg:w-[8rem] h-[1rem] mx-3 mt-3"></div>
                        <div className="bg-gray-300 w-full h-full mt-3"></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LoadingProduct