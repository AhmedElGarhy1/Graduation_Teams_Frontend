import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import drug from '../../../../services/api/drug';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import { TDrug } from '../../../../utils/validation/prescription';
import Table from '../../../shared/Table';
import { columns } from './columns';

const DrugsTable: FC = () => {
  const { t } = useTranslation();
  const { can } = useCan();
  return (
    <Table<TDrug>
      columns={columns}
      queryFn={(page) => drug.getAll(page)}
      queryIds={[REACT_QUERY_IDS.SETTINGS.DRUGS]}
      deleteManyFn={
        can([UserPermissionsEnum.DRUGS_DELETE]) ? drug.deleteMany : undefined
      }
      title={t('settings.drugs.list.title')}
    />
  );
};

export default DrugsTable;
