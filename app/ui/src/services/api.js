import AxiosUtil from '../util/axois-util';

export const getNodes = () => AxiosUtil.get('/query-management/nodes/', null);
export const postNode = (node) => AxiosUtil.post('/query-management/nodes/', null, node);

export const getEdges = () => AxiosUtil.get('/query-management/edges/', null);
export const postEdge = (edge) => AxiosUtil.post('/query-management/edges/', null, edge);

export const getRels = () => AxiosUtil.get('/query-management/relationships/', null);
export const postRel = (rel) => AxiosUtil.post('/query-management/relationships/', null, rel);

export const getFields = () => AxiosUtil.get('/query-management/fields/', null);
export const postField = (field) => AxiosUtil.post('/query-management/fields/', null, field);

export const getFilters = () => AxiosUtil.get('/query-management/filters/', null);
export const postFilter = (filter) => AxiosUtil.post('/query-management/filters/', null, filter);

export const getProfile = (id) => AxiosUtil.get('/profiles/' + id + '/', null);
export const getProfiles = (data) => AxiosUtil.post('/profiles/', null, data);

export const signup = (data) => AxiosUtil.post('/users/', null, data);
export const login = (data) => AxiosUtil.post('/auth/', null, data);
