import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Column, useRowSelect, useTable } from 'react-table';
import { CheckBox } from './CheckBox';

interface ParamsType<T> {
  data: T[];
  // @ts-ignore
  columns: Column<T>[];
  setSelectedIds: (ids: number[]) => void;
  colorCondition?: (data: T) => string;
}

function BaseTable<T>({
  data,
  columns,
  setSelectedIds,
  colorCondition,
}: ParamsType<T>) {
  const { t } = useTranslation();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns: columns as readonly Column<object>[],
      data: data as readonly object[],
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'checkedInputs',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="absolute top-[15%] right-[0.5%] ltr:left-[0.5%]">
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <CheckBox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    // @ts-ignore
    setSelectedIds(selectedFlatRows.map((ele) => +ele.original.id));
  }, [selectedFlatRows]);

  return (
    <>
      <table className="border-collapse w-full  mx-auto ">
        <thead className="relative" {...getTableProps()}>
          {headerGroups?.map((headerGroup) => (
            <tr className="text-start " {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <th
                  className="text-start bg-white py-4 border-b-2 text-[#676767] text-2xl "
                  {...column.getHeaderProps()}
                >
                  {typeof column.render('Header') === 'string'
                    ? t(column.render('Header') as string)
                    : column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={`
                  ${
                    (colorCondition && colorCondition(row.original as any)) ||
                    'bg-white'
                  }
                  border-b border-[#eee] h-16
                `}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td className=" text-xl px-2" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BaseTable;
