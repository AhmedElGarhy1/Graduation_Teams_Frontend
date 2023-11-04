import { t } from 'i18next';
import { FC, useState } from 'react';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import diagnostics from '../../../services/api/diagnostics';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TDiagnosticCategory } from '../../../utils/validation/diagnostic';
import { Button } from '../../shared/Button';
import DiagnosticCategoryModal from './DiagnosticCategoryModal';

interface ParamsType {
  data: TDiagnosticCategory;
}

const UpdateDiagnositcCategory: FC<ParamsType> = ({ data }) => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DIAGNOSTIC_CATEGORIES_UPDATE])) return <></>;

  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.DIAGNOSTIC_CATEGORIES],
    (data: TDiagnosticCategory) =>
      diagnostics.category.update(data.id as any, data)
  );

  const onSendRequest = (data: TDiagnosticCategory) => {
    // const newData = makeAppointmentData(data);
    mutate(data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Button size="sm" variant="success" onClick={openModal}>
        {t('update')}
      </Button>

      <DiagnosticCategoryModal
        isOpen={isOpen}
        isLoading={isLoading}
        closeModal={closeModal}
        sendRequst={onSendRequest}
        data={data}
      />
    </div>
  );
};

export default UpdateDiagnositcCategory;
