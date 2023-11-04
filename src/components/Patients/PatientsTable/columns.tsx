import { useState } from 'react';
import { Column } from 'react-table';
import { TPatient } from '../../../utils/validation/patient';
import PatientFullModal from '../../PatientModal';
import DeletePatient from '../DeletePatient';
import UpdatePatient from '../UpdatePatient';

export const columns: Column<TPatient>[] = [
  {
    Header: 'patients.patient',
    accessor: 'name',
    Cell: ({ row }) => {
      const patient = row.original;
      const [opened, setOpened] = useState(false);

      const closeModal = () => {
        setOpened(false);
      };
      const openModal = () => {
        setOpened(true);
      };
      return (
        <>
          <div
            className="cursor-pointer hover:text-primary hover:underline transition w-fit"
            onClick={openModal}
          >
            {patient.name}
          </div>
          <PatientFullModal
            opened={opened}
            closeModal={closeModal}
            patientId={row.original.id || 0}
            patientName={patient.name}
            type={'patient'}
          />
        </>
      );
    },
  },
  {
    Header: 'patients.visitsNumber',
    accessor: 'visit_count',
  },
  {
    Header: ' ',
    accessor: 'id',
    Cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-3 mx-5">
          <UpdatePatient data={row.original} />
          <DeletePatient patientId={row.original.id || 0} />
        </div>
      );
    },
  },
];
