import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import supplier from '../../../services/api/supplier';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TSupplier } from '../../../utils/validation/supplier';
import AddModalButton from '../../shared/Button/AddModalButton';
import AddSupplierModal from './AddSupplierModal';

const AddSupplier = () => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.SUPPLIERS_CREATE])) return <></>;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.SUPPLIERS],
    supplier.create,
    closeModal
  );

  const onSendRequest = (data: TSupplier) => {
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
        title={t('settings.suppliers.title')}
        add={t('settings.suppliers.list.add')}
        openModal={openModal}
      />

      <AddSupplierModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          name: '',
        }}
      />
    </div>
  );
};

export default AddSupplier;
