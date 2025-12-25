import * as React from 'react';

import {
		GroupActionsPane,
		PaginationOne,
		PaneSeparator,
		T,
		Table,
		TextButton,
		type Column,
		type TableRow
	} from '@admiral-ds/react-ui';
import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import type { Appearance } from '../types';

export interface AdmiralTableProps {
	dimension: Appearance;
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
`;

type RowData = TableRow & {
	transfer_type: string;
	transfer_date: string;
	transfer_amount: React.ReactNode;
	transfer_status?: string;
};

const numberFormatter = new Intl.NumberFormat();

const rowList: RowData[] = [
	{
		id: '0001',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0002',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'В ожиданиии'
	},
	{
		id: '0003',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(12_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0004',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(55_500_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0005',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(180_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0006',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(500_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0007',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(189_000_000)}</T>
			</AmountCell>
		),
		transfer_status: 'В ожиданиии'
	},
	{
		id: '0008',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(6_000)}</T>
			</AmountCell>
		),
		transfer_status: 'Выполнено'
	},
	{
		id: '0009',
		transfer_type: 'МНО',
		transfer_date: new Date('2020-08-06').toLocaleDateString(),
		transfer_amount: (
			<AmountCell>
				<T font="Body/Body 2 Short">{numberFormatter.format(10_000)}</T>
			</AmountCell>
		),
		transfer_status: 'В ожиданиии'
	}
];

const columnList: Column[] = [
	{
		name: 'transfer_type',
		title: 'Тип сделки',
		width: 140
	},
	{
		name: 'transfer_date',
		title: 'Дата сделки',
		width: 140
	},
	{
		name: 'transfer_amount',
		title: 'Сумма',
		width: 160
	},
	{
		name: 'transfer_status',
		title: 'Статус',
		width: 160
	}
];

export const AdmiralTable = ({ dimension }: AdmiralTableProps) => {
	const [cols, setCols] = React.useState(columnList);
	const [rows, setRows] = React.useState(rowList);

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
		const beforeIndex = nextRowId
			? tableRows.findIndex((row) => row.id === nextRowId)
			: tableRows.length;
		tableRows.splice(beforeIndex, 0, movedRow);

		setRows(tableRows);
	};

	const handleRowDragEnd = (rowId: string) => {
		const newIndex = rows.findIndex((row) => row.id === rowId);
		// eslint-disable-next-line no-console
		console.log('After drag&drop row with id ' + rowId + ' has index ' + newIndex + ' in rowList');
	};
	const [pageSize, setPageSize] = React.useState(8);
	const [page, setPage] = React.useState(1);
	const pageSizes = [8, 20, 50, 100, 200];
	const totalElements = 100;

	const leftButtonProps = { 'data-testid': 'pagination-left-button' };
	const rightButtonProps = { 'data-testid': 'pagination-right-button' };

	return (
		<Wrapper>
			<GroupActionsPane>
				<TextButton text={'Action 1'} />
				<TextButton text={'Action 2'} />
				<TextButton text={'Action 3'} />
				<PaneSeparator />
				<TextButton text={'Action 4'} />
			</GroupActionsPane>
			<Table
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
