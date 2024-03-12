import { useEffect, useState } from "react"

export const GetAllMaCQT = () => {
    const [maCQT, setMaCQT] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.15.68.82:8081/api/DMQuocGia');

                if (!response.ok) {
                    throw new Error(`Error ${response.status}`)
                }

                const data = await response.json();
                setMaCQT(data);
            } catch (err) {
                console.error("Error fetching data", err)
            }
        }
        fetchData()
    }, [])
    return maCQT;
}