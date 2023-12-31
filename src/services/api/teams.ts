import { PAGE_SIZE } from "../../data/constants";
import { TTeam } from "../../utils/validation/team";
import { deleteData, getData, postData, updateData } from "../crud";
import { IApiResponse } from "./auth";

const endpoint = "teams";

export interface ITeam {
  id: number;
  name: string;
  leaderName: string;
  leaderId: number;
  department: string;
  image: string;
  members: {
    username: string;
    image: string;
  }[];
}

const create = async (patientDate: TTeam): Promise<IApiResponse<ITeam>> => {
  const data = await postData(endpoint, patientDate);
  return data;
};
const getAll = async (
  skip: number = 0,
  pageSize: number = PAGE_SIZE,
  search?: string
): Promise<IApiResponse<ITeam[]>> => {
  const data = await getData(endpoint, skip, pageSize, search);
  return data.data;
};

const getOne = async (teamId: number): Promise<IApiResponse<ITeam>> => {
  const data = await getData(endpoint + "/" + teamId, 1, PAGE_SIZE, "");
  return data;
};

const update = async (
  teamId: number,
  teamData: TTeam
): Promise<IApiResponse<ITeam>> => {
  return await updateData(`${endpoint}/${teamId}`, teamData);
};

const deleteOne = async (teamId: number): Promise<IApiResponse<ITeam>> => {
  const data = await deleteData(endpoint, teamId);
  return data;
};

const deleteMany = async (
  teamIds: number[]
): Promise<IApiResponse<ITeam[]>> => {
  const data = await deleteData(endpoint, teamIds);
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
