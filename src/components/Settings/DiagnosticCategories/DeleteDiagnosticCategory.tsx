import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import diagnostics from '../../../services/api/diagnostics';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { warningAlert } from '../../../utils/sweetAlert/warningAlert';
import { Button } from '../../shared/Button';

interface ParamsType {
  id: number;
}

const DeleteDiagnostic: FC<ParamsType> = ({ id }) => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.DIAGNOSTIC_CATEGORIES_DELETE])) return <></>;

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.DIAGNOSTIC_CATEGORIES],
    diagnostics.category.deleteOne
  );

  const handleDelete = async () => {
    const isDelete = await warningAlert(
      t('alert.areYouSure'),
      t('alert.xWillBeDeleted', {
        name: t('settings.diagnosticsCategories.diagnosticsCategory'),
      })
    );

    if (isDelete) mutate(id);
  };
  const { t } = useTranslation();

  return (
    <Button
      disabled={isLoading}
      variant="warning"
      size="sm"
      onClick={handleDelete}
    >
      {t('delete')}
    </Button>
  );
};

export default DeleteDiagnostic;
