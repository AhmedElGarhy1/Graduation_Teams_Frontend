import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  TDiagnosticCategory,
  diagnosticCategorySchema,
} from '../../../../utils/validation/diagnostic';
import AddButton from '../../../shared/Button/AddButton';
import CustomInput from '../../../shared/Form/Inputs/CustomInput';
import TextArea from '../../../shared/Form/Inputs/TextArea';
import TextInput from '../../../shared/Form/Inputs/TextInput';
import InputDiagnosticParentDropdown from './InputDiagnosticParentDropdown';

interface ParamsType {
  sendRequest: (data: TDiagnosticCategory) => void;
  isLoading: boolean;
  defaultValues?: TDiagnosticCategory;
}

const DiagnosticCategoryForm: FC<ParamsType> = ({
  defaultValues,
  sendRequest,
  isLoading,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TDiagnosticCategory>({
    resolver: zodResolver(diagnosticCategorySchema),
    defaultValues: defaultValues,
    mode: 'all',
  });

  const { t } = useTranslation();

  const submitRequest = async (data: TDiagnosticCategory) => {
    sendRequest(data);
  };

  return (
    <div className="mx-[70px] ">
      <form onSubmit={handleSubmit((d) => submitRequest(d))} noValidate>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <CustomInput name={t('name')} error={errors.name?.message}>
              <TextInput register={register('name')} />
            </CustomInput>
            <CustomInput
              name={t('settings.diagnosticsCategories.list.subCategory')}
              error={errors?.parent_id?.message}
            >
              <InputDiagnosticParentDropdown
                register={register('parent_id')}
                defaultValue={defaultValues?.parent_id as number}
              />
            </CustomInput>
          </div>
          <div className=" flex gap-4 mb-14">
            <CustomInput
              error={errors.description?.message}
              name={t('description')}
            >
              <TextArea register={register('description')} rows={3} />
            </CustomInput>
            <CustomInput error={errors.advices?.message} name={t('advice')}>
              <TextArea register={register('advices')} rows={3} />
            </CustomInput>
          </div>
        </div>
        <AddButton disabled={isLoading} isUpdate={!!defaultValues?.id} />
      </form>
    </div>
  );
};

export default DiagnosticCategoryForm;
