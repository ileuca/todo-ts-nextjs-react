import { mutate } from "swr";

export type SetDataFN = (path: string, data: any) => Promise<void>;

export const setData = (path: string, data: any): void => {
  localStorage.setItem(path, JSON.stringify(data));
  mutate(path, data);
};

export type GetDataFN<T> = (path: string) => Promise<T | null | undefined>;

export const getData: GetDataFN<T> = (path) => {
  const strValue = localStorage.getItem(path);
  if (strValue) {
    return JSON.parse(strValue) as T;
  }

  return undefined;
};

export default {
  set: setData,
  get: getData
};
