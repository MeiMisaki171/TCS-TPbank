import dmMaChuong from "~/api/danhmuc.api";
import http from "~/api/http-common";
import { ICoQuanThu } from "~/types/DM/coQuanThu";

const getAll = () => {
    return http.get(`${dmMaChuong}`)
};

const findById = (id: string) => {
    return http.get(`${dmMaChuong}/${id}`)
}

const updateCQT = (qg: ICoQuanThu) => {
    return http.put(`${dmMaChuong}`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`${dmMaChuong}/${id}`);
}

const createCQT = (qg: ICoQuanThu) => {
    return http.post(`${dmMaChuong}`, qg)
}

const DMCoQuanThuService = {
    getAll,
    findById,
    updateCQT,
    createCQT,
    deleteById,
}

export default DMCoQuanThuService;