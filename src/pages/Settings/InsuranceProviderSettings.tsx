import { FC } from 'react';
import AddInsuranceProvider from '../../components/Settings/InsuranceProviders/AddInsuranceProvider';
import InsuranceProviderTable from '../../components/Settings/InsuranceProviders/InsuranceProviderTable';

const InsuranceProviderSettings: FC = () => {
  return (
    <div>
      <AddInsuranceProvider />
      <InsuranceProviderTable />
    </div>
  );
};

export default InsuranceProviderSettings;
