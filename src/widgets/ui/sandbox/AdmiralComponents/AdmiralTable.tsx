import { PaginationOne, T, Table, type Column, type TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import type { Appearance } from '../types';
import { useMemo, useState } from 'react';

export interface AdmiralTableProps {
	dimension: Appearance;
	tableGroupActions?: boolean;
	tableRowDrag?: boolean;
	tableZebra?: boolean;
}

type AdmiralTheme = DefaultTheme & { color: Record<string, string> };

const StyledPaginationOne = styled(PaginationOne)`
	margin-top: 16px;
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
	padding: 16px;
	background: ${({ theme }) => (theme as AdmiralTheme).color['Neutral/Neutral 00']};
	border-radius: 16px;
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
		transfer_status: 'Выполнено'
	},
	{
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
		cellAlign: 'right',
		width: 160
	},
	{
		name: 'transfer_status',
		title: 'Статус',
		width: 160
	}
];

const firstSize = (dimension: AdmiralTableProps['dimension']) => {
	switch (dimension) {
		case 's':
			return 10;
		case 'xl':
			return 6;
		case 'm':
		default:
			return 8;
	}
};

export const AdmiralTable = ({
	dimension,
	tableGroupActions,
	tableRowDrag,
	tableZebra
}: AdmiralTableProps) => {
	void tableGroupActions;
	void tableRowDrag;
	void tableZebra;
	const [pageSize, setPageSize] = useState(firstSize(dimension));
	const [page, setPage] = useState(1);
	const [cols, setCols] = useState(columnList);
	const [rows, setRows] = useState(rowList.slice(0, pageSize));

	const pageSizes = [firstSize(dimension), 20, 50, 100, 200];
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
		const beforeIndex = nextRowId
			? tableRows.findIndex((row) => row.id === nextRowId)
			: tableRows.length;
		tableRows.splice(beforeIndex, 0, movedRow);

		setRows(tableRows);
	};

	const handleRowDragEnd = (rowId: string) => {
		const newIndex = rows.findIndex((row) => row.id === rowId);

		console.log('After drag&drop row with id ' + rowId + ' has index ' + newIndex + ' in rowList');
	};

	const leftButtonProps = { 'data-testid': 'pagination-left-button' };
	const rightButtonProps = { 'data-testid': 'pagination-right-button' };

	const tableHeight = useMemo(() => {
		switch (dimension) {
			case 's':
				return 11 * 32;
			case 'xl':
				return 7 * 56;
			case 'm':
			default:
				return 9 * 40;
		}
	}, [dimension]);

	return (
		<Wrapper>
			<Table
				style={{ height: `${tableHeight + 1}px` }}
				dimension={dimension}
				rowList={rows}
				columnList={cols}
				onColumnResize={handleResize}
				rowsDraggable={tableRowDrag}
				onRowDrag={handleRowDrag}
				onRowDragEnd={handleRowDragEnd}
				displayRowSelectionColumn={tableGroupActions}
				onRowSelectionChange={handleSelectionChange}
				greyHeader={tableZebra}
				greyZebraRows={tableZebra}
				showBorders
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
