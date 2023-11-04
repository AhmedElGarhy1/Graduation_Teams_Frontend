import { Column } from 'react-table';
import { TInsuranceProvider } from '../../../../utils/validation/insuranceProvider';
import DeleteInsuranceProvider from '../DeleteInsuranceProvider';

export const columns: Column<TInsuranceProvider>[] = [
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'Discount Amount',
    accessor: 'discount_amount',
  },
  {
    Header: 'Discount Type',
    accessor: 'discount_type',
  },
  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-3 mx-5">
          <DeleteInsuranceProvider id={row.original.id || 0} />
        </div>
      );
    },
  },
];
