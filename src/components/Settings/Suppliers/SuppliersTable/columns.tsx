import { Column } from 'react-table';
import { TSupplier } from '../../../../utils/validation/supplier';
import DeleteSupplier from '../DeleteSupplier';

export const columns: Column<TSupplier>[] = [
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'createdAt',
    accessor: 'created_at',
  },
  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-3 mx-5">
          <DeleteSupplier id={row.original.id || 0} />
        </div>
      );
    },
  },
];
