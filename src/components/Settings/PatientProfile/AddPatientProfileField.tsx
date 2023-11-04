import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import insureanceProvider from '../../../services/api/insureanceProvider';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TInsuranceProvider } from '../../../utils/validation/insuranceProvider';
import AddModalButton from '../../shared/Button/AddModalButton';
import AddPatientProfileFieldModal from './AddPatientProfileFieldModal';

const AddPatientProfileField = () => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.INSURANCE_PROVIDER_CREATE])) return <></>;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.INSURANCE_PROVIDERS],
    insureanceProvider.create,
    closeModal
  );

  const onSendRequest = (data: TInsuranceProvider) => {
    // const newData = makeExpenseData(data);
    mutate(data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mt-3">
      <AddModalButton
        title={t('settings.insuranceProviders.title')}
        add={t('settings.insuranceProviders.list.add')}
        openModal={openModal}
      />

      <AddPatientProfileFieldModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          name: '',
          discount_amount: 0,
          discount_type: '',
        }}
      />
    </div>
  );
};

export default AddPatientProfileField;
