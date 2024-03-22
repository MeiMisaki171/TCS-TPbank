import http from "~/api/http-common";
import { ICoQuanThu } from "~/types/DM/coQuanThu";

const getAll = () => {
    return http.get("/DMQuocGia")
};

const findById = (id: string) => {
    return http.get(`/DMQuocGia/${id}`)
}

const updateCQT = (qg: ICoQuanThu) => {
    return http.put(`/DMQuocGia`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`/DMQuocGia/${id}`);
}

const createCQT = (qg: ICoQuanThu) => {
    return http.post(`/DMQuocGia`, qg)
}

const DMCoQuanThuService = {
    getAll,
    findById,
    updateCQT,
    createCQT,
    deleteById,
}

export default DMCoQuanThuService;