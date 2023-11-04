import { Column } from 'react-table';
import { TPatientProfile } from '../../../../utils/validation/patientProfile';
import DeletePatientProfileField from '../DeletePatientProfileField';

export const columns: Column<TPatientProfile>[] = [
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-3 mx-5">
          {/* <ShowDrug data={row.original} />
          <UpdateDrug data={row.original} /> */}
          <DeletePatientProfileField id={row.original.id || 0} />
        </div>
      );
    },
  },
];
