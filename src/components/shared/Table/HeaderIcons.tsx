import {
  faArrowsRotate,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';

export interface ITableHeader {
  start: number;
  end: number;
  total: number;
  refetch: () => Promise<any>;
  isRefetching?: boolean;
  handleOnClick: () => void;
  visableDelete: boolean;
}

const HeaderIcons: FC<ITableHeader> = ({
  start,
  end,
  total,
  refetch,
  isRefetching = false,
  handleOnClick,
  visableDelete,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-end">
      {visableDelete && (
        <Button onClick={handleOnClick} size="sm" variant="warning">
          Delete Selected
        </Button>
      )}
      <div>
        <span className="px-4 text-[#B0B0B0] text-xl">
          {start} - {end} {t('from')} {total}
        </span>

        <FontAwesomeIcon
          className={`px-4  cursor-pointer text-[#B0B0B0] text-xl 
        ${isRefetching ? 'animate-spin text-primary' : ''}
        `}
          icon={faArrowsRotate}
          onClick={refetch}
        />
        <FontAwesomeIcon
          className="pr-4 cursor-pointer text-[#B0B0B0] text-xl"
          icon={faEllipsisVertical}
        />
      </div>
    </div>
  );
};

export default HeaderIcons;
