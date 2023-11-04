import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Column } from 'react-table';
import { PAGE_SIZE } from '../../../data/constants';
import { selectLanguage } from '../../../store/slices/LangSlice';
import BaseTable from './BaseTable';
import Export from './Export';
import HeaderIcons, { ITableHeader } from './HeaderIcons';

interface ParamsType<T extends object> {
  data: T[];
  columns: Column<T>[];
  isLoading: boolean;
  total: number;
  changePage: (n: number) => void;
  setSelectedIds: (ids: number[]) => void;
  title: string;
  settings: ITableHeader;
  colorCondition?: (data: T) => string;
}

function PaginatorTable<T extends object>({
  data,
  columns,
  isLoading,
  total,
  changePage,
  setSelectedIds,
  settings,
  title,
  colorCondition,
}: ParamsType<T>) {
  const language = useSelector(selectLanguage);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(PAGE_SIZE);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    changePage(event.page + 1);
  };

  // if loading
  if (isLoading) {
    return (
      <div className="w-[98%] pt-16 rounded-[35px] overflow-hidden">
        <Skeleton
          baseColor="#28a9ff22"
          count={10}
          height={50}
          className="my-2"
        />
      </div>
    );
  }

  return (
    <>
      <Export />
      <div className="bg-white overflow-hidden rounded-3xl shadow-lg shadow-[#00000029]-[3px 3px 10px]">
        <div className="flex justify-between px-[35px]  bg-white py-4 border-b-2 text-[#676767] text-3xl font-black ">
          <h2>{title}</h2>
          <HeaderIcons {...settings} />
        </div>
        <BaseTable<ElementType<typeof data>>
          data={data}
          columns={columns}
          setSelectedIds={setSelectedIds}
          colorCondition={colorCondition}
        />
      </div>
      <div dir={language === 'ar' ? 'ltr' : 'rtl'}>
        {total > PAGE_SIZE && (
          <Paginator
            first={first}
            rows={rows}
            totalRecords={total}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </>
  );
}

export default PaginatorTable;
