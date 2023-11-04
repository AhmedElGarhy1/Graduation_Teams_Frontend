import { t } from 'i18next';
import { FC } from 'react';
interface ParamsType {
  error: string | undefined;
}
const ErrorMessage: FC<ParamsType> = ({ error }) => {
  return <div>{error && <span className="text-red-600">{t(error)}</span>}</div>;
};

export default ErrorMessage;
