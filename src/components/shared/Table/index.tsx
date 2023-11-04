import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Column } from 'react-table';
import useCustomMutation from '../../../hooks/useCustomMutation';
import { getFirstTableNumber, getLastTableNumber } from '../../../utils';
import PaginatorTable from './PaginatorTable';

interface ITable<T extends object> {
  queryIds: any[];
  queryFn: (page: number) => Promise<TApiResponse<T[]>>;
  deleteManyFn?: (ids: number[]) => Promise<any>;
  title: string;
  columns: Column<T>[];
  colorCondition?: (data: T) => string;
}

function Table<T extends object>({
  columns,
  queryIds,
  queryFn,
  deleteManyFn,
  title,
  colorCondition,
}: ITable<T>) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  const [visableDelete, setVisableDelete] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const { isLoading, data, isPreviousData, refetch, isRefetching } = useQuery({
    queryKey: [...(queryIds || []), page],
    queryFn: () => queryFn(page),
  });

  const total = data?.meta?.total || 0;

  const memoColumns = useMemo(
    () => columns,
    [data, selectedIds.length <= 0, visableDelete]
  );

  if (deleteManyFn) {
    const { mutate } = useCustomMutation(
      [...(queryIds || []), page],
      deleteManyFn
    );
    useEffect(() => {
      setVisableDelete(selectedIds.length > 0);
    }, [selectedIds.length <= 0]);

    useEffect(() => {
      if (clicked) {
        mutate(selectedIds);
      }
    }, [clicked]);
  }

  const _data = data?.data || [];

  return (
    <div>
      <PaginatorTable<ElementType<typeof _data>>
        columns={memoColumns}
        data={_data}
        isLoading={isLoading || isPreviousData}
        total={total}
        changePage={setPage}
        setSelectedIds={setSelectedIds}
        title={title}
        colorCondition={colorCondition}
        settings={{
          total,
          start: getFirstTableNumber(page),
          end: getLastTableNumber(page, total),
          refetch,
          isRefetching,
          visableDelete,
          handleOnClick: () => setClicked((p) => !p),
        }}
      />
    </div>
  );
}

export default Table;
