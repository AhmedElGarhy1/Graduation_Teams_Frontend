import { PAGE_SIZE } from "../data/constants";

// get first element
export const getFirstTableNumber = (page: number) => {
  return (page - 1) * PAGE_SIZE + 1;
};
export const getLastTableNumber = (page: number, total: number) => {
  return page * PAGE_SIZE > total ? total : page * PAGE_SIZE;
};

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getTokenValue = () => localStorage.getItem("_token");
export const setTokenValue = (token: string) =>
  localStorage.setItem("_token", token);
export const removeTokenValue = () => localStorage.removeItem("_token");
