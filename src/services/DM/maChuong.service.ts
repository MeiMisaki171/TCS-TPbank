import { useEffect, useState } from "react"
import { dataTable } from "~/components/Layout/Body/DataTable";

// getAll
export const GetAllMaChuong = () => {
    const [maChuong, setMaChuong] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.15.68.82:8081/api/DMQuocGia');

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                const data = await response.json();
                setMaChuong(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData();
    }, []);

    return maChuong
}

export const createMaChuong = (data: dataTable) => {

    const fetchData = async () => {
        try {
            const response = await fetch('http://10.15.68.82:8081/api/DMQuocGia', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            } else {
                alert('Them moi thanh cong');
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    fetchData();
    console.log(data)

}

export const deleteMaChuong = (maQG: string) => {

    const fetchData = async () => {
        try {
            const response = await fetch(`http://10.15.68.82:8081/api/DMQuocGia/${maQG}`,
                {
                    method: 'DELETE',
                }
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            } else {
                alert('Xoa thanh cong');
                window.location.reload();
            }
        } catch (error) {
            console.error('Error feching data: ', error)
        }
    }

    fetchData();
}
