import { dmMaChuong } from "~/api/danhmuc.api";
import http from "~/api/http-common";
import { maChuong } from "~/types/DM/maChuong";

const getAll = () => {
    return http.get(`${dmMaChuong}`)
};

const findById = (id: string) => {
    return http.get(`${dmMaChuong}/${id}`)
}

const updateMC = (qg: maChuong) => {
    return http.put(`${dmMaChuong}`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`${dmMaChuong}/${id}`);
}

const createMC = (QG: maChuong) => {
    return http.post(`${dmMaChuong}`, QG)
}

const DMMaChuongService = {
    getAll,
    findById,
    updateMC,
    createMC,
    deleteById,
}

export default DMMaChuongService;