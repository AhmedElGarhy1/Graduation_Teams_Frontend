import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import diagnostics from '../../../services/api/diagnostics';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TDiagnosticCategory } from '../../../utils/validation/diagnostic';
import AddModalButton from '../../shared/Button/AddModalButton';
import DiagnosticCategoryModal from './DiagnosticCategoryModal';

const AddDiagnosticCategory = () => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DIAGNOSTIC_CATEGORIES_ADD])) return <></>;

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.DIAGNOSTIC_CATEGORIES],
    diagnostics.category.create,
    closeModal
  );

  const onSendRequest = (data: TDiagnosticCategory) => {
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
        title={t('settings.diagnosticsCategories.title')}
        add={t('settings.diagnosticsCategories.list.add')}
        openModal={openModal}
      />

      <DiagnosticCategoryModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={{
          advices: '',
          description: '',
          name: '',
        }}
      />
    </div>
  );
};

export default AddDiagnosticCategory;
