import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../data/constants/permissions';
import useCan from '../../hooks/useCan';
import useCustomMutation from '../../hooks/useCustomMutation';
import patient from '../../services/api/patient';
import REACT_QUERY_IDS from '../../services/react-query-ids';
import { TPatient, makePatientData } from '../../utils/validation/patient';
import AddModalButton from '../shared/Button/AddModalButton';
import PatientModal from './PatientModal';

const AddPatient: FC = () => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.PATIENTS_CREATE])) return <></>;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.PATIENTS.PATIENTS],
    patient.create,
    closeModal
  );

  const onSendRequest = (data: TPatient) => {
    const newData = makePatientData(data);
    console.log(newData);
    mutate(newData);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <AddModalButton
        add={t('patients.add')}
        title={t('patients.title')}
        openModal={openModal}
      />

      <PatientModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          address: null,
          birthdate: null,
          gender: null,
          name: '',
          phone: '' as any,
          visit_count: 0,
          insurance_discount_amount: 0,
          insurance_discount_type: '',
        }}
      />
    </>
  );
};

export default AddPatient;
