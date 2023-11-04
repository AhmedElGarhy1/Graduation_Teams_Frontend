import { Column } from 'react-table';
import { TDrug } from '../../../../utils/validation/prescription';
import DeleteDrug from '../DeleteDrug';
import ShowDrug from '../ShowDrug';
import UpdateDrug from '../UpdateDrug';

export const columns: Column<TDrug>[] = [
  {
    Header: 'name',
    accessor: 'drug_name',
  },
  {
    Header: 'type',
    accessor: 'type',
  },
  {
    Header: 'settings.drugs.list.dose',
    accessor: 'dose',
  },
  {
    Header: 'settings.suppliers.supplier',
    accessor: 'supplier',
  },
  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-3 mx-5">
          <ShowDrug data={row.original} />
          <UpdateDrug data={row.original} />
          <DeleteDrug id={row.original.id || 0} />
        </div>
      );
    },
  },
];
