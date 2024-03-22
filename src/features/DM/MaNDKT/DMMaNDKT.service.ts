import http from "~/api/http-common";
import { ImaNDKT } from "~/types/DM/maNDKT";

const getAll = () => {
    return http.get("/DMQuocGia")
};

const findById = (id: string) => {
    return http.get(`/DMQuocGia/${id}`)
}

const updateMaNDKT = (qg: ImaNDKT) => {
    return http.put(`/DMQuocGia`, qg)
}

const deleteById = (id: string) => {
    return http.delete(`/DMQuocGia/${id}`);
}

const createMaNDKT = (qg: ImaNDKT) => {
    return http.post(`/DMQuocGia`, qg)
}

const DMMaNDKTService = {
    getAll,
    findById,
    updateMaNDKT,
    createMaNDKT,
    deleteById,
}

export default DMMaNDKTService;