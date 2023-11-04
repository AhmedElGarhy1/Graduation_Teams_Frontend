import { Skeleton } from '@mui/material';
import { FC } from 'react';
import CustomCard from './Card';

interface ParamsType {
  cards: ICardStatus[];
  isLoading?: boolean;
}

const CardGroup: FC<ParamsType> = ({ cards, isLoading }) => {
  if (isLoading)
    return (
      <div className="flex justify-between flex-wrap gap-x-3 gap-y-0">
        {[...Array(6)].map((_, i) => (
          <Skeleton className="w-[calc(33%-3.3px)]" key={i} height={200} />
        ))}
      </div>
    );

  return (
    <div className="mr-auto lg:grid grid-cols-3 gap-x-10 gap-y-5">
      {cards.map((card, i) => (
        <CustomCard key={i} i={i} card={card} />
      ))}
    </div>
  );
};

export default CardGroup;
