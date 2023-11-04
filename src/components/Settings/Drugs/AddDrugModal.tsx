import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import drugsIcon from '../../../assets/icons/medicine.png';
import { TDrug } from '../../../utils/validation/prescription';
import CustomModal from '../../shared/Modal';
import DrugForm from './Form';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  sendRequst: (d: TDrug) => void;
  isLoading: boolean;
  data?: TDrug;
  isUpdate?: boolean;
}

const AddDrugModal: FC<ParamsType> = ({
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
        header={t(`settings.drugs.list.${isUpdate ? 'update' : 'add'}`)}
        icon={drugsIcon}
        closeModal={closeModal}
        isOpen={isOpen}
        size="md"
      >
        <DrugForm
          defaultValues={data}
          isLoading={isLoading}
          sendRequest={sendRequst}
        />
      </CustomModal>
    </div>
  );
};

export default AddDrugModal;