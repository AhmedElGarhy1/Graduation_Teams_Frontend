import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import supplier from '../../../../services/api/supplier';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import { TSupplier } from '../../../../utils/validation/supplier';
import Table from '../../../shared/Table';
import { columns } from './columns';

const SupplierTable: FC = () => {
  const { t } = useTranslation();
  const { can } = useCan();
  return (
    <Table<TSupplier>
      columns={columns}
      queryFn={(page) => supplier.getAll(page)}
      queryIds={[REACT_QUERY_IDS.SETTINGS.SUPPLIERS]}
      deleteManyFn={
        can([UserPermissionsEnum.SUPPLIERS_DELETE])
          ? supplier.deleteMany
          : undefined
      }
      title={t('settings.suppliers.list.title')}
    />
  );
};

export default SupplierTable;
