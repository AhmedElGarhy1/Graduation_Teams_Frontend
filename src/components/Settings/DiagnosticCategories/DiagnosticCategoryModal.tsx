import dailyRevenu from '../../../assets/icons/home/daily-revenue.png';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TDiagnosticCategory } from '../../../utils/validation/diagnostic';
import CustomModal from '../../shared/Modal';
import DiagnosticCategoryForm from './Form';

interface ParamsType {
  isOpen: boolean;
  closeModal: () => void;
  sendRequst: (d: TDiagnosticCategory) => void;
  isLoading: boolean;
  data?: TDiagnosticCategory;
}

const DiagnosticCategoryModal: FC<ParamsType> = ({
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
        header={t('settings.diagnosticsCategories.list.add')}
        icon={dailyRevenu}
        closeModal={closeModal}
        isOpen={isOpen}
        size="md"
      >
        <DiagnosticCategoryForm
          defaultValues={data}
          isLoading={isLoading}
          sendRequest={sendRequst}
        />
      </CustomModal>
    </div>
  );
};

export default DiagnosticCategoryModal;
