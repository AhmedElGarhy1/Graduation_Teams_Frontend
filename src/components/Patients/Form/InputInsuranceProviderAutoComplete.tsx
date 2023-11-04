import { FC } from 'react';
import insureanceProvider from '../../../services/api/insureanceProvider';
import REACT_QUERY_IDS from '../../../services/react-query-ids';
import AutoCompleteInput, {
  IAutocompleteInputDecorator,
} from '../../shared/Form/Inputs/AutoComplete/AutoCompleteInput';

const InputInsuraceProviderAutoComplete: FC<IAutocompleteInputDecorator> = (
  props
) => {
  return (
    <AutoCompleteInput
      {...props}
      queryFun={insureanceProvider.getAll}
      queryId={REACT_QUERY_IDS.SETTINGS.INSURANCE_PROVIDERS}
      mustSelect={true}
    />
  );
};

export default InputInsuraceProviderAutoComplete;
