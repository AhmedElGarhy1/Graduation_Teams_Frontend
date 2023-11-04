import { FC } from 'react';
import AddPatient from '../components/Patients/AddPatient';
import PatientsTable from '../components/Patients/PatientsTable';

const Patients: FC = () => {
  return (
    <div>
      <AddPatient />
      <PatientsTable />
    </div>
  );
};

export default Patients;
