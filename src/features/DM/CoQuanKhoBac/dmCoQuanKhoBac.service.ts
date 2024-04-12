import { dmMaChuong } from "~/api/danhmuc.api";
import http from "~/api/http-common";
import { ICoQuanKB } from "~/types/DM/coQuanKhoBac";

const getAll = () => {
    return http.get(`${dmMaChuong}`)
};

const findById = (id: string) => {
    return http.get(`${dmMaChuong}/${id}`)
}

const updateCQKB = (qg: ICoQuanKB) => {
    return http.put(`${dmMaChuong}`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`${dmMaChuong}/${id}`);
}

const createCQKB = (qg: ICoQuanKB) => {
    return http.post(`${dmMaChuong}`, qg)
}

const DMCoQuanKBService = {
    getAll,
    findById,
    updateCQKB,
    createCQKB,
    deleteById,
}

export default DMCoQuanKBService;