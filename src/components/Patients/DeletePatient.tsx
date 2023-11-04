import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import useCustomMutation from '../../hooks/useCustomMutation';
import patient from '../../services/api/patient';
import REACT_QUERY_IDS from '../../services/react-query-ids';
import { warningAlert } from '../../utils/sweetAlert/warningAlert';
import { Button } from '../shared/Button';

interface ParamsType {
  patientId: number;
}

const DeletePatient: FC<ParamsType> = ({ patientId }) => {
  const { mutate, isLoading } = useCustomMutation(
    [REACT_QUERY_IDS.PATIENTS.PATIENTS],
    patient.deleteOne
  );

  const handleDelete = async () => {
    const isDelete = await warningAlert(
      t('alert.areYouSure'),
      t('alert.xWillBeDeleted', { name: t('patients.patient') })
    );
    if (isDelete) mutate(patientId);
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

export default DeletePatient;
