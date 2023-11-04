import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import drugsIcon from '../../../assets/icons/medicine.png';
import { TInsuranceProvider } from '../../../utils/validation/insuranceProvider';
import CustomModal from '../../shared/Modal';
import SupplierForm from './Form';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  sendRequst: (d: TInsuranceProvider) => void;
  isLoading: boolean;
  data?: TInsuranceProvider;
  isUpdate?: boolean;
}

const AddInsuranceProviderModal: FC<ParamsType> = ({
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
        header={t(
          `settings.insuranceProviders.list.${isUpdate ? 'update' : 'add'}`
        )}
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

export default AddInsuranceProviderModal;
