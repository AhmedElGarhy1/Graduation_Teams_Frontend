import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPermissionsEnum } from '../../../data/constants/permissions';
import useCan from '../../../hooks/useCan';
import patient from '../../../services/api/patient';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import { TPatient } from '../../../utils/validation/patient';
import Table from '../../shared/Table';
import { columns } from './columns';

const PatientsTable: FC = () => {
  const { t } = useTranslation();
  const { can } = useCan();
  return (
    <div>
      <>
        <Table<TPatient>
          columns={columns}
          queryFn={(page) => patient.getAll(page)}
          queryIds={[REACT_QUERY_IDS.PATIENTS.PATIENTS]}
          deleteManyFn={
            can([UserPermissionsEnum.PATIENTS_DELETE])
              ? patient.deleteMany
              : undefined
          }
          title={t('patients.title')}
        />
      </>
    </div>
  );
};

export default PatientsTable;
