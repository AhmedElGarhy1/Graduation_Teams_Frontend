import { FC } from 'react';
import AddPatientProfileField from '../../components/Settings/PatientProfile/AddPatientProfileField';
import PatientProfileFieldsTable from '../../components/Settings/PatientProfile/PatientProfileFieldsTable';

const PatientProfileSettings: FC = () => {
  return (
    <div>
      <AddPatientProfileField />
      <PatientProfileFieldsTable />
    </div>
  );
};

export default PatientProfileSettings;
