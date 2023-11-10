import { PAGE_SIZE } from "../../data/constants";
import { deleteData, getData, postData, updateData } from "../crud";
import { IApiResponse } from "./auth";

const endpoint = "teams/join";

export interface IUserJoinTeam {
  id: number;
  type: string;
  userId: number;
  teamId: number;
  teamName: string;
  teamImage: string;
}

export interface TUserJoinTeam {
  type: string;
  targetId: number;
}

const create = async (
  data: TUserJoinTeam
): Promise<IApiResponse<IUserJoinTeam>> => {
  const _data = await postData(endpoint, data);
  return _data;
};
const getAllForStudents = async (
  skip: number = 0,
  pageSize: number = PAGE_SIZE
): Promise<IApiResponse<IUserJoinTeam[]>> => {
  const data = await getData(endpoint + "/students", skip, pageSize, "");
  return data.data;
};
const getAllForLeaders = async (
  skip: number = 0,
  pageSize: number = PAGE_SIZE
): Promise<IApiResponse<IUserJoinTeam[]>> => {
  const data = await getData(endpoint + "/teams", skip, pageSize, "");
  return data.data;
};

const getOne = async (teamId: number): Promise<IApiResponse<IUserJoinTeam>> => {
  const data = await getData(endpoint + "/" + teamId, 1, PAGE_SIZE, "");
  return data;
};

const acceptStuent = async (
  studentId: number
): Promise<IApiResponse<IUserJoinTeam>> => {
  return await updateData(`${endpoint}/students/${studentId}`, "");
};
const acceptTeam = async (
  teamId: number
): Promise<IApiResponse<IUserJoinTeam>> => {
  return await updateData(`${endpoint}/teams/${teamId}`, "");
};

const cancel = async (
  recordId: number
): Promise<IApiResponse<IUserJoinTeam>> => {
  const data = await deleteData(endpoint, recordId);
  return data;
};

export default {
  create,
  getAllForStudents,
  getAllForLeaders,
  getOne,
  acceptStuent,
  acceptTeam,
  cancel,
};
