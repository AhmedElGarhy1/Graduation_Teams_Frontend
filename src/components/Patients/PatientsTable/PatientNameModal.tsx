import { FC, useState } from 'react';
import { TVisitOrPatient } from '../../../services/api/diagnostics';
import PatientFullModal from '../../PatientModal';

interface ParamsType {
  name: string;
  id: number;
  type: TVisitOrPatient;
  visitId?: number;
}

const PatientNameModal: FC<ParamsType> = ({ name, id, type, visitId }) => {
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
        {name}
      </div>
      <PatientFullModal
        opened={opened}
        closeModal={closeModal}
        patientId={id || 0}
        patientName={name}
        type={type}
        visitId={visitId}
      />
    </>
  );
};

export default PatientNameModal;
