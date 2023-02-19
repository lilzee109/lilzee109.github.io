import { React } from "react";
import MapProduct from "../component/MapProduct";
import useGetProducts from "../hook/useGetProducts";
import { REST_API } from "../util/linkApi";

const Home = ({ dataUsers, setActiveRegisOrLogin }) => {
    const { data, loading } = useGetProducts(`${REST_API}products`);

    return (
        <div className="container-app">
            <MapProduct
                dataUsers={dataUsers}
                setActiveRegisOrLogin={setActiveRegisOrLogin}
                data={data}
                loading={loading}
            />
            <div className="h-[100rem] w-full"></div>
        </div>
    )
}

export default Home