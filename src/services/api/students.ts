import { PAGE_SIZE } from "../../data/constants";
import { TTeam } from "../../utils/validation/team";
import { deleteData, getData, postData, updateData } from "../crud";
import { IApiResponse } from "./auth";

const endpoint = "users";

export interface IStudent {
  id: number;
  department: string;
  image: string;
  level: number;
  username: string;
  teamId: number;
}

const create = async (patientDate: TTeam): Promise<IApiResponse<IStudent>> => {
  const data = await postData(endpoint, patientDate);
  return data;
};
const getAllFree = async (
  skip: number = 0,
  pageSize: number = PAGE_SIZE,
  search?: string
): Promise<IApiResponse<IStudent[]>> => {
  const params = "type=free";
  const data = await getData(endpoint, skip, pageSize, search, params);
  return data.data;
};

const getOne = async (teamId: number): Promise<IApiResponse<IStudent>> => {
  const data = await getData(endpoint + "/" + teamId, 1, PAGE_SIZE, "");
  return data;
};

const update = async (
  teamId: number,
  teamData: TTeam
): Promise<IApiResponse<IStudent>> => {
  return await updateData(`${endpoint}/${teamId}`, teamData);
};

const deleteOne = async (teamId: number): Promise<IApiResponse<IStudent>> => {
  const data = await deleteData(endpoint, teamId);
  return data;
};

const deleteMany = async (
  teamIds: number[]
): Promise<IApiResponse<IStudent[]>> => {
  const data = await deleteData(endpoint, teamIds);
  return data;
};

export default {
  create,
  getAllFree: getAllFree,
  getOne,
  update,
  deleteOne,
  deleteMany,
};
