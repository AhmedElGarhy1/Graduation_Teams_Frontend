import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import drugsIcon from '../../../assets/icons/medicine.png';
import { TSupplier } from '../../../utils/validation/supplier';
import CustomModal from '../../shared/Modal';
import SupplierForm from './Form';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  sendRequst: (d: TSupplier) => void;
  isLoading: boolean;
  data?: TSupplier;
  isUpdate?: boolean;
}

const AddSupplierModal: FC<ParamsType> = ({
  isOpen,
  closeModal,
  sendRequst,
  isLoading,
  data,
  isUpdate = false,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <CustomModal
        header={t(`settings.suppliers.list.${isUpdate ? 'update' : 'add'}`)}
        icon={drugsIcon}
        closeModal={closeModal}
        isOpen={isOpen}
        size="md"
      >
        <SupplierForm
          defaultValues={data}
          isLoading={isLoading}
          sendRequest={sendRequst}
        />
      </CustomModal>
    </div>
  );
};

export default AddSupplierModal;
