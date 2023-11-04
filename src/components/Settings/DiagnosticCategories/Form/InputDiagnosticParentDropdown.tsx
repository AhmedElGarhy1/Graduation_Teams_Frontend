import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useQuery } from 'react-query';
import diagnostics from '../../../../services/api/diagnostics';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import { createConstants } from '../../../../utils';
import DropdownInput from '../../../shared/Form/Inputs/DropdownInput';

interface ParamsType {
  defaultValue: number;
  register: UseFormRegisterReturn;
}

const InputDiagnosticParentDropdown: FC<ParamsType> = (params) => {
  const { data, isLoading } = useQuery({
    queryKey: [REACT_QUERY_IDS.DIAGNOSTICS.DIAGNOSTICS],
    queryFn: () => diagnostics.category.getAll(1, 100),
  });

  return (
    <DropdownInput
      {...params}
      data={
        data
          ? createConstants<(typeof data.data)[0]>(data.data, 'name', 'id')
          : []
      }
      isLoading={isLoading}
      haveNone={true}
    />
  );
};

export default InputDiagnosticParentDropdown;
