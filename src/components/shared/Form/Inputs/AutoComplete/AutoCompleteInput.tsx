import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autocomplete, TextField, Tooltip } from '@mui/material';
import { FC, FocusEvent, FormEvent, useEffect, useState } from 'react';
import useSearchQuery from '../../../../../hooks/useSearchQuery';

export interface IAutocompleteInputDecorator {
  setValue: (v: number) => void;
  value: number;
  defaultName?: string;
  setRecord?: (v: any) => void;
  setName?: (n: string) => void;
  name?: string;
}

export interface IAutoCompleteParams extends IAutocompleteInputDecorator {
  queryId: any;
  queryFun: (...args: any) => Promise<any>;
  targetName?: string;
  targetId?: string;
  mustSelect?: boolean;
}

const AutoCompleteInput: FC<IAutoCompleteParams> = ({
  setValue,
  queryId,
  queryFun,
  defaultName,
  value,
  setRecord,
  mustSelect = true,
  targetName = 'name',
  targetId = 'id',
  setName,
  name,
}) => {
  const [internalName, setInternalName] = useState<string>(
    name || defaultName || ''
  );

  const defaultObject: TConstantType<number> = { value, _name: internalName };
  const { suggestions, isLoading } = useSearchQuery(
    queryId,
    queryFun,
    internalName || '',
    targetName,
    targetId
  );

  useEffect(() => {
    // @ts-ignore
    handleOnInputChange({ target: { value: internalName } });
  }, [suggestions]);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    let record = suggestions.find(({ _name }) => _name === event.target.value);
    // if (record) {
    //   handleOnSelect('', record);
    // }
    if (mustSelect && !record) {
      updateName(defaultName || '');
    }
  };

  useEffect(() => {
    updateName(name || internalName);
  }, [name]);

  const handleOnSelect = (_: any, value: any) => {
    setValue(value?.value);
    if (setRecord) setRecord(value);
    handleOnInputChange({ target: { value: value?._name } } as any);
  };

  const handleOnInput = (e: FormEvent<HTMLDivElement>) => {
    setValue(null as any);
    handleOnInputChange(e);
  };

  const handleOnInputChange = (e: FormEvent<HTMLDivElement>) => {
    // @ts-ignore
    const v = e.target.value;

    updateName(v);
  };

  const updateName = (n: string) => {
    setInternalName(n);
    setName && setName(n);
  };

  return (
    <div className="relative">
      {internalName && !mustSelect && !value && (
        <Tooltip title="New (will be added)">
          <FontAwesomeIcon
            className="absolute rtl:left-4 ltr:righ-4 text-gray-400 text-xl top-[105%]"
            icon={faPlus}
          />
        </Tooltip>
      )}
      <Autocomplete
        loading={isLoading}
        freeSolo
        className="custom-input"
        autoComplete={!mustSelect}
        onChange={handleOnSelect}
        onInput={handleOnInput}
        onBlur={handleOnBlur}
        value={defaultObject}
        options={suggestions}
        // @ts-ignore
        getOptionLabel={(option) => option._name || ''}
        renderInput={(params) => <TextField {...params} />}
        renderOption={(props, option, index) => {
          const key = `listItem-${index}-${option.value}`;
          return (
            <li {...props} key={key}>
              {option._name}
            </li>
          );
        }}
        clearIcon={false}
        sx={{
          padding: 0,
          zIndex: 888,
        }}
        disablePortal={true}
      />
    </div>
  );
};

export default AutoCompleteInput;
