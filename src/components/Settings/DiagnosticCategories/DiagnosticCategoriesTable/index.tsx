import { FC } from 'react';
import diagnostics from '../../../../services/api/diagnostics';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';

import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import { TDiagnosticCategory } from '../../../../utils/validation/diagnostic';
import Table from '../../../shared/Table';
import { columns } from './columns';

const DiagnosticCategoriesTable: FC = () => {
  const { can } = useCan();
  const { t } = useTranslation();
  return (
    <Table<TDiagnosticCategory>
      columns={columns}
      queryFn={(page) => diagnostics.category.getAll(page)}
      queryIds={[REACT_QUERY_IDS.SETTINGS.DIAGNOSTIC_CATEGORIES]}
      deleteManyFn={
        can([UserPermissionsEnum.DIAGNOSTIC_CATEGORIES_DELETE])
          ? diagnostics.category.deleteMany
          : undefined
      }
      title={t('settings.diagnosticsCategories.list.title')}
    />
  );
};

export default DiagnosticCategoriesTable;
