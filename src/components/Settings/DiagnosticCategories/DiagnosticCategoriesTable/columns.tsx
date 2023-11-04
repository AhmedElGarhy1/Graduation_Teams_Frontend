import { Column } from 'react-table';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import { TDiagnosticCategory } from '../../../../utils/validation/diagnostic';
import DeleteDiagnosticCategory from '../DeleteDiagnosticCategory';
import UpdateDiagnositcCategory from '../UpdateDiagnosticCategory';

export const columns: Column<TDiagnosticCategory>[] = [
  {
    Header: 'name',
    accessor: 'name',
  },

  {
    Header: 'description',
    accessor: 'description',
  },
  {
    Header: 'advice',
    accessor: 'advices',
  },
  {
    Header: 'settings.diagnosticsCategories.list.subCategory',
    accessor: 'parent_name',
  },

  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      const { can } = useCan();
      return (
        <>
          <div className="flex justify-end gap-3 mx-5">
            {can([UserPermissionsEnum.DIAGNOSTIC_CATEGORIES_UPDATE]) && (
              <UpdateDiagnositcCategory data={row.original} />
            )}
            {can([UserPermissionsEnum.DIAGNOSTICS_DELETE]) && (
              <DeleteDiagnosticCategory id={row.original.id || 0} />
            )}
          </div>
        </>
      );
    },
  },
];
