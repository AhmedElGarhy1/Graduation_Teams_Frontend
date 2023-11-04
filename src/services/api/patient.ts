import { PAGE_SIZE } from '../../data/constants';
import { TPatient } from '../../utils/validation/patient';
import { deleteData, getData, postData, updateData } from '../crud';

const endpoint = 'patients';

const create = async (
  patientDate: TPatient
): Promise<TApiResponse<TPatient[]>> => {
  const data = await postData(endpoint, patientDate);
  return data;
};
const getAll = async (
  page: number = 1,
  pageSize: number = PAGE_SIZE,
  search?: string
): Promise<TApiResponse<TPatient[]>> => {
  return getData(endpoint, page, pageSize, search);
};
const update = async (
  patientId: number,
  patientData: TPatient
): Promise<TApiResponse<TPatient[]>> => {
  return await updateData(`${endpoint}/${patientId}`, patientData);
};

const deleteOne = async (patientId: number): Promise<TApiResponse<any>> => {
  const data = await deleteData(endpoint, patientId);
  return data;
};

const deleteMany = async (
  patientIds: number[]
): Promise<TApiResponse<TPatient[]>> => {
  const data = await deleteData(endpoint, patientIds);
  return data;
};

export default {
  create,
  getAll,
  update,
  deleteOne,
  deleteMany,
};
