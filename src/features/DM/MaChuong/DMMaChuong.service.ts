import http from "~/api/http-common";
import { maChuong } from "~/types/DM/maChuong";

const getAll = () => {
    return http.get("/DMQuocGia")
};

const findById = (id: string) => {
    return http.get(`/DMQuocGia/${id}`)
}

const updateMC = (qg: maChuong) => {
    return http.put(`/DMQuocGia`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`/DMQuocGia/${id}`);
}

const createMC = (qg: maChuong) => {
    return http.post(`/DMQuocGia`, qg)
}

const DMMaChuongService = {
    getAll,
    findById,
    updateMC,
    createMC,
    deleteById,
}

export default DMMaChuongService;