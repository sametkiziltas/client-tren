import http from "../http-common";
import IWordService from "../types/Word";

const getAll = () => {
  return http.get<Array<IWordService>>("/tutorials");
};

const get = (id: any) => {
  return http.get<IWordService>(`/tutorials/${id}`);
};

const create = (data: IWordService) => {
  return http.post<IWordService>("/tutorials", data);
};

const update = (id: any, data: IWordService) => {
  return http.put<any>(`/tutorials/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const search = (text:string,language: string) => {
  return http.get<Array<IWordService>>(`/translates/${text}/${language}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  search,
};

export default TutorialService;
