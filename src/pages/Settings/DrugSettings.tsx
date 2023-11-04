import { FC } from 'react';
import AddDrug from '../../components/Settings/Drugs/AddDrug';
import DrugsTable from '../../components/Settings/Drugs/DrugsTable';

const DrugSettings: FC = () => {
  return (
    <div>
      <AddDrug />
      <DrugsTable />
    </div>
  );
};

export default DrugSettings;
