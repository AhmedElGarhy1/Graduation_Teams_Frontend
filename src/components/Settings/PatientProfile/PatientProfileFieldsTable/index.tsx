import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../../data/constants/permissions';
import useCan from '../../../../hooks/useCan';
import patientProfile from '../../../../services/api/patientProfile';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import { TPatientProfile } from '../../../../utils/validation/patientProfile';
import Table from '../../../shared/Table';
import { columns } from './columns';

const PatientProfileFieldsTable: FC = () => {
  const { t } = useTranslation();
  const { can } = useCan();
  return (
    <Table<TPatientProfile>
      columns={columns}
      queryFn={(page) => patientProfile.getAll(page)}
      queryIds={[REACT_QUERY_IDS.SETTINGS.PATIENT_PROFILE]}
      deleteManyFn={
        can([UserPermissionsEnum.PATIENT_PROFILE_DELETE])
          ? patientProfile.deleteMany
          : undefined
      }
      title={t('settings.insuranceProviders.list.title')}
    />
  );
};

export default PatientProfileFieldsTable;
