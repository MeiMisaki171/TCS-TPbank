import dmMaChuong from "~/api/danhmuc.api";
import http from "~/api/http-common";
import { ImaNDKT } from "~/types/DM/maNDKT";

const getAll = () => {
    return http.get(`${dmMaChuong}`)
};

const findById = (id: string) => {
    return http.get(`${dmMaChuong}/${id}`)
}

const updateMaNDKT = (qg: ImaNDKT) => {
    return http.put(`${dmMaChuong}`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`${dmMaChuong}/${id}`);
}

const createMaNDKT = (qg: ImaNDKT) => {
    return http.post(`${dmMaChuong}`, qg)
}

const DMMaNDKTService = {
    getAll,
    findById,
    updateMaNDKT,
    createMaNDKT,
    deleteById,
}

export default DMMaNDKTService;