import { PAGE_SIZE } from "../data/constants";
import customAxios from "./axios";

export async function getData(
  url: string,
  skip: number = 0,
  pageSize: number = PAGE_SIZE,
  search?: string,
  params?: string
) {
  const _params = `skip=${skip}&take=${pageSize}&search=${search || ""}&${
    params || ""
  }`;
  // const params = `_page=${page}&_limit=${pageSize}&q=${search || ''}`;
  const response = await customAxios.get(url + "?" + _params);
  return response.data;
}

export async function postData(url: string, data: any) {
  const response = await customAxios.post(url, data);
  return response.data;
}

export async function updateData(url: string, data: any) {
  const response = await customAxios.patch(url, data);
  return response.data;
}

export async function deleteData(url: string, id: number | number[]) {
  let query = url;
  if (typeof id === typeof []) {
    query += `?ids=${JSON.stringify(id)}`;
  } else {
    query += `/${id}`;
  }
  const response = await customAxios.delete(query);
  return response.data;
}
