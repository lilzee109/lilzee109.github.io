import axios from "axios"
import { useEffect, useState } from "react"


const useGetProducts = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            await axios.get(url).then((res) => {
                let data = res.data
                setData(data.response)
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }

        getProduct()
    }, [url])


    return { data, loading }
}

export default useGetProducts