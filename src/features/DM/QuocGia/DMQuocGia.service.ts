import http from "~/api/http-common";
import { dataTable } from "~/types/DM/quocGia";

const getAll = () => {
    return http.get("/DMQuocGia")
};

const findById = (id: string) => {
    return http.get(`/DMQuocGia/${id}`)
}

const updateQG = (qg: dataTable) => {
    return http.put(`/DMQuocGia`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`/DMQuocGia/${id}`);
}

const createQG = (qg: dataTable) => {
    return http.post(`/DMQuocGia`, qg)
}

const DMQuocGiaService = {
    getAll,
    findById,
    updateQG,
    createQG,
    deleteById,
}

export default DMQuocGiaService;