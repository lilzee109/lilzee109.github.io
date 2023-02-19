import React from "react";
import { useParams } from "react-router-dom";
import MapProduct from "../component/MapProduct";
import SearchEmpty from "../component/SearchEmpty";
import useGetProducts from "../hook/useGetProducts";
import { REST_API } from "../util/linkApi";


const SearchData = ({ dataUsers, setActiveRegisOrLogin }) => {
    const { data, loading } = useGetProducts(`${REST_API}products`);
    const { search } = useParams();

    let product = data.filter(product => product.nameProduct.includes(`${search}`))

    return (
        <>
            <div className="w-[90%] mx-auto">
                {product.length === 0
                    ? <SearchEmpty />
                    : (
                        <MapProduct
                            dataUsers={dataUsers}
                            setActiveRegisOrLogin={setActiveRegisOrLogin}
                            data={product}
                            loading={loading}
                        />
                    )}

            </div>
        </>
    )
}

export default SearchData