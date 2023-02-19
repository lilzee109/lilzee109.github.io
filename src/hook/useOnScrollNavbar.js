import { useEffect, useState } from "react";

const useScrollBody = () => {
    const [activeNav, setActiveNav] = useState(false);

    const onScroll = () => {
        if (window.scrollY > 84) return setActiveNav(true);
        if (window.scrollY === 0) return setActiveNav(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return { activeNav }
}

export default useScrollBody