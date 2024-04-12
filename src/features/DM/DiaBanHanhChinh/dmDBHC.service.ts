import { dmMaChuong } from "~/api/danhmuc.api";
import http from "~/api/http-common";
import { IDbhc } from "~/types/DM/diaBanHanhChinh";

const getAll = () => {
    return http.get(`${dmMaChuong}`)
};

const findById = (id: string) => {
    return http.get(`${dmMaChuong}/${id}`)
}

const updateDBHC = (qg: IDbhc) => {
    return http.put(`${dmMaChuong}`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`${dmMaChuong}/${id}`);
}

const createDBHC = (qg: IDbhc) => {
    return http.post(`${dmMaChuong}`, qg)
}

const DMDiaBanHCService = {
    getAll,
    findById,
    updateDBHC,
    createDBHC,
    deleteById,
}

export default DMDiaBanHCService;