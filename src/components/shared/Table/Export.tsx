import {
  faFileCsv,
  faFileExcel,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Export = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8">
      <div className="flex items-center w-fit m-auto ">
        <button className="bg-[#28A9FF] text-[#ffff] w-[172px] h-[30px] m-auto flex items-center justify-center text-[18px] rounded-s-xl font-bold transition-all hover:bg-[#8BCDFE] hover:opacity-[1] hover:text-[#363636]">
          <FontAwesomeIcon className="px-1" icon={faFileCsv} />{' '}
          {t('exportToCSV')}
        </button>
        <button className="bg-[#28A9FF] text-[#ffff] w-[172px] h-[30px] border-l-2 border-r-2 m-auto flex items-center justify-center text-[18px] font-bold transition-all hover:bg-[#8BCDFE] hover:opacity-[1] hover:text-[#363636]">
          <FontAwesomeIcon className="px-1" icon={faFileExcel} />{' '}
          {t('exportToExcel')}
        </button>
        <button className="bg-primary text-[#ffff] w-[100px] h-[30px] m-auto flex items-center justify-center text-[18px] rounded-e-xl font-bold  hover:bg-[#8BCDFE] hover:opacity-[1] hover:text-[#363636]">
          <FontAwesomeIcon className="px-1" icon={faPrint} /> {t('print')}
        </button>
      </div>
    </div>
  );
};

export default Export;
