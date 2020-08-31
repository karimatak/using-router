import http from '../http-common';

const getAll = () => {
    return http.get("/Continents");
};

const get = id => {
    return http.get(`/Continents/${id}`);
};

const create = data => {
    return http.post("/Continents", data);
};

const update = (data) => {
    return http.put("/Continents", data);
};

const remove = id => {
    return http.delete(`/Continents/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove
};