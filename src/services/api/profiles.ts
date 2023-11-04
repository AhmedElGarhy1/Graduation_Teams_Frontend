import { PAGE_SIZE } from "../../data/constants";
import { TPatient } from "../../utils/validation/patient";
import { deleteData, getData, postData, updateData } from "../crud";
import { IApiResponse } from "./auth";

const endpoint = "profiles";

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  gender: string;
  department: string;
}

const create = async (
  patientDate: TPatient
): Promise<IApiResponse<IProfile>> => {
  const data = await postData(endpoint, patientDate);
  return data;
};
const getAll = async (
  page: number = 1,
  pageSize: number = PAGE_SIZE,
  search?: string
): Promise<IApiResponse<IProfile[]>> => {
  const data = await getData(endpoint, page, pageSize, search);
  return data.data;
};

const getOne = async (teamId: number): Promise<IApiResponse<IProfile>> => {
  const data = await getData(endpoint + "/" + teamId, 1, PAGE_SIZE, "");
  return data;
};

const update = async (
  patientId: number,
  patientData: TPatient
): Promise<IApiResponse<IProfile>> => {
  return await updateData(`${endpoint}/${patientId}`, patientData);
};

const deleteOne = async (
  patientId: number
): Promise<IApiResponse<IProfile>> => {
  const data = await deleteData(endpoint, patientId);
  return data;
};

const deleteMany = async (
  patientIds: number[]
): Promise<IApiResponse<IProfile[]>> => {
  const data = await deleteData(endpoint, patientIds);
  return data;
};

export default {
  create,
  getAll,
  getOne,
  update,
  deleteOne,
  deleteMany,
};
