import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useCustomMutation from '../../hooks/useCustomMutation';
import patient from '../../services/api/patient';
import REACT_QUERY_IDS from '../../services/react-query-ids';
import { formatStringToDate } from '../../utils';
import { TPatient, makePatientData } from '../../utils/validation/patient';
import { Button } from '../shared/Button';
import PatientModal from './PatientModal';

interface ParamsType {
  data: TPatient;
}

const UpdatePatient: FC<ParamsType> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.PATIENTS.PATIENTS],
    (data: TPatient) => patient.update(data.id || 0, data),
    closeModal
  );

  const onSendRequest = (data: TPatient) => {
    const newData = makePatientData(data);
    mutate(newData);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { t } = useTranslation();
  return (
    <div>
      <Button size="sm" variant="success" onClick={openModal}>
        {t('update')}
      </Button>
      <PatientModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          ...data,
          birthdate: formatStringToDate(data.birthdate as unknown as string),
        }}
      />
    </div>
  );
};

export default UpdatePatient;
