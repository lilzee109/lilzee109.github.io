import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState(false);
    const [dimensi, setDimensi] = useState(false);

    useEffect(() => {
        if (window.innerHeight <= 374 && window.innerWidth <= 833) {
            setDimensi(d => !d)
        }

        bodyStyle.overflowY = isLocked ? "hidden" : "auto"
    }, [isLocked, bodyStyle]);

    const toggle = () => setIsLocked(!isLocked);

    return { toggle, dimensi }
}

export default useBodyScrollLock