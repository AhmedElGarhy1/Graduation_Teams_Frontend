import { Tab } from '@mui/material';
import { FC } from 'react';

interface ParamsType {
  id: string;
  'aria-controls': string;
  icon: string;
  label: string;
  iconPosition: 'start' | 'end' | 'bottom' | 'top';
}

const CustomTab: FC<ParamsType> = ({ icon, label, iconPosition, ...rest }) => {
  return (
    <div>
      <Tab
        icon={<img className="w-16" src={icon} />}
        label={label}
        iconPosition={iconPosition}
        {...rest}
        sx={{
          textTransform: 'none',
          fontSize: 32,
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'Lama',
        }}
      />
    </div>
  );
};

export default CustomTab;
