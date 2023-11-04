import { FC } from 'react';
import supplier from '../../../../services/api/supplier';
import REACT_QUERY_IDS from '../../../../services/react-query-ids';
import AutoCompleteInput, {
  IAutocompleteInputDecorator,
} from '../../../shared/Form/Inputs/AutoComplete/AutoCompleteInput';

const InputSupplierAutoComplete: FC<IAutocompleteInputDecorator> = (props) => {
  return (
    <AutoCompleteInput
      {...props}
      queryFun={supplier.getAll}
      queryId={REACT_QUERY_IDS.SETTINGS.SUPPLIERS}
      mustSelect={true}
    />
  );
};

export default InputSupplierAutoComplete;
