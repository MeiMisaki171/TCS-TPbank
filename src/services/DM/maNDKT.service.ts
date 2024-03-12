import { useEffect, useState } from "react"

export const GetAllMaNDKT = () => {
    const [maNdkt, setMaNdkt] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.15.68.82:8081/api/DMLoaiHoChieuVN');

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                const data = await response.json();
                setMaNdkt(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])

    return maNdkt;
}