import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';

const Table = ({ data, columns }) => {
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
        <>
          <table className='bg-white rounded'>
            <thead className='bg-gray-200'>
              {tableInstance.getHeaderGroups().map((headerEl) => {
                return (
                  <tr key={headerEl.id}>
                    {headerEl.headers.map((columnEl) => {
                      return (
                        <th key={columnEl.id} colSpan={columnEl.colSpan}>
                          {columnEl.isPlaceholder
                            ? null
                            : flexRender(
                                columnEl.column.columnDef.header,
                                columnEl.getContext()
                              )}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {tableInstance.getRowModel().rows.map((rowEl) => {
                return (
                  <tr key={rowEl.id}>
                    {rowEl.getVisibleCells().map((cellEl) => {
                      return (
                        <td key={cellEl.id}>
                          {flexRender(
                            cellEl.column.columnDef.cell,
                            cellEl.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          <div className='bg-white flex gap-x-4'>
            <button
              onClick={() => tableInstance.setPageIndex(0)}
              disabled={!tableInstance.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              onClick={() => tableInstance.previousPage()}
              disabled={!tableInstance.getCanPreviousPage()}
            >
              Previous
            </button>
            <button
              onClick={() => tableInstance.nextPage()}
              disabled={!tableInstance.getCanNextPage()}
            >
              Next
            </button>
            <button
              onClick={() =>
                tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
              }
              disabled={!tableInstance.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <div>
              Showing {tableInstance.options.state.pagination.pageIndex + 1} of
              { tableInstance.getPageCount()}
          </div>
        </>
      );
    };

export default Table;