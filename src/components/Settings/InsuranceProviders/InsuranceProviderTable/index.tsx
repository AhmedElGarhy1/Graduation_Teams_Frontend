import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import insuranceProvider from '../../../../services/api/insureanceProvider';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import { TInsuranceProvider } from '../../../../utils/validation/insuranceProvider';
import Table from '../../../shared/Table';
import { columns } from './columns';

const InsuranceProviderTable: FC = () => {
  const { t } = useTranslation();
  const { can } = useCan();
  return (
    <Table<TInsuranceProvider>
      columns={columns}
      queryFn={(page) => insuranceProvider.getAll(page)}
      queryIds={[REACT_QUERY_IDS.SETTINGS.INSURANCE_PROVIDERS]}
      deleteManyFn={
        can([UserPermissionsEnum.INSURANCE_PROVIDER_DELETE])
          ? insuranceProvider.deleteMany
          : undefined
      }
      title={t('settings.insuranceProviders.list.title')}
    />
  );
};

export default InsuranceProviderTable;
