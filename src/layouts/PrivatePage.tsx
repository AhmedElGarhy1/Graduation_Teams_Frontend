import { FC, ReactNode } from 'react';
import { UserPermissionsEnum } from '../data/constants/permissions';
import useCan from '../hooks/useCan';

interface ParamsType {
  permissions: UserPermissionsEnum[];
  children: ReactNode;
}

const PrivatePage: FC<ParamsType> = ({ permissions, children }) => {
  const { can } = useCan();
  if (!can(permissions))
    return `you don't have permission to see this resource`;

  return children;
};

export default PrivatePage;
