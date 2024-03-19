import http from "~/api/http-common";

const getAll = async () => {
    return http.get("/DMQuocGia")
};

const deleteById = (maQG: string) => {
    return http.delete(`/DMQuocGia/${maQG}`);
}

const DMQuocGiaService = {
    getAll,
    deleteById
}

export default DMQuocGiaService;