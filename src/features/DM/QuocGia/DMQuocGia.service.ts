import http from "~/api/http-common";

const getAll = async () => {
    return http.get("/DMQuocGia")
};

const deleteById = (id: string) => {
    return http.delete(`/DMQuocGia/${id}`);
}

const DMQuocGiaService = {
    getAll,
    deleteById
}

export default DMQuocGiaService;