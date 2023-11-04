import newPatientIcon from '../../assets/icons/new_patient.png';
import { TPatient } from '../../utils/validation/patient';
import CustomModal from '../shared/Modal';
import AddPatientForm from './Form';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  sendRequst: (d: TPatient) => void;
  isLoading: boolean;
  data?: TPatient;
}

const PatientModal: FC<ParamsType> = ({
  isOpen,
  closeModal,
  sendRequst,
  isLoading,
  data,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <CustomModal
        header={t('patients.add')}
        icon={newPatientIcon}
        closeModal={closeModal}
        isOpen={isOpen}
      >
        <AddPatientForm
          defaultValues={data}
          isLoading={isLoading}
          sendRequest={sendRequst}
        />
      </CustomModal>
    </div>
  );
};

export default PatientModal;
