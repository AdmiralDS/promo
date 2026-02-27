import * as React from 'react';

import {
  Button,
  GroupActionsPane,
  PaginationOne,
  PaneSeparator,
  T,
  Table,
  TextButton,
  typography,
  type Column,
  type PaneColumn,
  type PaneMenuProps,
  type TableRow,
} from '@admiral-ds/react-ui';
import { SystemDeleteOutline, SystemEditOutline } from '@admiral-ds/icons';
import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import type { Appearance } from '../types';
import { useState } from 'react';

export interface AdmiralTableProps {
  dimension: Appearance;
  tableGroupActions?: boolean;
  tableRowDrag?: boolean;
  tableZebra?: boolean;
}

type AdmiralTheme = DefaultTheme & { color: Record<string, string> };

const StyledPaginationOne = styled(PaginationOne)`
  background: ${({ theme }) => (theme as AdmiralTheme).color['Neutral/Neutral 00']};
`;

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: right;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 20px;
  background: ${({ theme }) => (theme as AdmiralTheme).color['Neutral/Neutral 00']};
`;

const SettingsMenu = styled.div`
  width: 320px;
  padding: 20px;
  ${typography['Body/Body 2 Long']}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

type Data = {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  transfer_status?: string;
};

const numberFormatter = new Intl.NumberFormat();

const dataList: Data[] = [
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(12_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(55_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(180_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(189_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(6_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(10_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
];

type RowData = TableRow & Data;

const array = new Array(256).fill({});

const getRndInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rowList: RowData[] = array.map((_, index) => {
  return { id: String(index).padStart(4, '0'), ...dataList[getRndInteger(0, 8)] };
});

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 140,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 140,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 160,
  },
  {
    name: 'transfer_status',
    title: 'Статус',
    width: 160,
  },
];

const columns: PaneColumn[] = [
  { id: 'transfer_type', title: 'Тип сделки', visible: true },
  { id: 'transfer_date', title: 'Дата сделки', visible: true },
  { id: 'transfer_amount', title: 'Сумма', visible: true },
  { id: 'transfer_status', title: 'Статус', visible: true },
];

export const AdmiralTable = ({ dimension, tableGroupActions, tableRowDrag, tableZebra }: AdmiralTableProps) => {
  void tableGroupActions;
  void tableRowDrag;
  void tableZebra;
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const [cols, setCols] = React.useState(columnList);
  const [rows, setRows] = React.useState(rowList.slice(0, pageSize));

  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 256;

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleSelectionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleRowDrag = (rowId: string, nextRowId: string | null) => {
    // меняем строки местами
    const tableRows = [...rows];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    setRows(tableRows);
  };

  const handleRowDragEnd = (rowId: string) => {
    const newIndex = rows.findIndex((row) => row.id === rowId);

    console.log('After drag&drop row with id ' + rowId + ' has index ' + newIndex + ' in rowList');
  };

  const leftButtonProps = { 'data-testid': 'pagination-left-button' };
  const rightButtonProps = { 'data-testid': 'pagination-right-button' };

  const [columnsVisibility, setColumnsVisibility] = useState(columns);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchEnter = () => {
    console.log('Search input opened');
  };

  const handleSearchLeave = () => {
    console.log('Search input left');
  };

  const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => (
    <SettingsMenu>
      Здесь могут быть опции с настройками и кнопки для применения/сбрасывания настроек
      <ButtonWrapper>
        <Button dimension="s" onClick={closeMenu}>
          Сохранить
        </Button>
        <Button dimension="s" onClick={closeMenu}>
          Очистить
        </Button>
      </ButtonWrapper>
    </SettingsMenu>
  );

  return (
    <Wrapper>
      <GroupActionsPane
        searchValue={searchValue}
        onChangeSearchValue={handleChangeSearchValue}
        columns={columnsVisibility}
        onColumnsChange={setColumnsVisibility}
        onSearchEnter={handleSearchEnter}
        onSearchLeave={handleSearchLeave}
        columnsButtonDropContainerStyle={{
          dropContainerClassName: 'columnsButtonDropContainerClass',
        }}
        settingsButtonDropContainerStyle={{
          dropContainerClassName: 'settingsButtonDropContainerClass',
        }}
        renderSettingsMenu={renderSettingsMenu}
      >
        <TextButton text={'Редактировать'} iconStart={<SystemEditOutline />} />
        <TextButton text={'Удалить'} iconStart={<SystemDeleteOutline />} />
        <PaneSeparator />
        <TextButton text={'Отменить (2)'} />
      </GroupActionsPane>
      <Table
        style={{ height: '360px' }}
        dimension={dimension}
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        rowsDraggable
        onRowDrag={handleRowDrag}
        onRowDragEnd={handleRowDragEnd}
        displayRowSelectionColumn
        onRowSelectionChange={handleSelectionChange}
      />
      <StyledPaginationOne
        onChange={({ page, pageSize }) => {
          const currentCountRow = (page - 1) * pageSize;
          setRows(rowList.slice(currentCountRow, currentCountRow + pageSize));

          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
        pageSizeDropContainerStyle={{ dropContainerClassName: 'pageSizeDropContainerClass' }}
        pageNumberDropContainerStyle={{ dropContainerClassName: 'pageNumberDropContainerClass' }}
        leftButtonPropsConfig={() => leftButtonProps}
        rightButtonPropsConfig={() => rightButtonProps}
      />
    </Wrapper>
  );
};
