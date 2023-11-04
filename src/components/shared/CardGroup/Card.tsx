import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithCommas } from '../../../utils';

interface ParamsType {
  card: ICardStatus;
  i: number;
}

const CustomCard: FC<ParamsType> = ({ card, i }) => {
  const { t } = useTranslation();

  return (
    <div className=" card  flex flex-nowrap justify-between items-center px-3 rounded-[33px] bg-white">
      <div className="card-body pr-4 py-3 ltr:px-4">
        <h1
          className={`text-[#676767] ${
            i === 5 ? 'text-[24px]' : 'text-[32px]'
          } font-black mb-3`}
        >
          {t(card.name)}
        </h1>
        <p className="text-[#363636] text-3xl font-black">
          {numberWithCommas(card.total)}
        </p>
      </div>
      <div className="card-icon py-3 px-4">
        <img src={card.icon} className="w-[82px] h-[82px] " alt="book" />
      </div>
    </div>
  );
};

export default CustomCard;
