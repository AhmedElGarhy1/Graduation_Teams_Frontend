import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import drug from '../../../services/api/drug';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TDrug } from '../../../utils/validation/prescription';
import AddModalButton from '../../shared/Button/AddModalButton';
import AddDrugModal from './AddDrugModal';

const AddDrug = () => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DRUGS_ADD])) return <></>;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.DRUGS],
    drug.create,
    closeModal
  );

  const onSendRequest = (data: TDrug) => {
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
        title={t('settings.drugs.title')}
        add={t('settings.drugs.list.add')}
        openModal={openModal}
      />

      <AddDrugModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          dose: '',
          drug_name: '',
          addedNote: '',
          notes: '',
          type: '',
        }}
      />
    </div>
  );
};

export default AddDrug;
