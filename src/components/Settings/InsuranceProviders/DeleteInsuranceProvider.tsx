import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import useCustomMutation from '../../../hooks/useCustomMutation';
import insureanceProvider from '../../../services/api/insureanceProvider';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { warningAlert } from '../../../utils/sweetAlert/warningAlert';
import { Button } from '../../shared/Button';

interface ParamsType {
  id: number;
}

const DeleteInsuranceProvider: FC<ParamsType> = ({ id }) => {
  const { can } = useCan();
  if (!can([UserPermissionsEnum.INSURANCE_PROVIDER_DELETE])) return <></>;

  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.SETTINGS.SUPPLIERS],
    insureanceProvider.deleteOne
  );

  const handleDelete = async () => {
    const isDelete = await warningAlert(
      t('alert.areYouSure'),
      t('alert.xWillBeDeleted', { name: t('settings.drugs.drug') })
    );
    if (isDelete) mutate(id);
  };
  const { t } = useTranslation();

  return (
    <Button
      disabled={isLoading}
      variant="warning"
      size="icon"
      onClick={handleDelete}
    >
      <FontAwesomeIcon className="transition-all" icon={faTrash} />
    </Button>
  );
};

export default DeleteInsuranceProvider;
